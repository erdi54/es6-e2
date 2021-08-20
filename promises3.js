let tunOnCumputer =function () {
    return new  Promise((resolve, reject ) =>{
        resolve('First one Faıled');
    });
}

let OpenBrowser =function (msg) {
    return new  Promise((resolve, reject ) =>{
        resolve('WHATT???')
    });
}

let goToThisPage = function (msg) {
    return new  Promise((resolve, reject )=>{
        resolve(msg +'Cannot visit page-')
    });
}
/*
tunOnCumputer().then((result)=>{
    return OpenBrowser(result);
}).then((result) =>{
    console.log('SECOND ONE')
}).then((result) =>{
    console.log('THIRD ONE')
}).catch((e) =>{
    console.log(e)
});
*/
Promise.all([tunOnCumputer(), OpenBrowser(), goToThisPage()]).then(function () {
    console.log("Done")
});
