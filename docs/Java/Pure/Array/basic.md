---
id: java-array-basic
title: Java - 配列基本操作
sidebar_label: 基本操作
description: Javaの配列の基本的な操作まとめ
keywords:
  - Java
  - 配列
---

- 検証バージョン：openjdk version 12

## 配列
### 宣言 + 初期化
Java の配列は固定長配列である。宣言時に要素数を指定して、その容量を確保する。
```java
import java.util.Arrays;

public class Main {
    public static void main(String[] args) throws Exception {
        // 宣言 + 初期化（値指定なし）
        int[] numArray = new int[3];
        System.out.println(numArray[0]); // 0（型に応じたデフォルト値が入る）
        )

        // 宣言 + 初期化
        int[] numArray2 = new int[]{1, 2};
        System.out.println(Arrays.toString(numArray2)); // [1, 2]
        // System.out.println(numList2[2]); // 配列のサイズ外なのでArrayIndexOutOfBoundsException

        // 宣言+初期化 省略形
        int[] numArray3 = {3, 4};
        for(int num : numArray3) {
            System.out.println(num);
        }
        // 3
        // 4

        // 宣言済みの変数に以下の書き方は不可
        // numArray = {3, 4};
    }
}
```

### 要素追加・削除
Java の配列は固定長であるため、その長さを変更するような操作は基本的にできない。  
やるとするなら一例として、可変長である List に変換して操作を行った後に配列へ再変換する方法がある。

```java
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Main {
    public static void main(String[] args) throws Exception {
        String[] strArray = {"A", "B", "C"};
        List<String> arrayToList = new ArrayList<String>(Arrays.asList(strArray));
        arrayToList.add("D"); // 末尾に要素の追加
        arrayToList.remove("B"); // 指定した要素の削除
        String[] listToArray = arrayToList.toArray(new String[arrayToList.size()]);
        for (String str : listToArray) {
        	System.out.println(str);
        }
        // A
        // C
        // D
    }
}
```

:::caution
注意点として、List への変換を単純な`Arrays.asList`だけで行った場合は**固定長のリスト**に変換する。  
そのため、リストでありながら要素の追加や削除などの操作ができない。  
:::

```java
import java.util.Arrays;
import java.util.List;

public class Main {
    public static void main(String[] args) throws Exception {
        String[] strArray = {"A", "B", "C"};
        List<String> arrayToList = Arrays.asList(strArray);
        // arrayToList.add("D"); // 固定長のリストであるため不可（UnsupportedOperationException）
        // arrayToList.remove("B"); // 固定長のリストであるため不可（UnsupportedOperationException）
        for (String str : arrayToList) {
        	System.out.println(str);
        }
        // A
        // B
        // C
    }
}
```

### 配列の結合
Apache Commons Lang ライブラリの`ArrayUtils.addAll`を使用すれば可能。

ライブラリを使わないのであれば、これもまた一度リストに変換して処理し、配列に再変換する方法ができる。

```java
import java.util.Arrays;
import java.util.List;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) throws Exception {
        String[] mergeArray1 = {"A", "B", "C"};
        String[] mergeArray2 = {"D", "E", "F"};
        List<String> mergeList = new ArrayList<String>();
        mergeList.addAll(Arrays.asList(mergeArray1));
        mergeList.addAll(Arrays.asList(mergeArray2));
        String[] mergedArray = mergeList.toArray(new String[mergeList.size()]);
        for (String str : mergedArray) {
        	System.out.println(str);
        }
        // A
        // B
        // C
        // D
        // E
        // F
    }
}
```

### 配列のサイズ
```java
public class Main {
    public static void main(String[] args) throws Exception {
        String[] sizeArray = {"A", "B", "C"};
        System.out.println(sizeArray.length); // 3
    }
}
```

### 配列のソート
```java
import java.util.Arrays;

public class Main {
    public static void main(String[] args) throws Exception {
        int[] sortArray = {1, 6, 3};
        Arrays.sort(sortArray);
        for (int num : sortArray) {
            System.out.println(num);
        }
        // 1
        // 3
        // 6
    }
}
```

## 2次元配列
1次元当たりの要素数はバラバラでも作成可能。
```java
public class Main {
    public static void main(String[] args) throws Exception {
        int[][] array = {
            {10,20,30,40},
            {100,200,300,400},
            {1000,2000,3000}
        };
        System.out.println(array[0][0]); // 10
        System.out.println(array[0][3]); // 40
        System.out.println(array[2][2]); // 3000
    }
}
```