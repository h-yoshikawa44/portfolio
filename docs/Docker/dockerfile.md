---
id: docker-dockerfile
title: Docker - Dockerfile
sidebar_label: Dockerfile
description: DockerのDockerfileで定義できる命令まとめ
keywords:
  - Docker
  - Dockerfile
---

- 検証バージョン：Docker 19.03

## 概要
イメージの元になるファイル。  
どの既存イメージをベースとするか、実行するコマンド、環境変数などを定義できる。

## 定義できること
出典はこちら。
- [Docker - Dockerfile reference](https://docs.docker.com/engine/reference/builder/#from)
- [Docker-docs-ja - Dockerfile リファレンス](http://docs.docker.jp/engine/reference/builder.html)

### FROM
ベースとするイメージの指定。  
以降、実行されるものはこのイメージの上にレイヤーが構成されていく。

書式は以下のいずれか。

```dockerfile
FROM [--platform=<platform>] <image> [AS <name>]

FROM [--platform=<platform>] <image>[:<tag>] [AS <name>]

FROM [--platform=<platform>] <image>[@<digest>] [AS <name>]
```

image とバージョンを示すtagで書くことが多い印象。
```dockerfile
FROM node:12-alpine
```

`platform`オプションに関しては、マルチプラットフォームイメージを使用する際に、どのプラットフォーム用イメージを使用するかの指定に使用する。

基本的には Dockerfile の先頭に来るが、タグの値を`ARG`で持たせて、それを当てはめるような書き方もできる。
```dockerfile
ARG NODE_VERSION=12-alpine
FROM node:${NODE_VERSION}
```

### RUN
イメージビルド時にシェルで実行するコマンドの指定。  
デフォルトでは以下で実行される（変更する場合は、コマンドと一緒に指定するか`SHELL`で指定）
- Linux：`/bin/sh -c`
- Windows：`cmd /S /C`

現在のイメージの上にある新しいレイヤーでコマンドを実行し、結果をコミットする。  
`RUN`の実行結果はキャッシュされ、次回以降はキャッシュから使用される。キャッシュを使いたくない場合はビルド時に`--no-cache`オプションをつける。

書式は以下のいずれか。
```dockerfile
# シェル方式
RUN <command>

# exec方式
RUN ["executable", "param1", "param2"]
```

定義例。
```dockerfile
RUN apt-get -y update
```

exec 方式の注意点として、コマンド・シェルを呼び出さないためシェルによる処理が行われない。  
具体的には`$HOME`など変数を使ったときに変数展開が行われないなど。
```dockerfile
RUN [ "echo", "$HOME" ]
```

この場合はシェルも指定するとよい。
```dockerfile
RUN [ "sh", "-c", "echo $HOME" ]
```

シェル方式で`\`を使うと改行してコマンドが書ける。
```dockerfile
RUN apt-get install -y \
  git \
  gcc
```

デフォルトのシェルを一時的に変更したうえでのコマンド実行。
```dockerfile
# シェル方式
RUN /bin/bash -c 'echo hello'

# exec方式
RUN ["/bin/bash", "-c", "echo hello"]
```

### CMD
コンテナを起動する際に実行するコマンドを指定。

書式は以下のいずれか。
```dockerfile
# exec形式（推奨）
CMD ["executable","param1","param2"]

# シェル方式
CMD command param1 param2
```

定義例。
```dockerfile
CMD ["yarn", "start"]
```

もしくはコンテナ起動時に動作する`ENTRYPOINT`の引数を指定（こちらの場合は、`ENTRYPOINT`、`CMD`ともに exec 方式の必要がある）
```dockerfile
# ENTRYPOINTのデフォルト引数
CMD ["param1","param2"]
```

CMDは1つのDockerfileにつき、1つしか定義できない。複数定義した場合は、最後に定義したものが使用される。

`CMD`の exec 方式においても、コマンド・シェルを呼び出さないためシェルによる処理が行われない。  
具体的には`$HOME`など変数を使ったときに変数展開が行われないなど。
```dockerfile
CMD [ "echo", "$HOME" ]
```

この場合はシェルも指定するとよい。
```dockerfile
CMD [ "sh", "-c", "echo $HOME" ]
```

### LABEL
イメージにキー・バリュー形式のメタデータを追加。  
元イメージで定義されていたラベルは継承されるが、それと同名のキーを設定した場合は上書きになる。

```dockerfile
LABEL <key>=<value> <key>=<value> <key>=<value> ...
```

スペースを入れたい時はクォートで囲う。分割させたい時は`\`を使う。
```dockerfile
LABEL "com.example.vendor"="ACME Incorporated"
LABEL com.example.label-with-value="foo"
LABEL version="1.0"
LABEL description="This text illustrates \
that label-values can span multiple lines."
```

1つの`LABEL`で複数のラベルを指定することもできる。
```dockerfile
LABEL multi.label1="value1" \
      multi.label2="value2" \
      other="value3"
```

なお、設定したラベルは`$ docker image inspect`で確認できる。

### MAINTAINER（非推奨）
イメージの制作者情報を追加。  
現在は`LABEL`で追加することを推奨しているため、非推奨。

```dockerfile
MAINTAINER <name>
```

### EXPOSE
コンテナ実行時に待ち受ける特定のネットワーク・ポートを指定。

```dockerfile
EXPOSE <port> [<port>/<protocol>...]
```

プロトコルは TCP と UDP のいずれかを指定できる。プロトコル指定なしのデフォルトは TCP。
```dockerfile
EXPOSE 80/tcp
EXPOSE 80/udp
```

なお、`EXPOSE`を指定するだけでは、ホストからコンテナにアクセスできるようにはならないことに注意。

### ENV
環境変数をキー・バリュー形式で指定。

書式は以下のいずれか。
```dockerfile
ENV <key> <value>

ENV <key>=<value> ...
```

後者の形式の場合は、1つの`ENV`で複数の環境変数の指定が可能。こちらの方が単一のキャッシュ・レイヤーしか使わないため、推奨されている。
```dockerfile
ENV myName="John Doe" myDog=Rex\ The\ Dog \
    myCat=fluffy

# 以下と同じ
ENV myName John Doe
ENV myDog Rex The Dog
ENV myCat fluffy
```

### ADD
送信元（ビルドコンテキスト上もしくは、特定の URL ）にあるファイルやディレクトリをコピーし、コンテナ内の送信先パスに配置。

書式は以下のいずれか。  
パスにスペースが含まれる場合は、後者の書式で書く。
```dockerfile
ADD [--chown=<user>:<group>] <src>... <dest>

ADD [--chown=<user>:<group>] ["<src>",... "<dest>"]
```

パスには Go 言語の [filepath.Match](https://golang.org/pkg/path/filepath/#Match) ルールに一致するパターンが書ける。
```dockerfile
ADD dir1 /mydir/

# "hom" で始まる全てのファイルを追加
ADD hom* /mydir/

# "home.txt"などパターンに一致するファイルを追加（?は任意の1文字）
ADD hom?.txt /mydir/
```

送信先のパスは絶対パスか、`WORKDIR`からの相対パス。
```dockerfile
 # "test" を `WORKDIR`/relativeDir/ （相対ディレクトリ）に追加
ADD test relativeDir/

# "test" を /absoluteDir/ （絶対ディレクトリ）に追加
ADD test /absoluteDir/
```

追加される新しいファイルやディレクトリの UID と GID のデフォルトは0として作成される。  
指定する場合は`--chown`オプションで指定する。
```dockerfile
ADD --chown=55:mygroup files* /somedir/
ADD --chown=bin files* /somedir/
ADD --chown=1 files* /somedir/
ADD --chown=10:11 files* /somedir/
```

### COPY
送信元（ビルドコンテキスト上）にあるファイルやディレクトリをコピーし、コンテナ内の送信先パスに配置。

書式は以下のいずれか。  
パスにスペースが含まれる場合は、後者の書式で書く。
```dockerfile
COPY [--chown=<user>:<group>] <src>... <dest>

COPY [--chown=<user>:<group>] ["<src>",... "<dest>"]
```

パスには Go 言語の [filepath.Match](https://golang.org/pkg/path/filepath/#Match) ルールに一致するパターンが書ける。
```dockerfile
COPY dir1 /mydir/

# "hom" で始まる全てのファイルを追加
COPY hom* /mydir/

# "home.txt"などパターンに一致するファイルを追加（?は任意の1文字）
COPY hom?.txt /mydir/
```

送信先のパスは絶対パスか、`WORKDIR`からの相対パス。
```dockerfile
# "test" を `WORKDIR`/relativeDir/ （相対ディレクトリ）に追加
COPY test relativeDir/

# "test" を /absoluteDir/ （絶対ディレクトリ）に追加
COPY test /absoluteDir/
```

追加される新しいファイルやディレクトリの UID と GID のデフォルトは0として作成される。  
指定する場合は`--chown`オプションで指定する。
```dockerfile
COPY --chown=55:mygroup files* /somedir/
COPY --chown=bin files* /somedir/
COPY --chown=1 files* /somedir/
COPY --chown=10:11 files* /somedir/
```

#### ADD と COPY の要点まとめと比較
| |ADD|COPY
|---|---|---|
|送信元にビルドコンテキスト外を指定|不可|不可|
|送信元に URL 指定|可能|不可|
|送信元が URL + 送信先末尾が/以外 の挙動|URL からファイルをダウンロードし送信先にコピー。|-|
|送信元が URL + 送信先末尾が/ の挙動|URL からファイル名を推測し、ファイルを送信先/ファイル名にダウンロード|-|
|送信元がディレクトリの挙動|ディレクトリの内容の全てをコピー（ファイルシステムのメタデータ含む）|※ ADD と同じ|
|送信元がビルドコンテキスト内の圧縮リソース の挙動|tar アーカイブの場合、圧縮フォーマットを認識（gzip、bzip2、xz を認識）し、ディレクトリに展開|-|
|送信元がURLの圧縮リソース の挙動|展開しない|-|
|複数の送信元が指定された場合や、ディレクトリやワイルドカードを使った場合 のルール|送信先は必ずディレクトリ|※ADD と同じ|
|送信先末尾が/以外|通常のファイルとみなされ、送信元の内容は送信先として書き込まれる|※ADD と同じ|
|送信先が存在しない場合の挙動|存在しないディレクトリを作成|※ADD と同じ|

### ENTRYPOINT
コンテナを起動する際に実行するコマンドを指定。

書式は以下のいずれか。
```dockerfile
# exec方式（推奨）
ENTRYPOINT ["executable", "param1", "param2"]

# シェル方式
ENTRYPOINT command param1 param2
```

`ENTRYPOINT`が複数定義されている場合、最後に定義したもののみ有効となる。

`ENTRYPOINT`の exec 方式においても、コマンド・シェルを呼び出さないためシェルによる処理が行われない。  
具体的には`$HOME`など変数を使ったときに変数展開が行われないなど。
```dockerfile
ENTRYPOINT [ "echo", "$HOME" ]
```
この場合はシェルも指定するとよい。
```dockerfile
ENTRYPOINT [ "sh", "-c", "echo $HOME" ]
```

#### CMD と ENTRYPOINT がどのように作用するか
`CMD`と`ENTRYPOINT`はどちらもコンテナ起動時に実行するコマンドの指定。

両方指定する場合は、以下のルールがある。
- Dockerfile には少なくとも１つの`CMD`または`ENTRYPOINT`があること
- `ENTRYPOINT`は実行可能なコンテナとして定義する時に使うこと
- コンテナをアドホック（その場その場）で実行するコマンドを`ENTRYPOINT`にする場合、そのデフォルトの引数の指定として`CMD`を指定すること
- `CMD`はコンテナ実行時に引数を指定すると上書きする

`CMD`と`ENTRYPOINT`を組み合わせたときの挙動。

| |ENTRYPOINT なし|ENTRYPOINT exec_entry p1_entry|ENTRYPOINT [“exec_entry”, “p1_entry”]|
|---|---|---|---|
|CMD なし|エラー。実行できない。|/bin/sh -c exec_entry p1_entry|exec_entry p1_entry|
|CMD [“exec_cmd”, “p1_cmd”]|exec_cmd p1_cmd|/bin/sh -c exec_entry p1_entry|exec_entry p1_entry exec_cmd p1_cmd|
|CMD [“p1_cmd”, “p2_cmd”]|p1_cmd p2_cmd|/bin/sh -c exec_entry p1_entry|exec_entry p1_entry p1_cmd p2_cmd|
|CMD exec_cmd p1_cmd|/bin/sh -c exec_cmd p1_cmd|/bin/sh -c exec_entry p1_entry|exec_entry p1_entry /bin/sh -c exec_cmd p1_cmd|

`CMD`がベースイメージから定義されている場合、`ENTRYPOINT`を設定すると`CMD`が空の値にリセットされる。
この場合では、`CMD`が値を持つように現在のイメージで定義する必要がある。

### VOLUME
指定した名前でマウントポイントを作成し、他のホストやコンテナから外部マウント可能なボリュームにする。

書式は以下のいずれか。
```dockerfile
# JSON配列形式
VOLUME ["/data"]

# 文字列形式
VOLUME /data
```

注意点。
- Windows ベースのコンテナーを使用する場合、コンテナー内のボリュームの宛先は次のいずれかである必要がある
  - 存在しない、または空のディレクトリ
  - C 以外のドライブ
- Dockerfile 内で`VOLUME`宣言後にボリューム内のデータを変更するビルドステップがある場合、それらの変更は破棄される
- リストは JSON 配列として解析されます。単語は、一重引用符（''）ではなく、二重引用符（""）で囲む必要がある
- Dockerfile 内からホストディレクトリをマウントすることはできない

### USER
実行ユーザの指定。  
ここで指定したユーザは、`RUN`、`CMD`、`ENTRYPOINT`実行時に使用される。

書式は以下のいずれか。
```dockerfile
USER <user>[:<group>]

USER <UID>[:<GID>]
```

ユーザーのグループを指定すると、ユーザーは指定されたグループメンバーシップのみを持つ。そのため、他の構成済みグループメンバーシップは無視される。

ユーザーにプライマリグループがない場合はルートグループにて実行される。

ビルトインアカウントでない Windows イメージの場合、ユーザーを最初に作成する必要がある。  
Dockerfile の一部として呼び出される net user コマンドで作成可能。
```dockerfile
FROM microsoft/windowsservercore
# Create Windows user in the container
RUN net user /add patrick
# Set it for subsequent commands
USER patrick
```

### WORKDIR
作業するディレクトリパスの指定。  
`WORKDIR`以降のすべての`RUN`、`CMD`、`ENTRYPOINT`、`COPY`、および`ADD`は、この設定されたディレクトリ上で行われる。

```dockerfile
WORKDIR /path/to/workdir
```

なお、存在しないディレクトリパスを指定した場合は作成も同時に行う。

`WORKDIR`は、Dockerfile で複数回使用できる。  
相対パスが指定されている場合、それは前の`WORKDIR`命令のパスへの相対パスになる。  
以下の例では、pwd が出力するパスは /a/b/c となる。
```dockerfile
WORKDIR /a
WORKDIR b
WORKDIR c
RUN pwd
```

### ARG
イメージビルド時に`$ docker build`コマンドで渡す変数、 `--build-arg <変数名>=<値>`フラグを定義する。  
値が渡されなかった場合のデフォルト値も指定できる。

```dockerfile
ARG <name>[=<default value>]
```

複数定義可能。  
なお、`ARG`で定義していないビルド引数を渡した場合はエラーになる。  
できることが`ENV`と少し似ているが、`ARG`は`ENV`のようにイメージビルド後に残らない。

注意点として、GitHub の SSH キーなど秘匿情報を渡すのには非推奨（ビルド引数は`$ docker history`コマンドで見ることができるので）

### HEALTHCHECK
コンテナのヘルスチェックを設定。

```dockerfile
HEALTHCHECK [OPTIONS] CMD command

# ベースイメージのHEALTHCHECKを無効化
HEALTHCHECK NONE
```

オプションに設定できるもの。
- --interval=DURATION (default: 30s)
- --timeout=DURATION (default: 30s)
- --start-period=DURATION (default: 0s)
- --retries=N (default: 3)

ヘルスチェックは、まず最初の interval（間隔）秒の後にコンテナを起動し、interval 秒後に直近の確認を行う。  
確認が timeout（タイムアウト）秒を越えるようであれば、確認は失敗とみなされる。

ヘルスチェックで検出される終了コードは以下の通り。
- 0: success（成功） - コンテナは正常であり、使う準備が整っている
- 1: unhealthy（障害） - コンテナは正常に動作していない
- 2: starting（起動中） - まだコンテナの利用準備が整っていないが、正常に動作している

複数回ヘルスチェックに失敗すると、unhealthy となる。

以下は、5分ごとにWebサーバがサイトのメインページを3秒以内に表示するかどうかを確認する例。
```dockerfile
HEALTHCHECK --interval=5m --timeout=3s \
  CMD curl -f http://localhost/ || exit 1
```

### SHELL
シェル形式でコマンド実行時における、デフォルトのシェルを上書き。  
ここで指定したシェルは、以降の`RUN`、`CMD`、`ENTRYPOINT`で使用される。

```dockerfile
SHELL ["executable", "parameters"]
```

既存のデフォルトはこちら。
- Linux：`/bin/sh -c`
- Windows：`cmd /S /C`

bash に変更する例。
```dockerfile
SHELL ["/bin/bash", "-c"]
```