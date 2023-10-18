var today= new Date();
var hourNow=today.getHours();
var greeting;
if (hourNow>18){
    greeting='Good evenning';
    className='evening'
}
else if(hourNow>12){
    greeting='Good afternoon';
    className='afternoon'
}
else if(hourNow<12){
    greeting='Good morning';
    className='morning';
}
else{
    greeting=' Wellcome';
}

document.write('<h3>'+greeting+'</h3>')
var greetingElement = document.getElementById('ppxp');
greetingElement.className = 'morning';


