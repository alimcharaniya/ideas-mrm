import { Component } from '@angular/core';

@Component({
  selector: 'existing-member',
  templateUrl: './existing-member.component.html',
  styleUrls: ['./existing-member.component.scss']
})

export class ExistingMemberComponent {
  title = 'app';

  myobject = {
    memberSID: "",
  }

  newMember() {
    alert("existing");
  }


  existingMember() {
    alert(JSON.stringify(this.myobject));

    this.myobject = {
      memberSID: "",
    }
  }

}


