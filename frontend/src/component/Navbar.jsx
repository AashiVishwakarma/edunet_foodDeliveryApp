import { Link } from 'react-router-dom';
 //import ItemsDisplay from './ItemsDisplay';

function Navbar() {
  return (
    // <nav style={{ padding: '10px', backgroundColor: '#333', color: 'white' }}>
    //   <Link to="/" style={{ margin: '0 10px', color: 'white' }}>Home</Link>
    //   {/* <Link to="/foods" style={{ margin: '0 10px', color: 'white' }}>Food Menu</Link> */}
    //   <Link to="/Login" style={{ margin: '0 10px', color: 'white' }}>Login</Link>
    //   <Link to="/Register" style={{ margin: '0 10px', color: 'white' }}>Register</Link>
    // </nav>
    <div>
      
      <nav className="navbar navbar-expand-lg text-primary-emphasis bg-primary-subtle">
    <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a className="navbar-brand" href="Crispy_Nest" style={{ margin: '0 10px', color: 'white' }}>Crispy_Nest</a>
      <ul className="navbar-nav me-auto mb-10 mb-lg-0">
        <li className="nav-item">
        <Link to="/" style={{ margin: '0 10px', color: 'white' }}>Home</Link>
        </li> 
        
        <li className="nav-item">
          <Link to="/Login" style={{ margin: '0 10px', color: 'white' }} >Login <br /></Link>
        </li>
        <li className="nav-item">
          <Link to="/Register" style={{ margin: '0 10px', color: 'white' }} >Register <br /></Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Submit</button>
      </form>
    
      </div>
  </div>
</nav>

<div>
{/* <ItemsDisplay /> */}
</div>


    </div>

   
  );
}

export default Navbar;
