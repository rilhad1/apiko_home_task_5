import React from 'react';
import PostListItem from './PostListItem.js';
import styled from 'styled-components';

const Loader = styled.div`
  margin: 0 auto;
  width: 50px;
  height: 50px;
  border: 4px solid rgba(200,200,200,.7);
  border-radius: 50%;
  border-top-color: #8B4513;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}
`;


class PostList extends React.Component {

    filterData = () => this.props.posts.filter((item) => {
        return item.title.toLowerCase()
            .search(this.props.search.toLowerCase()) > -1;
    });

    renderData = () => {
        if (this.filterData().length !== 0) {
            return (
                this.filterData().slice(0, this.props.count)
                .map((item) => {
                    return (
                        <PostListItem 
                            key={item.id}
                            title={item.title}
                            body={item.body}
                        />
                    )
                })
            )
        }else{
            return <h3> No items found </h3>;
        }
    }
    
    render() {
        if (this.props.isLoading) {
            return <Loader />
        }
        return (
            <React.Fragment>
                <ul className="post-list">
                    {this.renderData()}
                </ul>
            </React.Fragment>
        )
    }
}


export default PostList;

