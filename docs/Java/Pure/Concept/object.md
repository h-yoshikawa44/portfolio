---
id: java-object
title: Java - Object クラス
sidebar_label: Object クラス
description: JavaのObjectクラスの構成要素まとめ
keywords:
  - Java
  - Object
---

- 検証バージョン：openjdk version 12

## 概要
`java.lang.Object`クラスのこと。  
Java のすべてのクラスの基底となるクラスで、`extends`を使用せずに独自に定義したクラスは、自動的に Object クラスを継承したクラスとなる。  
そのため、Object クラスのメソッドはどのクラスでも使用できる（配列も参照型であるため使用できる）

## メソッド
Object クラスの主なメソッド。

|メソッド名|説明|
|---|---|
|boolean equals(Object obj)|自オブジェクトと object を比較し、同じオブジェクトであれば true を返す|
|final Class<?> getClass()|このオブジェクトの実行時クラスを返す|
|int hashCode()|オブジェクトのハッシュコード値を返す|
|String toString()|オブジェクトの文字列表現を返す|
|void finalize()|オブジェクトへの参照がないガベージコレクタによって判断されたときに、ガベージコレクタによって呼び出される|

### toString()メソッド
そのオブジェクトのクラス名、@、ハッシュコードの符号なし16進数表現から構成される文字列を返す。
通常は、子クラス側で各クラスに応じた文字列表現ができるようにオーバーライドされて使用される。

```java
public String toString()
```

println() メソッドに参照変数名を指定すると、内部的にそのオブジェクトの`toString()`メソッドが呼び出されるようになっており、以下のような実行結果になる。  
配列や独自クラスは、デフォルトでは`toString()`メソッドがオーバーライドされていないため、Object クラスの`toString()`メソッドが呼び出される。

```java
public class Main {
    public static void main(String[] args) throws Exception {
        int[] nums = {1, 2, 3};
        String str = "太郎";
        TestA testA = new TestA();
        TestB testB = new TestB();
        System.out.println(nums); // [I@7a81197d　※例　[は配列 Iはint型 を意味する
        System.out.println(str); // 太郎
        System.out.println(testA); // Test1@5ca881b5　※例
        System.out.println(testB); // override toString
    }
}

class TestA {}
class TestB {
    public String toString() {
        return "override toString";
    }
}
```

### equals()メソッド
2つのオブジェクトを比較し、同じオブジェクトであれば true を返す。  
`==`演算子での比較と同じ挙動をする。

```java
public boolean equals(Object obj)
```

使用例としては以下のようになる。  
testA3 と testA4 は同じものを参照しているため、true が返る。

```java
public class Main {
    public static void main(String[] args) throws Exception {
        TestA testA1 = new TestA();
        TestA testA2 = new TestA();
        System.out.println(testA1.equals(testA2)); // false

        TestA testA3 = new TestA();
        TestA testA4 = testA3;
        System.out.println(testA3.equals(testA4)); // true

        TestB testB1 = new TestB();
        System.out.println(testA3.equals(testB1)); // false
        System.out.println(testA3.equals(null)); // false
    }
}

class TestA {}
class TestB {}
```

### hashCode()メソッド
オブジェクトのハッシュコードを返す。  
ハッシュコードとは、オブジェクトに付与された整数値であり、Java 実行環境がオブジェクトの識別を行うために使用される。

```java
public int hashCode()
```

使用例としては以下のようになる。  
testA3 と testA4 は同じオブジェクトであるため、同じ値が返る。

```java
public class Main {
    public static void main(String[] args) throws Exception {
        TestA testA1 = new TestA();
        TestA testA2 = new TestA();
        System.out.println(testA1.hashCode()); // 918221580 ※例
        System.out.println(testA2.hashCode()); // 2055281021 ※例

        TestA testA3 = new TestA();
        TestA testA4 = testA3;
        System.out.println(testA3.hashCode()); // 1554547125 ※例
        System.out.println(testA4.hashCode()); // 1554547125 ※例
    }
}

class TestA {}
```

### equals()メソッドとhashCode()メソッドのオーバーライド
独自定義クラスから生成されたクラスにおいて、参照先は違っていても保持する値が全て同じであれは等価であるとしたい場合は、この2つのメソッドをオーバーライドするとよい。

ただし、オーバーライドするにあたって以下の従うべきルールがある。

- 同一のオブジェクトに対して、`hashCode()`メソッドが複数呼び出されても、同一の整数値を返す
- 2つのオブジェクトを`equals()`メソッドで比較して true が返る場合は、2つのオブジェクトのハッシュコード値は等しくなる
- 2つのオブジェクトを`equals()`メソッドで比較して false が返る場合は、2つのオブジェクトのハッシュコードは同じでも違っていてもよい。ただし、違う値を返した方がパフォーマンス向上の場合がある
- 2つのオブジェクトのハッシュコードの値が違う場合は、2つのオブジェクトを`equals()`メソッドで比較しても false を返す

オーバーライドの例。
```java
public class Main {
    public static void main(String[] args) throws Exception {
        Test test1 = new Test();
        Test test2 = new Test();
        System.out.println(test1.equals(test2)); // true
    }
}

class Test {
    private int num;
    public boolean equals(Object obj) {
        return (obj instanceof Test) && (((Test)obj).num == this.num) ? true : false;
    }
    public int hashCode() {
        return num * 3;
    }
}
```