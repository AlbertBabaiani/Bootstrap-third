
// Arrow Up

// Get the hidden div element
const scrollUpButton = document.querySelector('.up-button');

const hideHeight = 200;

// Function to toggle the visibility of the hidden Up Button based on scroll position
function toggleUpVisibility() {
  // Get the scroll position of the page
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;



  if (scrollPosition >= hideHeight) {
    scrollUpButton.classList.remove('btn-hidden');
  } else {
    scrollUpButton.classList.add('btn-hidden');
  }
}

window.addEventListener('scroll', toggleUpVisibility);


// Arrow Up End