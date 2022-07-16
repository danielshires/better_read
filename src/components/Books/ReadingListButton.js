import React, { Component } from 'react';

class ReadingListButton extends Component {

    constructor(){
        super()
        this.state={
            buttonActive: true,
            buttonTextActive: 'Add to reading list',
            buttonTextDisabled: 'Remove from list',
            buttonStyleActive: 'btn-primary my-2',
            buttonStyleDisabled: 'btn-primary_success my-2'
        }        
    }

    
    render() {
        return (
            <div>
                <button onClick={() => this.props.submitData()} className={this.state.buttonStyleActive} disabled={!this.state.buttonActive}>{this.state.buttonTextActive}</button>
            </div>
        );
    }
}

export default ReadingListButton;
