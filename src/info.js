import React from "react"

function Info() {
    return (
        <header>
            <div className="container">
                <img src="https://res.cloudinary.com/drirexwsz/image/upload/r_0/v1652879844/cwebsterprofilepic_tx1tw4.jpg" className="avatar" />
                <h1 className="author">Chris Webster</h1>
                <h2>Junior Web Developer</h2>
                <h3>cwebster85.herokuapp.com</h3>
                <button href = "mailto: chriswebster1985@gmail.com" className="email"><i className="fa fa-envelope" aria-hidden="true"></i><p>Email</p></button>
                <button href ="https://www.linkedin.com/in/cwebster85/" className="linkedin"><i className="fab fa-linkedin" aria-hidden="true"></i>LinkedIn</button>
                <h1 className="about">About</h1>
                <p className="about__text">I am a junior web developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <h1 className="interests">Interests</h1>
                <p className="interests__text">Interdisciplinarian. Web Fanatic. Health Freak. Travel Geek. Americano Lord. DBZ Nerd. NFFC for Life!</p>
                <div className="footer">
                    <ul className="footer__icons">
                        <li className="foot__item"><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li className="foot__item"><a href="#"><i className="fab fa-facebook"></i></a></li>
                        <li className="foot__item"><a href="#"><i className="fab fa-instagram"></i></a></li>
                        <li className="foot__item"><a href="#"><i className="fab fa-github"></i></a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Info;
