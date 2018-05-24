TextToSVG = require('text-to-svg');



const textToSVG = TextToSVG.loadSync('./assets/fonts/Norican/Norican-Regular.ttf');
//const svg = textToSVG.getSVG('hello');
//console.log(svg);
const options = {x: 10, y: 0, fontSize: 24, anchor: 'top'};

const svg = textToSVG.getSVG('Shivaji Varma', options);

console.log(svg);
