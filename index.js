const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("hey!");
    } else {
      reject("Whooooops!");
    }
  });
};

somethingWillHappen()
  .then((Response) => console.log(Response))
  .catch((err) => console.error(err));

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("true");
      }, 2000);
    } else {
      const error = new Error("whooooops");
      reject(error);
    }
  });
};

somethingWillHappen2()
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
