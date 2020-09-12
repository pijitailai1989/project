export function getPromiseAction( p , commit , mutationType ){
    let promise = new Promise( (resolve,reject) => {
        p.then( res => {
            let {code ,msg ,data} = res.data
            if(code === 200) {
                commit(mutationType, data)
                
                return resolve(msg)
                
            } else {
                return reject(msg)
            }
        }, error => {
            
            return reject('服务器异常 ！')
        }).catch( error => {
            return reject('服务器异常 ！')
        })
    })
    return promise ;
}

export function getPromiseActionNoMutations(p){
    let promise = new Promise( (resolve,reject) => {
        p.then( res => {
            let {code ,msg ,data} = res.data
            if(code === 200) {
                return resolve(msg)
                
            } else {
                return reject(msg)
            }
        }, error => {
            return reject('服务器异常 ！')
        }).catch( error => {
            return reject('服务器异常 ！')
        })
    })
    return promise ;
}