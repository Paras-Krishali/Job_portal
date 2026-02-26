let div = document.getElementById("Cart");
let btn = document.getElementById("createListing");
let jobtitle = document.getElementById("jobtitle"); 
let company = document.getElementById("company");
let skills = document.getElementById("skills");
let experience = document.getElementById("experience");
let location = document.getElementById("location");

btn.onclick = function(){
    if(jobtitle.value === "" || company.value === "" || skills.value === "" || experience.value === "" || location.value === ""){
    alert("Fill all fields");
    return;
    }

    div.innerHTML += 
    '<div>' + "<p>Job Title: " + jobtitle.value + "<br>" +
        "Company Name: " + company.value + "<br>" +
        "Skills Required: " + skills.value + "<br>" +
        "Experience Needed: At least " + experience.value + " years<br>" +
        "Location: " + location.value + "</p>" + 
        '<input type="button" value="remove listing" onclick="this.parentElement.remove()">' +
    '</div>';
    jobtitle.value = "";
    company.value = "";
    skills.value = "";
    experience.value = "";
    location.value = "";
}