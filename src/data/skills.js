import React from 'react';

const editors = [
  {
    title: 'Visual Studio Code',
    imgUrl: 'img/logo-icons/visual-studio-code.svg',
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
    imgUrl: 'img/logo-icons/eclipse.svg',
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
    imgUrl: 'img/logo-icons/stoplight.svg',
    description: <>最近、個人開発で使い始めた OpenAPI 設計エディタ。</>,
  },
];

export const environments = [
  {
    title: 'Git',
    imgUrl: 'img/logo-icons/git-icon.svg',
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
    imgUrl: 'img/logo-icons/docker-icon.svg',
    description: (
      <>
        実務使用経験あり。
        <br />
        多少、調べながら自分で環境を作ったことがあり、基礎的な知識がある程度。
      </>
    ),
  },
];

const langAndframewarks = [
  {
    title: 'HTML',
    imgUrl: 'img/logo-icons/html-5.svg',
    description: (
      <>
        基礎復習で勉強中。
        <br />
        そのうち、資格にも挑戦してみようか検討中。
      </>
    ),
  },
  {
    title: 'CSS',
    imgUrl: 'img/logo-icons/css-3.svg',
    description: (
      <>
        基礎復習で勉強中。
        <br />
        emotion の中で書いていたりもする。
      </>
    ),
  },
  {
    title: 'JavaScript',
    imgUrl: 'img/logo-icons/javascript.svg',
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
    imgUrl: 'img/logo-icons/typescript-icon.svg',
    description: (
      <>
        自分の中でフロントエンド側のコードを書く際のデファクトにしたい言語で、今年から使い始めた。
        <br />
        個人開発や課題をこなす中で使用。
      </>
    ),
  },
  {
    title: 'React',
    imgUrl: 'img/logo-icons/react.svg',
    description: (
      <>
        実務使用経験あり。
        <br />
        自分のスキルのうち、フロントエンドでメインにしたい技術。投稿している技術記事は
        React 記事が多い。
      </>
    ),
  },
  {
    title: 'Docusaurus',
    imgUrl: 'img/logo-icons/docusaurus.svg',
    description: (
      <>
        当サイトで使用。
        <br />
        v1 は少々使いづらさを感じたので、v2を使用。
      </>
    ),
  },
  {
    title: 'Next.js',
    imgUrl: 'img/logo-icons/nextjs-icon.svg',
    description: (
      <>
        今年、個人勉強や課題をこなす中で使用し始めたフレームワーク。
        <br />
        React の知識を深める中で、この技術も習得していきたい。
      </>
    ),
  },
  {
    title: 'Java',
    imgUrl: 'img/logo-icons/java.svg',
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
    imgUrl: 'img/logo-icons/spring-icon.svg',
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
    imgUrl: 'img/logo-icons/php.svg',
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
    imgUrl: 'img/logo-icons/cakephp.svg',
    description: (
      <>
        実務使用経験あり。
        <br />
        最初の案件で使用したフレームワークであるため、ブランクあり。
      </>
    ),
  },
  {
    title: 'Laravel',
    imgUrl: 'img/logo-icons/laravel.svg',
    description: (
      <>
        過去に個人勉強していたことがあるフレームワーク。
        <br />
        個人開発で API の実装に使用経験あり。
      </>
    ),
  },
  {
    title: 'Python',
    imgUrl: 'img/logo-icons/python.svg',
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
    imgUrl: 'img/logo-icons/ruby.svg',
    description: <>保守案件での業務使用経験あり。</>,
  },
  {
    title: 'Rails',
    imgUrl: 'img/logo-icons/rails.svg',
    description: <>保守案件での業務使用経験あり。</>,
  },
  {
    title: 'Jekyll',
    imgUrl: 'img/logo-icons/jekyll.svg',
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
    imgUrl: 'img/logo-icons/c-sharp.svg',
    description: <>研修で学んだ程度。</>,
  },
];

const database = [
  {
    title: 'MySQL',
    imgUrl: 'img/logo-icons/mysql.svg',
    description: <>実務使用経験あり。</>,
  },
];

const qualification = [
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

export { editors, langAndframewarks, database, qualification };
