export type RegisterDataType = {
    status: string,
    message: string,

    userId: string,
    token?: string,

}

export type LoginDataType = {
    status: string,
    message: string,

    userId: string,
    token?: string,

}

export type addTaskDataType = {
    title: string,
    description: string,
    catagory: string
    subCatagory: string,
    status: string,
    priority: string,
}


export type addTaskeReturnDataType = {
    userId: string,
    title: string,
    description: string,
    catagory: string
    subCatagory: string,
    status: string,
    priority: string,
}

export type tasksData = {
    _id:string,
    title: string,
    description: string,
    catagory: string
    subCatagory: string,
    status: string,
    priority: string,
}

export type getTasksReturnDataType = {
    _id:string,
    title: string,
    description: string,
    catagory: string
    subCatagory: string,
    status: string,
    priority: string,
}
