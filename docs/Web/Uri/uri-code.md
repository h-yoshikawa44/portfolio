---
id: web-uri-code
title: Web - URI の文字
sidebar_label: URI の文字
description: URIで使用できる文字やエンコーディング、スキームまとめ
keywords:
  - Web
  - URI
---

## 使用できる文字
### 基本仕様
URI 仕様では、以下の文字を使用できると定められている。
- アルファベット：A-Za-z
- 数字：0-9
- 記号：-.~:@!$&'()

これらは ASCII（ American Standard Code for Information Interface ）文字であり、それ以外の文字は使用できない。つまり、日本語の文字を直接入れることはできない。  
ASCII 以外の文字を URI に含めたい場合は、`%エンコーディング（ %-Encoding ）`という方式を用いる。

### %エンコーディング
ASCII 以外の文字をエンコードすることで、URI に含めることが可能になる。

例として、Wikipedia の「あ」のページ。  
ブラウザ上のアドレス欄には、以下のように日本語で表示される。
```
https://ja.wikipedia.org/wiki/あ
```
これは見た目上の URI であり、実際には以下のような文字列に変換されて、ブラウザとサーバ間でやり取りが行われている。
```
https://ja.wikipedia.org/wiki/%E3%81%82
```
これは「あ」が UTF-8 では 0xE3 0x81 0x82 の3バイトから構成されるため、このような変換になる。

%エンコーディングでは、UTF-8 の文字を構成するバイトそれぞれを「%xx」（ xx は16進数）で記述して、URI に使用できない文字を表現する。  
（なお、Web サービスによっては、UTF-8 以外の文字エンコーディングを使用した URI も利用されていることがまれにある。）

一般的に URI ではアルファベットの大文字小文字を区別するが、%エンコーディングで使用する文字については、どちらでも同じ意味を持つようになっている。ただし、URI の仕様としては、大文字の使用を推奨。

また、「%」の文字は%エンコーディングで使用するため、URI に直接入れることはできない。  
入れるときは「%25」と表記する（ UTF-8 や Shift-JIS など ASCII を基本とした文字エンコーディング方式の場合）

### URI の長さ制限
仕様上は長さに制限はないが、実装上は制限が存在する。  
Internet Explorer ではバージョンを問わず、2038バイトまでという制限がある。

## URI スキーム
URI の先頭につく、https や ftp などの、通信プロトコルを示すもの。  
公式の一覧は <ruby><rb>IANA</rb><rt>アイアナ</rt></ruby>（ Internet Assigned Numbers Authority ）にある。  
[IANA - Uniform Resource Identifier (URI) Schemes](https://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml)

歴史としては、HTTP に対応した http スキームがまず誕生し、その後さまざまなプロトコルに対応したスキームが登録されていった。