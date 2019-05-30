import React, { Component } from 'react';
import  './Books.css';
import classes from './Books.css';
import axios from "axios";
import BookChild from './BooksChild';
import BookToShow from './Books2';
import {Link,Redirect} from "react-router-dom";
import {connect} from 'react-redux';

class Books extends Component {

    state={
        navbar:[
            { id:'1',Book:'Crime'},
            { id:'2',Book:'Business'},
            { id:'3',Book:'Thriller'},
            { id:'4',Book:'Fantasy'},
            { id:'5',Book:'Mystery'}
        
        ],
        Books:[],
        show:false,
        epub:'',
        redirect:false
    }
   
    clickListner = (index)=>{
        let select=this.state.navbar[index].Book;
    let dataToSend={
        tag:select
    };
    console.log(select);
    console.log(JSON.stringify(dataToSend));
    axios.post( ' https://test-zypher.herokuapp.com/myTestRoute/getByTag',dataToSend)
    .then( response => {
        const books =response.data.books;
        console.log(response.data.books);
        this.setState({
                Books:books,
                show:true,
               
        });
      
       
       
       
    } )
    
};
pub=(index) => {
    let epub=this.state.Books[index].ePubUrl;
    this.setState({
        epub:epub,
        redirect:true
    });
    
    this.props.SubmitForm(this.state.epub);
    };
renderRedirect= () => {
    console.log('renderfunction')
     if (this.state.redirect) {
       return <Redirect to='/epub'  />
 
     }

   };





    render() {
        

        
        const navbar=this.state.navbar.map((book,index)=>{
            return (
                <BookChild name={book.Book} key={book.id} click={()=> this.clickListner(index)}/>
            )
        });

       
        const Books=this.state.Books.map((book,index)=> {
            return (
            <BookToShow  src={book.imageURL} key={index} click={()=> this.pub(index)} />
            )
        });
    
      
        return (
            <div>
            <nav className="navbar navbar-default navbar-expand-lg navbar-light">
	<div className="navbar-header d-flex col">
		<a className="navbar-brand" href="#"><b>Zypher</b></a>  		
		<button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle navbar-toggler ml-auto">
			<span className="navbar-toggler-icon"></span>
			<span className="icon-bar"></span>
			<span className="icon-bar"></span>
			<span className="icon-bar"></span>
		</button>
	</div>

	<div id="navbarCollapse" className="collapse navbar-collapse justify-content-start">
		<ul className="nav navbar-nav">
			
            {navbar}
			
		</ul>
				
	</div>
</nav>
<div className={classes.grid_container} >
 {r =>this.renderRedirect(r)}
  {Books}

</div>
<div>
<a href={this.state.epub}>{this.state.epub}</a>
</div>
       
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        books : state.books
    }
}

const mapDispatchToProps = dispatch => {
    return {
        SubmitForm: (ePubUrl) => dispatch({type: 'UPDATE_Books_Data', booksData: {ePubUrl: ePubUrl}}),
        
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(Books);