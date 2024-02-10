import { Pipe, PipeTransform } from '@angular/core';
import { MemberService } from './service/member.service';

@Pipe({
  name: 'getMemberName',
  standalone: true
})
export class GetMemberNamePipe implements PipeTransform {

  constructor(private memberService: MemberService) {}

  transform(id: number, ...args: any[]): string {
    let result = this.memberService.getMember(id)!.firstname;
    return result;
  }

}
