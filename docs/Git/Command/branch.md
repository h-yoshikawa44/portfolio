---
id: git-cli-branch
title: Git - ブランチ操作コマンド
sidebar_label: ブランチ操作コマンド
description: Gitのブランチ操作に関するコマンドまとめ
keywords:
  - Git
  - branch
  - switch
  - checkout
---

- 検証バージョン：git version 2.25.0.windows.1

## ブランチの基本操作
### ブランチの確認
```bash
$ git branch # ローカルブランチの一覧表示

$ git branch -r # リモートブランチの一覧表示

$ git branch -a # ローカル、リモートブランチの一覧表示
```

### ブランチの作成
作成元になるブランチを省略した場合は、現在のブランチを元に作成する。  
また、作成元になるブランチはリモートのブランチも指定可能（リモートブランチは`remotes/リモート名/ブランチ名`の形式）
```bash
$ git switch -c 作成するブランチ 作成元になるブランチ

$ git checkout -b 作成するブランチ 作成も元になるブランチ # 旧式
```

### ブランチの切り替え
```bash
$ git switch 切り替え先ブランチ

$ git checkout 切り替え先ブランチ # 旧式
```

### ブランチの削除
```bash
$ git branch -d 削除するブランチ # マージ済みのローカルブランチの削除

$ git branch -D 削除するブランチ # マージ状況関係なくローカルブランチの強制的な削除

$ git push --delete origin 削除するブランチ # リモートブランチの削除
```