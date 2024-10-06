// import { useState } from "react"

// function App() {
//   const [counter , setCounter] = useState(0);

//   function addCounter (){
//     // setCounter(counter + 1);
//     // setCounter(counter + 1);
//     // setCounter(counter + 1);
//     // setCounter(counter + 1);

//     setCounter(preVal => preVal + 1)
//     setCounter(preVal => preVal + 1)
//     setCounter(preVal => preVal + 1)
//     setCounter(preVal => preVal + 1)
//   }
//   return (
//     <>
//       <h1>Hello world! {counter}</h1>
//       <button onClick={addCounter}>add {counter}</button>
//     </>
//   )
// }

// export default App










// components | props
// styling



// import React, { useState } from 'react'
// import Card from './components/Card'

// const App = () => {

//   return (
//     <>
//       <div>App</div>
//       <Card title="hello world" description="abc" src="https://via.placeholder.com/200" />
//       <Card title="world hello" description="lorem ipsum 123" src="https://via.placeholder.com/200" />
//     </>
//   )
// }

// export default App









// import React, { useState } from 'react'
// import Card from './components/Card';

// const App = () => {
//   const [showCard , setShowCard] = useState(false);

//   const changeCard = ()=>{
//     setShowCard(!showCard)
//   }
//   return (
//     <>
//     <h1>Hello world!</h1>
//     <button onClick={changeCard}>{showCard ? 'hide' : 'show'}</button>

//     {showCard ? <Card title="check card" description='hello world lorem ipsum' src="https://via.placeholder.com/200"/> : null}

//     </>
//   )
// }

// export default App



// counter add or less wala. counter ki value agar 5 sa bari haa to screen pa print hojaye "bara hogaye ho" : "bacha ho abhi"


// use effect
// tailwind css




// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// const App = () => {
//   return (
//     <>
//     <div className='text-center display-1'>App</div>
//     <Button variant="primary">Primary</Button>
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//     </>
//   )
// }

// export default App



// use state , use ref
// conditional rendering
// reuseable components || props
// styling
// olx card




// import React, { useEffect, useState } from 'react'
// import Btn from './components/Btn'

// const App = () => {
//     const [showBtn , setShowBtn] = useState(false)

//     useEffect(()=>{
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res => res.json())
//         .then(res => console.log(res))
//         .catch(err => console.log(err))
//     } , [])

//     return (
//         <>
//             <h1>Hello world!</h1>
//             <button onClick={()=> setShowBtn(!showBtn)}>{showBtn ? 'off' : 'On'}</button> <br /><br />
//             {showBtn ? <Btn title="hello"/> : null}
//         </>
//     )
// }

// export default App



// import React, { useState } from 'react'
// import Btn from './components/Btn'

// const App = () => {
//     const [show, setshow] = useState(false)
//   return (
//     <>
//     <h1>Quiz App</h1>
//     <div className='text-center'>
//     <button onClick={()=> setshow(!show)}>{show ? 'OFF' : 'ON'}</button>

//     </div>
//     {show ? <Btn title="add to cart"/>  : <p>Nahi krwa rha show </p>}
//     </>
//   )
// }

// export default App



import React, { useEffect, useState } from 'react'
import Btn from './components/Btn';

const App = () => {

    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        try {
            const data = await fetch('https://jsonplaceholder.typicode.com/users')
            const response = await data.json()
            console.log(response);
            setUsers(response)
        } catch (error) {
            console.log(error)
            setError(true)
        } finally {
            setLoading(false)
        }
    }
    return (
        <>
            <h1>Quiz App</h1>
            {/* {loading ? <h1>Loading...</h1> : null} */}
            {loading && <h1>Loading...</h1>}
            {users && users.map((item, index) => {
                return <Btn title={item.name }/>
            })}
            {error && <h1>Nahi dikha rha bhai ma...</h1>}
        </>
    )
}

export default App



// javascript ka undar kon kon si values falsy hoti hain

