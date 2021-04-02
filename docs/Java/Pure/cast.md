---
id: java-cast
title: Java - 型変換
sidebar_label: 型変換
description: Javaの型変換（暗黙の型変換、キャスト）まとめ
keywords:
  - Java
  - 型変換
---

- 検証バージョン：openjdk version 12

## 型変換ルール
### 基本データ型
宣言時の型で扱える範囲のデータであれば、型変換を行って異なる型の値でも代入できる。  
宣言時の型で扱える範囲を超えた値を代入しようとした場合は、コンパイルエラーになる。

#### 暗黙の型変換
左側の型は右側の型で扱える。

byte → short → int → long → float → double  
char → int

代入する際に暗黙の型変換が行われるようになっている。
```java
public class Main {
    public static void main(String[] args) throws Exception {
        byte bNum = 5;
        System.out.println(bNum); // 5

        short sNum = bNum;
        System.out.println(sNum); // 5

        int iNum = sNum;
        System.out.println(iNum); // 5

        long lNum = iNum;
        System.out.println(lNum); // 5

        float fNum = lNum;
        System.out.println(fNum); // 5.0

        double dNum = fNum;
        System.out.println(dNum); // 5.0

        char ch = 'a';
        System.out.println(ch); // a

        int chNum = ch;
        System.out.println(chNum); // 97
    }
}
```

#### キャストによる型変換
右側の型を左側の型で扱うには`キャスト`を使って、明示的に型変換を行う必要がある。

byte → short → int → long → float → double  
char → int

```java
public class Main {
    public static void main(String[] args) throws Exception {
        double dNum = 10.0;
        System.out.println(dNum); // 10.0

        float fNum = (float)dNum;
        System.out.println(fNum); // 10.0

        long lNum = (long)fNum;
        System.out.println(lNum); // 10

        int iNum = (int)lNum;
        System.out.println(iNum); // 10

        short sNum = (short)iNum;
        System.out.println(sNum); // 10

        byte bNum = (byte)sNum;
        System.out.println(bNum); // 10

        int chNum = 97;
        System.out.println(chNum); // 97

        char ch = (char)chNum;
        System.out.println(ch); // a
    }
}
```

#### 型変換での注意点
+のように演算対象（オペランド）を複数とる演算子には、以下のルールが適用される。
- 一方のオペランドが double 型である場合、演算前に他方のオペランドは double 型に変換される
- 一方のオペランドが float 型であり、他方のオペランドが double 型でない場合、演算前に他方のオペランドは float 型に変換される
- 一方のオペランドが long 型であり、他方のオペランドが double、float 型でない場合、演算前に他方のオペランドは long 型に変換される
- 両方のオペランドが long 型、float 型、double 型のいずれでもない場合、演算前に双方のオペランドは int 型に変換される

ただし、インクリメントやデクリメントを使った場合は、この型変換は行われない。

```java
public class Main {
    public static void main(String[] args) throws Exception {
        double dNum = 15.5;
        float fNum = 12.2f;
        long lNum = 11L;
        int iNum = 10;
        short sNum = 8;

        double result1d = dNum + fNum;
        // float result1f = dNum + fNum; // コンパイルエラー
        System.out.println(result1d); // 27.699999809265137

        float result2f = fNum + lNum;
        // long result2l = fNum + lNum; // コンパイルエラー
        System.out.println(result2f); // 23.2

        long result3l = lNum + iNum;
        // int result3i = lNum + iNum; // コンパイルエラー
        System.out.println(result3l); // 21

        int result4i = iNum + sNum;
        // short result4s = iNum + sNum; // コンパイルエラー
        System.out.println(result4i); // 18

        sNum = sNum++;
        System.out.println(sNum); // 8
        // sNum = sNum + 1; // コンパイルエラー
        sNum = (short)(sNum + 1);
        System.out.println(sNum); // 9
        int result5i = sNum + 1;
        System.out.println(result5i); // 10
    }
}
```

### 参照型
宣言している変数の型とデータであるオブジェクトに継承関係か実装関係があれば、型変換が可能。

#### 暗黙の型変換
子クラスのオブジェクトを親クラスの型で宣言した変数にて扱える。  
同様に実装クラスのオブジェクトをインタフェースの型で宣言した変数にて扱える。  
なお、全てのオブジェクトは Object クラスを基底とするため、Object型の変数で扱えることになる。

この変換の場合、インスタンスメソッド以外の呼び出し時は、親クラスのプロパティ、メソッドが呼ばれる。

```java
public class Main {
    public static void main(String[] args) throws Exception {
        SubTest subTest = new SubTest();
        System.out.println(subTest.num); // 20
        System.out.println(subTest.staNum); // 24
        System.out.println(subTest.getNum()); // 20
        System.out.println(subTest.getStaticNum()); // 34
        System.out.println(subTest.str); // sub test
        System.out.println(subTest.defStr); // default sub test
        System.out.println(subTest.staStr); // static sub test
        System.out.println(subTest.getStr()); // sub test
        System.out.println(subTest.getDefaultStr()); // default sub test method
        System.out.println(subTest.getStaticStr()); // static sub test method
        System.out.println(subTest.subNum); // 20

        Test test = subTest;
        System.out.println(test.num); // 10
        System.out.println(test.staNum); // 12
        System.out.println(test.getNum()); // 20
        System.out.println(test.getStaticNum()); // 12
        // System.out.println(test.str); // コンパイルエラー
        // System.out.println(test.defStr); // コンパイルエラー
        // System.out.println(test.staStr); // コンパイルエラー
        // System.out.println(test.getStr()); // コンパイルエラー
        // System.out.println(test.getDefaultStr()); // コンパイルエラー
        // System.out.println(test.getStaticStr()); // コンパイルエラー
        // System.out.println(test.subNum); // コンパイルエラー

        TestInterface testInterface = subTest;
        // System.out.println(testInterface.num); // コンパイルエラー
        // System.out.println(testInterface.staNum); // コンパイルエラー
        // System.out.println(testInterface.getNum()); // コンパイルエラー
        // System.out.println(testInterface.getStaticNum()); // コンパイルエラー
        System.out.println(testInterface.str); // test
        System.out.println(testInterface.defStr); // default test
        System.out.println(testInterface.staStr); // static test
        System.out.println(testInterface.getStr()); // sub test
        System.out.println(testInterface.getDefaultStr()); // default sub test method
        // System.out.println(testInterface.getStaticStr()); // コンパイルエラー
        // System.out.println(testInterface.subNum); // コンパイルエラー
    }
}

class Test {
    int num = 10;
    static int staNum = 12;
    public int getNum() {
        return num;
    }
    public static int getStaticNum() {
        return staNum;
    }
}

interface TestInterface {
    String str = "test";
    String defStr = "default test";
    static String staStr = "static test";
    public abstract String getStr();
    public default String getDefaultStr() {
        return defStr;
    }
    public static String getStaticStr() {
        return staStr;
    }
}

class SubTest extends Test implements TestInterface {
    int num = 20;
    static int staNum = 24;
    String str = "sub test";
    String defStr = "default sub test";
    static String staStr = "static sub test";
    int subNum = 20;
    public int getNum() {
        return subNum;
    }
    public static int getStaticNum() {
        return staNum + 10;
    }
    public String getStr() {
        return str;
    }
    public String getDefaultStr() {
        return defStr + " method";
    }
    public static String getStaticStr() {
        return staStr + " method";
    }
}
```

#### キャストによる型変換
親クラス型にて宣言した変数で参照している子クラス型のオブジェクトを、元の型である子クラス型にて宣言した変数で扱えるようにするにはキャストを用いる。

親クラス型にて宣言した変数で参照している親クラス型のオブジェクトを、子クラス型にキャストするということはできない。コンパイルエラーにはならないが実行時エラー（ClassCastException）になる。


```java
public class Main {
    public static void main(String[] args) throws Exception {
        Test test1 = new SubTest();
        System.out.println(test1.num); // 10
        System.out.println(test1.staNum); // 12
        System.out.println(test1.getNum()); // 20
        System.out.println(test1.getStaticNum()); // 12
        // System.out.println(test1.str); // コンパイルエラー
        // System.out.println(test1.defStr); // コンパイルエラー
        // System.out.println(test1.staStr); // コンパイルエラー
        // System.out.println(test1.getStr()); // コンパイルエラー
        // System.out.println(test1.getDefaultStr()); // コンパイルエラー
        // System.out.println(test1.getStaticStr()); // コンパイルエラー
        // System.out.println(test1.subNum); // コンパイルエラー

        SubTest subTest1 = (SubTest)test1;
        System.out.println(subTest1.num); // 20
        System.out.println(subTest1.staNum); // 24
        System.out.println(subTest1.getNum()); // 20
        System.out.println(subTest1.getStaticNum()); // 34
        System.out.println(subTest1.str); // sub test
        System.out.println(subTest1.defStr); // default sub test
        System.out.println(subTest1.staStr); // static sub test
        System.out.println(subTest1.getStr()); // sub test
        System.out.println(subTest1.getDefaultStr()); // default sub test method
        System.out.println(subTest1.getStaticStr()); // static sub test method
        System.out.println(subTest1.subNum); // 20

        TestInterface testInterface1 = new SubTest();
        // System.out.println(testInterface1.num); // コンパイルエラー
        // System.out.println(testInterface1.staNum); // コンパイルエラー
        // System.out.println(testInterface1.getNum()); // コンパイルエラー
        // System.out.println(testInterface1.getStaticNum()); // コンパイルエラー
        System.out.println(testInterface1.str); // test
        System.out.println(testInterface1.defStr); // default test
        System.out.println(testInterface1.staStr); // static test
        System.out.println(testInterface1.getStr()); // sub test
        System.out.println(testInterface1.getDefaultStr()); // default sub test method
        // System.out.println(testInterface1.getStaticStr()); // コンパイルエラー
        // System.out.println(testInterface1.subNum); // コンパイルエラー

        SubTest subTest2 = (SubTest)testInterface1;
        System.out.println(subTest2.num); // 20
        System.out.println(subTest2.staNum); // 24
        System.out.println(subTest2.getNum()); // 20
        System.out.println(subTest2.getStaticNum()); // 34
        System.out.println(subTest2.str); // sub test
        System.out.println(subTest2.defStr); // default sub test
        System.out.println(subTest2.staStr); // static sub test
        System.out.println(subTest2.getStr()); // sub test
        System.out.println(subTest2.getDefaultStr()); // default sub test method
        System.out.println(subTest2.getStaticStr()); // static sub test method
        System.out.println(subTest2.subNum); // 20

        Test test2 = new Test();
        // SubTest sub1 = (SubTest)test2; // 実行時エラー（ClassCastException）
    }
}

class Test {
    int num = 10;
    static int staNum = 12;
    public int getNum() {
        return num;
    }
    public static int getStaticNum() {
        return staNum;
    }
}

interface TestInterface {
    String str = "test";
    String defStr = "default test";
    static String staStr = "static test";
    public abstract String getStr();
    public default String getDefaultStr() {
        return defStr;
    }
    public static String getStaticStr() {
        return staStr;
    }
}

class SubTest extends Test implements TestInterface {
    int num = 20;
    static int staNum = 24;
    String str = "sub test";
    String defStr = "default sub test";
    static String staStr = "static sub test";
    int subNum = 20;
    public int getNum() {
        return subNum;
    }
    public static int getStaticNum() {
        return staNum + 10;
    }
    public String getStr() {
        return str;
    }
    public String getDefaultStr() {
        return defStr + " method";
    }
    public static String getStaticStr() {
        return staStr + " method";
    }
}
```