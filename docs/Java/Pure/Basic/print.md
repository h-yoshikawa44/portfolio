---
id: java-print
title: Java - 出力処理
sidebar_label: 出力処理
description: Javaの出力処理（println、print）まとめ
keywords:
  - Java
  - 出力
---

- 検証バージョン：openjdk version 12

## System.out.println
[公式ドキュメント](https://docs.oracle.com/javase/jp/12/docs/api/java.base/java/io/PrintStream.html#println())

引数の内容を出力。改行あり。

```java
public class Main {
    public static void main(String[] args) throws Exception {
        System.out.println("test"); // test
    }
}
```

## System.out.print
[公式ドキュメント](https://docs.oracle.com/javase/jp/12/docs/api/java.base/java/io/PrintStream.html#print(boolean))

引数の内容を出力。改行なし。

```java
public class Main {
    public static void main(String[] args) throws Exception {
        System.out.print("test"); // test
    }
}
```
