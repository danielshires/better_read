import React, { Component } from 'react';
import { Check, Plus } from 'lucide-react';


class ReadingListButton extends Component {

    constructor() {
        super()
        this.state = {
            buttonTextActive: `Reading List`,
            buttonTextDisabled: 'Added to List',
            buttonStyleActive: 'btn-primary',
            buttonStyleDisabled: 'btn-primary_success'
        }
    }

    handleClick = () => {
        this.setState(prevState => ({
            buttonActive: !prevState
        }), () => {
            console.log(this.state)
            this.props.submitData()
        })
    }

    buttonState = () => {
        if (this.props.buttonActive) {
            return <button onClick={this.handleClick} className={this.state.buttonStyleActive}><span className='flex gap-2'><Plus />{this.state.buttonTextActive}</span></button>
        } else {
            return  <button onClick={this.handleClick} className={this.state.buttonStyleDisabled}><span className='flex gap-2'><Check />{this.state.buttonTextDisabled}</span></button>
        }
    }

    render() {
        return (
            <>{this.buttonState()}</>
        );
    }
}

export default ReadingListButton;
