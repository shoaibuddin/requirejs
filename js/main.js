require.config({
  //By default load any module IDs from js/
  baseUrl: 'js',
  //define key lib locations
  paths: {
    jquery: "libs/jquery/jquery-1.8.1.min",
    jquerytools: "libs/plugins/jquery.tools.min"
  },
  shim: {
    'jquerytools': ['jquery']
  }
});
 

 require (['modules/text'],function(){

 });


  require (['modules/slide'],function(){

 });

require(['jquery'],function($){

  $('#modal-test').click(function() {
    require (['modules/modal'],function(){

    });
  });
});