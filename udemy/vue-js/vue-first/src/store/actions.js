export const actGetApi = (context, data) => {
    console.log("context", context)
    let base = context.getters.getBaseUrl;
    return new Promise((resolve, reject) => {
        fetch(`${base}/todos/${data}`).then((res) => {
            return res.json();
        }).then((data) => {
            resolve(data)
        }).catch((err) => {
            reject(err)
        })

    });
}