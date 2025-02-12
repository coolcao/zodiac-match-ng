import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Zodiac, ZodiacCard } from '../zodiac-match.types';

@Component({
  selector: 'app-zodiac-card',
  standalone: false,

  templateUrl: './zodiac-card.component.html',
  styleUrl: './zodiac-card.component.css'
})
export class ZodiacCardComponent implements OnInit {
  @Input()
  zodiac!: ZodiacCard;

  @Output()
  onClick: EventEmitter<ZodiacCard> = new EventEmitter();

  ngOnInit(): void {
  }

  click() {
    this.onClick.emit(this.zodiac);
  }
}
