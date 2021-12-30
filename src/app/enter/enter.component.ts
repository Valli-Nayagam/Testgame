import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.scss']
})
export class EnterComponent implements OnInit {
  playerName: FormGroup;

  constructor(private router:Router) {
    this.playerName = new FormGroup({
      player1 : new FormControl('',Validators.required),
      player2 : new FormControl('',Validators.required)
    })
  }

  ngOnInit(): void {
  }
startGame(){
  this.router.navigate(['/board'])
}
}
