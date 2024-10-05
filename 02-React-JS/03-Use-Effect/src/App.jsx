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