import { MakeDatePipe } from './make-date.pipe';

describe('MakeDatePipe', () => {
  it('create an instance', () => {
    const pipe = new MakeDatePipe();
    expect(pipe).toBeTruthy();
  });
});
