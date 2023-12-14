import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserservicesService } from 'src/app/services/userservices.service';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent {
  boards!: any[]
  constructor(private userService: UserservicesService, private route: Router) { }
  ngOnInit() {
    this.userService.getBoard().subscribe((data) => {
      this.boards = data
    })
  }
  expandWorkspace(boardname: string) {
    this.route.navigate([`board/${boardname}`])

  }
}
