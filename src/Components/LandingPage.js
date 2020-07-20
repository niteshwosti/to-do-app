import React, {Component} from 'react';


class LandingPage extends Component {
    render() {
        const {item,handleChange,handleAdd}=this.props;
        return (
            <div>
                <h1> To Do Entries </h1>
                <form onSubmit={handleAdd}>
                <input type='text' name='item' placeholder="Enter Items" value={item} onChange={handleChange}/><br/>
                <button type='submit' className="add-btn" >Add Items</button>
                </form>
            </div>

        );
    }
}

export default LandingPage;