// Fetch API data onLoad
const body = document.querySelector('body');
body.addEventListener('DOMContentLoaded', fetchAPI());

function fetchAPI() {
  console.log("init");
  fetch('http://localhost:3000/cards')
    .then(res => res.json())
    .then(data => showAPIData(data))
    .catch(err => console.log(err));
}

const showAPIData = humans => {
  console.log(humans);
  const results = document.querySelector('#results');

  results.innerHTML = '';

  // Loop through the array of data from the API
  humans.map(human => {
    console.log('human: ', human);
    const div = document.createElement('div');
    div.classList.add('card', 'human');
    div.innerHTML = `
        <div class="row">
            <div class="image"><img src=${human.image_url} /></div>
            <div class="title">
                <strong>${human.title}</strong> 
            </div>
            <div class="text"> ${human.text}</div>
            <div class="author"><strong>Author:</strong> ${human.author}</div>
        </div>
    `;
    results.appendChild(div);
  });
};
