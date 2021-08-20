let tunOnCumputer =function () {
    return new  Promise((resolve, reject ) =>{
            resolve('Computer is On');
    });
}

let OpenBrowser =function (msg) {
    return new  Promise((resolve, reject ) =>{
        resolve(msg + 'Browser is open');
    });
}

let goToThisPage = function (msg) {
    return new  Promise((resolve, reject )=>{
        resolve(msg +'Go to erdiozcan.com')
    });
}

tunOnCumputer().then((result)=>{
    return OpenBrowser(result);
}).then((result) =>{
    return goToThisPage(result);
}).then((result) =>{
   console.log('We are Done' + result)
});
