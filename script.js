let outputDiv = document.getElementById("output");

function manipulateData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  });
}

manipulateData()
  .then((arr) => {
    let evenNumbers = arr.filter(num => num % 2 === 0);

    return new Promise((resolve) => {
      setTimeout(() => {
        outputDiv.textContent = evenNumbers.toString(); // "2,4"
        resolve(evenNumbers);
      }, 1000);
    });
  })
  .then((evenNumbers) => {
    let doubled = evenNumbers.map(num => num * 2);

    return new Promise((resolve) => {
      setTimeout(() => {
        outputDiv.textContent = doubled.toString(); // "4,8"
        resolve(doubled);
      }, 2000);
    });
  });