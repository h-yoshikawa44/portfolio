---
id: java-if
title: Java - 分岐処理
sidebar_label: 分岐処理
description: Javaの分岐処理（if、三項演算子、switch）まとめ
keywords:
  - Java
  - if
  - 三項演算子
  - switch
---

- 検証バージョン：openjdk version 12

## if
式の真偽に応じて処理を行う。

```java
if (条件式1) {
    処理1;
} else if (条件式2) {
    処理2;
} else {
    処理3;
}
```
```java
public class Main {
    public static void main(String[] args) throws Exception {
        ifValue(6); // 大
        ifValue(4); // 中
        ifValue(2); // 小
    }

    public static void ifValue(int value) {
        if (value > 5) {
            System.out.println("大");
        } else if (value > 3) {
            System.out.println("中");
        } else {
            System.out.println("小");
        }
    }
}
```

## 三項演算子
if文をより簡潔に記述したもの。

```java
条件式 ? 真の時の処理 : 偽の時の処理;
```
```java
public class Main {
    public static void main(String[] args) throws Exception {
        int num = 9;
        String str = "numの値は";
        str += num < 10 ? "10未満" : "10以上";
        System.out.println(str); // numの値は10未満
    }
}
```

## switch
対象の値が一致する`case`以降の処理を行う。  
その`case`だけの処理を行いたい場合は、`break`で処理を抜ける。
`default`句についてはなくても使用可能。

```java
switch (対象) {
    case 値1:
        処理1;
    case 値2:
        処理2;
    default:
        処理3;
}
```
```java
public class Main {
    public static void main(String[] args) throws Exception {
        switchValue(6); // 大中
        switchValue(4); // 中
        switchValue(2); // 小終
    }

    public static void switchValue(int value) {
        switch(value) {
            case 6:
                System.out.print("大");
            case 4:
                System.out.print("中");
                break;
            case 2:
                System.out.print("小");
            default:
                System.out.print("終");
        }
    }
}
```
