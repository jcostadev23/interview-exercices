const debounce = (callBack, time) => {
  let timeOutId;

  return (...args) => {
    if (timeOutId) {
      clearTimeout(timeOutId);
    }

    timeOutId = setTimeout(() => {
      callBack();
    }, time);
  };
};

module.exports = { debounce };
