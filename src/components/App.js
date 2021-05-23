import React,{useState} from "react";
import {connect} from 'react-redux';

import{addTodo,removeTodo,doneTodo} from '../actions'
  // const todolist = [
  //     { title: '概要作成' ,flg:false},

  // const [todos, setTodo] = useState(todolist)
  
  // const [task, setTask] = useState("")
  
  // const createTask = (e) => { 
  //   setTask(e.target.value)
  // }

  // const addTask = (e) => { 
  //   //===createTask使わず、ここでテキストボックスの要素を指定して取得するのもあり（DOM）
  //   if (task === '') return
  //   setTodo(todos => [...todos, { title: task, flg: false }])
  //   setTask('')
  // }

  // const removeTask = index => { 
  //   const newTodos = [...todos]
  //   newTodos.splice(index, 1)
  //   setTodo(newTodos)
  // }
// class App extends React.Component{
//   render(){
//     const props = this.props
//     return(
//       <React.Fragment>
//         <h1>todoリスト</h1>
//         <input value={text} />

//         <button onClick={props.addTask({text})}>追加</button>
//         <ul>
//           {props.todos.map((todo,index)=>(
//             <li key ={index}>{todo.text}</li>
//           ) )}
//         </ul>
//         {/* <ul>
//          { props.todos.map((todo, index) => (
//           <li key={ index }>{ todo.title } <button onClick={ () => removeTask(index) }>削除</button></li>
//           //引数が必要なら無名関数を呼び出して引数を持った関数との紐付けをする
//          ))}
//         </ul> */}
//       </React.Fragment>

//     )
//   }
// }

const App =(props)=>{
  const[taskItem,setTask]=useState('')

// ''はtaskInpurというステートの初期値。taskInput = '' (フォームに値は入っておらず空欄)
// フォーム機能のための箇所。''の中に値を入れるとフォームに値が入る
// setTaskという関数でtaskItemの値を変更する。

  const createTask = e =>{
    // フォームの値が変更されると実行（onChangeにて検知）。
    setTask(e.target.value)
  }

  const addTask =()=>{
    //console.log('')
    if(taskItem === '')return;
    console.log(taskItem)
    props.addTodo(taskItem)
    setTask('')//inputの中身を空にする
  }

  const removeTask = index =>{
    props.removeTodo(index)
  }

  const doneTask = index =>{
    props.doneTodo(index)
  }
  return(
    <div>
      <h1>TODOリスト</h1>
      <input value={taskItem} onChange={createTask} />
      <button onClick={addTask}>追加</button>
      <ul>
        {props.todos.map((todo,index)=>(
                  <li key={index}>
                    {todo.flg ? <del>{todo.title}</del> : <span>{todo.title}</span> }
                    {todo.flg ? <button onClick={() => doneTask(index)}>未了</button> : <button onClick={() => doneTask(index)}>完了</button>}
                    <button onClick={()=>removeTask(index)}>削除</button>
                  </li>
        )
        )}
      </ul>
    </div>
   
  )

}

const mapStateToProps = state =>({
  todos: state.todoList.todos
})
const mapDispatchToProps = dispatch =>({
  addTodo:(task)=>dispatch(addTodo(task)),
  removeTodo:(index)=>dispatch(removeTodo(index)),
  doneTodo:(index)=>dispatch(doneTodo(index)),

})
export default connect (mapStateToProps,mapDispatchToProps)(App)
