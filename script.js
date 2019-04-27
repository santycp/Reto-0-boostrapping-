data = {
    id:5,
    name:"juan"
}
/*
fetch("https://randomuser.me/api/",{
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    // mode: "cors",  // no-course , corps, "same-origins"    * para que no se vean los dominios, cuestiones de seguridad  
    headers: {
        "Content-Type": "application/json",
        // "Content-Type": "application/x-www-form-urlencoded",
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header

}).then((value) =>{
    return value.json();
}).then((value) => {
    return value.results[0]
}).then((value) => {
    let nombre = document.getElementById("nombre");
    nombre.innerHTML = value.name.title + " " + value.name.first + " " + value.name.last;
})

*/


let about = document.getElementById("about");
let getAbout = document.getElementById("getAbout");
let resume = document.getElementById("resume");
let getResume = document.getElementById("getResume");
let works = document.getElementById("works");
let getWorks = document.getElementById("getWorks");
let blog = document.getElementById("blog");
let getBlog = document.getElementById("getBlog");
let contact = document.getElementById("contact");
let getContact = document.getElementById("getContact");
const all = document.getElementById("All")
const photo = document.getElementById("Photo")
const video = document.getElementById("Video")
const music = document.getElementById("Music")
const design = document.getElementById("Design")

all.addEventListener("click",function() {
    
    document.getElementById("quitarFoto").style.display= "block"
    document.getElementById("quitarMobile").style.display= "block"
    document.getElementById("quitarEntrance").style.display= "block"
    document.getElementById("quitarWeb").style.display= "block"
    document.getElementById("quitarShapes").style.display= "block"
    document.getElementById("quitarStaircase").style.display= "block"
    document.getElementById("quitarTravels").style.display= "block"
    document.getElementById("quitarArchitecture").style.display= "block"
})
photo.addEventListener("click",function() {
    
    document.getElementById("quitarFoto").style.display= "block"
    document.getElementById("quitarMobile").style.display= "block"
    document.getElementById("quitarEntrance").style.display= "block"
    document.getElementById("quitarWeb").style.display= "none"
    document.getElementById("quitarShapes").style.display= "none"
    document.getElementById("quitarStaircase").style.display= "none"
    document.getElementById("quitarTravels").style.display= "none"
    document.getElementById("quitarArchitecture").style.display= "none"
})
video.addEventListener("click",function() {

    document.getElementById("quitarArchitecture").style.display= "block"
    document.getElementById("quitarFoto").style.display= "none"
    document.getElementById("quitarMobile").style.display= "none"
    document.getElementById("quitarEntrance").style.display= "none"
    document.getElementById("quitarWeb").style.display= "none"
    document.getElementById("quitarShapes").style.display= "none"
    document.getElementById("quitarStaircase").style.display= "none"
    document.getElementById("quitarTravels").style.display= "block"
    
})
music.addEventListener("click",function() {
    
    document.getElementById("quitarFoto").style.display= "none"
    document.getElementById("quitarMobile").style.display= "none"
    document.getElementById("quitarEntrance").style.display= "none"
    document.getElementById("quitarWeb").style.display= "none"
    document.getElementById("quitarShapes").style.display= "block"
    document.getElementById("quitarStaircase").style.display= "block"
    document.getElementById("quitarTravels").style.display= "none"
    document.getElementById("quitarArchitecture").style.display= "none"
})
design.addEventListener("click",function() {
    
    document.getElementById("quitarFoto").style.display= "none"
    document.getElementById("quitarMobile").style.display= "none"
    document.getElementById("quitarEntrance").style.display= "none"
    document.getElementById("quitarWeb").style.display= "block"
    document.getElementById("quitarShapes").style.display= "block"
    document.getElementById("quitarStaircase").style.display= "none"
    document.getElementById("quitarTravels").style.display= "none"
    document.getElementById("quitarArchitecture").style.display= "block"
})
function remove() {
    about.classList.remove('view');
    getAbout.classList.remove('selected');
    resume.classList.remove('view');
    getResume.classList.remove('selected');
    works.classList.remove('view');
    getWorks.classList.remove('selected');
    blog.classList.remove('view');
    getBlog.classList.remove('selected');
    contact.classList.remove('view');
    getContact.classList.remove('selected');
}

getAbout.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        remove('about');
        about.classList.add('view');
        getAbout.classList.add('selected');
    }

});
getResume.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        remove();
        resume.classList.add('view');
        getResume.classList.add('selected');
    }
})
getWorks.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        remove();
        works.classList.add('view');
        getWorks.classList.add('selected');
    }
})

getBlog.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        remove();
        blog.classList.add('view');
        getBlog.classList.add('selected');
    }
})

getContact.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        remove();
        contact.classList.add('view');
        getContact.classList.add('selected');
    }

})

var email = document.getElementById("email");
var form = document.getElementById("form");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I expect an e-mail, darling!");
  } else {
    email.setCustomValidity("");
  }
});

form.addEventListener("submit", function (event) {
    event.preventDefault();
  });