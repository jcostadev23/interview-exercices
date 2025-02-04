const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const sucess = true;

    if (sucess) {
      return resolve("sucess");
    }

    reject("notSucess");
  }, 2000);
});

promise1
  .then((result) => {
    console.log("This is the result", result);
  })
  .catch((error) => {
    console.log("This is the error", error);
  })
  .finally(() => console.log("Finish"));

const promiseAll = (promises) => {
  return new Promise((resolve, reject) => {
    const results = [];
    let promisesCount = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((result) => {
          results[index] = result;
          promisesCount++;

          if (promisesCount === promises.length) {
            resolve(results);
          }
        })
        .catch((error) => reject(error));
    });
  });
};

promiseAll([]);
