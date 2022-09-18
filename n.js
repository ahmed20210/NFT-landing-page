function handleClick(e) {
    const arr = ["Ahmed","mohamed", "Ali"];
    let counter = 0 
    let index = 0
 while (index < arr.length-1) {
   index = index + counter.toFixed(counter).length
   console.log(typeof index)
     if( arr[index].startsWith("A")){
         console.log(arr[index])
     }
}
}
handleClick();
