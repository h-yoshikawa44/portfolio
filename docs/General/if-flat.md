---
id: if-flat
title: 汎用 - 分岐処理を減らす
sidebar_label: 分岐処理を減らす
description: 汎用の分岐処理を減らすためのテクニックまとめ
keywords:
  - General
---

参考：[Qiita - プログラムの可読性を上げるための条件分岐を減らす方法7個](https://qiita.com/ddtaka/items/b178358ebc5b38c6906a)

## ガード節
処理の対象外になる条件の場合、関数の先頭で return / continue する方法。

悪い例（Java）
```java
public class Main {
    public static void main(String[] args) throws Exception {
        String val1 = "A";
        String val2 = "B";
        System.out.println(testNonGuard(null, val2)); // 2
    }

    public static int testNonGuard(String v1, String v2) {
        int result = 0;
        if (v1 != null) {
            result = 1;
        } else {
            if (v2 != null) {
                result = 2;
            }
        }

        return result;
    }
}
```

良い例（Java)
```java
public class Main {
    public static void main(String[] args) throws Exception {
        String val1 = "A";
        String val2 = "B";
        System.out.println(testGuard(null, val2)); // 2
    }
    public static int testGuard(String v1, String v2) {
        if (v1 != null) return 1;
        if (v2 != null) return 2;

        return 0;
    }
}

```

## bool判定
bool 判定する際に簡略化して書く方法。

悪い例（Java)
```java
public class Main {
    public static void main(String[] args) throws Exception {
        System.out.println(testBool("test")); // false
    }

    public static boolean testBool(String str) {
        if(str == "" ) {
            return true;
        }
        return false;
    }
}

```

良い例（Java)
```java
public class Main {
    public static void main(String[] args) throws Exception {
        System.out.println(testBoolShort("test")); // false
    }

    public static boolean testBoolShort(String str) {
        return str == "";
    }
}
```

## 配列利用
配列を活用して条件分岐を減らす方法。

switchでの例（Java)
```java
public class Main {
    public static void main(String[] args) throws Exception {
        System.out.println(testSwitch(0)); // 駅名1
    }

    public static String testSwitch(int num) {
        String name = "";
        switch (num) {
            case 0:
                name = "駅名1";
                break;
            case 1:
                name = "駅名2";
                break;
            case 2:
                name = "駅名3";
                break;
            default:
                name = "該当なし";
                break;
    }
    return name;
    }
}
```

配列を活用した例（Java）
```java
public class Main {
    public static void main(String[] args) throws Exception {
        System.out.println(testArray(0)); // 駅名1
    }

    public static String testArray(int num) {
        String[] array = {"駅名1", "駅名2", "駅名3"};
        if (num <= 0 || num >= array.length ) {
            return "該当なし";
        }
        return array[num];
    }
}
```

## 三項演算子
if 文は三項演算子を使うことで、より簡潔に記述できる。  
ただし、複雑な処理の場合は可読性が落ちるので、簡潔な処理の時のみ使用するとよい。

if 文の例（Java)
```java
public class Main {
    public static void main(String[] args) throws Exception {
        boolean bool = true;
        int result1 = 0;
        if (bool) {
            result1 = 1;
        } else {
            result1 = 2;
        }
        System.out.println(result1); // 1
    }
}
```

三項演算子の例（Java)
```java
public class Main {
    public static void main(String[] args) throws Exception {
        boolean bool = true;
        int result2 = bool ? 1 : 2;
        System.out.println(result2); // 1
    }
}
```

## 型定義の実装
PHP のように動的型付けでありながらメソッドの引数の型指定が行えるものは、定義の時点で型を指定しておくことで、メソッド内での型チェックを減らすことができる。

メソッド内で型チェックする例（PHP)
```php
<?php
echo testNonArgumentCheck(1); // SELECT * FROM user WHERE user_id = 1
function testNonArgumentCheck($id) {
    if (!is_int($id)) {
        throw new \Exception('id must be type int');
    }

    return  "SELECT * FROM user WHERE user_id = {$id}";
}
```

定義で型チェック（タイプヒンティング）する例（PHP)
```php
echo testArgumentCheck(1); // SELECT * FROM user WHERE user_id = 1
function testArgumentCheck(int $id) {
    return "SELECT * FROM user WHERE user_id = {$id}";
}
```

## 言語特有の演算子
言語特有の演算子を活用することで、条件分岐を減らす方法。

活用しない例（JavaScript)
```javascript
const test = value => {
    let result = 0;
    if (!!value) {
        result = value;
    }
    return result;
}

console.log(test(1)); // 1
console.log(test(0)); // 0
console.log(test(false)); // 0
console.log(test('')); // 0
console.log(test(null)); // 0
console.log(test(undefined)); // 0
```

活用した例（JavaScript)
```javascript
const test = value => {
    return value || 0;
}

console.log(test(1)); // 1
console.log(test(0)); // 0
console.log(test(false)); // 0
console.log(test('')); // 0
console.log(test(null)); // 0
console.log(test(undefined)); // 0
```
