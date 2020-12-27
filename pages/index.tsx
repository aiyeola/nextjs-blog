import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';

import Date from '@components/date'
import utilStyles from '../styles/utils.module.css';
import Layout, { siteTitle } from '@components/layout';
import { getSortedPostsData } from '../lib/posts';

type Posts = {
  date: string;
  title: string;
  id: string;
};

export default function Home({ allPostsData }: { allPostsData: Posts[] }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>
          I'm a software developer, I like all things JavaScript... I love food
          😋
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: { allPostsData },
  };
};
