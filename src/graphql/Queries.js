import {gql} from 'graphql-request'

export const getCategories = gql`
{
    categories{
        name,
        products{
          name,
          prices{
            currency{
              label
              symbol
            },
            amount
          },
          category,
          description,
          gallery,
          attributes{
            id,
            name
            type
            items{
              displayValue,
              value
              id
            }
            type
          },
          inStock,
          brand,
          id
        }
      }
}
`



export const getProduct = gql`
    query($id: String!){
        product(id: $id){
            id
            name
            brand
            inStock
            category
            gallery
            description
            attributes{
              id
              name
              type
              items{
                displayValue
                id
                value
              }
            }
            prices{
              amount
              currency{
                label
                symbol
              }
            }
            brand
        }
    }
`;