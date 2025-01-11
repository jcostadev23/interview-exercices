const { throttle } = require("./throttle");

jest.useFakeTimers();

describe("throttle", () => {
  test("should execute the function once", () => {
    const mockFn = jest.fn();
    const throttledFn = throttle(mockFn, 300);

    throttledFn();
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test("should execute the function once in the throttle window", () => {
    const mockFn = jest.fn();
    const throttledFn = throttle(mockFn, 500);

    throttledFn();
    throttledFn();
    throttledFn();
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test("should execute once per throttle window with multiple windows", () => {
    const mockFn = jest.fn();
    const throttledFn = throttle(mockFn, 500);

    throttledFn();
    expect(mockFn).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(1000);

    throttledFn();
    expect(mockFn).toHaveBeenCalledTimes(2);
  });
});
