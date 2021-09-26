const cards = document.getElementsByClassName('card');
const highlightTransitionSpeedMs = 500
const hightlightScale = 1.03

function unHighlight(classString) {
    Array.from(document.getElementsByClassName(classString)).map(e => {
        e.style.transition = `
            opacity ${highlightTransitionSpeedMs}ms,
            transform ${highlightTransitionSpeedMs}ms    
        `;
        e.style.opacity = 1;
        e.style.transform = `scale(1)`
        if (e.getElementsByTagName('video').length > 0){
            e.getElementsByTagName('video')[0].pause()
        }
    })
}

function highlight(element, classString = "") {
    let classEles
    if (classString != "") { classEles = document.getElementsByClassName(classString) }
    else { classEles = document.getElementsByClassName(element.classList) }
    Array.from(classEles).map(e => {
        e.style.transition = `
            opacity ${highlightTransitionSpeedMs}ms ease-in-out,
            transform ${highlightTransitionSpeedMs}ms ease-in-out   
        `
        if (e == element) {
            e.style.opacity = 1;
            e.style.transform = `scale(${hightlightScale})`
            if (e.getElementsByTagName('video').length > 0){
                e.getElementsByTagName('video')[0].play()
            }
        } else {
            e.style.opacity = 0.3;
            e.style.transform = `scale(1)`
            if (e.getElementsByTagName('video').length > 0){
                e.getElementsByTagName('video')[0].pause()
            }
        }
    })
}


for (let i in cards) {
    let c = cards[i];
    c.onmouseover = () => {
        highlight(c)
    }
    c.onmouseout = () => {
        unHighlight(c.classList)
    }
}
