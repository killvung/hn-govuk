import { useRouter } from 'next/router'

const Story = () => {
    const router = useRouter()
    const { storyId } = router.query
    return <p>Story: {storyId}</p>
}

export default Story
