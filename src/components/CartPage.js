import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { CartContainer } from "../styles/CartStyles";
import {
  setCurrency,
  incrementCartItem,
  decrementCartItem,
} from "../redux/actions";
import { findCurrency } from "../assets/definitions";
import CaretLeft from "../assets/svgs/CaretLeft";
import CaretRight from "../assets/svgs/CaretRight";

class CartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropdown: false,
      qty: this.props.totalCartQty || 0,
      imagesIndex: this.props.cart?.map((item) => {
        return {
          id: item?.product.id,
          i: 0,
          noOfImages: item?.product?.gallery?.length,
        };
      }),
    };
  }

  handleClick = () => {
    this.setState({ showDropdown: !this.state.showDropdown });
  };

  handleCurrencyChange = (currency) => {
    this.props.setCurrency(currency);
  };

  productCurrency = (item) => {
    const price = item?.product?.prices;
    if (!price) return;
    const currency = findCurrency(price, this.props.currency);
    return currency;
  };

  findCurrentImageIndex = (product) => {
    return (
      this.state.imagesIndex.find((_item) => _item.id === product.id) || {
        i: 0,
      }
    );
  };

  incrementCurrentImageIndex = (product) => {
    const newImagesIndex = this.state.imagesIndex.map((item) => {
      if (item.id === product.id && item.i < item.noOfImages - 1) {
        return {
          ...item,
          i: item.i + 1,
        };
      }
      return item;
    });
    this.setState({ imagesIndex: newImagesIndex });
  };

  decrementCurrentImageIndex = (product) => {
    const newImagesIndex = this.state.imagesIndex.map((item) => {
      if (item.id === product.id && item.i > 0) {
        return {
          ...item,
          i: item.i - 1,
        };
      }
      return item;
    });
    this.setState({ imagesIndex: newImagesIndex });
  };

  render() {
    // console.log(this.state.imagesIndex)
    return (
      <CartContainer>
        <h3 className="cart-page-title">CART</h3>

        {this.props.cart.length === 0 ? (
          <div className="no-cart-items">You have no item in your cart</div>
        ) : (
          <div className="cart-items">
            {this.props.cart?.map((item, index) => (
              <div key={index} className="cart-item">
                <div className="horizontal-line"></div>
                <div className="item-attributes">
                  <div className="item-details">
                    <h4>{item.product.name}</h4>
                    <p className="amount">
                      {this.productCurrency(item)?.currency?.symbol}
                      {(this.productCurrency(item)?.amount * item.qty).toFixed(
                        2
                      )}
                    </p>
                    <div>
                      {item.product.attributes?.length
                        ? item.product.attributes?.map((attributes, index) => {
                          return (
                            <div className="attributes" key={index}>
                              <h5>{attributes.name}:</h5>
                              <div className="attribute-items">
                                {attributes.items.map((item, index) => (
                                  <div key={index}>
                                    <ul>
                                      <li
                                        style={{
                                          backgroundColor:
                                            attributes.name === "Color" &&
                                            item.value,
                                        }}
                                      >
                                        {attributes.name !== "Color" &&
                                          item.value}
                                      </li>
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          );
                        })
                        : null}
                    </div>
                  </div>
                  <div className="item-num">
                    <button
                      onClick={() => this.props.incrementCartItem(item.product)}
                    >
                      +
                    </button>
                    <span>{item.qty}</span>
                    <button
                      onClick={() => this.props.decrementCartItem(item.product)}
                    >
                      -
                    </button>
                  </div>
                </div>
                <div className="item-image">
                  <img
                    src={
                      item.product.gallery[
                      this.findCurrentImageIndex(item.product).i
                      ]
                    }
                    alt={item.product.name}
                  />
                  {item.product.gallery.length > 1 ? (
                    <div className="navigate">
                      <p
                        onClick={() =>
                          this.decrementCurrentImageIndex(item.product)
                        }
                      >
                        <CaretLeft />
                      </p>
                      <p
                        onClick={() =>
                          this.incrementCurrentImageIndex(item.product)
                        }
                      >
                        <CaretRight />
                      </p>
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        )}

        {this.props.cart?.length ? (
          <>
            <div className="total">
              <p>
                Quantity: <span>{this.props.totalCartQty}</span>
              </p>
              <p>
                Total:{" "}
                <span>
                  {this.productCurrency(this.props.cart[0])?.currency?.symbol}
                  {this.props.totalCartAmount.toFixed(2)}{" "}
                </span>
              </p>
            </div>
            <div className="cart-btn">
              <Link to="/cart">
                <button className="checkout"> ORDER</button>
              </Link>
            </div>
          </>
        ) : null}
      </CartContainer>
    );
  }
}

const mapStateToProps = (state) => ({ ...state });

export default connect(mapStateToProps, {
  setCurrency,
  incrementCartItem,
  decrementCartItem,
})(CartPage);


