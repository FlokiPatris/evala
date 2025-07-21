export interface RegistrationFields {
  name?: string;
  surname?: string;
  email?: string;
  password?: string;
}

export interface RegistrationTestCase {
  description: string;
  inputs: RegistrationFields;
  expectedAlert: string;
}