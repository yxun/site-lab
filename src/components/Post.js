import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Badge } from 'reactstrap';
import ReactMarkdown from 'react-markdown';

class Post extends Component {
    state = { post: null }


    render() {
        return (
            <Fragment>
                { <div className="position-relative">

                <span className="d-block pb-2 mb-0 h6 text-lowercase text-info font-weight-bold">
                    笔记整理
                    <Badge pill color="success" className="text-uppercase px-2 py-1 ml-3 mb-1 align-middle" 
                        style={{ fontSize: '0.75rem' }}>New</Badge>
                </span>

                <span className="d-block pb-4 h2 text-dark border-bottom border-gray">...</span>

                <ReactMarkdown className="pt-5 text-secondary text-justify" 
                    style={{ fontSize: '1rem', whiteSpace: 'pre-wrap' }}
                    source={process.env.PUBLIC_URL + '/docs/sample.md'} 
                />
                    
                    
                </div>}
            </Fragment>
        );
    }
}

export default Post;
