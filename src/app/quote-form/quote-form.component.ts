import { Component, OnInit,Output,EventEmitter } from '@angular/core';
export class GoalFormComponent implements OnInit {
    newGoal=new Goal(0,"","",new Date());
    @Output() addGoal=new EventEmitter<Goal>();

    submitQuote(){
        this.addQuote.emit(this.newGoal);
    }
}
