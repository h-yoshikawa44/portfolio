---
id: git-cli-setting
title: Git - 設定・初期化コマンド
sidebar_label: 設定・初期化コマンド
description: Gitの設定・初期化に関するコマンドまとめ
keywords:
  - Git
  - config
  - init
  - remote
  - clone
---

- 検証バージョン：git version 2.25.0.windows.1

## バージョン確認
```bash
$ git --version
```

## 設定
Git の設定はローカルとグローバルがあり、ローカルはそのリポジトリごとの設定であるのに対して、グローバルはどのリポジトリでも共通に使われる設定。

ローカルの設定は`(リポジトリトップ)/.git/config`に。
グローバルの設定は`~/.gitconfig`にある。

### 設定の確認
```bash
$ git config --list # ローカル設定一覧確認
$ git config --global --list # グローバル設定一覧確認

$ git config 設定値名 # user.nameなどを指定して特定の設定情報を確認
$ git config --global 設定値名
```

### 設定の登録・更新
```bash
$ git config 設定値名 "設定値" # ローカル設定
$ git config --global 設定値名 "設定値" # グローバル設定
```

なお、直接設定ファイルの中身を書き換えることもできる。

### エイリアスの登録
```bash
$ git config alias.エイリアスコマンド gitコマンド # ローカルエイリアスコマンド
$ git config --global alias.エイリアスコマンド gitコマンド # グローバルエイリアスコマンド

$ git config --global alias.ci commit # 設定例
```

## 初期化
### ローカルリポジトリの作成
以下のコマンド実行で`.git`が作成される。

`Reinitialized existing Git repository in ローカルリポジトリのパス`と表示されるときは、すでに`.git`がある。
```bash
$ git init
```

### リモートリポジトリの登録
リモート名はデフォルトの`origin`で登録することが多い。登録されたリモート名は`git push`する時などに使用する。  
なお、リモートリポジトリは複数登録可能。
```bash
$ git remote add リモート名 リモートリポジトリのURL
```

### リモートリポジトリの確認
```bash
$ git remote # リモート名を表示
$ git remote -v # リモートリポジトリURLを表示
```

### リモートリポジトリの操作
```bash
$ git remote rename 旧リモート名 新リモート名 # リモート名の変更
$ git remote rm リモート名 # リモートリポジトリの削除
```

### リモートリポジトリのクローン
リモートリポジトリ URL については https と SSH の二種類がある。どちらもリポジトリトップから確認できる。
```bash
$ git clone クローンする場所のパス リモートリポジトリURL
```