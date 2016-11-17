import { Component, OnInit } from '@angular/core';
import { Member } from './member';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  educations: Array<string> = ['ปริญาตรี', 'ปริญาโท', 'ปริญาเอก'];
  member: Member;

  constructor() {
    // Initial value
    this.member = new Member('', '', '', '', '', '', true);
  }

  ngOnInit() {
    //Example for load data from Database
    this.member = new Member('Pongsak Gransamran', 'peter_conair@yahoo.com', 'peter_conair','111111111', 'male',  'ปริญาโท', true);
  }

  register(value: any) {
    console.log(value);
  }

}
