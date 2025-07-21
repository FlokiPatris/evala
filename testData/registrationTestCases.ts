import { RegistrationTestCase } from 'interfaces/registrationInterface';

export const registrationTestCases: RegistrationTestCase[] = [
  {
    description: 'invalid email format',
    inputs: {
      name: 'John',
      surname: 'Tester',
      email: 'invalid@email',
      password: 'ValidPass123!',
    },
    expectedAlert: 'Neplatný formát e-mailu',
  },
  {
    description: 'empty first name',
    inputs: {
      name: '',
      surname: 'Tester',
      email: 'john@example.com',
      password: 'ValidPass123!',
    },
    expectedAlert: 'Jméno je povinné',
  },
  {
    description: 'empty surname',
    inputs: {
      name: 'John',
      surname: '',
      email: 'john@example.com',
      password: 'ValidPass123!',
    },
    expectedAlert: 'Příjmení je povinné',
  },
  {
    description: 'empty email',
    inputs: {
      name: 'John',
      surname: 'Tester',
      email: '',
      password: 'ValidPass123!',
    },
    expectedAlert: 'E-mail je povinný',
  },
  {
    description: 'empty password',
    inputs: {
      name: 'John',
      surname: 'Tester',
      email: 'john@example.com',
      password: '',
    },
    expectedAlert: 'Heslo musí mít alespoň 12 znaků',
  },
];