import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  )
// const person= {
//     name: "long",
//     id:1,
//     age: 21,
//     status: false,
//     Children: [
//         {name:"abc", id: 1},
//         {name:"bcd", id: 2},
//     ]
// }
// const show= (age)=> <h1>Tuoi cua ban la : {age} </h1>
// //component
// const Shows= props => <h1>Tuoi cua ban la : {props.age} </h1>
// ReactDOM.render(<div>
//     <p>Name : {person.name}</p>
//     <p>id : {person.id}</p>
//     <p>id : {person.status ? "real love" : "fake love"}</p>
//     <ul>
//         {person.Children.map(post =><li>
//             {post.name}
//             {post.id}
//         </li>)}
//     </ul>
//     function: {show(person.age)}
//     component: <div><Shows age={person.age}/></div>
//     </div>, document.querySelector("#root"));
