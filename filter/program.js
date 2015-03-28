var fs = require('fs');

if(process.argv.length > 2){

  var file_path = process.argv[2];
  var filter_str = '.' + process.argv[3];

  fs.readdir(file_path, function(err, list) {
    var regexp = new RegExp(filter_str, 'g');
    list.forEach(function (element) {
      if (element.match(regexp)) {
        console.log(element);
      }
    });
  });
}
