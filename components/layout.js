import Header from '../components/header.tsx'
import Footer from '../components/footer.tsx'
import Navigation from '../components/Navigation.tsx';

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <Navigation>
                {children}
            </Navigation>
            <Footer />
        </>
    );
}
