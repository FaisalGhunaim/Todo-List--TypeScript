import React, { useState } from "react";

import "./App.css";
import { type } from "os";
import InputFeild from "./components/InputFeild";
import { Todo } from "./components/model";
import TodoList from "./components/TodoList";
const App: React.FC = () => {
  //fc means we detrminte it as a functional components type
  let all: any; //with any u can assign any type u want
  let random: unknown; //unknown means when u dont know which type u want to asign which accept all the data type we recommendd to use unknow not the any
  let name: string;
  name = "faisal";
  let age: number;
  age = 3;
  let isStudent: boolean | string; // this sign | means that may be an a string  or an a boolean
  isStudent = "true";
  let hobbies: string[]; //array of string
  hobbies = ["faisal", "ahmad"];

  let role: [number, string]; //array that containes one item which is a number and the sceond is string
  // be carfull its just one by one if u want one more number u just say number , number , string etc...
  role = [2, "faisal"];
  type person = {
    //that how u defind an obj with typeScript
    name: string;
    age?: number; //the ? sign mean that we colud not sign the age property but if the ? not includede that means we have to include the age
  };

  let lotsOfPeople: person[]; //thats means we have an array of object
  let person: person = {
    name: "faisal",
    age: 22,
  };
  let printName: (name: string) => never; //thats how u define a function
  // never when u dont know if the function will return or not if u sure it will u use number or string any thing
  // that the function will return it ,,,, and if not return anything and u sure u just put an void
  // the diffrent between void and never void will return undeined if it return somenthing but never will return nothing

  interface x {
    // u can type the obj with type and interface but the recommended one the interface
    name: string;
    age: number;
  }
  interface y extends x {
    job: string; //extends means we inherted the element of obj x in element of obj y
    title: string;
  }

  let z: y = {
    name: "",
    job: "developer",
    age: 0,
    title: "Amman",
  };
 







  
  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])
  
  const handleAdd = (e : React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos , { id: Date.now(), todoo: todo, isDone: false }]);
      setTodo('')
    }
  }
  console.log(todos)
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos}/>

    </div>
  );
};

export default App;
