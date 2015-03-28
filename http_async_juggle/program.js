var http = require('http');

if(process.argv.length > 2){

  var url          = process.argv.slice(2);
  var url_num      = url.length;
  var get_strs     = new Array();
  var finish_count = 0;

  for (var i = 0; i < url_num; i++) {
    get_strs[i] = null;
  }

  for (var i = 0; i < url_num; i++) {

    (function(i) {

      http.get(url[i], function(response){

        var get_str = '';

        response.setEncoding('utf8');

        response.on("data", function (data) {
          get_str += data;
        });

        response.on('error', function (error) {
          console.log(error.message);
        });

        response.on("end", function () {
          get_strs[i] = get_str;
          finish_count++;

          if (finish_count === url_num) {
            for (var j = 0; j < url_num; j++) {
              console.log(get_strs[j]);
            }
          }
        });
      });
    }) (i);
  }
}
