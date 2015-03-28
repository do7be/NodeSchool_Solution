  var fs = require('fs');

  if (process.argv.length > 2) {
    var file_path = process.argv[2];

    var buf = fs.readFileSync(file_path);

    var rows    = buf.toString().split('\n');
    var row_num = rows.length - 1;

    console.log(row_num);
  }