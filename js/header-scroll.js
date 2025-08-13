var menu_open = false;

const div = document.getElementById('nav');
const hatOverflow = div.scrollWidth > div.clientWidth;

if (hatOverflow) {
  console.log('Der Inhalt hat Overflow.');
  overflow = true;

  document.getElementById('nav_ul').querySelectorAll('li').forEach(child => {
    child.remove();
  });
  document.getElementById('nav_ul').querySelectorAll('img').forEach(child => {
    child.remove();
  });
  document.getElementById('mobile_nav').style.display = "auto";
  document.getElementById('menu_button').style.display = "flex";

  document.getElementById('nav_img').style.display = 'none';
  document.getElementById('nav_img_mobile').style.display = 'block';

} else {
  console.log('Kein Overflow vorhanden.');
  overflow = false;

  document.getElementById('mobile_nav').style.display = "none";
  document.getElementById('menu_button').style.display = "none";

  document.getElementById('nav_img').style.display = 'block';
  document.getElementById('nav_img_mobile').style.display = 'none';
}

width();


var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  if (screen.width > 425) {
    var currentScrollPos = window.pageYOffset;
    if (window.scrollY <= 70) {
      if (window.innerWidth <= 425) {
        document.getElementById("header").style.height = "145px";
      } else {
        document.getElementById("header").style.height = "170px";
      }
      document.getElementById("top").style.display = "flex";
      document.getElementById("nav").style.alignItems = "start";
      document.getElementById("nav_img").style.visibility = "hidden";
      document.getElementById("nav_img").style.opacity = "0";
      document.getElementById("nav_img").style.margin = "0";
      document.getElementById("nav_img").style.width = "0";
      document.getElementById("nav").style.height = "60px";
      document.getElementById("top").style.height = "110px";
      document.getElementById("logo").style.height = "80%";
      if (currentScrollPos < prevScrollpos) {
        window.scrollTo(0, 0);
      }
    }
    else {
      document.getElementById("header").style.height = "70px";
      document.getElementById("top").style.display = "none";
      document.getElementById("nav").style.alignItems = "center";
      document.getElementById("nav").style.height = "100%";
      document.getElementById("nav_img").style.visibility = "visible";
      document.getElementById("nav_img").style.opacity = "1";
      document.getElementById("nav_img").style.margin = "0 15px 0 1px";
      document.getElementById("nav_img").style.width = "auto";
    }
  }
  prevScrollpos = currentScrollPos;
  width();
}

function width(){
  console.log(window.innerWidth);
  if (window.innerWidth < 1440) {
    document.getElementById("profile_div_text").style.width = "0";
    document.getElementById("profile_div_text").style.margin = "0";
    document.getElementById("profile_div_text").style.display = "none";
    document.getElementById("profile_div_text").style.opacity = "0";
    document.getElementById("contact_text").style.display = "none";
    document.getElementById("contact_link_svg").style.marginRight = "0";
    document.getElementById("contact_link").style.padding = "10px 10px";
  }
  if (window.innerWidth > 1240) {
    document.getElementById("profile_div_text").style.width = "auto";
    document.getElementById("profile_div_text").style.margin = "0 20px 0 10px";
    document.getElementById("profile_div_text").style.display = "block";
    document.getElementById("profile_div_text").style.opacity = "1";
  }
  if (window.innerWidth > 1440) {
    document.getElementById("contact_text").style.display = "block";
    document.getElementById("contact_link_svg").style.marginRight = "10";
    document.getElementById("contact_link").style.padding = "10px 15px";
  }
}

window_url = window.location.pathname.split("/")[1];
if(window_url == ""){
  window_url = "home";
}

var lis = document.getElementById("header").getElementsByTagName("li");
for (let i = 0; i < lis.length; i++) {
  if(lis[i].id == window_url){
    document.getElementById(lis[i].id).classList.add("select_link");
  }
  document.getElementById(lis[i].id).addEventListener("click", function () {
    if (lis[i].id != "home") {
      window.location = "/" + lis[i].id + "/";
    } else {
      window.location = "/";
    }
  });
}

function open_menu(){
  document.getElementById('mobile_nav').style.opacity = 1;
  var lis = document.getElementsByTagName("li");
  var height = 42 * lis.length;
  document.getElementById('mobile_nav').style.height = height.toString()+"px";
}
function close_menu(){
  document.getElementById('mobile_nav').style.opacity = 0;
  document.getElementById('mobile_nav').style.height = 0;
}

document.getElementById("menu_button").addEventListener("click", function () {
  if(!menu_open){
    open_menu();
    document.getElementById('menu_button').classList.add("menu_div_checked");
    menu_open = true;
  } else {
    close_menu();
    document.getElementById('menu_button').classList.remove("menu_div_checked");
    menu_open = false;
  }
})