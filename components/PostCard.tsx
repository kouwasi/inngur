import { PostResponse } from '$/types'

type Props = {
  post: PostResponse
}

const PostCard = ({ post }: Props) => (
  <div className="rounded bg-blue-100 shadow-md">
    <img src={post.image_url} className="rounded w-full h-auto"></img>
    <div className="py-2 px-2">
      <p>{post.title}</p>
    </div>
  </div>
)

export default PostCard
