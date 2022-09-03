function csvToString(){
    var fs = require('fs'); 
    const csvFile = fs.readFileSync('./csv_files/test_figures.csv');
    const csvData = csvFile.toString();
    return csvData;
}
function getData() {
    csvData=csvToString();
    var csvLines=csvData.split('\r\n');
    var finalData=[];
    for (var i=0;i<csvLines.length;i++) {
        var tempData=csvLines[i].split(',');
        console.log(tempData);
        finalData.push(tempData);
    }
    // Shuffle array
    const shuffled = finalData.sort(() => 0.5 - Math.random());

    // Get sub-array of first n elements after shuffled
    let selected = shuffled.slice(0, 10);
    return selected;
}

module.exports = {getData}

