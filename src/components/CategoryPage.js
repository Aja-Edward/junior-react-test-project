import React, { Component } from 'react'
import { CategoryContainer } from '../styles/CategoryStyles'
import { getCategories } from '../graphql/Queries';
import { Link, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCategory } from '../redux/actions'
import { API_ENDPOINT, findCurrency } from '../assets/definitions'
import { request } from "graphql-request";

class CategoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    request(API_ENDPOINT, getCategories).then((data) => this.props.fetchCategory(data, this.props.params.id))
  }

  componentDidUpdate(previousProps, previousState) {
    const { id } = this.props.params || {}
    if (previousProps.items === this.props.items) {
      request(API_ENDPOINT, getCategories).then((data) => this.props.fetchCategory(data, id))
    }
  }
  capitalizeFirstWord = (word) => {
    const firstLetter = word.slice(0, 1)
    const otherLetters = word.slice(1, word.length)
    return `${firstLetter.toUpperCase()}${otherLetters}`
  }


  render() {
    const { items, params: { loading, id, } } = this.props
    return (
      <CategoryContainer>
        <h2>Category: {id ? this.capitalizeFirstWord(id) : 'All'} </h2>
        <main>
          {
            loading || this.props.isLoading ? <div>Please wait...</div>
              :
              items?.map(
                product => {
                  const productCurrency = findCurrency(product.prices, this.props.currency)
                  console.log(productCurrency, product, this.props.currency
                  )

                  return (
                    <Link to={`/product/${product.id}`} key={product.id} className='product'>
                      {!product.inStock && <div className='out-of-stock'>
                        Out of stock
                      </div>}
                      <img src={product.gallery[0]}
                        alt={product.brand}
                      />
                      <p className='product-name'>{product.name}</p>
                      <p className='product-price'>
                        {productCurrency?.currency?.symbol}{productCurrency?.amount}
                      </p>
                    </Link>
                  )
                }

              )

          }
        </main>
      </CategoryContainer>
    )
  }
}
const WithQuery = (Child) => {
  return function WithQuery(props) {
    const params = useParams();
    return <Child {...props} params={params} />;
  }
}
const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps, { fetchCategory })(WithQuery(CategoryPage))
