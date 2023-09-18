interface User {
    readonly dbID: number,
    email: string,
    userId: number,
    googleId?: string,
    startTrial: () => string,
    getCoupon(couponname: string, def: string) : number
}

interface User {
    githubToken: string
}

interface Admin extends User {
    role: "admin"| "ta" | "learner"
}

const bob: Admin = {userId: 3342, email: "i@i.com", dbID: 123, role: "learner" ,
githubToken: "i@i.com" ,startTrial: ()=>{
    return "trial started"
}, getCoupon:(name: "Faizi", off: "son of gun")=>{
    return 12
}


}
bob.email= "test@test.com"

// bob.dbID= 3342


export{}