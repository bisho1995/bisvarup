import React from 'react';
import { Link } from 'gatsby';
import { Helmet as ReactHelmet } from 'react-helmet';
import Disqus from 'disqus-react';
import Helmet from '../component/Helmet/Helmet';
import withErrorBoundary from '../component/withErrorBoundary/withErrorBoundary';
import profilePic from '../images/profile.jpg';
import ViewCounter from '../component/ViewCounter/ViewCounter';
import styles from './template.module.scss';
import TemplateFooter from '../component/TemplateFooter/TemplateFooter';
import AsideBlock from '../component/AsideBlock/AsideBlock';
import Footer from '../component/Footer/Footer';
import HashTags from '../component/HashTags/HashTags';

export default withErrorBoundary(
  ({
    pageContext: {
      content, date, title, slug, newPosts,
    },
  }: {pageContext: {content: string, date: string, title:string, slug:string}}) => {
    const disqusShortname = 'blog-bisvarup-me'; // found in your Disqus.com dashboard
    const disqusConfig = {
      // @ts-ignore
      url: window.location.href,
      identifier: encodeURIComponent(slug),
      title,
    };
    return (
      <div>
        <Helmet />
        <ReactHelmet>
          <title>{title}</title>
        </ReactHelmet>
        <header>
          <Link to="/" className="no-underline">
            <div className="flex justify-start p-4 select-none">
              <img
                src={profilePic}
                alt="bisvarup mukherjee"
                className="h-24 rounded-full m-auto md:m-0 md:mr-4 block"
              />
              <span className="justify-center text-2xl no-underline text-grey-900 hidden md:flex md:flex-col">
                bisvarup&apos;s blog
              </span>
            </div>
          </Link>
        </header>
        <div className={`flex flex-col ${styles.wrapper} mx-auto lg:flex-row`}>
          <div className={`${styles.template} container mx-auto p-4`}>
            <div className="text-center">
              <b>{date}</b>
              <h1>{title}</h1>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: content }}
            />
            <div className="text-center my-4 text-gray-600">-- X -- X -- X --</div>

            <Disqus.DiscussionEmbed
              shortname={disqusShortname}
              config={disqusConfig}
            />
          </div>
          <aside className={`${styles.aside} m-4 lg:mr-4 flex flex-col`}>
            <AsideBlock header="Latest Posts">
              <div>
                {newPosts.filter(({ title: pageTitle }) => pageTitle !== title).map(({
                  title: pageTitle, path, slug, image = '/images/placeholder.jpg', tags = '',
                }) => (
                  <Link to={path || `/${slug}`}>
                    <div className="mb-8 text-sm leading-normal font-medium flex">
                      <img className="w-20 h-20 mr-4" src={image || '/images/placeholder.jpg'} alt={pageTitle} />
                      <div>
                        {pageTitle}
                        <div><HashTags tags={tags} /></div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </AsideBlock>
            {/* <AsideBlock header="Tags">
              <div>
                All our tags
              </div>
            </AsideBlock> */}
          </aside>
        </div>
        <Footer />
      </div>
    );
  },
);
