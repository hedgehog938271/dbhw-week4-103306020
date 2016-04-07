var API_PATH = "http://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=36847f3f-deff-4183-a5bb-800737591de5";

function getData(cb) {
  $.ajax({
    url : API_PATH,
    method : "GET",
    success : function(data) {
      cb(null, data);
    },
    error : function(err) {
      cb(err);
    }
  });
}