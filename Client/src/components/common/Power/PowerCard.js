import React from 'react'
import Auth from '../../../utils/auth'
import {deleteProductAction} from '../../../actions/productsActions'
import { addToCartAction } from '../../../actions/cartActions'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'

const PowerCard = (props) => {

  function onOrderButtonClick () {
    if (Auth.isUserAuthenticated()) {
      props.addToCart(props.id);
      props.history.push('/cart')
    } else {
      props.history.push('/login')
    }
  }

  function onDeleteButtonClick () {
    props.deleteProduct(props.id)
  }

    const { id, name, image, description, price } = props;
    let footer;
    if (Auth.isUserAdmin()) {
      footer = (
        <div className='card-footer'>
          <small className='text-muted text-warning'><i className='fa fa-dollar' />{price}</small>
          <button onClick={onDeleteButtonClick} className='btn btn-danger float-right btn-sm'><i className='fa fa-trash' /></button>
          <Link to={`/admin/edit/${id}`} className='btn btn-warning float-right btn-sm'><i className='fa fa-edit' /></Link>
        </div>
      )
    } else {
      footer = (
        <div className='card-footer'>
          <small className='text-muted text-warning'><i className='fa fa-dollar' />{price}</small>
          <Link to={`/details/${id}`} type='button' className='btn btn-primary float-right btn-sm'>Details</Link>
          <button type='button' className='btn btn-warning float-right btn-sm' onClick={onOrderButtonClick}>Order</button>
        </div>
      )
    }

    return (
      <div className='card col-4'>
        <img className='card-img-top card-image' src={image} alt={name} />
        <div className='card-body'>
          <h5 className='card-title text-warning'>{name}</h5>
          <p className='card-text text-warning'>{description}</p>
        </div>
        {footer}
      </div>
    )
};

function mapDispatchToProps (dispatch) {
  return {
    addToCart: (id) => dispatch(addToCartAction(id)),
    deleteProduct: (id) => dispatch(deleteProductAction(id))
  }
}

export default withRouter(connect(() => { return {} }, mapDispatchToProps)(PowerCard))
