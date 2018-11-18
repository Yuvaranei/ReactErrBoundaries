import React,{Fragment} from 'react';
import Product from './Product';

export default class KartErrBoundary extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            hasError : false,
            errorInfo : ''
        }
    }

    componentDidCatch(error,info){
        this.setState({
            hasError : error,
            errorInfo : info
        })
    }

    render(){
        if(this.state.hasError){
            let item = {
                img : 'http://www.bigislandvideonews.com/wp-content/themes/valenti/library/images/cb-404.png',
                name : 'Item Not Found!!',
                desc : 'Please check sometime later'
            }
            return <Fragment>
                    <Product key="error" proditem={item}/>
                </Fragment>
        }

        return this.props.children
    }
}