const body = document.querySelector('body');
body.addEventListener('DOMContentLoaded', init());

function init() {
  fetchAPI();
}

async function fetchAPI() {
  await fetch('http://localhost:3000/cards')
    .then(res => res.json())
    .then(data => showAPIData(data))
    .catch(err => console.log(err));
}

function handlePrev () {
    console.log('handlePrev Ran');
    const prevBtn = document.querySelector('.prevBtn');
    const nextBtn = document.querySelector('.nextBtn');
    const firstCard = document.querySelector('.card');
    console.log(firstCard);

    let image_gallery_slide_wrapper = document.querySelector("#image_gallery_slide_wrapper");

    if(image_gallery_slide_wrapper.style.left === '0%') {
      prevBtn.removeEventListener('click', handlePrev());
    }

    image_gallery_slide_wrapper.style.left = 
      parseInt(image_gallery_slide_wrapper.style.left, 10) + 24 + '%';
      console.log(image_gallery_slide_wrapper.style.left);
}

function handleNext() {
    console.log('handleNext Ran');
    const prevBtn = document.querySelector('.prevBtn');
    const nextBtn = document.querySelector('.nextBtn');
    const firstCard = document.querySelector('.card');

    let image_gallery_slide_wrapper = document.querySelector("#image_gallery_slide_wrapper");

    if (image_gallery_slide_wrapper.style.left==='-120%') {
      nextBtn.removeEventListener('click', handleNext());
   }
   
    image_gallery_slide_wrapper.style.left = 
      parseInt(image_gallery_slide_wrapper.style.left, 10) - 24 + '%';
      console.log(image_gallery_slide_wrapper.style.left);
}

const showAPIData = humans => {
  console.log(humans);
  const results = document.querySelector('#results');
  const image_gallery_slide_wrapper = document.querySelector('#image_gallery_slide_wrapper');
  const nav = document.createElement('nav');

  image_gallery_slide_wrapper.innerHTML = '';
  image_gallery_slide_wrapper.style.width = '210%';
  image_gallery_slide_wrapper.style.left = '0%';

  // Loop through the array of data from the API
  humans.map(human => {
    const div = document.createElement('div');
    div.classList.add('card');
    nav.classList.add('card-nav');
    div.innerHTML = `
        <div class="card-content">
            <div class="card-image"><img src=${human.image_url} /></div>
            <div class="card-body">
            <div class="card-header">
            <div class="icon"><img src=${human.image_url} /></div>
                <div class="card-title">
                <h3>${human.title}</h3> 
                <div class="card-subtitle">What will you find here</div>
                </div>
                <div class="card-text"> 
                    <p>${human.text}</p>
                </div>
            </div>            
            <div class="learn-more-link">
                <a href="#!">Learn More</a>
            </div>
            </div>
        </div>
    `;    
    image_gallery_slide_wrapper.appendChild(div);
  });

  nav.innerHTML = `
    <a class="prevBtn" href="#!"><i class="fas fa-chevron-left"></i></a>
    <a class="nextBtn" href="#!"><i class="fas fa-chevron-right"></i></a>
  `
  results.appendChild(nav);

let prevBtn = document.querySelector('.prevBtn');
let nextBtn = document.querySelector('.nextBtn');

prevBtn.addEventListener('click', handlePrev);
nextBtn.addEventListener('click', handleNext);
};