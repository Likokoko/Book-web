const search = document.querySelector(".button-91");

search.addEventListener("click", () => {
  if (search.innerText.includes("Search")) {
    search.innerText = "Fasten your seat belt!";
  } else {
    search.innerText = "Search";
  }
});

const apiKey = "AIzaSyDVq_iKY72RjOVcNQQR2LD2qsKmY6VyY6E";
const query = "science fiction";

fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`)
  .then((response) => response.json())
  .then((data) => {
    data.items.forEach((item) => {
      console.log(item.volumeInfo.title);
    });
  });

const signInBtn = document.querySelector(".button-4");
const signInForm = document.querySelector(".signInForm");

signInBtn.addEventListener("click", () => {
  if (signInForm.classList.contains("hidden")) {
    signInForm.classList.remove("hidden");
    signInBtn.innerText = "Wait let me think about it!";
  } else {
    signInForm.classList.add("hidden");
    signInBtn.innerText = "Sign in now";
  }
});
