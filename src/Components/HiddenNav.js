import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function HiddenNav() {
    const rippleMain = document.getElementById('root')
    const navigate = useNavigate()

    useEffect(() => {
        const animButtonRef = document.querySelectorAll('.nav-link');
        animButtonRef.forEach(el => el.addEventListener('mousedown', onClick))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const applyStyles = (ripple, ev) => {
        const { clientX, clientY } = ev;
        const { style } = ripple;
        const sideOffset = 50;
        style.setProperty("--effect-top", `${clientY - sideOffset}px`)
        style.setProperty("--effect-left", `${clientX - sideOffset}px`)
    }

    let onClick = (e) => {
        const targetPage = e.currentTarget.getAttribute('href');
        console.log(e.targetPage);
        rippleMain.classList.remove('active');
        applyStyles(rippleMain, e);
        rippleMain.classList.add('active');
        cleanupEvents()
        setTimeout(() => {
            rippleMain.classList.remove('active')
            rippleMain.classList.remove('ripple-container')
            navigate(targetPage)
            window.location.reload();
        }, 600);
    }

    function cleanupEvents() {
        const animButtonRef = document.querySelectorAll('.nav-link');
        animButtonRef.forEach(el => el.removeEventListener('mousedown', onClick))
        animButtonRef.forEach(el => el.addEventListener('mousedown', onClick))
    }

    let NoGo = event => {
        event.preventDefault();
        cleanupEvents();
    }

return (
    <div id='nav-links'>
        <a className='nav-link ripple-container' href='/About' onClick={NoGo}>
            <h2 className='nav-link-label'>About</h2>
            <img className='nav-link-image' src='' alt='About_Page'></img>
        </a>
        <a className='nav-link ripple-container' href='/' onClick={NoGo}>
            <h2 className='nav-link-label'>Projects</h2>
            <img className='nav-link-image' src='https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZGV8ZW58MHx8MHx8&w=1000&q=80' alt='Projects_Page'></img>
        </a>
        <a className='nav-link ripple-container' href='/' onClick={NoGo}>
            <h2 className='nav-link-label'>Skills</h2>
            <img className='nav-link-image' src='https://miro.medium.com/max/1400/1*u0WymkmJT6Bu6kGQ10G_5Q.png' alt='Skills_Page'></img>
        </a>
        <a className='nav-link ripple-container' href='/' onClick={NoGo}>
            <h2 className='nav-link-label'>Contact</h2>
            <img className='nav-link-image' src='https://www.howtogeek.com/wp-content/uploads/2018/07/img_5b58e0efdc4b9.jpg?height=200p&trim=2,2,2,2' alt='Contacts_Page'></img>
        </a>
    </div>
    )
}
