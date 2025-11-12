// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // ---CODE FOR PRODUCT REVIEW GRID ---
    // Selectors use the new unique IDs
    const loadMoreBtn = document.getElementById('product-review-load-more-btn');
    const writeReviewBtn = document.getElementById('product-review-write-btn');

    // Add click event listener for "Load More"
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            console.log('Loading more product reviews...'); // Useful for debugging

            loadMoreBtn.textContent = 'Loading...';
            loadMoreBtn.disabled = true;

            setTimeout(() => {
                loadMoreBtn.textContent = 'Load More Reviews';
                loadMoreBtn.disabled = false;
                alert('More reviews would be loaded here!');
            }, 1500);
        });
    }

    // Add click event listener for "Write a Review"
    if (writeReviewBtn) {
        writeReviewBtn.addEventListener('click', () => {
            console.log('Opening product review modal...'); // Useful for debugging
            alert('The "Write a Review" form would open here!');
        });
    }
});