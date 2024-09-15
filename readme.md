# 概要
一つのテーブルを更新するAPIです。

# 環境設定
## .env
.envで以下を設定します。  
| 設定項目       | 説明                                      |
|----------------|-------------------------------------------|
| PORT           | ポート番号を設定します                    |
| DB_HOST        | DBサーバーのホストを設定します            |
| DB_USER        | DBのユーザーを設定します                  |
| DB_PASSWORD    | DB_USERに設定したDBユーザーのパスワードを設定します |
| DB_DATABASE    | データベース名を指定します                |

### .env設定例
``` 
PORT=3000
DB_HOST="localhost"
DB_USER="user"
DB_PASSWORD="password"
DB_DATABASE="database"
```

## DB
MYSQLを開発環境にインストールし、以下のオブジェクトを作成します。
```
CREATE DATABASE database;

CREATE TABLE onetable(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    COLUMN1 VARCHAR(255) NOT NULL,
    COLUMN2 VARCHAR(255) NOT NULL,
    COLUMN3 VARCHAR(255) NOT NULL,
    COLUMN4 VARCHAR(255) NOT NULL,
    COLUMN5 VARCHAR(255) NOT NULL
);
```
