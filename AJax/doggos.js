const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const promise = fetch(DOG_URL);
const doggos = document.querySelector(".doggos");

const addNewDoggo = () => {
  const promise = fetch(DOG_URL);
  promise
    .then((response) => {
      const processingPromise = response.json();
      return processingPromise;
    })
    .then((processedResponse) => {
      const img = document.createElement("img");
      img.src = processedResponse.message;
      img.alt = "cute dog";
      doggos.appendChild(img);
    });
};

document.querySelector(".add-doggo").addEventListener("click", addNewDoggo);
