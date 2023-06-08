import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButton from "./ReactionButton";

const PostsExcerpt = ({ post }) => {
  return (
    <article>
      {/* Post */}
      <h3>{post.title}</h3>
      <p>{post.body.substring(0, 100)}</p>

      {/* post Author */}
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        {/* Time Ago */}
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButton post={post} />
    </article>
  );
};

export default PostsExcerpt;
