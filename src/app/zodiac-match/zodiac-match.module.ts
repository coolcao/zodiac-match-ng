import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ZodiacMatchRoutingModule } from './zodiac-match-routing.module';
import { ScatterFlowersComponent } from './scatter-flowers/scatter-flowers.component';
import { ZodiacMatchBoardComponent } from './zodiac-match-board/zodiac-match-board.component';
import { ZodiacCardComponent } from './zodiac-card/zodiac-card.component';
import { ZodiacCardBgComponent } from './zodiac-card-bg/zodiac-card-bg.component';
import { HelpComponent } from './help/help.component';


@NgModule({
  declarations: [
    ZodiacMatchBoardComponent,
    ScatterFlowersComponent,
    ScatterFlowersComponent,
    ZodiacCardComponent,
    ZodiacCardBgComponent,
    HelpComponent,
  ],
  imports: [
    CommonModule,
    ZodiacMatchRoutingModule,
    FormsModule,
  ]
})
export class ZodiacMatchModule { }
