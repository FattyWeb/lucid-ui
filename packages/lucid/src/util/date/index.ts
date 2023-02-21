function hours (step) {
  return Array.apply(null, Array(Math.ceil(24 / step))).map((item, index) => index * step)
}

function minutes (step) {
  return Array.apply(null, Array(Math.ceil(60 / step))).map((item, index) => index * step)
}

function pad (number) {
  return number < 10 ? '0' + number : number
}

function timeComponentIsDisabled (min, max, component) {
  return (min !== null && component < min) ||
    (max !== null && component > max)
}

export {
  hours,
  minutes,
  pad,
  timeComponentIsDisabled
}
