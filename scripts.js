
function isScrolledIntoView(el) {
    const rect = el.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;
  
    // Only completely visible elements return true:
    const isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
    // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
  }

  function hamburgerMenu() {
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.querySelector(".mobile-menu");
    // const subMenus = document.getElementsByClassName("sub-menu");
    // const parents = document.querySelectorAll('.mm-inner > ul > li');
    // const bg = document.querySelector('.mm-bg');
    // const body = document.querySelector('body');
    const header = document.querySelector('#header');
    let hamburgerOpen = false;
    $(hamburger).click(function() {
        console.log('jquery');
    });
    hamburger.addEventListener("click", () => {
      if (!hamburgerOpen) {
        // let subMenuTotals = 0;
        // for (var i = 0; i < subMenus.length; i++) {
        //   let scrollHeight = parseInt(subMenus[i].scrollHeight);
        //   subMenuTotals = scrollHeight + subMenuTotals;
        // }
        hamburger.classList.add("open");
        hamburgerOpen = true;
        // mobileMenu.style.maxHeight =
        //   mobileMenu.scrollHeight + subMenuTotals + "px";
        $(mobileMenu).slideToggle();
        // $(bg).slideToggle();
        // body.style.overflow = 'hidden';
        // $(header).toggleClass('open');
      } else {
        hamburger.classList.remove("open");
        hamburgerOpen = false;
        // mobileMenu.style.maxHeight = null;
        $(mobileMenu).slideToggle();
        // $(bg).slideToggle();
        // body.style.overflow = 'visible';
        // $(header).toggleClass('open');


      }
    });

    // parents.forEach(function(parent) {
    //   let child = parent.querySelector('ul');
    //   $(parent).append('<i class="fas fa-chevron-down"></i>');
    //   let chevron = parent.querySelector('i');


    //   parent.addEventListener('click',function() {
    //     $(child).slideToggle();
    //     $(chevron).toggleClass('fa-chevron-down');
    //     $(chevron).toggleClass('fa-chevron-up');

    //   });
    // });
}
function updateHeader() {
    if ($(window).scrollTop() > 50) {
        $('#header').addClass('scrolled');
    } else {
        $('#header').removeClass('scrolled');
    }
}

$(window).on('scroll', updateHeader);

updateHeader();
  window.onload = function () {
    try {
        hamburgerMenu();
        console.log('js');
    } catch(e) {
        console.log(e);
    }
  }

  // window.onscroll = function () {
  //   if (document.querySelector("h2.splitting")) {
  //       const titles = document.querySelectorAll("h2.splitting");
  
  //       titles.forEach(function (title) {
  //         if (isScrolledIntoView(title) === true) {
  //           title.classList.add("active-split");
  //         } else {
  //           title.classList.remove("active-split");
  //         }
  //       });
  //     }
  // }