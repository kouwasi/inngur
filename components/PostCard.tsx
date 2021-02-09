import { PostResponse } from '$/types'

type Props = {
  post: PostResponse
  onClick?: (id: number) => void
}

const PostCard = ({ post, onClick }: Props) => (
  <div
    className="rounded bg-white shadow-md"
    onClick={onClick && (() => onClick(post.id))}
  >
    <img src={post.image_url} className="rounded w-full h-auto"></img>
    {post.title != null ? (
      <div className="py-2 px-2 break-all">
        <p>{post.title}</p>
      </div>
    ) : null}
  </div>
)

export default PostCard
