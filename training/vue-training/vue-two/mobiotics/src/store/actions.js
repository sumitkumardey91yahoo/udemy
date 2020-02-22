export const actLocation = (context) => {
     console.log("context", context)
 return new Promise((resolve, reject) => {
    fetch('https://geo.cloud.altbalaji.com/location').then((res) => {
        console.log("res======>", res)
        if( (res.status === 200 || res.status === 201) && res.ok === true) {
            return res.json();
        }
        throw new Error('not found');

    }).then((result) => {
        resolve(result);
    }).catch((error) => {
        reject(error);
    })
  });  
  
}

