const { debounce } = require("./debounce");

jest.useFakeTimers();

describe("debounce", () => {
  test("should execute the function after the specific delay", () => {
    const mockFn = jest.fn();
    const debounceFn = debounce(mockFn, 300);

    debounceFn();

    expect(mockFn).not.toHaveBeenCalled();
    jest.advanceTimersByTime(300);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test("should execute the function after the specified delay even with multiple calls", () => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 500);

    debouncedFn();
    debouncedFn();
    debouncedFn();
    expect(mockFn).toHaveBeenCalledTimes(0);

    jest.advanceTimersByTime(500);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test("should call again after timeout", () => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 200);

    debouncedFn();
    expect(mockFn).toHaveBeenCalledTimes(0);
    jest.advanceTimersByTime(200);
    expect(mockFn).toHaveBeenCalledTimes(1);

    debouncedFn();
    expect(mockFn).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(200);
    expect(mockFn).toHaveBeenCalledTimes(2);
  });
});
