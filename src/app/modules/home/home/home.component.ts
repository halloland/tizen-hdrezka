import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ParserService } from '../../../services/parser.service';
import {catchError, EMPTY, fromEvent, mapTo, Subscription, switchMap, tap, timer} from 'rxjs';
import { topSliderSelectors } from './selectors';
import { getResourceTypeByElement } from '../../../helpers/parser.helper';
import { ResourceItem } from '../../../interfaces/resource-item.interface';
import { KEY_EVENTS } from '../../../constants/key-events.const';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loading = false;
  list: ResourceItem[] = [];

  @ViewChild("container") container: ElementRef | undefined;
  @ViewChildren("sliderItem") sliderItems: QueryList<ElementRef> | undefined;

  // @ts-ignore
  private eventsSubscription: Subscription;

  constructor(private parserService: ParserService,
              private router: Router) {
    this.init();

  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.listenForEvents();
  }

  private init(): void {
    this.loading = true;
    this.parserService.parse('https://rezka.ag').pipe(
      switchMap((res) => {
        return timer(100).pipe(
          mapTo(res)
        )
      }),
      tap((res) => this.loading = false),
      tap((dom) => this.parseTopList(dom as HTMLHtmlElement)),
      catchError((err) => {
        return EMPTY;
      })
    ).subscribe();
  }

  private parseTopList(domElement: HTMLElement): void {
    const sliderHolder = domElement.querySelector(topSliderSelectors.container);
    const list = sliderHolder?.querySelectorAll<HTMLElement>(topSliderSelectors.item);

    const items: ResourceItem[] = [];
    if(!list) {
      // todo show error
      return;
    }

    list.forEach((item) => {
      items.push({
        title: item.querySelector<HTMLElement>(topSliderSelectors.title)?.innerText,
        image: item.querySelector<HTMLImageElement>(topSliderSelectors.img)?.src,
        type: getResourceTypeByElement(item),
        info: item.querySelector<HTMLElement>(topSliderSelectors.info)?.innerText,
        active: false,
        url: item.dataset['url']
      })
    });

    this.list = items;
    this.list[0].active = true;
  }

  private listenForEvents(): void {
    this.eventsSubscription = fromEvent<KeyboardEvent>(document, 'keydown').pipe(
      tap((event) => {
        console.log('event', event);
        if (event.keyCode === KEY_EVENTS.right) {
          this.next();
        } else if (event.keyCode === KEY_EVENTS.left) {
          this.prev();
        } else if (event.keyCode === KEY_EVENTS.enter) {
          this.enter();
        }
      })
    ).subscribe();
  }

  private next(): void {
    const currentActive = this.list.findIndex((item) => item.active);

    if (this.list.length - 1 === currentActive) {
      return;
    }

    this.list[currentActive].active = false;
    this.list[currentActive + 1].active = true;
    const currentElement = this.sliderItems?.get(currentActive + 1)?.nativeElement;

    const parentWidth = this.container?.nativeElement.getBoundingClientRect().width;
    const elementBounding = currentElement?.getBoundingClientRect();

    // @ts-ignore
    if (elementBounding?.width + currentElement.offsetLeft > parentWidth) {
      console.log(this.container?.nativeElement);
      // @ts-ignore
      this.container?.nativeElement.scrollLeft = elementBounding?.width + currentElement.offsetLeft - parentWidth;
    }
  }

  private prev(): void {
    const currentActive = this.list.findIndex((item) => item.active);

    if (currentActive === 0) {
      return;
    }

    this.list[currentActive].active = false;
    this.list[currentActive - 1].active = true;

    const currentElement = this.sliderItems?.get(currentActive -1)?.nativeElement;
    const elementBounding = currentElement?.getBoundingClientRect();

    if (elementBounding.left < 0) {
      // @ts-ignore
      this.container?.nativeElement.scrollLeft += elementBounding.left;
    }
  }

  private enter() {
    const active = this.list.find((item) => item.active);
    this.router.navigate([`/detail`], {
      queryParams: {
        url: active?.url
      }
    });

    this.eventsSubscription?.unsubscribe();
  }
}
