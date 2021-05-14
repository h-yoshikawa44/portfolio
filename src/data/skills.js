import React from 'react';

export const editors = [
  {
    title: 'Visual Studio Code',
    Svg: require('../../static/img/logo-icons/visual-studio-code.svg').default,
    description: (
      <>
        Java 以外の言語のコーディングで使用。
        <br />
        メインで使用しているエディタ。
      </>
    ),
  },
  {
    title: 'Eclipse',
    Svg: require('../../static/img/logo-icons/eclipse.svg').default,
    description: (
      <>
        Java のコーディングで使用。
        <br />
        Spring の場合は、Spring Tool Suite を使用したこともあり。
      </>
    ),
  },
  {
    title: 'Stoplight Studio',
    Svg: require('../../static/img/logo-icons/stoplight.svg').default,
    description: <>最近、個人開発で使い始めた OpenAPI 設計エディタ。</>,
  },
];

export const environments = [
  {
    title: 'Git',
    Svg: require('../../static/img/logo-icons/git-icon.svg').default,
    description: (
      <>
        普段の案件業務から、個人開発にわたり使用。
        <br />
        差分は VSCode の GUI で確認し、コマンドは CLI で操作することが多い。
      </>
    ),
  },
  {
    title: 'Docker',
    Svg: require('../../static/img/logo-icons/docker-icon.svg').default,
    description: (
      <>
        実務使用経験あり。
        <br />
        多少、自分で環境を作ったことがあり、基礎的な知識がある程度。
      </>
    ),
  },
];

export const langAndframewarks = [
  {
    title: 'HTML',
    Svg: require('../../static/img/logo-icons/html-5.svg').default,
    description: (
      <>
        基本的には研修で学んだ程度。
        <br />
        そのほか、FW のビューで記述したり、React の
        JSX（厳密には異なるが）で書いているなど。
      </>
    ),
  },
  {
    title: 'CSS',
    Svg: require('../../static/img/logo-icons/css-3.svg').default,
    description: <>実務使用経験あり。</>,
  },
  {
    title: 'JavaScript',
    Svg: require('../../static/img/logo-icons/javascript.svg').default,
    description: (
      <>
        実務使用経験ありであるが、基本的にフロントのみ。
        <br />
        あとは Google Apps Script の経験あり。
      </>
    ),
  },
  {
    title: 'TypeScript',
    Svg: require('../../static/img/logo-icons/typescript-icon.svg').default,
    description: (
      <>
        つい最近、個人開発でReactのコードを書く上で使い始めた言語。
        <br />
        経験としては2か月程度。自分の中で、フロント側のコードを書く際のデファクトにしたい。
      </>
    ),
  },
  {
    title: 'React',
    Svg: require('../../static/img/logo-icons/react.svg').default,
    description: (
      <>
        実務使用経験あり。
        <br />
        自分のスキルのうち、フロントでメインにしたい技術。
      </>
    ),
  },
  {
    title: 'Docusaurus',
    Svg: require('../../static/img/logo-icons/docusaurus.svg').default,
    description: (
      <>
        当サイトで使用。
        <br />
        v1は少々使いづらさを感じたので、v2を使用。
      </>
    ),
  },
  {
    title: 'Next.js',
    Svg: require('../../static/img/logo-icons/nextjs.svg').default,
    description: (
      <>
        つい最近、個人勉強を始めたフレームワーク。
        <br />
        React の知識を深める中で、この技術も習得していきたい。
      </>
    ),
  },
  {
    title: 'Java',
    Svg: require('../../static/img/logo-icons/java.svg').default,
    description: (
      <>
        実務使用経験あり。
        <br />
        この業界に入る前にメインで学んでいた言語。
        <br />
        その当時に資格を取得済みであるが、ここ最近はブランクがある。
      </>
    ),
  },
  {
    title: 'Spring',
    Svg: require('../../static/img/logo-icons/spring.svg').default,
    description: (
      <>
        実務使用経験あり。
        <br />
        テンプレートエンジンは使用せず、API としての開発経験のみ。
      </>
    ),
  },
  {
    title: 'PHP',
    Svg: require('../../static/img/logo-icons/php.svg').default,
    description: (
      <>
        実務使用経験あり。
        <br />
        個人勉強もしていた言語。
      </>
    ),
  },
  {
    title: 'CakePHP',
    Svg: require('../../static/img/logo-icons/cakephp.svg').default,
    description: (
      <>
        実務使用経験あり。
        <br />
        最初の案件で使用した FW であるため、ブランクあり。
      </>
    ),
  },
  {
    title: 'Laravel',
    Svg: require('../../static/img/logo-icons/laravel.svg').default,
    description: (
      <>
        過去に個人勉強していたことがある FW。
        <br />
        現在、個人開発で API の実装に使用。
      </>
    ),
  },
  {
    title: 'Python',
    Svg: require('../../static/img/logo-icons/python.svg').default,
    description: (
      <>
        実務使用経験あり。
        <br />
        AWS Lambda を Python で書いていた経験のみ。
      </>
    ),
  },
  {
    title: 'Ruby',
    Svg: require('../../static/img/logo-icons/ruby.svg').default,
    description: <>保守案件での業務使用経験あり。</>,
  },
  {
    title: 'Rails',
    Svg: require('../../static/img/logo-icons/rails.svg').default,
    description: <>保守案件での業務使用経験あり。</>,
  },
  {
    title: 'Jekyll',
    Svg: require('../../static/img/logo-icons/jekyll.svg').default,
    description: (
      <>
        自ブログで使用。
        <br />
        テーマは公開されているものを使用しているが、それをカスタマイズして使用。
      </>
    ),
  },
  {
    title: 'C#',
    Svg: require('../../static/img/logo-icons/c-sharp.svg').default,
    description: <>研修で学んだ程度。</>,
  },
];

export const database = [
  {
    title: 'MySQL',
    Svg: require('../../static/img/logo-icons/mysql.svg').default,
    description: <>実務使用経験あり。</>,
  },
];

export const qualification = [
  {
    name: 'AWS Certified Solutions Architect – Associate',
    date: '2019/08',
  },
  {
    name: 'Oracle Certified Java Programmer, Gold SE 8',
    date: '2017/09',
  },
  {
    name: '基本情報技術者',
    date: '2017/05',
  },
  {
    name: 'Oracle Certified Java Programmer, Silver SE 8',
    date: '2017/02',
  },
  {
    name: 'Oracle Certified Java Programmer, Bronze SE 7/8',
    date: '2016/11',
  },
];
