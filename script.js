let wordList = [];
let inputField = document.getElementById("input");
let searchField = document.getElementById("search");

inputField.focus();

function addWord() {
  wordList.push(inputField.value);
  inputField.value = "";
}

function searchWord() {
  if (wordList.includes(searchField.value)) {
    alert("This word is already added!");
  } else {
    alert("This word doesn't exist in your dictionary. Congratulations, today you learned a new word!");
  }
  searchField.value = "";
}
