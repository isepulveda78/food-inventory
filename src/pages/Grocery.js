import SideNav from "../components/SideNav"
import Button from '../components/Button'
import GroceryList from "../components/GroceryList"

const Grocery = () => {
    return (
        <div className="container mt-5">
        <div className='row mx-auto'>
            <div className='col-md-4'>
              <SideNav />
            </div>
            <div className='col-md-8'>
                    <div className="text-end mb-1">
                        <Button path="/addGrocery" name={'Add to Grocery List'} />
                    </div>
               <GroceryList />
            </div>
        </div>
    </div>
    )
}
export default Grocery