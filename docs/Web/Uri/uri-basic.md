---
id: web-uri-basic
title: Web - URI の基本
sidebar_label: URI の基本
description: URIの基本概要と構文まとめ
keywords:
  - Web
  - URI
---

## URI の概要
Uniform Resource Identifier の略で、統一リソース識別子を意味する。  
すなわち「リソースを統一的に識別するID」のことを指す。

URI を使用することで、Web 上に存在するすべてのリソースを一意に指し示すことができる。  
そのため、URI さえあれば、全てのリソースに容易にアクセスすることが可能になる。

## URI の構文
URI の仕様は RFC 3986 。

### シンプルな URI の例
```
https://h-yoshikawa0724-til-engineer.com/docs/Web/Uri/web-uri-basic
```

この URI を構成する要素は以下の通り。
- URI スキーム：https
- ホスト名：h-yoshikawa0724-til-engineer.com
- パス：/docs/Web/Uri/web-uri-basic

#### URI スキーム
URI スキーム（ URI Scheme ）は、一般的にその URI が利用するプロトコルを示すもの。  
URI スキームとその後ろに続く部分は`://`で区切られる。`:`がスキームとその後ろとの区切り、`//`がユーザ情報とホスト名の開始を告げるもの。

主な種類として以下のようなものがある。
- http：HTTP で Web のリソースにアクセス
- https：SSL / TLS で暗号化された状態で Web のリソースにアクセス
- ftp：ファイル送受信
- file：コンピュータのファイルシステムにアクセス

#### ホスト名
DNS（ Domain Name System ）で名前解決できるドメイン名、もしくは IP アドレス。  
インターネット上で必ず一意となる。

#### パス
ホスト名の後に続く、階層を示すもので、そのホスト上のリソースを一意に指し示す。

### 複雑な URI の例
```
https://h-yoshikawa:pass@h-yoshikawa0724-til-engineer.com:80/search?type=web&word=test#n10
```

この URI を構成する要素は以下の通り。
- URI スキーム：https
- ユーザ情報：h-yoshikawa:pass
- ホスト名：h-yoshikawa0724-til-engineer.com
- ポート番号：80
- パス：/search
- クエリパラメータ：type=web&word=test
- URI フラグメント：#n10

#### ユーザ情報
このリソースへアクセスする際に利用するユーザ名とパスワード。  
ユーザ名とパスワードの間は`:`で区切る。その後ろに`@`で区切り、ホスト名が続く。

#### ポート番号
ホスト名とポート番号はホスト情報を示すもので、この両者間は`:`で区切るようになっている。  
このホストにアクセスする際のプロトコルで用いる TCP のポート番号を示す。  
ポート番号を省略した際は、各プロトコルのデフォルト値が使われるようになっており、HTTP の場合は80番がデフォルト。

#### クエリパラメータ
ホスト情報、もしくはパスの後ろに`?`で続く、名前=値形式のクエリ。  
クエリが複数ある際は、`&`で連結される。

この1つ以上のクエリの集合を`クエリパラメータ（ Query Parameter ）`もしくは`クエリストリング（ Query String ）`と呼ぶ。

使用例として、検索機能に検索キーワードを渡すなど、クライアントで動的に URI を生成する時に利用する。

#### URI フラグメント
`#`で始まる文字列を`URIフラグメント（URI Fragment ）`と呼ぶ。  
URI フラグメントの前までの文字列で表現する URI が指し示すリソース内部の、さらに細かな部分を指定する時に用いる。