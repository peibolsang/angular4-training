import {Component, Input} from '@angular/core';
import { CoursesService } from './courses.service';
import {LikeComponent} from './like.component';

@Component({
    selector: 'courses',
    template: `
        <button class="btn btn-primary" [class.active]="isActive" [style.background]="isActive?'blue':'yellow'">Save</button>
        <div (click)="onDivClick()">
        <button (click)="onClick($event)">Button</button>
        <h2>{{"Title: "+getTitle()}}</h2>
        </div>
        <ul>
            <li *ngFor="let c of courses">
                {{c}}
            </li>
        </ul>
        <img src="{{imageUrl}}" />
        <input (keyup)="onKeyUp($event)"/>
        <input [(ngModel)]="myinput" (keyup.enter)="onKeyUpEnter()"/>
        <br/>
        {{course.title | uppercase}}<br/>
        {{course.students | number}}<br/>
        {{course.rating | number:'1.1-1'}}<br/>
        {{course.price | currency:'EUR':true:'3.2-2'}}<br/>
        {{course.releaseDate | date:'shortDate'}}<br/>
        <br/>
        {{text | summary:2}}
    `,
})

export class CoursesComponent{
    private title = "List of Courses";
    private imageUrl = "http://lorempixel.com/400/200";
    private courses;
    private isActive=false;
    private myinput="Initial Value";
    private text="Lorem impsum dolor amet";

    private course = {
        title: "The Complete Angular Course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016,3,1)
    }

    //Logic for calling an REST API

    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }

    getTitle(){
        return this.title;
    }

    getCourses(){
        return this.courses;
    }

    onClick($event){
        $event.stopPropagation();
        console.log("Clicked",$event);
    }
 
    onDivClick(){
        console.log("Div was clicked")
    }

    onKeyUp($event){
        if($event.keyCode=== 13) console.log("ENTER was pressed")
    }

    onKeyUpEnter(){
        console.log("ENTER WAS INDEED PRESSED AND VALUE IS = "+this.myinput)
    }
}