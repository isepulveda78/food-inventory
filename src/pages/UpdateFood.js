import {useState, useEffect, useMemo} from 'react'
import Button from '../components/Button'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import Moment from 'react-moment'
const UpdateFood = ({history}) => {

    const [item, setItem] = useState("")
    const [quantity, setQuantity] = useState("")
    const [units, setUnits] = useState("")
    const [location, setLocation] = useState("")
    const [date, setDate] = useState("")

    useEffect(() => {
        getFood()
    }, [])

    const { id } = useParams()

    const getFood = async () => {
        const res = await axios.get(`http://localhost:8000/api/foodinventory/${id}`)
        const food = res.data
        setItem(food.item)
        setQuantity(food.quantity)
        setUnits(food.units)
        setLocation(food.location)
        setDate(food.date)
    }
        
    const handleSumbit = (e) => {
        e.preventDefault()

        const data = axios.put(`http://localhost:8000/api/foodinventory/update/${id}`, {
            item,
            quantity,
            units,
            location,
            date,
        })
    
            if(data.error){
                toast(data.error)
            }else{
                setItem("")
                setQuantity("")
                setUnits("")
                setLocation("")
                setDate("")
                toast('Item updated')
                history.push('/grocery')
            }
        } 
    
    return (
            <div className="row mt-5">
                <div className="col-md-8 offset-md-2">
                    <div className="text-end mb-1">
                       <Button path="/" name={"Back"} />
                    </div>
                    <div className="card">
                        <div className="card-header">
                            Update Food Inventory
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSumbit}>
                                <div className="mb-3">
                                  <label htmlFor="item" className="form-label">Item</label>
                                  <input 
                                  type="text" 
                                  className="form-control" 
                                  id="item" 
                                  aria-describedby="item" 
                                  value={item}
                                  onChange={(e) => setItem(e.target.value)}
                                  />
                                </div>
                                <div className="mb-3">
                                  <label htmlFor="quantity" className="form-label">Quantity</label>
                                  <input 
                                  type="number" 
                                  className="form-control" 
                                  id="quantity" 
                                  value={quantity}
                                  onChange={(e) => setQuantity(e.target.value)}
                                  />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="units" className="form-label">Units</label>
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    id="units" 
                                    value={units}
                                    onChange={(e) => setUnits(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="location" className="form-label">Location</label>
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    id="location" 
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="expires" className="form-label">Expires</label>
                                    <input 
                                    type="date" 
                                    className="form-control" 
                                    id="date" 
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    />
                                </div>
                                <button 
                                type="submit" 
                                className="btn btn-primary"
                                >Submit</button>
                              </form>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default UpdateFood