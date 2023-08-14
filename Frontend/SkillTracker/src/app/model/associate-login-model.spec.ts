import { AssociateLoginModel } from './associate-login-model';

describe('AssociateLoginModel', () => {
  it('should create an instance', () => {
    const associateEmail = 'example@example.com'; // Provide a valid email address here
    const password = 'password123'; // Provide a valid password here
    expect(new AssociateLoginModel(associateEmail, password)).toBeTruthy();
  });
});
