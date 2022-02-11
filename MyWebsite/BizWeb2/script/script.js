const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

var repl = /\wbox/;
var filename="fbox";
var catgmenu;
var boxitem;
var mysrcpath;

function navToggle() {
  btn.classList.toggle('open')
  nav.classList.toggle('hidden')
  document.body.classList.toggle('no-scroll')
}

btn.addEventListener('click', navToggle)

function chgsrc() {
  boxitem = document.querySelectorAll(".grid-col-2");
  catgmenu = document.getElementById("category").value;
  console.log("entered chgsrc", catgmenu);
  getcatg();
  if(boxitem != null) {
    for (var i = boxitem.length; i--;) {
      mysrcpath = boxitem[i].querySelector("img").src;
      mysrcpath = mysrcpath.replace(repl,filename);
      boxitem[i].querySelector("img").setAttribute("src", mysrcpath);
    }
  }
  else
    console.log("chgsrc boxitem is null");
}

function getcatg() {
  console.log("entered getcatg");
  if(catgmenu != null) {
    if(catgmenu == "faucet") {
      filename = "fbox";
    }
    else
    { filename = "pbox";
    }
  }
  else
    console.log("getcatg doc id is null"); 
}
