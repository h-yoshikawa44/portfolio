---
id: git-cli-tag
title: Git - タグ操作コマンド
sidebar_label: タグ操作コマンド
description: Gitのタグ操作に関するコマンドまとめ
keywords:
  - Git
  - tag
  - push
---

- 検証バージョン：git version 2.25.0.windows.1

## タグの基本操作
### タグの一覧確認
```bash
$ git tag

$ git tag -n # 注釈も含めたタグ一覧表示
```

### タグと紐づけされたコミットの確認
```bash
$ git show タグ名
```

### タグの作成
コミットIDを省略した場合は、現在HEADがさしているコミットが対象になる。
```bash
$ git tag タグ名 コミットID # 軽量版タグを作成

$ git tag -am "注釈" タグ名 コミットID # 注釈付きタグを作成
```

### タグ情報をリモートにアップ
```bash
$ git push リモート名 タグ名

$ git push リモート名 --tags # タグを一斉送信
```

### タグの削除
```bash
$ git tag -d タグ名
```