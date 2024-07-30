// nav links
document.addEventListener("DOMContentLoaded", function() {
  const navItems = document.querySelectorAll(".nav-item");
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(link => {
    link.addEventListener("click", function() {
      navItems.forEach(item => item.classList.remove("active"));
      this.parentElement.classList.add("active");
    });
  });
});

// reviews Home
$(document).ready(function () {
  $('#toggle-reviews').click(function () {
      var moreReviews = $('.more-reviews');
      var caret = $(this).find('.caret');

      if (moreReviews.css('display') === 'none' || moreReviews.css('display') === '') {
          moreReviews.removeClass('fade-out').addClass('fade-in').css('display', 'flex');
          $(this).html('See less reviews <span class="caret caret-up"></span>');
      } else {
          moreReviews.removeClass('fade-in').addClass('fade-out');
          setTimeout(function () {
              moreReviews.css('display', 'none');
          }, 1000);
          $(this).html('See more reviews <span class="caret"></span>');
      }
  });
});

  // blog
  $(document).ready(function () {
    $('.dropdown-toggle-blog').on('click', function (e) {
      e.stopPropagation();
      $(this).next('.dropdown-menu').toggleClass('active');
    });
    // Close dropdown when clicking outside
    $(document).on('click', function (e) {
      if (!$(e.target).closest('.dropdown-toggle-blog').length && !$(e.target).closest('.dropdown-menu').length) {
        $('.dropdown-menu').removeClass('active');
      }
    });
    // Close dropdown when an item is clicked
    $('.dropdown-menu').on('click', '.dropdown-item', function () {
      $(this).closest('.dropdown-menu').removeClass('active');
    });
  });
  
// mores less button
function toggleContent() {
  var content = document.getElementById('moreContent');
  var button = document.getElementById('toggleButton');

  if (content.classList.contains('open')) {
    content.classList.remove('open');
    button.textContent = 'More';
  } else {
    content.classList.add('open');
    button.textContent = 'Less';
  }
}
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('registrationForm');
  form.classList.add('show');
});

  // More Work Home
  document.querySelector('.morework-section').addEventListener('mousemove', function (e) {
    var items = document.querySelectorAll('.morework-item img');
    var rect = this.getBoundingClientRect(); // Use 'this' to refer to the container
    
    var containerCenterX = rect.left + rect.width / 2;
    var containerCenterY = rect.top + rect.height / 2;
    
    var mouseX = e.clientX - containerCenterX;
    var mouseY = e.clientY - containerCenterY;
    
    items.forEach(function (img) {
        var depth = img.closest('.morework-item').dataset.depth || 1;
        
        var xMovement = Math.max(Math.min(mouseX / (10 * depth), rect.width / 2), -rect.width / 2);
        var yMovement = Math.max(Math.min(mouseY / (10 * depth), rect.height / 2), -rect.height / 2);

        img.style.transform = 'translate3d(' + xMovement + 'px, ' + yMovement + 'px, 0)';
    });
});

