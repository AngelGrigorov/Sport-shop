import toastr from 'toastr'

function createReviewValidator (review) {
    review = review.trim();
  if (review.length < 4 || review === '') {
    toastr.error('Review must be at least 4 characters long');
    return false
  }

  return true
}

export default createReviewValidator
