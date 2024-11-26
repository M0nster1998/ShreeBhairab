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
const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const closeModal = document.querySelector('.close');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

let currentImageIndex = 0;

// Open modal on image click
galleryItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImage.src = item.src; // Set the source of the clicked image
    currentImageIndex = index; // Store the current image index
  });
});

// Close modal
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Navigate to the previous image
prevButton.addEventListener('click', () => {
  currentImageIndex =
    (currentImageIndex - 1 + galleryItems.length) % galleryItems.length;
  modalImage.src = galleryItems[currentImageIndex].src;
});

// Navigate to the next image
nextButton.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % galleryItems.length;
  modalImage.src = galleryItems[currentImageIndex].src;
});

// Close modal when clicking outside the image
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
