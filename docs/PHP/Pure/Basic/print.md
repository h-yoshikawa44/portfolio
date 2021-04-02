---
id: php-print
title: PHP - 出力処理
sidebar_label: 出力処理
description: PHPの出力処理（echo、print、printf、var_dump、print_r）まとめ
keywords:
  - PHP
  - echo
  - print
  - printf
  - var_dump
  - print_r
---

- 検証バージョン：7.3.6

## echo
[公式ドキュメント - echo](https://www.php.net/manual/ja/function.echo)

1つ以上の文字列を出力。改行なし。  
関数でなく言語構造であるため、引数を括弧でくくる必要がない。

```php
<?php
$test = 'ABC';
echo $test; // ABC
echo 'A', 'B', 'C', 'D'; // ABCD
```

なお、ダブルクォーテーションとシングルクォーテーションの違いがあり、ダブルクォーテーションの時のみ変数が展開される。(その分、シングルクォーテーションの時より処理速度が少しかかる)

```php
<?php
$test = 'ABC';
echo "{$test}"; // ABC
echo '{$test}'; // {$test}
```

## print
[公式ドキュメント - print](https://www.php.net/manual/ja/function.print)

単一の引数のみ受け付ける出力。改行なし。  
関数でなく言語構造であるため、引数を括弧でくくる必要がない。

```php
<?php
$testPrint = 'DEF';
print $testPrint; // DEF
print "alphabet $testPrint"; // alphabet DEF
```

## printf
[公式ドキュメント - printf](https://www.php.net/manual/ja/function.printf)

フォーマット済みの文字列を出力する。改行なし。

```php
<?php
$testPrintF = 'alphabet A:%s B:%s';
printf($testPrintF, 'a', 'b'); // alphabet A:a B:b
```

## var_dump
[公式ドキュメント - var_dump](https://www.php.net/manual/ja/function.var-dump)

指定した式に関して、その方や値を含む構造化された情報を返す。

```php
<?php
$testVar = ['A', 'B', 'C', 'D'];
var_dump($testVar);
// array(4) {
//     [0] =>
//     string(1) "A"
//     [1] =>
//     string(1) "B"
//     [2] =>
//     string(1) "C"
//     [3] =>
//     string(1) "D"
//   }
```

## print_r
[公式ドキュメント - print_r](https://www.php.net/manual/ja/function.print-r)

指定した変数に関する情報をわかりやすく出力。

```php
<?php
$testPrintR = ['A', 'B', 'C', 'D'];
print_r($testPrintR);
// Array
// (
//     [0] => A
//     [1] => B
//     [2] => C
//     [3] => D
// )
```
