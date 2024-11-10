import React, { useEffect, useState } from 'react'
import { auth, getAllData } from '../config/firebase/firebasemethods'
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getAllData('blogs')
      .then((res) => {
        console.log(res);
        setBlogs(res)
      }).catch((err) => {
        console.log(err);
        setError(true)
      }).finally(() => {
        setLoading(false)
      })
  } , [])

  // navigate
  const navigate = useNavigate()
  // single user blog
  const singleUserBlog = (item)=>{
    if(!auth.currentUser){
      console.log('user login nahi ha.');
      alert('user not logged in')
      return
    }
    console.log('user login haa.' , item); 

    navigate(`/user/${item.uid}`)
  }
  return (
    <>
      <h1 className='text-center mt-3 text-2xl'>All Blogs</h1>
      {loading && <div className='h-[90vh] flex justify-center items-center'>
        <span className="loading loading-spinner text-primary"></span>
      </div>}
      {error && <h1>Internal server error!</h1>}

      <div className='flex justify-center flex-wrap gap-5 m-5'>
        {blogs && blogs.map((item, index) => {
          return <div key={item.documentId} className="card bg-base-100 w-96 shadow-xl border border-black">
            <div className="card-body">
              <h2 className="card-title"> {item.title}!</h2>
              <p>{item.description}</p>
            </div>
            <div className="card-actions m-5 justify-start cursor-pointer">
              <a className="text-primary" onClick={()=>singleUserBlog(item)}>See all from this user</a>
            </div>
          </div>
        })}
      </div>
    </>
  )
}

export default Home