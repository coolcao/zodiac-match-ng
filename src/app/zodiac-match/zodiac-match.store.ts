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

  readonly zodiacList = this._zodiacList.asReadonly();
  readonly selectedIdx = this._selectedIdx.asReadonly();
  readonly selectedZodiac = computed(() => {
    const idx = this.selectedIdx();
    if (idx == -1) {
      return null;
    }
    return this.zodiacList()[idx];
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

  updateSelectedIdx(idx: number) {
    this._selectedIdx.set(idx);
  }

  resetSelectedIdx() {
    this._selectedIdx.set(-1);
  }

}
