function showImage(imageSrc) {

    const mainImage = document.getElementById('main-image');
    const errorMessage = document.getElementById('error-message');

    // Reset error message visibility
    errorMessage.style.display = 'none';

    // Update the main image source
    mainImage.src = imageSrc;

}

function handleImageError() {
    const errorMessage = document.getElementById('error-message');
    const mainImage = document.getElementById('main-image');

    // Display an error message and reset the main image
    errorMessage.textContent = 'Error: Unable to load image. Please try another one.';
    errorMessage.style.display = 'block';
    mainImage.src = ''; // Clear the image source

}
