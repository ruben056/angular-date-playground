import { Component, EventEmitter } from '@angular/core';
import {MaterializeAction} from 'angular2-materialize/dist/materialize-directive';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';
declare var Materialize: any;

const KEYCODE_TAB :number = 9;
const KEYCODE_UP :number = 38;

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})

export class DatePickerComponent {

    birthDate:string;
    otherDate:string;

    birthDateActions = new EventEmitter<string|MaterializeAction>();
    otherDateActions = new EventEmitter<string|MaterializeAction>();
    form: FormGroup;

    constructor(private fb: FormBuilder) {
        this.birthDate = "03/12/2017";
        this.otherDate = "04/12/2017";
    }

    birthDateKeyPressed($event:any){
      console.log($event);
      this.keyPressedOnDateInput($event, this.birthDateActions)
    }

    otherDateKeyPressed($event:any){
      console.log($event);
      this.keyPressedOnDateInput($event, this.otherDateActions)
    }

    keyPressedOnDateInput($event, actionsEmitter: EventEmitter<string|MaterializeAction>){
      if($event.keyCode == KEYCODE_UP){
        this.startDatePicker(actionsEmitter);
        this.openDatePicker(actionsEmitter);
      }
      else if($event.keyCode == KEYCODE_TAB){
        $event.preventDefault();
        // $event.stopPropagation();
      }
    }

    stopDatePicker(actionsEmitter: EventEmitter<string|MaterializeAction>){
      actionsEmitter.emit({action: "pickadate", params: ["stop"]});
    }
    startDatePicker(actionsEmitter: EventEmitter<string|MaterializeAction>){
      actionsEmitter.emit({action: "pickadate", params: ["start"]});
    }
    openDatePicker(actionsEmitter: EventEmitter<string|MaterializeAction>) {
      actionsEmitter.emit({action: "pickadate", params: ["open"]});
    }

}
