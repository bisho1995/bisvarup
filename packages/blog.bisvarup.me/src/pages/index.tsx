import React from 'react';
import {graphql, Link} from 'gatsby';
import withErrorBoundary from '../component/withErrorBoundary/withErrorBoundary';
import profilePic from '../images/profile.jpg';
import styles from '../styles/index.module.scss';
import Helmet from '../component/Helmet/Helmet';

export default withErrorBoundary(({data}) => {
  const edges = data?.allMarkdownRemark?.edges;

  return (
    <main>
      <Helmet />
      <header className={styles.header}>
        <img
          src={profilePic}
          alt="bisvarup mukherjee"
          height={130}
          className="h-40 mr-8 rounded-full"
        />
        <h1 className="text-2xl flex flex-col justify-center">
          bisvarup&apos;s blog
        </h1>
      </header>

      <div className="text-left">
        <div className="leading-normal">
          {edges.map(
            (
              {
                node: {
                  frontmatter: {title, path, slug, date},
                },
              },
              idx: number,
            ) => (
              <div className="my-4" key={slug || path || idx}>
                <Link to={`/${path || slug}`}>
                  [{date}] {title}
                </Link>
              </div>
            ),
          )}
        </div>
      </div>
    </main>
  );
});

export const query = graphql`
  query HomePageQuery {
    allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
      edges {
        node {
          frontmatter {
            title
            path
            slug
            date(formatString: "DD MMM YYYY")
          }
        }
      }
    }
  }
`;
