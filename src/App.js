import React,{Component} from 'react';
import LandingPage from "./Components/LandingPage";
import DisplayList from "./Components/DisplayList";

class App extends Component {
    state = {
        itemList: [],
        item: '',
        id:1
    };
    handleChange = (e) => {
        this.setState({
            item: e.target.value
        })
    }
    handleAdd = (e) => {
        e.preventDefault();
        const items={
            item:this.state.item,
            id:this.state.id
        };
        const newItems=[...this.state.itemList,items]
        this.setState({
            itemList:newItems,
            id:this.state.id+1,

        })
        console.log(this.state.itemList);
    }
    handleReset = () => {
        this.setState({
            itemList: []
        })
    }
    handleDelete = (id) => {
        const rem=this.state.itemList.filter(item=>item.id!==id);
        this.setState({
            itemList:rem
        })

    }


    render() {
        return (
            <div className="container">
                <LandingPage item={this.state.item} handleChange={this.handleChange} handleAdd={this.handleAdd}/>
                <DisplayList itemsList={this.state.itemList} handleDelete={this.handleDelete} handleReset={this.handleReset}/>
            </div>
        );
    }
}

export default App;
