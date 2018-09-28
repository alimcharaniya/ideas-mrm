import { Component } from '@angular/core';

@Component({
  selector: 'new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.scss']
})

export class NewMemberComponent {
  title = 'app';



  newMember(){
    alert("existing");
  }


  existingMember(){
    alert("existing");

  }

}


