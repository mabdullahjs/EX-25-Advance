import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db, getData } from '../config/firebase/firebasemethods'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { data } from 'autoprefixer'

const User = () => {
  const { id } = useParams()

  const [username, setUsername] = useState('');
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getDataFromFirestore()
  }, [])

  async function getDataFromFirestore() {
    const dataArr = []
    try {
      const q = query(
        collection(db, 'users'),
        where("id", "==", id)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        dataArr.push({ ...doc.data(), docid: doc.id })
      });
      console.log(dataArr)
      setUsername([dataArr[0].fullname])

      const userBlogs = await getData('blogs', id)
      console.log(userBlogs)
      setBlogs(userBlogs)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div>User {id} {username && username}</div>
      <div className='flex justify-center flex-wrap gap-5 m-5'>
        {blogs.length > 0 && blogs.map(item => {
          return <div key={item.docid} className="card bg-base-100 w-96 shadow-xl border border-black">
            <div className="card-body">
              <h2 className="card-title"> {item.title}!</h2>
              <p>{item.description}</p>
            </div>
          </div>
        })}
      </div>
    </>
  )
}

export default User