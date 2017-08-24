import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { TopHeaderComponent } from './top-header.component';
import { LogoComponent } from './logo.component';
import { NavbarComponent } from './navbar.component';
import { SectionBannerComponent } from './section-banner.component';
import { SearchComponent } from './search/search.component';
import { MoviepipePipe } from './moviepipe.pipe';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    LogoComponent,
    NavbarComponent,
    SectionBannerComponent,
    routingComponents,
    SearchComponent,
    MoviepipePipe

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
