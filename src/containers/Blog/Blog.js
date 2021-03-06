import React, { Component } from 'react';
// import axios from 'axios';
import axios from '../../axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        errors: false
    }


    componentDidMount() {
        axios.get('/posts')
            .then(response => { // using promises to fetch data once the get method is finished with the server
                const posts = response.data.slice(0, 4);
                const updatedposts = posts.map(post => {
                    return {
                        ...post,
                        author: 'moha gad'
                    };
                });
                this.setState({ posts: updatedposts });

            }).catch(error => {
                this.setState({ errors: error });
            });
    }

    postSelectedHandler = id => {
        this.setState({ selectedPostId: id });
    }

    render() {
        let posts = <p style={{ textAlign: 'center' }}>something went wrong!</p>;
        if (!this.state.errors) {
            posts = this.state.posts.map(post => {
                return <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)} />;
            });
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost
                        id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;