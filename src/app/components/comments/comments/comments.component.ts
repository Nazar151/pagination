import { Component, OnInit } from '@angular/core';
import {CommentService} from "../../services/comment.service";
import { Comment } from "../../interface/Comment";


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})



export class CommentsComponent implements OnInit {

  comments: Comment[];
  totalLength: any;
  page: number = 1;

  constructor( private commentService : CommentService) { }

  ngOnInit(): void {
    this.commentService.getAllComments().subscribe(value => {
      this.comments = value

      // @ts-ignore
      this.totalLength = result.lenght

      console.log(value)
    })
  }

}
