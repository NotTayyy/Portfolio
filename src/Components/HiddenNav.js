import React, { useEffect, useRef } from 'react'

export default function HiddenNav() {

    const animButtonRef = useRef();

    useEffect(()=>{
        const appConProp = () => {
            animButtonRef.current.classList.add("click-ripple");  
        };

        const onClick = () => {
            animButtonRef.current.classList.remove('active');
            animButtonRef.current.classList.add('active');
        }

        appConProp();

        animButtonRef.current.addEventListener('mouseup', onClick);

        const cleanupRef = animButtonRef.current

        return () => {
            cleanupRef.removeEventListener('mouseup', onClick)
        }
    })

return (
    <div id='nav-links'>
        <a className='nav-link' href='*'  ref={animButtonRef}>
            <h2 className='nav-link-label'>About</h2>
            <img className='nav-link-image' src='https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZGV8ZW58MHx8MHx8&w=1000&q=80' alt='About_Page'></img>
        </a>
        <a className='nav-link' href='/Portfolio' ref={animButtonRef}>
            <h2 className='nav-link-label'>Projects</h2>
            <img className='nav-link-image' src='https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZGV8ZW58MHx8MHx8&w=1000&q=80' alt='Projects_Page'></img>
        </a>
        <a className='nav-link' href='/Portfolio' ref={animButtonRef}>
            <h2 className='nav-link-label'>Skills</h2>
            <img className='nav-link-image' src='https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZGV8ZW58MHx8MHx8&w=1000&q=80' alt='Skills_Page'></img>
        </a>
        <a className='nav-link' href='/Portfolio' ref={animButtonRef}>
            <h2 className='nav-link-label'>Contact</h2>
            <img className='nav-link-image' src='https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZGV8ZW58MHx8MHx8&w=1000&q=80' alt='Contacts_Page'></img>
        </a>
    </div>
)
}
