// Enhanced Function to create a twinkling star with better visibility and animation
function createStar() {
    const star = document.createElement('div');
    star.style.width = "3px"; // Slightly larger stars
    star.style.height = "3px";
    star.style.backgroundColor = "white";
    star.style.position = "absolute";
    star.style.top = `${Math.random() * window.innerHeight}px`;
    star.style.left = `${Math.random() * window.innerWidth}px`;
    star.style.opacity = Math.random();
    star.className = 'twinkle'; // Ensure you have a 'twinkle' animation defined in CSS
    document.body.appendChild(star);

    // Remove the star after 10 seconds to avoid cluttering the DOM
    setTimeout(() => {
        star.remove();
    }, 10000);
}

// Enhanced Function to create floating hearts with varied sizes and colors
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * 100}%`; // Random horizontal position
    heart.style.color = `hsl(${Math.random() * 360}, 100%, 75%)`; // Random color
    heart.style.fontSize = `${Math.random() * 20 + 10}px`; // Random size
    heart.style.animationDuration = `${Math.random() * 2 + 3}s`; // Random animation time

    document.getElementById('hearts-container').appendChild(heart);

    // Remove heart after animation to avoid DOM overload
    setTimeout(() => {
        heart.remove();
    }, 5000); // Match longest possible animation duration
}

// Improved Intersection Observer for smoother image animations
document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    }, {
        threshold: 0.5 // Adjusted threshold for smoother transitions
    });

    document.querySelectorAll('.scroll-image').forEach((img) => {
        observer.observe(img);
    });
});

// Efficient smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Create 100 stars on page load
for (let i = 0; i < 100; i++) {
    createStar();
}

// Create a new heart every 500ms
setInterval(createHeart, 500);

$(function() {
    var angle = 0;
    var figures = $('#carousel3d figure');
    var numOfFigures = figures.length;
    var theta = 360 / numOfFigures;
    var currentFigure = 0;
  
    figures.each(function(i) {
      $(this).css({
        transform: 'rotateY(' + i * theta + 'deg) translateZ(288px)'
      });
    });
  
    function rotateCarousel() {
      var angle = currentFigure * -theta;
      $('#carousel3d').css({
        transform: 'rotateY(' + angle + 'deg)'
      });
    }
  
    // Next image rotation
    $('#next').on('click', function() {
      currentFigure++;
      rotateCarousel();
    });
  
    // Previous image rotation
    $('#prev').on('click', function() {
      currentFigure--;
      rotateCarousel();
    });
  });