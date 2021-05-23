export const ADDTODO = 'addTodo'
export const REMOVETODO = 'removeTodo'
export const DONETODO = 'doneTodo'
// export const REMOVETASK = 'removeTask'
// export const DONETASK = 'doneTask'flgのTFを変えるactionを紐付ける

export const addTodo = (task)=>{
    return {
        type:ADDTODO,
        todo:{
            title:task,
            flg:false,
        }
    }
}

export const removeTodo =(index)=>{
    return{
        type:REMOVETODO,
        index:index
    }
}

export const doneTodo = (index)=>{
    return {
        type:DONETODO,
        index:index
    }
}
// export const removeTask = () =>({
//     type:REMOVETASK
// })
// export const doneTask = () =>({
//     type:DONETASK
// })