import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserservicesService } from 'src/app/services/userservices.service';
import { fetchList } from 'src/app/store/action';
import { listSelectorData } from 'src/app/store/selector';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent {
  boards$!: Observable<any[]>
  constructor(private userService: UserservicesService, private route: Router, private store: Store<any[]>) { }
  ngOnInit() {
    // this.userService.getBoard().subscribe((data) => {
    //   this.boards = data
    // })
    this.store.dispatch(fetchList())
    this.boards$ = this.store.pipe(select(listSelectorData))


  }
  expandWorkspace(boardname: string) {
    this.route.navigate([`board/${boardname}`])

  }
}
