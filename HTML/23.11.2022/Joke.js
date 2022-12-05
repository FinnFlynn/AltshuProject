function getJoke() {
  fetch('https://api.chucknorris.io/jokes/random')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return joke = data.value;
    })

  // return console.log(joke)

  let jokeText = document.getElementById('joke');
  jokeText.textContent = joke;
}



