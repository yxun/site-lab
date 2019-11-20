import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <h2>Hello</h2>
                <p>This is a Home page.</p>
                <p>Second line of Home page.</p>
            </div>
        );
    }
}

class Doc extends Component {
    render() {
        return (
            <div>
                <h2>Doc</h2>
                <p>Doc page</p>
                <ol>
                    <li>list1</li>
                    <li>list2</li>
                    <li>list3</li>
                </ol>
            </div>
        );
    }
}

class Example extends Component {
    render() {
        return (
            <div>
                <h2>Examples</h2>
                <p>Go to <a href="https://example.com">example.com</a>
                </p>
            </div>
        );
    }
}

export { Home, Doc, Example };
