## MAIN CONCEPTS

### state とライフサイクル

#### マウント

最初に Clock が DOM として描画されるときです。このことを React では “マウント (mounting)” と呼びます。

またタイマーをクリアしたいのは、Clock が生成した DOM が削除されるときです。このことを React では “アンマウント (unmounting)” と呼びます。
