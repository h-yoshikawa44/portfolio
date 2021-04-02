---
id: git-ignore
title: Git - .gitignore
sidebar_label: .gitignore
description: Gitの.gitignoreファイルの説明
keywords:
  - Git
---

## 概要
git の管理外にしたいファイル名やディレクトリ名を記述するファイル。
主にパスワードなどの機密情報を記述したファイルや、メンバーと共有しない個人的な設定ファイルなどが対象になる。
- `#`　#から始まる行はコメント
- `/`　ルートディレクトリ
- `ディレクトリ名/` 　指定ディレクトリ以下を管理除外
- `*`　ワイルドカード（例 `/*/*.css`　ルート以下の任意ディレクトリ以下の css ファイル）