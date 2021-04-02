import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import { editors, environments, langAndframewarks, database } from '../data/skills';
import careers from '../data/careers';

function Skill({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
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

function Career({ period, title, langAndFw, db, environment, cloudService, other, description }) {
  return (
    <div className="card-demo margin-vert--sm">
      <div className="card shadow--tl">
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
          <div className="catd__footer">
            {description.map((text) => {
              return (
                <>
                  {text}
                  <br />
                </>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

function SkillAndCareer() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title="Skill &amp; Career"
      description="よしのスキル &amp; 経歴">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Skill &amp; Career</h1>
          <p className="hero__subtitle">スキルと経歴</p>
        </div>
      </header>
      <main>
        <div className="container padding--md">
          <h2 className="text--center">スキル</h2>
          <section>
            <h3 className={classnames('text--center', styles.decorationLine)}>エディタ</h3>
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
            <h3 className={classnames('text--center', styles.decorationLine)}>開発環境</h3>
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
            <h3 className={classnames('text--center', styles.decorationLine)}>言語・フレームワーク</h3>
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
            <h3 className={classnames('text--center', styles.decorationLine)}>データベース</h3>
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
        </div>
        <div className="container padding--md">
          <h2 className="text--center">経歴</h2>
          <section>
            {careers && careers.length && (
              <>
              {careers.map((props, idx) => (
                <Career key={idx} {...props} />
              ))}
              </>
            )}
          </section>
        </div>
      </main>
    </Layout>
  );
}

export default SkillAndCareer;
