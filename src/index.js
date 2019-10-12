function factorial(n, times) {
  let fact = 1;
  for (let i = n; i > 0; i -= times) {
    fact = (BigInt(fact) * BigInt(i)).toString();
  }
  return fact
}

module.exports = function zeros(expression) {
  const factorials = expression.split('*').map((item) => {
    let digit = +item.match(/\d/g).join('');
    let times = item.match(/!/g).length;
    return factorial(digit, times)
  })
  let result = factorials.reduce((a, b) => {
    return (BigInt(a) * BigInt(b)).toString();
  }).match(/0+$/g)
  return result ? result[0].length : 0
}
