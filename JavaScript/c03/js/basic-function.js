var msg='Sign up to recevice our newsletter for 10% off!'
function updateMessage(){
    var el= document.getElementById('message');
    el.textContent=msg;
}
function updateMessage2(iMess){
    var el =document.getElementById('message');
    el.textContent=iMess;
}
updateMessage2('Lợn')