import { CoursesService } from './courses.service';
import{Component}from '@angular/core';
@Component({
    selector:'courses',
    template:`
            <h2>{{title}}</h2>
            <ul>
                <li *ngFor="let c of courses">{{c}}</li>
            </ul>
            <div (click)="onDivClick()">
                <button class="btn btn-primary" [class.actival]="isActive" (click)="onSave($event)">Save</button>
            </div> 
            `

})
export class CoursesComponent{
    title='List of Courses'
    courses;
    isActive=false;


    constructor(service:CoursesService){
      //  let service=new CoursesService();
        this.courses=service.getCourses();
    }
    onSave($event){
        console.log("Button was click",$event);
    }
    onDivClick(){
        console.log("DIV was click");
    }
}