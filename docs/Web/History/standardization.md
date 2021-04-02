---
id: web-standardization
title: Web - Web の標準化
sidebar_label: Web の標準化
description: Webの仕様策定から、RESTの誕生、ハイパーメディアフォーマットの誕生まとめ
keywords:
  - Web
  - 歴史
---

## Web の仕様策定
Mosaic の登場により、爆発的に普及した Web 。
1990年代半ばから後半にかけて、元々使用されていた学術的コンテンツだけでなく、ニュースや娯楽メディアの参入、Microsoft や IBM などの大手ベンダーの参画などが起こった。

そのなかで Web を構成する技術、特に`HTTP`、`URI`、`HTML`の標準化が求められた。
これらは各社のサーバ、クライアント間で利用されるため、共通の仕様で扱えるような相互運用性が必要不可欠だった。

Web 以前のインターネット標準はすべて IETF（ Internet Engineering Task Force ）の RFC（ Request for Comments ）として定められてきた。実際に HTTP と URI、バージョン2までの HTML は RFC として定義された。  
しかし、 Web の急速な普及により IETF での仕様策定が追いつかず、各社の実装がバラバラで相互運用性が欠ける状態になってしまった。

そこで、Web 技術を実装している各社が集まって標準化を行う団体として、1994年に Tim 氏を中心として W3C（ World Wide Web Consortium ）が設立された。  
W3C では HTML、XML、HTTP、URI、CSS（ Cascading Style Sheets ）などの標準化が行われた。

当時の状況としては、Netscape Navigator と Internet Explorer が独自に拡張を続けた結果、両社での HTML、CSS のレンダリング結果が大きく異なってしまっていた。そのため、開発者がそれぞれのブラウザごとの対応を必要とされる事態になっていた。  
この状況はブラウザ戦争とも呼ばれることがある。現在はブラウザごとの差分は解消されてきているものの、一部ブラウザでは独自の対応が必要になるなど、ブラウザ対応として名残がある。

## REST の誕生
カリフォルニア大学アーバイン校に、Web の創成期から各種ソフトウェアの実装に関わっていた <ruby><rb>Roy</rb><rt>ロイ</rt></ruby> <ruby><rb>Fielding</rb><rt>フィールディング</rt></ruby> という人物がいた。  
Fielding 氏が関わっていたものの代表例として、Apache httpd や libwww-perl（ Perl 4向け HTTP クライアントライブラリ）、www-stat（ HTTP サーバアクセスログ解析ツール）など。  
その実装経験を活かして、 Berners-Lee 氏らとともに HTTP 1.0 と HTTP 1.1 の仕様作成に関わった。

当時、Fielding 氏は大学院生であったことから、自身の研究として Web がなぜここまで成功したのか、なぜこれほど大規模なシステムとなりえたのかをテーマとした。  
それらについてソフトウェアアーキテクチャの観点から分析し、1つのアーキテクチャスタイルとしてまとめた。  
そして2000年、このアーキテクチャスタイルを`REST`（ Representational State Transfer ）と名付け、博士論文として提出した。

## 様々なハイパーメディアフォーマットの誕生
初期の Web では HTML が唯一のハイパーメディアフォーマットであったが、Web の普及に伴い HTML では対応できないケースが見られるようになった。そこから新しいハイパーメディアが誕生していった。

代表例として、  
HTML の構造はそのままとして HTML に様々な意味を持たせることができる技術の microformats 。  
Web ページの新着情報をサーバで配信し、専用のプログラムでそれをチェックするための RSS（ RDF Site Summary、Rich Site Summary、Really Simple Syndication）
など。

RSS に関しては複数バージョンが乱立し混乱を招いたため、最終的には IETF で Atom が標準化された。

また、単純なデータフォーマットがいくつか提案され、そのなかで JSON がデファクトスタンダードとなった。  
HTML や Atom は XML をベースにした構造化文書のためのマークアップ言語であるため、ただデータを記述するという用途においては表記が冗長ということで、こういったデータフォーマットが提案された。