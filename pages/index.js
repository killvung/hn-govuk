import Layout from '../components/layout'
import NewsManager from '../components/NewsManager'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <Layout>
            <main className={styles.main}>
                <div className="js-enabled">
                    <NewsManager />
                </div>
            </main >
        </Layout>
    )
}
