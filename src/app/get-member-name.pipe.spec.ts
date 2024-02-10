import { GetMemberNamePipe } from './get-member-name.pipe';

describe('GetMemberNamePipe', () => {
  it('create an instance', () => {
    const pipe = new GetMemberNamePipe();
    expect(pipe).toBeTruthy();
  });
});
