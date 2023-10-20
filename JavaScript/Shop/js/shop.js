function calculateTotal(){
    var quantity1=document.getElementById("quantity1").value; 
    // lấy giá trị ở id quantity1
    var price1=document.getElementById("price1").innerHTML;
    //  
    var quantity2=document.getElementById("quantity2").value;
    var price2=document.getElementById("price2").innerHTML;
    
    var quantity3=document.getElementById("quantity3").value;
    var price3=document.getElementById("price3").innerHTML;
     
    var total =quantity1*price1+quantity2*price2+quantity3*price3;
    if(total>4000){
        total=total*0.75;
        document.getElementById("total").style.color="Green"
    }
    else if(total<4000 , total>2000){
        total=total*0.9;
        document.getElementById("total").style.color="Blue"
    }
    else{
        document.getElementById("total").style.color="Red"
    }
    document.getElementById("total").innerHTML="<h3>Tổng Tiền: "+ total + "USD</h3>";
}

function updateGreeting(){
    const greetingElement=document.getElementById('greeting');
    const timeElement=document.getElementById('time');
    const currentTime=new Date();
    let className;
    greetingElement.className=className;
    const timeString=` ${currentTime.getHours()}:${String(currentTime.getMinutes()).padStart(2,'0')}:${String(currentTime.getSeconds()).padStart(2,'0')}`;
    timeElement.textContent=timeString;
}
setInterval(updateGreeting,1000);
function changeColor(){
    const timeElement =document.getElementById('time');
    const currentColor=timeElement.style.color;
    if (currentColor=='blue'){
        timeElement.style.color='red';
     } else{
      timeElement.style.color='blue';  
      }
 
   }
   setInterval(changeColor,60000)