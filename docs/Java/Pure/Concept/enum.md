---
id: java-enum
title: Java - 列挙型・Enum クラス
sidebar_label: 列挙型・Enum クラス
description: Javaの列挙型・Enumクラスの構文、構成要素および概念まとめ
keywords:
  - Java
  - Enum
---

- 検証バージョン：openjdk version 12

## 列挙型
特定の値のみを持つ型。  
クラス定義の中、もしくは列挙型の定義だけを記述したソースファイルで定義できる。メソッドの中で定義することはできない。

### 基本構文

```java
enum 列挙型名 { 値1, 値2, 値3...}
```

```java
public class Main {
    public static void main(String[] args) throws Exception {
        System.out.println(Color.getprimaryColor()); // BLUE
    }
}

class Color {
    enum StandardColor { BLUE, GREEN, YERROW, RED };

    public static StandardColor getprimaryColor() {
        return StandardColor.BLUE;
    }
}
```

### Enumクラス
列挙型を定義したものをコンパイルすると、クラスファイルが作成される。  
`java.lang.Enum`クラスを継承した final クラスとなるため、継承はできない。  
列挙された値は`public static final`指定のクラス定数となる。

```java
enum Color { BLUE, GREEN, YERROW, RED }
```
↓
```java
final class Color extends java.lang.Enum<Color> {
    public static final Color BLUE;
    public static final Color GREEN;
    public static final Color YERROW;
    public static final Color RED;
    public static Color[] values() { ... }
    public static Color valueOf(java.lang.String){ ... }
    static { ... }
}
```

また、以下のメソッドが自動的に追加される。

|メソッド名|説明|
|---|---|
|static 列挙型 [] values()|列挙した値全てを配列で返す|
|static 列挙型 valueOf(String name)|引数で指定された名前を持つ値を返す|

列挙型の実体は定数やメソッドを持つクラスであるが、明示的にインスタンス化することはできない。

列挙型（`java.lang.Enum`クラス）が持つ主なメソッド。

|メソッド名|説明|
|---|---|
|final String name()|enum定数の名前を返す。任意でオーバーライドは不可|
|String toString()|enum定数の名前を返す。任意でオーバーライド可能|
|final boolean equals(Object other)|指定されたオブジェクトがこの enum 定数と同じ場合は true を返す|
|final int hashCode()|enum 定数のハッシュコードを返す|
|static &lt;T extends Enum &lt;T&gt;&gt; T valueOf(Class &lt;T&gt; enumType, String name)|指定された名前を持つ、enum 型の enum 定数を返す|
|final int ordinal()|列挙宣言での位置を返す|

### 列挙型における定義
#### コンストラクタ、変数、メソッド
列挙型でも、通常のクラスと同様に定義することが可能。

また、Enumクラスは`Comparable`インタフェースを実装しており、`compareTo`メソッドを定数が宣言された順番で管理するよう実装されているため、各定数は列挙した順番を保持している。

```java
public class Main {
    public static void main(String[] args) throws Exception {
        Color color = Color.GREEN;
        System.out.println(color); // GREEN
        System.out.println(color.getNum()); // $
        System.out.println(color.ordinal()); // 1
        for (Color colorObj : color.values()) {
            System.out.println(colorObj);
            // BLUE
            // GREEN
            // YERROW
            // RED
        }
    }
}

enum Color {
    BLUE(2), GREEN(4), YERROW(3), RED(1);
    private int num;
    Color(int num) {
        this.num = num;
    }
    public int getNum() {
        return num;
    }
}
```

#### 抽象メソッドとオーバーライド
列挙型では抽象メソッドを宣言して、各列挙値側でオーバーライドすることが可能。

```java
public class Main {
    public static void main(String[] args) throws Exception {
        Color color = Color.WHITE;
        color.print(); // 白
    }
}

enum Color {
    WHITE{ void print() {
        System.out.println('白');
    }},
    BLACK{ void print() {
        System.out.println('黒');
    }};
    abstract void print();
}
```