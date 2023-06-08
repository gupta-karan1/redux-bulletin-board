import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  // to show the latest post first and oldest one in the end
  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPosts.map((post) => (
    <article key={post.id}>
      {/* Post */}
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>

      {/* post Author */}
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        {/* Time Ago */}
        <TimeAgo timestamp={post.date} />
      </p>
    </article>
  ));

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostsList;
