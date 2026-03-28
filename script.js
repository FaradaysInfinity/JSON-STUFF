
const spaceContainerISS = document.getElementById("craft-iss");
const spaceContainerTian = document.getElementById("craft-tiangong");
const allCrafts = document.querySelectorAll(".craft");



function checkForAstronauts(button) {
    button.style.display = "none"; // hide button

    //fetch('https://api.open-notify.org/astros.json') // vercel blocks http insecure
    fetch('astros.json')
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

let data = [200, 400, 100, 300, 150, 75];
let barWidth = 100;
let testText = "I am the signal and the source. What I hold in mind, I hold in hand. Every thought is a seed — planted in the fertile ground of intention, watered by belief, warmed by the certainty of becoming. Abundance flows toward me. Clarity arrives. The vision sharpens. I align with the frequency of my highest self — vibrating, resonating, drawing toward me all that is already mine. I release resistance. I release doubt. I surrender the timeline and trust the process. What is meant for me cannot pass me by. I am worthy. I am ready. I am open. The universe conspires in my favor. Energy follows attention. Intention becomes reality. I breathe in possibility and exhale limitation. I speak it into existence. I feel it before it arrives. I know it is done. So it is. So it is. So it is.intention, vibration, alignment, frequency, abundance, clarity, belief, vision, flow, surrender, worthy, presence, becoming, signal, resonance, trust, manifestation, radiate, receive, expand"

let textArray;
// let wordIndex = 0;
let wordObjects = [];
let spawnSpeed = 1;



function setup() {

    createCanvas(900, 900, p5jscanvas);
    // myCanvas.parent("specialDiv");
    //   createCanvas(600, 400);

    textArray = testText.split(" ");
    console.log(textArray);
}

function draw() {
    background(220);

    if (frameCount % spawnSpeed === 0) {
        let i = wordObjects.length % textArray.length;
        wordObjects.push({
            word: textArray[i],
            x: mouseX,
            y: mouseY,
            vx: random(-5, 5),
            vy: random(-5, 5)
        })
    }
    textSize(20);
    fill(0);
    noStroke();
    for (let w of wordObjects) {
        w.x += w.vx;
        w.y += w.vy;
        text(w.word, w.x, w.y)
    }




    // rect(0, 0, 100, data[0]);
    // rect(100, 0, 100, data[1]);
    // rect(200, 0, 100, data[2]);
    // rect(300, 0, 100, data[3]);
    //fill(100)
    //for (let i = 0; i<data.length; i = i + 1) {
    // rect(i * barWidth, 0, barWidth, data[i]);
    // }
}
