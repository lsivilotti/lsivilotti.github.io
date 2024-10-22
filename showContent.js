const d = document;

var home = d.getElementById("home");
home.classList.toggle("active");
var exp = d.getElementById("experience");
var ed = d.getElementById("education");
var proj = d.getElementById("projects");
var awards = d.getElementById("awards");
var certs = d.getElementById("certifications");

var buttons = [home, exp, ed, proj, awards, certs];
var contents = d.getElementsByClassName("contents");

function hideAll() {
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = "none";
        if(buttons[i].classList.contains("active")){
            buttons[i].classList.toggle("active");
        }
    }
}

home.addEventListener("click", function () {
    hideAll();
    var current = d.getElementById("home-content");
    current.style.display = "block";
    this.classList.toggle("active");
});

exp.addEventListener("click", function () {
    hideAll();
    var current = d.getElementById("experience-content");
    current.style.display = "block";
    this.classList.toggle("active");
});

ed.addEventListener("click", function () {
    hideAll();
    var current = d.getElementById("education-content");
    current.style.display = "block";
    this.classList.toggle("active");
});

proj.addEventListener("click", function () {
    hideAll();
    var current = d.getElementById("projects-content");
    current.style.display = "block";
    this.classList.toggle("active");
});

awards.addEventListener("click", function () {
    hideAll();
    var current = d.getElementById("awards-content");
    current.style.display = "block";
    this.classList.toggle("active");
});

certs.addEventListener("click", function () {
    hideAll();
    var current = d.getElementById("certifications-content");
    current.style.display = "block";
    this.classList.toggle("active");
});