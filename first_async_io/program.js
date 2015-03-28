  var fs = require('fs');

  if (process.argv.length > 2) {
    var file_path = process.argv[2];

    fs.readFile(file_path, function (err, data) {
      if (err) {
        throw err;
      }

      var rows    = data.toString().split("\n");
      var row_num = rows.length - 1;

      console.log(row_num);
    });
  }