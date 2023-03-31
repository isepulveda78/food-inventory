import axios from "axios"
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { toast } from "react-hot-toast"
import Moment from 'react-moment'
const FoodInventory = () => {

  const [item, setItem] = useState([])

  useEffect(() => {
    getFood()
  }, [])

  const getFood = async () => {
     await axios.get('http://localhost:8000/api/foodinventory')
    .then((res) => {
      setItem(res.data)
    })
    .catch((err) =>  console.log(err))
  }

  const deleteFood = (_id) => {
     axios.delete(`http://localhost:8000/api/foodinventory/delete/${_id}`)
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
                      <th scope="col">Location</th>
                      <th scope="col">Expires</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                  {item && item.map((food) => (
                    <tr key={food._id}>
                      <th scope="row">{food.item}</th>
                      <td>{food.quantity}</td>
                      <td>{food.units}</td>
                      <td>{food.location}</td>
                      <td><Moment format="MM/DD/YYYY" date={food.date} /></td>
                      <td><Link className="badge text-bg-primary" to={`/updateFood/${food._id}`}>Update</Link> 
                      <div className="badge text-bg-danger text-decoration-underline" style={{cursor: "pointer"}} onClick={()=> deleteFood(food._id)}>Delete</div>
                      <Link className="badge text-bg-warning" to={`/inventory/${food._id}`}>Replenish</Link>
                      </td>
                    </tr>
                    ))
                    }
                  </tbody>
                </table>
          </div>
      </div>
    )
}

export default FoodInventory