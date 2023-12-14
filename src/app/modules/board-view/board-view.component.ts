import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription, map } from 'rxjs';
import { UserservicesService } from 'src/app/services/userservices.service';
import { fetchList } from 'src/app/store/action';
import { listSelectorData } from 'src/app/store/selector';

@Component({
  selector: 'app-board-view',
  templateUrl: './board-view.component.html',
  styleUrls: ['./board-view.component.css']
})
export class BoardViewComponent {
  boardname!: string
  lists$!: Observable<any[]>
  lists!: any[]

  getBoardname!: string
  indexes = [];

  showAddCard!: boolean[]

  showAddList = true; // Flag to toggle between "Add List" and "New List" views
  newListTitle = ''; // Holds the value of the new list title
  listform!: FormGroup
  dragTemp: any;
  cardForm!: FormGroup

  private routeSubscription!: Subscription;

  constructor(private store: Store,
    private userService: UserservicesService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router) {
  }

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(params => {
      this.boardname = params['boardname'];
      this.listform = this.fb.group({
        name: ['', [Validators.required]],
        boardname: [this.boardname, [Validators.required]],
      })

      this.userService.getBoards(this.boardname).subscribe(
        (response) => {
          this.getBoardname = response;
        },
        (error) => {
          console.error('Error fetching board:', error);
        }
      );
      // this.store.dispatch(fetchList())
      // this.lists$ = this.store.pipe(select(listSelectorData))
      // this.lists$ = this.lists$.pipe(
      //   map((lists) => lists.filter((list) => list.boardname == this.boardname))
      // );
      this.userService.getLists(this.boardname).subscribe((data) => {
        this.lists = data
        this.indexes = data
        this.showAddCard = Array(this.indexes.length).fill(true);
      })

      this.cardForm = this.fb.group({
        cardname: ['', [Validators.required]],
      })

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
  showAddCardForm(index: number): void {
    this.showAddCard[index] = false;
  }
  cancelAddCard(index: number): void {
    this.showAddCard[index] = true;
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
        this.ngOnInit()

      }, (error) => {
      })
    this.showAddList = true;
  }
  onDragStart(event: any) {
    this.dragTemp = event.target;
  }
  onDragOver(event: any) {
    event.preventDefault();
  }
  onDrop(event: any) {
    event.preventDefault();
    const targetElement = event.target;
    if (targetElement && targetElement.classList.contains('drop')) {
      targetElement.appendChild(this.dragTemp);
      const targetId = targetElement.id;
      const dragChildren = targetElement.getElementsByClassName('drag');
      Array.from(dragChildren).forEach((child: any) => {
      });
    }
  }
  onCardSubmit(itemname: string) {
    if (!this.cardForm.valid) {

    }
    else {
      this.addCard(itemname)
    }
  }
  addCard(itemname: string): void {
    this.userService.addCard(this.cardForm.value, itemname).subscribe(
      (response) => {
        this.ngOnInit()

      }, (error) => {
      })
    this.showAddList = true;
  }

}
