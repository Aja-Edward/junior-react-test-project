import React, { Component } from "react";
import { HeaderContainer } from "../styles/HeaderStyles";
import LogoIcon from "../assets/svgs/13";
import Logos from "../assets/svgs/12";
import Icon11 from "../assets/svgs/11";
import Icon3 from "../assets/svgs/3";
import Icon14 from "../assets/svgs/14";
import Icon1 from "../assets/svgs/1";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ClickOutside from "./ClickOutside";
import { setCurrency, incrementCartItem, decrementCartItem } from "../redux/actions";
import { findCurrency } from "../assets/definitions";
import MiniCart from "./MiniCart";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropdown: false,
      showMiniCart: false,
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

  render() {
    return (
      <HeaderContainer>
        <ul className="left-nav">
          <li>
            <Link to="/all">all</Link>
          </li>
          <li>
            <Link to="/clothes">clothes</Link>
          </li>
          <li>
            <Link to="/tech">tech</Link>
          </li>
        </ul>
        <div className="logo">
          <LogoIcon />
          <Logos className="arrow" />
          <div className="arrow-point">
            {" "}
            <Icon14 />
          </div>
        </div>
        <ul className="right-nav">
          <li className="right-nav-list">
            {this.props.currency.symbol}
            <div>
              {this.state.showDropdown ? (
                <span onClick={this.handleClick}>
                  <Icon3 className="dropdown-show" />
                </span>
              ) : (
                <span onClick={this.handleClick}>
                  <Icon1 className="dropdown-hide" />
                </span>
              )}

              {this.state.showDropdown && (
                <ClickOutside
                  className="currency-pane"
                  handleClick={this.handleClick}
                >
                  <>
                    <p
                      onClick={() =>
                        this.handleCurrencyChange({ symbol: "$", label: "USD" })
                      }
                    >
                      $ USD
                    </p>
                    {/* <p onClick={() => this.handleCurrencyChange({symbol: '€', label: 'EUR'})}>€ EUR</p> */}
                    <p
                      onClick={() =>
                        this.handleCurrencyChange({ symbol: "¥", label: "JPY" })
                      }
                    >
                      ¥ JPY
                    </p>
                    <p
                      onClick={() =>
                        this.handleCurrencyChange({ symbol: "£", label: "GBP" })
                      }
                    >
                      £ GBP
                    </p>
                    <p
                      onClick={() =>
                        this.handleCurrencyChange({
                          symbol: "A$",
                          label: "AUD",
                        })
                      }
                    >
                      A$ AUD
                    </p>
                    <p
                      onClick={() =>
                        this.handleCurrencyChange({ symbol: "₽", label: "RUB" })
                      }
                    >
                      ₽ RUB
                    </p>
                  </>
                </ClickOutside>
              )}
            </div>
          </li>

          <li className="cart">
            <span onClick={() => this.setState({ showMiniCart: true })}>
              <Icon11 handleClick={this.handleClick} />
              {this.props.totalCartQty ? (
                <div className="cart-qty">{this.props.totalCartQty}</div>
              ) : null}
            </span>
            {this.state.showMiniCart ? (
              <ClickOutside
                className="cart-pane"
                handleClick={() => this.setState({ showMiniCart: false })}
              >
                <MiniCart
                  totalCartQty={this.props.totalCartQty}
                  totalCartAmount={this.props.totalCartAmount}
                  productCurrency={this.productCurrency}
                  qty={this.props.totalCartQty}
                  cart={this.props.cart}
                  decrementCartItem={this.props.decrementCartItem}
                  incrementCartItem={this.props.incrementCartItem}
                />
              </ClickOutside>
            ) : null}
          </li>
        </ul>
      </HeaderContainer>
    );
  }
}

const mapStateToProps = (state) => ({ ...state });

export default connect(mapStateToProps, { setCurrency, incrementCartItem, decrementCartItem })(Header);
