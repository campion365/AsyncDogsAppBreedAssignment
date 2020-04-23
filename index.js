'use strict';


function getDogImage(dogBreedInput) {
  fetch('https://dog.ceo/api/breed/' + dogBreedInput + '/images/random')
    .then(response => {
      if (response.ok)  {
         console.log ("response sent");
         return response.json();
      }
      throw new Error ()
    })
      // .then (response => response.json())
      .then(responseJson => displayResults(responseJson))
      .catch(Error)
        {(alert('Not a recognized breed. Please try again'))}
};


function displayResults(responseJson) {
    console.log(responseJson);
    $('.api-results').empty();
      $('.api-results').append(`<img src="${responseJson.message}">`);

  }


function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let dogBreedInput = $('#breed-input').val();
    getDogImage(dogBreedInput);
  });
}


$(function() {
  console.log('App loaded - Waiting for submit');
  watchForm();
});