var fs = require('fs');

module.exports = filter;

function filter (dirname, ext, callback) {

  var extention = '.' + ext;

  fs.readdir (dirname, function(err, list) {
    if (err) {
      return callback(err, null);
    }

    var regexp = new RegExp(extention, 'g');
    var filelist = [];
    list.forEach(function(element) {
      if(element.match(regexp)){
        filelist.push(element);
      }
    });

    callback(null, filelist);
  });
}