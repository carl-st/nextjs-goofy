import { NextPage } from 'next';
import fetch from 'isomorphic-unfetch';
import Layout from '../../components/Layout';

type Post = {
  name: string,
  summary: string,
  image: {
    medium: string
  },
}

type Props = {
  show: Post
}

const Post: NextPage<Props> = props => (
  <Layout>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
    <img src={props.show.image.medium} />
  </Layout>
);

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default Post;