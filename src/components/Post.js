import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Badge } from 'reactstrap';

class Post extends Component {
    state = { post: null }

    componentDidMount() {
        axios.get('https://raw.githubusercontent.com/yxun/site-lab/development/README.md')
            .then(response => this.setState({ post: response.data }));
    }

    render() {
        return (
            <Fragment>
                { this.state.post && <div className="position-relative">

                <span className="d-block pb-2 mb-0 h6 text-lowercase text-info font-weight-bold">
                    yxun.github.io
                    <Badge pill color="success" className="text-uppercase px-2 py-1 ml-3 mb-1 align-middle" 
                        style={{ fontSize: '0.75rem' }}>New</Badge>
                </span>

                <span className="d-block pb-4 h2 text-dark border-bottom border-gray">README</span>

                <article className="pt-5 text-secondary text-justify" 
                    style={{ fontSize: '1rem', whiteSpace: 'pre-wrap' }}>{this.state.post}</article>
                    
                </div>}
            </Fragment>
        );
    }
}

export default Post;
