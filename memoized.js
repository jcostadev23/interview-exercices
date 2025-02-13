const memoizeFc = (fn) => {
  const cache = new Map();

  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn(...args);
    cache.set(key, result);

    return result;
  };
};

function getUsers(value) {
  const url = `https://api.github.com/users?since=${value}&per_page=1`;

  return fetch(url).then((resp) => {
    if (!resp.ok) {
      throw new Error("Error on the getUsers");
    }

    return resp.json();
  });
}

const memoized = memoizeFc(getUsers);

memoized(5).then((result) => console.log("result", result));
setTimeout(
  () => memoized(5).then((result) => console.log("secoundResult", result)),
  1000
);

memoized(6).then((resp) => console.log("lastCall", resp));
