function openContent(evt, movie) {
    var i, tabcontent, tile;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tile = document.getElementsByClassName("tile");
    for (i = 0; i < tile.length; i++) {
      tile[i].className = tile[i].className.replace(" active", "");
    }
    document.getElementById(movie).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  
  
  
  function PLAY() {
    document.getElementById("joker").style.visibility = "visible";
  }
  
  function OFF() {
    document.getElementById("joker").style.visibility = "hidden";
    window.location.reload();
  }
  
  function PLAY1() {
    document.getElementById("tab1").style.visibility = "visible";
  }
  
  function OFF1() {
    document.getElementById("tab1").style.visibility = "hidden";
    window.location.reload();
  }
  
  function PLAY2() {
    document.getElementById("tab2").style.visibility = "visible";
  }
  
  function OFF2() {
    document.getElementById("tab2").style.visibility = "hidden";
    window.location.reload();
  }
  
  function PLAY3() {
    document.getElementById("tab3").style.visibility = "visible";
  }
  
  function OFF3() {
    document.getElementById("tab3").style.visibility = "hidden";
    window.location.reload();
  }
  
  function PLAY4() {
    document.getElementById("tab4").style.visibility = "visible";
  }
  
  function OFF4() {
    document.getElementById("tab4").style.visibility = "hidden";
    window.location.reload();
  }
  
  function PLAY5() {
    document.getElementById("tab5").style.visibility = "visible";
  }
  
  function OFF5() {
    document.getElementById("tab5").style.visibility = "hidden";
    window.location.reload();
  }
  
  
  console.log("ok")