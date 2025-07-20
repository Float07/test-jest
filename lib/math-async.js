const sleep = (delay = 2000) => {
  const sleepPromise = new Promise((resolve) => {
    setTimeout(resolve(), delay);
  });
};

const asyncSum = async (a, b) => {
  await sleep();
  return a + b;
};

const asyncMultiply = async (a, b) => {
  await sleep(4000);
  return a * b;
};

const asyncBrokenSum = async (a, b) => {
  await sleep(3000);
  return a - b;
};
