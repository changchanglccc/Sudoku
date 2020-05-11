const toolKit = require('./toolkit');
const a = Array.from({length: 9}, (v, i) => i);
console.log(a);
console.log(toolKit.shuffle(a));
