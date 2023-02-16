const brother = require('brother-label-printer');
const printerUrl = `http://${process.argv[2]}:631/ipp/print`;
console.log(printerUrl)
brother.printPngFile(printerUrl, 'image.png', {landscape: false}).then(() => console.log("printing")).catch((err) => console.log(err));
