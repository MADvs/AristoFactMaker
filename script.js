const finalFact = document.getElementById('finalFact')
const midbar = document.getElementById('midbar');
const divider = document.getElementById('divider');
const headerText = document.getElementById('headerText');
const factText = document.getElementById('factText');
const factBox = document.getElementById('textBox')
const typeText = document.getElementById('typeText');
const factHeader = document.getElementById('header');
const myForm = document.getElementById('myForm');

function process(element) {
    const form = element.closest('form');
    headerText.innerHTML = form[0].value;
    factText.innerHTML = form[1].value;
    finalFact.style.display = "flex";
    let currentSize1;
    let currentSize2;
    let step = 0.5;

    while (factHeader.offsetHeight < headerText.offsetHeight) {
        currentSize1 = parseFloat(window.getComputedStyle(headerText, null).getPropertyValue('font-size'));
          factHeader.style.fontSize = (currentSize1 - step) + "px";
    }

    //Auto-resize fact body font size
    while (factBox.offsetHeight < factText.offsetHeight) {
        currentSize2 = parseFloat(window.getComputedStyle(factText, null).getPropertyValue('font-size'));
          factBox.style.fontSize = (currentSize2 - step) + "px";
    }

    //Switch statement styles the frame dependent on fact type//
    switch (form[2].value) {
        case "news":
            finalFact.style.border = "10px solid var(--red)";
            midbar.style.backgroundColor = "var(--red)";
            divider.style.backgroundColor = "var(--red)";
            header.style.backgroundColor = "var(--lightred)";
            typeText.innerHTML = "News Breakings";
            break;
        case "protip":
            finalFact.style.border = "10px solid var(--orange)";
            midbar.style.backgroundColor = "var(--orange)";
            divider.style.backgroundColor = "var(--orange)";
            factHeader.style.backgroundColor = "var(--lightorange)";
            typeText.innerHTML = "Life Pro-Tip";
            break;
        case "history":
            finalFact.style.border = "10px solid var(--yellow)";
            midbar.style.backgroundColor = "var(--yellow)";
            divider.style.backgroundColor = "var(--yellow)";
            factHeader.style.backgroundColor = "var(--lightyellow)";
            typeText.innerHTML = "History Fact";
            break;
        case "science":
            finalFact.style.border = "10px solid var(--green)";
            midbar.style.backgroundColor = "var(--green)";
            divider.style.backgroundColor = "var(--green)";
            factHeader.style.backgroundColor = "var(--lightgreen)";
            typeText.innerHTML = "Science Fact";
            break;
        case "culture":
            finalFact.style.border = "10px solid var(--blue)";
            midbar.style.backgroundColor = "var(--blue)";
            divider.style.backgroundColor = "var(--blue)";
            factHeader.style.backgroundColor = "var(--lightblue)";
            typeText.innerHTML = "Culture Fact";
            break;
        case "moral":
            finalFact.style.border = "10px solid var(--purple)";
            midbar.style.backgroundColor = "var(--purple)";
            divider.style.backgroundColor = "var(--purple)";
            factHeader.style.backgroundColor = "var(--lightpurple)";
            typeText.innerHTML = "Moral Story";
            break;
        case "philosophy":
            finalFact.style.border = "10px solid var(--teal)";
            midbar.style.backgroundColor = "var(--teal)";
            divider.style.backgroundColor = "var(--teal)";
            factHeader.style.backgroundColor = "var(--lightteal)";
            typeText.innerHTML = "Philosophizing";
            break;
        case "language":
            finalFact.style.border = "10px solid var(--pink)";
            midbar.style.backgroundColor = "var(--pink)";
            divider.style.backgroundColor = "var(--pink)";
            factHeader.style.backgroundColor = "var(--lightpink)";
            typeText.innerHTML = "Language Fact";
            break;
    }
    finalFact.classList.remove('hidden');
    myForm.classList.add('hidden');
}

function onFileSelected(event) {
    var selectedFile = event.target.files[0];
    var reader = new FileReader();
  
    var imgtag = document.getElementById("image");
    imgtag.title = selectedFile.name;
  
    reader.onload = function(event) {
      imgtag.src = event.target.result;
    };
  
    reader.readAsDataURL(selectedFile);
  }
