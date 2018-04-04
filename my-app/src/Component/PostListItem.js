import React from 'react';

class PostListItem extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        return (
            this.props.title !== nextProps.title ||
            this.props.body !== nextProps.body 
        );
    }
    
    
    render = () => {
        return(
            <li className="post-card" >
                <div>
                    <h3>{this.props.title}</h3>
                    <p>{this.props.body}</p>
                </div>
            </li>
        )
    };
}



export default PostListItem;

