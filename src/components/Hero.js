import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero">
            <h2>Headstarter Books</h2>
            <h3>So many books, <br />so little time</h3>
            <Link className="btn" to="/books">View All Books</Link>
        </section>
    )
}

export default Hero
