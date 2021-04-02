---
id: php-if
title: PHP - 分岐処理
sidebar_label: 分岐処理
description: PHPの分岐処理（if、三項演算子、switch）まとめ
keywords:
  - PHP
  - if
  - 三項演算子
  - switch
---

- 検証バージョン：7.3.6

## if
[公式ドキュメント - if](https://www.php.net/manual/ja/control-structures.if.php)
[公式ドキュメント - else if](https://www.php.net/manual/ja/control-structures.elseif.php)
[公式ドキュメント - else](https://www.php.net/manual/ja/control-structures.else.php)

式の真偽に応じて処理を行う。

```php
if (条件式1) {
    処理１;
} elseif (条件式2) {
    処理２;
} else {
    処理３;
}
```
```php
<?php
ifValue(6); // 大
ifValue(4); // 中
ifValue(2); // 小

function ifValue($value)
{
    if ($value > 5) {
        echo '大' . "\n";
    } elseif ($value > 3) {
        echo '中' . "\n";
    } else {
        echo '小' . "\n";
    }
}
```

## 三項演算子
if 文をより簡潔に記述したもの。

```php
条件式 ? 真の時の処理 : 偽の時の処理;
```
```php
<?php
$num = 9;
$str = "numの値は";
$str2 = $num < 10 ? "10未満" : "10以上";
echo $str . $str2; // numの値は10未満
```

## switch
[公式ドキュメント - switch](https://www.php.net/manual/ja/control-structures.switch.php)

対象の値が一致する`case`以降の処理を行う。  
その`case`だけの処理を行いたい場合は、`break`で処理を抜ける。
`default`句についてはなくても使用可能。

```php
switch(対象) {
    case 値1:
        処理1
    case 値2:
        処理2;
    default:
        処理3;
```
```php
<?php
switchValue(6); // 大中
switchValue(4); // 中
switchValue(2); // 小終

function switchValue($value)
{
    switch($value) {
        case 6:
            echo '大';
        case 4:
            echo '中';
            break; // breakがある場合はそこで処理を切り上げる
        case 2:
            echo '小';
        default:
            echo '終';
    }
}
```