import React, { Component } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../graphql/Queries";
import { ProductContainer } from "../styles/ProductStyles";
import { findCurrency, API_ENDPOINT } from "../assets/definitions";
import { addToCart } from "../redux/actions";
import { request } from "graphql-request";

class ProductDescriptionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      mainImage: this.props.params.data?.product?.gallery[0],
      product: {},
    };
  }

  componentDidMount() {
    const id = this.props.params.productId;
    const variables = { id };
    request(API_ENDPOINT, getProduct, variables).then((data) =>
      this.setState({ product: data.product })
    );
  }

  productCurrency = () => {
    const prices = this.state.product?.prices;
    if (!prices) return;
    const currency = findCurrency(prices, this.props.currency);
    return currency;
  };



  render() {
    const { product } = this.state;

    return (
      <ProductContainer>
        {Object.keys(product).length ? (
          <div className="product-wrapper">
            <div className="product-image-container">
              <div className="product-images-container">
                {product.gallery.map((gallery, index) => (
                  <img
                    key={index}
                    className="image"
                    onClick={() => this.setState({ mainImage: gallery })}
                    src={gallery}
                    alt="bestgallery"
                  />
                ))}
              </div>
              <div className="image-zoom">
                {!product.inStock && (
                  <div className="out-of-stock">Out of stock</div>
                )}
                <img src={this.state.mainImage || product?.gallery[0]} alt="" />
              </div>
            </div>

            <div className="product-attributes">
              <h3>{product.name}</h3>

              <div>
                {product?.attributes?.length
                  ? product?.attributes?.map((attributes, index) => {
                    return (
                      <div className="item-attributes" key={index}>
                        <h5>{attributes.name}: </h5>
                        {
                          <div className="attributes">
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
                        }
                      </div>
                    );
                  })
                  : null}
              </div>
              <div></div>
              <p className="product-price">
                PRICE:
                <span>
                  {this.productCurrency()?.currency?.symbol}
                  {this.productCurrency()?.amount}
                </span>
              </p>
              <button
                disabled={!product.inStock}
                onClick={() => product.inStock && this.props.addToCart(product)}
              >
                ADD TO CART
              </button>
              <div
                className="description"
                dangerouslySetInnerHTML={{ __html: product.description }}
              ></div>
            </div>
          </div>
        ) : null}
      </ProductContainer>
    );
  }
}

const mapStateToProps = (state) => ({ ...state });

export const WithQuery = (Child) => {
  return function WithQuery(props) {
    const params = useParams();
    return <Child {...props} params={params} />;
  };
};

export default connect(mapStateToProps, { addToCart })(
  WithQuery(ProductDescriptionPage)
);
