import React, {Component} from 'react'
import {Link, NavLink} from 'react-router-dom'

class Navbar extends Component {

  render(){
  const {loggedIn, isAdmin, logout} = this.props;

    return (
        <header>
          <nav className='navbar navbar-dark bg-warning'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <Link className='navbar-brand' to='/'>SPORTSHOP</Link>
                  <NavLink className='nav-link' activeClassName='active' exact to='/'>Home</NavLink>
                  <NavLink className='nav-link' to='/products'>Products</NavLink>
                  {loggedIn && !isAdmin && <NavLink className='nav-link' to='/orders'>My Orders</NavLink>}
                  {isAdmin && <NavLink className='nav-link' to='/admin/create'>Create New Product</NavLink>}
                  {isAdmin && <NavLink className='nav-link' to='/admin/orders/pending'>Pending Orders</NavLink>}
                  {loggedIn && !isAdmin && <NavLink className='nav-link' to='/cart'>Cart</NavLink>}
                  {loggedIn && <a className='nav-link' href='javascript:void(0)' onClick={logout}>Logout</a>}
                  {!loggedIn && <NavLink className='nav-link' to='/login'>Login</NavLink>}
                  {!loggedIn && <NavLink className='nav-link' to='/register'>Register</NavLink>}
                </div>
              </div>
            </div>
          </nav>
        </header>
    )
  }
}
export default Navbar
