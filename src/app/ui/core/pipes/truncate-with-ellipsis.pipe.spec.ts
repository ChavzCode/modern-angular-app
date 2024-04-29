import { TruncateWithEllipsisPipe } from './truncate-with-ellipsis.pipe';

describe('TruncateWithEllipsisPipe', () => {
  it('create an instance', () => {
    const pipe = new TruncateWithEllipsisPipe();
    expect(pipe).toBeTruthy();
  });
});
