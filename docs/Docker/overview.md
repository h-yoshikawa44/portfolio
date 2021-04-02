---
id: docker-overview
title: Docker - 概要
sidebar_label: Docker の概要
description: Dockerのトップページ
keywords:
  - Docker
---

![Docker logo](/img/logo-icons/docker-icon.svg)

## 概要
Docker 社が提供しているコンテナ型のアプリケーション実行環境。  
（2019年11月に Enterprise 製品群は Mirantis 社に売却）  
Docker 自体は Go 言語で書かれている。

常駐型の Docker Deamon を起動することで、Docker コンテナの操作が可能になる。

## インストール
公式サイトより。

`Community`版と`Enterprise`版があるが、Docker の基本的な機能を使用する程度であれば無償の`Community`版で良い。

### Windows(Pro)/Mac
Windows(Pro) 版で利用する際は、あらかじめ`Hyper-V`を有効化しておくこと。

プラットフォームに応じた`Docker Desktop`をダウンロードしてインストール（ダウンロード時に Docker Hub のアカウントを作成する必要がある）

この`Docker Desktop`には以下が含まれている。
- Docker Engine
- Docker CLI Client
- Docker Compose
- Notary
- Kubernetes
- Credential Helper

### Linux
Linux ディストリビューションに応じたパッケージをダウンロードしてインストール。

## 種別
### Docker Engine - Community
旧：Docker Community Edition(Docker CE) に位置する？
- 無償版のDocker
- 基本的なDockerの機能は利用できる
- さらにStable版とEdge版に分かれる
  - Stable版　安定版・4半期ごとのリリース
  - Edge版　先行版・1か月ごとのリリース

### Docker Enterprise
旧：Docker Enterprise Edition(Docker EE) に位置する？
- 有償版Docker
- Mirantis社が認定したコンテナやプラグインが利用可能
- プライベートリポジトリが利用できる
- イメージのセキュリティスキャンが行われる

## リンク
### 公式
- [公式サイト・ドキュメント](https://docs.docker.com/)

### 教材
- [Udemy講座 - ゼロからはじめる Dockerによるアプリケーション実行環境構築](https://www.udemy.com/docker-k/)