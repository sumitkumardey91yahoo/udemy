class Service {
    constructor(con) {
        this.base = con
    }

    actData(data) {
        return new Promise((resolve, reject) => {
            fetch(`${this.base}/todos/${data}`).then((res) => {
                return res.json();
            }).then((data) => {
                resolve(data)
            }).catch((err) => {
                reject(err)
            })
    
        });
    }
    actTest() {
        console.log("test")
    }
}

export default Service;