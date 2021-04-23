import Layout from '../components/layout'
import { useRouter } from 'next/router'

import CommentContainer from '../components/Comment/CommentContainer'
import styles from '../styles/Home.module.css'

export default function Comment() {
    const router = useRouter()
    const { storyId } = router.query
    return (
        <Layout>
            <main className={styles.main}>
                <p>Story: {storyId}</p>
                <div className="js-enabled">
                    <CommentContainer />
                </div>
            </main >
        </Layout>
    )
}
