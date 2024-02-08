import { Injectable } from '@angular/core';

import membersJson from '../../assets/members.json';
import { Member } from '../class/member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  members :Member[] = [];

  constructor() {
    membersJson.forEach((member) => {
      let newMember = new Member(member.id, member.firstname, member.lastname, member.email);
      this.members.push(newMember);
    });
  }

  getMembers(): Member[] {
    return this.members;
  }

  getMember(id: number): Member | undefined {
    return this.members.find(Member=>Member.id == id);
  }
}
