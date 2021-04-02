---
id: java-abstract-class
title: Java - 抽象クラス
sidebar_label: 抽象クラス
description: Javaの抽象クラス構文、構成要素および概念まとめ
keywords:
  - Java
  - 抽象クラス
---

- 検証バージョン：openjdk version 12

## 概要
変数や処理内容を記述したメソッドを定義した`具象クラス`に対して、処理内容を記述しない`抽象メソッド`も持つことができるクラス。

一般的な使用方法として、複数のクラスで共通の名前や呼び出し方を持つメソッドを定義しておきたい時に使う。

## 構文
### 基本構文
基本的な部分は`具象クラス`と同様。

`abstract`修飾子をつけて定義する。
```java
修飾子 abstract class クラス名 {
    // プロパティや抽象メソッド定義
}
```

抽象クラスでは、具象メソッドと抽象メソッドどちらも混在して持つことができる。

なお、直接インスタンス化することはできない。  
インスタンス化したい場合は、この抽象クラスを継承した具象クラスを定義して、そのクラスをインスタンス化する必要がある。

### 抽象メソッド
こちらも`abstract`修飾子をつけて定義する。
処理内容は記述しないため、引数までの記述になる。
```java
アクセス修飾子 abstract 戻り値の型 メソッド名(データ型 引数名);
```

抽象クラス、抽象メソッドの例。
```java
public class Main {
    public static void main(String[] args) throws Exception {
        // AbstractTest abstractTest = new AbstractTest(); // 抽象クラスは直接インスタンス化できない
    }
}

abstract class AbstractTest {
    public int num = 10;
    protected abstract int getNum();
    public void printValue() {
        System.out.println("test");
    }
}
```

## 抽象クラスにおける静的なプロパティとメソッド
抽象クラスでも具象クラスと同様に`static`をつけることで定義でき、インスタンス化せずに使用することが可能。  
ただし、static な抽象メソッドは定義できない。

```java
public class Main {
    public static void main(String[] args) throws Exception {
        System.out.println(AbstractTest.num); // 10
        System.out.println(AbstractTest.getNum()); // 10
    }
}

abstract class AbstractTest {
    public static int num = 10;
    public static int getNum() {
        return num;
    }
}
```

## 抽象クラスの継承
抽象クラス、具象クラスともに継承できる。

具象クラスで継承した場合は、親抽象クラスの抽象メソッドを必ずオーバーライドして実装する必要がある。  
抽象クラスで継承した場合では、親抽象クラスの抽象メソッドの実装は任意でよい。

```java
public class Main {
    public static void main(String[] args) throws Exception {
        Test test = new Test();
        System.out.println(test.getNum()); // 10
        test.printValue(); // test
    }
}

abstract class AbstractTest {
    public int num = 10;
    protected abstract int getNum();
}

abstract class AbstractSubTest extends AbstractTest {
    protected abstract void printValue();
}

class Test extends AbstractSubTest {
    public int getNum() {
        return num;
    }
    public void printValue() {
        System.out.println("test");
    }
}
```
