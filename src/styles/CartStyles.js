import styled from 'styled-components'
import { COLORS, pagePadding } from '../assets/definitions'


export const CartContainer = styled.div`
    padding: ${pagePadding};

    h3{
        span{
            font-weight: 400;
        }
    }

    .cart-items{
        margin: ${pagePadding} 0;
        border-bottom: 1px solid ${COLORS.hoverBackground};
    }

    .no-cart-items{
      text-align: center;
      height: 60vh;
      display: grid;
      place-items: center;
    }

    .total-amount{
        display: flex;
        justify-content: space-between;
    }

    .cart-item {
        border-top: 1px solid ${COLORS.hoverBackground};
        padding: 15px 0;
        display: flex;
      .item-attributes {
        flex: 0.75;
        display: flex;
        justify-content: space-between;
        
        .item-details{
                           
            h4{
                font-family: 'Raleway', 'sans-serif';
                font-weight: 400;
                margin-bottom: 20px;
                font-size: 1.5rem;
            }
            .amount{
                margin-bottom: 20px;
                font-weight: 600;
            }
        }
        .item-num {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          color: ${COLORS.textColor};
          span{
            font-weight: 500;
          }
          button{
            width: 20px;
            height: 20px;
            background-color: white;
            border: 1px solid ${COLORS.textColor};
            outline: none;
            cursor: pointer;
          }
        }
      }
      .item-image {
       flex: 0.25;
        margin-left: 20px;
        position: relative;
        .navigate{
            display: flex;
            justify-content: space-around;
            align-items: center;
            position: absolute;
            right: 10px;
            bottom: 20px;
            width: 60px;
            p{
                display: flex;
                align-items: center;
                cursor: pointer;
                background-color: rgba(0, 0, 0, 0.73);
                width: 20px;
                height: 20px;
                svg{
                    width: 100%;
                }
            }
        }
        img {
          width: 100%;
        }
      }
      
    }

    

    .attributes {
      margin-top: 10px;
      .attribute-items{
        display: flex;
        margin-right: 5px;
      }
      
      h5{
        font-size: 1rem;
        font-weight: 300;
        margin-bottom: 10px;
        text-transform: uppercase;
        font-weight:500;
        font-family: 'Roboto Condensed', 'sans-serif';
      }
      li {
        font-family: 'Source Sans Pro', sans-serif;
        margin-right: 5px;
        margin-left: 0;
        list-style-type: none;
        padding: 10px;
        font-size: 0.8rem;
        margin-bottom: 15px;
        border: 1px solid ${COLORS.textColor};
        color: ${COLORS.textColor};
        cursor: pointer;
      }
      li:hover{
        background: #1D1F22;
        color: #fff;
    }
      
    }
    

    h2 {
      grid-column: span 6;
    }
    .total{
        span{
            font-weight: 500;
        }
        p{
            margin-bottom: 10px;
        }
    }
    .cart-btn {
      a {
        text-align: center;
        text-decoration: none;
        color: ${COLORS.textColor};
        padding: 10px 0;

        .checkout {
          width: 150px;
          padding: 10px 0;
          background-color: ${COLORS.buttonColor};
          border: 1px solid ${COLORS.buttonColor};
          color: ${COLORS.backgroundColor};
          cursor: pointer;
          border-radius: 5px;

        }
      }
    }

`



