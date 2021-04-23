import React from 'react';
import Header from '../components/header.tsx'
import Footer from '../components/footer.tsx'
import Navigation from '../components/Navigation.tsx';

const Layout = ({ children }) => (
    <>
        <Header />
        <Navigation>
            {children}
        </Navigation>
        <Footer />
    </>
);

export default Layout;
