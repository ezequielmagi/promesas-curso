let x = 10;

const promesa = new Promise((resolve, reject) => {
  if (x == 10) {
    resolve("la variable es igual a 10");
  } else {
    reject("la variable NO es igual a 10");
  }
});

promesa
  .then((res) => {
    console.log("success: " + res);
  })
  .catch((error) => {
    console.log("error: " + error);
  });
