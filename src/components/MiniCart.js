import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class MiniCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: this.props.qty,
    };
  }
  render() {
    const { totalCartQty, productCurrency, cart, totalCartAmount } = this.props;
    return (
      <>
        <h3>
          {totalCartQty ? (
            <>
              {" "}
              My Bag: <span>{totalCartQty} items</span>
            </>
          ) : (
            <span>You have no item in your bag</span>
          )}
        </h3>

        <div className="cart-items">
          {cart?.map((item, index) => (
            <div key={index} className="cart-item">
              <div className="item-attributes">
                <div className="item-details">
                  <h4>{item.product.name}</h4>
                  <span className="amount">
                    {productCurrency(item)?.currency?.symbol}
                    {(productCurrency(item)?.amount * item.qty).toFixed(2)}
                  </span>
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
                <img src={item.product.gallery[0]} alt={item.product.name} />
              </div>
            </div>
          ))}
          <div className="total-amount">
            {cart?.length ? (
              <>
                <span>Total:</span>
                <span>
                  {productCurrency(cart[0])?.currency?.symbol} {totalCartAmount.toFixed(2)}
                </span>
              </>
            ) : null}
          </div>
          {totalCartQty ? (
            <div className="cart-btn">
              <Link to="/cart">
                <button className="view-bag"> VIEW BAG</button>
              </Link>

              <Link to="/checkout">
                <button className="checkout"> CHECK OUT</button>
              </Link>
            </div>
          ) : null}
        </div>
      </>
    );
  }
}
