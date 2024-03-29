# CHANGELOG
h-yoshikawa44's Portfolio の大まかな機能変化記録

## 2023-10-14
### Changed
- 改正電気通信事業法に対応して、プライバシーポリシーを更新(#74)

### Updated
- Node.js、各種ライブラリのアプデ対応(#69)
  - Node.js: 18.15.0 -> 18.17.1
  - Docusaurus: 2.4.0 -> 2.4.3

### Data Update
- ポートフォリオ更新(#72)
  - スキル - 最近でも使っている技術の内容更新
  - 経歴（個人開発）にブログの情報追加
  - プロダクト - ブログリプレースのリポジトリリンク追加

### Development Changed
- yarn から npm へ移行(#69)
- 独自ドメインを Google Domains から Cloudflare Registrar に移管(#67)
- ホスティング環境を Netlify から Cloudflare Pages に移行(#68)

## 2023-07-09
### Data Update
- ポートフォリオ更新 - ブログリプレース反映(#65)
  - スキル - Jekyll, Astro の内容更新
  - プロダクト - 個人ブログの内容更新

## 2023-07-03
### Data Update
- ポートフォリオ更新 - 2023/07(#63)
  - スキル - Astro 追加
  - 経歴 - ECサイト案件の内容更新
  - Bluesky アカウントリンク追加

## 2023-05-04
### Update
- ライブラリアプデ(#62)
  - Node.js：16.13.0 → 18.15.0
  - Docusarus：2.0.0-beta.13 → 2.4.0

### Development Changed
- Google AnalyticsのTracking IDをGA4に移行(#59)

## 2022-11-03
### Data Updated
- ポートフォリオ更新 - 2022/11(#55)
  - スキルで最近ご無沙汰のやつはわけた
  - スキルに IntelliJ IDEA と Kotlin を追加

## 2022-09-03
### Data Updated
- ポートフォリオ更新 - 2022/09(#53)
  - AWS SAA更新を反映
  - 細かな説明追記

## 2022-07-03
### Data Updated
- ポートフォリオ更新 - 2022/07(#51)
  - スキル更新
  - 資格に HTML プロフェッショナル認定試験 レベル1を追加
  - 経歴に Slack Bot 開発を追加

## 2022-05-29
### Data Updated
- ポートフォリオ更新 - 2022/06(#49)
  - プロフィール更新

## 2022-04-21
### Data Updated
- ポートフォリオ更新 - 2022/04(#47)
  - プロフィール更新
  - 経歴に案件を追加

## 2022-03-05
### Fixed
- MyProducts のカードの文字が隠れる問題修正(#45)

## 2022-02-27
### Data Updated
- ポートフォリオ更新 - 2022/03(#43)
  - プロフィール更新
  - 経歴にゆめみを追加

## 2022-02-03
### Data Updated
- ポートフォリオ更新 - 2022/02(#40)
  - プロフィール更新
  - MyProducts
    - Country quiz（devChallenges - Front-end 編）
    - Weather app（devChallenges - Front-end 編）

## 2022-01-05
### Fixed
- カードコンポーネントの画像 margin を調整(#37)
- 画像最適化対応(#33)

### Data Updated
- ポートフォリオ更新 - 2022/01(#37)
  - MyProducts
    - Portfolio（devChallenges - Responsive Web 編）

## 2021-12-16
### Fixed
- 本番環境のスキル＆経歴ページで、各種アイコン画像が読み込めなくなっていた問題修正(#29)

## 2021-12-15

### Updated
- React: 17.0.1 → 17.0.2(#29)
- Docusaurus: 2.0.0-beta.0 → 2.0.0-beta.13(#29)

### TIL Docs Removed
- 仕切り直したいので、一旦全ページ削除(#3)

### Development Changed
- コミットメッセージの type を入れ替えた(#29)
  - ポートフォリオ更新：update → data update
  - ライブラリアプデ： lib update → update

## 2021-11-25
### Changed
- MyProductsのカードの影と説明文部分の高さ調整(#27)

### Updated
- Node.js: 14.17.3 → 16.13.0

### Data Updated
- ポートフォリオ更新 - 2021/11 後期(#27)
  - MyProducts
    - Recipe page（devChallenges - Responsive Web 編）
    - My Gallery（devChallenges - Responsive Web 編）
    - Checkout Page（devChallenges - Responsive Web 編）
    - Edie homepage（devChallenges - Responsive Web 編）

### Development Added
- ESLint・Prettier の Pre Commit 設定(#27)

## 2021-11-01
### Updated
- Node.js: 14.16.0 → 14.17.3

### Data Updated
- ポートフォリオ更新 - 2021/11(#25)
  - MyProducts
    - Change Of Pace（※ブログ自体は以前よりあったが、このページには載せてなかった）
    - 404 Not Found（devChallenges - Responsive Web 編）
    - My team page（devChallenges - Responsive Web 編）
    - Interior Consultant（devChallenges - Responsive Web 編）

## 2021-09-28
### Data Updated
- ポートフォリオ更新 - 2021/10(#23)

## 2021-08-18
### Data Updated
- ポートフォリオ更新 - 2021/08 中間(#21)
  - アカウントリンクに Wantedly を追加
  - web1week 作品の技術構成を更新（TypeScript 化したので）

## 2021-08-01
### Changed
- ダークモード時のカラースタイル調整(#19)
  - ナビゲーション：ロゴアイコン、active 色、hover 色
  - hero バナー：テキスト色
  - 一部言語アイコン：白枠線
  - TIL Docs：
    - サイドバー：active 色
    - テーブルコンテンツ：active 色、hover 色

### Data Updated
- ポートフォリオ更新 - 2021/08(#17)
  - MyProducts：
    - Random quote generator（devChallenges - Front-end Developer 編）

## 2021-07-04
### TIL Docs Removed
- Web に関するページ削除(#3)

## 2021-06-30
### Data Updated
- ポートフォリオ更新 - 2021/07(#13)
  - MyProducts：
    - Button component（devChallenges - Front-end Developer 編）
    - Input component（devChallenges - Front-end Developer 編）
    - Windbnb（devChallenges - Front-end Developer 編）
    - TodoApp（devChallenges - Front-end Developer 編）

## 2021-05-14
### Updated
- Docusaurus: 2.0.0-alpha.72 → 2.0.0-beta.0 (#10)

### Changed
- classnames を clsx に移行(#10)
- SVG アイコン使用時、インライン SVG 形式になるよう修正(#10)

## 2021-05-09
### Data Added
- スキル・経歴ページに所持資格の欄を追加(#8)

### Development Added
- ESLint + Prettier 導入(#7)

## 2021-05-01

### Changed
- 経歴の構成を会社ごとと個人開発とで分離(#5)

### Fixed
- 一部影スタイルの修正(#5)

### Data Updated
- ポートフォリオ更新 - 2021/05(#4)

## 2021-04-02
### Updated
- Docusaurus: 2.0.0-alpha.65 → 2.0.0-alpha.72(#1)
- React: 16.12.0 → 17.0.2 (#1)

### Development Chaged
- TIL リポジトリから分離（当リポジトリ作成）

## 2021-02-15
### Changed
- 独自ドメインを新ドメイン（h-yoshikawa44.com）に変更
- ドメイン変更に伴い、サイトタイトルを変更（h-yoshikawa44's Portfolio）
- サイト構成を変更（TIL 活動というより、ポートフォリオサイトであることを主目的とした）
- OGP 画像を更新

## 2021-02-14
### Changed
- 各種技術活動アカウント ID 変更に伴うリンク修正

## 2020-10-12
### Updated
- Docusaurus: 2.0.0-alpha.61 → 2.0.0-alpha.65

## 2020-08-02
### Updated
- Docusaurus: 2.0.0-alpha.54 → 2.0.0-alpha.61

## 2020-06-07
### Added
- MyProducts ページ追加

## 2020-05-02
### Updated
- Node.js: 10系 → 12.10.0
- Docusaurus: 2.0.0-alpha.40 → 2.0.0-alpha.54

## 2020-04-19
### Downgraded
- Docusaurus: 2.0.0-alpha.50 → 2.0.0-alpha.40
  ※コピーボタン、サイトマップバグのため

## 2020-04-18
### Updated
- react-script: 3.0.1 → 3.4.1

## 2020-04-12
### Added
- OGP 画像設定

### Updated
- Docusaurus: 2.0.0-alpha.40 → 2.0.0-alpha.50

## 2020-04-11
### Added
- 独自ドメイン割り当て
- サイトマップ導入

### Development Added
- Google Analytics 導入
- Google Search Console 導入

## 2020-01-19
### Development Added
- Textlint 導入

## 2020-01-13
- （TIL リポジトリ内）でサイト作成して Netlify で公開
