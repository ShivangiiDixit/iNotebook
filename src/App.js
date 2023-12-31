// // import './App.css';
// // import Header from "./Component/Header";
// // import { Todos } from "./Component/Todos";
// // import { Footer } from "./Component/Footer";
// // import { AddTodo } from "./Component/AddTodo";
// // import { About } from "./Component/About";
// // import React, { useState, useEffect } from 'react';
// // import {
// //   BrowserRouter as Router,
// //   Switch,
// //   Route
// // } from "react-router-dom";

// // function App() {
// //   let initTodo;
// //   if (localStorage.getItem("todos") === null) {
// //     initTodo = [];
// //   }
// //   else {
// //     initTodo = JSON.parse(localStorage.getItem("todos"));
// //   }


// //   const onDelete = (todo) => {
// //     console.log("I am ondelete of todo", todo);
// //     // Deleting this way in react does not work
// //     // let index = todos.indexOf(todo);
// //     // todos.splice(index, 1);

// //     setTodos(todos.filter((e) => {
// //       return e !== todo;
// //     }));
// //     console.log("deleted", todos)
// //     localStorage.setItem("todos", JSON.stringify(todos));
// //   }

// //   const addTodo = (title, desc) => {
// //     console.log("I am adding this todo", title, desc)
// //     let sno;
// //     if (todos.length === 0) {
// //       sno = 0;
// //     }
// //     else {
// //       sno = todos[todos.length - 1].sno + 1;
// //     }
// //     const myTodo = {
// //       sno: sno,
// //       title: title,
// //       desc: desc,
// //     }
// //     setTodos([...todos, myTodo]);
// //     console.log(myTodo);
// //   }

// //   const [todos, setTodos] = useState(initTodo);
// //   useEffect(() => {
// //     localStorage.setItem("todos", JSON.stringify(todos));
// //   }, [todos])

// //   return ( 
// //     <> 
// //     <Router>
// //       <Header title="My Todos List" searchBar={false} /> 
// //       <Switch>
// //           <Route exact path="/" render={()=>{
// //             return(
// //             <>
// //             <AddTodo addTodo={addTodo} />
// //             <Todos todos={todos} onDelete={onDelete} /> 
// //             </>)
// //           }}> 
// //           </Route>
// //           <Route exact path="/about">
// //             <About />
// //           </Route> 
// //         </Switch> 
// //       <Footer />
// //     </Router>
// //     </>
// //   );
// // }

// // export default App;



// import './App.css';
// import Header from "./Component/Header";
// import { Todos } from "./Component/Todos";
// import { Footer } from "./Component/Footer";
// import { AddTodo } from "./Component/AddTodo";
// import { About } from "./Component/About";
// import React, { useState, useEffect } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

// function App() {
//   // Initialize todos using localStorage or an empty array
//   const initTodo = localStorage.getItem("todos")
//     ? JSON.parse(localStorage.getItem("todos"))
//     : [];

//   const [todos, setTodos] = useState(initTodo);

//   const onDelete = (todo) => {
//     console.log("I am ondelete of todo", todo);
//     setTodos(todos.filter((e) => {
//       return e !== todo;
//     }));
//     console.log("deleted", todos);
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }

//   const addTodo = (title, desc) => {
//     console.log("I am adding this todo", title, desc);
//     let sno;
//     if (todos.length === 0) {
//       sno = 0;
//     } else {
//       sno = todos[todos.length - 1].sno + 1;
//     }
//     const myTodo = {
//       sno: sno,
//       title: title,
//       desc: desc,
//     }
//     setTodos([...todos, myTodo]);
//     console.log(myTodo);
//   }

//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }, [todos])

//   return (
//     <>
//       <Router>
//         <Header title="My Todos List" searchBar={false} />
//         <Switch>
//           <Route exact path="/" render={() => {
//             return (
//               <>
//                 <AddTodo addTodo={addTodo} />
//                 <Todos todos={todos} onDelete={onDelete} />
//               </>
//             )
//           }}>
//           </Route>
//           <Route exact path="/about">
//             <About />
//           </Route>
//         </Switch>
//         <Footer />
//       </Router>
//     </>
//   );
// }

// export default App;



import './App.css';
import Header from "./Component/Header";
import { Todos } from "./Component/Todos";
import { Footer } from "./Component/Footer";
import { AddTodo } from "./Component/AddTodo";
import { About } from "./Component/About";
import React, { useState, useEffect } from 'react';

function App() {
  // const initTodo = localStorage.getItem("todos")
  //   ? JSON.parse(localStorage.getItem("todos"))
  //   : [];

  const [todos, setTodos] = useState(initTodo);

  const onDelete = (todo) => {
    console.log("I am ondelete of todo", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    console.log("deleted", todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Header title="My Todos List" searchBar={false} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
