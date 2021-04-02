---
id: docker-image
title: Docker - イメージ
sidebar_label: イメージ
description: Dockerのイメージの概要と、イメージに関する概念まとめ
keywords:
  - Docker
  - イメージ
---

## イメージ
コンテナ作成の土台となるもの。コンテナ環境を作る上での設定などを記述したファイル群を指す。  
公式からや、他の開発者によるイメージが提供されているので、それらを利用すると良い。また、そのイメージをさらに改良することもできる。

イメージ上のデータは複数の読み取り専用のレイヤで構成されている。  
1つのコマンド実行につき1つのレイヤーが追加されていく感じ。

Docker イメージのレイヤ。
- レイヤー４　←↓読み取り専用
- レイヤー３
- レイヤー２
- レイヤー１

コンテナのレイヤ。
- コンテナレイヤー　←読み書き可能
- レイヤー４　←↓読み取り専用
- レイヤー３
- レイヤー２
- レイヤー１

### Dockerfile
イメージの元となるファイル。  
各種パッケージや言語のインストール、環境変数の設定などを定義できる。  
また、元になるイメージの指定をすることで、既存のレイヤーに新しくレイヤーの追加ができる。

書き方は[Dockerfile ページ](/docs/Docker/docker-image)参照。

Dockerfile から自分でイメージを作成することを`イメージビルド`と呼ぶ。

### Docker Hub
#### 概要
[Docker Hub](https://hub.docker.com)

Docker イメージのレジストリサービス。  
自分で作成したイメージの公開、公開されているイメージの検索、ダウンロードを行うことができる。

一から Dockerfile を書いてイメージを作成するのは難しいため、Docker環境 を作る際はまずここでイメージを検索してみると良い。

#### 自分で作成したイメージを公開
- Docker アカウントを作成
- Docker Hubにログイン
- Create Repository
  - 必要事項を入力
  - 無料版の場合、private は1つのみ
- Docker Hubへイメージを push
  - `$ docker login` でレジストリサーバへログイン
  - `$ docker tag`でタグ付けのルールに沿ってタグをつけておく
    - Docker ID/イメージ名:タグ名
  - Docker Hub に push する
    - `$ docker push Docker ID/イメージ名:タグ名`

#### Automated Build（自動ビルド）
GitHub や Bitbucket といったソースコードのホスティングサービスでビルドコンテキスト（ Dockerfile やその他のビルドに必要なファイル群）を管理。その上で、リポジトリ上のビルドコンテキストの内容が変更された場合に自動的にビルドを実行する仕組み。

リンクさせるまでの流れ（初回）
- ホスティングサービスで、Docker イメージ用の Git リポジトリを用意
- Git クライアントを用意
- Docker Hub のアカウント画面
  - Create → Create Automated Build
  - Link Accounts を選択
  - どのホスティングサービスとリンクするか選択
  - リンク方法を選択（Public and Private の方が推奨）
  - Git のホスティングサービスにログイン
  - Authrize Docker を選択

リンク後に Docker Hub リポジトリの作成。
- Docker Hub のアカウント画面
  - Create → Create Automated Build
  - リポジトリを選択
  - Docker Hub としてのリポジトリを作成
    - Push Type
    - Name
    - Docker Lacation
    - Docker Tag