function getData(){

    var fs = require('fs'); 
    var {parse} = require('csv-parse');

    var csvData=[];
    fs.createReadStream('./csv_files/short.csv')
        .pipe(parse({delimiter: ','}))
        .on('data', function(csvrow) {
            console.log(csvrow);
            //do something with csvrow
            csvData.push(csvrow);        
        })
        .on('end',function() {
        //do something with csvDataconsole.log(csvData);
        console.log(csvData);
            return "csvData";
        });
}
module.exports = {getData}
