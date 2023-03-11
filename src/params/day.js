export function match(param) {
  return /^[12]\d|3[01]|0?[1-9]$/.test(param);
}