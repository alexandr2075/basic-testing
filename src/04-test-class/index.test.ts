// Uncomment the code below and write your tests
import { getBankAccount } from '.';

describe('BankAccount', () => {
  const myAccount = getBankAccount(1000);
  const otherAccount = getBankAccount(1000);
  test('should create account with initial balance', () => {
    expect(myAccount.getBalance()).toBe(1000);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    expect(() => myAccount.withdraw(2000)).toThrowError(
      `Insufficient funds: cannot withdraw more than ${myAccount.getBalance()}`,
    );
  });

  test('should throw TransferFailedError error when transferring more than balance', () => {
    expect(() => myAccount.transfer(2000, otherAccount)).toThrowError(
      `Insufficient funds: cannot withdraw more than ${myAccount.getBalance()}`,
    );
  });

  test('should throw error when transferring to the same account', () => {
    expect(() => myAccount.transfer(500, myAccount)).toThrowError(
      'Transfer failed',
    );
  });

  test('should deposit money', () => {
    myAccount.deposit(1000);
    expect(myAccount.getBalance()).toBe(1500);
  });

  test('should withdraw money', () => {
    myAccount.withdraw(1000);
    expect(myAccount.getBalance()).toBe(500);
  });

  test('should transfer money', () => {
    myAccount.transfer(100, otherAccount);
    expect(myAccount.getBalance()).toBe(400);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    // expect(myAccount.fetchBalance()).toBe(1);
  });

  test('should set new balance if fetchBalance returned number', async () => {
    // Write your tests here
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    // Write your tests here
  });
});
