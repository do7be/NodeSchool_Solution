var filter = require('./mod_filter.js');

if(process.argv.length > 2){

  var dir_path = process.argv[2];
  var ext = process.argv[3];

  filter(dir_path, ext, function(err, file_list) {
    if (err) {
      console.log('error!');
    }

    for (i = 0; i < file_list.length; i++) {
      console.log(file_list[i]);
    }
  });
}
