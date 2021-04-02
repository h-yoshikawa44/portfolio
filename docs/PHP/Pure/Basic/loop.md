---
id: php-loop
title: PHP - 繰り返し処理
sidebar_label: 繰り返し処理
description: PHPの繰り返し処理（while、do~while、for、foreach）まとめ
keywords:
  - PHP
  - while
  - do~while
  - for
  - foreach
---

- 検証バージョン：7.3.6

## 制御
[公式ドキュメント - break](https://www.php.net/manual/ja/control-structures.break.php)
[公式ドキュメント - continue](https://www.php.net/manual/ja/control-structures.continue.php)

繰り返し構文で共通して使える制御構文として、以下のものがある。
- break：繰り返しから抜ける
- continue：次のループへ移行する

## while
[公式ドキュメント - while](https://www.php.net/manual/ja/control-structures.while.php)

条件式が真の場合に処理を行い繰り返す。  
条件式が真であり続ける限り無限ループになるため、必ずループから抜けるような処理を記述する。

```php
while ( 条件式 ) {
    処理;
}
```
```php
<?php
$testWhile = 1;
while ($testWhile < 4) {
    echo $testWhile;
    $testWhile++;
}
// 123
```

## do~while
[公式ドキュメント - do~while](https://www.php.net/manual/ja/control-structures.do.while.php)

基本的には while 文と同様であるが、必ず1回は処理が実行される構文。

```php
do {
    処理;
} while (条件式);
```
```php
<?php
$testDo = 1;
do {
    echo $testDo;
    $testDo++;
} while ($testDo < 4);
// 123
```

## for
[公式ドキュメント - for](https://www.php.net/manual/ja/control-structures.for.php)

条件式が真の場合に処理を行い繰り返す。
- 変数初期化：ループ開始時に一度だけ実行される
- 条件式：各ループの開始時のたびに評価される
- 更新処理：各ループの終了時に実行される

なお、条件式を省略した場合は無限ループになる。

```php
for (変数定義; 条件式; 更新処理) {
    処理;
}
```
```php
<?php
for ($i = 0; $i < 3; $i++) {
    echo $i;
}
// 012
```

for 文の中で使われている変数の値を、以下のように配列のインデックスとして使うことも多い。

```php
<?php
$list = ['A', 'B', 'C'];
for ($i = 0; $i < 3; $i++) {
    echo $list[$i];
}
// ABC
```

## foreach
[公式ドキュメント - foreach](https://www.php.net/manual/ja/control-structures.foreach.php)

配列またはコレクションの要素がある限り、処理を繰り返す。

### 配列形式
```php
foreach (配列 as 変数名) {
    処理;
}
```
```php
<?php
$list = ['A', 'B', 'C', 'D', 'E'];
foreach ($list as $value) {
    echo $value;
}
// ABCDE
```

### 連想配列形式
```php
foreach (配列 as キー => 値) {
    処理;
}
```
```php
<?php
$keyValues = ['a' => 'A', 'b' => 'B', 'c' => 'C'];
foreach ($keyValues as $key => $value) {
    echo $key . ':' . $value . "\n";
}
// a:A
// b:B
// c:C
```

