module.exports = function check(str, bracketsConfig) {
  let result = 0;
  let x = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (str[i] == bracketsConfig[j][0]) {
        result += 1;
      }
      if (str[i] == bracketsConfig[j][1]) {
        result -= 1;
      }
      if (str[i] == bracketsConfig[j][0] && str[i + 1] == bracketsConfig[j][1]) {
        x += 1;
      }
      if (result < 0) {
        return false;
      }
    }
  }
  if (x == 0) {
    return false;
  }
  return ((result == 0) ? true : false);
}
// not finish yet...