const div1 = document.getElementById('donate_icon');
const div2 = document.getElementById('footer');
const schnuppern_icon = document.getElementById('schnupper_icon');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
      // div2 ist sichtbar => div1 ausblenden
      div1.style.transform = "translateX(60px)";
      setTimeout(function(){
        schnuppern_icon.style.transform = "translateX(60px)";
      }, 100);
    } else {
      // div2 ist nicht sichtbar => div1 einblenden
      schnuppern_icon.style.transform = "translateX(0)";
      setTimeout(function(){
        div1.style.transform = "translateX(0)";
      }, 100);
    }
  });
}, {
  threshold: 0.5 // sobald 10% sichtbar sind
});
observer.observe(div2);

window_url = window.location.pathname.split("/")[1];
if(window_url == "sponsoren"){
  div1.style.display = "none";
}
if (window_url == "schnuppern"){
  schnuppern_icon.style.display = "none";
}

div1.addEventListener("click", function() {
  window.location = "/sponsoren/#spenden";
})
schnuppern_icon.addEventListener("click", function() {
  window.location = "/schnuppern/";
})