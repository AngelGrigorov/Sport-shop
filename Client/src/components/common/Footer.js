import React from 'react'
import { Footer } from 'mdbreact'
import { Link } from 'react-router-dom'

const FooterComponent = () => (
  <div><br/><br/><br/><br/>
    <Footer id='footer' color='orange lighten-3' className='footer-copyright text-center py-3'>
        <Link to='/'> SPORTSHOP </Link>
    </Footer>
  </div>
);

export default FooterComponent
