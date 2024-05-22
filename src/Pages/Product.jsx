import React, { useReducer } from 'react'
const initialState={age:25,salary:1000};
const reducer =(state,action) =>{
switch (action) {
    case "salary":
        return {age:state.age,salary:state.salary + 1000} ;
        case "age":
            return {salary:state.salary,age:state.age + 1} ;
    default:
        return state;
}
// return state+1;
}
const Product = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>{state.age}</h1>
            <h1>{state.salary}</h1>
           <button onClick={()=>dispatch("salary")}>salry</button> 
           <button onClick={() =>dispatch("age")}>age</button>
        </div>
    )
}

export default Product
