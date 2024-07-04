const text = document.getElementById('typing');


const prog = 'Mobile And Web Developer';

let idx = 1;

setInterval(writeT, 150);

function writeT() {
    text.innerHTML = prog.slice(0, idx);
    idx++
    if (idx > prog.length) {
        idx = 1;
    }
}