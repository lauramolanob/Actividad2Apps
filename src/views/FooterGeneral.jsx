import React from 'react';
import '../styles/App.css'; 
import { Button } from 'bootstrap';
import Footer1 from '../components/Footer1.jsx';
import Footer2 from '../components/Footer2.jsx';

const FooterGeneral = () => (
    <>
        <footer id="footer">
            <Footer1 />
        </footer>
        <section class="b-dark-green py-1">
            <Footer2 />
        </section>
    </>
  )

export default FooterGeneral
