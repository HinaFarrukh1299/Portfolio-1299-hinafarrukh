//=====Menu=====
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");

//===Menue-show-hidden
navToggle.addEventListener('click',()=>{
navMenu.classList.toggle('show-menu');
navToggle.classList.toggle('animate-toggle');
})
/*===Remove-menu-mobile===*/
const navLink = document.querySelectorAll('.nav-link');
const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navToggle.classList.remove("animate-toggle");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n)=>{
  n.addEventListener('click',linkAction)
})
/*===Change-Background-Header===*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  this.scrollY>=20 ? header.classList.add("bg-header") : header.classList.remove("bg-header");
}
window.addEventListener('scroll',scrollHeader);
/*===Scroll Section's Active  Link===*/
const sections = document.querySelectorAll('section[id]');
const scrollActive = () => {
  const scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop -58;
    const sectionId = current.getAttribute('id');
    const sectionClass =document.querySelector('.nav-menu a[href*="'+ sectionId +'"]');
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight ){
      sectionClass.classList.add('active-link');
    }
    else{
      sectionClass.classList.remove('active-link');
    }
  })
};
window.addEventListener('scroll',scrollActive);
/*===Services-Swiper===*/
var servicesSwiper = new Swiper(".services-swiper", {
    spaceBetween: 32 ,
    pagination: {
        el: ".swiper-pagination",
        clickable: true ,
      },
       breakpoints: {
      
        768: {
          slidesPerView: 2,
        
        },
        1208: {
          slidesPerView: 3,
        
        },
      },
});
//portfolio pargraph line limit




document.querySelectorAll('.toggle-btn').forEach((btn, index) => {
  const text = btn.previousElementSibling; // The p.description before the button

  btn.addEventListener('click', () => {
    text.classList.toggle('expanded');

    btn.textContent = text.classList.contains('expanded')
      ? "Read less"
      : "Read more";
  });
});





/*===Mix-it-up Filter Portfolio===*/
var mixer = mixitup('.work-container', {
    selectors: {
        target: '.mix'
    },
    animation: {
        duration: 300
    }
});
/* Active-Work */
const linkWork = document.querySelectorAll('.work-item');
function activeWork() {
  linkWork.forEach((a) => {
    a.classList.remove('active-work');
   
  })
   //a.classList.add('active-work')
    this.classList.add('active-work')
}

linkWork.forEach((l) => l.addEventListener('click',activeWork)

)
/*== Resume ===*/
const accordianItems = document.querySelectorAll('.resume-item');

accordianItems.forEach((aI) => {
  const header = aI.querySelector('.resume-header') , 
  content = aI.querySelector('.resume-content'),
  icon = aI.querySelector('.resume-icon i') ;

  header.addEventListener('click',() => {
    const isOpen = aI.classList.toggle('accordian-open');
    content.style.height = isOpen ? content.scrollHeight + 'px':'0';
    icon.className = isOpen ? 'ri-subtract-line' : 'ri-add-line';

    accordianItems.forEach((otherAi) => {
if(otherAi!==aI && otherAi.classList.contains('accordian-open'))
{

otherAi.querySelector('.resume-content').style.height = '0px';
otherAi.querySelector('.resume-icon i').classList = 'ri-add-line';
otherAi.classList.remove('accordian-open');

}
    })
  })
} )


/*== Testimonials Swiper ===*/
var testimonialsSwiper = new Swiper(".testimonials-swiper", {
    spaceBetween: 32 ,
    pagination: {
        el: ".swiper-pagination",
        clickable: true ,
      },
       breakpoints: {
      
        768: {
          slidesPerView: 2,
        
        },
        1208: {
          slidesPerView: 3,
        
        },
      },
});
/*== Email JS ===*/
const contactForm = document.getElementById("contact-form");
const contactName = document.getElementById("contact-name");
const contactEmail = document.getElementById('contact-email');
const contactSubject = document.getElementById('contact-subject');
const contactMessage = document.getElementById('contact-message');
const message = document.getElementById('message');

const sendEmail = (e) => {
  e.preventDefault();
  if(contactName.value==="" || contactEmail.value==="" || contactSubject.value==="" || contactMessage.value==="")
  {
    message.classList.remove('color-first');
    message.classList.add('color-red');
    message.textContent='Fill All The Input Fields';
  setTimeout(()=>{
      message.textContent="";
    }, 3000)
  
  }
  else{
    emailjs.sendForm('service_xaz9nvo', 'template_ar6qgnu', '#contact-form','gy_NlrshER7SpBkvH')
    .then(() => {
    message.classList.add('color-first');
    message.textContent='Message Sent !';

      setTimeout(()=>{
      message.textContent="";
    }, 5000);
    contactName.value="";
contactEmail.value="";
contactSubject.value="";
contactMessage.value="";
  },
  (error) => {
    alert('Ooops something went wrong',error);
  },
);
  }
}

contactForm.addEventListener('submit',sendEmail);

//Resume
document.getElementById("email").innerHTML =
    " hfarrukh1299" + "@" + "gmail.com";


/*-===Style-Switcher===-*/
const styleSwitcher = document.getElementById('style-switcher');
const switcherToggle = document.getElementById('switcher-toggle'),
switcherClose = document.getElementById('switcher-close');

/*==Switcher Show==*/
switcherToggle.addEventListener('click',() => {
    styleSwitcher.classList.add('show-switcher')
})
/*==Switcher Hidden==*/
switcherClose.addEventListener('click',() => {
    styleSwitcher.classList.remove('show-switcher');
})

/*====Theme-Colors====*/
const colors = document.querySelectorAll('.style-switcher-color');
colors.forEach((color) => {
    color.onclick = () => {
       const activeColor = color.style.getPropertyValue('--hue');

       colors.forEach((c) => { c.classList.remove('active-color');
        color.classList.add('active-color');
        document.documentElement.style.setProperty('--hue',activeColor);

       
    })
}

})
/*====Light/Dark-Mode====*/
let currentTheme = 'light';
document.body.className = currentTheme ; 
document.querySelectorAll('input[name="body-Theme"]').forEach((input) => {
    input.addEventListener('change', ()=>{
        currentTheme = input.value ;
        document.body.className = currentTheme ;
    })
})
    
/*==================== Menu ====================*/
/*const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");

//=== Show/Hide Menu ===
if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show-menu");
    navToggle.classList.toggle("animate-toggle");
  });
}

/*==================== Services Swiper ====================*/
/*var servicesSwiper = new Swiper(".services-swiper", {
  spaceBetween: 32,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1208: {
      slidesPerView: 3,
    },
  },
});

/*==================== Style Switcher ====================*/
/*const styleSwitcher = document.getElementById("style-switcher");
const switcherToggle = document.getElementById("switcher-toggle");
const switcherClose = document.getElementById("switcher-close");

/*== Show Switcher ==*/
/*if (switcherToggle && styleSwitcher) {
  switcherToggle.addEventListener("click", () => {
    styleSwitcher.classList.add("show-switcher");
  });
}

/*== Hide Switcher ==*/
/*if (switcherClose && styleSwitcher) {
  switcherClose.addEventListener("click", () => {
    styleSwitcher.classList.remove("show-switcher");
  });
}

/*==================== Theme Colors ====================*/
/*const colors = document.querySelectorAll(".style-switcher-color");

colors.forEach((color) => {
  color.addEventListener("click", () => {
    const activeColor = color.style.getPropertyValue("--hue");

    colors.forEach((c) => c.classList.remove("active-color"));
    color.classList.add("active-color");

    document.documentElement.style.setProperty("--hue", activeColor);
  });
});

/*==================== Light/Dark Mode ====================*/
// Default theme
/*let currentTheme = "light";
document.body.classList.add(currentTheme);

document.querySelectorAll('input[name="body-Theme"]').forEach((input) => {
  input.addEventListener("change", () => {
    // Remove old theme before applying new one
    document.body.classList.remove("light", "dark");

    currentTheme = input.value;
    document.body.classList.add(currentTheme);
  });
});*/



