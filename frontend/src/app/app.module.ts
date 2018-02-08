import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatGridListModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PlayerComponent } from './player/player.component';
import { IndexComponent } from './index/index.component';
import { FooterComponent } from './footer/footer.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { AboutComponent } from './footer/about/about.component';
import { ContactComponent } from './footer/contact/contact.component';
import { IndexContentComponent } from './index/index-content/index-content.component';
import { IndexSlideComponent } from './index/index-slide/index-slide.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    IndexComponent,
    FooterComponent,
    ArticleDetailComponent,
    AboutComponent,
    ContactComponent,
    IndexContentComponent,
    IndexSlideComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatPaginatorModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
