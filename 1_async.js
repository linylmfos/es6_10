async function myFunc() {
    // return "hello world";
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('hello world!'), 2000)
    });

    // 错误信息
    const error = true;

    if(!error) {
        // 等待resolve执行完毕之后， 才会执行
        const res = await promise;
        return res;
    } else {
        await Promise.reject(new Error("error: 报错了"));
    }
}

// 请求数据
async function getUsers() {
    const response = await fetch("http://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
}

getUsers().then(users => console.log(users))
// console.log(myFunc());

myFunc()
.then(data => console.log(data))
.catch(err => console.log('err',err))