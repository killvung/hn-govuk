import Layout from '../components/layout'
import CommentContainer from '../components/Comment/CommentContainer'
import styles from '../styles/Home.module.css'

export default function Comment() {
    return (
        <Layout>
            <main className={styles.main}>
                <div className="js-enabled">
                    <CommentContainer />
                </div>
            </main >
        </Layout>
    )
}
