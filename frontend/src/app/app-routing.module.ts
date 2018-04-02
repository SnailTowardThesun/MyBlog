import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player/player.component';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { SearchResultComponent } from './search-result/search-result.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'player', component: PlayerComponent },
  { path: 'article/:path', component: ArticleDetailComponent },
  { path: 'result/:category', component: SearchResultComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
