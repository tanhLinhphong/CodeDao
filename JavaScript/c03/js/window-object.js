var msg ='<h2>browser window</h2><p>width:'+ window.innerWidth+'</p>';
msg+='<p>height:'+window.innerHeight+'</p>';
msg+='<h2> history</h2><p>items:'+window.history.length+'</p>';
msg+='<h2>screem</h2><p>width:'+window.screen.height+'</p>';
msg+='<p>height:'+window.screen.height+'<p>';
var el=document.getElementById('info');
el.innerHTML=msg;
alert('Current page:'+window.location);