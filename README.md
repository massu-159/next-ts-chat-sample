# next-ts-chat-sample

アウトプットとして、チャットアプリを作成。

バックエンド : node.js(express)

フロントエンド : Next.js

socket.ioライブラリでチャット機能を実装。

urlはこちら
https://github.com/massu-159/next-ts-chat-sample

## 目次
1. 環境構築
2. アプリケーションの仕様

## 1. 環境構築

`client`と`server`で下記コマンドをそれぞれ実行。

### 1-1. ライブラリ インストール

```
npm install

または

yarn
```

### 1-2. アプリケーション実行

```
npm run dev

または

yarn dev
```

## 2. アプリケーションの仕様

### 2-1. 仕様
- チャット
  - チャット一覧表示
  - チャット送信

### 2-2. 構成技術
- バックエンド
  - express : 4.18.2
  - nodemon : 2.0.20
  - socket.io : 4.5.3
- フロント
  - next : 13.0.2
  - react : 18.2.0
  - react-dom : 18.2.0
  - socket.io-client : 4.5.3
