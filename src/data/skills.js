import React from 'react';

export const editors = [
  {
    title: 'Visual Studio Code',
    imageUrl: 'img/logo-icons/visual-studio-code.svg',
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
    imageUrl: 'img/logo-icons/eclipse.svg',
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
    imageUrl: 'img/logo-icons/stoplight.svg',
    description: <>最近、個人開発で使い始めた OpenAPI 設計エディタ。</>,
  },
];

export const environments = [
  {
    title: 'Git',
    imageUrl: 'img/logo-icons/git-icon.svg',
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
    imageUrl: 'img/logo-icons/docker-icon.svg',
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
    imageUrl: 'img/logo-icons/html-5.svg',
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
    imageUrl: 'img/logo-icons/css-3.svg',
    description: <>実務使用経験あり。</>,
  },
  {
    title: 'JavaScript',
    imageUrl: 'img/logo-icons/javascript.svg',
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
    imageUrl: 'img/logo-icons/typescript-icon.svg',
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
    imageUrl: 'img/logo-icons/react.svg',
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
    imageUrl: 'img/logo-icons/docusaurus.svg',
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
    imageUrl: 'img/logo-icons/nextjs.svg',
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
    imageUrl: 'img/logo-icons/java.svg',
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
    imageUrl: 'img/logo-icons/spring.svg',
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
    imageUrl: 'img/logo-icons/php.svg',
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
    imageUrl: 'img/logo-icons/cakephp.svg',
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
    imageUrl: 'img/logo-icons/laravel.svg',
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
    imageUrl: 'img/logo-icons/python.svg',
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
    imageUrl: 'img/logo-icons/ruby.svg',
    description: <>保守案件での業務使用経験あり。</>,
  },
  {
    title: 'Rails',
    imageUrl: 'img/logo-icons/rails.svg',
    description: <>保守案件での業務使用経験あり。</>,
  },
  {
    title: 'Jekyll',
    imageUrl: 'img/logo-icons/jekyll.svg',
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
    imageUrl: 'img/logo-icons/c-sharp.svg',
    description: <>研修で学んだ程度。</>,
  },
];

export const database = [
  {
    title: 'MySQL',
    imageUrl: 'img/logo-icons/mysql.svg',
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
