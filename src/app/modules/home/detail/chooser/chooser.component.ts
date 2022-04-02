import {
  Component,
  ElementRef,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import { ParserService } from '../../../../services/parser.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { translatorsSelectors } from '../selectors';
import { catchError, EMPTY, finalize, fromEvent, Observable, of, Subscription, switchMap, tap, throwError } from 'rxjs';
import { KEY_EVENTS } from '../../../../constants/key-events.const';
import { HttpClient } from '@angular/common/http';
import { PlayerComponent } from '../../player/player.component';

@Component({
  selector: 'app-chooser',
  templateUrl: './chooser.component.html',
  styleUrls: ['./chooser.component.scss']
})
export class ChooserComponent implements OnInit, OnDestroy {
  @ViewChildren("episode") episodeItems: QueryList<ElementRef> | undefined;
  @ViewChild("episodeContainer") container: ElementRef | undefined;

  translations: {
    name: string,
    id: number | string,
    active: boolean,
    focusActive: boolean;
  }[] = [];

  seasons: {
    id: number;
    name: string;
    active: boolean;
    focusActive: boolean;
  }[] = [];

  episodes: {
    id: number;
    name: string;
    active: boolean;
    focusActive: boolean;
    season: number
  }[] = [];

  activeTab: any;

  private allEpisodes: {
    id: number;
    name: string;
    active: boolean;
    focusActive: boolean;
    season: number
  }[] = [];

  // @ts-ignore
  private keysSubscription: Subscription = undefined;

  get activeSeason(): number | undefined {
    return this.seasons.find((item) => item.active)?.id;
  }

  constructor(@Inject(MAT_DIALOG_DATA) public data: {page: HTMLElement, id: number},
              public dialog: MatDialog,
              private http: HttpClient) {}

  ngAfterViewInit() {
    this.subscribeToEvents();
  }

  ngOnInit(): void {
    this.init(this.data.page);
  }

  ngOnDestroy(): void {
    this.keysSubscription?.unsubscribe();
  }

  private subscribeToEvents() {
    this.keysSubscription = fromEvent<KeyboardEvent>(document, 'keydown').pipe(
      tap((event) => {
        // @ts-ignore
        const activeIndex = this.activeTab.findIndex((item) => item.focusActive);
        if (event.keyCode === KEY_EVENTS.down) {
          if (activeIndex === this.activeTab.length - 1) {
            return;
          }

          this.activeTab[activeIndex].focusActive = false;
          this.activeTab[activeIndex + 1].focusActive = true;
          if (this.activeTab === this.episodes) {
            const currentElement = this.episodeItems?.get(activeIndex + 1)?.nativeElement;
            const bounding = currentElement.getBoundingClientRect();
            const containerBounding = this.container?.nativeElement.getBoundingClientRect();
            if (currentElement.offsetTop + bounding.height  > containerBounding.height) {
              // @ts-ignore
              this.container?.nativeElement.scrollTop = currentElement.offsetTop + bounding.height - containerBounding.height;
            }
          }
        } else if (event.keyCode === KEY_EVENTS.up) {
          if(activeIndex === 0) {
            return;
          }
          this.activeTab[activeIndex].focusActive = false;
          this.activeTab[activeIndex - 1].focusActive = true;
          if (this.activeTab === this.episodes) {
            const currentElement = this.episodeItems?.get(activeIndex - 1)?.nativeElement;
            const bounding = currentElement.getBoundingClientRect();
            if (bounding.top < 0) {
              // @ts-ignore
              this.container?.nativeElement.scrollTop += bounding.top - this.container?.nativeElement.offsetTop;
            }
          }
        } else if (event.keyCode === KEY_EVENTS.right) {
          if (this.activeTab === this.translations && this.seasons.length) {
            this.activeTab = this.seasons;
            const active = this.translations.findIndex((item) => item.active);
            this.translations[activeIndex].focusActive = false;
            this.translations[active].focusActive = true;
          } else if (this.activeTab === this.seasons && this.episodes.length) {
            this.activeTab = this.episodes;
            const active = this.seasons.findIndex((item) => item.active);
            this.seasons[activeIndex].focusActive = false;
            this.seasons[active].focusActive = true;
          }
        } else if(event.keyCode === KEY_EVENTS.left) {
          if (this.activeTab === this.episodes) {
            this.activeTab = this.seasons;
            const active = this.episodes.findIndex((item) => item.active);
            this.episodes[activeIndex].focusActive = false;
            this.episodes[active].focusActive = true;
          } else if (this.activeTab === this.seasons) {
            const active = this.seasons.findIndex((item) => item.active);
            this.seasons[activeIndex].focusActive = false;
            this.seasons[active].focusActive = true;
            this.activeTab = this.translations;
          }
        } else if (event.keyCode === KEY_EVENTS.enter) {
          if (this.activeTab === this.seasons) {

            const focusedSeasonIndex = this.seasons.findIndex((item) => item.focusActive);
            const activeSeasonIndex = this.seasons.findIndex((item) => item.active);
            if (focusedSeasonIndex !== activeSeasonIndex) {
              this.episodes = this.allEpisodes.filter((episode) => episode.season === this.seasons[focusedSeasonIndex].id);
              this.episodes[0].active = true;
              this.episodes[0].focusActive = true;
              this.seasons[activeSeasonIndex].active = false;
              this.seasons[activeSeasonIndex].focusActive = false;
              this.seasons[focusedSeasonIndex].active = true;
            }
            return;
          }
          else if (this.activeTab === this.episodes) {
            const active = this.episodes.findIndex((item) => item.active);
            this.episodes[active].active = false;
            this.episodes[activeIndex].active = true;
            this.keysSubscription?.unsubscribe();

            this.getEpisode().pipe(
              switchMap((res) => {
                const dialogRef = this.dialog.open(PlayerComponent, {
                  data: {
                    url: res.url,
                  },
                  height: '100%',
                  width: '100%',
                  maxHeight: '100%',
                  maxWidth: '100%',
                  panelClass: 'playerjs'
                });

                return dialogRef.afterClosed();
              }),
              catchError((err) => {
                console.error(err);
                return EMPTY;
              }),
              finalize(() => this.subscribeToEvents())
            ).subscribe();
            return;
          }
          this.getTranslatorSeries().pipe(
            tap((res) => {
              console.log(res);
            }),
            catchError((err) => {
              console.error(err);
              return EMPTY;
            })
          ).subscribe()
        } else if (event.keyCode === KEY_EVENTS.back) {
          this.dialog.closeAll();
        }
      })
    ).subscribe();
  }

  private init(page: HTMLElement): void {
    const translationsContainer = page.querySelector(translatorsSelectors.container);

    const translations = translationsContainer?.querySelectorAll<HTMLElement>(translatorsSelectors.item);

    // @ts-ignore
    const translators: {
      name: string,
      id: number | string,
      active: boolean,
      focusActive: boolean;
    }[] = [];
    translations?.forEach((item) => {
      const image = item.querySelector<HTMLImageElement>('img');
      translators.push({
        name: item.innerText + (image ? ' ' + image.alt : ''),
        id: item.dataset['translator_id'] as string,
        active: item.classList.contains('active'),
        focusActive: item.classList.contains('active')
      });
    });

    this.translations = translators;

    this.activeTab = this.translations;
  }

  /*
  * id: 1984
translator_id: 1
favs: 1985d6db-5c48-4b92-a4d3-f4fe864ce4bc
action: get_episodes
  * */
  getTranslatorSeries(): Observable<any> {
    const formData = new FormData();
    this.seasons = [];
    this.allEpisodes = [];
    this.episodes = [];
    const focusedItemIndex = this.translations.findIndex((item) => item.focusActive);
    formData.append('id', this.data.id.toString());
    formData.append('action', 'get_episodes');
    formData.append('translator_id', (this.translations[focusedItemIndex]?.id as string));
    return this.http.post('https://rezka.ag/ajax/get_cdn_series/?t' + Date.now(), formData).pipe(
      switchMap((res: any) => {
        if (!res.success) {
          return throwError(() => 'No success')
        }

        const div = document.createElement('div');
        div.innerHTML = res.seasons;
        const seasons = div.querySelectorAll('li');
        seasons.forEach((season) => {
          this.seasons.push({
            id: Number(season.dataset['tab_id']),
            name: season.innerText,
            active: season.classList.contains('active'),
            focusActive: season.classList.contains('active')
          })
        });

        const activeItemIndex = this.translations.findIndex((item) => item.active);
        this.translations[activeItemIndex].active = false;
        this.translations[focusedItemIndex].active = true;

        const episodesDiv = document.createElement('div');
        episodesDiv.innerHTML = res.episodes;
        const episodes = episodesDiv.querySelectorAll('li');
        episodes.forEach((item) => {
          this.allEpisodes.push({
            id: Number(item.dataset['episode_id']),
            name: item.innerText,
            active: item.classList.contains('active'),
            focusActive: item.classList.contains('active'),
            season: Number(item.dataset['season_id'])
          });
        });
        const activeSeason = this.seasons.find((item) => item.active);

        this.episodes = this.allEpisodes.filter((item) => item.season === activeSeason?.id);

        return  EMPTY;
      })
    )
    //?t=1646756111898
  }
/*
  *https://rezka.ag/ajax/get_cdn_series/?t=1646764994346
  id: 646
translator_id: 56
season: 5
episode: 2
favs: 92fddbe7-6011-41e5-9a60-77b59441656c
action: get_stream
 */
  getEpisode(): Observable<any> {
    const formData = new FormData();
    formData.append('id', this.data.id.toString());
    formData.append('translator_id', (this.translations.find((item) => item.active)?.id as string));
    formData.append('season', (this.seasons.find((item) => item.active)?.id.toString() as string));
    formData.append('episode', (this.episodes.find((item) => item.active)?.id.toString() as string));
    formData.append('action', 'get_stream');

    return this.http.post('https://rezka.ag/ajax/get_cdn_series/?t=' + Date.now(), formData);
  }
}
