---
id: java-class
title: Java - クラス
sidebar_label: クラス
description: Javaのクラス構文、構成要素および概念まとめ
keywords:
  - Java
  - クラス
---

- 検証バージョン：openjdk version 12

## 概要
変数や処理内容を記述したメソッドを定義した設計図のようなもの。`クラス`もしくは`具象クラス`と呼ぶ。
インスタンス化することで実体化させ、オブジェクトとして扱えるようになる。

## 基本構文
クラス名はUpperCamelCase。

- アクセス修飾子：public（任意で指定）
- 修飾子：final（任意で指定）

なお、クラスについて1つのファイルの中に複数クラスを定義できるが、`public`なクラスは1つしか定義できない。  
また、`public`なクラスの名前は、そのファイル名と一致させなければならない。

`final`がついたクラスに関しては、子クラスを作成できない。

```java
アクセス修飾子 修飾子 class クラス名 {
    // プロパティやメソッド定義
}
```

クラスの中に定義された定数や変数を`プロパティ`（`属性`とも）と呼ぶ。  
また、クラスの中で処理を定義したものを`メソッド`（`ファンクション`や`関数`とも）と呼ぶ。

これらは通常インスタンス単位で割り当てられるものである。  
クラス内で他のプロパティやメソッドにアクセスは、そのまま`プロパティ名`、`メソッド名(引数)`とする。  
ただ、引数名とプロパティ名が同一の時などに、明示的にプロパティの方を指定したいときは`this.プロパティ名`と書くこともできる。

`new クラス名()`でクラスインスタンスを作成。
プロパティやメソッドへのアクセスは`クラスインスタンス.プロパティ名`、`クラスインスタンス.メソッド名(引数)`で可能。

```java
public class Main {
    public static void main(String[] args) throws Exception {
        Test test = new Test();
        System.out.println(test.num); // 10
        System.out.println(test.STR); // test
        test.printValue();
        // 10
        // test
    }
}

class Test {
    int num = 10;
    final String STR = "test";

    public int getNum() {
        return num;
    }

    public String getStr() {
        return STR;
    }

    public void printValue() {
        System.out.println(getNum());
        System.out.println(getStr());
    }
}
```

## 静的なプロパティとメソッド
`static`をつけて定義したプロパティとメソッドは静的なものとなり、クラス単位で割り当てられる。

クラス内で他の静的なプロパティやメソッドにアクセスは、静的でないプロパティやメソッドにアクセスする時と同様で、そのまま`プロパティ名`、`メソッド名(引数)`となる。  
インスタンス化せずに呼び出しが可能であり、`クラス名.プロパティ名`、`クラス名.メソッド名(引数)`で呼び出す。

:::caution
注意点として、静的なメソッドからは静的でないプロパティやメソッドにアクセスすることはできない。  
:::

```java
public class Main {
    public static void main(String[] args) throws Exception {
        System.out.println(Test.num); // 10
        System.out.println(Test.STR); // test
        Test.printValue();
        // 10
        // test
    }
}

class Test {
    static int num = 10;
    static final String STR = "test";

    public static int getNum() {
        return num;
    }

    public static String getStr() {
        return STR;
    }

    public static void printValue() {
        System.out.println(getNum());
        System.out.println(getStr());
    }
}
```

## アクセス修飾子
クラス、プロパティ、メソッドに指定することで、アクセスできる範囲の制御ができる。

- public：クラス外から自由にアクセスできる
- protected：クラス内および継承したクラス内、もしくは同パッケージのクラスからのみアクセスできる
- （指定なし）：同パッケージのクラスからのみアクセスできる
- private：クラス内からのみアクセスできる

## コンストラクタ
クラスのインスタンス化時に実行される特殊なメソッドで、プロパティの初期化処理などに使われることが多い。

### 明示的に定義するコンストラクタ
`クラス名()`で定義する。

アクセス修飾子と引数に関しては任意で指定可能。  
引数に関してはインスタンス化時に`new クラス名(引数)`とすることで渡すことができる。

```java
アクセス修飾子 クラス名(データ型 引数名) {
    // 処理
}
```

```java
public class Main {
    public static void main(String[] args) throws Exception {
        Test tc = new Test();
        tc.printValue(); // test
    }
}

class Test {
    public String value;

    Test() {
        value = "test";
    }

    public void printValue() {
        System.out.println(value);
    }
}
```

### デフォルトコンストラクタ
コンストラクタを明示的に記述していなかった場合はデフォルトコンストラクタが自動で追加される。

こちらの場合は、引数なし、処理内容は空となる。  
（親クラスがある場合は親クラスのコンストラクタを呼び出す、`super()`の処理のみとなる）

## イニシャライザブロック
### static イニシャライザ
クラスファイルがロードされたタイミングで１度だけ実行されるブロック。  
クラスをインスタンス化する前や、main() メソッドを呼び出す前に実行したい処理を定義する。

static変数の初期化に使うとよい。

```java
static { 処理 }
```

### イニシャライザ
インスタンス変数の初期化はコンストラクタがよくつかわれるが、イニシャライザでも可能。
コンパイラは、全てのコンストラクタにイニシャライザをコピーするので、複数のコンストラクタで共通の処理を行いたい時に使うとよい。

```java
{ 処理 }
```

```java
public class Main {
    public static void main(String[] args) throws Exception {
        new Initialize();
        System.out.println("---");
        new Initialize();

        // 実行結果
        // static イニシャライザ
        // イニシャライザ
        // コンストラクタ
        // ---
        // イニシャライザ
        // コンストラクタ
    }
}

class Initialize {
    {
		System.out.println("イニシャライザ");
	}
	static {
		System.out.println("static イニシャライザ");
	}
	Initialize() {
		System.out.println("コンストラクタ");
	}
}
```

## 継承
既存のクラスをもとに新たなクラスを定義すること。  
継承元のクラスを`親クラス`、`スーパークラス`と呼び、継承先のクラスを`子クラス`、`サブクラス`と呼ぶ。

この「子クラスは親クラスの一種である」という関係を`is-a関係`と呼ぶ。
また、あるオブジェクトが他のオブジェクトの一部であったり、他のオブジェクトを持っていたりする関係を`集約`と言う。この全体と部分の関係は`has-a関係`あるいは`part-of関係`と呼ぶ。そして、集約の中で特に強い関係を`コンポジション`と呼ぶ。

### 子クラスの定義
クラス定義時に`extends`で継承する親クラスを指定（Javaにおいては1つしか指定できない）  
アクセス修飾子が`private`以外のプロパティやメソッドは、子クラスへ継承される。

なお、多重継承は不可。  
`final`がついたクラスは子クラスを作成できない。

```java
public class Main {
    public static void main(String[] args) throws Exception {
        Test tc = new Test();
        tc.printValue(); // test
        SubTest stc = new SubTest();
        stc.printValue(); // sub test
    }
}

class Test {
    public String value;

    Test() {
        value = "test";
    }

    public void printValue() {
        System.out.println(value);
    }
}

class SubTest extends Test {
    SubTest() {
        value = "sub test";
    }
}
```

### オーバーライド
親クラスで定義されているインスタンスメソッドを子クラスで再定義すること。  
子クラスでは処理を変えたい時に活用する。子クラスがインスタンス化され、オーバーライドしたメソッドが呼ばれた場合は、子クラスのメソッドが優先的に呼ばれる。

オーバーライドするにあたって以下の条件がある。
- メソッド名：同名
- 引数：全く同じ
- 戻り値：親クラスで定義したメソッドと同じ型か、その方の子クラス型
- アクセス修飾子：親クラスで定義したメソッドと同じか、それより公開範囲が広いもの

なお、`final`がついたメソッドはオーバーライドできない。

また、Java では`@Override`をメソッドにつけることで、このメソッドはオーバーライドしていると明示できる。  
（つけなくてもオーバーライドは可能）  
つけている場合に、当該メソッドがオーバーライド出来ていないと、コンパイル時に検知ができる。

```java
public class Main {
    public static void main(String[] args) throws Exception {
        Test tc = new Test();
        tc.printValue(); // parent
        SubTest stc = new SubTest();
        stc.printValue(); // child
    }
}

class Test {
    public void printValue() {
        System.out.println("print");
    }
}

class SubTest extends Test {
    @Override
    public void printValue() {
        System.out.println("child");
    }
}
```

### 隠蔽
親クラスで定義されている static メソッドや変数を子クラスで再定義すること。

```java
public class Main {
    public static void main(String[] args) throws Exception {
        Test.printValue(); // parent
        SubTest.printValue(); // child
        Test tc = new Test();
        tc.printValue(); // parent
        SubTest stc = new SubTest();
        stc.printValue(); // child
    }
}

class Test {
    public static void printValue() {
        System.out.println("parent");
    }
}

class SubTest extends Test {
    public static void printValue() {
        System.out.println("child");
    }
}
```

### 親クラスのメソッドを使用
明示的に親クラスのメソッドを使用する際は、`super.メソッド名(引数)`で呼び出せる。

```java
public class Main {
    public static void main(String[] args) throws Exception {
        Test tc = new Test();
        tc.printValue(); // parent
        SubTest stc = new SubTest();
        stc.printValue();
        // parent
        // child
    }
}

class Test {
    public void printValue() {
        System.out.println("parent");
    }
}

class SubTest extends Test {
    public void printValue() {
        super.printValue();
        System.out.println("child");
    }
}
```

なお、親クラスのコンストラクタを呼び出す場合は`super(引数)`とする。  
**注意点として、子クラスのコンストラクタの処理の先頭からしか呼び出せない（通常のメソッドからは呼び出せない）**

```java
public class Main {
    public static void main(String[] args) throws Exception {
        Test tc = new Test(); // parent
        SubTest stc = new SubTest();
        // parent
        // child
    }
}

class Test {
    Test() {
        System.out.println("print");
    }
}

class SubTest extends Test {
    SubTest() {
        super();
        System.out.println("child");
    }
}
```

## オーバーロード
1つのクラス内に、同名のメソッドやコンストラクタを複数定義すること。

それぞれのメソッドを区別するために以下は異なっている必要がある。
- 引数の並び
- 引数のデータ型
- 引数の数

```java
public class Main {
    public static void main(String[] args) throws Exception {
        Test test = new Test();
        test.printValue(10); // int:10
    }
}

class Test {
   public void printValue(int num) {
       System.out.println("int:" + num);
   }
   public void printValue(long num) {
       System.out.println("long:" + num);
   }
   public void printValue(Integer num) {
       System.out.println("Integer:" + num);
   }
   public void printValue(int... num) {
       System.out.println("int...:" + num);
   }
}
```