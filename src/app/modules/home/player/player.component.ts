import { ChangeDetectorRef, Component, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { fromEvent, Subscription, tap, timer } from 'rxjs';
import { KEY_EVENTS } from '../../../constants/key-events.const';

///declare const Playerjs: any;

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  private player: {
    api: (...params: any) => any
  } | null = null;

  controlsHidden = true;
  loading = true;

  private keysSubscription: Subscription | undefined;
  private hideControlsSubscription: Subscription | undefined;

  qualities: {
    focusActive: boolean,
    name: string
  }[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: {url: string},
              public dialog: MatDialog,
              private elementRef: ElementRef,
              private cdRef: ChangeDetectorRef) {
  }

  get activeQuality() {
    return this.player?.api('quality');
  }

  get duration(): string {
    return this.formatTime(this.player?.api('duration'));
  }

  get time(): string {
    return this.formatTime(this.player?.api('time'));
  }

  get percentage(): number {
    return this.player?.api('time') / this.player?.api('duration') * 100;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.subscribeForEvents();
    (window as any).PlayerReady = () => {
      this.ready();
    }
    const cdnplayer = new (window as any).Playerjs({
      id: "player",
      file: this.data.url,
      default_quality: "1080p Ultra",
      ready: 'PlayerReady',
      hlsconfig: {
        maxBufferLength: 60,
        maxBufferSize: 33554432000,
        maxMaxBufferLength: 600
      }
    });

    this.player = cdnplayer;

    cdnplayer.api('file', this.data.url);
    //cdnplayer.api('fullscreen');
    cdnplayer.api('seek', 0);
    cdnplayer.api('play');
    console.log(this.data.url);
    (window as any).cdnplayer = cdnplayer;
  }

  ngOnDestroy() {
    this.player?.api('destroy');
    this.keysSubscription?.unsubscribe();
  }

  private formatTime(time: number): string {
    let hours   = Math.floor(time / 3600);
    let minutes = Math.floor((time - (hours * 3600)) / 60);
    let seconds = Math.floor(time - (hours * 3600) - (minutes * 60));
    let stringTime = '';
    if(hours < 10) {
      stringTime += '0' + hours;
    } else {
      stringTime += hours;
    }
    stringTime += ':';

    if(minutes < 10) {
      stringTime += '0' + minutes;
    } else {
      stringTime += minutes;
    }
    stringTime += ':';

    if (seconds < 10) {
      stringTime += '0' + seconds;
    } else {
      stringTime += seconds;
    }

    return stringTime;
  }

  private ready() {
    const video = this.elementRef.nativeElement.querySelector('video');
    video.onwaiting = (e: any) => {
      this.loading = true;
      console.log('waiting')
    }
    console.log('video', video);

    video.addEventListener('canplay', () => {
      console.log('can play')
      this.loading = false;
      this.cdRef.detectChanges();
    })


   this.qualities = this.player?.api('qualities')?.map((name: string) => ({
     name,
     focusActive: name === this.activeQuality
   }));
  }

  private subscribeForEvents(): void {
    this.keysSubscription = fromEvent<KeyboardEvent>(document, 'keydown').pipe(
      tap((event) => {
        this.controlsHidden = false;
        this.hideControls();

        if (event.keyCode === 76 || event.keyCode === 417) {
          this.player?.api('seek', this.player?.api('time') + 5);
        } else if (event.keyCode === 75 || event.keyCode === 412) {
          this.player?.api('seek', this.player?.api('time') - 5);
        } else if(event.keyCode === KEY_EVENTS.up) {
          const activeQualityIndex = this.qualities.findIndex((quality) => quality.focusActive);
          if (activeQualityIndex > 0) {
            this.qualities[activeQualityIndex].focusActive = false;
            this.qualities[activeQualityIndex - 1].focusActive = true;
          }
        } else if (event.keyCode === KEY_EVENTS.down) {
          const activeQualityIndex = this.qualities.findIndex((quality) => quality.focusActive);
          if (activeQualityIndex < this.qualities.length - 1) {
            this.qualities[activeQualityIndex].focusActive = false;
            this.qualities[activeQualityIndex + 1].focusActive = true;
          }
        } else if(event.keyCode === KEY_EVENTS.enter) {
          const activeQualityIndex = this.qualities.findIndex((quality) => quality.focusActive);
          if (this.qualities[activeQualityIndex]?.name !== this.activeQuality) {
            this.player?.api('quality', activeQualityIndex);
          }
        }
      })
    ).subscribe();
  }

  private hideControls(): void {
    this.hideControlsSubscription?.unsubscribe();
    this.hideControlsSubscription = timer(3000).pipe(
      tap(() => this.controlsHidden = true)
    ).subscribe();
  }

}
