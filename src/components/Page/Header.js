import React, { Component } from 'react'
import { BookOpen } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';


/* Add basic styling for NavLinks */

export default class Header extends Component {
    render() {
        return (
            <nav className="border-b-2 h-20">
                <div className="container mx-auto flex items-center justify-between h-full">
                    <div className='flex gap-6'>
                        <h1 className='flex flex-row gap-2 font-bold'><BookOpen />BetterRead</h1>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                (isActive ? "border-b-2 border-slate-900 font-bolder" : "")
                            }
                        >Home
                        </NavLink>

                        <NavLink
                            to="/reading-list"
                            className={({ isActive }) =>
                                (isActive ? "border-b-2 border-slate-900" : "")
                            }
                        >Reading list</NavLink>

                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                (isActive ? "border-b-2 border-slate-900" : "")
                            }
                        >About</NavLink>
                    </div>
                    <div className='flex'>
                        <button className="btn-primary">Create Account</button>
                    </div>
                </div>
            </nav>
        )
    }
}
