import React, { Component } from 'react';
import  './Books.css';
class BooksChild extends Component {
    render() {
        return (
            
               <li class="nav-item"><a href="#" class="nav-link" onClick={this.props.click}>{this.props.name}</a></li> 
            
        );
    }
}

export default BooksChild;