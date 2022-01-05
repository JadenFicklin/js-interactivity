let message = document.querySelector("#message");
function addMovie(event) {
  event.preventDefault();
  let inputField = document.querySelector("input");
  let movie = document.createElement("li");
  let movieTitle = document.createElement("span");
  movieTitle.textContent = inputField.value;
  movieTitle.addEventListener("click", crossOffMovie);
  movie.appendChild(movieTitle);

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "x";
  deleteBtn.addEventListener("click", deleteMovie);
  movie.appendChild(deleteBtn);

  let ulSeclector = document.querySelector("ul");
  ulSeclector.appendChild(movie);
  inputField.value = "";
}

document.querySelector("form").addEventListener("submit", addMovie);
function deleteMovie(event) {
  event.target.parentNode.remove();
  message.textContent = "movie deleted!";
}
function crossOffMovie(event) {
  event.target.classList.toggle("checked");
  if (event.target.classList.contains("checked") === true) {
    message.textContent = "movie watched!";
  } else {
    message.textContent = "movie added back!";
  }
}

// Jadens simplified version so I can understand

// function addMovie(event) {
//   event.preventDefault();
//   let inputSelector = document.querySelector("input");
//   let movieListAdder = document.createElement("li");
//   movieListAdder.textContent = inputSelector.value;
//   movieListAdder.addEventListener("click", crossOffMovie);

//   let xButton = document.createElement("button");
//   xButton.textContent = "x";
//   xButton.addEventListener("click", deleteMovie);
//   movieListAdder.appendChild(xButton);

//   let selectMovieInputFather = document.querySelector("ul");
//   selectMovieInputFather.appendChild(movieListAdder);
// }
// document.querySelector("form").addEventListener("submit", addMovie);

// function deleteMovie(event) {
//   event.target.parentNode.remove();
// }

// function crossOffMovie(event) {
//   event.target.classList.toggle("checked");
// }
