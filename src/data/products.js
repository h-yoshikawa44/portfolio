import React from 'react';

const eventProducts = [
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

const challengeProducts = [
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
    url: 'https://github.com/h-yoshikawa44/todo-app',
    githubUrl: 'https://todo-app-h-yoshikawa44.vercel.app/',
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
    url: 'https://github.com/h-yoshikawa44/windbnb',
    githubUrl: 'https://windbnb-h-yoshikawa44.vercel.app/',
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
    url: 'https://github.com/h-yoshikawa44/input-component',
    githubUrl: 'https://input-component-h-yoshikawa44.vercel.app/',
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
    url: 'https://github.com/h-yoshikawa44/button-component',
    githubUrl: 'https://button-component-h-yoshikawa44.vercel.app/',
  },
];

const webService = { eventProducts, challengeProducts };

export { webService };
