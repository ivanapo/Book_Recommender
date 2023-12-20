import { Component, EventEmitter, Inject, Input, Output, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { RatingService } from 'src/app/services/rating.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})



export class RatingComponent {

  @Output() reviewData = new EventEmitter<any>();
  user = localStorage.getItem('currentUser');
  review: any;
  inputData: any;
  myForm: FormGroup;

  constructor(
    private builder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private route: ActivatedRoute,
    public userService: UserService,
    private ratingService: RatingService,
    public dialogRef: MatDialogRef<RatingComponent>,
    private router: Router
  ) { }

  ngOnInit() {
    this.inputData = this.data;
    this.myForm = this.builder.group({
      description: this.builder.control(''),
      rating: this.builder.control('')
    });
  }

  postReview() {
    const request = {
      userId: this.user,
      bookId: this.inputData.id,
      description: this.myForm.get('description').value,
      rating: this.myForm.get('rating').value
    };

    this.ratingService.rating(request).subscribe((res: any) => {
      this.review = res
      this.reviewData.emit(res);
    });
    this.dialogRef.close(true);
  }

  closePopup() {
    this.dialogRef.close(true);
  }

}

