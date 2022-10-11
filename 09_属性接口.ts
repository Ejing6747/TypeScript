/*
//建议定义的接口和使用接口传参时属性一致
//定义接口
interface fullName {
    firstName: string;//注意，这里是定义的对象属性接口，但是还是使用分号
    lastName: string;
}

//定义使用接口的方法
function printInfo(name: fullName): void {
    alert(`${name.firstName}--${name.lastName}`);
}

//使用接口方法一：
let obj = {
    firstName: "张",//注意：实例化接口时使用的是分号
    lastName: "三",
}
printInfo(obj);

//使用接口方法二：
printInfo({ firstName: '李', lastName: '四' });


//练习：定义一个ajax属性接口，传参发送请求
interface Config {
    type: string;
    url: string;
    data?: string;
    dataType: string;
}

function ajax(config: Config) {
    let xhr = new XMLHttpRequest();
    xhr.open(config.type, config.url, true);
    xhr.send(config.data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log('成功');
            if (config.dataType == 'json') {
                console.log(JSON.parse(xhr.responseText));
            } else {
                console.log(xhr.responseText);
            }
        }
    }
}

var config = {
    type: 'get',
    url: 'http://a.itying.com/api/productlist',
    data: 'hello',
    dataType: 'json',
}

ajax(config);
*/