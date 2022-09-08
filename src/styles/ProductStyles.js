import styled from 'styled-components'
import { COLORS, pagePadding } from '../assets/definitions'

export const ProductContainer = styled.div`
   
    padding: ${pagePadding};
    .product-wrapper{
        display: grid;
        display: flex;
        align-items: start;
        justify-contents: center;
        .product-image-container {
            display: flex;
            width: 60%;
                       
            .product-images-container{
                display: flex;
                flex-direction: column;
                width: 9%;
                margin-right: 50px;
                .image{
                    margin-bottom: 15px;
                    cursor: pointer;
                }
            }    
        }
        .image-zoom{
            width: 60%; 
            margin-left: 20px;  
            justify-self: center;
            position: relative;
            img{
                width: 100%;
            }
            .out-of-stock{
                background-color: rgba(255, 255, 255, 0.6);
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                text-align: center;
                display: flex;
                align-items: center;
                justify-content: center;
                text-transform: uppercase;

            }
        }
    
}
    .product-attributes{
        width: 40%;
        padding-left: 50px;
        h3{
            font-weight: 500;
            font-size: 1.5rem;
        }
        
        p{
            padding-bottom: 15px;
            font-family: 'Roboto Condensed', sans-serif;
            font-size: 18px;
            font-weight: 700;
            line-height: 18px;
            letter-spacing: 0em; 
        }
        .item-attributes {
        margin-bottom: 15px;
        h5{
            font-family: 'Roboto Condensed', sans-serif;
            font-size: 1.2rem;
            margin-bottom: 10px;    
         }
        .attributes{
            display: flex;
        }

        }
       
        .item-attributes li {
            list-style-type: none;
           text-align: center;
            padding: 10px;
            margin-right: 10px;
            border: 1px solid gray;
            color: ${COLORS.textColor};
            font-family: 'Roboto Condensed', sans-serif;
            cursor: pointer;
        }
        .item-attributes li:hover{
            background: #1D1F22;
            color: #fff;
        }
        .product-price{
            font-family: 'Roboto Condensed', sans-serif;
            margin-top: 25px;
            display: flex;
            flex-direction: column;
        }
        .product-price span{
            font-family: 'Raleway', sans-serif;
            margin: 10px;
            margin-left: 0;
            font-size: 1.2rem;
        }
h3{
    padding-bottom: 20px;
    
}
button, .button{
    padding: 16px 80px;
    background-color:#5ECE7B;
    border: none;
    color: ${COLORS.backgroundColor};
    font-size: 16px;
    font-weight: 600;
    line-height: 19px;
    letter-spacing: 0em;
    margin-bottom: 2rem;
    text-decoration: none;
    cursor: pointer;
    border-radius: 5px;
    &:disabled{
        border: 1px solid #999999;
        background-color: #cccccc;
        color: #666666;
    }
}

}
.description{
    max-width: 55%;
    h1{
        font-weight: 500;
        font-size: 1.5rem;
        margin-bottom: 10px;
    }
    p, span {
        font-weight: 300;
        line-height: 1.5;
    }
    li{
        list-style: none;
        margin-bottom: 10px;
        font-weight: 300;
    }
}
    
`