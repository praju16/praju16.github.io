import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <section className={utilStyles.headingMd}>
        <p>Hi, I am prajwal. I am software engineer <span class={utilStyles.reverseEmoji}>🏃 🏃 🏃 </span> indie hacker</p>
        <p>This is my personal website</p>
        <p>
          You can contact me on 
          <a href="https://twitter.com/prajwal45873027"> twitter</a>. 
        </p>
      </section>
    </Layout>
  );
}