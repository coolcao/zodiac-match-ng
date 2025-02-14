import { computed, Injectable, linkedSignal, Signal, signal, WritableSignal } from "@angular/core";
import { ZodiacCard } from "./zodiac-match.types";
import { cardList } from "./zodiac-match.dataset";


@Injectable({
  providedIn: 'root'
})
export class ZodiacMatchStore {

  // 所有的卡牌
  private _zodiacList = signal<ZodiacCard[]>([]);
  // 第一次已经选中的卡牌
  private _selectedIdx = signal(-1);
  // 记录当前配对的卡牌，用于右侧信息的显示
  private _zodiacInfo = signal<ZodiacCard | null>(null);
  // 操作步骤数
  private _steps = signal(0);

  readonly setps = this._steps.asReadonly();
  readonly zodiacInfo = this._zodiacInfo.asReadonly();
  readonly zodiacList = this._zodiacList.asReadonly();
  readonly selectedIdx = this._selectedIdx.asReadonly();
  readonly selectedZodiac = computed(() => {
    const idx = this.selectedIdx();
    if (idx == -1) {
      return null;
    }
    return this.zodiacList()[idx];
  });
  readonly isCompleted = computed(() => {
    return this.zodiacList().every(v => v.isPinned);
  });

  readonly openNotPinedCount = computed(() => {
    return this.zodiacList().filter(v => v.isOpen && !v.isPinned).length;
  });

  // 初始化卡牌
  init() {
    const size = 24;
    const zodiacList: ZodiacCard[] = [];
    const pairs: ZodiacCard[] = [];
    for (let i = 0; i < size / 2; i++) {
      const zodiac = cardList[i];
      pairs.push({ ...zodiac }, { ...zodiac, showTerrestrial: true });
    }

    // 打乱
    for (let i = pairs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pairs[i], pairs[j]] = [pairs[j], pairs[i]];
    }

    for (let i = 0; i < size; i++) {
      zodiacList.push(pairs[i]);
    }

    this._zodiacList.set([...zodiacList]);
  }

  updateZodiac(idx: number, zodiac: ZodiacCard) {
    this._zodiacList.update(v => {
      v[idx] = zodiac;
      return [...v];
    });
  }

  updateZodiacInfo(zodiac: ZodiacCard | null) {
    if (zodiac) {
      this._zodiacInfo.set({ ...zodiac });
    } else {
      this._zodiacInfo.set(null);
    }
  }

  updateSelectedIdx(idx: number) {
    this._selectedIdx.set(idx);
  }

  resetSteps() {
    this._steps.set(0);
  }

  increaseSteps() {
    this._steps.update(v => v + 1);
  }


  resetSelectedIdx() {
    this._selectedIdx.set(-1);
  }

}
