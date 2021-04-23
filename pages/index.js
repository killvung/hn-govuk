import Layout from '../components/layout'
import RootContainer from '../components/Root/RootContainer'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <Layout>
            <main className={styles.main}>
                <div className="js-enabled">
                    <RootContainer />
                </div>
            </main >
        </Layout>
    )
}
