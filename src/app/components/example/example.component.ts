import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  constructor() { }

  status: boolean = false;
  var1 = 1;
  ngOnInit() {
  }


  asyncAction() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Async is done!");
        if (this.status)
          resolve(console.log("Tout est ok !"));
        else
          reject(console.log("grosse erreur .."));
      }, 1500);
    }
    );
    return promise;
  }


  launchAsync() {
    this.asyncAction().then(
      () => console.log("new action")
    ).catch(
      (error) => console.log("Error")
    )    
  }



}
