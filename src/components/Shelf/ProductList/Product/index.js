import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Thumb from '../../../Thumb';
import { formatPrice } from '../../../../services/util';
import { addProduct } from '../../../../services/cart/actions';

const Product = ({ product, addProduct }) => {
  product.quantity = 1;

  let formattedPrice = formatPrice(product.volumePrice && product.volumePrice.find(e=>e.qty === 1).unitPrice ? product.volumePrice.find(e=>e.qty === 1).unitPrice : 100, product.currencyId);

  // let productInstallment;

  // if (!!product.installments) {
  //   const installmentPrice = product.price / product.installments;

  //   productInstallment = (
  //     <div className="installment">
  //       <span>or {product.installments} x</span>
  //       <b>
  //         {product.currencyFormat}
  //         {formatPrice(installmentPrice, product.currencyId)}
  //       </b>
  //     </div>
  //   );
  // }

  return (
    <div
      className="shelf-item"
      // onClick={() => addProduct(product)}
      data-sku={product.SKU}
    >
      {/* {product.isFreeShipping && (
        <div className="shelf-stopper">Free shipping</div>
      )} */}
      <Thumb
        classes="shelf-item__thumb"
        src={product.pic[0] ? product.pic[0].url : undefined}
        alt={product.name}
      />
      <p className="shelf-item__title">{product.name}</p>
      <div className="shelf-item__price">
        <div className="val">
          <small>{product.currencyFormat}</small>
          <b>{formattedPrice.substr(0, formattedPrice.length - 3)}</b>
          <span>{formattedPrice.substr(formattedPrice.length - 3, 3)}</span>
        </div>
        {/* {productInstallment} */}
      </div>
      <div className="shelf-item__buy-btn" onClick={() => addProduct(product)}>Add to cart</div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
  addProduct: PropTypes.func.isRequired
};

export default connect(
  null,
  { addProduct }
)(Product);
