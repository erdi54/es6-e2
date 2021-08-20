const myPromise = new Promise((resolve, reject)=>{

    let isComplete = true;

    if(isComplete){
        resolve("This is complete");

    }else{

        reject("This is NOT complete");

    }

});

myPromise.then((result)=>{

    console.log(result);
},(error)=>{

    console.log(error);
});


console.log("This is running ...");
