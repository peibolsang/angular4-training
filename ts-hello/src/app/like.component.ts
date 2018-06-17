import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html'
})


export class LikeComponent implements OnInit{

    ngOnInit(){
        
    }

    isActive: boolean;
   
   
   onClick(){
       if (this.isActive) this.unlike()
       else this.like();
    }

    like(){
        this.isActive = true;
    }

    unlike(){
        this.isActive = false;
    }

  
}