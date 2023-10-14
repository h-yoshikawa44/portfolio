import React from 'react';

const siteMyProducts = [
  {
    productName: 'Change Of Pace',
    description: (
      <>
        Astro 製の個人ブログ。
        <br />
        2023/07に Jekyll から移行。テーマは使用せず自作。
      </>
    ),
    imageUrl: 'img/my-products/change-of-pace/overview.png',
    url: 'https://changeofpace.site',
    githubUrl: 'https://github.com/h-yoshikawa44/change-of-pace-astro',
  },
];

const siteChallengeProducts = [
  {
    productName: 'Portfolio',
    description: (
      <>
        devChallenges(legacy) - Responsive Web 編・課題その8。
        <br />
        ポートフォリオページを作成するチャレンジ。
      </>
    ),
    imageUrl: 'img/my-products/devchallenges/responsive-web/portfolio.png',
    url: 'https://ch-portfolio-h-yoshikawa44.vercel.app/',
    githubUrl: 'https://github.com/h-yoshikawa44/ch-portfolio',
  },
  {
    productName: 'Edie homepage',
    description: (
      <>
        devChallenges(legacy) - Responsive Web 編・課題その7。
        <br />
        LP を作成するチャレンジ。
      </>
    ),
    imageUrl: 'img/my-products/devchallenges/responsive-web/edie-homepage.png',
    url: 'https://h-yoshikawa44.github.io/ch-edie-homepage/',
    githubUrl: 'https://github.com/h-yoshikawa44/ch-edie-homepage',
  },
  {
    productName: 'Checkout Page',
    description: (
      <>
        devChallenges(legacy) - Responsive Web 編・課題その6。
        <br />
        買い物フォームページを作成するチャレンジ。
      </>
    ),
    imageUrl: 'img/my-products/devchallenges/responsive-web/checkout-page.png',
    url: 'https://h-yoshikawa44.github.io/ch-checkout-page/',
    githubUrl: 'https://github.com/h-yoshikawa44/ch-checkout-page',
  },
  {
    productName: 'My Gallery',
    description: (
      <>
        devChallenges(legacy) - Responsive Web 編・課題その5。
        <br />
        ギャラリーページを作成するチャレンジ。
      </>
    ),
    imageUrl: 'img/my-products/devchallenges/responsive-web/my-gallery.png',
    url: 'https://h-yoshikawa44.github.io/ch-my-gallery/',
    githubUrl: 'https://github.com/h-yoshikawa44/ch-my-gallery',
  },
  {
    productName: 'Recipe page',
    description: (
      <>
        devChallenges(legacy) - Responsive Web 編・課題その4。
        <br />
        レシピサイトのレシピページを作成するチャレンジ。
      </>
    ),
    imageUrl: 'img/my-products/devchallenges/responsive-web/recipe-page.png',
    url: 'https://h-yoshikawa44.github.io/ch-recipe-page/',
    githubUrl: 'https://github.com/h-yoshikawa44/ch-recipe-page',
  },
  {
    productName: 'Interior Consultant',
    description: (
      <>
        devChallenges(legacy) - Responsive Web 編・課題その3。
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
        devChallenges(legacy) - Responsive Web 編・課題その2。
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
        devChallenges(legacy) - Responsive Web 編・課題その1。
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
    productName: 'Weather app',
    description: (
      <>
        devChallenges(legacy) - Front-end Developer 編・課題その7。
        <br />
        MetaWeather API を使用した、天気予報アプリを作るチャレンジ。
      </>
    ),
    imageUrl: 'img/my-products/devchallenges/front-end/weather-app.png',
    url: 'https://ch-weather-app-h-yoshikawa44.vercel.app/',
    githubUrl: 'https://github.com/h-yoshikawa44/ch-weather-app',
  },
  {
    productName: 'Country quiz',
    description: (
      <>
        devChallenges(legacy) - Front-end Developer 編・課題その6。
        <br />
        REST COUNTRIES API を使用した、国情報クイズアプリを作るチャレンジ。
      </>
    ),
    imageUrl: 'img/my-products/devchallenges/front-end/country-quiz.png',
    url: 'https://ch-country-quiz-h-yoshikawa44.vercel.app/',
    githubUrl: 'https://github.com/h-yoshikawa44/ch-country-quiz',
  },
  {
    productName: 'Random quote generator',
    description: (
      <>
        devChallenges(legacy) - Front-end Developer 編・課題その5。
        <br />
        QuoteGarden API を使用した、名言引用アプリを作るチャレンジ。
      </>
    ),
    imageUrl:
      'img/my-products/devchallenges/front-end/random-quote-generator.png',
    url: 'https://ch-random-quote-generator-h-yoshikawa44.vercel.app/',
    githubUrl: 'https://github.com/h-yoshikawa44/ch-random-quote-generator',
  },
  {
    productName: 'Todo app',
    description: (
      <>
        devChallenges(legacy) - Front-end Developer 編・課題その4。
        <br />
        LocalStorage を使用したシンプルな Todo アプリを作るチャレンジ。
      </>
    ),
    imageUrl: 'img/my-products/devchallenges/front-end/todo-app.png',
    url: 'https://ch-todo-app-h-yoshikawa44.vercel.app',
    githubUrl: 'https://github.com/h-yoshikawa44/ch-todo-app',
  },
  {
    productName: 'Windbnb',
    description: (
      <>
        devChallenges(legacy) - Front-end Developer 編・課題その3。
        <br />
        簡易的な検索機能を持つ、ミニマムな Airbnb クローンを作るチャレンジ。
      </>
    ),
    imageUrl: 'img/my-products/devchallenges/front-end/windbnb.png',
    url: 'https://ch-windbnb-h-yoshikawa44.vercel.app',
    githubUrl: 'https://github.com/h-yoshikawa44/ch-windbnb',
  },
  {
    productName: 'Input component',
    description: (
      <>
        devChallenges(legacy) - Front-end Developer 編・課題その2。
        <br />
        汎用的なボタンコンポーネントと、そのカタログページを作るチャレンジ。
      </>
    ),
    imageUrl: 'img/my-products/devchallenges/front-end/input-component.png',
    url: 'https://ch-input-component-h-yoshikawa44.vercel.app',
    githubUrl: 'https://github.com/h-yoshikawa44/ch-input-component',
  },
  {
    productName: 'Button component',
    description: (
      <>
        devChallenges(legacy) - Front-end Developer 編・課題その1。
        <br />
        汎用的なボタンコンポーネントと、そのカタログページを作るチャレンジ。
      </>
    ),
    imageUrl: 'img/my-products/devchallenges/front-end/button-component.png',
    url: 'https://ch-button-component-h-yoshikawa44.vercel.app',
    githubUrl: 'https://github.com/h-yoshikawa44/ch-button-component',
  },
];

const webSite = { siteMyProducts, siteChallengeProducts };
const webService = { serviceEventProducts, serviceChallengeProducts };

export { webSite, webService };
