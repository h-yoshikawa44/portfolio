import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import PropTypes from 'prop-types';
import styles from './index.module.css';

PersonalLinkItem.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string,
};

function PersonalLinkItem({ url, text }) {
  return (
    <li>
      <a href={url} target="_blank" rel="noreferrer noopener">
        {text}
      </a>
    </li>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title="Home" description="よしのポートフォリオサイト">
      <header className="hero hero--primary hero-banner">
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--outline button--info button--lg margin--xs"
              to={useBaseUrl('/skillandcareer')}
            >
              スキル &amp; 経歴
            </Link>
            <Link
              className="button button--outline button--info button--lg margin--xs"
              to={useBaseUrl('/myproducts')}
            >
              個人開発
            </Link>
          </div>
        </div>
      </header>
      <main>
        <div className="container padding--md">
          <section>
            <h3 className="text--center decoration-line">当サイトについて</h3>
            <div>
              <p>
                Web プログラマーである h-yoshikawa44
                のポートフォリオサイトです。
                <br />
                経験スキルや実務経歴、個人開発の履歴、各種技術活動に関するアカウントのリンクなどを集約しています。
              </p>
            </div>
          </section>
          <section>
            <h3 className="text--center decoration-line">管理人プロフィール</h3>
            　
            <div>
              <div className="card-demo margin-vert--sm">
                <div className="card shadow--tl">
                  <div className="card__header">
                    <div className="avatar">
                      <img
                        className={clsx(
                          'avatar__photo avatar__photo--xl',
                          styles.backgroundColorWhite
                        )}
                        src={useBaseUrl('img/lion-custom.svg')}
                      />
                      <div className="avatar__intro">
                        <h3 className="avatar__name">Hitomi Yoshikawa</h3>
                        <small className="avatar__subtitle">
                          よし（h-yoshikawa44）
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="card__body">
                    <p>
                      精神疾患持ちの Web プログラマー。
                      <br />
                      2020年秋頃に退職してから療養していましたが、社会復帰に向けて勉強しながら復職活動中。
                    </p>
                    <p>
                      実務経験として、フロントエンド、バックエンドともに経験はありますが、
                      <br />
                      いまいちスキルの中途半端感があるのでフロントエンド領域のスキル（特に
                      React 周辺）を伸ばそうと日々勉強しています。
                    </p>
                  </div>
                  <div className="card__footer">
                    <p>
                      個人ブログや各種技術活動に関するアカウントはこちら。
                      <br />
                      （※Qiita、Zenn および Crieit
                      に投稿している記事は、全てブログにも投稿しています）
                    </p>
                    <ul>
                      <PersonalLinkItem
                        url={siteConfig.customFields.url.blog}
                        text="ブログ（技術以外の記事もあり）"
                      />
                      <PersonalLinkItem
                        url={siteConfig.customFields.url.github}
                        text="GitHub"
                      />
                      <PersonalLinkItem
                        url={siteConfig.customFields.url.twitter}
                        text="Twitter"
                      />
                      <PersonalLinkItem
                        url={siteConfig.customFields.url.qiita}
                        text="Qiita"
                      />
                      <PersonalLinkItem
                        url={siteConfig.customFields.url.zenn}
                        text="Zenn"
                      />
                      <PersonalLinkItem
                        url={siteConfig.customFields.url.crieit}
                        text="Crieit"
                      />
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
