# 教材内のゲーム画面

## Month9-1 START

- `month9-1-start.png`：未変更`game1/lessons/month9-1/start.py`の800×600 Surface。Pygame 2.6.1、SDL dummy描画／音声、乱数seed 0、100回目のdisplay.flip、入力なし。通常初期化・Clockを維持し、撮影ラッパーだけで保存とESCを送信。
- player=(368,506)、enemy1=(394,450)。Rectは少し重なるが、STARTは接触未完成なのでgame_over=False、score0。敵3体は動く。合成画像ではなく実ゲームの描画結果。Slidevで4:3を保持し、速度比較の根拠にしない。
- Rect図は共通TargetIconの実素材と透明余白を使う模式図。64×64は現行ゲーム内サイズ、図の倍率はページごとに明示する。

- 現行の`gameplay-64.png`：`game1/lessons/month8-1/start.py`を実行し、Pygameの画面Surfaceをそのまま保存した800×600の全景。
- 取得条件：Pygame 2.6.1、SDL dummy描画／音声、乱数seed 1、110回目のdisplay.flip、入力なし。描画ロジックは変更せず、撮影用ラッパーで通常displayと待ち時間なしのClockを使用。
- 初期値：player_speed=5、enemy_speed=4、player_size/enemy_size/item_size=64。原素材は共通assetsの32×32px、Pygameが64×64pxへscaleする。教材の対象iconは同じ素材を32px表示。
- 撮影時の左上座標：player=(368,506)、enemy1=(137,490)、enemy2=(582,290)、enemy3=(64,90)、item=(261,120)。score=0、Game Overなし。対象注釈の引出線もこの描画へ対応。
- 取得用ラッパーのみで乱数seedと保存タイミングを指定。合成した模式図ではなく、実際のゲーム描画結果。
- Slidevでは4:3を維持して全体を表示する。速度比較の証拠には使用しない。
- `gameplay-v03.png`は旧素材・96px表示、`game-screen.png`等はv0.2の履歴。いずれも現行本編では使用しない。

## Month8-2 START

- `month8-2-start.png`：変更していない`game1/lessons/month8-2/start.py`の800×600 Surface。Pygame 2.6.1、SDL dummy描画／音声、乱数seed 42、80回目のdisplay.flip直前、入力なし。通常の初期化とClockを維持し、撮影ラッパーのtraceで保存。
- 設定はplayer_speed=5、enemy_speed=4、サイズ各64。player=(368,506)、score=0。敵は移動するが、プレイヤー移動・敵接触・item取得はこのSTARTで未実装／無効。画像は移動実装前の状態を示し、速度比較の根拠にはしない。
- 座標ページは同じplayer素材を使う尺度なしの模式図。実画面・実座標と称さない。

## Month8-3 START

- `month8-3-start.png`：変更していない `game1/lessons/month8-3/start.py` を実行し、80回目のdisplay.flip直後のSurfaceを保存。Pygame 2.6.1、SDL dummy描画／音声、乱数seed 42、入力なし。通常の初期化とClockは維持し、撮影ラッパーだけで保存とESCを送信。
- player=(368,506)、enemy1=(654,50)、enemy2=(114,170)、enemy3=(25,−30)、score=0。playerは4方向操作済み、enemy1だけ移動未完成。敵接触・item取得はこのLessonで無効。enemy3は上端に一部だけ見える。
- 全景は4:3・800×600。素材・コードに変更なし。速度比較の根拠にはしない。座標・下判定は明示した模式図、random図の横尺度は800→1040・64→83.2の1.3倍。
