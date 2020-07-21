import React, {Component} from 'react';


class LandingPage extends Component {
    render() {
        const {item,handleChange,handleAdd,updateItem}=this.props;
        return (
            <div className="to-do-container">
                <h1> To Do Entries </h1>
                <form onSubmit={handleAdd}>
                <input type='text' name='item' required="required" placeholder="Enter Items" value={item} onChange={handleChange}/><br/>
                <button type='submit' className="add-btn" >{updateItem?'UpdateItem':'Add Item'}</button>
                </form>
            </div>

        );
    }
}

export default LandingPage;