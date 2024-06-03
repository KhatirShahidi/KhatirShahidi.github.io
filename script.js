let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// assign dom elements to variables
const btnMenu = document.querySelector("#menuIcon");
const btnClose = document.querySelector("#closeIcon");
const sidebar = document.querySelector("#sidebar");
const sidebarBackground = document.querySelector("#sidebarBackground");

// addEventListener(a, b)
// a: event name
// b: function to run when event happens
btnMenu.addEventListener("click", function () {
  console.log("menu button clicked");
  //   sidebar.style.display = "block";
  sidebarBackground.style.visibility = "visible";
  sidebar.style.right = "0";
});

btnClose.addEventListener("click", function () {
  console.log("close button clicked");
  //   sidebar.style.display = "none";
  sidebarBackground.style.visibility = "hidden";
  sidebar.style.right = "-200px";
});

sidebarBackground.addEventListener("click", function () {
  console.log("background clicked");
  sidebarBackground.style.visibility = "hidden";
  sidebar.style.right = "-200px";
});

// Form Area

const contactForm = document.querySelector(".text");
const contactBtn = document.querySelector(".contact");

contactBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  const nameInput = document.querySelector('input[name="Name"]');
  const emailInput = document.querySelector('input[name="Email"]');
  const messageInput = document.querySelector('textarea[name="Message"]');

  // Basic Validation
  let isValid = true;

  if (nameInput.value.trim() === "") {
    isValid = false;
    nameInput.classList.add("error"); // Add error class for styling
  } else {
    nameInput.classList.remove("error"); // Remove error class if fixed
  }

  if (emailInput.value.trim() === "" || !validateEmail(emailInput.value)) {
    isValid = false;
    emailInput.classList.add("error");
  } else {
    emailInput.classList.remove("error");
  }

  if (messageInput.value.trim() === "") {
    isValid = false;
    messageInput.classList.add("error");
  } else {
    messageInput.classList.remove("error");
  }

  // If valid, can send the form data
  if (isValid) {
    console.log("Form is valid! Sending data...");
    // API here

    // Clear form after successful submission (optional)
    contactForm.reset();
  }
});