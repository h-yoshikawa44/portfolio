---
id: web-uri-url-urn
title: Web - URI と URL と URN
sidebar_label: URI と URL と URN
description: URI、URL、URNの違いまとめ
keywords:
  - Web
  - URI
  - URL
  - URN
---

## それぞれの違い
それぞれの正式名称は以下の通り。
- `URI`：Uniform Resource Identifier（リソースを識別するもの）
- `URL`：Uniform Resource Locator（リソースの場所を示すもの）
- `URN`：Uniform Resource Name（リソースの名前を示すもの）

`URI`と`URL`はほぼ同じものとして扱われることもあるが、正確には`URI`は`URL`と`URN`を総称する名称である。

### URL
以下のようなアドレスは`URL`とも言える（構文説明については [Web - URI の基本](/docs/Web/Uri/web-uri-basic) を参照）
```
https://h-yoshikawa44.com/docs/Web/Uri/web-uri-url-urn
```

このアドレスにより、リソースの場所を特定できる。  
しかし、この`URL`にはドメインを更新しなかったり、サーバが障害などにより変更になったりするとアクセスできなくなるという問題を抱えている。

### URN
`URL`が抱える問題を解消するために策定されたもの。  
`URN`を使用すると、リソースにドメイン名とは独立した名称がつけられる。

例として、書籍は ISBN という世界的統一されている ID をそれぞれ持っている。
```
urn:isbn:9784774142043
```

ただ、以下の理由から`URN`は Web 上で普及しているとは言えない。
- **URN は取得できない**  
  URL のようにサーバ名やプロトコル名が入っていないので、URI としてリソースを取得できない
- **URL が十分永続的になっている**  
  リソースと URL はなるべく永続的にアクセスできるようにすべきという考え方の普及により、URN を使うまでもないことが多い





