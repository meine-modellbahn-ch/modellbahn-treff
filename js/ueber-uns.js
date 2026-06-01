var presse_type = "Team";

var presse_lis = document.getElementById("select_team_geschichte_div").getElementsByClassName("team_geschichte_p");
for (let i = 0; i < presse_lis.length; i++) {
    console.log(presse_lis[i]);
    if(presse_lis[i].id == presse_type){
      document.getElementById(presse_lis[i].id).classList.add("select_team_geschichte_type");
      if(presse_type == "Team"){
        $("#team_geschichte_div").load("team.html");
        }
        if(presse_type == "Geschichte"){
            $("#team_geschichte_div").load("geschichte.html");
        }
    }
    document.getElementById(presse_lis[i].id).addEventListener("click", function () {
      set_presse_type(presse_lis[i].id);
    });
}
function set_presse_type(id){
    presse_type = id;
    console.log(presse_type);
    for (let i = 0; i < presse_lis.length; i++) {
        document.getElementById(presse_lis[i].id).classList.remove("select_team_geschichte_type");
    }
    document.getElementById(id).classList.add("select_team_geschichte_type");

    if(presse_type == "Team"){
        $("#team_geschichte_div").load("team.html");
    }
    if(presse_type == "Geschichte"){
        $("#team_geschichte_div").load("geschichte.html");
    }
}
