import React,{Component} from 'react';
import LandingPage from "./Components/LandingPage";
import DisplayList from "./Components/DisplayList";

class App extends Component {
    state = {
        itemList: [],
        item: '',
        id:1,
        update:false
    };
    handleChange = (e) => {
        this.setState({
            item: e.target.value
        })
    }
    handleAdd = (e) => {
        e.preventDefault();
        const items = {
            item: this.state.item,
            id: this.state.id
        };
        const newItems = [...this.state.itemList, items]
        this.setState({
            itemList: newItems,
            id: this.state.id + 1,
            item: '',
            update: false
        })
    }

    handleReset = () => {
        this.setState({
            itemList: [],
            item:''
        })
    }
    handleDelete = (id) => {
        const rem=this.state.itemList.filter(item=>item.id!==id);
        this.setState({
            itemList:rem
        })
    }
    handleEdit =(id)=>{
        const rem=this.state.itemList.filter(item=>item.id!==id);
        const toEdit=this.state.itemList.find(item=>item.id===id);
        this.setState({
            itemList:rem,
            item:toEdit.item,
            id:id,
            update:true
        })
    }


    render() {
        return (
            <div className="container">
                <LandingPage item={this.state.item} handleChange={this.handleChange} handleAdd={this.handleAdd}
                updateItem={this.state.update}/>
                <DisplayList itemsList={this.state.itemList} handleDelete={this.handleDelete} handleReset={this.handleReset}
                handleEdit={this.handleEdit}/>
            </div>
        );
    }
}

export default App;
