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
    subCatagory: string,
    status: string,
    priority: string,
}

