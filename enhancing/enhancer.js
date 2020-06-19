module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(a, b) {
  return a + b;
  // return { ...item };
}

function get(item) {
  return { ...item };
}
