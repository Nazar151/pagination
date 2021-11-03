import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app/app.component';
import {HttpClientModule} from "@angular/common/http";
import { CommentsComponent } from './components/comments/comments/comments.component';
import { CommentComponent } from './components/comments/comment/comment.component';
import { CommentsDetailsComponent } from './components/comments/comments-details/comments-details.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    CommentComponent,
    CommentsDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
