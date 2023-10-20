var firstItem=document.getElementById('one');
if(firstItem.hasChildNodes('class')){
    var el=document.getElementById('scriptResults');
    el.innerHTML='<p>The first item has a class name:'+attr+'</p>'
}