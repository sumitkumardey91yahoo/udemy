

require(['one'], function (sub) {
    console.log((new sub()).sum(10))
});

require(['one'], function (sub) {
    console.log((new sub()).sum(10))
});


require(['one'], function (sub) {
    console.log((new sub()).sum(10))
});


// function imp() {
//     return new Promise((resolve, reject) => {
//         let script = document.createElement('script');
//         script.src = 'https://cdnjs.cloudlare.com/ajax/libs/require.js/2.3.6/require.min.js';
//         script.onload = resolve;
//         script.onerror = reject;
//         document.body.appendChild(script);
//     })
    
// }
// imp().then((res) => {
//     console.log("res", res)
// })

async function sumit() {
   let v = await new Promise((resolve, reject) => {
        setTimeout(()=> 
        resolve(10)
        , 2000)
    }) 
    console.log(v)
    return v;
}
console.log(sumit());

// async function f() {

//     let promise = await new Promise((resolve, reject) => {
//       setTimeout(() => resolve("done!"), 1000)
//     });
  
//     let result = await promise; // wait till the promise resolves (*)
  
//     alert(promise); // "done!"
//   }
  
//   f();