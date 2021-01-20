import { Component, OnInit } from '@angular/core';

import { MoralsService } from '../shared/morals.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  voteMorals: any[] = [];
  morals: any[] = [];
  voted = true;

  constructor(public moralsService: MoralsService) { }

  ngOnInit(): void {
    this.getMorals();
  }

  getMorals(){
    this.moralsService.getMorals().subscribe( (morals:any[]) => {
      if (this.voted){
        this.morals = morals;
        this.voteMorals = [];
        const randNum = Math.round(Math.random()*(this.morals.length-2));
        this.morals.sort((moralA, moralB)=>{
            return moralA.payload.doc.data().vote - moralB.payload.doc.data().vote;
        });
        this.voteMorals.push(this.morals[randNum]);
        this.voteMorals.push(this.morals[randNum+1]);
        this.voted = false;
      }
    });
  }

  getVote(){
    this.voteMorals = [];
    const randNum = Math.round(Math.random()*(this.morals.length-2))
    this.morals.sort((moralA, moralB)=>{
        return moralA.payload.doc.data().vote - moralB.payload.doc.data().vote;
    });
    this.voteMorals.push(this.morals[randNum]);
    this.voteMorals.push(this.morals[randNum+1]);
  }

  vote(moral:any){
    this.voted = true;
    this.moralsService.updateMoral(
      moral.payload.doc.id,
      {moral: moral.payload.doc.data().moral, vote: moral.payload.doc.data().vote+1}
    );
  }

}
