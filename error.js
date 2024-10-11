//try and catch    finally




var a = 10;
var b = 1;

try{

    if(b === 0){
        throw("There is and error: 0")
    }
    if(b ===1) {
        throw("There is and error; 1")
    }

    var result = a /b ;
    console.log(result)
} catch (err){
    console.log(err)
} finally{
     console.log("This is my final call" )  // always run
}
