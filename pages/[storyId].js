import Layout from '../components/layout'
import StoryContainer from '../components/StoryComment/StoryContainer'
import styles from '../styles/Home.module.css'

export default function StoryContainer() {
    return (
        <Layout>
            <main className={styles.main}>
                <div className="js-enabled">
                    <StoryContainer />
                </div>
            </main >
        </Layout>
    )
}
