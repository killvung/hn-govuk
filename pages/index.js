import Layout from '../components/layout'
import StoryManager from '../components/StoryManager'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <Layout>
            <main className={styles.main}>
                <div className="js-enabled">
                    <StoryManager />
                </div>
            </main >
        </Layout>
    )
}
