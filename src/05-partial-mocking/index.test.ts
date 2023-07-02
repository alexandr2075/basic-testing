// Uncomment the code below and write your tests
import { mockOne, mockTwo, mockThree, unmockedFunction } from './index';

jest.mock('./index', () => {
  const originalModule =
    jest.requireActual<typeof import('./index')>('./index');

  return {
    __esModule: true,
    ...originalModule,
    mockOne: () => {
      return 'one';
    },

    mockTwo: () => {
      return 'bar';
    },

    mockThree: () => {
      return 'baz';
    },
  };
});

describe('partial mocking', () => {
  afterAll(() => {
    jest.unmock('./index');
  });

  test('mockOne, mockTwo, mockThree should not log into console', () => {
    expect(mockOne()).toBe('one');
    expect(mockTwo()).toBe('bar');
    expect(mockThree()).toBe('baz');
  });

  test('unmockedFunction should log into console', () => {
    expect(unmockedFunction()).toBeUndefined();
  });
});
