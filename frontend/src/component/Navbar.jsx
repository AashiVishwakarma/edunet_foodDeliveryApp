import React from 'react'
import {Link } from "react-router-dom"
// import {} from 'lucide-react'

const Navbar = () => {
  return (
    <div>
      
      <nav class="navbar navbar-expand-lg text-primary-emphasis bg-primary-subtle">
    <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a class="navbar-brand" href="#">Crispy_Nest</a>
      <ul class="navbar-nav me-auto mb-10 mb-lg-0">
        <li class="nav-item">
          <Link to="/Home" >Home <br /></Link >
        </li> 
        {/* style={{ marginRight: '10px' }} */}
        <li class="nav-item">
          <Link to="/Login" >Login <br /></Link>
        </li>
        <li class="nav-item">
          <Link to="/Register" >Register <br /></Link>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    
      </div>
  </div>
</nav>



    </div>
  )
}

export default Navbar
