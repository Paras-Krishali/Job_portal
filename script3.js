let div = document.getElementById("Cart");
let btn = document.getElementById("createListing");

let jobtitle = document.getElementById("jobtitle"); 
let company = document.getElementById("company");
let skills = document.getElementById("skills");
let experience = document.getElementById("experience");
let location = document.getElementById("location");

btn.onclick = function () {
    if (
        jobtitle.value === "" ||
        company.value === "" ||
        skills.value === "" ||
        experience.value === "" ||
        location.value === ""
    ) {
        alert("Fill all fields");
        return;
    }

    let jobDiv = document.createElement("div");

    jobDiv.innerHTML = `
        <p>
            <strong>Job Title:</strong> ${jobtitle.value}<br>
            <strong>Company:</strong> ${company.value}<br>
            <strong>Skills:</strong> ${skills.value}<br>
            <strong>Experience:</strong> ${experience.value} years<br>
            <strong>Location:</strong> ${location.value}
        </p>
        <button class="deleteBtn">Delete</button>
        <button class="updateBtn">Update</button>
        <hr>
    `;

    div.appendChild(jobDiv);

    jobDiv.querySelector(".deleteBtn").onclick = function () {
        jobDiv.remove();
    };

    jobDiv.querySelector(".updateBtn").onclick = function () {
        jobtitle.value = jobDiv.querySelector("p").children[0].textContent.replace("Job Title:", "").trim();
        company.value = jobDiv.querySelector("p").children[1].textContent.replace("Company:", "").trim();
        skills.value = jobDiv.querySelector("p").children[2].textContent.replace("Skills:", "").trim();
        experience.value = jobDiv.querySelector("p").children[3].textContent.replace("Experience:", "").replace("years","").trim();
        location.value = jobDiv.querySelector("p").children[4].textContent.replace("Location:", "").trim();

        jobDiv.remove();
    };

    jobtitle.value = "";
    company.value = "";
    skills.value = "";
    experience.value = "";
    location.value = "";
};



let search = document.getElementById("search");

search.addEventListener("keyup", function () {
    let value = search.value.toLowerCase();
    let jobs = div.getElementsByTagName("div");

    for (let i = 0; i < jobs.length; i++) {
        let text = jobs[i].innerText.toLowerCase();

        if (text.includes(value)) {
            jobs[i].style.display = "block";
        } else {
            jobs[i].style.display = "none";
        }
    }
});