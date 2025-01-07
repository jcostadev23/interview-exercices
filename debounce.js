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

module.exports = { debounce };
