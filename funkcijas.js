function kvadrata(x) {
  x = Number(x);
  if (Number.isNaN(x)) return NaN;
  return x * x;
}

// expose to console
window.kvadrata = kvadrata;