import { Card } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addQuantity, lessQuantity, removeItem } from '../config/redux/reducers/cartSlice';

const Cart = () => {

    const selector = useSelector(state => state.cart.cart);
    console.log(selector);

    const totalPrice = selector.reduce((acc , cval)=>{
        return acc + cval.price * cval.quantity
    } , 0)

    console.log(totalPrice);

    const dispatch = useDispatch()

    const deleteCartItem = (item)=>{
        console.log('delete item');
        dispatch(removeItem(item))
        
    }
    
    const cartItemAddQuantity = (item)=>{
        console.log('add quantity');
        dispatch(addQuantity(item))
        
    }
    const cartItemLessQuantity = (item)=>{
        console.log('less quantity');
        dispatch(lessQuantity(item))

    }
    
    return (
        <div className='d-flex flex-column'>

            {selector.length > 0 ? selector.map((item, index) => {
                return <div className='border rounded border-dark m-2 p-5'>
                    <img width={'100px'} src={item.thumbnail} />
                    <h3>{item.title}</h3>
                    <div className='d-flex gap-2'>
                    <h3>Quantity</h3>
                    <button onClick={()=>cartItemAddQuantity(item)}>+</button>
                    <h3> {item.quantity}</h3>
                    <button onClick={()=>cartItemLessQuantity(item)}>-</button>
                    </div>
                    <h3>{item.price}</h3>

                    <button onClick={()=>deleteCartItem(item)}>delete Item</button>
                </div>
            }) : <h1>No item found.</h1>}

           {selector.length > 0 &&  <h1 className='m-5 text-center'>Total Price = {totalPrice}</h1>}
        </div>
    )
}

export default Cart