import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ParserService } from '../../../services/parser.service';
import { EMPTY, fromEvent, Subscription, switchMap, tap } from 'rxjs';
import { DetailItemInterface } from '../../../interfaces/detail-item.interface';
import { detailSelectors } from './selectors';
import { MatDialog } from '@angular/material/dialog';
import { KEY_EVENTS } from '../../../constants/key-events.const';
import { ChooserComponent } from './chooser/chooser.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  item: DetailItemInterface | undefined = undefined;
  loading: boolean = false;
  // @ts-ignore
  eventsSubscription: Subscription;
  // @ts-ignore
  page: HTMLElement

  constructor(private router: Router,
              private activeRouter: ActivatedRoute,
              private parserService: ParserService,
              public dialog: MatDialog) {
    this.listenForEvents();
  }

  ngOnInit(): void {
    this.activeRouter.queryParams
      .subscribe(params => {
        console.log(params); // { order: "popular" }
        this.init(params['url']);
      })
  }

  private init(url: string): void {
    this.parserService.parse('https://rezka.ag' + url).pipe(
      tap((res) => {
        this.initItem(res as HTMLElement)
      })
    ).subscribe()
  }

  private initItem(res: HTMLElement) {
    this.page = res;
    const item: DetailItemInterface = {};

    item.title = res.querySelector<HTMLElement>(detailSelectors.detailTitle)?.innerText;
    item.originalTitle = res.querySelector<HTMLElement>(detailSelectors.detailOriginalTitle)?.innerText;
    item.info = res.querySelector<HTMLElement>(detailSelectors.detailInfo)?.innerHTML;
    item.image = res.querySelector<HTMLImageElement>(detailSelectors.detailImage)?.src;
    item.descriptionTitle = res.querySelector<HTMLElement>(detailSelectors.detailDescriptionTitle)?.innerText;
    item.descriptionText = res.querySelector<HTMLElement>(detailSelectors.detailDescriptionText)?.innerText;

    this.item = item;
  }

  private listenForEvents(): void {
    this.eventsSubscription = fromEvent<KeyboardEvent>(document, 'keydown').pipe(
      switchMap((event) => {
        if (event.keyCode === KEY_EVENTS.enter) {
          const dialogRef = this.dialog.open(ChooserComponent, {
            data: {
              page: this.page
            }
          });
          this.eventsSubscription.unsubscribe();
          dialogRef.afterClosed().subscribe(result => {
            this.listenForEvents();
          });
        } else if (event.keyCode === KEY_EVENTS.back) {
          this.eventsSubscription.unsubscribe();
          this.router.navigate(['/']);
        }

        return EMPTY;
      })
    ).subscribe();
  }

}
