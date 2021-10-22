const cards = document.getElementsByClassName('card');
const HIGHLIGHT_TRANSITION_SPEED_MS = 500;
const HIGHLIGHT_SCALE = 1.03;
const NON_HIGHLIGHTED_OPACITY = 0.3;
function unHighlight(classString) {
    Array.from(document.getElementsByClassName(classString)).forEach(e => {
        e.style.transition = `
            opacity ${HIGHLIGHT_TRANSITION_SPEED_MS}ms,
            transform ${HIGHLIGHT_TRANSITION_SPEED_MS}ms    
        `;
        e.style.opacity = 1;
        e.style.transform = `scale(1)`;
        e.getElementsByTagName('video').length > 0 && e.getElementsByTagName('video')[0].pause();
    })
}
function highlight(element, classString = "") {
    if(classString == ""){
        var classEles = document.getElementsByClassName(element.classList); 
    } else {
        var classEles = document.getElementsByClassName(classString)
    };
    Array.from(classEles).forEach(e => {
        e.style.transition = `
            opacity ${HIGHLIGHT_TRANSITION_SPEED_MS}ms ease-in-out,
            transform ${HIGHLIGHT_TRANSITION_SPEED_MS}ms ease-in-out   
        `;
        if (e == element) {
            e.style.opacity = 1;
            e.style.transform = `scale(${HIGHLIGHT_SCALE})`
            e.getElementsByTagName('video').length > 0 && e.getElementsByTagName('video')[0].play();
        } else {
            e.style.opacity = NON_HIGHLIGHTED_OPACITY;
            e.style.transform = `scale(1)`;
            if(e.getElementsByTagName('video').length > 0) {
                e.getElementsByTagName('video')[0].pause();
            }
        }
    })
}
for (let i in cards) {
    let c = cards[i];
    c.onmouseover = () => {
        highlight(c);
    ;}
    c.onmouseout = () => {
        unHighlight(c.classList);
    };
};
