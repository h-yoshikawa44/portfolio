import React from 'react';

const careersAtYumemi = [
  {
    period: '2022/04 〜',
    title: '特定の絵文字で投稿を自動転送する Slack Bot',
    langAndFw: 'TypeScript / Node.js',
    db: 'Notion DB',
    environment: 'Git / GitHub Actions / Serverless Framework',
    cloudService: 'AWS[Lambda, API Gateway]',
    other: '',
    description: (
      <>
        案件外の業務改善活動で自分がメインで開発したもの。2022/08より本運用開始して、継続してメンテナンスしている。
        <br />
        元々、Slack
        で職能グループ全体の連絡を各チームチャンネルに転送するのを各々が手動でやっており、ちょっと手間だよね、という背景があった。
        <br />
        それに対して、1つのカスタム絵文字をつけるとその絵文字が紐づくチャンネル全てに自動転送する
        Slack Bot を作ったというもの。
        <br />
        フロントエンドグループ内で運用開始していたが、のちにほかの職能グループにも横展開。
      </>
    ),
  },
  {
    period: '2022/04 〜',
    title: 'ECサービス',
    langAndFw:
      'TypeScript / Next.js / Tailwind CSS / Jest / Storybook / Kotlin / Spring Boot',
    db: '',
    environment: 'Git / Swagger',
    cloudService: '',
    other: 'スクラム',
    description: (
      <>
        保守案件。複数チームからなる規模の大き目な案件。
        <br />
        主に新規エピックを対応するチームに始まり、チーム入れ替え後も引き続きエピック対応中（他チームには後方支援担当などがある）
        <br />
        基本的にはフロントエンド担当であるが、たまに BFF も触ることがある。 先方
        PO と要件詰め～設計～実装、ドキュメント更新など。
        <br />
        規模はまちまちではあるが、エピックリードも7件ほど経験（2023/10時点）
      </>
    ),
  },
  {
    period: '2022/02中旬',
    title: '入社',
    langAndFw: '',
    db: '',
    environment: '',
    cloudService: '',
    other: '',
    description: (
      <>
        療養に専念後の約8か月の復職活動を経て、フロントエンドエンジニアとして入社。
        <br />
        案件に入るまでは、その前勉強として Next.js やスクラムの勉強にいそしむ。
      </>
    ),
  },
];

const careersAtFroide = [
  {
    period: '2020/10',
    title: '退職',
    langAndFw: '',
    db: '',
    environment: '',
    cloudService: '',
    other: '',
    description: (
      <>
        「適応障害」の再発などもあり、休職の後退職。数か月は療養に専念。
        <br />
        体調が回復してきてからは、社会復帰に向けて自学習や個人開発にいそしむ。
      </>
    ),
  },
  {
    period: '2020/04、2020/06 ～ 2020/09',
    title: '勤怠/入店管理システム',
    langAndFw: 'Ruby / CoffeeScript / Rails',
    db: 'MySQL / Redis',
    environment: 'Git / Docker / Circle CI / Capistrano',
    cloudService: 'AWS[EC2, RDS, Cognito]',
    other: '',
    description: (
      <>
        保守案件。飲食店内で使われる管理システム。
        <br />
        ドキュメントがほぼない状態からのスタートだったため、コード解析、開発環境の
        Docker 化、 ドキュメント整備から着手し、バグ対応や既存機能改善など。
      </>
    ),
  },
  {
    period: '2019/09 ～ 2020/03',
    title: '売上/店舗/ユーザ管理システム',
    langAndFw: 'JavaScript / React / Java / Spring Boot',
    db: 'MySQL',
    environment: 'Git / Docker / Swagger',
    cloudService: '',
    other: '',
    description: (
      <>
        新規開発 ～ 保守案件。モバイルアプリとして提供しているサービスの Web
        管理システム側。
        <br />
        実装部分を担当。メインはフロントエンド担当であったものの、機能改修要件ではバックエンド側の修正も一緒に行なった時もあり。
        <br />
        復職してからの初案件であったため、はじめは上司の補助的なところから開始。段々と実装部分を任せてもらえるように。
      </>
    ),
  },
  {
    period: '2019/02末頃 ～ 2019/05',
    title: '休職',
    langAndFw: '',
    db: '',
    environment: '',
    cloudService: '',
    other: '',
    description: (
      <>
        大きく体調を崩して休職。心療内科もとい精神科で「適応障害」「不安障害」の診断がつく。
        <br />
        2019/06に時短勤務で復職。
      </>
    ),
  },
  {
    period: '2018/07 ～ 2019/02中頃',
    title: '宿泊予約システム',
    langAndFw: 'Java / Spring(+ Spring Boot) / Python',
    db: 'Amazon Aurora / Redis',
    environment: 'Git / Jenkins / Serverless Framework',
    cloudService: 'AWS[CLI, EC2, ElastiCache, Lambda, API Gateway]',
    other: 'スクラム',
    description: (
      <>
        保守案件。宿泊サービスの予約システム群。
        <br />
        実装部分を担当。既存 API にキャッシュの導入、決済に関わる API
        群の作成、社内ツールやバッチ作成など。
        <br />
        （自分にとって）はじめてのリモートチーム・スクラム体制、何度かの自社チーム体制変更、
        日々技術のキャッチアップなど、慌ただしくはありつつ学びが多かった案件。
      </>
    ),
  },
  {
    period: '2018/01 ～ 2018/06',
    title: '保険請求システム',
    langAndFw: 'PHP / CakePHP',
    db: 'MySQL',
    environment: 'Git / Docker / Circle CI / Deployer',
    cloudService: 'AWS[EC2, RDS]',
    other: 'スクラム',
    description: (
      <>
        新規開発案件。福祉系の保険請求システム。
        <br />
        実装部分を担当。既存システムを元に、一から構築して作成。フロントエンドとバックエンドは切り離されておらず、CakePHP
        でどちらも対応。
        <br />
        チーム体制が何度か変わったことに戸惑いながらも、新人なりに自分ができることを粛々と進めた。
      </>
    ),
  },
  {
    period: '2017/10 ～ 2017/12',
    title: '入社後研修',
    langAndFw: 'C# / HTML / CSS / JavaScript / PHP / Ruby / Rails',
    db: 'MariaDB / SQLite',
    environment: 'Git',
    cloudService: '',
    other: '',
    description: (
      <>
        未経験入社の社員がはじめに受講する研修。
        <br />
        10月は C# + Unity でオセロ + マインスイーパーのゲームを作成。
        <br />
        11月は PHP、12月は Ruby + Rails
        で日報システムを演習の成果物としてチームで作成。
      </>
    ),
  },
  {
    period: '2017/10',
    title: '入社',
    langAndFw: '',
    db: '',
    environment: '',
    cloudService: '',
    other: '',
    description: (
      <>
        独学でプログラミングを勉強し、全くの他業種から転職。
        <br />
        C、C++ と学んだあとは Java の勉強に励み、入社日までに Java Gold を取得。
      </>
    ),
  },
];

const personalDevelopment = [
  {
    period: '2023/07 ～ ',
    title: 'Change Of Pace（Astro 版）',
    langAndFw: 'TypeScript / Astro / UnoCSS',
    db: '',
    environment: 'Git / GitHub Actions',
    cloudService: 'Netlify -> Cloudflare[Pages]',
    other: '',
    description: (
      <>
        個人ブログサイトを Astro でリプレースしたもの。
        <br />
        フロントエンドメインで活動するようになったことで、使用技術を Node.js
        周辺に寄せたくなり、Jekyll から Astro へリプレースした。
        <br />
        デザインはリプレース前とは違い、既存テーマは使わず自作。
      </>
    ),
  },
  {
    period: '2020/12 ～ 2021/05 ※現在停止中',
    title: 'OOUI-MEMO',
    langAndFw: 'TypeScript / React / PHP / Laravel',
    db: 'MySQL',
    environment: 'Git / Docker / GitHub Actions / OpenAPI',
    cloudService: 'Heroku',
    other: '',
    description: (
      <>
        シンプルなメモアプリケーション。
        <br />
        書籍「オブジェクト指向 UI
        デザイン」のワークアウトを、デザインだけでなく実際に実装して作るまでやってみようという自分の中の企画で作っているもの。
        <br />
        構想自体は2020/08くらいからあったが、実際に積極的に活動を始めたのが2020/12頃。
        <br />
        ※他の学習などを優先して停止したまま。
      </>
    ),
  },
  {
    period: '2020/09/07 ～ 2020/09/14',
    title: 'Close to 2（計算結果が一番「2」に近い式をあてるゲーム）',
    langAndFw: 'JavaScript → TypeScript / React',
    db: '',
    environment: 'Git / GitHub Actions',
    cloudService: 'GitHub Pages',
    other: '',
    description: (
      <>
        web1week（1週間でwebサービスを作るイベント）による、お題「2」の投稿作品。
        <br />
        9/12に元々作ろうとしていたものから当作品に移行したため、実質3日ほどで作った作品。
        <br />
        後に TypeScript 化 + カスタムフックを使ったリファクタリングを行った。
      </>
    ),
  },
  {
    period: '2020/05/18 ～ 2020/05/23',
    title: 'Jigsaw Like Puzzle（ジグソーパズルっぽいパズルゲーム）',
    langAndFw: 'JavaScript → TypeScript / React',
    db: '',
    environment: 'Git / GitHub Actions',
    cloudService: 'Firebase[Hosting]',
    other: '',
    description: (
      <>
        web1week（1週間でwebサービスを作るイベント）による、お題「Like」の投稿作品。
        <br />
        canvas を扱うライブラリ Konva.js の React 版である React Konva
        というライブラリでパズル部分を構成。
        <br />
        後に TypeScript 化 + カスタムフックを使ったリファクタリングを行った。
      </>
    ),
  },
  {
    period: '2018/05 ～ 2023/07',
    title: 'Change Of Pace（Jekyll 版）',
    langAndFw: 'Ruby / Jekyll',
    db: '',
    environment: 'Git',
    cloudService: 'Netlify',
    other: '',
    description: (
      <>
        個人ブログサイト。
        <br />
        元々、新人エンジニア時代に Jekyll
        というもので何か作れるらしい、くらいのぼんやりした謎の意欲で作ったもの。
        <br />
        とはいえ、なんだかんだ記事を書くようになったのはこのおかげ。
      </>
    ),
  },
];

export { careersAtYumemi, careersAtFroide, personalDevelopment };
