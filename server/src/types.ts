export type registerbody = {
    name: string,
    email: string,
    password: string,
    contactNo: string,
}

export type loginbody = {
    email: string,
    password: string,
    token?: string
}


export type addtaskbody = {
    title: string,
    description: string,
    catagory: string,
    status: string,
    priority: string,
    userId: string
}
export type edittaskbody = {
    id: string,
    title: string,
    description: string,
    catagory: string,
    status: string,
    priority: string
}

export type deletetaskbody = {
    id: string
}
export type getonetaskbody = {
    id: string
}

