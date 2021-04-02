---
id: java-syntax
title: Java - 基本構文（変数、定数、メソッド）
sidebar_label: 基本構文（変数、定数、メソッド）
description: Javaの基本的な構文まとめ
keywords:
  - Java
  - 基本構文
---

- 検証バージョン：openjdk version 12

## 実行箇所
main メソッドから。  
なお、main メソッドを持つクラスしか実行することはできない。

main メソッドは必ず以下のようになる（throws の部分は任意）  
最初に実行されるメソッド = `public static`である必要があるため。

```java
public class Main {
    public static void main(String[] args) throws Exception {
        // 処理
    }
}
```

## 文末のセミコロン
必要。

:::info
スクリプト言語と違い、以降記述する変数やメソッドは**クラス内でしか定義できない**。
:::

## 変数
変数名は LowerCamelCase。  
静的型付けであるため、型指定が必要。

```java
データ型 変数名;

データ型 変数名 = 初期化の値;
```

### プリミティブ型
使用できるデータ型。

|データ型|種別|値の範囲|
|---|---|---|
|byte|符号付整数(8bit)|-128~127|
|short|符号付整数(16bit)|-32768~32767|
|int|符号付整数(32bit)|-2147483648~2147483647|
|long|符号付整数(64bit)|-9223372036854775808~9223372036854775807|
|float|浮動小数点数(32bit)||
|double|浮動小数点数(64bit)||
|boolean|真偽値(8bit)|true, false|
|char|Unicode文字(16bit)|'¥u0000'~'¥uffff'/0~65535|

```java
public class Main {
    public static void main(String[] args) throws Exception {
        byte bNum = 5;
        System.out.println(bNum); // 5

        short sNum = 10;
        System.out.println(sNum); // 10

        int num1 = 15;
        System.out.println(num1); // 15

        int num2 = 010; // 8進数(先頭に0をつける)
        System.out.println(num2); // 8

        int num3 = 0xa; // 16進数(先頭に0xをつける)
        System.out.println(num3); // 10

        int num4 = 0b11; // 2進数(先頭に0bをつける)
        System.out.println(num4); // 3

        long lNum = 100L; // long型のリテラル(末尾にLをつける)
        System.out.println(lNum); // 100

        float fNum = 3.14f; // float型のリテラル(末尾にfをつける)
        System.out.println(fNum); // 3.14

        double dNum = 6.28;
        System.out.println(dNum); // 6.28

        boolean bool = true;
        System.out.println(bool); // true

        char ch = 'A'; // 文字リテラル(シングルクォートで囲む)
        System.out.println(ch); // A
    }
}
```

### 参照型
|データ型|種別|
|---|---|
|String|文字列を扱うクラス|
|配列|各種データ型の配列|
|クラス|各種クラス|

```java
public class Main {
    public static void main(String[] args) throws Exception {
        String str = "test";
        System.out.println(str); // test

        String[] arr = {"a", "b", "c"};
        System.out.println(arr[0]); // a
        System.out.println(arr[1]); // b
        System.out.println(arr[2]); // c

        Test test = new Test();
        System.out.println(test.num); // 5
    }
}

class Test {
    public int num = 5;
}
```

## 定数
定数名は ScreamingSnakeCase。

`final`がついたものは、一度初期化して以降値の変更ができなくなる。

```java
final データ型 定数名;

final データ型 定数名 = 初期化の値;
```

```java
public class Main {
    public static void main(String[] args) throws Exception {
        final String TEST_VALUE = "test";
        System.out.println(TEST_VALUE); // test
    }
}
```

## メソッド
メソッド名は LowerCamelCase。
引数の数は任意。

### 基本構文
- アクセス修飾子：private、protected、public
- 修飾子：final、static（指定は任意かつ、両方指定も可能）
- 返り値の型：あらゆるデータ型を指定できる。何も値を返さない場合は`void`を指定する。
- 引数：引数の数は任意

※アクセス修飾子と修飾子については[クラス](/docs/Java/Pure/Concept/java-class)も参照。

```java
アクセス修飾子 修飾子 返り値の型 メソッド名(データ型 引数名) {
    // 処理
}
``

```java
public class Main {
    public static void main(String[] args) throws Exception {
        Test test = new Test();
        test.printValue(); // test
    }
}

class Test {
    public void printValue() {
        System.out.println("test");
    }
}
```

### 返り値
関数の呼び出し側に値を返す場合は`return`で返す。  
なお、定義している返り値の型と実際に返す値の型は一致させること。

```java
public class Main {
    public static void main(String[] args) throws Exception {
        Test test = new Test();
        System.out.println(test.getValue()); // test
    }
}

class Test {
    public String getValue() {
        return "test";
    }
}
```

### 引数のデフォルト値
Java においては指定不可。

### 可変長引数
引数のデータ型に`...`をつけることで配列として受け取ることができる。
ただし、1つのメソッドにつき1回のみ、かつ最後の引数のみ。

可変長引数に対して何も値を渡さなかった場合は、空の配列が渡される。

```java
public class Main {
    public static void main(String[] args) throws Exception {
        Test test = new Test();
        test.printValue("a", "b");
        // 2
        // a
        // b
        test.printValue();
        // 0
    }
}

class Test {
    public void printValue(String... strList) {
        System.out.println(strList.length);
        for(String str : strList) {
            System.out.println(str);
        }
    }
}
```

なお、引数を明確に定義したメソッドと、可変長引数を使用したメソッドが定義されている場合、前者の方が優先的に呼ばれる。