import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserservicesService } from 'src/app/services/userservices.service';

@Component({
  selector: 'app-board-view',
  templateUrl: './board-view.component.html',
  styleUrls: ['./board-view.component.css']
})
export class BoardViewComponent {
  boardname!: string
  getBoardname!: string
  showAddList = true; // Flag to toggle between "Add List" and "New List" views
  newListTitle = ''; // Holds the value of the new list title
  private routeSubscription!: Subscription;

  constructor(private userService: UserservicesService, private route: ActivatedRoute, private fb: FormBuilder) {

  }
  listform!: FormGroup

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(params => {
      this.boardname = params['boardname'];
      this.listform = this.fb.group({
        name: ['', [Validators.required]],
        boardname: [this.boardname, [Validators.required]],
      })

      this.userService.getBoards(this.boardname).subscribe(
        (response) => {
          console.log(response);
          this.getBoardname = response;
        },
        (error) => {
          console.error('Error fetching board:', error);
        }
      );
      this.userService.getList(this.boardname).subscribe(
        (response) => {
          console.log(response);
          this.getBoardname = response;
        },
        (error) => {
          console.error('Error fetching board:', error);
        }
      );
    })

  }
  ngOnDestroy() {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }

  showAddListForm(): void {
    this.showAddList = false;
  }

  cancelAddList(): void {
    this.showAddList = true;
  }
  onSubmit() {
    if (!this.listform.valid) {

    }
    else {
      this.addList()
    }
  }
  addList(): void {
    this.userService.addList(this.listform.value).subscribe(
      (response) => {
        console.log(response);

      }, (error) => {
      })
    this.showAddList = true;
  }
}
