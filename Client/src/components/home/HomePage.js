import React, {Component} from 'react'
import PowerCardList from '../common/Power/PowerCardList'
import Auth from '../../utils/auth'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class HomePage extends Component {
  render () {
    const isAdmin = Auth.isUserAdmin();
    const isAuthenticated = Auth.isUserAuthenticated();

    let headingText, secondLinkName, secondLinkPath;
    if (isAdmin) {
      headingText = ', ' + Auth.getUsername();
      secondLinkName = 'View pending orders';
      secondLinkPath = '/admin/orders'
    } else if (isAuthenticated) {
      headingText = ', ' + Auth.getUsername();
      secondLinkName = 'View your orders';
      secondLinkPath = '/orders'
    } else {
      headingText = '';
      secondLinkName = 'Register';
      secondLinkPath = '/register'
    }

    const startIndex = 0;
    const pageSize = 6;
    const powerCards = this.props.products
        .sort((a, b) => b.likes.length - a.likes.length)
        .slice(startIndex, pageSize);

    return (
        <div className='container'>
          <section className='jumbotron text-center'>
            <div className='container'>
              <h1 className='jumbotron-heading'>Welcome to Sportshop{headingText} !</h1>
              {!isAuthenticated &&
              <p className='lead text-muted'>Register now and get your favorite foods supplements.</p>}
              <p>
                <Link to='/products' className='btn btn-primary'>All products</Link>
                <Link to={secondLinkPath} className='btn btn-secondary'>{secondLinkName}</Link>
              </p>
            </div>
          </section>
          <h2 className='font-italic text-center'>Top Rated</h2>
          <PowerCardList products={powerCards}/>
        </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps)(HomePage)
