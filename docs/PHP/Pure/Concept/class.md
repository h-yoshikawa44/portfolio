---
id: php-class
title: PHP - クラス
sidebar_label: クラス
description: PHPのクラス構文、構成要素および概念まとめ
keywords:
  - PHP
  - クラス
---

- 検証バージョン：7.3.6

[公式ドキュメント - クラスとオブジェクト](https://www.php.net/manual/ja/language.oop5.php)

## 基本構文
クラス名は UpperCamelCase。

```php
<?php
class クラス名
{
    // プロパティやメソッド定義
}
```

クラスの中に定義された定数や変数を`プロパティ`と呼ぶ。  
また、クラス内に定義された関数を`メソッド`と呼ぶ。

これらは通常インスタンス単位で割り当てられるものである。  
クラス内で他の変数やメソッドにアクセスは`$this->変数名`、`$this->メソッド名(引数)`とする。

`new クラス名()`でクラスインスタンスを作成。
変数やメソッドへのアクセスは`クラスインスタンス->変数名`、`クラスインスタンス->メソッド名(引数)`で可能。

```php
<?php
class TestClass
{
    public $value = 'test';

    function getValue() {
        return $this->value;
    }

    function echoValue() {
        echo $this->getValue();
    }
}

$tc = new TestClass();
echo $tc->value; // test
$tc->echoValue(); // test
```

## 静的なプロパティとメソッド
[公式ドキュメント - staticキーワード](https://www.php.net/manual/ja/language.oop5.static.php)

`static`をつけて定義したプロパティとメソッドは静的なものとなり、クラス単位で割り当てられる。  
また`const`で定義された定数も同様である。

クラス内で他の静的な変数やメソッドにアクセスは`self::プロパティ名`、`self::メソッド名(引数)`となる。  
インスタンス化せずに呼び出しが可能であり、`クラス名::プロパティ名`、`クラス名::メソッド名(引数)`で呼び出す。

**注意点として、静的なメソッドからは静的でない変数やメソッドにアクセスすることはできない。**

```php
<?php
class Test
{
    public static $value = 'test';

    const TEST_VALUE = 'TEST';

    static function echoValue() {
        echo self::$value;
        echo ' ';
        echo self::TEST_VALUE;
    }
}

echo Test::$value; // test
echo Test::TEST_VALUE; // TEST
Test::echoValue(); // test TEST
```

## アクセス修飾子
[公式ドキュメント - アクセス権](https://www.php.net/manual/ja/language.oop5.visibility.php)

プロパティ、メソッドに指定することで、アクセスできる範囲の制御ができる。
変数には指定が必須。定数やメソッドに指定しなかった場合は public が適用される。

- public：クラス外から自由にアクセスできる
- protected：クラス内および継承したクラス内からのみアクセスできる
- private：クラス内からのみアクセスできる

## コンストラクタ
[公式ドキュメント - コンストラクタとデストラクタ](https://www.php.net/manual/ja/language.oop5.decon.php)

クラスのインスタンス化時に実行される特殊なメソッドで、プロパティの初期化処理などに使われることが多い。  
`__construct()`で定義する。

引数に関しては任意で指定可能で、インスタンス化時に`new クラス名(引数)`とすることで渡すことができる。

```php
<?php
function __construct(引数名) {
    // 処理
}
```

```php
<?php
class Test
{
    public $value;

    function __construct() {
        $this->value = 'test';
    }

    function echoValue() {
        echo $this->value;
    }
}

$tc = new Test();
$tc->echoValue(); // test
```

## 継承
[公式ドキュメント - オブジェクトの継承](https://www.php.net/manual/ja/language.oop5.inheritance.php)

### 子クラスの定義
クラス定義時に`extends`で継承するクラスを指定。
アクセス修飾子が`private`以外のプロパティやメソッドは、子クラスへ継承される。

なお、多重継承は不可。

```php
<?php
class Test
{
    public $value;

    function __construct() {
        $this->value = 'test';
    }

    function echoValue() {
        echo $this->value;
    }
}

class SubTest extends Test
{
    function __construct() {
        $this->value = 'sub test';
    }
}

$tc = new Test();
$tc->echoValue(); // test
$stc = new SubTest();
$stc->echoValue(); // sub test
```

### オーバーライド
親クラスで定義されているメソッドと同名、同引数のメソッドを子クラスで定義して上書きできる。

```php
<?php
class Test
{
    function echoValue() {
        echo 'parent';
    }
}

class SubTest extends Test
{
    function echoValue() {
        echo 'child';
    }
}

$tc = new Test();
$tc->echoValue(); // parent
$stc = new SubTest();
$stc->echoValue(); // child
```

### 親クラスのメソッドを使用
明示的に親クラスのメソッドを使用する際は、`parent::メソッド名(引数)`で呼び出せる。

```php
<?php
class Test
{
    function getValue() {
        echo 'parent';
    }
}

class SubTest extends Test
{
    function getValue() {
        parent::getValue();
        echo ' ';
        echo 'sub';
    }
}

$tc = new Test();
$tc->getValue(); // parent
$stc = new SubTest();
$stc->getValue(); // parent sub
```