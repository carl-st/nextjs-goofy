import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Link from 'next/link';

const PostLink = props => (
  <li>
    <Link href="/posts/[id]" as={`/posts/${props.id}`}>
      <a>{props.title}</a>
    </Link>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: 'Arial';
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
);


const Blog = props => {
  return (
    <Layout>
      <h1>Posts</h1>
      <ul>
        {props.posts.map(show => (
          <li key={show.id}>
            <PostLink id={`${show.id}`} title={show.name}/>
          </li>
        ))}
        <PostLink id="hello-nextjs" title="Hello" />
        <PostLink id="learn-nextjs" title="Learn" />
        <PostLink id="deploy-nextjs" title="Deploy" />
      </ul>
    </Layout>
  );
}

Blog.getInitialProps = async function () {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`Data fetched. Count: ${data.length}`);

  return {
    posts: data.map(entry => entry.show)
  };
};

export default Blog;