//callback snyc (one way)  asnyc( two ways )  settimeout (some delay issue are created in settimeout)



function fetchData(callback) {
    setTimeout(() => {
        console.log("Network Data");
        callback();
    }, 1000);
}

    function processData() {
        console.log ("Processing Network data");
    }

    fetchData(processData);

    console.log("Hello I am working")


    //promise 
    let promise = new Promise((resolves , reject)  => {
        let success = false

        if(success){

           resolves("opeartion successful")
        } else{
            reject("Operation failed")
        }

        

    } );

    promise
    .then((message)   => {
        console.log(message);
    })
    .catch((err)  => {
        console.log(err);
    })


 async function fetchData(){
        let promise = new Promise ((res , rej)  => {
            setTimeout(() =>   res ("Data fetched") , 1000)
        })

        let result = await promise;
        console.log(result)

    }


    fetchData();