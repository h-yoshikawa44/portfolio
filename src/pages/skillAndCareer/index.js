import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import PropTypes from 'prop-types';
import styles from './index.module.css';
import {
  editors,
  environments,
  langAndframewarks,
  database,
  qualification,
} from '../../data/skills';
import { careersAtFroide, personalDevelopment } from '../../data/careers';

Skill.propTypes = {
  imgUrl: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.element,
};

function Skill({ imgUrl, title, description }) {
  return (
    <div className="col col--3">
      {imgUrl && (
        <div className="text--center">
          <img className={styles.skillImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h4 className="text--center">{title}</h4>
      <p className="text--center">{description}</p>
    </div>
  );
}

Career.propTypes = {
  period: PropTypes.string,
  title: PropTypes.string,
  langAndFw: PropTypes.string,
  db: PropTypes.string,
  environment: PropTypes.string,
  cloudService: PropTypes.string,
  other: PropTypes.string,
  description: PropTypes.element,
};

function Career({
  period,
  title,
  langAndFw,
  db,
  environment,
  cloudService,
  other,
  description,
}) {
  return (
    <div className="card-demo margin-vert--sm">
      <div className="card shadow--lw-custom">
        <div className="card__header">
          <p className="text--italic">{period}</p>
          <h3>{title}</h3>
        </div>
        <div className="card__body">
          <ul>
            {langAndFw && <li>言語・FW：{langAndFw}</li>}
            {db && <li>DB：{db}</li>}
            {environment && <li>環境：{environment}</li>}
            {cloudService && <li>クラウドサービス：{cloudService}</li>}
            {other && <li>その他：{other}</li>}
          </ul>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

Qualification.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
};

function Qualification({ name, date }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{date}</td>
    </tr>
  );
}

function SkillAndCareer() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title="Skill &amp; Career" description="よしのスキル &amp; 経歴">
      <header className="hero hero--primary hero-banner">
        <div className="container">
          <h1 className="hero__title">Skill &amp; Career</h1>
          <p className="hero__subtitle">スキルと経歴</p>
        </div>
      </header>
      <main>
        <section className="container padding--md">
          <h2 className="text--center">スキル</h2>
          <section>
            <h3 className="text--center decoration-line">エディタ</h3>
            {editors && editors.length && (
              <div className="padding-vert--lg">
                <div className="row">
                  {editors.map((props, idx) => (
                    <Skill key={idx} {...props} />
                  ))}
                </div>
              </div>
            )}
          </section>
          <section>
            <h3 className="text--center decoration-line">開発環境</h3>
            {environments && environments.length && (
              <div className="padding-vert--lg">
                <div className="row">
                  {environments.map((props, idx) => (
                    <Skill key={idx} {...props} />
                  ))}
                </div>
              </div>
            )}
          </section>
          <section>
            <h3 className="text--center decoration-line">
              言語・フレームワーク
            </h3>
            {langAndframewarks && langAndframewarks.length && (
              <div className="padding-vert--lg">
                <div className="row">
                  {langAndframewarks.map((props, idx) => (
                    <Skill key={idx} {...props} />
                  ))}
                </div>
              </div>
            )}
          </section>
          <section>
            <h3 className="text--center decoration-line">データベース</h3>
            {database && database.length && (
              <div className="padding-vert--lg">
                <div className="row">
                  {database.map((props, idx) => (
                    <Skill key={idx} {...props} />
                  ))}
                </div>
              </div>
            )}
          </section>
          <section>
            <h3 className="text--center decoration-line">所持資格</h3>
            <small className={'text--center display-block'}>
              ※バッジがある資格については、
              <a
                href={siteConfig.customFields.url.credly}
                target="_blank"
                rel="noreferrer noopener"
              >
                Credly
              </a>
              {` `}に記録があります。
            </small>
            {qualification && qualification.length && (
              <div className="padding-vert--lg">
                <table className="display-table full-width">
                  <thead>
                    <tr>
                      <th>名称</th>
                      <th>取得年月</th>
                    </tr>
                  </thead>
                  <tbody>
                    {qualification.map((props, idx) => (
                      <Qualification key={idx} {...props} />
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        </section>
        <section className="container padding--md">
          <h2 className="text--center">経歴</h2>
          <small className="text--center padding-bottom--md display-block">
            ※ここで書いている技術スタックは、実際に使われているもののうち、自分が関わった部分のみ記載しています。
          </small>
          <section>
            <h3 className="text--center decoration-line">
              フロイデ株式会社 【2017/10 ～ 2020/10】
            </h3>
            {careersAtFroide && careersAtFroide.length && (
              <div className="padding-vert--md">
                {careersAtFroide.map((props, idx) => (
                  <Career key={idx} {...props} />
                ))}
              </div>
            )}
          </section>
          <section>
            <h3 className="text--center decoration-line">個人開発</h3>
            {personalDevelopment && personalDevelopment.length && (
              <div className="padding-vert--md">
                {personalDevelopment.map((props, idx) => (
                  <Career key={idx} {...props} />
                ))}
              </div>
            )}
          </section>
        </section>
      </main>
    </Layout>
  );
}

export default SkillAndCareer;
