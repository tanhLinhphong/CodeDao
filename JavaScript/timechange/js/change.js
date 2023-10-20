 function updateGreeting(){
    // var test=1;
    // var test=2;
    // test=2;
    // var: phạm vi toàn cục(golbal)
    // có thể khai báo lại , không cần gán giá trị khi khởi tạo
    //  có thể thay đổi cập nhập giá trị
    //  const khai báo hằng số, giá trị không được cập nhẩk và phải khởi tạo giá trị ban đầu
     const greetingElement=document.getElementById('greeting');
    //  const timeElement=document.getElementById('time');
    const timeElement2=document.getElementById('time2');
    // const secondsElement=document.querySelector('.seconds span');
    const currentTime= new Date();
    // const currentHour=currentTime.getHours();

    // let khai báo biến , khồn được khai báo lại, không cần giá trị ban đầu
    
    // let greeting;
     let className;
    //  if (currentHour<12){
    //     greeting='Chào buổi sáng';
    //     className='morning';
    //  }else if(currentHour<18){
    //     greeting='chào buổi chiều';
    //     className='afternoon';
    //  }else{
    //     greeting='chào buổi tối';
    //     className='evening';
    //  }
    //  greetingElement.textContent=greeting;
     greetingElement.className=className;

    //  const timeString=`Thời Gian Đầy Đủ:: ${currentTime}`;
     const timeString2=`Thời Gian Rút Gọn:: ${currentTime.getHours()}:${String(currentTime.getMinutes()).padStart(2,'0')}:${String(currentTime.getSeconds()).padStart(2,'0')}`;
    //  timeElement.textContent=timeString;
    timeElement2.textContent=timeString2;

    //  secondsElement.textContent=currentTime.getSeconds();

 }
// Gọi Hàm Cập Nhật mỗi giây
 setInterval(updateGreeting,1000);
// // Cập Nhật lần đầu khi tải trang
// // updateGreeting();
  function changeColor(){
    const textElement =document.getElementById('text');
   // Lấy ra màu sắc hiện tại của phần tử
   const currentColor=textElement.style.color;
   if (currentColor=='blue'){
       textElement.style.color='red';
      textElement.textContent='Văn bản màu đỏ rồi sẽ thay màu';
    } else{
       textElement.style.color='blue';
         textElement.textContent='Văn bản màu xanh rồi sẽ thay màu';
     }

  }
  setInterval(changeColor,60000)