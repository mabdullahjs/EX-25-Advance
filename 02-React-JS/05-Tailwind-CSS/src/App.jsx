import React from 'react'

const App = () => {

  return (
    <>
      <h1 className="text-center bg-[blue] lg:bg-slate-500 p-[2rem] text-white text-5xl">Hello world</h1>

      <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Do you want to delete!</h3>
          <p className="py-4">Press ESC key or click the button below to close</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-error mx-3">Yes</button>
              <button className="btn btn-success mx-3">No</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  )
}

export default App