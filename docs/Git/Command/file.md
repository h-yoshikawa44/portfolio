---
id: git-cli-file
title: Git - ファイル操作コマンド
sidebar_label: ファイル操作コマンド
description: Gitのファイル操作に関するコマンドまとめ
keywords:
  - Git
  - stash
  - restore
  - checkout
  - mv
  - rm
---

- 検証バージョン：git version 2.25.0.windows.1

## 一時退避
後入れ先出し方式の操作。  
参考：[Qiita - 色々な git stash](https://qiita.com/akasakas/items/768c0b563b96f8a9be9d)

### ファイルの変更を一時退避
```bash
$ git stash save # 一時退避

$ git stash save "メッセージ" # メッセージ付きで一時退避
```

### 一時退避した履歴の確認
`show`で指定する履歴の番号は`list`で確認できる番号になる。
```bash
$ git stash list # 一時退避した履歴一覧の確認

$ git stash show N # N番目に退避した内容の変更ファイルを確認

$ git stash show -p N # N番目に退避した内容の変更ファイル差分を確認
```

### 退避した内容の復元
```bash
$ git stash pop # 最新の退避した内容を復元（退避履歴を削除）
$ git stash pop N # N番目に退避した内容を復元（退避履歴を削除）

$ git stash apply # 最新の退避した内容を復元（退避履歴は削除しない）
$ git stash apply N # N番目に退避した内容を復元（退避履歴は削除しない）
```

### 退避した履歴の削除
```bash
$ git stash drop # 最新の退避した内容を削除
$ git stash drop N # N番目に退避した内容を削除

$ git stash clear # 前退避履歴の削除
```

## ファイルの状態を戻す
コミットIDを指定しないと直前のコミットの状態に戻す。
```bash
$ git restore ファイル名

$ git checkout ファイル名 # 旧式

$ git restore --source コミットID ファイル名 # 指定コミットでの状態に戻す
```

## ファイルの移動 + ステージングにアップ
ファイル名の変更としても使用できる。
```bash
$ git mv 旧ファイル 新ファイル
```
ちなみにこのコマンドは以下のコマンドと同様の動きをする。
```bash
$ mv 旧ファイル 新ファイル
$ git rm 旧ファイル
$ git add 新ファイル
```

## ファイルの削除 + ステージングにアップ
```bash
$ git rm ファイル名 # ローカルリポジトリおよびワークツリーからファイルを削除

$ git rm -r ディレクトリ名 # ローカルリポジトリおよびワークツリーからディレクトリとファイルを削除

$ git rm --cached ファイル名 # ローカルリポジトリからのみファイル削除
# addやcommitしてしまったファイルを除外するのに使用）
```
