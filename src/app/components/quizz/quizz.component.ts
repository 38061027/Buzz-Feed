import { Component, OnInit } from '@angular/core';
import quizz_questions from '../../../assets/data/quizz_questions.json'

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit{

title:string = ""
questions:any
questionSelected:any

answears:string[] = []
answearAelected:string = ''

questionIndex:number = 0
questionMaxIndex:number = 0

finished:boolean = false

resultOfBuzz: string = ""

ngOnInit(): void {
    if(quizz_questions){
      this.finished = false
      this.title = quizz_questions.title

      this.questions = quizz_questions.questions
      this.questionSelected = this.questions[this.questionIndex]

      this.questionMaxIndex = this.questions.length
    }

}

playerChoose(value:string){
  this.answears.push(value)
  this.nextStep()

  interface Counter {
    [key: string]: number;
}
  let res = this.answears


  let counter:Counter = {}
  res.forEach((el) => {
    if (counter[el]) {
        counter[el] += 1;
    } else {
        counter[el] = 1;
    }
});

let mostCommonLetter:string = '';
let highestCount:number = 0;

for (let [key, value] of Object.entries(counter)) {
    if (value > highestCount) {
        mostCommonLetter = key;
        highestCount = value;
    }
}

if(mostCommonLetter === 'A'){
this.resultOfBuzz = quizz_questions.results.A
}else if(mostCommonLetter === 'B'){
  this.resultOfBuzz = quizz_questions.results.B
}


}


nextStep(){
  this.questionIndex+=1
  if(this.questionMaxIndex > this.questionIndex){
    this.questionSelected = this.questions[this.questionIndex]
  }else{
this.finished = true
  }
}



}
