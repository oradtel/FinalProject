function csvToString(){
    var fs = require('fs'); 
    const csvFile = fs.readFileSync('./csv_files/amazon_headphones.csv');
    const csvData = csvFile.toString();
    return csvData;
}
function getData() {
    csvData=csvToString();
    var csvLines=csvData.split('\r\n');
    var finalData=[];
    for (var i=0;i<csvLines.length;i++) {
        var tempData=csvLines[i].split(',');
        finalData.push(tempData);
    }
    var randRow=generateRandom(1,180);
    var randomData=[];
    for (var i=randRow;i<randRow+20;i++){
        randomData.push(finalData[i]);
    }
    return randomData;
}

function generateRandom(min = 0, max = 100) {

    // find diff
    let difference = max - min;

    // generate random number 
    let rand = Math.random();

    // multiply with difference 
    rand = Math.floor( rand * difference);

    // add with min value 
    rand = rand + min;

    return rand;
}
module.exports = {getData}



















// const { resolve } = require('path');
// //const { resolve } = require('path');
// var data=[];
// function copyData(csvrow) {
//     //console.log(csvrow);
//     data.push(csvrow);
//     //console.log("in copydata: " + data)
// }
// function getData(){

//     var fs = require('fs'); 
//     var {parse} = require('csv-parse');
//     var csvData=[];
//         fs.createReadStream('./csv_files/short.csv')
//             .pipe(parse({delimiter: ','}))
//             .on('data', function(csvrow) {
//                 copyData(csvrow);
//                 //do something with csvrow
//                 csvData.push(csvrow);
//             })
//             .on('end',function() {
//             //do something with csvDataconsole.log(csvData);
//                 const dataaa=structuredClone(csvData);
//                 console.log(dataaa);            
//             });
//             console.log("final: " + csvData);
//             //console.log(csvData);
//             //return csvData;

// }




// module.exports = {getData}
