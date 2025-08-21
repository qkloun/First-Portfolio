//Darkmode Switch//
let darkmode = localStorage.getItem("darkmode");
const themeswitch = document.getElementById("theme-switch")

const enabledarkmode = () =>{
    document.body.classList.add("darkmode");
    localStorage.setItem("darkmode","active");
};

const disabledarkmode = () =>{
    document.body.classList.remove("darkmode")
    localStorage.removeItem("darkmode")
}

if(localStorage.getItem("darkmode") === "active"){
    enabledarkmode();
}

themeswitch.addEventListener("click", () =>{
   if(document.body.classList.contains("darkmode")){
    document.getElementById("wonderimg").src="images/wonder.png"
    disabledarkmode();
   }else{
    document.getElementById("wonderimg").src="images/wonderd.png"
    enabledarkmode();
   }
})



// Tablink code //
const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

function opentab(evt, tabname) {
  for (let tablink of tablinks) tablink.classList.remove("active-link");
  for (let tabcontent of tabcontents) tabcontent.classList.remove("active-tab");

  evt.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

//Autotype on home//
var typed = new Typed(".auto-type",{
    strings: ["Data Science", "Software Development", "AI"],
    typeSpeed:150,
    backSpeed:100,
    loop: true
}) 

//scrollspy//

const targets = document.querySelectorAll("#home, #about, #services, #projects, #contact");
const navLinks = document.querySelectorAll("nav ul li a");
let visibleId = null;

const setActive = (id) => {
    if (visibleId === id) return;
    visibleId = id;
    navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + id));
};

const io = new IntersectionObserver((entries) => {
    // pick the entry with the largest intersection ratio
    const best = entries
    .filter(e => e.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (best) setActive(best.target.id);
}, {
    root: null,
    // nudge the viewport so the fixed navbar doesn’t “cover” the top of a section
    rootMargin: "-120px 0px -40% 0px",
    threshold: [0.25, 0.5, 0.75]
});

targets.forEach(t => io.observe(t));

//sidemenu//

var menu = document.getElementById("menu");

function openmenu(){
    menu.style.right="0"
}

function closemenu(){
    menu.style.right="-250px"
}
