
const Navbar = () => {
    return (
        <li className="nav-item m-2">
        <a className="nav-link nav-text-current" href="/home">Home</a>
      </li>
      <li className="nav-item m-2">
        <a className="nav-link nav-text" href="/products">Products</a>
      </li>
      <li className="nav-item m-2">
        <a className="nav-link nav-text" href="/order">Order</a>
      </li>
      <li className="nav-item m-2">
        <a className="nav-link nav-text" href="/notifications">Notification</a>
      </li>


        </nav>
      );
}
 
export default Navbar;