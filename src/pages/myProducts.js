import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import eventProducs from '../data/products';

function MyProducts() {
  return (
    <Layout
      title='MyProducts'
      description="よしの個人開発">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">My Products</h1>
          <p className="hero__subtitle">個人で作成した成果物など（ブログは除く）</p>
        </div>
      </header>
      <main>
        <div className="container padding--md">
          <h2 className="text--center">Webサービス</h2>
          <section>
            <h3 className={classnames('text--center', styles.decorationLine)}>イベント参加</h3>
            {eventProducs && eventProducs.length && (
              <div className="row">
                {eventProducs.map((product, idx) => {
                  return (
                    <div className="col col--4 margin-bottom--lg" key={idx}>
                      <div className="card shadow--lw">
                        <div className={classnames('text--center', 'card__image')} >
                          <img
                            src={useBaseUrl(product.imageUrl)}
                            alt={product.productName}
                            height="180"
                          />
                        </div>
                        <div className="card__body">
                          <h4>{product.productName}</h4>
                          <small>{product.description}</small>
                        </div>
                        <div className="card__footer">
                          <div className="button-group button-group--block">
                            <a
                              className="button button--small button--secondary button--block"
                              href={product.url}
                              target="_blank"
                              rel="noreferrer noopener">
                              作品リンク
                            </a>
                            <a
                              className="button button--small button--secondary button--block"
                              href={product.githubUrl}
                              target="_blank"
                              rel="noreferrer noopener">
                              GitHub
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </section>
          {/* <section>
            <h3 className={classnames('text--center', styles.decorationLine)}>作ってみようチャレンジ</h3>
          </section> */}
        </div>
      </main>
    </Layout>
  );
}

export default MyProducts;