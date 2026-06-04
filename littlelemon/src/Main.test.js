import { initializeTimes, updateTimes } from './Main';

describe('initializeTimes', () => {
  afterEach(() => {
    delete global.fetchAPI;
  });

  test('calls fetchAPI and returns its result when non-empty', () => {
    const mockResult = ['17:00', '17:30'];
    global.fetchAPI = jest.fn(() => mockResult);

    const result = initializeTimes();

    expect(global.fetchAPI).toHaveBeenCalled();
    expect(result).toEqual(mockResult);
  });
});

describe('updateTimes', () => {
  afterEach(() => {
    delete global.fetchAPI;
  });

  test('when action includes a date, calls fetchAPI with that date and returns its result', () => {
    const mockResult = ['18:00'];
    global.fetchAPI = jest.fn(() => mockResult);

    const action = { type: 'update', date: '2023-01-01' };
    const result = updateTimes([], action);

    expect(global.fetchAPI).toHaveBeenCalled();
    expect(result).toEqual(mockResult);
  });
});
