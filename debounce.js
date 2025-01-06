const debounce = (callBack, time) => {
  let timeOutId;

  return (...args) => {
    if (timeOutId) {
      clearTimeout(timeOutId);
    }

    timeOutId = setTimeout(() => {
      callBack();
      console.log(...args);
    }, time);
  };
};

const callBack = () => {
  console.log("I call in 1000");
};

const db = debounce(callBack, 1000);

db("At the end");
