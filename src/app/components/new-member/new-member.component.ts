import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl, Form } from "@angular/forms";
import { Member } from '../../services/app';

@Component({
  selector: 'new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.scss']
})

export class NewMemberComponent {
  title = 'app';
  myForm: FormGroup;

  myobject = {
    memberName: "",
    memberEmail: "",
    memberNumber: "",
    memberMajor: "",
    memberReason:""
  }


  constructor() {
    // this.myForm = new FormGroup({
    //   fullName: new FormControl("", [])
    // });
  }

  newMember() {
    alert("existing");
  }


  submitNewMember() {
    alert(JSON.stringify(this.myobject));
    // let aNewMemberObject = new Member(this.myobject);

    this.myobject = {
      memberName: "",
      memberEmail: "",
      memberNumber: "",
      memberMajor: "",
      memberReason:""
    }
  }

}