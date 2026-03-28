
const spaceContainerISS = document.getElementById("craft-iss");
const spaceContainerTian = document.getElementById("craft-tiangong");
const allCrafts = document.querySelectorAll(".craft");

function checkForAstronauts(button) {
    button.style.display = "none"; // hide button

    //fetch('https://api.open-notify.org/astros.json') // vercel blocks http insecure
    fetch('/ex-json/astros.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data); 

            // Update the Message
            document.getElementById("status").innerHTML = `Whoa there are ${data.number} people in space rn!!`;

            // Add each Astronaut to their craft
            var astros = data.people;
            astros.forEach(astro => {
                AddAstro(astro);
            });
        })
        .catch(error => {
            console.error('Error loading JSON:', error);
        });
}

function AddAstro(astro) {
    let div = document.createElement("div");
    div.classList.add("astro");
    div.innerHTML = astro.name;
    if (astro.craft == "ISS") {
        spaceContainerISS.appendChild(div);
    } else if (astro.craft == "Tiangong") {
        spaceContainerTian.appendChild(div);
    }
} 