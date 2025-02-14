import { Component, computed, effect, inject, linkedSignal, OnInit, signal, Signal } from '@angular/core';

import { ZodiacMatchStore } from '../zodiac-match.store';
import { ActivatedRoute, Router } from '@angular/router';
import { ZodiacCard } from '../zodiac-match.types';
import { timer } from 'rxjs';

@Component({
  selector: 'app-zodiac-match-board',
  standalone: false,
  templateUrl: './zodiac-match-board.component.html',
  styleUrl: './zodiac-match-board.component.css'
})
export class ZodiacMatchBoardComponent implements OnInit {

  store = inject(ZodiacMatchStore);
  route = inject(ActivatedRoute);
  router = inject(Router);
  constructor() {
    effect(() => {
      if (this.isCompleted()) {
        this.showSuccess = true;
        timer(3000).subscribe(() => this.showSuccess = false);
      }
    });
  }

  zodiacList = this.store.zodiacList;
  selectedIdx = this.store.selectedIdx;
  selectedZodiac = this.store.selectedZodiac;

  zodiac = this.store.zodiacInfo;

  steps = this.store.setps;
  isCompleted = this.store.isCompleted;
  openNotPinedCount = this.store.openNotPinedCount;
  showSuccess = false;
  showHelp = false;


  ngOnInit(): void {
    this.store.init();
  }

  clickCell(idx: number, zodiac: ZodiacCard) {
    if (zodiac.isPinned || zodiac.isOpen) {
      return;
    }

    // 如果打开牌数为偶数，则暂停继续开牌，需要进行对比
    if (this.openNotPinedCount() === 2) {
      return;
    }

    zodiac.isOpen = true;
    this.store.updateZodiac(idx, zodiac);

    this.store.increaseSteps();

    // 如果打开牌数为奇数或第一次开牌，则继续开牌
    if (this.openNotPinedCount() === 0 || this.openNotPinedCount() === 1) {
      this.store.updateSelectedIdx(idx);
    } else {
      // 如果有偶数张牌已开，需要进行对比
      const selected = this.zodiacList()[this.selectedIdx()];
      if (!selected) {
        console.error('数据错误');
        return;
      }
      if (selected.zodiac == zodiac.zodiac) {
        // 匹配上
        zodiac.isPinned = true;
        this.store.updateZodiac(idx, zodiac);
        selected.isPinned = true;
        this.store.updateZodiac(this.selectedIdx(), selected);
        this.store.resetSelectedIdx();

        this.store.updateZodiacInfo(zodiac);

      } else {
        // 不匹配
        setTimeout(() => {
          zodiac.isOpen = false;
          this.store.updateZodiac(idx, zodiac);
          selected.isOpen = false;
          this.store.updateZodiac(this.selectedIdx(), selected);
          this.store.resetSelectedIdx();
        }, 700);
        this.store.updateZodiacInfo(null);
      }
    }

  }

}
