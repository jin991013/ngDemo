import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderTopComponent } from './components/header-top/header-top.component';
import { AsideLeftComponent } from './components/aside-left/aside-left.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderTopComponent,
    AsideLeftComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
