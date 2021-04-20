import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './scroll';
import ErrorBoundry from './ErrorBoundary';

class App extends Component {
    constructor() {
        super()
        this.state={
            robots: [],
            Searchfield:''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response=> Response.json())
        .then(users=>this.setState({robots: users}));
    }

    onsearchchange=(event)=>{
        this.setState({Searchfield: event.target.value});
    }
    render()
    {
        const filterdrobots= this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.Searchfield.toLowerCase())
        })
        if(this.state.robots.length===0){
            return <h1>Loading...</h1>
        }
        else{
            return (
                <div className='tc' style={{background:'yellow' }}>
                    <h1>ROBOFRIENDS </h1>
                    <SearchBox searchchange={this.onsearchchange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filterdrobots}/> 
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
        }
    }
    
}

export default App;