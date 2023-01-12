const search = document.querySelector(".button-91");

search.addEventListener("click", () => {
  if (search.innerText.includes("Search")) {
    search.innerText = "Fasten your seat belt!";
  } else {
    search.innerText = "Search";
  }
});

const apiKey = "AIzaSyDVq_iKY72RjOVcNQQR2LD2qsKmY6VyY6E";
const query = "full";

fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`)
  .then((response) => response.json())
  .then((data) => {
    data.items.forEach((item) => {
      // console.log(item.volumeInfo.title);
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

//shit got stuck on get the random items(with numberPicked value) in genre array

const genre =
  "FantasyAdventureRomanceContemporaryDystopianMysteryHorrorThrillerParanormalHistorical-fictionScience-fictionChildrenMemoirCookbookArtSelf-helpDevelopmentMotivationalHealthHistoryTravelGuide / How-toFamilies & RelationshipsHumor";

function splitWords(str) {
  let words = [];
  let currentWord = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "A" && str[i] <= "Z") {
      if (currentWord) {
        words.push(currentWord);
      }
      currentWord = str[i];
    } else {
      currentWord += str[i];
    }
  }
  if (currentWord) {
    words.push(currentWord);
  }
  return words;
}

const selected = [];
const getNum = 0;
const pick = document.getElementById("pick");
const numberPicked = document.querySelector(".numberPicked");
let pickNum = [];
const genreArray = splitWords(genre);
const genreCard = document.querySelector(".genreCard");
const lotteryBtn = document.querySelector(".button-48")
const genrePage = document.querySelector(".generatorPage")

function showGenrePage(){ 
  console.log("hjbhj")
  if (genrePage.classList.contains("hidden")){
     genrePage.classList.remove("hidden");
  }else {
    genrePage.classList.add("hidden")
  }
}

pick.addEventListener("click", () => {
  let asked = false;
  if (numberPicked.value > 26) {
    alert("We only provide 26 kinds of genres, sweet pie!");
  } //else if ((asked = true)) {
    //console.log("second asked = true condition");//why
    //asked = false;}
   else {
    for (let i = 0; i < numberPicked.value; i++) {
      randomItem = genreArray[Math.floor(Math.random() * genreArray.length)];
      let link = document.createElement("a")
      link.href = "https://www.googleapis.com/books/v1/{radomItem}/resourceID?parameters" //what
      let genreTitle = document.createElement("p");
      genreTitle.innerText = randomItem;
      genreTitle.appendChild(link)
      genreCard.appendChild(genreTitle);
      asked = true;
    }
  }
});
