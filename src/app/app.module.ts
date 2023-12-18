import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { HeaderComponent } from './modules/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './matcomponents'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BoardViewComponent } from './modules/board-view/board-view.component';
import { StoreModule } from '@ngrx/store';
import { listReducer } from './store/reducer';
import { EffectsModule } from '@ngrx/effects';
import { FirstpageComponent } from './modules/firstpage/firstpage.component';
import { userEffects } from './store/effect';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BoardViewComponent,
    FirstpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      lists: listReducer,

    }),
    EffectsModule.forRoot([userEffects]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
