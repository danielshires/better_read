import React, { Component } from 'react'
import DisplaySubject from './DisplaySubject'

export default class SubjectRow extends Component {


    displaySubjectRow = () => {
        const categories = ['non-fiction', 'arts', 'fiction', 'history', 'horror' ]
        return categories.map((category, index) => {
            return <DisplaySubject key={index} categoryName={category}/>
        })
    }

    render() {
        return (
            <>
            {this.displaySubjectRow()}
            </>
        )
    }
}
