import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import data from '../data.json';

class FilterableProductTable extends Component{

    state = {
        search: "",
        checkBox: false
    }

    setQuery = search => {
        this.setState({
            search: search
        })
    }


    
render() {
    const {products} = this.props;
    return (
        <div>
            <h1>
                IronStore
            </h1>
            <div><SearchBar></SearchBar></div>
            <div><ProductTable products = {products} setQuery = {this.state.search} /></div>
            
        </div>
    )
}

}



export default FilterableProductTable;
