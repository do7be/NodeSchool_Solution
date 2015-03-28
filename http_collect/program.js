var http = require('http');

if(process.argv.length > 2){

  var url     = process.argv[2];
  var get_str = '';

  http.get(url, function(response){

    response.setEncoding('utf8');

    response.on("data", function (data) {
      get_str += data;
    });

    response.on('error', function (error) {
      console.log(error.message);
    });

    response.on("end", function () {
      console.log(get_str.length);
      console.log(get_str);
    });

  });
}
