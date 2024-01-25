window.onload=function(){
  new Typed('#typed',{
      strings:["Full Stack Developer","Coffee Lover","Batman🦇"],
      typeSpeed:100,
      backSpeed:50,
      backDelay:2000,
      loop:true,
      smartBackspace:true,
      callback:function(){}
  })


  preloaderFadeOutTime = 500;
      function hidePreloader() {
      $('.spinner-wrapper').fadeOut(preloaderFadeOutTime);
      }
      hidePreloader();


}

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
