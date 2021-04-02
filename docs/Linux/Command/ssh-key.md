---
id: linux-ssh-key
title: Linux - SSH認証鍵生成コマンド
sidebar_label: SSH認証鍵生成コマンド
description: Linuxの認証鍵生成手順まとめ
keywords:
  - Linux
  - SSH認証鍵
---

## 概要
SSH 認証の方法の1つである公開鍵認証における、公開鍵と秘密鍵の生成方法。

## 認証鍵の生成
### 所持している鍵の確認
通常は`~/.ssh`配下に鍵を持っておくことが多いので、この場所を確認するとよい。

### 生成
`-C`オプション（コメント）には使用用途のアカウントに使用しているメールアドレスをつけるとよさそう。
```bash
$ ssh-keygen -t rsa -C "自分のメールアドレス" # コメントオプションにメールアドレスを使用する例
```

コマンド実行時には必要に応じて保存先ファイル名とパスフレーズを入力。  
未入力のまま Enter で進めても作成できるが、保存先ファイル名に関しては使用用途に応じた名称（`~/.ssh/git_rsa`など）をつけておくとよい。  
なお、保存先ファイル名のデフォルトは`id_rsa`。
```bash
Enter file in which to save the key: # 保存先ファイル名
Enter passphrase (empty for no passphrase): # パスフレーズ
Enter same passphrase again: # パスフレーズ(確認用)
```

これで公開鍵と秘密鍵が作成される。見分け方は`.pub`拡張子がついている方が公開鍵。

### 秘密鍵の権限設定
この権限設定をしておかないと、鍵を使用時に権限エラーが出るので正しい権限に設定しておく。
```bash
$ chmod 600 秘密鍵名
```

## 認証鍵の設定
### SSHクライアントに登録されている鍵の確認
```bash
$ ssh-add -l
```
もし`Could not open a connection to your authentication agent.`が表示された場合は以下のコマンドで ssh-agent を起動させる。
```bash
$ eval "$(ssh-agent)"
```

### SSHクライアントに秘密鍵を登録
```bash
$ ssh-add 秘密鍵名
```

登録後に、再度登録されている鍵を確認しておくとよい。  
登録した鍵が表示されればOK。`The agent has no identities.`の場合はまだ登録されていない。

## 認証鍵の使用
使用用途に応じた設定をする。

基本的には公開鍵の内容をコピーしてサービス側に登録し、`~/.ssh/config`へ秘密鍵を使用したSSH接続設定を記述する。

接続確認をするには以下のコマンドを実行する。
ホスト名は`~/.ssh/config`に記述したホスト名を指定。
```bash
$ ssh -T ホスト名
```