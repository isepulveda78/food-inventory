import {useState} from 'react'
import Button from '../components/Button'
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'


const AddGrocery = ({history}) => {

    const [item, setItem] = useState("")
    const [quantity, setQuantity] = useState("")
    const [units, setUnits] = useState("")

    const handleSumbit = (e) => {
        e.preventDefault()

        const data = axios.post('http://localhost:8000/api/grocerylist/add', {
            item,
            quantity,
            units,
        })
             console.log(data)
            if(data.error){
                toast(data.error)
            }else{
                setItem("")
                setQuantity("")
                setUnits("")
                toast('Item added')
                history.push('/grocery')
            }
        } 
    return (
            <div className="row mt-5">
                <div className="col-md-8 offset-md-2">
                    <div className="text-end mb-1">
                       <Button path="/grocery" name={"Back"} />
                    </div>
                    <div className="card">
                        <div className="card-header">
                            Add Grocery
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

export default AddGrocery