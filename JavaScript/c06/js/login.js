 function checkUsername(){                              //Khai báo hàm
    var username=el.value;                              //Lưu tên người dùng vào biến
    if(username.length<5){                             //Nếu uesername<5 ký tự
        elMsg.className='warning';                     //Thay dổi tr
        elMsg.textContent='Not long enough,yet...';
    } else{
        elMsg.textContent='';
    }
}

function tipUsername(){
    elMsg.className='tip';
    elMsg.innerHTML='Username must be at least 5 characters ';

}
var el=document.getElementById('username');
var elMsg=document.getElementById('feedback');

el.addEventListener('focus',tipUsername,false);
el.addEventListener('blur',checkUsername,false)