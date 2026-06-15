
document.addEventListener('DOMContentLoaded', function(){
  const waBtn = document.getElementById('waBtn');
  const waMenu = document.getElementById('waMenu');
  if(waBtn && waMenu){
    waBtn.addEventListener('click', function(e){
      e.preventDefault();
      waMenu.classList.toggle('show');
    });
    document.addEventListener('click', function(e){
      if(!waMenu.contains(e.target) && !waBtn.contains(e.target)){
        waMenu.classList.remove('show');
      }
    });
    
  }

  const counters = document.querySelectorAll('[data-count]');
  const runCounter = (el) => {
    const target = parseInt(el.dataset.count,10);
    const suffix = el.dataset.suffix || '';
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 60));
    const timer = setInterval(() => {
      current += step;
      if(current >= target){
        current = target;
        clearInterval(timer);
      }
      el.textContent = current.toLocaleString() + suffix;
    }, 25);
  };
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        runCounter(entry.target);
        io.unobserve(entry.target);
      }
    });
  }, {threshold:0.5});
  counters.forEach(c => io.observe(c));

  const slides = document.querySelectorAll('.slide');
  let index = 0;
  if(slides.length){
    slides[0].classList.add('active');
    setInterval(() => {
      slides[index].classList.remove('active');
      index = (index + 1) % slides.length;
      slides[index].classList.add('active');
    }, 4000);
  }
});
const menuToggle = document.getElementById("menu-toggle");
const menu = document.querySelector(".menu");

if(menuToggle && menu){
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}



const footerWhatsapp = document.getElementById("footerWhatsapp");
const footerWaMenu = document.getElementById("footerWaMenu");

if (footerWhatsapp && footerWaMenu) {
  footerWhatsapp.addEventListener("click", function(e) {
    e.preventDefault();
    footerWaMenu.classList.toggle("show");
  });
}
const destinationCards = document.querySelectorAll(".destination-card");

const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

destinationCards.forEach(card => {
  cardObserver.observe(card);
});