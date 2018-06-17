import {Component} from '@angular/core'

@Component({
    selector:'camel-input',
    templateUrl: './camel-input.component.html'
})

export class CamelInputComponent {

    myInput: string;
    myCamelInput: string;

    onKeyStroke(){
        

        let prepositions = [
            'of','the'
        ]

        let words = this.myInput.split(' ');
        for (var index=0;index<words.length; index++){
            if(index > 0 && prepositions.includes(words[index].toLowerCase()))
                words[index] = words[index].toLowerCase();
            else
              words[index] = words[index].substr(0,1).toUpperCase()+ words[index].substr(1).toLowerCase();
            }

        this.myCamelInput = words.join(' ');
        console.log(this.myCamelInput);
        
    }
        
}

