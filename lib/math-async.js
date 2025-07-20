const sleep = (delay = 200) => {
  const sleepPromise = new Promise((resolve) => {
    setTimeout(() => resolve(), delay);
  });
  return sleepPromise;
};

const asyncSum = async (a, b) => {
  await sleep(200);
  return a + b;
};

const asyncMultiply = async (a, b) => {
  await sleep(400);
  return a * b;
};

const asyncBrokenSum = async (a, b) => {
  await sleep(300);
  return a - b;
};

module.exports = { asyncSum, asyncMultiply, asyncBrokenSum };
