const sleep = (delay = 2000) => {
  const sleepPromise = new Promise((resolve) => {
    setTimeout(resolve(), delay);
  });
};
