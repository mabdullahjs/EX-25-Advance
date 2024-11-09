import React, { useEffect, useRef, useState } from 'react'
import { auth, deleteDocument, getData, sendData } from '../config/firebase/firebasemethods';
import { Timestamp } from 'firebase/firestore';

const Dashboard = () => {

  // states
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [dbDocId, setDbDocId] = useState(null);

  // use effect for get user blog
  useEffect(() => {
    getData('blogs', auth.currentUser.uid)
      .then((res) => {
        console.log(res);
        setData(res)
      }).catch((err) => {
        console.log(err);

      })
  }, [])

  // use ref for form values

  const title = useRef();
  const description = useRef()

  // add blog

  const postBlog = (event) => {
    event.preventDefault();
    setLoading(true)
    console.log(title.current.value);
    console.log(description.current.value);


    sendData({
      title: title.current.value,
      description: description.current.value,
      uid: auth.currentUser.uid,
      timeStamp: Timestamp.fromDate(new Date())
    }, 'blogs').then((res) => {
      console.log(res);
      data.push({
        title: title.current.value,
        description: description.current.value,
        uid: auth.currentUser.uid,
        docid: res
      })


    }).catch((err) => {
      console.log(err);
    }).finally(() => {
      setLoading(false)
    })
  }

  // delete blog from database
  const deleteBlog = (docId)=>{
    console.log('delete blog ===> ' , docId.docid)
    deleteDocument(docId.docid , 'blogs')
    .then((res)=>{
      console.log(res)
      data.splice(dbDocId.index , 1)
      setData([...data]);
    }).catch((err)=>{
      console.log(err);
    })
  }
  return (
    <>
      <h1 className='text-center mt-5 text-2xl'>Dashboard</h1>

      <form className='flex flex-col gap-4 justify-center items-center'>
        <input type="text" placeholder="title" className="input input-bordered w-full max-w-xs" ref={title} />
        <textarea className="textarea textarea-bordered w-[20rem]" placeholder="What is in your mind?" ref={description}></textarea>

        <button type='submit' className="btn btn-primary" onClick={postBlog}> {loading ? <span className="loading loading-spinner loading-sm"></span> : 'Publish Blogs'}</button>
      </form>

      <div className='flex justify-center mt-5 flex-wrap gap-5 m-5'>
        {data && data.map((item, index) => {
          return <div key={index} className="card bg-base-100 w-96 shadow-xl border border-black">
            <div className="card-body">
              <h2 className="card-title"> {item.title}!</h2>
              <p>{item.description}</p>
            </div>
            <div className="card-actions m-5 justify-end">
              <button className="btn btn-success">Edit</button>
              <button className="btn btn-error" onClick={() => {
                setDbDocId({
                  docid: item.docid,
                  index

                })
                document.getElementById('delete-modal').showModal()
              }}>Delete</button>
            </div>
          </div>
        })}
      </div>

      
      <dialog id="delete-modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Are you sure!</h3>
          <p className="py-4">You want to delete this Blog?</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-error mx-2" onClick={()=> deleteBlog(dbDocId)}>Yes</button>
              <button className="btn btn-success mx-2">No</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  )
}

export default Dashboard