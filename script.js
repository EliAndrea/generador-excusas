// Using javascript, create a function that generates and returns a random excuse with the following structure:
let who = ['El perro','Mi abuela','Mi tortuga','Mi canario', 'Mi gato'];
let what = ['se comió','aplastó','robó','rompió', 'ensució'];
let when = ['antes de clases','justo cuando terminé','mientras almorzaba','mientras yo rezaba'];

function excuseGenerator(quien, que, cuando){
    numQuien = Math.floor(Math.random() * quien.length);
    numQue = Math.floor(Math.random() * que.length);
    numCuando = Math.floor(Math.random() * cuando.length);
    return quien[numQuien] + " " + que[numQue] + " " + "mi tarea" + " " + cuando[numCuando];
}
function onLoad(){
    var excusa = document.getElementById('excuse');
    excusa.innerHTML = excuseGenerator(who, what, when);
}
window.onload = onLoad;
