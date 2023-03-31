import SideNav from "../components/SideNav"
import FoodInventory from "../components/FoodInventory"
import Button from '../components/Button'
const Home = () => {
    return (
        <div className="container mt-5">
        <div className='row mx-auto'>
            <div className='col-md-4'>
              <SideNav />
            </div>
            <div className='col-md-8'>
                    <div className="text-end mb-1">
                       <Button path="/addFood" name={'Add to Inventory'} />
                    </div>
               <FoodInventory />
            </div>
        </div>
    </div>
    )
}
export default Home