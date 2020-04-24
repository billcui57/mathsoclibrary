import { IsOverduePipe } from './is-overdue.pipe';

describe('IsOverduePipe', () => {
  it('create an instance', () => {
    const pipe = new IsOverduePipe();
    expect(pipe).toBeTruthy();
  });
});
