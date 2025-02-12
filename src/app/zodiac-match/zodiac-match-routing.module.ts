import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZodiacMatchBoardComponent } from './zodiac-match-board/zodiac-match-board.component';

const routes: Routes = [
  { path: '', redirectTo: 'board', pathMatch: 'full' },
  { path: 'board', component: ZodiacMatchBoardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZodiacMatchRoutingModule { }
