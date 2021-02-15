  const n =prompt("Enter a positive number");

  let num=1;
  let count = 0;
  let i;
  while (count< n ) {
    num = num+1;
    for(i =2;i<=num;i++){
      if(num%i === 0){
        break;
      }
    }
    if( i == num){
      count =count+1;
    }
  }
  console.log(num);
  
  
