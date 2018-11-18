import React from 'react';
import { products } from './samplelist';
import Product from './Product';
import KartErrBoundary from './KartErrBoundary';

const listStyle = {
    display : 'flex',
    flexWrap : 'wrap',
    padding : '20px',
    justifyContent : 'center'
  }

export default class ProductList extends React.Component{

    constructor(props){
        super(props);
        this.getProductList = this.getProductList.bind(this);
    }

    getProductList(){
        return products && products.map((item,index) => {
            return <KartErrBoundary key={item.name+index}>
                        <Product key={item.name+index} proditem={item}/>
                    </KartErrBoundary>
        })
    }

    render(){
        return <div style={listStyle}>
            {this.getProductList()}
        </div>
    }
}