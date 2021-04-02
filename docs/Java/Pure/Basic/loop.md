---
id: java-loop
title: Java - 繰り返し処理
sidebar_label: 繰り返し処理
description: Javaの繰り返し処理（while、do~while、for）まとめ
keywords:
  - Java
  - while
  - do~while
  - for
---

- 検証バージョン：openjdk version 12

## 制御
繰り返し構文で共通して使える制御構文として、以下のものがある。
- break：繰り返しから抜ける
- continue：次のループへ移行する

## while
条件式が真の場合に処理を行い繰り返す。  
条件式が真であり続ける限り無限ループになるため、必ずループから抜けるような処理を記述する。

```java
while ( 条件式 ) {
    処理;
}
```
```java
public class Main {
    public static void main(String[] args) throws Exception {
        int testWhile = 1;
        while (testWhile < 4) {
            System.out.println(testWhile);
            testWhile++;
        }
        // 1
        // 2
        // 3
    }
}
```

## do~while
基本的には while 文と同様であるが、必ず1回は処理が実行される構文。

```java
do {
    処理;
} while (条件式);
```
```java
public class Main {
    public static void main(String[] args) throws Exception {
        int testDo = 1;
        do {
            System.out.println(testDo);
            testDo++;
        } while (testDo < 4);
        // 1
        // 2
        // 3
    }
}
```

## for
条件式が真の場合に処理を行い繰り返す。
- 変数初期化：ループ開始時に一度だけ実行される
- 条件式：各ループの開始時のたびに評価される
- 更新処理：各ループの終了時に実行される

なお、条件式を省略した場合は無限ループになる。

```java
for (変数初期化; 条件式; 更新処理) {
    処理;
}
```
```java
public class Main {
    public static void main(String[] args) throws Exception {
        for (int i = 0; i < 3; i++) {
            System.out.println(i);
        }
        // 0
        // 1
        // 2
    }
}
```

for文の中で使われている変数の値を、以下のように配列のインデックスとして使うことも多い。

```java
public class Main {
    public static void main(String[] args) throws Exception {
        String[] list = {"a", "b", "c"};
        for (int i = 0; i < 3; i++) {
            System.out.println(list[i]);
        }
        // a
        // b
        // c
    }
}
```

## 拡張 for
他の言語でいう foreach に近い構文。  
配列またはコレクションの要素がある限り、処理を繰り返す。

```java
for(データ型 変数名 : 配列またはコレクション) {
    処理;
}
```
```java
public class Main {
    public static void main(String[] args) throws Exception {
        String[] list = {"A", "B", "C"};
        for (String value : list) {
            System.out.println(value);
        }
        // A
        // B
        // C
    }
}
```