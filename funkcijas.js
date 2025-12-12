function pi(d) {
  d = Number.isInteger(d) && d >= 0 ? d : 5;
  return Number(Math.PI.toFixed(d));
}

function showPi() {
  const v = Number(document.getElementById('n').value);
  document.getElementById('out').textContent = pi(v);
function videjais(x, y) {
    return (x + y) / 2;
}
function lielakais(x, y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}
