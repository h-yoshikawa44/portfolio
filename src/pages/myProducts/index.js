import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import PropTypes from 'prop-types';
import eventProducs from '../../data/products';

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
          <img src={useBaseUrl(imageUrl)} alt={productName} height="180" />
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
        <div className="container padding--md">
          <h2 className="text--center">Webサービス</h2>
          <section>
            <h3 className="text--center decoration-line">イベント参加</h3>
            {eventProducs && eventProducs.length && (
              <div className="row">
                {eventProducs.map((props, idx) => (
                  <Product key={idx} {...props} />
                ))}
              </div>
            )}
          </section>
          {/* <section>
            <h3 className="text--center decoration-line">作ってみようチャレンジ</h3>
          </section> */}
        </div>
      </main>
    </Layout>
  );
}

export default MyProducts;
