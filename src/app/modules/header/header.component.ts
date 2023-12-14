import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserservicesService } from 'src/app/services/userservices.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private fb: FormBuilder, private userService: UserservicesService, private route: Router) { }
  boxOpen = false
  cardOpen = false
  nameWarning = false
  inputStyles = {}
  boardForm = this.fb.group({
    name: ['', [Validators.required]],
  })
  openaddBox() {
    this.boxOpen = !this.boxOpen
  }
  openCard() {
    this.cardOpen = true
    this.boxOpen = !this.boxOpen
  }
  onSubmit() {
    if (!this.boardForm.valid) {
    }
    else {
      this.addBoard()
    }
  }
  addBoard() {
    this.userService.addBoard(this.boardForm.value).subscribe(
      (response) => {
        this.cardOpen = false
        this.route.navigate([`board/${response}`])


      }, (error) => {

      })
  }
  nameError(): any {
    const name = this.boardForm.get('name')
    if (!name?.valid) {
      if (name?.hasError('required')) {
        return this.nameWarning = true
      }
    }

    return
  }
  updateStyles() {
    const name = this.boardForm.get('name')
    if (!name?.valid) {
      this.inputStyles = {
        'border-color': 'red'
        // Add any other styles you want to change when nameWarning is true
      };
    } else {
      // Reset styles when nameWarning is false
      this.inputStyles = {
        'border-color': '#cb07f7'
      };
    }
  }
  navigateTo(page: string) {
    this.route.navigate(['page'])

  }
}
