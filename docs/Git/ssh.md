---
id: git-ssh
title: Git - SSH設定
sidebar_label: SSH設定
description: GitのSSH接続設定手順まとめ
keywords:
  - Git
---

- 検証バージョン：git version 2.25.0.windows.1

## SSH 認証に使用する鍵の用意
※SSH 認証鍵生成については[こちら](/docs/Linux/Command/linux-ssh-key)を参照。

## SSH 接続設定
### 秘密鍵の設定
`~/.ssh/config`に SSH 接続設定を記述。

GitLabの例。
```bash
Host gitlab.com
  User git
  Port 22   # 指定のポート番号
  HostName gitlab.com
  TCPKeepAlive yes
  identitiesonly yes
  identityFile ~/.ssh/git_rsa  # 秘密鍵のパス
  ChallengeResponseAuthentication no  # ブルートフォース攻撃対策
```

GitHubの例。
```bash
Host github.com
  User git
  HostName github.com
  TCPKeepAlive yes
  Identitiesonly yes
  IdentityFile ~/.ssh/git_rsa
  ChallengeResponseAuthentication no
```

### 接続方式の設定・確認
```bash
$ git remote -v
```

```bash
# httpsの場合
origin  https://github.com/△△××/◯◯△△.git (fetch)
origin  https://github.com/△△××/◯◯△△.git (push)

# sshの場合
origin git@gitlab.com:△△××/◯◯△△.git (fetch)
origin git@gitlab.com:△△××/◯◯△△.git (push)
```

SSH方式になってない場合は、SSH方式のURLに変更する。
```bash
# GitLabの例
$ git remote set-url origin git@gitlab.com:(ユーザー名)/(リポジトリ名)

# GitHubの例
$ git remote set-url origin git@github.com:(ユーザー名)/(リポジトリ名)
```

### 公開鍵の設定
#### 使用する公開鍵の内容をコピー
```bash
$ pbcopy < ~/.ssh/公開鍵名
```
もしくは`cat`コマンドなどで表示したものをコピー。

#### Git アカウントに公開鍵を登録
GitLab のやり方。
- Settings → SSH keys へ
  - keys に先ほどコピーした公開鍵の内容をペースト
  - title は自分でわかりやすいものにしておくとよい
  - Add keys で追加

GitHub のやり方。
- Settings → SSH and GPG keys へ
  - New SSH key を選択
  - Title は自分でわかりやすいものにしておくとよい
  - Key に先ほどコピーした公開鍵の内容をペースト
  - Add SSH key で追加

### 接続確認
ホスト名は`~/.ssh/config`に記述したHost。
```bash
$ ssh -T ホスト名
```

初回の場合のみ本当に接続してよいかと聞かれる。  
問題なければ yes と入力（`~/.ssh/known_hosts`に追加される）

接続して`Welcome to GitLab, (登録名)!`のように表示されれば接続成功。

もし`Bad owner or permissions on .ssh.config`のエラーが出た場合は、`~/.ssh/config`の権限を設定する。
```bash
$ chmod 700 ~/.ssh/config
```