import { Component, Inject, Input, OnInit } from '@angular/core';
import { ParserService } from '../../../../services/parser.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { translatorsSelectors } from '../selectors';

@Component({
  selector: 'app-chooser',
  templateUrl: './chooser.component.html',
  styleUrls: ['./chooser.component.scss']
})
export class ChooserComponent implements OnInit {
  translations: {
    name: string,
    id: number | string
  }[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: {page: HTMLElement},
              public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log('page', this.data)
    this.init(this.data.page);
  }

  private init(page: HTMLElement): void {
    const translationsContainer = page.querySelector(translatorsSelectors.container);

    const translations = translationsContainer?.querySelectorAll<HTMLElement>(translatorsSelectors.item);

    // @ts-ignore
    const translators: {
      name: string,
      id: number | string
    }[] = [];
    translations?.forEach((item) => {
      const image = item.querySelector<HTMLImageElement>('img');
      console.log(image)
      translators.push({
        name: item.innerText + (image ? ' ' + image.alt : ''),
        id: item.dataset['translator_id'] as string,
      });
    });

    this.translations = translators;
  }
}
