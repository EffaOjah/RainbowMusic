let progress = document.getElementById('progressbar');
    let totalHeight = document.body.scrollHeight -
      window.innerHeight;
    window.onscroll = function(){
      let progressHeight = (window.pageYOffset / totalHeight)*100;
    progress.style.height = progressHeight + "%"};

function show(){
    document.getElementById('showandhide').style.display="block"
    document.getElementById('showandhide').style.visibility="visible"
    document.getElementsById('search').style.display="none"
}

function hide(){
    document.getElementById('showandhide').style.display="none"
    document.getElementsById('search').style.display="none"
}

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
  document.getElementById("dark-bg").style.width = "100%";
  document.querySelector('.closebtn').style.display = "block";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("dark-bg").style.width = "0";
  document.querySelector('.closebtn').style.display = "none";
}
function openSearch() {
  document.getElementById('search-div').style.display = "block";
  document.getElementById("mySidenav").style.display = "none";
}
function closeSearch() {
  document.getElementById('search-div').style.display = "none";
  document.getElementById("mySidenav").style.display = "block";
}