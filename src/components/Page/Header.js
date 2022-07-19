import React, { Component } from 'react'
import { BookOpen } from 'lucide-react';
import { NavLink } from 'react-router-dom';


/* Add basic styling for NavLinks */

export default class Header extends Component {
    render() {
        return (
            <nav className="border-b-2 h-20">
                <div className="container mx-auto flex items-center justify-between h-full">
                    <div className='flex gap-6'>
                        <NavLink
                            to="/"
                        > <h1 className='flex flex-row gap-2 font-bold'><BookOpen />BetterRead</h1>
                        </NavLink>
                        <div className="hidden md:flex gap-6">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    (isActive ? "border-b-2 border-slate-900 font-bolder" : "")
                                }
                            >Home
                            </NavLink>
                            <NavLink
                                to="/my-library"
                                className={({ isActive }) =>
                                    (isActive ? "border-b-2 border-slate-900" : "")
                                }
                            >My Library</NavLink>

                            <NavLink
                                to="/search"
                                className={({ isActive }) =>
                                    (isActive ? "border-b-2 border-slate-900" : "")
                                }
                            >Search</NavLink>
                        </div>

                    </div>
                </div>
            </nav>
        )
    }
}
