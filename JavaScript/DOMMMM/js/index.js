const myList=document.getElementById('myList');

const newList1=document.createElement("li");
newList1.textContent="Con Mèo";
myList.insertBefore(newList1,myList.firstChild);

const newList2=document.createElement("li");
newList2.textContent="Con lợn";
myList.appendChild(newList2);

const liList=myList.getElementsByTagName('li');
for (let i=0;i<liList.length;i++){
    liList[i].classList.add('dark');
}
const header=document.getElementById("header");
header.textContent=`Tổng số lượng : ${liList.length}`;
