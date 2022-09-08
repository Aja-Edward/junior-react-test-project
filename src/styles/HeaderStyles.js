import styled from "styled-components";
import { COLORS, pagePadding } from "../assets/definitions";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 80px;
  background-color: ${COLORS.backgroundColor};
  display: flex;
  justify-content: space-between;

  padding: 0 ${pagePadding};
  .logo {
    display: flex;
    align-items: center;
    cursor: pointer;
    .arrow {
      margin-left: -1.7rem;
    }
    .arrow-point {
      margin-top: -1.2rem;
      margin-left: -0.3rem;
    }
  }

  ul {
    display: flex;
    list-style: none;

    &.left-nav li {
      text-transform: uppercase;
    }
    li {
      margin: 0 5px;
      padding: 0 10px;
      color: ${COLORS.textColor};
      cursor: pointer;
      display: flex;
      align-items: center;
      a {
        text-decoration: none;
        color: ${COLORS.textColor};
      }
    }
    &.left-nav li:hover {
      color: ${COLORS.buttonColor};
      border-bottom: 2px solid ${COLORS.buttonColor};
    }
  }
  .right-nav-list > div {
    height: 30px;
    width: 1.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    position: relative;

    .currency-pane {
      width: 80px;
      top: 27px;
      left: 2px;
      
      p {
        padding: 5px 0;
        text-align: center;
        &:active,
        &:hover {
          background-color: ${COLORS.hoverBackground};
        }
      }
    }
  }

  .right-nav-list > div .currency-pane,
  .cart-pane {
    position: absolute;
    box-shadow: 0 0 2px 0 ${COLORS.backgroundOverLayLight};
    background-color: ${COLORS.backgroundColor};
    padding: 7px 0;
    border-radius: 3px;
    z-index: 5;
  }

  .cart {
    position: relative;
    .cart-qty {
      border-radius: 50%;
      background-color: black;
      color: white;
      width: 15px;
      height: 15px;
      font-size: 0.7rem;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 30%;
      right: 0;
    }
  }

  .cart-pane {
    height: fit-content;
    padding: 15px;
    left: -250px;
    top: 50px;
    
    h3{
        margin-bottom: 15px;
        span{
            font-weight: 400;
        }
    }

    .cart-items{
        max-height: 600px;
        overflow: auto;
    }

    .total-amount{
        display: flex;
        justify-content: space-between;
    }

    .cart-item {
      display: flex;
      margin: 30px 0;
      .item-attributes {
        width: 150px;
        display: flex;
        justify-content: space-between;
        .item-details{
            h4{
                font-family: 'Raleway', 'sans-serif';
                font-weight: 400;
                margin-bottom: 10px;
                width: 90%;
            }
            .amount{
                margin-bottom: 10px;
            }
        }
        .item-num {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          button{
            width: 20px;
            height: 20px;
            background-color: white;
            border: 1px solid ${COLORS.textColor};
            color: ${COLORS.textColor};
            outline: none;
            cursor: pointer;
          }
        }
      }
      .item-image {
        width: 70px;
        margin-left: 10px;
        img {
          width: 100%;
        }
      }
    }

    .attributes {
      margin-top: 10px;
      .attribute-items{
        display: flex;
        flex-wrap: wrap;
      }
      h5{
        font-size: 1rem;
        font-weight: 300;
        margin-bottom: 3px;
      }
      li {
        font-family: 'Source Sans Pro', sans-serif;
        margin-left: 0;
        list-style-type: none;
        padding: 6px;
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
    .cart-btn {
      display: flex;
      justify-content: space-around;
      width: 100%;
      a {
        text-align: center;
        text-decoration: none;
        color: ${COLORS.textColor};
        padding: 10px 0;

        .view-bag {
          width: 100px;
          padding: 10px 0;
          cursor: pointer;
          border-radius: 5px;
          border: 1px solid ${COLORS.textColor};
          color: ${COLORS.textColor};
          background-color: ${COLORS.backgroundColor};
          outline: none;
        }
        .checkout {
          width: 100px;
          padding: 10px 0;
          background-color: ${COLORS.buttonColor};
          border: 1px solid ${COLORS.buttonColor};
          color: ${COLORS.backgroundColor};
          cursor: pointer;
          border-radius: 5px;
        }
      }
    }
  }
`;
