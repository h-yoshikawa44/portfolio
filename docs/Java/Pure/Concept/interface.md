---
id: java-interface
title: Java - インタフェース
sidebar_label: インタフェース
description:  Javaのインタフェース構文、構成要素および概念まとめ
keywords:
  - Java
  - インタフェース
---

- 検証バージョン：openjdk version 12

## 概要
公開する必要な操作をまとめたクラスの仕様、取り決めのこと。

## 構文
### 基本構文
インタフェース名は UpperCamelCase。

`interface`キーワードをつけて定義する。
```java
修飾子 interface インタフェース名 {
    // プロパティやメソッド定義
}
```

インタフェースでは、抽象メソッドと具象メソッド（デフォルトメソッド、staticメソッド）を混在して持つことができる。  
※SE7 まで、メソッドは**抽象メソッド**のみしか持つことができなかった。

抽象クラスと同様に直接インスタンス化することはできない。
インスタンス化したい場合は、このインタフェースを継承した具象クラスを定義して、そのクラスをインスタンス化する必要がある。

### プロパティ
インタフェースにおいてプロパティ宣言をすると、暗黙的に`public static final`が付与されるため、static な定数となる。  
そのため、宣言時に初期化をしておかないとコンパイルエラーになる。

### 抽象メソッド
`abstract`修飾子をつけて定義する。
処理内容は記述しないため、引数までの記述になる。

抽象クラスにおける、抽象メソッドと基本的には同様であるが、こちらの場合に指定できるアクセス修飾子は`public`のみ。  
（修飾子を省略した場合は、暗黙的に`public abstract`がつく）
```java
アクセス修飾子 abstract 戻り値の型 メソッド名(データ型 引数名);
```

### デフォルトメソッド
インタフェースにおいて処理内容を記述したメソッド。

`default`修飾子をつけて定義する。
基本的には通常の具象メソッドと同様であるが、こちらの場合に指定できるアクセス修飾子は`public`のみ。

また、java.lang.Object クラスに定義されている、equals()、hashCode()、toString() についてはデフォルトメソッドとして定義できない。

```java
修飾子 default 戻り値の型 メソッド名(データ型 引数名) {
    // 処理
}
```

インタフェース、抽象メソッド、デフォルトメソッドの例。
```java
public class Main {
    public static void main(String[] args) throws Exception {
        // TestInterface test = new TestInterface(); // インタフェースでは直接インスタンス化できない
    }
}

interface TestInterface {
    int num = 10; // 暗黙的にpublic static finalがつく
    int getNum(); // 暗黙的にpublic abstractがつく
    default void printValue() {
        System.out.println("test");
    }
}
```

## インタフェースにおける静的なプロパティとメソッド
上記に記述したとおり、プロパティは`static`をつけずとも暗黙的に静的なものになる。  
どちらもインスタンス化せずに使用することが可能。  
ただし、static な抽象メソッドは定義できない。

```java
public class Main {
    public static void main(String[] args) throws Exception {
        System.out.println(TestInterface.num); // 10
        System.out.println(TestInterface.getNum()); // 10
    }
}

interface TestInterface {
    static int num = 10;
    static int getNum() {
        return num;
    }
}
```

## インタフェースの継承
インタフェースをもとにして、サブインタフェースを定義できる。

クラスの継承と同様に`extends`キーワードを使用して定義するが、クラスが1つの継承元からしか継承できないのに対して、インタフェースは複数の継承元から継承できる。

```java
public class Main {
    public static void main(String[] args) throws Exception {
        // TestSubInterface test = new TestSubInterface(); // インタフェースでは直接インスタンス化できない
    }
}

interface TestInterfaceA {
    int num = 10;
    int getNum();
}

interface TestInterfaceB {
    String str = "test";
    String getStr();
}

interface TestSubInterface extends TestInterfaceA, TestInterfaceB {
    int subNum = 20;
    String subStr = "sub test";
}
```

## インタフェースの実装
インタフェースはインスタンス化できないため、実装クラスを定義する必要がある。

クラス定義時に`implements`キーワードを使用して、インタフェースの実装クラスであることを示す。
実装クラスは、インタフェースで定義されている全ての抽象メソッドを、`public`メソッドとしてオーバーライドして実装する必要がある。

なお、1つの実装クラスで複数のインタフェースを実装することも可能。その場合の注意点として、それぞれのインタフェースに同名、同引数のデフォルトメソッドが存在するとコンパイルエラーになる（実装クラスの方でどちらのメソッドを指すのか特定できないため）

```java
public class Main {
    public static void main(String[] args) throws Exception {
        Test test = new Test();
        System.out.println(test.getNum()); // 10
        System.out.println(test.getStr()); // test
    }
}

interface TestInterfaceA {
    int num = 10;
    int getNum();
}

interface TestInterfaceB {
    String str = "test";
    String getStr();
}

class Test implements TestInterfaceA, TestInterfaceB {
    public int getNum() {
        return num;
    }
    public String getStr() {
        return str;
    }
}
```

### クラスの継承とインタフェースの実装
1つの実装クラスでクラスの継承、インタフェースの実装を行うことも可能。  
この場合、`extends`の方を先に書く。

継承元のクラスが抽象クラスであった場合は、そのクラスが持つ抽象メソッドも実装する必要がある。

```java
public class Main {
    public static void main(String[] args) throws Exception {
        SubTest subTest = new SubTest();
        System.out.println(subTest.getNum()); // 20
        System.out.println(subTest.getStr()); // test
    }
}

class Test {
    int num = 10;
    public int getNum() {
        return num;
    }
}

interface TestInterface {
    String str = "test";
    public String getStr();
}

class SubTest extends Test implements TestInterface {
    int subNum = 20;
    public int getNum() {
        return subNum;
    }
    public String getStr() {
        return str;
    }
}
```