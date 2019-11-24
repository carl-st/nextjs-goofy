import Layout from '../components/Layout';
import Markdown from 'react-markdown';

const About = () => {
  return (
    <Layout>
      <style jsx>{`
            .markdown {
              font-family: 'Arial';
            }

            .markdown a {
              text-decoration: none;
              color: blue;
            }

            .markdown a:hover {
              opacity: 0.6;
            }

            .markdown h3 {
              margin: 0;
              padding: 0;
              text-transform: uppercase;
            }
        `}</style>
      <p>This is the about page</p>
      <div className="markdown">
        <Markdown
          source={`
This is our blog post.
Yes. We can have a [link](/link).
And we can have a title as well.

### This is a title

And here's the content.
              `}
        />
      </div>
    </Layout>
  )
}

export default About;