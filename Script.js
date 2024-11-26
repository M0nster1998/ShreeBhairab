// Toggle functionality for Members
document.querySelector('.toggle-members').addEventListener('click', function () {
  const extraMembers = document.querySelector('.extra-members');
  if (extraMembers.style.display === 'none' || extraMembers.style.display === '') {
    extraMembers.style.display = 'grid';
    this.textContent = 'See Less';
  } else {
    extraMembers.style.display = 'none';
    this.textContent = 'See More';
  }
});

const galleryItems = document.querySelectorAll('.gallery-item');
const fullscreenView = document.getElementById('fullscreen-view');
const fullscreenImage = document.getElementById('fullscreen-image');
const closeButton = document.querySelector('.close');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentImageIndex = 0;

// Open Fullscreen View
galleryItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    currentImageIndex = index;
    updateFullscreenImage();
    fullscreenView.classList.remove('hidden');
  });
});

// Close Fullscreen View
closeButton.addEventListener('click', () => {
  fullscreenView.classList.add('hidden');
});

// Show Previous Image
prevButton.addEventListener('click', () => {
  currentImageIndex =
    (currentImageIndex - 1 + galleryItems.length) % galleryItems.length;
  updateFullscreenImage();
});

// Show Next Image
nextButton.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % galleryItems.length;
  updateFullscreenImage();
});

// Update Fullscreen Image
function updateFullscreenImage() {
  const currentImage = galleryItems[currentImageIndex];
  fullscreenImage.src = currentImage.src;
}

// Close Fullscreen on Outside Click
fullscreenView.addEventListener('click', (event) => {
  if (event.target === fullscreenView) {
    fullscreenView.classList.add('hidden');
  }
});

