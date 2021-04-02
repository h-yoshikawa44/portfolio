---
id: php-syntax
title: PHP - 基本構文（変数、定数、関数）
sidebar_label: 基本構文（変数、定数、関数）
description: PHPの基本的な構文まとめ
keywords:
  - PHP
  - 基本構文
---

- 検証バージョン：7.3.6

## 実行箇所
実行ファイルの上から。

## 文末のセミコロン
必要。

## 変数
[公式ドキュメント - 変数](https://www.php.net/manual/ja/language.variables.php)

変数名は LowerCamelCase で、頭文字に`$`をつけるのが特徴。  
動的型付けであるため、型指定は不要。

```php
<?php
$変数名;

$変数名 = 初期化の値;
```

```php
<?php
$testValue = 'test';
echo $testValue; // test
```

## 定数
[公式ドキュメント - 定数](https://www.php.net/manual/ja/language.constants.php)

定数名は ScreamingSnakeCase で、こちらには`$`はつかない。

### define

```php
<?php
define(定数名, 値);
```

```php
<?php
define('TEST_VALUE', 'test');
echo TEST_VALUE; // test
```

### const
こちらの場合はトップレベルのスコープで宣言する必要がある。  
(関数、ループ、if 文、try / catch ブロックの内部では宣言できない)

```php
const 定数名;

const 定数名 = 初期化の値;
```

```php
<?php
const TEST_VALUE = 'test';
echo TEST_VALUE; // test
```

## 関数
[公式ドキュメント - 関数](https://www.php.net/manual/ja/language.functions.php)

### 基本構文
関数名は LowerCamelCase。  
引数の数は任意。

```php
<?php
function 関数名(引数)
{
    // 処理
}
```

```php
<?php
function echoValue($value)
{
    echo $value;
}

echoValue('test'); // test
```

### 返り値
関数の呼び出し側に値を返す場合は`return`で返す。

```php
<?php
function getValue()
{
    return ('test');
}

echo getValue(); // test
```

### タイプヒンティング
以下のように引数の型を指定して、型のチェックを行うことも可能。  
異なる型の値が渡された場合は、変換可能であれば変換（数値→文字列など）し、変換不能であればエラーになる。

```php
<?php
function echoValue(string $value)
{
    echo $value;
}

echoValue('test'); // test
```

使用できる型一覧。
- クラス名・インタフェース名
- self（そのメソッドが定義されているクラスと同じクラスのインスタンス）
- array
- callable
- boolean
- float
- int
- string
- iterable（arrayまたはTraversable、instanceof）
- object

### 引数のデフォルト値
引数にデフォルト値指定も可能。

```php
<?php
function echoValue($value = 'test')
{
    echo $value;
}

echoValue(); // test
```

### 可変長引数
`...`で可変長の引数を受け取ることができる。

```php
<?php
function dumpValue(...$value)
{
    var_dump($value);
}
dumpValue('a', 'b');
// array(2) {
//   [0]=>
//   string(1) "a"
//   [1]=>
//   string(1) "b"
// }
```

### 無名関数
クロージャとも呼ばれる。  
関数名を指定せずに関数を作成できる。

コールバックパラメータとして使用できるが、変数の値としても使用できる。

```php
<?php
$echoValue = function($value)
{
    echo $value;
}; // セミコロンを忘れずにつける

$echoValue('test'); // test
```