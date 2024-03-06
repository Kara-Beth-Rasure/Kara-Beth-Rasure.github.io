function generateGallery(page) {
  var basePath = 'img/' + page + '/'
  var isFail = false

  //add modal section
  $('body').append(
    '<div id="myModal" class="modal">' +
      '<span class="close cursor" onclick="closeModal()">&times;</span>' +
      '<div class="modal-content slide-container">' +
      '  <!-- Next/previous controls -->' +
      '  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>' +
      '  <a class="next" onclick="plusSlides(1)">&#10095;</a>' +
      '' +
      '  <!-- Caption text -->' +
      '  <div class="caption-container">' +
      '    <p id="caption"></p>' +
      '  </div>' +
      '  <!-- Thumbnail image controls -->' +
      '  <div class="thumbnail-container">' +
      '  </div>' +
      '</div>' +
      '</div>',
  )

  // add main images
  for (var i = 1; i < 200; i++) {
    jQuery.ajax({
      url: basePath + i + '.jpg',
      success: function () {
        var index = this.url
          .replace('img/' + page + '/', '')
          .replace('.jpg', '')
        $('.image-container').prepend(
          '<div class="col col-11 col-lg-4 gallery-labeled"><img class="gallery-img" onclick="openModal();currentSlide(' +
            index +
            ')" src="' +
            this.url +
            '" /></div>',
        )

        $('.thumbnail-container').prepend(
          '<div class="column"><img class="demo" src="' +
            this.url +
            '" onclick="currentSlide(' +
            index +
            ')"></div>',
        )

        $('.slide-container').prepend(
          '  <div class="mySlides">' +
            '<img class="slide-img" src="' +
            this.url +
            '"></div>',
        )
      },
      error: function () {
        isFail = true
      },
      async: false,
    })
    if (isFail) {
      break

      var slideIndex = 1
      showSlides(slideIndex)
    }
  }
}

// Open the Modal
function openModal() {
  document.getElementById('myModal').style.display = 'block'
}

// Close the Modal
function closeModal() {
  document.getElementById('myModal').style.display = 'none'
}

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n))
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n))
}

function showSlides(n) {
  var i
  var slides = document.getElementsByClassName('mySlides')
  var dots = document.getElementsByClassName('demo')
  //var captionText = document.getElementById('caption')
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '')
  }
  slides[slides.length - slideIndex].style.display = 'block'
  dots[slides.length - slideIndex].className += ' active'
  //captionText.innerHTML = dots[slides.length-slideIndex].alt
}
