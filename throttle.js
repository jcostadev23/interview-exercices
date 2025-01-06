const throttle = (callBack, delay) => {
  let isWaiting = false;

  return (...args) => {
    if (!isWaiting) {
      callBack(...args);
      isWaiting = true;

      setTimeout(() => (isWaiting = false), delay);
    }
  };
};

const callBack = (props) => console.log("cb", props);
const throttleEvent = throttle(callBack, 1000);

window.addEventListener("resize", throttleEvent);
