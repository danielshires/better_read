import React, { Component } from 'react'

export default class Hero extends Component {
    render() {
        return (
            <div className='flex flex-col justify-center h-96'>
            <div className="">
                <div className="h1 md:text-6xl">{this.props.title}</div>
                <div className="h2 md:text-2xl">{this.props.subTitle}</div>
                {/* <button className="btn-primary mt-8">Create Account</button> */}
            </div>
            </div>
        )
    }
}
