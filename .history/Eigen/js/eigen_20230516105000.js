// Execute the following code when the DOM has finished loading
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded and parsed');

  // When the "pijl" element is clicked, scroll to the top of the page with a smooth animation
  document.querySelector('#pijl').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

// recent werk modaal
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("recentwerk-item");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


  

  

  // When the "unique-menu-toggle" element is clicked, toggle the "show" class on the "unique-nav-items" element
  document.querySelector('.unique-menu-toggle').addEventListener('click', function() {
    console.log('Hamburger menu clicked');
    document.querySelector('.unique-nav-items').classList.toggle('show');
  });

  function showModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'block';

    var countdown = 5;
    var countdownElement = document.getElementById('countdown-timer');
    countdownElement.innerHTML = countdown;

    var countdownTimer = setInterval(function () {
      countdown--;
      countdownElement.innerHTML = countdown;
      if (countdown <= 0) {
        clearInterval(countdownTimer);
        modal.style.display = 'none';
      }
    }, 1000);

    document.querySelector('.close-button').onclick = function () {
      clearInterval(countdownTimer);
      modal.style.display = 'none';
    };

    window.onclick = function (event) {
      if (event.target == modal) {
        clearInterval(countdownTimer);
        modal.style.display = 'none';
      }
    };
  }

  document.querySelector('.cf').addEventListener('submit', function (event) {
    event.preventDefault();

    // Create a new FormData object from the form
    var formData = new FormData(event.target);

    // Send the form data using AJAX
    fetch(event.target.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(function (response) {
      if (response.ok) {
        showModal();
        // Optionally, reset the form after successful submission
        event.target.reset();
      } else {
        // Handle errors
        alert('An error occurred while submitting the form. Please try again.');
      }
    }).catch(function (error) {
      // Handle network errors
      alert('A network error occurred while submitting the form. Please try again.');
    });
  });

  document.getElementById('test-modal').addEventListener('click', function () {
    showModal();
  });

});

// Execute the following code when the window is scrolled
window.addEventListener('scroll', function() {
  // Find the "pijl" element
  const pijl = document.querySelector('#pijl');
  // If the "pijl" element exists
  if (pijl) {
    // If the user has scrolled past the halfway point of the page, show the "pijl" element
    if (window.scrollY > (document.documentElement.scrollHeight - document.documentElement.clientHeight) / 2) {
      pijl.classList.add('visible');
    // Otherwise, hide the "pijl" element
    } else {
      pijl.classList.remove('visible');
    }
  }
});
