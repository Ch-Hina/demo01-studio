
//for loop
 for (let i = 0; i <= 5; ++i ) {
     console.log(i)
 }


//while loop

 let count = 0;

 while(count < 3) {
     count++
     console.log(count);
 }   


//do while loop

  let number = 0 ;
 do{
     number++
     console.log(number);

 }while(number < 3)

    //for In and of (in data show the index of data and of is show the actually data show in output)

    let data = ['one' , 'two' , 'three' , 'four' , 'five' ]
    
    
    for(let i of data){
        console.log(i)
    }


    for(let i = 0; i < 10; i++){
        if(i == 3) {
          console.log("Validation checked")
          continue;
        }
        console.log (i)
        }