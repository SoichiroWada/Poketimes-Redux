import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletePost } from '../actions/postActions'

class Post extends Component {
    handleClick = () => {
    //   console.log('this.props in Post:',this.props);
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    }
    render(){
        // console.log('this.props:',this.props);
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center blue-text">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>
                        Delete Post
                    </button>
                </div>
            </div>
        ) : (
            <div className="center">Loading post ...</div>
        );

        return (
            <div className="container">
                { post }
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    // console.log('state:',state);
    // console.log('ownProps:',ownProps);
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find(post => post.id === id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // deletePost: (id) => { dispatch({type:'DELETE_POST', id:id}) }
        deletePost: (id) => { dispatch(deletePost(id)) }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Post)
