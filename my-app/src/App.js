import React from 'react';

import PostList from './Component/PostList.js';
import SearchBar from './Component/SearchBar.js';
import MoreButton from './Component/MoreButton.js';
import './App.css';

const API = "https://jsonplaceholder.typicode.com/posts/";

const fetchData = () =>
    fetch(API).then(response => response.json());

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lim: 10,
            searchText: "",
            posts: [],
            isLoading: true
        };
    }
    add = () => {
        const { lim } = this.state;
        this.setState({
            lim: lim < data.length ? lim + 10 : data.length
        });
    };
    remove = () => {
        const { lim } = this.state;
        this.setState({
            lim: lim > 10 ? lim - 10 : 10
        });

    };
    handleChange = (event) => {
        const { value } = event.target;
        this.setState({
            searchText: value 
        });
    };
    


    componentDidMount() {
        setInterval(() => {
            Promise.all([fetchData()]).then(
                ([posts]) => {
                    this.setState({
                        posts,
                        isLoading: false
                    });
                }
            );
        }, 5000);
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        return (
            this.state.lim !== nextState.lim ||
            this.state.searchText !== nextState.searchText ||
            this.state.isLoading !== nextState.isLoading 
            )
    }
    
  
    render = () => {
        return (
            <React.Fragment> 
                <h1>Apiko Full Stack Intensive</h1> 
                <h1>Home task #5</h1>
                <SearchBar 
                    onChange={this.handleChange} 
                    text={this.state.searchText} 
                />
                <PostList 
                    posts={this.state.posts}
                    isLoading={this.state.isLoading}
                    count={this.state.lim} 
                    search={this.state.searchText}
                />
                 <div className="but">
                    <MoreButton onClick={this.add} content="More" />
                    <MoreButton onClick={this.remove} content="Less" />
                </div>
            </React.Fragment> 
        );
    };
}

export default App;
