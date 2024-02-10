import { Component, Input } from '@angular/core';
import { Member } from '../class/member';
import { ActivatedRoute } from '@angular/router';
import { MemberService } from '../service/member.service';
import { DetailCardComponent } from '../detail-card/detail-card.component';

@Component({
  selector: 'app-member-detail',
  standalone: true,
  imports: [
    DetailCardComponent,
  ],
  templateUrl: './member-detail.component.html',
  styleUrl: './member-detail.component.css'
})
export class MemberDetailComponent {
  selectedMember: Member;
  @Input() id: number;

  constructor(private route: ActivatedRoute, private memberService: MemberService) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!
    if(this.id){
      this.selectedMember = this.memberService.getMember(this.id)!;
    }
  }
}
