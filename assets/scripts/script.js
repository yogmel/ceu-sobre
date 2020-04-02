(function() {
  const responsiveBtn = document.getElementById('responsiveBtn');
  const navWrapper = document.getElementById('nav-wrap');
  const nav = document.getElementById('nav');
  
  responsiveBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    navWrapper.classList.toggle('active');
  })
})()