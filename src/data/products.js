import React from 'react';

const siteMyProducts = [
  {
    productName: 'Change Of Pace',
    description: (
      <>
        Jekyll 製の個人ブログ（リポジトリは非公開）
        <br />
        テーマは Hydeout を使用 + 細かなカスタム。
      </>
    ),
    imageUrl: 'img/my-products/change-of-pace/overview.png',
    url: 'https://changeofpace.site/',
    githubUrl: '',
  },
];

const siteChallengeProducts = [
  {
    productName: 'Interior Consultant',
    description: (
      <>
        devChallenges - Responsive Web 課題その3。
        <br />
        インテリアサービスサイトのトップページ + メニューを作成するチャレンジ。
      </>
    ),
    imageUrl:
      'img/my-products/devchallenges/responsive-web/interior-consultant.png',
    url: 'https://h-yoshikawa44.github.io/ch-interior-consultant/',
    githubUrl: 'https://github.com/h-yoshikawa44/ch-interior-consultant',
  },
  {
    productName: 'My team page',
    description: (
      <>
        devChallenges - Responsive Web 課題その2。
        <br />
        チームメンバー一覧ページを作成するチャレンジ。
      </>
    ),
    imageUrl: 'img/my-products/devchallenges/responsive-web/my-team-page.png',
    url: 'https://h-yoshikawa44.github.io/ch-my-team-page/',
    githubUrl: 'https://github.com/h-yoshikawa44/ch-my-team-page',
  },
  {
    productName: '404 Not Found',
    description: (
      <>
        devChallenges - Responsive Web 課題その1。
        <br />
        404ページを作成するチャレンジ。
      </>
    ),
    imageUrl: 'img/my-products/devchallenges/responsive-web/404-not-found.png',
    url: 'https://h-yoshikawa44.github.io/ch-404-not-found/',
    githubUrl: 'https://github.com/h-yoshikawa44/ch-404-not-found',
  },
];

const serviceEventProducts = [
  {
    productName: 'Close to 2',
    description: (
      <>
        web1week のお題「2」の投稿作品。
        <br />
        4択から計算結果が一番「2」に近い式をあてるゲーム。
      </>
    ),
    imageUrl: 'img/my-products/close-to-2/overview.png',
    url: 'https://h-yoshikawa44.github.io/close-to-2/',
    githubUrl: 'https://github.com/h-yoshikawa44/close-to-2',
  },
  {
    productName: 'Jigsaw Like Puzzle',
    description: (
      <>
        web1week のお題「Like」の投稿作品。
        <br />
        ジグソーパズルっぽいパズルゲーム（※PC向け）
      </>
    ),
    imageUrl: 'img/my-products/jigsaw-like-puzzle/overview.png',
    url: 'https://jigsaw-like-puzzle.web.app',
    githubUrl: 'https://github.com/h-yoshikawa44/jigsaw-like-puzzle',
  },
];

const serviceChallengeProducts = [
  {
    productName: 'Random quote generator',
    description: (
      <>
        devChallenges - Front-end Developer 課題その5。
        <br />
        QuoteGarden API を使用した、名言引用アプリを作るチャレンジ。
      </>
    ),
    imageUrl:
      'img/my-products/devchallenges/front-end/random-quote-generator.png',
    url: 'https://random-quote-generator-h-yoshikawa44.vercel.app/',
    githubUrl: 'https://github.com/h-yoshikawa44/random-quote-generator',
  },
  {
    productName: 'Todo app',
    description: (
      <>
        devChallenges - Front-end Developer 課題その4。
        <br />
        LocalStorage を使用したシンプルな Todo アプリを作るチャレンジ。
      </>
    ),
    imageUrl: 'img/my-products/devchallenges/front-end/todo-app.png',
    url: 'https://todo-app-h-yoshikawa44.vercel.app',
    githubUrl: 'https://github.com/h-yoshikawa44/todo-app',
  },
  {
    productName: 'Windbnb',
    description: (
      <>
        devChallenges - Front-end Developer 課題その3。
        <br />
        簡易的な検索機能を持つ、ミニマムな Airbnb クローンを作るチャレンジ。
      </>
    ),
    imageUrl: 'img/my-products/devchallenges/front-end/windbnb.png',
    url: 'https://windbnb-h-yoshikawa44.vercel.app',
    githubUrl: 'https://github.com/h-yoshikawa44/windbnb',
  },
  {
    productName: 'Input component',
    description: (
      <>
        devChallenges - Front-end Developer 課題その2。
        <br />
        汎用的なボタンコンポーネントと、そのカタログページを作るチャレンジ。
      </>
    ),
    imageUrl: 'img/my-products/devchallenges/front-end/input-component.png',
    url: 'https://input-component-h-yoshikawa44.vercel.app',
    githubUrl: 'https://github.com/h-yoshikawa44/input-component',
  },
  {
    productName: 'Button component',
    description: (
      <>
        devChallenges - Front-end Developer 課題その1。
        <br />
        汎用的なボタンコンポーネントと、そのカタログページを作るチャレンジ。
      </>
    ),
    imageUrl: 'img/my-products/devchallenges/front-end/button-component.png',
    url: 'https://button-component-h-yoshikawa44.vercel.app',
    githubUrl: 'https://github.com/h-yoshikawa44/button-component',
  },
];

const webSite = { siteMyProducts, siteChallengeProducts };
const webService = { serviceEventProducts, serviceChallengeProducts };

export { webSite, webService };
