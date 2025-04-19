import Navbar from "../components/navbar";



const Removeuser = () => {
    const name = "Okafor Victor"
    const date = "2/20/2025"
    return (
        <div>
        <Navbar></Navbar>
           
        <div className='purchase-content text-center text-white'>
        <div className='remove-text pt-4 fw-bold text-start'>Remove User
        </div>
        </div>
       
        <div className="remove-body position-relative">
        <div className="remove position-absolute "> 
            <div className="name fw-bold">{name}</div>
            <button className="remove-btn position-absolute rounded fw-bold">Remove</button>

        </div>
        
        <div className="remove1 position-absolute "> 
            <div className="name fw-bold">{name}</div>
            <button className="remove-btn position-absolute rounded fw-bold">Remove</button>

        </div>

        <div className="remove2 position-absolute "> 
            <div className="name fw-bold">{name}</div>
            <button className="remove-btn position-absolute rounded fw-bold">Remove</button>

        </div>

        <div className="remove3 position-absolute "> 
            <div className="name fw-bold">{name}</div>
            <button className="remove-btn position-absolute rounded fw-bold">Remove</button>

        </div>

        </div>     
        <footer className="mt-auto text-center py-3 w-100 position-absolute admin-footer text-white ">
            <p className="mb-0">&copy;2024 BestworthJvp. All rights reserved.</p>
           
          </footer>
        </div> 
        
     );
}
 
export default Removeuser;