---
id: java-encapsulation
title: Java - カプセル化
sidebar_label: カプセル化
description: Javaのカプセル化に関する概念まとめ
keywords:
  - Java
  - カプセル化
  - JavaBeans
---

- 検証バージョン：openjdk version 12

## 概要
オブジェクト指向言語において、属性と操作を一体化させて表現すること。  
Java では、オブジェクトごとに持つ属性をインスタンス変数、操作をメソッドとして定義することで実現している。

カプセル化されたクラスでは、属性であるインスタンス変数がむやみに変更されることを防ぐ目的でデータを隠ぺいするようにする。  
具体的にはインスタンス変数を private、インスタンス変数を操作するメソッドを public にすることが推奨されている。

### JavaBeans
#### 概要
以下の規則によって定義されるJavaクラスのこと。  
なお、カプセル化におけるプロパティ変数を操作するメソッドを getter メソッド、setter メソッドと呼ぶ。

- プロパティ変数は private とし、外部からは getter メソッドと setter メソッドを通してのみアクセス可能とする。
- getter および setter メソッドは、それぞれ get、set の接頭辞 + プロパティ変数名となる
- 他のクラスから呼び出せるように public クラスとする
- getter メソッドの戻り値の型は、対応するプロパティ変数の方に一致し、引数は持たない
- setter メソッドの戻り値の方は void で、対応するプロパティ変数の型の引数を持つ
- boolean 型のプロパティ変数に対する gette rは、isXXX() としてもよい

```java
public class TestBeans {
    private int num;

    private boolean flag;

    public void setNum(int num) {
        this.num = num;
    }

    public int getNum() {
        return this.num;
    }

    public void setFlag(boolean flag) {
        this.flag = flag;
    }

    public boolean isFlag() {
        return this.flag;
    }
}
```

#### 種類
参考：[Qiita - 【Java】formとentityとdtoの違いって？【Bean】](https://qiita.com/mtanabe/items/c879d233d297eda288d4)

JavaBeans はその用途によっていくつかの種類にわけられる。

- form
  - HTTP の POST メソッドで送信された値(=formタグの中身)が入っている
  - クラス名は`〇〇form`となる
- entity
  - DB に登録・更新する値を入れておく
  - DB から取得した値を保持しておく
  - クラス名とテーブル名はたいてい同じになることが多い
- dto(Data Transfer Object)
  - データ交換用の Bean。
  - クラス名は`〇〇dto`となる

### イミュータブルオブジェクト
不変オブジェクト。  
アクセス修飾子を活用して、属性を変更させないようにしたオブジェクトのこと。

以下のようにクラス定義することで、インスタンス化されたときから状態が変更されないことを保証する。

- クラスが拡張できないことを保証するためfinalクラスとする（または getter メソッドに final を付与し、オーバーライドできないようにする）
- プロパティ変数は private、final とする
- オブジェクトの状態を変更させるようなメソッドは定義しない
- プロパティ変数に参照型の変更可能なオブジェクトを持つ場合は、変更されないよう注意する

```java
import java.util.ArrayList;
import java.util.List;

public final class TestImmutable {
    private final int num;

    private final List<User> users;

    public TestImmutable(int num, List<User> users) {
        this.num = num;
        List<User> userList = new ArrayList<User>();
        userList.addAll(users);
        this.users = userList;
    }

    public int getNum() {
        return this.num;
    }

    public List<User> getUsers() {
        List<User> userList = new ArrayList<User>();
        userList.addAll(users);
        return userList;
    }
}
```