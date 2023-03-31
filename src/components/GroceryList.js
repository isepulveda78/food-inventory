import axios from "axios"
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { toast } from "react-hot-toast"

const GroceryList = () => {

  const [item, setItem] = useState([])

  useEffect(() => {
    getGrocery()
  }, [])

  const getGrocery = async () => {
     await axios.get('http://localhost:8000/api/grocerylist')
    .then((res) => {
      setItem(res.data)
    })
    .catch((err) =>  console.log(err))
  }

  const deleteGrocery = (_id) => {
     axios.delete(`http://localhost:8000/api/grocerylist/delete/${_id}`)
     toast('Item Deleted')
     window.location.reload()
  }

    return (
        <div className="card">
          <div className="card-body">
              <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Item</th>
                      <th scope="col">Qty</th>
                      <th scope="col">Units</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                  {item && item.map((grocery) => (
                    <tr key={grocery._id}>
                      <th scope="row">{grocery.item}</th>
                      <td>{grocery.quantity}</td>
                      <td>{grocery.units}</td>
                      <td><Link className="badge text-bg-primary" to={`/updateGrocery/${grocery._id}`}>Update</Link> <button className="badge text-bg-danger" onClick={()=> deleteGrocery(grocery._id)}>Delete</button></td>
                    </tr>
                    ))
                    }
                  </tbody>
                </table>
          </div>
      </div>
    )
}

export default GroceryList