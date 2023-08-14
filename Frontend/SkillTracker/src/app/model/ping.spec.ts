import { Ping } from './ping';

describe('Ping', () => {
  it('should create an instance', () => {
    const emailAddress = 'test@example.com';
    expect(new Ping(emailAddress)).toBeTruthy();
  });
});
