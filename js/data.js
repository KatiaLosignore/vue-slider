
// Array di oggetti
const pictures = [
  {
    image: 'img/01.webp',
    title: 'Marvel\'s Spiderman Miles Morale',
    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
  }, {
    image: 'img/02.webp',
    title: 'Ratchet & Clank: Rift Apart',
    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
  }, {
    image: 'img/03.webp',
    title: 'Fortnite',
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  }, {
    image: 'img/04.webp',
    title: 'Stray',
    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
  }, {
    image: 'img/05.webp',
    title: "Marvel's Avengers",
    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
  }
];



// Creo una funzione unica per i bottoni creati next e prev e thumbnails

const changePic = target => {
    // Rimuovo la classe active dall'immagine corrente
    images[currentActiveIndex].classList.remove('active');
    thumbGallery[currentActiveIndex].classList.remove('active');

    if (target === 'next') {
      // Incremento l'indice
      currentActiveIndex++;
    
      // Alla fine delle immagini, l'indice riparte dall'inizio
      if (currentActiveIndex === images.length) currentActiveIndex = 0;
    
    } else if (target === 'prev') {
      // Decremento l'indice
      currentActiveIndex--;

      // Se sono all'inizio delle immagini, l'indice riparte dalla fine
      if (currentActiveIndex < 0) currentActiveIndex = images.length -1;
    } else {
      // Setto il currentIndex sull'index dell'immagine cliccata
      currentActiveIndex = target;
    }
  
  
    // Assegno all'immagine la classe active con il nuovo indice
    images[currentActiveIndex].classList.add('active');
    thumbGallery[currentActiveIndex].classList.add('active');
}


// Recupero i bottoni creati
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const autoplaybutton = document.getElementById('autoplay-button');
const reverseButton = document.getElementById('reverse-autoplay');


// Creo una funzione start autoplay

const startAutoplay = (direction) => {
  autoplay = setInterval(() => {
    changePic(direction);
  }, 3000);

}

// Creo una funzione stop autoplay

const stopAutoplay = () => {
  clearInterval(autoplay);
  isPlaying = false;

  autoplaybutton.innerText = 'RESUME AUTOPLAY';
}

// Aggancio la funzione al bottone next
nextButton.addEventListener('click', function () {
  stopAutoplay();
  changePic('next');
});


// Aggancio la funzione al bottone prev
prevButton.addEventListener('click', function () {
  stopAutoplay();
  changePic('prev');
});


// Faccio partire l'autoplay
let autoplay;
let direction = 'next';
startAutoplay(direction);



let isPlaying = true;

// Aggancio il bottone di reverse
reverseButton.addEventListener('click', () => {
  // Stop Autoplay
  clearInterval(autoplay);

  // Inverto la direzione
  direction = direction === 'next' ? 'prev' : 'next';

  // Faccio ripartire l'autoplay
  startAutoplay(direction);

});

// Aggancio un evento al bottone autoplay
autoplaybutton.addEventListener('click', () => { 
  isPlaying = !isPlaying;

  if(!isPlaying){
    autoplaybutton.innerText = 'RESUME AUTOPLAY';
    clearInterval(autoplay);
  } else {
    autoplaybutton.innerText = 'STOP AUTOPLAY';
    startAutoplay(direction);
  }

});

// Recupero la galleria
const gallery = document.querySelector('#carousel .gallery');

// Recupero la galleria dei thumbnails6
const thumbnails = document.getElementById('thumbnails');

let galleryElements = '';
let thumbnailsElements = '';

pictures.forEach((picture, i) => {

  const img = `<img src="${picture.image}" alt ="landscape_${i}">`;
  thumbnailsElements += img;

  galleryElements += `
    <figure>
     ${img}
      <figcaption>
        <h2>${picture.title}</h2>
        <h3>${picture.text}</h3>
      </figcaption>
    </figure>
  `;
}); 


gallery.innerHTML = galleryElements;
thumbnails.innerHTML = thumbnailsElements;


// Recupero le immagini
const images = document.querySelectorAll('.gallery figure');

// Recupero i thumbnails
const thumbGallery = document.querySelectorAll('#thumbnails img');



// Uso una variabile per inserire la prima classe come active
let currentActiveIndex = 0;
images[currentActiveIndex].classList.add('active');

thumbGallery[currentActiveIndex].classList.add('active');



// Creo un ciclo per i thumbnails e applico la classe active richiamando la funzione
thumbGallery.forEach((thumb, i) => {
    
  thumb.addEventListener('click', function () {
  stopAutoplay();

  changePic(i);
  });

});
  
