function afficherInfos() {
  var select = document.getElementById("select");
  var option = select.options[select.selectedIndex].value;
  var info = document.getElementById("info");
  
  if (option == "appartement") {
    info.innerHTML = "Vous avez sélectionné un appartement.";
  } else if (option == "maison") {
    info.innerHTML = "Vous avez sélectionné une maison.";
  } else if (option == "villa") {
    info.innerHTML = "Vous avez sélectionné une villa.";
  }
}