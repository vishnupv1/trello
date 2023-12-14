import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { BoardViewComponent } from './modules/board-view/board-view.component';

const routes: Routes = [{ component: HomeComponent, path: '' }, { component: BoardViewComponent, path: 'board/:boardname' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
