import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Button,Form} from 'react-bootstrap'

const Text1 = () => {
 const [data, setdata] = useState([])   
 const [Id, setId] = useState(0)
 const fetchData = (userId) =>{
    axios.get('https://jsonplaceholder.typicode.com/users/' + `${userId}`)
    .then((response) => {setdata(response.data)})
 }
 useEffect(() => {
    fetchData(Id);  
},[Id]);

  return (
    <>
         <Form className="d-flex">
            <Form.Control
              type="search"
              value={Id}
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => setId(e.target.value)}
            />
            {/* <Button variant="outline-success" >Search</Button> */}
          </Form>
          <p>{data.phone}</p>
          </>
  )
}

export default Text1
