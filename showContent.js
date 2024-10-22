const d = document;

var home = d.getElementById("home");
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
        buttons[i].style.background = "#a379c9";
    }
}

function displayAndBackground(button, content) {
    content.style.display = "block";
    button.style.background = "#06b1eb";
}

home.addEventListener("click", function () {
    hideAll();
    var current = d.getElementById("home-content");
    displayAndBackground(this, current);
});

exp.addEventListener("click", function () {
    hideAll();
    var current = d.getElementById("experience-content");
    displayAndBackground(this, current);
});

ed.addEventListener("click", function () {
    hideAll();
    var current = d.getElementById("education-content");
    displayAndBackground(this, current);
});

proj.addEventListener("click", function () {
    hideAll();
    var current = d.getElementById("projects-content");
    displayAndBackground(this, current);
});

awards.addEventListener("click", function () {
    hideAll();
    var current = d.getElementById("awards-content");
    displayAndBackground(this, current);
});

certs.addEventListener("click", function () {
    hideAll();
    var current = d.getElementById("certifications-content");
    displayAndBackground(this, current);
});