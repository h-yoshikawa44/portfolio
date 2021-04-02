---
id: php-array-basic
title: PHP - 配列基本操作
sidebar_label: 基本操作
description: PHPの配列、連想配列の基本的な操作まとめ
keywords:
  - PHP
  - 配列
  - 連想配列
---

検証バージョン：7.3.6。

## 配列
### 宣言 + 初期化
```php
<?php
// 宣言+初期化（空）
$list = [];
print_r($list);
// Array
// (
// )

// 宣言+初期化
$list2 = [1, 2, 3];
print_r($list2);
// Array
// (
//     [0] => 1
//     [1] => 2
//     [2] => 3
// )
```

### 要素追加
#### 配列末尾に追加
```php
<?php
$list = [1, 2, 3];
$list[] = 4;
print_r($list);
// Array
// (
//     [0] => 1
//     [1] => 2
//     [2] => 3
//     [3] => 4
// )
```

#### 配列末尾に追加（1つ～複数）：array_push
[公式ドキュメント](https://www.php.net/manual/ja/function.array-push)

```php
array_push(配列, 追加する値...);
```
```php
<?php
$list = [1, 2, 3];
array_push($list, 4, 5);
print_r($list);
// Array
// (
//     [0] => 1
//     [1] => 2
//     [2] => 3
//     [3] => 4
//     [4] => 5
// )
```

#### 配列間に追加：array_splise
[公式ドキュメント](https://www.php.net/manual/ja/function.array-splice)

array_splice はもともと置換に使用する関数。
削除する文字数を0とすることで間に挿入としても使用できる。
```php
array_splice(配列, 置き換える位置, 削除する文字数, 置き換える値);
```
```php
<?php
$list = [1, 2, 3];
array_splice($list, 2, 0, 9);
print_r($list);
// Array
// (
//     [0] => 1
//     [1] => 2
//     [2] => 9
//     [3] => 3
// )
```

#### 配列先頭に追加（1つ～複数）：array_unshift
[公式ドキュメント](https://www.php.net/manual/ja/function.array-unshift)

```php
array_unshift(配列, 追加する値...);
```
```php
<?php
$list = [1, 2, 3];
array_unshift($list, 0);
print_r($list);
// Array
// (
//     [0] => 0
//     [1] => 1
//     [2] => 2
//     [3] => 3
// )
```

### 要素削除（1つ～複数）：unset
[公式ドキュメント](https://www.php.net/manual/ja/function.unset)

```php
unset(削除する変数...);
```
```php
<?php
$list = [1, 2, 3];
unset($list[1]);
print_r($list);
// Array
// (
//     [0] => 1
//     [2] => 3
// )
```

### 配列の結合
#### array_merge
[公式ドキュメント](https://www.php.net/manual/ja/function.array-merge)

3つ以上の配列の結合も可能。
```php
array_merge(配列...);
```

キーが数値：キー重複時、値は上書きされない。添字番号が振り直されて全て保持される。  
キーが文字列：キー重複時、値が上書きされる。
```php
<?php
$list = [1, 2, 'a' => 'A'];
$list2 = [4, 5, 'a' => 'z'];
$mergeList = array_merge($list, $list2);
print_r($mergeList);
// Array
// (
//     [0] => 1
//     [1] => 2
//     [a] => z
//     [2] => 4
//     [3] => 5
// )
```

#### array_merge_recursive
[公式ドキュメント](https://www.php.net/manual/ja/function.array-merge-recursive)

3つ以上の配列の結合も可能。
```php
array_merge_recursive(配列...);
```

キーが数値：キー重複時、値は上書きされない。添字番号が振り直されて全て保持される。  
キーが文字列：キー重複時、値が全て保持される。
```php
<?php
$list = [1, 2, 'a' => 'A'];
$list2 = [4, 5, 'a' => 'z'];
$mergeList = array_merge_recursive($list, $list2);
print_r($mergeList);
// Array
// (
//     [0] => 1
//     [1] => 2
//     [a] => Array
//         (
//             [0] => A
//             [1] => z
//         )

//     [2] => 4
//     [3] => 5
// )
```

#### +演算子
キーが数値：キー重複時、値は前の配列を残す。添字番号の振り直しはされない。  
キーが文字列：キー重複時、値は前の配列を残す。
```php
<?php
$list = [1, 2, 'a' => 'A'];
$list2 = [4, 5, 'a' => 'z'];
$mergeList = $list + $list2;
print_r($mergeList);
// Array
// (
//     [0] => 1
//     [1] => 2
//     [a] => A
// )
```

### 配列のサイズ
#### count
[公式ドキュメント](https://www.php.net/manual/ja/function.count)

```php
<?php
$list = [1, 2, 3];
echo count($list); // 3
```

#### sizeof
[公式ドキュメント](https://www.php.net/manual/ja/function.sizeof)

```php
<?php
$list = [1, 2, 3];
echo sizeof($list); // 3
```

### 配列のソート
[公式ドキュメント](https://www.php.net/manual/ja/array.sorting.php)

```php
<?php
$sortList = [1, 3, 2];
asort($sortList); // 値の昇順（キーと値の関係を保持）
print_r($sortList);
// Array
// (
//     [0] => 1
//     [2] => 2
//     [1] => 3
// )
arsort($sortList); // 値の降順（キーと値の関係を保持）
print_r($sortList);
// Array
// (
//     [1] => 3
//     [2] => 2
//     [0] => 1
// )
```

## 連想配列
### 宣言 + 初期化
```php
<?php
$map = ['a' => 'A', 'b' => 'B'];
print_r($map);
// Array
// (
//     [a] => A
//     [b] => B
// )
```

### 要素の追加
#### キーを指定
```php
<?php
$map = ['a' => 'A', 'b' => 'B'];
$map['c'] = 'C';
print_r($map);
// Array
// (
//     [a] => A
//     [b] => B
//     [c] => C
// )
```

#### 配列末尾に追加
```php
<?php
$map = ['a' => 'A', 'b' => 'B'];
$map += ['d' => 'D'];
print_r($map);
// Array
// (
//     [a] => A
//     [b] => B
//     [c] => C
// )
```

### 連想配列のソート
```php
<?php
$sortMap = ['C' => 2, 'A' => 1, 'B' => 3];
asort($sortMap); // 値の昇順（キーと値の関係を保持）
print_r($sortMap);
// Array
// (
//     [A] => 1
//     [C] => 2
//     [B] => 3
// )
arsort($sortMap); // 値の降順（キーと値の関係を保持）
print_r($sortMap);
// Array
// (
//     [B] => 3
//     [C] => 2
//     [A] => 1
// )
ksort($sortMap); // キーの昇順（キーと値の関係を保持）
print_r($sortMap);
// Array
// (
//     [A] => 1
//     [B] => 3
//     [C] => 2
// )
krsort($sortMap); // キーの降順（キーと値の関係を保持）
print_r($sortMap);
// Array
// (
//     [C] => 2
//     [B] => 3
//     [A] => 1
// )
```

## 2次元配列
1次元当たりの要素数はバラバラでも作成可能。
```php
<?php
$array = [[10, 20, 30, 40], [100, 200, 300, 400], [1000, 2000, 3000]];
print_r($array);
// Array
// (
//     [0] => Array
//         (
//             [0] => 10
//             [1] => 20
//             [2] => 30
//             [3] => 40
//         )

//     [1] => Array
//         (
//             [0] => 100
//             [1] => 200
//             [2] => 300
//             [3] => 400
//         )

//     [2] => Array
//         (
//             [0] => 1000
//             [1] => 2000
//             [2] => 3000
//         )

// )
```
