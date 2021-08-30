export function formatNumber(num) {
  let population = [];
  let strNum = String(num);
  let counter = 0;

  for (let i = strNum.length - 1; i >= 0; i--) {
    population.unshift(strNum[i]);
    if (counter === 2 && i !== 0) {
      population.unshift(".");
      counter = 0;
    } else {
      counter++;
    }
  }
  return population.join("");
}
