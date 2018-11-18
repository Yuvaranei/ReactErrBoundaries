import React from 'react';

const tileStyle = {
    width : '500px',
    padding: '15px 0'
};
const prodImgStyle = {
    width : '400px',
    height : '300px',
    border : '1px solid',
    padding : '10px'
};
const prodNameStyle = {
    fontSize: '30px'
};
const prodDescStyle = {};
const prodPriceStyle = {
    fontSize: '20px',
    fontStyle: 'italic'
};


export default class Product extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const {img,name,desc,price} = this.props.proditem;
        
        return(
            <div style={tileStyle}>
                <img style={prodImgStyle} src={img}/>
                <div style={prodNameStyle}>{name.toUpperCase()}</div>
                <div style={prodDescStyle} >{desc}</div>
                {price && <div style={prodPriceStyle} >Price : {price}</div>}
            </div>
        )
    }
}