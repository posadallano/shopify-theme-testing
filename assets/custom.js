  document.addEventListener('DOMContentLoaded', addRatingTtitle, false);

  function addRatingTtitle () {
      const elem = document.createElement('legend');
      elem.classList.add('form__label');
      elem.innerText = 'Rating';
      const target = document.querySelector('.spr-starrating');
      target.parentNode.insertBefore(elem, target);
  }

  document.addEventListener( 'DOMContentLoaded', function() {
      const swiper = new Swiper('.swiper', {      
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });

      /* Collection filters */
      var ul = document.getElementById('SortBy');
      ul.addEventListener('click', function(e) {
        if (e.target.tagName === 'LI') {
          var url = new URL(window.location.href);
          url.searchParams.set('sort_by', e.target.attributes[0].nodeValue);
          window.location = url.href; 
        } 
      });
  } );
