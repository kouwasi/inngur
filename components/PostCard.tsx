import type { Post } from '$prisma/client'

type Props = {
  post: Post
}

const PostCard = ({ post }: Props) => (
  <div className="rounded bg-blue-100 shadow-md">
    {/* <div>
      <img src={post.image_url} className="rounded"></img>  
    </div> */}
    <div className="py-2 px-2">
      <p>{post.title}</p>
    </div>
  </div>
)

export default PostCard
