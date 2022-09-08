import styled from 'styled-components'
import { COLORS, pagePadding } from '../assets/definitions'

export const CategoryContainer = styled.div`
    padding: ${pagePadding};
    h2{
        font-weight: 200;
        font-size: 42px;
        line-height: 160%;
    }
    main{
        display: grid;
        margin-top: 20px;
        gap: 20px;
        grid-template-columns: repeat(3, auto); 
         
        .product{
            box-shadow: 0 0 2px 0 ${COLORS.backgroundOverLayLight};
            padding: 0 5px;
            padding-top: 5px;
            width: 356px;
            color: #1d1f22; 
            text-decoration: none;
            padding: 10px;
            position: relative;
          
            img{
               width: 100%;
               height: 23rem;
            }
            cursor: pointer;
            .product-name{
                text-transform: capitalize;
                margin: 15px 0 5px 0;
            }
            .out-of-stock{
                background-color: rgba(255, 255, 255, 0.8);
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

`