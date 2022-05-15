// querySelector 和 textContent 都来自 文档对象模型 DOM API 用于控制文档
function change_heading() {
    // querySelector() 函数获取对象的 引用&
    let myHeading = document.querySelector('h1');
    myHeading.textContent = 'Hello world!';
}


function change_image() {
    let myImage = document.querySelector('img');

    myImage.onclick = function() {
        let mySrc = myImage.getAttribute('src');
    
        if(mySrc === 'images/star.png') {
          myImage.setAttribute('src', 'images/moon.png');
        } else {
          myImage.setAttribute('src', 'images/star.png');
        }
    }    
}


function setUserName() {
    //  prompt() 与 alert() 类似，会弹出一个对话框
    let myName = '';
    while (!myName || myName === null) {
        myName = prompt('请输入你的名字。');
    }

    let myHeading = document.querySelector('h1');
    // localStorage API ，它可以将数据存储在浏览器中供后续获取
    // 这里用 setItem() 函数来创建一个 'name' 数据项，并把 myName 变量复制给它
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Hello world! ' + myName;
}


function append_string_in_head() {

    if (!localStorage.getItem('name')) {
        setUserName();
    } else {
        let myHeading = document.querySelector('h1');
        let storedName = localStorage.getItem('name');
        myHeading.textContent = 'Hello world! ' + storedName;
    }

    let myButton = document.querySelector('button');
    myButton.onclick = function() {
        setUserName();
    }
}

change_heading();
change_image();
append_string_in_head();
