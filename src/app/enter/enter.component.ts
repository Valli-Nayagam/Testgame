import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.scss']
})
export class EnterComponent implements OnInit {
  playerName: FormGroup;

  constructor(private router: Router, private fs: AngularFirestore) {
    this.playerName = new FormGroup({
      player1: new FormControl('', Validators.required),
      player2: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
  }
  startGame() {
    this.fs.collection('Player Info').add({
      createdAt:moment().toDate(),
      player1:this.playerName.value.player1,
      player2:this.playerName.value.player2
    });
    this.router.navigate(['/board'])
  }
}
