---
id: git-overview
title: Git - 概要
sidebar_label: Gitの概要
description: Gitのトップページ
keywords:
  - Git
---

![Git logo](/img/logo-icons/git-icon.svg)

## 概要
ファイルのバージョン管理システム。
- 最新のバージョンが分かる
- いつ・だれが・何を 編集したのかわかる
- 前のバージョンにも戻せる

ホスティングサービスにはいかのようなものがある。
- GitHub
- GitLab
- BitBucket

## 基本的な使い方
### リポジトリの用意
1. Git のホスティングサービスでリポジトリを作成
2. そのリポジトリを`git clone`でローカルにクローン

or

1. Git 管理したいプロジェクトルートで`git init`して、ローカルリポジトリを作成
2. `git remote add リモート名 リモートリポジトリのURL`で連携させるリモートリポジトリを設定

### 作業内容をリポジトリにアップ
1. 作業用ブランチを作り、そこで作業
2. 作成した成果物を`git add`でステージングにあげ、`git commit`でコミット
3. `git push`でコミットした内容をリモートリポジトリにアップ

## リンク
### 公式
- [公式サイト](https://git-scm.com/)

### 教材
- [Progate - Git](https://prog-8.com/languages/git)
- [Udemy - Git： もう怖くないGit！チーム開発で必要なGitを完全マスター](https://www.udemy.com/course/unscared_git/)
- [【永久保存版】Gitのあらゆるトラブルが解決する神ノウハウ集を翻訳した](https://blog.labot.jp/entry/2019/07/01/183204)　※[GitHub - git-flight-rules](https://github.com/k88hudson/git-flight-rules)の翻訳