const cards = document.getElementsByClassName('card');
const highlightTransSpeedMs = 900

for (let i in cards) {
    let c = cards[i];
    c.onmouseover = () => {
        highlight(c)
    }
    c.onmouseout = () => { 
        unHighlight(c)
    }
}

function highlight(element, classString = "") {
    let classEles
    if (classString != "") { classEles = document.getElementsByClassName(classString) } 
    else { classEles = document.getElementsByClassName(element.classList) }
    Array.from(classEles).map(e => {
        if (e == element) {
            
            e.style.opacity = 1;
        } else {
            e.style.transition = `${highlightTransSpeedMs}ms`;
            e.style.opacity = 0.4;
        }
    })
}

function unHighlight(element, classString = ""){ 
    let classEles
    if (classString != "") { classEles = document.getElementsByClassName(classString) } 
    else { classEles = document.getElementsByClassName(element.classList) }
    Array.from(classEles).map(e =>{ 
        e.style.transition = "900ms";
        e.style.opacity = 1;
    })
}