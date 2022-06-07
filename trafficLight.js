//======================================================================================================
//          Functions, Callbacks and Async
//
// 
//======================================================================================================

// Log traffic light sequence in the order followed by 'finished'.

const arr=['green','amber','red', 'amber', 'green', 'finished'];
let i =0;

function light(str){
  
  window.setTimeout(()=>{
    console.log(str);
    if(str !='finished')
      light(arr[++i]);
    else
      return;  

  },1000);
}

light(arr[i]);