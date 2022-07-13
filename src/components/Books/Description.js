import React, { Component } from 'react';

class Description extends Component {

    constructor() {
        super()
        this.state = {}
    }

    checkDescription = () => {

        if (typeof this.props.description === 'string') {
            return this.props.description
        } else if (typeof this.props.description === 'object'){
            return this.props.description.value
        } else {
            return <p>No description found</p>
        }

    }


    render() {
        return (
            <>{this.checkDescription()}</>
        );
    }
}

export default Description;
