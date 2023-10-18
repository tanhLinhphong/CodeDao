function updateGreeting() {
    // var test = 1;
    // var test;
    // test = 2;
    // var: phạm vi toàn cục (golbal),
    // có thể khai báo lại, không cần giá trị khi khởi tạo
    // có thể tay đổi cập nhật giá trị
    //const khai báo hằng số, giá trị không được cập nhật và PHẢI khởi tạo giá trị ban đầu
    const greetingElement = document.getElementById('greeting');
    // const greetingElement;
    // const greetingElement1 = '';
    const timeElenment = document.getElementById('time');
    const timeElenment2 = document.getElementById('time2');
    const secondsElement = document.querySelector('.seconds span');
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    // let khai báo biến, không được khai báo lại, có thể cập nhật giá trị
    let greeting = '';
    let className = '';
    // let greeing;
    // let className;
    if (currentHour < 12) {
        greeting = 'Chao buổi sáng';
        className = 'morning';
    } else if (currentHour < 18) {
        greeting = 'Chao buổi chiều';
        className = 'afternoon';
    } else {
        greeting = 'Chao buổi tối';
        className = 'evening';
    }
    greetingElement.textContent = greeting;
    greetingElement.className = className;
    const timeString = `Thoi gian đầy đủ: ${currentTime}`;
    const timeString2 = `Thoi gian rút gọn: ${currentTime.getHours()}:${String(currentTime.getMinutes()).padStart(2, '0')}:${String(currentTime.getSeconds()).padStart(2, '0')}`;
    timeElenment.textContent = timeString;
    timeElenment2.textContent = timeString2;
    secondsElement.textContent = currentTime.getSeconds();
}
// Gọi hàm cập nhật mỗi giây
setInterval(updateGreeting, 1000);
// cập nhật lần đầu khi tải trang
updateGreeting();
function changeColor() {
    const textElement = document.getElementById('text');
    // lấy ra màu sắc hiện tại của phần tử
    const currentColor = textElement.style.color;
    if (currentColor === 'blue') {
        textElement.style.color = 'red';
        textElement.textContent = 'Văn bản màu đỏ rồi sẽ thay màu';
    } else {
        textElement.style.color = 'blue';
        textElement.textContent = 'Văn bản màu xanh rồi sẽ thay màu';
    }
}
// Gọi hàm thay đổi màu mỗi giây
setInterval(changeColor, 1000);