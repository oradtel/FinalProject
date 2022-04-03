function getData(){
    const Papa = require('papaparse');
    const fs = require('fs');
    const file = fs.createReadStream('../csv_files/short.csv');
    var count = 0; // cache the running count
    
    Papa.parse(file, {
        worker: true, // Don't bog down the main thread if its a big file
        step: function(result) {
            // do stuff with result
        },
        complete: function(results, file) {
            console.log('parsing complete read', count, 'records.'); 
            return results;
        }
    });
}
module.exports = {getData}
