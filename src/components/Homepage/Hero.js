import React, { Component } from 'react'

export default class Hero extends Component {
    render() {
        return (
            <div className='flex flex-col justify-center h-96'>
            <div className="">
                <div className="text-slate-900 text-6xl mb-2 md:mb-4 font-bold">{this.props.title}</div>
                <div className="text-slate-700 text-2xl">{this.props.subTitle}</div>
                {/* <button className="btn-primary mt-8">Create Account</button> */}
            </div>
            <div>
                <img src=""></img>
            </div>
            </div>
        )
    }
}
