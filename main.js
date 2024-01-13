// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const emptyHeart = document.querySelectorAll('.like-glyph')
const errorMessage = document.getElementById('modal-message')
const errorModal = document.getElementById('modal')
emptyHeart.forEach((char)=> {


char.addEventListener('click', function() {
  // Simulate making a server request
  mimicServerCall()
    .then(response => {
      console.log(response) ;
      
      // Handle the successful response here 
        // Check if the heart has the .activated-heart class
  if (char.classList.contains('activated-heart')) {
    // Remove the .activated-heart class
    char.classList.remove('activated-heart');
    // Change the heart back to an empty heart
    char.textContent = EMPTY_HEART // Replace with appropriate empty heart symbol or image
  }
  else {
    char.classList.add('activated-heart');
      char.textContent = FULL_HEART 
  }

    })
    .catch(error => {
      console.error(error);
      // Handle the error here
      errorMessage.textContent = "Server request failed! Please try again.";
      errorModal.classList.remove("hidden");

          // Hide the modal after 3 seconds
    setTimeout(() => {
      errorModal.classList.add("hidden");
    }, 3000);
    });

});

})

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}







// function mimicServerCall() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Server response');
//     }, 2000); 
//   });
// }



// function mimicServerCall() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Server response');
//     }, 2000);
//   });
// }