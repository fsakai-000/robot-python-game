# Game2の実画面

`python3 tools/capture_month10_1.py`（Pygame導入済みPython）で更新する。
SDL dummyで実際のSTART／COMPLETE／POLISHED MASTERの描画Surfaceを保存する。
仮素材を差し替えた後も同じ手順で撮り直せる。ゲームsourceは変更しない。

- `month10-1-start.png`：右キーを12更新押してもplayer停止、弾なし、HP 3。
- `month10-1-complete.png`：同じ入力でplayerが右へ60px移動、弾なし、HP 3。
- `master-demo.png`：完成MASTERの通常描画。撮影時だけ位置と飛行中の弾を指定。

撮影用の座標注入は自動検証ハーネス経由。静止画だけを挙動や児童理解の証明にはしない。
