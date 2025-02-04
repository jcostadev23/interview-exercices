const { throttle } = require("./throttle");

jest.useFakeTimers();

describe("throttle", () => {
  test("should only execute the function once within the time limit", () => {
    const mockFn = jest.fn();
    const throttledFn = throttle(mockFn, 300);

    throttledFn();
    throttledFn();
    throttledFn();

    expect(mockFn).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(300);

    throttledFn();
    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  test("should not execute the function more than once in the throttle window", () => {
    const mockFn = jest.fn();
    const throttledFn = throttle(mockFn, 500);

    throttledFn();
    throttledFn();
    throttledFn();

    jest.advanceTimersByTime(500);
    throttledFn();

    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  test("should execute once per throttle window even with rapid calls", () => {
    const mockFn = jest.fn();
    const throttledFn = throttle(mockFn, 1000);

    throttledFn();
    throttledFn();
    throttledFn();

    expect(mockFn).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(1000);
    throttledFn();

    expect(mockFn).toHaveBeenCalledTimes(2);
  });
});
