var presse_type = "Zeitungen";

var presse_lis = document.getElementById("presse_ul").getElementsByClassName("presse_nav_li");
for (let i = 0; i < presse_lis.length; i++) {
    console.log(presse_lis[i]);
  if(presse_lis[i].id == presse_type){
    document.getElementById(presse_lis[i].id).classList.add("select_presse_type");
  }
  document.getElementById(presse_lis[i].id).addEventListener("click", function () {
    set_presse_type(presse_lis[i].id);
  });
}
function set_presse_type(id){
    presse_type = id;
    console.log(presse_type);
    for (let i = 0; i < presse_lis.length; i++) {
        document.getElementById(presse_lis[i].id).classList.remove("select_presse_type");
    }
    document.getElementById(id).classList.add("select_presse_type");

  switch(presse_type) {
    case "Zeitungen":
      $("#content").load("zeitungen.html");
      break;
    case "Bahn-Jahrbuch":
      $("#content").load("bjb.html");
      break;
    case "Magazine":
      $("#content").load("magazine.html");
      break;
  }
}
