---
id: web-uri-type
title: Web - URI の種類
sidebar_label: URI の種類
description: URIの基本概要と構文まとめ
keywords:
  - Web
  - URI
---

## 絶対 URI と相対 URI
URI のパスは UNIX のファイルシステムと同様な階層構造を持っている。

`/`をルートとし、ディレクトリ名を`/`で区切って最後にファイル名を付ける`絶対パス（ Absolute Path ）`。  
もしくは、カレントディレクトリをルートとする`相対パス（ Relative Path ）`。

URI においても、同様に`絶対 URI`と`相対 URI`がある。
絶対 URI の例。
```
http://example.jp/foo/bar
```
相対 URI の例。
```
/foo/bar
```

## ベース URI
### 概要
相対 URI は、そのままではどこの場所を示すのか、クライアントが解釈できない。  
これは、相対 URI の起点となる URI がどこなのかがわからないために起こる。  
この起点となる URI を示すものとして、`ベース URL（ Base URI ）`があり、これにより相対 URI を絶対 URI に変換する（相対 URI を解決する）ことができる。

`http://example.jp/foo/bar/`をベース URI とした場合、双方のパスは同じものを示す。

|相対 URI|絶対 URI|
|---|---|
|hoge|http://example.jp/foo/bar/hoge|
|hoge/fuga|http://example.jp/foo/bar/hoge/fuga|
|./hoge|http://example.jp/foo/bar/hoge|
|../hoge|http://example.jp/foo/hoge|
|../hoge/fuga|http://example.jp/foo/hoge/fuga|
|/hoge/fuga|http://example.jp/hoge/fuga|
|../../hoge|http://example.jp/hoge|
|?q=hoge|http://example.jp/foo/bar?q=hoge|
|#hoge|http://example.jp/foo/bar#hoge|

### ベース URI の与え方
#### リソースの URI をベース URI とする方法
あるリソースを取得したときに相対 URI が登場したら、そのリソースの URI をベース URI として相対 URI を解決する方法。  
直観的でわかりやすい方法であるが、ベース URI となるリソースの URI をクライアント側で保存しておく必要があるという問題がある。

例として、ある Web ページを HTML ファイルとして保存したときに、その HTML ファイルが元々どの URI 出会ったのかは通常わからない。

#### ベース URI を明示的に指定する方法
上記の問題を解決する方法の1つとして、HTML や XML の中で明示的にベース URI を指定する方法がある。

HTML の場合は、head タグ要素の中で base タグ要素を入れる。
```html
<!DOCTYPE html>
<html>
  <head>
    <title>test page</title>
    <base href="http://example.jp/" />
    .
    .
    .
  </head>
  .
  .
  .
</html>
```

XML の場合は、xml:base 属性を利用すれば、どの要素でもベース URI を指定できる。
```xml
<foo xml:base="http://example.jp/foo">
  <!-- ここのベース URI は http://example.jp/foo になる　-->
  <bar xml:base="http://example.jp/foo/bar">
    <!-- ここのベース URI は http://example.jp/foo/bar になる　-->
  </bar>
</foo>
```