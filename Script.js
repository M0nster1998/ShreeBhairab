const hiddenMembers = document.querySelectorAll('.member-card.hidden');
const toggleMembersButton = document.getElementById('toggle-members');

// Initially show only the first 3 members
window.onload = () => {
  // Ensure only the first 3 members are visible
  hiddenMembers.forEach(member => {
    member.style.display = 'none'; // Hide extra members initially
  });
};

// Toggle "See More" and "See Less" functionality
toggleMembersButton.addEventListener('click', () => {
  // Check if the first hidden member is already visible
  const isVisible = hiddenMembers[0].style.display === 'flex';

  // Toggle the visibility of hidden members
  hiddenMembers.forEach(member => {
    if (isVisible) {
      member.style.display = 'none'; // Hide hidden members
    } else {
      member.style.display = 'flex'; // Show hidden members
    }
  });

  // Update button text based on visibility
  toggleMembersButton.textContent = isVisible ? 'See More' : 'See Less';
});

const galleryItems = document.querySelectorAll('.gallery-item');
const fullscreenView = document.getElementById('fullscreen-view');
const fullscreenImage = document.getElementById('fullscreen-image');
const closeButton = document.querySelector('.close');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const galleryGrid = document.querySelector('.gallery-grid');
const toggleButton = document.getElementById('toggle-gallery');

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

// Toggle functionality for "See More" and "See Less"
toggleButton.addEventListener('click', () => {
  if (galleryGrid.classList.contains('expanded')) {
    galleryGrid.classList.remove('expanded');
    toggleButton.textContent = 'See More';
  } else {
    galleryGrid.classList.add('expanded');
    toggleButton.textContent = 'See Less';
  }
});
