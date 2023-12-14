import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { BoardViewComponent } from './modules/board-view/board-view.component';
import { FirstpageComponent } from './modules/firstpage/firstpage.component';

const routes: Routes = [{ component: HomeComponent, path: '' },
{ component: BoardViewComponent, path: 'board/:boardname' },
{ component: FirstpageComponent, path: 'page' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
