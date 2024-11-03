import React, { useEffect, useRef, useState } from 'react'
import { collection, addDoc, getDocs, query, where, doc, deleteDoc, Timestamp, updateDoc, orderBy } from "firebase/firestore";
import { auth, db } from '../config/firebase/firebaseconfig';


const Home = () => {
  const todoInput = useRef();

  // usestate
  const [todo, setTodo] = useState([]);

  // useeffect
  useEffect(() => {
    const getDataFromFirestore = async () => {
      const q = query(collection(db, "todo"), where("uid", "==", auth.currentUser.uid) , orderBy("date"));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // console.log(`${doc.id} => ${doc.data()}`);
        console.log(doc.data());
        todo.push({
          ...doc.data(),
          docid: doc.id
        })
        setTodo([...todo])

      });
    }

    getDataFromFirestore()
  }, [])

  // add todo
  const addTodo = async (event) => {
    event.preventDefault()
    console.log(todoInput.current.value)

    try {
      const docRef = await addDoc(collection(db, "todo"), {
        title: todoInput.current.value,
        uid: auth.currentUser.uid,
        date: Timestamp.fromDate(new Date()),

      });
      console.log("Document written with ID: ", docRef.id);
      todo.push({
        title: todoInput.current.value,
        uid: auth.currentUser.uid,
        docid: docRef.id
      })
      setTodo([...todo])
    } catch (e) {
      console.error("Error adding document: ", e);
    }

  }

  // delete and edit todo
  const deleteTodo = async (item, index) => {
    console.log(item)
    await deleteDoc(doc(db, "todo", item.docid));
    todo.splice(index, 1);
    setTodo([...todo]);
    console.log('data deleted')
  }
  const editTodo = async (item , index) => {
    const updatedVal = prompt('enter updated val');
    const washingtonRef = doc(db, "todo", item.docid);

    await updateDoc(washingtonRef, {
      title: updatedVal
    });
    todo[index].title = updatedVal;
    setTodo([...todo]);
    console.log('todo updated')

  }
  return (
    <>


      <h1 className='text-center mt-5'>Todo App updated</h1>
      <form className='text-center mt-5' onSubmit={addTodo}>
        <input type="text" placeholder='enter todo' ref={todoInput} />
        <button type="submit">Add Todo</button>
      </form>
      <ol>
        {todo.length > 0 ? todo.map((item, index) => {
          return <li key={item.docid}>{item.title}
            <button onClick={() => deleteTodo(item, index)}>delete</button>
            <button onClick={() => editTodo(item , index)}>edit</button>
          </li>
        }) : <h1>No Data Found...</h1>}
      </ol>
    </>
  )
}

export default Home