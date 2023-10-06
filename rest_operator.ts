////rest opreator using function 

function sum(a: number, b: number, ...otherNum: number[]) {
    let store = 0; // Initialize store to 0
    for (let i = 0; i < otherNum.length; i++) {
      store += otherNum[i]; // Add each value to store
      console.log(store);
    }
    console.log(a+b+store)
  }
  
  sum(1, 2, 4, 21);
  