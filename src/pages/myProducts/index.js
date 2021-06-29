import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import PropTypes from 'prop-types';
import styles from './index.module.css';
import { webService } from '../../data/products';

Product.propTypes = {
  productName: PropTypes.string,
  description: PropTypes.element,
  imageUrl: PropTypes.string,
  url: PropTypes.string,
  githubUrl: PropTypes.string,
};

function Product({ productName, description, imageUrl, url, githubUrl }) {
  return (
    <div className="col col--4 margin-bottom--lg">
      <div className="card shadow--lw">
        <div className="text--center card__image">
          <img
            src={useBaseUrl(imageUrl)}
            alt={productName}
            className={styles.productImg}
          />
        </div>
        <div className="card__body">
          <h4>{productName}</h4>
          <small>{description}</small>
        </div>
        <div className="card__footer">
          <div className="button-group button-group--block">
            <a
              className="button button--small button--secondary button--block"
              href={url}
              target="_blank"
              rel="noreferrer noopener"
            >
              作品リンク
            </a>
            <a
              className="button button--small button--secondary button--block"
              href={githubUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function MyProducts() {
  return (
    <Layout title="MyProducts" description="よしの個人開発">
      <header className="hero hero--primary hero-banner">
        <div className="container">
          <h1 className="hero__title">My Products</h1>
          <p className="hero__subtitle">
            個人で作成した成果物など（ブログは除く）
          </p>
        </div>
      </header>
      <main>
        <section className="container padding--md">
          <h2 className="text--center">Webサービス</h2>
          <section>
            <h3 className="text--center decoration-line">イベント参加</h3>
            <small className={'text--center display-block'}>
              ※web1week...1週間で web サービスを作るハッカソンイベント。
            </small>
            {webService.eventProducts && webService.eventProducts.length && (
              <div className="row padding-vert--lg">
                {webService.eventProducts.map((props, idx) => (
                  <Product key={idx} {...props} />
                ))}
              </div>
            )}
          </section>
          <section>
            <h3 className="text--center decoration-line">課題チャレンジ</h3>
            <small className={'text--center display-block'}>
              ※devChallenges...ユーザストーリーとデザインデータをもとに課題作品を作るチャレンジ。
            </small>
            {webService.challengeProducts &&
              webService.challengeProducts.length && (
                <div className="row padding-vert--lg">
                  {webService.challengeProducts.map((props, idx) => (
                    <Product key={idx} {...props} />
                  ))}
                </div>
              )}
          </section>
        </section>
      </main>
    </Layout>
  );
}

export default MyProducts;
