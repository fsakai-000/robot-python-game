import{d as b,q as x,a as d,b as a,a2 as l,a3 as s,G as o,aK as h,z as m,a7 as u,as as E,e as S,R as f,o as i,a4 as c,E as R}from"./modules/vue-b4xSmC_r.js";import{u as C}from"./slidev/context-Db8fpcCi.js";import"./index-6koN1VRO.js";import"./modules/shiki-CtdJSGzV.js";const T={"01_curriculum_goals":{html:`<h1 id="pythonゲーム制作教材-目標体系">Pythonゲーム制作教材 目標体系</h1>
<p>Month8〜12のLesson順・責務・正式区分・80分枠は<a href="/robot-python-game/instructor/guide/#この5か月で目指すこと">docs/24</a>を正本とする。本書は目標体系、docs/02はGame1詳細。完成したMonth8〜9教材を旧計画へ戻さない。</p>
<h2 id="教材運用方針">教材運用方針</h2>
<p>本カリキュラムでは大単元の到達目標を基準とし、授業進度・生徒の理解度・操作習熟度に応じて、中単元・小単元の内容量、順序、実装方法、教材表現を調整する。</p>
<p>各Lessonには以下を設定する。</p>
<ul>
<li>固定要素：その回で必ず達成したい内容</li>
<li>調整可能要素：前後回へ移動・短縮可能な内容</li>
<li>発展要素：余裕のある生徒向け</li>
</ul>
<p>教材は実施中も改善し、Slidev/HTML教材、START/COMPLETEコード、ヒント、Challenge等は授業結果に応じて更新する。</p>
<h1 id="大単元1month89--game-1">大単元1：Month8〜9 / Game 1</h1>
<h2 id="テーマ">テーマ</h2>
<p>ゲーム制作を楽しみながら、プログラム・ゲーム・開発環境の基本を理解し、既習Pythonを使ってゲームを読む・変える・完成させる。</p>
<h2 id="到達目標">到達目標</h2>
<ul>
<li>ゲームを複数の「動き」「条件」「状態」「結果」に分解して考えられる</li>
<li>画面上の動きとPythonコードを対応付けられる</li>
<li>VS Codeで指定ファイルを開き、保存・実行・停止・再実行できる</li>
<li>ファイルやフォルダを扱い、元データと作業データを区別できる</li>
<li>変数・座標・if・比較演算・random・当たり判定・scoreをゲーム機能へ利用できる</li>
<li>既存コードを変更・補完し、Game 1を完成できる</li>
<li>完成したゲームをプレイテストし、簡単に改造できる</li>
<li>改造の目的・変更箇所・結果を短く振り返る。画像・自作絵・実AI相談の実施は全員必須ではない</li>
</ul>
<h1 id="大単元2month1011--game-2">大単元2：Month10〜11 / Game 2</h1>
<h2 id="テーマ-1">テーマ</h2>
<p>既習知識を別のゲームへ転用し、複数の処理を組み合わせて機能を作る。</p>
<h2 id="到達目標-1">到達目標</h2>
<ul>
<li>Game 1で学んだ処理をGame 2へ再利用する</li>
<li>既存コードから必要な処理を探す</li>
<li>Month10-2でbool / フラグを「弾が出ているか」という具体状態として扱う（Game1のSYSTEM内のboolを正式既習とみなさない）</li>
<li>弾、敵、score、HP、Game Over等を既習処理の組み合わせで実装する</li>
<li>Month11-2までに敵1体・同時に弾1発のGame 2を完成・調整する</li>
<li>Month11-3で最終制作のゲーム選定・計画・小試行を行う。許可済みAIで計画相談を試し、不可ならReference・講師の同等経路を使う</li>
</ul>
<h1 id="大単元3month12--creative--presentation">大単元3：Month12 / Creative &amp; Presentation</h1>
<h2 id="テーマ-2">テーマ</h2>
<p>自分のアイデアを既習知識と生成AIで実現し、制作内容と問題解決過程を言語化して発表する。</p>
<h2 id="到達目標-2">到達目標</h2>
<ul>
<li>Month12-1でMonth11-3の計画に沿う主要改造（既習範囲の関連2変更）を完成・検証する。必要時にAIを支援として活用する</li>
<li>Month12-2で通し確認・必要な修正を行い、制作内容を言語化して短い発表資料を作る</li>
<li>Month12-3でリハーサルと本番発表を行う</li>
<li>AIを部分的な実装・デバッグ支援として利用する</li>
<li>制作内容、工夫、問題、解決方法、AI利用を説明する</li>
</ul>
<p>AIの許可・利用可否を学習到達の条件にしない。AIを使わなかった場合はReference・講師等の支援と自分の試行を説明する。全面生成・理解しない貼り付けを目的にしない。</p>
<h1 id="中単元目標">中単元目標</h1>
<h2 id="month8">Month8</h2>
<p>ゲーム制作の基本環境と考え方に慣れ、コード変更から簡単なゲーム機能の実装へ進む。</p>
<h2 id="month9">Month9</h2>
<p>ゲームルールを追加し、Game 1を完成・振り返り・改造する。</p>
<h2 id="month10">Month10</h2>
<p>Game 1の知識をGame 2へ転用し、新しい機能を組み立てる。</p>
<h2 id="month11">Month11</h2>
<p>既習処理を組み合わせてGame 2を完成させ、最終制作の準備とAI試用を行う。</p>
<h2 id="month12">Month12</h2>
<p>AI改造、制作内容の言語化、発表資料作成、リハーサル、本番発表に注力する。</p>
<h1 id="小単元目標month89">小単元目標：Month8〜9</h1>
<h2 id="month8-1">Month8-1</h2>
<ul>
<li>VS Codeで指定ファイルを開く・保存・実行できる</li>
<li>完成ゲームから複数の動き・ルールを挙げられる</li>
<li>変数を変更し、ゲーム上の変化と対応付ける</li>
</ul>
<h2 id="month8-2">Month8-2</h2>
<ul>
<li>x/y座標と画面上の方向を対応付ける</li>
<li>キー入力と座標変更を結び付ける</li>
<li>既存コードを参考に4方向移動を作る</li>
<li>if・比較演算で移動範囲を制限する</li>
</ul>
<p>画面外制限はSHOULD。現行の左右端を中心に、上下端は参考転用の発展経路とする。</p>
<h2 id="month8-3">Month8-3</h2>
<ul>
<li>敵にも座標・速度があることを理解する</li>
<li>敵を自動移動させる</li>
<li>if・比較演算で画面端を判定する</li>
<li>randomで出現位置を変える（SHOULD、時間不足時は同じxで再配置してよい）</li>
</ul>
<h2 id="month9-1">Month9-1</h2>
<ul>
<li>Rectを当たり判定用領域として大まかに理解する</li>
<li>プレイヤーと敵の接触を判定する</li>
<li>接触を最小Game Overへつなげる</li>
</ul>
<h2 id="month9-2">Month9-2</h2>
<ul>
<li>アイテムとの当たり判定を実装する</li>
<li>scoreを変数として扱う</li>
<li>score加算とrandom再配置を行う</li>
<li>Game 1を標準完成状態にする</li>
</ul>
<p>接触・randomは参考転用、score1行は独立生成の試行。Month8-3のrandom未実施者も初期化例・Referenceから取り組める。</p>
<h2 id="month9-3">Month9-3</h2>
<ul>
<li>Month8-1のゲーム分析を見返す</li>
<li>ゲーム機能とPython/Pygame処理を対応付ける</li>
<li>最低1か所を自分で改造する</li>
<li>元データと改造版を分けて保存する</li>
<li>画像差し替え、自作ドット絵を発展として扱う</li>
<li>AI相談の基本姿勢と、短い共有・振り返りの道筋を知る（実AI操作・体験変化の説明は既存の任意／SHOULD経路を維持）</li>
</ul>
`},"02_month8-9_lesson_design":{html:`<h1 id="month89-詳細設計">Month8〜9 詳細設計</h1>
<p>全15回の順序・責務・正式区分・80分枠は<a href="/robot-python-game/instructor/guide/#この5か月で目指すこと">docs/24</a>。本書はGame1の現行実装に対応する詳細。MUSTの機能到達と独立記述のCoding Levelを分け、最新Slide／Pythonを古い穴埋め中心の計画へ戻さない。</p>
<h2 id="共通テンプレート">共通テンプレート</h2>
<ol>
<li>主題</li>
<li>この回の位置付け</li>
<li>到達目標（MUST / SHOULD / CHALLENGE）</li>
<li>学習内容（既習 / 応用 / 新出 / 理解不要）</li>
<li>PC・VS Code・ファイル操作目標</li>
<li>コード範囲（理解 / 変更 / 穴埋め / 参考 / 自力 / 理解不要）</li>
<li>自力実装レベル</li>
<li>STARTデータ</li>
<li>COMPLETEデータ</li>
<li>デバッグ目標</li>
<li>振り返り目標</li>
<li>固定 / 調整可能 / 発展</li>
<li>想定学習負荷</li>
</ol>
<h1 id="month8-1">Month8-1</h1>
<h2 id="must">MUST</h2>
<ul>
<li>指定フォルダ・PythonファイルをVS Codeで開く</li>
<li>保存・実行・停止・再実行</li>
<li>完成ゲームから複数の動き・ルールを見つける</li>
<li>指定変数を変更して結果を確認する</li>
<li>変数とゲーム上の変化を対応付ける</li>
</ul>
<h2 id="should">SHOULD</h2>
<ul>
<li>別の設定値も変更して結果を比較する</li>
<li>元データと作業データを区別する</li>
</ul>
<h2 id="challenge">CHALLENGE</h2>
<ul>
<li>複数設定値を組み合わせてゲームバランスを調整する</li>
</ul>
<h2 id="自力実装レベル">自力実装レベル</h2>
<p>Level 1</p>
<h1 id="month8-2">Month8-2</h1>
<h2 id="must-1">MUST</h2>
<ul>
<li>x/y座標と画面上の方向を対応付ける</li>
<li>キー入力で処理が実行されることを理解する</li>
<li>座標加減算でプレイヤーを動かす</li>
<li>既存コードを参考に似た移動処理を追加する</li>
</ul>
<h2 id="should-1">SHOULD</h2>
<ul>
<li>if・比較演算で画面外移動を制限する</li>
<li>player_speedを調整する</li>
</ul>
<h2 id="challenge-1">CHALLENGE</h2>
<ul>
<li>移動に関する簡単なアレンジ</li>
<li>現行STARTの上下端制限を、左右の例から参考転用する（左右端はSHOULDの標準経路）</li>
</ul>
<h2 id="新出">新出</h2>
<p>Pygameのリアルタイムキー入力</p>
<h2 id="自力実装レベル-1">自力実装レベル</h2>
<p>右はLevel 2、左・上下は参考転用Level 3。完成例前の独立1行はLevel 4の試行。独立複数行が確認された場合だけLevel 5と記録し、全員MUSTにはしない。</p>
<h1 id="month8-3">Month8-3</h1>
<h2 id="must-2">MUST</h2>
<ul>
<li>enemy1の座標・速度を理解する</li>
<li>enemy1を自動移動させる</li>
<li>if・比較演算で画面端を判定する</li>
<li>条件成立時にenemy1を再配置する</li>
<li>enemy1と同じ処理がenemy2 / enemy3にも使われていることを確認する</li>
</ul>
<h2 id="should-2">SHOULD</h2>
<ul>
<li>randomで出現位置を変更する</li>
<li>enemy_speedやrandom範囲を調整する</li>
<li>enemy2 / enemy3は参考・コピー・完成済み部分として扱い、3体が独立して動くことを確認する</li>
</ul>
<h2 id="challenge-2">CHALLENGE</h2>
<ul>
<li>randomや設定値で敵挙動に追加変化を付ける</li>
</ul>
<h2 id="新出-1">新出</h2>
<p>random / random.randint()</p>
<h2 id="自力実装レベル-2">自力実装レベル</h2>
<p>参考転用Level 3中心、下移動・条件・再配置の独立1行はLevel 4の試行。randomのHint／穴埋め経路も許容し、既存SHOULDは維持する。</p>
<h1 id="month9-1">Month9-1</h1>
<h2 id="must-3">MUST</h2>
<ul>
<li>Rectを当たり判定用領域として大まかに理解する</li>
<li>プレイヤーとenemy1の接触を判定する</li>
<li>当たり判定とifを結び付ける</li>
<li>enemy1と同じ当たり判定をenemy2 / enemy3へ展開する</li>
<li>接触を最小Game Overへつなげる</li>
</ul>
<h2 id="should-3">SHOULD</h2>
<ul>
<li>当たり判定を自分でテストする</li>
<li>接触時の結果・設定を変更する</li>
</ul>
<h2 id="challenge-3">CHALLENGE</h2>
<ul>
<li>接触時の結果や判定設定を改造する</li>
</ul>
<h2 id="新出-2">新出</h2>
<p>Rect / Pygame当たり判定</p>
<h2 id="自力実装レベル-3">自力実装レベル</h2>
<p>参考転用Level 3中心。完成例前の独立1行はLevel 4、独立2行はLevel 5の試行として区別する。Rectの生成・bool理論・not／andの組み立てを独立記述の必須条件にしない。</p>
<h1 id="month9-2">Month9-2</h1>
<h2 id="must-4">MUST</h2>
<ul>
<li>scoreを変数として扱う</li>
<li>アイテム当たり判定を実装する</li>
<li>scoreを加算する</li>
<li>itemをrandom再配置する</li>
<li>Game 1を標準完成状態にする</li>
</ul>
<h2 id="should-4">SHOULD</h2>
<ul>
<li>プレイテストで問題を見つける</li>
<li>数値を調整してゲームバランスを変える</li>
</ul>
<h2 id="challenge-4">CHALLENGE</h2>
<ul>
<li>得点や難易度を追加調整する</li>
</ul>
<h2 id="新出-3">新出</h2>
<p>原則なし</p>
<h2 id="自力実装レベル-4">自力実装レベル</h2>
<p>collision／randomはLevel 3、scoreの日本語からの独立1行はLevel 4 target。参考・Hintで機能到達した経路も成功とし、全員必須Level 4／5へ変更しない。Student Edit Zone内の条件→score→x/yの4行と段階CHECKはdocs/04・05・21を参照。</p>
<h1 id="month9-3">Month9-3</h1>
<h2 id="must-5">MUST</h2>
<ul>
<li>Month8-1のゲーム分析ワークを再確認する</li>
<li>ゲーム機能とコードを対応付ける</li>
<li>Game 1の主要処理を探す</li>
<li>最低1か所改造する</li>
<li>改造版を元データと別に保存する</li>
</ul>
<h2 id="should-5">SHOULD</h2>
<ul>
<li>既存コードを参考に簡単な改造を行う</li>
<li>改造によるゲーム体験の変化を説明する</li>
</ul>
<h2 id="challenge-5">CHALLENGE</h2>
<ul>
<li>複数箇所の改造</li>
<li>自作ドット絵の差し替え</li>
<li>既習内容を使った追加機能</li>
</ul>
<h2 id="自力実装レベル-5">自力実装レベル</h2>
<p>設計上の転用目標はLevel 3、一部Level 4。現行Guidedの数値編集操作自体はLevel 1で、記述改造を選んだ場合に転用3／独立1行4を記録する。目的選択・画像編集・自走時間でCoding Levelを昇格させない。</p>
<h2 id="現行の進行">現行の進行</h2>
<p>全体共有15分→半自走55分→Finish5分、計75分＋余白5分。AI相談の姿勢2枚は準備済みだが実操作は全員必須でない。30秒共有はFinishで予定し、体験変化を説明する既存SHOULDをMUSTへ昇格しない。画像・自作絵も従来区分を維持する。詳細はdocs/22、全体Scheduleはdocs/24。</p>
`},"03_game1_spec":{html:`<h1 id="game-1-正式仕様書-v11">Game 1 正式仕様書 v1.1</h1>
<h2 id="dodge--collect">DODGE &amp; COLLECT</h2>
<h3 id="概要">概要</h3>
<p>プレイヤーを4方向に操作し、敵を避けながらアイテムを集めて高得点を目指す1画面アクション。</p>
<ul>
<li>敗北条件：敵に接触</li>
<li>想定プレイ時間：約30秒〜2分</li>
</ul>
<h3 id="標準設定">標準設定</h3>
<ul>
<li>画面800×600、player_speed=5、enemy_speed=4</li>
<li>player_size / enemy_size / item_sizeはすべて64（ゲーム表示・Rect・fallbackの辺長）</li>
<li>配布するplayer / enemy / itemの原画像は32×32px。Pygame側で64×64pxへscaleし、原画像を拡大保存しない</li>
<li>画面内の左上座標はx=0〜736、y=0〜536。itemの初期化・再配置は従来どおりy=60〜536</li>
<li>enemyの再出現yは-enemy_size=-64。初期y=50 / -150 / -350は維持する</li>
</ul>
<h3 id="プレイヤー">プレイヤー</h3>
<ul>
<li>1体</li>
<li>4方向移動</li>
<li>画面外へ出ない</li>
<li>player_speed変更可能</li>
<li>敵・アイテムとの接触判定</li>
</ul>
<h3 id="敵">敵</h3>
<ul>
<li>3体</li>
<li>3体とも上から下へ直進</li>
<li>3体で共通のenemy_speedを変更可能</li>
<li>初期y座標をずらして順番に出現</li>
<li>それぞれ画面下で上部へ戻る</li>
<li>それぞれ再出現x座標をrandom化</li>
<li>どの敵もプレイヤー接触でGame Over</li>
</ul>
<h3 id="アイテム">アイテム</h3>
<ul>
<li>1個</li>
<li>画面内で静止</li>
<li>取得でscore +100</li>
<li>取得後random位置へ再配置</li>
<li>敵とは相互作用しない</li>
</ul>
<h3 id="標準完成条件">標準完成条件</h3>
<ul>
<li>プレイヤー4方向移動</li>
<li>画面外制限</li>
<li>敵3体の独立した自動移動</li>
<li>敵3体の初期y座標ずらし</li>
<li>敵3体の個別random再配置</li>
<li>どの敵との接触でもGame Over</li>
<li>アイテム取得</li>
<li>score +100</li>
<li>item random再配置</li>
<li>score表示</li>
<li>item取得時にitem_get SEと短時間の「+100」表示</li>
<li>敵接触時にgame_over SEと短時間の赤色フラッシュ</li>
<li>開始〜Game Overまで成立</li>
</ul>
<h3 id="標準仕様に入れない">標準仕様に入れない</h3>
<p>HP、弾、攻撃、敵数の可変管理、複数アイテム管理、list必須構造、boss、stage、武器、高度な敵AI、class、生徒による関数作成、ハイスコア保存。</p>
<h3 id="アセット">アセット</h3>
<pre><code class="language-text">assets/
├─ images/
│  ├─ player.png
│  ├─ enemy.png
│  ├─ item.png
│  └─ background.png
└─ sounds/
   ├─ item_get.wav
   └─ game_over.wav
</code></pre>
<ul>
<li>player / enemy / item画像は設定サイズへscaleし、透過PNGに対応する</li>
<li>background画像は画面サイズへscaleする</li>
<li>画像や音声がない場合、または読み込みに失敗した場合は、図形・単色背景・無音へfallbackする</li>
<li>enemy3体は同じenemy.pngを共用する</li>
<li>item_get / game_over SEと軽量な視覚エフェクトは基盤側の演出として扱う</li>
</ul>
<p>Month9-3では同じファイル名で画像を差し替え、自作ドット絵差し替えを改造候補にする。</p>
<h3 id="lesson対応">Lesson対応</h3>
<table>
<thead>
<tr>
<th>Lesson</th>
<th>状態</th>
</tr>
</thead>
<tbody>
<tr>
<td>Month8-1</td>
<td>完成版を遊ぶ・分析・設定変更</td>
</tr>
<tr>
<td>Month8-2</td>
<td>プレイヤー操作</td>
</tr>
<tr>
<td>Month8-3</td>
<td>enemy1を中心に敵移動・再配置・randomを学び、enemy2 / enemy3は同じ処理の参考・コピー・完成済み部分として扱う</td>
</tr>
<tr>
<td>Month9-1</td>
<td>enemy1の当たり判定を中心に学び、enemy2 / enemy3へ同じ処理を展開してGame Overへつなげる</td>
</tr>
<tr>
<td>Month9-2</td>
<td>item取得・score・標準完成</td>
</tr>
<tr>
<td>Month9-3</td>
<td>振り返り・改造・画像差し替え</td>
</tr>
</tbody>
</table>
`},"04_game1_start_complete":{html:`<h1 id="game-1-start--complete仕様-v11">Game 1 START / COMPLETE仕様 v1.1</h1>
<h2 id="共通">共通</h2>
<ul>
<li><code>start.py</code>：その回を単独で開始できる講師・開発用データ</li>
<li><code>complete.py</code>：その回の標準到達状態を示す講師・開発用データ</li>
<li>欠席・破損時はその回の<code>start.py</code>から再開</li>
<li>STARTでも必ずゲームとして起動する</li>
<li>生徒配布時は<code>start.py</code>を<code>month8-1.py</code>のようなLesson名へ変更し、<code>complete.py</code>は含めない</li>
<li>Month9-3は共通の完成形を定めないため<code>complete.py</code>を作成しない</li>
<li>全START / COMPLETEとMASTERの標準player_size / enemy_size / item_sizeは64、原素材は32×32px。未完成箇所・固定ID・Lesson差分はそのまま維持する</li>
</ul>
<h2 id="ファイルと配布">ファイルと配布</h2>
<ul>
<li>講師・開発用：<code>game1/lessons/monthX-X/start.py</code>、<code>complete.py</code></li>
<li>開発用assets：<code>game1/assets/</code>で共通管理</li>
<li>生徒配布用：<code>dist/monthX-X/monthX-X.py</code>と同階層の<code>assets/</code></li>
<li><code>dist/</code>は<code>tools/build_student_lessons.py</code>で生成する配布物であり、Git管理しない</li>
</ul>
<h3 id="student-distribution-builderphase-1">Student Distribution Builder（Phase 1）</h3>
<p>リポジトリルートで <code>python tools/build_student_lessons.py</code> を実行する。既存の出力規則に合わせ、<code>dist/student-code/game1/</code>を重ねて作らず、<code>dist/monthX-X/</code>を正式な生成先として維持する。</p>
<ul>
<li>全6回：month8-1／month8-2／month8-3／month9-1／month9-2／month9-3。各フォルダ直下は<code>monthX-X.py</code>と<code>assets/</code>だけ。</li>
<li><code>start.py</code>をファイル名だけ変更してbyte一致のままコピーする。固定ID・コメント・穴埋め・Student Edit Zone・段階実行も不変。</li>
<li>共通<code>game1/assets/</code>から標準6素材（imagesのbackground／player／enemy／item.png、soundsのitem_get／game_over.wav）だけをコピーする。complete.py・MASTER・examples・tests・tools・docs・検証ファイル・READMEは配布しない。</li>
<li>全入力の存在・Python構文を清掃前に確認し、全6回を仮生成して構成・コード・素材のbyte一致を検査してから置き換える。入力不備時は前回の生成物を残し、エラーを表示して終了する。</li>
<li>清掃は<code>dist/</code>直下の上記6つの専用生成フォルダだけ。他のdist内容は残し、出力先のsymlinkを拒否する。対象6フォルダの古い不要物は再生成時に消える。</li>
</ul>
<p><strong>distは作品保存先ではない。再生成前に生徒作品をdist外へ別保存する。</strong> 実際の作業フォルダへ直接上書きする運用にしない。配布フォルダを別の場所へコピーし、VS Codeでそのフォルダを開いてLesson名のPythonを実行する。Month9-3の自分用コピーでもPython名とassetsを一緒に保つ。</p>
<p>生成は標準ライブラリのみ。起動にはPython／Pygameが必要。<code>python -B -m unittest discover -s tests -v</code>でbuilder・全6回の起動／移動／欠損fallbackと既存9-2段階実行を検査する。SDL dummy試験は音の聴感・Windows実機確認を代替しない。zip・Web公開・ダウンロードUIはPhase 1の対象外。</p>
<h2 id="month8-1">Month8-1</h2>
<p>START：Game 1完成デモ版。未実装なし。
COMPLETE：機能は同じ。設定値変更済み、ゲーム分析ワーク記入済み。</p>
<p>標準データはplayer_speed=5、enemy_speed=4、サイズ各64。変更後の数値は生徒が選び、結果を観察する。全員同じ値にする必要がある比較時だけ指定する。</p>
<h2 id="month8-2">Month8-2</h2>
<p>START：</p>
<ul>
<li>Pygame基盤</li>
<li>プレイヤー表示</li>
<li>player_x / player_y / player_speed</li>
<li>キー取得基盤</li>
<li>プレイヤー主要操作は未完成</li>
<li>右は既存の右辺補完を残す。左はK_LEFTの条件内に1行を書く（SYSTEMのpassで未記入でも起動）。上下はコメント位置へ追加する</li>
</ul>
<p>COMPLETE：</p>
<ul>
<li>4方向移動</li>
<li>speed反映</li>
<li>画面外制限</li>
</ul>
<h2 id="month8-3">Month8-3</h2>
<p>START：</p>
<ul>
<li>Month8-2 COMPLETE相当</li>
<li>敵3体表示</li>
<li>enemy1_x / enemy1_y / enemy2_x / enemy2_y / enemy3_x / enemy3_y / enemy_speed</li>
<li>enemy1の主要移動・画面端判定・randomは未実装</li>
<li>enemy2 / enemy3は参考・コピー・完成済み部分として扱える構成</li>
<li>enemy1下移動は日本語から1行、下判定・上への再配置は条件と代入の2行をコメント位置へ書く。randomはSHOULD、時間不足時は同じxで戻る状態でよい</li>
</ul>
<p>COMPLETE：</p>
<ul>
<li>敵3体の下方向移動</li>
<li>敵3体が個別に画面下で上へ戻る</li>
<li>敵3体のx random再配置</li>
<li>敵3体の初期y座標ずらし</li>
</ul>
<h2 id="month9-1">Month9-1</h2>
<p>START：</p>
<ul>
<li>プレイヤー操作</li>
<li>敵3体の移動</li>
<li>敵3体のrandom再配置</li>
<li>Rect基盤</li>
<li>enemy1の衝突判定とGame Over接続は未実装</li>
<li>enemy2 / enemy3はenemy1と同じ処理を展開できる構成</li>
<li>enemy1は日本語の条件・結果から2行を試す。enemy2は参考転用、enemy3は相手を先に選んで転用する。段階Hint使用も成功経路とする</li>
</ul>
<p>COMPLETE：</p>
<ul>
<li>player/enemy1接触判定</li>
<li>同じ接触判定をenemy2 / enemy3へ展開</li>
<li>どの敵との接触でもGame Over</li>
</ul>
<h2 id="month9-2">Month9-2</h2>
<p>START：</p>
<ul>
<li>Month9-1 COMPLETE相当</li>
<li>item表示</li>
<li>item_x / item_y</li>
<li>score変数</li>
<li>score表示基盤</li>
<li>item collision / score +100 / item再配置は未実装</li>
<li>collisionは仮の条件<code>if False:</code>を敵の接触判定から転用した条件1行へ書き換える。scoreとrandom再配置はコメント位置へ行全体を書く。固定ID3件は維持する</li>
<li>score表示更新・取得位置記録・350msの+100表示・SE接続はSYSTEMとして最初から用意する</li>
</ul>
<p>段階確認：</p>
<table>
<thead>
<tr>
<th>状態</th>
<th>作業と確認</th>
</tr>
</thead>
<tbody>
<tr>
<td>A</td>
<td>STARTそのまま：起動、敵接触はGame Over、item取得は未接続</td>
</tr>
<tr>
<td>B</td>
<td>collisionのみ：取得したitemが消える。scoreは0、誤った+100演出は出ない</td>
</tr>
<tr>
<td>C</td>
<td>collision＋score：1回100点増え、Score表示・+100演出・SEが動く。再配置未完成でも連続加点しない</td>
</tr>
<tr>
<td>D</td>
<td>randomのx/yも完成：itemが標準範囲へ再配置され、継続して取得できる。COMPLETEと同じ挙動</td>
</tr>
<tr>
<td>E</td>
<td>Game Over後にR：score・位置・演出の開始時刻を初期化して再開</td>
</tr>
</tbody>
</table>
<p>B/CではSYSTEMが取得済みitemを一時的に画面外へ置く。再度確認するにはESC→再実行（Game Over後ならRも可）。Dでは生徒のrandom再配置が同じ更新内で位置を上書きし、一時位置は画面に描画されない。<code>False</code>の理論・一時処理・演出の入力を新しい学習事項にしない。</p>
<p>COMPLETE：
Game 1標準完成版。</p>
<h2 id="month9-3">Month9-3</h2>
<p>START：Game 1標準完成版
個別の改造結果が完成状態となるため、共通の<code>complete.py</code>は作成しない。到達条件：</p>
<ul>
<li>正常動作</li>
<li>最低1つ変更</li>
<li>変更内容を説明可能</li>
<li>改造版を別保存</li>
</ul>
`},"05_game1_code_design":{html:`<h1 id="game-1-コードファイル構造設計-v11">Game 1 コード・ファイル構造設計 v1.1</h1>
<h2 id="方針">方針</h2>
<ul>
<li>1ファイル中心：MASTERは<code>game.py</code>、Lessonは<code>start.py / complete.py</code>、生徒配布版は<code>monthX-X.py</code></li>
<li>class化しない</li>
<li>list管理しない</li>
<li>不要な関数分割をしない</li>
<li>学習対象と基盤コードをコメントで区別</li>
<li>教育上必要な重複を残す</li>
</ul>
<h2 id="構成">構成</h2>
<pre><code class="language-text">game1/
├─ master/
│  ├─ game.py
│  └─ assets/                 # MASTERの検証済み自己完結assets
├─ assets/                    # Lesson開発時の共通assets
│  ├─ images/
│  └─ sounds/
└─ lessons/
   ├─ month8-1/
   │  ├─ start.py
   │  └─ complete.py
   └─ ...

dist/                         # 生成物
└─ month8-1/
   ├─ month8-1.py
   └─ assets/
      ├─ images/
      └─ sounds/
</code></pre>
<p>Lessonの<code>start.py / complete.py</code>は講師・開発用とし、生徒には<code>start.py</code>をLesson名へ変更したファイルだけを配布する。<code>complete.py</code>は配布しない。Lessonコードは同階層の<code>assets/</code>を優先し、存在しない開発環境では<code>game1/assets/</code>を参照する。</p>
<p>生徒記入位置・Student Edit Zoneの正本は講師用<code>start.py</code>。builderはrename以外に内容を加工せず、配布版とのbyte一致を検査する。共通素材・生成先・安全な再生成の運用は<a href="/robot-python-game/instructor/docs/04_game1_start_complete/">docs/04</a>へ集約する。</p>
<h2 id="変数名">変数名</h2>
<pre><code class="language-python">screen_width
screen_height
player_x
player_y
player_speed
enemy1_x
enemy1_y
enemy2_x
enemy2_y
enemy3_x
enemy3_y
enemy_speed
item_x
item_y
score
game_over
</code></pre>
<h2 id="記述方針">記述方針</h2>
<pre><code class="language-python">player_x = player_x + player_speed
</code></pre>
<p>を優先し、短縮記法で教育対象を隠さない。</p>
<p>画面外制限もif・比較演算で明示する。</p>
<h2 id="student-edit-zone">Student Edit Zone</h2>
<p>同じWORK群で生徒が編集する処理は、可能な限り連続してmain flowへ配置する。学習対象のcollision・score・random等をhelperへ隠さず、SYSTEMを避けながら入力すること自体を課題にしない。</p>
<ul>
<li>SYSTEMの記録・段階実行・演出はZoneの前後へ置く。独立する基盤処理だけ、役割が分かる短いhelperへ移してよい。これは不要な関数化の許可ではない。</li>
<li>固定IDは対応する編集位置へ直接導く。helper内部へ置かず、STARTの記入位置とCOMPLETEの学習行の順序・周辺構造を揃える。</li>
<li>helperの引数・返り値・副作用は追跡可能にし、global依存や未習概念をZoneへ増やさない。基盤の内部を生徒に入力・解説させない。</li>
<li>挿入位置は教材コード側でも明示する。SlideのCode Placement Contextは実Zoneのif・行・indentを反映し、分断された基盤の省略説明で配置問題を隠さない。</li>
</ul>
<h2 id="random">random</h2>
<p><code>random.randint()</code>程度に限定。</p>
<h2 id="rect">Rect</h2>
<p>生成自体は基盤寄り。
中心は collision → if → result。</p>
<p>敵3体のRect、移動、再配置、当たり判定、描画はlistやforループへまとめず個別に記述する。同じ処理を3体へ使う流れが見える教育上の重複として残す。</p>
<h2 id="コメント">コメント</h2>
<pre><code class="language-python"># [EDIT] 生徒がそのLessonで変更する場所
# [READ] 意味を確認するが変更しない場所
# [SYSTEM] 基本的に触らないゲーム基盤
# [LEARNED] 以前のLessonで学習済みの場所
# [CHALLENGE] 余裕がある場合の変更候補
</code></pre>
<p>主要セクションは <code># ========================================</code> で区切る。各STARTの冒頭には短い「今日の学習」を置き、学習対象を一覧にする。</p>
<p>Lessonの変更箇所には <code>[8-2-1]</code> のような固定IDを付け、対応するSTART / COMPLETEで同じIDを維持する。教材からは行番号ではなく固定IDを案内し、生徒はVS Codeの <code>Ctrl + F</code> で検索する。正規IDは対象箇所で一意に検索できるよう、冒頭一覧では括弧なしの番号を示す。</p>
<p>コード内のヒントは、作業内容・使う変数・短い日本語疑似コードまでの1〜2行を基本とし、詳しい理由・図解・完成例はSlidev / HTML教材へ置く。Month8は支援を厚めにし、Month9は既習コードを探して再利用できる程度まで支援を減らす。小学生向けコードでは、主要セクションやEDIT箇所の間に一般的なコードより広めの空行を取る。</p>
<h2 id="month8-2month9-1の教育差分段階実行">Month8-2〜Month9-1の教育差分・段階実行</h2>
<ul>
<li>固定IDとCOMPLETEのゲーム処理は維持する。Month8-2の右はLEVEL2の足場を残し、左・上下の最初の1行は日本語から試す。左の未記入if内はSYSTEMの<code>pass</code>で起動を保証し、完成後も残してよい（無動作）</li>
<li>Month8-3のenemy1下移動と画面下判定・再配置はコメント位置へ行全体を書く。enemy2/3の完成例を参考にしてよい。randomは既存SHOULDを維持し、未実施をMUST未達にしない</li>
<li>Month9-1はenemy1の条件と結果を2行で試す。enemy2/3の正式ガード<code>not game_over and</code>は参考として支援し、boolの理論やAPI綴り暗記を追加しない</li>
<li>各WORKを終えた状態で起動できることを確認する。条件を書くWORKは内側の処理まで完成してから実行し、空ifを完成状態にしない。学習用の関数化・list管理は追加しない</li>
<li>独立記述とHint／参考転用の評価、WORKの提示順は<a href="/robot-python-game/instructor/docs/14_art_direction_v05/#30-%E8%87%AA%E5%8A%9B%E8%A9%A6%E8%A1%8C%E6%AE%B5%E9%9A%8Ehint%E6%A4%9C%E8%A8%BC%E8%AA%AC%E6%98%8E%E3%81%AE%E5%85%B1%E9%80%9Awork">docs/14の30節</a>を参照する。到達点・正式Level区分はdocs/02のまま</li>
</ul>
<h2 id="month9-2の教育差分段階実行">Month9-2の教育差分・段階実行</h2>
<ul>
<li>教育差分の目標はcollisionの参考転用LEVEL 3、scoreの日本語からの1行記述LEVEL 4、random x/yの参考転用LEVEL 3。scoreの完成式・右辺穴埋めはSTARTに置かない。完成例を見て書いた経路を自立LEVEL 4と評価せず、必要時の支援は許容する。正式MUSTの機能到達と自立記述の目標を区別し、全員必須LEVEL 5へ変更しない</li>
<li><code>[9-2-1]</code>で仮の条件1行を置き換え、<code>[9-2-2]</code>にscore加算1行、<code>[9-2-3]</code>にitem_x/yの再配置2行を書く。敵の判定と初期化・Restartのrandom例は参照可能。APIやbool理論の暗記を要求しない</li>
<li>Student Edit Zoneに取得条件→score→item_x→item_yを連続配置し、途中へSYSTEMを挟まない。Zone前のSYSTEMが旧score・旧位置を記録し、準備済みitem_rectを維持したまま一時位置を用意する。未取得時はZone後に旧位置へ戻す。再配置未完成の取得は隠れたままとし、同じitemの連続加点を防ぐ。完成時はrandomが同じ更新内で標準位置へ戻すため、一時位置は描画されない</li>
<li>Zone後の<code>update_item_pickup_feedback</code>は取得前の位置を引数で受け取り、既存の演出状態5変数だけを明示的に更新する短いSYSTEM helper。score増加時に表示・時刻・SEを更新し、score・item座標・衝突条件・randomは変更しない。START／COMPLETEは同じSYSTEMとmain flowを持ち、学習コード完成後は全体AST・ゲーム挙動を一致させる。今回のStage A/B/Cは、docs/04の従来B/C/Dに対応する</li>
</ul>
<h2 id="アセット演出">アセット・演出</h2>
<ul>
<li>標準原素材はplayer / enemy / item各32×32px、ゲーム表示は各64×64px。表示・Rect・境界・random・fallbackは同じsize変数を使い、736等をロジックへ直書きしない</li>
<li>共通素材を更新する際は、自己完結MASTERの同名3画像も同期する。背景・SEは別の変更依頼がない限り維持する</li>
<li>player / enemy / item / backgroundは所定のファイル名から1回だけ読み込み、設定サイズへscaleする</li>
<li>画像・音声の欠損や読み込み失敗時は、図形・単色背景・無音へfallbackする</li>
<li>enemy3体はenemy.pngを共用する</li>
<li>item取得時の短い「+100」表示とGame Over時の短い赤色フラッシュは基盤コードとして分離する</li>
<li>演出は単一の状態変数で管理し、class、list、particle systemを使わない</li>
<li>Month9-3では同名ファイルを置き換えるだけで画像差し替えを反映できる構造を維持する</li>
</ul>
<p>設定変更の教材は、初期値→生徒が別の値を選ぶ→結果を観察、を基本とする。変更値は原則固定指定せず、同条件の比較が必要な場合だけ例外とする。</p>
<h2 id="master派生">MASTER派生</h2>
<pre><code class="language-text">MASTER
├─ 8-1 start.py = MASTER
├─ 8-2 start.py = player操作を未完成化
├─ 8-3 start.py = enemy1移動を未完成化、enemy2 / enemy3は参考・コピー・完成済み部分
├─ 9-1 start.py = enemy1 collisionを未完成化し、enemy2 / enemy3へ展開可能にする
├─ 9-2 start.py = item/scoreを未完成化
└─ 9-3 start.py = MASTER
</code></pre>
<h2 id="禁止事項">禁止事項</h2>
<p>class、dataclass、不要な関数分割、敵/アイテムのlist管理、forループによる敵管理、敵更新・collisionの関数化、高度な型ヒント、複雑なpath管理、高度な例外処理、学習対象ロジックの過度な抽象化。</p>
<h2 id="品質要件">品質要件</h2>
<ul>
<li>Windowsで安定動作</li>
<li>Pygame標準機能中心</li>
<li>相対パス</li>
<li><code>__file__</code>基準で、開発用共通assetsと配布用同階層assetsの双方に対応</li>
<li>配布フォルダ単体で動作</li>
<li><code>start.py / complete.py</code>すべて起動確認</li>
<li><code>tools/build_student_lessons.py</code>で生成したLesson名ファイルも起動確認</li>
<li>60FPS程度</li>
<li>1フレームにつきdisplay更新とフレーム制御は各1回</li>
<li><code>pygame.SCALED</code>でVSyncを要求し、利用できない環境では通常表示へfallback</li>
<li>画像・scale・font・音声と固定表示文字は起動時に準備し、ゲームループ内で繰り返し生成しない</li>
<li>画像/音がない場合も可能な限りfallback</li>
</ul>
`},"06_game1_lesson_flow":{html:`<h1 id="game-1-レッスン展開時間配分">Game 1 レッスン展開・時間配分</h1>
<h2 id="現行の正式枠">現行の正式枠</h2>
<p>各回80分。Month8〜12の順序・責務・正式区分・時間集約は<a href="/robot-python-game/instructor/guide/#この5か月で目指すこと">docs/24</a>を正本とする。Game1は完成済みの最新Notes・Guideの現行Briefを保持し、教材を下の旧企画へ戻さない。</p>
<table>
<thead>
<tr>
<th>Lesson</th>
<th style="text-align:right">現行CORE活動目安</th>
<th style="text-align:right">80分枠の余白／支援</th>
</tr>
</thead>
<tbody>
<tr>
<td>Month8-1</td>
<td style="text-align:right">70分</td>
<td style="text-align:right">10分</td>
</tr>
<tr>
<td>Month8-2</td>
<td style="text-align:right">66分</td>
<td style="text-align:right">14分</td>
</tr>
<tr>
<td>Month8-3</td>
<td style="text-align:right">65分</td>
<td style="text-align:right">15分</td>
</tr>
<tr>
<td>Month9-1</td>
<td style="text-align:right">68分</td>
<td style="text-align:right">12分</td>
</tr>
<tr>
<td>Month9-2</td>
<td style="text-align:right">65〜73分</td>
<td style="text-align:right">15〜7分</td>
</tr>
<tr>
<td>Month9-3</td>
<td style="text-align:right">75分</td>
<td style="text-align:right">5分</td>
</tr>
</tbody>
</table>
<p>授業実測ではなく計画値。SHOULD／OPTIONAL省略・個別支援で調整し、時間を使い切らせない。8-3のrandomはSHOULD。9-2は段階実行と連続Zoneをdocs/21、9-3は共有15→自走55→Finish5をdocs/22で確認する。TimeEstimateは丸め表示で、合計して正式時間にしない。</p>
<h2 id="当初活動案履歴deprecated">当初活動案（履歴／deprecated）</h2>
<p>以下はv1.1当初の計画・時間・表現を残したもの。一般70〜75分や個別10分枠を現在の必須消費時間として扱わず、現行の順序・配分は上表／docs/24／最新Notesを優先する。</p>
<p>当初の共通案：80分枠、教材70〜75分、残り5〜10分をバッファ。</p>
<h2 id="month8-1">Month8-1</h2>
<table>
<thead>
<tr>
<th style="text-align:right">時間</th>
<th>内容</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:right">5分</td>
<td>今日やること</td>
</tr>
<tr>
<td style="text-align:right">10分</td>
<td>フォルダ・VS Code・保存・実行</td>
</tr>
<tr>
<td style="text-align:right">5分</td>
<td>完成ゲームを遊ぶ</td>
</tr>
<tr>
<td style="text-align:right">10〜15分</td>
<td>ゲーム分析ワーク</td>
</tr>
<tr>
<td style="text-align:right">5分</td>
<td>全体共有</td>
</tr>
<tr>
<td style="text-align:right">5分</td>
<td>変数①変更</td>
</tr>
<tr>
<td style="text-align:right">10分</td>
<td>変数②③変更</td>
</tr>
<tr>
<td style="text-align:right">10分</td>
<td>自由調整</td>
</tr>
<tr>
<td style="text-align:right">5分</td>
<td>振り返り・保存</td>
</tr>
</tbody>
</table>
<p>Month8-1の設定変更は初期値5 / 4 / サイズ各64を確認し、生徒が別の値を選んで予想・観察する。時間配分とMUST/SHOULDは変更しない。</p>
<h2 id="month8-2">Month8-2</h2>
<table>
<thead>
<tr>
<th style="text-align:right">時間</th>
<th>内容</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:right">5分</td>
<td>前回確認</td>
</tr>
<tr>
<td style="text-align:right">5分</td>
<td>START起動</td>
</tr>
<tr>
<td style="text-align:right">5分</td>
<td>座標復習</td>
</tr>
<tr>
<td style="text-align:right">5分</td>
<td>キー入力説明</td>
</tr>
<tr>
<td style="text-align:right">10分</td>
<td>右移動</td>
</tr>
<tr>
<td style="text-align:right">10分</td>
<td>左移動</td>
</tr>
<tr>
<td style="text-align:right">10〜15分</td>
<td>上下移動</td>
</tr>
<tr>
<td style="text-align:right">10分</td>
<td>画面外制限</td>
</tr>
<tr>
<td style="text-align:right">5分</td>
<td>速度調整・プレイ</td>
</tr>
<tr>
<td style="text-align:right">5分</td>
<td>振り返り・保存</td>
</tr>
</tbody>
</table>
<h2 id="month8-3">Month8-3</h2>
<table>
<thead>
<tr>
<th style="text-align:right">時間</th>
<th>内容</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:right">5分</td>
<td>前回確認</td>
</tr>
<tr>
<td style="text-align:right">5分</td>
<td>START起動</td>
</tr>
<tr>
<td style="text-align:right">5分</td>
<td>enemy1〜3の変数と初期y位置を確認</td>
</tr>
<tr>
<td style="text-align:right">10分</td>
<td>enemy1を下へ動かす</td>
</tr>
<tr>
<td style="text-align:right">10分</td>
<td>enemy1の画面下判定</td>
</tr>
<tr>
<td style="text-align:right">10分</td>
<td>random復習・enemy1のx座標random化</td>
</tr>
<tr>
<td style="text-align:right">10〜15分</td>
<td>enemy2 / enemy3の参考コードを確認・コピー</td>
</tr>
<tr>
<td style="text-align:right">5分</td>
<td>プレイ確認</td>
</tr>
<tr>
<td style="text-align:right">5分</td>
<td>振り返り・保存</td>
</tr>
</tbody>
</table>
<h2 id="month9-1">Month9-1</h2>
<table>
<thead>
<tr>
<th style="text-align:right">時間</th>
<th>内容</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:right">5分</td>
<td>前回確認</td>
</tr>
<tr>
<td style="text-align:right">5分</td>
<td>今日の問い</td>
</tr>
<tr>
<td style="text-align:right">10分</td>
<td>Rect説明</td>
</tr>
<tr>
<td style="text-align:right">10分</td>
<td>enemy1のRectコード確認</td>
</tr>
<tr>
<td style="text-align:right">10〜15分</td>
<td>enemy1の当たり判定実装</td>
</tr>
<tr>
<td style="text-align:right">10分</td>
<td>enemy2 / enemy3へ同じ判定を展開</td>
</tr>
<tr>
<td style="text-align:right">5分</td>
<td>Game Over接続</td>
</tr>
<tr>
<td style="text-align:right">10分</td>
<td>デバッグ・テスト</td>
</tr>
<tr>
<td style="text-align:right">5分</td>
<td>振り返り・保存</td>
</tr>
</tbody>
</table>
<h2 id="month9-2">Month9-2</h2>
<table>
<thead>
<tr>
<th style="text-align:right">時間</th>
<th>内容</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:right">5分</td>
<td>STARTを遊ぶ</td>
</tr>
<tr>
<td style="text-align:right">5分</td>
<td>前回との比較</td>
</tr>
<tr>
<td style="text-align:right">10分</td>
<td>item当たり判定</td>
</tr>
<tr>
<td style="text-align:right">10分</td>
<td>score加算</td>
</tr>
<tr>
<td style="text-align:right">10〜15分</td>
<td>item再配置</td>
</tr>
<tr>
<td style="text-align:right">10分</td>
<td>通しプレイ</td>
</tr>
<tr>
<td style="text-align:right">10分</td>
<td>デバッグ</td>
</tr>
<tr>
<td style="text-align:right">5分</td>
<td>バランス調整</td>
</tr>
<tr>
<td style="text-align:right">5分</td>
<td>振り返り・保存</td>
</tr>
</tbody>
</table>
<h2 id="month9-3">Month9-3</h2>
<table>
<thead>
<tr>
<th style="text-align:right">時間</th>
<th>内容</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:right">5分</td>
<td>完成ゲームを遊ぶ</td>
</tr>
<tr>
<td style="text-align:right">10分</td>
<td>Month8-1ワーク再確認</td>
</tr>
<tr>
<td style="text-align:right">10〜15分</td>
<td>コード対応付け</td>
</tr>
<tr>
<td style="text-align:right">5分</td>
<td>改造版を複製</td>
</tr>
<tr>
<td style="text-align:right">5分</td>
<td>改造内容選択</td>
</tr>
<tr>
<td style="text-align:right">20〜25分</td>
<td>改造・制作</td>
</tr>
<tr>
<td style="text-align:right">5分</td>
<td>プレイテスト</td>
</tr>
<tr>
<td style="text-align:right">5分</td>
<td>共有・振り返り</td>
</tr>
</tbody>
</table>
`},"07_material_policy":{html:`<h1 id="教材運用slidev方針-v10">教材運用・Slidev方針 v1.0</h1>
<h2 id="管理">管理</h2>
<ul>
<li>Slidev等のHTML系教材を前提</li>
<li>Markdown中心</li>
<li>AI生成主体、直接編集可能</li>
<li>講師投影用と生徒閲覧用を兼ねる</li>
</ul>
<h2 id="slidev共通基盤">Slidev共通基盤</h2>
<ul>
<li>教材全体を<code>slides/</code>の1つのSlidevプロジェクトで管理し、入口は<code>slides/slides.md</code>とする</li>
<li>Lesson本文は<code>slides/monthX/</code>、常設Referenceは<code>slides/reference/</code>へ分ける</li>
<li>画面は16:9とし、共通の文字サイズ・ラベル・教材ブロックは<code>slides/styles/index.css</code>で管理する</li>
<li>Componentは複数Lessonで反復利用する小さな表示部品に限定し、Lesson本文はMarkdownを中心にする</li>
<li>Slidevからコードへは固定Lesson IDで案内し、行番号は使わない</li>
<li>講師向けの想定時間、問い、よくあるミス、達成ラインはSpeaker Notesへ記載する</li>
<li>操作、Python、Game、DEBUG、制作のReferenceは短く確認して本編へ戻れる構成にする</li>
<li>開発とbuildの手順は<code>slides/README.md</code>を正本とする</li>
</ul>
<p>Student／Instructor Webは同じLesson・Reference Markdownから単一buildし、route・入口・講師用導線だけを分ける。Notesは既存Speaker Notes、Guideは既存docsからrenderし、本文を複製しない。Web生成物はslides/dist、Phase 1の生徒コードはdist/monthX-Xで分離する。構成・base・静的reload・検証は<a href="/robot-python-game/instructor/docs/25_student_instructor_web_architecture/">docs/25</a>を参照する。Phase 2ではdeploy・download・Homeの本格デザインを行わない。</p>
<h2 id="slidev-v03month8-1実装">Slidev v0.3（Month8-1実装）</h2>
<ul>
<li>デザイン・情報設計の最新正本は<code>docs/12_slidev_design_system_v03.md</code>。調査根拠はdocs/11、docs/09・10のv0.2本文は過去記録として残す</li>
<li>1ページを1つの理解・作業単位とし、目的・手順・コード・確認を同じページに置く。情報の関係に合わせて8文法を使い、CardやComponentを増やす理由にしない</li>
<li>共通ヘッダーはLesson名、現在の内容名、目次、調べる、本編内のページ番号。本編とReferenceの枚数を分ける</li>
<li>Hintは常時表示のボタンで最大3段階を切り替え、一度に1つ表示する。ページ送りや<code>v-click</code>には連動しない</li>
<li>Referenceは語句索引＋VS Code / Python / Game / Debug。項目は意味・例・用途・関連Lessonで構成し、本文のスクロールを許可する</li>
<li><code>from</code> queryに既知の名前付きページだけを渡し、カテゴリ移動・再読み込み後も元の作業へ戻る。直接訪問時はLesson一覧へ。独自Router・Storeは追加しない</li>
<li>Month8-1は本編12ページ。Reviewに固定ID・設定名・初期値5/4/64・変化・関連Workリンクを置く。MUST / SHOULD / CHALLENGEは既存カリキュラムどおり</li>
<li>設定変更は初期値を示し、生徒が別の値を選び、結果を観察する。変更値を固定指定するのは、同じ値で比較する必要がある場合だけ</li>
<li>Speaker Notesは「時間・問い・よくある間違い・確認する到達点・余裕がある時・時間不足」。Overviewに全体進行表を置き、机上配分70分と実授業の所要時間を区別する</li>
<li>Slidev専用画像は<code>slides/public/</code>。実画面は800:600を維持して全景表示し、Gameコード・assetsは変更しない</li>
</ul>
<h2 id="制作順序">制作順序</h2>
<ol>
<li>教育設計</li>
<li>Game仕様</li>
<li>MASTERコード</li>
<li>START / COMPLETE</li>
<li>START→COMPLETE通しテスト</li>
<li>Slidev共通テンプレート</li>
<li>Month8-1 Slidev完成教材</li>
<li>v0.3共通デザイン確認</li>
<li>Month8-2〜9-3量産</li>
</ol>
<h2 id="講師用データと生徒配布物">講師用データと生徒配布物</h2>
<ul>
<li>講師・開発用Lessonは<code>game1/lessons/monthX-X/start.py</code>と<code>complete.py</code>で管理する</li>
<li>生徒には<code>start.py</code>を<code>monthX-X.py</code>へ変更したものだけを配布し、<code>complete.py</code>は含めない</li>
<li>開発中のLesson assetsは<code>game1/assets/</code>で共通管理する</li>
<li>配布用データ生成時だけ各Lessonフォルダへassetsをコピーする</li>
<li><code>python tools/build_student_lessons.py</code>で全6回の<code>dist/monthX-X/monthX-X.py</code>＋<code>assets/</code>を生成し、<code>dist/</code>はGit管理しない</li>
<li>Month9-3の<code>examples/</code>は講師・開発用に残し、標準配布物へ含めない</li>
</ul>
<p>Student Distribution BuilderはSTARTと標準素材だけをコピーし、内容一致・余計な配布物の除外を検査する。入力確認後にdist内の専用6フォルダだけを再生成し、正本・他のdist内容には書き込まない。生徒作品は再生成前にdist外へ別保存する。詳細・検証方法は<a href="/robot-python-game/instructor/docs/04_game1_start_complete/">docs/04</a>を参照し、Phase 1ではWeb公開・zip生成・生徒フォルダへのREADME追加を行わない。</p>
<p>授業運用は「講師が生成・検証→各生徒専用の共有Driveへ事前配置→生徒が自分の今日のLessonを開く」。Month8〜12のフォルダを先に用意してよいが、未実装教材のファイルをあるものとして案内しない。builderは講師側ツールで、生徒の授業中操作ではない。本人の編集権限・PCからの起動を確認し、既存作品を上書きしない。Month9-3のコピーは配布生成ではなく作品保全の活動とする。</p>
<h3 id="game1-drive配置用パッケージ">Game1 Drive配置用パッケージ</h3>
<p><code>python tools/build_drive_game1_package.py</code>で、Git管理外の<code>drive-package/</code>をローカル生成する。既存<code>dist/</code>は変更せず、生徒コード・標準6素材の無加工コピー／byte一致検査は既存student builderと共有する。生成のみはPython標準ライブラリで動き、ゲーム起動にはPython／Pygameが必要。</p>
<ul>
<li><code>01_生徒用原本/Month8|Month9/&lt;番号_公開タイトル&gt;/</code>：<code>monthX-X.py</code>＋<code>assets/</code>のみ。6回のSTARTとbyte一致し、完成コード・README・PDF・開発資料は含めない。</li>
<li><code>02_講師用/01_完成コード/</code>：正式COMPLETE 5回を無加工コピーし、それぞれassetsを同梱する。Month9-3は正式な共通COMPLETEがないため、同回の原本への相対参照を記した案内文だけとする（完成コードを新作しない）。</li>
<li>同<code>02_プリント/</code>：activeのLOG 01／02／03だけ。<code>output/pdf/</code>の8-1／9-2／9-3をbyte一致でコピーし、名前だけLOG番号・公開タイトルへ変更する。archiveは含めない。</li>
<li>同<code>03_教材リンク/教材リンク集.txt</code>：既存公開URLとroutingに基づくHome・Guide・Reference・6 Lessonへの入口。本文は複製せず、補助教材はStudent Home経由。公開名・active PDFは既存<code>slides/material-catalog.mjs</code>から取得する。</li>
</ul>
<p>最上位<code>README.txt</code>に「原本を対象生徒の専用Driveへコピーし、自分のコピーを編集」「既存作品へ上書きしない」と、Pages＝教材／Drive＝作品／Spreadsheet＝進度の役割を記す。Driveへのアップロード・権限設定・zip生成はしない。</p>
<p>全入力確認→専用一時領域へ仮生成→構成・byte一致・禁止物・Windows用ファイル名・symlink不在を検査→同一filesystem内のrenameで置換する。置換失敗時は前回出力を復元する。清掃対象は所有確認できる<code>drive-package/</code>と、この実行が作った専用一時領域のみ。未知の既存フォルダやsymlinkは拒否し、同時生成も拒否する。再生成で古い生成物は除かれるため、生成先を作品保存先にしない。<code>python -B -m unittest discover -s tests -v</code>で安全性とrepo外起動を検査し、headless結果とWindows実機確認を区別する。Guideへ開発手順は複製しない。</p>
<h2 id="コードへの誘導">コードへの誘導</h2>
<ul>
<li>Slidevからコードへ誘導するときは、変動する行番号ではなく <code>[8-2-1]</code> のような固定Lesson IDを使用する</li>
<li>生徒はVS Codeの <code>Ctrl + F</code> で固定IDを検索する</li>
<li>START / COMPLETE / Slidevで同じIDと処理名を維持する</li>
<li>START冒頭の「今日の学習」で、その回に扱う番号と内容を短く示す</li>
<li>コードの区分には <code>[EDIT]</code>、<code>[READ]</code>、<code>[SYSTEM]</code>、<code>[LEARNED]</code>、<code>[CHALLENGE]</code> を使用する</li>
<li>正規IDはコード中の対象箇所で一意にし、冒頭一覧では括弧なしの番号を示す</li>
<li>コード内コメントは短い意味づけ・変数ヒント・日本語疑似コードに留め、詳しい説明・図解・完成例はSlidev / HTML教材へ置く</li>
<li>Month8は支援を厚めにし、Month9は既習コードを自分で探せるよう段階的にヒントを減らす</li>
<li>小学生向けコードでは、主要セクションとEDIT箇所の間にやや広めの空行を取る</li>
</ul>
<h2 id="常設reference">常設Reference</h2>
<p>Game1の現行体系・全導線・保守は<a href="/robot-python-game/instructor/docs/23_game1_reference_system/">docs/23</a>を正本とする。操作／Python／Game／DEBUG／制作の5カテゴリ。旧URLと既存Lessonの帰路を維持する。</p>
<h3 id="vs-code">VS Code</h3>
<p>フォルダを開く、保存、実行、停止、複製</p>
<h3 id="python">Python</h3>
<p>変数、代入、加減算、比較演算、if。Game Overの目印はGameへ集約し、一般bool・論理演算・ループを新しい学習範囲にしない。</p>
<h3 id="game">Game</h3>
<p>座標、キー入力、random、Rect、当たり判定、score</p>
<h3 id="debug">Debug</h3>
<p>動かないとき、エラーが出たとき、直前の変更、実行ファイル確認</p>
<h3 id="制作">制作</h3>
<p>自分用コピー、画像差し替え、既存AI説明への入口、任意Pixnote。解説は共通テーマを再利用し、新しい必須課題にしない。</p>
<p>Referenceは必要な1テーマを30秒〜1分程度で見つけ、本編へ戻れる構造を目標とする。通読・講義代替ではなく、児童実測の保証ではない。Hintは今の課題への段階支援、Referenceは既習・操作・API・困った症状の確認。</p>
`},"08_codex_handoff":{html:`<h1 id="codex引き継ぎ仕様game-1-master実装-v11">Codex引き継ぎ仕様：Game 1 MASTER実装 v1.1</h1>
<h2 id="目的">目的</h2>
<p>INNOVATOR向けPython/Pygame教材「DODGE &amp; COLLECT」のGame 1 MASTER完成版を実装する。</p>
<h2 id="必須">必須</h2>
<ul>
<li>Python + Pygame</li>
<li>Windows対応</li>
<li>1ファイル中心：game.py</li>
<li>class禁止</li>
<li>敵・itemのlist管理禁止</li>
<li>生徒に意味が読める変数名</li>
<li>学習対象と基盤コードをコメントで区分</li>
<li>asset差し替え対応</li>
<li>asset不足・読み込み失敗時も可能な限りfallback</li>
<li>相対パス</li>
<li>配布フォルダ単体動作</li>
<li>60FPS程度</li>
<li>display更新とフレーム制御は1フレーム各1回</li>
<li>VSync利用不可時も通常表示と60FPS制御で動作</li>
<li>START / COMPLETE派生を作りやすい構造</li>
</ul>
<h2 id="開発配布構成">開発・配布構成</h2>
<ul>
<li>MASTER：<code>game1/master/game.py</code>。検証済みMASTERは変更しない</li>
<li>講師・開発用Lesson：<code>game1/lessons/monthX-X/start.py</code>、<code>complete.py</code></li>
<li>Month9-3は共通の<code>complete.py</code>を作成しない</li>
<li>Lesson開発用assets：<code>game1/assets/</code></li>
<li>生徒配布用：<code>dist/monthX-X/monthX-X.py</code>と同階層の<code>assets/</code></li>
<li>生徒配布物に<code>complete.py</code>や<code>examples/</code>を含めない</li>
<li>配布物は<code>tools/build_student_lessons.py</code>で生成する</li>
<li>Lessonコードのasset pathは<code>__file__</code>を基準とし、同階層assetsを優先して開発用共通assetsへfallbackする</li>
</ul>
<h2 id="ゲーム仕様">ゲーム仕様</h2>
<ul>
<li>800x600を初期候補</li>
<li>player：4方向移動、画面外制限</li>
<li>enemy：3体、初期y位置をずらし、それぞれ上→下へ直進、画面下で上へ戻りx random</li>
<li>item：1個、静止、取得でscore+100、取得後random再配置</li>
<li>どのenemyとの接触でもGame Over</li>
<li>RでRestart可</li>
<li>ESCで終了可</li>
<li>player_speed / enemy_speed / size等を上部設定へ集約</li>
<li>player/enemy/item/background画像対応</li>
<li>item_get / game_over SE対応</li>
<li>item取得時に短時間の「+100」表示</li>
<li>Game Over時に短時間の赤色フラッシュ</li>
</ul>
<h2 id="教育用記述">教育用記述</h2>
<ul>
<li><code>player_x = player_x + player_speed</code></li>
<li>上下左右は重複を残す</li>
<li>max/min/clampで抽象化しない</li>
<li>randomは <code>random.randint()</code></li>
<li>Rect生成は基盤寄り</li>
<li>enemy1 / enemy2 / enemy3の移動・再配置・Rect・collision・描画は個別に記述</li>
<li>scoreは <code>score = score + 100</code></li>
<li>SEと軽量視覚エフェクトは基盤コードとしてコメントで分離</li>
</ul>
<h2 id="禁止">禁止</h2>
<p>class、dataclass、不要な関数分割、list管理、forループによる敵管理、敵更新・collisionの関数化、高度な型ヒント、複雑なパス管理、高度な例外処理、教育対象の過度な抽象化。</p>
<h2 id="実装後確認">実装後確認</h2>
<ol>
<li>4方向移動</li>
<li>画面外制限</li>
<li>enemy1 / enemy2 / enemy3の自動移動と初期y位置ずらし</li>
<li>敵3体の個別random再配置</li>
<li>playerと各enemyのcollision</li>
<li>どの敵との接触でもGame Over</li>
<li>Restartでplayer・敵3体・item・score・game_overを初期化</li>
<li>item collision</li>
<li>score+100</li>
<li>item random再配置</li>
<li>複数回Restartして正常</li>
<li>画像・SE・軽量視覚エフェクト</li>
<li>assets欠損・読み込み失敗時のfallback</li>
<li>配布フォルダ単体起動</li>
</ol>
<h2 id="参照">参照</h2>
<ul>
<li>03_game1_spec.md</li>
<li>04_game1_start_complete.md</li>
<li>05_game1_code_design.md</li>
</ul>
`},"09_slidev_implementation":{html:`<h1 id="slidev教材-実装基盤仕様">Slidev教材 実装基盤仕様</h1>
<blockquote>
<p>この本文はv0.2時点の記録。現行の正本は<a href="/robot-python-game/instructor/docs/12_slidev_design_system_v03/">docs/12</a>、実装差分は本書末尾を参照。</p>
</blockquote>
<blockquote>
<p>Status: v0.2 / Month8-1実装・画面確認済み<br>
Scope: Month8〜Month12で共用するSlidev教材基盤<br>
Related: <code>07_material_policy.md</code>, <code>10_slidev_design_system.md</code></p>
</blockquote>
<h2 id="1-この仕様の位置付け">1. この仕様の位置付け</h2>
<p>本書は、Slidev教材のディレクトリ構成、共通部品、Reference、Speaker Notes、Lesson ID連携、起動・ビルド、制作・検証手順を定める実装上の正本である。</p>
<p>教材全体の方針は <code>07_material_policy.md</code>、画面表現とページデザインは <code>10_slidev_design_system.md</code> を正本とする。仕様が競合する場合、実装構成は本書、見た目と学習UIは <code>10_slidev_design_system.md</code> を優先する。</p>
<p>Slidev教材は単なる講師用スライドではない。次の3つを兼ねる。</p>
<ul>
<li>講師が投影して授業を進行する資料</li>
<li>生徒が自分のPCで読み、作業を進める手順書</li>
<li>作業中に戻って確認できる常設Reference</li>
</ul>
<p>生徒はブラウザ上のSlidev、VS Code、Pygameを往復する。IDE一体型教材は作らない。</p>
<h2 id="2-基本原則">2. 基本原則</h2>
<h3 id="21-1ページ1目的">2.1 1ページ1目的</h3>
<p>1ページは、1つの理解または1つの行動だけを扱う。説明、コード、課題、ヒント、振り返りを1ページへ詰め込まない。</p>
<h3 id="22-教材とコードの役割分担">2.2 教材とコードの役割分担</h3>
<p>Slidevでは次を扱う。</p>
<ul>
<li>なぜそうなるか</li>
<li>図解とゲーム画像</li>
<li>作業手順</li>
<li>TRY、CHECK、Hint、Reference</li>
</ul>
<p>VS Codeでは次を扱う。</p>
<ul>
<li>実際のLessonコード</li>
<li>短い日本語ヒント</li>
<li>穴埋め</li>
<li>編集箇所</li>
</ul>
<h3 id="23-lessonコードとの同期">2.3 Lessonコードとの同期</h3>
<p>コード位置の案内に行番号を使わない。Lessonコードの固定IDを使う。</p>
<pre><code class="language-text">Ctrl + F
↓
[8-2-1]
</code></pre>
<p>同じIDを、講師・開発用 <code>start.py</code>、<code>complete.py</code>、Slidevで共有する。Month8では検索操作まで強く案内し、Month9以降は変数名や処理を自分で探す課題へ段階的に移行する。</p>
<h3 id="24-支援の段階的縮小">2.4 支援の段階的縮小</h3>
<p>Month8では手順、固定ID、Hintを厚くする。Month9以降は、既習内容を参照しながら自分でコードを探す比率を増やす。</p>
<h2 id="3-プロジェクト構成">3. プロジェクト構成</h2>
<p>教材全体を1つのSlidevプロジェクトとして管理する。Lessonごとに別プロジェクトを作らない。</p>
<p>基準構成は次のとおり。</p>
<pre><code class="language-text">slides/
├─ package.json
├─ package-lock.json
├─ slides.md
├─ README.md
├─ style.css
├─ components/
├─ layouts/
│  └─ lesson.vue
├─ styles/
│  └─ index.css
├─ public/
│  └─ game1/
├─ reference/
│  ├─ vscode.md
│  ├─ python.md
│  ├─ game.md
│  └─ debug.md
├─ month8/
│  ├─ month8-1.md
│  ├─ month8-2.md
│  └─ month8-3.md
└─ month9/
   ├─ month9-1.md
   ├─ month9-2.md
   └─ month9-3.md
</code></pre>
<p>Month10以降も同じ規則で追加する。実際のSlidev仕様に合わせた最小限の調整は許容するが、Lesson、Reference、共通部品、共通スタイルの責務を混在させない。</p>
<h2 id="4-エントリーとlesson管理">4. エントリーとLesson管理</h2>
<p><code>slides.md</code> をプロジェクトの入口とする。Lesson本文は <code>monthX/monthX-X.md</code> に分離し、常設資料は <code>reference/</code> に分離する。</p>
<p>Lessonは、次を一意に持つ。</p>
<ul>
<li>Month / Lesson番号</li>
<li>Lessonタイトル</li>
<li>対象ゲーム</li>
<li>ページ総数</li>
<li>Lessonコードで使う固定ID</li>
</ul>
<p>ページ順やimport方法はSlidev標準の範囲で管理する。独自Routerや高度な状態管理は導入しない。</p>
<h2 id="5-共通component方針">5. 共通Component方針</h2>
<p>Componentは、複数Lessonで反復利用する価値が明確なものだけ作る。Month8-1の完成教材で必要性を確認してから増やす。</p>
<p>初期Componentは次の6つを基準とする。</p>
<table>
<thead>
<tr>
<th>Component</th>
<th>役割</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>LessonHeader</code></td>
<td>Lesson番号、ゲーム名、現在ページを表示</td>
</tr>
<tr>
<td><code>Tag</code></td>
<td>EDIT、READ、SYSTEM、LEARNED、CHALLENGEを表示</td>
</tr>
<tr>
<td><code>TryBlock</code></td>
<td>固定ID、作業内容、短い手順を表示</td>
</tr>
<tr>
<td><code>CheckBlock</code></td>
<td>実行後の成功条件を表示</td>
</tr>
<tr>
<td><code>HintBlock</code></td>
<td>段階Hintを表示</td>
</tr>
<tr>
<td><code>ChallengeBlock</code></td>
<td>必須進行外の追加ミッションを表示</td>
</tr>
</tbody>
</table>
<p>Slidev標準Markdownで十分な表現はComponent化しない。巨大な汎用ComponentやLesson本文の自動生成機構は作らない。</p>
<h2 id="6-共通ラベル">6. 共通ラベル</h2>
<p>LessonコードとSlidevで同じラベルを使う。</p>
<table>
<thead>
<tr>
<th>ラベル</th>
<th>生徒の行動</th>
</tr>
</thead>
<tbody>
<tr>
<td>EDIT</td>
<td>今回、入力または変更する</td>
</tr>
<tr>
<td>READ</td>
<td>読んで意味を確認する</td>
</tr>
<tr>
<td>SYSTEM</td>
<td>ゲームを動かす基盤。変更しない</td>
</tr>
<tr>
<td>LEARNED</td>
<td>前のLessonで学習済み</td>
</tr>
<tr>
<td>CHALLENGE</td>
<td>余裕がある場合の発展</td>
</tr>
</tbody>
</table>
<p>色だけに意味を持たせず、必ず文字でも表示する。</p>
<h2 id="7-標準ページ種別">7. 標準ページ種別</h2>
<p>教材は必要に応じて次のページ種別を使う。</p>
<ul>
<li>TITLE</li>
<li>GOAL</li>
<li>REVIEW</li>
<li>SETUP</li>
<li>PLAY</li>
<li>OBSERVE / THINK</li>
<li>WORK</li>
<li>EXPLAIN</li>
<li>CODE / TRY</li>
<li>CHECK</li>
<li>HINT</li>
<li>REFERENCE</li>
<li>MISSION / CHALLENGE</li>
<li>REFLECT</li>
</ul>
<p>すべてを専用Componentにする必要はない。通常ページはMUST扱いとし、SHOULDとCHALLENGEのみ必要に応じて明示する。</p>
<h2 id="8-tryとcheck">8. TRYとCHECK</h2>
<p>TRYは最低限、次を示す。</p>
<ul>
<li>VS Codeへ移動すること</li>
<li>どこを触るか</li>
<li>Lesson固定ID</li>
<li>何を変更するか</li>
<li>必要な場合のみ短いHint</li>
</ul>
<p>例：</p>
<pre><code class="language-text">EDIT

プレイヤーをもっと速くしよう。

1. VS Codeへ移動
2. Ctrl + F
3. [8-1-1] を検索
4. player_speed を探す
</code></pre>
<p>CHECKは、実行して何が起きれば成功かを一文で明示する。変化しない場合はHintまたはDebug Referenceへ誘導する。</p>
<h2 id="9-hint">9. Hint</h2>
<p>Hintは答えを最初から見せず、原則3段階にする。</p>
<ol>
<li>考える方向</li>
<li>使う変数や処理</li>
<li>完成に近いコード</li>
</ol>
<p>Month8では厚く、Month9以降は段階的に減らす。v0.2では、クリックまたはSlidev標準の段階表示で <code>1 → 2 → 3</code> と開ける構造を目指す。独自状態管理は導入しない。</p>
<h2 id="10-reference">10. Reference</h2>
<p>ReferenceはLesson本文と独立した常設資料とし、作業場所から短い操作で開き、Lessonへ戻れるようにする。</p>
<h3 id="101-vs-code">10.1 VS Code</h3>
<ul>
<li>フォルダを開く</li>
<li>ファイルを開く</li>
<li>保存</li>
<li>実行</li>
<li>停止</li>
<li><code>Ctrl + F</code></li>
<li>ファイル / フォルダ複製</li>
</ul>
<h3 id="102-python">10.2 Python</h3>
<ul>
<li>変数</li>
<li>代入</li>
<li>足し算 / 引き算</li>
<li>比較演算</li>
<li><code>if / elif / else</code></li>
<li><code>True / False</code></li>
<li><code>for / while / range</code></li>
</ul>
<h3 id="103-game">10.3 Game</h3>
<ul>
<li>x / y座標</li>
<li>キー入力</li>
<li><code>random</code></li>
<li><code>Rect</code></li>
<li><code>colliderect</code></li>
<li><code>score</code></li>
<li>Game Over</li>
<li>フラグ</li>
</ul>
<h3 id="104-debug">10.4 Debug</h3>
<ul>
<li>保存したか</li>
<li>正しいファイルを実行しているか</li>
<li>直前に変更した場所</li>
<li>スペル、記号、インデント</li>
<li>エラーの行番号とその周辺</li>
</ul>
<p>1項目は「意味」「短い例」「何に使うか」までとし、長い教科書にしない。Referenceトップでは空のカテゴリカードだけを置かず、よく使う情報を最初から見せる。</p>
<h2 id="11-speaker-notes">11. Speaker Notes</h2>
<p>講師情報は生徒向け本文へ大量に混ぜず、Speaker Notesへ記録する。</p>
<p>Notesは必要に応じて次を持つ。</p>
<ul>
<li>想定時間</li>
<li>講師の問い</li>
<li>よくある間違い</li>
<li>MUST達成ライン</li>
<li>SHOULDへの進み方</li>
<li>時間不足時に削る内容</li>
</ul>
<p>標準書式はMonth8-1実装時に実例で確認し、必要なら更新する。</p>
<pre><code class="language-text">講師メモ：
目安 10分
右移動ができたら一度全員STOP。
x座標と+方向を確認してから左移動へ。
</code></pre>
<h2 id="12-アセット管理">12. アセット管理</h2>
<p>Slidev用画像は <code>slides/public/</code> 以下に置く。Game 1の教材画像は次を基準とする。</p>
<pre><code class="language-text">slides/public/game1/
├─ game-screen.png
├─ player.png
├─ enemy.png
├─ item.png
└─ speed-comparison.png
</code></pre>
<p>ゲーム本体の <code>game1/assets/</code> は変更しない。既存アセットを再利用できる場合は再利用し、教材専用の切り抜きや比較画像のみ <code>slides/public/</code> に置く。</p>
<h2 id="13-起動とビルド">13. 起動とビルド</h2>
<pre><code class="language-bash">cd slides
npm install
npm run dev
</code></pre>
<p>本番ビルドは次を使う。</p>
<pre><code class="language-bash">npm run build
</code></pre>
<p>install、dev、build、必要になった場合のexport手順は <code>slides/README.md</code> に簡潔に記載する。export運用はMonth8-1の実利用確認後に確定する。</p>
<h2 id="14-教材制作フロー">14. 教材制作フロー</h2>
<p>各Lessonは次の順で作る。</p>
<ol>
<li>Lesson詳細設計を読む</li>
<li>対象の <code>start.py</code> を確認する</li>
<li>EDIT固定IDを確認する</li>
<li>授業展開とMUST / SHOULD / CHALLENGEを確認する</li>
<li>Slidev本文を作る</li>
<li><code>start.py</code> から教材どおり操作する</li>
<li><code>complete.py</code> 相当の結果になるか確認する</li>
<li>70〜75分の授業進行に収まるか確認する</li>
<li>必要な場合だけ教材・Lesson設計を同期更新する</li>
</ol>
<p>コード例は必ず対象Lessonの実コードと照合する。STARTコードと異なるコード例を載せない。</p>
<h2 id="15-検証項目">15. 検証項目</h2>
<h3 id="151-技術確認">15.1 技術確認</h3>
<ul>
<li>Slidevが起動する</li>
<li>16:9で表示される</li>
<li>通常画面とPresenter画面が動く</li>
<li>共通Componentが表示される</li>
<li>コードブロックが読める</li>
<li>Referenceへ移動し、Lessonへ戻れる</li>
<li>Speaker NotesがPresenterで読める</li>
<li>production buildが成功する</li>
<li>生徒PC幅で極端に崩れない</li>
</ul>
<h3 id="152-教材確認">15.2 教材確認</h3>
<ul>
<li>生徒が自分でページを追える</li>
<li>投影しても読める</li>
<li>VS Codeとの往復が一目で分かる</li>
<li>TRYとCHECKの対応が明確</li>
<li>HintとReferenceへ迷わず移動できる</li>
<li>コードIDが実コードと一致する</li>
<li>1ページ1目的になっている</li>
<li>70〜75分の進行に一致する</li>
</ul>
<h2 id="16-禁止事項">16. 禁止事項</h2>
<ul>
<li>Lessonごとに別Slidevプロジェクトを作る</li>
<li>React等の別フレームワークへ変更する</li>
<li>独自SPA、独自Router、高度な状態管理を作る</li>
<li>過度なVue Component化や巨大Componentを作る</li>
<li>Lessonごとの個別CSSを乱立させる</li>
<li>1ページへ大量の文章を載せる</li>
<li>長い <code>game.py</code> 全体を載せる</li>
<li>小さい文字で情報量を稼ぐ</li>
<li>色だけで意味や重要度を表す</li>
<li>過剰なアニメーションを使う</li>
<li>行番号でコード位置を案内する</li>
<li>完成コードを早い段階から常時表示する</li>
<li>Game 1のMASTER、Lessonコード、assets、ゲームロジックを教材UI都合で変更する</li>
</ul>
<h2 id="17-month9-3の実装上の扱い">17. Month9-3の実装上の扱い</h2>
<p>Month9-3は通常Lessonと異なり、選択式・ガイド付き改造とする。</p>
<ol>
<li>Game 1を再プレイ</li>
<li>Month8-1の分析を振り返る</li>
<li>ゲーム機能とコードを対応付ける</li>
<li>元ゲームを複製する</li>
<li>改造メニューを選ぶ</li>
<li>改造する</li>
<li>プレイテストする</li>
<li>共有する</li>
</ol>
<p>改造レベルは、A: speed / size / score、B: random / 条件 / 難易度、C: アセット差し替え、D: 自作ドット絵とする。AI利用を必須にしない。Pythonから推測しにくいアセット差し替え操作はSlidevで明示する。</p>
<h2 id="18-month8-1実装で確定した運用">18. Month8-1実装で確定した運用</h2>
<ul>
<li>共通Componentは初期設計どおり6個とし、Lesson固有の表示はMarkdownと共通CSSで組む</li>
<li>Lesson内のクイックReferenceから4カテゴリの詳細へ移動し、詳細からLessonのReferenceページへ戻る</li>
<li>Hintは<code>v-click</code>によるSlidev標準の段階表示を使う</li>
<li>Speaker Notesは「想定、講師の問い、よくある、MUST、時間不足」の5項目を基本書式とする</li>
<li>共通ヘッダーにはLesson名、ゲーム名、Lesson内ページ番号、<code>PLAY / THINK / CODE / CHECK</code>を表示する</li>
<li>LessonとReferenceの移動には<code>routeAlias</code>を使い、独自Routerは作らない</li>
<li>Month8-1は18ページ、想定74分の完成教材とする</li>
<li>通常投影幅と1024px幅で主要ページを確認する</li>
</ul>
<p>exportの配布形式と運用は、実授業で必要になった段階で確定する。</p>
<h2 id="19-agentsmd追記案">19. AGENTS.md追記案</h2>
<p>既存の <code>AGENTS.md</code> のSlidevまたは教材制作セクションへ、次を追記する。</p>
<pre><code class="language-markdown">## Slidev教材

Slidev関連の作成・修正では、次の仕様書を正本として参照する。

- \`docs/09_slidev_implementation.md\`: プロジェクト構成、Component、Reference、Speaker Notes、Lesson ID連携、起動・build、検証、禁止事項
- \`docs/10_slidev_design_system.md\`: PLAY / THINK / CODE / CHECK、タイポグラフィ、色、余白、ページ種別、ゲーム画像、Reference UI、Month8-1構成

実装前に対象Lessonの設計、\`start.py\`、固定IDを確認する。Slidevのコード例は実コードと一致させ、行番号ではなく固定IDで案内する。Game 1のMASTER、Lessonコード、assets、ゲームロジックは、教材UIの都合で変更しない。
</code></pre>
<h2 id="v03実装追記2026-10-08">v0.3実装追記（2026-10-08）</h2>
<p>過去記録を削除せず、現行実装との差分のみ記す。詳細な最新正本と検証記録は<code>docs/12_slidev_design_system_v03.md</code>。</p>
<ul>
<li>Month8-1は本編12ページ、別に共通入口1ページとReference索引＋4カテゴリ。対象コードは変更していないSTART、初期値5・4・サイズ各96。</li>
<li>共通ヘッダーはLesson・現在の内容・目次・調べる・本編ページ番号。Workは対象・手順・コード・確認を1ページに置く。11ページは設定のReview。</li>
<li>既存6部品のうちTagは継続、残り5部品を小さく更新。追加は名前付きリンクの<code>LessonLink</code>と実画面全景の<code>GameImage</code>のみ。<code>layouts/reference.vue</code>を追加。</li>
<li>Hintはボタンで局所的に開閉し、一度に1段階。<code>v-click</code>は使わない。</li>
<li>Referenceは語句索引・項目アンカー・文書スクロール。許可リスト付き<code>from</code> queryを既存Routerで保持し、直接訪問時はLesson一覧へ戻る。<code>navigation.ts</code>は名前の一覧のみでStoreではない。</li>
<li>Notesは6項目、Overviewに机上70分の進行表。実授業の時間測定とは区別する。</li>
<li>CSSはv0.3トークンへ置換。旧Hero、英語活動ナビ、巨大な作業Cardを使わない。実画面PNGは800×600の比率を保つ。</li>
<li>標準UIの既存アイコン読込・抽出は<code>uno.config.ts</code>で補う。独自ナビや新しいアイコン体系は追加しない。</li>
<li>起動、公開base path、SPA fallback、export制約は<code>slides/README.md</code>を参照。docs/10は過去記録として変更しない。</li>
</ul>
<h2 id="v05代表7画面の実装追記2026-10-08">v0.5代表7画面の実装追記（2026-10-08）</h2>
<p>適用範囲はMonth8-1のp1・p4・p7〜9・p11とReference索引だけ。Art Directionと実測記録は<code>docs/14_art_direction_v05.md</code>、情報設計はdocs/12、視覚文法はdocs/13を参照する。</p>
<ul>
<li><code>identity: v05</code>と<code>.v05</code>で限定適用。未対象本編6ページとReference詳細4ページは従来表示を保持する。</li>
<li>小さな<code>VisualBackground</code>と<code>LessonIcon</code>を追加。背景は4種の固定Flat SVG＋none。アイコンはFont Awesome Freeの使用7種だけをpackageからimportし、CDNを使わない。</li>
<li>lesson/reference layoutとTryBlock/CheckBlockを後方互換で拡張。p7〜9は同一の外側grid、Hint領域予約、確認欄固定。独自Router・Store・新しい課題は追加しない。</li>
<li>字・色・余白は既存<code>styles/index.css</code>内のv0.5区画へ集約。コード例・固定ID・12ページ構成・Notes・Gameコードは維持する。</li>
<li>起動、ライセンス、検証条件と警告は<code>slides/README.md</code>およびdocs/14末尾を参照する。</li>
</ul>
`},"10_slidev_design_system":{html:`<h1 id="slidev教材-デザインシステム">Slidev教材 デザインシステム</h1>
<blockquote>
<p>Status: v0.2 / Month8-1実装・画面確認済み<br>
Scope: Month8〜Month12で共用する学習UIと視覚表現<br>
Related: <code>09_slidev_implementation.md</code></p>
</blockquote>
<h2 id="1-デザインの目的">1. デザインの目的</h2>
<p>Slidev教材を「白いスライド、細い枠、箇条書き」から、ゲーム制作を進める学習用Web UIへ再設計する。</p>
<p>見た目だけを整えるのではなく、生徒が次の循環を迷わず続けられることを目的とする。</p>
<pre><code class="language-text">教材を見る
→ VS Codeへ移る
→ コードを変える
→ ゲームを実行する
→ 結果を確かめる
→ 教材へ戻る
</code></pre>
<h2 id="2-中心モデル">2. 中心モデル</h2>
<p>教材全体を次の4段階で統一する。</p>
<h3 id="play">PLAY</h3>
<p>ゲームを見る、遊ぶ。</p>
<h3 id="think">THINK</h3>
<p>何が起きているか観察し、しくみを考える。</p>
<h3 id="code">CODE</h3>
<p>VS Codeへ移動し、コードを探して変更する。</p>
<h3 id="check">CHECK</h3>
<p>ゲームを実行し、予想した変化が起きたか確かめる。</p>
<p>各ページでは現在の活動を明示する。</p>
<pre><code class="language-text">● PLAY
○ THINK
○ CODE
○ CHECK
</code></pre>
<p>現在位置だけを強調し、生徒が「今は説明を聞く時間か、PCを操作する時間か」を判断できるようにする。</p>
<h2 id="3-参考にする設計思想">3. 参考にする設計思想</h2>
<table>
<thead>
<tr>
<th>Reference</th>
<th>採用する考え方</th>
</tr>
</thead>
<tbody>
<tr>
<td>Vercel Academy</td>
<td>大胆なタイポグラフィ、余白、情報階層、成果と現在位置の短い提示</td>
</tr>
<tr>
<td>Codecademy</td>
<td>説明、実際のコード編集、実行結果確認の連続性</td>
</tr>
<tr>
<td>Code.org</td>
<td>作業中に開き、すぐ戻れるResource Panel型Reference</td>
</tr>
<tr>
<td>CodeCombat</td>
<td>ゲーム体験と実コードの接続、段階Hint、追加ミッション</td>
</tr>
</tbody>
</table>
<p>特定サイトの外観を複製しない。教材の目的に合う情報設計だけを取り入れる。</p>
<h2 id="4-視覚方針">4. 視覚方針</h2>
<h3 id="41-基本">4.1 基本</h3>
<ul>
<li>明るいニュートラル背景</li>
<li>濃いネイビー系の本文</li>
<li>1色の強いPrimaryアクセント</li>
<li>Challengeは独立した補助アクセント</li>
<li>大きなタイポグラフィ</li>
<li>ゲーム画像を大きく使用</li>
<li>カードは情報のグループ化に必要な場合だけ使用</li>
<li>枠線を乱用しない</li>
<li>影はほぼ使用しない</li>
<li>余白を十分に残す</li>
</ul>
<h3 id="42-カラー">4.2 カラー</h3>
<pre><code class="language-text">Background      #F7F8FA
Surface         #FFFFFF
Text            #111827
Muted           #667085

Primary         #4F46E5
Primary Light   #EEF2FF

Success         #059669
Success Light   #ECFDF5

Challenge       #7C3AED
Challenge Light #F5F3FF

Warning         #D97706
</code></pre>
<p>色はv0.2画面確認後に微調整できる。意味を色だけに依存させず、ラベル、記号、文言を併用する。</p>
<h2 id="5-タイポグラフィ">5. タイポグラフィ</h2>
<table>
<thead>
<tr>
<th>用途</th>
<th style="text-align:right">目安</th>
</tr>
</thead>
<tbody>
<tr>
<td>Lesson Title</td>
<td style="text-align:right">48〜60px</td>
</tr>
<tr>
<td>Section Title</td>
<td style="text-align:right">32〜40px</td>
</tr>
<tr>
<td>本文</td>
<td style="text-align:right">22〜26px</td>
</tr>
<tr>
<td>コード</td>
<td style="text-align:right">20〜24px</td>
</tr>
</tbody>
</table>
<p>Lesson Titleは2行まで許容する。</p>
<blockquote>
<p>ゲームを遊んで<br>
しくみを見つけよう。</p>
</blockquote>
<p>小学生向けであるため、1画面へ情報を詰める目的で文字を小さくしてはならない。</p>
<h2 id="6-レイアウトと余白">6. レイアウトと余白</h2>
<ul>
<li>画面比率は16:9</li>
<li>主情報へ視線が直行する構成にする</li>
<li>1ページ1行動または1理解</li>
<li>本文は短く、必要ならページを分ける</li>
<li>コードブロックは横幅を十分に確保する</li>
<li>一度に見せるコードは原則5〜10行</li>
<li>長いコード全体を載せない</li>
<li>装飾より視線移動の少なさを優先する</li>
</ul>
<h2 id="7-常設ヘッダー">7. 常設ヘッダー</h2>
<p>全ページ上部に、低い高さで現在位置を表示する。</p>
<pre><code class="language-text">MONTH 8-1    GAME 1 · DODGE &amp; COLLECT             03 / 18
</code></pre>
<p>ヘッダーは主役にせず、Lesson番号、ゲーム名、現在ページ / 総ページを安定して確認できるものにする。</p>
<h2 id="8-title">8. TITLE</h2>
<p>白地にタイトルだけの表紙は使わない。最初の画面で「今日はゲーム制作をする」と分かるようにする。</p>
<p>構成例：</p>
<ul>
<li>左40%: Month、Lessonタイトル、1〜2行の説明</li>
<li>右60%: 実際のゲーム画面</li>
<li>下部: <code>PLAY  THINK  CODE  CHECK</code></li>
</ul>
<pre><code class="language-text">MONTH 8-1

ゲームを遊んで
しくみを見つけよう。

完成したゲームを遊んで、
コードを少し変えてみます。
</code></pre>
<h2 id="9-goal">9. GOAL</h2>
<p>箇条書きではなく、3つ以内の大きな到達点として見せる。各説明は1行程度にする。</p>
<pre><code class="language-text">01  ゲームを動かす
02  ゲームのしくみを見つける
03  数字を変えてゲームを変える
</code></pre>
<h2 id="10-setup">10. SETUP</h2>
<p>生徒が使用するフォルダ、ファイル、アプリを視覚的に示す。初期Lessonでは、次を省略しない。</p>
<ul>
<li>今日使うフォルダ</li>
<li>開くPythonファイル</li>
<li>VS Codeで開く操作</li>
<li>実行方法</li>
</ul>
<p>スクリーンショットまたは簡潔な模式図を使い、長い文章にしない。</p>
<h2 id="11-play">11. PLAY</h2>
<p>ゲームスクリーンショットを画面の60〜70%程度使用する。周囲にはプレイヤー、敵、アイテムなど最小限のラベルだけを置く。</p>
<p>下部の行動指示は明確にする。</p>
<blockquote>
<p>まず3回くらい遊んでみよう。<br>
「何が動く？」「何が起きる？」を見ておこう。</p>
</blockquote>
<p>操作説明は小さなキーUIで示す。</p>
<h2 id="12-observe--think">12. OBSERVE / THINK</h2>
<p>中央にゲーム画像を置き、周囲へ問いを配置する。</p>
<ul>
<li>プレイヤーは何をしている？</li>
<li>敵はどう動く？</li>
<li>星を取ると？</li>
<li>敵に当たると？</li>
</ul>
<p>次のページでゲームを処理へ分解する。</p>
<pre><code class="language-text">GAME
= 操作
+ 敵の動き
+ アイテム
+ 点数
+ ゲームオーバー
</code></pre>
<p>答えを先に説明しすぎず、観察から仕組みを見つける流れにする。</p>
<h2 id="13-explain">13. EXPLAIN</h2>
<p>新しい概念は次の順で示す。</p>
<ol>
<li>一言で意味</li>
<li>図解</li>
<li>必要な場合だけ短いコード</li>
</ol>
<p>視覚表現例：</p>
<h3 id="座標">座標</h3>
<pre><code class="language-text">      -y
       ↑
-x ← player → +x
       ↓
      +y
</code></pre>
<h3 id="random">random</h3>
<p>複数の出現位置候補を並べ、毎回違う位置が選ばれることを示す。</p>
<h3 id="rect">Rect</h3>
<p>キャラクター画像の周囲に当たり判定用の四角を重ねる。</p>
<h3 id="フラグ">フラグ</h3>
<pre><code class="language-text">False
↓ 発射
True
↓ 画面外
False
</code></pre>
<p>アニメーションは理解を助ける場合だけ使い、装飾目的で増やさない。</p>
<h2 id="14-code--try">14. CODE / TRY</h2>
<p>「何をするか」が一目で分かる作業画面にする。</p>
<p>基本構成：</p>
<ul>
<li>左: 作業内容と手順</li>
<li>右: 今回触る短いコード</li>
<li>下部: 変更後の予想を促す問い</li>
</ul>
<pre><code class="language-text">EDIT

プレイヤーを
もっと速くしよう。

1. VS Codeへ移動
2. Ctrl + F
3. [8-1-1] を検索
4. player_speed を探す
</code></pre>
<pre><code class="language-python">player_speed = 5
</code></pre>
<blockquote>
<p>5 → 10 にすると、どうなると思う？</p>
</blockquote>
<p>完成コード全体ではなく、今触る部分だけを表示する。各CODEページでは「VS Codeへ移動」という行動を明示する。</p>
<h2 id="15-check">15. CHECK</h2>
<p>CHECKは視覚的にし、成功条件を明示する。</p>
<pre><code class="language-text">✓ CHECK

プレイヤーが速くなった？

BEFORE 5  →  AFTER 10

変わった    → 次へ
変わらない  → HINTを見る
</code></pre>
<p>変化の前後を比較できる場合は、数値、画像、動きのいずれかで示す。</p>
<h2 id="16-hint">16. HINT</h2>
<p>大きな答えカードを最初から見せず、段階式にする。</p>
<pre><code class="language-text">HINT 1
どの数字を変えた？

HINT 2
player_speed を探そう。

HINT 3
player_speed = 10
</code></pre>
<p>最初はHint 1だけを見せ、必要な生徒だけ2、3へ進める。Hint 3は完成に近い情報であり、通常進行では常時表示しない。</p>
<h2 id="17-reference-ui">17. REFERENCE UI</h2>
<p>4つの空カードだけを並べる画面は使わない。クイックリファレンスとして、よく使う情報を最初から表示する。</p>
<pre><code class="language-text">REFERENCE

VS CODE
Ctrl + S   保存
▶          実行
Ctrl + F   コードを探す

PYTHON
x = 5       変数
x = x + 1   1増やす
if          条件

GAME
x / y       座標
random      ランダム
Rect        当たり判定

DEBUG
01 保存した？
02 正しいファイル？
03 最近変えた場所は？
</code></pre>
<p>必要に応じて各項目から詳細へ移動する。Referenceを開く、生徒が必要情報を見つける、Lessonへ戻る、という流れを短く保つ。</p>
<h2 id="18-mission--challenge">18. MISSION / CHALLENGE</h2>
<p>「宿題」ではなく、追加ミッションとして表現する。</p>
<pre><code class="language-text">★ EXTRA MISSION

敵も速くしてみよう。

enemy_speed を探して、
自分が遊べるギリギリの速さにしてみる。

BONUS
友達に遊んでもらおう。
</code></pre>
<p>Challengeは授業の必須進行を妨げず、答えが1つとは限らず、ゲーム体験の変化が見えやすいものにする。完了しなくてもLesson達成とする。</p>
<h2 id="19-reflect">19. REFLECT</h2>
<p>文章だけの3問ではなく、3つの意味あるブロックに分ける。</p>
<pre><code class="language-text">TODAY

変更したもの
[ player_speed ]

気づいたこと
[ 数字を大きくすると速くなった ]

NEXT
[ 敵も変えてみたい ]
</code></pre>
<p>回答方法は口頭、紙、外部ツールのいずれでもよい。教材画面は、何を振り返るかを明確にする。</p>
<h2 id="20-ゲーム画像の扱い">20. ゲーム画像の扱い</h2>
<p>ゲーム画像を教材の主役にする。Month8-1では最低限、次を用意する。</p>
<ul>
<li>完成Game画面</li>
<li>player拡大</li>
<li>enemy拡大</li>
<li>item拡大</li>
<li>speed変更比較</li>
</ul>
<p>コードより先にゲームが目に入る程度でよい。画像は装飾ではなく、観察、説明、比較、成功確認に使う。</p>
<h2 id="21-month8-1のページ構成">21. Month8-1のページ構成</h2>
<p>Month8-1は従来の6ページから、18ページ前後へ再構成する。1操作1画面にするため、ページ数そのものは問題にしない。</p>
<table>
<thead>
<tr>
<th style="text-align:right">#</th>
<th>種別</th>
<th>内容</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:right">1</td>
<td>TITLE</td>
<td>ゲームを遊んでしくみを見つけよう</td>
</tr>
<tr>
<td style="text-align:right">2</td>
<td>GOAL</td>
<td>今日の3ゴール</td>
</tr>
<tr>
<td style="text-align:right">3</td>
<td>SETUP</td>
<td>今日使うフォルダ</td>
</tr>
<tr>
<td style="text-align:right">4</td>
<td>SETUP</td>
<td>VS Codeで開く</td>
</tr>
<tr>
<td style="text-align:right">5</td>
<td>PLAY</td>
<td>完成ゲームを遊ぶ</td>
</tr>
<tr>
<td style="text-align:right">6</td>
<td>THINK</td>
<td>どんな動きがある？</td>
</tr>
<tr>
<td style="text-align:right">7</td>
<td>WORK</td>
<td>ゲーム分析ワーク</td>
</tr>
<tr>
<td style="text-align:right">8</td>
<td>EXPLAIN</td>
<td>ゲームを処理へ分解</td>
</tr>
<tr>
<td style="text-align:right">9</td>
<td>CODE</td>
<td>コードを見てみよう</td>
</tr>
<tr>
<td style="text-align:right">10</td>
<td>EXPLAIN</td>
<td>変数とは</td>
</tr>
<tr>
<td style="text-align:right">11</td>
<td>TRY</td>
<td><code>[8-1-1]</code> player_speed</td>
</tr>
<tr>
<td style="text-align:right">12</td>
<td>CHECK</td>
<td>速くなった？</td>
</tr>
<tr>
<td style="text-align:right">13</td>
<td>TRY</td>
<td><code>[8-1-2]</code> enemy_speed</td>
</tr>
<tr>
<td style="text-align:right">14</td>
<td>CHECK</td>
<td>難しくなった？</td>
</tr>
<tr>
<td style="text-align:right">15</td>
<td>TRY</td>
<td><code>[8-1-3]</code> size</td>
</tr>
<tr>
<td style="text-align:right">16</td>
<td>MISSION</td>
<td>自分でゲームバランス調整</td>
</tr>
<tr>
<td style="text-align:right">17</td>
<td>REFERENCE</td>
<td>困ったらここを見る</td>
</tr>
<tr>
<td style="text-align:right">18</td>
<td>REFLECT</td>
<td>今日の振り返り</td>
</tr>
</tbody>
</table>
<p>実装時には、対象の <code>start.py</code> に存在する固定IDと変数名を必ず確認し、表中のID・内容を実コードに合わせる。</p>
<h2 id="22-desktopと生徒閲覧">22. Desktopと生徒閲覧</h2>
<p>IDE一体型にはしない。生徒は次を切り替える。</p>
<pre><code class="language-text">ブラウザ Slidev
↕
VS Code
↕
Pygame
</code></pre>
<p>この切り替え自体を学習フローとして支援する。CODEでは移動先、CHECKでは戻るタイミングを明確にする。</p>
<h2 id="23-do--dont">23. DO / DON'T</h2>
<h3 id="do">DO</h3>
<ul>
<li>大きなゲーム画像</li>
<li>大胆なタイトル</li>
<li>少ない文章</li>
<li>1ページ1行動</li>
<li>明確なPLAY / THINK / CODE / CHECK</li>
<li>必要時に開けるReference</li>
<li>短いコード</li>
<li>十分な余白</li>
<li>成功条件の明示</li>
</ul>
<h3 id="dont">DON'T</h3>
<ul>
<li>四角いカードの大量配置</li>
<li>すべて同じ強さの文字</li>
<li>枠線だらけの画面</li>
<li>空白だけ多く情報がない画面</li>
<li>名前だけで中身がないReference</li>
<li>小さい説明文</li>
<li>箇条書きの連発</li>
<li>装飾目的のアニメーション</li>
<li>完成コードの常時表示</li>
</ul>
<h2 id="24-v02で固定するもの">24. v0.2で固定するもの</h2>
<ul>
<li><code>PLAY → THINK → CODE → CHECK</code></li>
<li>学習用Web UIとしての方向性</li>
<li>16:9</li>
<li>1ページ1目的</li>
<li>常設ヘッダーと活動表示</li>
<li>大きなゲーム画像</li>
<li>大きなタイポグラフィ</li>
<li>段階Hint</li>
<li>情報が最初から見えるReference</li>
<li>TRYとCHECKの対</li>
<li>VS Codeへの移動を明示すること</li>
<li>Month8-1を18ページ前後で作ること</li>
</ul>
<h2 id="25-実装後に調整するもの">25. 実装後に調整するもの</h2>
<ul>
<li>実教室の投影機で見た場合のカラーと文字サイズの微調整</li>
<li>Lessonごとの画像トリミングと注釈方法</li>
<li>ページ遷移を追加する必要性</li>
<li>export時の見え方</li>
</ul>
<p>Month8-1では、低い共通ヘッダー、ヘッダー直下の活動表示、<code>v-click</code>によるHint、Lesson内クイックReferenceと詳細ページの往復、18ページ構成を採用した。1366×768相当の投影幅と1024×640相当の生徒PC幅で、TITLE、TRY、CHECK、size変更、Referenceの主要画面を確認した。</p>
<p>Month8-1を通常画面、Presenter画面、生徒PC幅で確認し、投影性、操作性、70〜75分の授業進行を基準に更新する。</p>
`},"11_design_research":{html:`<h1 id="slidev-v03-デザイン教材ux調査">Slidev v0.3 デザイン・教材UX調査</h1>
<p>調査日：2026-10-08。対象：現行v0.2と、同日時点で公開されている学習サイト。
成果物は調査と設計のみ。採用仕様は <a href="/robot-python-game/instructor/docs/12_slidev_design_system_v03/">12_slidev_design_system_v03.md</a>。本書の評価は学習効果の実験結果ではなく、画面・コードから判断した設計上の問題と仮説である。</p>
<h2 id="1-調査方法と範囲">1. 調査方法と範囲</h2>
<ul>
<li>正本：AGENTS、docs/01・02・06・07・09・10、INSTRUCTOR_GUIDE。到達目標はdocs/01・02、時間配分はdocs/06を維持する。</li>
<li>ローカル：Slidevを起動し、Month8-1全18ページを1366×768で確認。TRYを1024px幅でも確認。Debug Reference、Presenterも表示確認した。</li>
<li>ソース：入口、Lesson本文、6 Component、layout、共通CSS、4 Reference、画像、README、package/lockfile。Month8-1 STARTの固定ID・初期値・終了操作も照合した。</li>
<li>外部：Chromeで公開ページを開き、画面とDOM本文・リンクを確認。ログイン、アカウント作成、課金、課題提出はしていない。登録後の進捗・採点・教師ダッシュボードは未確認。</li>
<li>「現行」は閲覧時点のUIを指す。教材本文が2025年以降に制作されたという意味ではない。公開年と確認日を区別する。</li>
<li>外部の装飾を好みで順位付けせず、「何を探す／する／確かめるための表現か」を比較した。ブラウザーの一時キャプチャは調査用であり、他社画像を教材assetsへ転載しない。</li>
</ul>
<h2 id="2-v02監査">2. v0.2監査</h2>
<h3 id="21-全18ページの監査記録">2.1 全18ページの監査記録</h3>
<p>番号はLessonヘッダーの番号。Slidev全体の番号ではない。</p>
<table>
<thead>
<tr>
<th style="text-align:right">現行</th>
<th>確認した内容・良い点</th>
<th>問題と理由</th>
<th>v0.3への判断</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:right">1</td>
<td>ゲーム画像付き表紙</td>
<td>大見出しが3行。説明は「自分のゲームに近づけます」と成果が曖昧。画像のプレイヤー下端も切れる</td>
<td>2と統合し、成果と工程を示すOverview</td>
</tr>
<tr>
<td style="text-align:right">2</td>
<td>到達点3項目、明確な順序</td>
<td>1との情報の重複に対し、ほぼ半画面が空く。後から探す情報がない</td>
<td>表紙と統合。目標そのものは残す</td>
</tr>
<tr>
<td style="text-align:right">3</td>
<td>配布ファイル名を明示</td>
<td>ファイル名だけに1ページ。大きな空白で説明と対象が離れる。フォルダ表記が実物の<code>month8-1</code>と異なる</td>
<td>4と統合し、実物名で案内</td>
</tr>
<tr>
<td style="text-align:right">4</td>
<td>開く・実行する手順</td>
<td>「■で停止」は環境依存。変更→保存→実行の間に、起動中ゲームの終了がない</td>
<td>開く・保存・起動・終了・再実行を1作業にする</td>
</tr>
<tr>
<td style="text-align:right">5</td>
<td>キー表示とゲーム画像</td>
<td>狭い右欄で「遊んでみよう」が不自然に折れる。画像は上下が欠け、得点とプレイヤーを観察しにくい。R/ESC案内なし</td>
<td>全画面比率を守った画像と操作一覧</td>
</tr>
<tr>
<td style="text-align:right">6</td>
<td>観察対象を4つに絞る</td>
<td>7と同じ問いなのに、画像と記録先が別ページ。下端近くまで画像がある</td>
<td>7と統合、観察→記録を同じ画面に</td>
</tr>
<tr>
<td style="text-align:right">7</td>
<td>観察を書く項目が具体的</td>
<td>記入例・記録先の説明はあるが、見返せる「問いと結果の対応」が残らない</td>
<td>問いを記録の見出しとして使い、答えは先に示さない</td>
</tr>
<tr>
<td style="text-align:right">8</td>
<td>ゲームを複数処理に分ける狙い</td>
<td><code>GAME =</code>と同形ブロックの足し算では、どんな条件で何が起こるかが分からない</td>
<td>共有後に「対象／動き・条件／結果」の対応表</td>
</tr>
<tr>
<td style="text-align:right">9</td>
<td>編集してよいラベルを説明</td>
<td>不安を和らげる見出しだけでは、何を読むか検索できない。10との往復も必要</td>
<td>10と統合、名前・値・EDITの実例を同時提示</td>
</tr>
<tr>
<td style="text-align:right">10</td>
<td><code>player_speed = 5</code>が実コードと一致</td>
<td>「数字を覚える名前」だけでは名前と値、代入の違いが曖昧。「数字を変えると動きも変わる」は全変数に一般化しすぎる</td>
<td>この設定の名前・値・代入を短く説明</td>
</tr>
<tr>
<td style="text-align:right">11</td>
<td>固定IDと手順がある</td>
<td>左の巨大な枠内に空白が多く、右の短いコードは中央へ離れる。成功条件は次ページ</td>
<td>12と統合し、手順・コード・確認を近接</td>
</tr>
<tr>
<td style="text-align:right">12</td>
<td>速さの比較という成功条件</td>
<td>値の前後を左の箱と右の画像で二重表示。Hintは初期状態で全て非表示。「HINTを見る」は操作できるリンクではない</td>
<td>比較1組に整理。Hintの入口を常時見せる</td>
</tr>
<tr>
<td style="text-align:right">13</td>
<td>敵の設定値4→8が正しい</td>
<td>11と同様に大きな枠と離れたコード。手順内にVS Codeへ移る動作がない</td>
<td>14と統合、7と同じWork文法</td>
</tr>
<tr>
<td style="text-align:right">14</td>
<td>3体共通の速度変化を確認</td>
<td>コード・値と成功条件が分断。速さの変化と主観的な難しさが同じ確認に混ざる</td>
<td>「速く落ちる」を確認、難しさは問いとして分ける</td>
</tr>
<tr>
<td style="text-align:right">15</td>
<td>サイズ3変数は全て実値96</td>
<td>大小画像に数値がなく、成功条件も独立した欄でない。透明余白を含むRectと見た目の輪郭は一致しない</td>
<td>値と対象を対応付け、見た目の変化をまず確認</td>
</tr>
<tr>
<td style="text-align:right">16</td>
<td>自分で調整する時間を確保</td>
<td><code>EXTRA MISSION</code>なのにNotesは最低1設定をMUST。「ギリギリ」と「簡単を選ぶ」が矛盾</td>
<td>通常の自由調整と、複数値のCHALLENGEを区別</td>
</tr>
<tr>
<td style="text-align:right">17</td>
<td>4カテゴリに短い情報がある</td>
<td>本編終盤まで入口なし。同じ「くわしく見る」では行き先を識別しづらい。<code>speed/size</code>は実際の変数名でない</td>
<td>常設導線＋本編外の語句索引へ</td>
</tr>
<tr>
<td style="text-align:right">18</td>
<td>変更と結果を言語化させる</td>
<td><code>CHANGED/FOUND/NEXT</code>は日本語の問いと重複。初期値・IDの一覧がないため復習は前後移動になる</td>
<td>振り返りを残し、その前に設定一覧を追加</td>
</tr>
</tbody>
</table>
<h3 id="22-横断評価現象原則影響">2.2 横断評価：現象、原則、影響</h3>
<table>
<thead>
<tr>
<th>観点</th>
<th>根拠と評価</th>
</tr>
</thead>
<tbody>
<tr>
<td>情報設計</td>
<td>TRY→CHECK分離で、実行前の値・作業・成功条件を同時参照できない。1つの作業の情報を近くに置く原則に反する。ページ数自体が悪いのではない</td>
</tr>
<tr>
<td>レイアウト</td>
<td><code>.split-layout</code>の中央配置や<code>TryBlock</code>の全高枠が、短い内容にも適用される。近接すべき説明とコードの距離が内容で決まらない</td>
</tr>
<tr>
<td>Typography</td>
<td>大見出しは約42px指定だが、<code>.lesson-block__body</code>は約18px、Reference本文は約16pxの指定。1024px表示ではさらに縮む。空白があるのに作業文・コードが小さい</td>
</tr>
<tr>
<td>余白</td>
<td>3・11・13では余白が大きい一方、5の見出しは狭い欄で分断。余白総量ではなく「関連情報内は近く、別の意味間は離す」が必要</td>
</tr>
<tr>
<td>色・枠・カード</td>
<td>紫の線が手順・問い・カテゴリ・現在位置に広く使われ、重要度が同じに見える。CHECK全体の緑と✓は、未確認でも達成済みに見える余地がある</td>
</tr>
<tr>
<td>ラベル</td>
<td>活動PLAY等、ページ種別THINK等、コードのEDIT等が重複。Referenceにも活動列と<code>REF / REF</code>が残る。ラベルの分類軸を分ける必要がある</td>
</tr>
<tr>
<td>コード</td>
<td>ID・初期値の一致は維持すべき強み。ただし生徒向けの「STARTのコード」は配布名<code>month8-1.py</code>と対応しづらい。Referenceの<code>x/speed</code>への置換も転移の助けになっていない</td>
</tr>
<tr>
<td>画像</td>
<td><code>game-frame</code>の<code>object-fit: cover</code>と固定高で800×600画像を切る。元画像にも実コードの<code>Score:</code>と異なるスコア表現があり、実画面と同一と断定できない。用途・撮影条件・模式図表記が必要</td>
</tr>
<tr>
<td>比較図</td>
<td>5と10の矢印は「同じ時間」という比較条件が本文になく、数値比も読み取れない。装飾的な矢印ではなく条件を固定した図にする</td>
</tr>
<tr>
<td>ナビ</td>
<td>共通ヘッダーの活動はリンクでない。Lesson番号11/18とSlidev番号12/23が併存。前後送りはできるが、特定の作業へ戻るための索引がない</td>
</tr>
<tr>
<td>Reference</td>
<td>4詳細ページは全てMonth8-1のReferenceへ戻す固定リンク。元の作業へ直接戻れない。カテゴリ内の見出し・例・関連Lessonが弱い。Debugの最下部リンクは画面下端に接する</td>
</tr>
<tr>
<td>Hint</td>
<td><code>v-click</code>でページ送りと連動し、自分に必要なHintを選ぶ操作がない。仕様10の「初めはHint 1だけ」と実装の全非表示も不一致</td>
</tr>
<tr>
<td>Notes</td>
<td>18ページ分の時間・問い・MUST等がある点は良い。Presenterでは改行が段落に結合され、拾い読みしづらい。全回の停止地点や時間を見渡す資料がない</td>
</tr>
<tr>
<td>生徒の復習</td>
<td>サムネイル一覧だけではID・値・結果を照合できない。課題の文章は残るが、学んだ関係をまとめた資料がない</td>
</tr>
<tr>
<td>講師の予復習</td>
<td>Notes総和は74分。docs/06のMonth8-1表の和は65〜70分で、共通目安70〜75分と下限が一致しない。74分を唯一の確定配分として引き継がない</td>
</tr>
<tr>
<td>日本語</td>
<td>英語の小見出し、同じ「〜しよう」、曖昧な「自分のゲーム」、数値のない「大きく」が重なる。見出しで対象・行動を特定し、問いと操作を区別する</td>
</tr>
</tbody>
</table>
<h3 id="23-ai生成物らしさを再現可能な問題として扱う">2.3 「AI生成物らしさ」を再現可能な問題として扱う</h3>
<p>AI製かどうかを見た目で判定しない。ここで問題にするのは、内容の違いを無視した形式的な整列である。</p>
<ol>
<li><strong>同じ形なのに意味が違う</strong>：操作手順も概念の列挙も枠＋紫線。順序・分類・因果を見分けられない。</li>
<li><strong>整列のための空間</strong>：左の短い指示を巨大なカードにし、関係するコードを遠ざける。見た目の対称性が作業を助けない。</li>
<li><strong>意味のない強調の反復</strong>：英語のeyebrow、太字、紫線がどこにも付き、どこを読めばよいか絞れない。</li>
<li><strong>言葉と実態が違う</strong>：EXTRAだが必須、速さの確認なのに難しさが成功条件、具体的な目標がない広告風表現。</li>
</ol>
<p>したがって「カードを全部なくす」「無彩色にする」では解決しない。各表現に使用条件を与え、情報関係と優先度を一致させる。</p>
<h2 id="3-外部調査確認対象と限界">3. 外部調査：確認対象と限界</h2>
<p>下記リンクは一次資料。表以降の各分析は対応するページの画面・本文に基づく。教材への採否は本リポジトリの条件からの推論である。</p>
<table>
<thead>
<tr>
<th>サービス</th>
<th>実際に開いたページ</th>
<th>確認範囲・制限</th>
</tr>
</thead>
<tbody>
<tr>
<td>Vercel Academy</td>
<td><a href="https://vercel.com/academy/nextjs-foundations" target="_blank" rel="noopener noreferrer">コース概要</a>、<a href="https://vercel.com/academy/nextjs-foundations/project-setup" target="_blank" rel="noopener noreferrer">Project Setup</a></td>
<td>公開の章一覧・本文・ページ内目次。ログイン後の進捗保存は未確認</td>
</tr>
<tr>
<td>Codecademy</td>
<td><a href="https://www.codecademy.com/learn/learn-python-3" target="_blank" rel="noopener noreferrer">Pythonコース</a>、<a href="https://www.codecademy.com/resources/docs/python/variables" target="_blank" rel="noopener noreferrer">Variables文書</a></td>
<td>コースの目標・シラバス、Docsの実例。Docsは更新日2025-08-11表示。認証後の学習IDEを実見したとはしない</td>
</tr>
<tr>
<td>Khan Academy</td>
<td><a href="https://www.khanacademy.org/computing/intro-to-python-fundamentals" target="_blank" rel="noopener noreferrer">Pythonコース</a>、<a href="https://www.khanacademy.org/computing/intro-to-python-fundamentals/x5279a44ae0ab15d6:computational-thinking-with-variables/x5279a44ae0ab15d6:variables/v/what-is-a-variable-python" target="_blank" rel="noopener noreferrer">Variables and assignment</a></td>
<td>コース・単元・Lesson一覧、動画入口、About/Transcript。必須Cookieのみ許可。動画完走・演習採点は未確認</td>
</tr>
<tr>
<td>MDN Learn</td>
<td><a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Variables" target="_blank" rel="noopener noreferrer">Variables</a></td>
<td>学習経路、章内目次、前提・成果表、コード例、Note、図。本文最終更新2025-08-18表示</td>
</tr>
<tr>
<td>Code.org</td>
<td><a href="https://studio.code.org/jp/courses/coursea-2021/units/1?viewAs=Instructor" target="_blank" rel="noopener noreferrer">Course Aの公開一覧</a>、<a href="https://studio.code.org/jp/courses/coursea-2021/units/1/lessons/4/levels/2?viewAs=Instructor" target="_blank" rel="noopener noreferrer">シーケンス課題2</a></td>
<td>旧Course 1は廃止表示。案内されたCourse Aを確認。現行UI上の2021版教材であり、2026版カリキュラムとは呼ばない。ゲスト課題の初期画面まで</td>
</tr>
<tr>
<td>CodeCombat</td>
<td><a href="https://codecombat.com/play/level/dungeons-of-kithgard" target="_blank" rel="noopener noreferrer">Dungeons of Kithgard</a></td>
<td>ゲスト導入と「レベルスタート」後の目標・ゲーム・エディター・実行・メソッド一覧。Hint回答の全段階やクリア後は未確認</td>
</tr>
</tbody>
</table>
<h3 id="31-vercel-academy">3.1 Vercel Academy</h3>
<ul>
<li><strong>経路・ナビ・参照</strong>：左に章とLesson、右に本文内目次、中央に長文。概要と作業本文を分け、作業ページ内に成果、手順、完了条件、トラブル対応が続く。</li>
<li><strong>密度・実践</strong>：本文は中〜高密度の縦読み。コード・フォルダ木・用途表を説明の近くに置き、1行ごとに別画面へ送らない。</li>
<li><strong>視覚</strong>：見出しサイズ・細い横線・段落間隔で階層化。通常本文は無彩色主体。Calloutは作業対象アプリの切替など注意点に使う。概要の巨大Heroは本文と異なる役割。</li>
<li><strong>初心者支援・言語</strong>：成果・手順・完了条件の具体的な見出し。Fast Trackは既知の読者向け別経路。章を展開して詳細を出す。</li>
<li><strong>採用判断</strong>：索引と成果→作業→確認のまとまりを採用。3カラム・成人向け長文・広告的導入は投影へ移植しない。完了条件は参考になるが、説明の長さまで模倣しない。</li>
</ul>
<h3 id="32-codecademy">3.2 Codecademy</h3>
<ul>
<li><strong>経路・ナビ</strong>：コース概要は難度・時間・前提を示し、シラバスを章単位で展開。Lesson・Project・Quizと任意課題を区別する。Docsは別の概念索引を持つ。</li>
<li><strong>密度・参照</strong>：Docsは意味→代入例→値の変更→命名例の縦読み。短いコードと説明を同一文脈に置く。実際のIDEの同時配置・採点挙動は今回の確認対象外。</li>
<li><strong>視覚</strong>：Docsは見出し・本文・コードの階層、左の用語一覧、余白で区分。関連コースのカードは独立した遷移先を表す。上部販促バナーや装飾背景は学習内容でない。</li>
<li><strong>初心者支援・言語</strong>：章の展開と、概念ごとの短い例。コードのコピーボタンは操作が明確。ただしこの教材で答えを貼り付けさせる設計を意味しない。</li>
<li><strong>採用判断</strong>：学ぶ経路と調べる経路の分離、例＋意味＋利用場面を採用。販促・証明書・大量の関連コースカードは不採用。ブランドから「IDE風UI」を推測して作らない。</li>
</ul>
<h3 id="33-khan-academy">3.3 Khan Academy</h3>
<ul>
<li><strong>経路・復習</strong>：Course→Unit→Lesson→動画/記事/演習の階層。Lesson画面の左一覧には教材形式のアイコンと現在項目があり、次の記事への導線もある。</li>
<li><strong>密度・実践</strong>：動画と演習は別項目だが、同一Lesson一覧から選び直せる。動画下のAbout/Transcriptが、映像を見直す以外の入口になる。</li>
<li><strong>視覚</strong>：現在項目は背景＋左線、本文と操作は青系、余白と線で一覧の関係を示す。学習面の最大領域は映像。登録バナーは大きいが教材内容ではない。</li>
<li><strong>段階開示・コピー</strong>：階層をたどって必要な教材を選ぶ。具体的な概念名を見出しに使い、次の教材種別も示す。Cookie・登録UIは初回には説明を覆った。</li>
<li><strong>採用判断</strong>：Lesson内一覧と、あとから要点を文字で確認できる経路を採用。動画中心化、認証・学習記録システム、大きな登録誘導は不要。</li>
</ul>
<h3 id="34-mdn-learn-web-development">3.4 MDN Learn Web Development</h3>
<ul>
<li><strong>経路・索引</strong>：パンくず、左の学習順、右の本文内目次、前/概要/次を併用。前提と到達点の表、末尾のSummaryにより途中からも読める。</li>
<li><strong>密度・実践・コード</strong>：1記事内に複数の小見出し、短い実験・コード・説明がある。例を試して本文へ戻れる。参照資料は発表スライドとは異なる密度を許す実例。</li>
<li><strong>画像・Callout</strong>：変数の説明図には意味がある。Noteは例外・注意に限定。本文全体をカードにはせず、コード・表・注記を異なる形で識別する。</li>
<li><strong>文字・間隔・色・言語</strong>：大見出し→小見出し→通常文、段落間隔、リンク色と下線、現在項目の面で階層化。固有の概念を見出しにする。</li>
<li><strong>採用判断</strong>：意味のある索引、具体的な例、関連項目、要約を採用。長い記事全文や左右両サイドバーを16:9へ押し込まない。JavaScriptの内容はPython教材へ転記しない。</li>
</ul>
<h3 id="35-codeorg">3.5 Code.org</h3>
<ul>
<li><strong>経路・密度</strong>：コース一覧にLesson・課題番号・練習/Challengeがある。課題画面は上の進捗、左のゲームと実行、右の指示とブロック作業領域で1課題をまとめる。</li>
<li><strong>実践・画像・コード</strong>：画像は実行対象そのもの。短い指示が必要なブロックを示す。テキストコード欄を観察したわけではなく、ブロックと「コードの表示」操作を確認した。</li>
<li><strong>視覚・開示</strong>：実行は橙、指示・進捗は別領域。ヒント・動画への入口が作業付近にある。初回の指示とサインイン案内が重なり、画面を覆う点は採用しない。</li>
<li><strong>コピー・カード</strong>：動詞と対象を指定する短文。吹き出しは操作支援、画面枠は機能の区分。装飾用カード群ではない。翻訳表現・幼児向け表記まで模倣しない。</li>
<li><strong>採用判断</strong>：課題・確認・必要な支援を一まとまりにする。教材内IDEやゲスト進捗保存を作らず、VS Code/Pygameへの移動を明示して代替する。</li>
</ul>
<h3 id="36-codecombat">3.6 CodeCombat</h3>
<ul>
<li><strong>経路・密度</strong>：導入の目標からレベルへ進む。開始後はゲーム、右の短い実コード、実行、目標の未達成状態が同時にある。課題から離れず参照できるメソッド一覧も見える。</li>
<li><strong>画像・コード・実践</strong>：ゲーム画面がコードの結果を示す。<code>hero.moveRight()</code>等が実行と直結し、背景画像だけでゲームらしさを演出していない。</li>
<li><strong>視覚・開示</strong>：大きな開始/実行操作、目標と達成状態の文字、必要に応じた導入オーバーレイ。皮革・紙の枠やアニメーションはゲーム世界の演出で、投影教材の必要条件ではない。</li>
<li><strong>ナビ・言語・参照</strong>：レベル名、戻る、ヒント、行動メソッドが具体的な役割を持つ。導入後の全文復習や複数段階Hintの実挙動までは未確認。</li>
<li><strong>採用判断</strong>：対象コードと目に見える結果の接続を採用。疑似IDE、世界観装飾、アカウント/AI機能、未確認のHint仕様は持ち込まない。</li>
</ul>
<h2 id="4-採用不採用パターン">4. 採用・不採用パターン</h2>
<table>
<thead>
<tr>
<th>パターン</th>
<th>判断</th>
<th>この教材での使い方・理由</th>
</tr>
</thead>
<tbody>
<tr>
<td>学習経路＋用語索引</td>
<td>採用</td>
<td>Lesson目次とReferenceを分ける。順番に学ぶ人と途中から調べる人を両立</td>
</tr>
<tr>
<td>手順＋コード＋確認</td>
<td>採用</td>
<td>1つのWorkに固定ID・作業・成功条件を残す。ページ往復を減らす</td>
</tr>
<tr>
<td>概念の大きな図</td>
<td>条件付き</td>
<td>座標や代入等、関係を図示できる時だけ。全ページの大画像化はしない</td>
</tr>
<tr>
<td>高密度Reference</td>
<td>採用</td>
<td>意味・例・用途・関連Lessonを同じ項目に。本文の作業指示をReferenceへ追い出さない</td>
</tr>
<tr>
<td>選べる段階Hint</td>
<td>採用</td>
<td>開く操作を見せ、通常のページ送りと分ける。必要な支援を選ぶ</td>
</tr>
<tr>
<td>現在位置・次の行動</td>
<td>採用</td>
<td>章と作業名を文字で示す。装飾的な英語4段階表示を常設しない</td>
</tr>
<tr>
<td>Card</td>
<td>条件付き</td>
<td>独立した選択肢・リンク先だけ。手順は番号、対応は表、因果は矢印</td>
</tr>
<tr>
<td>Callout</td>
<td>条件付き</td>
<td>直前の操作に関わる注意・成功条件だけ。本文全部を色付き枠にしない</td>
</tr>
<tr>
<td>Hero/gradient/大きな登録誘導</td>
<td>不採用</td>
<td>動画やコードを押し下げる。教材の理解・作業・参照と無関係</td>
</tr>
<tr>
<td>サービス全体のIDE・進捗保存</td>
<td>不採用</td>
<td>VS Code操作が学習対象。独自SPAや管理機能は目的外</td>
</tr>
<tr>
<td>常時1画面1文、毎回別レイアウト</td>
<td>不採用</td>
<td>参照単位を壊し、内容と配置の対応を学べない</td>
</tr>
<tr>
<td>小さい文字で全情報を一画面へ</td>
<td>不採用</td>
<td>情報密度は整理で上げる。用語の索引と詳細を分ける</td>
</tr>
</tbody>
</table>
<h2 id="5-調査から得た結論">5. 調査から得た結論</h2>
<ol>
<li><strong>1ページ1文ではなく、1ページ1つの理解・作業単位</strong>。目的、例、作業、確認は同じ単位に属し得る。</li>
<li><strong>投影と参照は役割が違う</strong>。説明は図と短文、作業は手順とコード、復習は対応表、Referenceは索引付き資料にする。</li>
<li><strong>装飾を減らすだけでは不十分</strong>。順序・比較・関係・選択に、それぞれ適切な表現を選ぶ文法が必要。</li>
<li><strong>日本語の改善は操作仕様の改善でもある</strong>。「ヒントを見る」が押せるか、「停止」がどの操作かまで定める。</li>
<li><strong>実物と対応させる</strong>。固定ID、配布名、初期値、画像、比較条件を揃える。実ゲームにない見た目を実画面として扱わない。</li>
<li><strong>12ページ案は仮説</strong>。授業の内容は削らず、重複と往復を減らし、復習の一覧を追加した結果である。授業時間・投影・生徒の探索操作の確認前に、使いやすさが改善したと断定しない。</li>
</ol>
<p>補助基準：文字コントラストの判断には <a href="https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html" target="_blank" rel="noopener noreferrer">W3CのContrast Minimum解説</a> を使用する。外部サイトの色や文字サイズをそのまま採寸して正解にはしない。具体的な採用値と検証条件は仕様書12に記す。</p>
`},"12_slidev_design_system_v03":{html:`<h1 id="slidev教材-デザイン情報設計-v03">Slidev教材 デザイン・情報設計 v0.3</h1>
<p>策定日：2026-10-08。状態：Month8-1のv0.3を実装・ブラウザ検証済み。教室検証は未完了。
調査根拠：<a href="/robot-python-game/instructor/docs/11_design_research/">11_design_research.md</a>。対象：Month8〜Month12で使う共通表現とMonth8-1の再構成案。</p>
<p>本文のページ番号はv0.3時点の記録。現行のPLAY / OBSERVE統合後12ページの対応とIndex・Notes同期は<a href="/robot-python-game/instructor/docs/14_art_direction_v05/#18-%E6%9C%AC%E7%B7%A812%E3%83%9A%E3%83%BC%E3%82%B8%E3%81%AEvisual-rules-v052">docs/14の18・19節</a>を参照する。学習内容・固定IDは維持する。</p>
<h2 id="1-正本と変更範囲">1. 正本と変更範囲</h2>
<p>今後のSlidevデザイン・情報設計は本書を最新正本とする。docs/09・10はv0.2以前の記録として保存する。本書が更新するのは、ページ単位、配置、密度、視覚表現、日本語、ナビ、Hint、Reference、Notesの提示方法である。</p>
<p>カリキュラム・MUST/SHOULD/CHALLENGEはdocs/01・02、授業展開はdocs/06、制作・配布方針はdocs/07、実際の編集対象は各Lessonの<code>start.py</code>を引き続き正本とする。単一Slidevプロジェクト、Markdown主体、小さな共通部品、固定ID、共通CSSという制約は維持する。デザイン仕様を理由にゲームコード・学習量を変更しない。</p>
<p>設計策定時にはslides・Game 1を変更していなかった。その後のv0.3実装ではslidesと関連docsのみを更新した。Game 1・Lessonコード・assets・カリキュラムは変更していない。以下は設計要件であり、実装で確認した範囲と残課題は末尾「12. 実装・検証記録」に分けて記す。</p>
<h2 id="2-中心原則">2. 中心原則</h2>
<ul>
<li>1ページは<strong>1つの理解または作業のまとまり</strong>。同じ作業の目的・対象コード・手順・確認を一緒に置いてよい。</li>
<li>授業中に必要な操作と成功条件をReferenceへ逃がさない。Referenceは言葉や操作を調べ直す資料。</li>
<li>目次から作業を選べ、作業から関連資料を開き、元の作業へ戻れる。</li>
<li>先に内容の関係を決める。順序→番号付き手順、対応→表、変化・因果→図、独立した選択→選択肢。余白を埋めるためにCardを作らない。</li>
<li>白地・箇条書きも必要なら使う。「プレゼンらしくない」こと自体を目的にしない。</li>
<li>コードの5ラベルを活動名や達成状態の代わりに使わない。色・アイコンだけに意味を持たせない。</li>
</ul>
<h2 id="3-レイアウト文法">3. レイアウト文法</h2>
<h3 id="31-選び方">3.1 選び方</h3>
<p>「今日の全体像」→Overview。「関係を理解」→Concept。「見て記録」→Observe。「操作して確認」→Work。「覚えた対応を一覧」→Review。「必要な語を探す」→Reference。「任意の発展を選ぶ」→Challenge。「自分の変更を言葉に残す」→Reflect。</p>
<p>この8種類は<strong>内容の型</strong>であり、8つのVue Componentを作る指示ではない。共通ヘッダーと1〜2カラム、表・コード・小さな補助表示で構成する。ページごとの任意なlayout追加は、既存の型で表せない情報関係がある場合に限る。</p>
<h3 id="32-用途禁止密度">3.2 用途・禁止・密度</h3>
<table>
<thead>
<tr>
<th>型</th>
<th>使用条件・必須情報</th>
<th>禁止条件</th>
<th>配置・密度</th>
</tr>
</thead>
<tbody>
<tr>
<td>Overview</td>
<td>Lesson冒頭に1回。Lesson名、到達点3つ以内、工程、対象ファイル、目次への入口</td>
<td>表紙だけのHero、ゲーム名だけの大画像、目標と同じ別GOALページ</td>
<td>中密度。上に題名、左に成果、右に工程。画像は任意</td>
</tr>
<tr>
<td>Concept</td>
<td>新しい関係を説明。短い意味、関係図、必要な実コード</td>
<td>操作手順を隠す図、一般論の長文、見出しだけの1枚</td>
<td>低〜中。図と説明を近接。図がなければ1カラム</td>
</tr>
<tr>
<td>Observe</td>
<td>ゲームを観察して記録。対象、問い、記録先</td>
<td>観察前の答え一覧、画像だけ、既に終えた問いの別ページ反復</td>
<td>中。左に観察画像、右に3〜4個の問い。記録方法を下に</td>
</tr>
<tr>
<td>Work</td>
<td>VS Code操作・設定変更。対象、固定ID、目的、手順、コード、成功条件</td>
<td>TRYとCHECKの機械的な分離、手順のCard化、巨大な空枠</td>
<td>中。左40%手順、右60%コード、下に確認・Hint入口</td>
</tr>
<tr>
<td>Review</td>
<td>学んだ対応・初期値・結果を見返す。比較軸が共通の一覧</td>
<td>新しい概念の導入、長い講義文、振り返り質問だけ</td>
<td>中〜高。見出し＋3〜5行の表。関連作業へリンク</td>
</tr>
<tr>
<td>Reference</td>
<td>語句・操作を途中から調べる。索引、意味、例、用途、関連Lesson、戻り先</td>
<td>巨大Hero、用語名だけのCard、全項目を投影用1枚に詰める</td>
<td>高。カテゴリ内を見出しで区切る文書。詳細はスクロール可</td>
</tr>
<tr>
<td>Challenge</td>
<td>正本で発展に分類される課題だけ。前提、選択肢、確かめ方</td>
<td>通常の自由調整全体に発展ラベル、複数値変更をMUST化</td>
<td>中。2〜3選択肢まで。通常課題と線で分離</td>
</tr>
<tr>
<td>Reflect</td>
<td>授業末。変更、結果、次に試すこと、保存</td>
<td>CHANGED等の重複英語、一般的な感想だけ、全設定の再説明</td>
<td>中。短い記録枠1つと問い。記録先と保存を明示</td>
</tr>
</tbody>
</table>
<h3 id="33-各型の表現規則">3.3 各型の表現規則</h3>
<p>文字サイズは後述の1280×720論理キャンバス上のpx。</p>
<table>
<thead>
<tr>
<th>型</th>
<th>Typography</th>
<th>Image</th>
<th>Code</th>
<th>Callout</th>
<th>Card</th>
</tr>
</thead>
<tbody>
<tr>
<td>Overview</td>
<td>題名44、成果28、工程24</td>
<td>内容を識別する小さい全画面画像1つまで</td>
<td>ファイル名だけ</td>
<td>原則なし</td>
<td>工程には使わない</td>
</tr>
<tr>
<td>Concept</td>
<td>見出し36、本文28、注釈24</td>
<td>意味を説明する図1つ。矢印は方向・対応がある時だけ</td>
<td>1〜5行、26px。名前と値を近くで説明</td>
<td>誤解が多い点1つまで</td>
<td>原則なし</td>
</tr>
<tr>
<td>Observe</td>
<td>見出し36、問い26</td>
<td>実画面を比率保持。ラベルは対象の近く</td>
<td>原則不要</td>
<td>操作補足1つまで</td>
<td>問いを独立カードにしない</td>
</tr>
<tr>
<td>Work</td>
<td>見出し36、手順26、コード26、確認24</td>
<td>操作位置の切り抜きや必要な比較だけ</td>
<td>通常1〜6行。実名・実値・インデント維持</td>
<td>確認1つ＋必要なら注意1つ</td>
<td>手順やコードの外側に二重のCardを作らない</td>
</tr>
<tr>
<td>Review</td>
<td>見出し36、表24、コード24</td>
<td>比較の理解に必要な場合のみ</td>
<td>同じ列の短い例、または値。最大5行</td>
<td>まとめ1文まで</td>
<td>表の各セルをCard化しない</td>
</tr>
<tr>
<td>Reference</td>
<td>見出し32、小見出し26、本文22、コード22</td>
<td>言葉だけで操作場所が分からない時のみ</td>
<td>例は1〜5行。実例か概念例かを明記</td>
<td>注意は該当項目の直下</td>
<td>カテゴリ移動は一覧リンクで足りる</td>
</tr>
<tr>
<td>Challenge</td>
<td>見出し36、本文26</td>
<td>選択結果の違いが必要なら使用</td>
<td>ヒント程度。完成コード全文なし</td>
<td>任意であることを明示</td>
<td>独立して選べる課題に限り可。等高化しない</td>
</tr>
<tr>
<td>Reflect</td>
<td>見出し36、問い26、記録24</td>
<td>原則不要</td>
<td>生徒が変更した変数名を記録</td>
<td>保存の案内1つ</td>
<td>質問数に合わせて装飾カードを増やさない</td>
</tr>
</tbody>
</table>
<h3 id="34-workの配置契約">3.4 Workの配置契約</h3>
<pre><code class="language-text">Month8-1 / 設定を変える                目次  調べる  7/12
プレイヤーの速さを変える
対象: month8-1.py    EDIT    Ctrl + F → [8-1-1]
------------------------------------------------------
目的・手順（40%）       | 対象コード・変更の予想（60%）
最大4手順              | player_speed = 5
                       | 数字を変えると、どう変わる？
------------------------------------------------------
確認: 同じ時間キーを押し、前より速く動くことを確かめる。
ヒント1を開く   ヒント2を開く   ヒント3を開く
</code></pre>
<p>これは位置関係の指定であり、枠を全て描く指示ではない。左手順と右コードは上揃え。コード1行でも垂直中央へ離さない。成功条件は操作前から読めるが、生徒の結果を自動で「成功」と判定しない。</p>
<h2 id="4-情報密度と表示条件">4. 情報密度と表示条件</h2>
<table>
<thead>
<tr>
<th>モード</th>
<th>見せる情報の単位</th>
<th>目安・下限</th>
<th>超えた時の対応</th>
</tr>
</thead>
<tbody>
<tr>
<td>講師説明</td>
<td>1つの関係とその具体例</td>
<td>図1、短文2〜3、主要本文28px</td>
<td>関係の異なる概念なら分離。同じ説明を1文ずつ分割しない</td>
</tr>
<tr>
<td>生徒作業</td>
<td>1つの変更と確認</td>
<td>手順3〜4、コード通常1〜6行、確認1文、Hint入口。主要本文24px以上</td>
<td>コード専用の幅や、意味のある作業単位の分割を選ぶ。必須手順を省かない</td>
</tr>
<tr>
<td>復習</td>
<td>共通の軸で比較できる複数項目</td>
<td>表3〜5行、3〜4列、24px以上</td>
<td>単位の違う表を分離。1セルに講義文を書かない</td>
</tr>
<tr>
<td>参照</td>
<td>1語・1操作の意味と例</td>
<td>PC閲覧用22px以上。1項目は意味1〜2文＋例＋用途</td>
<td>項目を縦に追加し、索引で移動。投影では1項目を示す</td>
</tr>
</tbody>
</table>
<p>1枚の総文字数だけで判定しない。コード、表、図の注釈も含めて、実表示で読み順・はみ出し・探索性を確認する。長いコードを10行に収めるために内容を省略し、重要な条件を見えなくしてはならない。</p>
<p>Workの高さ予算（題名1行の場合）は、外周48＋ヘッダー40＋間隔16＋題名48＋間隔12＋対象帯36＋間隔16＋作業領域280＋間隔16＋確認56＋Hint入口40＝608px。残り112pxは折返し・Hint等の余裕で、空間を装飾で埋めない。題名が2行なら追加48pxをここから使う。</p>
<p>26px・行高1.5のコードは、6行＋上下padding32で266px、10行なら422px。作業領域を422pxにすると750pxとなり、Hintを出す前から720pxを超える。Month8-1のコードは1〜3行なので、同じ欄に短いHintを置ける。後続Lessonで長いコードを使う場合は、Hintを開いた状態も高さを積算し、意味のある単位へ分ける。必要なコードを削ったり文字を縮めたりして回避しない。</p>
<h3 id="表示の境界">表示の境界</h3>
<ul>
<li>本編は16:9、1280×720を継続。最小確認幅1024pxでは0.8倍となり、24pxは約19px、コード26pxは約21pxになる。ブラウザー全幅利用を基準とし、VS Codeと半分ずつ並べる表示を必須にしない。</li>
<li>投影の後方席で本文24pxが十分かは未検証。不足時は文字を大きくして内容を整理する。小さい注釈に必須手順を置かない。</li>
<li>Reference詳細だけは縦スクロールを許す。可視範囲に索引・戻りを残し、キーボードでもスクロールできる領域にする。本編に隠れた縦スクロールを作らない。</li>
<li>Reference全文を同じ16:9に縮小して投影しない。講師は対象項目だけ見せる。印刷・PDFでスクロール部を落とさない方法は実装時の検証事項。</li>
</ul>
<h2 id="5-visual-design-system">5. Visual Design System</h2>
<p>値は初期実装の基準。実教室・Windowsフォントで検証後に全体トークンを調整する。Lesson固有CSSで穴埋めしない。</p>
<h3 id="51-文字">5.1 文字</h3>
<table>
<thead>
<tr>
<th>トークン</th>
<th>値</th>
<th>理由</th>
</tr>
</thead>
<tbody>
<tr>
<td>本文フォント</td>
<td><code>&quot;BIZ UDPGothic&quot;, &quot;Noto Sans JP&quot;, &quot;Hiragino Kaku Gothic ProN&quot;, &quot;Yu Gothic&quot;, sans-serif</code></td>
<td>日本語を主にし、OS差のfallbackを持つ。使用可能な書体と実字幅を確認する</td>
</tr>
<tr>
<td>コードフォント</td>
<td><code>Consolas, &quot;SFMono-Regular&quot;, &quot;Noto Sans Mono&quot;, monospace</code></td>
<td>記号とインデントを見分ける。ネット経由のWebフォントを必須にしない</td>
</tr>
<tr>
<td>Lesson題名</td>
<td>44px / 1.3、700</td>
<td>目標も同居できる大きさ。最大2行、3行になったら文言を直す</td>
</tr>
<tr>
<td>ページ見出し</td>
<td>36px / 1.3、700</td>
<td>画面の目的を把握。強制<code>br</code>で不自然に分断しない</td>
</tr>
<tr>
<td>小見出し</td>
<td>28px / 1.4、700</td>
<td>内容群の違いを表す</td>
</tr>
<tr>
<td>本文</td>
<td>26px / 1.55、400</td>
<td>日本語の行間を確保。手順も同じ基準で読む</td>
</tr>
<tr>
<td>表・確認</td>
<td>24px / 1.5、400</td>
<td>複数項目の比較に必要な密度を保つ</td>
</tr>
<tr>
<td>Reference本文</td>
<td>22px / 1.55、400</td>
<td>個人閲覧向け。後方投影に使う必須文は本編へ置く</td>
</tr>
<tr>
<td>UI・補足</td>
<td>20px / 1.4、500</td>
<td>目次・ID等を読めるサイズ。説明をこのサイズへ逃がさない</td>
</tr>
<tr>
<td>コード</td>
<td>Work 26px / 1.5、Reference 22px / 1.5</td>
<td>実際に入力・照合する対象を本文より小さくしない</td>
</tr>
<tr>
<td>太さ・字間</td>
<td>通常400、強調700、和文letter-spacing 0</td>
<td>全文極太・負の字間による詰め込みを避ける</td>
</tr>
</tbody>
</table>
<p>OS依存の書体候補であり、今回フォントファイルを追加しない。強調は対象語または変更値のみ。コードの識別子には等幅を使うが、日本語説明全体を等幅にしない。</p>
<h3 id="52-幅グリッド余白">5.2 幅・グリッド・余白</h3>
<table>
<thead>
<tr>
<th>トークン</th>
<th>値</th>
<th>理由</th>
</tr>
</thead>
<tbody>
<tr>
<td>本編コンテンツ</td>
<td>左右48px、最大幅1184px</td>
<td>1280幅でコード欄を確保しつつ端を避ける</td>
</tr>
<tr>
<td>上下安全域</td>
<td>上24px、下24px以上</td>
<td>ヘッダー・操作帯との重なりを避ける</td>
</tr>
<tr>
<td>共通ヘッダー</td>
<td>48px以内</td>
<td>現在位置は必要だが本文を押し下げない</td>
</tr>
<tr>
<td>タイトル領域</td>
<td>64〜96px</td>
<td>タイトル1〜2行分を予約</td>
</tr>
<tr>
<td>基本間隔</td>
<td>4 / 8 / 12 / 16 / 24 / 32 / 48px</td>
<td>小部品内8〜12、文と例16、意味群間24〜32、ページ端48で近接を表す</td>
</tr>
<tr>
<td>2カラム</td>
<td>gap32px、Work 40:60、Observe 50:50</td>
<td>読み順を固定。コードの横幅が足りなければ1カラム</td>
</tr>
<tr>
<td>長文幅</td>
<td>1行全角30〜40字程度</td>
<td>読み戻りを減らす。左右幅を埋めるために1行を延ばさない</td>
</tr>
<tr>
<td>比較</td>
<td>同じ列幅・同じ図の縮尺</td>
<td>見た目の違いを実際の変更へ対応させる</td>
</tr>
</tbody>
</table>
<p>1行コードの周囲に高さを足して左右等高の箱にしない。コンテンツ量によって下の空間が残ることは許容するが、関連情報の間には不必要な空間を入れない。</p>
<h3 id="53-色状態">5.3 色・状態</h3>
<table>
<thead>
<tr>
<th>用途</th>
<th>文字／背景</th>
<th>意味・理由</th>
</tr>
</thead>
<tbody>
<tr>
<td>基本</td>
<td>text <code>#17212B</code> / canvas <code>#FFFFFF</code></td>
<td>長文・コードの読みやすさを優先</td>
</tr>
<tr>
<td>補足</td>
<td>muted <code>#475569</code> / <code>#FFFFFF</code></td>
<td>主情報より控えめだが薄すぎない</td>
</tr>
<tr>
<td>補助面</td>
<td><code>#17212B</code> / surface <code>#F1F5F9</code></td>
<td>コード・比較範囲を穏やかにまとめる</td>
</tr>
<tr>
<td>線</td>
<td>divider <code>#CBD5E1</code></td>
<td>意味群の境界。操作可能性はこの薄い線だけで示さない</td>
</tr>
<tr>
<td>Link・現在位置</td>
<td>primary <code>#1D4ED8</code> / light <code>#EFF6FF</code></td>
<td>操作・現在地だけに青を使う。リンク下線、現在地は左線＋「現在」</td>
</tr>
<tr>
<td>確認条件</td>
<td><code>#17212B</code> / <code>#F1F5F9</code></td>
<td>未確認を達成済みの緑にしない。「確認」と文字で示す</td>
</tr>
<tr>
<td>成功を示す必要がある時</td>
<td>success <code>#166534</code> / <code>#F0FDF4</code></td>
<td>実際に確認された結果や説明例に限定。成功の語を併記</td>
</tr>
<tr>
<td>エラー・注意</td>
<td>error <code>#B91C1C</code> / <code>#FEF2F2</code></td>
<td>修正が必要な内容に限定。原因・対処も書く</td>
</tr>
<tr>
<td>Hint</td>
<td>hint <code>#854D0E</code> / <code>#FEFCE8</code></td>
<td>任意の支援。本文の最重要点の色として流用しない</td>
</tr>
<tr>
<td>Challenge</td>
<td>challenge <code>#6B21A8</code> / <code>#FAF5FF</code></td>
<td>必須でない発展。「CHALLENGE・発展」と併記</td>
</tr>
<tr>
<td>Focus</td>
<td><code>#1D4ED8</code> 3px線、offset 3px</td>
<td>キーボード操作位置を形でも示す</td>
</tr>
</tbody>
</table>
<p>本文は原則4.5:1以上のコントラストを確保する。大きい文字にもできるだけ同じ下限を用いる。これは <a href="https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html" target="_blank" rel="noopener noreferrer">W3Cの文字コントラスト基準</a> を下限にした設計判断であり、投影機での読みやすさを保証する値ではない。構文ハイライトの全色、ホバー・フォーカス・背景の組合せは実装時にも測定する。</p>
<p>設計値の計算確認：上表の組合せでtext 16.29:1、muted 7.58:1、primary 6.16:1、success 6.81:1、error 5.91:1、hint 6.62:1、challenge 8.13:1（sRGB相対輝度式、表示は小数2桁）。これは色トークンの計算であり、未実装のDOM全体のアクセシビリティ検査ではない。</p>
<h3 id="54-境界コード画像ラベル">5.4 境界・コード・画像・ラベル</h3>
<table>
<thead>
<tr>
<th>要素</th>
<th>規則</th>
<th>理由</th>
</tr>
</thead>
<tbody>
<tr>
<td>Border</td>
<td>通常1px、意味のある現在位置・注意は3pxまで</td>
<td>線の多さではなく役割で区別</td>
</tr>
<tr>
<td>Radius</td>
<td>通常4px、まとまったコード/画像枠8px。巨大pillなし</td>
<td>データや操作を玩具風にせず、端を区切るだけに使う</td>
</tr>
<tr>
<td>Shadow</td>
<td>本文はなし。必要な浮動面のみ<code>0 4px 16px #17212B1A</code></td>
<td>階層の重なりがある時だけ奥行きを示す</td>
</tr>
<tr>
<td>Code block</td>
<td>淡い補助面、padding16〜24px、言語Python、インデント維持、行番号なし</td>
<td>読む・入力する対象を識別。長い行は字体を縮めず欄を広げる</td>
</tr>
<tr>
<td>変更箇所</td>
<td>数値だけ太字/下線または背景。変更前/変更例の文字を併記</td>
<td>色覚に依存せず、名前を書き換えないと分かる</td>
</tr>
<tr>
<td>Image</td>
<td>ゲーム画面は800:600比率保持、<code>contain</code>相当。必要な部分だけなら「拡大」と明示</td>
<td>全画面の境界・Score・プレイヤーを切らない</td>
</tr>
<tr>
<td>比較画像</td>
<td>同じ開始位置・経過時間・縮尺。模式図なら明記</td>
<td>矢印の長さを実測値と誤認させない</td>
</tr>
<tr>
<td>Icon</td>
<td>矢印=方向、チェック=確認済み、警告=注意。文字を必ず併記</td>
<td>装飾アイコンを増やさず意味を固定</td>
</tr>
<tr>
<td>Divider</td>
<td>関係の異なる群の間に1本。上下両方・内側で重ねない</td>
<td>境界を明示し、余計な箱を作らない</td>
</tr>
<tr>
<td>Labels</td>
<td>EDIT=変更、READ=読む、SYSTEM=基盤、LEARNED=既習、CHALLENGE=発展</td>
<td>Lessonコードとの一致を保つ。5色に分ける必要はない</td>
</tr>
<tr>
<td>UI操作</td>
<td>押せる文字に下線またはbutton形、クリック領域は論理40px高以上を目安</td>
<td>見出しを操作ボタンと誤認させず、タッチパッドでも選びやすくする</td>
</tr>
</tbody>
</table>
<p>ReferenceそのものにSYSTEM/LEARNEDを付けない。ラベルはコードの役割に付く。未学習項目には「Month9-1で扱う」など時点を示し、既習と断定しない。</p>
<h2 id="6-日本語コピーガイド">6. 日本語コピーガイド</h2>
<h3 id="61-共通規則">6.1 共通規則</h3>
<ul>
<li>対象と動作が分かる短文にする。見出しは探す手掛かりとなる名詞を含める。</li>
<li>説明は「〜です」、操作は「〜します」を基本にする。問いは「どう変わる？」など自然な疑問文でよい。</li>
<li>「〜してみよう」は試行の意味がある時だけ。連続した指示を全て同じ語尾にしない。</li>
<li>「さあ」「冒険」「自分だけの」「いよいよ」や感嘆符を装飾目的で使わない。短さのために助詞や操作対象を消さない。</li>
<li>日本語が主、コードラベルと固有名詞は原表記。PLAY等を機械的に訳した二重見出しを作らない。</li>
<li>ファイル名、固定ID、識別子は原文のまま。生徒には<code>month8-1.py</code>、講師Notesでは必要に応じて<code>start.py</code>と説明する。</li>
<li>「終了」はアプリを閉じる操作、「Game Over」は敵に当たったゲーム内状態と区別する。</li>
</ul>
<table>
<thead>
<tr>
<th>役割</th>
<th>書き方</th>
<th>例</th>
</tr>
</thead>
<tbody>
<tr>
<td>Lessonタイトル</td>
<td>対象＋学ぶこと。宣伝文ではなく内容名</td>
<td>ゲームの動きを調べて、設定を変える</td>
</tr>
<tr>
<td>Section見出し</td>
<td>具体的な対象＋行動</td>
<td>プレイヤーの速さを変える</td>
</tr>
<tr>
<td>指示</td>
<td>アプリ・場所・操作・必要な値</td>
<td>VS Codeで<code>[8-1-1]</code>を検索します</td>
</tr>
<tr>
<td>問い</td>
<td>何を比べるかを指定。答えを先に断定しない</td>
<td>同じ時間キーを押すと、進む距離はどう変わる？</td>
</tr>
<tr>
<td>Check</td>
<td>観察できる成功条件</td>
<td>3体の敵が前より速く落ちれば、変更できています</td>
</tr>
<tr>
<td>Hint</td>
<td>方向→対象→具体例。問題に応じて1〜3段階</td>
<td>実行中のゲームを閉じ、保存したファイルを実行したか確かめます</td>
</tr>
<tr>
<td>Challenge</td>
<td>前提・任意・選択する変更を明示</td>
<td>余裕があれば、速さを2つ組み合わせて調整します</td>
</tr>
<tr>
<td>Reference</td>
<td>語句＋短い意味＋例＋使い道</td>
<td><code>enemy_speed</code>：3体の敵が落ちる速さ。初期値は4</td>
</tr>
<tr>
<td>Button / navigation</td>
<td>押すと何が起きるか</td>
<td>ヒント2を開く／作業「敵の速さ」に戻る／保存と実行を調べる</td>
</tr>
</tbody>
</table>
<h3 id="62-現行文言からの改善例">6.2 現行文言からの改善例</h3>
<p>以下の現行文言はv0.2本文・Componentの実在箇所。改善は次の実装用で、今回は本文を書き換えない。</p>
<table>
<thead>
<tr>
<th>現行</th>
<th>問題</th>
<th>改善例</th>
</tr>
</thead>
<tbody>
<tr>
<td>自分のゲームに近づけます（1）</td>
<td>何が変われば達成か曖昧</td>
<td>速さや大きさを変え、動きの違いを確かめます</td>
</tr>
<tr>
<td>今日使うファイル（3）</td>
<td>対象名が索引に残らない</td>
<td><code>month8-1.py</code>を開く</td>
</tr>
<tr>
<td>■で停止する（4）</td>
<td>ボタンが見つかる前提</td>
<td>ゲーム画面を選び、ESCで閉じます</td>
</tr>
<tr>
<td>まず、3回遊んでみよう。（5）</td>
<td>改行で語が分断。再プレイ方法がない</td>
<td>3回遊んで動きを見る。Game OverになったらRで再開します</td>
</tr>
<tr>
<td>コードは、全部わからなくてOK（9）</td>
<td>安心させるが、作業場所の説明でない</td>
<td>EDITの設定値を探す</td>
</tr>
<tr>
<td>変数は、ゲームの数字を覚える名前（10）</td>
<td>変数を数字だけに限定し、代入を説明しない</td>
<td>変数は、値に名前を付けて使う仕組みです。ここでは<code>player_speed</code>に5を代入します</td>
</tr>
<tr>
<td>STARTのコード（11等）</td>
<td>配布ファイル名と違う</td>
<td>変更前のコード（<code>month8-1.py</code>）</td>
</tr>
<tr>
<td>HINTを見る（12）</td>
<td>どの操作で出るか曖昧</td>
<td>ヒント1を開く（操作可能にする）</td>
</tr>
<tr>
<td>自分が遊べるギリギリに調整しよう（16）</td>
<td>易しくする選択と矛盾</td>
<td>遊びやすさを選んで調整する</td>
</tr>
<tr>
<td>MISSION / BONUS（16）</td>
<td>必須・発展との関係が不明</td>
<td>自由調整／CHALLENGE・複数の値で調整</td>
</tr>
<tr>
<td>REFERENCE・10秒で確認（17）</td>
<td>利用者の速度を保証できない</td>
<td>操作と言葉を調べる</td>
</tr>
<tr>
<td>くわしく見る（17）</td>
<td>リンクだけで行き先が分からない</td>
<td>VS Codeの保存・実行を調べる</td>
</tr>
<tr>
<td>CHANGED / FOUND / NEXT（18）</td>
<td>日本語の問いと重複</td>
<td>変えた値／起きた変化／次に試すこと</td>
</tr>
</tbody>
</table>
<p>「OK」を全面禁止しないが、成功条件や具体的な説明の代わりにはしない。Notesも感情的な呼び掛けではなく、問い・予想される反応・支援を短く書く。</p>
<h2 id="7-ナビゲーションhintreference">7. ナビゲーション・Hint・Reference</h2>
<h3 id="71-本編">7.1 本編</h3>
<ul>
<li>共通ヘッダーはLesson、現在の内容名、目次、調べる、本編内ページ番号。ゲーム名の毎ページ反復と英語活動4種の常設列は不要。</li>
<li>内部の型名はOverview等、生徒に見せる名前は「今日の流れ」「設定を変える」など内容名にする。</li>
<li>本編の前後送りはSlidev標準機能を使う。目次には見出し＋固定IDで作業を並べる。コードへは行番号を使わない。</li>
<li>本編の12ページと共通Referenceを同じ進捗分母にしない。Slidev標準の全体番号が見える場合は「全資料」と区別し、生徒への案内番号に使わない。</li>
<li>安定した名前付きリンクで移動する。物理的なスライド番号をURLの恒久仕様にしない。既存の<code>month8-1</code>、<code>month8-1-reference</code>、<code>ref-*</code>は入口として維持する。</li>
</ul>
<h3 id="72-hint">7.2 Hint</h3>
<p>各Workは成功条件と「ヒントを開く」入口を常時表示する。初期状態で支援の存在を消さない。次ページ送りを何回も押す操作でHintを出さない。</p>
<ul>
<li>1：考える方向・確認手順。2：使う変数や処理。3：具体的な変更例。</li>
<li>3段階は上限であり必須数ではない。Month8は厚め、Month9は既習の参照へ移す。Month9-3の自力探索を固定穴埋めへ戻さない。</li>
<li>開閉は単純な操作。番号と開閉状態を文字でも示し、キーボードで操作できるようにする。本文は一度に1段階を表示し、全Hintを縦に積んで画面を押し出さない。</li>
<li>Hintを開いても固定ID・コード・成功条件が見えなくならない。独自状態管理・複雑なポップアップを導入しない。</li>
<li>Month8-1はコード1〜3行の右欄にHint表示用の空間を予約する。予想は読めるまま、Hintは短文2行程度。後続Lessonで余白がなければ、この配置を無理に流用しない。</li>
<li>数字を選ぶMonth8-1では、変更後の値を固定指定しない。Hintは変える数字・変数名・保存や再実行など、実際のつまずきに合わせる。例値を使う場合は「例」と明記する。</li>
</ul>
<h3 id="73-referenceの文書構造">7.3 Referenceの文書構造</h3>
<p>本編とは別の<strong>索引1＋4カテゴリ</strong>を基本とする。これは5つの論理的な資料であり、今後も各カテゴリを1枚の16:9内へ詰めるという意味ではない。</p>
<table>
<thead>
<tr>
<th>カテゴリ</th>
<th>索引に載せる語</th>
<th>詳細の扱い</th>
</tr>
</thead>
<tbody>
<tr>
<td>VS Code</td>
<td>開く、保存、実行、終了、検索、複製</td>
<td>操作名・短い手順・Windows/Mac差。複製はSHOULD/後続Lessonと区別</td>
</tr>
<tr>
<td>Python</td>
<td>変数、代入、加減算、比較、if、True/False、繰り返し</td>
<td>一語ずつ意味と短い例。Month8-1では変数・代入を上に</td>
</tr>
<tr>
<td>Game</td>
<td>座標、キー、random、Rect、colliderect、score、Game Over、フラグ</td>
<td>用語を混ぜず、関連Lessonを記載。先のLessonの知識をMUSTにしない</td>
</tr>
<tr>
<td>Debug</td>
<td>起動しない、変化しない、エラー、ファイル違い、直前の変更</td>
<td>症状→確認順→戻る。保存・再実行を最初に探せる</td>
</tr>
</tbody>
</table>
<p>索引はカテゴリ名だけのカードではなく、語句へのリンクを見せる。1項目は「見出し／意味／例／使う場面／関連Lesson・ID」。例は実コードから取り、一般化した例なら「概念例」と明記する。</p>
<p>項目例：</p>
<table>
<thead>
<tr>
<th>項目</th>
<th>記載例</th>
</tr>
</thead>
<tbody>
<tr>
<td>見出し</td>
<td><code>enemy_speed</code>：敵の速さ</td>
</tr>
<tr>
<td>意味</td>
<td>3体の敵が1回の更新で下へ動く量を決める設定です</td>
</tr>
<tr>
<td>例</td>
<td><code>enemy_speed = 4</code>（配布時の初期値）</td>
</tr>
<tr>
<td>使う場面</td>
<td>3体の落ちる速さをまとめて変える</td>
</tr>
<tr>
<td>関連</td>
<td>Month8-1 <code>[8-1-2]</code>、Month8-3の敵移動</td>
</tr>
</tbody>
</table>
<p>「Game Over」はゲーム内状態、「フラグ」は状態を記録する変数として別項目にする。Rectの四角と画像の透明部分の違いはMonth9-1の詳細側へ置き、Month8-1で詳細理解を要求しない。</p>
<h3 id="74-開く戻る">7.4 開く・戻る</h3>
<ul>
<li>どの本編ページからも「調べる」で索引へ、Workからは関連語へ直接移動できる。</li>
<li>戻り先は<strong>開いた作業の名前付きリンク</strong>。カテゴリを移動しても元の作業を失わない。最小の戻り先情報だけを引き継ぎ、独自Routerや学習履歴保存は作らない。</li>
<li>実装方式は、既存の名前付きページリンクに<code>from</code>という戻り先識別子を付ける最小方式を第一候補とする。例：<code>ref-game?from=month8-1-enemy-speed</code>。Reference内のカテゴリ移動でも同じ識別子を渡す。識別子は教材内の既知ページだけを許可し、任意のURLへ戻さない。ブラウザー履歴やグローバルストアを再実装しない。Slidevでqueryを保持できるかは実装開始時に小さく検証し、不可なら方式を再判断する。</li>
<li>直接Referenceを開いた場合は「Lesson一覧へ」。存在しない元ページを仮定してMonth8-1へ固定しない。</li>
<li>「作業に戻る」と「関連Lessonへ進む」は別リンク。前者は元の作業、後者は明示したLessonへ移る。</li>
<li>ブラウザー内検索だけを全教材検索として宣伝しない。非表示スライドまで検索できる保証はない。索引・見出しリンクを基本とし、全文検索エンジンは追加しない。</li>
<li>URLの相対配置・公開base path、再読込、Reference内移動後の戻りは実装時に確認する。</li>
</ul>
<p>固定IDと画面名は別物にする。作業ページ名案は<code>month8-1-player-speed</code>→<code>[8-1-1]</code>、<code>month8-1-enemy-speed</code>→<code>[8-1-2]</code>、<code>month8-1-size</code>→<code>[8-1-3]</code>。画面の追加・統合でもコード側の固定IDを変えない。目次は一覧表示を優先し、独自の開閉サイドバーを必須にしない。</p>
<h2 id="8-month8-1の再構成">8. Month8-1の再構成</h2>
<h3 id="81-ページ数を導く">8.1 ページ数を導く</h3>
<p>現行18ページから、(1+2)、(3+4)、(6+7)、(9+10)、(11+12)、(13+14)を各1ページへ統合する：18−6=12。
17のReferenceを本編外へ移す：11。新たに設定・ID・初期値・変化のReviewを1ページ追加：<strong>本編12ページ</strong>。</p>
<p>削除するのは重複した表紙・値の装飾的な反復・英語の重複見出し。学習内容や作業は削除しない。観察と答えの共有は分離を維持する。新Reviewは既存内容の一覧化で、新課題ではない。</p>
<p>共通Referenceは索引＋4カテゴリ、本編ページ数に含めない。共通入口も本編に含めない。全Lessonを12ページに揃える規則は設けない。</p>
<h3 id="82-各ページの仕様">8.2 各ページの仕様</h3>
<p>表AとBは同じページ番号で対応する。幅の大きすぎる10列表を避け、内容・媒体と学習行動を分ける。</p>
<p><strong>A：目的・内容・表現</strong></p>
<table>
<thead>
<tr>
<th># / 型</th>
<th>見出し・目的</th>
<th>掲載内容</th>
<th>レイアウト</th>
<th>画像</th>
<th>コード</th>
</tr>
</thead>
<tbody>
<tr>
<td>1 Overview</td>
<td>ゲームの動きを調べて、設定を変える／全体像</td>
<td>到達点3つ、開く→遊ぶ→調べる→変える→まとめる、目次</td>
<td>成果と工程の2欄</td>
<td>必須でない。入れるなら実画面の小型全景</td>
<td><code>month8-1.py</code>の名前のみ</td>
</tr>
<tr>
<td>2 Work・準備</td>
<td><code>month8-1.py</code>を開いて実行する／環境操作</td>
<td>配布フォルダ、開く・保存・実行、ゲームでESC、再実行、Reference入口</td>
<td>左手順・右フォルダと操作箇所、下に起動確認</td>
<td>配布環境のVS Code操作部分。ない時は誤解のないフォルダ木</td>
<td>Pythonコードなし。<code>month8-1/month8-1.py</code>と<code>assets/</code></td>
</tr>
<tr>
<td>3 Observe・プレイ</td>
<td>3回遊んで動きを見る／体験</td>
<td>矢印キー、Game Over後R、ESC、見る対象</td>
<td>左全景・右操作と問い</td>
<td>800×600の実画面、比率保持</td>
<td>なし</td>
</tr>
<tr>
<td>4 Observe</td>
<td>動きとルールを記録する／分析</td>
<td>プレイヤー・敵・アイテム・接触の問い、紙への短い記録</td>
<td>左画像・右4つの問い</td>
<td>同じ実画面。対象ラベルだけ</td>
<td>なし</td>
</tr>
<tr>
<td>5 Review・共有</td>
<td>見つけたルールを整理する／分類</td>
<td>対象／動き・条件／結果。操作、敵落下・再出現、取得で100点、接触でGame Over</td>
<td>4行程度の対応表</td>
<td>必要なら行見出しの小さなsprite</td>
<td>実装構文は見せない</td>
</tr>
<tr>
<td>6 Concept</td>
<td>設定の名前と数字を読む／代入と編集範囲</td>
<td>名前・値・代入、EDIT/READ/SYSTEMの短い凡例</td>
<td>コードと注釈、下に凡例</td>
<td>名前→値の注釈図。ゲーム画像不要</td>
<td><code>player_speed = 5</code></td>
</tr>
<tr>
<td>7 Work</td>
<td>プレイヤーの速さを変える／変更と比較</td>
<td><code>[8-1-1]</code>、5から任意の別値への予想、手順、同時間移動の確認、Hint</td>
<td>Work契約どおり</td>
<td>必須でない。必要なら条件を明記した小比較図</td>
<td><code>player_speed = 5</code>（変更前）</td>
</tr>
<tr>
<td>8 Work</td>
<td>敵の速さを変える／共通設定</td>
<td><code>[8-1-2]</code>、4から任意の別値へ変更、3体の落下確認、難しさの問い</td>
<td>7と同一。難しさは成功条件と分ける</td>
<td>原則なし</td>
<td><code>enemy_speed = 4</code>（変更前）</td>
</tr>
<tr>
<td>9 Work</td>
<td>大きさを1つ変える／変更対象と結果</td>
<td><code>[8-1-3]</code>、3設定から1つ、見た目と当たりやすさの観察、確認</td>
<td>手順＋3行コード、下に確認</td>
<td>比較を使うなら同じspriteに数値併記</td>
<td><code>player_size = 64</code>、<code>enemy_size = 64</code>、<code>item_size = 64</code></td>
</tr>
<tr>
<td>10 Work＋Challenge</td>
<td>遊びやすさを選んで調整する／試行</td>
<td>簡単・難しい・ちょうどいいから目標、変更→比較。複数設定と友達の試遊は発展</td>
<td>通常の手順、下に任意課題の区画</td>
<td>不要</td>
<td>変数名を参照。完成例は不要</td>
</tr>
<tr>
<td>11 Review</td>
<td>変更する場所と初期値を見返す／一覧</td>
<td>3固定ID／設定名／初期値／変わること、関連Workへのリンク</td>
<td>3〜5行の表</td>
<td>不要</td>
<td>値は5、4、サイズ3種64</td>
</tr>
<tr>
<td>12 Reflect</td>
<td>変えた値と結果を残す／振り返り・保存</td>
<td>変数名・前後の値・変化、次に試すこと、保存</td>
<td>記録例の型と短い問い、下に保存</td>
<td>不要</td>
<td>生徒自身の変数名と値。新しい例題なし</td>
</tr>
</tbody>
</table>
<p><strong>B：生徒・講師・復習の役割</strong></p>
<table>
<thead>
<tr>
<th style="text-align:right">#</th>
<th>生徒の行動</th>
<th>講師の役割</th>
<th>後から見返す役割</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:right">1</td>
<td>今日の作業と到達点を確認</td>
<td>完成ゲームを変更する回と伝える</td>
<td>Lesson内の入口・目次</td>
</tr>
<tr>
<td style="text-align:right">2</td>
<td>開く・保存・起動・終了・再実行</td>
<td>全員の対象ファイルと起動を確認</td>
<td>環境操作をやり直す手順</td>
</tr>
<tr>
<td style="text-align:right">3</td>
<td>遊び、Rで再開して変化を観察</td>
<td>操作と観察目的を案内</td>
<td>操作キーとゲームの見方</td>
</tr>
<tr>
<td style="text-align:right">4</td>
<td>複数の動き・ルールを紙に短く書く</td>
<td>見た目の感想から動き・条件へ問い返す</td>
<td>Month9-3で再利用する観察の見出し</td>
</tr>
<tr>
<td style="text-align:right">5</td>
<td>記録を共有し、対象と結果を対応付ける</td>
<td>正解先出しを避けて共有後に整理</td>
<td>ゲームを構成するルールの一覧</td>
</tr>
<tr>
<td style="text-align:right">6</td>
<td>名前と値、変更する側を指し示す</td>
<td>変数名を変えないことを確認</td>
<td>代入とラベルの短い説明</td>
</tr>
<tr>
<td style="text-align:right">7</td>
<td>ID検索、予想、変更、保存、終了・再実行、比較</td>
<td>設定値と動きが対応した所で確認</td>
<td>変更から確認までの完結した例</td>
</tr>
<tr>
<td style="text-align:right">8</td>
<td>別設定で同じ操作を使う</td>
<td>3体共通と主観的な難しさを区別</td>
<td>enemy_speedの確認手順</td>
</tr>
<tr>
<td style="text-align:right">9</td>
<td>1変数を選んで前後を比べる</td>
<td>同時変更を避け、極端な値の時は元へ戻す</td>
<td>サイズ3変数の区別</td>
</tr>
<tr>
<td style="text-align:right">10</td>
<td>目標に合わせて試し直す。余裕があれば複数設定</td>
<td>必須到達未達の支援を優先。発展を全員へ強制しない</td>
<td>自由調整の進め方</td>
</tr>
<tr>
<td style="text-align:right">11</td>
<td>初期値や対象IDを確かめる</td>
<td>変更の意味を整理し、理解の不足を見つける</td>
<td>保存しておく設定対応表</td>
</tr>
<tr>
<td style="text-align:right">12</td>
<td>変更と結果を1組説明し、保存</td>
<td>「楽しかった」だけで終わらず変化を聞く</td>
<td>自分の結果と次の作業の記録方法</td>
</tr>
</tbody>
</table>
<h3 id="83-学習量時間との整合">8.3 学習量・時間との整合</h3>
<p>docs/02のMUSTは「指定変数を変更して結果を確認」。全ての設定の変更を新たな必須判定にしない。7〜9は既存の標準進行として残し、別設定の比較は同文書のSHOULDと整合させる。10の複数値によるバランス調整のみCHALLENGE。元データと作業データの区別は既存SHOULDのままNotes/Referenceで支援する。</p>
<p>docs/06のMonth8-1表は合計65〜70分、共通欄は教材70〜75分。現行v0.2 Notesの和は74分。この差は監査事項として残し、カリキュラムを勝手に書き換えない。新構成は同表の上限側70分へ次のように対応できる。</p>
<table>
<thead>
<tr>
<th>docs/06の活動</th>
<th>v0.3ページ</th>
<th style="text-align:right">配分例</th>
</tr>
</thead>
<tbody>
<tr>
<td>今日やること</td>
<td>1</td>
<td style="text-align:right">5分</td>
</tr>
<tr>
<td>フォルダ・VS Code・保存・実行</td>
<td>2</td>
<td style="text-align:right">10分</td>
</tr>
<tr>
<td>完成ゲームを遊ぶ</td>
<td>3</td>
<td style="text-align:right">5分</td>
</tr>
<tr>
<td>ゲーム分析ワーク</td>
<td>4</td>
<td style="text-align:right">15分</td>
</tr>
<tr>
<td>全体共有</td>
<td>5</td>
<td style="text-align:right">5分</td>
</tr>
<tr>
<td>変数①変更</td>
<td>6・7</td>
<td style="text-align:right">計5分</td>
</tr>
<tr>
<td>変数②③変更</td>
<td>8・9</td>
<td style="text-align:right">計10分</td>
</tr>
<tr>
<td>自由調整</td>
<td>10</td>
<td style="text-align:right">10分</td>
</tr>
<tr>
<td>振り返り・保存</td>
<td>11・12</td>
<td style="text-align:right">計5分</td>
</tr>
</tbody>
</table>
<p>70分＋バッファ10分で80分枠。Referenceを説明する独立授業を追加せず、準備と作業中に使う。統合しても作業時間をページ枚数に比例して短縮しない。この配分は机上対応であり、実授業での所要時間は未計測。</p>
<h2 id="9-講師用notesと制作契約">9. 講師用Notesと制作契約</h2>
<h3 id="notes">Notes</h3>
<p>各ページのNotesはMarkdown箇条書きで「時間／問い／よくある間違い／確認する到達点／余裕がある時／時間不足」を分ける。ページの内容を丸ごと複写しない。</p>
<p>MUSTのない概念説明ページに無理な新MUSTを作らない。Lessonの到達点を参照し、そのページが何を支えるかを書く。講師の予習には同じLessonファイルのOverviewページのNotesへ「活動・ページ名・時間・止まって確認する所」の短い進行表を置く。これは本編の新ページではない。各ページNotesの時間と同期し、生徒用表示には出さない。独立した進行管理アプリは不要。</p>
<h3 id="実装時の契約">実装時の契約</h3>
<ul>
<li>本文の意味・順序はMarkdownに置き、巨大な共通Componentへ内容を埋め込まない。型とトークンを使い、Lesson固有の任意装飾を増やさない。</li>
<li>固定IDは正規の<code>[8-1-1]</code>〜<code>[8-1-3]</code>。生徒ファイル内で一意であることを維持。Slidevの索引・本文の両方に載ること自体は問題ない。</li>
<li>初期値は実STARTと照合。現行値は5、4、64/64/64。原画像32×32pxとゲーム内表示64×64pxを区別し、資料の見た目に合わせてコードを変えない。</li>
<li>ゲーム画像は実画面、または「模式図」と明記した説明図。実画面と名乗る画像には撮影した版・設定値を制作側で記録する。</li>
<li>生徒が選んだ変更値との比較は画面端に達する前・同じ時間のキー入力。敵のrandomや操作の差を速さ変更の結果と取り違えない。</li>
<li>保存→ゲームを終了→再実行を案内する。RはGame OverからのRestartであり、ソースファイルの再読込ではない。</li>
<li>START/COMPLETE、ゲームルール、コードコメント・穴埋めは変更しない。仕様にない課題や一般的なPython講義を追加しない。</li>
</ul>
<h2 id="10-実装後の検証条件結果は12節">10. 実装後の検証条件（結果は12節）</h2>
<ol>
<li>全本編ページを1366×768、1024px幅で確認し、タイトル・コード・成功条件が欠けない。日本語の語中に不自然な手動改行がない。</li>
<li>実際のWindowsの配布フォルダで、7〜9を教材どおり実施。対象ID・名前・値・結果が一致し、Rと再実行を混同しない。</li>
<li>ゲーム画像の全景・重要部分が残り、比較図の条件と実コードが一致する。</li>
<li>7→Reference→別カテゴリ→7へ戻る。直接Referenceを開く。再読込・戻る・公開base pathでも行き先が正しい。</li>
<li>Hintの存在・開閉・キーボード操作を確認。1つ開いても作業対象と成功条件を隠さない。</li>
<li>Notesは項目が分かれ、講師が時間・確認地点を拾える。全体進行表と各Notesの合計が一致する。</li>
<li>生徒が「初期のenemy_speed」「保存しても変わらない時の手順」を索引から探せるか観察する。秒数だけを合否にしない。</li>
<li>Cardを使う箇所に独立した選択の理由がある。色がなくても現在地・確認・発展が分かる。</li>
<li>文字コントラスト、フォントfallback、フォーカス、Referenceのスクロールを確認。build・通常表示・Presenter・配布形態を確認する。</li>
<li>後方席の投影、生徒PCの切替負担、70分の進行を実授業または模擬授業で確かめる。未検証の学習効果を完成報告に含めない。</li>
</ol>
<h2 id="11-自己レビューと改訂履歴">11. 自己レビューと改訂履歴</h2>
<p>11・12節はv0.3制作時の記録。96pxや5→10等の実測は当時の条件であり、現行の64px・任意変更の指示ではない。</p>
<h3 id="第1回d0d12026-10-08">第1回：D0→D1（2026-10-08）</h3>
<p>初稿を実際のv0.2画面、START、docs/02・06と照合し、さらに本書の寸法を積算した。未実装のv0.3を画面確認済みとは扱わない。</p>
<table>
<thead>
<tr>
<th>軸</th>
<th>初稿への批評・根拠</th>
<th>判断・改訂</th>
</tr>
</thead>
<tbody>
<tr>
<td>A 形式先行</td>
<td>8つの型は新たなテンプレートの強制になり得る。Month8-1では専用Challengeページは不要</td>
<td>型はComponent数ではないと明示し、10は通常Work内の任意区画とした。全Lessonへの12枚強制を禁止</td>
</tr>
<tr>
<td>B 日本語</td>
<td>「変数は数字を覚える名前」の置換だけでは、名称と代入の役割が残らない</td>
<td>名前・値・代入の実例を6とコピー表で一組にした。「終了」とGame Over、「初期値」と生徒の変更値も区別</td>
</tr>
<tr>
<td>C 教材UX</td>
<td>Hintを3つ全部開くと、統合したWorkから成功条件が押し出される。開く場所を仕様化していなかった</td>
<td>一度に1段階、Month8-1では右欄に2行程度の表示枠を予約。ページ送りとの分離は維持</td>
</tr>
<tr>
<td>D 寸法</td>
<td>コード10行を26pxで表示し、ヘッダー・対象・確認・Hintを積むと720pxを超える</td>
<td>Workは通常1〜6行に改訂し、高さの積算を追加。各部最大値を同時に使わない</td>
</tr>
<tr>
<td>E 学習</td>
<td>観察と答えを統合すると発見する課題を消す。MUSTを全設定変更にするとdocs/02から増える</td>
<td>4と5は分離を維持し、8・9の支援段階を明記。START実値5/4/96と固定IDを照合</td>
</tr>
</tbody>
</table>
<p>D1の残課題：Referenceの戻り先保持の具体的な最小方式、印刷時のスクロール項目、Notes冒頭の意味、色と寸法の数値確認。次回レビューで詰める。</p>
<h3 id="第2回d1d22026-10-08">第2回：D1→D2（2026-10-08）</h3>
<p>第1回の修正を前提に、もう一度5軸で全文を確認した。Nodeで高さ・色の比率・ページ数を計算し、学習内容と操作例を実STARTへ再照合した。</p>
<table>
<thead>
<tr>
<th>軸</th>
<th>再レビューの指摘・根拠</th>
<th>改訂・残る制約</th>
</tr>
</thead>
<tbody>
<tr>
<td>A 形式先行</td>
<td>8文法を決めても「空いているから画像を入れる」運用は残り得る</td>
<td>各ページの画像欄で不要な画像を明示。7・8は比較が必要でなければ画像なし。Cardを許す独立選択は発展だけで、必須画面を囲まない</td>
</tr>
<tr>
<td>B 日本語</td>
<td>「冒頭コメント」は最初のスライドNotesなのか管理用コメントなのか不明確。戻るリンクも具体的な作業名が要る</td>
<td>OverviewのNotesに進行表を置くと特定。「作業『敵の速さ』に戻る」と、関連Lessonへの移動を分けた</td>
</tr>
<tr>
<td>C 教材UX</td>
<td>Referenceをまたいでからブラウザーの戻るだけでは元の作業に着かない。戻り先の仕様が抽象的</td>
<td>既知の名前付きページを<code>from</code>で引き継ぐ最小案を追加。直接訪問時の一覧を定義。query保持は未検証として実装時の先行確認へ</td>
</tr>
<tr>
<td>D 数値・一貫性</td>
<td>D1の高さ合計に100pxの計算誤りがあった。最大8行の議論と10行の議論が混ざっていた</td>
<td>608pxの標準予算、10行では750pxになる計算へ修正。色7組は全て4.5:1超を数値確認。組版の実証は別途必要</td>
</tr>
<tr>
<td>E 学習・参照</td>
<td>Reviewが変更例を「初期値」と取り違えると復元できない。サイズ図で画像の輪郭と判定を同一視する危険もある</td>
<td>Reviewの初期値を5/4/96で固定照合、変更例と列を分ける。Rect詳細は後続Referenceとし、Month8-1に当たり判定実装を追加しない</td>
</tr>
</tbody>
</table>
<p>設計レビュー2回目で特定した文言・計算・導線の不足は改訂した。以下は設計策定時点の残課題の記録。実装後の解消状況は次節を参照する。</p>
<ol>
<li>12ページ案とHintを開いた状態の組版、Referenceの戻りとbase path：未実装のため未検証。</li>
<li>WindowsのフォントとVS Code拡張の実行UI、投影の後方席：実機確認が必要。</li>
<li>Referenceのスクロール部分とHintをPDF等で欠落なく配布する方法：未確定。画面の印刷だけで代替できると約束しない。</li>
<li>70分での進行と一人での索引利用：机上対応であり、生徒による試用が必要。docs/06の時間目安の差は今回変更しない。</li>
<li><code>game-screen.png</code>を実画面として使い続ける可否：実画面と照合し、必要なら次タスクで取り直す。今回は画像を変更しない。</li>
</ol>
<h3 id="改訂履歴">改訂履歴</h3>
<ul>
<li>D0：外部調査と全18ページ監査から、8文法・12ページ案・5論理Reference資料を作成。</li>
<li>D1：第1回レビュー。Hintの表示量・位置、Workの行数と高さを修正。観察と解説の分離、必須到達の維持を再確認。</li>
<li>D2：第2回レビュー。高さの誤計算を修正、7組の色比率を記録、Referenceの戻り先方式とNotesの配置を明確化。設計仕様として確定、実装・教室検証は未完了。</li>
</ul>
<h2 id="12-実装検証記録2026-10-08">12. 実装・検証記録（2026-10-08）</h2>
<h3 id="121-現行構成">12.1 現行構成</h3>
<ul>
<li>対象はMonth8-1だけ。本編12ページ、共通Lesson一覧1ページ、Reference索引＋4カテゴリの計18枚。本編進行は1〜12で表示し、Slidev標準ツールバーの全体枚数には「資料全体」を付ける。</li>
<li>本編はOverview / Concept / Observe / Work / Review / Challenge / Reflect、別資料はReferenceの文法。専用Componentを文法ごとに増やしていない。</li>
<li><code>LessonHeader / TryBlock / CheckBlock / HintBlock / ChallengeBlock</code>を更新。<code>Tag</code>は継続。<code>LessonLink</code>は既存Routerへのリンク、<code>GameImage</code>は公開baseを考慮した実画面表示のみ。</li>
<li><code>layouts/lesson.vue</code>は本編、<code>layouts/reference.vue</code>は固定ヘッダー＋スクロール本文。<code>navigation.ts</code>は許可する戻り先の名前一覧でありStoreではない。</li>
<li>Referenceの<code>from</code>は既知の本編aliasだけを許可する。別カテゴリへ移っても保持し、直接訪問・不正値・複数値はLesson一覧へ戻る。関連Lessonリンクと「元の作業へ戻る」は別扱い。</li>
<li>Hintは局所的な<code>ref</code>値1つで開閉。最大3段階、一度に1つ、Tab / Enter / Space対応。ページ送りに連動せず、ID・コード・確認を表示したまま使える。</li>
<li>Notesは本編全12ページに6項目。合計5＋10＋5＋15＋5＋2＋3＋5＋5＋10＋2＋3＝70分。冒頭Notesの進行表と一致する。</li>
<li><code>gameplay-v03.png</code>は変更していないSTARTの実際の800×600 Surfaceを保存。旧v0.2画像は履歴として保存し、現行本文からは参照しない。</li>
<li><code>uno.config.ts</code>はSlidev 52.14.2標準UIのアイコン読込・抽出不足を補う。既存Carbon/Phのローカル読込を明示し、clientのVueを抽出対象に含める。独自ナビ・アイコンや依存更新は導入しない。<a href="https://unocss.dev/guide/extracting#extracting-from-filesystem" target="_blank" rel="noopener noreferrer">UnoCSSの抽出仕様</a>に基づく。</li>
</ul>
<h3 id="122-実装後の自己レビュー">12.2 実装後の自己レビュー</h3>
<p>設計文書のD1・D2とは別に、実装を2回レビューし、修正後の表示・導線も再確認した。</p>
<table>
<thead>
<tr>
<th>観点</th>
<th>第1回：実画面で見つけた問題と修正</th>
<th>第2回：修正後の再点検と追加修正</th>
</tr>
</thead>
<tbody>
<tr>
<td>A 形式先行</td>
<td>旧Hero・活動ナビ・作業Cardを除去。観察は全景と問い、Workは手順とコード、Reviewは表へ</td>
<td>装飾画像・空白埋めの枠を追加していないことを確認</td>
</tr>
<tr>
<td>B 日本語</td>
<td>自由調整のリンクが連続して読めたため縦に分離。難しさの感想を成功条件から除外</td>
<td>Game Overとフラグを別項目へ。未実装Lesson名をクリック可能に見せる表記を修正</td>
</tr>
<tr>
<td>C 教材UX</td>
<td>語句ジャンプが前項目の末尾へずれる問題を修正。Work 7〜9から設定語へ直接進む導線を追加</td>
<td>キーボードHint、語句アンカー、元Workへの戻り、直接訪問・reload・Presenterを検査</td>
</tr>
<tr>
<td>D 表示</td>
<td>標準テーマの<code>h1 + p</code> opacity 0.5を解除。箇条書きの行高を仕様へ統一。長い確認文の下余白を確保</td>
<td>1366×768 / 1024×768で全本編を再撮影・枠外検査。標準UIの矢印等が0×0だったため既存アイコンのローカル読込・UnoCSS抽出対象を補完</td>
</tr>
<tr>
<td>E 学習</td>
<td>Review初期値、ID、ファイル名をSTARTと照合。Notesの進行表の末尾が表の行になるMarkdownを修正</td>
<td>MUSTを増やしていないことを再確認。保存した一時配布コピーでWork 7〜9を順に実行し、元の教材は変更しなかった</td>
</tr>
</tbody>
</table>
<h3 id="123-確認結果と限界">12.3 確認結果と限界</h3>
<ul>
<li>dev起動・通常build・<code>--base /course/</code> buildに成功。通常公開URLと非ルート公開URLで、Reference移動、カテゴリ変更、reload、元Workへの復帰と画像読込を確認。公開サーバーにはSPA fallbackが必要。</li>
<li>1366×768 / 1024×768で本編12ページを各2回撮影して視認性を確認。修正後は本文・コード・Hint・確認条件の枠外はみ出しなし。ゲーム画像は4:3、contain、読み込み800×600を確認。</li>
<li>HintのEnter / Space開閉、Tab移動、一度に1段階、URLが変わらないこと、focusの3px青線を確認。Referenceの語句ジャンプ・スクロール・直接訪問・不正fromを確認。</li>
<li>PresenterでNotes・進行表・作業への復帰を確認。試験中に残留Presenterタブ同士が同期して検査URLを動かしたため、検査専用タブを閉じて単独で再検証した。同期機構を独自実装していない。</li>
<li>文字色のコントラスト：本文/白16.29、補足/白7.58、リンク/白6.70、EDIT/淡青6.16、Hint/淡黄6.62、Challenge/淡紫8.13、コード/淡灰14.87。本文のopacityを含めて確認し、未確認のCHECKを成功色にしていない。</li>
<li>STARTの固定ID3個はそれぞれ一意。初期値5・4・各96、配布名<code>month8-1.py</code>を照合。</li>
<li>Pygame 2.6.1の実描画を用い、同じ19更新でplayerの移動量95→190、敵3体各76→152、player画像96×96→64×64を確認。教材の手順に沿って、一時配布フォルダ内の実ファイルを変更・保存し、各回ESCで閉じて再実行した。repoのSTARTは変更していない。</li>
<li>一時コピーの操作検査は約93秒（ツール待機を含む）、4回の起動〜ESCは各0.75〜1.04秒。SDL dummy・入力注入による機械模擬であり、VS Codeの実行ボタン操作、生徒の読解・記録・共有を含む70分授業の実測ではない。カリキュラムの時間は変更しない。</li>
<li>Game 1のMASTER・全Lesson・assetsは変更前後のSHA-256で一致。docs/01〜06・08・10・11も変更していない。</li>
</ul>
<p>残課題：</p>
<ol>
<li>Windowsのフォント・VS Code実行UI、実教室の投影後方席で確認する。</li>
<li>70分配分、生徒単独での索引利用を授業試用で測る。機械模擬から所要時間を推定しない。</li>
<li>スクロールReferenceと閉じたHintを欠落なくPDF配布する方式は未確定。ブラウザ版を現行とする。</li>
<li>現行Slidevの標準コードCSSに由来するminify警告2件が残る。buildは成功し、使用しているコード表示・操作・Presenterをブラウザで確認した。依存パッケージの改変や警告隠しはしていない。</li>
</ol>
`},"13_visual_language_v04":{html:`<h1 id="visual-language-v04">Visual Language v0.4</h1>
<p>策定日：2026-10-08。状態：代表6画面のみv0.4を試作。未対象ページはv0.3を維持。適用範囲と検証記録は20節。新規画像は作成していない。</p>
<p>本文のページ番号・適用範囲はv0.4時点の記録。現行の統合後12ページ、実スプライトによる対象表、コードと説明の分離は<a href="/robot-python-game/instructor/docs/14_art_direction_v05/#18-%E6%9C%AC%E7%B7%A812%E3%83%9A%E3%83%BC%E3%82%B8%E3%81%AEvisual-rules-v052">docs/14の18・19節</a>を参照する。</p>
<h2 id="1-正本と変更範囲">1. 正本と変更範囲</h2>
<p>情報設計の正本は<a href="/robot-python-game/instructor/docs/12_slidev_design_system_v03/">12_slidev_design_system_v03.md</a>、調査根拠は<a href="/robot-python-game/instructor/docs/11_design_research/">11_design_research.md</a>。本書を、その上に適用する<strong>視覚表現の最新正本</strong>とする。文字組・面・図・画像・視覚配置の競合は本書、ページの目的・構成・教材UXはdocs/12を参照する。docs/09・10は過去の設計記録として扱う。</p>
<p>維持するもの：Month8-1本編12ページと順序、8つの内容文法、日本語コピー原則、左手順／右コード／下に確認というWork構造、Hint最大3段階・同時1段階、Referenceの索引＋4カテゴリと元の作業へ戻る導線、Notesの役割。カリキュラム、学習量、MUST / SHOULD / CHALLENGE、固定ID、STARTの値は変更しない。</p>
<p>仕様策定時の成果物は仕様書と参照案内だけ。後続の代表画面試作で<code>slides/</code>の一部へ適用したが、Game 1、Lessonコード、assets、docs/11・12は変更していない。以下のpx値・ワイヤーは1280×720上の設計寸法であり、全ページの実装完了を示すものではない。</p>
<h2 id="2-v03の視覚監査">2. v0.3の視覚監査</h2>
<h3 id="21-方法と事実">2.1 方法と事実</h3>
<p>現行の入口、Month8-1本文、共通CSS、Component、layout、Reference全5資料、使用画像と取得記録を確認した。本編12ページとReferenceをローカルChromeで開き、1366×768と1024×768で撮影・DOM確認。既存の配布元<code>game1/lessons/month8-1/start.py</code>とも照合した。視線計測や児童による理解度テストは実施していない。以下の「先に目に入る」「探しにくい」は画面構成からの設計評価。</p>
<ul>
<li>実装値：題名44、ページ見出し36、小見出し28、本文26、表24、Reference22、UI20px。題名／本文=1.69、ページ見出し／本文=1.38、小見出し／本文=1.08。段落・箇条書き・コードが近い大きさのため、主役を色・太字以外で示す力が弱い。取得した本文のcomputed weightは400で、全面太字が現行の原因という意味ではない。</li>
<li>コードは淡灰色の面＋数値の太字・下線。後者は有効だが、名前・値・ゲーム結果の関係は面の外の文章を読まないと分からない。</li>
<li>実画像はp3・4の<code>gameplay-v03.png</code>。800×600の実描画、4:3・containで欠けずに表示される。画像が不正確なのではなく、指示する対象の注釈とコード変更後の比較表現が未整備。</li>
<li>コード・フォルダ木・表見出しにはSurfaceがある。手順の巨大Card、gradient、blob、英語eyebrowの乱用は現行にはない。「Cardが多すぎる」とは診断しない。</li>
<li>主な区切りはヘッダー、対象帯、確認、まとめ、Reference項目の細い横線。異なる役割でも見え方が似ている。</li>
<li>実装には名前と値の関係図、座標図、距離比較図がない。p1の工程・Debugの確認順は文字と矢印の列。フローの順序は分かるが、操作対象の違いは文章頼み。</li>
</ul>
<h3 id="22-本編12ページ">2.2 本編12ページ</h3>
<table>
<thead>
<tr>
<th>p / 型</th>
<th>現行の主役・密度</th>
<th>視覚上の評価とv0.4で補う関係</th>
</tr>
</thead>
<tbody>
<tr>
<td>1 Overview</td>
<td>題名・到達点・12リンク、中密度</td>
<td>目次の青いリンク列が強く、成果と工程が普通の文章に近い。題名の差、まとまった工程、検索用目次を分ける。画像の追加は必須でない</td>
</tr>
<tr>
<td>2 Work・準備</td>
<td>手順とフォルダ木、中</td>
<td>フォルダ木の面は有効。手順は普通の番号リストで保存・終了・再実行の接続を追う。必要なら操作フローをReference側に置く</td>
</tr>
<tr>
<td>3 Observe</td>
<td>左の実ゲーム全景、中</td>
<td>画像が主役として成立。右の操作キーは整理済み。本文サイズを上げるより、対象に近い最小ラベルが有効</td>
</tr>
<tr>
<td>4 Observe</td>
<td>同じ全景と4つの問い、中</td>
<td>問いの対象と画像内の位置が未接続。同じ画像の再利用には目的があるが、対象名の注釈で観察先を明示する。答えは載せない</td>
</tr>
<tr>
<td>5 Review・共有</td>
<td>4行の対応表、高</td>
<td>表という文法は適切。見出し以外の主従が少ない。対象列・条件列・結果列の整列を強め、Cardへ戻さない</td>
</tr>
<tr>
<td>6 Concept</td>
<td>短いコード＋説明＋ラベル凡例、中</td>
<td>最も「素のHTML」に近い。定義文が並び、名前と値の対応を読者が組み立てる。コードの真下へ名前／値を結ぶ図を置く</td>
</tr>
<tr>
<td>7 Work</td>
<td>4手順、1行コード、Hint、中</td>
<td>操作は完結しているが、淡灰色の短いコード箱が孤立。コード・変更の予想を1面にまとめ、結果を見る位置を近づける</td>
</tr>
<tr>
<td>8 Work</td>
<td>p7と同形、中</td>
<td>同形は作業の再利用に有効。敵3体共通という違いは文章で示す。派手な別レイアウトにはしない</td>
</tr>
<tr>
<td>9 Work</td>
<td>3行コード、中〜高</td>
<td>選ぶ対象と初期値96を対応付けやすい。サイズ比較を使うなら同じsprite・同じ縮尺。3対象全部の変更を促す見せ方は禁止</td>
</tr>
<tr>
<td>10 Work＋Challenge</td>
<td>目標、手順、3リンク、中</td>
<td>リンク一覧は機能的だが、選ぶ目標と作業順序の違いが弱い。通常調整と任意発展の境界を維持。3枚の装飾Cardにしない</td>
</tr>
<tr>
<td>11 Review</td>
<td>5行4列の初期値表、高</td>
<td>復習に有効。設定名・初期値を主軸に、速さ2行／サイズ3行のまとまりを罫線で示す。図は不要</td>
</tr>
<tr>
<td>12 Reflect</td>
<td>記録1行＋問い＋保存、低〜中</td>
<td>空白は静かな終端として使える。普通の表・見出し・線に見えるが、絵で埋めず記録欄と保存の優先度を明確にする</td>
</tr>
</tbody>
</table>
<h3 id="23-referenceと横断的な原因">2.3 Referenceと横断的な原因</h3>
<table>
<thead>
<tr>
<th>対象</th>
<th>現状</th>
<th>視覚設計で解くこと</th>
</tr>
</thead>
<tbody>
<tr>
<td>索引</td>
<td>カテゴリ4つの2列リンク群</td>
<td>語は直接探せるがカテゴリが似た文字面。小さな意味図を探索の手掛かりにし、リンクそのものを主役として残す</td>
</tr>
<tr>
<td>Python</td>
<td>意味・灰色コード・用途・関連が反復</td>
<td>変数の名前／値の対応を小図で結ぶ。全項目に挿絵を足さない</td>
</tr>
<tr>
<td>Game</td>
<td>座標・random・Rectまで文章＋コード</td>
<td>空間・範囲・重なりは小図が有効。速度・得点など数値の条件を明示する</td>
</tr>
<tr>
<td>VS Code</td>
<td>操作が文字列中心</td>
<td>検索や実行の場所が必要な項目にだけ操作部位図。環境にないボタンを描かない</td>
</tr>
<tr>
<td>Debug</td>
<td>症状の説明と矢印付き文字</td>
<td>確認するアプリと順序を近接。単純な順番に判断分岐の菱形を付けない</td>
</tr>
</tbody>
</table>
<p>余白不足ではなく、同じ2列・短文・細線が概念／操作／参照にも続き、関係の違いが形に出ていないことが中心課題。逆に、p3の画像・p5/11の表・p7〜9の反復は残す価値がある。装飾量を一律に増やす必要はない。</p>
<h2 id="3-中心概念editorial--technical--game">3. 中心概念：Editorial × Technical × Game</h2>
<table>
<thead>
<tr>
<th>概念</th>
<th>視覚上の仕事</th>
<th>採用条件</th>
<th>採用しない解釈</th>
</tr>
</thead>
<tbody>
<tr>
<td>Editorial</td>
<td>主役を1つ決め、題名・短い要点・詳細に大小差を付ける。意味群の間に余白を取る</td>
<td>概要は題名と工程、概念は関係、終端は記録を主役にする</td>
<td>雑誌風の飾り英字、巨大タイトルだけのHero</td>
</tr>
<tr>
<td>Technical</td>
<td>正確な識別子、固定ID、値、尺度、表、注釈線で照合可能にする</td>
<td>コードから「どの数字／何が変わる」を追える時</td>
<td>疑似IDE、ターミナル風の装飾、全体を等幅文字にすること</td>
</tr>
<tr>
<td>Game</td>
<td>実画面・sprite・変化前後から、コードの結果を見る</td>
<td>観察対象や変化の根拠がゲーム内にある時</td>
<td>ゲーム背景を全ページへ敷くこと、素材の無関係なキャラクター化</td>
</tr>
</tbody>
</table>
<p>制作時は「このページで最初に見るもの」「その次に照合するもの」「操作するもの」を1行ずつ決める。3つ全部が大見出し・色面になる設計はやり直す。主役は視覚上の焦点であり、教材の情報を削る口実にしない。</p>
<h2 id="4-typographyと文字組">4. Typographyと文字組</h2>
<h3 id="41-役割別スケール">4.1 役割別スケール</h3>
<table>
<thead>
<tr>
<th>役割</th>
<th>px / 行高 / weight</th>
<th>使用条件・v0.3との差</th>
</tr>
</thead>
<tbody>
<tr>
<td>Lesson Title</td>
<td>52 / 1.25 / 700</td>
<td>Overviewのみ。44→52。ページ見出し40と1.30倍、本文26と2倍。最大2行</td>
</tr>
<tr>
<td>Page Title</td>
<td>40 / 1.30 / 700</td>
<td>本編の目的。36→40。通常1行、必要時2行の高さを先に予約</td>
</tr>
<tr>
<td>Key Message</td>
<td>32 / 1.40 / 700</td>
<td>Concept等で関係を要約する1文のみ。新設。タイトルの言い換えは置かない。Workでは通常使わない</td>
</tr>
<tr>
<td>Section Heading</td>
<td>28 / 1.40 / 700</td>
<td>意味群の見出し。サイズ維持、上24〜32／下12〜16の間隔で本文と分離</td>
</tr>
<tr>
<td>Body</td>
<td>26 / 1.55 / 400</td>
<td>手順・問い・説明。サイズ維持。Conceptで主説明を担う短文だけ28可</td>
</tr>
<tr>
<td>Table / Check</td>
<td>24 / 1.50 / 400</td>
<td>表・成功条件。列見出しと初期値のみ700。密度を守る</td>
</tr>
<tr>
<td>Code</td>
<td>Work 28 / 1.50 / 400、Reference 24 / 1.50 / 400</td>
<td>26→28、22→24。照合対象を正文より弱くしない。表内コードは24</td>
</tr>
<tr>
<td>Caption</td>
<td>20 / 1.40 / 400</td>
<td>撮影版・「拡大」「模式図」等の補足。比較を解釈する時間・開始位置・尺度は本文／図ラベルのサイズにする</td>
</tr>
<tr>
<td>UI</td>
<td>20 / 1.40 / 400、現在地700</td>
<td>目次・戻る・Hint・検索案内。サイズ維持。押せることは下線／buttonとfocusで示す</td>
</tr>
<tr>
<td>Label</td>
<td>20 / 1.40 / 700</td>
<td>コード5ラベル。日本語の意味を必要な場所で併記。巨大pillにしない</td>
</tr>
<tr>
<td>Reference見出し／本文</td>
<td>ページ32 / 1.30 / 700、項目28 / 1.40 / 700、本文22 / 1.55 / 400</td>
<td>文書としての密度を維持。項目26→28。本文を20へ縮めない</td>
</tr>
</tbody>
</table>
<p>本文に太字を多用すると28px見出しとの差が再び消える。全文太字は禁止し、変数名・変更値・表の照合キーに限定する。通常本文は400を明示し、テーマの継承値による意図しない太字・opacity低下を確認する。</p>
<h3 id="42-サイズ以外の階層">4.2 サイズ以外の階層</h3>
<ul>
<li>日本語<code>letter-spacing: 0</code>。タイトルの負の字間、英字のような広い字間、均等割付を使わない。左揃え、語中の手動改行なし。</li>
<li>題名と対象帯は16px、説明と例は12〜16px、意味群間は24〜32px。図のラベルは対象から8〜12px。遠い凡例を読んで戻る動きを減らす。</li>
<li>段落は全角30〜40字程度を基本とし、Workの狭い手順欄は18〜22字程度でもよい。全幅の長文・両端揃えで埋めない。</li>
<li>大きい題名だけで全情報を押し下げない。52pxはOverview限定、Key Messageは必要なページに1つまで。Referenceの用語を52pxにしない。</li>
<li>1024px幅の全画面表示では0.8倍。本文26→20.8px、表24→19.2px、Reference22→17.6px。これは表示寸法の計算で、投影後方席での可読性保証ではない。</li>
</ul>
<h3 id="43-フォント比較と採否">4.3 フォント比較と採否</h3>
<p>調査日：2026-10-08。配布条件は一次資料、読みやすさの採否は本教材の設計判断。フォント名がCSSにあっても各端末に実在するとは限らない。</p>
<table>
<thead>
<tr>
<th>候補</th>
<th>日本語・Web・OS条件</th>
<th>判断</th>
</tr>
</thead>
<tbody>
<tr>
<td>BIZ UDPGothic</td>
<td>教育・文書向けのUD設計。Windowsの日本語補助フォントとして提供され、未導入端末もある。Regular/Boldを使える</td>
<td>本文・題名の第一候補を維持。UDという名称だけで学習効果を保証しない</td>
</tr>
<tr>
<td>Noto Sans JP</td>
<td>日本語向け。配布物／Web用データが公開されるが、OSへの標準導入は仮定しない</td>
<td>導入済みならfallbackとして利用。全端末の同一書体化を理由に今回はWeb取得・同梱を必須化しない</td>
</tr>
<tr>
<td>Hiragino Kaku Gothic ProN / Hiragino Sans</td>
<td>macOSの候補。Appleの一覧は導入済み・ダウンロード可能・互換用を区別する</td>
<td>Mac側のfallback。Windowsにあるとは仮定しない</td>
</tr>
<tr>
<td>Yu Gothic</td>
<td>Windows 8.1以降の製品供給情報、Regular/Medium/Bold等がある</td>
<td>Windows側fallback。Lightは指定しない。実機の画線・字幅を確認</td>
</tr>
<tr>
<td>OS任せのsans-serif</td>
<td>追加データ不要だが実際の日本語書体が環境依存</td>
<td>最終fallbackのみ。タイトルに別の英字ブランド書体を混ぜない</td>
</tr>
<tr>
<td>Consolas / SFMono-Regular / Menlo / Noto Sans Mono</td>
<td>コードの記号・桁を揃える候補。OS・導入状態で違う</td>
<td>コードだけ別系統。<code>0/O/1/l/_/=/()</code>を照合して確認する</td>
</tr>
</tbody>
</table>
<p>本文と題名は同じfamilyで、太さと寸法を変える。第一案のstackは現行を維持：<code>&quot;BIZ UDPGothic&quot;, &quot;Noto Sans JP&quot;, &quot;Hiragino Kaku Gothic ProN&quot;, &quot;Yu Gothic&quot;, sans-serif</code>。コードは現行にMac用Menloを追加した<code>Consolas, &quot;SFMono-Regular&quot;, Menlo, &quot;Noto Sans Mono&quot;, monospace</code>を仕様とする。日本語コメントは本文familyへfallback。合字は無効とし、記号を別の形へ結合しない。</p>
<p>根拠：<a href="https://learn.microsoft.com/en-us/typography/font-list/biz-udgothic" target="_blank" rel="noopener noreferrer">Microsoft BIZ UDGothic</a>、<a href="https://github.com/googlefonts/morisawa-biz-ud-gothic" target="_blank" rel="noopener noreferrer">Morisawa BIZ UD公開元</a>、<a href="https://github.com/notofonts/noto-cjk" target="_blank" rel="noopener noreferrer">Noto CJK公開元</a>、<a href="https://learn.microsoft.com/en-us/typography/font-list/yu-gothic" target="_blank" rel="noopener noreferrer">Microsoft Yu Gothic</a>、<a href="https://support.apple.com/ja-jp/120414" target="_blank" rel="noopener noreferrer">Apple macOS Sequoiaフォント一覧</a>。OS内蔵のフォントファイルを教材へコピーする許可を意味しない。追加配布が必要になった時はライセンスと容量を別途判断する。</p>
<h2 id="5-surface--card--dividerの文法">5. Surface / Card / Dividerの文法</h2>
<table>
<thead>
<tr>
<th>手段</th>
<th>使う条件</th>
<th>使わない条件</th>
<th>表現</th>
</tr>
</thead>
<tbody>
<tr>
<td>余白</td>
<td>近い情報の組、別の意味群を距離で分けられる</td>
<td>同じ高さへ揃えるためだけの空間</td>
<td>群内8〜16、群間24〜32px。最初に検討</td>
</tr>
<tr>
<td>Surface</td>
<td>コードと注釈、比較と条件など「一緒に読む範囲」を示す。Referenceの1項目内の実例にも使う</td>
<td>題名、単独の1文、全ての項目、余白埋め</td>
<td>淡灰面、padding16〜24px。面内は原則さらに面で囲わない</td>
</tr>
<tr>
<td>Card</td>
<td>独立して選べる行き先・Challengeで、見出しだけでは選択を判断できない</td>
<td>順番に行う手順、対応表、概念図、コード</td>
<td>1px境界、4〜8px角丸、影なし。短い選択名なら普通のリンクで十分</td>
</tr>
<tr>
<td>Divider</td>
<td>作業と確認、通常と発展、別の参照項目、比較の前後など意味の境界</td>
<td>全段落、図の各ラベル、同じ境界への上下二重線</td>
<td>中立1px。図の軸・対象輪郭とは色と太さを分ける</td>
</tr>
<tr>
<td>Border</td>
<td>操作部品の輪郭、ゲーム画面の外形、選択状態を識別</td>
<td>Surfaceの内側・外側をさらに囲う</td>
<td>補助境界1px。操作・図で境界自体が必要なら濃色2px、focus3px</td>
</tr>
</tbody>
</table>
<p>Surfaceは選択肢でなく「読む範囲」、Cardは「独立した選択」。CSSの角丸の有無で区別しない。Workでは左手順を囲わず、右のコード＋予想のまとまりに1つのSurfaceを使える。Hintは入口と本文をその近くに置くが、さらに大きい外枠を重ねない。</p>
<p>Referenceは全項目を等高のSurfaceにしない。項目見出しと余白・Dividerで区切り、意味図＋コードの組だけに面を敷く。表は見出し行の薄い面と行罫線で十分で、外側のCardは不要。</p>
<h2 id="6-8型のvisual-grammar">6. 8型のVisual Grammar</h2>
<p>以下は部品数の指示ではない。画像・図・面を毎回全部使わず、表中の使用条件が成立するものだけを選ぶ。</p>
<table>
<thead>
<tr>
<th>型</th>
<th>主役・文字階層</th>
<th>画像／図／コード</th>
<th>Surface・Divider・アクセント</th>
<th>余白・密度・禁止</th>
</tr>
</thead>
<tbody>
<tr>
<td>Overview</td>
<td>Lesson Title52と工程。到達点26、目次24</td>
<td>小〜中の全景は任意。工程は意味のある順序。コードはファイル名のみ</td>
<td>工程は線と番号、Cardなし。リンクの青のみ。Surfaceは不要</td>
<td>題名後24、群間32。中密度。題名＋副題＋3CardのHero禁止</td>
</tr>
<tr>
<td>Concept</td>
<td>関係図が主役。Page40、Key Message32を必要時1つ、補助文26</td>
<td>名前／値の関係図1つと短い実コード28。ゲーム背景不要</td>
<td>図とコードを同じ中立面へ。対象値に下線。線は対応を結ぶ</td>
<td>図周囲24〜32、ラベル8〜12。低〜中。文章の箱を矢印でつなぐだけの図は禁止</td>
</tr>
<tr>
<td>Observe</td>
<td>実ゲーム全景。Page40、問い26</td>
<td>4:3画像＋対象名の注釈。コードなし。答え・軌跡を先に描かない</td>
<td>白い注釈下地のみ可。問いは面なし。対象注釈は濃色、リンク青</td>
<td>画像と問いgap32、問い間24。中。cover、画像上の長文、4つの問いCardは禁止</td>
</tr>
<tr>
<td>Work</td>
<td>操作＋対象コード。Page40、手順26、コード28、確認24</td>
<td>1〜6行を基本に実コード。操作位置／比較の小図は必要時のみ</td>
<td>コード＋説明1面。確認前1線、Hint茶、未確認は中立。手順Cardなし</td>
<td>左約40／右約60、上揃え、gap32。中。空の巨大箱、結果の先出し、Hintで確認を隠すことは禁止</td>
</tr>
<tr>
<td>Review</td>
<td>共通軸の表・対応図。Page40、表24、照合キー700</td>
<td>3〜5行。画像は比較の軸で必要な場合のみ。コードは識別子・値</td>
<td>表見出しの面、意味群の境界1線、外Surfaceなし。リンク青</td>
<td>題名後24、セル上下12〜16。高密度。新課題、表セルのCard化は禁止</td>
</tr>
<tr>
<td>Reference</td>
<td>索引→用語→例。ページ32、用語28、本文22、コード24</td>
<td>1項目につき小図最大1。図だけで説明しない。画像は操作部位／sprite等</td>
<td>見出しと線で項目を区切る。例＋図のみ中立面。リンク青</td>
<td>固定ナビと縦スクロール。項目間32。高密度。全図解化、巨大見出し、巨大Heroは禁止</td>
</tr>
<tr>
<td>Challenge</td>
<td>選択と確かめ方。Page40または区画見出し28、本文26</td>
<td>結果の違いに必要なら比較。完成コード全文なし</td>
<td>通常課題とDivider、紫＋「CHALLENGE・発展」。独立選択のみCard可</td>
<td>選択肢間24、通常との間32。中。通常自由調整全体を発展扱いしない</td>
</tr>
<tr>
<td>Reflect</td>
<td>記録する対応。Page40、問い26、記録24</td>
<td>1組の変更・結果。画像は原則不要。変数名は実際に選んだもの</td>
<td>記録表の最低限の罫線。保存は短文。青はReviewリンクだけ</td>
<td>記録と次の問い32、下余白を残す。低〜中。新しい説明、表彰風画面、飾り絵は禁止</td>
</tr>
</tbody>
</table>
<h2 id="7-図解vocabulary">7. 図解Vocabulary</h2>
<h3 id="71-共通の図法">7.1 共通の図法</h3>
<p>線は濃い中立色<code>#475569</code>、必要な輪郭は2px、ラベルは本編24／Reference22px。図の表題を飾り英字で増やさない。図に必要な文字はHTML等の読み上げ可能な本文でも示す。画像中の焼き込み文字だけにしない。</p>
<p>矢印は「方向」「順序」「状態の遷移」の時だけ先端を付ける。静的な対応には引出線・括弧を使う。番号は手順順序または図と説明の照合に限る。図の番号をコード固定IDと取り違えない。図法ごとの意味は次表で固定する。</p>
<table>
<thead>
<tr>
<th>図</th>
<th>使用時／表すもの／不使用時</th>
<th>色・矢印・ラベル・数値</th>
</tr>
</thead>
<tbody>
<tr>
<td>A Relationship</td>
<td>p6・変数Reference。<code>player_speed = 5</code>の名前・値・代入の対応。文章1語の飾りには使わない</td>
<td>名前と値へ濃色の括弧／引出線。値だけ太字下線。「名前」「値」を直下に置く。代入の方向を描くなら<strong>右の5から左の名前へ</strong>。<code>名前→値</code>を代入動作と呼ばない。5は実初期値</td>
</tr>
<tr>
<td>B Coordinate</td>
<td>Month8-2以降・座標Reference。画面位置と増える方向。Month8-1へ新しい座標課題を追加しない</td>
<td>左上(0,0)、xは右、yは下へ矢印。濃色の軸とsprite位置、文字ラベル。端の座標・sprite左上を混同しない。例の位置は「例」と表記</td>
</tr>
<tr>
<td>C Flow</td>
<td>保存・終了・再実行等、実行順序。単なる分類には使わない</td>
<td>中立線、1〜5の番号、アプリ名を併記。「変更→保存→ゲームをESCで閉じる→再実行→確認」。順序矢印の長さは時間でない。Rでソース再読込する図は禁止</td>
</tr>
<tr>
<td>D Before / After</td>
<td>変更と結果の比較。条件が揃わない実画面は不使用</td>
<td>「変更前／変更後」「設定値」「条件」「距離」を文字で。開始を破線、終了を実線、移動を実寸比の矢印。詳細は8節。色だけで2群を区別しない</td>
</tr>
<tr>
<td>E Game Annotation</td>
<td>p3/4等の観察対象を指す時。答えを先に説明するために使わない</td>
<td>実画像の色を保持し、ラベルと引出線は濃色＋白下地。3対象程度まで、交差しない線、矢印先端なし。player／enemy／itemは日本語名を主とする。数値は実表示だけ</td>
</tr>
<tr>
<td>F State</td>
<td>Month10以降の状態理解。Month8-1やGame 1にbool詳細の新課題を作らない</td>
<td>例<code>False（プレイ中）→True（Game Over）→False（再開後）</code>。矢印には「敵に接触」「Rで再開」等の条件。色は補助、真偽を成功／失敗色に固定しない。将来の対象コードと条件を照合</td>
</tr>
<tr>
<td>G Collision</td>
<td>Month9以降・Rect Reference。spriteと判定領域・重なり。見た目の輪郭だけを判定としない</td>
<td>sprite＋濃色2pxのRect、必要なら重なり領域を薄いハッチで示す。動きがない時は矢印なし。「透明部分も含む四角」。原素材は32×32、現行表示とRectは64×64。端だけ接する状態を重なりとして描かない</td>
</tr>
<tr>
<td>H Random Range</td>
<td>Month8-3以降・random Reference。両端を含む整数の範囲と1回の選択。順番・次回予測を表さない</td>
<td>水平線と端目盛、選ばれた1点を濃色で囲み「例：438」。選択点への短い引出線。現行800−64=736なので0〜736。0〜700を実値として使わない。値を変更した例は条件を併記</td>
</tr>
</tbody>
</table>
<p>図は関係を正確にするために使う。全ての図法をMonth8-1へ入れない。F/G/Hの先行実装や課題追加は本書の範囲外。</p>
<p>Collision図の端の扱いは<a href="https://www.pygame.org/docs/ref/rect.html#pygame.Rect.colliderect" target="_blank" rel="noopener noreferrer">Pygame公式Rect仕様</a>に従う。これは図を正確にする制約であり、端のピクセル規則をMonth9の追加課題にする意味ではない。</p>
<h2 id="8-game-imageとbefore--after">8. Game ImageとBefore / After</h2>
<h3 id="81-画像の使い分け">8.1 画像の使い分け</h3>
<table>
<thead>
<tr>
<th>画像</th>
<th>使う場面</th>
<th>必須条件</th>
</tr>
</thead>
<tbody>
<tr>
<td>全景</td>
<td>ゲーム操作・複数対象・境界を観察</td>
<td>800:600を保持、contain。Score・下端を切らない。目的の分かる問いを近接</td>
</tr>
<tr>
<td>部分拡大</td>
<td>全景では読めない操作箇所・得点・対象</td>
<td>「拡大」と元の対象名。全景と誤認させない。切り抜いた領域の比率を維持</td>
</tr>
<tr>
<td>Before / After</td>
<td>値と結果を対応付ける</td>
<td>同じ縮尺、同じ条件。数値・説明を添える。静止画1枚を速度の証拠としない</td>
</tr>
<tr>
<td>Sprite単体</td>
<td>対象同定、サイズ、Rect</td>
<td>現行assetから。透明余白を消してsizeと見かけを一致させない。対象名を併記</td>
</tr>
<tr>
<td>注釈付き全景</td>
<td>問いと観察先を結ぶ</td>
<td>ラベルを対象付近へ、重要部分を覆わない。観察前に正解・動く方向を描かない</td>
</tr>
</tbody>
</table>
<p>既存<code>gameplay-v03.png</code>はp3・4の全景に再利用可能。撮影条件は<code>slides/public/game1/README.md</code>にあり、速度比較用ではない。v0.2の旧画像を実画面の代わりとして復活させない。画像枚数のノルマは作らず、「どの理解に使うか」が説明できなければ入れない。同じ画面を再利用する時は、操作を見る／対象を記録する等の役割の違いを明確にする。</p>
<p>将来の新しい取得物には、対象ファイル・版、設定値、開始条件、入力、取得時点、実画面か模式図かを制作側で記録する。今回は画像取得・追加・加工を行わない。</p>
<h3 id="82-比較条件と数値">8.2 比較条件と数値</h3>
<p><code>player_speed</code>は1秒あたりの速さではなく、1回の更新で座標へ加算する値。約60FPSという制御値を、どの端末でも正確に60更新／秒という測定結果に置き換えない。</p>
<table>
<thead>
<tr>
<th>要素</th>
<th>規則</th>
</tr>
</thead>
<tbody>
<tr>
<td>値</td>
<td>配布時の5と変更例10を「変更前／変更後」で表示。初期値と任意の例を区別</td>
</tr>
<tr>
<td>開始位置</td>
<td>同じsprite左上・同じyから。画面端、衝突、敵再出現、item取得を比較区間に入れない</td>
</tr>
<tr>
<td>経過時間</td>
<td>実測比較は同じ時間区間と同じ入力で取得し、実際の経過時間・更新数を記録。図では固定更新数と仮定を明示</td>
</tr>
<tr>
<td>距離</td>
<td>開始から終了までの座標差を表示。違う場所に現れた敵のx差を速度差と呼ばない</td>
</tr>
<tr>
<td>縮尺</td>
<td>同じpx→図上の長さ。短い方だけ拡大しない。共通目盛・単位を付ける</td>
</tr>
<tr>
<td>矢印</td>
<td>始点から終点への移動を表す。2倍の距離なら図の長さも2倍。値5→10の編集矢印とは別にラベルを付ける</td>
</tr>
<tr>
<td>説明</td>
<td>「この条件では移動距離が変わる」。難易度・面白さまで数値比で断定しない</td>
</tr>
</tbody>
</table>
<p>設計用の模式例：右キーで20更新、開始x=100・y=300、他の影響なし。5なら100px進んでx=200、10なら200px進んでx=300。同じ20更新を60更新／秒と仮定すれば約0.33秒。<strong>実測時間ではない</strong>と示す。この仮定を児童に計算させる課題にはしない。実画面として提示する場合は、この条件を満たす取得記録が必要。</p>
<pre><code class="language-text">模式図：同じ開始位置・右へ20更新（60更新/秒なら約0.33秒）
変更前 player_speed = 5   開始 ├─────→ 100px
変更後 player_speed = 10  開始 ├──────────→ 200px
                         同じ縮尺。端・衝突の影響なし
</code></pre>
<p>これは概念図の記法例。ASCIIの文字幅を測定図の代わりに使わず、実装時は共通尺度で作図する。共通の時間・開始位置・尺度は本編24px／Reference22px以上で図に近接させ、20pxの補足やNotesだけへ追い出さない。厳密な比較条件を十分に表示できない小欄には、距離比付き比較を置かない。</p>
<h3 id="83-後続への転用と見せる時点">8.3 後続への転用と見せる時点</h3>
<ul>
<li>敵速度：初期値4と生徒が選んだ値を、同じyから同じ更新数、再出現前の下向き距離で比較。3体共通設定であることを保つ。randomのxは比較しない。</li>
<li>サイズ：同じspriteと透明余白、初期値64と選んだ値の辺長を併記。辺長比と面積比を混同しない。比較画像を同じ枠いっぱいに拡大して差を消さない。</li>
<li>score：同じ初期score、取得1回、0→100等。距離の矢印ではなく「取得1回」のイベント矢印。常時加算に見える流れにしない。</li>
<li>p4は観察前なので結果図なし。p7では変更前コードと予想を残し、答え付きの距離比較を常時横へ出さない。比較図の詳細は既存のGame Referenceの速度項目など、確認時に見る場所へ置く。新ページ・新しい必須課題は作らない。</li>
</ul>
<h2 id="9-code-treatment">9. Code treatment</h2>
<table>
<thead>
<tr>
<th>要素</th>
<th>仕様</th>
</tr>
</thead>
<tbody>
<tr>
<td>背景</td>
<td>中立Surface。コード＋近接注釈を1組にし、コードだけが灰色の孤島にならない。外側に面がある時はpre背景を透明にする</td>
</tr>
<tr>
<td>構文</td>
<td>Pythonの区別を保ち、識別子・数値・演算子を読み取れる濃色。単純な代入1行は多色化不要。色なしでも読める</td>
</tr>
<tr>
<td>名前</td>
<td><code>player_speed</code>等を原綴り・等幅で。下に「名前」を対応付ける場合は引出線。英語の意味を新しく暗記させない</td>
</tr>
<tr>
<td>値</td>
<td>変更する数字だけ700＋下線。「変更前」「変更例」を文字で。色面だけでは識別しない</td>
</tr>
<tr>
<td>ID</td>
<td>コード本文から離れない対象帯に<code>Ctrl + F → [8-1-1]</code>。生徒の実ファイルでは一意。スライドの索引・本文への併記は可</td>
</tr>
<tr>
<td>コメント</td>
<td>意味を伝える日本語はコード横／下で短く。STARTの抜粋にない講義文を実コードの一部として混ぜない</td>
</tr>
<tr>
<td>比較</td>
<td>変更前／変更後を上下または左右で対応。変数名の位置・書体は固定、数字だけ差を示す。赤い削除diffは不要</td>
</tr>
<tr>
<td>折返し</td>
<td>原則実際の行を保ち、識別子途中の折返しは禁止。必要なら欄幅を広げる。コードを省略して条件を欠かしたり、文字を縮小したりしない</td>
</tr>
</tbody>
</table>
<p>Workは「入力箇所」を読む場なので28px、対象ID、変更値、確認を近接。Referenceは「意味」を読む場なので24pxで例と小図を組にする。インデントと識別子は両方で同じ。Referenceの例が一般化したものなら「概念例」と明記し、STARTの抜粋に見せない。</p>
<p>28px／24pxはコードブロックの値。手順・Hint・関連リンク中のinline codeは、その文章のサイズを継承する。Hint内のコードだけを28pxにして行高・折返しを増やさない。</p>
<p>現行の照合値：<code>player_speed = 5</code>、<code>enemy_speed = 4</code>、<code>player_size = 64</code>、<code>enemy_size = 64</code>、<code>item_size = 64</code>。原素材32×32pxをPygameで64×64pxへscaleし、Slidesの対象アイコンは32pxで使う。生徒のファイル名は<code>month8-1.py</code>。RはGame Over後の再開、コード変更の反映は保存・ESC・再実行。</p>
<h2 id="10-referenceの視覚設計">10. Referenceの視覚設計</h2>
<p>索引を入口、用語見出しを着地点、意味→例＋小図→用途→関連を読書順にする。固定ヘッダーのカテゴリ・元の作業へ戻る経路は維持。単語のカード集へ変更しない。図がない項目も同じ見出し構造で探せること。</p>
<table>
<thead>
<tr>
<th>カテゴリ</th>
<th>小図を使う項目</th>
<th>図を使わない例</th>
</tr>
</thead>
<tbody>
<tr>
<td>Python</td>
<td>変数・代入の名前／値、必要なら比較の対応</td>
<td>足し算の1行がそのまま読める時。全構文への挿絵は不要</td>
</tr>
<tr>
<td>Game</td>
<td>座標、random範囲、Rect、条件を揃えた速度比較</td>
<td>Game Overの語義だけを確認する項目に状態図を追加しない</td>
</tr>
<tr>
<td>Debug</td>
<td>保存・終了・再実行の確認順をアプリと対応</td>
<td>スペル確認に虫・工具などの装飾アイコンを置かない</td>
</tr>
<tr>
<td>VS Code</td>
<td>固定IDの検索欄、実行する部位の位置関係</td>
<td>保存ショートカットだけで伝わる項目にPC全景は不要</td>
</tr>
</tbody>
</table>
<p>1項目につき小図は最大1つ。例のコードと図を同じSurfaceへ置いても、意味・用途・関連は文字で残す。小図は通常横320〜560px・高さ80〜180px、本文22px以上。比率やラベルが収まらなければ上下配置にし、詳細本文のスクロールを使う。画像を小さくしすぎて文字を読めなくしない。</p>
<p>関連Lessonの時期を維持し、未来の内容を既習に見せない。図の追加が新課題・独立した講義になる場合は追加しない。検索エンジン・独自Router・サイドバーアプリは導入しない。</p>
<h2 id="11-iconography">11. Iconography</h2>
<p>教材本文で使う場合は、既存依存のCarbon系を第一候補に、次の意味へ限定する。標準Slidev UIの既存Ph等を置換する必要はない。候補の実際のアイコン名・同梱可否は実装時に既存パッケージで確認し、新しい重いライブラリを入れない。</p>
<table>
<thead>
<tr>
<th>語彙</th>
<th>意味・隣接する文字</th>
<th>禁止</th>
</tr>
</thead>
<tbody>
<tr>
<td>Direction</td>
<td>移動方向／次の工程＋対象名</td>
<td>飾り矢印、静的対応を動きに見せる</td>
</tr>
<tr>
<td>Search</td>
<td>「固定IDを検索」</td>
<td>虫眼鏡だけの操作</td>
</tr>
<tr>
<td>Code</td>
<td>「変更前のコード」など対象領域</td>
<td>全段落へのコード記号</td>
</tr>
<tr>
<td>Save</td>
<td>「保存」</td>
<td>保存状態を実際に検知しているような表示</td>
</tr>
<tr>
<td>Run</td>
<td>「Pythonファイルを実行」</td>
<td>再生アイコンだけで保存・終了も含める</td>
</tr>
<tr>
<td>Check</td>
<td>確認済みの例に「確認済み」</td>
<td>未確認のCHECKへ✓を自動表示</td>
</tr>
<tr>
<td>Warning</td>
<td>具体的な注意＋対処</td>
<td>単に目立たせたい文章への警告</td>
</tr>
<tr>
<td>Reference</td>
<td>「操作と言葉を調べる」</td>
<td>全用語への本アイコンの反復</td>
</tr>
<tr>
<td>Challenge</td>
<td>「CHALLENGE・発展」</td>
<td>必須操作へのゲーム的な報酬マーク</td>
</tr>
</tbody>
</table>
<p>大きさ20〜24px、同じ線画系、本文より目立たせない。文字が十分な箇所はアイコンなし。装飾的な絵文字は使わない。アイコンは文字を代替せず、読み上げでは隣接文字との二重読みにしない。</p>
<h2 id="12-month8-1の視覚リズム">12. Month8-1の視覚リズム</h2>
<table>
<thead>
<tr>
<th>p</th>
<th>維持する内容</th>
<th>v0.4の主役とリズム</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>今日の流れ</td>
<td>強い題名＋工程、目次は探す領域</td>
</tr>
<tr>
<td>2</td>
<td>開いて実行する</td>
<td>安定した手順＋フォルダ木。開始作業</td>
</tr>
<tr>
<td>3</td>
<td>3回遊ぶ</td>
<td>実ゲーム全景。画像の大きなページ</td>
</tr>
<tr>
<td>4</td>
<td>動きとルールを記録</td>
<td>全景＋対象注釈。p3と同じゲームを別の問いで見る</td>
</tr>
<tr>
<td>5</td>
<td>見つけたルールの整理</td>
<td>高密度の対応表。画像から関係の一覧へ</td>
</tr>
<tr>
<td>6</td>
<td>名前と数字</td>
<td>関係図＋コード。最も単純な概念の焦点</td>
</tr>
<tr>
<td>7</td>
<td>プレイヤーの速さ</td>
<td>Work反復の基準。コードと手順</td>
</tr>
<tr>
<td>8</td>
<td>敵の速さ</td>
<td>同じWork。配置の学習を再利用</td>
</tr>
<tr>
<td>9</td>
<td>大きさ</td>
<td>同じWork、対象3行。見た目を変えるために別レイアウトにしない</td>
</tr>
<tr>
<td>10</td>
<td>自由調整</td>
<td>通常の手順＋任意発展区画。選択でリズムを変える</td>
</tr>
<tr>
<td>11</td>
<td>初期値の一覧</td>
<td>高密度の表。短時間で検索・復元</td>
</tr>
<tr>
<td>12</td>
<td>振り返りと保存</td>
<td>静かな記録欄と保存。新たな強調を増やさない</td>
</tr>
</tbody>
</table>
<p>強い／静かなページは色面の面積ではなく、焦点・画像・表の違いで作る。全ページを異なるlayoutにせず、Workの反復は意図的に維持する。</p>
<h2 id="13-代表4ページの詳細ワイヤー">13. 代表4ページの詳細ワイヤー</h2>
<p>共通：1280×720、左右48pxで内容幅1184px。ヘッダー<code>x48 y24 w1184 h40</code>、本文開始y88、下端安全域y688。寸法は論理px。図の外枠は配置領域を示し、全てをBorderで描く指示ではない。ASCII内の短縮文は配置説明であり、既存の正式なコピーを省略する指示ではない。操作は既存リンク／Hint／Slidev標準送りのみ。</p>
<h3 id="a-p1-overview">A. p1 Overview</h3>
<p>主役は題名と全体工程。題名52/65、到達点26/40.3、目次24/36。成果と目次の2欄を維持し、ゲーム画像はこのページでは省く。</p>
<pre><code class="language-text">y24   Month8-1 今日の流れ                 目次 調べる 1/12
y88   ゲームの動きを調べて、設定を変える                 52
y169  速さや大きさを変え、動きの違いを確かめます。       26
y240  今日の到達点                Lesson目次            28
      ・開いて実行                1〜6        7〜12
      ・動きとルール              各ページ名とリンク24
      ・数字と変化
y448  使うファイル month8-1.py
y528  開く → 遊ぶ → 調べる
                         ↓
y576                 変える → まとめる
</code></pre>
<ul>
<li>左<code>x48 w456</code>、右<code>x536 w696</code>、gap32。到達点と目次は上揃え。右の目次は2列、各332px・gap32、固定IDと作業名は同じリンク内で必要なら2行。12件全てを保持。</li>
<li>工程は左欄に2段で配置し、矢印は順序のみ。工程の文字24、1段36px、段間12〜16px。Cardや5色のピルにしない。</li>
<li>Surfaceなし。ヘッダー以外の罫線は原則不要。リンク青＋下線、本文濃色。題名の下に重複する英語見出しを足さない。</li>
<li>視線：題名→到達点→工程→必要な目次。最初の準備へは目次の既存リンクまたは標準送り。現行font stackで52px題名の文字幅をCanvasで計測すると約881pxで1184px内に収まった。OS全体の保証ではない。別環境で2行になる時は追加65pxを計上し、目次行間を16→8px、群間32→24px等の規定間隔内で再配分する。12リンク・本文サイズは維持して再検証する。</li>
</ul>
<h3 id="b-p4-observe">B. p4 Observe</h3>
<p>主役は問いと同定できる実ゲーム全景。Page Title40/52、問い26/40.3、対象名28/39.2。画像の上へ答え・結果・移動方向は描かない。</p>
<pre><code class="language-text">y24   Month8-1 観察の記録                  目次 調べる 4/12
y88   動きとルールを記録する                               40
y164  ┌ 実画面 576×432 ┐             プレイヤー   どのキーで…
      │ 敵 ─ 対象      │             敵           どこから…
      │ アイテム ─対象 │             アイテム     取ると…
      │ player近くに名 │             接触         当たると…
y596  └ 全景・4:3 ────┘
y612  遊び直しながら確かめられます。   紙に対象名と動き・ルールを記録
</code></pre>
<ul>
<li>左<code>x48 y164 w576 h432</code>、右<code>x656 y164 w576</code>。右は4つの「対象名＋問い」の組。各組は最大80px、間16px。紙への記録案内は右y560〜680内に最大3行。</li>
<li>注釈はゲーム領域内の空いている所に白い小下地、対象名24pxと濃色2px引出線。player・enemy・itemの3対象を示し、3体全ての敵へ同じ注釈を反復しない。現物と線が重なる場合は対象に近い余白へ移す。</li>
<li>Surfaceは注釈文字の読める下地だけ。画像全体をさらに面で囲わない。問いのCard、問いごとのDivider、spriteの周囲の発光は禁止。</li>
<li>画像は既存全景を用い、幅576なら800→0.72倍。画像内の文字に必須指示を依存させない。キャプション20px。</li>
<li>視線：題名→全景の対象→右の同名の問い→紙への記録。操作は実ゲームとの切替、目次・Reference、標準送り。新しい画像クリックUIは作らない。</li>
</ul>
<h3 id="c-p7-work-8-1-1">C. p7 Work <code>[8-1-1]</code></h3>
<p>主役は変更する5と作業順序。Page Title40/52、手順26/40.3、コード28/42、確認24/36。条件・Hintを常時参照できるWork契約を維持。</p>
<pre><code class="language-text">y24   Month8-1 プレイヤーの速さ            目次 調べる 7/12
y88   プレイヤーの速さを変える                          40
y156  month8-1.py  EDIT  Ctrl + F → [8-1-1]    設定を調べる
y216  1 IDを検索                ┌ 中立Surface ───────────┐
      2 予想して数字を変更      │ 変更前のコード          │
      3 保存                   │ player_speed = 5        │
      4 ESCで閉じ、再実行       │                下線     │
                               │ 数字で動きはどう変わる？│
                               │ ヒント1 ヒント2 ヒント3│
                               │ 開いた本文（同時1つ）  │
                               └───────────────────────┘
y600  ─ 確認 ────────────────────────────────────────────
      画面端に届く前に、同じ時間キーを押して比べます。
      速さが変われば、変更できています。
</code></pre>
<ul>
<li>左<code>x48 w448</code>、右<code>x528 w704</code>、gap32。対象帯y156 h40。本文領域y216〜584。左の4手順は現行文を維持し、最大8行＋間隔36px=約359pxで収める。</li>
<li>右Surfaceは内容高で決める。padding16〜24、caption20、code28、予想26。背景をpreと二重にせず、下線は数値5のみ。初期表示に「2倍進む」等の答え図は置かない。</li>
<li>このp7ではSurface上下padding16、caption28高＋間8＋code42高＋間12＋予想最大2行80.6高。代表画面試作の依頼に合わせ、Hint入口と本文も同じSurface内へ置く。入口の間8px、ボタンはborderを含め44px、本文は上8＋見出し28＋間4＋本文2行72＝112pxを予約する。面全体の最大高は366.6pxでy582.6まで。各部の最大paddingを同時に適用しない。</li>
<li>閉じてもコード・確認を上下させない。Hintは既存文意を維持、独立した第4段階や正誤判定を増やさない。確認はy600の線1px＋上12px＋本文最大2行72pxでy685まで。ラベルと本文は横並びとし、新たな見出し行を積まない。</li>
<li>Dividerは確認前1本。確認は「確認」という中立文字。青は検索・参照導線、茶はHintだけ。Key Message32はここでは使わない。</li>
<li>視線：題名→対象ID→左の操作と右の値を照合→予想→実行→確認。必要時にHint・Referenceへ。Before / Afterの条件付き結果図はReferenceで確認する。</li>
<li>実装時は全Hintを個別に開いて積算する。上記は1行コード用であり、p9の3行コードへそのまま高さをコピーしない。文字を縮めず、不要な重複注釈・面paddingから調整する。</li>
<li>p9の現行内容では予想段落がないため、Surface内を上下padding32＋caption28＋間8＋コード3行126、外の間8＋ボタン44＋Hint112とすれば合計358px。題名・対象帯・確認の位置はp7と共通にできる。これは寸法上の成立条件で、実フォントでの実装確認は別途必要。</li>
</ul>
<h3 id="d-p11-review">D. p11 Review</h3>
<p>主役は設定名と初期値を対応させる表。Page Title40/52、表24/36、初期値700。画像・小図・Key Messageは不要。</p>
<pre><code class="language-text">y24   Month8-1 初期値の一覧                目次 調べる 11/12
y88   変更する場所と初期値を見返す                       40
y164  ID・作業リンク    設定             初期値   変わること
      [8-1-1]          player_speed         5    プレイヤーの速さ
      [8-1-2]          enemy_speed          4    敵3体の速さ
      ─────────── 速さ／サイズの意味の境界 ─────────────
      [8-1-3]          player_size         64    プレイヤーの大きさ
      [8-1-3]          enemy_size          64    敵3体の大きさ
      [8-1-3]          item_size           64    アイテムの大きさ
y612  表は配布時の初期値です。自分で選んだ値とは区別します。
</code></pre>
<ul>
<li>表<code>x48 y164 w1184</code>、列幅280/320/112/472。各セル左右16px、上下14px、見出し含む6行は標準64px＝384px。サイズ群の前に8px分の追加余白を許し、表下端556px以内。既存の「ID・作業へのリンク」を短縮せず、最初の列に248pxの本文幅を確保する。</li>
<li>見出し行だけ中立面。行罫線1px、速さ／サイズ境界は濃色1px。初期値を右揃え・等幅数字、設定名を左揃えで比較する。境界名を新たな必須行として挿入しない。</li>
<li>表外側にSurface・Card・影を重ねない。リンク青＋下線、値は本文濃色。生徒が選んだ変更後の値を初期値列へ混ぜない。</li>
<li>視線：題名→設定名→初期値／変わること→IDリンク。クリックは既存Workへの移動のみ。復習を新しい入力課題へ変えない。</li>
</ul>
<h2 id="14-reference代表2ページの詳細">14. Reference代表2ページの詳細</h2>
<p>固定ヘッダーとカテゴリナビは現行と同じ役割。1280×720、x48〜1232、ヘッダーy24〜64、カテゴリy80〜124、スクロール本文y148〜688。図の追加で本文スクロールが増えても、戻り先を画面外へ追い出さない。</p>
<h3 id="a-reference-index">A. Reference Index</h3>
<p>主役は語句リンク。ページ名32、カテゴリ28、語句22。カテゴリを識別する小図を全件に強制せず、PythonとGameの2群にだけ意味のある見本を置く。</p>
<pre><code class="language-text">固定  操作と言葉を調べる             作業「プレイヤーの速さ」に戻る
固定  索引   VS Code   Python   Game   Debug
本文  操作と言葉を調べる                               32
      必要な言葉を選びます。戻る時は上部のリンク。
      VS Code                     Python
      開く 保存 実行…             変数・代入 加減算 比較…
      検索 複製…                  if… True/False… 繰り返し…
                                  player_speed = 5
                                    名前       値   （小図）
      ──────────────────────────────────────────────
      Game                        Debug
      座標 キー 速さ サイズ…      動かない時 エラー…
      random Rect colliderect…    直前の変更 実行ファイル…
      原点 ─ x
         │ y（下） （小図）                      縦スクロール可
</code></pre>
<ul>
<li>2列各568px、gap48。左右に別カテゴリを置く索引なので2列を使う。Card枠・影なし、行の高さは内容に合わせる。Gameの語を削って高さを合わせない。</li>
<li>カテゴリ見出しの下に語句リンクを置く。Pythonの名前／値見本とGameの軸見本は各最大360×112pxで、リンクの理解を助けるもの。コード36高＋間8＋ラベル34.1高＋上下padding32＝110.1pxを見込む。見本自体はリンクや実行ボタンに見せない。</li>
<li>Surfaceは小図の背景だけ。カテゴリ全体は白地、上下の意味群間に1本のDivider。青は語句リンク、図は濃色。図を理由にファーストビューのカテゴリ見出しを失わない。</li>
<li>初期配置目安はページ名y148、案内y206、上段カテゴリy272、リンクy323以降。Pythonのリンクが2行なら図はy416〜528、下段カテゴリはy560付近。Gameの全語句と小図はスクロールして読む。図が先頭のカテゴリ選びを押し出す場合は図の位置を語句列の横へ調整し、索引を装飾のために長くしない。</li>
<li>視線：カテゴリ名→探す語→必要なら見本→用語詳細。現在の28語句リンク（6＋6＋11＋5）を維持し、全語句を最初の1画面へ押し込まない。キーボードでも下の語へ移れる。</li>
</ul>
<h3 id="b-python変数代入詳細">B. Python「変数・代入」詳細</h3>
<p>主役はコードの名前／値の対応。既存の説明と用途・関連先を保持し、コードと小図を重複する別例へ分けない。</p>
<pre><code class="language-text">固定  Reference  Python                  元の作業に戻る
固定  索引   VS Code   Python   Game   Debug
y148  Pythonを調べる                                    32
      項目を読む時は、この本文をスクロールします。
      変数・代入  足し算… 比較… if… True/False… 繰り返し…
y320  変数・代入                                        28
      意味：値に名前を付けて使う仕組み。「=」で右の値を左へ。
y440  ┌ 中立Surface：コードと小図 ───────────────────┐
      │ player_speed = 5                               │ 24
      │ └── 名前 ──┘   値                              │ 22
      │ 名前はプレイヤーの速さを表し、5が設定している値 │ 22
      └────────────────────────────────────────────────┘
y616  使う場面：設定の名前を残し、数字だけを変える時。
      関連：Month8-1 名前と数字
      ──────────────────────────────────────────────
      次の項目（本文をスクロール）
</code></pre>
<ul>
<li>本文幅1184、短い意味文は最大1000px。Surface<code>x48 y440 w1000 h160</code>を初期目安とし、コード24/36とラベル22/34.1を同じ文字位置に対応付ける。上下padding32＋code36＋ラベル2行68.2＋間8＝144.2pxなので144px固定では不足する。残りは線と字幅差の余裕にする。右の空白を飾り絵で埋めない。</li>
<li>引出線は矢印なし。代入の向きを加える時だけ右→左。「名前→値」と矢印を付けて代入方向を逆に教えない。</li>
<li>コード直下は短い「名前」「値」だけを対応位置に置く。長い説明をそれぞれ直下へ置くと、名前の説明が数値側へ重なる。説明はその次の1行にまとめ、名前の括弧と値への線が交差しないようにする。</li>
<li>「変数・代入」へ語句リンクで来た時は項目先頭をスクロール領域上端へ合わせる。上図のyはカテゴリ先頭から開いた例で、直接リンク時にも同じ絶対yを強制しない。</li>
<li>意味・用途は22px、関連リンク20px。コードの5を太字・下線にして実例の値だと分かるようにするが、ReferenceへEDIT課題を新設しない。意味文は現行本文を保持し、ワイヤー内の短縮文をそのまま置換しない。</li>
<li>視線：用語→意味→コードと対応図→用途→関連／元の作業。固定ナビはSurfaceへ含めず、Reference全体をゲーム画面風にしない。</li>
</ul>
<h2 id="15-禁止するテンプレート的表現">15. 禁止するテンプレート的表現</h2>
<p>AI製かどうかを見た目で判別する規則ではなく、内容に関係なく形を当てる制作パターンの禁止。</p>
<table>
<thead>
<tr>
<th>禁止</th>
<th>代わりに選ぶもの</th>
</tr>
</thead>
<tbody>
<tr>
<td>同じ角丸Cardを3枚並べて内容を埋める</td>
<td>順序なら手順、対応なら表、独立選択だけCard</td>
</tr>
<tr>
<td>左にアイコン・右に短文の無条件反復</td>
<td>意味に合う図／表／普通の段落。アイコンは必要な操作だけ</td>
</tr>
<tr>
<td>意味のないgradient、dot、blob、光彩</td>
<td>白地と必要な中立面。ゲームの色は実画像内に残す</td>
</tr>
<tr>
<td>巨大pill・全画面に英語eyebrow</td>
<td>必要なコードラベルと日本語の内容名だけ</td>
</tr>
<tr>
<td>タイトル＋副題＋3Cardの定型Hero</td>
<td>Overviewの到達点・工程・目次を優先</td>
</tr>
<tr>
<td>全段落へ色付き背景、全てへ角丸</td>
<td>意味のあるまとまりにだけSurface</td>
</tr>
<tr>
<td>余白を埋めるイラスト、意味のないゲーム背景</td>
<td>観察・比較に根拠のある実画像</td>
</tr>
<tr>
<td>全ページ2カラム、左右の箱を等高化</td>
<td>図・表は1つの構図。Work反復など役割がある2列は維持</td>
</tr>
<tr>
<td>表の各セルをCard化、すべて太字</td>
<td>列の整列・見出し行・照合キーで階層化</td>
</tr>
<tr>
<td>「モダン」のためのborder-radius・影・アニメーション</td>
<td>操作・重なり・関係を示す場合のみ、規定値内</td>
</tr>
</tbody>
</table>
<p>現行v0.3に残る候補は、p6での概念まで左右の文章欄に分ける構図、p7〜9のコードと説明の弱いまとまり、Reference全項目の同じ灰色コード箱＋線。Card乱用・gradient・eyebrowは確認していない。Workの反復そのものは改善対象ではない。</p>
<h2 id="16-design-tokens-v04">16. Design Tokens v0.4</h2>
<p>以下は共通CSSへ対応させる設計値。代表6画面に必要な値だけを限定適用し、他ページは既存値を維持する。各型の内容をトークンの数に合わせて増やさない。</p>
<table>
<thead>
<tr>
<th>分類</th>
<th>値・適用</th>
<th>v0.3との差と理由</th>
</tr>
</thead>
<tbody>
<tr>
<td>Typography</td>
<td>4節の役割別値。52/40/32/28/26/24/22/20</td>
<td>題名・要点を分離。本文は維持し、小文字化で密度を稼がない</td>
</tr>
<tr>
<td>Font</td>
<td>本文stack維持、コードへMenlo追加</td>
<td>日本語と追加配布不要を優先。Macのコードfallbackを明示</td>
</tr>
<tr>
<td>Spacing</td>
<td>4/8/12/16/24/32/48px</td>
<td>値は維持、群内／群間／外周の用途を限定</td>
</tr>
<tr>
<td>Canvas / width</td>
<td>1280×720、内容幅1184、左右48、上24、下32</td>
<td>実装と同じ。ワイヤーの実使用下端を688に統一</td>
</tr>
<tr>
<td>Grid</td>
<td>gap32、Work約40:60、Observe1:1、表は全幅。索引gap48</td>
<td>2列を全型へ強制しない。Work契約・Observeは維持</td>
</tr>
<tr>
<td>Surface</td>
<td><code>#F1F5F9</code>、内側16〜24px、原則1組1面</td>
<td>色は維持。灰色コード箱だけからコード＋意味の組へ</td>
</tr>
<tr>
<td>Colors</td>
<td>text <code>#17212B</code>、canvas <code>#FFFFFF</code>、muted <code>#475569</code>、primary <code>#1D4ED8</code> / <code>#EFF6FF</code></td>
<td>維持。青はリンク・現在地・EDIT。図を無条件に青くしない</td>
</tr>
<tr>
<td>States</td>
<td>success <code>#166534</code> / <code>#F0FDF4</code>、error <code>#B91C1C</code> / <code>#FEF2F2</code>、hint <code>#854D0E</code> / <code>#FEFCE8</code>、challenge <code>#6B21A8</code> / <code>#FAF5FF</code></td>
<td>維持。確認条件≠成功、ゲームの敵の赤≠UI警告</td>
</tr>
<tr>
<td>Border / Divider</td>
<td>補助1px <code>#CBD5E1</code>、意味に必須の図線・操作境界2px <code>#475569</code>、focus3px青</td>
<td>薄い線を万能にしない。図の軸や対象は明暗差が必要</td>
</tr>
<tr>
<td>Radius</td>
<td>基本4px、Surface最大8px、ゲーム全景0px</td>
<td>画像の8px角丸をやめ、矩形の画面境界を欠かさない。pillなし</td>
</tr>
<tr>
<td>Shadow</td>
<td>本文なし。既存浮動UIが必要な時のみ<code>0 4px 16px #17212B1A</code></td>
<td>維持。階層を示さない影は追加しない</td>
</tr>
<tr>
<td>Code</td>
<td>Work28、Reference24、表24。padding16〜24、変更値700＋下線、合字無効</td>
<td>値の照合と記号の識別を強める。syntax色だけに依存しない</td>
</tr>
<tr>
<td>Image</td>
<td>全景4:3、contain、自然比率。caption20</td>
<td>使用目的と取得条件を追加。coverは引き続き禁止</td>
</tr>
<tr>
<td>Diagram</td>
<td>軸・輪郭2px、ラベル本編24／Reference22、対象との距離8〜12</td>
<td>新設。静的引出線と方向矢印を区別</td>
</tr>
<tr>
<td>Labels</td>
<td>5種類、20/1.4/700、padding4×8、radius4</td>
<td>維持。Codeの役割として使用、ページ種別・進捗と混ぜない</td>
</tr>
<tr>
<td>Icons</td>
<td>9語彙以内、20〜24px、文字併記</td>
<td>使用条件を限定。装飾・新規大量依存を防ぐ</td>
</tr>
<tr>
<td>Interaction</td>
<td>目標領域40px以上、Hint44px、focus青3px＋offset3</td>
<td>維持・具体化。非リンクをボタン風にしない</td>
</tr>
</tbody>
</table>
<p>syntax用の候補は識別子／演算子<code>#17212B</code>、数値<code>#854D0E</code>、キーワード<code>#6B21A8</code>、コメント<code>#475569</code>。背景<code>#F1F5F9</code>で確認する。数値の茶はコード内の構文色であり、Hint操作の意味を付けない。Month8-1の単純な設定行は中立文字＋値の下線だけでもよい。</p>
<p>色トークンの計算確認（sRGB相対輝度式）：本文／白16.29、補足／白7.58、リンク／白6.70、本文／中立面14.87、図線・コメント／中立面6.92、数値／中立面6.25、キーワード／中立面7.96、EDIT／淡青6.16、Hint／淡黄6.62、Challenge／淡紫8.13。補助Divider／白は1.48なので、図の軸や操作の唯一の輪郭には使わない。画像上の線は白い下地で分離し、実装後にも実際の隣接色で確認する。</p>
<h2 id="17-accessibilityと実装時の受入条件">17. Accessibilityと実装時の受入条件</h2>
<ul>
<li>文字は本文・コード・注釈とも4.5:1以上を目標にする。大文字の例外へ依存しない。淡いDividerは補助であり、操作・図の認識をその線だけに頼らせない。必須の図線・操作境界は周辺と3:1以上。<a href="https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html" target="_blank" rel="noopener noreferrer">W3C文字コントラスト</a>、<a href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html" target="_blank" rel="noopener noreferrer">非テキストコントラスト</a>を下限として参照する。</li>
<li>リンク下線、現在位置の文字・太字、変更値の下線、破線／実線、「前／後」など形と文字で区別。色を消しても意味が残る。</li>
<li>Tabで目次・語句・戻り・Hintへ到達。リンクはEnter、Hint等のbuttonはEnter / Spaceで操作し、見えるfocusを消さない。図内にフォーカスだけの見えないリンクを追加しない。</li>
<li>Reference本文のキーボードスクロール、用語アンカー、元Workへの戻り、公開base path、直接訪問時のLesson一覧を再確認。図を追加しても見出しの着地点がずれない。</li>
<li>アニメーションは追加しない。状態図・比較は静止図で成立させ、reduced motion時にも同じ情報を読める。ゲーム自体の挙動には触れない。</li>
<li>画像altと近接する説明、図の文字による要約を用意。実画面上の文字・アイコン・色だけで課題を成立させない。</li>
<li>1366×768と1024×768で全12ページ、Hint全段階、Referenceを確認。Windows/macOSのfallback後の折返し、記号、コードの行、表の値、図のラベルを確認。画面の半分幅でVS Codeと並べることは必須条件にしない。</li>
<li>投影後方席で対象ID・値・図のラベルを読めるか実地確認。見づらい場合は図の目的・配置・情報量を直す。ゲーム画像内の小さいScoreを拡大せず読ませない。</li>
<li>本編は隠れた縦スクロールなし。Referenceは意図したスクロールあり。閉じたHintやスクロール文書のPDF配布は別途検証し、ブラウザー版と同じ内容になるとは未確認のまま約束しない。</li>
</ul>
<h2 id="18-自己レビュー改訂履歴">18. 自己レビュー・改訂履歴</h2>
<p>18〜20節はv0.4制作時の記録。96px等の旧値は当時の条件を表す。現行の標準表示64px・原素材32pxとは区別する。</p>
<p>初稿D0。以下へ、初稿を作成した後のレビューで見つけた問題と改訂を記録する。設計上の寸法計算と、未実装画面の実機検証は区別する。</p>
<h3 id="第1回d0d1">第1回：D0→D1</h3>
<p>初稿を全17画面の実キャプチャ、実コード・Reference索引と照合し、Nodeで寸法を積算した。</p>
<table>
<thead>
<tr>
<th>軸</th>
<th>指摘</th>
<th>修正・判断</th>
</tr>
</thead>
<tbody>
<tr>
<td>A 視覚階層</td>
<td>本文サイズを維持した点はよいが、p7で面のpadding最大値を使うとHintと確認が競合</td>
<td>右欄の各寸法を固定した積算を追記。最大366.6px、確認下端685pxとした</td>
</tr>
<tr>
<td>B デザイン文法</td>
<td>索引見本320×80ではコードとラベルが余白込みで入らない</td>
<td>見本は360×112へ。余白のために小さい文字へ変えない</td>
</tr>
<tr>
<td>C テンプレート性</td>
<td>Reference全項目へ面を付ければ再び同じ箱の反復になる</td>
<td>項目本体は見出し・余白・線、面はコードと小図の1組だけという規則を維持</td>
</tr>
<tr>
<td>D 学習</td>
<td>比較図に結果を常時出すとp7の予想を失う。名前→値の矢印は代入の向きと紛らわしい</td>
<td>予想時には結果図を出さず既存Referenceへ。静的対応は引出線、代入は右→左とする設計を確認</td>
</tr>
<tr>
<td>E 教材・参照</td>
<td>初稿の索引29語は数え間違い。変数詳細ワイヤーはスクロール案内の場所がなかった</td>
<td>実装の28語へ修正。案内を残し、項目をy320、面をy440、用途をy616へ</td>
</tr>
<tr>
<td>F 一貫性</td>
<td>Reviewの第一列が現行の列名に狭い。Reference面144pxは算定144.2pxを下回る</td>
<td>表を280/320/112/472に変更。面160pxへ。既存文言を短縮しない</td>
</tr>
<tr>
<td>G 日本語</td>
<td>ASCII内の短縮文を本文変更の指示と誤読される余地</td>
<td>既存コピー保持を再確認。ワイヤーは配置説明、正式な意味文は現行を維持</td>
</tr>
</tbody>
</table>
<p>D1の残確認：索引の小図とリンクの順序、p1の2行題名時の収まり、比較条件の読める大きさ、図線と構文色のコントラスト。</p>
<h3 id="第2回d1d2">第2回：D1→D2</h3>
<p>D1を再読し、1024pxの代表画面・既存コピー・数値を再照合した。現行ブラウザーのfont stackで文字幅を測り、図線／構文色を含む11組のコントラストと、Work・Reviewの寸法を計算した。v0.4のDOMや画像を作って確認したものではない。</p>
<table>
<thead>
<tr>
<th>軸</th>
<th>再レビューの指摘</th>
<th>改訂・結果</th>
</tr>
</thead>
<tbody>
<tr>
<td>A 視覚階層</td>
<td>索引の文章規則は「リンクが先」だがワイヤーは小図が先。見本が主役になる</td>
<td>リンクを上、小図を下に統一。カテゴリのy位置とスクロールする範囲を明示</td>
</tr>
<tr>
<td>B デザイン文法</td>
<td>薄いDividerを図の軸へ転用できる余地がある</td>
<td>1.48:1の補助線と6.92:1の図線を区別。画像上の注釈線も白下地で分離</td>
</tr>
<tr>
<td>C テンプレート性</td>
<td>p7の面の高さをp9へコピーすると、コードが増えた分がはみ出す懸念</td>
<td>p9は予想段落がない現行内容で358pxと別に積算。同じWork配置を保ち、等高の空箱を強制しない</td>
</tr>
<tr>
<td>D 学習</td>
<td>比較条件をCaption20に含めると、小さな前提の読み落としで距離比を誤解する</td>
<td>時間・開始位置・尺度は本編24／Reference22以上。Notesへ逃がさない</td>
</tr>
<tr>
<td>E 教材・参照</td>
<td>p1で2行題名の再配置方法が抽象的。Review列見出しの幅を確認する必要</td>
<td>題名52pxは現行環境で約881px。列名24pxは約217pxで新列の本文幅248px内。OS差は残検証とし、p1の間隔再配分を明記</td>
</tr>
<tr>
<td>F 一貫性</td>
<td>Code28をinlineにも適用するとHint112pxの計算が成立しない。全リンクのSpace操作も標準と異なる</td>
<td>inlineは周囲の文字サイズを継承。リンクEnter／button Enter・Spaceへ区別</td>
</tr>
<tr>
<td>G 日本語</td>
<td>変数の長い注釈を名前と値の直下へ別々に置くと衝突する</td>
<td>短い名前／値ラベルを直下、意味文は次の1行へ。ワイヤーの短縮文は正式コピーでないと全体へ明記</td>
</tr>
</tbody>
</table>
<p>第2回で発見した寸法・文法・文字の問題を反映した。記載した成立条件内では机上の幅・高さの矛盾を解消したが、実装・教室試用での可読性改善はまだ確認していない。</p>
<h3 id="改訂履歴">改訂履歴</h3>
<ul>
<li>D0：現行v0.3の視覚監査から、8型・8図法・Typography・6つの代表ワイヤー・使用条件を作成。</li>
<li>D1：自己レビュー1回目。WorkとReferenceの高さ、Review列幅、索引語数、既存案内の保持を修正。</li>
<li>D2：自己レビュー2回目。索引の視線順、比較条件の文字サイズ、inline code、図線の明暗差、注釈の衝突を修正。視覚表現の仕様として確定、実装は別タスク。</li>
</ul>
<h2 id="19-未確定残る検証">19. 未確定・残る検証</h2>
<ol>
<li>未対象ページへの展開は未実施。代表6画面の改行、Hintの高さ、図の注釈位置の検証結果は20節に分けて記録する。</li>
<li>Windows/macOSの実フォント、投影後方席、生徒の検索・比較・記録の使いやすさは実機・授業で確認する。新しい字体への変更を先に正解としない。</li>
<li>Before / Afterの新しい実測画像は未取得。既存全景を速度比較の根拠に転用しない。模式図は仮定を明記する。</li>
<li>スクロールReference・HintのPDF化は未確定。v0.4を理由に情報設計・教材の学習量を変えない。</li>
</ol>
<h2 id="20-代表6画面の試作検証2026-10-08">20. 代表6画面の試作・検証（2026-10-08）</h2>
<h3 id="実装済み未実装">実装済み／未実装</h3>
<ul>
<li>実装済み：Month8-1 p1 Overview、p4 Observe、p7 Work <code>[8-1-1]</code>、p11 Review、Reference Index、Python「変数・代入」。他の本編8ページ・Pythonの他5項目はv0.3の本文とスタイルを維持する。全12ページへの展開ではない。</li>
<li>p1は52px見出しと2段の工程図。p4は既存<code>gameplay-v03.png</code>を4:3・contain・角丸なしで表示し、3対象名だけを白下地＋濃色引出線で示す。画像ファイル自体は変更していない。</li>
<li>p7はコード28px、5の太字・下線、予想・既存Hintを1つのSurfaceにまとめ、確認前のDividerだけを残す。p11は初期値右揃え・太字、速さ／サイズ間の濃色1px線。Card・新規アイコン・結果の先出し図は追加しない。</li>
<li>Referenceは28語句を保持し、小図はリンクの後に配置。名前／値図は<code>NameValueDiagram.vue</code>の1部品を索引と詳細で共用。索引の図は360×111／112px。座標は軸の見本だけで、新しい必須学習を追加していない。</li>
<li>既存2レイアウトへ<code>visual</code>の限定適用口を追加し、CSSは1ファイルのまま。Python詳細は該当項目のクラスだけで限定。新しいRouter・Store・ページ別レイアウトは追加していない。編集方法は<code>slides/README.md</code>。</li>
</ul>
<h3 id="実装後の自己レビュー2回">実装後の自己レビュー2回</h3>
<p>仕様策定時の18節とは別に、実装画面とDOMで確認した。</p>
<table>
<thead>
<tr>
<th>観点</th>
<th>第1回</th>
<th>第2回・修正後</th>
</tr>
</thead>
<tbody>
<tr>
<td>A Typography</td>
<td>52／40／28pxの役割を確認。p7のIDが途中で折れる問題を発見</td>
<td>inline codeの改行を防止。本文・表・UIのサイズは維持</td>
</tr>
<tr>
<td>B 階層</td>
<td>p1工程の矢印が「まとめる」に近い</td>
<td>工程列幅を調整。目次12リンク・到達点・工程の分離を再確認</td>
</tr>
<tr>
<td>C Surface</td>
<td>p7のpreを透明にし、コード・予想・Hintだけを1面化</td>
<td>Hint用予約高により開閉しても確認位置が不変。追加のCardなし</td>
</tr>
<tr>
<td>D Diagram</td>
<td>注釈線と静的対応を矢印で混同していないか確認</td>
<td>改行防止に伴う「=」前後の空白縮退を発見し、図のspanで空白を保持</td>
</tr>
<tr>
<td>E Game</td>
<td>注釈は対象・Scoreを覆わず、線交差・方向の先出しなし</td>
<td>両画面幅で全景と3対象名を確認。PNG・Gameコードは変更なし</td>
</tr>
<tr>
<td>F テンプレート装飾</td>
<td>左手順・カテゴリ・表外を囲わない</td>
<td>不要なinlineコード下地を外し、Review境界の両隣の罫線色を揃えてcollapse時の薄色優先を解消</td>
</tr>
<tr>
<td>G 教材UX</td>
<td>Hint全段階、固定ID、28語句と戻り先を確認</td>
<td>build後の直リンク・再読込・サブパス・Presenterまで再確認。未対象ページへの全面適用なし</td>
</tr>
</tbody>
</table>
<h3 id="検証結果と限界">検証結果と限界</h3>
<ul>
<li>ローカルChrome、1280×720論理配置。1366×768／1024×768で本編12＋Reference5の計34表示を撮影・DOM確認。本編のはみ出しなし。Referenceは本文だけの意図した縦スクロール。見出し・4カテゴリ・戻り先を維持。</li>
<li>p7はHint 1／2／3を個別に開き、同時1件、コード・確認の可視性、3pxフォーカス、値5の太字・下線を確認。確認欄の位置は開閉・段階によらず一定。p8・p9も既存Hint表示を維持。</li>
<li>p7・p8・p9でTab移動、Enter／SpaceによるHint切替、Reference本文の上下キー、リンクのEnter操作を確認。キー操作で意図せずページ送りしない。</li>
<li>Referenceは語句が図より先、28リンク一致、名前／値の対応とアンカー位置、カテゴリ移動・再読込後の元Workへの復帰、直接訪問時のLesson一覧を確認。<code>/course/</code>配下でも画像・リンク・再読込・戻りを確認。</li>
<li>dev表示、通常build、<code>--base /course/</code> buildは成功。Presenterは6項目のNotes、Overviewの70分進行表、Reference往復を確認。既存の標準コードCSS由来minify警告2件は残る。</li>
<li>STARTの固定IDと5・4・96・96・96を照合。メモリー上の一時コピーを実Pygameのdummy描画で実行し、5→10の移動量変化とESC・再実行を確認。VS Code実機操作・授業時間の実測とは区別する。</li>
<li>ハッシュ比較でGame 1全ファイル・画像・assets・docs/01〜12を変更していないことを確認。本編の未対象8ページ、全Notes、索引リンク、Python他項目も原文一致。</li>
<li>未確認：Windows実フォント、投影後方席、生徒の単独利用、PDFでのHint／スクロール全文収録。残る検証は19節を継続し、今回のブラウザ確認を学習効果の実証とは扱わない。</li>
</ul>
`},"14_art_direction_v05":{html:`<h1 id="slidev教材-art-direction--visual-identity-v05">Slidev教材 Art Direction / Visual Identity v0.5</h1>
<p>公開Page Type／Priorityの最新規則は43節（2026-10-18の復元）。11種類・従来配置へ戻し、PriorityだけHeader内へ表示する。直前の6分類化は撤回。種類・優先度に関する旧19・32〜34・41節より43節を優先し、他の表示規則は維持する。教育設計・自走性はdocs/20。旧版の実描画記録は履歴として扱う。</p>
<p>策定日：2026-10-08。現行：v0.5.4。v0.5.2のIdentity・Month8-1本編12ページを維持し、Time・CHALLENGE・QUIZ・OPTIONAL下部ナビだけを更新した。構成は18節、共通テンプレートは19・23節、v0.5.4の実装判断は25節、素材・表示サイズは22節を参照する（2026-10-09）。1〜17・20・21・24節と23.4・23.5は以前の設計・実装の記録であり、旧順序・ページ番号・Flat背景・淡色コード面・96px表示等は現行への指示ではない。教室検証は未実施。素材はユーザー提供、ゲーム全景は最新版から取得。フォントファイルの追加なし。</p>
<h2 id="1-正本と範囲">1. 正本と範囲</h2>
<p>優先順位は、<a href="/robot-python-game/instructor/docs/12_slidev_design_system_v03/">docs/12：学習内容・情報設計・教材UX</a> → <a href="/robot-python-game/instructor/docs/13_visual_language_v04/">docs/13：情報関係・Visual Language</a> → 本書：Art Direction / Identity。12・13を置換しない。調査の背景は<a href="/robot-python-game/instructor/docs/11_design_research/">docs/11</a>。</p>
<p>本書で更新するのは、v0.5適用時の文字の強弱、色、英語の分類ラベル、アイコン、装飾、固定配置。docs/13の数値トークンに対する変更案であり、図の意味、Surfaceの使用条件、教材の内容・順序・量は維持する。docs/09・10は旧版の記録として扱う。</p>
<p>本編12ページ、固定ID <code>[8-1-1]</code>〜<code>[8-1-3]</code>、配布名 <code>month8-1.py</code>、初期値5・4・各サイズ96、MUST / SHOULD / CHALLENGE、Hint数、Referenceの戻り先、Notesを変えない。Game・Lesson・assets・カリキュラム・slidesの変更は行わない。</p>
<h2 id="2-現状評価と調査方法">2. 現状評価と調査方法</h2>
<p>現行ブラウザーのp1・p4・p7・p11・Reference索引・Python「変数・代入」の6画面を画像で確認し、p8・p9もDOM計測した。Chrome、1366×768の表示を1280×720の論理座標に換算。Hintはp7・p8で3、p9で2を開いて測った。v0.5を描画した結果ではない。</p>
<table>
<thead>
<tr>
<th>対象</th>
<th>確認した現状</th>
<th>v0.5で変える視覚上の役割</th>
</tr>
</thead>
<tbody>
<tr>
<td>p1</td>
<td>52pxの一行タイトル、工程・目次は整理済み。ほぼ中立色で文字の強弱が小さい</td>
<td>二行の大タイトル、赤いキーワード、固定RGB構図で入口の個性を出す</td>
</tr>
<tr>
<td>p4</td>
<td>ゲーム画像と問いが対応。注釈は白・濃色のみ</td>
<td>画像を主役のまま、対象マーカーを問いにも対応させる</td>
</tr>
<tr>
<td>p7</td>
<td>コード・予想・HintのSurfaceは有効。数字も中立色中心</td>
<td>変更値の赤、検索の青、番号の強弱で作業の視線順を作る</td>
</tr>
<tr>
<td>p11</td>
<td>表の初期値と分類境界は明瞭。ページ全体の階層は平坦</td>
<td>大きな数字と細い分類目印。Cardに戻さない</td>
</tr>
<tr>
<td>Reference</td>
<td>索引2図と変数詳細の図は導入済み。「図がない」わけではない</td>
<td>図の線・数値・色とカテゴリのアイコンを統一する</td>
</tr>
<tr>
<td>Work間</td>
<td>p7だけv0.4、p8・p9はv0.3。タイトル・Target高さと本文量が異なる</td>
<td>3ページを同じ外側グリッドへ。内容依存の下端移動をなくす</td>
</tr>
</tbody>
</table>
<p>Work実測：p7 / p8 / p9のMain上端は216 / 233.8 / 233.8、確認ブロック上端は600 / 613.5 / 619.8px。現在の本文量だけでなく、適用版の混在もずれの要因。全ページへ同じ浮遊円を足すだけでは解消しない。</p>
<h2 id="3-art-direction--brand-personality">3. Art Direction / Brand Personality</h2>
<p>内部名称：<strong>RGB Play Lab — 白い制作ノートに、RGBの目印</strong>。これは制作方針の名前であり、生徒向けの新しい教材名・キャッチコピーではない。</p>
<p>キーワードは4つに固定する。</p>
<table>
<thead>
<tr>
<th>Keyword</th>
<th>画面に現れる性格</th>
<th>避けるもの</th>
</tr>
</thead>
<tbody>
<tr>
<td>Clear</td>
<td>白い余白、大きな日本語、迷わない配置</td>
<td>小文字への押し込み、装飾による情報の分断</td>
</tr>
<tr>
<td>Playful</td>
<td>RGBの小さな幾何学、入口の大きな文字、ゲームの実画像</td>
<td>幼児的なキャラクター、絵文字、ほめ言葉の連発</td>
</tr>
<tr>
<td>Technical</td>
<td>コード・値・ID・手順が正確。Workは安定</td>
<td>cyberpunk、neon、eスポーツHUD</td>
</tr>
<tr>
<td>Graphic</td>
<td>文字の大小、短い英字、線・形・数値の明確な構図</td>
<td>corporate SaaS、広告Hero、高級ミニマル、3Cardsテンプレート</td>
</tr>
</tbody>
</table>
<p>人格は「一緒に試せる、明快な制作教材」。小学4〜5年以降の初心者を子供扱いしすぎない。楽しさの主役はゲームと自分の変更であり、背景アニメーションではない。</p>
<h2 id="4-color-identity">4. Color Identity</h2>
<h3 id="41-トークンとコントラスト">4.1 トークンとコントラスト</h3>
<p>白をcanvasの主役とし、鮮やかなRGBと文字用の濃色を分ける。下表の比はsRGBの相対輝度から計算した概算表示。判定は丸め前の値を使う。</p>
<table>
<thead>
<tr>
<th>用途</th>
<th>色</th>
<th style="text-align:right">白 <code>#FFF</code> 上</th>
<th style="text-align:right">Surface <code>#F1F5F9</code> 上</th>
</tr>
</thead>
<tbody>
<tr>
<td>Blue / 操作・検索・リンク</td>
<td><code>#2563EB</code></td>
<td style="text-align:right">5.17:1</td>
<td style="text-align:right">4.72:1</td>
</tr>
<tr>
<td>Vivid Red / 図形</td>
<td><code>#EF4444</code></td>
<td style="text-align:right">3.76:1</td>
<td style="text-align:right">3.44:1</td>
</tr>
<tr>
<td>Vivid Green / 図形</td>
<td><code>#22C55E</code></td>
<td style="text-align:right">2.28:1</td>
<td style="text-align:right">2.08:1</td>
</tr>
<tr>
<td>Change ink / 変更値の文字</td>
<td><code>#B91C1C</code></td>
<td style="text-align:right">6.47:1</td>
<td style="text-align:right">5.91:1</td>
</tr>
<tr>
<td>Confirmed ink / 確認済みの文字</td>
<td><code>#166534</code></td>
<td style="text-align:right">7.13:1</td>
<td style="text-align:right">6.51:1</td>
</tr>
<tr>
<td>Text</td>
<td><code>#17212B</code></td>
<td style="text-align:right">16.29:1</td>
<td style="text-align:right">14.87:1</td>
</tr>
<tr>
<td>Muted text / 意味のある図線</td>
<td><code>#475569</code></td>
<td style="text-align:right">7.58:1</td>
<td style="text-align:right">6.92:1</td>
</tr>
<tr>
<td>Hint ink</td>
<td><code>#854D0E</code></td>
<td style="text-align:right">6.85:1</td>
<td style="text-align:right">6.25:1</td>
</tr>
<tr>
<td>Challenge ink</td>
<td><code>#6B21A8</code></td>
<td style="text-align:right">8.72:1</td>
<td style="text-align:right">7.96:1</td>
</tr>
</tbody>
</table>
<p>本文は4.5:1以上を基本とし、大文字の例外に頼らない。縮小されるスライドなので、鮮やかな赤・緑は本文色にも白抜き文字の背景にも使わない。<a href="https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html" target="_blank" rel="noopener noreferrer">WCAG文字コントラスト</a></p>
<p>Hint面は <code>#FEFCE8</code>（Hint inkとの比6.62:1）、Challenge面は <code>#FAF5FF</code>（Challenge inkとの比8.13:1）。区切り <code>#CBD5E1</code> は補助線だけ。意味を担う輪郭・フォーカスには濃色2pxを使う。緑の対象マーカーは濃色輪郭を必須にし、色そのものの明度差に依存しない。意味を持たない外周装飾に同じ輪郭を強制する必要はない。<a href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html" target="_blank" rel="noopener noreferrer">WCAG非テキストコントラスト</a></p>
<h3 id="42-意味色対象色装飾色を分ける">4.2 意味色・対象色・装飾色を分ける</h3>
<table>
<thead>
<tr>
<th>範囲</th>
<th>RGBの役割</th>
<th>衝突を防ぐ規則</th>
</tr>
</thead>
<tbody>
<tr>
<td>意味を持つUI</td>
<td>青＝移動・検索・現在位置、赤＝変更箇所・差分、緑＝実際に確認できた結果</td>
<td>リンクに下線、変更値に太字＋下線、確認済みに文字を添える</td>
</tr>
<tr>
<td>図の中の対象識別</td>
<td>名前／値、player／enemy／itemなど、その図の凡例に限定</td>
<td>ラベルと形を併用。UI全体の意味へ拡張しない</td>
</tr>
<tr>
<td>背景装飾</td>
<td>RGBという教材の目印。状態の意味は持たない</td>
<td>非操作・読み上げ対象外。クリックできる形や成功マークにしない</td>
</tr>
</tbody>
</table>
<ul>
<li>赤い編集値はエラーではない。エラーは警告アイコン＋「エラー」＋原因の文章で識別し、値の下線だけで表現しない。</li>
<li><code>CHECK / 確認</code>は未確認の作業領域。見出しも線も中立色。緑の面・チェックマークで先に合格扱いしない。自動採点や完了ボタンは追加しない。</li>
<li><code>LEARNED</code>は学習済みの分類であり、今のコードが正しいことを保証しない。中立色を維持する。</li>
<li><code>True / False</code>を成功の緑／失敗の赤へ固定しない。Syntax highlightの語彙をRGBルールで全面上書きしない。</li>
<li>青い静的な図ラベルにはリンク下線を付けない。すべての青をクリック対象にするのではなく、UIでは下線・フォーカスで区別する。</li>
<li>既存の <code>EDIT / READ / SYSTEM / LEARNED / CHALLENGE</code> は保持。EDITは変更の赤、READは中立、SYSTEMは中立、LEARNEDは中立、CHALLENGEは紫。分類語自体を消さない。</li>
<li>p9の3つの96は選択前の候補なので中立の太字を保つ。赤で3つ全部の変更を促したり、特定の1つを勝手に選択済みにしたりしない。p7・p8の指定値5・4とは区別する。</li>
</ul>
<p>色だけで関係や状態を伝えない。<a href="https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html" target="_blank" rel="noopener noreferrer">WCAG色の使用</a></p>
<h3 id="43-ページ別の色密度">4.3 ページ別の色密度</h3>
<p>白・Neutral 80〜90%という案は目安に留め、面積の達成率にはしない。画像の色も無理にRGBへ加工しない。</p>
<table>
<thead>
<tr>
<th>型</th>
<th>色量・焦点</th>
<th>制限</th>
</tr>
</thead>
<tbody>
<tr>
<td>Overview</td>
<td>本編で最も強い。タイトルの一語＋RGB図形＋工程の変更点</td>
<td>全面着色・巨大グラデーションなし</td>
</tr>
<tr>
<td>Observe / Play</td>
<td>ゲーム画像の色が主役。対象マーカーと外周だけ補助</td>
<td>画像の色補正・大きな背景図形なし</td>
</tr>
<tr>
<td>Work</td>
<td>白とコードの中立面。赤い値、青いID、必要時だけ黄色Hint</td>
<td>全数字を赤にしない。緑のCHECK面なし</td>
</tr>
<tr>
<td>Review</td>
<td>罫線・大きな数字。リンクの青、対象識別の小マーカー</td>
<td>行全体の虹色化・カード化なし</td>
</tr>
<tr>
<td>Reflect</td>
<td>静かな白。保存・戻る導線の青程度</td>
<td>演出で結果を評価しない</td>
</tr>
<tr>
<td>Reference</td>
<td>Neutral＋青。図の内部だけ必要なRGB</td>
<td>全項目の色面化、全画面装飾なし</td>
</tr>
</tbody>
</table>
<h2 id="5-typography-identity">5. Typography Identity</h2>
<h3 id="51-サイズ比較と採用値">5.1 サイズ比較と採用値</h3>
<p>1280×720の論理px。実装時は役割別トークンへまとめる。ページごとの場当たり的な縮小は禁止。</p>
<table>
<thead>
<tr>
<th>役割</th>
<th>候補の判断</th>
<th>v0.5：size / line-height / weight</th>
</tr>
</thead>
<tbody>
<tr>
<td>Lesson Title</td>
<td>64は一行に収まるが変化が弱い。72を二行の構図として採用</td>
<td><strong>72 / 84 / 700</strong>、Overviewだけ</td>
</tr>
<tr>
<td>Page Title</td>
<td>44は現行40との差が小さい。48で分類ラベルとの対比を作る</td>
<td><strong>48 / 60 / 700</strong></td>
</tr>
<tr>
<td>Key Message</td>
<td>32は数値にも使う。主メッセージは36、毎ページ置かない</td>
<td>36 / 50.4 / 700</td>
</tr>
<tr>
<td>Section</td>
<td>26本文との差をweightでも付ける</td>
<td>28 / 40 / 700</td>
</tr>
<tr>
<td>Body</td>
<td>24へ一律縮小しない</td>
<td><strong>26 / 40.3 / 400</strong></td>
</tr>
<tr>
<td>表・CHECK本文</td>
<td>一覧性と二行の確認条件を両立</td>
<td>24 / 36 / 400</td>
</tr>
<tr>
<td>Work code</td>
<td>読み取りの主役。inline codeは本文サイズに合わせる</td>
<td>28 / 42 / 400、変更値700</td>
</tr>
<tr>
<td>UI / 英語分類</td>
<td>18より20。分類語の行高だけ24</td>
<td>20 / 28 / 400〜700、分類20 / 24 / 700</td>
</tr>
<tr>
<td>Caption</td>
<td>16〜18へ下げると縮小時に弱い</td>
<td>必要情報20 / 28。出典等の非必須情報のみ18 / 26可</td>
</tr>
<tr>
<td>Reviewの初期値・Work番号</td>
<td>数字の強弱を増やす。IDは大きくしすぎない</td>
<td>32 / 40 / 700</td>
</tr>
<tr>
<td>Reference</td>
<td>本編見出し48を文書内に持ち込まない</td>
<td>ページ32 / 41.6、項目28 / 40、本文22 / 34.1、コード24 / 36</td>
</tr>
</tbody>
</table>
<p>タイトルと本文の比は52:26＝2倍から72:26≒2.77倍へ。ページ見出しも40:26から48:26へ。大きさだけでなく、太さ・二行の改行位置・赤い一語・短い英字で階層を作る。</p>
<h3 id="52-フォント文字組">5.2 フォント・文字組</h3>
<ul>
<li>日本語は現行の <code>BIZ UDPGothic → Noto Sans JP → Hiragino Kaku Gothic ProN → Yu Gothic → sans-serif</code> を維持。タイトルも読みやすい同系統の700とし、装飾書体を追加しない。</li>
<li>短い英語分類と手順番号に <strong>Inter 700</strong> を提案。日本語・コードには使わない。字面の違いでTechnical / Graphicの層を足す。未配布時はsystem sansで成立させる。</li>
<li>コードは既存の等幅stackを維持。ID・変数名・数値の途中を改行しない。数値一覧にはtabular numbersを使う。</li>
<li>tracking：日本語本文0、タイトル0.01em、英語分類0.08em、コード0。日本語全体の0.02〜0.03em化、英語本文まで0.12em化は採用しない。</li>
<li>p1のみ意味の切れ目で明示改行する。字幅を潰すtransform、極端なcondensed、両端揃えによる不自然な空白は禁止。</li>
</ul>
<p>Interは将来ローカル配信する場合に限り導入し、OFL・著作権表示を同梱する。外部CDNは必須にしない。今回は取得・追加しない。<a href="https://rsms.me/inter/" target="_blank" rel="noopener noreferrer">Inter公式</a>、<a href="https://raw.githubusercontent.com/rsms/inter/master/LICENSE.txt" target="_blank" rel="noopener noreferrer">OFL原文</a></p>
<h3 id="53-タイトルの収まり">5.3 タイトルの収まり</h3>
<p>現行font stackをChromeのcanvasで計測した。文字列「ゲームの動きを調べて、設定を変える」、weight700、tracking追加前の幅は次のとおり。</p>
<table>
<thead>
<tr>
<th style="text-align:right">px</th>
<th style="text-align:right">一行全体</th>
<th style="text-align:right">最初の句「ゲームの動きを調べて、」</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:right">52</td>
<td style="text-align:right">881.4</td>
<td style="text-align:right">569.4</td>
</tr>
<tr>
<td style="text-align:right">64</td>
<td style="text-align:right">1084.8</td>
<td style="text-align:right">700.8</td>
</tr>
<tr>
<td style="text-align:right">68</td>
<td style="text-align:right">1152.6</td>
<td style="text-align:right">744.6</td>
</tr>
<tr>
<td style="text-align:right">72</td>
<td style="text-align:right">1220.4</td>
<td style="text-align:right">788.4</td>
</tr>
</tbody>
</table>
<p>72の一行は有効幅1184を超える。採用は幅960で「ゲームの動きを調べて、」／「設定を変える」の二行。0.01emのtrackingを加えても現行計測では約798pxで第一行が収まる。残る右側を装飾専用にできる。これは現行OSの測定であり、Windows・代替フォントの保証ではない。</p>
<p>1024px幅で0.8倍表示すると、タイトル57.6・ページ38.4・本文20.8・UI16px相当。投影で読めることを机上の比率だけで保証しない。</p>
<h2 id="6-英語日本語とアイコン">6. 英語／日本語とアイコン</h2>
<h3 id="61-固定vocabulary">6.1 固定Vocabulary</h3>
<p>英語は短い分類、日本語は目的・指示・説明。英語を理解しないと作業できない構造にはしない。</p>
<table>
<thead>
<tr>
<th>用途</th>
<th>許可語</th>
</tr>
</thead>
<tbody>
<tr>
<td>ページ分類</td>
<td>OVERVIEW、SETUP、PLAY、OBSERVE、REVIEW、CONCEPT、WORK、TUNE、REFLECT、REFERENCE</td>
</tr>
<tr>
<td>作業内の短い分類</td>
<td>CODE、CHECK、HINT、CHALLENGE</td>
</tr>
<tr>
<td>Referenceカテゴリ</td>
<td>VS CODE、PYTHON、GAME、DEBUG</td>
</tr>
<tr>
<td>必要時の操作・状態補助</td>
<td>SEARCH、SAVE、RUN、RESTART、WARNING、CONFIRMED</td>
</tr>
</tbody>
</table>
<p>分類は原則1ページ1つ、見出し直前。Workは <code>WORK</code> とし、<code>WORK 01</code>のような新しい番号体系を固定IDと並べない。CHECKは「確認」を併記する。ヒントボタン・リンクの「調べる」「作業に戻る」等は日本語のまま。上部Lesson名とページ番号も維持する。</p>
<p>タイトルのアクセントは意味が一致する一語だけ。p1の「設定」は変更対象なので濃い赤。単に目立たせるため、文末・句読点・任意の単語へRGBを順に配色しない。<code>Let's Try! / Ready? / Mission Start! / Great! / Awesome!</code>は使わない。</p>
<h3 id="62-icon-system">6.2 Icon system</h3>
<p>教材本文は <strong>Font Awesome Free / Classic Solid</strong> に統一する提案。既存のSlidev標準ツールバーは対象外で、そのために標準UIを書き換えない。本文で別ライブラリ・絵文字を混在させない。</p>
<table>
<thead>
<tr>
<th>Free icon（import名）</th>
<th>意味・使用場所</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>faGamepad</code></td>
<td>GAME / Play / Observeのゲーム対象</td>
</tr>
<tr>
<td><code>faCode</code></td>
<td>CODE / WORK / PYTHON</td>
</tr>
<tr>
<td><code>faMagnifyingGlass</code></td>
<td>SEARCH / 固定ID検索</td>
</tr>
<tr>
<td><code>faBookOpen</code></td>
<td>REFERENCE入口</td>
</tr>
<tr>
<td><code>faPlay</code></td>
<td>RUN / VS Codeから実行</td>
</tr>
<tr>
<td><code>faFloppyDisk</code></td>
<td>SAVE / 保存</td>
</tr>
<tr>
<td><code>faRotateRight</code></td>
<td>RESTART / Game Over後のR。コード再読込ではない</td>
</tr>
<tr>
<td><code>faCheck</code></td>
<td>CONFIRMED / 確認できた結果だけ</td>
</tr>
<tr>
<td><code>faLightbulb</code></td>
<td>HINT</td>
</tr>
<tr>
<td><code>faStar</code></td>
<td>CHALLENGE</td>
</tr>
<tr>
<td><code>faArrowRight</code></td>
<td>順序・方向の矢印。静的対応には使わない</td>
</tr>
<tr>
<td><code>faTriangleExclamation</code></td>
<td>WARNING / エラー・注意文に併記</td>
</tr>
<tr>
<td><code>faListUl</code></td>
<td>CHECK / REVIEW。未確認でも使える中立の一覧</td>
</tr>
<tr>
<td><code>faFolderOpen</code></td>
<td>SETUP / VS CODEカテゴリ</td>
</tr>
<tr>
<td><code>faBug</code></td>
<td>DEBUGカテゴリ</td>
</tr>
</tbody>
</table>
<p>15種は辞書の上限であり、1画面に15個置く意味ではない。通常20〜24px、カテゴリ24〜28px。同じ役割は同じサイズ・baseline。本文の全箇条書き、全タイトルの左右、装飾目的だけの配置は禁止。日本語ラベルがあるアイコンは読み上げ重複を避け、ボタンの名前は文字で保持する。</p>
<p>将来は <code>@fortawesome/fontawesome-svg-core</code>、<code>@fortawesome/vue-fontawesome</code> のVue 3対応版、<code>@fortawesome/free-solid-svg-icons</code> をpackage管理し、使用アイコンだけimportする。Kit・Pro契約・CDNを必須にしない。バージョンは実装時に互換性を確認してlockする。<a href="https://docs.fontawesome.com/web/use-with/vue/" target="_blank" rel="noopener noreferrer">公式Vue導入</a>、<a href="https://docs.fontawesome.com/web/use-with/vue/add-icons/" target="_blank" rel="noopener noreferrer">個別アイコンの追加</a></p>
<p>FreeのSVG/JSアイコンはCC BY 4.0、フォントはSIL OFL 1.1、その他のコードはMIT。採用物のライセンスと帰属表示を配布物へ残し、生成物から通知を取り除かない。アイコンフォントは今回の推奨方式では使わない。<a href="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/7.x/LICENSE.txt" target="_blank" rel="noopener noreferrer">Font Awesome Freeライセンス</a></p>
<h2 id="7-shape-system--安全域">7. Shape system / 安全域</h2>
<h3 id="71-flatとsoftの比較">7.1 FlatとSoftの比較</h3>
<table>
<thead>
<tr>
<th>方式</th>
<th>利点</th>
<th>リスク・判断</th>
</tr>
</thead>
<tbody>
<tr>
<td>Flat Geometric</td>
<td>線と形が明快。低負荷、印刷・縮小・exportでも再現しやすい</td>
<td>単調さはTypographyとページ型の差で補う。基本として採用</td>
</tr>
<tr>
<td>Soft Dimensional</td>
<td>円の奥行き・軽さ、平板さの緩和</td>
<td>大きなblur・重なりはLP的。読字域を侵しやすい。Overviewの補助1形状だけ候補</td>
</tr>
</tbody>
</table>
<p>「Flat 70〜80%＋Soft 20〜30%」を全画面の面積比にはしない。Work / Reference / ObserveはFlat 100%。OverviewのみFlatの3形状＋任意の柔らかい背景1形状とし、4要素中1要素という上限に読み替える。SoftなしでもIdentityが成立することを先に確認する。</p>
<p>Noiseは<strong>標準OFF</strong>。将来試す場合もshape内部のみ、固定textureのopacity 0.01〜0.02、1パターンまで。全画面overlay、grunge、retro print、文字上のnoise、実行時生成は禁止。blurはOverviewの補助円のみ4px上限。色のgradient、glassmorphism、立体shadowは使わない。</p>
<h3 id="72-content-safe-area--decoration-area">7.2 Content Safe Area / Decoration Area</h3>
<p>座標は左上原点、1280×720。矩形は <code>(x, y, 幅, 高さ)</code>。</p>
<ul>
<li>Content Safe：<code>(48, 24, 1184, 664)</code>、右端1232、下端688。</li>
<li>外周Decoration：左x0〜32、右x1248〜1280、上y0〜8、下y704〜720の帯のみ。上端もHeaderのy24から16px離す。中央80%という一律ルールは、既存1184pxの内容幅を削るため採用しない。</li>
<li>図形の線幅・回転・blurまで含めて帯の内側へclipする。内容との間を最低16px空ける。focus ring用の最大6px張り出しも残す。</li>
<li>p1だけ、タイトルの右に追加の装飾島 <code>(1072, 104, 160, 168)</code> を予約。タイトル幅960、右端1008とし、島との間を64px空ける。島へ文字・リンク・図の凡例を置かない。</li>
<li>「右下＝完了」「左端＝戻る」などの装飾位置への操作意味は採用しない。ページを進めた時に背景が操作対象に見えるため。意味は既存のNavigationへ集約する。</li>
<li>背景は非操作、読み上げ対象外、contentより下層。角にある標準Slidevの操作UIと干渉する場合は、その場所の装飾を表示しない。</li>
</ul>
<h3 id="73-固定pattern-family4種">7.3 固定Pattern Family：4種</h3>
<p>位置はすべて外接矩形。線・円弧はその矩形内に収める。指定のないblur/noiseは0。runtime random、時刻・ページ番号による座標生成は使わない。</p>
<table>
<thead>
<tr>
<th>variant</th>
<th>Shape / 色 / 位置</th>
<th>Opacity / Blur / Noise</th>
<th>用途・禁止用途</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>start</code></td>
<td>青circle <code>(1088,116,64,64)</code>、赤triangle <code>(1176,176,48,48)</code>、緑square <code>(1092,232,24,24)</code></td>
<td>Flat各1 / 0 / 0。任意の青い補助円 <code>(1080,108,80,80)</code> のみ0.18 / 4px / 0、装飾島でclip</td>
<td>Overview専用。表・Work・本文の裏へ流用しない</td>
</tr>
<tr>
<td><code>game</code></td>
<td>左の青arc <code>(4,200,24,64)</code>、右の赤line <code>(1256,420,4,72)</code>、下の緑square <code>(1104,704,12,12)</code></td>
<td>各0.75 / 0 / 0</td>
<td>Play・Observeの外周。画像上・sprite上・注釈線の近くは禁止</td>
</tr>
<tr>
<td><code>work</code></td>
<td>左の青line <code>(20,228,4,64)</code>、右の赤square <code>(1252,264,16,16)</code>、下の緑line <code>(1040,708,64,4)</code></td>
<td>各0.6 / 0 / 0</td>
<td>Technical系。p7/8/9で座標も同一。コードSurface内へ装飾を入れない</td>
</tr>
<tr>
<td><code>reference</code></td>
<td>左の青arc <code>(8,320,20,48)</code>、右の赤line <code>(1256,180,4,24)</code>、下の緑square <code>(1120,708,8,8)</code></td>
<td>各0.35 / 0 / 0</td>
<td>文書の外周。本文・スクロール内容に追随して漂わせない</td>
</tr>
</tbody>
</table>
<p>加えて <code>none</code> を許可するが、5番目の図形パターンではない。Review / Reflectは原則none。Challenge専用パターンは増やさず、既存の紫の任意課題区画で表す。初期実装ではmirror / rotate / offsetの派生も作らない。必要になった時だけ、検証済みの固定座標セットを追加する。</p>
<h2 id="8-図解とgame-annotation">8. 図解とGame Annotation</h2>
<h3 id="81-docs13の8図法を維持する">8.1 docs/13の8図法を維持する</h3>
<p>共通：白地、意味を持つ輪郭2px <code>#475569</code>、本編ラベル24・Reference22、主要数値32、控えめな角丸4px。RGBは関係の識別に使い、すべての線を虹色にしない。Surfaceは関係を一緒に読む必要がある時だけ。矢印は方向・順序・遷移に限定する。</p>
<table>
<thead>
<tr>
<th>図法</th>
<th>v0.5で揃える見た目</th>
<th>維持する意味・禁止</th>
</tr>
</thead>
<tbody>
<tr>
<td>A Relationship</td>
<td>名前に青い括弧、値に赤い下線。「名前」「値」を明記</td>
<td>静的対応には矢印なし。代入を描く時だけ値→名前。Referenceでの赤は図内の値の識別で、編集指示ではない</td>
</tr>
<tr>
<td>B Coordinate</td>
<td>濃色の軸、必要時のみ注目軸を青、例の点を赤＋囲み</td>
<td>x→右、y→下。青x／緑yの固定割当は不採用。緑＝正解との衝突を避ける</td>
</tr>
<tr>
<td>C Flow</td>
<td>青い順序線、変更段階だけ赤い語。番号を32px</td>
<td>確認する段階は中立。実際の結果だけ緑。「変更→保存→ESC→再実行→確認」、Rを再読込にしない</td>
</tr>
<tr>
<td>D Before / After</td>
<td>同サイズの図、32pxの値、差分だけ赤</td>
<td>条件・開始位置・時間を固定。変更後を無条件に緑の成功にしない</td>
</tr>
<tr>
<td>E Game Annotation</td>
<td>白い名札、濃色線、小さいRGB＋形の対応</td>
<td>名前だけを指す。観察前に移動方向・得点・答えを描き込まない</td>
</tr>
<tr>
<td>F State</td>
<td>中立の状態名、青い遷移線、条件を文字で</td>
<td>True / Falseの正誤色分けなし。Month8-1へ新課題を作らない</td>
</tr>
<tr>
<td>G Collision</td>
<td>濃色Rect、薄い赤の重なり＋ハッチ＋説明</td>
<td>Rectとspriteの輪郭は別。赤は重なりの注目でエラーではない。端だけの接触を重なりと描かない</td>
</tr>
<tr>
<td>H Random Range</td>
<td>濃色の範囲線、赤の選択点を囲み、32pxの例値</td>
<td>両端を含む。現行なら0〜704、例438。次回を予測する矢印は禁止</td>
</tr>
</tbody>
</table>
<p>既存の変数対応図・座標図をまず統一する。random / Rect / Debug flowは対応するReference項目で必要な時に使い、索引へ全図を並べたりMonth8-1の学習量を増やしたりしない。</p>
<h3 id="82-ゲーム注釈のローカル凡例">8.2 ゲーム注釈のローカル凡例</h3>
<ul>
<li>player＝青circle、enemy＝赤triangle、item＝緑square。12〜16px、濃色2px輪郭、日本語名とセット。</li>
<li>色はspriteそのものの色を説明するものではない。現行item画像の黄色を緑へ変更しない。対象の名前と形を画像側・問い側で一致させる。</li>
<li>名札は白、文字24px、角丸4px、shadowなし。引出線2px、矢印先端なし。画像上の重要対象を隠さず、3体の敵すべてへラベルを付けない。</li>
<li>p4の「接触」の問いには新しいRGB対象を作らず中立文字を使う。接触の結果はp5で扱う。</li>
<li>次のゲームでは同じ役割がある時だけ再利用。新しい対象へ色を無制限に増やさず、名前と形を先に決める。</li>
</ul>
<h2 id="9-work-alignment-grid">9. Work Alignment Grid</h2>
<h3 id="91-p7--p8--p9共通の外側契約">9.1 p7 / p8 / p9共通の外側契約</h3>
<p>各ページのコピー・コード・Hintは保持。左右はx48 / 幅448、gap32、x528 / 幅704。右の内側はx552 / 幅656。左手順は番号列44＋gap12＋本文392。CHECKはラベル列144＋gap24＋本文1016で、日本語の確認条件を十分な幅に置く。外側の縦位置を内容量に依存させない。</p>
<table>
<thead>
<tr>
<th>Anchor</th>
<th>y / 高さ</th>
<th>規則</th>
</tr>
</thead>
<tbody>
<tr>
<td>Header</td>
<td>24 / 40</td>
<td>Lesson・日本語section・戻る導線</td>
</tr>
<tr>
<td>Section Label</td>
<td>72 / 24</td>
<td><code>WORK</code>、20px。追加の長い副題なし</td>
</tr>
<tr>
<td>Page Title</td>
<td>96 / 60</td>
<td>48px、一行</td>
</tr>
<tr>
<td>Target</td>
<td>164 / 36</td>
<td>ID・検索・Reference。三ページ同一</td>
</tr>
<tr>
<td>Main</td>
<td><strong>216 / 368</strong></td>
<td>左手順と右Surface。下端584</td>
</tr>
<tr>
<td>Check Divider</td>
<td><strong>600 / 1</strong></td>
<td>色は中立</td>
</tr>
<tr>
<td>Check Label / Content</td>
<td><strong>613 / 最大72</strong></td>
<td>24/36の二行まで。下端685</td>
</tr>
<tr>
<td>Bottom Safe</td>
<td><strong>688</strong></td>
<td>下へ本文を押し出さない</td>
</tr>
</tbody>
</table>
<p>将来は共通layoutのgrid rowsとして実装し、文章ごとに絶対座標を埋め込まない。本文・Hintの内部配置は必要な分だけ変えてよいが、Title / Target / Main / Checkは動かさない。p7だけのmargin調整をp8へコピーする方式にはしない。</p>
<h3 id="92-内容が収まる計算">9.2 内容が収まる計算</h3>
<p>右Surfaceは左右padding24、上下合計32。見出しCODEを独立した追加行にせず、既存「変更前のコード（month8-1.py）」を20/28で扱う。</p>
<ul>
<li>p7・p8：padding32＋caption28＋gap8＋1行code42＋gap12＋予想40.3＋gap8＋Hintボタン44＋開いたHint116＝<strong>330.3px</strong>。368以内。</li>
<li>p9：padding32＋caption28＋gap8＋3行code126＋gap8＋Hintボタン44＋開いたHint116＝<strong>362px</strong>。368以内。予想文・3個目のHintを新設しない。</li>
<li>左手順は最大8行×40.3＋項目間12×3＝<strong>358.4px</strong>を上限とする。番号32pxは本文を押さない専用列に置く。</li>
<li>p7の既存予想文は現行fontで約510.25px。右内幅656で一行になる。二行になれば約370.6pxとなるため、フォント差による折返しは実装検証の必須項目。</li>
<li>Hint116は見出し28＋本文最大2行×36＋上下余白合計16の枠。内側の左右paddingは16ずつ（本文幅624）。inline codeも24pxに揃え、行高の膨張を防ぐ。Hint閉時も領域を予約し、確認欄を上下させない。</li>
</ul>
<p>追加の文字幅測定では、p7の左4項目は約571 / 507 / 264 / 690px。本文幅392に対する最低行数は2 / 2 / 1 / 2。日本語の禁則・等幅部分で増える可能性を含めて8行を予約する。最長Hintの例は24pxで約893px、確認文は約1002px。inline codeの等幅差と実際の折返しはDOM検証で確定する。</p>
<p>Hintの情報を切る、隠しスクロールにする、CHECKを別ページ・Referenceへ逃がす、本文を縮める方法では解決しない。収まらない場合は共通の内部padding・列配分を再検討し、3ページを一緒に再検証する。別Lessonの長い課題を、この容量へ無条件に流し込まない。</p>
<h2 id="10-全12ページの視覚リズム">10. 全12ページの視覚リズム</h2>
<table>
<thead>
<tr>
<th style="text-align:right">p</th>
<th>英語分類 / リズム</th>
<th>主役・色・pattern</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:right">1</td>
<td>OVERVIEW / GRAPHIC・STRONG</td>
<td>72pxタイトル、RGBの装飾島、工程。<code>start</code></td>
</tr>
<tr>
<td style="text-align:right">2</td>
<td>SETUP / TECHNICAL</td>
<td>開くファイルと操作手順。folder / run、青。<code>work</code></td>
</tr>
<tr>
<td style="text-align:right">3</td>
<td>PLAY / GAME・IMAGE</td>
<td>実ゲーム全景、操作キー。画像主役、<code>game</code></td>
</tr>
<tr>
<td style="text-align:right">4</td>
<td>OBSERVE / GAME・ANNOTATION</td>
<td>実画像＋対象マーカー＋問い。<code>game</code></td>
</tr>
<tr>
<td style="text-align:right">5</td>
<td>REVIEW / DATA</td>
<td>観察後の対応表。中立＋対象名、<code>none</code></td>
</tr>
<tr>
<td style="text-align:right">6</td>
<td>CONCEPT / DIAGRAM</td>
<td>名前／値の図、赤い値と青い名前。<code>none</code></td>
</tr>
<tr>
<td style="text-align:right">7</td>
<td>WORK / TECHNICAL</td>
<td><code>[8-1-1]</code>、赤い5、固定CHECK。<code>work</code></td>
</tr>
<tr>
<td style="text-align:right">8</td>
<td>WORK / TECHNICAL</td>
<td><code>[8-1-2]</code>、赤い4、同じanchor。<code>work</code></td>
</tr>
<tr>
<td style="text-align:right">9</td>
<td>WORK / TECHNICAL</td>
<td><code>[8-1-3]</code>、選ぶ3行、同じanchor。<code>work</code></td>
</tr>
<tr>
<td style="text-align:right">10</td>
<td>TUNE / PLAYFUL・CHOICE</td>
<td>目標と試行。通常部は中立、任意課題だけ紫。<code>work</code></td>
</tr>
<tr>
<td style="text-align:right">11</td>
<td>REVIEW / DATA</td>
<td>初期値の大きな数字と罫線。<code>none</code></td>
</tr>
<tr>
<td style="text-align:right">12</td>
<td>REFLECT / CALM</td>
<td>記録と保存。白、保存導線の青。<code>none</code></td>
</tr>
</tbody>
</table>
<p>同じWorkが続くことは操作の安定性に必要。そこで背景を毎回変えて「退屈さ」を解決しない。色量の山はp1とゲーム画像、谷はReview / Reflectとし、教材の行動に沿って変化させる。</p>
<h2 id="11-代表5画面の1280720ワイヤー">11. 代表5画面の1280×720ワイヤー</h2>
<p>ASCIIは構造図であり、文字数を実寸と見なさない。数値は論理px。全画面とも既存Header・Notes・リンク先・日本語本文を維持する。</p>
<h3 id="111-p1-overview大きな文字とrgbの入口">11.1 p1 Overview：大きな文字とRGBの入口</h3>
<pre><code class="language-text">1280 × 720 / WHITE
 48                                                 1072       1232
 y24  Month8-1 / 今日の流れ                  目次・調べる
 y72  OVERVIEW
 y104 ゲームの動きを調べて、 [72px]                    青○
 y188 設定を変える          [「設定」だけ赤]                   赤△
                                                       緑□
 y288 速さや大きさを変え、動きの違いを確かめます。
 y344 今日の到達点                 Lesson目次
 y396 3つの到達点                  01 …         07 [8-1-1] …
      （白地の箇条書き）           02 …         08 [8-1-2] …
 y532 使うファイル                 …            …
 y588 開く → 遊ぶ → 調べる         06 …         12 …
      → 変える → まとめる
 y688 ─ content end ─────────────────────────────────────
</code></pre>
<ul>
<li>階層：72px二行タイトル → 到達点・目次28px → 本文26 / 目次24。OVERVIEW20pxは中立。タイトルの変更対象だけ濃い赤、目次リンクは青＋下線。</li>
<li>Shapeは7節の<code>start</code>、右の装飾島のみ。Surface・Card・ゲーム画像は不要。アイコンは目次でなく既存Reference入口のbook程度。工程は順序矢印を使い「変える」だけ赤、最後を緑の完了にしない。</li>
<li>タイトル <code>(48,104,960,168)</code>、lead y288、欄見出しy344。左幅448、右x536幅696（332×2＋gap32）。本文開始y396。左3行121、ファイルy532、工程y588〜684の二行。右目次は6行×36＋間8×5＝256、通常下端652、一行追加の折返しなら688。全12リンクを保持する。</li>
<li>目次の1列332は番号32＋gap8＋リンク292に分ける。現行コピーの24px計測では最長リンク約270px。IDを分割せず収まる見込みだが、代替fontは別途検査する。</li>
<li>p1は工程・目次を省いて広告Heroにしない。ゲーム実画像の追加は必須にせず、画像のために到達点を削らない。</li>
</ul>
<h3 id="112-p4-observe画像と問いをつなぐ">11.2 p4 Observe：画像と問いをつなぐ</h3>
<pre><code class="language-text"> y24  Month8-1 / 観察の記録                          調べる
 y72  [gamepad] OBSERVE
 y96  動きとルールを記録する [48px]
 y180 +----------------------------+  青○ プレイヤー どのキーで…？
      | 実画像 576 × 432 / 4:3      |  赤△ 敵         どこから…？
      | 白い名札＋線               |  緑□ アイテム   取ると…？
      | 敵3体 / player / item      |     接触       敵に当たると…？
      | 答え・進行矢印は描かない   |
 y432 |                            |  紙に対象の名前を書き、
      |                            |  動きやルールを短く記録します。
 y612 +----------------------------+
 y624 遊び直しながら確かめられます。[20px]
 y688 ──────────────────────────────────────────────────
</code></pre>
<ul>
<li>階層：実ゲーム画像 → 日本語の問い26px → 記録指示。タイトル48、対象見出し28、注釈24。画像はx48・y180・576×432、右欄x656・幅576。</li>
<li>英字OBSERVEは20、gamepad1つ。RGBは対象のローカル凡例、画像は無加工。質問4行の枠は各56px、記録文y432で最大3行。新しい答えは追加しない。</li>
<li><code>game</code>は外周だけ。名札の白下地以外にSurfaceなし。画像を太い枠やshadowで囲まない。全景の比率・得点表示を保持する。</li>
</ul>
<h3 id="113-p7-work番号赤い値固定check">11.3 p7 Work：番号・赤い値・固定CHECK</h3>
<pre><code class="language-text"> y24  Month8-1 / プレイヤーの速さ                    調べる
 y72  [code] WORK
 y96  プレイヤーの速さを変える [48px]
 y164 [search] Ctrl + F → [8-1-1]（青）        設定を調べる
 y216 1  IDを検索する           +------------------------------+
      2  予想して数字を変える   | 変更前のコード (month8-1.py) |
      3  保存する               | player_speed = 5  [赤＋下線] |
      4  ESCで閉じて再実行      | 既存の予想の問い             |
                                 | ヒント1 / 2 / 3              |
                                 | 開いたHintの予約領域         |
 y584                            +------------------------------+
 y600 ──────────────────────────────────────────────────────────
 y613 [list] CHECK / 確認    同じ時間キーを押して比べます…
                            （既存の成功条件、二行まで）
 y688 ─ content end ─────────────────────────────────────────────
</code></pre>
<ul>
<li>数値・位置は9節が正本。ワイヤー中の手順は略記で、実装では現行コピーを削らない。左番号32、本文26、コード28、IDは既存の読みやすい大きさを保持。</li>
<li>右は <code>#F1F5F9</code> の単一Surface、角丸4、shadowなし。予想・Hintも同じ読解単位。赤い5は太字＋下線、名前は通常のコード。検索IDは青、CHECKは中立。</li>
<li><code>work</code>外周だけ。アイコンはWORK・検索・確認に限定し、全手順へ増やさない。新しい図・画像は不要。p8・p9も外側anchorとpatternを完全に揃える。</li>
</ul>
<h3 id="114-p11-reviewdata-editorial">11.4 p11 Review：Data editorial</h3>
<pre><code class="language-text"> y24  Month8-1 / 初期値の一覧                         調べる
 y72  [list] REVIEW
 y96  変更する場所と初期値を見返す [48px]
 y180 固定ID         設定名              初期値     変わること
      ──────────────────────────────────────────────────────
      [8-1-1]        player_speed          5        プレイヤーの速さ
      [8-1-2]        enemy_speed           4        敵3体の速さ
      ── size group / 少し広い区切り ───────────────────────
      [8-1-3]       ○player_size          96        プレイヤーの大きさ
      [8-1-3]       △enemy_size           96        敵3体の大きさ
      [8-1-3]       □item_size            96        アイテムの大きさ
 y584 ──────────────────────────────────────────────────────
 y608 表は配布時の初期値です。自分で選んだ値とは区別します。
 y688 ──────────────────────────────────────────────────────
</code></pre>
<ul>
<li>列幅280 / 320 / 112 / 472。見出し・本文24、コード24、初期値32/40/700。数値は中立色・桁揃え、変更例10や8を混ぜない。IDリンクだけ青＋下線。</li>
<li>6行×66＋分類境界8＝404px、y180〜584。各行は内容40＋上下padding24＋罫線1＝65px以上を確保。説明y608、一行40.3で下端648.3。</li>
<li>size3行だけ画像側と同じcircle / triangle / squareを小さく添える。赤・緑は対象識別であり編集・成功ではない。変数名と「変わること」の日本語を必ず残す。</li>
<li>REVIEW20＋listアイコン。背景<code>none</code>、Surface・画像なし。RGBを行の面色にせず、罫線と余白で速度／大きさを分類する。ワイヤー中の英語 <code>size group</code> は設計注記で表示文ではない。</li>
</ul>
<h3 id="115-reference-indexdocsの検索性と小図">11.5 Reference Index：Docsの検索性と小図</h3>
<pre><code class="language-text"> y24  [book] REFERENCE / 調べる                     作業に戻る
 y80  VS CODE     PYTHON     GAME     DEBUG           固定nav
 y124 ──────────────────────────────────────────────────────
 y136 +---- scroll viewport: bottom 688 ---------------------+
 y160 | 操作と言葉を調べる [32px]                            |
 y218 | 困っている操作や言葉を選びます。[22px]                |
 y276 | [folder] VS CODE            [code] PYTHON             |
 y328 | 開く・保存・実行…           変数・代入 / if …          |
      | 項目リンクを省略しない      小図：名前と値              |
 y548 | ──────────────────────────────────────────────────── |
 y572 | [gamepad] GAME              [bug] DEBUG               |
 y628 | 座標・random・Rect…         動かない時…                |
      | 小図：座標（続きはscroll）                             |
 y688 +------------------------------------------------------+
</code></pre>
<ul>
<li>タイトル32、カテゴリ28、本文22、コード24。英語カテゴリは日本語の項目リンクとセット。主役は探すリンク、図は補助。現行28項目・索引＋4カテゴリを保ち、スクロールを明示する。</li>
<li>本編のように全内容を720px内へ押し込めない。固定Header・navとスクロール本文を分離し、戻り先と該当項目へのリンクを維持する。幅はスクロールバー領域を予約し、本文を装飾帯へ広げない。</li>
<li>既存の名前／値・座標の2図を継続し、最大幅360・高さ112程度。図は白地＋2px線、静的対応に矢印なし。詳細のコードと図が一つの関係を示す場合だけSurfaceを使う。</li>
<li>青いリンク、Reference用の濃色図線、対象の意味に合う小さなRGB。背景<code>reference</code>は外周に固定、内容と一緒に移動しない。各項目をアイコンCardにしない。</li>
</ul>
<h2 id="12-実装方式と将来の差し替え">12. 実装方式と将来の差し替え</h2>
<h3 id="121-方式比較">12.1 方式比較</h3>
<table>
<thead>
<tr>
<th>方式</th>
<th>保守性 / Slidev</th>
<th>export / performance</th>
<th>固定配置 / blur / noise / base path</th>
</tr>
</thead>
<tbody>
<tr>
<td>CSS pseudo-elements</td>
<td>少数の線・丸は簡潔。4パターンで要素を増やすと読みにくい</td>
<td>軽量。clipとfilterは実描画検証が必要</td>
<td>固定座標可。複数形状・noiseは不向き。外部URLなしならbase非依存</td>
</tr>
<tr>
<td>Inline SVG</td>
<td>円・三角・弧・clipを一つのviewBoxで記述。Vue内でも扱える</td>
<td>小規模なFlat図形は軽量。filterはPDF/PNGで確認</td>
<td>決定的配置、blur/clip可。noiseは固定素材推奨。外部参照なしならbase非依存</td>
</tr>
<tr>
<td>Vue Background Component</td>
<td>variantと設定を一箇所に集約。単体では描画方式ではない</td>
<td>SVGを出力する小部品なら軽量。状態・timerは不要</td>
<td>4種の固定SVGを切替。外部画像はbase解決が必要</td>
</tr>
<tr>
<td>Raster assets</td>
<td>ユーザー制作物の差替えが容易。色・寸法変更は再書出し</td>
<td>読込・解像度・容量に注意。blur/noiseを焼込めば結果は固定</td>
<td>runtime負荷小。別URL、base path、欠損時の処理が必要</td>
</tr>
</tbody>
</table>
<p>推奨：<strong>小さなVue Background Component 1つ＋固定inline SVG</strong>。通常の線はCSSでもよい。4パターン専用Component群、Canvas、粒子system、独自Router、状態管理は作らない。共通色・字・間隔は既存stylesのトークンへ集約し、Lesson別CSSを増やさない。</p>
<p>複数スライドが同時にDOMへ存在するため、SVGのclip / filter IDを全ページで共用しない。ページの固定route名＋variant＋インスタンス用途等から安定した一意のprefixを付ける。同一ページの複製表示でも衝突しないことをPresenterで検証する。乱数や時刻は使わず、初期のFlat版ではfilter自体を不要にできる。</p>
<p>Slidevのexportはブラウザー描画を用いるが、クリックやスクロールがある教材をそのまま静的配布へ変換できるとは限らない。背景・フォント・Hint・ReferenceのPDF/PNG検証を別に行う。<a href="https://sli.dev/guide/exporting.html" target="_blank" rel="noopener noreferrer">Slidev公式export</a></p>
<h3 id="122-ユーザーの背景画像">12.2 ユーザーの背景画像</h3>
<p>将来の置場は <code>slides/public/design/</code>、名前は <code>start.png</code> / <code>game.png</code> / <code>work.png</code> / <code>reference.png</code> 等。対応表は一箇所で管理し、Lesson本文へURLを書き散らさない。今回はディレクトリ・画像を作らない。</p>
<ul>
<li>1280×720基準、透過PNGを推奨。高解像度なら2560×1440。中央は透明、p1の装飾島以外は7節の外周帯に限定する。文字・ID・アイコン・課題を背景へ焼き込まない。</li>
<li>SVGを受け取る場合も同じviewBox、安全域、固定形状とする。外部font・script・外部画像への依存なし。</li>
<li>variantごとに画像版または図形版の片方だけを表示。画像が未指定・読込失敗なら固定図形版、図形も無効なら白地へfallback。教材本文は欠損しても成立する。</li>
<li>canvas全体に比率保持で合わせ、<code>cover</code>によるcropで安全域を崩さない。内容のない帯を増やすために本文を縮めない。</li>
<li>配信baseを一つのhelperで解決し、<code>/design/...</code>を絶対パスとして直書きしない。動的に組むURLはViteの <code>import.meta.env.BASE_URL</code> 等の既存方式に合わせる。ルート配信だけでなくサブパス配信も検証する。<a href="https://vite.dev/guide/build.html#public-base-path" target="_blank" rel="noopener noreferrer">Vite public base path</a></li>
<li>原素材の権利・帰属・書出し寸法を隣のREADME等へ残す方針。ライセンス不明の画像で置換しない。</li>
</ul>
<h3 id="123-motion">12.3 Motion</h3>
<p><strong>v0.5では不採用、静止のみ。</strong> 2〜4px・8〜15秒の浮遊でも読字中の周辺視野を刺激し、作業理解への利益が明確でない。将来導入を再検討する場合もWork / Referenceには使わず、<code>prefers-reduced-motion</code>では停止、exportでは決まった静止座標に固定する。runtime randomはその場合も禁止。</p>
<h2 id="13-aiテンプレート化を防ぐ">13. AIテンプレート化を防ぐ</h2>
<ul>
<li>タイトル＋3Cardsを初期レイアウトにしない。目的に合う表・工程・画像・対応図を選ぶ。</li>
<li>全ページ同じfloating circles、gradient、glassmorphism、pastel SaaS、過剰なblurを使わない。</li>
<li>icon付きCardの大量配置、pillの乱用、何でも大きな角丸、全数字のRGB化をしない。</li>
<li>意味のない英語caption、子供向けだからという絵文字、全見出しの装飾線を足さない。</li>
<li>図形で空白を埋めない。余白は視線と作業のための領域。本文と装飾が競合したら装飾を減らす。</li>
<li>ゲーム画像を架空のUIで置換しない。観察前の答え、未確認の成功表示、配布コードにない変数を足さない。</li>
<li>「ブランド感が弱い」を理由に学習量・ページ数・Hint数を増やさない。</li>
</ul>
<h2 id="14-accessibility--実装時の受入条件">14. Accessibility / 実装時の受入条件</h2>
<ol>
<li>文字・図線のコントラストを実際の隣接背景で再計算。白地の合格値を任意の色面に流用しない。リンク・変更・対象を色なしでも識別できる。</li>
<li>図の意味は読めるラベルでも示す。背景は <code>aria-hidden</code>・非操作、画像は意味のあるalt、アイコンだけの操作を新設しない。</li>
<li>Keyboardで目次→Work→Hint→Reference→元のWorkを移動できる。既存の名前付きroute・戻り先・focusを壊さない。</li>
<li>1280×720、1366×768、1024×768、Windowsの日本語fontと拡大表示を確認する。本編は隠しoverflow・内部scrollなし。Referenceは意図したスクロールと固定navを維持する。</li>
<li>p7/8/9を同倍率で重ね、Title / Target / Main / Checkの上端差を論理1px以内で確認。全Hint開閉・最長Hint・3行コードでもCHECK下端688以内。</li>
<li>p1は到達点・工程・12目次、p4は全景・4問、p11は5データ行が欠けない。ID・変数名の途中改行がない。</li>
<li>図形のclip、focus ring、標準Slidev toolbarとPresenterの重なりを検査。背景なしでも意味・導線が欠けない。</li>
<li>dev / build、PDF / PNG、サブパス配信、背景欠損、font欠損で確認する。build成功だけを視覚検証完了としない。</li>
<li>教室投影の後方席・生徒PCで赤い値、2px線、20pxUIが読めるかを確認。机上レビューを授業効果の実証と呼ばない。</li>
</ol>
<h2 id="15-自己レビュー改訂履歴">15. 自己レビュー・改訂履歴</h2>
<p>仕様の審査であり、未実装のv0.5画面を合格判定するものではない。Presentationsスキルの視覚監査・文字階層・余白の点検を、既存画面と本書のワイヤーに適用した。</p>
<h3 id="第1回d0--d12026-10-08">第1回：D0 → D1（2026-10-08）</h3>
<p>初稿を通読し、既存6画面・実コピー・8図法と照合。Workの文字幅を追加計測し、座標と行高を積算した。</p>
<table>
<thead>
<tr>
<th>項目</th>
<th>点検結果・修正</th>
</tr>
</thead>
<tbody>
<tr>
<td>A 変化が分かるか</td>
<td>72px二行タイトル、英字層、赤い値を主変化とした。背景だけの更新ではない。印象は試作待ち</td>
</tr>
<tr>
<td>B White / RGB</td>
<td>図形RGBと本文用濃色を分離。緑2.28:1を文字に使わないことを確認</td>
</tr>
<tr>
<td>C Typography</td>
<td>72一行1220.4pxは不可、二行なら幅960内。本文26を維持</td>
</tr>
<tr>
<td>D 日英</td>
<td>新しいWORK番号を作らず、日本語の操作名を維持。英字だけでは指示しない</td>
</tr>
<tr>
<td>E Icons</td>
<td>CHECKに成功マークを使わずlistを採用。辞書15種、各画面は少数</td>
</tr>
<tr>
<td>F Shapes</td>
<td><strong>上帯y0〜16ではHeaderまで8pxしかなかった。y0〜8へ修正し16px確保</strong></td>
</tr>
<tr>
<td>G 図</td>
<td>8図法の意味・適用時期を保持。新図を増やすための新課題は作らない</td>
</tr>
<tr>
<td>H Work</td>
<td>高さだけでは幅検証が不足。<strong>番号44＋gap12、CHECK列144＋gap24、Hint内幅624を追記</strong>。実文字幅で容量を再確認</td>
</tr>
<tr>
<td>I Reference</td>
<td>2図・28項目・スクロールを保持。索引を全図の展示場にしない</td>
</tr>
<tr>
<td>J AIテンプレ</td>
<td>入口・画像・作業・表・文書を別構図にした。全ページの円・Card化なし</td>
</tr>
</tbody>
</table>
<h3 id="第2回d1--d22026-10-08">第2回：D1 → D2（2026-10-08）</h3>
<p>D1を、色の状態誤認・縮小・再利用時の実装条件から再点検。目次12リンクの文字幅、Hint/Challengeの実背景コントラスト、4パターンのFlat図形12個の外接矩形を計算した。外部仕様はFont Awesome・Inter・W3C・Slidev・Viteの一次資料と照合した。</p>
<table>
<thead>
<tr>
<th>項目</th>
<th>点検結果・修正</th>
</tr>
</thead>
<tbody>
<tr>
<td>A 変化が分かるか</td>
<td>p1・p4・p7・p11・索引の主役を再照合。印象の合格は実装後に持ち越す</td>
</tr>
<tr>
<td>B White / RGB</td>
<td><strong>p9の全96の赤は「全部変更」と読めるため中立太字へ明記</strong>。Hint面6.62:1・Challenge面8.13:1を追記</td>
</tr>
<tr>
<td>C Typography</td>
<td><strong>目次の番号列を含む幅が未定だったため32＋8＋292を明記</strong>。最長リンク約270px、初稿の高さ予算は維持</td>
</tr>
<tr>
<td>D 日英</td>
<td>5画面の英語は分類、指示は日本語。無意味なcaption・同じ語の連続ラベルを追加しない</td>
</tr>
<tr>
<td>E Icons</td>
<td>確認前list／確認後checkの区別、Rと再実行の違い、Freeの権利表記を再確認</td>
</tr>
<tr>
<td>F Shapes</td>
<td>12個すべて指定域内。blurは予約島でclip。<strong>再利用SVGのclip/filter ID衝突対策を実装条件へ追記</strong></td>
</tr>
<tr>
<td>G 図</td>
<td>代入の逆矢印、True/Falseの正誤色、randomの予測図を排除。局所凡例とUI意味色を分離</td>
</tr>
<tr>
<td>H Work</td>
<td>p9右362px、左上限358.4px、Main368px。CHECK613〜685で統一。フォント差は未検証と明記</td>
</tr>
<tr>
<td>I Reference</td>
<td>固定navとスクロールの役割、既存2図と28リンク、戻り先を保持。PDF課題を解決済みにしない</td>
</tr>
<tr>
<td>J AIテンプレ</td>
<td>色・形を増やすことを目的にしない。任意blur・noise・motionの非必須性を再確認</td>
</tr>
</tbody>
</table>
<h3 id="改訂履歴">改訂履歴</h3>
<ul>
<li>D0：現行画面の監査、4キーワード、RGB、Typography、4パターン、5ワイヤー、Workグリッドを作成。</li>
<li>D1：第1回レビュー後、上端の装飾安全域とWork内の横幅・Hintの余白を補正。</li>
<li>D2：第2回レビュー後、p9の選択前の色、目次番号列、実背景のコントラスト、SVG IDの一意性を補正。仕様策定版として確定。実装・教室検証は未完了。</li>
</ul>
<h2 id="16-未検証事項">16. 未検証事項</h2>
<ul>
<li>72px日本語・Inter分類・RGB図形の組合せの実ブラウザー描画、Windows fontの折返し、投影での印象。</li>
<li>Work右欄の最長Hintと左手順8行上限、p1の目次折返し。サイズ・色計算は行ったがv0.5 DOMの収まりは未検証。</li>
<li>任意blurのclip・export再現性、Font Awesomeとフォントの最小bundle・ライセンス通知の同梱方法。</li>
<li>ユーザー背景の実ファイル、容量・読み込み失敗時のfallback、サブパス配信。</li>
<li>スクロールReference・開閉HintのPDF配布は既存からの残課題。本書で解決済みとはしない。</li>
<li>実装順は代表5画面＋Work p8/9の配置検査 → 視覚レビュー → 残り本編へ展開。今回はこの実装を開始しない。</li>
</ul>
<h2 id="17-代表7画面の実装検証2026-10-08">17. 代表7画面の実装・検証（2026-10-08）</h2>
<h3 id="171-適用範囲と構成">17.1 適用範囲と構成</h3>
<ul>
<li>実装済み：p1 Overview、p4 Observe、p7 Work <code>[8-1-1]</code>、p8 Work <code>[8-1-2]</code>、p9 Work <code>[8-1-3]</code>、p11 Review、Reference Index。</li>
<li>未対象：p2・p3・p5・p6・p10・p12とReference詳細4ページ。Python「変数・代入」は従来のv0.4を維持する。</li>
<li><code>identity: v05</code>をfrontmatterへ明記し、<code>.v05</code>内だけに色・文字・配置を適用。新規部品は<code>VisualBackground.vue</code>と<code>LessonIcon.vue</code>の2つ。既存layout 2つとTryBlock/CheckBlockを限定的に拡張した。</li>
<li>Font Awesome Free Classic Solid 7.3.1 / SVG core 7.3.1 / Vue wrapper 3.3.3。使用7種（book / bug / code / folder / game / list / search）を個別import。全スタイル登録・CDNなし。ライセンス通知を<code>slides/public/licenses/</code>へ置き、配布buildへ同梱する。</li>
<li>日本語font stackと既存等幅stackを保持。英語はInterがあれば使い、なければsystem sans。新規font取得なし。</li>
<li>背景4パターンはFlatのみ。外部画像・blur・noise・animation・filter・clipPath ID・乱数なし。<code>none</code>では何も描画せず白地になる。ユーザー背景ファイルへの差し替えは将来の未実装機能。</li>
</ul>
<h3 id="172-視覚上の変化と数値">17.2 視覚上の変化と数値</h3>
<table>
<thead>
<tr>
<th>対象</th>
<th>v0.4以前との差・実装結果</th>
</tr>
</thead>
<tbody>
<tr>
<td>p1</td>
<td>52px一行から72/84px二行へ。「設定」の濃い赤、OVERVIEW、RGB装飾島。目次12件と到達点・工程は保持</td>
</tr>
<tr>
<td>p4</td>
<td>48px見出し＋OBSERVE/gamepad。画像の名札と問いに同じ3種マーカー。元PNG・対象位置・問いの内容は不変</td>
</tr>
<tr>
<td>p7〜9</td>
<td>WORK、検索の青、32px手順番号、共通Surface。p7の5・p8の4だけ赤い下線。p9の候補96は中立太字</td>
</tr>
<tr>
<td>p11</td>
<td>REVIEW/list、48px見出し、初期値32px、対象マーカー。5行・初期値5/4/96/96/96は保持</td>
</tr>
<tr>
<td>索引</td>
<td>REFERENCE/bookとカテゴリ4アイコン、白地の小図。名前の括弧は青、値は赤。28リンク・座標図・scrollを保持</td>
</tr>
</tbody>
</table>
<p>仕様の主要anchorは変更なし。実装時の細部は次のとおり。</p>
<ul>
<li>Work Surfaceの最小高は3ページとも368px。内容量330.3/362pxとは区別し、外形も一致させた。</li>
<li>CHECKの英語＋iconと日本語「確認」は144px列内の二行。確認本文の始点は共通y613、末端はy685以内。</li>
<li>p11のtableは罫線の端数を含み実測404.5px（設計404）、説明開始y608.5。本文下端は約648.8で安全域内。</li>
<li>p1の工程下端は約686.95px（設計684）。inline code等の行箱差を含むが、安全域688内で、文字を縮小・削除していない。</li>
<li>p9のHint末尾とCHECK第2文、p7の「VS Code」は短いnowrap spanで語・文をまとめた。文言や情報量は変更していない。</li>
</ul>
<p>Workを同倍率で撮影し、DOM座標を1280×720へ正規化して比較した。丸め表示は次表。1280×720、1366×768、1024×768のすべてで3ページ間の最大差は0px（計測精度0.01px）。</p>
<table>
<thead>
<tr>
<th>要素上端</th>
<th style="text-align:right">p7</th>
<th style="text-align:right">p8</th>
<th style="text-align:right">p9</th>
</tr>
</thead>
<tbody>
<tr>
<td>Title</td>
<td style="text-align:right">96</td>
<td style="text-align:right">96</td>
<td style="text-align:right">96</td>
</tr>
<tr>
<td>Target</td>
<td style="text-align:right">164</td>
<td style="text-align:right">164</td>
<td style="text-align:right">164</td>
</tr>
<tr>
<td>Main / Surface</td>
<td style="text-align:right">216</td>
<td style="text-align:right">216</td>
<td style="text-align:right">216</td>
</tr>
<tr>
<td>Check Divider</td>
<td style="text-align:right">600</td>
<td style="text-align:right">600</td>
<td style="text-align:right">600</td>
</tr>
<tr>
<td>CHECK本文</td>
<td style="text-align:right">613</td>
<td style="text-align:right">613</td>
<td style="text-align:right">613</td>
</tr>
</tbody>
</table>
<h3 id="173-実装後の自己レビュー2回">17.3 実装後の自己レビュー2回</h3>
<p>Presentationsスキルの視覚監査を使い、仕様段階のレビューとは別に、実画面で2回実施した。</p>
<p>第1回：1366×768の全7画面を確認し、旧p1・p7・p11・索引の画像とも比較。</p>
<table>
<thead>
<tr>
<th>観点</th>
<th>結果・修正</th>
</tr>
</thead>
<tbody>
<tr>
<td>A 差が見えるか</td>
<td>タイトル二行・大きな文字・英字層・赤い値・32px番号が明確に変化。図形だけの追加ではない</td>
</tr>
<tr>
<td>B RGB Identity</td>
<td>白主役とRGBを維持。CHECKは中立、p9の3値は選択前の中立色</td>
</tr>
<tr>
<td>C Typography</td>
<td>72/48/26/32pxを画面・computed styleで確認。p7の「VS Code」の途中改行をnowrapで修正</td>
</tr>
<tr>
<td>D 日英</td>
<td>分類は英語、操作・目的は日本語。新たなWORK番号なし</td>
</tr>
<tr>
<td>E Icons</td>
<td>役割に合う7種のみ、文字の代替なし。未確認CHECKにはlist</td>
</tr>
<tr>
<td>F Shapes</td>
<td>外周とp1予約島に限定。実画像・本文・コードへの重なりなし</td>
</tr>
<tr>
<td>G Alignment</td>
<td>3ページのTitle/Target/Main/Divider/CHECKを実測し同位置。背景も同形・同座標</td>
</tr>
<tr>
<td>H Reference</td>
<td>青い変数名がリンクに似ていたため、名前文字を中立へ戻し括弧だけ青に修正</td>
</tr>
<tr>
<td>I 情報設計</td>
<td>本編12ページ・目次12件・索引28件・全Notes・コード例を維持</td>
</tr>
<tr>
<td>J テンプレ化</td>
<td>入口／画像／作業／表／索引の差を保持。Card追加・gradient・全ページの浮遊円なし</td>
</tr>
</tbody>
</table>
<p>第2回：1024×768・1280×720、全Hint、Presenter、Reference最下部を再確認。</p>
<ul>
<li>p9 Hintの「す。」だけの折返しを避けるため「元の値は96です。」を一まとまりにした。CHECKも文の切れ目で折返し、末尾だけの行をなくした。</li>
<li>全8段階のHintをキーボードで開閉。文字は予約枠内、確認本文はy613のまま。font縮小・隠しscroll・内容削除はしていない。</li>
<li>図の文字・罫線・マーカーを縮小画面で確認。Referenceの座標図は中立線を維持し、リンクの青と混同しない。</li>
<li>未対象10画面は変更前後の1366×768スクリーンショットがバイト一致。DOM主要矩形・本文も一致した。</li>
<li>7画面の本編内容で安全域外へのはみ出しなし。Referenceのスクロールは意図した仕様。教室での可読性の合格判定とは区別する。</li>
</ul>
<h3 id="174-機能整合残課題">17.4 機能・整合・残課題</h3>
<ul>
<li>既存devサーバーで対象7画面・未対象10画面を確認。通常build、<code>--base /course/</code>のbuildが成功。サブパスの静的配信でもHint・Referenceの戻り・reload・Presenter/Notes・アイコンを実確認した。</li>
<li>Referenceへ元Workの<code>from</code>を引き継ぎ、カテゴリ移動・項目直接リンク・reload後も元Workへ戻れる。直接訪問はLesson一覧へ。Tab・Space・上下キー、focus表示、本文scrollを確認。</li>
<li>Presenterに現在／次の画面・Font Awesomeが表示され、Notesの6項目が利用できる。Hintはページ送りと独立した既存の開閉操作を維持。</li>
<li>ゲーム実画像が正常読込。背景は外部asset非依存、noneでも本文が成立する。PNG欠損等の既存ゲーム側fallbackを変更する作業ではない。</li>
<li>STARTのID・初期値・配布名と一致。RはGame Over後のRestart、変更反映は保存→ESC→再実行。Game / Lesson / assets / カリキュラム / docs/11〜13は変更していない。</li>
<li>残課題：Windows実機・代替font・投影後方席、PDFでのスクロールReferenceとHint収録。新しい背景画像への差し替え・Inter配布は未実装。</li>
<li>既存の標準コードCSS minify警告2件は継続。npm auditは21件（low 3 / moderate 8 / high 10、Font Awesome該当なし）を通知した。既存Slidev依存系の更新は今回の範囲外とし、一括自動修正は行っていない。</li>
</ul>
<h2 id="18-本編12ページのvisual-rules-v052">18. 本編12ページのVisual rules v0.5.2</h2>
<p>優先順位は学習内容・教材UX → 採用済みp1/p2のVisual Identity → docs/13・本書の視覚規則。p1 Overviewとp2 Indexの構図は維持し、他ページへそのまま複製しない。旧13ページのp4 PLAYとp5 OBSERVEをp4へ統合し、以降を1ページ繰り上げた。目次分離前の旧12ページ構成とも異なる。</p>
<table>
<thead>
<tr>
<th>実ページ</th>
<th>役割・主役</th>
<th>固定composition</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>OVERVIEW・実ゲーム、3つの到達点、FILE</td>
<td>overview-a</td>
</tr>
<tr>
<td>2</td>
<td>INDEX・12件の目次を2列（6＋6）</td>
<td>index-a</td>
</tr>
<tr>
<td>3</td>
<td>SETUP・実行手順と配布フォルダ</td>
<td>setup-a</td>
</tr>
<tr>
<td>4</td>
<td>PLAY・608×456の実ゲーム全景、操作、4対象と問い、記録</td>
<td>play-a</td>
</tr>
<tr>
<td>5</td>
<td>REVIEW・対象／動き・条件／結果の対応表</td>
<td>rules-a</td>
</tr>
<tr>
<td>6</td>
<td>CONCEPT・コードだけの暗い面、白地の説明、名前／値、ラベル一覧</td>
<td>concept-a</td>
</tr>
<tr>
<td>7〜9</td>
<td>WORK・固定ID、手順、コード、Hint、CHECK</td>
<td>work-a / work-b / work-c</td>
</tr>
<tr>
<td>10</td>
<td>TUNE・難しさの尺度、通常調整と任意のCHALLENGE</td>
<td>tune-a</td>
</tr>
<tr>
<td>11</td>
<td>REVIEW・設定名と初期値の5行一覧</td>
<td>review-a</td>
</tr>
<tr>
<td>12</td>
<td>REFLECT・変更前後、結果、次の試行、保存</td>
<td>reflect-a</td>
</tr>
</tbody>
</table>
<ul>
<li>白を基調にRGB、濃い中立色、強いTypography、大きくcropしたblur geometryを使う。背景はページ別の固定CSS構図、通常3形状、Reflectのみ2形状。p3以降の形状は140〜480px、blur 8〜24pxを使い分け、Reflectは低いopacityで静かにする。時刻・乱数・animation・外部asset・SVG filter IDを使わない。形状のblurとcropは背景層内で処理し、文字・操作領域を隠さない。</li>
<li>p3以降の見出しは48px/60・bold〜heavy、本文26px、Section 28px、英語分類20px。手順番号32px、表24px、初期値28px。既存日本語・英語・等幅font stackを使い、新しいfont取得を必須にしない。</li>
<li>青は検索・番号・Navigation、赤は変更値、緑は観察済みの結果または対象識別、amberはHint、紫はCHALLENGE。本文全体を着色しない。背景色は状態や正誤を表さない。</li>
<li>ConceptとWorkの暗いコード面は<code>#1E1E1E</code>、名前<code>#9CDCFE</code>、文字<code>#E6EDF3</code>、変更値<code>#FF8888</code>。実際のコードだけを入れ、日本語説明・名前／値の注釈・ファイル見出し・予想・Hintは外の白地に置く。変更値には下線も付ける。3つのサイズ値64は選択前のため中立色。偽のwindow dots・terminal・全画面dark化は行わない。Referenceへのdark適用は今回の対象外。</li>
<li>Conceptは名前と値を括弧・引出線で対応させ、静的対応を矢印で表さない。初期値、代入の説明、EDIT/READ/SYSTEMの意味は維持する。</li>
<li>WORK 3ページのTitle y96、Target y164、Main y216、CHECK Divider y600、CHECK本文 y613を共通gridで固定する。短い動詞中心の手順へ整理するが、検索・予想・保存・ESC・再実行・比較は省かない。Hint数3/3/2と同時1段階表示を維持する。</li>
<li>CHECKはlistアイコン＋英語CHECK。日本語の確認条件を常時表示し、重複する見出し「確認」は省く。未確認の条件をチェックマークや緑の成功面にしない。</li>
<li>Font Awesome Free Classic Solidを継続。SETUPはfolder、PLAY/OBSERVE/TUNEはgame、CONCEPT/WORKはcode、REVIEW/CHECKはlist、REFLECTはsave。見出し・箇条書きの全件へiconを付けない。</li>
<li>PLAYの観察表とルール表ではplayer / enemy / itemの既存実スプライトと名前を併用し、抽象circle / triangle / squareは廃止。接触は衝突アイコン＋中立色の名前とし、4カテゴリを縁なしで揃える（19節）。ゲーム画像の名札は対象名だけで、方向・得点・接触結果を先に教えない。初期値表は全5行iconなしとする。</li>
<li>本編リンクは青い下線でなく、文字＋矢印やNavigationの配置で識別し、hoverの薄い背景・左accent、3px focusで操作位置を示す。Workの固定ID・既存route・Reference往復経路を保つ。TUNEの尺度は静的な選択案であり、クリックするsliderや採点UIではない。</li>
</ul>
<p>検証は4画面サイズ（1280×720、1366×768、1024×768、320×180）、全Hint、Work anchor、実画像4:3、Presenter、Navigation、STARTの固定IDと初期値を対象とする。320×180は縮小構図の確認で、本文を読む推奨サイズではない。Windows実機・投影後方席・児童の単独利用、PDFでのHint／スクロールReference全文収録は別途確認する。Game / Lesson / assets / カリキュラムは変更しない。統合ページのNotesは遊ぶ5分＋観察15分＝20分とし、学習内容・記録の保管・机上配分70分を維持する。</p>
<h2 id="19-後続lessonの共通テンプレート規則">19. 後続Lessonの共通テンプレート規則</h2>
<p>適用対象はSETUP / PLAY / OBSERVE / WORK / TUNE / REVIEW。既存の<code>lesson</code> layoutで<code>identity: v05</code>と固定<code>composition</code>を指定すると、共通CSSの<code>.v052</code>と以下のutilityが有効になる。p1/p2の入口構図や、画像・図・表を主役とするページ間の違いは維持する。新しいLessonでも以下のCSS utilityと既存Componentを使い、ページ固有の同等CSSを追加しない。手順・CHECKの短文化は本節を優先し、docs/12の「操作は〜します」という旧コピー規則を手順へ機械的に適用しない。学習内容・固定ID・正しい操作条件は短文化のために省かない。</p>
<h3 id="191-step--work">19.1 Step / WORK</h3>
<ul>
<li>手順は<code>&lt;ol class=&quot;lesson-steps&quot; role=&quot;list&quot;&gt;</code>。番号はCSS counterで<code>01 / 02 / 03 / 04</code>、32px・Blue・bold・等幅数字。本文は26px/40・Neutral。番号を本文へ二重に書かない。</li>
<li>コピーは「IDを検索」「数字を変更」「保存」など短い動作名を基本とする。「〜します／〜する」と句点の反復を避けるが、対象・条件・操作順が曖昧になる省略はしない。</li>
<li>目安は最大4項目、1項目1操作。保存→終了→再実行のような確認に不可欠な連続操作は、4項目内で明示してよい。予想・比較・正の整数等の制約は残す。</li>
<li>各<code>li</code>は左padding60px・最小行高88px、行間をDividerで区切る（最終行は線なし）。補足が必要な時だけ<code>&lt;span class=&quot;step-detail&quot;&gt;</code>を使い、24px/36・Mutedで1行まで。主文＋補足で2行までを基本にする。</li>
<li>SETUP / WORK / TUNEで同じ番号・文字・間隔・Dividerを使う。WORKの外側anchorは18節のまま。行が長い場合は短文化または内容単位を見直し、文字縮小・隠れたscroll・CHECKへの重なりで解決しない。</li>
</ul>
<pre><code class="language-html">&lt;TryBlock file=&quot;month8-2.py&quot; target-id=&quot;[8-2-1]&quot; /&gt;
&lt;ol class=&quot;lesson-steps&quot; role=&quot;list&quot;&gt;
  &lt;li&gt;&lt;span&gt;編集する場所を開く&lt;/span&gt;&lt;/li&gt;
  &lt;li&gt;&lt;span&gt;右移動の計算を入力&lt;/span&gt;&lt;/li&gt;
  &lt;li&gt;&lt;span&gt;&lt;kbd&gt;Ctrl + S&lt;/kbd&gt; 保存&lt;/span&gt;&lt;/li&gt;
  &lt;li&gt;&lt;span&gt;&lt;kbd&gt;ESC&lt;/kbd&gt;で閉じて再実行&lt;/span&gt;&lt;/li&gt;
&lt;/ol&gt;
</code></pre>
<p>これは後続Lessonでの書式例。新しい作業・学習量を追加する指示ではない。</p>
<h3 id="192-check">19.2 CHECK</h3>
<p><code>CheckBlock</code>には観察可能な成功条件だけを1〜2文、描画時最大2行で入れる。「3体の敵の落ちる速さが変われば変更完了」のように対象と変化を明示する。操作説明・任意の比較・予想は手順かHintへ置き、CHECKで反復しない。比較条件（同じ時間・画面端に届く前等）は、判断に必要なら残す。見出しはlist＋英語CHECK、条件文はNeutral。未確認の作業を緑の成功面やチェックマークにしない。</p>
<h3 id="193-target-icon--tablegrid">19.3 Target icon / Table・Grid</h3>
<ul>
<li>同じカテゴリ群では、全行に「縁なしicon / sprite＋対象名」を付けるか、全行なしにする。一部だけ省略しない。iconを枠・丸い容器・Cardで囲まず、文字を省かない。</li>
<li>PLAY / OBSERVE / ルール表の物体は実物と一致するスプライトを優先する。Game 1は<code>TargetIcon</code>で共通<code>game1/assets/images/</code>のplayer / enemy / itemを一か所から参照し、32×32pxで表示する（整列用slotは40px、囲み線なし）。原素材32px、ゲーム内表示64px、教材UIアイコン32pxを区別する。Slidev制作だけを理由にassetsを編集・複製しない。接触はMutedのFont Awesome Free <code>burst</code>で、ゲーム内の物体を表さない。対象名はBlue / Red / Dark Green / Muted。画像注釈は対象名＋正確な引出線だけとし、spriteや答えを重ねない。</li>
<li>対象と問い、条件と結果、設定と初期値などの横対応はtableまたは整列Gridで表す。各行をCard化しない。対象列は太字、問い・条件はNeutral／Muted、行Dividerと揃った列位置で読む順を示す。</li>
<li>観察用は<code>target-table</code>と<code>target-name--player / --enemy / --item / --contact</code>を使用。通常の対象列196px、残りを質問列へ。行見出しに<code>scope=&quot;row&quot;</code>、列見出しに<code>scope=&quot;col&quot;</code>を付ける。統合PLAYは右544px、対象列208px、残りを短い問いへ。行高は最低60px（内容で増える）、Dividerで4行を分ける。操作と観察は別の見出しで分離し、答えを先に示さない。</li>
<li>初期値Reviewは全行markerなし。見出し24px/bold、ID24px/Blue＋矢印リンク、設定名24px/等幅・medium、初期値28px/bold・Navy <code>#142B4A</code>、効果24px/medium・Dark Green。数値は右揃え・等幅数字。「初期値」見出しと配布時の値である説明を常に併記する。初期値を変更値のRedにしない。</li>
</ul>
<h3 id="194-shortcut-ui--color-hierarchy">19.4 Shortcut UI / Color hierarchy</h3>
<ul>
<li>キー入力は<code>&lt;kbd&gt;</code>を使う。背景<code>#1E293B</code>、文字<code>#F8FAFC</code>、等幅20px、3px角丸、下辺を持つ静的keycap。矢印キーは26px。ファイル名・変数名・IDは<code>code</code>であり、keycapにしない。キーはbuttonではなく、Tab停止やhover状態を追加しない。</li>
<li>生徒向け操作は配布環境のショートカットで統一し、OS別の補足はReferenceまたはNotesへ。SETUP本文にMac/Windowsの分岐を増やさない。実行はPython拡張の右上▶を案内する（<a href="https://code.visualstudio.com/docs/python/run" target="_blank" rel="noopener noreferrer">VS Code公式</a>）。環境不足時の案内は短くし、授業前の準備要件はNotesへ残す。</li>
<li>共通色はBlue＝番号・検索・Navigation、Red＝変更値、Muted＝補足、Amber＝Hint、Purple＝Challenge。全文を同じ黒・weightにせず、対象・操作・値・結果の役割ごとに強弱を付ける。色だけで意味を伝えない。</li>
<li>Greenには限定したローカル表現もある：TUNEの「ちょうどいい」の文字とpoint、Reviewの「変わること」列。前者は名前＋中央位置で識別する選択肢、後者は設定の働きであり、達成済み・自動採点を意味しない。CHECKへ転用しない。</li>
</ul>
<h3 id="195-code-surface--label-list">19.5 Code Surface / Label list</h3>
<ul>
<li>Dark Code Surfaceの責務は実際のコードだけ。CONCEPTは<code>.name-value-code</code>、WORKは<code>.code-sample</code>に暗い背景を付ける。説明・補足・コード見出しは白地の通常テキスト。コード全体を説明用の容器で包んで暗くしない。</li>
<li>名前／値の意味はコード外の括弧で対応させる。CONCEPTの<code>.label-list</code>は<code>dt</code>＝強いラベル、<code>dd</code>＝Neutralの意味。組ごとに同じ高さ・共通の横Divider、最終組は線なし。EDITはRed、READはBlue-gray、SYSTEMはNeutral。3Cardに分けない。</li>
</ul>
<h3 id="196-本編index--ページ統合">19.6 本編Index / ページ統合</h3>
<p>本編Markdownの順番を基準に、<code>page: 1…12</code>と<code>navigation.ts</code>の名前付きrouteを同じ順に更新する。Indexは自身を含む同順12リンク（6＋6）、番号はページ番号であり固定コードIDではない。Headerの分母は<code>lessonPages</code>の件数から取得する。削除ページへの内部リンク・戻り先を残さず、Referenceの<code>from</code>は存続routeだけ許可する。統合時はNotesと進行表も同期し、学習時間・内容を足し引きしない。現状のIndex本文はMarkdownで管理し、生成システムや独自Routerは追加しない。</p>
<p>実装は共通CSSと小さな既存Componentを使う。今回の追加部品は、PLAYとルール表で反復する実アセット参照を集約した<code>TargetIcon</code>だけ。受入確認は、4サイズ・全Hint・WORK anchor・Presenter・Reference往復と、対象LessonのSTARTとの一致を含める。</p>
<h3 id="197-設定値を変更する教材">19.7 設定値を変更する教材</h3>
<p>初期値を示す → 生徒が別の値を選ぶ → 結果を観察、を基本とする。変更値は原則として固定指定しない。同じ値で比較する必要がある時だけ例外とする。Hintは変更箇所・変数名・保存／再実行の支援までを基本とし、例値を出すなら「例」と明記する。CHECKは速くなったかではなく、選んだ変更による変化を確認する。</p>
<h3 id="198-concept--workの説明品質">19.8 Concept / WORKの説明品質</h3>
<p>2026-10-10、Month8-2の説明改善とページ責務整理で実描画確認。既存Visual Identityは維持する。</p>
<ul>
<li>題名は「座標を知る」「右へ動かす」のように、学ぶ概念・作業を直接示す。広告的なコピーにしない。必要なConceptでは48px級の太い短題名＋<code>.concept-subtitle</code>（26px / 40px / 400、Muted）へ分け、題名へ説明を詰め込まない。</li>
<li>CONCEPTの責務は「何を理解するか・必要な断片・意味」のみ。コード全体の意味なら<code>.code-meaning-row</code>で実コードと説明を隣接させ、部分対応が必要なら19.12のAnnotationを使う。条件を説明するなら条件行だけを抜粋し、座標更新まで混ぜない。単独実行できない断片はNotesで抜粋範囲を明確にする。作業手順・記入位置・VS Code操作・長いHintはWORKで扱う。</li>
<li>READ＝読む・意味を確認、EDIT＝今回変更する、SYSTEM＝今は変更しない基盤。CONCEPTに編集がなければEDITや無関係なSYSTEM案内は載せない。READはその場の活動ラベルとして使え、元PythonがEDITの場合はNotesで出典を示し、元コードの区分を変更しない。「読むだけ」「暗記しなくていい」を重ねない。API名そのものの暗記を到達点にしない。</li>
<li>POINTは新しい関係を要約する役割がある場合のみ任意で使う。既にコード横で説明した同じ意味を下部で繰り返さない。Month8-2 p5では重複するため削除した。</li>
</ul>
<h3 id="199-支援の段階と追加作業">19.9 支援の段階と追加作業</h3>
<ul>
<li>WORKは「どこへ・何を書くか」を明示する。最初のWORKは変数の意味・記入箇所・考える材料・成功条件を丁寧に示す。「前回の変数」のような参照だけで済ませず、例えば<code>player_speed</code>＝「1回で動く量」とその場で確認する。次は右移動との違い、転移WORKはx→yのように既習を探して使う自力比率を上げる。全WORKを同じ説明量へ揃えない。</li>
<li>固定ID＋EDIT＋実対象コードで位置が分かる場合、架空のVS Code画面や空行を作らない。STARTの穴埋めコメントがあれば省略せず実コードを示し、実際に編集する右辺とコメントを区別する。完成コードは最後のHintのみとし、先に問い・座標・速さの材料を示す。長い実コードは文字を縮めず、必要なWORKだけ横幅を配分し直す。Month8-2 p6は392＋760px、縦anchorは96／164／216／600のまま。</li>
<li>SHOULDは講師Notesで維持し、生徒画面では<code>.extension-label</code>の小さな<code>+ EXTRA</code>で示す（18px / 28px、Muted、軽い縦線。pillにしない）。これはCORE内の追加項目で、REFLECT後のOPTIONAL CHALLENGE／QUIZと区別する。COREは本編のページ列であり、EXTRAまで全員必須という意味ではない。既存MUST／SHOULD／CHALLENGEの範囲は変えず、上下端など元Pythonの発展課題も必須へ繰り上げない。設定調整に無関係な画面端の発展を混ぜない。</li>
</ul>
<h3 id="1910-座標図reviewの照合">19.10 座標図・Reviewの照合</h3>
<ul>
<li>座標図は実spriteの配置領域に点線のboundsと左上のanchor pointを置く。輪郭と領域を区別し、x/yの引出線をその点へ対応させる。初回はRectの詳細を要求しない。xはBlue、yはTechnical Teal。方向説明は方向／符号＋座標／日本語の3列gridで、全行の開始位置を揃える。＋はRed、−はBlue、x/y自体は図と同じ色を保つ。方向名・矢印・符号・日本語も併記して色だけに依存しない。</li>
<li>Reviewは一番探す列を最も強くする。移動一覧ではキー／方向をDark bold、識別子はBlue / monospace、数字はtabular、補足はMuted、結果は控えめなAccent。行Dividerと列headerを区別し、全列を同じ黒・weightや虹色にしない。<code>.review-scan</code>は移動一覧で使うopt-inで、他Lessonへ機械的に強い列をコピーしない。</li>
<li>視覚検証はAGENTS.mdのheadless方針に従う。実画面・縮小画面とDOM計測を併用し、ソースやbuildだけで合格にしない。Month8-2の実装・評価はdocs/15を参照。</li>
</ul>
<h3 id="1911-indexのページ役割">19.11 INDEXのページ役割</h3>
<ul>
<li>INDEXは数字→日本語題名→必要なPage Type Tag→矢印の横配置、2列・題名優先。番号は左固定、題名は最も広い可変領域、Tagは右寄せ、矢印は最右。Tagがない行は題名が分類欄まで使える。<code>PageTypeTag</code>は14px / 20px / 700、uppercase、tracking .06em、padding 3px 8px、radius 4px、白文字・色付きbox・borderなし・shadowなし。幅は文字量に合わせ、同幅pillにしない。本編の分類列は配置用98px、任意導線は長いCHALLENGEに合わせ110pxを確保し、題名との間隔を12px以上残す。</li>
<li>Tagは役割差が重要なCONCEPT／WORK／CHALLENGE／QUIZだけに限定する。OVERVIEW／INDEX／SETUP／PLAY／TUNE／REVIEW／REFLECTは題名だけで示す。全ページを分類しない。3種のLEARN／WORK／OPTIONAL案を実描画比較したが、OPTIONALが下段見出しと重複し、読む／答えるの違いを隠すため4種を採用。Month8-1は本編4＋任意2、Month8-2は本編6＋任意2のTagを表示する。ページ順・題名・学習範囲は変えない。</li>
<li>Page Typeは画面の役割、EDIT／READ等はコードに対する活動、固定IDはVS Code内の検索先。それぞれを代用品にしない。INDEXの分類欄へ固定IDを載せず、WORKのCtrl + F導線とReviewの参照表で維持する。</li>
<li><code>.typed-index</code>と<code>PageTypeTag</code>は共通CSS・小さな共通部品。Month8-1／8-2のINDEXと任意導線に同じ表現を使う。Tagの文字と日本語題名を必ず併記し、色だけに依存しない。EXTRAは分類ではなく追加範囲の補助表示。OPTIONALへの導線は本編のリストと別領域を維持し、題名→Tag→矢印とする。hoverは薄い背景・accent line・矢印の移動だけで、本文を青文字化せずTag色も変えない。ページ内の分類見出しやEDIT／READのActivity Tagは別の役割で、INDEXのboxへ一括置換しない。</li>
</ul>
<p>Tag colorは次の4種の固定対応とする。WORKをChange Redにしない。</p>
<table>
<thead>
<tr>
<th>Page Type</th>
<th>色</th>
</tr>
</thead>
<tbody>
<tr>
<td>CONCEPT</td>
<td>Violet <code>#6d28d9</code></td>
</tr>
<tr>
<td>WORK</td>
<td>Blue <code>#1d4ed8</code></td>
</tr>
<tr>
<td>CHALLENGE</td>
<td>Purple <code>#7e22ce</code></td>
</tr>
<tr>
<td>QUIZ</td>
<td>Teal <code>#0f766e</code></td>
</tr>
</tbody>
</table>
<h3 id="1912-code-annotationの共通visual-grammar">19.12 Code Annotationの共通Visual Grammar</h3>
<ul>
<li>使用条件は、コード内部の「部分と意味の対応」が理解に必要な場合のみ。左はDark Code → 直下のAnnotation（部分の意味）、右は処理全体の短い意味として同じ行に対応させる。説明は白地へ置き、Dark Surfaceには実コードだけ。コード全体の意味だけで足りる箇所、長い処理、WORK、自力で考える箇所へ機械的に注釈を足さない。</li>
<li><code>CodeAnnotation</code>は実コードと、重要な部分のmatch／日本語label／kindだけを渡す小さな表示部品。matchはコードの出現順・重複しない部分として指定する。コードの文字・大小文字・空白・記号を変えず、意味単位の短い断片に使う。全トークンを注釈しない。コード28px / 40px、注釈24px / 32px、短い意味26px級。文字を縮めて注釈を詰め込まない。</li>
<li>静的なコード部分対応は2pxのNeutral引出線／bracketとし、各tokenの実DOM幅から求めた中央x（left＋width÷2）・下端を起点にする。コードSurface端や行頭を代用しない。垂直直線を最優先し、説明が重なる場合だけgrid内で左右へ逃がし90度の折れ線にする。不要な折曲げを作らない。Code Annotationの斜線・矢印・ASCIIの線画は禁止。空間図・ゲーム画像へのSpatial / Image Annotationは別文法で、対象の視認性を優先し斜線も使用可。ラベルの開始位置は可能ならgridで揃え、token対応を優先する。フォント確定後・サイズ変化時に再計測し、Slidevの縮尺を補正する。線の交差・文字との衝突・誤った着地点を実画面で確認する。</li>
<li>Annotation側は日本語の意味説明だけをDark Neutralで表示し、token名を再掲しない。線もNeutral。コード本体のtoken色は変数Blue・Python構文Purple・キー定数Teal・API名Muted・実際の変更対象Redの同系色を維持し、暗いコード内では明るい色を使う。読むだけのMonth8-2 p5ではRedを使わない。コード→token中央の線→意味説明の順に読めるようにし、コード名の二重読解をなくす。</li>
<li>注釈の意味は引出元の部分と一致させる。Month8-2 p5の1行目は<code>keys</code>＝キーの状態を入れる変数と<code>pygame.key.get_pressed()</code>＝今押されているキーを調べる。2行目は<code>if</code>＝条件を調べると<code>K_RIGHT</code>＝右キーだけに絞り、keysの説明を反復しない。<code>keys</code>だけを「右キーの確認処理」と説明しない。式全体の意味は右の短文とNotesで対応させる。左704px・右448px・間32px、コード28px・注釈24px・全体説明28pxを確保し、下部導線に干渉しない。日本語は意味の切れ目で改行し、文字を縮めて収めない。bool・APIの内部・定数の仕組みの暗記は要求しない。Conceptに編集計算・穴埋め・VS Code操作を混ぜない。</li>
<li>Month8-1の名前／値図は、既存の実幅subgridと静的なbracketを維持する。変数名の線・ラベルはBlue、今回変更する値はRedへ合わせる。部品を無理に置換せず、Referenceなど対象外の図へ色変更を波及させない。</li>
<li>受け入れは両LessonのINDEX、Month8-2 p5、Month8-1 CONCEPTを4サイズ・原寸／thumbnailで確認し、コード一致・線の対応・非交差・色contrast・Navigation・Reference・Presenter／Notes・通常／サブパスbuildを含める。Game／Lesson Python／assets／固定ID／順序／CORE時間は変更しない。</li>
</ul>
<h2 id="20-テンプレート候補実装前の設計記録">20. テンプレート候補（実装前の設計記録）</h2>
<p>本節は実装前の案。目安時間・OPTIONAL QUIZ / CHALLENGEは23節で実装・共通仕様を確定した。以下の「未実装」は当時の記録であり、現行状態ではない。</p>
<h3 id="作業時間">作業時間</h3>
<p>SETUP・観察／記録・WORK・TUNE・CHALLENGEに、clock＋「目安 5分」形式の補助情報を置く案。Title右側を基本候補、WORKはTarget帯右側も比較する。Global Headerの目次・調べる・進捗とは分離する。Concept / Review等の講師説明には原則不要。単なる「5分」、期限、カウントダウン、速度差を圧迫する表示にしない。時間はNotesの机上配分に対応させ、実授業後に調整する。今回はUIもComponentも追加しない。</p>
<h3 id="bonus--quiz">BONUS / QUIZ</h3>
<p>REFLECTの後に任意のBONUSを置く案。本編1/12〜12/12から分離し、追加分は「BONUS 1/2」等の独立分母とIndexの別区画にする。通常のMUSTをここへ移さない。QUIZは2〜4問で、player_speed、enemy_speed、[8-1-3]、保存後の再実行など既習内容のみ。Blue / Green中心、CHALLENGEはPurple中心で同じIdentityを維持し、報酬・採点演出は足さない。発展は既存TUNEの難しさ調整・2設定比較・友達に遊んでもらう範囲を候補とする。未習構文・新MUSTを増やさない。今回はBONUS / QUIZ / 新CHALLENGEページを作成しない。</p>
<h2 id="21-統合ページconceptの実描画レビュー64px更新前の履歴">21. 統合ページ・CONCEPTの実描画レビュー（64px更新前の履歴）</h2>
<p>2026-10-09、Chrome、1280×720論理キャンバス。A＝既存の左全景／右操作・観察を進化、B＝上段操作バー＋下段観察台、C＝中央ゲーム＋周囲の問いを比較し、配置指定・読む順・既存Identityに最も合うAを採用した。分類は同じ画面でPLAY / OBSERVEを描画比較し、最初の行動が分かるPLAYを選択。日本語タイトルは「ゲームを遊んで、動きを見る」。実スプライト＋burstと汎用robot / bug / gem / explosionも描画比較し、実ゲームとの照合が速い前者を選んだ。</p>
<p>初稿では接触行が画面下端に達したため、Usability・情報密度を3と判断。操作欄の間隔を詰め、本文24〜26pxを維持して再描画。最終の観察表下端は論理686.59px。CONCEPTはSYSTEMラベルと説明の間に16pxを確保し、接して見える状態を修正した。単に読みやすいだけでなく、実画面を主役に対象照合→操作→観察の視線順を確認した。</p>
<table>
<thead>
<tr>
<th>評価（各5点）</th>
<th style="text-align:right">p4 PLAY</th>
<th style="text-align:right">p6 CONCEPT</th>
<th>実描画で確認した根拠</th>
</tr>
</thead>
<tbody>
<tr>
<td>Typography</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td>48px見出し、対象名とNeutral本文、独立した等幅コード</td>
</tr>
<tr>
<td>Composition</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td>4:3全景を主役にした左右構成／小さな暗いコード面と白地の意味</td>
</tr>
<tr>
<td>Color</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td>実ゲームRGBと対象色／変更値RedとNeutralの説明を区別</td>
</tr>
<tr>
<td>Visual Hierarchy</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td>操作と4観察行を分離／コード・注釈・意味一覧を別の層へ</td>
</tr>
<tr>
<td>Imagery</td>
<td style="text-align:right">5</td>
<td style="text-align:right">4</td>
<td>全景・sprite・引出線が実物一致／名前と値の括弧が実コード位置に一致</td>
</tr>
<tr>
<td>Consistency</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td>p1/p2と同じ書体・RGB・外周geometry、WORKの固定anchorを維持</td>
</tr>
<tr>
<td>Personality</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td>実ゲームが教材固有の主役、暗いコードの局所対比。汎用Cardにしない</td>
</tr>
<tr>
<td>Usability</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td>4行と記録指示が欠けない／ラベル・意味・Dividerの走査が可能</td>
</tr>
</tbody>
</table>
<p>追加評価：PLAYの情報密度4、CONCEPTのコード／解説分離5、ラベル走査性4。判定は <strong>PASS (visually verified)</strong>。Windows実機・教室投影・児童の利用は別途確認が必要。</p>
<p>Template Quality Review：Target Gridの再利用YES、Code Surfaceの責務YES、解説とコードの分離YES、Label listのDivider規則YES、統合後のIndex更新ルールYES。実装根拠は19.3・19.5・19.6節。</p>
<ul>
<li>4サイズ（1280×720、1366×768、1024×768、320×180）で本編12＋全Hint8＝80表示状態を撮影・DOM検査。画像欠損・内容のはみ出しなし、全景4:3。320×180は縮小構図の確認のみ。</li>
<li>本編pageは1〜12、Indexは12リンク・6＋6、navigationと同順。Headerは1/12〜12/12。標準Slidevの資料全体18枚（入口1＋本編12＋Reference5）とは区別する。</li>
<li>WORKのTitle y96、Target y164、Main y216、CHECK本文 y613が3ページ同位置。Hint3/3/2を開いても動かない。コード見出しも白地へ分離した。</li>
<li>12件のIndex遷移とReference往復・再読込、語句アンカー、Presenterの統合20分Notes・70分進行表・Reference往復を通常URLと<code>/course/</code>の双方で確認。削除routeの<code>from</code>は許可せずLesson一覧へ戻す。</li>
<li>通常buildと<code>--base /course/</code>のbuild成功。実行時エラーなし。既存Slidev由来のCSS minify警告2件は残る。</li>
<li>固定ID・初期値5/4/96/96/96・Game / MASTER / Lesson / assets / カリキュラムは不変。時間UI・BONUS / QUIZ・新CHALLENGEは未実装。</li>
</ul>
<h2 id="22-game-1の32px素材64px表示と任意変更">22. Game 1の32px素材・64px表示と任意変更</h2>
<p>2026-10-09。新しいArt Direction探索は行わず、v0.5.2のIdentity・本編12ページ・固定ID・Hint数3/3/2・70分のNotesを維持した。</p>
<h3 id="素材とコードの契約">素材とコードの契約</h3>
<ul>
<li>共通assetsのplayer / enemy / itemは配置済みのユーザー提供32×32px PNGを使用。元画像を64pxへ拡大保存しない。MASTERの同名3画像を共通素材へ同期した。背景・SEは不変。</li>
<li>MASTERと全Lessonのplayer_size / enemy_size / item_sizeは64。Month8-1 COMPLETEは既に64だったため変更不要。速度5 / 4、敵3体、100点、Game Over、Restart、演出は維持した。</li>
<li>Rect・fallback・scale・初期位置・境界・randomは既存size変数に従う。標準のplayer初期位置は(368,506)、画面内x=0〜736 / y=0〜536、item再配置y=60〜536、enemy再出現y=-64。736等の固定値を学習ロジックへ追加しない。</li>
<li><code>TargetIcon</code>は共通素材を32px表示（整列slot40px）。実ゲーム全景は<code>gameplay-64.png</code>へ差し替えた。実Pygame描画の800×600全景で、設定・撮影条件は<code>slides/public/game1/README.md</code>に記録。旧画像は履歴であり現行画面として使わない。</li>
<li>p7〜9は変更後の値を指定しない。初期速度5 / 4とサイズ64を示し、生徒が別の値を選ぶ。CHECKは変化を確認し、Hintは数字・変数名・保存／終了／再実行の支援へ。Reviewは現行p11で、初期値と変更値を分ける。</li>
<li>Referenceはsize・random範囲・Rectの最小整合のみ。Debugの5→10は「例」と明記し、入力指示にしない。構造・デザイン・項目数は変えていない。</li>
</ul>
<h3 id="実画像レビュー">実画像レビュー</h3>
<p>visual-design-directorの8軸を、p1・統合PLAY・p7〜9・Reviewのスクリーンショットで評価した。PLAYは新素材の実画面と32px対象アイコンを照合し、3体の敵・プレイヤー・アイテムを識別できる。WORKの暗いコード面と白地の問い、Reviewの中立色の初期値、RGBの視覚階層を保つ。ゲームを扱う教材固有の視線順・素材対応を根拠とし、「見やすい」だけでは合格にしていない。</p>
<table>
<thead>
<tr>
<th>評価（各5点）</th>
<th style="text-align:right">p1</th>
<th style="text-align:right">p4 PLAY</th>
<th style="text-align:right">p7</th>
<th style="text-align:right">p8</th>
<th style="text-align:right">p9</th>
<th style="text-align:right">p11 Review</th>
</tr>
</thead>
<tbody>
<tr>
<td>Typography</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
</tr>
<tr>
<td>Composition</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
</tr>
<tr>
<td>Color</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
</tr>
<tr>
<td>Visual Hierarchy</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
</tr>
<tr>
<td>Imagery</td>
<td style="text-align:right">4</td>
<td style="text-align:right">5</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
</tr>
<tr>
<td>Consistency</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
</tr>
<tr>
<td>Personality</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
</tr>
<tr>
<td>Usability</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
</tr>
</tbody>
</table>
<p>初稿のp9 Hintに「ほかの2／つ」、p8 Hintに末尾「です。」だけの折返しがあり、Typographyを3として修正。文のまとまり・短文化で再描画し、文字縮小やHint追加なしで上表へ再評価した。320×180は縮小構図の確認のみで、本文を読む推奨サイズではない。</p>
<h3 id="自己レビュー2回ah">自己レビュー2回（A〜H）</h3>
<table>
<thead>
<tr>
<th>観点</th>
<th>第1回</th>
<th>第2回</th>
</tr>
</thead>
<tbody>
<tr>
<td>A 96px残存</td>
<td>現行コード・教材・docsの旧size値を修正</td>
<td>旧版履歴と画面座標y96は明示して保持。現行sizeは64</td>
</tr>
<tr>
<td>B 素材／表示</td>
<td>MASTERの旧素材を共通32px素材へ同期</td>
<td>原画像32、ゲーム64、UI32を別々に照合</td>
</tr>
<tr>
<td>C 境界・random・Rect</td>
<td>size変数から派生する値を確認</td>
<td>736 / 536 / -64、Rectとfallback64を実行で確認</td>
</tr>
<tr>
<td>D Slides初期値</td>
<td>p9・Review・Notesを64へ</td>
<td>START・MASTER・配布版と一致</td>
</tr>
<tr>
<td>E Hint指定値</td>
<td>10 / 8の変更指示を削除</td>
<td>Hint3/3/2維持、Debugの例値は例と明示</td>
</tr>
<tr>
<td>F Reference</td>
<td>size・範囲・Rectを最小修正</td>
<td>項目アンカー・往復・元ページ復帰を確認</td>
</tr>
<tr>
<td>G Lesson差分</td>
<td>サイズ以外の構文木・固定IDを比較</td>
<td>未完成・穴埋め・START / COMPLETE差分は不変</td>
</tr>
<tr>
<td>H バランス</td>
<td>速度・敵数・得点を維持</td>
<td>回避余地増、取得は位置合わせが必要。自動調整しない</td>
</tr>
</tbody>
</table>
<p>バランス所感は縮小後の実画面と64pxの判定領域に基づく。透明部分を含む四角判定は従来どおり。教室での難易度・プレイ時間や児童の操作感は未実測のため、試遊で追加確認する。Windows実機・教室投影も未検証。</p>
<h3 id="検証結果">検証結果</h3>
<ul>
<li>MASTER・全Lesson計12ファイルを、assetsあり／読込失敗／assetsが存在しない単独コピーで実行。移動したdist6Lessonも同梱assetsあり／なしで実行し、合計48回を通過した。Pygame 2.6.1 / SDL dummy描画・音声と入力イベントを使う自動検証で、実機キー操作・音声の聴取とは区別する。</li>
<li>各Lessonに実装済みの4方向移動・画面端・敵3体の個別再出現・各敵との接触・item取得100点とrandom・5回Restartの状態と演出初期化・ESCを確認。未完成Lessonは従来の未完成状態を維持。サイズ代入だけを正規化した変更前後の構文木・固定IDは一致した。</li>
<li>全12ページとHint8状態を4サイズで撮影・DOM検査し、80表示状態で画像欠損・枠外のはみ出し・実行時エラーなし。WORK anchorとHint3/3/2、本編1/12〜12/12、Index12リンク、実全景4:3を維持した。</li>
<li>通常buildと<code>--base /course/</code>のbuildが成功。12リンクのIndex遷移、Reference往復・再読込・項目アンカー、Presenterの統合20分Notes・70分進行表を通常／サブパス配信で確認。既存Slidev由来のCSS minify警告2件は残る。</li>
<li>MASTER同梱3画像と共通素材、dist6Lessonの全assetsはバイナリ一致。共通素材・背景・SEは変更前と一致し、新素材を拡大保存していない。</li>
</ul>
<h2 id="23-目安時間optionalの共通lessonテンプレート">23. 目安時間・OPTIONALの共通Lessonテンプレート</h2>
<p>2026-10-09。v0.5.2のVisual Identity・本編12ページ・学習内容・固定IDを維持し、Month8-1に実装。23.1〜23.3はv0.5.4の共通仕様。23.4・23.5と24節は以前の実装記録として残す。</p>
<h3 id="231-timeestimate">23.1 TimeEstimate</h3>
<ul>
<li>生徒が実際に作業するページだけに付ける。説明・共有中心のConcept / Reviewには付けない。</li>
<li><code>TimeEstimate</code>はclock・「目安」・分数を一組で表示。制限時間・カウントダウン・達成状態ではない。clockはBlue <code>#2563EB</code>、「目安」はBlue-gray <code>#475569</code>、時間はDark Blue <code>#1E40AF</code>。赤・緑・Amberや大きなpillを使わない。</li>
<li>1280×720で右端x1232、分類labelと同じy72〜96のhorizontal bandへ固定。clock26px、「目安」24px / 600、時間26px / 700、gap10px。対になる分類labelも24px級・icon26pxへ揃え、band外形と本文位置は維持する。文字はbaseline、iconはband中央へ整列。寸法・色・位置・書体間の共通光学補正は<code>TimeEstimate.vue</code>だけで管理し、Lesson固有CSSへ複製しない。HeaderとTitleから分離し、ページ別のy補正はしない。WORKのTitle / Target / Main / CHECKは不変。</li>
<li>layoutのfrontmatter <code>estimate: 5</code>で表示する。本文から使う場合は<code>&lt;TimeEstimate minutes=&quot;5&quot; /&gt;</code>。両方を同時に使って二重表示しない。</li>
<li>時間の根拠はdocs/06の活動配分と各ページNotes。Month8-1はSETUP10、PLAY＋観察・記録20、WORK3 / 5 / 5、TUNE10、REFLECT3分。Concept2＋最初のWORK3で変数①5分、Review2＋REFLECT3で振り返り5分となる。説明・共有の14分を含め、標準70分を変えない。児童への締切として扱わない。</li>
</ul>
<h3 id="232-core--optional">23.2 CORE / OPTIONAL</h3>
<ul>
<li>COREは1/12〜12/12でREFLECTまで。物理的な次ページはOPTIONAL CHALLENGE → OPTIONAL QUIZ。追加分は<code>progress: optional</code>でCHALLENGEを1/2、QUIZを2/2と表示し、本編の分母へ加えない。先にコードを読んで予想し、最後に全体を振り返る順序を後続Lessonにも使う。</li>
<li><code>navigation.ts</code>の<code>lessonPages</code>と<code>optionalPages</code>は別々に数える。Referenceの許可済み戻り先だけを<code>referenceOrigins</code>へ合流する。OPTIONALからの往復・Presenter・reloadも同じ<code>LessonLink</code>を使い、未知の<code>from</code>や外部URLは戻り先にしない。</li>
<li>Indexは本編12リンク・6＋6を維持。OPTIONALは下段のDivider＋「時間が余ったら」の別区画でCHALLENGE → QUIZへ。REFLECTの記録・保存後はCHALLENGEへ案内し、既存の初期値リンクや本編内容を隠さない。</li>
<li>通常のページ送りはSlidev標準。最後の本編には「本編はここで完了」、追加ページには常に「OPTIONAL / 時間が余ったら」を表示する。未実施OPTIONALを未達のMUSTと扱わない。標準ツールバーの資料全体20枚（入口1＋CORE12＋OPTIONAL2＋Reference5）とは区別する。</li>
<li>後続Lessonは同じlayout・CSS・部品を利用し、<code>lesson / page / total / progress / indexRoute / referenceRoute</code>をそのLessonに設定する。COREとOPTIONALそれぞれの<code>total</code>を明示し、既存Lessonを合算しない。許可するrouteは一覧へ追加し、独自Router・Store・本文生成システムは作らない。</li>
</ul>
<h3 id="233-challenge--quiz--下部ナビ">23.3 CHALLENGE / QUIZ / 下部ナビ</h3>
<ul>
<li>CHALLENGEは実READコードを意味のまとまりで読み、コード→ゲーム上の意味を考える。「時間が余ったら」と生徒へ示し、MUSTは講師Notesだけで使う。数字当てや曖昧な「知っているPythonは？」を中心問題にしない。解けなくてもCORE達成に影響させず、未習構文の暗記・新規実装を要求しない。</li>
<li>Month8-1はenemy1の移動→画面下判定→y・xの再配置を代表例として抜粋。01条件、02成立後に変わる値、03ゲーム上の結果という「見るポイント」と、一つの「解説を見る」を置く。選択肢型のQuizにしない。enemy2/3の行を省いた代表抜粋であることを示し、残した行の文字・インデント・実行順を正本へ照合する。</li>
<li>Purpleの分類・番号・解説とDark Code Surfaceを維持。短い解説はコード側と意味側を横対応させる。randomは「横の位置を変える」という読み取りまで。Month8-2の移動・Month8-3の自動移動とrandomへつなぎ、先取り実装を必須にしない。</li>
<li>QUIZは既習の総合復習。Month8-1は8問（基本Q1〜2、標準Q3〜5、難しいQ6〜8）。設定・ラベル・サイズ・変更箇所・速度比較・保存と再実行・Restartと設定の関係・実READコードを扱う。問いだけで意味が分かり、正解は一意。日本語の意味を先に示し、「変更する場所（EDIT）」等の英語を補助にする。数字当て・未習APIの記憶を要求しない。全問必須ではなく途中まででよい。</li>
<li><code>QuizBlock</code>へ選択肢・正解のindex・不正解時の短い理由を渡し、本文／正解理由はslotに置く。全幅Option rowはA / B / C、本文、状態記号を持つ。hover・focus・selectedを区別する。選択時に「✓ 正解」＋Green、または「× ちがいます」＋Neutral / Red accentと理由を即時表示し、何度でも選び直せる。合計点・自動採点表・ランキング・回答保存は作らない。</li>
<li>選択肢はnative button、<code>aria-pressed</code>とgroupの問いlabel、<code>aria-live</code>の理由を持つ。Tab / Enter / Spaceで操作でき、操作中はページ送りを止める。QUIZは1ページ内スクロール、問題間Divider、本文focus＋上下キーを維持する。外枠clipでHeaderと帰路を固定し、問題を小さな文字や巨大なCardへ変えない。</li>
<li>CHALLENGE / QUIZの下部ナビは共通<code>.optional-next</code>。1280×720で上端y648・高さ40px、左右x48〜1232、共通baseline。「← 本編の終わり」と「クイズへ →」または「CHALLENGEを見返す →」。常時青下線なし、hoverは薄いBlue面＋矢印移動、focusは3px ring。本文はy636までに収め、解説／feedbackを開いてもナビを動かさない。</li>
<li>COREのTUNE内にある既存CHALLENGEは残す。OPTIONALを追加するために本編の学習内容を移動・削除しない。追加Notesは標準70分へ加算せず、早い生徒のみ／時間不足なら実施しないと明示する。</li>
</ul>
<p>講師BriefはINSTRUCTOR_GUIDEの「Month8-1講師Brief」。本節は制作仕様、Briefは授業全体の分岐と停止地点、Presenter Notesはそのページの問い・つまずき・支援を持つ。詳細コピーを重複させない。</p>
<h3 id="234-初回実装の実描画レビューv053前の記録">23.4 初回実装の実描画レビュー（v0.5.3前の記録）</h3>
<p>Time UIは最長のsizeコード＋Hintを持つp9で先に試作。Title右端にNeutralの時計＋目安が収まり、検索帯・コード・Hint・CHECKを動かしていないことを確認してから7作業ページへ展開した。QUIZはBlueのQ番号→問い→開閉ボタン→Greenの答え、CHALLENGEはPurpleの3候補→実ゲーム→比較と帰路の順に読む。実画面・固定ID・保存／再実行の内容は正本と一致する。</p>
<p>初稿ではREFLECTの追加導線とCHALLENGE下部が欠け、Usability・Compositionを3とした。REFLECTは既存の初期値リンクと終端導線を横対応させ、CHALLENGEは実全景を384×288へ、補足を1文へ調整。QUIZの帰路追加後にも下端のはみ出しを検出し、問い・答えの文字は縮めず行内余白12→8pxで修正した。いずれも再描画して確認し、未確認の初稿を合格にしない。</p>
<table>
<thead>
<tr>
<th>評価（各5点）</th>
<th style="text-align:right">Time / p9</th>
<th style="text-align:right">QUIZ</th>
<th style="text-align:right">CHALLENGE</th>
<th style="text-align:right">REFLECT</th>
<th>根拠・修正</th>
</tr>
</thead>
<tbody>
<tr>
<td>Typography</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td>48pxの主見出し、24〜26px本文、20px metadataを分離。文字縮小なし</td>
</tr>
<tr>
<td>Composition</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td>固定WORK grid／対応する4行／3選択肢と4:3全景／記録と終端。欠けた帰路を再配置</td>
</tr>
<tr>
<td>Color</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td>時計はNeutral、Q番号はBlue、答えだけGreen、任意発展はPurple。文字でも役割を示す</td>
</tr>
<tr>
<td>Visual Hierarchy</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td>作業・問い・選択・記録が主役。目安と任意入口は補助に留める</td>
</tr>
<tr>
<td>Imagery</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">5</td>
<td style="text-align:right">4</td>
<td>時計が時間を示す／Q番号が問いと答えを対応／標準の実ゲーム全景／記録表で変更と結果を対応</td>
</tr>
<tr>
<td>Consistency</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td>共通書体・固定geometry・RGBの文法を保ち、本文の役割ごとに構図を変える</td>
</tr>
<tr>
<td>Personality</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td>実ゲームとコードを扱う制作ノートのIdentity。問題Card・報酬画面・巨大pillなし</td>
</tr>
<tr>
<td>Usability</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td>主作業を隠さず、任意を文字・別進捗で識別。答えと帰路を同時に参照できる</td>
</tr>
</tbody>
</table>
<p>評価は実スクリーンショットに基づく。教室投影・Windowsの代替フォント・児童の試用は未検証で、320×180は縮小構図確認のみ。目安時間は実授業の実測値ではない。</p>
<h3 id="235-初回実装の検証結果v053前の記録">23.5 初回実装の検証結果（v0.5.3前の記録）</h3>
<ul>
<li>1280×720、1366×768、1024×768、320×180でCORE12＋OPTIONAL2、既存Hint8状態、QUIZの答え4状態を撮影・DOM検査。計104状態で内容のはみ出し・画像欠損・実行時エラーなし。全14ページの縮小一覧でもIdentityとページごとの構図を照合した。</li>
<li>7作業ページの目安は同位置。WORKのTitle / Target / Main / CHECKとHint3/3/2は不変。CORE1/12〜12/12、OPTIONAL1/2〜2/2、IndexのCORE12リンクと別区画の2リンクを確認した。</li>
<li>通常URLと<code>/course/</code>でIndex遷移、Reference往復・再読込・未知の戻り先、PresenterのNotesと帰路、矢印キーのページ送りを確認。QUIZはTab・Enter・Space、フォーカス表示、答えの開閉が動き、操作中にページを送らない。</li>
<li>通常buildと<code>--base /course/</code>のbuild成功。既存Slidev由来のCSS minify警告2件は残る。共通仕様はブラウザ閲覧を確認したもので、OPTIONALの開閉状態をPDFへ完全収録する保証ではない。</li>
<li>Game / MASTER / Lesson Python / assets / 生徒配布物の計67ファイルは変更前とSHA-256一致。本編は追加UI・Notes以外の本文と固定IDが一致し、Notes12ページの合計70分を維持した。カリキュラム・START / COMPLETEの機能差分は変更していない。</li>
</ul>
<p>判定：<strong>PASS（実描画確認済み）</strong>。Skillの8軸は全て4以上。実授業・Windows実機・投影後方席の確認は別途行う。</p>
<h2 id="24-v053時間表示と任意のコード読解総合復習">24. v0.5.3：時間表示と任意のコード読解・総合復習</h2>
<p>2026-10-09。v0.5.3時点の記録。CORE本編・v0.5.2のIdentityは固定し、TimeEstimateとOPTIONALのみ変更した。現行v0.5.4の共通仕様は23.1〜23.3を参照する。本節の旧開閉Quiz・600／601問題・文字サイズは現行への指示ではない。</p>
<h3 id="表示案の比較">表示案の比較</h3>
<p>小学5年生がPC上で個別に読み、任意課題へ進む用途。投影で問題を示す時も文字を縮めない。既存Identity内で3構成を実描画し、別ブランドへの再設計はしない。共通の日本語大見出し、Blueの問い、Dark Code Surface、文字ラベルと固定geometryを維持した。</p>
<table>
<thead>
<tr>
<th>案</th>
<th>主役・構成</th>
<th>実描画で確認した弱点</th>
<th>採否</th>
</tr>
</thead>
<tbody>
<tr>
<td>A 一覧型の縦スクロール</td>
<td>Q番号→問い→選択肢→答えの対応を反復。Header・帰路を固定し、本人が前後を見返す</td>
<td>初稿は帰路が下端へ欠けた。本文高さ380→344pxで修正し、文字は縮めない</td>
<td>採用。既存Referenceと同じスクロール操作で、OPTIONAL2ページを維持</td>
</tr>
<tr>
<td>B 4問ずつの冊子型</td>
<td>Q1〜4 / Q5〜8へ分割し、復習の区切りを作る</td>
<td>同じ書体・文字サイズでは選択肢と答え領域を含む4問が収まらず、スクロールか追加遷移が必要</td>
<td>不採用。OPTIONALとQuizの二重進捗・遷移を増やさない</td>
</tr>
<tr>
<td>C 1問中心の読解ヒーロー型</td>
<td>短い実コードを大きな暗い面として焦点化し、1問だけを考える</td>
<td>読解には有効だが8問を見返すには多くの操作と現在問の管理が必要</td>
<td>不採用。短い復習を独自Quizアプリへ拡張しない</td>
</tr>
</tbody>
</table>
<p>まず最長コードを持つWORK p9のTime UIと、密度の高いQuizを試作してから全対象へ適用した。Timeの時計26px・文字22px・時間24px/700は主作業より小さく、右上の時計と数字を以前より識別しやすい。時間はNavy系の目安で、完了・締切を示さない。</p>
<h3 id="実描画レビューと修正">実描画レビューと修正</h3>
<p>CHALLENGEは実コード→予想→解説、QUIZは短い問い→選択または予想→理由付き答え。閉じた状態を正解色にしない。READの2抜粋を別々に照合し、600／601は移動後の判定値として示す。後続Lessonへの接続は読解体験に留め、新しいMUSTを作らない。</p>
<p>初稿のQuiz帰路の欠けはComposition / Usabilityを3として高さ調整。CHALLENGEの長い変数名の問いは2行目が解説領域へ入り、Typography / Usabilityを3として短文化した。解説の「知っ／ている」等も語句をまとめて再描画。Quiz末尾へのfocusでSlidev外枠が97px動いたためUsabilityを3とし、Quizの外枠をclipで固定して本文だけを送る構成へ修正した。キー処理・独自Router・採点機能は増やしていない。</p>
<table>
<thead>
<tr>
<th>評価（各5点）</th>
<th style="text-align:right">Time</th>
<th style="text-align:right">CHALLENGE</th>
<th style="text-align:right">QUIZ</th>
<th>実画面の根拠・再修正結果</th>
</tr>
</thead>
<tbody>
<tr>
<td>Typography</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td>大見出し48pxとmetadata、24px実コード、24〜26pxの問いを分離。短文化と語句単位の折返しで競合を解消</td>
</tr>
<tr>
<td>Composition</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td>右上の共通位置／実コードと3つの予想／固定Headerと縦の対応。帰路は画面内に残る</td>
</tr>
<tr>
<td>Color</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td>時間はNavy、読解はPurple、復習はBlue。Greenは開いた答えだけで、色以外にも文字を表示</td>
</tr>
<tr>
<td>Visual Hierarchy</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td>作業・実コード・問いが主役。目安とOPTIONAL進捗は補助、解説は予想後に開く</td>
</tr>
<tr>
<td>Imagery</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td>時計の意味／正本のコードと条件・結果／Q番号と実3行コードの対応。架空画像や疑似IDEを使わない</td>
</tr>
<tr>
<td>Consistency</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td>共通Component・CSS・書体・geometryを維持し、作業・読解・復習の役割で構図を変える</td>
</tr>
<tr>
<td>Personality</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td>実ゲームの変数とコードを読む制作ノート。大量Card・報酬画面・別ブランド化なし</td>
</tr>
<tr>
<td>Usability</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td>全対象の目安位置、解説・答えの開閉、Tab・上下キー・帰路を確認。外枠の意図しない移動を解消</td>
</tr>
</tbody>
</table>
<p>判定：<strong>PASS（実描画確認済み）</strong>。実寸と縮小一覧の両方で確認した。投影時の視認性向上は設計判断であり、Windows代替フォント・教室後方席・児童の試用は未検証。320×180は縮小構図の確認で、本文閲覧の推奨サイズではない。</p>
<h3 id="検証結果-1">検証結果</h3>
<ul>
<li>1280×720、1366×768、1024×768、320×180でCORE12＋OPTIONAL2・Hint8・読解解説3・Quiz回答8を撮影・DOM検査。計132状態で画面外の内容欠け、文字と解説の競合、画像欠損、実行時エラーなし。Quizの未表示行は意図した本文スクロールとして区別した。</li>
<li>Time全7対象のサイズ・位置、本編1/12〜12/12、CHALLENGE1/2 → QUIZ2/2、Index本編12件＋別区画2件、WORKとHintの固定anchorを確認した。</li>
<li>通常URLと<code>/course/</code>で全Indexリンク、物理順序、解説・全問回答、Tab / Enter / Space / 上下キー、focus表示、Reference往復・reload・未知の戻り先、Presenter / Notesを確認。最後のQuizへTabで進んでもHeaderと帰路は固定される。</li>
<li>読解の3行＋2行、Quizの3行は講師用START・生徒配布版の実READ部分と文字・インデントが一致。Quizの正答はCOREの変数・操作・観察・初期値と既習Pythonから導け、未習random・Pygame APIの記憶を要求しない。</li>
<li>通常buildと<code>--base /course/</code>のbuild成功。既存Slidev由来のCSS minify警告2件は残る。スクロールQuizと閉じた解説のPDF完全収録は保証しない。</li>
<li>Game / MASTER / Lesson Python / assets / 生徒配布物67ファイルは変更前とSHA-256一致。カリキュラムdocsも一致。本編本文・固定ID・70分のNotes配分は不変で、IndexとREFLECTの任意入口だけを新順序へ同期した。</li>
</ul>
<h2 id="25-v054まとまりで読む選んで確かめる">25. v0.5.4：まとまりで読む・選んで確かめる</h2>
<p>2026-10-09。対象はTime、OPTIONAL CHALLENGE / QUIZ、共通の下部Navigationだけ。CORE本文・Notes・Index・12/12と70分、Game・Lessonコード・assets・固定ID・カリキュラムは維持する。現行の共通制作規則は23節を参照し、本節には採否とレビューを記録する。</p>
<h3 id="brief--3案--採用">Brief / 3案 / 採用</h3>
<p>小学5年生が、遊んだゲームと実コードを照合する任意教材。主用途は生徒PC上での個別閲覧、投影は一つの問いを共有する用途。1280×720の既存Identityを維持する。教室の投影距離・Windowsの書体・児童による理解度は未確認で、想定を実測として扱わない。</p>
<table>
<thead>
<tr>
<th>案</th>
<th>Typography / Color</th>
<th>Composition / Imagery / Decoration</th>
<th>最も強い弱点と採否</th>
</tr>
</thead>
<tbody>
<tr>
<td>A 制作ノートの読み解き</td>
<td>既存日本語見出し48px・本文24〜26px、Inter番号、等幅コード。白主体約80%、暗いコード約15%、Purpleは分類と対応</td>
<td>左のenemy1実コード→右の01〜03→下のコード／意味対応。Quizは別の全幅選択肢行。新しい装飾画像なし、既存外周geometryだけ</td>
<td>最長random行の幅に注意。実コードを代表画面で照合し、欄幅を調整できるため<strong>採用</strong></td>
</tr>
<tr>
<td>B 横長の手順譜</td>
<td>同じ書体、コード24pxを横に長く見せる。白約70%、暗い面20%、Purple線・番号10%</td>
<td>上に全幅コード、下に条件→値→結果の横連鎖。線は読む順序を示し、画像は実コードのみ</td>
<td>解説を開くと縦の予算が不足しやすく、3列の説明が細分化に戻る。不採用</td>
</tr>
<tr>
<td>C コード・ステージ</td>
<td>同じ日本語書体を大きく、条件を大型等幅で焦点化。暗い面65%、白25%、Purple10%</td>
<td>大きい暗いコード面に条件→結果の注釈を結び、周囲を大胆に非対称化。舞台的な面は読解の焦点を作る</td>
<td>探索案として印象は強いが、「暗い面は実コードだけ」という既存文法と衝突し、注釈がコードの一部に見える。不採用</td>
</tr>
</tbody>
</table>
<p>3案を混合しない。Aの代表画面は最長random行と開いた解説を持つCHALLENGE。左824px / 右328px・gap32px、コード22px / 32px、説明22〜24px、題名48px、本文下端y636以内・帰路y648を検証する。Quizの日本語は「EDIT（変更する場所）」と「変更する場所（EDIT）」を比較し、意味が先に目に入る後者を採用。英語だけの連続選択肢をなくす。</p>
<h3 id="learning-review">Learning Review</h3>
<ul>
<li>CHALLENGEの中心は「画面外へ出た敵の次の動き」。01条件→02変わる値→03ゲーム上の意味の順で、<code>if</code>・変数・比較・代入と既に見た再出現を照合できる。600／601の数字当てと曖昧なPython探しは削除。randomの引数や負数の計算を暗記させない。解けなくても問題なし。Month8-2の移動、Month8-3の自動移動・randomへ接続する。</li>
<li>実READはenemy1の移動1行と判定・再配置3行、間に空行。enemy2/3とコメントを省いた代表抜粋で、enemy1内の文字・インデント・順序は変更しない。解説は移動、下端判定、yとxの再配置をゲーム上の意味へ対応させる。</li>
<li>QUIZ8問を再監査。Q1速さ／Q2ラベルは基本、Q3サイズ／Q4変更箇所／Q5速さ比較は標準、Q6保存と再実行／Q7Restartと設定／Q8実コードから3体への影響は発展。各問3択・正解一意で、問いと各選択肢が単独で読める。Q7は本編のRと再実行の違いから推測する課題で、初期化コードの暗記を求めない。</li>
<li>即時feedbackは点数を付けるためでなく、理由を読み、別の選択肢で考え直すため。講師NotesではMUST達成後・全問必須ではない・時間不足なら省略を維持し、生徒本文からMUSTを除く。</li>
</ul>
<h3 id="代表画面の修正履歴">代表画面の修正履歴</h3>
<ul>
<li>初稿はrandom行が暗い面の右端で欠け、Typography / Usabilityを3とした。実コードは折り曲げず、欄を800→824pxへ広げ、コード専用の共通指定を確実に適用して再描画。</li>
<li>開いたCHALLENGE解説がy649.8まで達し帰路に重なったためComposition / Usabilityを3とした。コード文字22pxは維持し、行高34→32px・内側余白16→12pxで解説下端をy631.8へ修正。隠しスクロール・解説削除で回避しない。</li>
<li>旧Timeは分類bandより40px下で、Consistencyを3とした。共通Componentでy72〜96へ移し、左右icon26px・分類／目安24px級へ揃えた。異なる書体の文字baselineは共通の2px光学補正で揃え、Title・Target・Main・CHECKは動かさない。</li>
<li>QUIZの選択肢増加後は本文領域を350pxへ設定。Headerと帰路を外枠に残し、問題／選択肢／理由だけを送る。長いQ8はコードと選択肢をスクロールして確認する。選択した行・正誤記号・理由の文字を対応させ、色だけで判定しない。</li>
</ul>
<h3 id="実描画評価各5点">実描画評価（各5点）</h3>
<p>実寸と縮小一覧で、題名→実コード／問い→見るポイント／選択肢→理由→固定帰路の順に確認した。Timeは左右の分類bandが揃い、作業のTitleより小さい。CHALLENGEは短い断片問題でなく一つの処理が暗い面の主役。Quizは余白・番号・行Dividerで選択を示し、正解のGreenと不正解のRed記号が選択行・理由に対応する。単に「読める」ことだけで合格にはしない。</p>
<table>
<thead>
<tr>
<th>軸</th>
<th style="text-align:right">Time</th>
<th style="text-align:right">CHALLENGE</th>
<th style="text-align:right">QUIZ</th>
<th>最終スクリーンショットの根拠／修正</th>
</tr>
</thead>
<tbody>
<tr>
<td>Typography</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td>24〜26px metadataと48px題名を分離。コードの最長行を欠けずに表示し、日本語を先に読む選択肢へ変更</td>
</tr>
<tr>
<td>Composition</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td>分類と時間の対／処理と観察点／全幅Option row。解説の下端と帰路の競合を解消</td>
</tr>
<tr>
<td>Color</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td>Blue時計・Blue-gray目安・Dark Blue時間。Purple読解、Blue選択、正誤は文字・記号＋意味色</td>
</tr>
<tr>
<td>Visual Hierarchy</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td>metadataは主作業を奪わず、条件→変わる値→ゲームの意味を読む。正誤より先に問いと選択肢が見える</td>
</tr>
<tr>
<td>Imagery</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td>時計が時間を識別。実READを代表抜粋と明示し、コード→結果を横対応。Q8も実3行で根拠を示す</td>
</tr>
<tr>
<td>Consistency</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td>既存Identity・書体・geometry、共通のTimeと帰路を維持。読む課題と選ぶ課題の構図は区別</td>
</tr>
<tr>
<td>Personality</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td>実ゲームのコードを読み解く制作ノート。飾り画像・大量角丸Card・報酬アプリ化なし</td>
</tr>
<tr>
<td>Usability</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td>7ページのbaselineとicon高さを実測。解説開閉、全24選択肢、retry、focus、本文scroll、固定帰路を確認</td>
</tr>
</tbody>
</table>
<p>判定：<strong>PASS（実描画確認済み）</strong>。Windows代替フォント・教室投影・児童の試用は未検証。320×180は縮小構図確認で、本文閲覧を推奨する幅ではない。</p>
<h3 id="検証結果-2">検証結果</h3>
<ul>
<li>最終の<code>/course/</code>本番buildを1280×720、1366×768、1024×768、320×180で検査。CORE12＋OPTIONAL2、既存Hint8状態、CHALLENGE開いた解説、QUIZ全24選択肢と8問の不正解→正解retry、計220状態を確認。通常buildもTime全7対象と任意ページを再確認。内容欠け・外枠scroll・実行時エラーなし。Quizの未表示行は意図した本文scrollとして扱う。</li>
<li>通常URLと<code>/course/</code>でIndex14リンク、CORE→REFLECT→CHALLENGE→QUIZ、Reference往復・reload・未知の戻り先、PresenterとNotesを確認。全24ボタンはTab / Enter / Spaceで選択、3px focus ringとfeedback、本文の上下キー、回答のreload時リセットを確認。採点・永続保存なし。</li>
<li>Timeは全7ページで分類と同じband。通常build実測で左右の文字baselineはy93、双方iconは26px・中心y84。両任意ページの下部navはy648・40px、左右リンクの上端・行高一致、常時下線なし。Headerと帰路は末尾へTabで進んでも固定。Windows書体の光学補正は実機で追加確認する。</li>
<li>CHALLENGEのenemy1各行とQUIZの3体の移動コードは、講師用START・生徒配布版のREADへ文字／インデントを照合。COREのMarkdown本文・Notes・Indexを含む先頭12ページは変更前と完全一致。Game・MASTER・Lesson Python・assets・生徒配布物67ファイル＋カリキュラム3文書のSHA-256一致。</li>
<li>通常build・サブパスbuild成功。既存SlidevのCSS minify警告2件は継続。スクロールQuiz全文・閉じた解説のPDF完全収録は未保証。</li>
</ul>
<h2 id="26-更新api転移debugの共通テンプレート2026-10-10">26. 更新・API転移・DEBUGの共通テンプレート（2026-10-10）</h2>
<p>既存Visual Identityを継承し、新Art Directionは探索しない。今回の対象はMonth8-3 p4/5/6/8/9、共通DEBUG、Month8-1 SETUPだけ。Game・Lesson Python・assets・固定ID・カリキュラム・Month8-2本文は変更しない。</p>
<ul>
<li><strong>Code Annotation</strong>：tokenの実DOM中央・下端から垂直直線を最優先。意味ラベル同士の衝突を避ける必要がある場合だけ90度に曲げる。token名をラベルへ重複表示せず、日本語の意味だけを書く。斜線禁止。19.12をこの優先順位で適用する。</li>
<li><strong>Spatial / Image Annotation</strong>：コードの線とは区別。空間図・ゲーム画像では対象の視認性を優先し斜線も使用可。Month8-3 p4はsprite領域左上のpointから説明へ、点線枠の上辺を避ける1本の斜線。矢印先端なし、他の線との交差なし。</li>
<li><strong>Motion Concept</strong>：「ゲームは短い間隔で何度も更新」「enemy_speed=4なら1更新ごとにyへ4を足す」を図で対応させる。p5の100→104→108は説明用の座標例で、実STARTの初期50を変える指示ではない。FPSの暗記、正確に毎秒60更新という断定はしない。今回FPSのReference項目は不要と判断し追加しない。</li>
<li><strong>API Concept → WORK</strong>：Conceptは <code>random.randint(最小の値, 最大の値)</code> という説明用の書き方。実STARTのコード・そのまま入力できる完成例ではないと明記。0〜736の図は現在のGame1への具体例。WORKは実STARTの右辺・代入先enemy1_x・親ifを示し、一般形へ最小・最大を当てはめる。Hintはx位置→API→範囲。標準解は上部設定に追従する <code>screen_width - enemy_size</code> を最大に使う（初期800−64=736）。736の直接入力も現設定では同じだが、サイズ変更時は見直しが必要。randomは本編SHOULDのまま、時間不足時は省略可能。</li>
<li><strong>DEBUG</strong>：入口は起動しない／変更が反映されない／赤いエラー／別ファイル／画像が出ないという症状。症状→見る場所→対処の表と、停止→Terminal最後→ファイル名・行番号→最近の変更→先生という短い確認フローを用いる。SyntaxError・NameError・IndentationErrorは検索の手掛かりで、暗記・Quizの対象にしない。実行環境の問題は講師へ。未完成STARTの静止と不具合を区別する。</li>
<li><strong>DEBUG導線</strong>：既存の「調べる」→索引／カテゴリ→DEBUG→元の作業を利用。WORKへ大きなボタンを増やさない。本文だけscrollし、Header・カテゴリ・帰路を維持する。保存→ESC→再実行とRの違いを明示する。</li>
<li><strong>Month8-1バックポート</strong>：SETUPへ4手順の「エラーが出たら」を統合。フォルダ木は配布Pythonとassetsの3行へ簡略化し、既存の起動・停止手順とCHECKは維持。SETUP10分のうち3〜5分で一度説明し、CORE12ページ・70分へ加算しない。行番号はエラー調査に限り、授業の編集誘導は固定IDを使う。FPS説明は追加しない。</li>
</ul>
<p>Learning Review：更新の図は速さと座標の変化を結び、API一般形から敵のxへ適用する余地を残す。新しい必須Python知識・エラー名暗記を増やさない。docs/02、START冒頭、既存講師BriefのMUST／SHOULD／CHALLENGE区分は維持する。</p>
<h3 id="実描画レビュー受入記録">実描画レビュー・受入記録</h3>
<p>p5を最初の代表画面として試作。初稿は更新図＋操作手順がCHECKへ重なり、Composition／Usabilityを3と評価。図の高さと手順の余白を調整し、右の説明／CHECKと重複する補足だけを短文化した。再撮影では手順の下端y581、CHECKの開始y600を確保。Month8-1も初稿の縦溢れを、フォルダ木の簡略化と支援文の配置調整で解消した。学習機能や操作条件の削除では回避していない。</p>
<table>
<thead>
<tr>
<th>Skill評価軸（5点）</th>
<th style="text-align:right">最終</th>
<th>実画面の根拠</th>
</tr>
</thead>
<tbody>
<tr>
<td>Typography</td>
<td style="text-align:right">4</td>
<td>題名48px、コード28px級、意味24px級、更新の数値を等幅・太字で区別</td>
</tr>
<tr>
<td>Composition</td>
<td style="text-align:right">4</td>
<td>更新の連鎖→作業、条件と空間図、一般形と範囲図。SETUPとCHECKの競合を解消</td>
</tr>
<tr>
<td>Color</td>
<td style="text-align:right">4</td>
<td>Blueの横範囲／更新、Tealのy値、Purpleの比較。文字と数値も併用</td>
</tr>
<tr>
<td>Visual Hierarchy</td>
<td style="text-align:right">4</td>
<td>APIの書き方が主表示、具体範囲は図。WORKは記入箇所と常時CHECKが主役</td>
</tr>
<tr>
<td>Imagery</td>
<td style="text-align:right">4</td>
<td>実spriteを使い、更新ごとの位置＋数値、左上point、token中央の対応を実測</td>
</tr>
<tr>
<td>Consistency</td>
<td style="text-align:right">5</td>
<td>既存Identity・共通Time／Hint／帰路。図・WORKは共通styleの明示opt-in</td>
</tr>
<tr>
<td>Personality</td>
<td style="text-align:right">4</td>
<td>実ゲームの敵とDark Code Surfaceを使う制作ノート。飾りCardの量産なし</td>
</tr>
<tr>
<td>Usability</td>
<td style="text-align:right">4</td>
<td>症状からの3列対処、5段階フロー、段階Hint、固定Header・帰路と本文scroll</td>
</tr>
</tbody>
</table>
<p>原寸とthumbnailで指定7画面をレビュー。<strong>PASS（実描画確認済み）</strong>。通常／<code>/course/</code>で1280×720・1366×768・1024×768・320×180、各80状態（7画面＋6Hint＋7DEBUG項目×4サイズ）、計160状態を撮影・DOM検査。横切れ・意図しない外枠溢れなし。注釈はtoken中央を縮尺補正して照合、p6の3本はすべて垂直直線。p4の空間引出線だけ斜線で点線枠と非交差。320×180は構図確認で、本文閲覧を推奨する大きさではない。</p>
<p>通常／サブパスbuild成功。既存Slidev由来のCSS minify警告2件と、検証用outDirがプロジェクト外という警告は残る。Game・全Lesson Python／assets・Month8-2本文・docs/01〜08は変更前ハッシュと一致。Guide既存部分もバイト一致。教室投影・Windows代替書体・児童による理解・SETUP10分内／CORE70分の授業実測は未検証。</p>
<p>追加確認：共通CodeAnnotation／layoutは変更前のまま維持し、p6側のラベルgridだけで不要な曲がりを解消した。既存Month8-1のOverview／Index／ConceptとMonth8-2のOverview／Index／p5を回帰撮影し、6画面とも変更前画像と全ピクセル一致。通常／サブパスでDEBUG往復・カテゴリ切替・reload・focus・本文scroll、全対象のPresenter／Notesを確認。4サイズでHintのEnter／Space開閉、固定Header、帰路、Presenterの最新SETUP Notesも確認した。</p>
<h2 id="27-collision-diagramの共通語彙month9-1">27. Collision Diagramの共通語彙（Month9-1）</h2>
<ul>
<li>Spriteは共通assetsの実画像。透明余白を切らず、Rectを画像の輪郭に合わせて変形しない。</li>
<li>現行player／enemyのRectは64×64。2px級実線で示し、図の拡大倍率を明記する。比較図は中立色、Conceptで判定範囲を識別する線はBlue（28節）とする。図の線は教材用で、ゲーム画面に存在する線と偽らない。</li>
<li>離れた状態／重なった状態は同じ倍率・同じRect寸法で比較する。重なりは薄い赤等で範囲を示し、日本語も併記。接触していない図へ意味のない矢印を足さない。</li>
<li>画像＝見た目、Rect＝判定の範囲、colliderect＝重なりの確認を分ける。色や見た目の輪郭の接触と同一視させず、細かいpixel規則の暗記も要求しない。</li>
<li>API Conceptは一般形→意味、READは実コード→対応、WORKは実STARTの固定ID→入力→確認。コード注釈は既存token中央・垂直優先・必要時90度の規則を保つ。</li>
<li>Rect／colliderectを新しいPython構文として扱わない。状態変更の意味だけを説明し、True／Falseを正誤・成功失敗色へ結び付けない。実COMPLETEの追加ガードは短い意味と書き始めで渡し、教材UIのためにPythonを変更しない。</li>
</ul>
<p>実装・段階レビュー・検証記録は<a href="/robot-python-game/instructor/docs/17_month9-1_slidev_implementation/">docs/17</a>。既存Visual Identity・TimeEstimate・CodeAnnotation・Hint／Quiz・OPTIONALの共通帰路を維持する。</p>
<h2 id="28-work編集先conceptapireviewの共通文法">28. WORK編集先・Concept／API・Reviewの共通文法</h2>
<p>2026-10-10。Month9-1のConcept／Reviewと、Month8-1〜Month9-1の全12 WORKで適用。CORE時間・固定ID・到達点・Game／Lesson Python／assetsは変更しない。Rect説明のページ分割は29節を参照。18・19節の外側gridを維持し、上部の編集先表現と意味色は本節を優先する。</p>
<h3 id="work-header--target-bar">WORK Header / Target Bar</h3>
<ul>
<li>4層は分類WORK → Title → Target Bar → Main Work。TimeEstimateは分類と同じbandの右側。Title y96、Target y164／36px高、Main y216、CHECK y600を共通CSSで管理し、Lesson別marginでずらさない。</li>
<li>既存<code>TryBlock</code>をTarget Barとして使う。<code>EDIT → monthX-X.py → 検索icon＋[Ctrl]＋[F] → [固定ID]</code>を1行へ集約。EDITは小さいChange Red、ファイル名はDark monospace、固定IDはBlue monospace。検索iconと小さなDark surface／Light textのkeycapでショートカットと示す（29節）。薄いNeutral面とし、巨大Card化しない。</li>
<li>同じファイル名・ショートカット・検索IDをコード見出しや手順へ反復しない。手順には「編集する場所を開く」等の行動を残し、対象情報は上の帯を使う。複数IDは帯に個別表示し「1つずつ」と示す（連結文字列を検索させない）。手順ではenemy2／enemy3等の対象順を明示する。値変更・予想・保存・停止・再実行・比較の内容は省かない。</li>
<li>関連Referenceの既存リンクは帯の右端にMutedの補助導線として残す。編集先3要素より強くせず、共通Headerの「調べる」も維持する。Hintやリンクの開閉で外側gridを動かさない。</li>
</ul>
<h3 id="concept--api">Concept / API</h3>
<ul>
<li>意味色はObject＝Teal、Technical structure＝Blue、API／syntax＝Violet、Change／difference＝Red、Result＝Dark Green。すべてを同時に使わず、1ページの意味色は原則3色程度まで。日本語ラベル・図形・線・字形を併用し、全文着色をしない。Spriteの実素材色と背景geometryは意味色の凡例ではない。</li>
<li>Rect説明では画像＝Tealの役割語、判定領域＝Blueの役割語＋四角、重なり＝比較図のRed領域＋日本語で分ける。結果や接触を扱わないページに色を増やすための説明を追加しない。</li>
<li>APIは一般形 → 引数／部分の意味 → 具体例 → WORKの順。26・27節の流れを再利用し、完成コードを先に入力させない。説明用の一般形と、実ファイルからの抜粋を明示して区別する。</li>
<li><code>pygame.Rect(x, y, 幅, 高さ)</code>は説明用の書き方。4引数を横位置・縦位置・横幅・高さの順で示し、x/yは左上の位置として空間図へ対応させる。Month8-2の座標と接続するが、引数暗記・新しいMUST作業にはしない。実例の<code>player_size</code>／<code>enemy_size</code>が幅と高さの両方に使われることを照合できるよう、元の2行を保つ。</li>
<li><code>.api-concept-grid</code>／<code>.api-concept-form</code>を一般形と図の共通配置に使い、19.12の<code>CodeAnnotation</code>で引数のtoken中央から意味へ結ぶ。線の文法は重複定義しない。API／識別子は<code>.code-api</code>／<code>.code-identifier</code>で区別し、Dark Code Surfaceでは明るい同系色を使う。既存の他ページのAnnotationを機械的に再配色しない。</li>
</ul>
<h3 id="review">Review</h3>
<ul>
<li>一番探すConcept／対象はDark bold、識別子はBlue monospace、API／syntaxはViolet monospace、ゲーム上の結果はDark Green、重要な差分はRed、補足はMuted。役割語だけを強調し、結果でない説明までGreenにしない。<code>True</code>のsyntax色は正解色ではない。</li>
<li>行Divider・列見出し・等幅の識別子で走査する。19.10の原則を使い、1ページの意味色は原則3色まで。既に成立したMonth8系Reviewは変更せず、全文黒の新しいReviewへ必要なutilityだけを使う。初期値は変更色Redにしない。</li>
</ul>
<h2 id="29-shortcutとapi説明の分割">29. ShortcutとAPI説明の分割</h2>
<ul>
<li>Target Barのショートカットは共通<code>TryBlock</code>／共通CSSだけで管理する。検索icon → Ctrl／Fのkeycap → 固定IDの順とし、keycapは28px級の高さ、20px級monospace、Dark面・Light文字・小さい下辺でキーと識別する。既存36pxの帯、TimeEstimate、Main／CHECKのanchorを動かさない。複数IDは個別表示と「1つずつ」を保つ。</li>
<li>内容の多いAPI説明は、Page A＝一般形／引数の意味／図、Page B＝実コード／実ゲームとの対応へ分けてよい。APIを丸写しする課題へ変えず、既存時間を分割し、MUSTを増やさない。</li>
<li>一般形では引数を空間・範囲・役割へ結び、具体例では実ファイルの識別子・順・値を照合する。注釈は19.12のtoken中央・意味だけ・垂直優先／必要時90度を保つ。実コードを説明用に改行する場合は明記する。</li>
<li>情報を豊かにするとは、図・引数との対応・意味のある実Spriteを加えること。長文講義、同じ説明の言い換え、暗記不要等のメタ説明を生徒本文へ増やさない。実Spriteに重ねるRectは透明な輪郭とし、画像を塗りで隠さない。倍率・教材用の配置を明示する。</li>
</ul>
<p>Month9-1の分割・ページ数・時間・検証結果は<a href="/robot-python-game/instructor/docs/17_month9-1_slidev_implementation/">docs/17</a>。既存Month8系Conceptを一律に分割しない。</p>
<h2 id="30-自力試行段階hint検証説明の共通work">30. 自力試行・段階Hint・検証・説明の共通WORK</h2>
<p>2026-10-10。Month8-1〜Month9-1の活動量改善。従来の実装・監査は履歴として残し、現在の試行進行は各LessonのNotesと<a href="/robot-python-game/instructor/docs/18_curriculum_workload_audit/#%E6%94%B9%E5%96%84%E5%BE%8C%E8%A9%A6%E8%A1%8C%E7%9B%A3%E6%9F%BB">改善後試行監査</a>を参照する。新Art Direction探索は行わず、既存Visual Identityと28・29節のHeader／Target Barを維持する。</p>
<ul>
<li>WORKは日本語指示 → 短く考える → まず書く → 困った場合だけHint → 保存・ESC・再実行 → 観察可能な結果をCHECK → 自分のコードと結果を短く説明、の順。考える時間はNotesで運用し、常設の秒数表示は使わない（31節）。意味のない全文入力・API綴り暗記・同じ実行の反復を増やさない。</li>
<li>記述WORKのHintは考え方／変数・構文／部分コード／最後の完成形の4段階、同時に1段階。既存HintBlockのcount=4を使い、数値変更等で不要な段階は増やさない。穴埋めは後半の支援へ寄せる。新APIの一般形、以前の実コード、LEVEL2を狙う最初の右移動の足場は残してよい。</li>
<li>完成例を見る前に独立した1行を生成した時だけLEVEL4、複数行だけLEVEL5の実績とする。完成例・参考転用はLEVEL2〜3として機能到達を認める。Hint使用を失敗扱いしない。正式区分・Levelの正本はdocs/02で、全員に4／5を必須化しない。</li>
<li>考える時間の常設TrialCueは31節で廃止。説明・複数行の完成Hintを開いてもコードが欠けずCHECKに重ならない幅・高さを実描画で確認する。今回の実描画記録は当時の履歴として残す。</li>
<li>Month8-1はLEVEL1のまま、5か月の見通しと1設定の比較実験（目標・設定・予想・結果・次の値・理由）。最後は2〜3人の短い共有。別設定はSHOULD、複数設定はCHALLENGEのまま。</li>
<li>Month8-2は右の足場を維持し、左・上下の最初の1行を試す。Month8-3は敵へ既習代入・比較を転用し、毎回戻す／条件成立時だけ戻すを比較。randomは本編SHOULD、時間不足時は省略可能。</li>
<li>Month9-1はRectをREADとして保ち、enemy1のif・結果2行を試す。enemy2は参考転用、enemy3は相手を先に選ぶ。正式ガードは支援し、判定だけ／状態変更の比較で意味をつなぐ。</li>
<li>比較はWORK後に置く。成果物は自分のコードを指した短い対応説明で、答え文の暗記・長文作文にしない。OPTIONALのChallenge／QuizをCORE不足の穴埋めに使わない。</li>
<li>新しい時間は授業実測前の試行仮説。予想・入力・検証・説明の実活動から再推定し、旧監査値を上書きしない。遅い生徒はSHOULD省略と早めのHint支援、速い生徒は意味のある比較や自分の説明を優先する。</li>
</ul>
<h3 id="今回の実描画学習レビュー">今回の実描画・学習レビュー</h3>
<p>Stage1の代表（上への再配置）を通常／完成Hintで描画してから展開。初稿は上下移動の完成Hintの下端、長い衝突条件の右端が欠け、Composition／Usabilityを3として修正した。Stage2では見通しの番号重複、条件の材料表の下端、右移動HintとCHECKの接近、敵1／3の補足改行を検出。意味を保った短文化・処理長に合う欄幅・内側余白で修正し、再撮影した。Title・Target・CHECKを移動したり、学習機能を削って回避したりしない。</p>
<p>Skillの8軸に、この依頼のLearning Clarity／Activity Flowを加えた10軸。変更代表を原寸・thumbnailでレビュー。最初の視線は題名、次に実コードまたは比較、最後に操作と結果へ向かう。共通部品を保ちながら、見通し・実験・比較を同じWORKの箱へ押し込まない。</p>
<table>
<thead>
<tr>
<th>軸（5点満点）</th>
<th style="text-align:right">最終</th>
<th>実描画・内容照合の根拠</th>
</tr>
</thead>
<tbody>
<tr>
<td>Typography</td>
<td style="text-align:right">4</td>
<td>48px級見出しと24pxコード・意味を分離。長い補足の改行と完成Hintの横切れを修正</td>
</tr>
<tr>
<td>Composition</td>
<td style="text-align:right">4</td>
<td>試行WORK・6項目の実験・5段の見通し・同尺度A/Bを役割別に配置</td>
</tr>
<tr>
<td>Color</td>
<td style="text-align:right">4</td>
<td>既存RGB／Blue操作・Darkコード・Amber支援を維持し、日本語と番号を併用</td>
</tr>
<tr>
<td>Visual Hierarchy</td>
<td style="text-align:right">4</td>
<td>題名→検索対象→試行→Hint→CHECK。完成形は通常画面に露出させない</td>
</tr>
<tr>
<td>Imagery</td>
<td style="text-align:right">4</td>
<td>敵の実Spriteと空間図を維持。比較は実変数・演算・条件を同じ位置で照合</td>
</tr>
<tr>
<td>Consistency</td>
<td style="text-align:right">5</td>
<td>共通Header・Target・CHECKのy96／164／600と固定IDを保持。幅変更だけを処理長に合わせる</td>
</tr>
<tr>
<td>Personality</td>
<td style="text-align:right">4</td>
<td>実ゲームの制作ノートというIdentityを保ち、巨大Cardや装飾画像を増やさない</td>
</tr>
<tr>
<td>Usability</td>
<td style="text-align:right">4</td>
<td>4段Hint・Reference帰路・keyboard／focus。CHECKとの競合と下端溢れを除去</td>
</tr>
<tr>
<td>Learning Clarity</td>
<td style="text-align:right">4</td>
<td>Rect READ、新API一般形、独立試行と参考転用、正式SHOULDを区別</td>
</tr>
<tr>
<td>Activity Flow</td>
<td style="text-align:right">4</td>
<td>予想→短い試行→比較→コードと結果の説明。入力文字数やOPTIONALで時間を埋めない</td>
</tr>
</tbody>
</table>
<p>判定：<strong>PASS（変更代表の実描画確認済み）</strong>。Template Fidelity＝YES。新しいArt Direction探索は依頼に従って行わない。学習レビューでは導入回のLEVEL1、右から左・上下への支援減、座標更新の敵への転用、Rect READとif／代入試行の責務分離を確認した。全員必須LEVEL4／5へ変更しない。</p>
<ul>
<li><code>/course/</code>の本番buildを1280×720・1366×768・1024×768・320×180で検査。変更WORK・全Hint・比較・Reflect・Index等、各75状態、計300状態。コード横切れ、下端溢れ、Hint／手順とCHECKの競合、意図しない外枠scroll、実行時エラーなし。</li>
<li>通常URLでも同じ4サイズ・各75状態、計300状態を再確認し、両URL合計600状態で同じ競合・溢れ・実行時エラーなし。通常URLでは全54本編ページのPresenter Notesを4サイズで照合（216件）。</li>
<li>HintのEnter／Space開閉・focus、Indexから新ページへの移動、Referenceの帰路・対象へのscroll・reloadを両URLで確認。両buildは成功。既存のCSS minify警告2件とindex.htmlの警告は残る。</li>
<li>実PygameのSDL dummyによる104ケースでSTART／途中／完成、固定ID、穴埋め後のCOMPLETE構文木一致（無動作passを除外）、assetsあり／なし、別の場所へ移した配布版、3回Restart・ESCを確認。生成経路の検証は一時出力で、既存distは上書きしない。</li>
<li>MASTER、全COMPLETE、Month8-1 Python、Month9-2以降のPython、assets、正式カリキュラム区分は変更前ハッシュと一致。Month9-2 Slidevは作成しない。旧docs/18本文も保持。</li>
<li>320×180は縮小構図の確認で、本文を読む推奨サイズではない。Windows代替書体・実音声・教室投影・児童の理解・授業時間の実測は未検証。時間とActive Codingの増加は仮説であり、授業合格とは判定しない。</li>
</ul>
<h2 id="31-情報密度とpage-typeのfocused-grammar">31. 情報密度とPage TypeのFocused grammar</h2>
<p>2026-10-11。Month8-1〜Month9-1の教材表示を更新。28〜30節の学習順・意味色・Hint・正式区分は維持し、画面構造とanchorは本節を優先する。Python／固定ID／assets／時間配分／Coding Levelは変更しない。Month8-3のrandomは本編SHOULDのまま。</p>
<table>
<thead>
<tr>
<th>Page Type</th>
<th>Primary（最初に見るもの）</th>
<th>Secondary</th>
<th>Support</th>
</tr>
</thead>
<tbody>
<tr>
<td>CONCEPT</td>
<td>大きな図・関係・概念コード</td>
<td>Titleと1行のKey Message</td>
<td>短い意味・説明用の注記・Reference</td>
</tr>
<tr>
<td>WORK</td>
<td>作る処理と、その編集／記述位置</td>
<td>番号付きTitleと1つのAction Sentence</td>
<td>編集先・必要時のHint・結果のCHECK</td>
</tr>
<tr>
<td>REVIEW</td>
<td>役割と結果を走査できる一覧</td>
<td>列見出し・対象の名前</td>
<td>作業／Referenceへの帰路</td>
</tr>
<tr>
<td>REFLECT</td>
<td>自分の変更を説明する問い</td>
<td>短い記録欄</td>
<td>次につながる問い・保存・帰路</td>
</tr>
</tbody>
</table>
<ul>
<li>CONCEPTはWhite canvasと図／関係が中心。Target Bar・操作手順・CHECKを置かない。比較は同尺度のREADコードを並べる。REVIEWは行Divider・役割色の表、REFLECTは問い→紙への短い記録とし、大きなコードを再掲しない。既存Overview／Index／Setup／Play／Tune／Optionalは各役割を保つ。</li>
<li>WORKは <code>WORK 01</code> → Title → <strong>Action Sentence</strong> → Target Bar → Main → CHECK。Action Sentenceは1〜2行・1文だけ。「どの条件で、何を変える／書くか」を日本語で示し、完成コードにはしない。上部に集約した対象情報や同じ意味を本文で反復しない。</li>
<li>共通layoutへ <code>grammar: focused</code> と <code>workNumber</code> を明示して適用する。全WORKのTitle y96、Action y164、Target y236／36px高、Main y288、CHECK y640。TimeEstimateは既存分類bandを維持。新anchorは28・29節の旧値に優先し、Lesson別CSSでずらさない。</li>
<li>Target BarのEDIT／配布ファイル名／検索icon＋Ctrl・F／固定ID／Referenceは維持し、薄いNeutral面でMainより弱くする。保存→ESC→再実行は小さい共通cueへ圧縮。初回は▶で再実行する説明も残す。予想・比較・自分のコードを指す説明という活動自体は削らない。</li>
<li>共通 <code>CodeSurface</code> は <strong>READ</strong>＝読む、<strong>EDIT</strong>＝一部を変更、<strong>WRITE</strong>＝自分で1行以上を書く。役割色・編集強調・記入位置の最新Visualは34節を正本とする。色だけでなく文字ラベル・行位置も併用する。一般形／実ファイルの抜粋／教材表示を区別する。</li>
<li><code>CodeSlot</code> は入力フォームではなく教材上の位置。右移動は右辺だけの下線、独立記述は行番号と破線の位置を示す。教材UIの日本語をPythonコメントに偽装せず、「教材表示・入力欄ではありません」を明記。実STARTと文字列が違っても、意味・編集位置・固定IDは一致させる。</li>
<li>完成形は最後のHint／CHECK後／Reviewだけ。Hintの段階・答え・CHECK条件は維持し、開閉しても外側anchorを動かさない。Left／上下／enemy等の独立試行を、最初から完成例へ戻さない。</li>
<li>同義文、タイトルの言い換え、重複Tag、反復手順を削減。主要説明は2〜3行、補足は1〜2行を目安とする。Month8-1の比較実験は目標・設定／予想・結果／次の値・理由の3組で6項目を保つ。共有活動も維持する。</li>
<li>「まずは自分で考える・30〜60秒」の常設表示は使わない。Notesで「最初は完成形を言わず、短く考える時間を取る」と運用する。Hintを使うことは失敗ではない。</li>
<li>受入は実描画で3秒テスト（種別・題名・作る／理解する内容・見る位置）とBlur Test（Title／Main／Action／CHECKの階層）を行う。headlessの原寸・thumbnail・4サイズ、全変更ページと全Hintを確認する。自己レビューを児童による理解の実証とは扱わない。</li>
</ul>
<p>代表4画面のBefore／Afterを先行検証し、右辺の編集位置・2行記述・Rect図の主役化を確定してから36ページへ適用した。Rectの実素材は64×64の3倍表示に照合し、図の倍率と見た目を一致させた。新しい画面構造は、学習到達点や自力記述の支援量の変更ではない。</p>
<h3 id="実描画レビューと検証">実描画レビューと検証</h3>
<p>3案（A＝編集ノート、B＝作業台、C＝コード・ポスター）を比較し、行動→編集位置→結果を一つの作業面で追えるBを採用。代表4画面のBefore／Afterで確定後、全54本編ページを監査した。初稿で上下移動の長いHintとCHECKの重なり、敵Reviewの下端溢れを検出し、補助文の統合と表の余白で解消。注釈の不自然な折り返し・比較の同義文・図のcaptionも再調整した。</p>
<table>
<thead>
<tr>
<th>Skill軸（5点）</th>
<th style="text-align:right">最終</th>
<th>実画面の根拠</th>
</tr>
</thead>
<tbody>
<tr>
<td>Typography</td>
<td style="text-align:right">4</td>
<td>48px Title・28px Action・24px級記述を分離。長いHintと注釈の折り返しを修正</td>
</tr>
<tr>
<td>Composition</td>
<td style="text-align:right">4</td>
<td>WORKの縦の作業面／CONCEPTの空間図／REVIEWの一覧／REFLECTの問いと記録</td>
</tr>
<tr>
<td>Color</td>
<td style="text-align:right">4</td>
<td>行動Blue・変更Red・WRITE Blue-neutral・結果Green。文字と形でも区別</td>
</tr>
<tr>
<td>Visual Hierarchy</td>
<td style="text-align:right">4</td>
<td>右辺slot・2行の記述位置がMain。Target Barは薄く、図と説明は競合させない</td>
</tr>
<tr>
<td>Imagery</td>
<td style="text-align:right">4</td>
<td>実Spriteの64pxと倍率、Rectの透明範囲、token中央からの線を照合</td>
</tr>
<tr>
<td>Consistency</td>
<td style="text-align:right">5</td>
<td>全13 WORKの共通anchorと番号、同じCodeSurface／CodeSlot／Hint／帰路</td>
</tr>
<tr>
<td>Personality</td>
<td style="text-align:right">4</td>
<td>実ゲームとDark Code Surfaceによる制作ノートを保ち、Cardの反復を避ける</td>
</tr>
<tr>
<td>Usability</td>
<td style="text-align:right">4</td>
<td>記入位置は非入力UIと明示。全Hint・focus・keyboard・Reference帰路を確認</td>
</tr>
<tr>
<td>Information Density</td>
<td style="text-align:right">4</td>
<td>常設の秒数、反復4手順、同義文、コード文字列と教材記号の混在を除去</td>
</tr>
<tr>
<td>Page-to-page Rhythm</td>
<td style="text-align:right">4</td>
<td>理解する図→書く面→走査表→問いと記録で、種別をTagだけに依存させない</td>
</tr>
</tbody>
</table>
<p>判定：<strong>PASS（実描画確認済み）</strong>。原寸とthumbnailの3秒自己レビューで、種別・題名・作る／理解する内容・見る位置を識別。Blur TestでもTitle／Action／Main／CHECKの階層を確認した。児童による3秒以内の理解を実証したという意味ではない。</p>
<p>通常／<code>/course/</code>の本番buildを1280×720・1366×768・1024×768・320×180で検査。各URLの54本編＋48 Hint状態、両URL計816状態と432 Notesを確認。最終の短文化・注釈・Notes修正も両URL・4サイズで再撮影（各31状態、16本の注釈、13 WORK Notes）。内容欠け・意図しない外枠scroll・HintとCHECKの競合・実行時エラーなし。注釈はtoken中央との差1px以内、垂直／90度だけ。Index実リンク・矢印キー・HintのEnter／Space・focus・Reference往復／scroll・reloadも確認した。</p>
<p>両build成功。既存のindex.html／CSS minify警告は残る。Python12ファイルの構文確認とGame側25ファイルのSHA-256一致、固定ID・Hint本文・CHECK・ページ順・時間配分の一致を確認。Month9-2・Game・assets・正式カリキュラム区分は変更しない。320×180は構図確認用で、標準Presenterは折り畳まれる。教室投影・Windows代替書体・児童の理解・授業時間は未実測。</p>
<h2 id="32-month8-1完成テンプレートのvisual-grammar">32. Month8-1完成テンプレートのVisual grammar</h2>
<p>2026-10-12。White＋RGB / Editorial × Technical × Gameを維持。教育設計・情報責務・Self-guided Testの正本は<a href="/robot-python-game/instructor/docs/20_instructional_design_principles/">docs/20</a>。本節は表示規則だけを確定する。31節以前の描画記録は当時の履歴であり、Month8-1の現行ページ数・配分・表示は本節とdocs/20・最新Notesを使う。</p>
<h3 id="構図の比較と採用">構図の比較と採用</h3>
<p>新しいArt Directionは探索せず、同じ日本語Sans・Latin／mono・白地・RGB・実ゲームを使う3構図を比較した。</p>
<table>
<thead>
<tr>
<th>案</th>
<th>構成・媒体・表現</th>
<th>最大の弱点</th>
<th>判断</th>
</tr>
</thead>
<tbody>
<tr>
<td>A 現行editorial splitを磨く</td>
<td>左コード／右説明、強い見出し、白約75%・暗いコード約20%・accent約5%。同じblur geometryと実画像</td>
<td>概念と操作を分けても、左右分割の反復でページの目的が弱い</td>
<td>不採用</td>
</tr>
<tr>
<td>B 役割別の比較・概念図・作業順</td>
<td>月×制作matrix、箱の比喩→実コード、一つの作業面→操作→CHECK。Aと同じ書体・配色比率、Type色を上部とgeometryへ</td>
<td>Header等の共通anchorと、異なる構図の密度調整が必要</td>
<td>採用。児童が対応を読み取り、自分で次の行動を選びやすい</td>
</tr>
<tr>
<td>C 実ゲーム中心の大判構図</td>
<td>大きなcropとdisplay、コード・番号を余白へ重ねる。白約60%・実画像／コード約35%・accent約5%。RGBは輪郭と余白だけ</td>
<td>月の比較・実行手順・Hintが視覚的に従属しすぎる</td>
<td>不採用。導入には強いが全Lessonの作業文法にはしない</td>
</tr>
</tbody>
</table>
<h3 id="共通表示">共通表示</h3>
<ul>
<li>主要系統はNAVIGATION / CONCEPT / WORK / REVIEW / REFLECT / OPTIONAL。SETUP / PLAY / TUNEは補助、コード目印GUIDEはSETUP派生。色だけで識別させない。</li>
<li>固定icon：Overview compass、Index list、Setup folder-open、Play gamepad、Concept lightbulb、Work pen-to-square、Tune sliders、Review list-check、Reflect note-sticky、Challenge bolt、Quiz circle-question。Font Awesome Free 7.3.1の実exportを確認。</li>
<li>白canvas。上部176px（約24%）でType tint→transparent。geometryは既存compositionを維持し、Type色を主色にする。Overviewは既存RGBの実ゲームIdentityを維持、IndexはBlue中心。ランダム背景・新しい画像assetsなし。</li>
<li>Type色：Navigation／Work Blue、Concept Violet、Setup Cyan-Blue、Play Warm Orange、Review／Tune Teal、Reflect Navy、Challenge Purple／Quiz Teal。Semantic色（Blue操作・identifier、Red変更、Violet概念／API、Green結果／CHECK、Gray補助）とは別変数で管理する。</li>
<li>四階層：H1 48/60px・800、Action／Key 26/36〜38px・600、Body 18〜22px・400〜500、Meta 14〜17px。Overviewの既存display 64/76pxは実ゲーム導入の例外。コードは28/36pxを基準、比較・概念コードは用途に応じて大きくする。文章全体をBold／色／下線で重ねない。</li>
<li>TimeEstimate：Headerのy72、分類と同じ32px band。白・1px border・shadowなしの小pill。Type色の18px時計＋Dark boldの18px時間。「7 min」と「7分」を実描画比較し、児童の意味理解を優先して「7分」を採用。「目安」はaria-labelで保持し、締切にしない。</li>
<li>CHECK：icon24px列｜CHECK90px列｜message可変列、gap12px・padding10/16px・align-center。Green icon／CHECK・Dark message・薄いGreen面。Greenは確認欄の分類色で、自動で完了した表示ではない。CHECKの意味はobservable result。WORKの位置は全3枚で固定し、Hintで動かさない。</li>
<li>TargetはEDIT（Red）・file（Dark mono）・検索icon（Blue）・Ctrl/F keycaps・固定IDのみ。1行36px、Actionより弱いNeutral面。ReferenceはSupportへ分離する。</li>
<li>RunCueはCtrl/S → ▶再実行。16px補足で「開いているゲームはESCで閉じる」「VS Code右上のPythonファイルを実行」。RによるRestartと再実行を混同させない。</li>
<li>ERRORはAmberの独立面。warning＋ERROR＋見出し＋短い手順。DEBUGだけBlueの明確なリンク。手順のタイトル24px・700、補足18px・400。</li>
<li>SurfaceはCode / Hint / CHECK / Error等の意味の塊に限る。codeの編集数値はRed、初期値表はNeutral。実ゲーム画像と4:3、Optionalの既存機能・固定帰路は維持。</li>
<li>実装はlayoutの <code>template: complete</code> にopt-inし、共通Componentが表示を持つ。他Lessonの本文・レイアウトへはまだ横展開しない。</li>
</ul>
<h3 id="stage-1の実描画レビュー">Stage 1の実描画レビュー</h3>
<p>最初にSETUPを試作し、旧Time CSSがpill内で残る不具合を共通部品のselectorで修正。次に代表6ページを4サイズで撮影した。目印の例は実STARTの日本語コメントと照合して修正し、数値の強調は下線の重複を除去した。問題を修正・再描画してからStage 2へ進んだ。</p>
<table>
<thead>
<tr>
<th>代表</th>
<th>3秒 / Blur</th>
<th>Self-guided・誤認点検</th>
</tr>
</thead>
<tbody>
<tr>
<td>p3 Roadmap</td>
<td>5列の月・3制作band・今ここを先に読む</td>
<td>GAME 2は未定。現在位置と終着点が分かる。カレンダー月の推測なし</td>
</tr>
<tr>
<td>p4 Setup</td>
<td>filenameと通常手順が主、Errorは独立、CHECKが終端</td>
<td>開く→保存→実行→閉じる→再実行、困った時のDEBUGまで追える</td>
</tr>
<tr>
<td>p6 Rules</td>
<td>対象・条件・結果の列。結果の重要語だけGreen</td>
<td>本人の観察を行へ対応付ける。新たな入力課題にしない</td>
</tr>
<tr>
<td>p7 Variables</td>
<td>名前付き箱と暗い実コードが焦点</td>
<td>比喩と実コードを区別、代入は右→左。内部仕様のモデルとして教えない</td>
</tr>
<tr>
<td>p8 Code Guide</td>
<td>3行legend。Card乱立なし</td>
<td>EDIT / READ / SYSTEMの意味だけ。PC操作と混ぜない</td>
</tr>
<tr>
<td>p9 Work</td>
<td>H1→弱いAction→Target→コード→操作→CHECK</td>
<td>実ファイルで数字を変える。固定ID・Hint・保存・ESC・再実行・成功条件を追える</td>
</tr>
</tbody>
</table>
<p>本編70分は試行仮説で、児童によるSelf-guided試用・教室投影の確認は別途必要。</p>
<h3 id="最終レビューと検証">最終レビューと検証</h3>
<p>Stage 2のsize WORKで最後のHintがCHECKへ6px重なり、Usabilityを3とした。コード面の上下paddingを12→8px、Hint前の余白を12→8pxへ変更し、文字サイズ・Hint数・CHECK位置を保って再描画した。Time初稿の旧CSS混在はTypography / Consistencyを3とし、pillのselectorを共通Component文法で修正済み。TUNEの作業リンクはBlue＋矢印へ、REFLECTの復習リンクは小さなSupportへ調整し、普通の本文との誤認を避けた。</p>
<table>
<thead>
<tr>
<th>評価（各5点）</th>
<th style="text-align:right">点</th>
<th>実描画の根拠・修正</th>
</tr>
</thead>
<tbody>
<tr>
<td>Typography</td>
<td style="text-align:right">4</td>
<td>H1→Action→Body→Meta。旧Timeの混在を修正し、コードとHintは縮めない</td>
</tr>
<tr>
<td>Composition</td>
<td style="text-align:right">4</td>
<td>月matrix・比喩とコード・操作とError・作業面・比較表で情報関係を変える</td>
</tr>
<tr>
<td>Color</td>
<td style="text-align:right">4</td>
<td>Type tintと意味色を分離。設定変更Red、結果の重要語Green、操作Blue。文字でも識別</td>
</tr>
<tr>
<td>Visual Hierarchy</td>
<td style="text-align:right">4</td>
<td>Titleが先、Targetは低contrast、Hint・実行はSupport。Blurでも主従を識別</td>
</tr>
<tr>
<td>Imagery</td>
<td style="text-align:right">4</td>
<td>実ゲーム・実sprite・名前付き箱が理解に寄与。架空GAME 2や内部仕様の図を作らない</td>
</tr>
<tr>
<td>Consistency</td>
<td style="text-align:right">5</td>
<td>Type icon / Time / CHECK / Target / RunCueを共通化。3 WORKのanchor、Optional帰路を統一</td>
</tr>
<tr>
<td>Personality</td>
<td style="text-align:right">4</td>
<td>白い制作ノート＋RGB＋実ゲーム＋暗い実コード。別ブランド・汎用Card羅列にしない</td>
</tr>
<tr>
<td>Usability</td>
<td style="text-align:right">4</td>
<td>Hint競合を解消。編集はVS Code、実行条件・CHECK・Reference・retryを確認</td>
</tr>
<tr>
<td>Page-to-page Rhythm</td>
<td style="text-align:right">4</td>
<td>導入→月比較→操作→実ゲーム→ルール→概念→目印→作業→実験→振り返りを一覧でも識別</td>
</tr>
<tr>
<td>Self-guided clarity</td>
<td style="text-align:right">4</td>
<td>目的・編集場所・Hint・実行・成功・次の行動を読み取れる。児童による実証ではない</td>
</tr>
</tbody>
</table>
<p>判定：<strong>PASS（実描画確認済み）</strong>。3秒・Blur・Self-guidedは制作者による点検。原寸・thumbnailで全ページを確認。児童の理解・教室後方席・Windows代替書体・授業時間の実測は未検証。</p>
<ul>
<li>1280×720 / 1366×768 / 1024×768 / 320×180で、通常URLと <code>/course/</code> の各16通常表示＋8 Hint＋Challenge解説＋Quiz24選択を確認。各196状態・計392状態、Notesは各64・計128。内容欠け・Hint競合・画像欠損・実行時エラーなし。320×180は構図確認だけ。</li>
<li>Index16リンク、Reference往復・本文scroll・未知の戻り先・reload、Presenter / Notes、矢印キー、HintのEnter / Space、Quizの正解・不正解・retry・Enter / Space・focus・結果表示までのscrollを確認。HeaderとOptional帰路は固定。WORKのTitle y108 / Target y248 / CHECK y652（1280×720換算）は3枚共通。Optionalナビはy648を維持。</li>
<li>他Lesson47 routeが正常表示。代表3 WORK（Month8-2右移動・Month8-3下移動・Month9-1敵1）は変更前PNGとバイト一致。新文法はopt-inのため、他Lessonの個別レイアウトは横展開していない。</li>
<li>通常・サブパスbuild成功。既存のgenerated index.html警告、CSS minify警告2件、検証outDirがroot外という警告は残る。新規の実行時エラー・依存追加なし。</li>
<li>標準 <code>npm run export</code> は未導入のplaywright-chromiumが必要なため未成功。依存を追加せず専用headless Chromeで各実画面をPDF印刷し、既存pdf-libで16ページへ結合、macOS PDFKitで全ページを再描画。gradient・意味色・書体・baseline・リンクの見た目を確認した。Popplerは未導入。これは検証用PDFで、開閉Hint・Quiz全問／回答・ページ間リンクを完全収録する保証ではない。通常Chromeは使用せず、翻訳無効の専用環境のみ。</li>
<li>Game / MASTER / Lesson Python / assets / 他Lesson本文の41ファイルが変更前SHA-256と一致。Python12ファイルは構文解析成功。固定ID、初期値5・4・各64、Hint3/3/2、MUST / SHOULD / CHALLENGE、Level1は不変。CORE14ページ・Notes計70分とGuideを同期した。</li>
</ul>
<h2 id="33-完成テンプレート追加規則borderlessentityprocess">33. 完成テンプレート追加規則：Borderless・Entity・Process</h2>
<p>2026-10-12。Month8-1のみを再調整。既存White＋RGB / Editorial × Technical × Game、CORE14＋Optional2、詳細Notes計70分、固定ID・正式区分・Hint3/3/2を維持する。32節の旧Time・箱の注釈・TUNE表は実装履歴とし、本節を最新の表示正本とする。教育上の責務はdocs/20の10節。</p>
<h3 id="既存identity内の実装比較">既存Identity内の実装比較</h3>
<p>新しいArt Direction探索ではない。全案で同じ日本語Sans／mono、白地、RGB、暗い実コード、固定Type iconを使う。白約75%、意味のある図／コード約20%、アクセント約5%を目安に、実描画で主従を点検する。</p>
<table>
<thead>
<tr>
<th>案</th>
<th>構図・図の役割</th>
<th>最大の弱点</th>
<th>判断</th>
</tr>
</thead>
<tbody>
<tr>
<td>A 箱＋token直下注釈／同じ高さの横Process</td>
<td>明確なラベル帯と値のContainer、実コードに直接3注釈、5段階を番号・矢印で結ぶ。blurは端だけ</td>
<td>label幅と既存CSSの競合を実DOMで調整する必要</td>
<td>採用。読む順・実コード・作業の対応が直接的</td>
</tr>
<tr>
<td>B 立体箱＋段差付きProcess</td>
<td>蓋や奥行きをコードへ対応、過程を階段状に見せる。既存色の濃淡だけで立体表現</td>
<td>教える対象にない奥行きと視線の上下移動が増える</td>
<td>不採用</td>
</tr>
<tr>
<td>C 大きな値＋帯状Process</td>
<td>値を大きく切り取り、幅いっぱいの帯へコード・段階を配置</td>
<td>記号や補助説明が値の強さに従属し、Typeと優先度が混ざりやすい</td>
<td>不採用</td>
</tr>
</tbody>
</table>
<h3 id="共通文法">共通文法</h3>
<ul>
<li>Headerは白、上部176pxの薄いType gradient、固定icon・label・構図を維持。CONCEPTは青紫 <code>#6D28D9</code>、CHALLENGEは赤紫 <code>#A21CAF</code>（gradientは <code>#FAEDF9</code>）。IndexのCHALLENGE Tagも同色とする。QUIZはTeal。全面濃色Headerにしない。</li>
<li>Borderlessが原則。Time / Error / badge / Target / Hintはtint・余白・文字で区別する。境界に意味のある図・keycap・table divider・form／Quiz選択肢だけ枠を残す。keyboard focus ringは消さない。</li>
<li>Semantic（操作・変更・結果）とEntity（対象識別）を別レイヤーにする。EntityはPlayer Blue <code>#1D4ED8</code>、Enemy Red <code>#B91C1C</code>、Item Amber（文字 <code>#92400E</code>／badge <code>#FDE68A</code>＋Dark）、Collision Violet <code>#6D28D9</code>。実sprite・対象名も併記し、画像自体を再着色しない。</li>
<li>結果のGreenは <code>#15803D</code> へ少し明るくする。結果列はDark baseで重要語だけGreen。CHECKはborderなし・薄いGreen面の icon｜CHECK｜message、同じbaselineを維持。Greenは確認欄の分類色で、自動完了表示ではない。</li>
<li>TimeはActivity（SETUP / PLAY / WORK / TUNE / REFLECT）だけ。Overview / Index / Concept / Review / Code Guideには出さない。Optionalは個別判断、現行Month8-1ではなし。</li>
<li>TimeEstimateで近い <code>1 / 3 / 5 / 10 / 15 / 20</code> 分へ丸める（同距離なら大きい方、20分超は5分刻み）。表示はType色の時計＋ <code>5 min</code>、white/translucent、border・shadowなしの小pill。上端y72、分類と同じ32px band。「目安」は文字で出さずaria-labelに約○分を持つ。詳細時間・締切・総授業時間とは区別する。</li>
<li>TargetはEDIT・file・search・Ctrl/F・固定IDだけの弱いborderless帯。RunCueは必ず <strong>[Ctrl] + [S] → ▶再実行</strong>。開いたゲームはESCで閉じる、VS Code右上のPython実行、Rとの違いを短い補足／Notesへ。</li>
<li>優先度は <code>PriorityBadge</code> の <strong>+ EXTRA</strong>。Action前、14px/20pxの小さなNeutral tint、tooltip／aria-labelは「余裕があれば取り組む課題」。Page TypeはWORKのまま。現行p10/p11は正式SHOULDであり、WORK MORE等の新Typeにしない。</li>
<li>RGB blurは非操作のDecorative layer。1〜3個、既存page-specific composition、端／角、強いぼかし。主shapeはType色、補助はRGBを控えめに戻す。情報のEntity色や状態表示とは混同させない。geometryに本文・時刻・乱数を混ぜない。</li>
<li>4階層（H1 / Action / Body / Meta）、暗いコード面、observable CHECK、既存opt-in <code>template: complete</code> を維持。他Lessonの本文・個別レイアウトへはまだ横展開しない。</li>
</ul>
<h3 id="代表ページの情報関係">代表ページの情報関係</h3>
<ul>
<li>p3：matrix・実GAME 1画像・未定のGAME 2を維持。下部は「GAME 1で基礎→GAME 2で転用→自分の工夫」という見通しにし、「今日の数字変更」を知っている前提を外す。月の対応・役割は既存正本通り。</li>
<li>p4：通常手順・filename・CHECKは維持。ErrorはAmber tintだけの独立面、DEBUGはBlue interactive。Timeは5 min（詳細配分7分）。</li>
<li>p5：大きな実ゲーム・4:3・操作と観察の構図は維持。対象名と既存ゲーム注釈にEntity色だけ適用。Timeは15 min（詳細14分）。</li>
<li>p6：表を維持。対象名は実sprite＋borderless Entity badge。結果はDark＋重要語Green。Entityは「何」、結果色は「どうなった」の別関係。</li>
<li>p7：名前をContainer上部の帯、値を内部へ。右のコードは <code>player_speed = 5</code> 一回だけ。既存CodeAnnotationで実token中央／下端をDOM計測し、垂直優先、必要時のみ90度、斜線なし。注釈は「変数名／代入／値」の意味だけ。コード下に短く右→左の代入を説明し、大きな左矢印・再分解コード・下部問いは除く。問いはNotesへ。</li>
<li>p8：3-row legendを維持。EDIT Red fill / READ Blue fill / SYSTEM Gray fill。冗長な下部説明を外し、最初のWORKへのリンクだけ残す。</li>
<li>p9–11：大きな再設計はしない。Time丸め・RunCueの+・p10/p11のEXTRA・borderlessを適用。Title / Target / Main / CHECKの外側anchorとHint数を維持。</li>
<li>p12：表をなくし、左→右の「01目標→02予想→03変更→04比較→05次の値」。大番号・短label・小例の3層、5枚のCardにしない。変更Red、比較Green、他はDark／Teal、矢印は淡いTeal。下に軽い設定リンク、紙の記録はMeta。5→8→7は例と明示し、固定の変更値・正解にしない。目標・設定・予想・結果・次の値・理由は残す。</li>
<li>p13/p14：本文・静かな情報構造は維持。p14のTimeは5 min（詳細6分）、背景・共通部品だけ適用。</li>
</ul>
<p>詳細時間を画面表示へ丸めても、活動量・正式区分・CORE時間を改訂したとは扱わない。最新の制作レビューは本節末尾、運用はGuideのMonth8-1 BriefとNotesを使う。</p>
<h3 id="追加調整の実描画レビューと検証">追加調整の実描画レビューと検証</h3>
<p>Stage 1はp3 / p4 / p6 / p7 / p8 / p9 / p10 / p12を先に試作し、4サイズ・32画面でBefore / Afterを確認した。p7では既存CSSにより箱のラベル帯が内部で狭くなる不具合を検出し、Container幅へ統一。p12では旧リンクCSSにより選択文が右へ寄る不具合を検出し、Flow下の左起点へ戻した。Hint本文の不要な左枠も取り除いた。情報・文字サイズ・Hint数を削って収める修正はしていない。</p>
<table>
<thead>
<tr>
<th>評価（各5点）</th>
<th style="text-align:right">点</th>
<th>実描画の根拠</th>
</tr>
</thead>
<tbody>
<tr>
<td>Typography</td>
<td style="text-align:right">4</td>
<td>4階層を維持。p7は実コード一回＋意味だけの注釈、p12は番号・段階・例の3層</td>
</tr>
<tr>
<td>Composition</td>
<td style="text-align:right">4</td>
<td>箱とコードの対応、横Process、比較表、実ゲームで情報関係を変える。ラベル帯・選択文の位置を修正</td>
</tr>
<tr>
<td>Color</td>
<td style="text-align:right">4</td>
<td>Concept青紫／Challenge赤紫、Entity／結果色を分離。名前・sprite・ラベルも併用</td>
</tr>
<tr>
<td>Visual Hierarchy</td>
<td style="text-align:right">4</td>
<td>TimeはActivityのみ、Targetは弱い帯、EXTRAはAction前の小さな優先度。Blurでも主役を保つ</td>
</tr>
<tr>
<td>Imagery</td>
<td style="text-align:right">4</td>
<td>実ゲーム・実spriteを維持。箱は比喩と明示、Processは予想と比較の関係を示す</td>
</tr>
<tr>
<td>Consistency</td>
<td style="text-align:right">5</td>
<td>opt-in共通文法でTime / CHECK / Target / RunCue / EXTRAを統一。既存Annotationを再利用</td>
</tr>
<tr>
<td>Personality</td>
<td style="text-align:right">4</td>
<td>White＋RGB、暗い実コード、遊びのある端のblurを維持。別ブランド・汎用Card列へ変えない</td>
</tr>
<tr>
<td>Usability</td>
<td style="text-align:right">4</td>
<td>token中央起点、HintとCHECKの非競合、固定ID、保存＋再実行、Reference帰路とretryを確認</td>
</tr>
<tr>
<td>Page-to-page Rhythm</td>
<td style="text-align:right">4</td>
<td>Roadmap／操作／実ゲーム／表／箱／legend／WORK／横Process／静かな振り返りを一覧でも識別</td>
</tr>
<tr>
<td>Self-guided clarity</td>
<td style="text-align:right">4</td>
<td>編集対象、予想と比較、EXTRAの優先度、終了条件が読める。本人による選値と理由を残す</td>
</tr>
</tbody>
</table>
<p>判定：<strong>PASS（制作者による実描画点検）</strong>。3秒テストではType・主題・次の行動、Blurでは主従・塊・横の流れ、Self-guidedでは実ファイルへ移る手順と結果確認を点検した。特にp7は箱の名前／値と代入、p12は左→右の5段階を確認。実際の児童の理解・教室投影・授業時間の実測による合格ではない。</p>
<ul>
<li>1280×720 / 1366×768 / 1024×768 / 320×180、通常URLと <code>/course/</code> で全16ページ・8 Hint・Challenge解説・Quiz24選択を確認。各196状態・計392状態、Presenter Notesは各64・計128。内容欠け・画像欠損・Hint競合・実行時エラーなし。320×180は構図のthumbnail点検で、本文の可読性保証ではない。</li>
<li>p7の3注釈は実DOMのtoken中央／下端から1px以内で開始し、垂直／90度だけ。注釈重複なし。p12は5列同じbaseline、Card枠・表なし、選択リンクは左起点、例の数値は任意と明示。</li>
<li>Index16リンク、Reference往復・scroll・未知の戻り先、Presenter / Notes、矢印キー、HintとQuizのEnter / Space・focus、正解／不正解／retry、Optional固定帰路を確認。最終並列チェックのreload1件は400msの判定時点に描画が未完了。描画完了を待つ方式で3 route×3回×4サイズの36 reloadを再検証し、全て正常表示・エラーなし。アプリ側へ待ち処理を追加していない。</li>
<li>他Lesson47 routeが正常表示。代表3 WORK（Month8-2右移動・Month8-3下移動・Month9-1敵1）は変更前PNGとバイト一致。他Lesson本文・個別レイアウトへの横展開は未実施。</li>
<li>通常・サブパスbuild成功。既存のgenerated index.html警告、CSS minify警告2件、検証outDirがroot外という警告は残る。新規依存追加なし。</li>
<li>翻訳無効の専用headless Chromeで16ページをPDF印刷し、既存pdf-libで結合、macOS PDFKitで全ページを再描画。gradient / RGB blur / borderless面 / badge / Annotation / Time / CHECK / Processを確認。標準Slidev exportは未導入playwright-chromiumが必要で、今回も既存環境による代替検証。開閉Hint・Quiz全問／回答・ページ間リンクの完全収録を保証する配布PDFではない。通常Chromeは使わない。</li>
<li>Game / MASTER / Lesson Python / assets / 他Lesson本文の41ファイルは変更前SHA-256と一致。正式カリキュラムdocs/01・02・06と監査docs/18も不変。固定ID・Hint3/3/2・MUST / SHOULD / CHALLENGE・CORE14＋Optional2・詳細Notes70分を維持し、Guideへ同期した。</li>
</ul>
<h2 id="34-labeltargetsoft-zoneの追加文法">34. Label・Target・Soft Zoneの追加文法</h2>
<p>2026-10-12。Month8-1の追加調整で確定した共通文法。新しいArt Direction探索は行わず、White＋RGB / Editorial × Technical × Gameを維持する。33節の一般規則を継承し、Badge・Timeのサイズ・Target・EXTRA位置・変数図・Processは本節を最新の表示正本とする。Month8-1の正式区分・固定ID・CORE14＋Optional2・詳細Notes70分は不変。WRITEのChange family適用は下記のMonth8-2局所修正だけとする。</p>
<h3 id="再利用する共通表示">再利用する共通表示</h3>
<ul>
<li><strong>Fill Badge</strong>：短い分類・役割・Entity識別に限る。borderなし、compact padding、radius 4px、shadowなし、高contrast文字。Entityは既存の <code>.target-name</code>、コード役割は共通 <code>Tag</code>／<code>.lesson-tag</code> の同じ基本CSSを使う。標準20px/28px・padding 4px 8px、Code Surfaceの密度用は18px/24px・padding 2px 8px。本文のvariable／API、実コードやQuizの選択肢内の語へ無差別に適用しない。</li>
<li><strong>Entity Badge</strong>：Player Blue fill／white、Enemy Red fill／white、Item Amber fill／Dark、Collision Violet fill／white。色値は33節を継承。p5「見るところ」とp6対象列で同じ表現を使い、sprite・日本語名を併記する。sprite自体・実ゲーム全景は再着色しない。結果列はDark base＋重要結果語だけGreenのまま。</li>
<li><strong>Code Role Badge</strong>：READ Blue fill／white、EDIT／WRITE Red fill／white、SYSTEM Gray fill／white。WRITEも実際に変更・記述するChange familyであり、Blueにしない。短い役割Labelは共通Fill grammarへ揃え、outline／text-only／fillを混在させない。FILEはファイル情報のMetaでありコード役割ではない。EDIT highlightはtoken＝Red textのみ（背景なし）、range＝Red underline／bracket（背景は原則なし）、block＝複数行・領域全体を編集する場合だけlight red surface可。単一tokenにRed背景を使わない。WRITE SlotはDark Code Surface上の16〜18%程度のTranslucent Red（Month8-2は16%を採用）とし、文字・番号・記入指示はWhiteまたはVery Pale Pink（Month8-2は<code>#FFECEC</code>、Red／Dark Red文字は使わない）で十分なcontrastを確保する。border／shadowなしで、白い入力欄やbuttonに見せない。Solid Red＋WhiteはWRITEのRole、Translucent Red＋White系文字は新しく書く教材用領域、背景なしのRed textは変更する既存tokenとして区別する。今回のWRITE適用はMonth8-2左／上下WORKだけで、他Lessonへ自動展開しない。</li>
<li><strong>TimeEstimate</strong>：完成テンプレートだけ38px高（32pxから約19%増）、時計22px、時間24px/28px・700、border／shadowなし。分類の32px bandと中心y88を揃え、pill上端y69。Activity限定・丸め・詳細Notesとの区別は33節のまま。H1より弱いmetadataとする。</li>
<li><strong>Token / Range Annotation</strong>：既存CodeAnnotationへ任意の <code>mode: 'range'</code> を追加。既定はTokenのまま。Tokenの規則は19.12節。Rangeは同じ行の文字範囲の実DOM左右端・下端を計測し、下4〜12pxのコの字bracketから範囲中央で説明へ接続する。垂直優先／必要時90度、斜線なし。範囲は出現順・重複なしのmatchに限り、複数行を一つの範囲として包まない。フォント確定・resize時に再計測し、Slidev縮尺を補正する。</li>
<li><strong>Target Bar</strong>：完成テンプレートのTryBlockは <code>FILE filename ｜ 検索icon [Ctrl] + [F] → [固定ID]</code> の1行。FILEは開くファイル、検索キーから矢印の直後へ続くIDは実際に検索する文字列。FILEはGray Meta、filenameはDark mono18px、検索icon／arrowはBlue、keycapはDark、IDはBlue mono20px・600。TargetにEDIT Badgeを置かず、IDをRedにしない。Targetは「場所を探す」、直下のDark Code SurfaceのEDIT BadgeだけがWORKの「ここを編集する」を示す。帯はMain Code Surfaceより弱く、Referenceは既存Supportへ分離する。</li>
<li><strong>EXTRA</strong>：layoutの <code>priority: extra</code> でWORK Type label／番号の近くへPriorityBadgeを出す。WORKと同程度の20px/24px・700、32px高、Blue/Cyan（文字 <code>#075985</code>／面 <code>#E0F2FE</code>）、borderなし。Greenは結果／成功／CHECKのために残し、EXTRAでは使用しない。Actionには作業指示だけを残す。現行p10／11の正式SHOULDと、Tooltip／aria-label「余裕があれば取り組む課題」は維持する。新Page Type・MUST昇格・Hintロックではない。</li>
<li><strong>Soft Zone</strong>：情報領域の軽い背景面。border／shadowなし、very light tint、radius 5px、十分な内余白。独立Cardや操作buttonとして扱わない。内容の方向と配置の方向を一致させ、番号・矢印・大分類でも関係を示す。Container理解のためのp7箱illustrationのsoft shadowは、この情報面とは別の図法。</li>
<li>実装は既存 <code>template: complete</code> へopt-in。既存LessonのToken AnnotationとTargetは既定表示を保ち、他Lesson本文へはまだ横展開しない。</li>
</ul>
<h3 id="ページの適用">ページの適用</h3>
<ul>
<li>p3はGAME 1／GAME 2／FINALの大分類bandを主、Month8〜12のSoft Zoneを従とする。既存の月・役割・学習内容を増やさず、横方向で制作との対応を読む。</li>
<li>p5／6は同じEntity Fill Badge。p6結果の重要語Greenと対象識別色を別責務にする。p8とChallengeは同じCode Role Tag。</li>
<li>p7はCSS＋inline SVGの教材用Flat storage box。少しの奥行き、白いlabel sticker「箱の名前 player_speed」、内部の大きな「中の値 5」、Violet／Blue、控えめなsoft shadow。外部画像・写真・リアル3D・追加assetsは使わない。理解用の比喩と明示し、Python内部のメモリモデルとして教えない。</li>
<li>p7の実コードは <code>player_speed = 5</code> 一回だけ。変数名全体をRange bracket、<code>=</code>と<code>5</code>をToken Annotationで「変数名／代入／値」へ接続。代入の短い説明はコード直下、追加の問いはNotesだけ。</li>
<li>p9〜11は既存H1／Action／Target／Main／CHECKのanchorとHint3/3/2を維持。EXTRA移動後も新しい空欄・課題・制限を作らない。</li>
<li>p12は5等分Grid（208px×5・gap36px）、borderless Soft Zone内で番号／短い段階名／1行説明／小例の4層。Zone中央へ揃え、矢印は隣接Zone間の中央・同じ高さ。変更だけRed、比較だけGreen、他はDark／Teal。5→8→7は例で、本人が値と理由を選ぶ。下の調整候補・紙の6項目記録・CHECKは維持する。</li>
</ul>
<h3 id="試作修正と最終評価">試作・修正と最終評価</h3>
<p>代表p7を最初に1280×720で実装・確認した。箱名／内部の5／実コードの一回表示／RangeとTokenの接続を点検し、8軸を各4とした。次にp6・p9・p10・p12へ展開し、Before / Afterを確認。p6の既存Fill色は維持して共通grammarへ揃え、p5へ同じ表現を展開した。</p>
<p>p12では内余白を広げた際、予想の例が2行へ折れ、CHECK下端がy714となって安全域を6px超えた。Typography / Composition / Usabilityを3として不合格とし、「変える値を考える」「速さを上げる」へ短く修正。文字を縮めず4サイズで再描画し、説明・例が1行、Zone高さ226px、CHECK下端y686へ戻った。矢印の外側への張り出しは意図したZone間の接続で、本文の幅超過とは別に計測した。</p>
<table>
<thead>
<tr>
<th>評価（各5点）</th>
<th style="text-align:right">点</th>
<th>実描画の根拠・修正</th>
</tr>
</thead>
<tbody>
<tr>
<td>Typography</td>
<td style="text-align:right">4</td>
<td>H1を主役にTime24px、Badge20px／密度用18px、Process4層を識別。p12折り返しを短いcopyで解消</td>
</tr>
<tr>
<td>Composition</td>
<td style="text-align:right">4</td>
<td>名前sticker＋内部の値、1行の3情報Target、Header優先度、横5 Zoneで関係を表す</td>
</tr>
<tr>
<td>Color</td>
<td style="text-align:right">4</td>
<td>Entity／役割Fillと結果Greenを分離。Badge文字contrast最小6.47:1、Amber／Dark7.28:1</td>
</tr>
<tr>
<td>Visual Hierarchy</td>
<td style="text-align:right">4</td>
<td>H1／作業が先、Timeはmetadata、FILEはMeta、EDIT IDが編集先。EXTRAは分類より弱い</td>
</tr>
<tr>
<td>Imagery</td>
<td style="text-align:right">4</td>
<td>Flat箱で名前と中身を対応、実spriteを維持。外部画像・リアル3D・架空ゲームを追加しない</td>
</tr>
<tr>
<td>Consistency</td>
<td style="text-align:right">5</td>
<td>p5／6は同じEntity CSS、p8／Target／Code Surface／Challengeは共通Tag、既存Tokenは既定表示を維持</td>
</tr>
<tr>
<td>Personality</td>
<td style="text-align:right">4</td>
<td>White＋RGB、暗い実コード、Flat技術図を維持。Soft Zoneにshadow／outline／擬似操作を加えない</td>
</tr>
<tr>
<td>Usability</td>
<td style="text-align:right">4</td>
<td>File／検索／編集先を1行で判別。Annotationは実幅起点、Hint競合なし、p12安全域の問題を修正</td>
</tr>
<tr>
<td>Page-to-page Rhythm</td>
<td style="text-align:right">4</td>
<td>matrix→実ゲーム→結果表→箱と実コード→legend→WORK→5段階Process→静かな振り返りを維持</td>
</tr>
<tr>
<td>Self-guided clarity</td>
<td style="text-align:right">4</td>
<td>開くファイル・検索キー・固定ID・実行・CHECK、追加優先度、Process説明と例を本人が読み取れる</td>
</tr>
</tbody>
</table>
<p>判定：<strong>PASS（実描画確認済み・制作者による点検）</strong>。3秒はType／主題／作業先、Blurは箱とコード・弱いTarget・HeaderのEXTRA・横Processの主従、Self-guidedはファイル→検索→編集→保存／再実行→CHECKを点検した。箱の比喩・数値例を正解や内部仕様として扱わない。児童試用、教室後方席、Windows代替書体、実授業時間の実測は未検証。</p>
<ul>
<li>1280×720 / 1366×768 / 1024×768 / 320×180で、変更12ページ・48通常画面と重点5ページのBlurを再描画。対象ページの描画確定とフォント確定を待ち、Time7 Activity・Badge18箇所・Target3情報・5 Zone中心／矢印中央・非重複・安全域をDOM計測した。320×180は構図点検だけ。</li>
<li>最終buildの通常URL／<code>/course/</code>で全16ページ＋8 Hint＋Challenge解説＋Quiz24選択を確認。各196状態・計392状態、Presenter Notesは各64・計128。内容欠け・Hint競合・画像欠損・実行時エラーなし。Range左右端／下端とToken起点は実DOMから1px以内、斜線・ラベル重複なし。</li>
<li>Index16リンク、Navigation、Reference往復／scroll／未知の帰路／reload、Presenter／Notes、Hint・Quiz・Challengeのkeyboard／focus、Quizの正解／不正解／retryを確認。WORK外側anchor・Optional帰路は維持。</li>
<li>他Lesson47 routeが正常表示。代表4画面（Month8-2右移動・キー説明、Month8-3下移動、Month9-1敵1）は変更前PNGとバイト一致。共通Annotation拡張のToken既定表示とTryBlockの旧表示に波及なし。</li>
<li>通常／サブパスbuild成功。既存generated index.html警告・CSS minify警告2件・検証outDirがroot外という警告は残る。依存追加なし。</li>
<li>翻訳OFFの専用headless Chromeで16ページをPDF印刷し、既存pdf-libで結合、macOS PDFKitで全ページをPNGへ再描画。Fill／Amber文字、箱、Annotation、Target、Time、Soft Zone、矢印を原寸・一覧で確認。標準Slidev exportに必要なplaywright-chromiumとPopplerは未導入で、既存環境による代替検証。Hint／Quiz全問・回答／ページ間リンクの完全収録を保証する配布PDFではない。</li>
<li>Python12ファイルは構文解析成功。Game／MASTER／Lesson Python／assets／他Lesson本文の41ファイルは変更前SHA-256と一致。固定ID・正式区分・CORE14＋Optional2・Hint3/3/2・詳細Notes70分を維持。</li>
</ul>
<h3 id="work共通uiの最終微調整受入">WORK共通UIの最終微調整・受入</h3>
<p>2026-10-12。上の試作・評価は微調整前の記録。現行WORKはこの34節のTarget／EXTRA規則を使う。代表のenemy_speed WORKを先に実描画し、検索キー→検索文字列が一続きになり、Code SurfaceだけにEDITが残ることをBefore / Afterで確認。EXTRAは20pxのWORK分類と同じ級・同じ32px band、Cyan面とBlue系文字へ揃えた。新しいArt Direction・Page Type・学習課題は追加していない。</p>
<table>
<thead>
<tr>
<th>Skill評価（各5点）</th>
<th style="text-align:right">点</th>
<th>実描画の根拠</th>
</tr>
</thead>
<tbody>
<tr>
<td>Typography</td>
<td style="text-align:right">4</td>
<td>WORK／EXTRAは20px、H1とコードが主役。FILEはMetaのまま</td>
</tr>
<tr>
<td>Composition</td>
<td style="text-align:right">4</td>
<td>外側anchorを変えず、検索キー→IDの連続性を回復</td>
</tr>
<tr>
<td>Color</td>
<td style="text-align:right">4</td>
<td>検索はBlue、編集はRed、EXTRAはBlue/Cyan、CHECKはGreen</td>
</tr>
<tr>
<td>Visual Hierarchy</td>
<td style="text-align:right">4</td>
<td>Targetは探す帯、Dark Codeは編集対象。Header優先度と本文を分離</td>
</tr>
<tr>
<td>Imagery</td>
<td style="text-align:right">4</td>
<td>実コード・検索icon・keycapの対応を保ち、新しい装飾を追加しない</td>
</tr>
<tr>
<td>Consistency</td>
<td style="text-align:right">4</td>
<td>全3 WORKのTargetを共通部品で統一。EXTRAは既存2対象のみ</td>
</tr>
<tr>
<td>Personality</td>
<td style="text-align:right">4</td>
<td>White＋RGB／暗いコードの既存Identityを維持</td>
</tr>
<tr>
<td>Usability</td>
<td style="text-align:right">4</td>
<td>矢印の直後が検索文字列。EDIT重複・Header／Hint／CHECK干渉なし</td>
</tr>
</tbody>
</table>
<p>判定：<strong>PASS（実描画確認済み・制作者点検）</strong>。Targetだけで「ファイル→検索操作→検索するID」を読み取れる関係を確認した。1秒で児童が理解できるという実測保証ではない。</p>
<p>1280×720／1366×768／1024×768／320×180で、通常URLと <code>/course/</code> の各3 WORK＋8 Hint、計88状態・Presenter Notes24状態を確認。TargetにEDITなし、Code SurfaceのEDIT各1つ、ID Blue、EXTRAはHeader内20px／Cyan・Greenなし、固定anchor維持・欠け・競合・実行時エラーなし。320×180は構図確認だけ。他Lesson代表4画面は既存PNGとバイト一致。通常／サブパスbuild成功、既存警告は残存。Python／Game／assets／固定ID／Page構成／本文・Hint／正式SHOULDは変更していない。</p>
<h2 id="35-補助navigationsupporting-noteconcept活動">35. 補助Navigation・Supporting Note・Concept活動</h2>
<p>2026-10-14。34節のRole・Time・WRITE色を維持した追加文法。新しいArt Directionではない。教育上の責務はdocs/20、Month8-3の適用・受入はdocs/16を参照する。</p>
<ul>
<li><strong>Navigation Link Surface</strong>：Reference・補助ページへの本文リンクへ <code>navigation-link</code> を明示する。薄いBlue面 <code>#EFF6FF</code>、Blue文字 <code>#1D4ED8</code>、18px/28px・600、padding 4px 10px、radius 4px。border／shadow／常時下線なし。hoverは <code>#DBEAFE</code>、focusは3px ring。末尾に同じBlueの <code>↗</code> を一つだけ表示する。Header・Index・表・固定帰路は既存の操作領域を維持し、全部を小さいpillへ変換しない。</li>
<li><strong>Arrow</strong>：<code>→</code> はページ内の流れ・工程・操作（Ctrl + F → 固定IDなど）、<code>↗</code> は別ページ／Reference／補助情報への移動。戻る操作の既存 <code>←</code> は維持する。リンク文字・hover・focusも併用し、矢印だけに操作意味を依存させない。</li>
<li><strong>Supporting Note</strong>：補足は短い見出し＋本文1〜2行、枠・shadow・原則背景なしでまとめる。見出し22px/30px・600、本文20px/30px・400・Dark、まとまり間20px程度。複数対象は短い対象名と説明を整列し、Entity／Semantic色は名前・keywordへ限定する。小見出しから本文までの余白を詰め、Cardを量産しない。</li>
<li><strong>Diagram Soft Zone</strong>：一つの空間関係・範囲だけを軽い面へまとめる。ページ全体、API Dark Surface、右側のREAD材料まで一緒に囲わない。34節のborderless規則を継承し、SVG内部でも16px前後以上の余白を確保する。実寸・尺度・anchor・判定の意味を変えず、Captionは図より弱くする。</li>
<li><strong>WRITE Slot copy</strong>：Actionは実現したいこと・考え方、Slotは記入位置・何を書くか・行数だけ。例は「敵を下へ動かす1行」「下へ出たか調べる条件／上へ戻す1行」。完成式や計算説明をSlotへ重ねない。34節の16% Red＋Warm White等の表示規則は変更しない。</li>
<li><strong>Concept Activity</strong>：H1は理解する概念、Key Messageは短い原則、既存の問いはActivityとして区別する。必要なページで「01 予想 → 02 比較 → 03 自分のコード確認」を順に読む。問いは22〜24px級・SemiBold・DarkでH1より弱くする。コード比較や自分の既存行を確認する活動であり、新しい記述量・成果物・到達条件を増やさない。</li>
</ul>
<p>明示classだけで再利用可能にし、今回の適用はMonth8-3本文に限定する。既存LessonLink／帰路／Routerを再利用し、新ComponentやNavigationシステムは追加しない。</p>
<h3 id="共通文法のバックポート方針">共通文法のバックポート方針</h3>
<p>共通デザイン文法を更新した場合、既存Lessonへの適用可能性を必ず監査し、適用可能な箇所へ最小バックポートする。ただしLesson固有の意図との衝突、情報密度の悪化、学習内容の変更が必要、既存表現の方が明確な場合は無理に統一しない。変更対象を明示した依頼ではその範囲を優先し、範囲外は監査結果・次タスクへ引き継ぐ。今回のバックポートはMonth8-1だけで、Month8-2は別タスクとする。</p>
<h2 id="36-code-placement-context">36. Code Placement Context</h2>
<p>2026-10-14。コードを書くWORKでは、何を書くかと、どこへ書くかを分離して支援する。教育上の責務はdocs/20、Month9-2への適用はdocs/21を参照する。</p>
<ul>
<li>位置関係が重要なif／for／while／nested blockや、同じindentへ行を追加する課題では、WRITE Slotだけを孤立表示せず、必要最小限の周辺READ／SYSTEMをDark Code Surface内へ表示する。省略した基盤は省略と明示し、実コードの順序を維持する。</li>
<li>周辺は弱いNeutralのREAD／SYSTEM、生徒の記述位置だけは既存のWRITE Badge＋16% Red surface／<code>#FFECEC</code>。border／shadowを追加しない。インデントはコードとSlotの横位置で示し、空白数の文章は補助Metaとする。</li>
<li>WHEREの提示でWHATの完成答えまで露出しない。未習の書き始めを固定支援として渡す場合、考えて書く部分との境界を明示する。一般文法の講義へ広げない。スライドは入力欄ではなく、実際の編集はVS Code。</li>
<li>既存の条件と内側の2行WRITEは、2行目のSlotを右へ下げてblock構造を示す。既に周辺や記入位置が明確なページへ無理にコードを増やさず、全Hintを開いた時の操作・CHECK干渉も検証する。</li>
</ul>
<h2 id="37-diagram-connectorsemantic-text-grouping">37. Diagram Connector・Semantic Text Grouping</h2>
<p>2026-10-14。Month9-3の局所改善。既存Identity・Page Type・学習内容は維持する。</p>
<ul>
<li><strong>Diagram Connector</strong>：説明群と対象の対応線は直線を優先、必要時のみ90°で1回曲げる。多段折れ・不要な斜線は使わない。始終点は対応対象の中心位置／中心高さへ合わせ、文字・spriteに重ねず余白を残す。細いNeutral線とし、方向に意味がない時は矢印なし。画像全体への処理対応は画面の縁へ接続し、実sprite座標の注釈とは区別する。Code Annotationは19.12節、座標軸・移動経路・範囲bracketは各図の正確な形状を優先する。</li>
<li><strong>Semantic Text Grouping</strong>：説明が3項目以上続き、意味のまとまりが異なる時は、短見出し＋本文、keyword色、Soft Zone、Supporting Note、番号、Role／Entityのいずれかで主従・役割を示す。同じ意味の本文を無理に多色化しない。Soft ZoneとSupporting Noteの基本表示は34・35節を再利用し、装飾Cardを増やさない。</li>
<li><strong>Concept Mini Series</strong>：関連する2枚はCONCEPTのまま、分類と同じbandに小さな「AI 1 / 2」「AI 2 / 2」等のSeries Metaを添える。新Page Typeにしない。AIそのものはViolet、相談の有効／非推奨はMint／Rose＋短見出し、質問例は薄Violet、補足はBlue、利用条件はGray Meta。色だけに意味を依存させず、AI利用方針・到達区分は変えない。</li>
</ul>
<p>適用・実描画結果はdocs/22。既存Lessonは監査のみとし、空間図の必要な斜線や再配置経路をこの規則で機械的に置換しない。</p>
<h2 id="38-game1-referenceの共通表示">38. Game1 Referenceの共通表示</h2>
<p>2026-10-14。Reference Visual Family。既存reference layout・名前付きroute／hash・borderless・Soft Zone・Supporting Note・Navigation Surfaceを再利用する。Page Type・section railは増やさない。構成・各テーマ・帰路・保守・実描画レビューはdocs/23、Hintとの教育責務はdocs/20。以下はReference専用でLesson本文へ機械的にバックポートしない。</p>
<ul>
<li>White base、上部176pxのごく薄いカテゴリgradient。端／角のRGB blurは低opacity・非操作・本文外を主とし、古いIndex用の装飾図形は使わない。全面濃色・border・shadowは付けない。</li>
<li>Category accent：INDEX Blue／Neutral、操作Cyan-Blue <code>#0369A1</code>、Python Violet <code>#6D28D9</code>、Game Teal <code>#0F766E</code>＋必要箇所Blue、DEBUG Amber <code>#92400E</code>＋error Red、制作Magenta <code>#A21CAF</code>＋AI Violet。Pixnoteは制作family。カテゴリ認識用の色をEntity・変更・成功の意味へ読み替えない。</li>
<li>HeaderはREFERENCE／カテゴリ／本文H1の3階層。inactive navはMuted、activeはカテゴリ色＋薄いtint・文字weightと<code>aria-current</code>。Pixnoteでも制作をactiveにする。hoverは薄tint、focus ringを維持。本文の通常リンクはBlue＋↗、カテゴリ色で無差別に染めない。</li>
<li>H1 40px／52、テーマ見出し30px／42、本文18〜22px（標準21）、実code22px／34、Caption17〜18px。日本語Sans／monoと既存対象色を維持。索引の5カテゴリはicon＋見出し＋主要リンクをvery light category tintのSoft Zoneへ、radius 5px・border／shadowなし。巨大Cardや巨大iconにしない。実codeだけをDark Surfaceへ置く。</li>
<li>Scroll cue「↓ 下に続く」は本文外の28px bandでカテゴリ色・18px。意味のある本文がviewportより下に残る時だけ表示し、hash着地用の末尾余白には反応しない。scroll／resize／route・hash変更後に再判定。button・固定本文の覆い・新しいNavigationにはしない。</li>
<li>Semantic groupingは短見出し・keyword・番号・軽い面で意味を分ける。1区画の主要色は2〜3程度。操作flowはCyan／Blue、Rと再実行の違いはAmber Supporting Note。Pythonは今の値→右の計算→左へ入れる3段階、codeは不変。Gameの位置Blue／軸Teal／注意Amber、DEBUGの症状リンクBlue／注意Amber／error名Red。制作はAI Violet／コピーBlue／画像Magenta。Pixnoteは4工程＋既存のゲーム確認を一つのProcess Soft Zoneへ、任意条件はMutedにする。</li>
<li>Header・カテゴリ・帰路を固定し本文だけscroll。短い「← 作業へ戻る」と、読み上げ用の元作業名を併用。処理順は→。未習事項を索引へ増やさない。</li>
<li>原点・左上anchor・実size・範囲の両端・画像とRect・重なりを正確に図示する。foreignObjectの実spriteは図の領域へ合わせる。縮小模式図をゲームの実寸表示と誤認させない。</li>
<li>hashで開いた最終テーマも見出しへ着地できるscroll余白を確保する。全文PDFではscrollや帰路を保証できないため、完成確認は代表スクリーンショットと実操作を優先する。既存Lesson本文へこのReference用Typographyを波及させない。</li>
</ul>
<h2 id="39-web帰路とinstructor-reading-family">39. Web帰路とInstructor Reading Family</h2>
<p>2026-10-15。Lesson／Reference本文・学習区分は変更せず、Web入口と講師の判断用表示を整える。</p>
<ul>
<li><strong>Home</strong>：context別のWeb入口へ。現行Headerの表示・整列は40節。目次はLesson内、調べるはReference、HomeはWeb入口と責務を分ける。Referenceの有効な「作業へ戻る」は残し、戻り先なしの旧「Lesson一覧」はHomeへ統合する。baseは既存Routerへ委ねる。</li>
<li><strong>小画面の帰路</strong>：Slidev縮尺と独立した44px以上のHomeを、縦長の小画面では余白領域へ表示する。この時Header内の同じリンクを隠し、二重に出さない。標準Presenterの複数previewと印刷には浮動導線を出さない。本文をmobile向けに再設計したとは扱わない。</li>
<li><strong>Instructor Reading</strong>：White、既存Sans／mono、意味のある短見出し・余白・Soft Zone。GuideはBlue／Navy、CanonicalはViolet、Brief／NotesはTeal。区分・状態の現行色と長文の階層は41節。全段落を色付きCardにしない。</li>
<li><strong>Summary first</strong>：要点→重要判断→必要時の詳細。Guideは最初の8項目以内・月の見通し、Canonicalは5か月の見通し・重要判断を先に出し、詳細をnative detailsへ。共通Headerは固定。現行のLesson内構造・本文／TOCの切替は41節。</li>
<li><strong>Details／anchor／印刷</strong>：summaryは44px以上、keyboard focusを維持。直接hashで対象の祖先detailsを開いて着地する。表の横scrollは表内だけ。印刷では折りたたみ本文を表示するCSSを使う。元Markdownは正本のまま、別の全文を手編集しない。</li>
<li><strong>Lesson Brief</strong>：Guide／Canonicalから抽出するQuick Deckへ移行。現行2画面の表示は40節。完全版Guideの代わりにせず、固定された別のBrief原稿を作らない。</li>
<li><strong>Notes</strong>：ページ固有の詳細補助。必要な局所整理だけ「目的／講師が言うこと／見るポイント／困ったら」の短いgroupを使い、一括置換・新しい到達条件・時間変更をしない。今回の既存96 Notesは原文を維持する。実装・検証・公開記録はdocs/25へ。</li>
</ul>
<h2 id="40-共通headerinstructor-quick-deck">40. 共通Header・Instructor Quick Deck</h2>
<p>2026-10-15。39節の帰路とReading Familyを継承する。本文・Notes・カリキュラムは変更しない。</p>
<ul>
<li><strong>Header Navigation</strong>：Home／目次／調べる／作業への帰路は「文字＋↗」。Blue、16px／24px・600、背景・border・shadowなし。共通navのbaseline／24px gapで整列し、ページ個別のmarginやtransformで合わせない。hoverは色＋下線、focusは3px ring。Homeの表示は両contextとも短いHome、行き先だけStudent／Instructorへ分ける。本文の工程矢印→とは区別する。</li>
<li><strong>Page counter</strong>：NavigationではなくMeta。16px／24px・500、mono／tabular numerals、Muted Navy、控えめな字間。同じnav内のbaselineに配置し、OPTIONAL prefixは13px。同じfamilyをQuick Deckでも用いる。番号をBlueリンク色にしない。</li>
<li><strong>Quick Deck</strong>：白地の授業指揮シート。H1 40〜44px、Goal 26px、Section 21px、本文16〜20px、Meta13〜14px。1280×720の1画面を基準に、A＝到達点・MUST／SHOULD・NEW／TRANSFER・80分配分・Completion、B＝症状→対応TOP3・Hint／Reference・遅い／早い生徒・次回・必要なAI。小画面は1列へreflowし、本文を縮小せず縦scrollする。</li>
<li><strong>Quick semantic color</strong>：Goal Navy、MUST／TRANSFER Blue、SHOULD Teal、NEW／AI Violet、Completion Green、Trouble Amber、Meta Gray。重要blockerだけRed。見出し文字・番号も併用し、色だけで区別しない。装飾画像や操作に見える情報Cardを量産しない。</li>
<li><strong>Deck shell</strong>：共通Home、画面tabと現在枚数、下部のGuide／Lesson／Presenterと次画面を定位置へ。CurriculumはViolet familyで全体→Game1→Game2→Final→主要NEW→自走／AIの6画面。全て正本から生成し、表の順序を守る。PCのDeckは読む全文資料ではなく判断用、小画面では同じ項目を縦に読む。</li>
<li><strong>Full Detail typography</strong>：Guide／Canonicalは縦に読む文書。現行の本文幅・文字・段落・意味色は41節。Deckの判断用密度を全文へ流用しない。</li>
</ul>
<h2 id="41-instructor-long-form-reading">41. Instructor Long-form Reading</h2>
<p>2026-10-16更新。公開Guide専用。旧Canonical／Quick Deck／Curriculum Deckは独立UIを廃止し、互換URLからGuideへ転送する。Lesson、Reference、共通Headerへ波及させない。公開情報構造はdocs/25。</p>
<ul>
<li><strong>読む幅とjump</strong>：本文は最大900px。PCは本文＋sticky TOC、900px以下は1列＋native目次。H1 52px（1024px級48px／小画面36px）、H2 34px（小画面30px）、H3 25px、本文19px（小画面18px）／1.75。Metaは14〜16px。本文を縮めて横幅へ押し込まない。</li>
<li><strong>Section boundaryと文章幅</strong>：White baseを維持。MajorはH2と約72px（線前48＋線後24）、Lesson内のSub Sectionは見出しと約48px（線前24＋線後24）、Minorは24〜32px。意味の切替に薄いNeutral Divider、支援・完了・要約・チェック等にだけborderless／shadowなしの控えめなSoft Zoneを使う。全項目をBox化しない。日本語本文は1行40〜55字程度を目安に最大46em、原則1段落2文まで。複数文は同じ項目の中で縦に積み、右の空きを埋めるために横へ詰めない。</li>
<li><strong>Guideの入口</strong>：この5か月→授業前チェック→共通ルール→Page Typeと講師の役割→困った時の支援→Lesson別→確認待ちの7章。Game1→Game2→Finalは3段階の細い意味色ルールと短い文で示す。チェックは配布／PC／ブラウザ／記録／必要時の5群11項目、native checkbox。生成ツールの技術説明はGuideへ置かない。優先度3区分と概念の役割を別groupにし、Page Typeは役割・生徒・講師の3項目で示す。</li>
<li><strong>GuideのLesson</strong>：closedはID・題名・1行の目的・MUST・丸めた目安時間。openは目的→今日の流れ・時間→取り組む範囲→今日扱う内容→全進行→講師のポイント→Lesson固有の支援（必要時）→Lesson完了→次回へ残す→参照先。前提は必要な回だけ講師のポイント内へ折りたたむ。全Slideの進行もnative detailsで必要時に開く。Game1は実P/O番号・Typeを15px級Meta、実題名を22px級主見出しに分け、生徒／講師行動を並べる。計画段階は活動名だけで、架空のPage番号・題名・ファイル名を付けない。FAST／SLOWの一般論は繰り返さず、固有の支援は最大3件の「短い症状見出し→対応」。段階確認・境界・準備等の詳細は必要時に開く。</li>
<li><strong>Fill Badgeと表示例</strong>：優先度はMUST Blue／SHOULD Teal／OPTIONAL Violet、概念はNEW Violet／TRANSFER Blue／READ ONLY Slate／SYSTEM Grayのsolid fill＋White文字。意味は本文にも書き、該当する役割だけ表示する。Page Typeは実Slideと同じfamily色、役割・生徒・講師の固定3行。全11Typeの実Lesson画像を同じ16:9寸法で右に置き、PCは説明約63%／画像約37%、mobileは説明→画像の1列。各Type間にDividerと32px級の余白。Captionは「表示例｜Lesson番号」。細字を読ませず実Slideを別タブで開けるようにし、画像生成はしない。</li>
<li><strong>横／縦の判断と支援</strong>：横配置は同じ粒度・近い文量・2〜3行以内・比較価値がある場合だけ。1項目でも4行以上なら3列にしない。共通Priorityは広いPCで3列、狭いPCは2列、共通概念は2列×2段、Checklistは最大2列。Lesson内のPriorityは縦、概念は最大2列。mobileはすべて1列。Hint Amber／Reference Blue／AI VioletのSoft ZoneはPCも縦3ブロックで、説明・利用例・短い注意を十分な本文幅にする。「生徒が止まったら」は別の01〜04縦Flow。Lesson完了はGreen Soft Zoneにその回の条件を2〜3項目、次回へは保存・記録・必要な状態に絞る。</li>
<li><strong>時間Flowと折返し</strong>：目的直後に4〜6Phaseの活動順を示し、表示は基本5分単位・合計70〜80分の目安へ丸める。正式80分枠とNotesの詳細時間は変えず、丸め値で再計算しない。横timelineは最大6項目・説明1行・窮屈でない場合だけ。現在のGuideは縦timelineとし、PCではPhase・分・行動を1行の中で対応、mobileは1項目内も縦積み。説明Blue／作業Cyan／試遊Teal／まとめNavy／予備Gray、数値は26px級。時間略号・集計の細かい説明は表面に出さない。見出し・短いPage Type本文はbalance、通常本文はprettyを使い、1語だけの孤立を減らす。「説明・保存」等の短い意味単位は必要時だけ非分割にする。折返し対策で文字を縮めない。</li>
<li><strong>Guideの意味色</strong>：Goal Navy、MUST／WORK／TRANSFER Blue、SHOULD Teal、OPTIONAL／CONCEPT／NEW Violet、完了Green、つまずきAmber、実警告Red、確認待ち・内部情報Gray。全段落やSlide行全体を着色しない。講師行動と題名を主にし、番号・ラベルは従にする。</li>
<li><strong>旧Canonicalの扱い</strong>：docs/24は内部の正式正本として保持し、全文の独立公開表示は生成しない。Guideの5か月目的とLessonごとの範囲・時間へ運用上必要な情報をまとめる。以前の色・Deck規則は38〜40節の履歴であり、公開UIの追加指示ではない。</li>
<li><strong>操作と正本</strong>：旧anchor・hash展開・native detailsを維持。文書全体を横scrollさせない。印刷では閉じたLesson詳細も出し、<code>print-friendly</code>で12チェック・Lesson timeline・Lesson完了を確認できるようにする。運用原稿はINSTRUCTOR_GUIDE、正式区分・時間の照合は内部docs/24を使う。参照先はLesson・該当Worksheet・Referenceに絞り、HeaderもHome／Guide／Referenceとする。実装・視覚検証・公開記録はdocs/25。</li>
</ul>
<h3 id="homeの補助教材worksheet入口">Homeの補助教材・Worksheet入口</h3>
<p>StudentはLesson→Reference→独立した「補助教材」の順。補助教材は既存Reference familyのLight Blue surface／Blue文字／末尾↗で、Lessonと混在させない。InstructorはLesson名と「Lesson Slide ↗」、activeの回だけ「Worksheet ↗」を並べる。GuideのPDF入口も同じfamilyで44px以上、印刷準備はチェック項目として表示。無いWorksheetのdisabled表示は作らない。新規タブには<code>noopener noreferrer</code>、focus ringは既存共通規則を使う。外部補助URLの実リンクはStudent Homeへ集約する。</p>
<h2 id="42-worksheet-integrationlesson表紙ai相談例">42. Worksheet Integration・Lesson表紙・AI相談例</h2>
<p>2026-10-16。Worksheet設問をSlideへ複製しない。SlideはVisual／instruction、紙はrecord／compare／plan。使用案内だけの新規ページを作らず、記入タイミングはNotes／Guideへ置く。Lesson表紙は実ゲームを主役にし、短いLesson名を現在のdisplay hierarchyのまま1行で表示する。</p>
<p>AI相談例は短い役割ラベルと対応する例文を整列し、薄Violetの一体の会話面へまとめる。5つの独立Cardや長文の引用塊にしない。仮の例と実測を区別し、回答後の「試す→結果を見る→必要なら再相談」を短いFlowで示す。教育原則はdocs/20、紙との責任分離はdocs/26。</p>
<h2 id="43-page-type復元とheader内priority">43. Page Type復元とHeader内Priority</h2>
<p>2026-10-18。直前の6分類化・右上Priority Pill・日本語タグ補助を撤回し、Game1全6LessonとGuideを従来の11種類へ戻す。本文・ページ順・固定ID・時間・Python・Worksheetは変更しない。docs/24は正式区分の正本のまま維持する。</p>
<ul>
<li><strong>Page Type</strong>：OVERVIEW／INDEX／SETUP／CONCEPT／WORK／PLAY／TUNE／REVIEW／REFLECT／CHALLENGE／QUIZ。INTRO統合、TUNE→WORK、REFLECT→REVIEW、QUIZ→CHALLENGEの表示mappingを解除する。</li>
<li><strong>復元する配置</strong>：従来のicon＋英字による分類行、32px band、H1・Action・Code Surface・CHECKのanchorと余白、Typeごとのtint・色。Index内の小さいType Badgeも元の種類へ戻す。Home／目次／Reference導線は種類と別。</li>
<li><strong>時間</strong>：TimeEstimateはlayout直下、右端48px・top69px。元の時計22px・時間24px/28px、白い小面と丸めた「5 min」等を復元する。右上Priorityを隣接させない。値・丸め規則・表示対象は変えない。</li>
<li><strong>Priority</strong>：正式区分を持つWORK／TUNE、必要なREVIEW／REFLECT、CHALLENGE／QUIZだけ。Headerの「Lesson名 → Priority → 活動名」に14px/24pxの小さい英字Metaを置く。MUST Blue／SHOULD Teal／CHALLENGE Violet、背景・border・shadow・pillなし。タグ補助文は付けない。SETUP／PLAY／CONCEPT／Navigationへ一律に付けない。</li>
<li><strong>意味</strong>：MUST＝そのLessonで必ず取り組む範囲、SHOULD＝時間・理解度に応じて取り組む範囲、公開CHALLENGE＝発展（docs/24のOPTIONAL）。表示名の変更で正式区分や省略可否を変えない。8-3 randomはSHOULDのまま、9-3共有だけは近傍の小さいSHOULDで区別する。</li>
<li><strong>重複回避</strong>：CHALLENGEページではHeader内Priorityを残し、分類行の同語・iconを表示しない。ただし分類行の高さを保持し、H1・本文は動かさない。Page TypeのCHALLENGE自体とIndexの表示は維持する。QUIZは従来のQUIZ分類＋HeaderのCHALLENGE。</li>
<li><strong>削除</strong>：公開Slide／GuideのOPTIONAL、+ EXTRA、日本語タグ補助、6分類用CSS、右上Priority Pill。技術的なprogress: optional・route／CSSの構図名、Notes内の正式区分・過去の記録は保持する。</li>
<li><strong>Guide</strong>：11種類を役割・生徒・講師の短い3行と実画面で示す。共通・Lesson別の公開PriorityはMUST／SHOULD／CHALLENGE。正式比較ではCHALLENGEをdocs/24のOPTIONALへ対応させ、内容と時間を独立検査する。2軸の実画像もHeader内Priorityの位置へ撮り直す。</li>
</ul>
<h3 id="復元案と代表試作">復元案と代表試作</h3>
<p>小5向けの投影・PC閲覧。既存Japanese Sans／Latin／mono、H1 48px級と暗いコード、White約75%・コード／図約20%・意味色約5%を維持する。</p>
<table>
<thead>
<tr>
<th>案</th>
<th>Typography・Color・Composition・Imagery・Decoration</th>
<th>最大の弱点・判断</th>
</tr>
</thead>
<tbody>
<tr>
<td>A 旧文法の復元</td>
<td>従来Sans／mono・既存Type色、元の横構図と右端時間。実ゲーム／実コード・従来の端のblurを維持。PriorityだけHeaderの小さい文字へ</td>
<td>Priorityは分類行より小さいため実描画が必要。今回の目的に一致し採用</td>
</tr>
<tr>
<td>B 種類の縦rail</td>
<td>同じ書体と意味色を細い左railへ集約し、実図・コードは残り幅に配置。縦の細線で区画</td>
<td>コード幅・Title anchorを変えるため不採用</td>
</tr>
<tr>
<td>C 和文行動ポスター</td>
<td>和文の大きい動詞、非対称の大色面と実ゲームの大きいcrop、Priorityは対向角の小Meta</td>
<td>記憶には残るが学習H1と競合し元レイアウトを壊すため不採用</td>
</tr>
</tbody>
</table>
<p>Month8-2の左移動WORKを先に試作。簡素化前のGit生成物origin/main（91d9805）と1280×720／1366×768／1024×768／320×180で比較し、Header外形・分類行・Title・時間・コード・main・CHECKの矩形差分0.1px以内。変更はHeader内Priorityと、その分だけ後ろへ移る活動名に限定する。</p>
<p>代表試作はTypography／Composition／Color／Visual Hierarchy／Imagery／Consistency／Personality／Usabilityを各4/5。Title→WRITEの暗いコード面→Hint／CHECKが主、MUSTは小さいBlue文字で従属。実コード・WRITE領域・4:3ゲーム画像の扱いを維持する。3秒／thumbnailは制作者点検で、児童や教室投影の実測ではない。</p>
<p>最終の全ページ・Guide・build・visual regressionは同タスクの証跡 <code>artifacts/slide-tag-restore-2026-10-18/</code> に記録する。まだ公開せず、ユーザー確認後にdeployする。</p>
`},"15_month8-2_slidev_implementation":{html:`<h1 id="month8-2-slidev-実装記録">Month8-2 Slidev 実装記録</h1>
<p>2026-10-12。完成済みMonth8-1の最新Template Grammarへ適合。新しいArt Direction探索は行わない。情報設計はdocs/12・20、視覚文法は13、共通Visual／操作規則はdocs/14の32〜34節を正本とし、ここへ複製しない。初版・過去の実描画結果はその時点の記録で、旧記録の12ページ／70分は現行値ではない。現在は下の13ページ／66分の試行仮説を使う。追加文法の最小バックポートと最新検証（2026-10-14）は6節を参照する。</p>
<h2 id="1-現行構成と変更範囲">1. 現行構成と変更範囲</h2>
<ul>
<li>本文：<code>slides/month8/month8-2.md</code>、CORE13＋OPTIONAL2、各ページNotes。入口 <code>/month8-2</code>、Presenter <code>/presenter/month8-2</code>。</li>
<li>全ページで既存 <code>template: complete</code> を使用。layoutのMonth8-2限定classと共通styles内の局所調整で、他Lessonの構図へ影響させない。Component追加・新Page Type・別のArt Directionはない。</li>
<li>CORE順：Overview → Index → START確認 → 座標Concept → キーConcept → 右WORK → 左WORK → 上下WORK → y比較Concept → 画面端WORK → TUNE → Review → Reflect。REFLECT13/13で完了後、CHALLENGE1/2 → QUIZ2/2。</li>
<li>Game／全Lesson Python／assets／固定ID／正式カリキュラムとMonth8-1・Month8-3以降の本文は非変更。STARTの敵接触・item取得無効、score0という既存教育差分も維持。COMPLETEを全員の必須量にしない。</li>
<li>本文の作業内容・支援段階・比較・読解問題は維持し、場所を探すTargetと編集役割のCode Surfaceを分離。既存Reference本文・route登録・入口名 <code>month8-1-reference</code> も変更しない。</li>
</ul>
<h2 id="2-lesson固有の適合">2. Lesson固有の適合</h2>
<table>
<thead>
<tr>
<th>ページ</th>
<th>保持した内容／今回の適合</th>
</tr>
</thead>
<tbody>
<tr>
<td>p1–2</td>
<td>実START・FILE・到達点／本編と任意のIndex。共通Type icon・階層を使用。キー入力の到達点はConcept色へ</td>
</tr>
<tr>
<td>p3</td>
<td>未完成の静止状態、配布フォルダ、保存・実行・ESC、CHECK。見出しのファイル名を識別</td>
</tr>
<tr>
<td>p4</td>
<td>左上原点、右x／下y、64×64のsprite領域と左上anchor、方向／符号＋座標／増減の対応を保持。色だけで方向を示さない</td>
</tr>
<tr>
<td>p5</td>
<td>実入力取得行と条件行、左のtoken注釈＋右の処理全体の意味を保持。READを共通Fill Badgeへ。注釈は既存DOM計測でtoken中央、垂直・必要時90度、本文は意味のみ</td>
</tr>
<tr>
<td>p6</td>
<td>[8-2-1] EDIT：右辺を完成。player_speed＝1更新で動く量の局所説明、完成式は通常表示で見せない</td>
</tr>
<tr>
<td>p7</td>
<td>[8-2-2] WRITE：用意済み左ifの内側に自分で1行。passを残せる足場を維持</td>
</tr>
<tr>
<td>p8</td>
<td>[8-2-3] WRITE：まず上下どちらかの条件・座標更新を試し、反対方向へ転用。教材Slotを使い、PythonコメントをUIにしない</td>
</tr>
<tr>
<td>p9</td>
<td>WORK後に2つのREAD式から予想と実行結果を対応。講師説明ページとして時間UIは出さない</td>
</tr>
<tr>
<td>p10</td>
<td>[8-2-4] WORK 04＋EXTRA：左端READ→右端EDITの対応を保持。正式SHOULD、上下端は従来CHALLENGE</td>
</tr>
<tr>
<td>p11</td>
<td>TUNE＋EXTRA：既習設定を名前で検索→正の整数を選ぶ→同じ時間の入力で比較。架空の固定IDは付けない</td>
</tr>
<tr>
<td>p12–13</td>
<td>キー／座標／計算／変化のReview、問い→自分の1行と動き→説明・保存のReflectを保持</td>
</tr>
<tr>
<td>O1–2</td>
<td>START左端完成例のまとまりをREADで読む／既存8問・即時理由・retryを保持。共通Optional色・帰路・スクロールを継承</td>
</tr>
</tbody>
</table>
<p>4WORKのHintは各4段階（合計16）。考える方向→材料→部分足場→最後の完成形の順と支援減少を維持し、UI lockはない。RunCueは共通部品、Referenceはその下へ配置し、操作と検索場所を競合させない。画面上のTimeはp3/6/7/8/10/11/13で5/5/10/15/5/3/5 min。Notesの詳細配分66分とActive Coding約32分は監査後の仮説であり、実授業の計時結果・締切ではない。</p>
<h2 id="3-stage方式と実描画レビュー">3. Stage方式と実描画レビュー</h2>
<p>最も密度の高い上下WORKを最初に試作。初回はReferenceを別行に置くと最後のHintがCHECKへ10px重なり、Composition／Usabilityを3と判定。Referenceを再実行の下へ移し、Hint末尾y623／CHECK上端y652で29px空けて再撮影。説明・コード・支援段階を削らず修正した。</p>
<p>Stage1はOverview・座標・キー・右／左／上下／画面端WORK・ReviewのBefore/Afterを比較してから展開。Stage2でIndex・START・y比較・TUNE・Reflect・Optional・Notesへ適用。H1／Target／Main／CHECKの4WORK外側anchorはy108／248／300／652。内容内部の高さは課題に合わせ、HintがCHECKと競合しないことを優先する。</p>
<table>
<thead>
<tr>
<th>評価軸（各5点）</th>
<th style="text-align:right">最終</th>
<th>実描画の根拠</th>
</tr>
</thead>
<tbody>
<tr>
<td>Typography</td>
<td style="text-align:right">4</td>
<td>H1・行動文・教材コード・Metaの階層、長いHintも縮小せず収まる</td>
</tr>
<tr>
<td>Composition</td>
<td style="text-align:right">4</td>
<td>ゲーム入口、空間図、注釈、WRITE、比較表で主表示を切り替える</td>
</tr>
<tr>
<td>Color</td>
<td style="text-align:right">4</td>
<td>Typeと役割の色を分離、赤い編集位置／青い操作／緑CHECKを文字付きで識別</td>
</tr>
<tr>
<td>Visual Hierarchy</td>
<td style="text-align:right">4</td>
<td>題名→行動→検索→記入位置→実行・Hint→結果。TargetにEDITを挟まない</td>
</tr>
<tr>
<td>Imagery</td>
<td style="text-align:right">4</td>
<td>実START、64px領域・左上anchorを保持した図、実tokenからの4注釈</td>
</tr>
<tr>
<td>Consistency</td>
<td style="text-align:right">5</td>
<td>共通Type・Time・CHECK・RunCue、4WORKの外側anchorとOptional帰路が一致</td>
</tr>
<tr>
<td>Personality</td>
<td style="text-align:right">4</td>
<td>白＋薄いType gradient、端のRGB、実sprite、Dark Code Surfaceの既存Identity</td>
</tr>
<tr>
<td>Usability</td>
<td style="text-align:right">4</td>
<td>検索ID・WRITE位置・任意Hint・再実行・CHECKが同一画面、focusとretryを維持</td>
</tr>
<tr>
<td>Learning Clarity</td>
<td style="text-align:right">4</td>
<td>右辺補完→左の1行→上下へ転用。UIのslotと実コードを分離、SHOULDを繰り上げない</td>
</tr>
<tr>
<td>Page-to-page Rhythm</td>
<td style="text-align:right">4</td>
<td>図→注釈→3WORK→比較→EXTRA→表→振り返り→Optionalの異なる読み方</td>
</tr>
</tbody>
</table>
<p>判定：<strong>PASS（制作者による実描画確認）</strong>。3秒テストはType／主題／作業役割を、Blur Testは見出し・主要コード面・CHECKの順と重心を、Self-guided Testはfile・ID・書く位置・Hint・実行・成功条件を代表Typeで点検した。児童本人の自走試用・Windows実機・投影後方席の検証は未実施。</p>
<h2 id="4-検証">4. 検証</h2>
<ul>
<li>専用一時profileのheadless Chromeのみ。通常Chrome・Computer Useは使わず、翻訳OFF。</li>
<li>1280×720／1366×768／1024×768／320×180。通常公開・<code>/course/</code>の両buildで15ページ＋16Hint＋解説＋Quiz24選択状態＝各56、合計448状態を撮影・計測。320はthumbnailの構図確認で、本文閲覧サイズではない。</li>
<li>外枠スクロール・コードの横切れ・HintとCHECKの重なりなし。4注釈の起点誤差1px以下、経路は垂直と90度のみ、説明重複・重なりなし。画像の読込と64×64の領域／anchorを確認。</li>
<li>両公開先・全サイズで全15Indexリンク、Reference・帰路・reload、HintのEnter／Spaceとfocus、Quiz誤答→正答のretry、内部スクロール・固定帰路、全15Presenter Notes（計120表示）を確認。Notesの13 CORE配分は66分で不変。</li>
<li>追加点検でTimeと分類の中央を一致、Optional帰路は両ページともy648／40px高・リンクy649、focusは3pxと確認。Quizの理由表示、内部の上下キースクロール、Index／TUNEを含む代表TypeのBlurも4サイズで確認。</li>
<li>通常／サブパスbuild成功。既存のgenerated index.html案内、CSS minify警告2件と一時outDirの案内のみ。新規警告・runtime errorはない。</li>
<li>検証用PDF15ページをheadless印刷し、PDFKitでPNGへ戻して全体と代表原寸を点検。Type gradient・RGB blur・Badge・Target・赤文字・WRITE slot・注釈・EXTRA・Time・CHECKに欠けなし。標準export依存を追加せず、既存のheadless印刷を利用。Quizのスクロール部分・Hint／解説の開状態はWeb検証で確認する。</li>
<li>Month8-1は15ページが変更前画像と完全一致。Overviewのみ変更前の実ゲーム画像が未読込だったため、その画像領域を除く全ピクセル一致を確認。Month8-3／Month9-1各2代表画面も完全一致。対象外ソース・素材51ファイルは変更前SHA-256と一致。</li>
</ul>
<h2 id="5-講師運用">5. 講師運用</h2>
<p>以下をINSTRUCTOR_GUIDEの該当Briefと同期。共通Visual規則のdocs/14・20は今回新規規則がないため変更しない。</p>
<h2 id="month8-2講師brief右の足場から左上下の試行">Month8-2講師Brief（右の足場から左・上下の試行）</h2>
<p>到達点・正式区分はdocs/02、80分枠と調整原則はdocs/06。提示順は<a href="/robot-python-game/instructor/docs/14_art_direction_v05/#30-%E8%87%AA%E5%8A%9B%E8%A9%A6%E8%A1%8C%E6%AE%B5%E9%9A%8Ehint%E6%A4%9C%E8%A8%BC%E8%AA%AC%E6%98%8E%E3%81%AE%E5%85%B1%E9%80%9Awork">docs/14の30節</a>、最新Template Grammarは同32〜34節とdocs/20、Lesson固有の実装記録はdocs/15。旧監査と新しい試行仮説の区別はdocs/18。個別の問い・ミス・支援はPresenter Notesを使う。</p>
<ul>
<li>
<p>MUST：x/yと画面方向の対応、キー条件を読む、右→左→上下へ既習コードを転用、4方向移動を確認して説明・保存。</p>
</li>
<li>
<p>SHOULD：左端の完成例から右端の制限を作る。player_speedの初期値5から、生徒が別の正の整数を選んで比較する。変更値を固定指定しない。</p>
</li>
<li>
<p>CHALLENGE：STARTで発展扱いの上下端制限を、左右のifから転用。OPTIONALでは左端完成例を「条件→変わる値→ゲームで防ぐこと」として読む。新しいPython構文・機能は増やさない。</p>
</li>
<li>
<p>CORE標準の試行配分は66分、13ページ。時間は授業実測ではなく、目安は締切ではない。OPTIONALを加算せず、予想・検証・説明の活動から計時して次回改訂する。</p>
</li>
<li>
<p>右はLEVEL2。左の条件は完成済み、内側の1行をまず試す（passはSYSTEMとして残せる）。上下はコピー前に1方向の座標更新を試し、もう1方向へ転用。WORK後のy増減比較で予想と結果を説明。</p>
</li>
<li>
<p>WORKはFILE・検索・固定ID→EDIT右辺／WRITE記入位置→任意Hint・保存／再実行→CHECKの順に読む。教材SlotはPythonコメントや入力欄ではない。Slotは左の1行／上下の条件と内側の1行の位置だけを示し、考え方はAction／Hintで扱う。player_speedの局所説明と、右から左・上下への支援減少を維持する。</p>
</li>
<li>
<p>画面端と速さ調整のHeaderの+ EXTRAは従来SHOULD。生徒Activityだけの時間UIは丸め目安で、Notesの66分を変更・再合算しない。Referenceは再実行手順の下から往復できる。講師は操作の読み上げより自力試行・理解確認・停止時の支援を優先する。</p>
</li>
<li>
<p>最初は完成形を言わず、短く考えて書く時間を取る。困った時はHintを1つずつ。参考転用も成功経路。完成例前の独立1行／複数行を確認した時だけLEVEL4／5の実績とし、全員必須にしない。</p>
</li>
<li>
<p>各WORK後は空ifを残さず保存・ESC・再実行して、画面の結果をCHECKする。Rは同じコードのRestartで、編集を読み直す操作ではない。</p>
</li>
<li>
<p>遅い生徒はSHOULD・OPTIONALを省き、最後のHintで機能完成と説明・保存を優先。早い生徒は無目的な反復・待ち・Quiz強制で時間を埋めず、予想と結果を理由付きで対応付ける。</p>
</li>
<li>
<p>生徒は生成版のmonth8-2.pyを使う。再配布は生徒の作業を別保存してから。complete.pyは配布しない。ゲームルール・assets・固定IDは変更しない。</p>
</li>
</ul>
<table>
<thead>
<tr>
<th>活動</th>
<th style="text-align:right">試行目安</th>
</tr>
</thead>
<tbody>
<tr>
<td>今日やること</td>
<td style="text-align:right">3分</td>
</tr>
<tr>
<td>今日の流れ</td>
<td style="text-align:right">1分</td>
</tr>
<tr>
<td>STARTの確認</td>
<td style="text-align:right">4分</td>
</tr>
<tr>
<td>画面の座標</td>
<td style="text-align:right">4分</td>
</tr>
<tr>
<td>キー入力を読む</td>
<td style="text-align:right">4分</td>
</tr>
<tr>
<td>右に動かす</td>
<td style="text-align:right">6分</td>
</tr>
<tr>
<td>左に動かす</td>
<td style="text-align:right">11分</td>
</tr>
<tr>
<td>上下に動かす</td>
<td style="text-align:right">14分</td>
</tr>
<tr>
<td>yの増減を比べる</td>
<td style="text-align:right">3分</td>
</tr>
<tr>
<td>画面の端</td>
<td style="text-align:right">7分</td>
</tr>
<tr>
<td>速さの調整</td>
<td style="text-align:right">3分</td>
</tr>
<tr>
<td>移動の一覧</td>
<td style="text-align:right">2分</td>
</tr>
<tr>
<td>振り返りと保存</td>
<td style="text-align:right">4分</td>
</tr>
</tbody>
</table>
<p>REFLECTで本編完了。OPTIONALはMUST達成後だけ個別案内し、解けなくても問題なし・Quiz全問必須ではない。既存の実描画記録は当時の履歴として読み、現在のページ数・配分はこのBriefと最新Notesを使う。</p>
<h2 id="6-共通文法の最小バックポート2026-10-14">6. 共通文法の最小バックポート（2026-10-14）</h2>
<p>docs/14の35節・docs/20の既存方針に基づく局所適用。新しいArt Direction・共通規則・Component・CSSは追加しない。</p>
<ul>
<li>本文の補助リンク11箇所（Overview、START、座標、キー入力、4WORK、TUNE、Review、Reflect）を既存Navigation Surfaceへ明示opt-in。目次15件・Review表・OPTIONALの前進矢印は↗、ページ内の工程・検索・方向の→と戻る←は維持。表・固定帰路を二重Surface化しない。</li>
<li>代表試作は最長の上下WORK。左Slotは「左へ動かす1行」、上下Slotは「選んだキーの条件／その内側：縦へ動かす1行」へ短文化。「内側」の足場・行数・16% Red／#FFECEC・Badge・インデント・全16Hint・Action・CHECKは維持した。</li>
<li>Supporting Noteは追加しない。p3は未完成状態を明示した既存説明、p11は単一の短い問いと3Stepが成立している。p4のSoft Zone・Captionとp5の実token Annotationも非変更。p9は既にH1で予想→A/B比較→自分の上移動行を確認の順に読めるため、Concept Activityの番号・新しい問いを追加しない。</li>
<li>左／上下のNotesへSlotの記入位置という責務だけを追記し、講師BriefをGuideと同期。CORE13＋OPTIONAL2、詳細Notes66分、固定ID・教材Python・Game・assets・正式区分は変更しない。docs/14・20への重複追記なし。</li>
</ul>
<p>代表の上下WORKを通常／最終Hintで実描画し、短いSlotでも条件の内側・記入量が読め、Hint下端y623／CHECK上端y652の余白を維持した。3秒は作業役割、BlurはDark Codeと弱いReference、Self-guidedはFILE→検索ID→記入位置→Hint／再実行→CHECKを点検。SkillのTypography・Composition・Color・Visual Hierarchy・Imagery・Personality・Usabilityは各4、Consistencyは5。制作者の実描画評価であり、児童試用・教室後方席の検証ではない。</p>
<ul>
<li>通常／<code>/course/</code>の1280×720・1366×768・1024×768・320×180で全15ページ・16Hint・解説・Quiz24選択の448表示状態、Presenter Notes120状態を検証。runtime error・コードの横切れ・Hint／CHECK競合なし。初回の厳密計測では1024の既存Caption下端708pxへ約0.00003pxの縮尺端数が出たため、0.1px以内の計測誤差を区別して4サイズ・両公開版で再確認した。図・Caption・CSSは変更していない。320は構図のthumbnail確認で、本文を読む推奨サイズではない。</li>
<li>Month8-1／8-3の全31画面と、変更不要としたp9は変更前PNGと一致。保護対象95ファイルのうち変更はMonth8-2本文・docs/15・Guideだけ。全コード例・固定ID・route順・Hint16段階・Action・CHECK・正式区分を維持した。</li>
<li>全11補助リンクのEnter／focus、Reference往復・reload、固定帰路・Quiz scroll／retryを確認。WRITEの色・1行／2行・左ifの内側という足場も4サイズで照合。hoverは通常3サイズで実マウス、320は標準toolbarに遮られるためCSS状態を独立検証。Presenterの可視リンク往復は通常3サイズで通過し、320では標準UIがpreviewを隠すため現在originのDOM導線だけを検証した。先読みされた非表示の別Lessonを選ばないよう検証側を補正し、教材側は変更しない。</li>
<li>全15ページのheadless印刷PDFをPDFKitでPNGへ再描画し、Navigation Surface／↗、WRITE Slotの短文とWarm White、EXTRA、既存Soft Zone・Caption・Annotationを原寸と一覧で確認。標準export用playwright-chromium／Poppler未導入のため既存環境で代替。閉じたHint・scroll内全Quizを収録する配布PDFではない。</li>
<li>通常／subpath build成功。既存generated index.html・CSS minify警告2件・一時outDir警告のみ。依存・CSS・Component・共通規則は追加せず、検証用build／画像／PDFは一時領域にだけ保存した。</li>
</ul>
`},"16_month8-3_slidev_implementation":{html:`<h1 id="month8-3-slidev-実装記録">Month8-3 Slidev 実装記録</h1>
<p>2026-10-14。Month8-1／Month8-2の完成テンプレートと追加Navigation／Supporting Note／Concept活動へ適合した現在の記録。新しいArt Direction探索は行わない。情報設計はdocs/12・20、視覚文法と値はdocs/14の32〜35節、正式到達区分はdocs/02を参照する。旧12ページ・70分・9Hintの記述は現在の正本から除き、監査履歴と試行仮説はdocs/18へ委ねる。</p>
<h2 id="構成教材上の対応">構成・教材上の対応</h2>
<ul>
<li><code>slides/month8/month8-3.md</code>：CORE13＋OPTIONAL2、全ページのPresenter Notes。入口 <code>/month8-3</code>、Presenter <code>/presenter/month8-3</code>。各ページを <code>template: complete</code> へopt-inし、Month8-3専用の <code>enemy-template</code> で図だけを補正する。</li>
<li>順序：Overview → Index → START → enemy座標 → 下移動WORK → 下判定CONCEPT → 再配置WORK → random CONCEPT（SHOULD）→ random WORK（SHOULD）→ TUNE → ifの内側の意味を確認 → Review → Reflect → OPTIONAL Challenge → Quiz。ページ・route・固定IDを増減しない。</li>
<li>Typeのgradient／端のRGB blur、H1／Action／Body／Meta、役割・結果のSemantic Colorは完成テンプレートを再利用。独自Component・依存・別のUIシステムは追加しない。</li>
<li>3 WORKはFILE／検索→[8-3-1]〜[8-3-3] → WRITE → 任意Hint → RunCue → CHECK。TargetにEDITを置かず、Referenceは再実行案内の下。H1 y108／Target y248／Main y300／CHECK y652を共通骨格にする。</li>
<li>WRITE Badge・16% Red＋Warm Whiteの記入領域・背景なしのRed EDIT tokenはdocs/14の34節を維持。今回の補助Navigation・Supporting Note・Slot copy・Concept活動は35節とdocs/20へ責務を分けて記録する。適用はMonth8-3だけで、他Lessonへ自動展開しない。</li>
<li>本文の補助リンク9箇所をNavigation Surfaceへ明示opt-in。Reference8リンクとReflectのReview帰路を同じ部品経路で扱い、末尾↗・hover・focusを揃える。Index等の前進リンクとReview表の矢印も↗、ページ内の操作・工程は→、戻る←は維持。新しいComponent／Routerは追加しない。</li>
<li>p3は対象名と状態をSupporting Noteで整列。プレイヤーはBlue、enemyはRed、説明はDark。p10は「速さ／範囲」の短い見出し＋各2行とし、共通設定・既存の問い・範囲制約を維持。枠やCardを追加しない。</li>
<li>WRITE Slotはp5「敵を下へ動かす1行」、p7「下へ出たか調べる条件／上へ戻す1行」、p9「横位置を選び直す1行」。考え方はAction、支援は既存Hintへ分離。最初のTargetだけ「この文字を検索」を弱いMetaで補い、IDや検索手順はそのまま。</li>
<li>TimeはActivityだけ。詳細Notes65分と丸め表示を分離。random説明・WORK・任意調整はHeaderのEXTRAでSHOULDと識別し、成功色にしない。</li>
<li>座標図はenemy専用のborderless Soft Zone。内部の64×64、領域左上のanchor、x右増／y下増を維持して外側余白24pxと弱いCaptionを加える。右は実STARTの <code>enemy1_y = 50</code>。enemy2/3の異なる初期yは参考として確認する。</li>
<li>更新の意味は既存の下移動WORK内で扱う。通常は「今y100・速さ4なら次は？」、方向Hintに100→104→108の模式例、Notesに1更新あたりの加算を残す。完成Python式は最後のHintだけ。ページ追加・FPS講義・新しい必須課題はない。</li>
<li>下判定CONCEPTはenemy1_y／screen_height／&gt;／ifの材料と、敵の左上が画面下へ出た図を対応させる。左図だけCyan Soft Zoneへまとめ、SVGを16px平行移動して余白を確保する。尺度・判定・上へ戻す関係は不変。完成条件式は先に通常表示しない。再配置WORKの2行WRITEで条件→内側の代入を作り、−enemy_sizeは「画面の少し上」と説明する。</li>
<li>p11 CONCEPTのH1は「ifの内側に書く意味を知る」、Key Messageは条件成立時だけ実行される原則。01 Aの結果を予想→02 毎回戻すA／条件成立時だけ戻すBのREAD比較→03 自分の上へ戻す行を確認する。比較コードは変更しない。実ファイルを壊す実験・追加記述・負数計算・600/601当ては要求しない。</li>
<li>randomは一般形 <code>random.randint(最小の値, 最大の値)</code> →範囲図→enemy1_xへの参考転用。APIはViolet、識別子はBlue。範囲図だけ薄いVioletのSoft Zone、API Dark Surfaceは外。図は横尺度1.3倍、画面幅800→1040、敵幅64→83.2、xの最大736を維持。補足を図より弱くし、両端を含む・同じ整数を再選択しても正常という内容は維持。</li>
<li>random WORKは実STARTのコメント行全体を置き換える既存経路。通常表示はWRITE位置と一般形への参照、Hint3は穴埋め支援、最後だけ全完成行。長い最終Hintは括弧内で表示上3行へ改行し、AST上は元の1行と同じ。親ifの内側・上へ戻す行と同じ空白をNotesで案内する。</li>
<li>Reviewは処理→コード→画面の結果、Reflectは問い→自分の3処理との対応→保存。enemy2/3はREAD完成例の基本共通点をMUSTとして確認し、3体分の新規入力を要求しない。深い読解はOPTIONAL。</li>
<li>ChallengeはMagentaの読解、READ BadgeはBlue。QuizはTeal、既存8問・即時理由・retry可・点数保存なしを維持。共通Optional帰路はy648／高さ40。REFLECTでCORE完了、OPTIONALは別分母。</li>
<li>docs/02通り、random範囲調整の簡単な試行はSHOULD、深い読解・追加変化はCHALLENGE。旧TUNE／Notes／Briefで一括CHALLENGE扱いだった文言を訂正しただけで、活動内容・正式カリキュラム・START冒頭は変更しない。</li>
</ul>
<h2 id="代表試作実描画レビュー2026-10-13">代表試作・実描画レビュー（2026-10-13）</h2>
<p>最長のrandom WORKを最初にBefore／After撮影し、検索のTargetと記入のWRITEを分離した。最終Hintの長い1行を3行へ表示して、文字縮小なしでCHECKとの余白を確保。その後Stage1（座標・更新を含む下移動・下判定・再配置・random・比較・Review）を確認し、Stage2へ展開した。</p>
<p>座標Soft Zone初稿では淡い領域fillがspriteを覆い、Imageryを3として不合格にした。領域をspriteより先に描き直して再撮影し、実assetと左上anchorを確認した。TUNEは文末だけの折返しを意味単位の改行へ修正。新しい装飾・小さい文字で問題を隠さない。</p>
<table>
<thead>
<tr>
<th>Skill評価（各5点）</th>
<th style="text-align:right">点</th>
<th>実描画の根拠</th>
</tr>
</thead>
<tbody>
<tr>
<td>Typography</td>
<td style="text-align:right">4</td>
<td>H1を主役にAction／本文／Metaを区別。長いHintは改行し、コードの文字を縮めない</td>
</tr>
<tr>
<td>Composition</td>
<td style="text-align:right">4</td>
<td>敵の図→記述→境界図→記述→範囲→記述。Optionalは読解と選択で構図を分ける</td>
</tr>
<tr>
<td>Color</td>
<td style="text-align:right">4</td>
<td>WRITEはRed＋Warm White、READはBlue、APIはViolet、CHECKはGreen。役割を文字でも示す</td>
</tr>
<tr>
<td>Visual Hierarchy</td>
<td style="text-align:right">4</td>
<td>Targetは弱い検索帯、WRITEが作業領域、HintとRunCueは支援、EXTRAはHeader優先度</td>
</tr>
<tr>
<td>Imagery</td>
<td style="text-align:right">4</td>
<td>未変更START全景・enemy実sprite・左上anchor・同尺度の範囲図。初稿のsprite隠れを修正</td>
</tr>
<tr>
<td>Consistency</td>
<td style="text-align:right">5</td>
<td>既存Componentを再利用。WORK anchor・Time band・Optional帰路が一致、他2Lessonも回帰一致</td>
</tr>
<tr>
<td>Personality</td>
<td style="text-align:right">4</td>
<td>White＋RGB edge・暗い実コード・Flat技術図を維持。Card・無関係な装飾を追加しない</td>
</tr>
<tr>
<td>Usability</td>
<td style="text-align:right">4</td>
<td>ファイル→固定ID→記入→Hint→保存／再実行→observable CHECK。keyboard・focus・帰路を確認</td>
</tr>
<tr>
<td>Page-to-page Rhythm</td>
<td style="text-align:right">4</td>
<td>Concept／WORKの交互配置、比較・一覧、静かな振り返り、任意読解／Quizを維持</td>
</tr>
<tr>
<td>Self-guided clarity</td>
<td style="text-align:right">4</td>
<td>書く行数・場所・API一般形・結果を本人が読める。random省略経路と参考転用を残す</td>
</tr>
</tbody>
</table>
<p>3秒：Type・主題・WRITE位置、Blur：H1／Mainと弱いTarget・支援、Self-guided：実ファイルで編集し結果まで確認する連鎖を全代表Typeのスクリーンショットで点検。制作者のレビューであり、児童試用・教室投影・実授業計時ではない。320×180は構図のサムネイル確認で、本文を読むサイズではない。</p>
<p>判定：<strong>PASS（実描画確認済み・制作者評価）</strong>。全10軸4以上。読みやすさだけでなく、Concept／WORKの識別、図と実コードの技術的一致、作業領域の階層、ページ間のリズムと帰路を点検した。</p>
<p>Learning Review：下移動・比較・代入を前回から転用し、完成条件を事前提示しない。下移動・条件・再配置はLEVEL3中心、独立した1行を確認できた場合だけLEVEL4の試行。randomは一般形・enemy2参照の支援付きLEVEL3、穴埋め支援経路も認める。全員必須4〜5にしない。同じxで戻ってもMUST成立。基本共通点確認と深い読解、簡単な範囲試行と追加変化を区別する。</p>
<h2 id="検証2026-10-13">検証（2026-10-13）</h2>
<ul>
<li>通常版／<code>/course/</code>版で1280×720・1366×768・1024×768・320×180。全15ページ＋12Hint＋Challenge解説＋Quiz24選択、各208状態、計416状態が通過。Presenter Notesは各60、計120状態。コード横切れ・Hint／CHECK競合・外枠scroll・画像欠損・実行時エラーなし。</li>
<li>Index15リンク、Reference帰路／reload、HintとQuizのEnter／Space・focus、正誤・retryを検証。5tokenのAnnotationは実DOMの中央起点・垂直／90度のみを照合。両公開版×4サイズの追加検証で、64×64領域、範囲図の1.3倍尺度、WRITEの16% Red／文字・番号#FFECEC、border／shadowなし、Optional footer y648／高さ40とEnterによる帰路、上下キーscrollが通過。WRITE文字と合成背景の計算contrastは約12.36:1。</li>
<li>通常／サブパスbuild成功。既存generated index.htmlの無視、CSS minify警告2件、一時outDirがroot外という警告のみ。新規依存なし。公開時のreloadには既存README通りSPA fallbackが必要。</li>
<li>翻訳OFFのheadless Chromeで全15ページをPDF印刷し、macOS PDFKitでPNGへ再描画。WRITE Slot・Role Badge・Target・CHECK・EXTRA・範囲図・gradient／RGB blurを原寸と一覧で確認した。並行した操作検証中の初回印刷ではページ同期が混入したため、操作検証を終了して単独で全ページを再印刷し、route／ページ順を再確認した。教材側へ回避コードは追加していない。標準Slidev exportに必要なplaywright-chromium／Poppler未導入のため、既存環境での代替検証。閉じたHintやscroll内全Quizを収録する配布PDFではない。</li>
<li>Month8-1／8-2の全31画面は変更前PNGとバイト一致。Game／MASTER／START／COMPLETE／assets／他Lesson本文／正式カリキュラムは変更前SHA-256と一致。検証スクリプト・PNG・PDF・buildは一時領域のみ。</li>
<li>Windows代替書体、教室後方席、児童の単独理解、65分／Active Coding約25分の授業実測は未検証。正式区分・Notes配分を検証値へ合わせて水増ししない。</li>
</ul>
<h2 id="month8-3講師brief敵の下移動判定再配置の試行">Month8-3講師Brief（敵の下移動・判定・再配置の試行）</h2>
<p>到達点・正式区分はdocs/02、80分枠と調整原則はdocs/06。提示順は<a href="/robot-python-game/instructor/docs/14_art_direction_v05/#30-%E8%87%AA%E5%8A%9B%E8%A9%A6%E8%A1%8C%E6%AE%B5%E9%9A%8Ehint%E6%A4%9C%E8%A8%BC%E8%AA%AC%E6%98%8E%E3%81%AE%E5%85%B1%E9%80%9Awork">docs/14の30節</a>、旧監査と新しい試行仮説の区別はdocs/18。個別の問い・ミス・支援はPresenter Notesを使う。</p>
<ul>
<li>
<p>MUST：enemy座標の確認、enemy1の下移動、画面下判定、上への再配置。enemy2/3の完成例に同じ仕組みがあると確認するが、3体分の新規入力は要求しない。</p>
</li>
<li>
<p>SHOULD：本編p8/9のrandom.randint()によるx再配置、速度の任意調整、random範囲調整の簡単な試行。時間不足時は省略可能で、randomをMUSTへ昇格しない。</p>
</li>
<li>
<p>CHALLENGE：random・enemy2/3との共通点の深い読解、追加変化。OPTIONAL Quizは全8問必須ではない。</p>
</li>
<li>
<p>CORE標準の試行配分は65分、13ページ。時間は授業実測ではなく、目安は締切ではない。OPTIONALを加算せず、予想・検証・説明の活動から計時して次回改訂する。</p>
</li>
<li>
<p>下移動1行、条件と再配置2行を自分で試す。enemy2/3は参考完成例。毎回戻す／下へ出た時だけ戻すをREAD比較し、自分の3処理を指す。randomは本編SHOULDで、省略して同じxで戻る状態もMUST達成。</p>
</li>
<li>
<p>p11はifの内側に書く意味を確認するCONCEPT。01 Aを毎回実行した結果を予想→02 A/B比較→03 自分の上へ戻す行がifの内側か確認する。講師は答えを先に言わず、予想の理由・コードとの対応を問い返す。既存の確認活動で、追加の記述・成果物は要求しない。</p>
</li>
<li>
<p>最初は完成形を言わず、短く考えて書く時間を取る。困った時はHintを1つずつ。参考転用も成功経路。完成例前の独立1行／複数行を確認した時だけLEVEL4／5の実績とし、全員必須にしない。</p>
</li>
<li>
<p>WRITEはVS Codeへの記入位置。TargetでFILE／Ctrl + F → 固定IDを探し、MainのWRITE領域に対応する実ファイルへ書く。Hintは方向→変数／参考→穴埋め→最後の完成形の4段階で任意に開く。randomの長い最終Hintだけ表示上は括弧内で改行する。</p>
</li>
<li>
<p>各WORK後は空ifを残さず保存・ESC・再実行して、画面の結果をCHECKする。Rは同じコードのRestartで、編集を読み直す操作ではない。</p>
</li>
<li>
<p>遅い生徒はSHOULD・OPTIONALを省き、最後のHintで機能完成と説明・保存を優先。早い生徒は無目的な反復・待ち・Quiz強制で時間を埋めず、予想と結果を理由付きで対応付ける。</p>
</li>
<li>
<p>生徒は生成版のmonth8-3.pyを使う。再配布は生徒の作業を別保存してから。complete.pyは配布しない。ゲームルール・assets・固定IDは変更しない。</p>
</li>
</ul>
<table>
<thead>
<tr>
<th>活動</th>
<th style="text-align:right">試行目安</th>
</tr>
</thead>
<tbody>
<tr>
<td>今日やること</td>
<td style="text-align:right">3分</td>
</tr>
<tr>
<td>今日の流れ</td>
<td style="text-align:right">1分</td>
</tr>
<tr>
<td>STARTの確認</td>
<td style="text-align:right">4分</td>
</tr>
<tr>
<td>敵の座標</td>
<td style="text-align:right">3分</td>
</tr>
<tr>
<td>敵を下へ動かす</td>
<td style="text-align:right">12分</td>
</tr>
<tr>
<td>画面の下を調べる</td>
<td style="text-align:right">4分</td>
</tr>
<tr>
<td>上へ戻す</td>
<td style="text-align:right">10分</td>
</tr>
<tr>
<td>ランダムな横位置</td>
<td style="text-align:right">4分</td>
</tr>
<tr>
<td>戻る横位置を変える</td>
<td style="text-align:right">6分</td>
</tr>
<tr>
<td>調整して試す</td>
<td style="text-align:right">4分</td>
</tr>
<tr>
<td>ifの内側の意味を確認</td>
<td style="text-align:right">3分</td>
</tr>
<tr>
<td>処理の一覧</td>
<td style="text-align:right">7分</td>
</tr>
<tr>
<td>振り返りと保存</td>
<td style="text-align:right">4分</td>
</tr>
</tbody>
</table>
<p>REFLECTで本編完了。OPTIONALはMUST達成後だけ個別案内し、解けなくても問題なし・Quiz全問必須ではない。最新の実装・実描画結果はdocs/16を参照する。</p>
<p>Time UIはActivityだけに共通丸め値を表示する（START 5、下移動10、再配置10、random 5、TUNE 5、REFLECT 5 min）。上表の詳細65分とは別で、表示値を合計しない。EXTRAはSHOULDの優先度、深い読解はOPTIONAL。enemy2/3の基本共通点確認はReviewでMUSTに含め、3体分の入力を要求しない。</p>
<h2 id="追加visualnavigationの受入2026-10-14">追加Visual／Navigationの受入（2026-10-14）</h2>
<p>今回の代表試作はp11。Beforeでは比較問いがH1となり、読む・自分のコード確認の順が曖昧だった。AfterはH1を理解対象、Key Messageをifの原則、既存の問いを01予想／02比較／03自分のコードのActivityへ分離した。A/Bコードはそのまま。既存Identity内の局所修正で、新しいArt Direction探索は行わない。</p>
<p>次にp3/5/6/7/8/9/10と本文の補助Navigationへ展開した。初回描画では旧CSSの詳細度によりp3の末尾矢印が→、p10補足が24px＋広い余白へ戻っていた。Consistency／Hierarchyを3として不合格にし、明示class側で↗・20px/30px・短いまとまりを優先して再描画した。p6は図内ラベルの右余白を確保し、境界・anchor・sprite位置の関係は維持した。語を縮めるためにHintやPythonを変更していない。</p>
<table>
<thead>
<tr>
<th>Skill評価（各5点）</th>
<th style="text-align:right">点</th>
<th>実画面の根拠／修正</th>
</tr>
</thead>
<tbody>
<tr>
<td>Typography</td>
<td style="text-align:right">4</td>
<td>H1／原則／Activity24px／補足20px／Nav18pxを区別。旧補足の上書きを修正</td>
</tr>
<tr>
<td>Composition</td>
<td style="text-align:right">4</td>
<td>関係図だけSoft Zone、p11は番号順の予想・比較・自身の行確認。全体Card化なし</td>
</tr>
<tr>
<td>Color</td>
<td style="text-align:right">4</td>
<td>Navigation Blue、対象名Entity色、WRITE Red、図の薄いCyan／VioletとDark APIを分離</td>
</tr>
<tr>
<td>Visual Hierarchy</td>
<td style="text-align:right">4</td>
<td>Actionは考え方、Slotは記入場所。リンク・補足がMainと競合しないよう再調整</td>
</tr>
<tr>
<td>Imagery</td>
<td style="text-align:right">4</td>
<td>実sprite、64px、画面下・上への再配置、1.3倍範囲図を維持。API面を図に囲わない</td>
</tr>
<tr>
<td>Consistency</td>
<td style="text-align:right">5</td>
<td>9補助リンクの矢印・Surface・focusを統一。31既存画面はピクセル一致</td>
</tr>
<tr>
<td>Personality</td>
<td style="text-align:right">4</td>
<td>White＋RGB／技術図／暗いコードを維持。補足の小Card・新しい装飾を追加しない</td>
</tr>
<tr>
<td>Usability</td>
<td style="text-align:right">4</td>
<td>検索文字のMeta、短いWRITE、リンクの視認性と帰路、3段階の活動順を確認</td>
</tr>
<tr>
<td>Page-to-page Rhythm</td>
<td style="text-align:right">4</td>
<td>座標・記述・境界・記述・範囲・記述・調整・概念確認・一覧の既存順を維持</td>
</tr>
<tr>
<td>Self-guided clarity</td>
<td style="text-align:right">4</td>
<td>本人が書く位置と次の確認を読める。p11を予想→比較→自身のコードの順で進められる</td>
</tr>
</tbody>
</table>
<p>判定：<strong>PASS（実描画確認済み・制作者評価）</strong>。3秒は理解対象／WRITE位置、Blurは図・コード・弱い補足、Self-guidedは検索→記入→支援→再実行→CHECKとp11の活動順を点検した。児童による試用・授業時間の実測とは区別する。</p>
<ul>
<li>通常／<code>/course/</code>の4サイズで各208、計416表示状態とPresenter Notes各60、計120状態が通過。12Hint・Quiz24選択・解説・Index・reload・Reference帰路・新NavのEnter／focusを含む。9補助リンクの実色・18px/600・border／shadowなし・末尾↗、Supporting Note20px/30px、p11の3段階をDOMと実描画で照合。</li>
<li>1280×720／1366×768／1024×768／320×180で原寸・縮小・Blurを確認。320は構図サムネイルであり、本文を読む推奨サイズではない。320での実マウスhoverはSlidev標準ツールバーがリンクを覆うため、本文CSSのhover状態をCDPで独立に再描画し、背景の変化を確認した。教材側へtoolbarを隠す処理は追加していない。通常3サイズの実マウスhoverは正常。両公開版×4サイズでPresenter内の新ReferenceリンクとPresenterへの帰路も通過。</li>
<li>headless単独印刷の全15ページPDFをmacOS PDFKitでPNGへ再描画し、Navigation Surface／↗／Soft Zone／WRITE文言／p11 Activity／RGB blurとの非干渉を確認。Popplerと標準export用playwright-chromium未導入のため既存環境で代替。配布用の全Hint・scroll内全問PDFを生成するタスクではない。</li>
<li>通常／subpath build成功。既存generated index.html・CSS minify警告2件・一時outDir警告だけ。新規依存・Component・Routerなし。</li>
<li>保護対象95ファイルを変更前SHA-256と比較。変更はMonth8-3本文・共通CSS・docs/14・16・20・Guideの6ファイルだけ。全Hint文字列・route順・固定ID・CORE13＋Optional2・Notes65分は不変。Month8-1／8-2の全31画面は変更前PNGとバイト一致。Python／Game／assets／カリキュラム／Month9以降は非変更。</li>
<li>docs/14の35節は表示値、docs/20の11節は教育上の責務。Guideは両規則とMonth8-3 Briefを同期し、p11 Notesも予想・比較・自身のコードへ対応させた。検証データは一時領域のみ。</li>
</ul>
`},"17_month9-1_slidev_implementation":{html:`<h1 id="month9-1-slidev教材-実装記録">Month9-1 Slidev教材 実装記録</h1>
<h2 id="現行最新template-grammarへの適合2026-10-14">現行：最新Template Grammarへの適合（2026-10-14）</h2>
<p>正本は未変更のMonth9-1 START／COMPLETEと正式区分docs/02。共通表現はdocs/14の33〜35節、活動の責務はdocs/20を再利用する。以下の旧履歴にある色・Target・ページ数・時間より、この節と最新Markdown／Presenter Notesを優先する。</p>
<ul>
<li><strong>CORE15＋OPTIONAL2、Notes合計68分</strong>を維持。INDEXは左8・右7、REFLECTは15/15。OPTIONALは1/2・2/2で標準時間に加算しない。時間は試行仮説で授業実測ではない。</li>
<li>提示順：Rect→colliderect→一般形→実コードREAD→enemy1→Game Over／R→enemy2→enemy3→判定と状態変更の比較→テスト→Review→Reflect。固定IDは <code>[9-1-1]</code>／<code>[9-1-2]</code>／<code>[9-1-3]</code> のまま。</li>
<li>Rect概念は実spriteに判定の四角を重ねる。画像＝見た目、Rect＝位置・大きさから作る範囲。現行ゲームでは画像と同位置・同サイズ64×64で透明部分も含む。Rect一般仕様が必ず画像サイズになると教えない。</li>
<li>判定の線・重なりはCollisionのViolet、対象名はPlayer Blue／Enemy Red。spriteは再着色・切り抜きしない。概念図は3倍、colliderectの2状態比較は同じ2倍。薄いSoft Zoneは図だけをまとめ、APIまで囲わない。</li>
<li>一般形は <code>pygame.Rect(x, y, width, height)</code>。Dark Codeから「左上の位置」「四角の大きさ」へrange注釈で対応。起点は文字範囲の中央、垂直／90度のみ。実READはSTARTの連続したRect2行を保持し、どの値から作るかを読む。</li>
<li>enemy1は条件＋結果の2行を短く自己試行、enemy2は見ながら転用、enemy3は相手を先に選ぶ。実STARTの記入位置は起動可能な空行であり、旧コメント穴埋めではない。全員必須LEVEL4／5にしない。</li>
<li>enemy2／3の <code>not game_over and</code> は「まだGame Overでない時だけ」の基盤側支援として明示。Hint3／4は括弧内の表示用改行で横切れを防ぎ、COMPLETEの2行と同じ処理。入力行数・boolの正式単元は増やさない。</li>
<li>WRITEは記入位置だけ。Solid Red Badge／16% Red Slot＋<code>#FFECEC</code>／背景なしのRed tokenという既存Grammarを使用。FILE→検索操作→固定ID、Hint4段階、RunCue、Reference、Observable CHECKを分ける。編集はVS Codeで行う。</li>
<li>START状態と任意の速度テストはSupporting Noteとして整理。補助リンクは既存Navigation Link Surface、別ページへの矢印は↗、処理の順は→、戻る←を維持。Priorityを新しいPage Typeや到達区分へ変えない。</li>
<li>判定と状態変更のConceptだけで「予想→比較→自分の条件・結果」を使う。新しい入力・成果物は増やさない。ReviewはRect／colliderect／状態変更／基盤の停止・表示を分離し、代入が直接描画するように見せない。Reflectは問いから始め自分の2行を指す。</li>
<li>Game Over表示・SE・Restartは基盤。True／False理論へ広げない。Rは同じコードで再開、編集反映は保存→ESC→▶再実行。</li>
<li>CHALLENGE・Quiz8問の問い・選択肢・解説は維持し、Navigationと共通Visualだけを適合する。MUSTは敵3体の接触判定、設定変更・自力debugはSHOULD、OPTIONALは未実施可。</li>
</ul>
<table>
<thead>
<tr>
<th>p</th>
<th>活動</th>
<th style="text-align:right">Notes分</th>
</tr>
</thead>
<tbody>
<tr>
<td>1・2・3</td>
<td>Overview・INDEX・START</td>
<td style="text-align:right">3＋1＋4</td>
</tr>
<tr>
<td>4・5・6・7</td>
<td>Rect・重なり・一般形・実READ</td>
<td style="text-align:right">4＋4＋3＋4</td>
</tr>
<tr>
<td>8・9</td>
<td>enemy1・Game Over／R</td>
<td style="text-align:right">12＋3</td>
</tr>
<tr>
<td>10・11</td>
<td>enemy2・enemy3転用</td>
<td style="text-align:right">6＋7</td>
</tr>
<tr>
<td>12・13</td>
<td>判定と結果の比較・テスト</td>
<td style="text-align:right">3＋8</td>
</tr>
<tr>
<td>14・15</td>
<td>Review・Reflect</td>
<td style="text-align:right">2＋4</td>
</tr>
</tbody>
</table>
<p>共通文法の新規追加はなく、docs/14・20とMonth8への追加バックポートは行わない。検証は代表のenemy2 WORKから開始し、Stage1の7ページ・全12 Hintを1280×720／1024×768で局所確認してからStage2へ進む。PDFと全状態の検証はLesson完成後だけ行う。</p>
<h3 id="今回の実描画レビュー">今回の実描画レビュー</h3>
<p>Skillはvisual-design-director。3案を比較し、A「技術読解：White＋Dark Code、図・一般形・実READ・記述の役割分離」を採用。B「図を大きく先に見せ、コードを細い横列へ」は相互参照の往復が弱点、C「大きな実ゲーム画面にRectを重ねる」は一般形・自力記述より画像が主役になるため採用しない。書体・Identityは既存を継承する。</p>
<p>長いガード条件と2行WRITE・Hint・CHECKを持つenemy2 WORKを先に試作した。比較図の下部切れは倍率を変えずSVGの空白と注釈の余白を整理して再描画。テストページは任意補足の重複文を削り、CHECKの下端が収まることを再確認した。</p>
<table>
<thead>
<tr>
<th>評価軸（各5点）</th>
<th style="text-align:right">最終</th>
<th>実描画の根拠</th>
</tr>
</thead>
<tbody>
<tr>
<td>Typography</td>
<td style="text-align:right">4</td>
<td>題名48px、コードと問い、Caption／操作Metaの強弱を分ける</td>
</tr>
<tr>
<td>Composition</td>
<td style="text-align:right">4</td>
<td>sprite＋範囲、2状態比較、一般形＋寸法図、実READ、WRITE、対応表の構図を使い分ける</td>
</tr>
<tr>
<td>Color</td>
<td style="text-align:right">4</td>
<td>Violet判定範囲、Blue／Red対象名、Red記入、Green結果を文字と併用する</td>
</tr>
<tr>
<td>Visual Hierarchy</td>
<td style="text-align:right">4</td>
<td>概念は図／一般形、WORKはActionとWRITEが主役、操作・補助リンクは弱くする</td>
</tr>
<tr>
<td>Imagery</td>
<td style="text-align:right">4</td>
<td>実spriteの透明部分・64×64・同倍率比較、左上位置と寸法を維持する</td>
</tr>
<tr>
<td>Consistency</td>
<td style="text-align:right">5</td>
<td>共通WORK anchorとComponentを再利用。Month8全46画面は変更前と全ピクセル一致</td>
</tr>
<tr>
<td>Personality</td>
<td style="text-align:right">4</td>
<td>実ドット絵とEditorial／TechnicalのIdentityを維持し、汎用Cardへ置き換えない</td>
</tr>
<tr>
<td>Usability</td>
<td style="text-align:right">4</td>
<td>FILE→検索ID→2行記入→Hint→実行→CHECK。長いHintも横切れ・重なりなし</td>
</tr>
<tr>
<td>Fun / Playfulness</td>
<td style="text-align:right">4</td>
<td>自分の条件で接触→停止→Rを試し、別の敵へ展開する変化につながる</td>
</tr>
<tr>
<td>Page-to-page Rhythm</td>
<td style="text-align:right">4</td>
<td>図→比較→一般形→実READ→記述→プレイ→転用→比較→テスト→一覧→記録を分ける</td>
</tr>
</tbody>
</table>
<p>3秒点検：主役の図・書く位置・検索IDを先に捉えられる。Blur：WRITEのDark／Red面とCHECKのGreenが役割ごとに分かれる。Self-guided：file／ID／記入位置／Hint／保存・再実行／Observable resultを追える。<strong>PASS（実描画の制作者レビュー）</strong>。児童による理解・教室投影・68分の授業実測を検証した主張ではない。</p>
<h3 id="最終検証と限界">最終検証と限界</h3>
<ul>
<li>通常公開・<code>/course/</code>公開を1280×720／1366×768／1024×768／320×180で確認。全17ページ＋12 Hint＋開いたCHALLENGE＋Quiz24選択肢＝54状態／サイズ、両パス計432状態。はみ出し・HintとCHECKの重なり・画像欠損・実行エラーなし。320は縮小構図だけで、本文の実用閲覧サイズとはしない。</li>
<li>INDEX全17リンク、Referenceアンカー・帰路・reload、全Hint、Quiz正誤・retry、keyboard／focus／scroll、CHALLENGE開閉、前後移動、OPTIONAL footerのy648／高さ40を確認。WRITEの16% Red／Warm White／Solid Red Badgeも3 WORKで一致。</li>
<li>注釈の起点はtoken／range中央と一致し、Code Annotationは垂直／90度だけ。3 WORKの最後のHintはASTで正式COMPLETEと同じ処理。実READ2行はSTARTと一致、CHALLENGEの読解・解説とQuizの問い・選択肢は変更前と同一。</li>
<li>Presenterは両パス・4サイズで全17 Notesのデータを確認（計136表示）、PC3サイズで可視のReference往復も確認。320は標準Presenterがプレビューを隠すためDOM上の帰路だけ。PCのhoverは実マウス、320のhoverは標準toolbarと分離したCSS状態を確認する。</li>
<li>headless PDF17ページを出力し、macOS PDFKitで全ページをPNGへ再描画。図・WRITE・Navigation・CHECK・Reviewを原寸と縮小一覧で確認。PDFは既定表示であり、閉じたHintとQuizのスクロール全文はブラウザ状態の検証で扱う。</li>
<li>通常／サブパスbuild成功。既存の生成index.html通知、Slidev由来のCSS minify警告2件と検証用outDir警告は残り、新規警告はなし。公開環境の直接reloadには既存READMEどおりSPA fallbackが必要。</li>
<li>変更前95ファイルのSHA-256を比較。変更はMonth9-1 Markdown、opt-in layout／CSS、比較図Componentの密度設定、docs/17、Guideだけ。Game・全Lesson Python・assets・固定ID・カリキュラム・Month8本文・Month9-2以降は不変。Month8全46画面は変更前と全ピクセル一致。Game自体の再実装や実機テストではない。</li>
</ul>
<h2 id="旧実装履歴以下は当時の仕様検証記録">旧実装履歴（以下は当時の仕様・検証記録）</h2>
<p>実装日：2026-10-10。正本は実START／COMPLETE、docs/02・04・05・06、完成済みMonth8-1〜8-3とdocs/12・13・14。新しいArt Directionは探索せず、既存Visual Identityを継承する。</p>
<h2 id="構成">構成</h2>
<p><code>slides/month9/month9-1.md</code>：CORE13ページ＋OPTIONAL2ページ。Rect説明を一般形と実コードへ分け、旧10分を5分＋5分に分割する。入口とReferenceの許可済み帰路を追加し、TimeEstimate／HintBlock／QuizBlock／CodeAnnotation／TargetIconを再利用。新部品は離れた状態と重なった状態の実素材・Rectを同倍率で描く<code>CollisionDiagram</code>だけ。Rect用CSSはopt-in、Target Barのshortcut表現だけはMonth8-1〜8-3を含む全WORKへ共通適用する。</p>
<table>
<thead>
<tr>
<th>p</th>
<th>ページ</th>
<th style="text-align:right">分</th>
</tr>
</thead>
<tbody>
<tr>
<td>1・2</td>
<td>Overview・Index</td>
<td style="text-align:right">3＋2</td>
</tr>
<tr>
<td>3</td>
<td>START確認</td>
<td style="text-align:right">5</td>
</tr>
<tr>
<td>4・5</td>
<td>Rect・colliderect Concept</td>
<td style="text-align:right">5＋5</td>
</tr>
<tr>
<td>6</td>
<td>Rect一般形・4引数・空間図</td>
<td style="text-align:right">5</td>
</tr>
<tr>
<td>7</td>
<td>Rect実コードREAD・実画像との対応</td>
<td style="text-align:right">5</td>
</tr>
<tr>
<td>8</td>
<td>enemy1 WORK [9-1-1]</td>
<td style="text-align:right">10〜15</td>
</tr>
<tr>
<td>9</td>
<td>Game Over・R確認</td>
<td style="text-align:right">5</td>
</tr>
<tr>
<td>10</td>
<td>enemy2/3 WORK [9-1-2]・[9-1-3]</td>
<td style="text-align:right">10</td>
</tr>
<tr>
<td>11</td>
<td>DEBUG・接触テスト</td>
<td style="text-align:right">10</td>
</tr>
<tr>
<td>12・13</td>
<td>Review・Reflect</td>
<td style="text-align:right">2＋3</td>
</tr>
</tbody>
</table>
<p>合計70〜75分。正本docs/06の配分を維持する。Game Overの入力は実STARTでenemy1の条件と同じ場所なので、p9は二重入力をさせず確認にする。OPTIONALは標準時間へ加算しない。</p>
<h2 id="実コードとの整合">実コードとの整合</h2>
<ul>
<li>実STARTはplayerと敵3体が動き、接触・item取得は未完成、score0。</li>
<li>Rectは位置と大きさから作る判定の四角。player/enemyは64×64、元PNG32×32。透明余白を切らず、模式図の倍率は明示する。</li>
<li>colliderectは2つのRectの重なりを調べるPygameの仕組み。Pythonの新構文として扱わず、API引数・bool理論・pixel規則の暗記を求めない。</li>
<li>enemy1 WORKは実コメント2行の#を外して空欄を埋める。外側8空白だけ抜粋から省略し、実ファイルのif8空白／内側12空白を維持する。</li>
<li>enemy2/3の正式COMPLETEには<code>not game_over and</code>がある。これを隠して「名前以外すべて同じ」と説明せず、「まだGame Overでない時だけ」の意味で書き始めを渡す。not／andを新しい必須講義へ増やさない。</li>
<li>CHALLENGEはCOMPLETEのRect2行→enemy1判定2行の抜粋。他のRect生成・コメント・空行・共通外側空白を省略。実行順・識別子・処理内容は維持する。</li>
<li>Quiz8問は基本2／標準3／発展3。日本語選択肢、即時理由、retry可、点数・回答保存なし。エラー名暗記・数字当てなし。</li>
<li>Game ReferenceのRect／colliderectは既に必要な内容を満たしており、今回追加・全面改修しない。</li>
</ul>
<h2 id="初回実装の段階レビュー分割前core12">初回実装の段階レビュー（分割前CORE12）</h2>
<p>Skill：visual-design-director。依頼の「新Art Direction探索なし」を優先し、完成済みIdentityを継承。最初に長いコメントコード・入力手順・Hint・CHECKを含むenemy1 WORKを試作し、手順の3行折返しを短文化して再撮影した。Stage1のOverview／Rect／collision／enemy1 WORK／Reviewを原寸で見て修正後、Stage2へ進んだ。</p>
<table>
<thead>
<tr>
<th>評価軸（各5点）</th>
<th style="text-align:right">Stage1</th>
<th style="text-align:right">Stage2</th>
<th>実描画の根拠</th>
</tr>
</thead>
<tbody>
<tr>
<td>Typography</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td>48px級題名、24〜28px級コード・本文、metadataと本文の階層</td>
</tr>
<tr>
<td>Composition</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td>実ゲーム入口、画像と四角、2状態比較、実コードREAD、入力と確認、対応表で構図を変える</td>
</tr>
<tr>
<td>Color</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td>既存White＋RGB、Dark Code、薄い重なり範囲、文字付きラベル・正誤</td>
</tr>
<tr>
<td>Visual Hierarchy</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td>Conceptは四角と意味、WORKは実ID・入力・常時CHECK、OPTIONALは読む／選ぶを分離</td>
</tr>
<tr>
<td>Imagery</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td>未変更START実Surface、共通実Sprite、透明余白を含む64×64、同倍率の2状態</td>
</tr>
<tr>
<td>Consistency</td>
<td style="text-align:right">5</td>
<td style="text-align:right">5</td>
<td>既存Time・Hint・Quiz・Navigation、WORK y96/164/216/600、OPTIONAL y648/h40</td>
</tr>
<tr>
<td>Personality</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td>RGB geometryと実ドット絵、制作の手触り。新たな装飾Cardや偽UIなし</td>
</tr>
<tr>
<td>Usability</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td>固定ID、段階Hint、即時理由・retry、元ページへの帰路、長いコードの横切れを解消</td>
</tr>
<tr>
<td>Fun / Playfulness</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td>近接したSTART実画面→自分で接触→停止→Rで再開、別の敵へ展開する変化が見える</td>
</tr>
<tr>
<td>Page-to-page Rhythm</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td>入口→図→比較→READ→入力→状態確認→転用→試遊→一覧→静かな記録→読解／Quiz</td>
</tr>
</tbody>
</table>
<p>初稿でComposition／Usabilityを3とした箇所：collision図の高さとReview列幅の継承で下部が溢れた。図の余白と表の列幅をopt-inで修正。Overviewは長い副題と3つめの到達点が干渉したため短文化。Stage2は正式enemy2条件がHint欄から横へ出たので、文字を縮めず360＋792pxへ再配分。CHALLENGEの長いRect2行は全幅で示し、01〜03を下段横配置にし、開いた解説もfooter手前へ収めた。Indexの任意リンクを短文化し、SETUPの自動矢印と本文の矢印の重複を削除した。</p>
<p>原寸と全14画面のthumbnailで再レビュー。全10軸4以上、<strong>PASS（実描画確認済み）</strong>。Template Fidelity：<strong>YES</strong>。点数は実画面の自己レビューであり、教室・児童理解の実証ではない。</p>
<p>Learning Review：Rect／colliderectはPygameの仕組みで、既習if・変数・代入から意味を理解する。enemy1の接触→状態変更を一度に完成し、enemy2は例を使い、enemy3は相手名を自分で選ぶ。not／and・bool理論の必須講義を増やさない。MUSTは敵3体のcollision＋Game Overまで。自力debug・設定変更はSHOULD、OPTIONALの成否はCOREへ影響しない。</p>
<h2 id="初回実装の検証結果と限界分割前core12">初回実装の検証結果と限界（分割前CORE12）</h2>
<ul>
<li>通常公開・<code>/course/</code>公開で、1280×720／1366×768／1024×768／320×180をheadless確認。全14ページ＋6Hint＋開いたCHALLENGE＋Quiz24正誤／retry状態を各4サイズ、各180・計360状態撮影しDOM検査。コード横切れなし、6本のCode Annotationはtoken中央と一致し垂直／90度だけ。開いた解説の下端は約633px、OPTIONAL footerはy648・高さ40で一致。最後のSETUP自動矢印重複削除は、最終buildの両パス・4サイズで追加描画確認。</li>
<li>両パス・4サイズで全14Indexリンク、6HintのEnter／Space開閉、Quiz全24選択肢のkeyboard・focus・正誤・retry、本文scroll、CHALLENGE、共通footerを確認。Rect／colliderect／DEBUGへのアンカー、カテゴリ切替後の帰路、reload・入口も通過。</li>
<li>Presenterは全14ページのNotes、PC3サイズでReference往復・reloadを確認。<strong>320×180はSlidev標準Presenterがプレビューと導線を折り畳むため、可視の「調べる」操作は未検証</strong>。Notesデータは読み込まれる。320×180は本編の縮小構図の確認用で、本文・講師UIの実用サイズではない。既存Lessonにも影響するPresenterの共通UIは変更しない。</li>
<li>通常・サブパスbuild成功。既存Slidev由来のCSS minify警告2件（1.5rem／0.125rem）と検証用outDirの警告は残る。公開URLの直接reloadにはREADME通りSPA fallbackが必要。</li>
<li>未変更START・想定入力後・実COMPLETEをSDL dummyで起動。STARTは各敵に接触しても続行、完成時は3体それぞれGame Over。Rを3回繰り返し位置／score／演出状態が戻ること、ESC終了、assetsなしの図形・無音fallbackを確認。想定入力後のASTは正式COMPLETEと完全一致。音を人間が聴く実機確認ではない。</li>
<li>Game／全Lesson Python／assets・Month8-1〜8-3本文・既存Reference／Component／layout・docs/01〜08は変更前SHA-256と一致。既存Guide本文と共通CSSの元部分もバイト一致。既存3Lessonの代表12画面は変更前画像と全ピクセル一致。講師Briefとdocs/14の27節はGuideへ完全同期。</li>
<li>Windows実機の代替書体、教室投影、児童理解、70〜75分の授業実測、PDFで閉じたHint／scroll全文を収録する方法は未検証。撮影・検査スクリプトは一時領域に置き、生徒配布物へ含めない。</li>
</ul>
<h2 id="rect説明分割共通shortcutの再調整core13">Rect説明分割・共通Shortcutの再調整（CORE13）</h2>
<ul>
<li>全12 WORKの<code>TryBlock</code>へ検索iconとCtrl／Fの小さいDark keycapを復元。EDIT→ファイル→shortcut→固定IDの順、Targetの36px高・既存anchorを維持。Month8-1〜8-3のMarkdown本文は変更しない。</li>
<li>p6「Rectの作り方を知る」：説明用<code>pygame.Rect(x, y, 幅, 高さ)</code>、token中央から4本の意味注釈、左上の点・幅・高さの大きな空間図。xはBlue、yはTeal、APIはViolet、寸法語はNeutral。題名候補「Rectの4つの数字を知る」も実描画で比較し、数字当てに見えにくい作り方を採用した。</li>
<li>p7「ゲームのRectを読む」：STARTのRect2行を正確に抜粋し、player_x／player_y／player_size／player_sizeを左上位置／幅／高さへ対応。実player・enemyと64×64のRectを3倍で並べ、透明余白を保持。colliderectの詳細はp5と後続WORKへ残し、旧READ末尾の式の意味は既存WORK／CHALLENGE／Quizで保つ。</li>
<li>INDEXは左7・右6、CORE13、OPTIONALは別分母2。既存<code>month9-1-read</code>は実コードページの帰路として保ち、一般形に<code>month9-1-rect-form</code>を追加。後続ページ番号とNotes・Quizのページ参照だけを繰り下げ、コード固定IDは変えない。旧Rect説明10分を5分＋5分へ分割し、Notes合計70〜75分。</li>
</ul>
<p>Skillの3案比較：A＝既存Identityを進化させる「コード→対応→図」の縦の読解、B＝コード左／図右の構造的比較、C＝実画像を大きく主役にする探索案。3案とも既存の日本語stack・monospace・意味色を維持する。Aは白を基盤にDark Codeと図だけへ面積を割き、RGB geometryは外周のIdentityに留める。Bは左右の往復、Cは一般形より画像へ視線が流れる点が弱い。今回は一般形から実コードへ読むAを選び、p6の代表試作後にp7へ展開した。</p>
<p>初稿の修正：p6は下端に近い補足でUsabilityを3とし、図・captionの余白を修正。p7はRectの塗りが画像を覆いImageryを1、下部切れでComposition／Usabilityを3とした。透明な輪郭、captionの余白、図の高さを修正して再撮影。最終buildの原寸とthumbnailで再評価した。</p>
<table>
<thead>
<tr>
<th>Skill評価軸（各5点）</th>
<th style="text-align:right">最終</th>
<th>実描画の根拠</th>
</tr>
</thead>
<tbody>
<tr>
<td>Typography</td>
<td style="text-align:right">4</td>
<td>題名48px級、一般形36px、実コード24px、説明24〜28pxを役割で分ける</td>
</tr>
<tr>
<td>Composition</td>
<td style="text-align:right">4</td>
<td>p6は一般形→空間図、p7は実コード→引数対応→実画像。1ページの役割を分ける</td>
</tr>
<tr>
<td>Color</td>
<td style="text-align:right">4</td>
<td>Blue横位置／Teal縦位置／Violet APIと中立の寸法語。色以外にも文字・点・輪郭</td>
</tr>
<tr>
<td>Visual Hierarchy</td>
<td style="text-align:right">4</td>
<td>shortcutはキー形状、一般形はDark面、実画像はコードの結果として配置</td>
</tr>
<tr>
<td>Imagery</td>
<td style="text-align:right">4</td>
<td>左上の点と寸法図、実Spriteの透明余白を含む64×64と3倍表示が一致</td>
</tr>
<tr>
<td>Consistency</td>
<td style="text-align:right">5</td>
<td>共通Targetと固定anchor、既存Header／Time／Annotation／帰路を維持</td>
</tr>
<tr>
<td>Personality</td>
<td style="text-align:right">4</td>
<td>既存RGB Identityと実ドット絵を継承し、汎用Card UIへ置き換えない</td>
</tr>
<tr>
<td>Usability</td>
<td style="text-align:right">4</td>
<td>13件INDEX、個別ID、4引数対応が収まり、token中心からの線を追える</td>
</tr>
</tbody>
</table>
<p><strong>PASS（実描画確認済み）</strong>。Learning Review：p6は一般形、p7は実コードの対応だけ。Month8-2の横／縦座標を再利用し、colliderect・bool理論・API全暗記の講義を増やさない。MUST／SHOULD／CHALLENGEと入力課題は不変、計画時間は75分以内。授業・投影・児童理解の実証ではない。</p>
<p>再調整の検証：通常公開と<code>/course/</code>で1280×720／1366×768／1024×768／320×180をheadless確認。全12 WORK＋Month9-1全15ページ、全35 Hintを各4サイズ・両パス、計480表示状態で撮影・DOM検査。コード横切れ・画面外へのはみ出しなし。4引数の注釈起点とtoken中央の差は0、斜線なし。keycapは28px級、WORK anchorはy96／164／216／600のまま。原寸と20画面の縮小一覧で再レビューした。</p>
<p>両パス・4サイズで全15 INDEXリンク、HintのEnter／Space・focus、Reference往復・reload、新p6→p7→p8と逆方向を確認。Presenter／NotesはPC3サイズで表示・帰路を確認し、p6／p7の目的と5分ずつの配分を分離。320×180は標準Presenterがプレビュー・導線を折り畳むためNotesの読み込みまで。縮小構図確認用であり講師UIの実用サイズではない。</p>
<p>通常・サブパスbuild成功（12.10秒／11.72秒）。既存CSS minify警告2件と検証用outDirの警告は残る。Game／全Lesson Python／assets・固定ID・Month8本文・docs/01〜08は変更前と一致。STARTのRect2行は抜粋と文字列一致、Notesの配分は70〜75分。既存Month8系Review3画面は前回画像と全ピクセル一致。共通規則と講師BriefはGuideへ同期。Windows代替書体・教室投影・児童理解・授業時間の実測は未検証。</p>
<h2 id="month9-1講師brief接触判定game-over">Month9-1講師Brief（接触判定・Game Over）</h2>
<p>到達点はdocs/02、時間はdocs/06、実コードはMonth9-1 START／COMPLETE。教材固有の記録は<a href="/robot-python-game/instructor/docs/17_month9-1_slidev_implementation/">docs/17</a>、共通図法はdocs/14の27節。問い・個別支援はPresenter Notesを使う。</p>
<ul>
<li>MUST：Rectの役割、player／enemyのRectの対応、colliderectと既習ifによるenemy1接触、Game Over、enemy2／enemy3への個別展開。Rect／colliderectはPygameの仕組みで、bool理論・引数全暗記を要求しない。</li>
<li>SHOULD：接触後の処理・設定の軽い変更、自力debug／self-test。基礎の接触確認と、自力で原因を探す活動を区別する。</li>
<li>CHALLENGE：条件・結果の任意変更という既存区分を維持。OPTIONALでは処理のまとまり・3体の共通点・画像とRectの違いを読む。解けなくても問題なく、Quiz全8問は必須でない。</li>
<li>CORE目安：70〜75分。p1/2=5、p3=5、p4/5=10、p6/7=5＋5、p8=10〜15、p9=5、p10=10、p11=10、p12/13=5。80分枠の残り5〜10分はバッファ。授業実測ではなく、OPTIONALを加算しない。</li>
<li>停止ポイント：p3で正しいファイル・3体落下・接触未完成。p6で一般形の左上位置・幅・高さ、p7でplayer_rect／enemy1_rectと実画像の対応。p8でenemy1接触→Game Over、p9でR、p10/11で別の敵にも接触判定。最後に説明・保存。</li>
<li>STARTの実状態：player操作・敵3体の移動／random・Rectは完成。敵接触は未完成、item表示のみ、score0。p8で条件とgame_overを同時に完成し、p9では追加入力しない。item取得はMonth9-2まで追加しない。</li>
<li>転用：enemy2/3には正式COMPLETEの<code>if not game_over and</code>を参考の書き始めとして渡す。意味は「まだGame Overでない時だけ」。接触相手のRect名を変え、enemy2は例を参照、enemy3は自分で選ぶ。list／class／関数へまとめない。</li>
<li>よくあるミス：Rect名の混同、colliderectのつづり、括弧・コロン・#の残り、if内の空白、Rect作成前に使う、別ID／別ファイル、Rとコード再実行の混同。実ファイルの外側8空白・内側12空白を保持。Mac検索／保存は⌘。</li>
<li>接触テスト：ゲーム上にenemy番号はないので、初期y50／−150／−350と最初の出現順を確認。他の敵と離れて1体ずつ接触→Rを試す。識別が難しければ講師が3つのRect名を照合する。音・色だけを成功条件にしない。</li>
<li>時間不足：任意設定変更・自力debug・OPTIONALを省略。HintとCOMPLETE照合で敵3体の判定、Game Over、説明・保存を優先。enemy2/3をSHOULDへ下げない。</li>
<li>早い生徒：MUSTと保存後、標準コードを別保存してから接触結果の任意変更、CHALLENGE読解→Quizへ個別案内。点数集計・ランキング・回答保存なし。</li>
<li>START再配布：既存<code>python tools/build_student_lessons.py</code>で生成する<code>dist/month9-1/</code>を配布。生徒は<code>month9-1.py</code>と同梱assetsを使い、complete.pyは配らない。再配布前に生徒の作業を別保存し、上書きで進捗を消さない。</li>
<li>Month9-2への接続：同じcolliderectをitemへ使い、scoreを100増やし、既習randomで再配置する。本Lessonでは質問だけで、item実装は先取りしない。</li>
</ul>
<p>CORE13/13のREFLECTで本編完了。INDEXは左7件・右6件。p6／p7とも分類は既存CONCEPT、p7の活動はREAD。CHALLENGE→QUIZは別分母1/2→2/2。Referenceは新しい一般形ページも許可済み帰路へ加え、Rect／colliderect／Game Over／DEBUGへ既存経路で往復する。Rは同じコードで再開し、変更反映は保存→ESC→▶。</p>
`},"18_curriculum_workload_audit":{html:`<h1 id="カリキュラム活動量コーディング負荷監査">カリキュラム活動量・コーディング負荷監査</h1>
<p>現行のLesson順・責務・区分・計画時間は<a href="/robot-python-game/instructor/guide/#この5か月で目指すこと">docs/24</a>を正本とする。本書の監査・提案・数値・未完成指摘は当時の履歴で、本文を更新せず保持する。Month9-2の改善後はdocs/21、Month9-3はdocs/22を参照する。</p>
<h2 id="監査の位置付け">監査の位置付け</h2>
<p>監査日：2026-10-10。Month8-1〜Month9-1の監査と、Month9-2のコード側部分監査を収録する。</p>
<p>本書は現状の監査と未採用の改善提案であり、カリキュラムの正本を更新する文書ではない。Slidev、Game、Lesson Python、assets、Presenter Notes、本書以外の既存docs、INSTRUCTOR_GUIDEは変更しない。MUST / SHOULD / CHALLENGEの正式区分はdocs/02のまま。</p>
<p>授業の実測値はない。以下の時間・比率は、実コードと生徒の具体的な行動から独立に組み立てた机上推定であり、児童による検証済みの値ではない。デザインの完成度、ページ数、タイピングの遅さで活動量を正当化しない。</p>
<p>対象生徒：平均小学5年、4月からPythonを学び、変数・代入・演算・比較・if等は既習。VS Codeには不慣れで個人制作経験なし。1人1PC、最大10人程度、講師支援あり。実行環境は授業前に準備済みとする。</p>
<h2 id="1-今後も使う共通監査指標">1. 今後も使う共通監査指標</h2>
<table>
<thead>
<tr>
<th>指標</th>
<th>定義・数え方</th>
</tr>
</thead>
<tbody>
<tr>
<td>CORE標準時間</td>
<td>標準生徒がCOREの通常経路を完了する推定時間。SHOULDを実施する経路とMUST中心経路を分ける。OPTIONALを加算しない</td>
</tr>
<tr>
<td>速い生徒終了時間</td>
<td>必要な予想・確認・記録まで行った場合の終了可能時間。単に入力だけ済ませた時間ではない</td>
</tr>
<tr>
<td>Active Coding Time</td>
<td>生徒自身がコード変更の予想・選択・入力・結果比較・原因検討をする時間。講師実演、単純な保存・起動、無目的なプレイ、紙だけの観察は除く</td>
</tr>
<tr>
<td>入力・編集時間</td>
<td>カーソル移動・数値選択・入力・記述確認の時間。Active Coding Timeの内数。文字数や入力時間だけで学習価値を判断しない</td>
</tr>
<tr>
<td>Thinking Time</td>
<td>予想・比較・原因推定・選択・説明・振り返りに割り当てる時間。活動枠の推定であり、全員がずっと思考しているという測定ではない</td>
</tr>
<tr>
<td>Coding Level</td>
<td>下表のLEVEL別に課題の数を集計。変更候補数、課題数、試行回数を混同しない</td>
</tr>
<tr>
<td>Highest Coding Level</td>
<td>通常経路で要求する最高LEVEL。任意発展のLEVELを必須負荷へ混ぜない</td>
</tr>
<tr>
<td>Teacher-led Ratio</td>
<td>講師説明と講師進行の全体共有の時間 ÷ CORE標準時間。説明だけの比率も併記する</td>
</tr>
<tr>
<td>OPTIONAL依存度</td>
<td>COREの到達点・時間を成立させるためにOPTIONALを必要としているか。原則不要。運用上、時間不足を任意課題で埋めていないかも確認する</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th style="text-align:right">LEVEL</th>
<th>内容</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:right">0</td>
<td>読むだけ</td>
</tr>
<tr>
<td style="text-align:right">1</td>
<td>数字変更</td>
</tr>
<tr>
<td style="text-align:right">2</td>
<td>穴埋め</td>
</tr>
<tr>
<td style="text-align:right">3</td>
<td>コピーして変更</td>
</tr>
<tr>
<td style="text-align:right">4</td>
<td>日本語指示から1行書く</td>
</tr>
<tr>
<td style="text-align:right">5</td>
<td>日本語指示から複数行を書く</td>
</tr>
<tr>
<td style="text-align:right">6</td>
<td>自分で処理を考える</td>
</tr>
</tbody>
</table>
<p>「自分で数字を選ぶ」はLEVEL 6ではない。設定による体験の設計と、処理・アルゴリズムの自力設計は別に扱う。</p>
<p>判定：ADEQUATE＝導入・到達点に見合う活動量、LIGHT＝小規模改善が必要、TOO LIGHT＝到達点や活動構成自体の調整が必要、OVERLOADED＝通常経路が時間・認知負荷を超える。時間だけで機械判定せず、目的・成果物・進度差も根拠にする。</p>
<h2 id="2-監査一覧">2. 監査一覧</h2>
<table>
<thead>
<tr>
<th>Lesson</th>
<th>判定</th>
<th style="text-align:right">CORE標準</th>
<th style="text-align:right">速い</th>
<th style="text-align:right">遅い</th>
<th style="text-align:right">Active Coding Time</th>
<th style="text-align:right">最高LEVEL</th>
<th>推奨</th>
</tr>
</thead>
<tbody>
<tr>
<td>Month8-1</td>
<td>LIGHT</td>
<td style="text-align:right">約55分</td>
<td style="text-align:right">約40分</td>
<td style="text-align:right">約73分</td>
<td style="text-align:right">約11分</td>
<td style="text-align:right">1</td>
<td>B：小規模改善</td>
</tr>
<tr>
<td>Month8-2</td>
<td>LIGHT</td>
<td style="text-align:right">約54分</td>
<td style="text-align:right">約38分</td>
<td style="text-align:right">約73分</td>
<td style="text-align:right">約24分</td>
<td style="text-align:right">3</td>
<td>B：支援・比較活動の調整</td>
</tr>
<tr>
<td>Month8-3</td>
<td>LIGHT</td>
<td style="text-align:right">約51分</td>
<td style="text-align:right">約39分</td>
<td style="text-align:right">約67分</td>
<td style="text-align:right">約14分</td>
<td style="text-align:right">2</td>
<td>B：既習の独立記述・検証</td>
</tr>
<tr>
<td>Month9-1</td>
<td>LIGHT</td>
<td style="text-align:right">約53分</td>
<td style="text-align:right">約38分</td>
<td style="text-align:right">約70分</td>
<td style="text-align:right">約16.5分</td>
<td style="text-align:right">3</td>
<td>B：既習if・代入の自立試行と検証</td>
</tr>
<tr>
<td>Month9-2</td>
<td>判定保留（教材資料なし）</td>
<td style="text-align:right">—</td>
<td style="text-align:right">—</td>
<td style="text-align:right">—</td>
<td style="text-align:right">—</td>
<td style="text-align:right">2（STARTの編集束のみ）</td>
<td>B候補：基盤接続確認・scoreの自力試行</td>
</tr>
</tbody>
</table>
<p>Month9-2はSlidev本文・Notesが未確認のため部分監査。資料入手後に同じ指標で完了させ、その後Month9-3へ進む。未監査部分の時間や判定を先に埋めない。</p>
<h2 id="3-month8-1参照根拠と確認事実">3. Month8-1：参照根拠と確認事実</h2>
<ul>
<li><a href="/robot-python-game/instructor/docs/01_curriculum_goals/">到達目標</a>：Month8〜9はGame 1、Month10〜11はGame 2、Month12はAI活用・制作・発表。Month8-1は環境操作、動き・ルールの発見、変数とゲームの接続。</li>
<li><a href="/robot-python-game/instructor/docs/02_month8-9_lesson_design/">到達点区分</a>：設定1か所の変更がMUST、別設定比較がSHOULD、複数設定のバランス調整がCHALLENGE。自力実装Level 1。</li>
<li><a href="/robot-python-game/instructor/docs/06_game1_lesson_flow/">配分</a>：80分枠、教材70〜75分。Month8-1の表は分析10〜15分を含めて合計65〜70分であり、75分はこのLessonの内訳からは導けない。</li>
<li><a href="/robot-python-game/instructor/presenter/month8-1">現行教材・全Presenter Notes</a>：CORE12ページ、任意CHALLENGE / QUIZ各1ページ。p1進行表とNotesの現行合計は70分。p4は遊ぶ5分＋観察・記録15分。</li>
<li><a title="開発リポジトリの参照（Web配布対象外）">START</a>、<a title="開発リポジトリの参照（Web配布対象外）">COMPLETE</a>：構文木を比較し一致を確認。違いは冒頭案内・ラベル等のコメントで、完成させる未実装機能はない。設定値は両方とも速度5 / 4、サイズ各64。</li>
<li><a href="/robot-python-game/instructor/docs/14_art_direction_v05/">共通テンプレート23節・SETUP更新26節</a>：OPTIONALをCOREへ加算しない。SETUPのエラーの見方3〜5分は10分の内数。</li>
<li><a href="/robot-python-game/instructor/guide/#month8-1%E8%AC%9B%E5%B8%ABbrief%E7%9B%AE%E5%AE%89%E6%99%82%E9%96%93optional%E9%81%8B%E7%94%A8">講師Brief</a>：表示作業56分＋説明・共有14分＝70分。敵速度・サイズをMUSTへ昇格させない。</li>
</ul>
<p>過去の実装記録より、現行Markdown、Python、最新Briefの区分を優先した。実コードの起動・描画テストは今回の授業時間の証拠にはしない。</p>
<h3 id="31-全core活動の行動分解">3.1 全CORE活動の行動分解</h3>
<p>主分類：T＝講師主導、H＝生徒が考える、C＝生徒がコードを書く／編集する、O＝生徒が操作する、W＝生徒が待つ。主分類は二重計上しない。共有・振り返りは後述の時間表では別枠にする。</p>
<table>
<thead>
<tr>
<th>ページ</th>
<th>実際の生徒行動単位</th>
<th>主分類</th>
<th>現状の観察ポイント</th>
</tr>
</thead>
<tbody>
<tr>
<td>p1</td>
<td>今日の対象ゲーム・ファイル・到達点の説明を聞く</td>
<td>T</td>
<td>5か月全体の見通しはここにはない</td>
</tr>
<tr>
<td>p2</td>
<td>今日の順序・目次の説明を聞く</td>
<td>T</td>
<td>目次の全リンクを操作する課題ではない</td>
</tr>
<tr>
<td>p3</td>
<td>配布フォルダ・指定Pythonファイルを開く</td>
<td>O</td>
<td>別Lesson / complete.pyを開かない</td>
</tr>
<tr>
<td>p3</td>
<td>保存する</td>
<td>O</td>
<td>最初はコード入力不要</td>
</tr>
<tr>
<td>p3</td>
<td>▶で実行し、ESCで停止し、再実行する</td>
<td>O</td>
<td>ゲーム画面とエディタのフォーカスを区別</td>
</tr>
<tr>
<td>p3</td>
<td>エラー時の見る順番を一度聞く</td>
<td>T</td>
<td>実エラー発生や暗記を要求しない</td>
</tr>
<tr>
<td>p3</td>
<td>起動処理・必要な個別支援を待つ</td>
<td>W</td>
<td>待ち時間を学習量と数えない</td>
</tr>
<tr>
<td>p4</td>
<td>矢印キー・Rを使って3回遊ぶ</td>
<td>O</td>
<td>プレイ回数だけでは観察量を保証しない</td>
</tr>
<tr>
<td>p4</td>
<td>プレイヤー、敵、アイテム、接触を観察する</td>
<td>H</td>
<td>動き／条件／結果を見分ける</td>
</tr>
<tr>
<td>p4</td>
<td>紙に日付・Lesson名・対象名・動き／ルールを書く</td>
<td>H</td>
<td>観察の言語化。作文の長さを評価しない</td>
</tr>
<tr>
<td>p4</td>
<td>気付いたルールをもう一度プレイで確かめる</td>
<td>H</td>
<td>確認のための操作はこの観察枠に含める</td>
</tr>
<tr>
<td>p5</td>
<td>見つけたルールを全体で共有し、表と照合する</td>
<td>T</td>
<td>他者の発見を聞く／自分の根拠を伝える</td>
</tr>
<tr>
<td>p6</td>
<td>変数名・値・EDIT / READ / SYSTEMの意味を読む</td>
<td>T</td>
<td>代入は既習。新構文の習得時間ではない</td>
</tr>
<tr>
<td>p7</td>
<td>Ctrl + Fで[8-1-1]を検索する</td>
<td>O</td>
<td>行番号を探す作業ではない</td>
</tr>
<tr>
<td>p7</td>
<td>別の値を選び、変化を予想する</td>
<td>H</td>
<td>STARTコメントが「大きくすると速い」を既に説明</td>
</tr>
<tr>
<td>p7</td>
<td>player_speedの右側の数字だけを変更する</td>
<td>C</td>
<td>1つの数値リテラルを編集</td>
</tr>
<tr>
<td>p7</td>
<td>保存、ESC、▶で再実行する</td>
<td>O</td>
<td>Rではコード変更を反映できない</td>
</tr>
<tr>
<td>p7</td>
<td>画面端に着く前の同じ時間の移動を比較する</td>
<td>H</td>
<td>手順だけでなく変更と結果を結び付ける</td>
</tr>
<tr>
<td>p8</td>
<td>[8-1-2]を検索する</td>
<td>O</td>
<td>既に同じ操作を経験済み</td>
</tr>
<tr>
<td>p8</td>
<td>敵3体の変化を予想し、enemy_speedを選ぶ</td>
<td>H</td>
<td>主観的な難しさと落下速度を区別</td>
</tr>
<tr>
<td>p8</td>
<td>数字を変更する</td>
<td>C</td>
<td>1つの数値リテラルを編集</td>
</tr>
<tr>
<td>p8</td>
<td>保存・停止・再実行する</td>
<td>O</td>
<td>画像・SE処理の編集なし</td>
</tr>
<tr>
<td>p8</td>
<td>3体の落下速度を比較する</td>
<td>H</td>
<td>randomによる位置の変化と混同しない</td>
</tr>
<tr>
<td>p9</td>
<td>[8-1-3]を検索する</td>
<td>O</td>
<td>3行見えても全行変更する課題ではない</td>
</tr>
<tr>
<td>p9</td>
<td>3対象から1つ選び、結果を考える</td>
<td>H</td>
<td>見た目と当たりやすさは別の観点</td>
</tr>
<tr>
<td>p9</td>
<td>選んだサイズの数字1か所を変更する</td>
<td>C</td>
<td>穴埋めでも新しい代入文でもない</td>
</tr>
<tr>
<td>p9</td>
<td>保存・停止・再実行する</td>
<td>O</td>
<td>入力エラーの長期解決を通常課題にしない</td>
</tr>
<tr>
<td>p9</td>
<td>大きさを確認し、遊んで比較する</td>
<td>H</td>
<td>成功条件はサイズの変化</td>
</tr>
<tr>
<td>p10</td>
<td>簡単／ちょうどいい／難しいから目標を選ぶ</td>
<td>H</td>
<td>感想だけでなく変更意図を持てるか</td>
</tr>
<tr>
<td>p10</td>
<td>設定を探し、数字を編集する</td>
<td>C</td>
<td>同じ数値編集の反復。検索は操作枠</td>
</tr>
<tr>
<td>p10</td>
<td>保存・停止・再実行する</td>
<td>O</td>
<td>実際の再試行回数は未指定</td>
</tr>
<tr>
<td>p10</td>
<td>前の動きと比べ、必要なら再調整する</td>
<td>H</td>
<td>1回で終えることもできる</td>
</tr>
<tr>
<td>p11</td>
<td>初期値表を読み、必要な設定を照合する</td>
<td>T</td>
<td>新しい課題ではなく復習資料</td>
</tr>
<tr>
<td>p12</td>
<td>変更前・変更後・結果を1組紙へ書く</td>
<td>H</td>
<td>必須の変更記録は最終的に1組</td>
</tr>
<tr>
<td>p12</td>
<td>次に試したい設定・変化を考える</td>
<td>H</td>
<td>次回への接続。口頭支援も可</td>
</tr>
<tr>
<td>p12</td>
<td>最終保存をする</td>
<td>O</td>
<td>本編完了。OPTIONALへ進む必要なし</td>
</tr>
</tbody>
</table>
<p>元フォルダ／作業フォルダの区別・複製、友達の試遊、複数設定の同時調整は任意分岐。全員が実施する活動や確定時間としては加算しない。</p>
<h3 id="32-core時間再推定">3.2 CORE時間再推定</h3>
<p>単位は分。速い／標準／遅いは自立度・観察の整理・再確認回数の違いであり、タイピング速度や環境インストール時間の差ではない。共有説明の基本量は共通に残す。早い生徒も予想・比較・紙への記録を省略しない。</p>
<table>
<thead>
<tr>
<th>活動</th>
<th style="text-align:right">現行想定</th>
<th style="text-align:right">速い</th>
<th style="text-align:right">標準</th>
<th style="text-align:right">遅い</th>
<th>学習価値</th>
</tr>
</thead>
<tbody>
<tr>
<td>p1 今日の対象・到達点</td>
<td style="text-align:right">3</td>
<td style="text-align:right">3</td>
<td style="text-align:right">3</td>
<td style="text-align:right">3</td>
<td>中</td>
</tr>
<tr>
<td>p2 今日の流れ・目次</td>
<td style="text-align:right">2</td>
<td style="text-align:right">1</td>
<td style="text-align:right">1</td>
<td style="text-align:right">1</td>
<td>低</td>
</tr>
<tr>
<td>p3 ファイル・保存・実行・停止・DEBUG案内</td>
<td style="text-align:right">10</td>
<td style="text-align:right">6</td>
<td style="text-align:right">8</td>
<td style="text-align:right">12</td>
<td>高</td>
</tr>
<tr>
<td>p4 3回のプレイ・操作確認</td>
<td style="text-align:right">5</td>
<td style="text-align:right">3</td>
<td style="text-align:right">5</td>
<td style="text-align:right">5</td>
<td>中</td>
</tr>
<tr>
<td>p4 観察・紙の記録・再確認</td>
<td style="text-align:right">15</td>
<td style="text-align:right">6</td>
<td style="text-align:right">9</td>
<td style="text-align:right">13</td>
<td>高</td>
</tr>
<tr>
<td>p5 ルールの全体共有</td>
<td style="text-align:right">5</td>
<td style="text-align:right">5</td>
<td style="text-align:right">5</td>
<td style="text-align:right">5</td>
<td>高</td>
</tr>
<tr>
<td>p6 変数名と数字・ラベル</td>
<td style="text-align:right">2</td>
<td style="text-align:right">2</td>
<td style="text-align:right">2</td>
<td style="text-align:right">2</td>
<td>中</td>
</tr>
<tr>
<td>p7 player_speed変更・比較</td>
<td style="text-align:right">3</td>
<td style="text-align:right">2</td>
<td style="text-align:right">3</td>
<td style="text-align:right">5</td>
<td>高</td>
</tr>
<tr>
<td>p8 enemy_speed変更・比較</td>
<td style="text-align:right">5</td>
<td style="text-align:right">2</td>
<td style="text-align:right">3</td>
<td style="text-align:right">5</td>
<td>中</td>
</tr>
<tr>
<td>p9 サイズ1か所変更・比較</td>
<td style="text-align:right">5</td>
<td style="text-align:right">2</td>
<td style="text-align:right">4</td>
<td style="text-align:right">6</td>
<td>中</td>
</tr>
<tr>
<td>p10 目標選択・自由調整</td>
<td style="text-align:right">10</td>
<td style="text-align:right">5</td>
<td style="text-align:right">7</td>
<td style="text-align:right">10</td>
<td>中</td>
</tr>
<tr>
<td>p11 初期値の照合</td>
<td style="text-align:right">2</td>
<td style="text-align:right">1</td>
<td style="text-align:right">1</td>
<td style="text-align:right">1</td>
<td>中</td>
</tr>
<tr>
<td>p12 振り返り・最終保存</td>
<td style="text-align:right">3</td>
<td style="text-align:right">2</td>
<td style="text-align:right">4</td>
<td style="text-align:right">5</td>
<td>高</td>
</tr>
<tr>
<td><strong>合計</strong></td>
<td style="text-align:right"><strong>70</strong></td>
<td style="text-align:right"><strong>40</strong></td>
<td style="text-align:right"><strong>55</strong></td>
<td style="text-align:right"><strong>73</strong></td>
<td>—</td>
</tr>
</tbody>
</table>
<p>推定の根拠：</p>
<ul>
<li>SETUP標準8分にはDEBUGの説明約3分を含める。初回のフォルダ・保存・起動等に残り約5分。Pygame等の準備失敗を理由に授業量を水増ししない。</li>
<li>観察標準9分は4対象の確認・整理約3分、紙の記録約4分、取りこぼしの再確認約2分。3回遊び、4種類の簡単なルールを書くだけで一律15分の記録を必要とする根拠は弱い。</li>
<li>player_speed標準3分は、説明0.5、検索・保存・再実行等0.75、入力・編集0.25、選択・予想・比較1.5。最初のWORKは現行3分が妥当であり、全部の作業時間が過大なわけではない。</li>
<li>enemy_speedは同じ操作の再利用なので標準3分。サイズは対象選択と当たりやすさの確認を加え標準4分。保存・再実行だけならこれより短い。難易度の理由の言語化まで行う場合は長くなるが、現状では全員の成果物として要求されていない。</li>
<li>TUNE標準7分は目標の選択から少数回の変更・比較まで。試行回数・「目標に近づいた」証拠が未指定なので、1回で終えて3〜5分になる場合もある。7分は確定の最低時間ではない。</li>
<li>最終振り返りは変数名・前後の値・結果・次の案を書き保存するため、標準4分とした。現行3分より少し長い。</li>
</ul>
<p>全CORE経路にはSHOULDと発展を選べるTUNEも含む。p8・p9・p10を省き、導入・観察・共有・Review・振り返りを残したMUST中心経路は、速い約31分／標準約41分／遅い約52分。MUSTの入力は最低1か所で足りる。</p>
<p>標準55分は現行70分より15分短く、80分枠なら約25分が残る。速い生徒は80分枠に対して約40分残り得る。講師が全員を70分進行で待たせれば時計上の終了は遅くなるが、それは活動量増加ではない。遅い生徒は73分で、80分枠の余裕は7分。全員に一律の追加課題を載せることも適切ではない。</p>
<h3 id="33-実コード変更とcoding-level">3.3 実コード変更とCoding Level</h3>
<table>
<thead>
<tr>
<th>作業</th>
<th>変更する箇所</th>
<th>通常1試行の入力</th>
<th style="text-align:right">LEVEL</th>
<th>区分</th>
</tr>
</thead>
<tbody>
<tr>
<td>p7 [8-1-1]</td>
<td>player_speed = 5 の数値</td>
<td>数値1か所</td>
<td style="text-align:right">1</td>
<td>MUST</td>
</tr>
<tr>
<td>p8 [8-1-2]</td>
<td>enemy_speed = 4 の数値</td>
<td>数値1か所</td>
<td style="text-align:right">1</td>
<td>SHOULD</td>
</tr>
<tr>
<td>p9 [8-1-3]</td>
<td>player_size / enemy_size / item_size = 64 から1つ選ぶ</td>
<td>数値1か所。3行全部ではない</td>
<td style="text-align:right">1</td>
<td>SHOULD</td>
</tr>
<tr>
<td>p10 TUNE</td>
<td>上の速度2種・サイズ3種から選ぶ</td>
<td>選んだ数値を再編集</td>
<td style="text-align:right">1</td>
<td>復習／発展。新MUSTなし</td>
</tr>
</tbody>
</table>
<p>変更可能な数値は5種類、固定IDは3種類。必須の新しい処理記述はない。画像・SE・score・移動・collision・Restartの編集は求めていない。</p>
<table>
<thead>
<tr>
<th style="text-align:right">LEVEL</th>
<th style="text-align:right">COREの作業束数</th>
<th>数え方</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:right">0</td>
<td style="text-align:right">2</td>
<td>p6「名前と数字」、p11「初期値一覧」の明示的なコード／設定読解。作業中に同じ行を読む行為を再計上しない</td>
</tr>
<tr>
<td style="text-align:right">1</td>
<td style="text-align:right">4</td>
<td>p7、p8、p9、p10。全経路を選んだ時の作業束数。保証される必須変更は1回のみ</td>
</tr>
<tr>
<td style="text-align:right">2</td>
<td style="text-align:right">0</td>
<td>起動可能な穴埋めを含め、穴埋めなし</td>
</tr>
<tr>
<td style="text-align:right">3</td>
<td style="text-align:right">0</td>
<td>コピー課題なし</td>
</tr>
<tr>
<td style="text-align:right">4</td>
<td style="text-align:right">0</td>
<td>代入文そのものを書かせない</td>
</tr>
<tr>
<td style="text-align:right">5</td>
<td style="text-align:right">0</td>
<td>複数行の記述なし</td>
</tr>
<tr>
<td style="text-align:right">6</td>
<td style="text-align:right">0</td>
<td>自作ロジックなし</td>
</tr>
</tbody>
</table>
<p>4作業束と「数値入力4回」は同義ではない。p10の再試行や元に戻す操作で実入力回数は増えるが、回数は現行教材では固定されていない。3つのWORKを各1回、TUNEを3回試す標準時間モデルでは計6回程度の数値編集を想定する。未指定の追加試行を到達要件にはしない。</p>
<p>最高LEVELは1。START / COMPLETEの構文木が同じことからも、完成までロジックを書き進める教材ではなく「完成ゲームを読み、設定を変える導入回」だと確認できる。</p>
<h3 id="34-thinking-load">3.4 Thinking Load</h3>
<table>
<thead>
<tr>
<th>作業</th>
<th>指示通り入力</th>
<th>予想</th>
<th>比較</th>
<th>原因検討</th>
<th>選択</th>
<th>自分で設計</th>
</tr>
</thead>
<tbody>
<tr>
<td>p3 操作</td>
<td>手順通り</td>
<td>—</td>
<td>—</td>
<td>エラー時のみ</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>p4 観察・記録</td>
<td>—</td>
<td>任意</td>
<td>3回の共通点</td>
<td>条件と結果</td>
<td>記録する発見</td>
<td>—</td>
</tr>
<tr>
<td>p7 player_speed</td>
<td>入力は単純</td>
<td>明示あり</td>
<td>同じ時間の移動</td>
<td>必須は変数との対応まで</td>
<td>値</td>
<td>—</td>
</tr>
<tr>
<td>p8 enemy_speed</td>
<td>入力は単純</td>
<td>明示あり</td>
<td>3体の速度</td>
<td>位置変化との区別はNotes支援</td>
<td>値</td>
<td>—</td>
</tr>
<tr>
<td>p9 size</td>
<td>入力は単純</td>
<td>問い／Notesで支援</td>
<td>見た目・当たりやすさ</td>
<td>変更を1つに絞る</td>
<td>対象と値</td>
<td>—</td>
</tr>
<tr>
<td>p10 TUNE</td>
<td>入力は単純</td>
<td>目標から推測</td>
<td>前の動き</td>
<td>理由の問いはあるが証拠は未指定</td>
<td>目標・設定・値</td>
<td>体験／パラメータの簡単な設計のみ</td>
</tr>
<tr>
<td>p12 振り返り</td>
<td>表を埋める</td>
<td>次の案</td>
<td>前後の値</td>
<td>結果との対応</td>
<td>次に試す設定</td>
<td>—</td>
</tr>
</tbody>
</table>
<p><strong>総評：低〜中。</strong> 予想・比較・選択の足場は既にある。特にp7の「同じ時間で比べる」はよい。一方、STARTコメント自体が速度変更の答えを説明しており、予想の多くは既知の関係を確かめる活動。原因推定・試行に基づく再設計は全員には要求されない。</p>
<p>「好きな数字を入れた→速くなった」で終われば思考負荷は低い。自由に値を選べるだけでは高い思考活動にならない。「目標→予想→1設定だけ変更→前後比較→目標に近づいた根拠」まで揃えば、同じLEVEL 1でも学習価値は上がる。数値の大小から難易度の変化を一意に断定させない。</p>
<h3 id="35-active-learning-ratio">3.5 Active Learning Ratio</h3>
<p>標準55分の内訳。二重計上せず、観察目的の短い再プレイは観察枠に、単純な保存・起動や最初のプレイは操作枠に分類する。</p>
<table>
<thead>
<tr>
<th>活動分類</th>
<th style="text-align:right">分</th>
<th style="text-align:right">55分に対する割合</th>
<th>根拠</th>
</tr>
</thead>
<tbody>
<tr>
<td>講師説明</td>
<td style="text-align:right">13</td>
<td style="text-align:right">約24%</td>
<td>p1=3、p2=1、p3=4、p6=2、p11=1、p7〜10の短い案内各0.5</td>
</tr>
<tr>
<td>生徒操作</td>
<td style="text-align:right">13</td>
<td style="text-align:right">約24%</td>
<td>p3=3.5、最初のプレイ=5、p7=0.75、p8=0.75、p9=1、p10=1.5、最後の保存=0.5</td>
</tr>
<tr>
<td>生徒入力・編集</td>
<td style="text-align:right">1.5</td>
<td style="text-align:right">約3%</td>
<td>3WORK各0.25、TUNE計0.75。キーを打つだけの時間はさらに短い</td>
</tr>
<tr>
<td>観察・思考</td>
<td style="text-align:right">18.5</td>
<td style="text-align:right">約34%</td>
<td>p4=9、p7=1.5、p8=1.5、p9=2.25、p10=4.25</td>
</tr>
<tr>
<td>全体共有</td>
<td style="text-align:right">5</td>
<td style="text-align:right">約9%</td>
<td>p5。全員が5分間発話するという意味ではない</td>
</tr>
<tr>
<td>振り返り</td>
<td style="text-align:right">3.5</td>
<td style="text-align:right">約6%</td>
<td>p12の記録・次の案。保存は操作枠</td>
</tr>
<tr>
<td>起動・個別支援の待ち</td>
<td style="text-align:right">0.5</td>
<td style="text-align:right">約1%</td>
<td>p3。長い待ちは通常モデルに組み込まない</td>
</tr>
<tr>
<td><strong>合計</strong></td>
<td style="text-align:right"><strong>55</strong></td>
<td style="text-align:right"><strong>100%（各行は丸め）</strong></td>
<td>—</td>
</tr>
</tbody>
</table>
<ul>
<li><strong>Active Coding Time：約11分</strong>＝入力・編集1.5分＋p7〜10の選択・予想・比較9.5分。標準55分の20%、予定70〜75分の約15〜16%。検索・保存・単なるプレイを膨らませて数えない。</li>
<li><strong>Thinking Time：約22分</strong>＝観察・思考18.5＋振り返り3.5。標準55分の40%。全体共有での個人の思考は追加計上せず、発話・待ちとの混在を残す。</li>
<li>思考・入力・共有・振り返りの活動枠は計28.5分、標準55分の約52%。これは認知的活動の機会の比率であって、個々の児童の実際の思考時間の測定ではない。</li>
<li>操作も含めた生徒活動枠は41.5分、約75%。PCを操作している比率と、考えながらコードを扱う比率は区別する。</li>
<li><strong>Teacher-led Ratio：約33%</strong>＝説明13＋講師進行の共有5。説明のみなら約24%。</li>
<li>予定70分のうち15分、75分なら20分には、現状から具体的な追加活動を割り当てられない。この差を説明・待ち・OPTIONALへ自動的に配賦しない。</li>
</ul>
<h3 id="36-optionalを除いた判定">3.6 OPTIONALを除いた判定</h3>
<p><strong>判定：LIGHT。推奨はB。</strong></p>
<p>導入回の到達点は成立する。VS Codeを使い、完成ゲームを観察し、既習の変数をゲーム上の変化へ接続する点で、軽いコーディング自体は適切。Month9と同じコード量は不要である。</p>
<p>しかし標準約55分で、70〜75分の活動量としては約15〜20分軽い。観察15分とTUNE10分は、複数の比較・記録成果物が明確になっていない分、早く終了しやすい。MUST中心では約41分になるため「全員が本編だけで70分作業する」とは言えない。</p>
<p>TOO LIGHTとしない理由は、必須到達点やLessonの分担を変えず、見通し・比較の深さ・言語化を補強すれば改善できるため。ADEQUATEとしない理由は、現行70分を裏付ける具体的な活動量と終了条件が不足しているため。</p>
<p>OPTIONALへの<strong>仕様上の依存はなし</strong>。CHALLENGEは敵の移動・条件・再配置の読解で、randomや負数の理解・新規実装は不要。QUIZは8問だが全問必須ではなく、Q7のRestartと設定、Q8の3体共通速度は発展推測。これらは進度差対応として妥当である。</p>
<p>ただし標準生徒の余り25分をCHALLENGE / QUIZだけで埋めれば、<strong>運用上の依存は高い</strong>。COREの不足を任意課題で解消したと判定してはいけない。短時間に正解を選べるQUIZ8問も、8問分の実装負荷として数えない。</p>
<p>主な不足は、全体ロードマップ、変更比較の証拠、調整理由の再共有。過剰なのは内容そのものではなく、一部活動の時間見積もりと、遅い生徒まで全SHOULDを必須のように進める運用リスク。</p>
<h3 id="37-改善案a--b--cすべて提案のみ">3.7 改善案A / B / C（すべて提案のみ）</h3>
<table>
<thead>
<tr>
<th>案</th>
<th>内容</th>
<th>判断</th>
</tr>
</thead>
<tbody>
<tr>
<td>A：現状維持</td>
<td>約55分の導入回として実施し、80分を使い切ることを約束しない。進度差にOPTIONALを使う</td>
<td>短縮授業なら可。70〜75分の通常COREを求める現状には推奨しない</td>
</tr>
<tr>
<td>B：小規模改善</td>
<td>全体ロードマップ約6分、既存設定を使った比較の追加約5分、調整後の共有約5分</td>
<td><strong>推奨</strong>。新構文・Game機能・Lessonの前倒しなしで、標準約71分の試行案にできる</td>
</tr>
<tr>
<td>C：カリキュラム変更</td>
<td>既習Pythonで1行書く課題、またはMonth8-2以降のロジックを前倒しする</td>
<td>現時点では不要。操作・観察・変数の接続という導入目的と競合し、入力1行だけでは時間不足も解消しない</td>
</tr>
</tbody>
</table>
<h4 id="b-15か月のロードマップ">B-1：5か月のロードマップ</h4>
<p><strong>追加価値あり。5〜8分、試行案は6分。</strong>「Game 1を読む・変える→Game 2へ使い直す→ゲームを選んで改造／AIも補助に使う→説明して発表」という既存docs/01の流れを見せる。AIを今すぐ完成ゲームの全自動制作に使うという約束はしない。</p>
<p>見るだけの長い説明にせず「今日の数字変更は、後で何の改造に使えそう？」等の短い問いを1つ入れる。後半の制作の意味が分かるため動機・見通しとして有効。ただし説明の追加だけでActive Coding Timeが増えるわけではない。</p>
<h4 id="b-2数字変更を予想比較の実験にする">B-2：数字変更を予想・比較の実験にする</h4>
<p>新しい変数を増やさず、既存の1設定で「変更前→変更後→見直した値」を確かめる追加比較を標準約5分で試す。</p>
<p>生徒の成果物は「選んだ目標／変える設定／予想／観察結果／次の値と理由」の短い1組。設定は一度に1つだけ。同じ時間のキー操作等、既存の比較条件を使う。得点・難しさはrandomにも左右されるため、速度やサイズの変化を先に確かめ、主観的な遊びやすさと分ける。</p>
<p>これにより選択・比較・原因検討を強める。全員に複数設定の同時調整や高度な難易度設計を要求しない。試行回数の増加だけを目的にもしない。</p>
<h4 id="b-3調整後の全体共有">B-3：調整後の全体共有</h4>
<p><strong>学習価値あり。約5分。</strong> 既存p5は変更前のルール共有なので、改造後の共有とは役割が異なる。</p>
<p>各自「どの設定を変えた／どう変わった」を1文で整理し、2〜3例を全体で比べる。「難しく感じたのはなぜ？」は結果の説明として聞き、正解の難易度を押し付けない。最大10人全員の長い発表を5分に詰め込まない。ゲーム大会・順番待ちへ置き換えない。</p>
<h4 id="bの進度差対応">Bの進度差対応</h4>
<p>55＋6＋5＋5＝71分は標準経路の仮配分で、未検証。速い生徒の追加比較を約2分とすると40＋6＋2＋5＝約53分で終わり得る。遅い経路へ機械的に全部加算すれば89分になる。Bでも全員の終了を同じ時刻にはできない。</p>
<p>遅い生徒は既存SHOULDの敵速度・サイズ等を省き、1設定の予想と結果、振り返りを優先する。既存の共有やTUNEの一部を改善活動へ置き換える運用も試す。速い生徒のOPTIONALは進度差対応に限る。Bの比較・共有をMUSTにするかは実授業の検証と別途の仕様変更判断を要し、本書では正式区分を変更しない。</p>
<h3 id="38-日本語指示から1行書かせる必要性">3.8 日本語指示から1行書かせる必要性</h3>
<p><strong>今回の改善としては不要。</strong> 数字入力だけであることを欠陥と決めつけない。コードを書く量より、結果を説明できるかを優先する。移動・当たり判定・scoreの前倒しは避ける。</p>
<p>将来Cを検討する場合の限定例は、初期設定で「敵の速さをプレイヤーより1小さくする」→ <code>enemy_speed = player_speed - 1</code>。既習の変数・引き算・代入だけで1行を記述でき、初期値5 / 4ではゲーム動作も同じ。ただしその後は設定が連動し、従来の独立した数値変更と異なる。正の速度等の条件確認と教材仕様の承認が必要で、単なる入力追加として混ぜない。実施するならLEVEL 4だが、今回の集計には含めない。</p>
<h3 id="39-各活動の優先区分の再評価案">3.9 各活動の優先区分の再評価案</h3>
<p>ページのCORE所属と、その中の活動がMUSTかは別。以下は優先付けの提案で、docs/02・START冒頭・Guideを更新する指示ではない。</p>
<table>
<thead>
<tr>
<th>活動</th>
<th>再評価案</th>
<th>理由</th>
</tr>
</thead>
<tbody>
<tr>
<td>p1 到達点</td>
<td>MUST相当の短い共通案内</td>
<td>今日の目的を共有</td>
</tr>
<tr>
<td>p2 目次</td>
<td>短い共通案内。操作習得はSHOULD</td>
<td>目次を使えることを新しい到達要件にしない</td>
</tr>
<tr>
<td>p3 開く・保存・実行・停止・再実行</td>
<td>MUST維持</td>
<td>開発環境操作の核</td>
</tr>
<tr>
<td>p3 DEBUG／元と作業データの区別</td>
<td>DEBUGは短い共通案内、複製等はSHOULD維持</td>
<td>エラー暗記・必ず失敗する課題は不要</td>
</tr>
<tr>
<td>p4 複数の動き・ルールの観察</td>
<td>MUST維持</td>
<td>分析の核。3回という回数そのものを合否基準にしない</td>
</tr>
<tr>
<td>p5 ルール共有</td>
<td>主要なCORE活動として維持</td>
<td>全員の発表を独立MUSTにしない</td>
</tr>
<tr>
<td>p6 名前と数字</td>
<td>MUSTを支える説明</td>
<td>構文講義へ拡張しない</td>
</tr>
<tr>
<td>p7 player_speed</td>
<td>MUST維持</td>
<td>最低1設定と結果を対応付ける</td>
</tr>
<tr>
<td>p8 enemy_speed</td>
<td>SHOULD維持</td>
<td>別の設定の比較</td>
</tr>
<tr>
<td>p9 size</td>
<td>SHOULD維持</td>
<td>追加比較。3種類全変更を要求しない</td>
</tr>
<tr>
<td>p10 1設定の再確認</td>
<td>MUSTの補強として活用</td>
<td>未達の生徒の確認時間も確保</td>
</tr>
<tr>
<td>p10 複数設定・友達の試遊</td>
<td>OPTIONAL／既存CHALLENGE維持</td>
<td>新しい必須負荷にしない</td>
</tr>
<tr>
<td>p11 初期値表</td>
<td>読み返す資料</td>
<td>表の全行を暗記するMUSTにしない</td>
</tr>
<tr>
<td>p12 変更と結果の記録・保存</td>
<td>MUST維持</td>
<td>最終的な達成証拠</td>
</tr>
<tr>
<td>任意CHALLENGE / QUIZ</td>
<td>OPTIONAL維持</td>
<td>CORE不足を埋める通常進行にしない</td>
</tr>
</tbody>
</table>
<p>サイズを「任意の正の整数」とするだけでは極端な値で起動失敗も起こり得る。例えばitem_sizeが大きすぎると初期位置のrandom範囲が成立しない。Notesの64 / 128等の既存支援を使い、事故対応を学習量に数えない。今回Pythonの安全処理や課題条件は変更しない。</p>
<h3 id="310-実授業で検証すること次の監査">3.10 実授業で検証すること・次の監査</h3>
<ol>
<li>p3準備完了、p4記録完了、各WORKの比較完了、p12記録・保存完了の時刻を取る。入力完了と理解確認を区別する。</li>
<li>数値変更の回数と、理由を説明できた比較の数を別に記録する。答えを見てなぞっただけの予想を高負荷扱いしない。</li>
<li>発話・コード編集・思考・操作・待ちを簡単な観察記録で分ける。講師支援待ちや端末不具合はCORE学習時間と分離する。</li>
<li>OPTIONALに入る直前のCORE終了時刻を残し、OPTIONALなしで標準70分が成立するか再判定する。速い生徒の入力速度だけを代表にしない。</li>
<li>既存Briefどおり、MUST達成とSHOULD未実施を区別する。遅い生徒に追加比較を強制しない。</li>
</ol>
<p><strong>次はMonth8-2。</strong> 日本語ヒント・穴埋め・既習コードの転用が実際にLEVEL 2〜3の学習活動になっているか、右→左→上下の所要時間と画面外制限SHOULDを同じ基準で監査する。今回そのLessonの評価・修正は行わない。</p>
<h3 id="311-今回の確認範囲">3.11 今回の確認範囲</h3>
<p>実施：全Month8-1本文／Notes／OPTIONALの読解、関連正本・Brief照合、START / COMPLETEの構文木一致、固定IDと設定値の確認、配分合計と活動内訳の計算。</p>
<p>未実施：実授業の計時、生徒への理解テスト、画面デザイン評価、headless画面検証、Game起動、Slidev build。今回の監査では必要なく、実施済みとは扱わない。新規成果物は本書だけ。既存教材・コード・仕様・Notes・Guideは変更しない。</p>
<h2 id="4-month8-2活動量コーディング負荷監査">4. Month8-2：活動量・コーディング負荷監査</h2>
<p>監査日：2026-10-10。共通指標・生徒モデルは1節およびMonth8-1と同じ。通常経路はHintを開く前の本文と実STARTを基準にする。時間は実測ではなく、行動分解からの独立推定。Month8-1章は変更しない。</p>
<h3 id="41-正本到達点実装差分">4.1 正本・到達点・実装差分</h3>
<p>参照：<a href="/robot-python-game/instructor/docs/01_curriculum_goals/">docs/01</a>、<a href="/robot-python-game/instructor/docs/02_month8-9_lesson_design/">docs/02</a>、<a href="/robot-python-game/instructor/docs/06_game1_lesson_flow/">docs/06</a>、<a href="/robot-python-game/instructor/docs/14_art_direction_v05/">docs/14の19.8〜19.12・28〜29節</a>、<a href="/robot-python-game/instructor/docs/15_month8-2_slidev_implementation/">docs/15の現行ページ責務・講師Brief</a>、<a href="/robot-python-game/instructor/guide/#month8-2%E8%AC%9B%E5%B8%ABbrief4%E6%96%B9%E5%90%91%E7%A7%BB%E5%8B%95">GuideのMonth8-2講師Brief</a>、<a href="/robot-python-game/instructor/presenter/month8-2">全教材・Presenter Notes・OPTIONAL</a>、<a title="開発リポジトリの参照（Web配布対象外）">START</a>、<a title="開発リポジトリの参照（Web配布対象外）">COMPLETE</a>。docs/15の過去の完成式表示等は現行本文への指示として使わない。</p>
<p>docs/02の正式区分をそのまま抜き出す：</p>
<table>
<thead>
<tr>
<th>区分</th>
<th>正本の記載</th>
</tr>
</thead>
<tbody>
<tr>
<td>MUST</td>
<td>x/y座標と画面上の方向を対応付ける／キー入力で処理が実行されることを理解する／座標加減算でプレイヤーを動かす／既存コードを参考に似た移動処理を追加する</td>
</tr>
<tr>
<td>SHOULD</td>
<td>if・比較演算で画面外移動を制限する／player_speedを調整する</td>
</tr>
<tr>
<td>CHALLENGE</td>
<td>移動に関する簡単なアレンジ</td>
</tr>
<tr>
<td>新出</td>
<td>Pygameのリアルタイムキー入力</td>
</tr>
<tr>
<td>自力実装レベル</td>
<td>Level 2〜3</td>
</tr>
</tbody>
</table>
<p>4方向移動への具体化はdocs/01・Guide・現行CHECKと一致する。上端・下端の追記は現行STARTのCHALLENGE、右端はSHOULD。任意のREAD課題・QUIZは進度差対応であり、docs/02のCHALLENGEの文言そのものが「READ／OPTIONAL」に変更されたわけではない。</p>
<p>COREは12ページ、OPTIONALは2ページ。Notesの合計70分、上下に支援5分を足す場合75分。標準配分はSHOULDの右端10分・速度5分を含む。COREというページ列を「全内容がMUST」と解釈しない。</p>
<p>STARTは右の自己代入、左のコメント付き穴埋め、上下のコメントだけ、左端の完成例を持つ。COMPLETEは4方向と全4端制限を持つ。学習範囲のplayer座標を更新するif群を除いて比較すると、両者の構文木は一致した。敵3体の落下、画像・SE準備等の基盤は共通。敵接触・item取得は両方とも未接続でscoreは0、通常Game Overにならない。これは既存の教育差分であり今回の修正対象ではない。</p>
<h3 id="42-全core活動の行動分解">4.2 全CORE活動の行動分解</h3>
<p>分類はT＝講師主導、H＝生徒が考える、C＝入力・編集、O＝PC操作、W＝待ち。Debugは独立の新分類ではなく、後の集計で原因検討Hと修正入力Cへ分ける。</p>
<table>
<thead>
<tr>
<th>ページ</th>
<th>実際の生徒行動単位</th>
<th>分類</th>
<th>注意</th>
</tr>
</thead>
<tbody>
<tr>
<td>p1</td>
<td>前回の設定変更を短く共有、今日の対象・目標を聞く</td>
<td>T</td>
<td>完成ゲームを再び遊ぶ回ではない</td>
</tr>
<tr>
<td>p2</td>
<td>右→左→上下とEXTRAの順番を聞く</td>
<td>T</td>
<td>目次の全リンクを操作する課題ではない</td>
</tr>
<tr>
<td>p3</td>
<td>month8-2.pyを開き保存する</td>
<td>O</td>
<td>前回ファイル・complete.pyと区別</td>
</tr>
<tr>
<td>p3</td>
<td>実行し、キーを押して静止を確認する</td>
<td>O</td>
<td>未完成STARTの正常状態を確認</td>
</tr>
<tr>
<td>p3</td>
<td>ESCで閉じ、再実行する</td>
<td>O</td>
<td>Rでは反映しない</td>
</tr>
<tr>
<td>p3</td>
<td>短い案内を聞き、起動を待つ</td>
<td>T / W（別時間）</td>
<td>長い環境修復を通常学習量にしない</td>
</tr>
<tr>
<td>p4</td>
<td>座標図と4方向の対応を聞く</td>
<td>T</td>
<td>xは右、yは下へ増加</td>
</tr>
<tr>
<td>p4</td>
<td>上下左右で変わる座標・符号を考える</td>
<td>H</td>
<td>Rectの詳細を理解する課題ではない</td>
</tr>
<tr>
<td>p5</td>
<td>keys取得と右キーifのコード・意味を読む</td>
<td>T</td>
<td>用意済み条件行。移動の完成式は表示されない</td>
</tr>
<tr>
<td>p5</td>
<td>条件が成立する時、何が実行されるか考える</td>
<td>H</td>
<td>API名・bool内部の暗記は不要</td>
</tr>
<tr>
<td>p6</td>
<td>[8-2-1]を検索する</td>
<td>O</td>
<td>対象のifは既に実行可能</td>
</tr>
<tr>
<td>p6</td>
<td>player_x・player_speed・加算の関係を考える</td>
<td>H</td>
<td>STARTには使う変数と増加方向のヒントがある</td>
</tr>
<tr>
<td>p6</td>
<td>自己代入の右辺に計算を書き足す</td>
<td>C</td>
<td>#以降へ入力しても実行されない</td>
</tr>
<tr>
<td>p6</td>
<td>保存・ESC・実行する</td>
<td>O</td>
<td>この操作の時間をコード思考へ混ぜない</td>
</tr>
<tr>
<td>p6</td>
<td>右キーを押す／離す結果を確かめる</td>
<td>H</td>
<td>入力成功だけでなく条件と移動を対応付ける</td>
</tr>
<tr>
<td>p7</td>
<td>[8-2-2]を検索する</td>
<td>O</td>
<td>左の2行はコメント</td>
</tr>
<tr>
<td>p7</td>
<td>右から残す部分・変える部分を選ぶ</td>
<td>H</td>
<td>if構造は同じ、キーと演算が違う</td>
</tr>
<tr>
<td>p7</td>
<td>コメントを解除し右辺を入力、または右の2行を転用する</td>
<td>C</td>
<td>通常は参考コード付きの記述</td>
</tr>
<tr>
<td>p7</td>
<td>保存・停止・実行する</td>
<td>O</td>
<td>右の完成処理を消さない</td>
</tr>
<tr>
<td>p7</td>
<td>左右両方で押す／離す結果を比較する</td>
<td>H</td>
<td>キー・符号を確認</td>
</tr>
<tr>
<td>p8</td>
<td>[8-2-3]を検索する</td>
<td>O</td>
<td>STARTは上／下のコメントだけ</td>
</tr>
<tr>
<td>p8</td>
<td>x→y、上／下の符号、キー名を選ぶ</td>
<td>H</td>
<td>既存の左右ifを転用できる</td>
</tr>
<tr>
<td>p8</td>
<td>上下それぞれif＋代入を追加する</td>
<td>C</td>
<td>2方向で計4論理行</td>
</tr>
<tr>
<td>p8</td>
<td>保存・停止・実行する</td>
<td>O</td>
<td>画面外へ出たら再実行</td>
</tr>
<tr>
<td>p8</td>
<td>4キーで方向・キーを離した時を確認する</td>
<td>H</td>
<td>最終MUSTの成立</td>
</tr>
<tr>
<td>p8等</td>
<td>必要時だけ原因を調べ、短い修正をする</td>
<td>H / C（別時間）</td>
<td>標準モデルの修正1回をこの枠へ置く</td>
</tr>
<tr>
<td>p9</td>
<td>[8-2-4]を検索、左端完成例を読む</td>
<td>O / H（別時間）</td>
<td>SHOULDの参考コード</td>
</tr>
<tr>
<td>p9</td>
<td>右端に必要な比較・戻す値を考える</td>
<td>H</td>
<td>画面幅からサイズを引く必要がある</td>
</tr>
<tr>
<td>p9</td>
<td>右端の2つの空欄を埋めコメント解除する</td>
<td>C</td>
<td>上下端も必須とはしない</td>
</tr>
<tr>
<td>p9</td>
<td>保存・停止・実行する</td>
<td>O</td>
<td>元の移動処理は残す</td>
</tr>
<tr>
<td>p9</td>
<td>左右端まで動かして比較する</td>
<td>H</td>
<td>見た目の左上座標と領域の端を対応付ける</td>
</tr>
<tr>
<td>p10</td>
<td>player_speedを名前で検索する</td>
<td>O</td>
<td>架空の追加固定IDなし</td>
</tr>
<tr>
<td>p10</td>
<td>正の整数を選び変化を予想する</td>
<td>H</td>
<td>Month8-1と同じ変数</td>
</tr>
<tr>
<td>p10</td>
<td>数字だけ変更する</td>
<td>C</td>
<td>処理の記述ではない</td>
</tr>
<tr>
<td>p10</td>
<td>保存・停止・再実行する</td>
<td>O</td>
<td>待ちを学習時間として膨らませない</td>
</tr>
<tr>
<td>p10</td>
<td>同じ時間の移動量・操作しやすさを比較する</td>
<td>H</td>
<td>画面端に達する前に比べる</td>
</tr>
<tr>
<td>p11</td>
<td>キー・座標・演算の一覧を読む</td>
<td>T</td>
<td>新しい実装課題なし</td>
</tr>
<tr>
<td>p11</td>
<td>自分の処理と表を対応付ける</td>
<td>H</td>
<td>単に4式を写す課題ではない</td>
</tr>
<tr>
<td>p12</td>
<td>1方向の変数・演算・動きを紙へ記録する</td>
<td>H</td>
<td>感想だけでなく処理と結果</td>
</tr>
<tr>
<td>p12</td>
<td>キーなしの敵移動を予想する</td>
<td>H</td>
<td>次回への問い。まだ敵のコードは書かない</td>
</tr>
<tr>
<td>p12</td>
<td>4方向の最終確認・保存</td>
<td>O / H（別時間）</td>
<td>本編終了。OPTIONAL未実施で未達にしない</td>
</tr>
</tbody>
</table>
<h3 id="43-各workの実態通常表示入力量">4.3 各WORKの実態・通常表示・入力量</h3>
<p><a title="開発リポジトリの参照（Web配布対象外）">HintBlock</a>は初期状態open=0で、Hint本文は通常非表示。以下の評価には通常のSTARTコメント、CONCEPTの説明、既に作った右／左コードを含める。すべてのHintを先に開いた状態を基準にしない。</p>
<table>
<thead>
<tr>
<th>WORK</th>
<th>通常見える支援と実作業</th>
<th>追加・編集する量</th>
<th style="text-align:right">通常LEVEL</th>
</tr>
</thead>
<tbody>
<tr>
<td>右 [8-2-1]</td>
<td>ifとplayer_x = player_xが用意済み。「1回で動く量」と使う変数・x増加を提示。完成代入はHint3だけ</td>
<td>既存右辺に <code> + player_speed</code> の15文字を追記すれば成立。行・ifを自作する必要なし</td>
<td style="text-align:right">2</td>
</tr>
<tr>
<td>左 [8-2-2]</td>
<td>コメント付きK_LEFT条件と代入の左辺が表示。右コード参照を明示し、＋右／−左も通常表示</td>
<td>#の解除と右辺23文字 <code>player_x - player_speed</code>。右2行コピーならキー・演算を変更</td>
<td style="text-align:right">3</td>
</tr>
<tr>
<td>上下 [8-2-3]</td>
<td>STARTも通常スライドも「上／下へ動かそう」のコメントのみ。x→yを示し左右コードを参照させる</td>
<td>if＋代入を2組、計4論理行。完成例の字数は計112文字（行頭空白・改行を除く）。コピーなら変更文字だけになる</td>
<td style="text-align:right">3</td>
</tr>
<tr>
<td>右端 [8-2-4]</td>
<td>左端完成例を提示。STARTには比較・代入の2つの空欄とplayer_xの足場</td>
<td><code>screen_width - player_size</code> 26文字を2か所、#解除。比較演算子&gt;はSTARTに既にある</td>
<td style="text-align:right">2</td>
</tr>
<tr>
<td>speed</td>
<td>初期5と前回経験。名前検索→数値編集→比較</td>
<td>数値1か所</td>
<td style="text-align:right">1</td>
</tr>
</tbody>
</table>
<p>入力文字数は代表解の量であり、タイピング時間の測定ではない。右は15文字で済むが、自己代入の意味・加算・条件との関係を理解して検証する価値はある。「15文字なので学習ゼロ」ともしない。</p>
<p>左はSTART穴埋めだけを完成する経路ならLEVEL 2相当にもなり得るが、通常指示が右の既存コードを転用するため、主分類はLEVEL 3。右端は左例の転用を含むが、入力形式は2か所の穴埋めが主なのでLEVEL 2として1束だけ数える。</p>
<p>上下は白紙部分へ4行書くが、同型の左右2行が既にあるためLEVEL 5とは数えない。新しいロジックを設計するLEVEL 6でもない。日本語コメントだけのSTARTであることと、日本語だけから自立生成することを混同しない。</p>
<h3 id="44-core時間再推定">4.4 CORE時間再推定</h3>
<p>単位は分。比較・押す／離すの確認・記録を含める。共有説明の基本枠は共通。速いモデルはエラーなし、標準は短い修正1回、遅いモデルは追加の読み直し・確認・短い修正を見込む。全員が必ずエラーを出す、入力だけで10分かかる、PCトラブルで埋まるとは仮定しない。</p>
<table>
<thead>
<tr>
<th>活動</th>
<th style="text-align:right">現行想定</th>
<th style="text-align:right">速い</th>
<th style="text-align:right">標準</th>
<th style="text-align:right">遅い</th>
<th>学習価値</th>
</tr>
</thead>
<tbody>
<tr>
<td>p1 前回・今日の到達点</td>
<td style="text-align:right">3</td>
<td style="text-align:right">3</td>
<td style="text-align:right">3</td>
<td style="text-align:right">3</td>
<td>中</td>
</tr>
<tr>
<td>p2 今日の流れ</td>
<td style="text-align:right">2</td>
<td style="text-align:right">1</td>
<td style="text-align:right">1</td>
<td style="text-align:right">1</td>
<td>低</td>
</tr>
<tr>
<td>p3 START実行・静止・停止</td>
<td style="text-align:right">5</td>
<td style="text-align:right">3</td>
<td style="text-align:right">4</td>
<td style="text-align:right">6</td>
<td>中</td>
</tr>
<tr>
<td>p4 座標理解・方向確認</td>
<td style="text-align:right">5</td>
<td style="text-align:right">5</td>
<td style="text-align:right">5</td>
<td style="text-align:right">5</td>
<td>高</td>
</tr>
<tr>
<td>p5 keys・ifの理解</td>
<td style="text-align:right">5</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td>高</td>
</tr>
<tr>
<td>p6 右移動</td>
<td style="text-align:right">10</td>
<td style="text-align:right">3</td>
<td style="text-align:right">6</td>
<td style="text-align:right">9</td>
<td>高</td>
</tr>
<tr>
<td>p7 左移動</td>
<td style="text-align:right">10</td>
<td style="text-align:right">3</td>
<td style="text-align:right">5</td>
<td style="text-align:right">8</td>
<td>高</td>
</tr>
<tr>
<td>p8 上下移動・4方向確認</td>
<td style="text-align:right">10〜15</td>
<td style="text-align:right">5</td>
<td style="text-align:right">9</td>
<td style="text-align:right">14</td>
<td>高</td>
</tr>
<tr>
<td>p9 右端・左右端確認（SHOULD）</td>
<td style="text-align:right">10</td>
<td style="text-align:right">4</td>
<td style="text-align:right">8</td>
<td style="text-align:right">12</td>
<td>高</td>
</tr>
<tr>
<td>p10 speed比較（SHOULD）</td>
<td style="text-align:right">5</td>
<td style="text-align:right">2</td>
<td style="text-align:right">3</td>
<td style="text-align:right">4</td>
<td>中</td>
</tr>
<tr>
<td>p11 移動一覧</td>
<td style="text-align:right">2</td>
<td style="text-align:right">2</td>
<td style="text-align:right">2</td>
<td style="text-align:right">2</td>
<td>中</td>
</tr>
<tr>
<td>p12 振り返り・保存</td>
<td style="text-align:right">3</td>
<td style="text-align:right">3</td>
<td style="text-align:right">4</td>
<td style="text-align:right">5</td>
<td>高</td>
</tr>
<tr>
<td><strong>合計</strong></td>
<td style="text-align:right"><strong>70〜75</strong></td>
<td style="text-align:right"><strong>38</strong></td>
<td style="text-align:right"><strong>54</strong></td>
<td style="text-align:right"><strong>73</strong></td>
<td>—</td>
</tr>
</tbody>
</table>
<p>右6分は既習代入と新しいキー条件を接続する初回として理解・比較を厚めにした。左は同型の転用なので5分。上下はx/y・キー・演算と2組のifがあるので9分。右端は座標と表示領域の差を考えるため8分とし、単なる52文字の転記時間ではない。speedは前回と同じ操作・設定なので3分。Conceptを含め、現行時間をすべて過大と扱ってはいない。</p>
<p><strong>MUST中心経路：速い32分／標準43分／遅い57分。</strong> p9・p10の計6／11／16分を外し、START、Concept、4方向、Review、Reflectは残す。現行予定のMUST中心は55〜60分。上下端CHALLENGEはどちらの標準経路にも含めない。</p>
<p>標準の全COREは予定70〜75分より16〜21分短い。80分枠では約26分残る。速い生徒は約42分残り得るが、講師の停止確認があれば実際の終了時刻は後ろへ動く。その差を有効なコーディング時間とは数えない。遅い生徒が全SHOULDまで行うと73分で、追加を一律に載せる余裕は小さい。</p>
<h3 id="45-work別の入力思考操作debug">4.5 WORK別の入力・思考・操作・Debug</h3>
<p>単位は分。各セルは「速い／標準／遅い」。思考は理解・変数／演算の選択・予想・結果比較、操作は検索・保存・停止・実行。案内は講師の短い説明。Debugは原因調査と修正を合わせた独立枠で、下の全体集計時だけH/Cへ配賦する。各行の合計は前表と一致する。</p>
<table>
<thead>
<tr>
<th>WORK</th>
<th>入力・編集</th>
<th>思考・比較</th>
<th>操作</th>
<th>Debug</th>
<th>講師案内</th>
<th>合計</th>
</tr>
</thead>
<tbody>
<tr>
<td>右</td>
<td>0.5 / 1 / 1.5</td>
<td>1.25 / 3.5 / 5.5</td>
<td>0.75 / 1 / 1.5</td>
<td>0 / 0 / 0</td>
<td>0.5 / 0.5 / 0.5</td>
<td>3 / 6 / 9</td>
</tr>
<tr>
<td>左</td>
<td>0.5 / 1 / 1.5</td>
<td>1.25 / 2.5 / 4.5</td>
<td>0.75 / 1 / 1.5</td>
<td>0 / 0 / 0</td>
<td>0.5 / 0.5 / 0.5</td>
<td>3 / 5 / 8</td>
</tr>
<tr>
<td>上下</td>
<td>1.25 / 2 / 3</td>
<td>2.5 / 4.5 / 6.75</td>
<td>0.75 / 1 / 1.75</td>
<td>0 / 1 / 2</td>
<td>0.5 / 0.5 / 0.5</td>
<td>5 / 9 / 14</td>
</tr>
<tr>
<td>右端</td>
<td>0.5 / 1 / 1.5</td>
<td>2.25 / 5.5 / 7.25</td>
<td>0.75 / 1 / 1.75</td>
<td>0 / 0 / 1</td>
<td>0.5 / 0.5 / 0.5</td>
<td>4 / 8 / 12</td>
</tr>
<tr>
<td>speed</td>
<td>0.25 / 0.25 / 0.25</td>
<td>0.75 / 1.5 / 2.25</td>
<td>0.5 / 0.75 / 1</td>
<td>0 / 0 / 0</td>
<td>0.5 / 0.5 / 0.5</td>
<td>2 / 3 / 4</td>
</tr>
<tr>
<td><strong>計</strong></td>
<td><strong>3 / 5.25 / 7.75</strong></td>
<td><strong>8 / 17.5 / 26.25</strong></td>
<td><strong>3.5 / 4.75 / 7.5</strong></td>
<td><strong>0 / 1 / 3</strong></td>
<td><strong>2.5 / 2.5 / 2.5</strong></td>
<td><strong>17 / 31 / 47</strong></td>
</tr>
</tbody>
</table>
<p>細かい小数は計算の整合用であり、15秒単位で実測したことを意味しない。標準のDebug1分を上下に置いたのは、修正1回を一度だけ計上するため。他WORKに発生しても総量が同じなら配賦を移す。発生しなければ全CORE53分、Active Coding Time22.75分。エラー率の実測・断定はしていない。</p>
<p>Debug1分の標準内訳は原因を探す0.75分H、修正入力0.25分C。このため入力・編集は計5.5分、コード思考は計18.25分、Active Coding Timeは23.75分となる。停止してTerminalを見るPC操作は上の操作枠へ含め、原因を考える時間と混ぜない。</p>
<h3 id="46-coding-level集計scaffolding">4.6 Coding Level集計・Scaffolding</h3>
<p>明示的な課題束で集計し、上下を1束、同じ行の再読・再入力を追加の課題束にしない。</p>
<table>
<thead>
<tr>
<th style="text-align:right">LEVEL</th>
<th style="text-align:right">MUST経路</th>
<th style="text-align:right">SHOULD追加</th>
<th style="text-align:right">全CORE</th>
<th>課題束</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:right">0</td>
<td style="text-align:right">2</td>
<td style="text-align:right">0</td>
<td style="text-align:right">2</td>
<td>p5キー入力読解、p11移動一覧。座標図の説明はPythonコード読解束と数えない</td>
</tr>
<tr>
<td style="text-align:right">1</td>
<td style="text-align:right">0</td>
<td style="text-align:right">1</td>
<td style="text-align:right">1</td>
<td>p10 speed数値変更</td>
</tr>
<tr>
<td style="text-align:right">2</td>
<td style="text-align:right">1</td>
<td style="text-align:right">1</td>
<td style="text-align:right">2</td>
<td>p6右の右辺完成、p9右端穴埋め</td>
</tr>
<tr>
<td style="text-align:right">3</td>
<td style="text-align:right">2</td>
<td style="text-align:right">0</td>
<td style="text-align:right">2</td>
<td>p7左へ転用、p8上下へ転用</td>
</tr>
<tr>
<td style="text-align:right">4</td>
<td style="text-align:right">0</td>
<td style="text-align:right">0</td>
<td style="text-align:right">0</td>
<td>日本語だけから1行生成する課題は保証されていない</td>
</tr>
<tr>
<td style="text-align:right">5</td>
<td style="text-align:right">0</td>
<td style="text-align:right">0</td>
<td style="text-align:right">0</td>
<td>4行入力する上下も、同型の既存例を利用できる</td>
</tr>
<tr>
<td style="text-align:right">6</td>
<td style="text-align:right">0</td>
<td style="text-align:right">0</td>
<td style="text-align:right">0</td>
<td>独自ロジック設計なし</td>
</tr>
</tbody>
</table>
<p><strong>MUSTの通常課題に含まれる最高LEVEL＝3、SHOULD込みも3。</strong> 個人がHint3／講師完成例を見て転記した時の実績LEVELは2〜3へ下がり得る。「全員が自力でLEVEL 3を示した」という実測保証ではない。全Hintを開いた経路を通常の独立記述として集計しない。</p>
<p>支援の減少は実際に存在する：右は実行可能な自己代入、左はコメント付き条件と左辺、上下はコメントだけ。3ページすべて同じ穴埋めではない。特に上下には既に書く余地がある。</p>
<p>ただし、座標・符号はp4の表、左の引き算は本文、上下の増減はSTARTコメントでも示される。選択の答えに近い支援は残るので、右→左→上下で「独力のロジック設計」まで上がるわけではない。通常表示に完成代入式が先に出ているという批判も、現行右／左WORKには当てはまらない。完成形が出るのはHint3、作業後のReview、OPTIONALの読解等である。</p>
<h3 id="47-thinking-load書かせる余地">4.7 Thinking Load・書かせる余地</h3>
<table>
<thead>
<tr>
<th>WORK</th>
<th>指示通り入力</th>
<th>予想・比較</th>
<th>原因検討</th>
<th>転用</th>
<th>自力設計</th>
</tr>
</thead>
<tbody>
<tr>
<td>右</td>
<td>実コードの右辺を補う</td>
<td>加算したxと押す／離すを確認</td>
<td>自己代入では動かない理由まで説明する余地</td>
<td>既習代入・加算をキー条件へ</td>
<td>なし</td>
</tr>
<tr>
<td>左</td>
<td>#解除・式の入力は短い</td>
<td>左右と＋/−を比較</td>
<td>残す変数／変えるキーと符号</td>
<td>強い。右の構造をそのまま使える</td>
<td>なし</td>
</tr>
<tr>
<td>上下</td>
<td>入力行は増える</td>
<td>上下・x/y・符号と4方向の結果</td>
<td>xのまま、符号逆などの差を検討</td>
<td>強い。水平→垂直の転移</td>
<td>同型処理の組立てまで</td>
</tr>
<tr>
<td>右端</td>
<td>空欄2か所</td>
<td>端を越える／戻る</td>
<td>幅だけでは領域がはみ出す理由</td>
<td>左端のif・比較・代入</td>
<td>独自ルールなし</td>
</tr>
<tr>
<td>speed</td>
<td>数字だけ</td>
<td>前後の移動量と使いやすさ</td>
<td>設定が更新式に使われる対応</td>
<td>前回の変更操作を再利用</td>
<td>設定の選択まで</td>
</tr>
</tbody>
</table>
<p>Thinking Loadは<strong>中</strong>。Month8-1より座標・条件・演算・転用の対応が増える。右辺が動きを生む因果関係は重要だが、各WORKの成功条件は主に動作確認。理由・間違った式との比較・新しい方向を自分の言葉から組み立てる証拠までは全員に求めていない。</p>
<p>1行を自分で組み立てる価値はある。ただし左の空欄を消して全行入力させるだけでは、入力文字が増えるだけでLEVEL 4にはならない。上下もすでにコメントのみなので「さらに穴埋めを廃止する」余地はない。既存コードを先にコピーしたのか、まず日本語から組み立てたのかを分けて検証する必要がある。</p>
<h3 id="48-active-learningteacher-led-ratio">4.8 Active Learning・Teacher-led Ratio</h3>
<p>標準54分の排他的な内訳。3WORKとSHOULDの案内2.5分、Debug配賦は前表に対応する。前回の短い共有1分はp1の3分の内数。各WORKで全員を止める短い説明は案内枠であり、別の共有時間を足さない。</p>
<table>
<thead>
<tr>
<th>活動分類</th>
<th style="text-align:right">分</th>
<th style="text-align:right">CORE内の割合</th>
<th>根拠</th>
</tr>
</thead>
<tbody>
<tr>
<td>講師説明</td>
<td style="text-align:right">14</td>
<td style="text-align:right">約26%</td>
<td>p1=2、p2=1、p3=0.5、p4=4、p5=3、p6〜10=2.5、p11=1</td>
</tr>
<tr>
<td>生徒操作</td>
<td style="text-align:right">8.25</td>
<td style="text-align:right">約15%</td>
<td>p3=3、p6〜10=4.75、最終保存=0.5</td>
</tr>
<tr>
<td>入力・編集</td>
<td style="text-align:right">5.5</td>
<td style="text-align:right">約10%</td>
<td>WORK5.25＋Debugの修正入力0.25</td>
</tr>
<tr>
<td>観察・思考</td>
<td style="text-align:right">21.25</td>
<td style="text-align:right">約39%</td>
<td>WORK17.5＋Debug原因0.75＋p4/p5/p11各1</td>
</tr>
<tr>
<td>全体共有</td>
<td style="text-align:right">1</td>
<td style="text-align:right">約2%</td>
<td>p1の前回振り返り</td>
</tr>
<tr>
<td>振り返り</td>
<td style="text-align:right">3.5</td>
<td style="text-align:right">約6%</td>
<td>p12。保存は操作に分類</td>
</tr>
<tr>
<td>起動待ち</td>
<td style="text-align:right">0.5</td>
<td style="text-align:right">約1%</td>
<td>p3。長い支援待ちは別途実測</td>
</tr>
<tr>
<td><strong>合計</strong></td>
<td style="text-align:right"><strong>54</strong></td>
<td style="text-align:right"><strong>100%（各行は丸め）</strong></td>
<td>—</td>
</tr>
</tbody>
</table>
<ul>
<li><strong>Active Coding Time：23.75分≒24分</strong>＝入力5.5＋WORKのコード思考18.25。全COREの約44%。通常の検索・保存・ESC・実行は含めない。</li>
<li><strong>Thinking Time：24.75分≒25分</strong>＝観察・思考21.25＋振り返り3.5。全COREの約46%。紙の記録も含み、すべてコード思考ではない。</li>
<li><strong>Teacher-led Ratio：15/54≒28%</strong>＝説明14＋全体共有1。説明だけは約26%。Concept2ページがあっても40%を超える説明主導とは推定されない。</li>
<li>思考・入力・共有・振り返りの活動枠は31.25分、約58%。操作込みは39.5分、約73%。活動機会の比率であり児童の認知状態の測定ではない。</li>
<li><strong>MUST中心</strong>ではActive Coding Time15.5分≒16分、入力4.25分、Thinking Time17.75分、Teacher-led Ratio14/43≒33%。SHOULDの右端は思考量に寄与するが、これを必須実績へ混ぜない。</li>
</ul>
<p>予定70〜75分に対して、具体的な活動として割り当てられるのは約54分。約16〜21分を講師説明や必ず起こるエラーへ自動配賦しない。教師主導の一斉進行で終わる時刻と、実際の活動量は別である。</p>
<h3 id="49-month8-1との比較判定optional">4.9 Month8-1との比較・判定・OPTIONAL</h3>
<table>
<thead>
<tr>
<th>指標</th>
<th style="text-align:right">Month8-1（既存監査）</th>
<th style="text-align:right">Month8-2（今回）</th>
</tr>
</thead>
<tbody>
<tr>
<td>CORE標準時間</td>
<td style="text-align:right">55分</td>
<td style="text-align:right">54分</td>
</tr>
<tr>
<td>速い生徒</td>
<td style="text-align:right">40分</td>
<td style="text-align:right">38分</td>
</tr>
<tr>
<td>遅い生徒</td>
<td style="text-align:right">73分</td>
<td style="text-align:right">73分</td>
</tr>
<tr>
<td>MUST中心標準</td>
<td style="text-align:right">41分</td>
<td style="text-align:right">43分</td>
</tr>
<tr>
<td>Active Coding Time</td>
<td style="text-align:right">11分</td>
<td style="text-align:right">約24分（MUST約16分）</td>
</tr>
<tr>
<td>入力・編集</td>
<td style="text-align:right">1.5分</td>
<td style="text-align:right">5.5分</td>
</tr>
<tr>
<td>Thinking Time</td>
<td style="text-align:right">22分</td>
<td style="text-align:right">約25分</td>
</tr>
<tr>
<td>Highest Coding Level</td>
<td style="text-align:right">1</td>
<td style="text-align:right">3（MUST／SHOULD込みとも）</td>
</tr>
<tr>
<td>Teacher-led Ratio</td>
<td style="text-align:right">約33%</td>
<td style="text-align:right">約28%</td>
</tr>
<tr>
<td>Thinking Load</td>
<td style="text-align:right">低〜中</td>
<td style="text-align:right">中</td>
</tr>
<tr>
<td>OPTIONAL依存</td>
<td style="text-align:right">仕様上なし／運用リスクあり</td>
<td style="text-align:right">仕様上なし／運用リスクあり</td>
</tr>
</tbody>
</table>
<p><strong>判定：LIGHT。推奨B。</strong> コードを扱う時間・転用の負荷は明確に上昇し、導入から実装への勾配はある。標準54分が前回55分より少し短いことだけで、学習価値が低いとは判断しない。</p>
<p>一方、通常CORE70〜75分としては約16〜21分軽い。短い右辺の追記、既存のキー・演算の置換に毎回10分を見込むほどの比較・自己説明が成果物として固定されていない。MUST中心43分は前回41分と大きく変わらず、画面端・speedや任意教材を行わなければ80分の活動は成立しない。</p>
<p>TOO LIGHTとしないのは、4方向の動作を自分で追加し、既習を転用する明確な到達点があり、Lessonの分担を変えず補強できるため。ADEQUATEとしないのは、70〜75分の標準活動量の根拠が不足するため。遅い生徒の全経路73分に合わせ、全員の作業が70分必要だとは扱わない。</p>
<p>OPTIONALは仕様上不要。CHALLENGEは左端完成例の条件→代入→効果を読むもの。QUIZはQ1〜5の座標・条件・役割・実行操作とQ6〜8のコード読解で、全問必須ではない。右端SHOULDを省いた生徒も左端完成例はSTARTで見られる。未実施をMUST未達にしない。</p>
<p>標準の残り約26分を上下端・CHALLENGE・QUIZで毎回埋めるなら、通常進行としてのOPTIONAL依存は高くなる。これはCORE不足の解消ではない。8問選ぶことを8つのコード実装や自力設計として計上もしない。</p>
<h3 id="410-改善案a--b--c自力記述候補">4.10 改善案A / B / C・自力記述候補</h3>
<p>すべて未採用の提案。変更量を増やすこと自体ではなく「既習Pythonを画面の動きへ転移し、説明・検証できる」ことを目的にする。</p>
<table>
<thead>
<tr>
<th>案</th>
<th>内容</th>
<th>評価</th>
</tr>
</thead>
<tbody>
<tr>
<td>A：現状維持</td>
<td>約54分の実装回として実施。Hintは必要時のみ、早い生徒は保存・説明後に任意へ</td>
<td>4方向の到達点は成立。ただし70〜75分の通常活動量としては不十分</td>
</tr>
<tr>
<td>B：支援・書かせる量・検証の調整</td>
<td>右は丁寧さを維持。左／上下で最初の1行をまず組み立て、次に既存例を照合。予想・違いの理由・結果検証を短い成果物にする</td>
<td><strong>推奨</strong>。現行上下は既に白紙なので、空欄削除やHint非表示だけで改善済みにしない</td>
</tr>
<tr>
<td>C：カリキュラム構成変更</td>
<td>画面端を必須へ昇格、別機能の前倒し等</td>
<td>現時点では不要。到達点を変えず改善可能で、遅い生徒の負荷も増える</td>
</tr>
</tbody>
</table>
<p>「穴埋め→自力記述」の候補比較：時間増は標準への仮の差分であり、単純な転記ならほとんど増えない。</p>
<table>
<thead>
<tr>
<th>候補</th>
<th style="text-align:right">現在LEVEL</th>
<th>変更後の目標LEVEL</th>
<th>増える思考</th>
<th>時間増の目安</th>
<th>リスク・採否</th>
</tr>
</thead>
<tbody>
<tr>
<td>右の自己代入をなくし、if内の代入1行を作る</td>
<td style="text-align:right">2</td>
<td>独立に組み立てれば4。完成例の転記なら2〜3</td>
<td>左辺・右辺・使う変数まで決める</td>
<td>約1〜2分</td>
<td>初回の支援を削ると条件と式を同時に迷う。候補だが最初は現状維持推奨</td>
</tr>
<tr>
<td>左の用意済み代入左辺をなくし、日本語から代入1行を書く</td>
<td style="text-align:right">3（穴埋め経路2）</td>
<td>独立試行なら4、右をコピー・参考転用すれば3</td>
<td>更新する変数と計算を1文として組み立てる</td>
<td>約1〜2分</td>
<td><strong>有力</strong>。K_LEFT条件は残し、最初の短い試行後は既存コード／Hintで支援可</td>
</tr>
<tr>
<td>上下の最初の代入1行を、コピー前に考えてから書く</td>
<td style="text-align:right">3</td>
<td>独立試行4、既存ifの転用は3</td>
<td>x→y・符号を自分の理由から選ぶ</td>
<td>約1〜2分</td>
<td><strong>有力</strong>。既にコメントのみなので穴埋め廃止ではなく取り組み方の改善</td>
</tr>
<tr>
<td>上下のif＋代入を日本語だけから全て自立生成する</td>
<td style="text-align:right">3</td>
<td>5を目標にできるが、既存例転用なら3</td>
<td>条件・キー・代入の複数行構成</td>
<td>個人差大</td>
<td>既習転用という正本に対し要求が強い。標準MUSTとしては推奨しない</td>
</tr>
<tr>
<td>右端の2空欄をなくし2行を書く</td>
<td style="text-align:right">2</td>
<td>左端の参考転用なら3、独立生成なら5</td>
<td>比較と戻す値を一体で考える</td>
<td>約1〜3分</td>
<td>SHOULDの負荷増。上下移動が安定した生徒だけの候補</td>
</tr>
<tr>
<td>speedを新しい代入文から書く</td>
<td style="text-align:right">1</td>
<td>書き写しなら上昇しない</td>
<td>数字の選択以外はほぼ増えない</td>
<td>ほぼなし</td>
<td>前回と同じ設定なので不要。入力行数を増やす目的で行わない</td>
</tr>
</tbody>
</table>
<p>「右移動を参考に」としながら空欄だけを消しても、保証するLEVELは3のまま。課題の見た目を白紙にすることと自立生成は別。LEVEL 4の実績には、完成式の提示・コピーより前に、本人が日本語から1行を組み立てた証拠が必要。教材内の既存例へ戻ることを禁止して達成させる方針にはしない。</p>
<h4 id="bの具体的な試行案">Bの具体的な試行案</h4>
<ol>
<li>右は実START・変数・更新量・条件を丁寧に接続する。ここで初めてキー入力を使うため、最初の足場は保つ。</li>
<li>左／上下の最初の短い記述を、コピー前に試す。できなければ右の例と段階Hintを使い、全員の4方向を優先する。入力を増やすためifやAPI名を全部消さない。</li>
<li>自分のコードと、x/yや符号が1つ違う比較例で「どこが違い、画面ではどう動くか」を予想・確認する。実バグが発生しなくても原因検討をできる短い課題にする。わざと全員の配布ファイルを壊す運用は不要。</li>
<li>最後は「変えたキー／座標／演算、実行で確かめた結果」を短く説明する。動いたというチェックだけでなく、転用の理由を残す。</li>
</ol>
<p>仮の追加量は、左／上下の独立試行計3分、比較・検証5分、個人の説明記録と短い共有4分の計12分。現在54分から<strong>約66分</strong>の試行案になる。説明記録4分のうち個人2分・共有2分とし、既存の振り返りを長い作文にしない。</p>
<p>排他的な仮配分は追加の入力1分、コード思考7分、操作2分、共有2分。Active Coding Timeは約32分へ増え、Teacher-led Ratioは17/66≒26%。この増分が実際に生じるかは未検証で、Hintを隠すだけでは生まれない。既存の確認と重複する分は置き換えて再計時し、12分を無条件に加算しない。遅い生徒はSHOULDを外し追加量も調整する。速い生徒が必ず70分かかるとは約束しない。</p>
<h3 id="411-望ましい状態今後の難易度勾配">4.11 望ましい状態・今後の難易度勾配</h3>
<p>改善試行の目安は<strong>標準65〜68分程度、Active Coding Time約30〜32分、最高LEVELは通常3、一部で自立記述4の実績を確認</strong>。これはBの具体的な活動からの仮説であり、数値へ合わせて入力・説明・待ちを増やす目標ではない。</p>
<p>正本の標準LEVEL 2〜3は維持する。先に全員必須LEVEL 4へ改定せず、一部の1行を独力で書けるかを見る。LEVEL 5〜6や長いAPI暗記を標準にしない。MUST中心だけで何分になるかも実授業で再確認し、SHOULDに依存して標準活動量を保証しない。</p>
<table>
<thead>
<tr>
<th>Lesson</th>
<th>勾配の考え方</th>
</tr>
</thead>
<tbody>
<tr>
<td>Month8-1</td>
<td>既存監査：数字編集LEVEL 1、Active Coding約11分</td>
</tr>
<tr>
<td>Month8-2</td>
<td>今回：右辺補完LEVEL 2→左右／上下転用LEVEL 3、Active Coding約24分。自立した1行は改善試行で確認</td>
</tr>
<tr>
<td>Month8-3</td>
<td>未監査。まずenemy1の加算・if・再配置をLEVEL 2→3で転用する活動を検証。randomはSHOULDのまま。1行自立を試す価値はあるが、新出APIを含め全員必須4〜5としない</td>
</tr>
<tr>
<td>Month9-1</td>
<td>未監査。Rect生成はREAD、enemy1判定からenemy2/3へ転用するLEVEL 2→3を確認。行数が3体分あるだけで5と数えず、自立記述の証拠があれば別評価</td>
</tr>
</tbody>
</table>
<h3 id="412-検証結果次の監査">4.12 検証結果・次の監査</h3>
<p>今回実施した確認：</p>
<ul>
<li>全Month8-2本文・Notes・CHALLENGE・QUIZ、実START／COMPLETE、関連正本・現行Briefの照合。</li>
<li>Python構文解析、固定ID4件の両ファイル対応、移動・画面端以外の構文木一致。Game OverをTrueにする代入が両ファイルにないことも確認。</li>
<li>COMPLETEの4方向処理を抽出し、メモリ内でキー状態を与えて確認。初期座標(100,100)、速度5で右(105,100)、左(95,100)、下(100,105)、上(100,95)、押さない時(100,100)。これはPygame本体・授業の動作実測ではない。</li>
<li>時間表、WORK分解、MUST中心、排他的な活動内訳と指標を計算。通常表示とHint本文を分けて評価。</li>
</ul>
<p>未実施：実授業計時、児童の理解・独立記述テスト、Pygame本体起動、headless画面検証、Slidev build。授業負荷監査に不要な表示テストを再実施したとは報告しない。</p>
<p>実授業では、各WORKの理解／入力／操作／Debug／結果確認、最初に開いたHint、コピー前の記述、SHOULD未実施、OPTIONALに入る直前の時刻を記録する。移動できた結果と、理由を説明できた結果を分ける。実測後にBの追加・置換量と判定を更新する。</p>
<p><strong>次はMonth8-3。</strong> enemy1の下移動・画面下判定・上への再配置と、randomのSHOULD、enemy2/3の参考コードを分け、同じ指標で監査する。今回の変更は監査一覧・監査対象の案内・このMonth8-2章のみ。既存Month8-1章、教材、Python、assets、Notes、Guide、カリキュラム文書は変更しない。</p>
<h2 id="5-month8-3活動量コーディング負荷監査">5. Month8-3：活動量・コーディング負荷監査</h2>
<p>監査日：2026-10-10。共通指標・生徒モデル・LEVELの定義は1節と同じ。時間は実授業の実測ではない。通常表示、実START、必要時に開くHint、作業後のReviewを区別して評価した。既存Month8-1・8-2章は変更しない。</p>
<h3 id="51-正本区分確認事実">5.1 正本・区分・確認事実</h3>
<p>参照：<a href="/robot-python-game/instructor/docs/01_curriculum_goals/">docs/01</a>、<a href="/robot-python-game/instructor/docs/02_month8-9_lesson_design/">docs/02</a>、<a href="/robot-python-game/instructor/docs/06_game1_lesson_flow/">docs/06</a>、<a href="/robot-python-game/instructor/docs/14_art_direction_v05/">docs/14の26節</a>、<a href="/robot-python-game/instructor/docs/16_month8-3_slidev_implementation/">docs/16</a>、<a href="/robot-python-game/instructor/guide/#month8-3%E8%AC%9B%E5%B8%ABbrief%E6%95%B5%E3%81%AE%E8%87%AA%E5%8B%95%E7%A7%BB%E5%8B%95%E5%86%8D%E9%85%8D%E7%BD%AE">Guideの現行Brief</a>、<a href="/robot-python-game/instructor/presenter/month8-3">全Slidev本文・Notes・OPTIONAL</a>、<a title="開発リポジトリの参照（Web配布対象外）">START</a>、<a title="開発リポジトリの参照（Web配布対象外）">COMPLETE</a>。</p>
<p>docs/02の正式記載：</p>
<table>
<thead>
<tr>
<th>区分</th>
<th>正本の記載</th>
</tr>
</thead>
<tbody>
<tr>
<td>MUST</td>
<td>enemy1の座標・速度を理解する／enemy1を自動移動させる／if・比較演算で画面端を判定する／条件成立時にenemy1を再配置する／enemy1と同じ処理がenemy2 / enemy3にも使われていることを確認する</td>
</tr>
<tr>
<td>SHOULD</td>
<td>randomで出現位置を変更する／enemy_speedやrandom範囲を調整する／enemy2 / enemy3は参考・コピー・完成済み部分として扱い、3体が独立して動くことを確認する</td>
</tr>
<tr>
<td>CHALLENGE</td>
<td>randomや設定値で敵挙動に追加変化を付ける</td>
</tr>
<tr>
<td>新出・自力実装レベル</td>
<td>random / random.randint()、Level 2〜3</td>
</tr>
</tbody>
</table>
<p>START冒頭の8-3-3はSHOULD。Guideと現行Notesでもp8/9のrandomは省略可能で、同じxのまま上へ戻ればMUST達成。randomをMUSTへ昇格しない。</p>
<p>区分の読み分けに注意：enemy2/3との<strong>基本的な共通点確認はdocs/02のMUST</strong>で、深い読解はGuideのCHALLENGE。共通点確認をすべて任意扱いにはしない。また、docs/02はrandom範囲の調整もSHOULDに含める一方、Guideとp10はrandom完成後の範囲調整をCHALLENGEとして案内している。簡単な調整と発展の境界は文言だけでは明確でない。本監査は両方を記録し、正式区分を変更せず、範囲改造を標準経路へ加算しない。</p>
<p>CORE12ページ＋OPTIONAL2ページ。現行Notesは70分、下判定支援を5分延長すると75分。docs/06の表自体の合計は65〜70分（enemy2/3参照10〜15分）であり、Guideの75分は支援延長の分岐である。</p>
<p>実装はplayer操作・全画面端制限が完成済み。enemy1の移動は自己代入で未完成、再配置・randomはコメント。enemy2/3は移動・再配置・randomが完成済み。初期yは50 / −150 / −350、速度4、サイズ64。START／COMPLETEとも敵接触・item取得は未接続、score0で通常Rは使わない。生徒の編集はenemy1中心である。</p>
<h3 id="52-全core活動の行動分解">5.2 全CORE活動の行動分解</h3>
<p>分類：T＝講師主導、H＝思考、C＝入力・編集、O＝PC操作、W＝待ち。複合記載は異なる行動を同じ行に示したもので、後の時間集計では排他的に配賦する。</p>
<table>
<thead>
<tr>
<th>ページ</th>
<th>実際の生徒行動</th>
<th>分類</th>
<th>監査上の注意</th>
</tr>
</thead>
<tbody>
<tr>
<td>p1</td>
<td>前回の下移動を短く共有、今日の到達点を聞く</td>
<td>T</td>
<td>自動移動とキー条件の違い</td>
</tr>
<tr>
<td>p2</td>
<td>必須の順序とrandomの省略可を聞く</td>
<td>T</td>
<td>目次の全リンク操作を要求しない</td>
</tr>
<tr>
<td>p3</td>
<td>指定ファイルを開き保存する</td>
<td>O</td>
<td>前回・COMPLETEと区別</td>
</tr>
<tr>
<td>p3</td>
<td>実行し4方向操作、enemy1静止とenemy2/3落下を確認</td>
<td>O</td>
<td>静止は未完成STARTの正常状態</td>
</tr>
<tr>
<td>p3</td>
<td>ESC・再実行、短い案内・起動待ち</td>
<td>O / T / W</td>
<td>端末トラブルを学習量にしない</td>
</tr>
<tr>
<td>p4</td>
<td>enemy座標図・初期yの実代入を読む</td>
<td>T</td>
<td>x/yは前回の再利用</td>
</tr>
<tr>
<td>p4</td>
<td>下へ動かす座標と増減を考える</td>
<td>H</td>
<td>座標の新しい講義ではない</td>
</tr>
<tr>
<td>p5</td>
<td>100→104→108の更新図の説明を聞く</td>
<td>T</td>
<td>作業内の説明。FPS講義を追加しない</td>
</tr>
<tr>
<td>p5</td>
<td>[8-3-1]を検索する</td>
<td>O</td>
<td>直下にenemy2/3の参考コードがある</td>
</tr>
<tr>
<td>p5</td>
<td>毎更新の加算・キー条件なしの結果を予想する</td>
<td>H</td>
<td>初期50を100へ変更する課題ではない</td>
</tr>
<tr>
<td>p5</td>
<td>自己代入の右辺へ加算を追記する</td>
<td>C</td>
<td>コメント下線へ入力しない</td>
</tr>
<tr>
<td>p5</td>
<td>保存・停止・実行する</td>
<td>O</td>
<td>反映操作とコード思考を分離</td>
</tr>
<tr>
<td>p5</td>
<td>キーなしの落下と、まだ戻らない状態を確認する</td>
<td>H</td>
<td>一段ずつ機能が増える</td>
</tr>
<tr>
<td>p6</td>
<td>下境界の図と完成条件行を読む</td>
<td>T</td>
<td>if・&gt;・screen_heightは通常表示で見える</td>
</tr>
<tr>
<td>p6</td>
<td>条件成立時／不成立時の動きを考える</td>
<td>H</td>
<td>接触判定と区別。数字当てではない</td>
</tr>
<tr>
<td>p7</td>
<td>[8-3-2]を検索、2行の#を外す</td>
<td>O / C</td>
<td>if・&gt;・代入先が用意済み</td>
</tr>
<tr>
<td>p7</td>
<td>比較の基準と再配置先を確認して空欄を埋める</td>
<td>H / C</td>
<td>screen_heightは前ページ、−enemy_sizeは本ページに明示</td>
</tr>
<tr>
<td>p7</td>
<td>if内の空白・保存・再実行を確認する</td>
<td>O</td>
<td>修正入力が必要ならCへ</td>
</tr>
<tr>
<td>p7</td>
<td>下へ消えたあと上から戻ることを観察する</td>
<td>H</td>
<td>同じxでもMUST成立</td>
</tr>
<tr>
<td>p7等</td>
<td>必要時に原因を探し、短い修正を行う</td>
<td>H / C</td>
<td>標準の修正1回を一度だけ計上</td>
</tr>
<tr>
<td>p8</td>
<td>random一般形と0〜736の図を読む</td>
<td>T</td>
<td>SHOULD。一般形は入力できる実コードではない</td>
</tr>
<tr>
<td>p8</td>
<td>最小・最大と敵の左上位置を考える</td>
<td>H</td>
<td>幅からサイズを引く考え方を再利用</td>
</tr>
<tr>
<td>p9</td>
<td>[8-3-3]を検索する</td>
<td>O</td>
<td>親ifと代入先は実STARTにある</td>
</tr>
<tr>
<td>p9</td>
<td>x・最小最大・実行する時を考える</td>
<td>H</td>
<td>毎更新ではなく再配置時だけ</td>
</tr>
<tr>
<td>p9</td>
<td>#を外しrandomの2引数を埋める</td>
<td>C</td>
<td>新APIの名前・括弧は既にある</td>
</tr>
<tr>
<td>p9</td>
<td>空白を合わせ保存・停止・実行する</td>
<td>O</td>
<td>APIの内部を自作しない</td>
</tr>
<tr>
<td>p9</td>
<td>数回の再出現を比較する</td>
<td>H</td>
<td>同じ値が続くことも正常</td>
</tr>
<tr>
<td>p10</td>
<td>enemy_speedを検索・数値変更する</td>
<td>O / C</td>
<td>SHOULD。3体共通の数値1か所</td>
</tr>
<tr>
<td>p10</td>
<td>速度を予想し保存・停止・実行する</td>
<td>H / O</td>
<td>変更の反映手順は既習</td>
</tr>
<tr>
<td>p10</td>
<td>速さを比較し必須の落下・再配置を試す</td>
<td>H</td>
<td>目的のある確認。無目的な長いプレイとは区別</td>
</tr>
<tr>
<td>p11</td>
<td>表と自分のenemy1処理を照合する</td>
<td>T / H</td>
<td>コピーする実装課題ではない</td>
</tr>
<tr>
<td>p11</td>
<td>enemy2/3の同じ加算・条件・再配置を探す</td>
<td>H</td>
<td>基本確認はMUST。3体分入力しない</td>
</tr>
<tr>
<td>p12</td>
<td>変数・加算・戻す値を紙へ記録する</td>
<td>H</td>
<td>処理と画面の対応</td>
</tr>
<tr>
<td>p12</td>
<td>次回の接触判定について短く考える</td>
<td>H</td>
<td>まだRectの実装・暗記は不要</td>
</tr>
<tr>
<td>p12</td>
<td>必須の動きを最終確認・保存する</td>
<td>O / H</td>
<td>random未実施を未達扱いしない</td>
</tr>
</tbody>
</table>
<p>random範囲の改造、enemy2/3の深い読解、OPTIONAL CHALLENGE／QUIZは標準時間・必須入力に含めない。</p>
<h3 id="53-workの足場文字数coding-level">5.3 WORKの足場・文字数・Coding Level</h3>
<p>Hintは初期非表示だが、本文・STARTコメント・隣接した完成例は通常の支援として数える。</p>
<table>
<thead>
<tr>
<th>作業</th>
<th>通常見える支援・自力判断</th>
<th>実入力量の代表例</th>
<th style="text-align:right">通常LEVEL</th>
</tr>
</thead>
<tbody>
<tr>
<td>A：下移動 [8-3-1]</td>
<td>STARTに自己代入と日本語疑似コード。直下enemy2/3の加算例。p5はy増加・enemy_speed・+4の意味を提示</td>
<td><code> + enemy_speed</code> の14文字を追記すれば成立</td>
<td style="text-align:right">2</td>
</tr>
<tr>
<td>B：画面下判定 [8-3-2]</td>
<td>if・enemy1_y・&gt;・コロンはSTARTに用意済み。p6に <code>if enemy1_y &gt; screen_height:</code> 全条件を通常表示</td>
<td>screen_heightの13文字、コメント解除</td>
<td style="text-align:right">2</td>
</tr>
<tr>
<td>C：上へ再配置 [8-3-2]</td>
<td>代入先enemy1_yは用意済み。p7本文に戻す値 <code>-enemy_size</code> を明示、近くのenemy2/3も完成例</td>
<td>−enemy_sizeの11文字、コメント解除・空白維持</td>
<td style="text-align:right">2</td>
</tr>
<tr>
<td>D：random x [8-3-3]</td>
<td>代入先・API・括弧・2空欄がSTARTにある。p8は一般形＋具体範囲0〜736。近くのenemy2/3に変数式の完成例</td>
<td>最小0の1文字＋最大式 <code>screen_width - enemy_size</code> の25文字。736なら最大3文字でも現在は動く</td>
<td style="text-align:right">2</td>
</tr>
<tr>
<td>E：TUNE</td>
<td>enemy_speed初期4と3体共通を提示。保存・再実行・比較は既習</td>
<td>数値1か所</td>
<td style="text-align:right">1</td>
</tr>
</tbody>
</table>
<p>B/Cは同じ固定ID・2行ブロックを完成させる<strong>1課題束</strong>。時間・意味は分けて検討するがLEVEL集計を2束へ増やさない。Aは他の敵の行をコピーしてもよいが、標準作業は右辺補完なのでLEVEL 2。通常経路にLEVEL 3を必ず行う指示はない。</p>
<p>randomは一般形を実ゲームへ当てはめるAPI転移の価値がある。しかしAPIを選んで代入1行をゼロから書く課題ではない。最小0・最大736は先に見えており、穴へ数値を写すだけなら判断量は少ない。変数式を選ぶ時には設定への追従を考える余地があるが、完成例もSTARTに存在する。通常をLEVEL 4としない。randomのAPI・用意済み式を転記する経路も独立生成とは数えない。</p>
<p>「完成行はHint3まで非表示」という実装説明は、全行をまとめた完成形については正しい。ただしBの条件はp6、Cの戻す値はp7に通常表示されるので、<strong>空欄の答えまで隠れているわけではない</strong>。この点はMonth8-2の上下コメントだけの課題と異なる。</p>
<h3 id="54-corerandommustの時間再推定">5.4 CORE・random・MUSTの時間再推定</h3>
<p>単位は分。速い経路はエラーなし、標準は短い修正1回、遅い経路は読み直し・追加確認と短い修正を見込む。入力速度・PCトラブル・必ず起こるエラーで時間を確保しない。共通説明の基本量は残す。</p>
<table>
<thead>
<tr>
<th>活動</th>
<th style="text-align:right">現行想定</th>
<th style="text-align:right">速い</th>
<th style="text-align:right">標準</th>
<th style="text-align:right">遅い</th>
<th>学習価値</th>
</tr>
</thead>
<tbody>
<tr>
<td>p1 前回・今日の到達点</td>
<td style="text-align:right">3</td>
<td style="text-align:right">3</td>
<td style="text-align:right">3</td>
<td style="text-align:right">3</td>
<td>中</td>
</tr>
<tr>
<td>p2 今日の流れ</td>
<td style="text-align:right">2</td>
<td style="text-align:right">1</td>
<td style="text-align:right">1</td>
<td style="text-align:right">1</td>
<td>低</td>
</tr>
<tr>
<td>p3 START・操作・静止確認</td>
<td style="text-align:right">5</td>
<td style="text-align:right">3</td>
<td style="text-align:right">4</td>
<td style="text-align:right">6</td>
<td>中</td>
</tr>
<tr>
<td>p4 enemy座標</td>
<td style="text-align:right">5</td>
<td style="text-align:right">3</td>
<td style="text-align:right">3</td>
<td style="text-align:right">3</td>
<td>高</td>
</tr>
<tr>
<td>p5 更新の説明＋下移動</td>
<td style="text-align:right">10</td>
<td style="text-align:right">3</td>
<td style="text-align:right">6</td>
<td style="text-align:right">9</td>
<td>高</td>
</tr>
<tr>
<td>p6 下判定の意味</td>
<td style="text-align:right">5</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td>高</td>
</tr>
<tr>
<td>p7 判定・再配置入力と確認</td>
<td style="text-align:right">5</td>
<td style="text-align:right">3</td>
<td style="text-align:right">5</td>
<td style="text-align:right">8</td>
<td>高</td>
</tr>
<tr>
<td>p8 random Concept（SHOULD）</td>
<td style="text-align:right">5</td>
<td style="text-align:right">5</td>
<td style="text-align:right">5</td>
<td style="text-align:right">5</td>
<td>高</td>
</tr>
<tr>
<td>p9 random適用（SHOULD）</td>
<td style="text-align:right">5</td>
<td style="text-align:right">3</td>
<td style="text-align:right">5</td>
<td style="text-align:right">8</td>
<td>中</td>
</tr>
<tr>
<td>p10 speed調整＋必須の試遊</td>
<td style="text-align:right">10</td>
<td style="text-align:right">4</td>
<td style="text-align:right">5</td>
<td style="text-align:right">7</td>
<td>中</td>
</tr>
<tr>
<td>p11 表・enemy2/3の共通点</td>
<td style="text-align:right">10</td>
<td style="text-align:right">4</td>
<td style="text-align:right">6</td>
<td style="text-align:right">8</td>
<td>高</td>
</tr>
<tr>
<td>p12 振り返り・保存</td>
<td style="text-align:right">5</td>
<td style="text-align:right">3</td>
<td style="text-align:right">4</td>
<td style="text-align:right">5</td>
<td>高</td>
</tr>
<tr>
<td><strong>合計</strong></td>
<td style="text-align:right"><strong>70〜75（支援延長込み）</strong></td>
<td style="text-align:right"><strong>39</strong></td>
<td style="text-align:right"><strong>51</strong></td>
<td style="text-align:right"><strong>67</strong></td>
<td>—</td>
</tr>
</tbody>
</table>
<p>座標は前回の転用なので3分。p5標準6分は更新の説明2分を含み、14文字の入力だけに6分を置いていない。p7は2つの空欄・コメント解除・空白・再配置の意味を確認し、標準の短い修正1回を含め5分。</p>
<p>randomは新APIの一般形と引数の意味を確かめるためConcept5分を残した。適用5分も再出現の数回確認を含む。1回落ちて戻る待ちは、初期50から速度4・約60更新なら概ね数秒であり、観察だけで長時間を必ず使うとはしない。実際のFPS・授業時間の実測や暗記課題ではない。</p>
<p>p10標準5分は速度調整3分＋必須挙動の試遊2分。範囲改造は除外する。p11の6分は表の照合とenemy2/3の共通点確認で、3体分の記述時間ではない。速度変更は既習、enemy2/3は完成済みなので、この周辺に現行合計20分を必ず必要とする根拠は弱い。</p>
<table>
<thead>
<tr>
<th>経路</th>
<th style="text-align:right">速い</th>
<th style="text-align:right">標準</th>
<th style="text-align:right">遅い</th>
<th>差分</th>
</tr>
</thead>
<tbody>
<tr>
<td>MUST中心</td>
<td style="text-align:right">28</td>
<td style="text-align:right">37</td>
<td style="text-align:right">49</td>
<td>p8/9を省略、速度調整2/3/4分を省略、p11のrandom照合1分を省略。必須の試遊・enemy2/3の基本確認は残す</td>
</tr>
<tr>
<td>random込み・速度変更なし</td>
<td style="text-align:right">37</td>
<td style="text-align:right">48</td>
<td style="text-align:right">63</td>
<td>MUSTにrandom Concept／WORKとReviewのrandom照合を加える</td>
</tr>
<tr>
<td>通常CORE（random＋速度）</td>
<td style="text-align:right">39</td>
<td style="text-align:right">51</td>
<td style="text-align:right">67</td>
<td>SHOULDの速度調整も実施。範囲改造・OPTIONALなし</td>
</tr>
</tbody>
</table>
<p><strong>MUST中心は標準約37分</strong>で、40分台よりさらに短い推定になる。randomを行っても約48分、速度込みで約51分。randomで70分になるという見積もりではない。80分枠の残りは標準約29分、MUST中心なら約43分。講師が各停止地点で待たせた時間や任意課題を、この不足の解消に数えない。</p>
<h3 id="55-work別時間debug配賦">5.5 WORK別時間・Debug配賦</h3>
<p>各セルは速い／標準／遅い、単位は分。Debugは原因検討＋短い修正をまとめ、全体集計時にH/Cへ配賦する。小数は計算の整合用で、15秒単位の実測ではない。</p>
<table>
<thead>
<tr>
<th>作業</th>
<th>入力・編集</th>
<th>理解・予想・結果比較</th>
<th>操作</th>
<th>Debug</th>
<th>講師案内</th>
<th>合計</th>
</tr>
</thead>
<tbody>
<tr>
<td>A 下移動（更新説明込み）</td>
<td>0.25 / 0.5 / 0.75</td>
<td>0.5 / 2.5 / 4.75</td>
<td>0.75 / 1 / 1.5</td>
<td>0 / 0 / 0</td>
<td>1.5 / 2 / 2</td>
<td>3 / 6 / 9</td>
</tr>
<tr>
<td>B/C 下判定・再配置</td>
<td>0.5 / 0.5 / 1</td>
<td>1.25 / 2 / 3</td>
<td>0.75 / 1 / 1.5</td>
<td>0 / 1 / 2</td>
<td>0.5 / 0.5 / 0.5</td>
<td>3 / 5 / 8</td>
</tr>
<tr>
<td>D random x</td>
<td>0.5 / 0.75 / 1</td>
<td>1.25 / 2.75 / 4</td>
<td>0.75 / 1 / 1.5</td>
<td>0 / 0 / 1</td>
<td>0.5 / 0.5 / 0.5</td>
<td>3 / 5 / 8</td>
</tr>
<tr>
<td>E TUNE＋必須試遊</td>
<td>0.25 / 0.25 / 0.25</td>
<td>3 / 3.75 / 5.5</td>
<td>0.5 / 0.75 / 1</td>
<td>0 / 0 / 0</td>
<td>0.25 / 0.25 / 0.25</td>
<td>4 / 5 / 7</td>
</tr>
<tr>
<td><strong>計</strong></td>
<td><strong>1.5 / 2 / 3</strong></td>
<td><strong>6 / 11 / 17.25</strong></td>
<td><strong>2.75 / 3.75 / 5.5</strong></td>
<td><strong>0 / 1 / 3</strong></td>
<td><strong>2.75 / 3.25 / 3.25</strong></td>
<td><strong>13 / 21 / 32</strong></td>
</tr>
</tbody>
</table>
<p>B/Cの標準5分は、B条件に入力0.25・思考1・操作0.5・Debug0.5・案内0.25、C代入にも同じ配賦で各2.5分。Debugを各0.5へ分けたのは1つのifブロックの修正1回を配賦するためで、2回のエラーを仮定していない。p6の条件説明4分はこの5分へ重複加算しない。</p>
<p>標準のDebug1分は原因検討0.75・修正入力0.25。場所はp7へ置いたが、他WORKで発生した場合は総量を変えず移す。エラーなしならCORE50分、Active Coding Time13分。遅いモデルも3分の短い修正枠であり、延々と失敗する前提ではない。</p>
<h3 id="56-coding-level集計scaffolding">5.6 Coding Level集計・Scaffolding</h3>
<table>
<thead>
<tr>
<th style="text-align:right">LEVEL</th>
<th style="text-align:right">MUSTの束数</th>
<th style="text-align:right">SHOULD追加</th>
<th style="text-align:right">通常CORE</th>
<th>集計対象</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:right">0</td>
<td style="text-align:right">3</td>
<td style="text-align:right">1</td>
<td style="text-align:right">4</td>
<td>p4初期座標の実代入、p6条件読解、p11表とenemy2/3比較。SHOULDはp8のAPI書式読解</td>
</tr>
<tr>
<td style="text-align:right">1</td>
<td style="text-align:right">0</td>
<td style="text-align:right">1</td>
<td style="text-align:right">1</td>
<td>p10 enemy_speed数値変更</td>
</tr>
<tr>
<td style="text-align:right">2</td>
<td style="text-align:right">2</td>
<td style="text-align:right">1</td>
<td style="text-align:right">3</td>
<td>p5右辺補完、p7条件・再配置の1束、p9 random引数補完</td>
</tr>
<tr>
<td style="text-align:right">3</td>
<td style="text-align:right">0</td>
<td style="text-align:right">0</td>
<td style="text-align:right">0</td>
<td>完成例を転用する別経路はあるが、通常は穴埋めが指定される</td>
</tr>
<tr>
<td style="text-align:right">4</td>
<td style="text-align:right">0</td>
<td style="text-align:right">0</td>
<td style="text-align:right">0</td>
<td>日本語から全1行を自立生成する必須課題なし</td>
</tr>
<tr>
<td style="text-align:right">5</td>
<td style="text-align:right">0</td>
<td style="text-align:right">0</td>
<td style="text-align:right">0</td>
<td>if＋代入を白紙から組み立てる必須課題なし</td>
</tr>
<tr>
<td style="text-align:right">6</td>
<td style="text-align:right">0</td>
<td style="text-align:right">0</td>
<td style="text-align:right">0</td>
<td>独自処理設計なし</td>
</tr>
</tbody>
</table>
<p><strong>MUST Highest Level＝2、SHOULD込みも2。</strong> enemy2/3をコピーしてenemy1へ書き換えた個人の経路なら3として別記録できるが、3体表示や新APIの存在だけで通常の最高LEVELを引き上げない。既存例の再読を新たな実装束へも数えない。</p>
<p>Month8-2の座標加減算・ifを別オブジェクトへ使い直す価値はある。ただし標準の書き方は、前回の左／上下LEVEL 3から再び穴埋めLEVEL 2へ戻る。理想の「8-3は3中心、一部4試行」という入力の難易度勾配は、現状では成立していない。</p>
<p>意味理解の負荷は別にある。キー条件なしで何度も実行される更新、条件成立時だけの再配置は新しい接続であり、すべてを単純な数値変更と同じ価値にはしない。ただし日本語疑似コード・通常表示の答え・隣の完成例が重なるため、入力時の自立判断は小さい。</p>
<h3 id="57-thinking-loadconceptwork既習との接続">5.7 Thinking Load・Concept→WORK・既習との接続</h3>
<table>
<thead>
<tr>
<th>作業</th>
<th>指示通り入力</th>
<th>予想・比較</th>
<th>原因検討</th>
<th>転用</th>
<th>自力設計</th>
</tr>
</thead>
<tbody>
<tr>
<td>下移動</td>
<td>右辺へ足す変数が明示</td>
<td>自動落下・毎更新の増加</td>
<td>キーifなしと繰返しの対応</td>
<td>player_y加算→enemy1_y</td>
<td>なし</td>
</tr>
<tr>
<td>下判定</td>
<td>条件の答えはp6に表示</td>
<td>画面内／下へ出た時</td>
<td>条件と再配置の実行時</td>
<td>if・比較を境界へ</td>
<td>なし</td>
</tr>
<tr>
<td>再配置</td>
<td>戻す値は本文に表示</td>
<td>消えて上から戻る</td>
<td>条件なしで代入した場合との差</td>
<td>座標への代入</td>
<td>なし</td>
</tr>
<tr>
<td>random</td>
<td>API・最小最大の足場あり</td>
<td>数回のxを観察</td>
<td>毎更新で抽選／再配置時だけの違い</td>
<td>一般形と画面の横範囲</td>
<td>新しい抽選処理の設計ではない</td>
</tr>
<tr>
<td>TUNE</td>
<td>数字1か所</td>
<td>速度と戻るまでの時間</td>
<td>3体共通設定の対応</td>
<td>前回の設定変更操作</td>
<td>パラメータ選択のみ</td>
</tr>
<tr>
<td>enemy2/3</td>
<td>記述しない</td>
<td>同じ計算・条件の確認</td>
<td>別変数が別の敵を担当</td>
<td>完成例との照合</td>
<td>なし</td>
</tr>
</tbody>
</table>
<p>Thinking Loadは<strong>低〜中、説明・検証を深めれば中</strong>。Month8-2より必ず高くなるとは言えない。記述対象が減り答えの支援も厚いので、入力・独立生成の負荷はむしろ下がる。一方「毎回更新」と「条件の時だけ戻す」の役割を説明させる活動には価値がある。</p>
<p>p8→p9は一般形→具体引数という転移になっているが、最小0／最大736は図に先に示される。写すだけなら思考負荷は低い。「なぜ幅からサイズを引く／なぜx／いつ代入する／サイズ変更にどちらの書き方が追従するか」を考える場合は負荷が上がる。これら全部を新MUSTにして時間を作らない。</p>
<p>前回のplayer_y・加算／減算・ifは再利用される。画面端の実装自体はMonth8-2のSHOULDなので、全員が書いたと仮定しない。if・比較はPython既習として接続し、未実施の生徒には境界図で支援する。enemy2/3の基本確認とOPTIONALの深い読解も分離する。</p>
<h3 id="58-active-learningteacher-led-ratio">5.8 Active Learning・Teacher-led Ratio</h3>
<p>標準51分の排他的な内訳。無目的なプレイは通常経路へ入れず、p10の必須動作確認2分は目的のある観察としてHへ配賦する。</p>
<table>
<thead>
<tr>
<th>活動分類</th>
<th style="text-align:right">分</th>
<th style="text-align:right">CORE内の割合</th>
<th>根拠</th>
</tr>
</thead>
<tbody>
<tr>
<td>講師説明</td>
<td style="text-align:right">15.25</td>
<td style="text-align:right">約30%</td>
<td>p1=2、p2=1、p3=0.5、p4=2、p5=2、p6=2.5、p7=0.5、p8=3、p9=0.5、p10=0.25、p11=1</td>
</tr>
<tr>
<td>生徒操作</td>
<td style="text-align:right">7.25</td>
<td style="text-align:right">約14%</td>
<td>p3=3、WORK計3.75、最終保存0.5</td>
</tr>
<tr>
<td>入力・編集</td>
<td style="text-align:right">2.25</td>
<td style="text-align:right">約4%</td>
<td>WORK2＋Debug修正0.25</td>
</tr>
<tr>
<td>観察・思考</td>
<td style="text-align:right">21.25</td>
<td style="text-align:right">約42%</td>
<td>WORK11＋Debug原因0.75＋p4=1、p6=1.5、p8=2、p11=5</td>
</tr>
<tr>
<td>全体共有</td>
<td style="text-align:right">1</td>
<td style="text-align:right">約2%</td>
<td>p1の前回共有。3分の内数</td>
</tr>
<tr>
<td>振り返り</td>
<td style="text-align:right">3.5</td>
<td style="text-align:right">約7%</td>
<td>p12。保存は操作枠</td>
</tr>
<tr>
<td>起動待ち</td>
<td style="text-align:right">0.5</td>
<td style="text-align:right">約1%</td>
<td>p3</td>
</tr>
<tr>
<td><strong>合計</strong></td>
<td style="text-align:right"><strong>51</strong></td>
<td style="text-align:right"><strong>100%（各行は丸め）</strong></td>
<td>—</td>
</tr>
</tbody>
</table>
<ul>
<li><strong>Active Coding Time＝14分</strong>：A3、B/C3.5、D3.5、E4。入力2.25＋WORKのコード思考・目的のある結果確認11.75。単なる検索・保存・再実行、Conceptの講師説明、変更を伴わないReviewの読解は除外する。</li>
<li><strong>入力・編集＝2.25分。Thinking Time＝24.75分≒25分</strong>（観察・思考21.25＋振り返り3.5）。両者を時間表へ重複加算しない。</li>
<li><strong>Teacher-led Ratio＝16.25/51≒32%</strong>（説明15.25＋共有1）。説明だけ約30%。Conceptは増えたが、通常経路が40%超の説明中心とまでは推定されない。</li>
<li><strong>MUST中心</strong>はActive Coding Time8.5分、入力1.25分、Thinking Time17.25分、Teacher-led Ratio12.5/37≒34%。random3.5分と速度調整2分のActive Codingを必須負荷へ混ぜない。</li>
<li>思考・入力・共有・振り返りの活動枠は28分、約55%。操作込みは35.25分、約69%。思考機会の配分であり実際の児童の認知状態を測ったものではない。</li>
</ul>
<h3 id="59-3lesson比較判定optional依存">5.9 3Lesson比較・判定・OPTIONAL依存</h3>
<table>
<thead>
<tr>
<th>指標</th>
<th style="text-align:right">Month8-1</th>
<th style="text-align:right">Month8-2</th>
<th style="text-align:right">Month8-3</th>
</tr>
</thead>
<tbody>
<tr>
<td>CORE標準</td>
<td style="text-align:right">55分</td>
<td style="text-align:right">54分</td>
<td style="text-align:right">51分</td>
</tr>
<tr>
<td>MUST中心標準</td>
<td style="text-align:right">41分</td>
<td style="text-align:right">43分</td>
<td style="text-align:right">37分</td>
</tr>
<tr>
<td>速い生徒</td>
<td style="text-align:right">40分</td>
<td style="text-align:right">38分</td>
<td style="text-align:right">39分</td>
</tr>
<tr>
<td>遅い生徒</td>
<td style="text-align:right">73分</td>
<td style="text-align:right">73分</td>
<td style="text-align:right">67分</td>
</tr>
<tr>
<td>Active Coding Time</td>
<td style="text-align:right">11分</td>
<td style="text-align:right">約24分</td>
<td style="text-align:right">14分（MUST8.5分）</td>
</tr>
<tr>
<td>入力・編集</td>
<td style="text-align:right">1.5分</td>
<td style="text-align:right">5.5分</td>
<td style="text-align:right">2.25分</td>
</tr>
<tr>
<td>Thinking Time</td>
<td style="text-align:right">22分</td>
<td style="text-align:right">約25分</td>
<td style="text-align:right">約25分</td>
</tr>
<tr>
<td>MUST最高／SHOULD込み最高LEVEL</td>
<td style="text-align:right">1 / 1</td>
<td style="text-align:right">3 / 3</td>
<td style="text-align:right">2 / 2</td>
</tr>
<tr>
<td>Teacher-led Ratio</td>
<td style="text-align:right">約33%</td>
<td style="text-align:right">約28%</td>
<td style="text-align:right">約32%</td>
</tr>
<tr>
<td>Thinking Load</td>
<td style="text-align:right">低〜中</td>
<td style="text-align:right">中</td>
<td style="text-align:right">低〜中</td>
</tr>
<tr>
<td>OPTIONAL依存</td>
<td style="text-align:right">仕様上なし、運用リスクあり</td>
<td style="text-align:right">同左</td>
<td style="text-align:right">同左。randomを時間埋めに必須化するリスクもある</td>
</tr>
</tbody>
</table>
<p><strong>判定：LIGHT。推奨B。</strong> 敵へ処理を転用し、自動落下・条件付き再配置を完成させる到達点は成立する。しかし標準51分、MUST中心37分であり、通常CORE70〜75分の根拠は約19〜24分不足する。3体・新API・ページ数による活動量の水増しはできない。</p>
<p>TOO LIGHTとしない理由は、目的やLessonの分担そのものが欠けているのではなく、既習部分の独立試行・原因比較・処理順の説明で補強できるため。ADEQUATEとしない理由は、答え付き穴埋めと完成例参照中心で、前回からの記述負荷・通常活動量の勾配が弱いため。</p>
<p>OPTIONALへの仕様上の依存はない。CHALLENGEはenemy2のまとまりを読んで比較する発展、QUIZは8問中Q6/7がrandomの任意復習で、未実施なら省略できる。これらを標準の残り約29分を埋める全員必須の活動にすれば運用上の依存は高い。randomもSHOULDなので、randomを含めた時間だけでMUST活動量の不足が解消したとはしない。</p>
<h3 id="510-自力記述候補改善a--b--c">5.10 自力記述候補・改善A / B / C</h3>
<p>すべて未採用の提案。既存敵コードを読めるままなら「空欄を消しただけでLEVELが上がる」とは扱わない。完成形を見る前に本人が組み立てた証拠を取り、困れば既存例・Hintを使えるようにする。</p>
<table>
<thead>
<tr>
<th>候補</th>
<th style="text-align:right">現在LEVEL</th>
<th>変更後目標</th>
<th>増える思考</th>
<th>時間増の目安</th>
<th>リスク・推奨</th>
</tr>
</thead>
<tbody>
<tr>
<td>enemy1_y更新の代入1行</td>
<td style="text-align:right">2</td>
<td>独立生成4／既存例の転用3</td>
<td>代入先・今の値・速度を1行へ組み立てる</td>
<td>約1〜2分</td>
<td><strong>最優先</strong>。既習の加算・代入。初回だけ短く試し、コメントへの誤入力は支援</td>
</tr>
<tr>
<td>画面下の条件1行</td>
<td style="text-align:right">2</td>
<td>独立生成4／参照転用3</td>
<td>座標・画面高・比較演算子・コロンを選ぶ</td>
<td>約1〜2分</td>
<td><strong>有力</strong>。先に同じ完成条件を通常表示すると独立試行にならない。ifの意味支援は残す</td>
</tr>
<tr>
<td>上へ戻す代入1行</td>
<td style="text-align:right">2</td>
<td>独立生成4／参照転用3</td>
<td>条件内の代入先・再配置値を組み立てる</td>
<td>約1〜2分</td>
<td><strong>有力</strong>。−enemy_sizeの負数計算を新たな暗記にしない。上の外の図と値の意味は支援</td>
</tr>
<tr>
<td>random適用の代入1行</td>
<td style="text-align:right">2</td>
<td>一般形から適用する転用3を基本。独立生成が確認できた場合だけ4</td>
<td>API・代入先・引数・親ifを接続</td>
<td>約1〜3分</td>
<td><strong>SHOULD内の候補</strong>。新APIの綴りを隠す必要なし。最優先の自立記述にしない</td>
</tr>
</tbody>
</table>
<p>条件＋再配置を一度に白紙から要求すると複数行のLEVEL 5へ近づく。既習の1行ずつの転移から始め、全員に5〜6を要求しない。API一般形から適用する課題は、一般形の存在だけで4とも、常に単純転記とも断定せず、実際の判断内容を見る。</p>
<table>
<thead>
<tr>
<th>案</th>
<th>内容</th>
<th>判断</th>
</tr>
</thead>
<tbody>
<tr>
<td>A：現状維持</td>
<td>約51分の回として実施、37分のMUST中心とSHOULD・任意を分ける</td>
<td>到達点は成立するが、70〜75分の通常教材としては推奨しない</td>
</tr>
<tr>
<td>B：支援・独立記述・検証調整</td>
<td>既習の更新・条件・再配置をまず自分で試す。通常表示の完成形の提示順を見直し、原因比較と処理順の説明を補強</td>
<td><strong>推奨</strong>。randomは支援付きSHOULDのまま、他Lessonの機能を前倒ししない</td>
</tr>
<tr>
<td>C：Lesson内容変更</td>
<td>randomや範囲改造をMUSTへ昇格、Game Overを前倒し等</td>
<td>不要。既存区分・Lesson分担を壊し、操作で時間を埋める解決にもならない</td>
</tr>
</tbody>
</table>
<h4 id="bの活動成果物置換後の仮時間">Bの活動・成果物・置換後の仮時間</h4>
<p>生徒の短い成果物候補は「1. yを増やす／2. 下へ出たか調べる／3. 上へ戻す」を、自分のコードと画面の結果へ結び付けて説明すること。randomなしでも成立するため、MUSTの理解確認として有効。3文を暗記・転記させるだけでは達成証拠にしない。</p>
<p>一律に全部を追加せず、まず下移動1行で試す。余裕があれば条件・再配置へ展開する。Bを一通り試す標準経路の仮配分は次のとおり：</p>
<table>
<thead>
<tr>
<th>追加／置換</th>
<th style="text-align:right">現行との時間差の仮説</th>
<th>内容</th>
</tr>
</thead>
<tbody>
<tr>
<td>既習3行の独立試行・理由確認</td>
<td style="text-align:right">＋6分</td>
<td>各約2分。文字数の増加ではなく代入・条件を選ぶ試行。困れば完成例・Hintを利用</td>
</tr>
<tr>
<td>間違い例1つと結果を予想・照合</td>
<td style="text-align:right">＋6分</td>
<td>条件なしで毎回上へ戻す例と、下へ出た時だけ戻す自分の処理を比較。全員のファイルを壊す課題にはしない</td>
</tr>
<tr>
<td>3処理の関係を説明・短く共有</td>
<td style="text-align:right">＋3分</td>
<td>個人の説明1分＋共有2分。randomは必須説明へ入れない</td>
</tr>
<tr>
<td>既存Reviewの重複する正解読み返しを置換</td>
<td style="text-align:right">−1分</td>
<td>同じ完成式を再度読むだけの時間を、上の本人の説明へ置き換える</td>
</tr>
<tr>
<td><strong>純増</strong></td>
<td style="text-align:right"><strong>＋14分</strong></td>
<td><strong>51→約65分</strong>。単純に全部を積む前提ではない</td>
</tr>
</tbody>
</table>
<p>計算上の追加配賦は入力1分、コード思考10分、操作1分、共有2分。Active Coding Timeは14→約25分、Teacher-led Ratioは18.25/65≒28%となる仮説。字数・Hint非表示だけでこの時間差が生じるとは保証しない。既存の予想・確認・記録と重複する分はさらに置換して、実授業で再計時する。</p>
<p>この純増をMUST中心にも全部実施したとして約51分であり、MUSTだけで65分になる案ではない。randomを必須にしたり全員の終了を70分に固定したりしない。遅い生徒はSHOULDを省き独立試行を1行へ絞る。速い生徒のOPTIONALは進度差対応に限る。</p>
<h3 id="511-推奨する勾配次の監査今回の確認">5.11 推奨する勾配・次の監査・今回の確認</h3>
<p>望ましい試行は<strong>既習の参照転用LEVEL 3を中心に、一部の1行で自立生成4を確認</strong>。Bの通常経路は標準約65分・Active Coding約25分を仮説とするが、先に数値へ合わせて難しくしない。randomの標準支援を保ち、MUSTの最高LEVELを仕様上変更するかは実測・別途承認後の判断。</p>
<p>現在は8-1が1、8-2が2→3、8-3が2中心で、望む記述勾配には戻りがある。今回この事実を記録し、前回提案のLEVEL 4試行を実装済みとして比較していない。Month9-1は未監査で、判定・時間・最高LEVELを先に埋めない。</p>
<p>今回確認したこと：</p>
<ul>
<li>全Slidev本文・Notes・OPTIONAL、学習箇所の実START／COMPLETE、正本と現行Brief、通常表示とHintの区別。</li>
<li>Python構文、固定ID3件、MUST／SHOULD区分。想定入力をメモリ内だけで補い、randomまで完成した構文木がCOMPLETEと一致。</li>
<li>COMPLETEからenemy1更新・判定・再配置を抽出し、メモリ内でMUSTだけ／random込みを確認。y50→54、画面下へ出る前は戻らず、出た時は−64へ戻る。MUSTだけではx100を維持、random込みは範囲0〜736内のxへ代入。これはPygame本体の起動・授業実測ではない。</li>
<li>時間表、WORK配分、3経路、全体活動内訳と指標の計算。</li>
</ul>
<p>未実施：実授業の計時、児童理解・独立記述の測定、Pygame本体起動、headless画面検証、Slidev build。これらを今回の検証済み項目として扱わない。</p>
<p>実授業では下移動・条件・代入の理解／入力／操作／修正／観察時間、Hint・完成例を見た時点、3処理の説明結果、random未実施、基本的なenemy2/3確認と深い読解の区別を記録する。</p>
<p><strong>次はMonth9-1。</strong> RectのREAD、enemy1接触判定、enemy2/3への展開、Game Over接続を同じ指標で監査する。今回の更新は本書の対象案内・一覧・このMonth8-3章だけ。Month8-1・8-2章、slides、Game、Lesson Python、assets、Notes、Guide、カリキュラム文書・区分は変更しない。</p>
<h2 id="6-month9-1活動量コーディング負荷監査">6. Month9-1：活動量・コーディング負荷監査</h2>
<p>監査日：2026-10-10。1節の共通指標・生徒モデル・LEVEL定義をそのまま使用する。時間は実授業の実測ではなく、現行教材の行動分解からの机上推定。Month8-1〜8-3の既存章は変更しない。以下の改善案も未採用である。</p>
<h3 id="61-正本正式区分実装状態">6.1 正本・正式区分・実装状態</h3>
<p>参照：<a href="/robot-python-game/instructor/docs/01_curriculum_goals/">docs/01</a>、<a href="/robot-python-game/instructor/docs/02_month8-9_lesson_design/">docs/02</a>、<a href="/robot-python-game/instructor/docs/06_game1_lesson_flow/">docs/06</a>、<a href="/robot-python-game/instructor/docs/14_art_direction_v05/">docs/14の26〜29節</a>、<a href="/robot-python-game/instructor/docs/17_month9-1_slidev_implementation/">docs/17</a>、<a href="/robot-python-game/instructor/guide/#month9-1%E8%AC%9B%E5%B8%ABbrief%E6%8E%A5%E8%A7%A6%E5%88%A4%E5%AE%9Agame-over">Guideの現行Brief</a>、<a href="/robot-python-game/instructor/presenter/month9-1">全Slidev本文・Presenter Notes・OPTIONAL</a>、<a title="開発リポジトリの参照（Web配布対象外）">START</a>、<a title="開発リポジトリの参照（Web配布対象外）">COMPLETE</a>。過去のCORE12ページの実装評価より、現行CORE13ページの本文・Notes・Briefを優先する。</p>
<p>docs/02の正式区分をそのまま抜き出す：</p>
<table>
<thead>
<tr>
<th>区分</th>
<th>正本の記載</th>
</tr>
</thead>
<tbody>
<tr>
<td>MUST</td>
<td>Rectを当たり判定用領域として大まかに理解する／プレイヤーとenemy1の接触を判定する／当たり判定とifを結び付ける／enemy1と同じ当たり判定をenemy2 / enemy3へ展開する／接触を最小Game Overへつなげる</td>
</tr>
<tr>
<td>SHOULD</td>
<td>当たり判定を自分でテストする／接触時の結果・設定を変更する</td>
</tr>
<tr>
<td>CHALLENGE</td>
<td>接触時の結果や判定設定を改造する</td>
</tr>
<tr>
<td>新出・自力実装レベル</td>
<td>Rect / Pygame当たり判定、Level 2〜3</td>
</tr>
</tbody>
</table>
<p>Rectとcolliderectは新しいPygame APIだが、if・代入は既習。Rect生成の自力記述、引数の暗記、bool／flag理論、not／andの詳しい理解を新MUSTにはしない。enemy2/3への実装展開はMUSTであり、時間不足時にもSHOULDへ下げない。</p>
<p>Guide・Notesは基礎の接触・Restart確認と、自力debug／self-testを区別する。前者は完成の品質確認としてMUST中心経路に残し、後者・任意設定変更はSHOULD追加経路に分ける。CHALLENGE／QUIZの読解・選択活動は既存区分の発展例であり、正本の改造を全員必須へ置き換えない。</p>
<p>CORE13ページ＋OPTIONAL2ページ。docs/06、現行Notes・Briefの想定は70〜75分（enemy1 WORK10〜15分）。STARTはplayer操作・敵3体の移動とrandom・Rect生成が完成済み。敵接触だけ未接続で、itemは表示だけ、score0。前回randomを省略した生徒にも今回STARTの完成済みrandomがあるので、前回全員がrandomを実装したとは仮定しない。</p>
<h3 id="62-全coreの生徒行動分解">6.2 全COREの生徒行動分解</h3>
<p>分類はT＝講師主導、H＝思考、C＝入力・編集、O＝PC操作、W＝待ち。併記は別の行動を示し、時間集計では排他的に配賦する。Debugは原因検討Hと修正入力Cへ分ける。</p>
<table>
<thead>
<tr>
<th>ページ</th>
<th>実際の生徒行動</th>
<th>分類</th>
<th>評価上の注意</th>
</tr>
</thead>
<tbody>
<tr>
<td>p1</td>
<td>前回の画面下判定を短く共有し、今日の到達点を聞く</td>
<td>T</td>
<td>画面下の比較と2つのRectの接触を区別</td>
</tr>
<tr>
<td>p2</td>
<td>READ→enemy1→3体へ展開の順を聞く</td>
<td>T</td>
<td>目次の全リンク操作は不要</td>
</tr>
<tr>
<td>p3</td>
<td>month9-1.pyを開き保存・実行する</td>
<td>O</td>
<td>前回ファイル／complete.pyと区別</td>
</tr>
<tr>
<td>p3</td>
<td>playerを敵へ近づけ、接触しても止まらないことを確認</td>
<td>O</td>
<td>STARTの未完成は正常。無目的なプレイはActive Codingにしない</td>
</tr>
<tr>
<td>p3</td>
<td>ESCで閉じ、案内・短い起動待ち</td>
<td>O / T / W</td>
<td>環境修復や支援待ちを学習量にしない</td>
</tr>
<tr>
<td>p4</td>
<td>画像と64×64の判定領域の説明を聞く</td>
<td>T</td>
<td>透明余白もRectに含む。画像の輪郭判定ではない</td>
</tr>
<tr>
<td>p4</td>
<td>見た目と判定範囲を図で対応させる</td>
<td>H</td>
<td>APIを入力する課題ではない</td>
</tr>
<tr>
<td>p5</td>
<td>離れた／重なった2図と一般形を読む</td>
<td>T</td>
<td>A.colliderect(B)は説明用</td>
</tr>
<tr>
<td>p5</td>
<td>A/Bの役割と接触時の条件を考える</td>
<td>H</td>
<td>bool理論や細かい辺接触規則の暗記は不要</td>
</tr>
<tr>
<td>p6</td>
<td>Rect一般形・4引数の説明を聞く</td>
<td>T</td>
<td>pygame.Rect(x, y, 幅, 高さ)は入力用ではない</td>
</tr>
<tr>
<td>p6</td>
<td>左上の位置・幅・高さへ引数を対応させる</td>
<td>H</td>
<td>x/yは既習。引数名を自立記述したと数えない</td>
</tr>
<tr>
<td>p7</td>
<td>実STARTのRect2行を読む</td>
<td>T</td>
<td>pygame.Rect生成は完成済みREAD</td>
</tr>
<tr>
<td>p7</td>
<td>player_x/yとsize2回を実画像・四角へ対応させる</td>
<td>H</td>
<td>理解・引数読解は評価するが自力実装ではない</td>
</tr>
<tr>
<td>p8</td>
<td>[9-1-1]を検索し2行の#を外す</td>
<td>O / C</td>
<td>if・player_rect・colliderect・状態代入は用意済み</td>
</tr>
<tr>
<td>p8</td>
<td>playerと比べる相手のRect名を選ぶ</td>
<td>H</td>
<td>敵座標ではなくenemy1_rect</td>
</tr>
<tr>
<td>p8</td>
<td>空欄へenemy1_rectを入力、空白を確認する</td>
<td>C</td>
<td>標準は穴埋め1か所</td>
</tr>
<tr>
<td>p8</td>
<td>保存・停止・再実行する</td>
<td>O</td>
<td>Rはコード再読み込みではない</td>
</tr>
<tr>
<td>p8</td>
<td>接触で停止・GAME OVER表示を確認する</td>
<td>H</td>
<td>条件と状態変更の結果比較</td>
</tr>
<tr>
<td>p9</td>
<td>停止中の動き・表示を確かめ、Rで再開する</td>
<td>H / O</td>
<td>Game Over入力の第2課題ではない</td>
</tr>
<tr>
<td>p9</td>
<td>Rと保存→再実行の違いを考える</td>
<td>H</td>
<td>音・フラッシュ観察は任意、基盤を編集しない</td>
</tr>
<tr>
<td>p10</td>
<td>[9-1-2]と[9-1-3]を別々に検索する</td>
<td>O</td>
<td>連結文字列を検索しない</td>
</tr>
<tr>
<td>p10</td>
<td>enemy1の条件を読み、相手名とガードを選ぶ</td>
<td>H</td>
<td>not game_over andは基盤側の参考として渡される</td>
</tr>
<tr>
<td>p10</td>
<td>enemy2へ2行をコピー・変更し、enemy3へ転用する</td>
<td>C</td>
<td>STARTの両編集欄は空。3ページ全部穴埋めではない</td>
</tr>
<tr>
<td>p10</td>
<td>保存・再実行し、各敵への接触とRを確認する</td>
<td>O / H</td>
<td>最初の動作確認。後の未確認対象と重複させない</td>
</tr>
<tr>
<td>p10/11等</td>
<td>必要なら条件・名前・記号・空白を見て短く修正する</td>
<td>H / C</td>
<td>標準は全体で短い修正1回だけ</td>
</tr>
<tr>
<td>p11</td>
<td>初期yと最初の出現順で対象を見分ける</td>
<td>H / O</td>
<td>画面に敵番号がない。講師の識別支援あり</td>
</tr>
<tr>
<td>p11</td>
<td>他の敵から離れて接触、Rで次の敵を確認する</td>
<td>H / O</td>
<td>3体の個別判定と再開の目的付きテスト</td>
</tr>
<tr>
<td>p11</td>
<td>余裕があればspeedを選び変更・再実行・比較する</td>
<td>H / C / O</td>
<td>SHOULD追加。新しい必須機能ではない</td>
</tr>
<tr>
<td>p12</td>
<td>表と自分の判定・状態変更を照合する</td>
<td>T / H</td>
<td>新しい入力課題ではない</td>
</tr>
<tr>
<td>p13</td>
<td>四角・重なり・変えた相手名を短く紙へ書く</td>
<td>H</td>
<td>感想だけでなく処理と結果を残す</td>
</tr>
<tr>
<td>p13</td>
<td>次回のitem・score接続を考え、保存する</td>
<td>H / O</td>
<td>item実装を先取りしない</td>
</tr>
</tbody>
</table>
<h3 id="63-rect-readと通常表示hintの監査">6.3 Rect READと通常表示・Hintの監査</h3>
<p>Rectは「意味理解→4引数の意味→実コードとの対応」まで。p4に入力コードはなく、p6の一般形も説明用。p7には実STARTのplayer_rect／enemy1_rect生成2行が通常表示される。x/y・幅・高さと画面の対応には思考が必要だが、完成API生成を読んだことをLEVEL 4〜5に数えない。</p>
<p>colliderectのp5通常表示は <strong>A.colliderect(B)</strong> だけ。p6/7はRect生成であり、WORK前に <code>if player_rect.colliderect(enemy1_rect):</code> の完成条件式は表示されない。p8通常表示もSTARTと同じ相手名が空欄の2行。enemy1_rectの名前と四角の意味はp7で既に示される。組み合わせを選ぶ余地はあるが、if／APIを組み立てる課題ではない。</p>
<p>HintBlockは初期非表示。p8 Hint1はifの意味、Hint2は2つの実Rect名、Hint3は完成2行。p10はHint1でenemy2_rectと同じ代入行、Hint2でenemy2の完成2行、Hint3でenemy3への名前変更を示す。完成例を開いた経路と、開かず転用した経路を区別する。</p>
<table>
<thead>
<tr>
<th>対象</th>
<th>実STARTの足場</th>
<th>本人が通常書くもの</th>
<th style="text-align:right">通常LEVEL</th>
</tr>
</thead>
<tbody>
<tr>
<td>enemy1 [9-1-1]</td>
<td>コメント済みif・player_rect・colliderect・括弧・コロン、相手の空欄1つ。2行目game_over = Trueも完成済み</td>
<td>enemy1_rectの11文字、2行の#解除・空白調整。新しく2行を自立生成しない</td>
<td style="text-align:right">2</td>
</tr>
<tr>
<td>Game Over</td>
<td>enemy1の内側に完成済み代入。p8通常表示でもTrueが見える</td>
<td>条件行と同時にコメント解除。p9の追加入力なし</td>
<td style="text-align:right">enemy1の束に含む2。別課題として重複集計しない</td>
</tr>
<tr>
<td>enemy2 [9-1-2]</td>
<td>コメントだけの空欄領域。通常Slideに <code>if not game_over and </code> の書き始め</td>
<td>enemy1の2行を転用し、ガードを付け相手をenemy2_rectへ変更</td>
<td style="text-align:right">3</td>
</tr>
<tr>
<td>enemy3 [9-1-3]</td>
<td>コメントだけの空欄領域。enemy1/2の完成済みコードを参照可能</td>
<td>同じ2行を転用、相手をenemy3_rectへ変更</td>
<td style="text-align:right">3</td>
</tr>
</tbody>
</table>
<p>enemy2/3では計4論理行を追加する。ただしコピーなら全字を打つ必要はなく、全行入力でも独立生成とは限らない。完成条件の長さはenemy1が40文字、enemy2/3が各58文字、代入は16文字（先頭空白・改行は除外）。長いAPI綴りを打つ時間だけでLEVELや学習価値を上げない。</p>
<p>enemy1は2、enemy2/3は3で、転用の勾配は実在する。ただしenemy3も例の対象名変更で、白紙から2行を作る5ではない。「3体あるから3倍」でも「3つとも穴埋め」でもない。</p>
<p>正式COMPLETEのenemy2/3には <code>not game_over and</code> があり、enemy1と名前以外が完全同一ではない。外側のif not game_overも完成済み。意味は「まだGame Overでない時だけ」と短く渡し、boolean演算の自力設計・暗記・講義を追加しない。このガードの読み書きは新API理解と重なり、コピー時の負担になる点を記録する。</p>
<h3 id="64-時間再推定rect説明とworkの比率">6.4 時間再推定・Rect説明とWORKの比率</h3>
<p>単位は分。速い経路はエラーなし、標準は短い修正1回、遅い経路は読み直し・対象確認と短い修正を見込む。講師の基本説明は残す。各行の小数は後の整合計算用で、児童を秒単位で計測したものではない。</p>
<table>
<thead>
<tr>
<th>活動</th>
<th style="text-align:right">現行想定</th>
<th style="text-align:right">速い</th>
<th style="text-align:right">標準</th>
<th style="text-align:right">遅い</th>
<th>根拠</th>
</tr>
</thead>
<tbody>
<tr>
<td>p1 前回・到達点</td>
<td style="text-align:right">3</td>
<td style="text-align:right">3</td>
<td style="text-align:right">3</td>
<td style="text-align:right">3</td>
<td>既習の条件処理を短く共有</td>
</tr>
<tr>
<td>p2 Index</td>
<td style="text-align:right">2</td>
<td style="text-align:right">1</td>
<td style="text-align:right">1</td>
<td style="text-align:right">1</td>
<td>進行順だけ</td>
</tr>
<tr>
<td>p3 START確認</td>
<td style="text-align:right">5</td>
<td style="text-align:right">3</td>
<td style="text-align:right">4</td>
<td style="text-align:right">6</td>
<td>ファイル・動作・接触未完成確認</td>
</tr>
<tr>
<td>p4 画像とRect</td>
<td style="text-align:right">5</td>
<td style="text-align:right">3</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td>新しい判定範囲の意味</td>
</tr>
<tr>
<td>p5 重なりとcolliderect一般形</td>
<td style="text-align:right">5</td>
<td style="text-align:right">3</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td>2状態・2つのRectの対応</td>
</tr>
<tr>
<td>p6 Rect一般形・4引数</td>
<td style="text-align:right">5</td>
<td style="text-align:right">2</td>
<td style="text-align:right">3</td>
<td style="text-align:right">4</td>
<td>既習のx/y・サイズとの接続</td>
</tr>
<tr>
<td>p7 実RectコードREAD</td>
<td style="text-align:right">5</td>
<td style="text-align:right">3</td>
<td style="text-align:right">4</td>
<td style="text-align:right">5</td>
<td>2行と実画像の対応。入力なし</td>
</tr>
<tr>
<td>p8 enemy1 WORK</td>
<td style="text-align:right">10〜15</td>
<td style="text-align:right">3</td>
<td style="text-align:right">5</td>
<td style="text-align:right">8</td>
<td>相手名1空欄と解除・結果確認</td>
</tr>
<tr>
<td>p9 Game Over・R確認</td>
<td style="text-align:right">5</td>
<td style="text-align:right">2</td>
<td style="text-align:right">3</td>
<td style="text-align:right">4</td>
<td>入力せず停止・再開を確認</td>
</tr>
<tr>
<td>p10 enemy2/3転用</td>
<td style="text-align:right">10</td>
<td style="text-align:right">5</td>
<td style="text-align:right">8</td>
<td style="text-align:right">12</td>
<td>2ブロック追加・対象変更・ガード・確認</td>
</tr>
<tr>
<td>p11 個別テスト＋任意調整</td>
<td style="text-align:right">10</td>
<td style="text-align:right">5</td>
<td style="text-align:right">8</td>
<td style="text-align:right">12</td>
<td>未確認対象・Restart。任意追加を下表で分離</td>
</tr>
<tr>
<td>p12 Review</td>
<td style="text-align:right">2</td>
<td style="text-align:right">2</td>
<td style="text-align:right">2</td>
<td style="text-align:right">2</td>
<td>対応表の照合</td>
</tr>
<tr>
<td>p13 Reflect・保存</td>
<td style="text-align:right">3</td>
<td style="text-align:right">3</td>
<td style="text-align:right">4</td>
<td style="text-align:right">5</td>
<td>3観点の短い説明と保存</td>
</tr>
<tr>
<td><strong>計</strong></td>
<td style="text-align:right"><strong>70〜75</strong></td>
<td style="text-align:right"><strong>38</strong></td>
<td style="text-align:right"><strong>53</strong></td>
<td style="text-align:right"><strong>70</strong></td>
<td>OPTIONALなし</td>
</tr>
</tbody>
</table>
<p>p4〜7は計画20分、標準推定15分（Rect中心のp4/6/7は11分、colliderectは4分）。この15分のうち講師説明8分、対応を考える時間7分。<strong>15〜20分をすべて説明だけに使う構成ではない</strong>。新APIと画像・四角・位置・幅高さの対応は必要で、4ページだから過剰と機械判定しない。引数順の講義や同じ図の言い換えを足す運用は過剰になる。</p>
<p>p8は新しい接触の意味を確認するが、実入力は11文字と#解除で、Game Overの代入も既にある。毎回10〜15分を要する根拠は弱い。p10は転用2体分の実装があり、8分はAPI綴りの入力だけでなく、ガードと相手選択・結果確認を含む。</p>
<p>p9とp11はそれぞれ、enemy1の停止・Rの理解、3体の個別確認に目的がある。ただしp8/p10で確認済みの結果を同じ手順で何度も試す時間は増やさない。p11は他の敵から離れ、初期yと最初の出現順を照合する負荷もある。番号表示なし・randomのため確認は難しく、10分を常に純粋なコード思考として数えない。講師の識別支援は残す。</p>
<table>
<thead>
<tr>
<th>経路</th>
<th style="text-align:right">速い</th>
<th style="text-align:right">標準</th>
<th style="text-align:right">遅い</th>
<th>定義</th>
</tr>
</thead>
<tbody>
<tr>
<td>MUST中心</td>
<td style="text-align:right">37</td>
<td style="text-align:right">51</td>
<td style="text-align:right">66</td>
<td>Rect理解・enemy1・Game Over・enemy2/3・基礎テスト・Review・Reflect。p11の任意追加1/2/4分を除く</td>
</tr>
<tr>
<td>通常CORE＋SHOULDの軽い試行</td>
<td style="text-align:right">38</td>
<td style="text-align:right">53</td>
<td style="text-align:right">70</td>
<td>p11で速度1か所の変更・予想・再実行・比較を1回。全員必須ではない</td>
</tr>
</tbody>
</table>
<p>SHOULDは実施量が固定されていない。上のCORE53分は軽い設定試行を含む一つの追加経路で、設定改造・自力debugを全員の課題とする意味ではない。結果・条件改造、OPTIONALは含めない。</p>
<p>標準53分は想定70〜75分より17〜22分短い。80分枠の余りは27分、速い生徒では42分。MUST中心51分でも29分が残る。遅い経路70分は枠内だが、同じ追加活動を全員に強制すると余裕が減る。進行待ち・失敗・OPTIONALを使って時計だけを70分へ合わせない。</p>
<h3 id="65-workテスト時間の詳細分解とdebug">6.5 WORK・テスト時間の詳細分解とDebug</h3>
<p>各セルは速い／標準／遅い、単位は分。結果確認を理解と分け、保存・ESC・実行・検索を操作へ置く。p9は入力課題でなくても、変更したコードの目的付き検証として同じ表で示す。</p>
<table>
<thead>
<tr>
<th>活動</th>
<th>理解・予想</th>
<th>入力・編集</th>
<th>操作</th>
<th>Debug</th>
<th>結果確認・比較</th>
<th>講師案内</th>
<th>合計</th>
</tr>
</thead>
<tbody>
<tr>
<td>enemy1 p8</td>
<td>0.75 / 1.75 / 3</td>
<td>0.25 / 0.75 / 1</td>
<td>0.75 / 1 / 1.5</td>
<td>0 / 0 / 1</td>
<td>0.75 / 1 / 1</td>
<td>0.5 / 0.5 / 0.5</td>
<td>3 / 5 / 8</td>
</tr>
<tr>
<td>Game Over・R p9</td>
<td>0.25 / 0.75 / 1</td>
<td>0 / 0 / 0</td>
<td>0.5 / 0.75 / 1</td>
<td>0 / 0 / 0</td>
<td>0.75 / 1 / 1.5</td>
<td>0.5 / 0.5 / 0.5</td>
<td>2 / 3 / 4</td>
</tr>
<tr>
<td>enemy2/3 p10</td>
<td>1 / 2.5 / 3.5</td>
<td>1 / 1.5 / 2</td>
<td>1 / 1.5 / 2</td>
<td>0 / 0.5 / 1.5</td>
<td>1.5 / 1.5 / 2.5</td>
<td>0.5 / 0.5 / 0.5</td>
<td>5 / 8 / 12</td>
</tr>
<tr>
<td>個別テスト・追加試行 p11</td>
<td>0.75 / 1.5 / 2</td>
<td>0.25 / 0.25 / 0.5</td>
<td>1.5 / 2.25 / 3</td>
<td>0 / 0.5 / 1.5</td>
<td>2 / 3 / 4.5</td>
<td>0.5 / 0.5 / 0.5</td>
<td>5 / 8 / 12</td>
</tr>
<tr>
<td><strong>計</strong></td>
<td><strong>2.75 / 6.5 / 9.5</strong></td>
<td><strong>1.5 / 2.5 / 3.5</strong></td>
<td><strong>3.75 / 5.5 / 7.5</strong></td>
<td><strong>0 / 1 / 4</strong></td>
<td><strong>5 / 6.5 / 9.5</strong></td>
<td><strong>2 / 2 / 2</strong></td>
<td><strong>15 / 24 / 36</strong></td>
</tr>
</tbody>
</table>
<p>p10標準8分はenemy2約4.5分、enemy3約3.5分の仮配分。先に意味を確認した例を2体目へ使うので均等3倍としない。合計は理解2.5・入力1.5・操作1.5・Debug0.5・比較1.5・案内0.5。enemy2/3のLEVELはどちらも3で、時間の差を難易度の数値差に変換しない。</p>
<p>標準のDebug1分は原因検討0.75・修正入力0.25。p10とp11へ半分ずつ配賦するが、<strong>1回の短い修正</strong>であって2回の失敗を仮定しない。p8で起きたら同じ総量を移す。エラーなしならCORE52分、Active Coding15.5分。遅い経路の4分も短い修正・再確認枠であり、長い環境障害を前提にしない。</p>
<p>起こり得る箇所はcolliderectの綴り・括弧・コロン・相手Rect名・インデント・game_over代入。enemy1では多くが用意済みなので、綴りから全員が書き間違うと仮定しない。Rect作成前への移動も今回指示されていない。原因候補を説明することと、全員に実エラーを発生させることは別である。自力で原因を発見するSHOULDの達成量を、必要時の講師支援付き修正と混同しない。</p>
<h3 id="66-level集計8-3からの接続thinking-load">6.6 LEVEL集計・8-3からの接続・Thinking Load</h3>
<table>
<thead>
<tr>
<th style="text-align:right">LEVEL</th>
<th style="text-align:right">MUSTの束数</th>
<th style="text-align:right">SHOULD追加</th>
<th style="text-align:right">通常CORE</th>
<th>数え方</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:right">0</td>
<td style="text-align:right">4</td>
<td style="text-align:right">0</td>
<td style="text-align:right">4</td>
<td>p5 colliderect一般形、p6 Rect一般形、p7実Rect READ、p12対応表。図だけのp4や各WORK中の再読を追加集計しない</td>
</tr>
<tr>
<td style="text-align:right">1</td>
<td style="text-align:right">0</td>
<td style="text-align:right">1</td>
<td style="text-align:right">1</td>
<td>p11追加経路の設定数値1か所</td>
</tr>
<tr>
<td style="text-align:right">2</td>
<td style="text-align:right">1</td>
<td style="text-align:right">0</td>
<td style="text-align:right">1</td>
<td>enemy1相手名の穴埋め。Game Over代入もこの束</td>
</tr>
<tr>
<td style="text-align:right">3</td>
<td style="text-align:right">2</td>
<td style="text-align:right">0</td>
<td style="text-align:right">2</td>
<td>enemy2、enemy3の参考転用。それぞれ固定ID1つ</td>
</tr>
<tr>
<td style="text-align:right">4</td>
<td style="text-align:right">0</td>
<td style="text-align:right">0</td>
<td style="text-align:right">0</td>
<td>日本語だけから新しい1行を独立生成する通常指示なし</td>
</tr>
<tr>
<td style="text-align:right">5</td>
<td style="text-align:right">0</td>
<td style="text-align:right">0</td>
<td style="text-align:right">0</td>
<td>日本語から条件＋代入の独立生成は要求されない</td>
</tr>
<tr>
<td style="text-align:right">6</td>
<td style="text-align:right">0</td>
<td style="text-align:right">0</td>
<td style="text-align:right">0</td>
<td>新しい処理設計なし</td>
</tr>
</tbody>
</table>
<p><strong>MUST Highest Level＝3、SHOULD込みも3。</strong> 条件の2行入力・3体表示・新API2種類があるだけで5にはしない。Hint2のenemy2完成例を丸写ししenemy3だけ変えた場合、enemy2の独立判断はさらに減るが、通常の参考転用という最高3はenemy3にも残る。</p>
<p>Month8-3の「条件が成立した時だけ座標を戻す」を「2つの四角が重なった時だけ状態を変える」へ接続する。比較演算子&gt;からPygameの接触確認へ条件の中身が変わり、Pythonのif・内側の代入は同じ。randomは前回SHOULDなので、全員の自力実装済み知識として要求しない。Game Overの代入は既習の書き方で扱えるが、Trueの状態としての意味は短く支援する。</p>
<table>
<thead>
<tr>
<th>活動</th>
<th>指示通り入力</th>
<th>予想・比較</th>
<th>原因検討</th>
<th>転用</th>
<th>自力設計</th>
</tr>
</thead>
<tbody>
<tr>
<td>Rect理解・READ</td>
<td>入力なし</td>
<td>画像／四角、4値／位置と寸法</td>
<td>透明余白・size2回の役割</td>
<td>既習x/yと大きさ</td>
<td>なし</td>
</tr>
<tr>
<td>colliderect一般形</td>
<td>入力なし</td>
<td>離れた／重なった2状態</td>
<td>判定と画面下条件の違い</td>
<td>A/Bへ実Rect名を当てる準備</td>
<td>なし</td>
</tr>
<tr>
<td>enemy1</td>
<td>相手名1つ</td>
<td>接触時だけGame Over</td>
<td>判定式と状態代入の役割</td>
<td>ifの条件処理</td>
<td>穴埋め以上は要求しない</td>
</tr>
<tr>
<td>enemy2</td>
<td>条件の書き始め支援あり</td>
<td>相手番号・結果確認</td>
<td>enemy1名の残り・ガード</td>
<td>2行を参考転用</td>
<td>新しい処理設計なし</td>
</tr>
<tr>
<td>enemy3</td>
<td>enemy1/2参照可</td>
<td>相手を自分で選ぶ</td>
<td>別の敵との取り違え</td>
<td>同じ構造へ展開</td>
<td>白紙生成ではない</td>
</tr>
<tr>
<td>Test</td>
<td>操作手順あり</td>
<td>接触／非接触、停止／再開</td>
<td>条件・名前・空白・対象識別</td>
<td>別対象で同じ確認</td>
<td>任意改造は標準外</td>
</tr>
</tbody>
</table>
<p>Thinking Loadは<strong>中</strong>。APIの役割、判定と状態変更、3つの相手の対応は8-3より組み合わせが増える。記述の勾配は2→3へ戻るが、if・代入の独立生成までは上がらない。Rectの説明量が多いことと、自立して書く量が多いことを混同しない。</p>
<h3 id="67-active-coding全体配分teacher-led-ratio">6.7 Active Coding・全体配分・Teacher-led Ratio</h3>
<p>標準53分の排他的配分。小数はモデル整合用、各割合は丸め。</p>
<table>
<thead>
<tr>
<th>活動分類</th>
<th style="text-align:right">分</th>
<th style="text-align:right">割合</th>
<th>根拠</th>
</tr>
</thead>
<tbody>
<tr>
<td>講師説明</td>
<td style="text-align:right">14.5</td>
<td style="text-align:right">約27%</td>
<td>p1=2、p2=1、p3=0.5、p4=2.5、p5=2、p6=2、p7=1.5、p8/9/10/11各0.5、p12=1</td>
</tr>
<tr>
<td>生徒操作</td>
<td style="text-align:right">9</td>
<td style="text-align:right">約17%</td>
<td>p3=3、WORK／テスト5.5、最終保存0.5</td>
</tr>
<tr>
<td>入力・編集</td>
<td style="text-align:right">2.75</td>
<td style="text-align:right">約5%</td>
<td>WORK／追加試行2.5＋Debug修正0.25</td>
</tr>
<tr>
<td>観察・思考</td>
<td style="text-align:right">21.75</td>
<td style="text-align:right">約41%</td>
<td>p4〜7=7、WORKの理解／比較13、Debug原因0.75、p12=1</td>
</tr>
<tr>
<td>全体共有</td>
<td style="text-align:right">1</td>
<td style="text-align:right">約2%</td>
<td>p1前回確認の内数</td>
</tr>
<tr>
<td>振り返り</td>
<td style="text-align:right">3.5</td>
<td style="text-align:right">約7%</td>
<td>p13。保存は操作へ分離</td>
</tr>
<tr>
<td>起動待ち</td>
<td style="text-align:right">0.5</td>
<td style="text-align:right">約1%</td>
<td>p3</td>
</tr>
<tr>
<td><strong>計</strong></td>
<td style="text-align:right"><strong>53</strong></td>
<td style="text-align:right"><strong>100%（丸め）</strong></td>
<td>—</td>
</tr>
</tbody>
</table>
<ul>
<li><strong>Active Coding Time＝16.5分</strong>：enemy1 3.5、Game Over目的付き確認1.75、enemy2/3 6、個別テスト・追加試行5.25。入力2.75＋コードの選択・予想・原因検討・結果比較13.75。Ctrl+F・保存・ESC・実行・単なるプレイは除外する。Rectの説明・紙だけの理解、純粋なReview再読も入れない。</li>
<li><strong>入力・編集＝2.75分。Thinking Time＝25.25分≒25分</strong>（観察・思考21.75＋振り返り3.5）。Active Codingの内数・思考時間をCOREへ再加算しない。</li>
<li><strong>Teacher-led Ratio＝15.5/53≒29%</strong>（説明14.5＋共有1）。説明だけ約27%。全体で40%超とは推定されず、「説明過多だけ」が主原因ではない。</li>
<li><strong>MUST中心51分</strong>：Active Coding15分、入力2.5分、Thinking24分、Teacher-led Ratio15.5/51≒30%。追加2分は入力0.25・予想比較1.25・操作0.5で、これを除いて計算した。</li>
<li>思考・入力・共有・振り返りの活動枠は29分、約55%。操作込みは38分、約72%。児童が実際に思考した時間の測定ではない。</li>
</ul>
<h3 id="68-4lesson比較判定optional依存">6.8 4Lesson比較・判定・OPTIONAL依存</h3>
<table>
<thead>
<tr>
<th>指標</th>
<th style="text-align:right">Month8-1</th>
<th style="text-align:right">Month8-2</th>
<th style="text-align:right">Month8-3</th>
<th style="text-align:right">Month9-1</th>
</tr>
</thead>
<tbody>
<tr>
<td>CORE標準</td>
<td style="text-align:right">55分</td>
<td style="text-align:right">54分</td>
<td style="text-align:right">51分</td>
<td style="text-align:right">53分</td>
</tr>
<tr>
<td>MUST中心</td>
<td style="text-align:right">41分</td>
<td style="text-align:right">43分</td>
<td style="text-align:right">37分</td>
<td style="text-align:right">51分</td>
</tr>
<tr>
<td>速い生徒</td>
<td style="text-align:right">40分</td>
<td style="text-align:right">38分</td>
<td style="text-align:right">39分</td>
<td style="text-align:right">38分</td>
</tr>
<tr>
<td>遅い生徒</td>
<td style="text-align:right">73分</td>
<td style="text-align:right">73分</td>
<td style="text-align:right">67分</td>
<td style="text-align:right">70分</td>
</tr>
<tr>
<td>Active Coding</td>
<td style="text-align:right">11分</td>
<td style="text-align:right">約24分</td>
<td style="text-align:right">14分</td>
<td style="text-align:right">16.5分</td>
</tr>
<tr>
<td>入力・編集</td>
<td style="text-align:right">1.5分</td>
<td style="text-align:right">5.5分</td>
<td style="text-align:right">2.25分</td>
<td style="text-align:right">2.75分</td>
</tr>
<tr>
<td>Thinking</td>
<td style="text-align:right">22分</td>
<td style="text-align:right">約25分</td>
<td style="text-align:right">約25分</td>
<td style="text-align:right">約25分</td>
</tr>
<tr>
<td>MUST最高／SHOULD込み最高LEVEL</td>
<td style="text-align:right">1 / 1</td>
<td style="text-align:right">3 / 3</td>
<td style="text-align:right">2 / 2</td>
<td style="text-align:right">3 / 3</td>
</tr>
<tr>
<td>Teacher-led</td>
<td style="text-align:right">約33%</td>
<td style="text-align:right">約28%</td>
<td style="text-align:right">約32%</td>
<td style="text-align:right">約29%</td>
</tr>
<tr>
<td>Thinking Load</td>
<td style="text-align:right">低〜中</td>
<td style="text-align:right">中</td>
<td style="text-align:right">低〜中</td>
<td style="text-align:right">中</td>
</tr>
<tr>
<td>OPTIONAL依存</td>
<td style="text-align:right">仕様上なし・運用リスク</td>
<td style="text-align:right">同左</td>
<td style="text-align:right">同左。random必須化にも注意</td>
<td style="text-align:right">同左。全員Quizで残り時間を埋めない</td>
</tr>
</tbody>
</table>
<p><strong>判定：LIGHT、推奨B。</strong> Rectと接触を結び、enemy1から2/3へ転用する到達点・3中心の勾配は成立する。ただしCORE70〜75分には標準約17〜22分不足する。enemy1は11文字の穴埋め、Game Over代入は既にあり、同じ確認の重複もある。Month8-3より入力・Active Codingは増えるが、Month8-2のActive Coding約24分より少ない。</p>
<p>ADEQUATEとしないのは「実装回」の通常活動量・自力判断が十分とは言えないため。TOO LIGHTとしないのは、役割理解と転用の到達点自体はあり、既習if・代入の試行と検証を改善するBで補強できるため。OVERLOADEDではないが、新API・ガード・3体識別を同時に迷う個人には負荷が高い。全員に白紙記述を足して解決しない。</p>
<p>OPTIONALへの仕様上の依存はない。CHALLENGEはRect2行→判定→状態変更のまとまりを読み、QUIZは8問の任意復習。これらを全員に課して53分から70分を埋めれば運用上の依存になる。SHOULDの結果改造を全員必須にして補填することも避ける。</p>
<h3 id="69-自力記述候補と段階hint">6.9 自力記述候補と段階Hint</h3>
<p>以下は実装変更ではなく提案。API綴りを隠して暗記させず、一般形・意味・必要時のReferenceは使えるままにする。</p>
<table>
<thead>
<tr>
<th>候補</th>
<th style="text-align:right">現在LEVEL</th>
<th>変更後目標</th>
<th>増える思考</th>
<th>時間差の目安</th>
<th>リスク・推奨</th>
</tr>
</thead>
<tbody>
<tr>
<td>A：enemy1のif条件1行</td>
<td style="text-align:right">2</td>
<td>日本語から独立に組めば4、既存完成式の転用なら3</td>
<td>if・2つのRect・APIの条件への配置</td>
<td>＋1〜2分</td>
<td><strong>有力</strong>。一般形は提示可。新APIと既習ifをつなぐが、綴り暗記を求めない</td>
</tr>
<tr>
<td>B：game_over = Trueの代入1行</td>
<td style="text-align:right">2の束内、値は完成済み</td>
<td>日本語から独立生成4、完成例の転記なら2〜3</td>
<td>条件成立時に変える変数・値を選ぶ</td>
<td>＋1分程度</td>
<td><strong>有力</strong>。Trueの意味は基盤の状態値として短く渡す。bool理論を必須化しない</td>
</tr>
<tr>
<td>C：enemy2判定2行</td>
<td style="text-align:right">3</td>
<td>参考転用3を維持</td>
<td>元コードの保持部分・相手名・ガード</td>
<td>ほぼ0〜＋1分</td>
<td><strong>維持推奨</strong>。API・ガードの全文自立生成5まで要求する価値は薄い</td>
</tr>
<tr>
<td>D：enemy3判定2行</td>
<td style="text-align:right">3</td>
<td>まず参考転用3、独立1行4／2行5は実績確認時のみ</td>
<td>対象名・条件・代入を自分で組み合わせる</td>
<td>＋1〜3分</td>
<td><strong>一部試行</strong>。支援を減らしても隣の例のコピーなら3。困れば戻れるようにする</td>
</tr>
</tbody>
</table>
<p>第一候補は「プレイヤーと敵1が重なったらGame Overにする」から<strong>if＋代入2行を短く自力試行</strong>すること。一般形を実名・if・状態代入へ組み立てる価値がある。LEVEL 5の証拠になるのは、完成2行を先に見ず、本人が既習構造から複数行を作った場合だけ。最初から書き始めを与えた経路・完成式転記は2〜3へ別評価する。全員必須5への改定は提案しない。</p>
<p>段階支援候補：まず短く試す→Hint1「条件が成立した時だけなのでif」→Hint2「player_rectとenemy1_rect、変える状態はgame_over」→Hint3「A.colliderect(B)の一般形とTrueの意味」→最終「完成2行」。一般形はConcept・Referenceにも残してよく、API綴りを記憶から再現する試験ではない。既存3段階UIを変更する提案とは別に、講師の口頭支援で試せる。</p>
<p>完成形を先に見せたり、本人がHintで完成形を見た後に同じ式を書いたりした場合は、自立4〜5と認定しない。Hintを使ったことを失敗扱いせず、コードと意味を説明できる到達点を優先する。</p>
<h3 id="610-改善a--b--c成果物仮時間">6.10 改善A / B / C・成果物・仮時間</h3>
<table>
<thead>
<tr>
<th>案</th>
<th>内容</th>
<th>判断</th>
</tr>
</thead>
<tbody>
<tr>
<td>A：現状維持</td>
<td>標準53分、MUST51分の実装回として扱う</td>
<td>到達点は成立するが70〜75分の標準活動量は保証できない</td>
</tr>
<tr>
<td>B：支援・自力記述・検証調整</td>
<td>Rect READ・一般形を保ち、enemy1の既習2行を試す。enemy2はコピー転用、enemy3は必要時支援。比較・説明を補強</td>
<td><strong>推奨</strong>。新機能・bool講義・全員白紙課題を追加しない</td>
</tr>
<tr>
<td>C：Lesson内容変更</td>
<td>item・scoreを前倒し、設定改造を必須にする等</td>
<td>不要。Game 1の分担や正式区分を変えるよりBを先に試す</td>
</tr>
</tbody>
</table>
<p>短い成果物候補：「player_rectとenemyのRectを用意→重なりをcolliderectで調べる→条件成立時にgame_overをTrueへ変える→既存基盤が停止・表示」。実行順と依存を自分のコードへ対応させる。game_over代入が直接描画・アプリ終了を行うという誤解を避ける。文字列の暗記ではなく、相手名・条件・結果を指して説明できるかを見る。</p>
<p>Bを標準経路で試す仮配分：</p>
<table>
<thead>
<tr>
<th>追加／置換</th>
<th style="text-align:right">時間差の仮説</th>
<th>活動</th>
</tr>
</thead>
<tbody>
<tr>
<td>enemy1の2行を自力試行・理由確認</td>
<td style="text-align:right">＋5分</td>
<td>API一般形を見ながら既習if・状態代入を接続。困ればHintへ。入力増1分・コード思考4分</td>
</tr>
<tr>
<td>enemy3の支援を一段減らして最初の試行</td>
<td style="text-align:right">＋3分</td>
<td>相手・条件・代入をまず本人が選ぶ。入力増0.5分・コード思考2.5分。コピーならLEVEL 3のまま</td>
</tr>
<tr>
<td>間違い例1つと結果を比較</td>
<td style="text-align:right">＋4分</td>
<td>colliderectで調べるだけの例と、if内で状態を変える自分のコードを予想・照合。思考3.5分・操作0.5分</td>
</tr>
<tr>
<td>自分の処理順を説明・短く共有</td>
<td style="text-align:right">＋2分</td>
<td>個人1分＋共有1分。長い作文にしない</td>
</tr>
<tr>
<td>重複するReviewの表読みを置換</td>
<td style="text-align:right">−2分</td>
<td>現行p12の説明1分・思考1分を本人の説明へ置換。表は参照用に残す</td>
</tr>
<tr>
<td><strong>純増</strong></td>
<td style="text-align:right"><strong>＋12分</strong></td>
<td><strong>53→約65分</strong>。MUST中心は51→約63分</td>
</tr>
</tbody>
</table>
<p>排他的な差分は入力1.5分・観察思考10分・操作0.5分・共有1分・講師説明−1分。Active Codingは16.5＋11.5＝<strong>約28分</strong>（入力増とコード予想・比較。紙だけの説明は除く）。Teacher-ledは共有増とReview説明減が相殺し、15.5/65≒24%。これは活動設計の仮説で、児童の記述・授業時間の実証ではない。</p>
<p>独立試行と比較が実際に現在の活動とどう重複するか、さらに置換して再計時する。＋12分を必ず使わせる目標にはしない。まずenemy1の1行から試し、困れば2行の足場を戻す。遅い生徒はSHOULDと追加試行を減らし、3体の必須判定・確認・保存を優先。全員のファイルを意図的に壊さない。速い生徒のOPTIONALは進度差対応でありCORE不足の補填ではない。</p>
<h3 id="611-難易度勾配検証範囲次の監査">6.11 難易度勾配・検証範囲・次の監査</h3>
<p>現状の最高LEVELは8-1＝1、8-2＝3、8-3＝2、9-1＝3。9-1は参考転用が2束あり3中心へ戻るが、4〜5の通常課題はない。改善試行では<strong>3を基準に、一部の1行4・2行5を証拠付きで確認</strong>する。Rect生成とガードは基盤支援を維持し、全員へ新MUSTとして5を要求しない。目標LEVELへ合わせて既存穴埋めやコピーを高評価しない。</p>
<p>今回確認したこと：</p>
<ul>
<li>全Month9-1本文・Presenter Notes・OPTIONAL、実START／COMPLETE、関連正本・現行Brief、通常表示と閉じたHintの足場を照合。</li>
<li>Python構文・固定ID3件の確認。enemy1穴埋めとenemy2/3の正式ガード付き転用をメモリ内だけで補い、構文木がCOMPLETEと一致。</li>
<li>COMPLETEの3判定を抽出し、メモリ内の判定結果を与えて、非接触はgame_over=False、enemy1/2/3のどれでもTrueになることを確認。これは実Rect幾何・Pygame本体・Restart・授業の動作実測ではない。</li>
<li>時間表、WORKの理解／入力／操作／Debug／結果確認、全体内訳、MUST中心・SHOULD追加、4Lesson指標を計算。</li>
</ul>
<p>未実施：実授業計時、児童の理解・独立記述の測定、Pygame本体起動、headless画面検証、Slidev build。docs/17の過去の動作検証を今回再実施したとは扱わない。</p>
<p>実授業では、Rectの図と変数を対応できた時点、最初に見たHint、enemy1の入力と意味説明の差、enemy2/3の転用元・変更点、対象識別とコード思考の所要時間、修正回数、OPTIONALに入る前の終了時刻を記録する。正しいGame Overの結果と、判定→状態変更を説明できた証拠を分ける。</p>
<p><strong>次はMonth9-2。</strong> item判定・score加算・random再配置を同じ指標で監査する。Month8-3のrandomはSHOULDだったため、全員が自力実装済みとは仮定しない。今回の更新は本書の対象案内・一覧・Month9-1章のみ。既存Month8-1〜8-3章、教材・Python・assets・Notes・Guide・固定ID・カリキュラム・正式区分は変更しない。</p>
<h2 id="7-month9-2コード側部分監査教材資料待ち">7. Month9-2：コード側部分監査・教材資料待ち</h2>
<p>監査日：2026-10-10。1節の定義・生徒モデルを維持する。<strong>本章は完全監査ではない。</strong> 実Pythonと仕様で確認できる範囲だけを記録し、授業時間や通常のHint表示を推測で補わない。改善提案は未採用。既存Month8-1〜Month9-1章は変更しない。</p>
<h3 id="71-参照状況と判定の限界">7.1 参照状況と判定の限界</h3>
<p>確認済み：<a title="開発リポジトリの参照（Web配布対象外）">START</a>、<a title="開発リポジトリの参照（Web配布対象外）">COMPLETE</a>、<a href="/robot-python-game/instructor/docs/01_curriculum_goals/">docs/01</a>、<a href="/robot-python-game/instructor/docs/02_month8-9_lesson_design/">docs/02</a>、<a href="/robot-python-game/instructor/docs/06_game1_lesson_flow/">docs/06</a>、<a href="/robot-python-game/instructor/docs/14_art_direction_v05/">docs/14の19.8〜19.9・26節</a>、<a href="/robot-python-game/instructor/guide/">Guide</a>、<a href="/robot-python-game/instructor/ref-game#score">共通Referenceのscore</a>、<a title="開発リポジトリの参照（Web配布対象外）">Slidev入口</a>、本書の既存4Lesson監査。</p>
<p>依頼で指定された <code>slides/month9/month9-2.md</code> は現リポジトリに存在しない。Markdownファイル一覧とMonth9-2／固定IDの検索も確認したが、別名の本編・Presenter Notes・OPTIONAL Challenge／Quizは見つからない。Slidev入口の公開範囲もMonth8-1〜Month9-1までである。GuideにはMonth9-2の到達点・START／COMPLETE仕様・計画配分はあるが、Month9-2固有の実施Brief・各WORKの表示内容は確認できない。</p>
<p>したがって、CORE標準・速い／遅い・MUST中心・Active Coding・入力時間・Thinking Time・Teacher-led Ratio・OPTIONAL依存度は<strong>未算出</strong>。ADEQUATE / LIGHT / TOO LIGHT / OVERLOADEDの総合判定も保留する。資料不足を「活動量が少ない」という判定に置き換えない。</p>
<p>docs/06の計画は70〜75分だが、これは本章による独立推定ではない。資料なしで前回のページ構成・時間・Hintを流用して、今回の実態として報告しない。</p>
<h3 id="72-正式区分既習との接続">7.2 正式区分・既習との接続</h3>
<p>docs/02の正式記載：</p>
<table>
<thead>
<tr>
<th>区分</th>
<th>正本の記載</th>
</tr>
</thead>
<tbody>
<tr>
<td>MUST</td>
<td>scoreを変数として扱う／アイテム当たり判定を実装する／scoreを加算する／itemをrandom再配置する／Game 1を標準完成状態にする</td>
</tr>
<tr>
<td>SHOULD</td>
<td>プレイテストで問題を見つける／数値を調整してゲームバランスを変える</td>
</tr>
<tr>
<td>CHALLENGE</td>
<td>得点や難易度を追加調整する</td>
</tr>
<tr>
<td>新出・自力実装レベル</td>
<td>原則なし、Level 2〜3</td>
</tr>
</tbody>
</table>
<p>具体的な加点量は実COMPLETE・STARTの固定ID／コメントとも100。itemのrandom再配置は今回MUSTだが、Month8-3ではSHOULDだった。全員が自力実装済みとは仮定しない。一般形・引数の役割を再確認し、必要なら既存の出現位置の例を参照できる支援が必要である。</p>
<p>Month9-1から引き継ぐのは、Rect＝判定領域、colliderect＝2つの四角の重なり、if＝条件成立時だけ内側へ進む、代入＝値を変えること。item取得では相手をenemyN_rectからitem_rectへ、結果をgame_overの状態変更からscore加算・座標変更へ置き換える。game_overのTrue代入をitemへそのままコピーするのではない。not game_over andのガードはSTARTにあり、既習Pythonの自立課題と新たなbool講義を混同しない。</p>
<h3 id="73-実startの足場入力範囲暫定level">7.3 実STARTの足場・入力範囲・暫定LEVEL</h3>
<p>STARTはplayer操作・敵3体の移動／random／衝突・Game Over・Restartが完成済み。item画像とitem_rect、score初期値、Score: 0の描画、+100用文字画像の準備は存在する。取得判定・score加算・再配置はコメントになっている。</p>
<table>
<thead>
<tr>
<th>対象</th>
<th>実STARTで用意済みの部分</th>
<th>穴埋めの代表入力</th>
<th style="text-align:right">コード側LEVEL</th>
</tr>
</thead>
<tbody>
<tr>
<td>collision [9-2-1]</td>
<td>if・not game_over and・player_rect・colliderect・括弧・コロン。item_rect生成も完成済み</td>
<td>item_rectの9文字、#解除。条件1行を日本語から生成しない</td>
<td style="text-align:right">2</td>
</tr>
<tr>
<td>score [9-2-2]</td>
<td>代入左辺scoreと=、右辺の空欄。「scoreに100を足そう」というコメント</td>
<td>score + 100の11文字、#解除。+100だけの空欄ではなく右辺全体</td>
<td style="text-align:right">2</td>
</tr>
<tr>
<td>item_x [9-2-3]</td>
<td>左辺item_x・random.randint・括弧・2引数の空欄</td>
<td>0とscreen_width - item_size（24文字）</td>
<td style="text-align:right">2</td>
</tr>
<tr>
<td>item_y [9-2-3]</td>
<td>左辺item_y・random.randint・括弧・2引数の空欄</td>
<td>60とscreen_height - item_size（25文字）</td>
<td style="text-align:right">2</td>
</tr>
</tbody>
</table>
<p>上部の初期化とRestartには、item_x／item_yの完成した再配置2行がそのまま存在する。敵の再配置例もある。値・変数の選択を考える余地はあるが、API・代入先を白紙から生成する必要はない。完成2行をコピーして使う個人の経路なら3、指定空欄を埋める経路は2として区別する。</p>
<p>scoreの完成式は共通Referenceにあるが、今回の本編で通常表示されるか、どの時点で案内されるかは未確認。collision完成式の通常表示／Hint表示も不明。STARTの完成済みenemy2/3判定は常に参照できる。本文が存在しない以上、「完成式はHintだけ」「日本語から独立記述できる通常経路」とは断定しない。</p>
<p>LEVELの暫定集計は<strong>実STARTの編集束のみ</strong>：</p>
<table>
<thead>
<tr>
<th style="text-align:right">LEVEL</th>
<th style="text-align:right">MUST編集束</th>
<th>SHOULD追加</th>
<th>根拠・限界</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:right">0</td>
<td style="text-align:right">未集計</td>
<td>未確認</td>
<td>Rect・敵判定・初期値のREADコードは存在するが、授業のREAD課題束が不明</td>
</tr>
<tr>
<td style="text-align:right">1</td>
<td style="text-align:right">0</td>
<td>未確認</td>
<td>MUSTは単純な数値リテラル変更ではない。任意調整の実指定は不明</td>
</tr>
<tr>
<td style="text-align:right">2</td>
<td style="text-align:right">3</td>
<td>未確認</td>
<td>collision1束、score1束、再配置1束（x/yの2行を含む）</td>
</tr>
<tr>
<td style="text-align:right">3</td>
<td style="text-align:right">0（別経路はあり）</td>
<td>未確認</td>
<td>コピー転用は可能だが、実本編の要求としては未確認</td>
</tr>
<tr>
<td style="text-align:right">4</td>
<td style="text-align:right">0</td>
<td>未確認</td>
<td>STARTには日本語から全1行を生成する空の編集欄なし</td>
</tr>
<tr>
<td style="text-align:right">5</td>
<td style="text-align:right">0</td>
<td>未確認</td>
<td>取得ブロック全体を独立生成する指定は確認できない</td>
</tr>
<tr>
<td style="text-align:right">6</td>
<td style="text-align:right">0</td>
<td>未確認</td>
<td>新しい処理設計の通常課題は確認できない</td>
</tr>
</tbody>
</table>
<p>x/yは個別に意味・入力を検討するが、同じ固定IDの再配置課題を2束に増やして活動量を水増ししない。<strong>STARTの指定穴埋めの最高LEVELは2</strong>。Lesson全体のMUST Highest／SHOULD込みHighestは、本文の記述指示を確認するまで確定しない。</p>
<h3 id="74-startcompleteの到達上の問題">7.4 START→COMPLETEの到達上の問題</h3>
<p>メモリ内で実STARTの全5行を標準解へ置き換えて構文木を比較した。collision相手名・score右辺・randomの4引数を正しく埋めても、<strong>COMPLETEの構文木とは一致しない</strong>。差分はitem取得if内の基盤接続に限定される。</p>
<p>COMPLETEだけにある処理：</p>
<ul>
<li>score_textを現在のscoreで再生成する1行。</li>
<li>取得前のitem位置からitem_effect_x／item_effect_yを設定する2行。</li>
<li>item_effect_start_timeを取得時刻へ更新する1行。</li>
<li>item_get_soundを再生し、音声エラー時に無音へ戻すブロック。</li>
</ul>
<p>STARTにも文字・音の読み込みと描画側はあるが、取得イベントから上記へ接続するコードはない。「+100表示は既存SYSTEM」と評価することと、「STARTに接続まで揃っている」と判断することは別である。生徒の穴埋め完了だけを標準完成の成功条件にできない。</p>
<p>抽出した取得ブロックに模擬の判定・描画・音声処理を与えた確認では、穴埋め後は内部score=100・item再配置が成立しても、score_textはScore: 0、演出開始時刻は初期の−350、SE呼び出しなしだった。実COMPLETEではScore: 100、取得前位置(100,200)の中心x132を演出へ記録、時刻更新・SE呼び出しが成立した。これはPygame画面・実音声の動作確認ではなく、コードの接続確認である。</p>
<p><strong>段階実行にも注意</strong>：</p>
<ol>
<li>collision行だけを完成・コメント解除すると、ifの中身が空なのでIndentationErrorになる。既存START自体は構文上正常だが、最初の1課題を終えてすぐ試す経路はそのままでは成立しない。</li>
<li>collision＋scoreだけを解除した段階では、再配置されず重なり続ければ、更新ごとに加点される。画面表示も接続されていないため、その段階で「表示が100増えた」を確認できない。</li>
<li>再配置まで完成後も表示・+100演出・SEの基盤接続が必要。randomは同じ位置やplayerと重なる場所を選ぶこともあるので、1回の長い接触プレイの最終scoreだけで加点式を評価しない。</li>
</ol>
<p>この2段階の問題を、児童のスペル・インデントの失敗としてDebug時間へ計上しない。教材基盤と段階テストの設計上の課題である。今回はPython・教材・Guideを修正しない。別タスクでは、SYSTEM接続の用意と各WORK後の実行可能性を先に確認することを推奨する。</p>
<h3 id="75-行動分解の準備未算出の時間">7.5 行動分解の準備・未算出の時間</h3>
<p>以下はdocs/06と実コードに対応する<strong>監査対象行動の候補</strong>であり、存在しないSlidevのページ順・通常課題として断定しない。T＝講師主導、H＝思考、C＝入力・編集、O＝PC操作、W＝待ち。</p>
<table>
<thead>
<tr>
<th>設計上の活動</th>
<th>確認すべき生徒行動</th>
<th>分類</th>
</tr>
</thead>
<tbody>
<tr>
<td>START確認</td>
<td>ファイル・実行、敵接触はGame Over／itemは未取得を確認</td>
<td>O、短いT/W</td>
</tr>
<tr>
<td>敵との比較・Rect READ</td>
<td>player_rect／item_rectを読み、相手と接触後の結果の差を考える</td>
<td>T / H</td>
</tr>
<tr>
<td>collision</td>
<td>固定ID検索、相手選択、#解除・入力、内側の処理との接続を確認</td>
<td>O / H / C</td>
</tr>
<tr>
<td>score</td>
<td>今のscoreと100の加算・代入を考え、右辺を入力</td>
<td>H / C</td>
</tr>
<tr>
<td>再配置・random</td>
<td>x/y・範囲・実行時を選び、2行を補完</td>
<td>T / H / C</td>
</tr>
<tr>
<td>取得演出</td>
<td>+100・score表示・SEが取得時に動くことを確認</td>
<td>H。基盤入力は生徒負荷に含めない</td>
</tr>
<tr>
<td>Test / Debug</td>
<td>取得／非取得、加点、再配置、敵接触、Restartを確認。必要時の短い原因検討・修正</td>
<td>H / C / O</td>
</tr>
<tr>
<td>SHOULD調整</td>
<td>数値を選び、保存・実行・目的付き比較</td>
<td>H / C / O</td>
</tr>
<tr>
<td>Review / Reflect</td>
<td>各行を「接触→加点→再配置」へ対応し、説明・保存</td>
<td>T / H / O</td>
</tr>
</tbody>
</table>
<p>時間について確認できるのは計画値だけ：</p>
<table>
<thead>
<tr>
<th>docs/06の活動</th>
<th style="text-align:right">現行計画</th>
<th>速い／標準／遅い</th>
</tr>
</thead>
<tbody>
<tr>
<td>STARTを遊ぶ</td>
<td style="text-align:right">5分</td>
<td>未算出</td>
</tr>
<tr>
<td>前回との比較</td>
<td style="text-align:right">5分</td>
<td>未算出</td>
</tr>
<tr>
<td>item当たり判定</td>
<td style="text-align:right">10分</td>
<td>未算出</td>
</tr>
<tr>
<td>score加算</td>
<td style="text-align:right">10分</td>
<td>未算出</td>
</tr>
<tr>
<td>item再配置</td>
<td style="text-align:right">10〜15分</td>
<td>未算出</td>
</tr>
<tr>
<td>通しプレイ</td>
<td style="text-align:right">10分</td>
<td>未算出</td>
</tr>
<tr>
<td>デバッグ</td>
<td style="text-align:right">10分</td>
<td>未算出</td>
</tr>
<tr>
<td>バランス調整</td>
<td style="text-align:right">5分</td>
<td>未算出</td>
</tr>
<tr>
<td>振り返り・保存</td>
<td style="text-align:right">5分</td>
<td>未算出</td>
</tr>
<tr>
<td><strong>計</strong></td>
<td style="text-align:right"><strong>70〜75分</strong></td>
<td><strong>独立推定ではない</strong></td>
</tr>
</tbody>
</table>
<p>WORKの理解・入力・操作・Debug・結果確認の配分は、表示・Hint・段階テストの実手順がないため保留。全員が必ず失敗する仮定、入力文字数だけからの時間、基盤接続作業の生徒への押し付けで10分ずつを正当化しない。MUST中心が40分台前半かどうかも現状では判定できない。</p>
<p>Debug候補は相手名、scoreの更新、+と=、x/y、範囲、空白。通常想定は必要時の短い修正1回程度までとし、全員がAPI綴りを誤る前提にはしない。空のifと基盤欠落は個人のDebugとは別枠で先に解消を検討する。</p>
<h3 id="76-thinking-load5lesson比較">7.6 Thinking Load・5Lesson比較</h3>
<p>コード側で考えられること：collision対象の転用、現在scoreの保持と100加算、x/yの範囲選択、条件内に処理を置く意味。「当たる→増える→移る」の関係は新しい接続だが、5行すべての骨格が用意済みなので、処理まとまりを独立生成したとは扱わない。</p>
<p>randomは一般形・最小最大の意味を再確認し、初期item再配置例を参照する経路が妥当。yの最小60と最大screen_height−item_sizeは、敵のx例と同一ではない。これを選ぶ意味は説明できる足場を残し、綴り暗記を到達点にしない。scoreはAPIより既習Pythonの自力試行へ寄せる価値が高い。</p>
<p>通常表示・問い・Hintが不明なため、Thinking Loadの低／中／高やMonth9-1からの上昇は未判定。穴埋めだけなら独立判断は限定的、理由の説明・原因比較があるなら思考を補強できる、という条件付き評価に留める。</p>
<table>
<thead>
<tr>
<th>指標</th>
<th style="text-align:right">Month8-1</th>
<th style="text-align:right">Month8-2</th>
<th style="text-align:right">Month8-3</th>
<th style="text-align:right">Month9-1</th>
<th>Month9-2</th>
</tr>
</thead>
<tbody>
<tr>
<td>CORE標準</td>
<td style="text-align:right">55分</td>
<td style="text-align:right">54分</td>
<td style="text-align:right">51分</td>
<td style="text-align:right">53分</td>
<td>未算出</td>
</tr>
<tr>
<td>MUST中心</td>
<td style="text-align:right">41分</td>
<td style="text-align:right">43分</td>
<td style="text-align:right">37分</td>
<td style="text-align:right">51分</td>
<td>未算出</td>
</tr>
<tr>
<td>Active Coding</td>
<td style="text-align:right">11分</td>
<td style="text-align:right">約24分</td>
<td style="text-align:right">14分</td>
<td style="text-align:right">16.5分</td>
<td>未算出</td>
</tr>
<tr>
<td>入力・編集</td>
<td style="text-align:right">1.5分</td>
<td style="text-align:right">5.5分</td>
<td style="text-align:right">2.25分</td>
<td style="text-align:right">2.75分</td>
<td>未算出</td>
</tr>
<tr>
<td>Thinking</td>
<td style="text-align:right">22分</td>
<td style="text-align:right">約25分</td>
<td style="text-align:right">約25分</td>
<td style="text-align:right">約25分</td>
<td>未算出</td>
</tr>
<tr>
<td>MUST最高／SHOULD込み最高</td>
<td style="text-align:right">1 / 1</td>
<td style="text-align:right">3 / 3</td>
<td style="text-align:right">2 / 2</td>
<td style="text-align:right">3 / 3</td>
<td>Lesson全体は未確認。START編集は2</td>
</tr>
<tr>
<td>Teacher-led</td>
<td style="text-align:right">約33%</td>
<td style="text-align:right">約28%</td>
<td style="text-align:right">約32%</td>
<td style="text-align:right">約29%</td>
<td>未算出</td>
</tr>
<tr>
<td>OPTIONAL依存</td>
<td style="text-align:right">仕様上なし・運用リスク</td>
<td style="text-align:right">同左</td>
<td style="text-align:right">同左</td>
<td style="text-align:right">同左</td>
<td>本文・Challenge／Quiz未確認</td>
</tr>
</tbody>
</table>
<h3 id="77-自力記述候補改善a--b--c">7.7 自力記述候補・改善A / B / C</h3>
<p>候補の現在LEVELは実STARTの穴埋め経路。時間差は本編が未確認のため算出しない。空欄を消すだけでLEVELが上がるとは評価しない。</p>
<table>
<thead>
<tr>
<th>候補</th>
<th style="text-align:right">現在</th>
<th>変更後目標</th>
<th>増える思考</th>
<th>リスク・推奨</th>
</tr>
</thead>
<tbody>
<tr>
<td>A：item collision条件1行</td>
<td style="text-align:right">2</td>
<td>敵からの参考転用3。日本語から独立生成なら4</td>
<td>相手Rect・条件・ガードを選ぶ</td>
<td><strong>有力</strong>。API一般形と敵の例は参照可。丸写しは自立4ではない</td>
</tr>
<tr>
<td>B：score加算1行</td>
<td style="text-align:right">2</td>
<td>日本語から独立生成4</td>
<td>左辺・現在値・増分を1行へ組み立てる</td>
<td><strong>最優先</strong>。既習代入・加算で、新API暗記の負荷がない</td>
</tr>
<tr>
<td>C：item_x再配置1行</td>
<td style="text-align:right">2</td>
<td>一般形・既存例からの転用3。自立実績があれば4</td>
<td>横の位置・幅とサイズ・引数を接続</td>
<td><strong>支援付き候補</strong>。前回random未実施の生徒も含める</td>
</tr>
<tr>
<td>D：item_y再配置1行</td>
<td style="text-align:right">2</td>
<td>x／初期値例からの転用3</td>
<td>x→y、60・高さ・サイズの違い</td>
<td><strong>参考転用を推奨</strong>。一般形と範囲の意味を残す</td>
</tr>
<tr>
<td>E：取得処理全体</td>
<td style="text-align:right">2の3束</td>
<td>日本語から独立に複数行を構成できれば5。コピー・穴埋めは2〜3</td>
<td>条件・加点・座標2行の関係と空白</td>
<td><strong>一部試行に限定</strong>。基盤接続が必要な現状で全員白紙生成を要求しない</td>
</tr>
</tbody>
</table>
<p>優先順位はscore→collision→random→表示処理を推奨。ただし最後の表示処理は自立入力を増やす候補ではなく、SYSTEMとして正しく接続する確認を優先する。350msや+100文字の生成を生徒の実装LEVELへ追加しない。任意に加点量を変更する場合、固定の+100演出との整合も別途確認が必要である。</p>
<table>
<thead>
<tr>
<th>案</th>
<th>内容</th>
<th>判断</th>
</tr>
</thead>
<tbody>
<tr>
<td>A：現状維持</td>
<td>現STARTの穴埋め経路をそのまま使う</td>
<td>基盤接続と段階実行に未解決点があり、標準完成の到達経路としてそのまま採用は推奨しない。活動量判定とは別</td>
</tr>
<tr>
<td>B：自力記述・支援・検証調整</td>
<td>基盤接続・途中実行の手順を先に確認。collisionは参考転用、scoreは1行試行、randomは再参照、原因比較と処理説明</td>
<td><strong>コード側の第一候補</strong>。資料入手後に通常経路・支援量を照合する</td>
</tr>
<tr>
<td>C：Lesson内容変更</td>
<td>新ルールや追加機能で量を増やす</td>
<td>先にBと実教材の確認を行う。現時点で内容変更の必要性は判断しない</td>
</tr>
</tbody>
</table>
<p>成果物候補：「itemとの接触を調べる行→現在scoreに100を足す行→x/yを選び直す行」を自分のコードで指し、ゲームの結果へ対応させて説明する。演出は取得前の位置を記録する基盤であり、学習対象の5行へ混ぜて全部自力で作らせない。</p>
<p>比較候補は「scoreを100へ毎回戻す／今のscoreへ100を足す」「再配置が条件の外／中」。同じ完成例の再読・無目的な通しプレイと置換することを検討する。全員のファイルを意図的に壊さず、短い比較例と本人のコードの照合で行う。</p>
<p>B後の65〜70分・Active Coding25〜30分は<strong>未検証の希望値</strong>で、今回の計算結果ではない。実教材の重複・支援を確認できないため、追加時間や差引後合計を出さない。資料入手後に既存説明・入力・テスト・Reviewと置換できる分を差し引き、時間を改めて組み立てる。</p>
<p>推奨勾配は参考転用3を基準に、scoreの1行4を試し、余裕のある生徒だけ短い5を確認すること。APIとrandomの支援を残し、全員必須5へ改定しない。</p>
<h3 id="78-今回の確認次の監査">7.8 今回の確認・次の監査</h3>
<p>実施：</p>
<ul>
<li>本編・Notes・OPTIONALの所在検索、Slidev入口の公開範囲、仕様・Guideと実START／COMPLETEの照合。</li>
<li>両Pythonの構文解析・固定ID3件が各1件であることを確認。すべてメモリ内で標準穴埋めを補い、全完成コードとの差分が取得if内の基盤接続に限定されることを確認。</li>
<li>collisionだけ解除すると空のifで構文エラーになることをメモリ内で確認。全穴埋め後は構文上正常。</li>
<li>取得ブロックの模擬実行で、非接触／Game Over中は取得しないこと、内部加点・再配置と描画／演出／SE接続の差を確認。</li>
</ul>
<p>未実施：Month9-2の実本編・Notes・Hint・OPTIONALの読解、全COREの独立時間推定、児童理解・授業計時、Pygame本体起動・実音声、headless画面検証、Slidev build。不存在の教材を検証済みとは報告しない。</p>
<p><strong>次に必要なのはMonth9-2の残り監査</strong>：本編・Notes・Challenge／Quizのファイルまたは所在を確認し、通常表示とHint、段階実行・基盤の扱い、WORKの配分とMUST中心時間を確定する。その後にMonth9-3を同じ指標で監査する。</p>
<p>今回の更新は本書の対象案内・一覧・Month9-2部分監査章のみ。既存Month8-1〜Month9-1章、slides、Game、Lesson Python、assets、Notes、Guide、固定ID、カリキュラム・正式区分は変更しない。</p>
<h2 id="改善後試行監査">改善後試行監査</h2>
<p>2026-10-10。上記の監査値・提案・Month9-2部分監査は当時の履歴としてそのまま保持する。ここだけが別タスクで改修したMonth8-1〜Month9-1の試行仮説であり、実授業の計時・児童の理解検証ではない。定義は1節を再利用し、正式MUST／SHOULD／CHALLENGE・Levelはdocs/02から変更しない。Month9-2のPython／Slidevは今回変更しない。</p>
<h3 id="活動差分と標準配分">活動差分と標準配分</h3>
<table>
<thead>
<tr>
<th>Lesson</th>
<th>主な活動の置き換え</th>
<th>CORE活動配分（分、表示順）</th>
<th style="text-align:right">合計</th>
</tr>
</thead>
<tbody>
<tr>
<td>Month8-1</td>
<td>5か月の見通し、1設定の比較実験、2〜3人の短い共有</td>
<td>導入3＋Index1＋見通し5＋準備8＋遊ぶ・観察14＋共有5＋変数2＋設定変更3/3/4＋比較実験13＋Review1＋Reflect・共有6</td>
<td style="text-align:right">68</td>
</tr>
<tr>
<td>Month8-2</td>
<td>右の支援を残し、左1行・上下の最初の1行を試行。WORK後にy増減を比較</td>
<td>導入3＋Index1＋準備4＋座標4＋キー4＋右6＋左11＋上下14＋比較3＋画面端7＋調整3＋Review2＋Reflect4</td>
<td style="text-align:right">66</td>
</tr>
<tr>
<td>Month8-3</td>
<td>右辺穴埋めから行全体の試行へ。完成条件の事前提示を除き、毎回／条件時を比較</td>
<td>導入3＋Index1＋準備4＋座標3＋下移動12＋条件の材料4＋再配置10＋random説明4/転用6＋調整・試遊4＋比較3＋Review7＋Reflect4</td>
<td style="text-align:right">65</td>
</tr>
<tr>
<td>Month9-1</td>
<td>RectのREADを維持。敵1の2行試行、敵2参考転用、敵3の相手選択、判定と結果変更の比較</td>
<td>導入3＋Index1＋準備4＋Rect/接触4/4＋一般形3＋実Rect4＋敵1試行12＋R確認3＋敵2/3転用6/7＋比較3＋test8＋Review2＋Reflect4</td>
<td style="text-align:right">68</td>
</tr>
</tbody>
</table>
<p>新しい値を達成するための追加待ち・全文入力・API綴り暗記・エラーの強制・Quiz強制は置かない。完成式を隠すだけで時間が増えるとも仮定しない。</p>
<ul>
<li>Month8-1の実験13分は目標・設定・予想2、1回目の編集と結果比較4、次の値の選択と必要な検証4、6項目の短い記録3。設定は1つ、値・試行回数は生徒が選ぶ。Reflect6は記録を再利用して説明2、2〜3人の共有3、保存1。新たな全員の長い作文を追加しない。</li>
<li>Month8-2の左11は方向の予想・独立試行2、入力と参考照合3、左右の押す／離す比較3、原因確認と1行説明3。上下14は1方向の予想・試行3、ifへの転用3、反対への転用3、実行・対応説明5。初回の右は既存LEVEL2の足場と6分推定を維持する。</li>
<li>Month8-3の下移動12は既習との接続・予想2、1行試行・参考照合4、更新ごとの結果比較3、説明・短い修正3。再配置10は条件・代入試行4、段階Hintと照合2、再出現観察2、2行の対応説明2。単純な入力・保存だけに10分を置かない。</li>
<li>Month9-1の敵1は日本語から試す1、2行入力・支援4、接触／非接触比較3、原因・2行の説明4。敵2/3は相手選択・転用・個別確認。既に確認した接触を無目的に何度も繰り返す枠は足さず、test8は未確認の相手・Restart・短い原因検討と任意調整2を含む。</li>
</ul>
<h3 id="同じ指標での再推定">同じ指標での再推定</h3>
<table>
<thead>
<tr>
<th>指標</th>
<th style="text-align:right">Month8-1</th>
<th style="text-align:right">Month8-2</th>
<th style="text-align:right">Month8-3</th>
<th style="text-align:right">Month9-1</th>
</tr>
</thead>
<tbody>
<tr>
<td>CORE標準：旧→試行</td>
<td style="text-align:right">55→68分</td>
<td style="text-align:right">54→66分</td>
<td style="text-align:right">51→65分</td>
<td style="text-align:right">53→68分</td>
</tr>
<tr>
<td>速い生徒：旧→試行</td>
<td style="text-align:right">40→51分</td>
<td style="text-align:right">38→49分</td>
<td style="text-align:right">39→49分</td>
<td style="text-align:right">38→50分</td>
</tr>
<tr>
<td>MUST中心：旧→試行</td>
<td style="text-align:right">41→51分</td>
<td style="text-align:right">43→56分</td>
<td style="text-align:right">37→53分</td>
<td style="text-align:right">51→66分</td>
</tr>
<tr>
<td>Active Coding：旧→試行</td>
<td style="text-align:right">11→17分</td>
<td style="text-align:right">約24→約32分</td>
<td style="text-align:right">14→25分</td>
<td style="text-align:right">16.5→28.5分</td>
</tr>
<tr>
<td>入力・編集（Activeの内数）</td>
<td style="text-align:right">約2分</td>
<td style="text-align:right">約6.5分</td>
<td style="text-align:right">約3.25分</td>
<td style="text-align:right">約4分</td>
</tr>
<tr>
<td>Thinking：旧→試行</td>
<td style="text-align:right">22→約30分</td>
<td style="text-align:right">約25→約33分</td>
<td style="text-align:right">約25→約35分</td>
<td style="text-align:right">約25→約36分</td>
</tr>
<tr>
<td>通常経路の最高LEVEL</td>
<td style="text-align:right">1</td>
<td style="text-align:right">3（独立1行4の試行）</td>
<td style="text-align:right">3中心（独立1行4の試行）</td>
<td style="text-align:right">3中心（独立1行4／2行5の試行）</td>
</tr>
<tr>
<td>Teacher-led：旧→試行</td>
<td style="text-align:right">18/55≈33%→24/68≈35%</td>
<td style="text-align:right">15/54≈28%→17/66≈26%</td>
<td style="text-align:right">16.25/51≈32%→18.25/65≈28%</td>
<td style="text-align:right">約15.5/53≈29%→約17.5/68≈26%</td>
</tr>
<tr>
<td>説明のみ（共有を除く）</td>
<td style="text-align:right">約16/68≈24%</td>
<td style="text-align:right">約14/66≈21%</td>
<td style="text-align:right">約15.25/65≈23%</td>
<td style="text-align:right">約14.5/68≈21%</td>
</tr>
<tr>
<td>OPTIONAL依存</td>
<td style="text-align:right">不要</td>
<td style="text-align:right">不要</td>
<td style="text-align:right">不要</td>
<td style="text-align:right">不要</td>
</tr>
</tbody>
</table>
<p>ActiveとThinkingは重なる定義なので合計しない。コードの選択・編集・結果比較・原因検討をActiveに、説明と記録はThinkingに含めるが、紙だけの記録・ロードマップ・講師の解説をActiveへ加算しない。増分のActiveはM81の次値比較6、M82の独立試行・方向転用・原因比較約8、M83の1行・条件・再配置の選択と検証11、M91の条件／結果選択と相手転用・原因検討12。これらの増分も未実測であり、既存の確認を置き換えた分と重複して計上しない。</p>
<p>MUST中心経路は、M81で別設定の3＋4分を省略し実験13を前の1設定の短い検証3へ、M82で画面端7と調整3を省略、M83でrandom10と速度調整2を省略（必須試遊2は残す）、M91で任意調整2を省略した配分。random未実施を未達扱いしない。MUST中心の65分未満を理由にSHOULDやOPTIONALを必須へ上げない。</p>
<p>速いモデルは予想・検証・記録・説明を残した上で試行・探索・修正を短くした経路。51／49／49／50分は保証された最低授業時間ではなく、理解の早い児童がそれより早く終わる可能性を残す。早い場合は意味のある比較・説明・任意発展へ進め、全員の時計を合わせない。</p>
<h3 id="coding-levelと成果物の確認">Coding Levelと成果物の確認</h3>
<ul>
<li>Month8-1は数値選択LEVEL1のまま。成果物は目標・設定・予想・結果・次の値・理由の6項目。</li>
<li>Month8-2は右LEVEL2→左／上下の参考転用3。完成例前の座標1行を独立生成した場合だけ4実績。成果物は1方向のキー→座標→＋／−と自分の行。</li>
<li>Month8-3は旧2中心から参考転用3中心へ。下移動・条件・再配置各1行を先に独立生成した場合だけ4実績。randomは一般形・敵2実例を参考に3を狙うが、穴埋め支援経路は2と記録する。成果物はyを増やす→下を調べる→上へ戻す、自分の3行との対応。</li>
<li>Month9-1は旧敵1穴埋め2から2行試行へ。独立2行5、独立1行4、参考転用3、完成Hint支援2〜3を区別する。成果物はplayer_rect→相手Rect→colliderect／if→game_over=True。全員必須5ではない。</li>
</ul>
<h3 id="判定次の計時">判定・次の計時</h3>
<p>机上では4Lessonとも改善試行に必要な活動を持つ（ADEQUATE候補）。ただし実授業合格・全員65分以上とは判定しない。M81は導入・数値実験として軽く保ち、M82は右→左／上下で支援を減らし、M83は前回の座標更新を敵へ転用、M91はRectをREAD・if／代入を試行する勾配を確認した。</p>
<p>遅いモデルが追加試行で80分枠を超えるリスクは残る。SHOULDを早めに外し、30〜60秒の独立試行後はHint・参考転用で支援する。次の授業では各WORKの予想／入力／操作／比較／支援／説明を別々に計時し、Hint到達段階と独立生成の証拠を残す。標準60分未満なら説明を増やす前に成果物・比較・原因検討が実際に成立したかを再確認し、70分への水増しはしない。</p>
`},"20_instructional_design_principles":{html:`<h1 id="教材設計原則とtemplate-reference">教材設計原則とTemplate Reference</h1>
<p>教育設計・情報設計・自走性の正本。到達点と正式区分はdocs/24、Game1の詳細はdocs/01・02・06、Visual / Art Directionはdocs/14を参照する。UIのためにPython・固定ID・学習量を変更しない。</p>
<h2 id="1-教材と講師の責務">1. 教材と講師の責務</h2>
<p>スライド＋配布Pythonから、生徒が今することを読み取れる教材を目指す。講師の読み上げを操作手順の前提にしない。ただし講師を不要にする目的ではない。</p>
<ul>
<li>教材：目的、手順、編集場所、Hint、CHECK、Referenceを用意する。</li>
<li>講師：答えを先に言わず、考える時間を与える。理由を問い返し、理解確認・進度差支援・共有・誤概念の修正を担当する。</li>
<li>自力試行とReference利用は、どちらも成功経路。支援利用と機能到達を混同しない。</li>
<li>CHECKは生徒自身の終了判定。Optionalは時間埋めではなく、既習内容を読む・考える別経路。</li>
</ul>
<h2 id="2-self-guided-clarity">2. Self-guided clarity</h2>
<p>正式な品質軸とする。そのページの目的・理解対象、開くファイル、編集場所、入力／変更内容、実行方法、Hintの存在、成功条件、次へ進む判断、エラー時の参照先が、必要な場面で分かること。</p>
<p>全情報を常時表示して圧迫しない。本文はPrimary（主題・主作業）→Secondary（対応・理由）→Support（操作・調べる先）の関係を持つ。</p>
<p>自走教材では意味の異なるまとまりを視覚的に分け、文章の羅列にしない。同じ意味の本文を装飾的に多色化しない。表示規則はdocs/14の37節を参照する。</p>
<p>WORKの最小連鎖は <strong>目的 → 編集場所 → Action → Hint → 実行 → CHECK</strong>。画面上の編集順はH1 → Action → Target → Main。ファイル名・固定IDはTarget、完成判断はCHECKへ分離する。画面の教材コードとVS Codeで編集する実ファイルを混同させない。</p>
<p>コード記述課題では内容（WHAT＝何を書くか）だけでなく、挿入位置（WHERE＝どのblockの、どの行へ書くか）もScaffolding対象とする。必要最小限の周辺コードと横位置で示し、完成答えの提示とは分離する。講師の位置指示は補助であり、毎回の口頭指示を前提にしない。表示規則はdocs/14のCode Placement Contextへ集約する。</p>
<p>学習対象でないSYSTEMによって「コードを書く場所」の理解負荷を増やさない。同じWORK群のstudent-owned codeはStudent Edit Zoneとして連続配置し、基盤は前後またはSYSTEM helperへ退避する（コード設計の正本はdocs/05）。Code Placement Contextは、その実構造のWHAT／WHEREを示すもので、SYSTEMを避けながら書く課題や未習のhelper入力を追加しない。先にPythonの責務配置を整え、その後Slideを一致させる。</p>
<h2 id="3-共通レビュー">3. 共通レビュー</h2>
<table>
<thead>
<tr>
<th>テスト</th>
<th>判断すること</th>
<th>不合格例</th>
</tr>
</thead>
<tbody>
<tr>
<td>3秒</td>
<td>Page Type・Title・Main actionを瞬時に識別できる</td>
<td>全文が強く、主役が複数ある</td>
</tr>
<tr>
<td>Blur</td>
<td>文字を読まなくても主役・副情報・操作の階層が分かる</td>
<td>Target・Hint・装飾が作業より強い</td>
</tr>
<tr>
<td>Self-guided</td>
<td>このページだけで、小5が次の行動または理解対象を推測できる。記述課題はWHATとWHEREの両方が分かる</td>
<td>書く内容だけ示し挿入位置が不明、または実行・成功条件がない</td>
</tr>
</tbody>
</table>
<p>スクリーンショットと実操作からレビューする。制作者による小5視点の点検は、児童による理解検証・実授業の計時とは区別する。誤概念・技術的不一致は見栄えがよくても不合格。</p>
<h2 id="4-hintと介入">4. Hintと介入</h2>
<p>まず自力で考える → 必要ならHINT 1（方向）→ HINT 2（変数・対応）→ HINT 3／Final（最終支援）。講師は進行を見て段階利用を案内してよい。UIロック・待ち時間強制はしない。数値変更課題では固定の正解値を与えない。</p>
<p>Notesには必要なWORKだけ推奨タイミングを持つ。「まず自力」「手が止まったらH1」「試しても困るならH2」「最後に最終支援」のように進度基準にする。具体時間はLessonごとに調整する。生徒がFinalから見ることを技術的に禁止しない。</p>
<p>講師は操作説明の代読より、なぜその値・条件を選んだかを問う。CHECKに達した生徒は次へ。つまずき時にファイル・直前の編集・Referenceを一緒に確認する。</p>
<h2 id="5-page-typeと情報の責務">5. Page Typeと情報の責務</h2>
<ul>
<li>OVERVIEW：今日の目的と到達点を見る。INDEX：順序と行き先を探す。SETUP：開くファイルと操作を確認する。3種類を統合しない。</li>
<li>CONCEPT：概念と対応図。操作ルールを混ぜない。比喩は理解のためのイメージと示し、内部仕様の厳密なモデルとして教えない。</li>
<li>WORK：一つの変更・実装と observable CHECK。TUNE：設定を調整して前後を比較する。</li>
<li>PLAY：ゲームを遊び、動き・結果・違いを観察する。</li>
<li>REVIEW：既習の対応・一覧を確認する。REFLECT：振り返り・短い説明・保存。新課題にしない。</li>
<li>CHALLENGE：読む・考える発展。QUIZ：選んで理由を確認する。両方とも通常到達の必須追加にしない。</li>
</ul>
<p>Page Typeは「何をするか」、Priorityは「どこまで取り組むか」の別軸。公開Page Typeは上記11種類を維持する。Priorityは正式区分のあるWORK／TUNEと必要なREVIEW／REFLECT、発展のCHALLENGE／QUIZに限り、Header内へMUST／SHOULD／CHALLENGEだけを表示する。MUST＝そのLessonで必ず取り組む範囲、SHOULD＝時間・理解度に応じて取り組む範囲、CHALLENGE＝発展。公開CHALLENGEはdocs/24のOPTIONALに対応し、正式区分は変更しない。SETUP・PLAY・説明だけのページへ一律に付けず、同一ページの必須保存と追加共有を混同しない。</p>
<p>Typeの色はページ役割、Semantic colorは編集・操作・結果等の意味。別レイヤーとし、文字・アイコン・配置でも伝える。視覚値・Component規則はdocs/14へ集約する。</p>
<h2 id="6-month8-1の試行時間">6. Month8-1の試行時間</h2>
<p>旧Notesの実際の合計は68分。変数2分を、変数Concept4分＋コードの目印2分へ分ける。見通し5→4分、準備8→7分は目的と手順を整理して配分を移す。CORE14ページ・計70分、Optionalは別枠。実授業の実測ではない。Setupが長引いたらSHOULD・Optionalを省き、問い・結果確認・保存を残す。正式区分・Level1は変更しない。</p>
<h2 id="7-template-reference">7. Template Reference</h2>
<p>完成したMonth8-1を情報関係の参照とする。全Lessonで同じ見た目を複製する指定ではない。</p>
<table>
<thead>
<tr>
<th>役割</th>
<th>ページ / route</th>
<th>再利用する関係</th>
</tr>
</thead>
<tbody>
<tr>
<td>Navigation</td>
<td>p1 <code>month8-1</code> / p2 <code>month8-1-flow</code></td>
<td>実ゲーム＋到達点／本編と任意の行き先</td>
</tr>
<tr>
<td>Concept</td>
<td>p3 <code>month8-1-roadmap</code> / p7 <code>month8-1-variables</code></td>
<td>期間×制作の比較／比喩→実コード→意味</td>
</tr>
<tr>
<td>Setup</td>
<td>p4 <code>month8-1-setup</code> / p8 <code>month8-1-code-guide</code></td>
<td>通常操作とError／コメントの役割比較</td>
</tr>
<tr>
<td>Play</td>
<td>p5 <code>month8-1-play</code></td>
<td>実ゲームを主役、操作と観察対象を添える</td>
</tr>
<tr>
<td>Work</td>
<td>p9 <code>month8-1-player-speed</code></td>
<td>Action→Target→コード→Hint・実行→CHECK</td>
</tr>
<tr>
<td>Review</td>
<td>p6 <code>month8-1-rules</code> / p13 <code>month8-1-review</code></td>
<td>対象・条件・結果／ID・設定・初期値・変化</td>
</tr>
<tr>
<td>Reflect</td>
<td>p14 <code>month8-1-reflect</code></td>
<td>問い→変更と結果の記録→共有・保存→終端</td>
</tr>
<tr>
<td>Optional</td>
<td>O1 <code>month8-1-challenge</code> / O2 <code>month8-1-quiz</code></td>
<td>READのまとまり→ゲームの意味／選択→理由→retry</td>
</tr>
</tbody>
</table>
<p>次工程のMonth8-2はTemplate grammarへ適合させる。数値変更の画面を、条件・座標の記述課題へそのままコピーしない。</p>
<h2 id="8-講師研修の将来案">8. 講師研修の将来案</h2>
<p>今回は別の講師用デッキを作らない。Guideを運用正本とし、必要時に「教材の考え方 → Page Typeと視線誘導 → Self-guided clarity → Hint → 介入タイミング」の順で研修資料へ展開する。</p>
<h2 id="9-month8-1のself-guided点検">9. Month8-1のSelf-guided点検</h2>
<p>2026-10-12。全14 CORE＋2 Optionalを実描画し、制作者が小5視点で次の行動／理解対象を点検した。実際の児童の試用結果ではない。初回の10軸評価・検証はdocs/14の32節、追加規則と再確認は33〜34節。</p>
<table>
<thead>
<tr>
<th>ページ</th>
<th>本人が読み取ること／終了判断</th>
</tr>
</thead>
<tbody>
<tr>
<td>p1–2</td>
<td>使うゲーム・ファイル・到達点と、本編／任意の行き先</td>
</tr>
<tr>
<td>p3</td>
<td>今の月、各期間の制作、最後の改造・発表。GAME 2は未定</td>
</tr>
<tr>
<td>p4</td>
<td>ファイルを開く→保存→実行→停止→再実行、Error時のDEBUG、CHECK</td>
</tr>
<tr>
<td>p5–6</td>
<td>実ゲームで操作・対象を観察し、紙の記録を対象・条件・結果へ対応</td>
</tr>
<tr>
<td>p7–8</td>
<td>箱の比喩と代入の向き、実コメントのEDIT / READ / SYSTEM。操作と概念を分離</td>
</tr>
<tr>
<td>p9–11</td>
<td>固定IDで実ファイルへ移動、数字を選ぶ、Hint・実行・CHECK。後2枚は余裕があれば</td>
</tr>
<tr>
<td>p12–13</td>
<td>1設定の目標・予想・比較・次値の理由。初期値は配布時と自分の値を区別</td>
</tr>
<tr>
<td>p14</td>
<td>変更と結果を1組説明、記録・共有・保存、本編完了を判断</td>
</tr>
<tr>
<td>O1–2</td>
<td>書き換えずREADを考える／選択して理由を読む。retry可、全問必須でない</td>
</tr>
</tbody>
</table>
<p>自走性を理由に無支援を強制しない。困った時のReference・Hint・講師支援を残し、授業では誤解や操作停止を観察して次回の改訂へ戻す。</p>
<h2 id="10-追加テンプレートの情報責務">10. 追加テンプレートの情報責務</h2>
<p>最新の視覚値・Borderless・Entity／Semanticの色・Component仕様はdocs/14の33〜34節。ここは教育上の意味だけを持ち、Visual仕様を重複コピーしない。</p>
<ul>
<li>時間表示は生徒が実際に取り組むActivityの大まかな目安。説明・目次・一覧に機械的に出さない。生徒表示は丸め、Guide／Notesの詳細配分とCORE70分の試行仮説は維持する。丸め値を足して授業時間を再計算したり、締切にしない。</li>
<li>PriorityはPage Type・成功状態とは別の軸。Month8-1の敵速度・サイズは既存SHOULDのまま表示し、未実施をMUST未達扱いしない。講師は意味を短く案内し、Hint支援の段階運用を続ける。表示値はdocs/14へ集約する。</li>
<li>Process Diagramは思考順と視線順を揃える。番号→短い段階名→短い説明と具体例で、目標・予想・変更・比較・次の値を読む。例を全員の指定値にせず、設定・結果・次の値を選んだ理由の記録を残す。</li>
<li>Conceptでは比喩のラベルと実コードのtokenを対応させる。注釈には意味だけ、詳細説明や教師の問いはNotesへ。余白を埋めるためだけの下部コメント・問いは足さない。</li>
<li>Entityは対象の識別、Semanticは操作・変更・結果。対象色を成功／失敗の判定へ読み替えさせず、実sprite・名前と併用する。</li>
<li>Targetは「開くファイル」「検索方法→検索文字列」を示す。FILEはファイル名、Ctrl + Fの直後の矢印は実際に検索する固定IDへ続く。WORKのTargetにはEDITを挟まず「場所を探す」責務、直下のCode SurfaceのEDIT Badgeには「ここを編集する」責務を持たせる。</li>
<li>工程の説明は思考順と配置方向を一致させ、短い説明と例を区別する。図の領域を分けても、5つの独立課題へ読み替えさせない。箱のillustrationは「名前と中の値」を理解するためで、見た目の装飾・内部仕様の暗記課題にしない。</li>
</ul>
<p>Month8-1の参照ページ番号・routeは7節のまま。次Lessonも見た目の丸写しではなく、この情報責務と共通文法へ適合させる。</p>
<h2 id="11-補助navigation記入位置concept活動の責務">11. 補助Navigation・記入位置・Concept活動の責務</h2>
<ul>
<li>補助リンクは本文と見分けられ、何を調べる先かと元ページへの帰路が分かること。表示値・Surface・矢印はdocs/14の35節へ集約する。</li>
<li>Actionは「何を実現するか・考え方」、WRITE Slotは「何を書く位置か・行数」に責務を分ける。Slotに計算説明を重ねず、支援と完成形は既存Hintで扱う。</li>
<li>Conceptでも必要な生徒Activityを明示する。H1は理解対象、Key Messageは原則、問いは活動へ分離し、予想→比較→自分の既存コード確認の順を本人が追えるようにする。講師は答えを先に言わず理由・対応を確認する。</li>
<li>自走性の改善を理由に新しい課題・成果物・入力行・学習区分・時間を足さない。3秒／Blur／Self-guidedを実描画で点検し、児童理解の実証とは区別する。</li>
</ul>
<h2 id="12-既存lessonへの適用監査">12. 既存Lessonへの適用監査</h2>
<p>共通文法更新時は、docs/14の35節「共通文法のバックポート方針」に従って既存Lessonを監査する。統一そのものを目的にせず、学習上の責務・活動量・既存の明確さを維持して適用可否を判断する。</p>
<h2 id="13-全体説明から自走への切り替え">13. 全体説明から自走への切り替え</h2>
<p>一斉説明の後に各自作業へ切り替える授業形式では、自走開始地点を短いTransitionとして明示する。従来どおりSETUPを使い、新しいPage Typeを増やさない。次のページ、基本の作業順、完了条件とFinishへの経路、追加課題の省略可否を本人が読み取れるようにする。</p>
<p>Help Ladderは「自分で考える→Hint→AIに相談→先生に聞く」の手掛かりで、支援を受けるための強制順・我慢ルールではない。先生へはいつでも質問可。AIは教室の許可済み環境で使い、利用不可ならHint・先生で進む。AIへは自分の仮説を持ってから相談し、目的・試したこと・今の状態・自分の予想・聞きたいことを短く具体的に伝える。AIを正解判定機にせず、次の確認や考え方を相談する。5欄の作文や定型の依頼文を毎回必須にしない。一次回答をそのまま正解とみなさず、コードを読んで試し、実行結果で検証する。考える→AIに聞く→試す→確かめる→必要なら結果を伝えて再質問する。部分コードの意味・エラー相談と、完成版の丸投げを区別する。AI操作を新しいMUSTにせず、未実施の結果を相談例に合わせて作らせない。</p>
<p>自走ページのTeacher dependency auditでは、WHAT／WHERE／Hint／実行／CHECK／次のページ／帰路に、口頭説明が必須の箇所がないか調べる。必要な短い手順とReferenceへ移し、講義文やCardを増やさない。アカウント・利用許可・授業前の配布準備は講師の責務で、未準備でも代替経路を残す。全体説明の短さや自走時間を、自力記述量・到達Levelの実績と同一視しない。</p>
<p>適用は同じ授業形式が明示されたLessonだけ。既存Lessonへ一律に挿入せず、授業形式・密度・到達点を監査して判断する。Month9-3の具体的なPhase・AI教育・Pixnote・再配分はdocs/22、Visualは既存docs/14を参照する。</p>
<h2 id="14-reference--supportの責務">14. Reference / Supportの責務</h2>
<p>Referenceは既習・操作・API・困った症状を確認して作業へ戻る場所、Hintは今の問題への段階支援。授業本文の代わりや新しい必須課題にはしない。講師は答えを即教える前に適切なテーマを案内できるが、利用順の強制・支援の拒否はしない。症状を選び、1つ試し、困り続ける時はいつでも先生へ。</p>
<p>一つの参照テーマに説明の正本を置き、同じ解説をLesson・ツール別ページへ大量コピーしない。新しいリンクを追加する前に既存テーマ・統合可能性を確認し、inventoryと帰路を検査する。Game1の体系・保守・技術確認はdocs/23、視覚値はdocs/14へ分離する。</p>
<p>Referenceでは現在のカテゴリ・調べるテーマ・下に続くか・何を試すか・帰路を素早く拾えること。長い黒文字の連続を、意味の異なる短いまとまりへ分ける。スクロール案内を全文通読の指示にせず、必要な項目だけ読む従来運用を維持する。カテゴリ色・具体的な表示値はdocs/14へ集約する。</p>
<h2 id="15-講師資料の即時判断と詳細">15. 講師資料の即時判断と詳細</h2>
<p>講師資料は「Quick decision → Summary → Full detail」の3層で提供する。Quick BriefのAは目的・到達区分・NEW／TRANSFER・計画時間・完了、Bはつまずき・支援・進度差・次回の判断。Curriculum Deckは全期間の見通し、Guide／CanonicalのSummaryは文脈確認、Full Detailは運用と正式な順序・責務・区分・時間の根拠。通常はInstructor Home→授業Brief→Lesson／Presenterを使う。Brief／Deckを別原稿として管理せずGuide／docs24から抽出し、短い表示のためにSHOULDをMUSTへ変えない。Game2／Finalの計画を実装済みの教材と誤認させない。</p>
<p>Presenter Notesはページ固有の問い・観察・介入等を残す。必要な箇所だけ目的／講師が言うこと／見るポイント／困ったらへ整理し、Brief導入を理由に全Notesを改稿しない。Summaryで判断できることと、児童理解・実授業時間が実証されたことを区別する。表示規則はdocs/14、Webの生成と帰路はdocs/25。</p>
`},"21_month9-2_slidev_implementation":{html:`<h1 id="month9-2-slidev教材-実装記録">Month9-2 Slidev教材 実装記録</h1>
<p>2026-10-14。実START／COMPLETEを内容正本とし、docs/02・03・04・05・06、既存監査docs/18、最新Visual docs/14、活動責務docs/20を参照する。最新のPythonはStudent Edit Zoneへ責務配置を整理した。ゲーム仕様・学習ロジック・assets・固定ID・正式区分は変更しない。初回と局所Visual修正の検証記録は当時の履歴として保持する。</p>
<h2 id="構成と時間">構成と時間</h2>
<p>CORE14＋OPTIONAL2。正式授業枠は80分、全体Scheduleは<a href="/robot-python-game/instructor/guide/#この5か月で目指すこと">docs/24</a>。下表は説明・活動の目安で、P5を衝突式だけに絞った後は合計65〜73分。旧docs/06の70〜75分やitem条件10分枠は当初計画の来歴であり、現在の必須消費時間ではない。早く完了したら次へ進み、余りを新内容・待ち時間で埋めない。授業実測や独立した活動量監査ではない。OPTIONALを加算しない。正式MUST／SHOULDはdocs/02のまま、p12自力debug・バランス調整のSHOULDを省略可能。</p>
<table>
<thead>
<tr>
<th>p</th>
<th>route末尾</th>
<th>Type</th>
<th>学習責務</th>
<th style="text-align:right">Notes分</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>（なし）</td>
<td>OVERVIEW</td>
<td>item接触・加点・再配置の3段階</td>
<td style="text-align:right">1</td>
</tr>
<tr>
<td>2</td>
<td>flow</td>
<td>INDEX</td>
<td>本編／任意の行き先</td>
<td style="text-align:right">1</td>
</tr>
<tr>
<td>3</td>
<td>setup</td>
<td>SETUP</td>
<td>実START段階A・配布ファイル・R/再実行</td>
<td style="text-align:right">3</td>
</tr>
<tr>
<td>4</td>
<td>collision</td>
<td>CONCEPT</td>
<td>敵からitemへ相手のRectを転用</td>
<td style="text-align:right">5</td>
</tr>
<tr>
<td>5</td>
<td>item-work</td>
<td>WORK 01</td>
<td>[9-2-1] 固定の書き始め＋衝突式だけ転用、段階B</td>
<td style="text-align:right">5〜8</td>
</tr>
<tr>
<td>6</td>
<td>score</td>
<td>CONCEPT</td>
<td>現在の値→計算→次の値。完成式はまだ出さない</td>
<td style="text-align:right">3</td>
</tr>
<tr>
<td>7</td>
<td>score-work</td>
<td>WORK 02</td>
<td>[9-2-2] 日本語から加点1行、段階C</td>
<td style="text-align:right">7</td>
</tr>
<tr>
<td>8</td>
<td>random</td>
<td>CONCEPT</td>
<td>x/yの範囲と初期化例への再接続</td>
<td style="text-align:right">3</td>
</tr>
<tr>
<td>9</td>
<td>random-work</td>
<td>WORK 03</td>
<td>[9-2-3] x/y再配置2行、段階D</td>
<td style="text-align:right">7〜12</td>
</tr>
<tr>
<td>10</td>
<td>system</td>
<td>CONCEPT</td>
<td>自分＝ルール／SYSTEM＝表示・演出・途中実行を比較</td>
<td style="text-align:right">3</td>
</tr>
<tr>
<td>11</td>
<td>play</td>
<td>PLAY</td>
<td>連続取得・Game Over・R、段階D/E</td>
<td style="text-align:right">7</td>
</tr>
<tr>
<td>12</td>
<td>tune</td>
<td>TUNE</td>
<td>必要時の自力debug10分／速度調整5分（SHOULD）</td>
<td style="text-align:right">15</td>
</tr>
<tr>
<td>13</td>
<td>review</td>
<td>REVIEW</td>
<td>処理→コード→画面結果</td>
<td style="text-align:right">2</td>
</tr>
<tr>
<td>14</td>
<td>reflect</td>
<td>REFLECT</td>
<td>自分の条件・更新・位置を説明して保存</td>
<td style="text-align:right">3</td>
</tr>
<tr>
<td>O1/O2</td>
<td>challenge/quiz</td>
<td>OPTIONAL</td>
<td>更新の読解／8問の選択と理由</td>
<td style="text-align:right">別枠</td>
</tr>
</tbody>
</table>
<p>routeの接頭辞は <code>month9-2</code>。INDEXは左7／右7、CORE14/14で完了。Activityだけ既存TimeEstimateの丸め表示を使い、Concept／Reviewには時刻を出さない。P5は表示5分。p12を省く活動目安50〜58分も計画からの差し引きで、実授業の所要時間推定ではない。遅い生徒はSHOULD・OPTIONALを省き、機能完成・短い説明・保存を優先する。</p>
<h2 id="workhint段階実行">WORK・Hint・段階実行</h2>
<ul>
<li>collisionはLEVEL3の参考転用。考えて書くのは<code>player_rect.colliderect(item_rect)</code>だけ。<code>if not game_over and</code>と末尾の<code>:</code>はスライドの固定SYSTEM支援を写し、実STARTの<code>if False:</code>を1行で置換する。仮条件のため固定の書き始めも転記が必要と明示する。not／andは正式学習対象外で、論理演算の組み立て・一般文法・API暗記を要求しない。Final Hintは衝突式だけでCOMPLETEと一致する。</li>
<li>scoreは日本語からの独立1行をLEVEL4 targetとする。通常のConceptには200→200+100→300の数値例だけを示し、更新の完成式はWORKの最後のHintまで先に露出しない。独立1行が確認された時だけ4実績、Reference・Hint経路も機能到達の成功で、全員必須LEVEL4／5へ変更しない。</li>
<li>randomはLEVEL3転用。Month8-3ではSHOULDだったため全員が実装済みと仮定せず、初期化2行／Referenceを参照可。xは0〜screen_width−item_size、yは60〜screen_height−item_size。現在0〜736／60〜536で両端を含む。同じ座標の再選択も正常。</li>
<li>初期表示は実Student Edit ZoneのCode Placement Contextと短いWRITE位置。P7は完成済みif→内側のscore Slot、P9はif→既習score→同じindentのx/y Slot。学習行の途中にSYSTEM省略コメントは不要になった。周辺はREAD、記述対象だけRed。scoreの完成式はP7の通常表示に出さない。4段階Hintは方向→変数／対応→後半支援→完成形。scoreのH3も日本語計算の支援で、右辺穴埋めへ課題を戻さない。困り具合に応じて開き、完成形を先に読み上げず短い試行時間を取る。</li>
<li>FILE→検索操作→固定ID、編集はVS Code、RunCue、Reference、Observable CHECKを分離する。randomの2行を縮小・横切れさせないため、そのページだけHint808px／操作344pxへ配分。共通anchorと表示規則は維持する。</li>
</ul>
<table>
<thead>
<tr>
<th>段階</th>
<th>画面で確認すること</th>
</tr>
</thead>
<tbody>
<tr>
<td>A：START</td>
<td>playerと敵が動く。敵はGame Over、itemでは消えずscore0</td>
</tr>
<tr>
<td>B：collisionのみ</td>
<td>itemが消える。score0、＋100表示・取得SEなし</td>
</tr>
<tr>
<td>C：collision＋score</td>
<td>1回100点、表示・＋100・SE。itemは消え、連続加点なし</td>
</tr>
<tr>
<td>D：x/yも完成</td>
<td>再配置・連続取得、100→200→300、標準範囲</td>
</tr>
<tr>
<td>E：Game Over後R</td>
<td>score0、位置・演出開始時刻を戻して再開</td>
</tr>
</tbody>
</table>
<p>上表はdocs/04の従来名称。Student Edit Zone変更依頼のStage A＝従来B（衝突だけ）、Stage B＝従来C（加点まで）、Stage C＝従来D（再配置まで）に対応する。未編集STARTの挙動も維持する。</p>
<p>B/Cは再配置前のSYSTEMがitemを一時的に画面外へ置く。再確認は保存→ESC→▶（Game Over後ならRも可）。Dではrandomが同じ更新内で上書きし、一時位置は描画されない。複数回の得点確認をCのCHECKに要求しない。</p>
<p>表示更新・取得前の位置記録・350ms演出・SE・段階実行の一時処理はSYSTEM。P10は「自分＝接触・加点・x/y再配置」「SYSTEM＝表示・演出・途中実行」の2責務を比較する。完成4行は固定の書き始めを含むREAD抜粋で、暗記課題ではない。「scoreを100増やすのは、自分／SYSTEMのどちら？」を考えて担当を指す。新しい成果物・入力課題を足さず、基盤を生徒に実装させない。音なしfallbackも正常。</p>
<h2 id="visuallearning-review">Visual・Learning Review</h2>
<p>方向A「取得をつなぐ技術読解」を採用。既存日本語Sans＋mono、White約75%／図とDark Code約20%／アクセント約5%を目安とし、実描画で調整する。方向B「定点ゲームBefore/After」は実画面を大きく比較するがコードとの往復と完成答えの露出が弱点。方向C「大きな得点数字を主役にするEditorial」は動的な印象に強いが既存Templateと作業の主役が弱くなる。全案で意味色を保持し、Aへ統合せず選択する。</p>
<table>
<thead>
<tr>
<th>案</th>
<th>書体・色の面積</th>
<th>構図・素材・装飾の役割</th>
</tr>
</thead>
<tbody>
<tr>
<td>A（採用）</td>
<td>日本語Sans題名48／本文26、mono24。白75・図/暗いコード20・意味色5%目安</td>
<td>実spriteの対象比較→更新図→範囲→記述。RGB blurは端だけで既存Identityへつなぎ、図や操作を覆わない</td>
</tr>
<tr>
<td>B</td>
<td>同じSans題名48／本文24、mono22〜24。白45・実ゲーム50・意味色5%目安</td>
<td>固定倍率の取得前/後画面を中央に、細いコード列で対応。実画面は証拠、装飾は共通の端blurのみ。コードの読解・入力が従になりやすい</td>
</tr>
<tr>
<td>C</td>
<td>Sans題名48／本文24、大きなmono数字96。白70・大きな数字20・意味色10%目安</td>
<td>200→300を大胆なスケールと余白で主役化し、得点欄の拡大を対応させる。更新を印象付けるが、転用・記述と全体のrhythmが弱くなる</td>
</tr>
</tbody>
</table>
<ul>
<li>比較図・得点更新図・左上候補の範囲だけをBorderless Soft Zoneへまとめる。実spriteを再着色・cropしない。ItemはAmber、Player Blue／Enemy Red、API／概念Violet、scoreはidentifierでEntityにしない。</li>
<li>WRITEはSolid Red Badge、16% Red Slot＋<code>#FFECEC</code>、tokenは背景なしRed。Supporting Noteは短い見出し＋1〜2行、NavigationはBlue Surface＋↗。→は処理順、←は戻る操作。</li>
<li>collision Conceptにだけ必要な予想→比較→自分のREAD確認を置く。scoreは現在値の保持と更新、randomは正確な横／縦範囲に責務を絞り、再講義・新しいMUSTを増やさない。</li>
<li>Reviewは4行とSYSTEMを分け、代入自体が直接描画すると説明しない。Reflectは問い→自分のコード→短い記録・保存。Optionalは固定代入／更新のまとまり読解とQuiz8問で、Game1標準外の機能追加なし。</li>
<li>今回の局所修正でCode Placement Contextをdocs/14、WHAT／WHEREをdocs/20へ追加し、Guideへ同期。新しいArt Directionは探索せず、既存TemplateのDark SurfaceとWRITE色を維持する。</li>
</ul>
<h2 id="初回実装検証局所修正前の記録">初回実装・検証（局所修正前の記録）</h2>
<p>長いrandom Hintを持つWORKを代表にし、操作Metaの1文字折り返しを修正。7代表ページを1280×720／1024×768の全38状態で局所確認後、残りのページへ進めた。比較spriteの既存flex、Reviewの矢印重複・密度、範囲図Captionを調整し、文字を小さくして逃がさず再描画した。</p>
<p>PygameはSTART A/B/C/D・COMPLETEをassetsあり／fallbackで起動するメモリ内試験を実施。100→200→300、範囲、取得前の演出位置、R・ESCを確認。想定4行を補ったSTARTのASTはCOMPLETEと一致。実ファイルを変更せず検証する。</p>
<h3 id="最終レビュー">最終レビュー</h3>
<table>
<thead>
<tr>
<th>Skill評価軸（各5点）</th>
<th style="text-align:right">点</th>
<th>実描画の根拠</th>
</tr>
</thead>
<tbody>
<tr>
<td>Typography</td>
<td style="text-align:right">4</td>
<td>48px題名／26px Action／24px級コード／弱いMeta。長いrandom2行も縮めず表示</td>
</tr>
<tr>
<td>Composition</td>
<td style="text-align:right">4</td>
<td>対象比較・得点更新・左上範囲・入力・基盤担当・プレイ・一覧で構図を変える</td>
</tr>
<tr>
<td>Color</td>
<td style="text-align:right">4</td>
<td>Item Amberと操作Blue／WRITE Red／概念Violet／CHECK Greenを文字と併用</td>
</tr>
<tr>
<td>Visual Hierarchy</td>
<td style="text-align:right">4</td>
<td>主Action・書く位置、次にHint／実行、最後に画面のCHECKを識別</td>
</tr>
<tr>
<td>Imagery</td>
<td style="text-align:right">4</td>
<td>共通実sprite、64×64と800×600の正確な範囲、現在値と更新結果の図</td>
</tr>
<tr>
<td>Consistency</td>
<td style="text-align:right">5</td>
<td>共通anchor・Componentを継承。既存4Lesson全63画面は変更前と全ピクセル一致</td>
</tr>
<tr>
<td>Personality</td>
<td style="text-align:right">4</td>
<td>実ゲームのドット絵とTechnical／Editorialを継承し、汎用Cardの反復にしない</td>
</tr>
<tr>
<td>Usability</td>
<td style="text-align:right">4</td>
<td>3 IDと記入位置、4段階Hint、再実行・Reference・段階CHECK、可視のfocus</td>
</tr>
<tr>
<td>Fun / Playfulness</td>
<td style="text-align:right">4</td>
<td>自分の条件・加点・再配置で、次のitemを続けて取れる変化につながる</td>
</tr>
<tr>
<td>Page-to-page Rhythm</td>
<td style="text-align:right">4</td>
<td>転用→図→1行試行→範囲→2行転用→基盤→プレイ→一覧→記録→任意読解</td>
</tr>
</tbody>
</table>
<p>3秒：概念／作業と主役が識別できる。Blur：図・Code Surface・操作・CHECKの強弱が残る。Self-guided：本人がファイル・ID・記入位置・Hint・再実行・成功条件を追える。<strong>PASS（実描画の制作者レビュー）</strong>。児童による理解検証や教室投影の実証ではない。</p>
<h3 id="最終検証と限界">最終検証と限界</h3>
<ul>
<li>通常公開と<code>/course/</code>の1280×720／1366×768／1024×768／320×180で、16ページ＋全12 Hint＋開いたChallenge＋Quiz24選択肢＝53状態／サイズ、計424状態を撮影・検査。はみ出し・Hint/CHECK干渉・画像欠損・実行エラーなし。320は縮小構図だけ。</li>
<li>全16 INDEXリンク、全Hint、Quiz正誤・retry、keyboard/focus、本文scroll、Referenceアンカー・帰路・reload、前後ページ、Optional footerのy648／高さ40を確認。両パス・全16 Notes×4サイズ＝128表示で読み込みを確認し、Presenterの可視Reference往復はPC3サイズ、320は標準preview非表示のためDOM帰路のみ。PCは実マウスhover、320はtoolbarと分離したCSS状態を確認した。</li>
<li>教材一覧の新Lesson追加に伴うリンクの連続表示を1行ずつへ整理。局所変更後の最終buildでは入口と全16ページを4サイズ・両パスで追加確認し、Lessonの128表示は全状態検証時の画像と全ピクセル一致した。教材一覧以外の既存本文を変更しない。</li>
<li>headless PDF16ページを生成し、全ページをmacOS PDFKitでPNGへ再描画。原寸と縮小一覧で得点図・範囲・WRITE・CHECK・Reviewを確認。翻訳OFF、HTMLとPDFの言語はja-JP。PDFは既定表示で、閉じたHint／Quizスクロール全文はブラウザで別検証する。</li>
<li>通常／subpath build成功。既存の生成index.html通知、CSS minify警告2件と検証用outDir警告は残る。新規警告なし。直接URL reloadには既存READMEどおりSPA fallbackが必要。</li>
<li>3 WORK最終Hintの条件／代入ASTをCOMPLETEと照合。全4行を補ったSTART全体もAST一致。PygameのA/B/C/D・COMPLETEをassetsあり／なしで実行し、加点とScore表示のpixel、演出位置・random範囲・連続加点防止・3回Restart・ESCを確認。生徒のゲーム技能・実音声の検証ではない。</li>
<li>変更前96ファイルをSHA-256比較し、既存Game・全Lesson Python・assets・固定ID・正式カリキュラム・Month8／Month9-1本文は不変。既存4Lessonの63画面も変更前と全ピクセル一致。今回の追加はMonth9-2 Markdown／docs/21／Guideと、入口・許可済みReference帰路・opt-in layout/CSSだけ。新Component・Router・共通Rule追加なし、docs/14・20・既存実装docは変更しない。</li>
</ul>
<p>教室投影・児童理解・70〜75分の授業実測、実音声・Windows書体の確認は未実施。docs/18の古い部分監査は当時の履歴であり、今回の計画配分を独立監査済みの時間・活動量として読み替えない。</p>
<h2 id="p5p7p9p10-局所修正最終受入student-edit-zone以前の記録">P5／P7／P9／P10 局所修正・最終受入（Student Edit Zone以前の記録）</h2>
<p>2026-10-14。新Art Direction探索は行わず、既存TemplateのScaffoldingだけを修正。P9を代表として1280×720／1024×768から検証した。初回は周辺コードの増加で最終HintがCHECKに重なり、Usability 2／5で差し戻した。取得前記録の省略表示・既習score・SYSTEM位置・2 Slotへ絞り、24pxコードを保って再描画し解消した。P7は完成score式を初期表示せず、P5は式だけの4段階Hintへ変更。P10は責務比較と指すActivityに絞った。</p>
<h3 id="既存lesson監査と最小バックポート">既存Lesson監査と最小バックポート</h3>
<table>
<thead>
<tr>
<th>Lesson</th>
<th>判断／今回の変更</th>
</tr>
</thead>
<tbody>
<tr>
<td>Month8-1</td>
<td>既存tokenの数字変更でWHEREが明確。変更不要</td>
</tr>
<tr>
<td>Month8-2</td>
<td>右・左・画面端は既に周辺が明確で維持。上下WORKの2行目Slotだけ内側へ下げる</td>
</tr>
<tr>
<td>Month8-3</td>
<td>下判定WORKの2行目Slotを下げる。random WORKは既習if・上へ戻す行＋同じindentのSlotを表示。randomのSHOULDは不変</td>
</tr>
<tr>
<td>Month9-1</td>
<td>敵1/2/3 WORKの結果行Slotだけ内側へ下げる。課題・Hint・ガード支援・時間は不変</td>
</tr>
</tbody>
</table>
<p><code>CodeSlot</code>へ任意の行別indent指定を追加し、2行WRITEの5ページへ適用。残りのMonth8-3 randomは周辺READ＋既存のindent指定で対応した。最終Hintにも干渉を検出したため、補助Metaと局所余白を調整して解消。新Component・大きなLayout変更・学習量変更はしない。WRITE Slotに完成答えを追加しない。</p>
<h3 id="8軸評価実描画各5点">8軸評価（実描画・各5点）</h3>
<table>
<thead>
<tr>
<th>軸</th>
<th style="text-align:right">点</th>
<th>根拠／修正結果</th>
</tr>
</thead>
<tbody>
<tr>
<td>Typography</td>
<td style="text-align:right">4</td>
<td>H1／Action／24pxコード／17px補助Metaを分離。コードを縮小せず長いHintを保持</td>
</tr>
<tr>
<td>Composition</td>
<td style="text-align:right">4</td>
<td>ifと内側の記入位置を一つのDark Surfaceで結び、P10は左右の責務比較にする</td>
</tr>
<tr>
<td>Color</td>
<td style="text-align:right">4</td>
<td>周辺Neutral、WRITEのみ16% Red＋Warm White。Badge／Slot／既存tokenの役割を維持</td>
</tr>
<tr>
<td>Visual Hierarchy</td>
<td style="text-align:right">4</td>
<td>固定の書き始め・既習行より赤い式／行の記入位置が先に読める</td>
</tr>
<tr>
<td>Imagery</td>
<td style="text-align:right">4</td>
<td>実コードの順序・4空白の相対indentを位置関係として可視化。省略SYSTEMを明記</td>
</tr>
<tr>
<td>Consistency</td>
<td style="text-align:right">4</td>
<td>Target／Header／CHECKのanchor・Hint操作・既存Roleを維持。明確なページは変更しない</td>
</tr>
<tr>
<td>Personality</td>
<td style="text-align:right">4</td>
<td>既存Technical／EditorialのDark Codeと意味色を継承。入力欄やCard量産にしない</td>
</tr>
<tr>
<td>Usability</td>
<td style="text-align:right">4</td>
<td>初回のHint干渉を解消。WHAT／WHERE・写す固定部分・段階CHECK・実行をスライド単体で追える</td>
</tr>
</tbody>
</table>
<p>3秒は書く式／行、BlurはSurface内の作業領域と操作／CHECKの主従、Self-guidedはWHAT／WHEREと実STARTへの対応を実画像で確認。<strong>PASS（制作者による実描画点検）</strong>。児童試用・教室投影の検証とは区別する。</p>
<h3 id="最終検証">最終検証</h3>
<ul>
<li>対象4ページを1280×720／1366×768／1024×768／320×180、通常／<code>/course/</code>の両パスで全12 Hintを含め確認。最小バックポート6ページも通常buildで4サイズ・全Hintを確認。計248表示状態で実行エラー・はみ出し・Hint／CHECK干渉なし。320は縮小構図確認用。</li>
<li>両パスでINDEX16行き先、変更ページのReference帰路・reload・HintのEnter／focusを点検。Notesは1280で全16ページ、他3サイズで冒頭＋対象4ページ、計62表示を確認。P5は5〜8分、冒頭の総時間は65〜73分目安でGuideと一致する。</li>
<li>通常／subpath build成功。生成index.html通知・既存CSS minify警告2件・検証用outDir通知のみで、新規警告なし。今回は局所変更のため全既存ページのPDF再出力は実施しない。</li>
<li>P5最終Hintの衝突式、P7／P9の代入をCOMPLETEのASTと照合。メモリ内で固定prefix＋式と3代入を補うとSTART全体がCOMPLETEと一致。A/B/C/D・COMPLETEをassetsあり／fallbackで再試験し、100→200→300・範囲・演出位置・複数Restart・ESCを確認した。</li>
<li>変更前102ファイルのSHA-256でGame・全Lesson Python・assets・正式カリキュラムが不変。固定ID・完成ロジック・random範囲・Game Over仕様は維持。変更はSlidevの対象／最小バックポート・共通Slot/CSS、docs/14・20・21・Guideのみ。</li>
<li>変更不要と判断したMonth8-1の全3 WORK、Month8-2の右／左、Month8-3移動、Month9-1 READの7代表ページは、変更前の1280×720画像と全ピクセル一致。共通Slotの追加を理由に既存の明確な記入位置を変更しない。</li>
</ul>
<h2 id="student-edit-zoneへのpython責務配置変更">Student Edit ZoneへのPython責務配置変更</h2>
<p>2026-10-14。Python整理→自動動作試験→Slide最小同期→docs同期の順に実施。旧構造では記録・一時非表示がscore／randomの間に挟まり、学習行の記入位置とSlideにSYSTEM省略説明が必要だった。</p>
<h3 id="新構造と副作用">新構造と副作用</h3>
<ol>
<li>Zone前のSYSTEMがscoreとitemの旧x/yを記録し、一時位置を用意する。判定のitem_rectは変更前に生成済みの四角を使う。</li>
<li>Zoneは衝突条件→score加算→item_x→item_yを連続配置。学習ロジック・固定ID・明示的な代入をmain flowに残し、helperへ隠さない。STARTのコメント位置とCOMPLETEの学習行を同じ順で配置する。</li>
<li>Zone後の<code>update_item_pickup_feedback(new_score, previous_score, pickup_x, pickup_y)</code>が旧位置で演出位置を設定し、scoreが増えた時だけ文字画像・開始時刻・SEを更新する。既存のscore_text／item_effect_start_time／item_effect_x／item_effect_y／item_get_soundの5変数だけをglobalとして明示する。ゲームのscore・座標・collision・randomを書き換えず、helper定義に固定IDを置かない。</li>
<li>未取得時は後側SYSTEMのelseで旧位置へ戻す。未再配置の取得は一時位置のままとし、完成時は学生のrandomが同一更新内で置き直す。座標が変化したかどうかで完成判定しないので、同じrandom位置の再選択も正常。一時位置を描画しない。</li>
</ol>
<p>記録と段階実行は短い前後SYSTEMに残し、独立する表示・演出・SEだけを1 helperへまとめた。複雑な返り値や大量のglobal、状態class／list、新しいflagsを増やさない。helper・global・一時処理の内部を生徒の学習事項にしない。Restartに追加の永続状態を持ち込まず、従来の初期化を維持する。</p>
<h3 id="stage-abcと回帰試験">Stage A/B/Cと回帰試験</h3>
<table>
<thead>
<tr>
<th>状態（今回の依頼の名称）</th>
<th>結果</th>
</tr>
</thead>
<tbody>
<tr>
<td>未編集START</td>
<td>起動・移動・敵Game Over／R／ESC。itemは残りscore0</td>
</tr>
<tr>
<td>Stage A：衝突式だけ</td>
<td>itemは一時非表示、score0、取得SE・＋100なし。連続加点なし</td>
</tr>
<tr>
<td>Stage B：scoreも完成</td>
<td>1回100点、取得前の位置へ＋100・SE。itemは隠れて無限加点なし</td>
</tr>
<tr>
<td>Stage C：x/yも完成</td>
<td>標準random範囲で繰り返し取得、100→200→300、COMPLETE相当</td>
</tr>
</tbody>
</table>
<ul>
<li><code>python3 -B -m unittest discover -s tests -v</code>で9テスト全件成功。新規<code>tests/test_month9_2.py</code>は生徒配布外の開発テスト。変更前にはリポジトリ内のMonth9-2専用テストは存在しなかった。</li>
<li>完成入力を補ったSTART全体のASTがCOMPLETEと一致。Zone内はSYSTEMを挟まず、学習行3代入が連続し、helperが学習対象を変更・隠蔽しないことも検査する。</li>
<li>未編集・Stage A/B/C・COMPLETE、assetsあり／なし、取得・同時敵接触・Restart・演出期限・敵再出現の52旧／新シナリオ対で、ゲーム状態・画面全体pixel・演出領域pixel・SE呼び出しが一致。旧コードは検証用一時snapshotで比較し、製品側へ重複実装を置かない。</li>
<li>3回連続取得、同じrandom位置の再選択、敵1/2/3の接触優先、Game Over SEの重複防止、3回Restart、score0・位置・演出時刻の復元、350msの表示終了、音声デバイス／playエラーでの継続、ESCを確認。SDL dummyによる試験であり、音の聴感・Windows実機・60FPS実測ではない。</li>
<li>配布生成スクリプトは不変。別プロジェクトで実スクリプトを実行し、生成フォルダを移動した後もSTART／Stage Cを起動確認。実distも既存分を一時退避して再生成し、month9-2.pyがstart.pyと同一、同梱assets、固定ID、段階実行を確認。complete.pyは配布しない。</li>
</ul>
<h3 id="共通ruleと既存lesson監査">共通Ruleと既存Lesson監査</h3>
<p>Student Edit Zoneの正本はdocs/05、学習対象でないSYSTEMでWHEREの理解負荷を増やさない原則はdocs/20へ追加し、Guideへ同期。AGENTSは既存のdocs/05参照を使い、重複ルールを追加しない。新Visual Ruleは不要でdocs/14・共通CSS／Componentは変更しない。</p>
<table>
<thead>
<tr>
<th>既存Lesson</th>
<th>監査判断</th>
</tr>
</thead>
<tbody>
<tr>
<td>Month8-1</td>
<td>設定値の編集が連続し、非学習SYSTEMによる分断なし</td>
</tr>
<tr>
<td>Month8-2</td>
<td>左ifのpassは1行の起動保証。helper化は利益がなく、既存の記入位置・Slideを維持</td>
</tr>
<tr>
<td>Month8-3</td>
<td>間のenemy2/3は学習用READ参考で、非学習SYSTEMではない。移動はSlideとの対応変更を要するため見送る。randomのSHOULDは不変</td>
</tr>
<tr>
<td>Month9-1</td>
<td>敵1/2/3の条件・結果の記入群は既に連続し、演出は群の後。変更不要</td>
</tr>
</tbody>
</table>
<p>今回のPythonバックポートはなし。MASTER・他Lesson・assets・正式カリキュラム・学習内容は変更しない。</p>
<h3 id="slide最小同期とvisual点検">Slide最小同期とVisual点検</h3>
<p>P5は衝突式だけ考える前回方針、固定のnot／and支援、Hintを維持。P7はif→score Slot、P9はif→既習score→x/y Slotとなり、途中のSYSTEM省略コメントを削除。P10は連続4行をREADし、main flowのルールと演出helper／Zone前後SYSTEMの責務を確認する。SYSTEMのすべてをhelperへ移したとは説明しない。時間・課題・Hint・CHECK・固定ID・ページ構成は不変。</p>
<p>visual-design-directorの比較では、A＝現行文脈を簡略化、B＝学生／SYSTEMの左右比較、C＝コード全面表示を検討しAを採用。全案で既存日本語Sans／monoを使う。Aは48px H1／26px Action／24pxコード、White主体＋Dark／Red意味色、実Zoneを示すコード図、既存端RGB表現のみ。Bは同書体で二つの責務を並べるが、長い条件の幅と操作位置の変更が弱点。Cは大きなmonoとDark主体でZoneを主役にするが、既存ページ文法・Navigationとの整合と変更量が弱点。B/Cを混ぜず、新Art DirectionやVisual tokenは導入しない。</p>
<p>P9の実文脈・長い最終Hintを代表として1280×720／1024×768で先に描画後、他3ページへ同期した。</p>
<table>
<thead>
<tr>
<th>Skill軸（各5点）</th>
<th style="text-align:right">点</th>
<th>実描画の根拠／修正結果</th>
</tr>
</thead>
<tbody>
<tr>
<td>Typography</td>
<td style="text-align:right">4</td>
<td>既存H1／Action／24pxコードを維持し、SYS説明を削って縮小を避けた</td>
</tr>
<tr>
<td>Composition</td>
<td style="text-align:right">4</td>
<td>ifと内側の学習行・Slotが一つの連続したSurfaceで読める</td>
</tr>
<tr>
<td>Color</td>
<td style="text-align:right">4</td>
<td>READ Neutral・WRITE Red＋Warm White・操作Blue・CHECK Greenを維持</td>
</tr>
<tr>
<td>Visual Hierarchy</td>
<td style="text-align:right">4</td>
<td>既習行より赤い記入位置が主役。Target・Hint・実行・CHECKの優先度を維持</td>
</tr>
<tr>
<td>Imagery</td>
<td style="text-align:right">4</td>
<td>Student Edit Zoneの実順序と相対indentをコード図として正確に反映</td>
</tr>
<tr>
<td>Consistency</td>
<td style="text-align:right">4</td>
<td>既存layout・type・固定anchorを変えず4ページを実Pythonへ一致させる</td>
</tr>
<tr>
<td>Personality</td>
<td style="text-align:right">4</td>
<td>既存Technical／EditorialのCode Surfaceと意味色を維持し、新しいCardを増やさない</td>
</tr>
<tr>
<td>Usability</td>
<td style="text-align:right">4</td>
<td>WHAT／WHEREを直接追え、途中SYSTEMを避ける作業が不要。全Hint・帰路・CHECKの干渉なし</td>
</tr>
</tbody>
</table>
<p>判定は<strong>PASS（制作者による実描画点検）</strong>。3秒／Blur／Self-guided WHAT・WHEREを原寸・縮小画像で確認。児童試用・教室投影の実証ではない。</p>
<ul>
<li>通常／<code>/course/</code>でP5/P7/P9/P10と全12 Hintを4サイズ（1280×720／1024×768／1366×768／320×180）確認、計128状態でエラー・はみ出し・Hint／CHECK干渉なし。320は構図確認用。</li>
<li>INDEX16リンク、Reference帰路、reload、HintのEnter／focus、Notes62表示を確認。通常／subpath build成功、既存index.html通知・CSS minify警告2件・検証用outDir通知のみ。PDF全ページ回帰は実施しない。</li>
</ul>
`},"22_month9-3_slidev_implementation":{html:`<h1 id="month9-3-slidev実装">Month9-3 Slidev実装</h1>
<h2 id="現行版全体説明から自走へ2026-10-14">現行版：全体説明から自走へ（2026-10-14）</h2>
<p>初回14 CORE版のページ・時間・検証は下の「初回実装記録」に履歴として残す。現行は本節と最新版Slideを基準とする。Game 1正式仕様・Python学習範囲・既存固定ID・他Lesson本文は不変。</p>
<h3 id="phaseとページ順">Phaseとページ順</h3>
<table>
<thead>
<tr>
<th style="text-align:right">p</th>
<th>Phase</th>
<th>Type</th>
<th>内容</th>
<th style="text-align:right">分</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:right">1</td>
<td>A</td>
<td>OVERVIEW</td>
<td>目的と成果</td>
<td style="text-align:right">1</td>
</tr>
<tr>
<td style="text-align:right">2</td>
<td>A</td>
<td>INDEX</td>
<td>3 Phaseと行き先</td>
<td style="text-align:right">1</td>
</tr>
<tr>
<td style="text-align:right">3</td>
<td>A</td>
<td>PLAY</td>
<td>遊ぶ→感じる→変更目的1つ。旧OBSERVEを統合</td>
<td style="text-align:right">3</td>
</tr>
<tr>
<td style="text-align:right">4</td>
<td>A</td>
<td>CONCEPT</td>
<td>4対象の変更場所と画面変化、中央に参考ゲーム</td>
<td style="text-align:right">2</td>
</tr>
<tr>
<td style="text-align:right">5</td>
<td>A</td>
<td>CONCEPT</td>
<td>目的→変更場所</td>
<td style="text-align:right">1</td>
</tr>
<tr>
<td style="text-align:right">6</td>
<td>A</td>
<td>CONCEPT</td>
<td>目標→予想→変更→実行→比較→次</td>
<td style="text-align:right">2</td>
</tr>
<tr>
<td style="text-align:right">7</td>
<td>A</td>
<td>CONCEPT</td>
<td>AIは相談相手</td>
<td style="text-align:right">2</td>
</tr>
<tr>
<td style="text-align:right">8</td>
<td>A</td>
<td>CONCEPT</td>
<td>AI質問の4情報</td>
<td style="text-align:right">3</td>
</tr>
<tr>
<td style="text-align:right">9</td>
<td>B</td>
<td>SETUP</td>
<td>自走開始・作業順・Help Ladder</td>
<td style="text-align:right">1</td>
</tr>
<tr>
<td style="text-align:right">10</td>
<td>B</td>
<td>SETUP</td>
<td>コピーを作る</td>
<td style="text-align:right">4</td>
</tr>
<tr>
<td style="text-align:right">11</td>
<td>B</td>
<td>WORK01</td>
<td>Guided：player_speed</td>
<td style="text-align:right">10</td>
</tr>
<tr>
<td style="text-align:right">12</td>
<td>B</td>
<td>WORK02 +EXTRA</td>
<td>目的で次の改造を選ぶ</td>
<td style="text-align:right">15</td>
</tr>
<tr>
<td style="text-align:right">13</td>
<td>B</td>
<td>WORK03 +EXTRA</td>
<td>画像を変える</td>
<td style="text-align:right">15</td>
</tr>
<tr>
<td style="text-align:right">14</td>
<td>B</td>
<td>TUNE</td>
<td>遊ぶ→気づく→必要時1か所修正→再プレイ</td>
<td style="text-align:right">10</td>
</tr>
<tr>
<td style="text-align:right">15</td>
<td>C</td>
<td>REFLECT</td>
<td>3項目の30秒peer share・前後確認・保存</td>
<td style="text-align:right">5</td>
</tr>
</tbody>
</table>
<p>CORE15＋Reference新規1（Pixnote）＋OPTIONAL2（Challenge／Quiz）。Phase Aの一斉確認15分、Bの自走55分、CのFinish5分、計75分＋80分授業の5分バッファ。AI2枚計5分。今回依頼を優先しdocs/06の旧活動別配分を再配分した。到達点・正式MUST／SHOULD／CHALLENGEや授業総枠を変更するものではない。</p>
<p>時間・活動量の再点検：旧PLAY／OBSERVEとReview／Reflectの重複を統合し、相談姿勢5分・Transition1分を入れる。画像Reference・Pixnoteはp13の15分内で別加算しない。Choiceの選択・改造・比較を15分、画像15分、TUNE10分へ自走の再試行を確保。説明の短縮はコード対応・分析の省略ではなく、本人がMap・目的・既習コードを作業中に見返す運用へ移す。配布と環境準備済みという仮定。初回操作が長引く時はバッファ・SHOULD省略・講師支援で調整する。</p>
<p>Choice／画像を省く計画は45分。これも実測でない。自走55分＝55分のコーディングではなく、探索・予想・編集・画像・プレイ・相談・復旧を含む。数値編集操作はLevel1、転用・目的からの場所判断を狙う既存Level3／一部4と区別。全員に新構文・自由制作Level5・AI操作・自作絵を要求せず、時間埋めのOptionalや待ちを強制しない。</p>
<h3 id="art-directionと代表試作">Art Directionと代表試作</h3>
<p>対象は既習Pythonを持つ小5、個別PCと講師投影。最初15分の共有後、本人が次の行動・場所・支援・完了を追えることを主目標とする。教室距離・Windows書体・児童試用は未検証。</p>
<table>
<thead>
<tr>
<th>案</th>
<th>Typography・Color</th>
<th>構図・媒体・装飾</th>
<th>差別化／最大の弱点</th>
</tr>
</thead>
<tbody>
<tr>
<td>A 道筋のある既存Workshop</td>
<td>既存日本語Sans＋mono、H1 48／本文24–28／code24／Meta17–20。白75%、実画面・コード20%、意味色5%</td>
<td>既存anchor、工程、短い次リンク、実sprite。既存端RGBだけ</td>
<td>安心して既存教材と往復できる。追加の支援リンクの密度を検証する必要</td>
</tr>
<tr>
<td>B 参照できる作業ガイド</td>
<td>同書体・H1 48、作業26／補助22。白65%、Blue-gray Support30%、意味色5%</td>
<td>左に作業、右に支援・終了経路を固定した非対称Notebook。実コードと小さな図</td>
<td>個別PCの必要情報は探しやすいが、コード・画像の幅が狭く投影で主従が弱くなる</td>
</tr>
<tr>
<td>C 動き出す工房ポスター</td>
<td>同書体・大きなPhase番号96／見出し60／本文28。白60%、大きなBlue面30%、意味色10%</td>
<td>大sprite・大工程・非対称cropで自走開始を強調</td>
<td>開始の印象は強いが、既存Templateとの段差と支援内容の幅・継続制作が弱い</td>
</tr>
</tbody>
</table>
<p>Aを採用。B/Cを混ぜず、新しいPage Type・Router・Componentは作らない。代表は画像WORK（同名／別名・実sprite・復旧／Pixnote・CHECK）を先に実装。1280×720／1024×768で最初の発展リンクがCHECKと重なりComposition／Usabilityを3とした。補足余白・リンク配置を修正し再描画、その後AI2枚・Transition・Reference・Finishの6代表を局所確認。各軸を4として残りの順序・INDEX・Notesへ展開した。最後だけ全体PDF・4サイズ・両buildを確認する。</p>
<h3 id="ai教育と自走">AI教育と自走</h3>
<p>AI Page1は「聞いたあと、自分で読んで、変えて、動かす」。アイデア・意味・原因整理・次に試すこと・HintはOK、全ゲーム／全コードの完成版要求・全部書き直し・意味を確認せずコピー・毎回答えだけは避ける。コードを見せること自体を禁止しない。</p>
<p>Page2は目的→今の状態→試したこと→お願い。相談例は「元4から6を試し、今6で速すぎる」という一貫した状態とし、実測結果や指定解にしない。「答えのコードを全部書かず、ヒントを1つずつください」、エラーなら「完成コードではなく、最初に確認する場所を教えて」と短く提示する。</p>
<p>教室のAI利用方針がリポジトリにないため「AIチャット」の一般表現を使い、サービス名・新規アカウント・制限回避を案内しない。許可済み環境がなければHint・先生で進行可。必要なコード部分・エラーだけにして名前・パスワード等を外す。AIの回答も読んで実行・CHECKで照合。Month11/12の正式AI制作単元や到達点は前倒しで必須化しない。</p>
<p>Transitionは既存SETUPで「全体説明はここまで」を明示。10コピー→11Guided→14TUNE→15Finishを基本経路、11のCHECK後に12／13 EXTRAを選べる。Help Ladderは自分→Hint→AI→先生、ただし先生にはいつでも質問可。順序強制・我慢・無支援の要求ではない。</p>
<h3 id="teacher-dependency-audit">Teacher dependency audit</h3>
<table>
<thead>
<tr>
<th>自走ページ</th>
<th>口頭依存を外す対応</th>
</tr>
</thead>
<tbody>
<tr>
<td>コピー</td>
<td>pyとassetsを丸ごと複製、元は保全、フォルダ名だけ変更。複製／フォルダを開くReferenceとGuidedへの次リンク</td>
</tr>
<tr>
<td>Guided</td>
<td>検索文字列・赤い既存token・予想比較・全4 Hint・保存／再実行・CHECK。追加／省略→TUNEの経路</td>
</tr>
<tr>
<td>Choice</td>
<td>4候補のWHAT／WHERE／画面結果、取得見出しの特定、x範囲0〜736、任意例。画像／省略→TUNE</td>
</tr>
<tr>
<td>画像</td>
<td>コピー内の保存先・32px PNG・再実行・初心者の同名推奨・別名Reference・復旧／Pixnote・次リンク</td>
</tr>
<tr>
<td>TUNE</td>
<td>Playtestと必要時debugに限定、Reference3症状・Finishへの経路。全体まとめをしない</td>
</tr>
<tr>
<td>Finish</td>
<td>自分の目的→場所→実際の変化、前後記録・短い説明・保存。全候補一覧は再掲しない</td>
</tr>
</tbody>
</table>
<p>教室アカウントの許可、素材・配布・ツールの事前準備は講師責務として残す。AI・Pixnote不可でもHint・講師・既成画像の経路がある。スライドが講師を不要にするという意味ではない。</p>
<h3 id="画像pixnote">画像・Pixnote</h3>
<p>主題は「画像を変えて、見た目を変える」。同名置換は初心者推奨で必須条件ではない。source32×32／display64×64／PNG／透過と、元フォルダの保全は維持。変更範囲は生徒のコピー内のみ。</p>
<p>別名の発展例：assets/images/my_player.pngを置き、player_image_path =を検索して既存代入の引用符内だけを合わせる。enemy／itemも対応するpath変数。os.path.joinの一般学習・SYSTEM全体の編集・新loader実装を増やさない。同じ画像の別名読込を一時コピーとメモリ内のソースで試験し、実画像読込・状態・全画面pixel・SEが元と一致した。リポジトリのPython・assetsは変更しない。</p>
<p>Pixnote Referenceは<a href="https://pixnote.net/" target="_blank" rel="noopener noreferrer">公式入口</a>へ別タブで移動し、32×32→PNG→コピーのassets/images→再実行の5工程。新規アカウント・cloud保存・公開投稿を課題にしない。入口／公式PNG案内とheadless編集画面の表示を確認したが、PNG保存の外部実操作は未検証。特定button座標や架空UI画像を固定せず、講師が教室PCで事前確認する。Refは既存from帰路・scroll・headerを再利用し、filename区画と復旧を収録する。</p>
<h3 id="共通ruleと同期">共通Ruleと同期</h3>
<p>教育ルールはdocs/20の13節（全体説明→自走Transition、Teacher dependency audit、Help Ladder）へ最小追加、Guideへ同期。Visualは既存SETUP・横Process・Supporting Note・Navigation Surface・Code Roleを再利用し、docs/14は不変。既存5Lessonは今回のPhase授業運用が指定されていないため、Transitionの一律追加・本文バックポートはしない。Lesson固有の密度・到達点を尊重する。</p>
<h3 id="phase改修時の検証以下の局所修正前">Phase改修時の検証（以下の局所修正前）</h3>
<p>Phase改修時の受入を記録する。後続の局所修正の検証は次節を参照し、旧記録の状態数を新しい検証の実績にしない。</p>
<table>
<thead>
<tr>
<th>Skill軸（各5点）</th>
<th style="text-align:right">点</th>
<th>最新の実描画による根拠</th>
</tr>
</thead>
<tbody>
<tr>
<td>Typography</td>
<td style="text-align:right">4</td>
<td>H1・Key Message・本文・Metaを分離。INDEXのOptional短縮、画像補足の密度修正</td>
</tr>
<tr>
<td>Composition</td>
<td style="text-align:right">4</td>
<td>AIの対比→4工程→自走経路→画像尺度→自分の説明と、責務別に構図を変える</td>
</tr>
<tr>
<td>Color</td>
<td style="text-align:right">4</td>
<td>操作Blue、編集Red、CHECK Greenを維持。AIの非推奨を過大な警告面にしない</td>
</tr>
<tr>
<td>Visual Hierarchy</td>
<td style="text-align:right">4</td>
<td>画像の見た目変更が主、名前は補助。Transitionは作業順と次リンク、Finishは自分の変更を主役にする</td>
</tr>
<tr>
<td>Imagery</td>
<td style="text-align:right">4</td>
<td>実sprite・正確な32→64、実loaderの1文字列、質問と支援の工程。架空UI・After画面なし</td>
</tr>
<tr>
<td>Consistency</td>
<td style="text-align:right">4</td>
<td>SETUP／CONCEPT／WORK／REFLECT・共通anchorを再利用。Navigation矢印・EDITの役割を既存規則へ揃える</td>
</tr>
<tr>
<td>Personality</td>
<td style="text-align:right">4</td>
<td>既存Technical／Editorial Workshopを維持。図と実コードが主役で、装飾Cardを量産しない</td>
</tr>
<tr>
<td>Usability</td>
<td style="text-align:right">4</td>
<td>作業順・基本／追加・支援・次リンク・完了・帰路が追える。画像リンクのCHECK重なりを解消</td>
</tr>
</tbody>
</table>
<p>判定：<strong>PASS（制作者の実描画点検）</strong>。3秒はページ役割・主題・次の行動、Blurは編集Surface／図と支援の主従、Self-guidedはWHAT／WHERE／Hint／AI利用条件／CHECK／次の経路を点検。児童理解・教室投影の実証ではない。</p>
<ul>
<li>通常／<code>/course/</code>、1280×720・1366×768・1024×768・320×180。17ページ＋8 Hint＋Challenge解説＋Quiz24選択、各200状態・計400状態で本文欠け・画像欠損・Hint競合・実行時エラーなし。320は構図用で本文の可読性保証ではない。</li>
<li>Pixnote Referenceは両URL×4サイズ×top／filenameの16状態とbottomを撮影。縦scroll、横超過なし、hash、from帰路、別タブ・noopener、Navigation Surfaceを確認。外部リンクはクリック送信・公開・アカウント作成を検証に含めない。</li>
<li>Navigation／keyboard等136検査成功。INDEX各17リンク、Reference・DEBUG帰路、reload、未知の戻り先、HintのEnter／Space・Tab／focus、Quiz全選択の正誤・retry・本文scroll、Challenge開閉・帰路を確認。Presenter Notesは17×2＝34表示で時間・問い・ミス・MUST／SHOULD・省略方針を照合。</li>
<li>Source Notesを集計してA15／B55／C5分を確認。講師の読み上げが必須な箇所を短い手順・Reference・次リンクへ移し、準備の講師責務と代替経路は残す。自走時間をコーディング負荷の実績にしない。</li>
<li>通常／subpath build成功。既存index.html通知、CSS minify警告2件、検証outDir通知のみ。新依存・新Component・独自Routerなし。</li>
<li>日本語・翻訳OFFの専用headlessから17画面＋Reference3位置＝20画面をPDF印刷・結合。PDFKitで全ページを再描画し、AI・Transition・画像・Finish・filenameを原寸、全体を一覧で確認。Popplerと標準export用playwright-chromiumは未導入。静的PDFは確認用で、閉Hint・Quiz全文の配布物ではない。</li>
<li>既存5Lessonの代表WORK＋既定FinalのPNGは変更前とバイト一致。新共通教育Ruleの適用形式が未指定のため、本文への一律バックポートはなし。既存9 unittest成功。別名読込は一時コピーの実画像で状態・描画・SE一致を確認。</li>
<li>Python／MASTER／Game／全assets／既存Lesson本文／固定ID／正式docs01・02・06は変更前SHA-256と一致。docs/14は不変。実授業計時、児童試用、Windows投影・外部Pixnote PNG書出しは教室で追加確認する。</li>
</ul>
<h3 id="p4ai-2枚semantic-groupingの局所改善">P4・AI 2枚・Semantic groupingの局所改善</h3>
<p>2026-10-14。小5の投影／個別PC向け、既存構図・H1 48px／本文24px級・日本語Sans／monoを継承。学習内容・CORE15・Page順・75分＋buffer・Notes・AI利用方針は変更しない。</p>
<p>3案はA「既存構図の対応線＋意味別Soft Zone」、B「縦の相談Notebook」、C「大きなAIとゲームを主役にした非対称ポスター」。Aは白を主にMint／Rose／Violetを小さく役割へ割り当て、実ゲームと細いNeutral線を維持。Bは同書体・Blue-grayの片側帯と縦工程で自走を強めるが、既存の左右比較を崩す。Cは大きなVioletのAI・sprite crop・太い見出しで印象を強めるが、補足密度と既存Templateの連続性を損なう。局所改善の制約からAを採用し、B/Cは実装しない。新装飾・画像・Componentは追加しない。</p>
<ul>
<li>P7を先に代表試作。H1→自分で読んで変更・実行→Mint／Roseの対比→Blueのコード共有補足→Grayの利用条件。色だけで判断させず短見出しを残す。AIだけViolet、分類と同じbandにAI 1 / 2。</li>
<li>P4はPLAYER／ENEMY／ITEM／SCOREの4本を水平直線へ。説明群の実DOM中心は論理y109.15／287.15／109.15／265.65、SVGを109／287／109／266へ合わせる。画面の縁に着地し、説明端から16px空ける。2px Neutral #64748B、矢印なし。画像上の実sprite位置を測る注釈ではなく処理の対応、Captionの意味は維持。旧多段折れと独立した短い縦線を削除。</li>
<li>P8はCONCEPTのままAI 2 / 2、4Step維持。質問例を薄Violet、エラーの短見出しと本文・例をBlue Supporting Note、最下部はGray Meta。最初の修正ではMetaが下端へ寄ったためUsabilityを3とし、4Stepの既存min-heightと余白を局所整理して再描画した。文字縮小・内容削除では収めない。</li>
<li>P7〜15を描画監査。追加変更はP9のHelp LadderのkeywordのみBlue、AIのみViolet。P10のコピー対比、P12のChoice表、P13の簡単／発展のBlue見出し、P14の気づき／Navigation、P15の番号＋意味色は既に明確で変更しない。P11のWORKも維持。</li>
<li>共通表示規則はdocs/14の37節、教育上の1文はdocs/20の2節とGuideへ同期。Notesの文面・配分はそのまま。Guideは共通Ruleの参照だけ追加し、前回Phase改修の検証記録は履歴として残す。</li>
<li>既存5Lessonは適用可能性の監査のみ。CodeAnnotationは既存の実token中央起点、Supporting Note／番号／Roleは既に意味分け済み。Month8-1の実画像注釈、Month8-2／8-3のanchor、敵再配置の移動経路は空間の意味があり、単なる群のConnectorへ置換しない。本文バックポートなし。</li>
</ul>
<h4 id="局所修正の実描画レビュー">局所修正の実描画レビュー</h4>
<table>
<thead>
<tr>
<th>Skill軸（各5点）</th>
<th>P4 / P7 / P8</th>
<th>根拠・修正</th>
</tr>
</thead>
<tbody>
<tr>
<td>Typography</td>
<td>4 / 4 / 4</td>
<td>H1・Key Message・短見出し・Gray Metaの差、本文の既存サイズ維持</td>
</tr>
<tr>
<td>Composition</td>
<td>4 / 4 / 4</td>
<td>中央実ゲームへ4直線、対比から独立補足、質問工程からPromptの順</td>
</tr>
<tr>
<td>Color</td>
<td>4 / 4 / 4</td>
<td>EntityとNeutral線、Mint／RoseとBlue補足、VioletのAI／質問文を分離</td>
</tr>
<tr>
<td>Visual Hierarchy</td>
<td>4 / 4 / 4</td>
<td>sprite／codeが線より先、主題→2領域→補足→注意、4Stepと質問例の識別</td>
</tr>
<tr>
<td>Imagery</td>
<td>4 / 4 / 4</td>
<td>実ゲーム画像を維持、架空UIや無意味なアイコンなし、質問の意味を工程で示す</td>
</tr>
<tr>
<td>Consistency</td>
<td>4 / 4 / 4</td>
<td>既存Header／CONCEPT／Soft Zone／Supporting Note、AI 1/2→2/2同じband</td>
</tr>
<tr>
<td>Personality</td>
<td>4 / 4 / 4</td>
<td>White＋Technical Workshopを維持、警告Card／広告ポスターへ転換しない</td>
</tr>
<tr>
<td>Usability</td>
<td>4 / 4 / 4</td>
<td>線と文字の16px間隔、コード共有OKの独立補足、P8下部余白を修正</td>
</tr>
</tbody>
</table>
<p>判定：<strong>PASS（visually verified・制作者点検）</strong>。3秒＝対応／相談姿勢／質問情報、Blur＝ゲーム／2領域／4StepとPromptの主従、Self-guided＝変更場所の対応・相談と丸投げの違い・4情報と部分コード相談を点検。児童理解・教室投影の実測ではない。</p>
<ul>
<li>専用headlessでP4／P7／P8／P9を1280×720・1366×768・1024×768・320×180、通常／<code>/course/</code>の計32画面で確認。全16組の通常／subpath PNGがバイト一致。本文欠け・画像欠損・実行時エラーなし。320は構図確認で本文の可読性保証ではない。</li>
<li>Connectorは実DOM中心からの差0.36論理px以内、4本とも水平、説明と16px間隔、sprite・文字との交差なし。AI Seriesは分類と同じy72／32px band、既存Header／帰路に干渉なし。P8のMeta下端は論理y678で余白を確保。</li>
<li>通常／subpath build成功。既存のgenerated index.html通知・CSS minify警告2件と検証outDir通知のみ、新規警告・依存追加なし。局所変更のため全PDFは再出力しない。</li>
<li>Game／MASTER／Lesson Python／assets／他Lesson本文／Reference／layoutなど50ファイルは変更前SHA-256と一致。実装変更はMonth9-3本文と同Lessonにscopeした共通CSSのみ。Notes・CORE15・順序・時間・AI利用ルールの意味は不変。バックポートは監査のみ。</li>
</ul>
<h3 id="p4-box-mapp15の30秒共有最新局所調整">P4 Box Map・P15の30秒共有（最新局所調整）</h3>
<p>2026-10-14。P4／P15のみ。CORE15・順序・時間・Python・固定ID・AI2枚・その他本文は維持する。既習の改造対象を確認し、自分の変更を短く人へ伝える責務を明示する。小5の投影／個別PC向け、実授業距離・児童試用は未検証。</p>
<p>既存Identity内の比較：A「中央の参考画像＋周囲4対象」、B「対象の縦一覧＋右の参照画像」、C「大spriteを中心にした非対称ポスター」。全案で既存日本語Sans／mono・対象色を維持。AはH1 48・対象24・本文22、白／Neutral約75%＋薄い対象面と実画像、border／shadowなし。Bは一覧性があるが現在の4対象の空間対応を変える。Cは対象認識が強いが、code幅と学習内容の対比が従属する。局所制約からAのみ採用、他案の構図・装飾を混ぜない。</p>
<ul>
<li>Stage1はP4を先に代表試作。H1「どこを変えると、何が変わる？」、Key Messageは変更できるplayer／enemy／itemと、維持するscoreを区別。4対象を356×180のborderless Soft Zone（radius5、padding16／20）へ。spriteと名前・速さ／姿／横位置の実変数・画像名、画面での変化を対応させる。</li>
<li>PLAYERはBlue/Cyan、ENEMYはRed、ITEMはAmber、SCOREはNeutral＋Blue identifierとREAD。scoreは変更課題にせず100点を維持、Score: 0は表示例。中央は320×240の実画面を参考として維持し、Connectorを全削除。GAME OVERの意味はそのまま、下部のREAD／Metaを弱くする。</li>
<li>初回P4では補足がBox下端に寄ったためUsabilityを3とし、h2余白・本文行間・smallのblock配置を整理して再描画。本文文字サイズを縮めず、底面の内余白を確保した。</li>
<li>Stage2はP15。H1「自分の改造を、30秒で伝える」。左は「こうしたかった→ここを変えた→こう変わった」の3項目、右は「話す前に確認」の前後／予想／主な変化と短い話し方例。紙の比較記録を維持。共有後のCtrl+Sと元ゲーム／自分のコピー保全を明示。</li>
<li>P15初回は右補足の高さが増え、保存行とOptional帰路が近づいたためComposition／Usabilityを3とした。右側padding・行間、grid下と保存行前の余白を調整。margin相殺も実DOMで確認し、文字サイズ・帰路・左3Stepを維持して再描画する。</li>
<li>Notes／GuideはMonth9-3固有運用として同期。隣の人・ペア推奨、小グループ3〜4人も可、1人30秒・3項目のみ・全員前に出る必要なし。準備1〜2分→30秒×2人→保存で既存5分を使う計画で実測ではない。余裕時のみ数名共有、全員全体発表を5分に詰めない。REFLECTのまま、新Type・新しい到達条件・他Lesson共通規則にしない。</li>
<li>docs/14・20は変更しない。既存Soft Zone・Entity・Supporting Noteを使う局所実装で、新共通Ruleは追加しない。前節のConnector版は修正履歴。</li>
</ul>
<table>
<thead>
<tr>
<th>Skill軸（各5点）</th>
<th>P4 / P15</th>
<th>実描画の根拠・修正</th>
</tr>
</thead>
<tbody>
<tr>
<td>Typography</td>
<td>4 / 4</td>
<td>短いH1、対象名／実code／補足、3項目／確認／話し方例の階層</td>
</tr>
<tr>
<td>Composition</td>
<td>4 / 4</td>
<td>4対象を領域化し参考画像を小さく維持、左3Stepと右準備・下部保存を分離</td>
</tr>
<tr>
<td>Color</td>
<td>4 / 4</td>
<td>実sprite＋Entity名を併記、SCOREはNeutral＋Blue、共有の番号色を維持</td>
</tr>
<tr>
<td>Visual Hierarchy</td>
<td>4 / 4</td>
<td>改造対象が先、中央画像は参考。共有内容が主、話す前の確認は補助</td>
</tr>
<tr>
<td>Imagery</td>
<td>4 / 4</td>
<td>実Game画像・sprite・Score表示例、無関係な装飾や架空UIなし</td>
</tr>
<tr>
<td>Consistency</td>
<td>4 / 4</td>
<td>既存CONCEPT／REFLECT・Soft Zone・Role・Time・Optional帰路を再利用</td>
</tr>
<tr>
<td>Personality</td>
<td>4 / 4</td>
<td>RGB Technical Workshopを維持。枠・shadow・巨大角丸Cardなし</td>
</tr>
<tr>
<td>Usability</td>
<td>4 / 4</td>
<td>4領域の内余白を修正、30秒で話す3内容・共有後保存・帰路を識別</td>
</tr>
</tbody>
</table>
<p>判定：<strong>PASS（visually verified・制作者点検）</strong>。3秒は4対象／30秒共有、Blurは4領域と参考画像／左の発表構造と右の準備、Self-guidedは変更場所と画面変化／目的・場所・実結果の話す順と保存を点検。児童試用・教室投影・5分成立の実測ではない。</p>
<ul>
<li>専用headlessで1280×720・1366×768・1024×768・320×180、P4／P15を通常／<code>/course/</code>の計16画面で確認。全8組の通常／subpath PNGはバイト一致。文字欠け・画像欠損・実行時エラーなし。320は構図確認で本文の可読性保証ではない。</li>
<li>4Boxの補足は15px以上の底面余白内に収まり、Connectorなし。P15保存行下端y624／Optional帰路上端y632、8pxの間隔を実DOMで確認。Type REFLECT・5 minを維持。</li>
<li>通常／subpath build成功。既存generated index.html通知・CSS minify警告2件と検証outDir通知のみ。PresenterのP15 Notesは両URLで5分・準備・30秒×2人・小グループ・全員登壇不要・余裕時数名共有の文面を確認。全PDFは局所変更のため再出力せず、対象のheadless renderを確認した。</li>
<li>変更前比較で、P4／P15以外の15ページ本文は完全一致、Page順・CORE15・Notes合計75分は維持。Game／MASTER／Lesson Python／assets／他Lesson本文／Reference／layout／docs14・20など52ファイルはSHA-256一致。実装はMonth9-3本文と対象だけのCSS、運用記録は本節とGuideのMonth9-3共有方針だけを更新。新共通Rule・新Page Type・新固定IDはない。</li>
</ul>
<h2 id="初回実装記録旧14-core版以下は履歴">初回実装記録（旧14 CORE版・以下は履歴）</h2>
<h2 id="設計の正本と範囲">設計の正本と範囲</h2>
<p>docs/01・02・04・06の最終Game 1改造回を具体化する。正式区分・カリキュラム・Python・MASTER・assets仕様は変更しない。Visualはdocs/14、教育設計はdocs/20、直前のStudent Edit Zoneはdocs/21を参照。</p>
<p>対象は平均的な小5、Python基礎既習・VS Code初学、各自PCと講師投影。教室距離・児童試用は未検証。見る＝ゲームと対応MAP、比べる＝変更前後、する＝自分の目的で1か所変更、残す＝場所と結果を説明。新構文を必須化しない。</p>
<h2 id="art-direction比較">Art Direction比較</h2>
<table>
<thead>
<tr>
<th>案</th>
<th>Typography／Color</th>
<th>Composition・Imagery・Decoration</th>
<th>強み／最大の弱点</th>
</tr>
</thead>
<tbody>
<tr>
<td>A 実ゲーム中心の改造MAP</td>
<td>既存日本語Sans＋mono。H1 48／本文26／code24。白70〜75%、実画面・暗いコード20〜25%、意味色5%</td>
<td>中央4:3実ゲーム＋周囲の対象、横工程、コンパクトChoice行。既存端RGB blurのみ</td>
<td>既存Templateの探す→変更→確認へ自然に接続。密度の高いChoiceは行と支援の競合を検証する必要</td>
</tr>
<tr>
<td>B 改造の実験ノート</td>
<td>同書体、Before/Afterを同格32px、本文26。白65%、左右Blue/Neutralの面30%、意味色5%</td>
<td>左右対称の比較を主役、実画面2枚と記録。細いDividerが実験の区切り</td>
<td>結果比較は強いが、序盤のコード全体MAPと長い検索場所の幅が弱い</td>
</tr>
<tr>
<td>C 改造ポスター</td>
<td>大きな日本語display＋96px級mono、本文28。暗い面60%、白30%、対象色10%</td>
<td>大spriteと一つの設定を全面に。巨大数値・非対称cropで変化を表す</td>
<td>印象は強いが、既存操作anchorとの整合・投影と個別PCの両立・継続制作が弱い</td>
</tr>
</tbody>
</table>
<p>Aを採用。B/Cと混ぜない。既存の日本語・code書体、SemanticとEntityの分離、色以外のラベル、Navigationを維持する。素材は実Game 1参考画面と実sprite。偽の改造後写真は作らない。</p>
<h2 id="ページ活動計画">ページ・活動計画</h2>
<table>
<thead>
<tr>
<th style="text-align:right">p</th>
<th>Type</th>
<th>活動</th>
<th style="text-align:right">分</th>
<th>区分</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:right">1</td>
<td>OVERVIEW</td>
<td>最終ゲームの目的</td>
<td style="text-align:right">1</td>
<td>MUST</td>
</tr>
<tr>
<td style="text-align:right">2</td>
<td>INDEX</td>
<td>本編と任意の行き先</td>
<td style="text-align:right">1</td>
<td>MUST</td>
</tr>
<tr>
<td style="text-align:right">3</td>
<td>PLAY</td>
<td>完成ゲームを再プレイ</td>
<td style="text-align:right">5</td>
<td>MUST</td>
</tr>
<tr>
<td style="text-align:right">4</td>
<td>OBSERVE</td>
<td>Month8-1の分析を再確認</td>
<td style="text-align:right">8</td>
<td>MUST</td>
</tr>
<tr>
<td style="text-align:right">5</td>
<td>CONCEPT</td>
<td>実ゲームと処理MAP</td>
<td style="text-align:right">8</td>
<td>MUST</td>
</tr>
<tr>
<td style="text-align:right">6</td>
<td>SETUP</td>
<td>配布フォルダを丸ごと複製</td>
<td style="text-align:right">5</td>
<td>MUST</td>
</tr>
<tr>
<td style="text-align:right">7</td>
<td>CONCEPT</td>
<td>目的→場所→変化</td>
<td style="text-align:right">3</td>
<td>MUST</td>
</tr>
<tr>
<td style="text-align:right">8</td>
<td>CONCEPT</td>
<td>目標→予想→変更→実行→比較→次</td>
<td style="text-align:right">4</td>
<td>MUST</td>
</tr>
<tr>
<td style="text-align:right">9</td>
<td>WORK 01</td>
<td>player_speedを1か所変更</td>
<td style="text-align:right">10</td>
<td>MUST</td>
</tr>
<tr>
<td style="text-align:right">10</td>
<td>WORK 02 +EXTRA</td>
<td>目的で次の変更を選ぶ</td>
<td style="text-align:right">10</td>
<td>SHOULD</td>
</tr>
<tr>
<td style="text-align:right">11</td>
<td>WORK 03 +EXTRA</td>
<td>PNGを1つ差し替える</td>
<td style="text-align:right">10</td>
<td>SHOULD</td>
</tr>
<tr>
<td style="text-align:right">12</td>
<td>TUNE</td>
<td>遊ぶ→気づく→1つ直す→再プレイ</td>
<td style="text-align:right">5</td>
<td>MUST確認／任意調整</td>
</tr>
<tr>
<td style="text-align:right">13</td>
<td>REVIEW</td>
<td>目的・変更場所・画面結果の対応</td>
<td style="text-align:right">2</td>
<td>MUST</td>
</tr>
<tr>
<td style="text-align:right">14</td>
<td>REFLECT</td>
<td>短い説明・記録・保存</td>
<td style="text-align:right">3</td>
<td>MUST</td>
</tr>
<tr>
<td style="text-align:right">O1/O2</td>
<td>CHALLENGE／QUIZ</td>
<td>既習変更の組合せ／どこを変えるか</td>
<td style="text-align:right">別枠</td>
<td>OPTIONAL</td>
</tr>
</tbody>
</table>
<p>75分＋80分授業の5分バッファ。docs/06の各枠の上限に対応：試遊5、Month8-1再確認10（1+1+8）、対応15（8+3+4）、複製5、選択5（p10前半）、制作25（p9 10+p10後半5+p11 10）、テスト5、共有5（2+3）。実測・活動量の独立監査ではない。追加を省く計画は55分。待ちやOPTIONALで80分を強制しない。</p>
<p>Level3の転用・一部Level4の日本語目的からの場所判断を狙うが、数字変更の操作自体は監査Level1。自由制作Level5・自力複数行・新APIを全員へ課さない。</p>
<h2 id="安全な改造とscaffolding">安全な改造とScaffolding</h2>
<ul>
<li>Guided：player_speed。任意の小さな正整数を選び、元の値・予想・結果を記録する。</li>
<li>Choice：enemy_speed、取得後item_xのminimum、player.png、enemy.png。minimumの最大は標準736以下、例128。初回／Restartのitem位置は変更しない。</li>
<li>scoreは標準100点のREADに留める。加算だけ変えると固定＋100表示と不一致。サイズも32source／64display標準を維持し、必須改造にはしない。</li>
<li>設定は既に上部の連続LEARNED領域。itemは1token変更で、固有の「アイテム取得・スコア・再配置」見出しと周辺行を示す。SYSTEMの探索・改造は課題にせず、Pythonの再配置は不要。</li>
<li>Month9-3は探索回で既存固定IDなし。新IDを追加せず実コード内の一意な検索文字列をTargetへ使う。<code>player_speed =</code>／<code>enemy_speed =</code>／<code>[LEARNED] アイテム取得</code>で実ファイルへ移動する。取得見出しの後の「・」は検索文字列に含めず、既存Targetの複数検索separatorと混同させない。既存ID体系は不変。</li>
<li>Hintは方向→名前→検索位置→安全な例。例は固定解ではない。既存HintBlockに任意の最終見出しを追加し、既定の完成形と旧Lesson表示は維持する。</li>
<li>WHAT／WHERE／RUN／CHECK、予想と比較、DEBUG帰路を用意し、講師は値を代わりに決めない。</li>
</ul>
<h2 id="asset運用">Asset運用</h2>
<p>元配布フォルダを丸ごと別名複製。コード名month9-3.py・assets相対構成はそのまま。生徒の複製内でPNGだけ差し替え、共通game1/assetsを編集しない。元フォルダをバックアップとして残す。</p>
<p>player／enemy／itemは実32×32 PNG、標準64×64表示。透過・同名・拡張子を保持し、保存→ESC→▶で再実行。Rは画像再読込でない。学校指定の画像編集環境・準備済み32px素材は講師が用意する。未準備ならSHOULD画像を省略。自作ドット絵・複数画像は任意発展。</p>
<h2 id="検証">検証</h2>
<p>代表Choice WORKを最初に描画し、その後MAP・工程・Guided・Asset・Review・Reflectを1280×720／1024×768で局所検証する。全ページの完成後だけ4サイズ・通常／subpath・操作・PDF・buildを行う。結果は検証後に追記し、未検証の段階を合格扱いしない。</p>
<h3 id="試作からの修正">試作からの修正</h3>
<p>2026-10-14、専用headless Chromiumで実描画。Choice初回は検索見出し中の「・」が分割され、最後のHintがCHECKへ重なったためComposition／Usabilityを3とした。一意な短い検索文字列、コンパクト行、支援余白へ修正し再描画。代表7画面を2サイズで点検した後、残りを実装した。</p>
<p>Reviewは旧表の狭い第3列と過大な行高をMonth9-3内だけで補正。画像WORKはAction／ファイル案内を分離し、32→64の模式図を2倍表示と明示。工程は短いcopyと等高Zoneで途中改行を解消。最終試験でPLAY／SETUP／TUNEのCHECK margin、複製図の文字contrast、Quiz本文／Challengeのkeyboardページ送り干渉も修正した。</p>
<p>検証の装飾領域は本文の安全域とは区別し、Vueの選択表示が更新された後に結果を読む。Slidevのタブ同期が検証へ干渉しないよう、最終確認は試験ごとに独立したbrowser contextへ分離した。これは教材機能の変更ではない。</p>
<h3 id="skill評価learning-review">Skill評価・Learning Review</h3>
<table>
<thead>
<tr>
<th>評価（各5点）</th>
<th style="text-align:right">点</th>
<th>実描画で確認した根拠</th>
</tr>
</thead>
<tbody>
<tr>
<td>Typography</td>
<td style="text-align:right">4</td>
<td>大見出し、本文、mono、Metaを分離。複製図の薄い文字と工程の途中改行を修正</td>
</tr>
<tr>
<td>Composition</td>
<td style="text-align:right">4</td>
<td>中央実ゲームMAP、横工程、Choice行、画像尺度、前後比較を役割別に構成。HintとCHECKは非競合</td>
</tr>
<tr>
<td>Color</td>
<td style="text-align:right">4</td>
<td>対象色と操作Blue・編集Red・結果Greenを分離。EDITは1tokenの赤文字だけ</td>
</tr>
<tr>
<td>Visual Hierarchy</td>
<td style="text-align:right">4</td>
<td>WORKはH1→Action→検索→編集→支援→CHECK。EXTRAと時間はHeaderの副情報</td>
</tr>
<tr>
<td>Imagery</td>
<td style="text-align:right">4</td>
<td>実ゲームの4:3全景・実sprite・正確な32source／64display・実コードを使い、架空Afterを作らない</td>
</tr>
<tr>
<td>Consistency</td>
<td style="text-align:right">4</td>
<td>最新Template・Tag・Target・Hint・RunCue・Reference・共通帰路を再利用。新Router／大型Componentなし</td>
</tr>
<tr>
<td>Personality</td>
<td style="text-align:right">4</td>
<td>ゲームを中心にしたTechnical／Editorial Workshop。Card列を避け、実対象と暗いコードを主役にする</td>
</tr>
<tr>
<td>Usability</td>
<td style="text-align:right">4</td>
<td>自分のコピー、検索場所、変更箇所、実行・成功条件・復旧が追える。全Hint／Quiz／keyboardを実操作</td>
</tr>
</tbody>
</table>
<p>判定：<strong>PASS（実描画確認済み、制作者点検）</strong>。3秒は主題・変更先・行動、Blurは中央ゲーム／Dark Codeの主従、Self-guidedはWHAT／WHERE／RUN／CHECKを原寸・縮小・Blurで確認。児童試用・教室後方席の実証ではない。</p>
<p>Learning Review：目的→実在する設定／ファイル→観察結果がつながる。数値例を固定解にせず、1か所から比較・説明できる。SHOULDのrandomや画像を自力で実装済みと仮定しない。Quiz8問の正解は一意、日本語意味を併記し、数字当て・新API暗記・点数保存はない。画像差し替えとSYSTEMのコード入力を混同させない。30秒説明は最終発表の本格化ではない。</p>
<h3 id="最終検証結果">最終検証結果</h3>
<ul>
<li>通常URL／<code>/course/</code>で1280×720、1366×768、1024×768、320×180。各196状態、計392状態（16ページ＋8 Hint＋Challenge解説＋Quiz24選択）。本文安全域・画像欠損・Hint競合・実行時エラーなし。320は構図確認用で、授業本文を読む端末幅の保証ではない。</li>
<li>両URLでNavigation／keyboard等130検査が成功。INDEX各16リンク、Reference戻り先・実DEBUG往復・hash・未知の帰路・named route reload、HintのEnter／Space・Tab／focus、Quizの選択・正誤・retry・本文keyboard scroll、Challengeの開閉・共通帰路を確認。Presenterは16 Notes×2URL＝32表示で時間・問い・ミス・MUST／SHOULD・省略方針を照合。</li>
<li>OPTIONALの共通帰路はcanvas上y648・高さ40で一致。Header／帰路はQuiz本文のスクロールと分離。</li>
<li>通常／subpath build成功。既存generated index.html通知、CSS minify警告2件、検証用outDir通知は残存。依存追加なし。</li>
<li>翻訳OFF・日本語の専用headlessで16画面をPDF印刷・結合し、macOS PDFKitで全ページを再描画。原寸と一覧で複製図・実画像・コード・作業導線・Header／footerを確認。Poppler／標準export用playwright-chromiumは未導入。静的PDFは検証用で、閉じたHintやスクロールQuiz全問の完全収録を保証する生徒配布PDFではない。全操作状態はブラウザで検証。</li>
<li>既存9 unittest成功。実Month9-3もSDL dummyで素材あり／なし、連続100→200→300、敵1/2/3接触、3回Restart、ESCを確認。player5→6、enemy4→6、取得後x minimum0→128の安全例はソースをメモリ内だけで変えて試験。初回／Restartのrandom行は不変、変更後の取得x128〜736。ゲーム操作・音の聴感・Windows実機・FPS実測とは区別する。</li>
<li>変更前の非生成テキスト81ファイル中74はSHA-256一致。Python／MASTER／配布生成ツール／既存Lesson本文／正式docs01・02・06／監査18は不変。assetsに書き込みは行っていない。</li>
</ul>
<h3 id="共通ruleバックポート監査">共通Rule・バックポート監査</h3>
<p>docs/14・20の既存文法だけを再利用し、新しい共通Visual／教育ルールは追加しないため両文書は不変。GuideにはMonth9-3運用Briefを同期。HintBlockの任意finalLabelだけを小さく追加し、既定の「完成形」を維持する。</p>
<p>既存5Lessonの代表WORKを実描画し、Month9-3限定CSSの非波及と既定Finalを確認。Month8-1の自由数値課題は既存3 Hint、Month8-2・8-3・9-1・9-2の4段階Finalは実際の完成入力を示すため旧表示が適切。名前だけ統一するバックポートは不要。Student Edit Zoneも既存監査を維持し、他LessonのPython・内容・ID・時間を変えない。</p>
<p>講師実機では授業前に画像編集環境／32px素材・Windows書体・音量・投影距離を確認する。75分は計画で、学級の進度を観察してSHOULDを調整する。</p>
`},"23_game1_reference_inventory":{html:`<h1 id="game1-referenceリンク棚卸し変更前">Game1 Referenceリンク棚卸し（変更前）</h1>
<p>2026-10-14。実装変更前のStage 1 snapshot。全96 Lessonページの共通Headerと44個の本文Referenceリンク、計140個。後続の現行検査は <code>node tools/check_reference_links.mjs</code>。同じ対象の再利用は重複実装とは区別する。</p>
<table>
<thead>
<tr>
<th>Lesson</th>
<th>Page / route</th>
<th>表示文言</th>
<th>現在のリンク先</th>
<th>テーマ</th>
<th style="text-align:right">同先候補数</th>
<th>link切れ</th>
<th>現在の役割</th>
<th>分類</th>
</tr>
</thead>
<tbody>
<tr>
<td>month8-1</td>
<td>1 / month8-1</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month8-1</td>
<td>2 / month8-1-flow</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month8-1</td>
<td>3 / month8-1-roadmap</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month8-1</td>
<td>4 / month8-1-setup</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month8-1</td>
<td>4 / month8-1-setup</td>
<td>保存・実行の手順を調べる</td>
<td>ref-vscode#run</td>
<td>run</td>
<td style="text-align:right">3</td>
<td>なし（source上）</td>
<td>困った時の確認</td>
<td>B</td>
</tr>
<tr>
<td>month8-1</td>
<td>4 / month8-1-setup</td>
<td>DEBUGで調べる</td>
<td>ref-debug#error</td>
<td>error</td>
<td style="text-align:right">1</td>
<td>なし（source上）</td>
<td>困った時の確認</td>
<td>A</td>
</tr>
<tr>
<td>month8-1</td>
<td>5 / month8-1-play</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month8-1</td>
<td>6 / month8-1-rules</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month8-1</td>
<td>7 / month8-1-variables</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month8-1</td>
<td>8 / month8-1-code-guide</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month8-1</td>
<td>9 / month8-1-player-speed</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month8-1</td>
<td>9 / month8-1-player-speed</td>
<td>設定の意味</td>
<td>ref-game#player-speed</td>
<td>player-speed</td>
<td style="text-align:right">2</td>
<td>なし（source上）</td>
<td>困った時の確認</td>
<td>A</td>
</tr>
<tr>
<td>month8-1</td>
<td>10 / month8-1-enemy-speed</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month8-1</td>
<td>10 / month8-1-enemy-speed</td>
<td>設定の意味</td>
<td>ref-game#enemy-speed</td>
<td>enemy-speed</td>
<td style="text-align:right">1</td>
<td>なし（source上）</td>
<td>困った時の確認</td>
<td>A</td>
</tr>
<tr>
<td>month8-1</td>
<td>11 / month8-1-size</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month8-1</td>
<td>11 / month8-1-size</td>
<td>設定の意味</td>
<td>ref-game#size</td>
<td>size</td>
<td style="text-align:right">1</td>
<td>なし（source上）</td>
<td>困った時の確認</td>
<td>A</td>
</tr>
<tr>
<td>month8-1</td>
<td>12 / month8-1-tune</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month8-1</td>
<td>13 / month8-1-review</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month8-1</td>
<td>14 / month8-1-reflect</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month8-1</td>
<td>O1 / month8-1-challenge</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month8-1</td>
<td>O2 / month8-1-quiz</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month8-2</td>
<td>1 / month8-2</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month8-2</td>
<td>2 / month8-2-flow</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month8-2</td>
<td>3 / month8-2-setup</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month8-2</td>
<td>3 / month8-2-setup</td>
<td>保存・実行を調べる</td>
<td>ref-vscode#run</td>
<td>run</td>
<td style="text-align:right">3</td>
<td>なし（source上）</td>
<td>困った時の確認</td>
<td>B</td>
</tr>
<tr>
<td>month8-2</td>
<td>4 / month8-2-coordinates</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month8-2</td>
<td>4 / month8-2-coordinates</td>
<td>座標を調べる</td>
<td>ref-game#coordinates</td>
<td>coordinates</td>
<td style="text-align:right">4</td>
<td>なし（source上）</td>
<td>困った時の確認</td>
<td>B</td>
</tr>
<tr>
<td>month8-2</td>
<td>5 / month8-2-keys</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month8-2</td>
<td>5 / month8-2-keys</td>
<td>キー入力を調べる</td>
<td>ref-game#keys</td>
<td>keys</td>
<td style="text-align:right">2</td>
<td>なし（source上）</td>
<td>困った時の確認</td>
<td>A</td>
</tr>
<tr>
<td>month8-2</td>
<td>6 / month8-2-right</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month8-2</td>
<td>6 / month8-2-right</td>
<td>キー入力を調べる</td>
<td>ref-game#keys</td>
<td>keys</td>
<td style="text-align:right">2</td>
<td>なし（source上）</td>
<td>困った時の確認</td>
<td>A</td>
</tr>
<tr>
<td>month8-2</td>
<td>7 / month8-2-left</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month8-2</td>
<td>7 / month8-2-left</td>
<td>足し算・引き算を調べる</td>
<td>ref-python#arithmetic</td>
<td>arithmetic</td>
<td style="text-align:right">2</td>
<td>なし（source上）</td>
<td>困った時の確認</td>
<td>B</td>
</tr>
<tr>
<td>month8-2</td>
<td>8 / month8-2-up-down</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month8-2</td>
<td>8 / month8-2-up-down</td>
<td>座標を調べる</td>
<td>ref-game#coordinates</td>
<td>coordinates</td>
<td style="text-align:right">4</td>
<td>なし（source上）</td>
<td>困った時の確認</td>
<td>B</td>
</tr>
<tr>
<td>month8-2</td>
<td>9 / month8-2-compare</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month8-2</td>
<td>10 / month8-2-bounds</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month8-2</td>
<td>10 / month8-2-bounds</td>
<td>比較を調べる</td>
<td>ref-python#compare</td>
<td>compare</td>
<td style="text-align:right">2</td>
<td>なし（source上）</td>
<td>困った時の確認</td>
<td>A</td>
</tr>
<tr>
<td>month8-2</td>
<td>11 / month8-2-tune</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month8-2</td>
<td>11 / month8-2-tune</td>
<td>速さを調べる</td>
<td>ref-game#player-speed</td>
<td>player-speed</td>
<td style="text-align:right">2</td>
<td>なし（source上）</td>
<td>困った時の確認</td>
<td>A</td>
</tr>
<tr>
<td>month8-2</td>
<td>12 / month8-2-review</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month8-2</td>
<td>13 / month8-2-reflect</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month8-2</td>
<td>O1 / month8-2-challenge</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month8-2</td>
<td>O2 / month8-2-quiz</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month8-3</td>
<td>1 / month8-3</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month8-3</td>
<td>2 / month8-3-flow</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month8-3</td>
<td>3 / month8-3-setup</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month8-3</td>
<td>3 / month8-3-setup</td>
<td>保存・実行を調べる</td>
<td>ref-vscode#run</td>
<td>run</td>
<td style="text-align:right">3</td>
<td>なし（source上）</td>
<td>困った時の確認</td>
<td>B</td>
</tr>
<tr>
<td>month8-3</td>
<td>4 / month8-3-coordinates</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month8-3</td>
<td>4 / month8-3-coordinates</td>
<td>座標を調べる</td>
<td>ref-game#coordinates</td>
<td>coordinates</td>
<td style="text-align:right">4</td>
<td>なし（source上）</td>
<td>困った時の確認</td>
<td>B</td>
</tr>
<tr>
<td>month8-3</td>
<td>5 / month8-3-move</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month8-3</td>
<td>5 / month8-3-move</td>
<td>座標を調べる</td>
<td>ref-game#coordinates</td>
<td>coordinates</td>
<td style="text-align:right">4</td>
<td>なし（source上）</td>
<td>困った時の確認</td>
<td>B</td>
</tr>
<tr>
<td>month8-3</td>
<td>6 / month8-3-bottom</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month8-3</td>
<td>6 / month8-3-bottom</td>
<td>比較を調べる</td>
<td>ref-python#compare</td>
<td>compare</td>
<td style="text-align:right">2</td>
<td>なし（source上）</td>
<td>困った時の確認</td>
<td>A</td>
</tr>
<tr>
<td>month8-3</td>
<td>6 / month8-3-bottom</td>
<td>ifを調べる</td>
<td>ref-python#if</td>
<td>if</td>
<td style="text-align:right">2</td>
<td>なし（source上）</td>
<td>困った時の確認</td>
<td>B</td>
</tr>
<tr>
<td>month8-3</td>
<td>7 / month8-3-respawn</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month8-3</td>
<td>7 / month8-3-respawn</td>
<td>ifを調べる</td>
<td>ref-python#if</td>
<td>if</td>
<td style="text-align:right">2</td>
<td>なし（source上）</td>
<td>困った時の確認</td>
<td>B</td>
</tr>
<tr>
<td>month8-3</td>
<td>8 / month8-3-random</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month8-3</td>
<td>8 / month8-3-random</td>
<td>randomを調べる</td>
<td>ref-game#random</td>
<td>random</td>
<td style="text-align:right">4</td>
<td>なし（source上）</td>
<td>困った時の確認</td>
<td>B</td>
</tr>
<tr>
<td>month8-3</td>
<td>9 / month8-3-random-x</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month8-3</td>
<td>9 / month8-3-random-x</td>
<td>randomを調べる</td>
<td>ref-game#random</td>
<td>random</td>
<td style="text-align:right">4</td>
<td>なし（source上）</td>
<td>困った時の確認</td>
<td>B</td>
</tr>
<tr>
<td>month8-3</td>
<td>10 / month8-3-tune</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month8-3</td>
<td>11 / month8-3-compare</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month8-3</td>
<td>12 / month8-3-review</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month8-3</td>
<td>13 / month8-3-reflect</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month8-3</td>
<td>O1 / month8-3-challenge</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month8-3</td>
<td>O2 / month8-3-quiz</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month9-1</td>
<td>1 / month9-1</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month9-1</td>
<td>2 / month9-1-flow</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month9-1</td>
<td>3 / month9-1-setup</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month9-1</td>
<td>3 / month9-1-setup</td>
<td>動かない時のDEBUGを調べる</td>
<td>ref-debug#symptoms</td>
<td>symptoms</td>
<td style="text-align:right">6</td>
<td>なし（source上）</td>
<td>困った時の確認</td>
<td>A</td>
</tr>
<tr>
<td>month9-1</td>
<td>4 / month9-1-rect</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month9-1</td>
<td>4 / month9-1-rect</td>
<td>Rectを調べる</td>
<td>ref-game#rect</td>
<td>rect</td>
<td style="text-align:right">1</td>
<td>なし（source上）</td>
<td>困った時の確認</td>
<td>B</td>
</tr>
<tr>
<td>month9-1</td>
<td>5 / month9-1-collision</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month9-1</td>
<td>6 / month9-1-rect-form</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month9-1</td>
<td>7 / month9-1-read</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month9-1</td>
<td>8 / month9-1-enemy1</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month9-1</td>
<td>8 / month9-1-enemy1</td>
<td>接触の調べ方を調べる</td>
<td>ref-game#collision</td>
<td>collision</td>
<td style="text-align:right">4</td>
<td>なし（source上）</td>
<td>困った時の確認</td>
<td>B</td>
</tr>
<tr>
<td>month9-1</td>
<td>9 / month9-1-game-over</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month9-1</td>
<td>10 / month9-1-transfer</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month9-1</td>
<td>10 / month9-1-transfer</td>
<td>接触の調べ方を調べる</td>
<td>ref-game#collision</td>
<td>collision</td>
<td style="text-align:right">4</td>
<td>なし（source上）</td>
<td>困った時の確認</td>
<td>B</td>
</tr>
<tr>
<td>month9-1</td>
<td>11 / month9-1-enemy3</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month9-1</td>
<td>11 / month9-1-enemy3</td>
<td>接触の調べ方を調べる</td>
<td>ref-game#collision</td>
<td>collision</td>
<td style="text-align:right">4</td>
<td>なし（source上）</td>
<td>困った時の確認</td>
<td>B</td>
</tr>
<tr>
<td>month9-1</td>
<td>12 / month9-1-compare</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month9-1</td>
<td>13 / month9-1-test</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month9-1</td>
<td>13 / month9-1-test</td>
<td>症状からDEBUGを調べる</td>
<td>ref-debug#symptoms</td>
<td>symptoms</td>
<td style="text-align:right">6</td>
<td>なし（source上）</td>
<td>困った時の確認</td>
<td>A</td>
</tr>
<tr>
<td>month9-1</td>
<td>14 / month9-1-review</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month9-1</td>
<td>15 / month9-1-reflect</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month9-1</td>
<td>O1 / month9-1-challenge</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month9-1</td>
<td>O2 / month9-1-quiz</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month9-2</td>
<td>1 / month9-2</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month9-2</td>
<td>2 / month9-2-flow</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month9-2</td>
<td>3 / month9-2-setup</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month9-2</td>
<td>3 / month9-2-setup</td>
<td>動かない時のDEBUGを調べる</td>
<td>ref-debug#symptoms</td>
<td>symptoms</td>
<td style="text-align:right">6</td>
<td>なし（source上）</td>
<td>困った時の確認</td>
<td>A</td>
</tr>
<tr>
<td>month9-2</td>
<td>4 / month9-2-collision</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month9-2</td>
<td>5 / month9-2-item-work</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month9-2</td>
<td>5 / month9-2-item-work</td>
<td>接触の調べ方を調べる</td>
<td>ref-game#collision</td>
<td>collision</td>
<td style="text-align:right">4</td>
<td>なし（source上）</td>
<td>困った時の確認</td>
<td>B</td>
</tr>
<tr>
<td>month9-2</td>
<td>6 / month9-2-score</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month9-2</td>
<td>6 / month9-2-score</td>
<td>代入を調べる</td>
<td>ref-python#variable</td>
<td>variable</td>
<td style="text-align:right">1</td>
<td>なし（source上）</td>
<td>困った時の確認</td>
<td>B</td>
</tr>
<tr>
<td>month9-2</td>
<td>7 / month9-2-score-work</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month9-2</td>
<td>7 / month9-2-score-work</td>
<td>足し算・代入を調べる</td>
<td>ref-python#arithmetic</td>
<td>arithmetic</td>
<td style="text-align:right">2</td>
<td>なし（source上）</td>
<td>困った時の確認</td>
<td>B</td>
</tr>
<tr>
<td>month9-2</td>
<td>8 / month9-2-random</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month9-2</td>
<td>8 / month9-2-random</td>
<td>randomを調べる</td>
<td>ref-game#random</td>
<td>random</td>
<td style="text-align:right">4</td>
<td>なし（source上）</td>
<td>困った時の確認</td>
<td>B</td>
</tr>
<tr>
<td>month9-2</td>
<td>9 / month9-2-random-work</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month9-2</td>
<td>9 / month9-2-random-work</td>
<td>randomを調べる</td>
<td>ref-game#random</td>
<td>random</td>
<td style="text-align:right">4</td>
<td>なし（source上）</td>
<td>困った時の確認</td>
<td>B</td>
</tr>
<tr>
<td>month9-2</td>
<td>10 / month9-2-system</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month9-2</td>
<td>11 / month9-2-play</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month9-2</td>
<td>12 / month9-2-tune</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month9-2</td>
<td>12 / month9-2-tune</td>
<td>症状からDEBUGを調べる</td>
<td>ref-debug#symptoms</td>
<td>symptoms</td>
<td style="text-align:right">6</td>
<td>なし（source上）</td>
<td>困った時の確認</td>
<td>A</td>
</tr>
<tr>
<td>month9-2</td>
<td>13 / month9-2-review</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month9-2</td>
<td>14 / month9-2-reflect</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month9-2</td>
<td>O1 / month9-2-challenge</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month9-2</td>
<td>O2 / month9-2-quiz</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month9-3</td>
<td>1 / month9-3</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month9-3</td>
<td>2 / month9-3-flow</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month9-3</td>
<td>3 / month9-3-play</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month9-3</td>
<td>3 / month9-3-play</td>
<td>起動できない時を調べる</td>
<td>ref-debug#symptoms</td>
<td>symptoms</td>
<td style="text-align:right">6</td>
<td>なし（source上）</td>
<td>困った時の確認</td>
<td>A</td>
</tr>
<tr>
<td>month9-3</td>
<td>4 / month9-3-map</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month9-3</td>
<td>5 / month9-3-purpose</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month9-3</td>
<td>6 / month9-3-process</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month9-3</td>
<td>7 / month9-3-ai</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month9-3</td>
<td>8 / month9-3-ai-question</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month9-3</td>
<td>9 / month9-3-start</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month9-3</td>
<td>10 / month9-3-setup</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month9-3</td>
<td>10 / month9-3-setup</td>
<td>フォルダの複製を調べる</td>
<td>ref-vscode#copy</td>
<td>copy</td>
<td style="text-align:right">1</td>
<td>なし（source上）</td>
<td>困った時の確認</td>
<td>B</td>
</tr>
<tr>
<td>month9-3</td>
<td>10 / month9-3-setup</td>
<td>コピーのフォルダを開く方法を調べる</td>
<td>ref-vscode#folder</td>
<td>folder</td>
<td style="text-align:right">1</td>
<td>なし（source上）</td>
<td>困った時の確認</td>
<td>B</td>
</tr>
<tr>
<td>month9-3</td>
<td>11 / month9-3-guided</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month9-3</td>
<td>11 / month9-3-guided</td>
<td>変更が反映されない時を調べる</td>
<td>ref-debug#last-change</td>
<td>last-change</td>
<td style="text-align:right">2</td>
<td>なし（source上）</td>
<td>困った時の確認</td>
<td>A</td>
</tr>
<tr>
<td>month9-3</td>
<td>12 / month9-3-choice</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month9-3</td>
<td>13 / month9-3-assets</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month9-3</td>
<td>13 / month9-3-assets</td>
<td>ドット絵を作る</td>
<td>ref-pixnote</td>
<td>索引</td>
<td style="text-align:right">1</td>
<td>なし（source上）</td>
<td>困った時の確認</td>
<td>A</td>
</tr>
<tr>
<td>month9-3</td>
<td>13 / month9-3-assets</td>
<td>画像が出ない時を調べる</td>
<td>ref-debug#images</td>
<td>images</td>
<td style="text-align:right">2</td>
<td>なし（source上）</td>
<td>困った時の確認</td>
<td>A</td>
</tr>
<tr>
<td>month9-3</td>
<td>13 / month9-3-assets</td>
<td>画像名をコードへ合わせる方法を調べる</td>
<td>ref-pixnote#filename</td>
<td>filename</td>
<td style="text-align:right">1</td>
<td>なし（source上）</td>
<td>困った時の確認</td>
<td>C</td>
</tr>
<tr>
<td>month9-3</td>
<td>14 / month9-3-tune</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month9-3</td>
<td>14 / month9-3-tune</td>
<td>動かない時を調べる</td>
<td>ref-debug#symptoms</td>
<td>symptoms</td>
<td style="text-align:right">6</td>
<td>なし（source上）</td>
<td>困った時の確認</td>
<td>A</td>
</tr>
<tr>
<td>month9-3</td>
<td>14 / month9-3-tune</td>
<td>画像が出ない時を調べる</td>
<td>ref-debug#images</td>
<td>images</td>
<td style="text-align:right">2</td>
<td>なし（source上）</td>
<td>困った時の確認</td>
<td>A</td>
</tr>
<tr>
<td>month9-3</td>
<td>14 / month9-3-tune</td>
<td>変更が反映されない時を調べる</td>
<td>ref-debug#last-change</td>
<td>last-change</td>
<td style="text-align:right">2</td>
<td>なし（source上）</td>
<td>困った時の確認</td>
<td>A</td>
</tr>
<tr>
<td>month9-3</td>
<td>15 / month9-3-reflect</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month9-3</td>
<td>O1 / month9-3-challenge</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
<tr>
<td>month9-3</td>
<td>O2 / month9-3-quiz</td>
<td>調べる（共通Header）</td>
<td>month8-1-reference</td>
<td>索引</td>
<td style="text-align:right">96</td>
<td>なし（source上）</td>
<td>共通索引</td>
<td>B</td>
</tr>
</tbody>
</table>
<h2 id="既存referenceと判断">既存Referenceと判断</h2>
<table>
<thead>
<tr>
<th>既存file / route</th>
<th>区画</th>
<th>判断</th>
</tr>
</thead>
<tbody>
<tr>
<td>index.md / month8-1-reference</td>
<td>4カテゴリ索引</td>
<td>B：制作を加え5カテゴリ、未習項目を入口から外す</td>
</tr>
<tr>
<td>vscode.md / ref-vscode</td>
<td>開く・保存・実行・検索・複製</td>
<td>B/C：saveとrunの説明を統合、folder丸ごとコピーを正本化</td>
</tr>
<tr>
<td>python.md / ref-python</td>
<td>変数・演算・比較・if・bool・loop</td>
<td>B/C/E：更新を右→左で説明。boolはGame Overの目印へ、for/while/rangeとelif/elseの正式説明は範囲外</td>
</tr>
<tr>
<td>game.md / ref-game</td>
<td>座標・key・速度・size・random・Rect・接触・score・Game Over・flag</td>
<td>B/C/D：図を追加、flagはGame Overへ統合。画像差し替えの共通区画が未作成</td>
</tr>
<tr>
<td>debug.md / ref-debug</td>
<td>症状・エラー・反映・ファイル・画像・操作</td>
<td>B/D：症状入口とインデントの短い確認区画を整備</td>
</tr>
<tr>
<td>pixnote.md / ref-pixnote</td>
<td>任意ドット絵・別名画像・復旧</td>
<td>B/C：PNG工程は維持、別名変更は共通asset正本へ移す</td>
</tr>
</tbody>
</table>
<p>A＝そのまま利用、B＝更新、C＝重複統合、D＝未作成、E＝範囲外／本文へ戻す。</p>
<ul>
<li>Cの統合候補は保存／実行、bool・flag／Game Over、Pixnoteのfilename／共通assetsの3群。重複リンクを削るのではなく説明の正本を1つにする。</li>
<li>Dはassetの同名／別名手順、インデントの直接入口、制作カテゴリのAI導線。AIの説明自体はMonth9-3の既存2枚が正本。</li>
<li>Eはfor/while/range章と、if内のelif/else解説。Game1本文へ新しい説明を移さず対象外化。古いhashは短い互換案内だけ残す。</li>
<li>AI 1/2・2/2、画像WORK、コピーSETUPは本文内のsupport再利用候補。INDEX内のそのLessonのページ送りリンクは、Referenceリンク数へ二重加算しない。</li>
<li>TryBlockに残る旧reference propsはcomplete templateでは非表示。実表示の140リンクには含めない。全LessonのHint／RunCueは既存支援であり、Referenceと同一視しない。</li>
</ul>
`},"23_game1_reference_system":{html:`<h1 id="game1-reference--support体系">Game1 Reference / Support体系</h1>
<p>2026-10-14。Game1の6 Lessonを「本文＋Reference＋Guide」で閉じる。正式仕様・Python範囲・固定ID・MUST／SHOULD／OPTIONAL・時間はdocs/01〜08を維持する。</p>
<h2 id="stage-1棚卸し">Stage 1：棚卸し</h2>
<p><a href="/robot-python-game/instructor/docs/23_game1_reference_inventory/">変更前の全link一覧</a>。本文44＋共通Header96＝140リンク、既存6 Referenceページ。ルート・hashはsource上で存在する。A＝維持、B＝更新、C＝統合、D＝未作成、E＝対象外化。重複リンクは再利用であり、重複説明とは区別する。</p>
<p>不足は座標／random／Rectの図、インデント入口、共通画像差し替え、AI相談からの帰路。統合対象は保存／実行、bool・flag／Game Over、Pixnoteの別名画像／共通assetの3群。for/while/range章とif内のelif/else解説はGame1の正式説明から外す。</p>
<h2 id="stage-2体系と責務">Stage 2：体系と責務</h2>
<p>新しいPage Type・Router・Storeは作らず、既存reference layoutと名前付きroute＋hashを使う。カテゴリは輸送単位、hashで直接開く短い区画が「1テーマ1責務」の参照単位。各区画は目的→最小説明／図／例→よくある間違い→試す／関連資料→固定Headerの元作業への帰路。カテゴリ全体を最初から通読する教材ではない。</p>
<table>
<thead>
<tr>
<th>カテゴリ／route</th>
<th>テーマ／hash</th>
<th>主な呼出元・責務</th>
</tr>
</thead>
<tbody>
<tr>
<td>索引 <code>month8-1-reference</code></td>
<td>5カテゴリの入口</td>
<td>全96ページHeader。旧名を互換維持、Month8-1専用でない</td>
</tr>
<tr>
<td>操作 <code>ref-vscode</code></td>
<td>folder / file / save・run / find / copy</td>
<td>全Lessonの準備・再実行、Month9-3コピー。saveはrunを参照し手順を複製しない</td>
</tr>
<tr>
<td>Python <code>ref-python</code></td>
<td>variable / arithmetic / compare / if</td>
<td>Month8-1代入、8-2移動、8-3条件、9-2更新。boolean・loopは短い互換案内だけ</td>
</tr>
<tr>
<td>Game <code>ref-game</code></td>
<td>coordinates / keys / player-speed / enemy-speed / size / random / rect / collision / score / game-over / assets / filename</td>
<td>操作とコード・APIの対応。flagはgame-over内の互換anchor。画像・別名はここが正本</td>
</tr>
<tr>
<td>DEBUG <code>ref-debug</code></td>
<td>symptoms / error / spelling / indentation / last-change / run-file / images / not-moving</td>
<td>症状→確認する場所→1つ試す。導入・音声デバイス等は先生へ</td>
</tr>
<tr>
<td>制作 <code>ref-create</code></td>
<td>ai / copy・画像・Pixnoteへの入口</td>
<td>既存支援の選択。AIの本文はMonth9-3の2枚を再利用、重複解説を作らない</td>
</tr>
<tr>
<td>発展 <code>ref-pixnote</code></td>
<td>PNG工程 / filename互換 / 復旧</td>
<td>任意32pxドット絵。別名の説明はGameへ、ツール利用は教室許可を前提</td>
</tr>
</tbody>
</table>
<p>新規Referenceページは制作1、既存6のURLは削除しない。共有されるトピックへ行くリンクは繰り返し置いてよい。古いhashは短い転送案内を残し、未習の理論を隠れた長文として維持しない。</p>
<h2 id="navigation">Navigation</h2>
<ul>
<li>LessonLinkの<code>to</code>＋<code>term</code>を正本とし、hrefへbase pathを直書きしない。移動は「○○を調べる ↗」、処理順は「→」。表示語と区画見出しの意味を一致させる。</li>
<li><code>from</code>は既知のLesson routeだけを許可。Reference内のカテゴリ／hash移動・reload・Presenterでも元作業を保持する。未知・外部URLは拒否しLesson一覧へ。直接訪問もLesson一覧へ戻れる。</li>
<li>AI本文をReferenceとして開く時だけ<code>support</code>を明示し、元作業を保持。2枚間の専用リンクと帰路をHeaderに出す。通常のMonth9-3 AI進行・本文・ページ順は変更しない。直接訪問時は索引へ戻る。</li>
<li>テーマへhashで着地し、本文だけscroll、Header／カテゴリ／帰路は固定。Tab／Enter、本文focus後の上下キーで使える。スクロールの終端でテーマ見出しが隠れない余白を確保する。</li>
</ul>
<h2 id="hintreference講師">Hint・Reference・講師</h2>
<p>Hintは「今の問題」の段階支援、Referenceは既習事項・操作・API・troubleshootingの確認。Referenceは講義の代わりではない。困った時に一つのテーマを30秒〜1分程度で見つける構造を目標とし、実測保証にしない。講師は答えを即教える前に適切な区画を案内できるが、支援の順序を強制せずいつでも質問可。</p>
<h2 id="用語正確さ">用語・正確さ</h2>
<p>再実行／画像／当たり判定／座標／フォルダ／score（得点）／item（アイテム）を基本とする。spriteは「表示する画像」の対応で説明し、画像32×32とゲームの標準表示64×64を区別する。RはGame Overから同じコードで再開、ESC→▶はコード・画像を再読込。item yは60〜536、xは0〜736、randomは両端を含み同じ値も正常。Rectは画像の輪郭でなく四角、辺が触れるだけは重なりでない。</p>
<p>技術確認の一次資料：<a href="https://www.pygame.org/docs/ref/rect.html" target="_blank" rel="noopener noreferrer">Pygame Rect</a>、<a href="https://docs.python.org/3/library/random.html#random.randint" target="_blank" rel="noopener noreferrer">Python random.randint</a>、<a href="https://code.visualstudio.com/docs/python/python-tutorial" target="_blank" rel="noopener noreferrer">VS Code Python実行</a>。生徒へ英語公式文書の通読や未習構文の暗記は要求しない。</p>
<h2 id="art-direction代表試作初回体系改修">Art Direction・代表試作（初回体系改修）</h2>
<p>A 短い技術辞書：既存日本語Sans＋mono、H1 40／区画32／本文22–24／code22。白主体、操作Blue・概念Violet・対象色を限定。実spriteと正確な空間／範囲／接触図、図だけのSoft Zone。装飾は既存の薄いType bandのみ。異なるテーマを短い見出しで拾えるが、hash着地と縦scrollの最終区画を検証する必要がある。</p>
<p>B 症状フロー：同書体、問い40／手順26、白65＋Blue-grayの支援帯。症状の分岐を主役にし実codeを従とする。DEBUGには強いが、代入／Rectの図を症状へ無理に変える弱点。</p>
<p>C 大きな作業台：monoの概念64＋日本語26、Dark60／White30／対象色10。大spriteと処理図の非対称cropで直感を強めるが、検索性・連続した投影／個別PCと既存Referenceの連続性が弱い。</p>
<p>Aを採用しB/Cを混ぜない。座標Referenceを先に、1280×720／1024×768で原点・右x／下y・左上anchor・800×600と64px領域・短code・帰路を試作。代表の保存／実行、if、random、Rect／接触、DEBUGを局所検証後に、asset／folder／AI／Pixnoteを完成させる。</p>
<h2 id="maintenance">Maintenance</h2>
<p>新しい「○○を調べる」作成前に、既存route／hashの有無→統合可能性→1テーマ1責務→inventory更新の順で確認する。旧URLを消す前に全呼出元と互換案内を確認。<code>node tools/check_reference_links.mjs</code>でsourceのroute・anchor・全Lessonリンク・重複IDを検査し、実描画のhash着地・帰路・keyboard・4サイズ・通常／subpathと合わせて受け入れる。ソース検査をUIの合格と同一視しない。</p>
<p>新共通の視覚仕様はdocs/14、教育責務はdocs/20へ最小同期し、Guideと矛盾させない。Reference都合で本文の学習量・Hint・標準コードを変えない。</p>
<h2 id="初回体系改修の検証記録visual-family適用前">初回体系改修の検証記録（Visual Family適用前）</h2>
<p>2026-10-14。専用headless Chromiumで実描画・DOM・操作を検査。通常URLと<code>/course/</code>で確認し、ユーザーの通常Chromeは使っていない。</p>
<ul>
<li>Source：96 Lessonページ・本文44＋Header96＝140リンク。7 Referenceページ、互換を含む38 anchor、静的リンク306件のroute／anchor／重複検査は失敗0。<code>--inventory</code>は現在の140リンク、Stage 1一覧は変更前のsnapshotとして保持。</li>
<li>整理：新規ページ1（制作）、既存6を更新。保存／実行、bool・flag／Game Over、別名画像／共通assetの3テーマ群を統合。対象外化した正式解説はループ章とelif／elseの2件。削除したページ・URLは0。</li>
<li>全体：1280×720／1366×768／1024×768／320×180。全7ページと38 anchorの180描画状態×通常・subpath＝360状態、各986検査・失敗0。全140リンクの実クリック・着地・元ページへのクリック帰路、カテゴリ／reload／不正origin・hash、Tab／Enter／focus ring／上下キーscroll、AIの2枚間移動・直接訪問fallback、Presenter帰路・AI Notesを含む。最後のCaption短縮後も索引を両build・4サイズ計8状態で再確認し、17入口・Captionの表示範囲・横overflowを確認した。</li>
<li>build：通常・<code>--base /course/</code>とも成功。既存のUnoCSS生成CSSに関する<code>1.5rem</code>／<code>0.125rem</code>のminify警告2件は残る。Reference由来の新規警告・runtime errorは検出していない。検証用outDirがproject外という通知は一時出力先による。</li>
<li>外部：<a href="https://pixnote.net/" target="_blank" rel="noopener noreferrer">Pixnote公式トップ</a>の到達とエディタへの入口を確認。教室PCでのPNG書出し・保存先・AIの利用許可は別途確認が必要。</li>
<li>保全：開始時52ファイルのSHA-256と比較し47一致。差分はリンクだけを調整したLesson Markdown4件とdocs/07。全6 LessonのLessonLinkを除いた本文は完全一致し、Notes・Hint・順序・時間・固定ID・学習量は不変。Game1全25ファイルとslides/public全13ファイル、正式仕様docs/01〜06・08は一致。Python／Game／assets／MUST・SHOULD・OPTIONALを変更していない。</li>
</ul>
<h3 id="実描画からの修正と8軸評価">実描画からの修正と8軸評価</h3>
<p>代表試作で小さすぎたkeycapを本文級へ調整。Rect図では実spriteを四角の領域へ正しく拡大し、Reference内の接触線を概念Violetへ統一。索引は全項目を詰め込まず主要17入口へ絞り、残りは固定カテゴリと各テーマ一覧から開ける。見出しCSSの優先度とCaptionを修正し、下段のDEBUG／制作が初期表示から消える弱点を解消した。</p>
<table>
<thead>
<tr>
<th>評価軸</th>
<th style="text-align:right">最終点 / 5</th>
<th>実描画の根拠・対応</th>
</tr>
</thead>
<tbody>
<tr>
<td>Typography</td>
<td style="text-align:right">4</td>
<td>日本語見出し・本文・monoの階層。小さかったkeycapを修正し、Captionを従にした</td>
</tr>
<tr>
<td>Composition</td>
<td style="text-align:right">4</td>
<td>索引・座標の図＋意味・randomの範囲・DEBUG表を内容別に使い分け。密集した索引を再構成</td>
</tr>
<tr>
<td>Color</td>
<td style="text-align:right">4</td>
<td>White＋Blue navigation、Violet四角、Red EDIT＋文字label。実codeと画像領域を混同しない</td>
</tr>
<tr>
<td>Visual Hierarchy</td>
<td style="text-align:right">4</td>
<td>hash見出し→図／code→試す／関連リンク。固定帰路、索引の5カテゴリと17入口が見える</td>
</tr>
<tr>
<td>Imagery</td>
<td style="text-align:right">4</td>
<td>実sprite、左上anchor、64px、範囲両端、接触／非接触を図示。Rect図のsize不整合を修正</td>
</tr>
<tr>
<td>Consistency</td>
<td style="text-align:right">4</td>
<td>7ページのHeader／カテゴリ／帰路・書体・Navigation Surfaceを共通化し既存Lessonと接続</td>
</tr>
<tr>
<td>Personality</td>
<td style="text-align:right">4</td>
<td>Game1の実spriteと技術図を主役にした技術辞書。全画面を同じ装飾Cardにしていない</td>
</tr>
<tr>
<td>Usability</td>
<td style="text-align:right">4</td>
<td>origin保持・hash直着地・固定帰路・keyboard・AI再利用・invalid fallbackを実操作確認</td>
</tr>
</tbody>
</table>
<p>判定：<strong>PASS（制作者による実描画確認）</strong>。3秒はテーマ／帰路／何を試すかが拾えるか、Blurは図・実code・navigationの主従、Self-guidedは必要項目へ着地→1つ試す→元作業へ戻る導線を点検した。児童の理解・実授業時間・30秒〜1分での発見時間を実証したものではない。320×180はSlidevの縮小表示で衝突を確認したもので、スマートフォンで全文を読めるreflow保証ではない。通常授業PC・Windows投影は実機で追加確認する。</p>
<p>代表出力は<a href="/robot-python-game/instructor/doc-assets/reference-review/index.png">索引</a>、<a href="/robot-python-game/instructor/doc-assets/reference-review/run.png">保存・実行</a>、<a href="/robot-python-game/instructor/doc-assets/reference-review/coordinates.png">座標</a>、<a href="/robot-python-game/instructor/doc-assets/reference-review/if.png">if</a>、<a href="/robot-python-game/instructor/doc-assets/reference-review/random.png">random</a>、<a href="/robot-python-game/instructor/doc-assets/reference-review/rect.png">Rect</a>、<a href="/robot-python-game/instructor/doc-assets/reference-review/collision.png">当たり判定</a>、<a href="/robot-python-game/instructor/doc-assets/reference-review/debug.png">DEBUG</a>、<a href="/robot-python-game/instructor/doc-assets/reference-review/filename.png">別名画像</a>。scroll・帰路を持つReferenceの受入資料として保存し、既存Lesson全PDFを再出力していない。</p>
<h2 id="reference-visual-family2026-10-14">Reference Visual Family（2026-10-14）</h2>
<p>目的は、小5が個別PCで忘れた操作・概念を短時間で探し、試して作業へ戻ること。投影と個別閲覧を兼ねるが、320×180は構図確認のみ。7ページ・5カテゴリ・本文・code例・URL／anchor・全140 Lessonリンク・AI再利用・Navigation構造は維持する。Visual正本はdocs/14・38節、教育上の認識／scroll基準はdocs/20・14節。</p>
<h3 id="3案の比較と代表試作">3案の比較と代表試作</h3>
<ul>
<li><strong>A 色分けされた技術辞書（採用）</strong>：既存日本語Sans＋mono、H1 40／テーマ30／本文21／meta18。White約85%、category Soft Zone約10%、code／accent約5%を初期目安に、Darkは実codeのみ。上部のカテゴリgradientと低opacityのRGB端部でLessonとつなぐ。索引は5つの軽い領域、空間は実sprite＋図、操作は番号付きprocess。カテゴリと関連リンクを別色にし、情報密度に注意する必要がある。</li>
<li><strong>B 縦の支援手順表</strong>：同書体、質問40／手順26、White主体＋細いカテゴリ帯。縦の番号列に症状・実code・実図を順番に並べ、装飾は工程を示す線だけ。DEBUGとスクロール認識には強いが、座標の図と意味を一度に照合しにくく、既存構造への変更が大きい。</li>
<li><strong>C 白い技術ポスター</strong>：大きなmonoのカテゴリ64〜80／説明22、White主体＋大きな端部category plane。実sprite・Rect・数直線を主役にし、非対称なcropと大きな文字で印象を作る。区画単体には強いが、複数テーマの検索性と支持情報の落ち着きが弱く、ReferenceをLessonの主役へ近づけすぎる。</li>
</ul>
<p>Aは操作・図・コードを含む既存Referenceを変形せず、カテゴリ認識と検索性を同時に改善できるため選択。B/Cを混ぜない。代表はGameの座標区画。固定Header／category nav→30pxテーマ→左の実sprite座標図／右の位置・軸・注意→実code→固定scroll cue。図・code・帰路・カテゴリ色が共存する難しい画面で、1280×720で試作してからIndex・DEBUGを確認し、残り4ページへ適合した。</p>
<h3 id="実描画の修正記録">実描画の修正記録</h3>
<p>初回は旧CSSとの優先度競合でGame／DEBUGもBlueになり、旧Index classに依存したicon寸法が外れて巨大化した。座標のcodeもscroll cueの固定領域で切れた。Typography3／Composition2／Color3／Hierarchy2／Imagery3／Consistency3／Personality3／Usability2、NEEDS REVISION。</p>
<p>category変数の優先度・Reference専用icon寸法・座標図の表示高を修正。操作のAmber Supporting NoteとPixnoteの工程が旧共通CSSで戻る問題も、Reference専用blockを共通CSSの後ろへ移して解消。Pixnoteの番号間矢印に余白を追加した。図の座標・比率・sprite・文言・実codeは不変。Scroll cueは最終本文の位置から判定し、末尾のanchor着地用余白を「まだ読む内容」と誤認させない。</p>
<h3 id="今回の受入確認">今回の受入確認</h3>
<p>1280×720／1366×768／1024×768／320×180で、全7ページ＋38 anchorを通常／<code>/course/</code>の両buildで確認。計360描画状態、各1,070検査・失敗0。全140 Lessonリンクの実クリックと帰路、縦scroll、全anchor、category nav、reload、Tab／Enter／focus、PresenterとAI Notesを確認した。categoryのactiveが各ページで一つ、Pixnoteも制作がactive、scroll cueは残る実本文と一致し最下部では消える。Source integrityは140リンク・306静的リンクのbroken 0。</p>
<p>通常・subpath buildとも成功。既存の生成CSS minify警告（<code>1.5rem</code>／<code>0.125rem</code>）2件のみで、新規警告・Reference runtime errorなし。active navの文字／面contrastは実DOMから算出して4.76〜6.37、全7ページの<code>aria-current</code>も確認した。Reference全7ページの本文はclass属性を除いて完全一致し、URL／anchor／code／表示文言／link targetは不変。Game1全25・slides/public全13・Lesson Markdown全6の44ファイルは開始時SHA-256と一致。Hint・固定ID・学習範囲・時間・カリキュラムは変更なし。Guideは利用方法・運用に変更がないためVisual詳細を増やしていない。</p>
<table>
<thead>
<tr>
<th>評価軸</th>
<th style="text-align:right">最終点 / 5</th>
<th>実描画の根拠・修正</th>
</tr>
</thead>
<tbody>
<tr>
<td>Typography</td>
<td style="text-align:right">4</td>
<td>H1／テーマ／本文／Meta／codeを分離。旧classに依存していたicon寸法とPixnote文字サイズを修正</td>
</tr>
<tr>
<td>Composition</td>
<td style="text-align:right">4</td>
<td>5カテゴリ索引、空間図＋意味、番号process、DEBUG表を役割別に維持。固定cueで切れた座標codeを修正</td>
</tr>
<tr>
<td>Color</td>
<td style="text-align:right">4</td>
<td>カテゴリ色は現在地、Blueはリンク。誤ってBlue一色だったCSSを修正。注意Amber／概念Violet／確認Greenを局所化</td>
</tr>
<tr>
<td>Visual Hierarchy</td>
<td style="text-align:right">4</td>
<td>Header→active category→主題・実図／code→補足／リンク→scroll cue。操作のR注意を本文から区別</td>
</tr>
<tr>
<td>Imagery</td>
<td style="text-align:right">4</td>
<td>実sprite・正確な原点／方向／Rectは維持し、縮小図の表示高だけ調整。工程は既存内容を番号と矢印で整理</td>
</tr>
<tr>
<td>Consistency</td>
<td style="text-align:right">4</td>
<td>7ページ共通のWhite・category tint・active・scroll cue・書体。Pixnoteも制作familyへ合わせた</td>
</tr>
<tr>
<td>Personality</td>
<td style="text-align:right">4</td>
<td>LessonのRGB Identityを静かな端部blurへ弱め、Gameの技術図とDark実codeを主役にした支援辞書</td>
</tr>
<tr>
<td>Usability</td>
<td style="text-align:right">4</td>
<td>全リンクと帰路、hash、keyboard、scroll cueの条件・消灯、4サイズを実操作確認</td>
</tr>
</tbody>
</table>
<p>判定：<strong>PASS（visually verified、制作者確認）</strong>。3秒は5カテゴリ／現在地と帰路の拾いやすさ、Blurは実際に4pxぼかした索引・座標・代入で主題／図・code／補足／navigationの階層を確認。Self-guidedは「調べる対象→見る場所→下に続く認識→既存の試行→戻る」が追えるか点検した。児童による理解・30秒〜1分の実測、Windows実機投影は未検証。320pxは構図確認で、モバイル全文閲覧保証ではない。</p>
<p>最新代表出力7枚は<a title="開発リポジトリの参照（Web配布対象外）">Reference Visual Family review</a>。初回体系改修の9枚とは別保存し、PDFでscroll機能を代替したとは扱わない。新しいUIやReference本文をLesson側へバックポートしていない。</p>
`},"25_student_instructor_web_architecture":{html:`<h1 id="student--instructor-web-architecture">Student / Instructor Web architecture</h1>
<p>現行運用は末尾「教材ポータル・作品・進度の役割分担（2026-10-16）」を優先する。Instructor資料はGuideとReference、紙はactiveの3 PDFへ集約し、docs/24は内部正本とする。以下のPhase別記述・検証結果は当時の履歴で、旧Schedule／Deckの再実装指示ではない。</p>
<h2 id="stage-1監査と採用構成">Stage 1：監査と採用構成</h2>
<p>旧構成はslides/slides.mdを入口に6 Lessonと7 Referenceをsrcで読み込み、Slidev標準のhistory router・routeAlias・Presenterを使う単一SPA。devは3030、buildはslides/dist。名前付きURLのreloadはサーバーのSPA fallbackに依存していた。Referenceは論理aliasをfromへ保存し、LessonLinkが通常／Presenterのprefixを選んでいた。</p>
<p><strong>単一build＋Student／Instructorのroute prefixを採用する。</strong> Slidev公式setup/routes.ts・setup/main.tsで標準play／presenter routeを利用する。独自Router・Presenter・Storeを作らず、Lesson・Referenceの同じmoduleを両contextで表示する。</p>
<p>比較：2つのbuildは本文を共有できるが、同じReference・JS・assetsを2系統へ出力しdev管理も増える。wrapper appは別のshell・routing層が必要。今回はNotesが機密でないため単一buildが最小で、Instructor資料は別のlazy chunkへ分離する。</p>
<h2 id="source-of-truth">Source of truth</h2>
<ul>
<li>入口：slides/slides.md。既存のsrcで読む13ファイルを維持。</li>
<li>Lesson：slides/month8／month9の各Markdown。Notes・Hint・Quiz・固定ID・時間もここが正本。Student／Instructor用Markdownを複製しない。</li>
<li>Reference：slides/referenceの7 Markdown。体系・from・hashは<a href="/robot-python-game/instructor/docs/23_game1_reference_system/">docs/23</a>。</li>
<li>講師運用：<a href="/robot-python-game/instructor/guide/">INSTRUCTOR_GUIDE</a>。カリキュラム：<a href="/robot-python-game/instructor/guide/#この5か月で目指すこと">docs/24</a>。Webのために本文を別管理しない。</li>
<li>Homeはslides/pages/MaterialsHome.vue、文書viewはInstructorDocument.vue。Phase 3のHome UXは末尾へ。</li>
</ul>
<h2 id="urlと責務">URLと責務</h2>
<p>以下はbaseが / の時。末尾 / の有無を許容する。</p>
<table>
<thead>
<tr>
<th>対象</th>
<th>URL</th>
<th>内容</th>
</tr>
</thead>
<tbody>
<tr>
<td>Student入口</td>
<td>/student/</td>
<td>6 LessonとReferenceだけ</td>
</tr>
<tr>
<td>Instructor入口</td>
<td>/instructor/</td>
<td>同じ6 Lesson（新規タブ）と、Guide・Referenceの2資料</td>
</tr>
<tr>
<td>Lesson</td>
<td>/student/month8-1/、/instructor/month8-1/ 等</td>
<td>同じ本文・INDEX・Hint・Quiz・OPTIONAL</td>
</tr>
<tr>
<td>Reference入口</td>
<td>/student/reference/、/instructor/reference/</td>
<td>共通索引month8-1-referenceへのredirect</td>
</tr>
<tr>
<td>Reference各ページ</td>
<td>/student/ref-game 等、/instructor/ref-game 等</td>
<td>同じ7ページ・既存alias／hash</td>
</tr>
<tr>
<td>Presenter</td>
<td>/instructor/presenter/month8-1/ 等</td>
<td>Slidev標準Presenterと既存Speaker Notes</td>
</tr>
<tr>
<td>Notes一覧</td>
<td>/instructor/notes/</td>
<td>Slidev標準Notes</td>
</tr>
<tr>
<td>Guide</td>
<td>/instructor/guide/</td>
<td>docs/INSTRUCTOR_GUIDE.mdをrender</td>
</tr>
<tr>
<td>旧Schedule</td>
<td>/instructor/schedule/</td>
<td>Guideへ互換redirect。docs/24全文はrenderしない</td>
</tr>
<tr>
<td>関連文書</td>
<td>/instructor/docs/文書名（拡張子なし）/</td>
<td>番号付きdocsを同じrendererで参照</td>
</tr>
</tbody>
</table>
<p>Student HomeにGuide／Schedule／Presenterへのリンクを出さない。通常のStudent toolbarとcontext menuからPresenter・source editorの入口を除く。Instructorは標準Presenterを使い、本文へ大きなcontext labelや講師メモを追加しない。</p>
<p>Notesは同じbuildに含まれ、直接Instructor URLを知れば参照可能。完全秘匿・アクセス制御ではない。パスワード・token・個人情報を教材sourceへ入れない。認証・アカウント・backendは追加しない。</p>
<h2 id="標準ナビゲーションとreferenceの帰路">標準ナビゲーションとReferenceの帰路</h2>
<p>LessonLinkは現在のaudienceをprefixへ反映し、Presenter内では/instructor/presenter/を維持する。fromは引き続き許可済みの論理Lesson aliasだけで、外部URLや任意pathを受け入れない。query・hash・AI support・reloadでcontextを維持する。</p>
<p>Slidev標準の次／前／overviewは元のalias URLを作るため、公式app setupのguardで現在のcontextへ正規化する。標準Presenterのroute名・params.no・画面は維持し、ノードモジュールをpatchしない。旧名前付きURL・旧/presenter/URLは互換redirectし、既知aliasには静的入口も生成する。</p>
<p>Reference→カテゴリ／hash→元Lesson、Presenter→Reference→Presenterが同じ文書で成立する。直接Reference訪問・不正fromはそのcontextのHomeへ戻る。AI supportのHeader判定は末尾/も許容する。Pixnote等の外部URLは不変。</p>
<h2 id="guideのweb表示">GuideのWeb表示</h2>
<p>Viteのvirtual moduleが既存MarkdownをMarkdownItでHTML化し、InstructorDocumentが表示する。Guide sourceのコピー・手編集した別HTMLは作らない。番号付き文書も同じ方式でrenderし、devではdocs変更を監視する。</p>
<p>Web navigation層で相対リンクを解決する：docs→Instructor文書route、Lesson Notes→標準Presenter、Reference→Instructor Reference、存在する文書画像→doc-assets。Web対象外の開発用Python等はリンクを非活性にして参照ラベルを残す。source本文は変更しない。見出しanchorとGuideの旧互換anchorは維持する。</p>
<p>ローカル絶対パスを生成HTMLへ埋め込まない。rendererの入力は信頼済みリポジトリ文書のみで、投稿・任意ファイル取得機能を持たない。</p>
<h2 id="buildbase静的reload">Build・base・静的reload</h2>
<p>slides/で npm run dev により両contextを同時に確認する。npm run build はbuild-web.mjs経由で同じslides.mdを1回buildする。既存exportは維持。通常 / と --base /robot-python-game/ に対応する。</p>
<p>出力は**slides/dist/**で、Phase 1のリポジトリ直下dist/monthX-X/と衝突しない。build wrapperの出力先はslides/distまたは検証用tmpへ限定し、Game1・正本・生徒配布先へ出力しない。</p>
<p>build後、同じindex.htmlを既知Lesson／Reference／Presenter／文書routeのdirectory indexへ機械的に配置する。複製するのは空のSPA起動HTMLだけで、Markdown本文・Reference・JS module・assetsは共通。静的ホストは既知pathの実index.htmlを返せるため、PagesでもLessonのdirect URL／reloadをSPA fallbackに依存させない。</p>
<p>baseはasset URL・Router history・文書リンクへ共通適用する。/robot-python-game/student/month9-3/等へ公開する場合、slides/distの中身をサイトのそのbaseへ配置する。任意の未登録pathまでHTTP 200を保証しない。URLのquery／hashは実ファイル配置と分離する。</p>
<p>web-routes.jsonは生成した入口と元13 sourceを記録する検証用manifest。.nojekyllも生成し、静的ファイルをそのまま置く前提とする。distはGit管理しない。生徒コードzip／download・GitHub Actions・Pages deployは未作成。</p>
<h2 id="検証">検証</h2>
<p>node tools/check_reference_links.mjsで既存140導線・306リンクをsource検査。node tools/check_web_routes.mjsは専用headless ChromeのCDPを使い、Home・両contextの6 Lesson／7 Reference・Presenter／Notes・Guide／Schedule・既存帰路・Hint／Quiz retry・keyboard・reloadを確認する。Homeは1280×720／375×667、Lessonは既存の4サイズVisual検証を再利用する。</p>
<p>--out slides/dist または検証build先を指定すると、SPA fallbackなしの一時static serverで全manifest入口のHTTP 200とブラウザ描画を検査する。--urlでdevも検査できる。ユーザーの通常Chrome／desktop Computer Useは使わない。コマンドと環境条件は<a title="開発リポジトリの参照（Web配布対象外）">slides/README</a>へ。</p>
<p>Source hashでLesson本文・Notes・Hint・Quiz・Reference・Game1 Python・assets・固定ID・Phase 1生成物の非変更を確認する。変更した共通Componentはcontext対応のLessonLinkと末尾/対応のLessonHeaderだけで、Lesson Visual・文面・学習範囲は変えない。実授業・児童理解・Windows実機・Pages上の運用は今回の検証ではない。</p>
<h3 id="受入記録2026-10-15">受入記録（2026-10-15）</h3>
<p>通常 / と /robot-python-game/ のbuild成功。SPA fallbackを持たないstatic server＋専用headless Chromeで、各561入口のHTTP 200・Student／Instructor各6 Lesson・各7 Reference・Guide／Schedule・標準Presenter／Notes・直接訪問／reloadを確認した。各build 1,496検査が成功し、既存140導線を両contextで実クリック・帰路検査した。devの重点94検査も成功。</p>
<p>6 LessonのStudent／Instructor既定画面PNGは全件一致。Homeは1280×720／375×667で確認。Hintの開閉・Enter操作、Quiz正誤／retry、矢印キーのcontext維持、末尾/付きAI支援帰路を検査した。検査側の非表示先読みページ選択とCDP Enter入力を修正し、教材のHint／Quizは変更していない。</p>
<p>Source integrityはLesson／Notes・Reference・Game1全25ファイル・Phase 1生成物42ファイル・Guide・カリキュラム正本のhash一致を確認。Python回帰は17テスト成功。既存Reference検査は140導線・306リンクの失敗0。生成JS／CSSのローカル絶対パス検査も失敗0。</p>
<p>既存の生成index.html通知・UnoCSS minify警告2件は残る。検証用tmp出力先の通知以外に新規build警告・runtime errorは検出していない。Guideは相対リンクのWeb解決だけで本文不変。認証による秘匿・公開ホスト上の試験・Windows実機・児童試用は未実施。deployしていない。</p>
<p>公式仕様の参照：<a href="https://sli.dev/custom/config-routes" target="_blank" rel="noopener noreferrer">route setup</a>、<a href="https://sli.dev/custom/config-vite" target="_blank" rel="noopener noreferrer">Vite拡張</a>、<a href="https://sli.dev/guide/hosting" target="_blank" rel="noopener noreferrer">build／base</a>、<a href="https://sli.dev/guide/ui#presenter-mode" target="_blank" rel="noopener noreferrer">標準Presenter</a>。実装は既存のSlidev 52.14.2のローカルAPIとも照合し、バージョン更新は行っていない。</p>
<h2 id="phase-3授業用home-ux2026-10-15">Phase 3：授業用Home UX（2026-10-15）</h2>
<p>目的は、生徒が今日のLessonを手動で選ぶこと、講師がLesson・Presenter／Notes・Guideをすぐ開くこと。教室PCを主に、tablet／320px幅でも同じ情報を縦に読み進められるHomeとする。Phase 2のroute・build・単一Slidev source・文書rendererは維持する。認証・進捗・download・未実装Lesson・deployを追加しない。</p>
<h3 id="方向案と代表試作">方向案と代表試作</h3>
<ul>
<li><strong>A 制作ノート型（採用）</strong>：既存日本語Sans＋等幅ID。白約90%＋Blue navigation、月ごとに3つの選択領域。小さなgame／book iconと端部のごく薄いRGB gradientだけを使う。特徴は月の一つのSoft Zone内でLessonを選ぶ構成。既存Lessonに連続する反面、均等なCard量産に戻すと単調になる。</li>
<li><strong>B 授業ランチャー型</strong>：同書体、大きいID＋操作列。白約85%＋Blue約10%、月を縦軸にまとめ、画像より操作位置を優先。装飾を工程・選択の位置へ限定する。操作は速いが、生徒側が事務的な一覧になりやすい。</li>
<li><strong>C ゲーム目録ポスター型</strong>：大きい月番号・実ゲーム画像を非対称crop、白約70%＋強い色面、既存Sans／mono。大胆な画像配置で教材の入口を作るが、Lesson選択より画像が強く、320pxと講師の資料操作には不利。</li>
</ul>
<p>Aを基準とし、B/Cの装飾を混合しない。用途による構造差としてStudentは大きな選択領域、Instructorはcompactな操作列と独立utilityにする。代表Student Homeを先に1280×720で試作。H1→Month→ID／実Slideと同じ題名／短いGoal→開く→Referenceを確認してからInstructorへ展開した。書体・Navigation色・Soft Zoneは既存grammarの再利用で、新しいLesson共通規則は不要なためdocs/14は変更しない。</p>
<h3 id="構造とmetadata">構造とmetadata</h3>
<ul>
<li>Student：「今日の教材を選ぶ」→Month8の3 Lesson→Month9の3 Lesson→「困った時は Reference」。講師用入口・用語・到達区分・時間を出さない。</li>
<li>Instructor：「講師用教材」→同じ月順の6 Lesson。それぞれprimary「教材を開く」、secondary「生徒表示」「Presenter / Notes」。下部の「講師用」にGuide・Canonical Schedule・Reference・Student Home確認を分離する。Presenterは1クリックで既存標準画面へ。</li>
<li><code>slides/navigation.ts</code>の<code>homeLessons</code>だけにid／month／title／shortGoalを持つ。3種のrouteは既存aliasから導出し、本文・Notes・時間・区分を複製しない。title全6件は実SlideのH1と完全一致、Goalと順序はdocs/24と照合。8-3のrandomを必須へ昇格させない。</li>
<li>月sectionはmetadataから生成。将来の実装済みLessonを追加してもHome側に月をハードコードしない。今はMonth10〜12やComing Soonを表示しない。</li>
<li>700px以下は縦並び。Home自身がscrollし、320×180でも文字を縮小して詰め込まない。全linkは44px以上、文字で行き先を示し、focus ring・hoverを共通化。Guide／Scheduleのrenderer・本文・独自scrollは不変。</li>
</ul>
<h3 id="実描画と修正">実描画と修正</h3>
<p>旧Homeは6件すべて「今日やること」で判別できず、Typography3／Composition2／Color2／Hierarchy2／Imagery2／Consistency3／Personality1／Usability2で要修正。最初のStudent試作は縦885pxとなり下段操作とReferenceが初期画面から消えたためComposition／Usability3。余白・見出し帯・Goalを整理し、本文を切らず1280×720内へ収めた。Instructor初回もutilityが隠れたため行間とHeroの密度を調整し、6 Lessonと資料入口を見渡せる状態へ修正した。320pxは適切な縦scrollを優先する。</p>
<table>
<thead>
<tr>
<th>評価軸</th>
<th style="text-align:right">最終点 / 5</th>
<th>実描画の根拠・対応</th>
</tr>
</thead>
<tbody>
<tr>
<td>Typography</td>
<td style="text-align:right">4</td>
<td>日本語H1、等幅ID、Lesson名、Goal、Metaの強弱。PCと320pxで切れずに折り返す</td>
</tr>
<tr>
<td>Composition</td>
<td style="text-align:right">4</td>
<td>Studentの月別選択面、Instructorの操作列＋utility。初回の縦過密を修正</td>
</tr>
<tr>
<td>Color</td>
<td style="text-align:right">4</td>
<td>Whiteと淡いRGB、Blue操作、Neutral補助。主要文字／面のcontrastは6.16:1以上</td>
</tr>
<tr>
<td>Visual Hierarchy</td>
<td style="text-align:right">4</td>
<td>Hero→月→Lesson→Reference／utilityを実際の4px blurとthumbnailでも識別</td>
</tr>
<tr>
<td>Imagery</td>
<td style="text-align:right">4</td>
<td>game／bookの既存iconを用途の識別だけに使用。不要なthumbnail・架空の教材画像なし</td>
</tr>
<tr>
<td>Consistency</td>
<td style="text-align:right">4</td>
<td>既存Sans／mono・Navigation Blue・borderlessとcontext付きrouteを維持</td>
</tr>
<tr>
<td>Personality</td>
<td style="text-align:right">4</td>
<td>制作ノートの月別まとまりと技術的なID、静かなRGB端部。広告Heroや大型Card列にしない</td>
</tr>
<tr>
<td>Usability</td>
<td style="text-align:right">4</td>
<td>大きなStudent選択、講師操作の定位置、用途の明確なlink、狭い画面のreflowとscroll</td>
</tr>
</tbody>
</table>
<p>判定：<strong>PASS（visually verified、制作者確認）</strong>。3秒は「選ぶ」と講師の操作群、BlurはHero／月／Lesson／支援の主従、Self-guidedは題名と目的から開く→必要時支援へ進む経路を点検した。児童による発見時間・理解や教室実機の実測ではない。</p>
<h3 id="検証方法">検証方法</h3>
<p>専用headless Chromeのみ。<code>tools/check_web_routes.mjs</code>へHomeの4サイズ＋320×667、全Home link実クリック・reload・44px領域・横overflow・Native Tab／Enter・focus ring・最終utilityまでのscroll検査を追加。最初のEnter判定は遷移前のHome DOMを完了扱いしたテスト側のraceだったため、遷移先URLとviewの両方を待つ方式へ修正し、アプリへ疑似Enter処理を足していない。devのHome重点190検査が成功。</p>
<h3 id="phase-3受入記録">Phase 3受入記録</h3>
<p>通常baseと<code>/robot-python-game/</code>のbuildが成功。SPA fallbackなしのstatic serverで、各561入口・両Homeの10描画状態・Homeの全29リンク実クリック・直接reloadを含む重点回帰<strong>各850検査、失敗0</strong>。6 Lessonの両context、7 Referenceの帰路、Presenter／Notes、Guide／Canonical、既存Hint／Quiz retry・keyboardを再検証した。旧140導線全件の実クリックはPhase 2の記録を保持し、今回はsourceの140導線／306リンク検査と重点回帰を実施した。</p>
<p>Homeの4サイズは1280×720／1366×768／1024×768／320×180。加えて320×667で本文をreflowし、最終支援までのscrollと全29リンクのNative Tab巡回・focus表示を確認した。PCでは6 Lessonのprimary actionが初期表示内。4px blur・thumbnail・実寸画像で8軸を再評価した。320×180はHome全体を一画面に縮小する保証ではなく、縦scrollで使う極小viewport試験。</p>
<p>102保全ファイルのSHA-256が全件一致。内訳にGame1全25・生徒配布物42・Lesson／Reference Markdown13・Guide・docs/24・route setup・build／Vite／package設定を含む。本文・Notes・Hint・Quiz・固定ID・Python・assets・カリキュラム・Phase 2 architectureは非変更。Homeはmetadataを共有し、sourceコピーを増やしていない。</p>
<p>既存の生成index通知・CSS minify警告2件は残り、新規runtime errorは0。subpathのproject外outDir通知は検証用tmpへの出力による。docs/25とslides/READMEを更新し、docs/14・Guideは既存規則／教育責務を変えないため変更しない。Phase 3受入はPASS。Windows／iPhone実機・教室投影・児童試用・公開ホストは未検証。deployはPhase 4であり、未実施。</p>
<h2 id="phase-4github-pages公開2026-10-15">Phase 4：GitHub Pages公開（2026-10-15）</h2>
<p>公開URL：</p>
<ul>
<li>Student Home：https://fsakai-000.github.io/robot-python-game/student/</li>
<li>Instructor Home：https://fsakai-000.github.io/robot-python-game/instructor/</li>
<li>Pages repository：https://github.com/fsakai-000/robot-python-game</li>
</ul>
<p>既存の単一Slidev source、<code>/student/</code>・<code>/instructor/</code> prefix、<code>/robot-python-game/</code> base、561のdirectory index、<code>.nojekyll</code>を維持した。GitHub PagesはHTTPS強制・GitHub Actions build sourceで有効化。workflowは<code>site/</code>の静的artifactだけを<code>actions/upload-pages-artifact</code>から<code>actions/deploy-pages</code>へ渡す。</p>
<p>公開repositoryには、ローカルで検証済みの<code>slides/dist/</code>相当とPages workflowだけを置く。Python教材、Phase 1配布物、Lesson／Reference source Markdown、開発文書、tests、toolsは公開repositoryへpushしない。これは公開サイトに必要な配信物だけへ開示範囲を限定するためで、教材の正本は引き続きこの作業フォルダにある。公開artifact内のInstructor Notes／GuideはPhase 2の方針どおり機密ではなく、認証・完全秘匿ではない。</p>
<h3 id="公開検証">公開検証</h3>
<p>Actions run <code>38648641190</code>は成功。公開hostで<code>web-routes.json</code>記載の561入口とindexから参照する6 assetがHTTP 200。Student／Instructor Home、両contextの6 Lesson、両contextの7 Referenceと帰路、6 PresenterとNotes一覧をdirect URL・reload込みで実描画確認した。Hintの開閉／Enter、Quizの誤答→retry正答、矢印キーのStudent context維持も成功した。</p>
<p>Homeは公開URLを1280×720と320×667で再描画。Studentは6 Lesson＋Reference、Instructorは6 Lesson＋22導線を確認し、横overflow／文字clipは0、最小操作領域はStudent 73.5px、Instructor 44px。既存Phase 3の8軸を再評価し、Typography／Composition／Color／Visual Hierarchy／Imagery／Consistency／Personality／Usabilityはいずれも4以上。判定は<strong>PASS（visually verified）</strong>。</p>
<p>ローカルでは<code>npm ci</code>、<code>npm run build -- --base /robot-python-game/</code>、Reference 140導線／source link 306件、Python 17 testsが成功。buildの既知CSS minify警告2件は継続し、Actionsには使用actionのNode 20廃止予告と<code>ubuntu-latest</code>移行予告があるが、deploy結果は成功。Lesson／Reference本文、Notes、Hint、Quiz、Python、assets、カリキュラム、Phase 1配布仕様、route／build architectureは変更していない。</p>
<h2 id="phase-4公開後home帰路instructor-reading-ux2026-10-15">Phase 4公開後：Home帰路・Instructor Reading UX（2026-10-15）</h2>
<h3 id="責務と実装">責務と実装</h3>
<ul>
<li>共通<code>HomeLink.vue</code>はRouterLinkでbaseを解決し、audienceからStudent／Instructor Homeへ切り替える。Presenterでも帰路はInstructor Home。LessonHeader経由で本編・Optional・Quiz・AI支援へ、Reference layout経由で全7 Referenceへ適用する。Referenceの有効なfrom帰路は維持し、直接訪問時の旧「Lesson一覧」をHomeへ統合した。</li>
<li>縦長の小画面はSlidev縮尺の外へ実寸44pxのHomeを出し、Headerの同じ導線は隠す。<code>global-top.vue</code>の既存Slidev layer＋Teleportだけで、独自Router・Storeを作らない。標準Presenterの複数previewと印刷に浮動導線を出さない。</li>
<li><code>instructor-reading.mjs</code>がGuideの15 Lesson見出し・既存項目から要点と詳細を生成する。原文は変更しない。各LessonはGoal／MUST／SHOULD／Time／Completionを先に表示し、残りをnative detailsへ配置する。先頭は8項目以内、月ごとの3 Lesson要約とcompactな目次を持つ。</li>
<li>Canonicalは既存の15 Lesson表から月の5行を生成し、重要な設計の短い要約と元の全詳細節を保持する。折りたたみ前後で正本の区分・時間・責務を変えない。</li>
<li>同じvirtual documents moduleから6 Briefを生成し、<code>/instructor/monthX-X/brief/</code>で表示する。目的・MUST／SHOULD・導入・つまずき3組・完了はGuideの項目、Hint／Referenceは同じ支援項目中の該当文だけを抽出する。Brief本文の手入力コピーは作らない。計画時間の略号はGuideと同じで、詳細説明はGuideへ戻る。</li>
<li>Instructor Homeは各Lessonの主導線→Presenter／Notes→Lesson Briefとし、生徒表示の確認は下部Student Homeへまとめる。Brief下部は該当Guide anchor／Presenter／Lessonへ。6 Briefのdirectory indexを追加し、単一build・13 source入力は維持、既知静的入口は561→567となる。</li>
<li><code>InstructorDocument.vue</code>が固定Headerとhash着地時の祖先details展開を担当。表の横scrollは局所だけ。native detailsの印刷本文表示をCSSで扱う。元の文書URL・旧anchorは残す。</li>
</ul>
<h3 id="3案代表試作と修正">3案・代表試作と修正</h3>
<p>A「要点付き運用ノート」を採用。既存Sans／mono、White約90%＋資料別accent、要点と折りたたみのまとまりで判断順を作る。画像は増やさず、症状→対応の番号を使う。弱点はBriefの文章密度。B「サイドレール」は白約80%＋細い色帯・目次列で現在地を追えるが、1024px以下の本文幅を圧迫。C「授業指揮シート」は大番号／時間・強いTeal面と非対称構図で即時性を高めるが、ダッシュボード化して長文参照と既存Identityから離れる。Aを選び、B/Cを混合していない。</p>
<p>代表Month9-2 Briefを先に1280×720で描画。初回は右列が同じ強さの長文でComposition／Hierarchyを3とし、症状の太字→弱い対応文、Hint／Reference抽出へ修正した。Canonicalの初回15小行は5月分を見渡せず、月ごとの5行へ。全6 BriefをPC2サイズで計測し、Month8-1の下部約20px超過を時間まわりの余白で解消した。正文・Body文字サイズは削っていない。Guideのsticky Headerの描画不安定は、位置を変えない固定Headerへ変更した。</p>
<table>
<thead>
<tr>
<th>軸</th>
<th style="text-align:right">点 / 5</th>
<th>実描画の根拠・修正</th>
</tr>
</thead>
<tbody>
<tr>
<td>Typography</td>
<td style="text-align:right">4</td>
<td>目的／区分／症状／対応／Metaを強弱で区別。長い目的は原文の文単位で主従を分ける</td>
</tr>
<tr>
<td>Composition</td>
<td style="text-align:right">4</td>
<td>Guideの月・要点、Canonicalの5行、Briefの2列を役割別に配置。はみ出しと密度を修正</td>
</tr>
<tr>
<td>Color</td>
<td style="text-align:right">4</td>
<td>Guide Blue、Canonical Violet、Brief Teal、確認待ちAmber。MUST等は文字も併記</td>
</tr>
<tr>
<td>Visual Hierarchy</td>
<td style="text-align:right">4</td>
<td>要点→詳細、Briefは目的→到達点／症状→完了。Reference帰路とHomeを区別</td>
</tr>
<tr>
<td>Imagery</td>
<td style="text-align:right">4</td>
<td>不要なthumbnailを増やさず、実情報の番号・症状→対応を使用。既存ゲーム図は非変更</td>
</tr>
<tr>
<td>Consistency</td>
<td style="text-align:right">4</td>
<td>同じ書体・borderless・Navigation Blue・共通Reading shell。資料種別は同じ構図へ押し込めない</td>
</tr>
<tr>
<td>Personality</td>
<td style="text-align:right">4</td>
<td>制作教材の運用ノートという方向。巨大Cardや企業dashboardへ寄せない</td>
</tr>
<tr>
<td>Usability</td>
<td style="text-align:right">4</td>
<td>固定帰路、native details、hash展開、小画面reflowと実寸Home、Briefの当該資料への接続</td>
</tr>
</tbody>
</table>
<p>3秒は「帰る／要点を読む／必要なら詳細」、Blurは目的・月／区分・完了と補助操作の主従、Self-guidedはSummary→当該詳細／教材→Homeの経路を制作者が点検する。児童・講師による30秒発見時間の実測ではない。</p>
<h3 id="保全と検証方法">保全と検証方法</h3>
<p><code>node tools/check_instructor_source.mjs</code>でGuide／Canonicalの原文fragment・旧anchorと6 Briefの抽出を905件検査。Guide15 Lessonの項目欠落は生成時エラーとする。Presenter Notesは96ブロックを監査（最大789文字）。時間・問い・支援等のページ固有情報であり、今回は全面／局所の本文改稿を行わず、共通書式だけdocs/14・20へ残した。</p>
<p>Referenceの本文44＋共通Header96＝140導線は不変。旧Reference fallbackのLessonLink 1件をHomeLinkへ統合したため、従来checkerの静的集計は306→305（broken 0）。削除したURLはなく、新しいHome・Briefはruntimeで別途検査する。Lesson／Reference Markdown、Guide、Canonical、Game1 Python／assets、Phase 1配布物は開始時95ファイルのhashで保全確認する。公開repositoryへsourceを追加せず、検証済み生成物だけを既存site/へ反映する。</p>
<h3 id="最終検証再公開記録">最終検証・再公開記録</h3>
<p>通常／Pages baseのbuild成功。通常buildのReading重点1,224件、Pagesの完全回帰2,352件がPASS。4サイズ1280×720／1366×768／1024×768／320×667のReading32画面、Home10状態、全96ページ＋7 Referenceの両context帰路、6 Briefのdirect reload、native details／focus、hashによる展開とreload、印刷時の折りたたみ本文表示を含む。既存140導線の両context実往復、Hint／Quiz／Presenter Notesも確認。6 BriefからGuide／Presenter／Lessonへの18導線も別途実クリックPASS。Student／Instructorの異なるHome文言はHeaderだけを除き、6 Lessonの本文描画は一致した。</p>
<p>Guide／Canonicalの全文fragment・旧anchor・Brief抽出905件がPASS。95保全ファイルのhashはすべて一致した。Notesの本文、Lesson／Reference Markdownへの直接編集は0。Home追加は共通Header／layoutだけで、Python・Game・assets・Phase 1配布物・カリキュラムは非変更。新規runtime errorは0、buildは既存の生成index通知・CSS minify警告2件のみ（tmp出力時はoutDir通知もある）。8軸は各4、3秒／実際の4px blur／thumbnail／Self-guidedの制作者確認を経て<strong>PASS（visually verified）</strong>。</p>
<p>公開専用repositoryへ静的生成物だけをcommit <code>7475ec56a441aa10d57705c652f8522246d97ce4</code>でpush。Pages <a href="https://github.com/fsakai-000/robot-python-game/actions/runs/38665897287" target="_blank" rel="noopener noreferrer">Actions run 38665897287</a>は全step成功。workflow・公開repositoryのREADMEは不変、変更範囲はsite/だけ。891生成ファイルの事前検査でPython／教材source／Phase 1の混入・ローカル絶対パス／token形式は0件。素材の帰属を持つgame1/README.mdは既存どおり同梱した。</p>
<p>本番は検証済みHTMLとのbyte一致、全567入口のHTTP 200、両Home、両contextの6 Lesson／7 Reference、6 Briefとreload、Guide／Canonicalとhash、Presenter／Notes、320px reflow・44px Home・実クリック帰路の77 UI検査がPASS。raw Python／Lesson Markdown／Guide Markdownの4 URLは404で、許可済みのGuide Web表示とは区別した。最初の並列8検査では一時503が出たが、単独で200を確認し、並列2の全入口確認が成功した。Pagesの末尾/補完を許容するよう検査のURL照合だけを修正し、context／query／hashの一致は維持した。</p>
<p>公開入口は上記Student／Instructor URL。Brief例は<a href="https://fsakai-000.github.io/robot-python-game/instructor/month9-2/brief/" target="_blank" rel="noopener noreferrer">Month9-2</a>、資料は<a href="https://fsakai-000.github.io/robot-python-game/instructor/guide/" target="_blank" rel="noopener noreferrer">Guide</a>／<a href="https://fsakai-000.github.io/robot-python-game/instructor/schedule/" target="_blank" rel="noopener noreferrer">Canonical</a>。公開記録はdeploy後のローカル運用正本への追記で、公開artifactにsource文書を追加したものではない。実授業・30秒発見時間・Windows／iPhone実機・他browserの印刷は未検証。</p>
<h2 id="instructor-quick-deckheader統一2026-10-15">Instructor Quick Deck・Header統一（2026-10-15）</h2>
<h3 id="役割と正本">役割と正本</h3>
<p>通常はInstructor Home→<strong>授業Brief</strong>→Lesson／Presenter。講師資料はQuick decision（Brief／Curriculum Deck）→Summary（Guide／Canonical冒頭）→Full detailの3層。Notesはページ固有の補足、Quick DeckはLesson全体の判断、Guideは運用、Canonicalは正式な順序・到達点・区分・80分枠の正本。既存Notes本文・Guide原文・docs24は編集しない。</p>
<p><code>instructor-decks.mjs</code>はGuideの目的・MUST／SHOULD・完了・症状と対応・支援・進度差・次回と、docs24の到達点／概念／自走／時間の4表を抽出する。必須項目・4表の15行が欠けたら生成を止める。タイトル・NEW／TRANSFER・配分を手入力で別管理しない。Hint／Referenceは既存支援項目の該当文、AIは必要な既存文のみ。8-3のrandomはSHOULD、9-2のrandomはMUSTのまま。</p>
<h3 id="url表示">URL・表示</h3>
<ul>
<li><code>/instructor/monthX-X/brief/</code>：A＝Lesson Overview。Game1全6回。</li>
<li><code>/instructor/monthX-X/brief/support/</code>：B＝Teaching Support。同じ6回、合計12画面。</li>
<li><code>/instructor/curriculum/</code>、同<code>2/</code>〜<code>6/</code>：全体／Game1／Game2／Final／主要NEW／自走・AI。合計6画面。各Lessonの目的は全15回を順に含み、Game2／Finalの計画を実装済み教材の入口にしない。詳細Scheduleへ接続する。</li>
<li>旧Briefの入口URLは維持しAへ。<code>InstructorDeck.vue</code>は既存Router内の共通shell、native linkによるtab・現在枚数・Guide／Lesson／Presenter・次画面だけを持つ。新Router／Store／独自Presenterは作らない。</li>
<li>Instructor Homeは授業Brief→Lesson→Presenter／Notes→Student View。utilityはCurriculum Overview／Full Guide／Full Canonical／Reference。Student Homeと教材本文は不変。</li>
<li>共通Lesson／Reference Headerは短いHome ↗、目次 ↗、調べる ↗等を同じbaseline・font・gapへ統一。counterはMuted monoのMeta。context／from／hash／AI／Presenter帰路と小画面の実寸Homeは維持する。表示値はdocs/14の40節へ集約する。</li>
<li>Guide／Canonicalは全文・accordion・旧anchorを維持し、広いPCで本文＋TOC、狭い画面はinline目次。見出しjump・段落幅・行間・list／table余白・意味のある色を改善する。</li>
<li>単一Slidev source・13入力は不変。12の静的入口を追加し、567→579。通常base／Pages baseとも同じdirectory index方式で直接訪問・reloadを扱う。</li>
</ul>
<h3 id="3案代表画面">3案・代表画面</h3>
<p>講師の手元PCで授業前／授業中の5〜30秒scanを目的とし、1280×720を基準にする。教室投影の生徒本文とは別資料。</p>
<ul>
<li><strong>A 白地の授業指揮シート（採用）</strong>：既存日本語Sans＋mono、44px見出し／26px Goal、白約85〜90%＋Blue／Tealの到達区分、Green完了。画像装飾なし。到達点と症状→対応の番号を主役に、80分を5つの役割として1帯に並べる。特徴はA＝何をするか、B＝どう支えるかの切替。弱点は長い支援文の密度。</li>
<li><strong>B 時間軸中心の進行表</strong>：同書体、時刻数字を36px、本文18px、白約80%＋Blueの細い縦timeline。図はT／W／P／R／Bの工程だけ。時系列で教材と介入を追えるが、配分の精密さを主役にしてMUST・省略判断が後景になる。</li>
<li><strong>C 講師ポスター</strong>：大胆な48px以上の到達点、大番号、非対称なViolet／Navyの色面約30%。装飾は大きい番号と3段階の到達関係に限定し、写真は増やさない。即時印象は強いが、長い支援文と320pxのreflow、既存のWhite教材との連続性に不利。</li>
</ul>
<p>Aを選びB／Cの意匠を混合しない。代表Month9-2のA／Bを先に実装・実描画した。初回Bは下端が6px超過し、次回説明に操作link用classが衝突したためComposition／Hierarchy／Usabilityを3と判定。classを分離し、対応文16px・余白を調整して全文を残したまま720px内へ修正した。修正後に残り5回へ展開。Curriculumの主要NEW画面の11px超過も行間ではなく区画間の余白で解消する。</p>
<p>実描画・回帰・再公開の最終結果は、この節の受入記録へ追記する。</p>
<h3 id="視覚レビュー">視覚レビュー</h3>
<p>原寸・25% thumbnail・実際の4px blurを確認。到達点→MUST／SHOULD→時間→Completion、支援では症状→対応→進度差→次回を拾う構造を点検した。全6 BriefとCurriculum各構図、小画面の縦積みも実画像で確認した。</p>
<table>
<thead>
<tr>
<th>軸</th>
<th style="text-align:right">点 / 5</th>
<th>実描画の根拠・修正</th>
</tr>
</thead>
<tbody>
<tr>
<td>Typography</td>
<td style="text-align:right">4</td>
<td>44px H1／26px Goalと18px本文、13〜16px Metaのjump。1024pxでもtab名を残し、320pxは本文を縮めず縦積み</td>
</tr>
<tr>
<td>Composition</td>
<td style="text-align:right">4</td>
<td>到達点と支援を2画面に分離。初回Bの6px超過と次回説明のclass衝突を修正、主要NEWの11px超過は余白で解消</td>
</tr>
<tr>
<td>Color</td>
<td style="text-align:right">4</td>
<td>MUST Blue／SHOULD Teal／NEW Violet／Completion Green／Trouble Amber。見出し文字と番号を併用</td>
</tr>
<tr>
<td>Visual Hierarchy</td>
<td style="text-align:right">4</td>
<td>BlurでもH1・到達区分・時間帯・完了を判別。操作は上部と下端へ分離し本文と競合させない</td>
</tr>
<tr>
<td>Imagery</td>
<td style="text-align:right">4</td>
<td>不要な写真を加えず、実配分の5役割・症状の01〜03・3段階／15 Lessonの関係を正本どおり表示</td>
</tr>
<tr>
<td>Consistency</td>
<td style="text-align:right">4</td>
<td>共通shell／書体／nav／counter。GuideとCanonicalは読む密度、Briefは判断の密度に分ける</td>
</tr>
<tr>
<td>Personality</td>
<td style="text-align:right">4</td>
<td>白地の授業指揮シート。技術教材のmono・色の責務と運用判断に固有の構成で、広告UIや巨大Card列にしない</td>
</tr>
<tr>
<td>Usability</td>
<td style="text-align:right">4</td>
<td>PCは各1画面、小画面はreflow。画面tab／詳細／Lesson／Presenterとcontext別Home、44px操作・focusを確保</td>
</tr>
</tbody>
</table>
<p>視覚判定：<strong>PASS（visually verified・制作者点検）</strong>。5〜30秒で実際の講師が発見できるという実測保証、教室後方席・Windows／iPhone実機の検証ではない。Lesson本体は既存Slidev縮尺で、Quick Deck／講師資料のreflowと区別する。</p>
<h3 id="ローカル受入">ローカル受入</h3>
<p>通常／Pages baseのbuild成功。通常Home重点788検査、最終通常Deck1,652検査、最終Pages完全回帰7,048検査がPASS。新規runtime errorは0。既知の生成index通知・CSS minify警告2件、検証用tmpのoutDir通知だけが残る。</p>
<ul>
<li>1280×720／1366×768／1024×768／320×667。両contextの96 Lessonページ＋7 Reference＝103種、計824 Header状態でarrow・同じfont／line-height・背景なし・counter Meta・baseline・安全域を計測した。CORE／Quiz／Reference／AIの32代表実画像も再確認。Presenterは6回×4サイズ、24状態でHeader／Notes表示を別途確認した。</li>
<li>12 Brief＋6 Curriculum＝18画面×4サイズ、72描画状態。PCの1画面収容、横overflowなし、現在画面、全linkのnative Tab／focus、Enterによる画面遷移、下部導線、直接reloadを確認。320pxのCurriculum tabは44px幅と読み上げ名を持ち、1024pxのBrief tabは項目名も残した。</li>
<li>Guide／Canonicalは2資料×4サイズ、8状態。native detailsのEnter開閉・focus、旧hash着地／祖先展開／reload、表の局所scrollと印刷時の全文保持を確認。Homeは従来の4サイズ＋320×180、計10状態・全35導線を実クリックした。</li>
<li>既存140導線を両contextで実往復、Hint開閉・Quiz誤答／retry・標準keyboard・Presenter／Notesを再検証。source checkerは977件、旧anchor・全15回・12 Briefと6 Curriculumの抽出がPASS。従来の静的リンク集計は開始時と同じ305件（前回の306→305は上の履歴参照）、broken 0。</li>
<li>保全95ファイルのSHA-256は全件一致。Lesson／Reference本文・96 Notes・Hint／Quiz・固定ID・Python／Game／assets・Guide原文／docs24・Phase 1配布物は変更なし。</li>
</ul>
<p>検査側では、full navigationの新documentとhashだけの同一document遷移をCDPのloaderIdで分け、URL／viewの確定を待つよう修正した。教材に疑似keyboard処理は追加していない。旧Brief1画面時代の集計表示を現行8 Reading／72 Deckへ更新したが、完全回帰ログの総検査数は7,048件で変わらない。</p>
<h3 id="再公開本番受入">再公開・本番受入</h3>
<p>公開専用repositoryのsite/だけをcommit <code>7e20c2fca8308da6fdb3f1eb8835f0febfaff478</code>で更新。<a href="https://github.com/fsakai-000/robot-python-game/actions/runs/38697210697" target="_blank" rel="noopener noreferrer">Pages Actions 38697210697</a>は全step成功。workflowと公開repositoryのREADMEは非変更。765生成ファイルでraw Python／教材Markdown／設定原稿の混入・ローカル絶対パス・token形式は0件（既存の素材帰属game1/README.mdは維持）。古いhash付き生成物は整理し、Git履歴から復元できる。</p>
<p>生成HTMLに由来する空白行が新しい12入口にあり、差分検査ではその行末空白だけを許容した。検証済みHTMLを手で書き換えていない。indexは本番と検証artifactのbyte一致を確認した。</p>
<p>実URLの全579入口がHTTP 200、追加UI110検査がPASS、再試行0。両Home・両contextの6 Lesson／7 ReferenceのHome帰路、12 Briefと6 Curriculumの直接URL／reload、Guide hash／Canonical要約、Presenter Notes、320px reflow／実寸Homeと実クリック、raw source 4 URLの404を確認した。本番代表画像も再確認し、新規runtime errorは0。</p>
<ul>
<li><a href="https://fsakai-000.github.io/robot-python-game/instructor/" target="_blank" rel="noopener noreferrer">Instructor Home</a></li>
<li><a href="https://fsakai-000.github.io/robot-python-game/instructor/month9-2/brief/" target="_blank" rel="noopener noreferrer">Month9-2 Brief A</a>／<a href="https://fsakai-000.github.io/robot-python-game/instructor/month9-2/brief/support/" target="_blank" rel="noopener noreferrer">B</a></li>
<li><a href="https://fsakai-000.github.io/robot-python-game/instructor/curriculum/" target="_blank" rel="noopener noreferrer">Curriculum Overview</a></li>
</ul>
<p>この受入・公開記録はdeploy後のローカル正本への追記で、source文書を公開repositoryへ追加したものではない。実授業・5〜30秒の講師試用・実機投影の限界は視覚レビュー節のとおり。</p>
<h2 id="guidecanonicalの縦読み再編集2026-10-15">Guide／Canonicalの縦読み再編集（2026-10-15）</h2>
<h3 id="責務と再構成">責務と再構成</h3>
<p>Quick Deckは短時間の判断、Guide／Canonicalは必要な箇所を縦に読む全文資料。今回は後者だけを改善する。Guideとdocs24のMarkdownはbyte単位で保持し、Web投影の段落・見出し・箇条書き・表・意味色を編集した。スライド化、別の正本原稿、新Router／Storeは追加しない。</p>
<p><code>instructor-prose.mjs</code>が文境界での段落分割、参照名、Lessonの共通構造、Canonicalの処理群・表・Final段階を担当する。既存<code>instructor-reading.mjs</code>が元の15 Lesson・章・旧anchorを組み立て、<code>InstructorDocument.vue</code>が本文＋TOCを表示する。共通styleは既存<code>web.css</code>に集約。教育上の一般原則はdocs20で足りるため変更せず、表示値はdocs14の41節だけを正本とする。</p>
<ul>
<li><strong>Guide</strong>：冒頭8原則は短いラベル＋本文。このGuideの役割／実装状況／正本を分け、準備は配布・環境・素材・ブラウザ・記録・許可の小見出しで読む。15 LessonはGoal／MUST／SHOULD／OPTIONAL→展開内の概念4役割・Level Meta・導入引用・番号付き活動・支援・つまずき・FAST／SLOW・完了・次回・専用時間帯。9-2の段階確認、9-3の改造境界と運用補足も残す。</li>
<li><strong>Canonical</strong>：H1を「Month8〜12 正式カリキュラム」、Metaを「15 Lesson / 5か月」へ。5つの月領域に各3 Lessonを縦積み。第1節は決定範囲／他の正本の表／時間／履歴と支援／対象外を分離し、内部ファイル名はMetaへ。到達点・概念・Level・時間の4表は15行を保持し、月境界と役割別header、局所横scrollを付ける。</li>
<li><strong>仕様と判断</strong>：Level表の前にL4／5を全員必須にしない注意、時間表前に80分を埋めることを成功としない注意。Game2はPlayer／Enemy・Bullet・Score・HP／Game Over・Restart等・標準外・依存と受入を分け、単発・HP優先・二重結果防止等の全文を保持。Finalは9-3→11-3→12-1→12-2→12-3の5段階、リスク表はAmber／Greenの見出し。Stage 1／3の履歴は末尾の下位accordionへ移し、元の章番号・anchorを残す。</li>
<li><strong>読む操作</strong>：PCは最大900pxの本文＋sticky TOC、900px以下は1列とnative目次。旧hashは祖先detailsを開いて着地する。表は独立したfocus可能なscroll領域。印刷CSSでは閉じた本文も表示する。Header、Quick／Curriculum Deck、Lesson／Reference本文とNotesは変更しない。</li>
</ul>
<h3 id="3案代表試作視覚レビュー">3案・代表試作・視覚レビュー</h3>
<p>手元PCでの授業前・授業中の参照を想定し、投影スライドの構図は流用しない。</p>
<ul>
<li><strong>A 編集ノート（採用）</strong>：既存日本語Sansとmono。52／34／25／19pxの明確なjump、White約90%に役割の短見出しと薄い面。主役は見出し・短い本文・実際の区分と手順で、写真や装飾図は足さない。特徴は長文を文境界と意味単位で読み替えること。弱点は縦の長さだが、sticky TOCと折りたたみで参照を支える。</li>
<li><strong>B 運用マニュアル</strong>：同Sans、見出し36px／本文18px、白約85%＋Navyの細い索引。固定目次と定義表中心の均等な段組み。画像は索引iconだけに絞り、装飾なし。検索には強いが、15回の目的・介入・完了の強弱が平坦になりやすい。</li>
<li><strong>C 編集誌</strong>：56px以上の章タイトルと大きい章番号、非対称なViolet／Teal面約25%、本文20px。月・段階の図を大きく扱い、色面で章の節目を作る。第一印象は強いが、授業中の局所参照と320pxの長文読解には余白・色面が過剰。Aへ意匠を混ぜない。</li>
</ul>
<p>Aを選び、Guide冒頭・準備・Month9-2の密度が高い詳細を先に試作した。初回は引用末尾の閉じ括弧が単独段落となり、sticky目次が下へずれたためTypography／Composition／Usabilityを3と判断。文境界に閉じ括弧を含め、sticky insetを修正して再描画した。その後全15回へ展開。Canonical冒頭・第1節・Game2を試作し、旧CSS由来の紫面を除いてから全章へ展開した。</p>
<p>全文点検では、先頭空行のあるMarkdown表が段落化する問題、強調記号が文境界をまたぐ問題、見出し前の二重余白も修正した。文章保持検査だけに頼らず、表数・構造・表示記号も検査する。</p>
<table>
<thead>
<tr>
<th>軸</th>
<th style="text-align:right">点 / 5</th>
<th>修正後の実描画の根拠</th>
</tr>
</thead>
<tbody>
<tr>
<td>Typography</td>
<td style="text-align:right">4</td>
<td>900pxの本文、52px H1／19px本文／15px Metaのjump。320pxは18pxで縦読み。単独の閉じ括弧・強調記号漏れを除去</td>
</tr>
<tr>
<td>Composition</td>
<td style="text-align:right">4</td>
<td>要点→展開した小見出し・手順。Game2の全面薄紫と二重余白を除去、Finalを5段階へ</td>
</tr>
<tr>
<td>Color</td>
<td style="text-align:right">4</td>
<td>本文はDark、役割・完了・症状・Gameの別だけに意味色。リスクと対応、NEWとTRANSFERを文字でも識別</td>
</tr>
<tr>
<td>Visual Hierarchy</td>
<td style="text-align:right">4</td>
<td>BlurでH1→冒頭原則、完了→次回→時間を判別。Level・内部名・履歴は下位</td>
</tr>
<tr>
<td>Imagery</td>
<td style="text-align:right">4</td>
<td>写真を足さず、正本の実配分5役割・15 Lesson・Final5段階を構造として可視化</td>
</tr>
<tr>
<td>Consistency</td>
<td style="text-align:right">4</td>
<td>Guide全15回の同じ読む順と、Canonicalの表・処理群。資料の性格を保ちDeckの構図は流用しない</td>
</tr>
<tr>
<td>Personality</td>
<td style="text-align:right">4</td>
<td>技術教材の編集ノート。無差別なCard列や一般的dashboardではなく、講師の判断・支援・接続を中心にする</td>
</tr>
<tr>
<td>Usability</td>
<td style="text-align:right">4</td>
<td>PC目次とmobile目次、native details、局所表scroll、旧hashと展開、閉じた詳細の印刷表示</td>
</tr>
</tbody>
</table>
<p>原寸・4サイズの一覧・25% thumbnail・4px blurを実画像で確認。3秒は目的／区分／完了の発見、Self-guidedは目次→対象→必要な詳細の経路を制作者が点検した。講師の発見時間や授業での理解の実測ではない。</p>
<p>最終のbuild・回帰・公開結果は以下へ追記する。</p>
<h3 id="最終受入公開">最終受入・公開</h3>
<p>通常／Pages baseのbuild成功。両buildの各756検査がPASSし、579静的入口・4サイズのGuide／Canonicalを確認した。1280×720／1366×768／1024×768／320×667で、全文展開後に計564のscroll位置を通過。段落の4文以上の壁、文書全体の横はみ出しは0。本文幅900px・通常19px／小画面18px、目次Tab／Enter・focus、native details、hash祖先展開・reload、表の局所scroll、閉じた詳細の印刷CSSを確認した。</p>
<p>代表52実画像と4サイズの一覧、原寸・thumbnail・blurをレビュー。Guideの本文段落は最大100字、Canonicalは最大101字（内部ファイル名のMeta）。表のセルと正式条件は長さのために削らない。Skillの8軸は上記の各4、<strong>PASS（visually verified・制作者点検）</strong>。物理印刷・他browser・Windows／iPhone実機・実授業での発見時間は未検証。</p>
<p>正本の文・15回それぞれの区分／概念／Level／導入／活動／支援／完了／時間・旧anchor・文書間hash・Deck抽出は<code>check_instructor_source.mjs</code>の2,080件がPASS。4正式表と正本案内・リスク・履歴の計7表、Final5段階も保持。一般の原文fragment照合だけでは表の段落化を検出できなかったため、構造の検査を追加した。</p>
<p>対象外のQuick／Curriculumは全18画面の生成objectが開始時と完全一致し、72描画状態・1,652件の回帰がPASS。Referenceは既存140導線・305静的リンク（本文297＋共通部品8）、broken 0。開始時101ファイルのSHA-256はすべて一致。Guide／docs24原文・docs20・共通Header・Lesson／Reference本文・96 Notes・Python／Game／assets・Phase 1配布物は非変更。仕様上の意味差分は0。</p>
<p>buildの通知は既存の生成index通知とCSS minify警告2件、検証用tmpのoutDir通知のみ。新しいruntime errorは0。公開用765ファイルはraw Python／教材Markdown／設定原稿・ローカル絶対パス・token形式の混入0（既存の素材帰属<code>game1/README.md</code>のみ維持）。</p>
<p>公開repositoryのsite/だけをcommit <code>db176c72e341b0cd412408fc8781ba50cc8aa3d9</code>で更新。<a href="https://github.com/fsakai-000/robot-python-game/actions/runs/38706702851" target="_blank" rel="noopener noreferrer">Pages Actions 38706702851</a>は成功。公開README／workflowは不変。旧hash付き生成物は整理し、Git履歴から復元可能。</p>
<p>本番は検証済みHTMLとのbyte一致、全579入口のHTTP 200、既存経路110 UI検査、Guide／Canonicalの4サイズ176検査がPASS。再試行0、runtime error 0。desktopのGuide詳細とmobileのGame2本文の実画像も再確認した。Presenter Notes・既存Deck／Home／Reference帰路は維持し、raw sourceの4 URLは404。</p>
<ul>
<li><a href="https://fsakai-000.github.io/robot-python-game/instructor/guide/" target="_blank" rel="noopener noreferrer">Instructor Guide</a></li>
<li><a href="https://fsakai-000.github.io/robot-python-game/instructor/schedule/" target="_blank" rel="noopener noreferrer">Canonical Schedule</a></li>
</ul>
<p>この受入記録は公開後のローカル運用正本への追記で、source文書を公開repositoryへ追加したものではない。公開Guide／Canonicalは検証済みbuildのまま。</p>
<h2 id="instructor-ia簡素化2026-10-15現行">Instructor IA簡素化（2026-10-15・現行）</h2>
<p>この節をInstructor入口の現行仕様とする。上のQuick Deck運用や、docs/14・docs/20の過去のQuick入口に関する記録は旧UIの履歴である。教育原則・正式区分・時間は変更しない。</p>
<h3 id="入口と責務">入口と責務</h3>
<ul>
<li>Instructor Home：Month8／Month9の6Lesson。各行はID・題名・短いGoalと「開く ↗」の1リンクで、Instructor contextの通常Slideを新規タブで開く（<code>target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;</code>）。専用Hub／Student View／並列Presenterボタンは置かない。</li>
<li>講師資料：講師ガイド／正式カリキュラム／Referenceの3行だけで通常遷移。LessonをPrimary、資料をSecondaryとする。GuideとLessonを別タブ／左右に並べて使う。</li>
<li>講師ガイド：共通のチェック・判断・進行→月別15Lesson。「どう授業を進め、支援するか」。closed summaryはID・題名・目的・MUST・時間。展開順と意味色はdocs14の41節を正本とする。Game1の実96ページには生徒／講師の具体行動と教材リンクを持ち、未実装の9回は活動計画のみ。6回だけLesson／Presenter・Notesへ進める。</li>
<li>正式カリキュラム：最上部に5か月の全体像、その後に月別15Lesson。「何を、いつ、どこまで学ぶか」。summaryはID・題名・NEW・MUST概要、詳細はPhase／Goal、正式区分、4概念役割、Coding Level、自走、AI、時間。運用上のつまずき等は複製しない。既存の正式表・仕様・履歴は保持する。</li>
<li>Referenceの名称・本文・帰路、Slidev標準Presenter・Notesと既存URLは維持する。通常Lessonが生徒画面確認も兼ねる。</li>
</ul>
<h3 id="実装と互換">実装と互換</h3>
<p>Guide本文を授業運用の正本として再構成し、<code>instructor-guide.mjs</code>で投影する。<code>instructor-reading.mjs</code>はCanonicalの既存投影と4表抽出、<code>instructor-prose.mjs</code>は短い段落・参照名を共用する。docs24の4表・15行は順序とID、Guideの正式区分・概念・Level・時間を厳密照合し、独立したカリキュラム原稿を作らない。表中の<code>True／False</code>等の内部区切りを概要の省略単位にしない。Canonical本文・生成内容は維持する。</p>
<p>配布は講師側builderで生成・検証後、Month8〜12を整理した各生徒専用Driveへ事前配置する。生徒は自分の該当Lessonを開くだけで、dist生成・配布コピーを授業中に行わない。編集権限とローカル実行を確認し、既存作品を上書きしない。未実装のGame2／Finalはフォルダだけを準備できる。9-3の個人コピーは元作品保全のLesson活動として維持する。生成の仕様はdocs04、配布運用はdocs07とGuideを参照する。</p>
<p>Lessonはnative <code>details/summary</code>。通常訪問は全Lesson closed。<code>#month9-2</code>等は対象だけをopenにし、固定Header下へ移動する。既存の詳細anchorは祖先detailsも開く。月別目次、読み幅、意味色、print時の本文表示、表の局所scrollを維持する。</p>
<p>Quick Brief 12画面とCurriculum Deck 6画面の表示・生成器は撤去。依存していた4表の抽出だけをReading rendererへ移した。撤去した<code>instructor-decks.mjs</code>／<code>pages/InstructorDeck.vue</code>は作業時のtmpへ退避した。旧URLのdirectory indexとrouter redirectは互換用に残す。</p>
<table>
<thead>
<tr>
<th>旧URL</th>
<th>到達先</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>/instructor/monthX-X/brief/</code>、<code>brief/support/</code>（Game1 6回）</td>
<td><code>/instructor/guide/#monthX-X</code></td>
</tr>
<tr>
<td><code>/instructor/curriculum/</code></td>
<td><code>/instructor/schedule/#five-month-overview</code></td>
</tr>
<tr>
<td><code>curriculum/2/</code>、<code>3/</code>、<code>4/</code></td>
<td>Scheduleの<code>#month8</code>、<code>#month10</code>、<code>#month12</code></td>
</tr>
<tr>
<td><code>curriculum/5/</code>、<code>6/</code></td>
<td>Scheduleの<code>#schedule-section-4</code>、<code>#schedule-section-5</code></td>
</tr>
</tbody>
</table>
<p>queryは保持。Curriculumで指定済みhashがあれば優先する。静的入口を残すことでSPA fallbackに依存せず直接訪問・reloadできる。独立Deckへ戻す内部リンクは持たない。</p>
<h3 id="art-direction選定と実描画">Art Direction選定と実描画</h3>
<p>授業前・授業中に講師が目的のLesson／支援情報を選ぶPC／mobile用画面。既存のWhite・日本語Sans・mono IDを前提とし、新しいブランドや装飾を導入しない。</p>
<ul>
<li><strong>A 授業への一本道（採用）</strong>：既存Sans、Home見出し36px級・Lesson19px・Goal14px、IDはBlue mono。White約90%、Blue／Navyの短い導線と薄い資料面。月別2列の中に6つの単一リンク、資料は下位の3行。既存Game icon以外の画像や装飾は増やさず、Lessonへ直進する構造自体を特徴にする。弱点は資料の目立ちにくさで、専用見出しと一つのSoft Zoneで補う。</li>
<li><strong>B 月別ランチャー</strong>：Sans見出し32px／本文18px、mono月番号。White約85%＋左のNavy索引15%。月を左rail、Lessonと資料を右のリストへ。画像なし、細い月の接続線だけ。月切替の識別は強いが、1024pxでは本文幅を削り、6回だけの入口には余分な操作構造となる。</li>
<li><strong>C 授業目録ポスター</strong>：大きい月番号64px級＋24pxのLesson題名、Blue／Violet面約25%と既存ゲーム実画像の大胆なcrop。非対称配置でMonthの進行を印象づける。新規イラストは使わない。差別化は最も強いが、入口の4系統と授業中の素早い選択より表現が先行するため不採用。Aへ装飾を混ぜない。</li>
</ul>
<p>Homeを代表画面として先に試作。初回1024pxで8-1題名の末尾1文字が孤立しTypographyを3と判定。ID／操作列と月間gapを調整し、文字を縮めず再描画して解消した。その後Guide／Canonicalの閉・開状態へ展開。既存の本文階層・意味色とnative disclosureを用い、巨大Cardや新しいtoggle componentは追加しない。</p>
<p>Canonical冒頭のMeta行と説明文が近すぎたため、その隣接余白だけを調整して再描画した。最終代表画像は<code>artifacts/instructor-ia-2026-10-15/</code>に保存する。これは公開配布物ではなく、作業時の4サイズ・開閉・thumbnail／blurの確認証跡である。</p>
<table>
<thead>
<tr>
<th>軸</th>
<th style="text-align:right">点 / 5</th>
<th>修正後の実画像の根拠</th>
</tr>
</thead>
<tbody>
<tr>
<td>Typography</td>
<td style="text-align:right">4</td>
<td>Homeは題名・Goal・mono ID、Readingは23px summary題名／18px概要と本文を分離。1024pxの孤立文字を修正</td>
</tr>
<tr>
<td>Composition</td>
<td style="text-align:right">4</td>
<td>HomeはLessonの2月列→下位資料、Readingは閉じた要約→縦の詳細。右のTOCと本文が競合しない</td>
</tr>
<tr>
<td>Color</td>
<td style="text-align:right">4</td>
<td>Lesson導線Blue、正式NEWはViolet、資料面は低彩度。MUST等を色と文字の両方で識別</td>
</tr>
<tr>
<td>Visual Hierarchy</td>
<td style="text-align:right">4</td>
<td>Homeのthumbnail／blurでも6Lessonが主、資料が従。展開後は目的→MUSTが先に見える</td>
</tr>
<tr>
<td>Imagery</td>
<td style="text-align:right">4</td>
<td>入口に説明不要な画像は足さず、実際の6／15Lessonと5か月の構造を可視化。Game iconは既存を維持</td>
</tr>
<tr>
<td>Consistency</td>
<td style="text-align:right">4</td>
<td>Guide／Canonicalのsummary形状と開閉、既存の読む階層・意味色を共用。Lesson本文のVisualには介入しない</td>
</tr>
<tr>
<td>Personality</td>
<td style="text-align:right">4</td>
<td>汎用dashboardのボタン群ではなく、授業目録としてID・教材名・行の導線を主役にする</td>
</tr>
<tr>
<td>Usability</td>
<td style="text-align:right">4</td>
<td>1Lesson 1action、3資料、native keyboard、深いリンクで対象を開く。320pxは縦読み・全幅scrollなし</td>
</tr>
</tbody>
</table>
<p>原寸・Homeの25% thumbnail／4px blur・Reading開閉状態をheadless実画像で点検。3秒／自走評価は制作者による導線点検であり、講師の発見時間や実授業の実測ではない。実機投影・別browserは別途確認する。</p>
<h3 id="今回の受入公開結果">今回の受入・公開結果</h3>
<ul>
<li>通常／Pages baseのbuild成功。最終版の資料検査は双方1,116件PASS、Pages Home736件・旧URL776件もPASS。4サイズは1280×720／1366×768／1024×768／320×667（Homeは320×180も追加）。表示はみ出し、native details、Tab／Enter、focus、44px操作領域、対象Lessonだけのhash展開・reload、表の局所scrollを確認した。</li>
<li>共通Headerの両context・103経路×4サイズ、既存140Reference導線の実往復、Presenter／Notes、Hint・Quiz等を含む6,572件の回帰がPASS。最後の変更はCanonical冒頭の隣接余白だけで、最終ビルドのHome・資料・互換試験を再実行した。正本保持は<code>check_instructor_source.mjs</code>の2,290件、Referenceは140導線／305静的リンクでbroken 0。</li>
<li>開始時146ファイル中、対象外132ファイルのSHA-256が一致。別の保護対象99ファイル（Phase 1配布42ファイルを含む）も一致。Student Homeのtemplate分岐と本番1280px実画像は開始時と完全一致。Guide／docs24原文、docs14／docs20、共通Header、Lesson／Reference本文・Notes、Python／Game／assets、固定ID・意味・時間は今回非変更。</li>
<li>Skillの8軸は上表の各4、<strong>PASS（visually verified・制作者点検）</strong>。34のlocal代表画像と本番28画像を証跡フォルダへ保存。実機投影・Windows／iPhone等の別browser／実授業の理解・発見時間は未検証。</li>
<li>通知はdevの既存index通知、既存のCSS minify警告2件と検証用tmpのoutDir通知。新規runtime errorは0。公開用763ファイルはraw Python／教材Markdown／設定原稿・ローカル絶対パス・token形式の混入0（従来の素材帰属<code>game1/README.md</code>のみ維持）。</li>
<li>公開用<code>site/</code>のみをcommit <code>e71de29d1b2265b72561ec4d0ab7999eb2cbf5ba</code>で更新。<a href="https://github.com/fsakai-000/robot-python-game/actions/runs/38735005455" target="_blank" rel="noopener noreferrer">Pages Actions 38735005455</a>は成功。公開README／workflowは不変。古いハッシュ付き生成物は整理し、公開repositoryのGit履歴から復元可能。</li>
<li>本番Home156件、Guide／Canonical536件、旧URL196件、Presenter／Reference26件がPASS。Homeの全9導線・15Lesson×2文書のhash／単独展開・18旧URLのquery／reloadを4サイズで確認。6PresenterのNotes／reloadと両contextの7Referenceも確認した。全579静的入口HTTP 200、再試行0、生成HTMLのbyte一致、raw原稿等4URLの404を確認。</li>
</ul>
<p>この受入記録は検証後のローカル運用正本への追記であり、検証済みの公開生成物は再変更していない。</p>
<h2 id="instructor-guide内容設計授業進行ノート2026-10-15">Instructor Guide：内容設計・授業進行ノート（2026-10-15）</h2>
<h3 id="用途候補代表試作">用途・候補・代表試作</h3>
<p>講師が手元PCで実Slideと並べ、説明・待機・作業への切替・支援・終了を判断する資料。投影用Lessonとは別に、本文19px／小画面18pxとnative縦読みを維持する。児童の理解や講師の発見時間の実測ではなく、制作者の点検とする。</p>
<ul>
<li><strong>A 授業進行ノート（採用）</strong>：既存日本語Sans、mono ID、見出し52／34／24pxと本文19px。White約90%に意味色を局所使用。チェック→判断→実Slide順を縦に配置し、講師の次の行動を主役にする。装飾画像は増やさず、P/O番号・Type・題名と生徒／講師の対応を図式化する。区切り線と余白だけで章を分ける。弱点は長さなので月目次・Lesson toggle・活動内jumpで補う。</li>
<li><strong>B 講師の操作台</strong>：Sans見出し36px／本文18px、IDはmono。White約85%、細いBlue railとNavy見出し。左に進行、右に支援を並べ、現在位置を線で結ぶ構造。写真は使わず手順図を主にする。比較は速いが1024px・320px・印刷では視線移動と列の狭さが不利。</li>
<li><strong>C 授業アトラス</strong>：月番号64px級monoと題名32px、White約75%＋Navy／Cyan面。非対称な誌面と実Slide cropで各月の印象を強め、重なりは章扉だけに限定する。個性は強いが、局所の支援を探す日常操作と原稿更新コストに対して表現が過大。</li>
</ul>
<p>Aだけを基準にする。新規ブランド・装飾・独自ナビゲーションは導入しない。冒頭の共通判断とMonth9-2を先に試作し、実Slideとの横並びを確認してから他の14回へ展開した。初回はP番号・Type・題名が同じ強さで並んだため、番号とTypeをMeta、題名を主見出しへ分離。CONCEPTのVioletを見出しだけに限定し、講師本文はDark Neutralへ戻した。共通判断は正式3区分と概念4群を分離した。</p>
<h3 id="実描画評価">実描画評価</h3>
<table>
<thead>
<tr>
<th>軸</th>
<th style="text-align:right">初回 → 修正後 / 5</th>
<th>実画像の根拠・修正</th>
</tr>
</thead>
<tbody>
<tr>
<td>Typography</td>
<td style="text-align:right">3 → 4</td>
<td>P/O番号・Typeは15px級、題名22px、本文19px。小画面の題名はbalance、長い本文は短文化と段落分割</td>
</tr>
<tr>
<td>Composition</td>
<td style="text-align:right">4 → 4</td>
<td>共通3区分と概念4群を別領域化。Lessonは固定順、実Slide行は罫線で区切り、Cardを連続させない</td>
</tr>
<tr>
<td>Color</td>
<td style="text-align:right">4 → 4</td>
<td>CONCEPT Violet／WORK Blue、講師本文はDark。MUST等を文字でも識別し、全面着色しない</td>
</tr>
<tr>
<td>Visual Hierarchy</td>
<td style="text-align:right">3 → 4</td>
<td>題名→生徒／講師行動→補助番号。完了Green・つまずきAmber、閉じても目的とMUSTと時間が分かる</td>
</tr>
<tr>
<td>Imagery</td>
<td style="text-align:right">4 → 4</td>
<td>不要な写真は足さず、実Slide96ページとの対応を使用。Month9-2を実際のWORKと横並びで照合</td>
</tr>
<tr>
<td>Consistency</td>
<td style="text-align:right">4 → 4</td>
<td>共通の意味色・14項目の展開順・native操作。未実装Lessonに偽のPage番号やリンクを出さない</td>
</tr>
<tr>
<td>Personality</td>
<td style="text-align:right">4 → 4</td>
<td>汎用dashboardでなく、授業の判断・引継ぎ・教師行動を中心にした編集ノート</td>
</tr>
<tr>
<td>Usability</td>
<td style="text-align:right">4 → 4</td>
<td>21チェック、月目次、Lesson toggle、実Slideへの新規タブ、狭幅の縦読み。印刷CSSでもチェックの群を維持</td>
</tr>
</tbody>
</table>
<p>代表原寸・thumbnail／blur・横並び・印刷CSSの証跡は<code>artifacts/guide-redesign-2026-10-15/</code>。3秒は目的・区分・講師行動の発見、Blurは見出しと主従、Self-guidedは目次→対象→作業／支援→完了の経路を点検する。判定は<strong>PASS（visually verified・制作者点検）</strong>。実機投影・Windows／他browser・Drive権限とローカル実行・実授業時間は講師が別途確認する。今回はPDFを作成しない。</p>
<h3 id="受入公開結果">受入・公開結果</h3>
<ul>
<li>15回のMUST／SHOULD／OPTIONAL、概念4群、Coding Level、時間はdocs24と厳密照合。共通文・全Lesson項目・96実ページの番号／Type／実題名／alias、旧4anchorを含め、source検査3,154件PASS。文中の<code>list／class</code>等を分断せず、正式項目のセミコロンだけで箇条書きへ分ける。</li>
<li>Month9-2の代表からGame1全6回と後半9計画へ展開。全15回に前提・今日の流れ・講師行動・Hint／Reference／AI・症状／確認／問い・FAST／SLOW・完了・次回・日本語の時間・参照先を揃えた。未実装の実Page・Python名・固定ID・Lessonリンクは生成していない。</li>
<li>通常／Pages build成功。完全回帰6,625件（全103経路×両context×4サイズのHeader、18旧URL、Reference往復、Notes、Hint／Quiz等）PASS。最後の局所修正はGuideの文言・改行・項目区切りのみで、最終生成物の資料検査を両base各1,148件で再確認。Homeは新規タブ／noopener／元タブ保持／同一タブ資料を含め785件PASS。既存Referenceは140導線・305リンク、broken 0。</li>
<li>1280×720／1366×768／1024×768／320×667で横overflow 0。21native checkboxのSpace操作、TOC・details・Lesson・ReferenceのTab／Enter・focus、15Lessonのhash／reloadを確認。印刷CSSはチェック6群と折りたたみLessonの本文を保持し、builder詳細を分離した。PDFファイルは未作成。</li>
<li>開始時188ファイル中、対象外178ファイルがSHA-256一致。保護対象95ファイル（Phase 1配布42、Game／Python／素材、Lesson／Reference、正式カリキュラム、docs20等）は変更0。Student Homeのtemplate分岐とCanonicalの生成オブジェクトも完全一致。docs04の生成仕様は維持し、docs07だけに生成→Drive事前配置→生徒利用を最小同期した。</li>
<li>公開候補763ファイルにraw Python／原稿Markdown・設定ファイル、個人パス・token形式の混入0（従来の素材帰属<code>game1/README.md</code>は維持）。通知は既存index通知・CSS minify警告2件と検証用tmpのoutDir通知で、新規runtime errorは0。</li>
<li>静的<code>site/</code>のみをcommit <code>f80d92c6aa2948d96880e5c5725467b8833a493a</code>で更新。<a href="https://github.com/fsakai-000/robot-python-game/actions/runs/38747175784" target="_blank" rel="noopener noreferrer">Pages Actions 38747175784</a>成功。source原稿・Python・workflow・公開READMEはpushしていない。旧ハッシュ生成物は整理し、以前の版はGit履歴から復元できる。</li>
<li>本番Home205件・資料568件・旧URL196件・Presenter／Reference26件PASS。全579入口HTTP 200・再試行0、生成HTML byte一致、raw原稿等4URLの404を確認。Guide冒頭・実進行は4サイズで本番再撮影した。最初の1280px捕捉だけpaint前の白画像だったため、headlessの描画frame確定を待つ取得方法に直し再確認した（アプリへの修正ではない）。</li>
</ul>
<p>この受入記録は検証後のローカル運用正本への追記。公開Guide／Canonicalは検証済み生成物のままで、記録追記を理由とする再buildはしていない。実授業・Drive権限・Windows実機の確認をheadlessの結果と混同しない。</p>
<h2 id="instructor-guideのゼロベース再編集2026-10-16">Instructor Guideのゼロベース再編集（2026-10-16）</h2>
<h3 id="現行の情報構造と正本">現行の情報構造と正本</h3>
<p>公開Instructor Homeは、既存6 Lessonの新規タブ導線と「講師ガイド」「Reference」の2資料だけを持つ。Student Home・Lesson／Reference本文・Speaker Notesは変更しない。標準PresenterのURLは維持する。</p>
<p>docs/24は内部の正式正本としてそのまま保持する。Lesson順・MUST／SHOULD／OPTIONAL・概念範囲・時間をGuideと照合するが、独立したSchedule全文のWeb表示は生成しない。<code>documentFiles()</code>からdocs/24を除き、4正式表だけをビルド時の対応付けに使う。アクセス制御を追加したわけではなく、他の公開教材・Notesの扱いは従来どおり。</p>
<p>Guideの運用原稿は<code>docs/INSTRUCTOR_GUIDE.md</code>ひとつ。冒頭の7章は「この5か月で目指すこと／授業前チェック／共通ルール／Page Typeと講師の役割／困った時の支援／Lesson別／確認待ち」。INNOVATOR NEXTへの橋渡しとして、既習PythonをGame1で適用→Game2へ転用→Finalで目的ある改造・説明へつなぎ、不要な先取りをしない。</p>
<p>チェックは配布3・PC2・ブラウザ2・記録2・必要時2の11項目。素材準備は必要なLessonへ。配布生成コマンド・dist等は開発文書docs/04・07へ残し、GuideにはDriveの事前配置・前作を上書きしない運用だけを置く。Month9-3のコピーは作品保全で、配布生成作業ではない。</p>
<p>共通ルールは正式3区分と概念4役割を自然な日本語で示す。独立したCoding Level・評価・自走・編集場所・時間の長文は置かない。Hintは短い試行後に1つずつ、Referenceは必要項目だけ確認して戻る。AIは主に改造・計画・DEBUGの相談で、自分で読んで試し、不可時は既存支援で代替する。利用有無は評価しない。</p>
<h3 id="lessonの読む順と実slide">Lessonの読む順と実Slide</h3>
<p>15 Lessonを月別のnative detailsへまとめる。閉じた状態はID・題名・1行の目的・MUST・時間。現行の展開順・時間Flow・支援の絞り方は末尾「Guide共通セクションとLesson表示の簡素化」に更新した。概念は該当する役割だけを表示し、NEWがない回に「なし」を繰り返さない。</p>
<p>Game1全6回は実Slideの番号・Type・実題名・aliasと照合する。主要活動へのjumpと、必要時に開く全Slideの進行を分け、講師の行動を長い全ページ一覧に埋没させない。症状→確認／問いを3組、完了をGreenで示し、次回は保存ファイル・進度・必要な状態だけを残す。参照先はLesson新規タブとReferenceに絞る。</p>
<p>Month10〜12の9回は活動計画のみ。未実装のPage番号・架空の題名・ファイル名・固定ID・Lessonリンクを作らない。Month11-3は選定・関連2変更の計画・小試行、Month12-1はその2変更の統合、Month12-3は起動／資料確認・練習→発表→振り返り・保全という責務を維持する。</p>
<h3 id="互換url">互換URL</h3>
<table>
<thead>
<tr>
<th>既存URL</th>
<th>現在の到達先</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>/instructor/schedule/</code>、<code>/instructor/docs/24_month8-12_canonical_schedule/</code></td>
<td>Guideの「この5か月」</td>
</tr>
<tr>
<td>上記の<code>#month9-2</code>等</td>
<td>Guideの該当Lessonだけを開く</td>
</tr>
<tr>
<td>旧<code>curriculum/</code>、<code>2/</code>、<code>3/</code>、<code>4/</code></td>
<td>Guideの5か月／Month8／Month10／Month12</td>
</tr>
<tr>
<td>旧<code>curriculum/5/</code>、<code>6/</code></td>
<td>Guideの共通ルール</td>
</tr>
<tr>
<td>旧12 Brief URL</td>
<td>Guideの該当Lesson</td>
</tr>
</tbody>
</table>
<p>queryを保持し、対応可能なhashは<code>instructor-redirect.mjs</code>で既存Lesson／章へ変換する。旧設計履歴や未知のhashは「確認待ち」へ安全に着地する。Schedule・旧docs/24にも静的directory indexを残すため、Pagesで直接訪問・reloadしても404にしない。公開入口は580で、独立Schedule UIはない。</p>
<h3 id="art-directionと代表試作">Art Directionと代表試作</h3>
<ul>
<li><strong>A 授業用ハンドブック（採用）</strong>：既存Sansとmono、見出し52／34／24px・本文19px。White約90%、Navyと意味色を局所使用し、3段階の橋渡し・授業中の判断・支援を短見出しと余白でつなぐ。装飾画像は足さず実Slideとの対応を主にする。弱点の長さはTOC・月別toggle・必要時の全進行で補う。</li>
<li><strong>B 進行レール</strong>：Sans36／18pxとmono、White約85%＋細いBlue rail。左に進行、右に支援を置き、線で順序を結ぶ。写真なしで授業中の行動を対照できるが、1024px以下・印刷で分割読解になりやすい。</li>
<li><strong>C 授業マップ</strong>：大きな月番号とNavy／Teal面約25%、実Slideの大胆なcropと非対称の誌面。月の個性は強いが、日常の支援検索より見せ場が先行するため不採用。Aへ装飾だけを混ぜない。</li>
</ul>
<p>共通5章とMonth9-2を先に試作し、実際のWORKと左右に並べて照合した。初回は英語の概念ラベルが細かく折り返されTypographyを3と判定。英語ラベルと日本語の意味を2段に分けて再描画し、8軸各4を満たしてから残り14回へ展開した。完成後の証跡・検証結果は下記に追記する。</p>
<table>
<thead>
<tr>
<th>評価軸</th>
<th style="text-align:right">修正後 / 5</th>
<th>実画像の根拠</th>
</tr>
</thead>
<tbody>
<tr>
<td>Typography</td>
<td style="text-align:right">4</td>
<td>概念ラベルの細切れ折り返しを解消。見出し・19px本文・日本語の意味を分離</td>
</tr>
<tr>
<td>Composition</td>
<td style="text-align:right">4</td>
<td>3段階の橋渡し、11チェック、必要時に開く実進行を役割別に構成</td>
</tr>
<tr>
<td>Color</td>
<td style="text-align:right">4</td>
<td>Navyの目的、Blueの作業、Violetの新概念、Greenの完了を局所使用。文字も併記</td>
</tr>
<tr>
<td>Visual Hierarchy</td>
<td style="text-align:right">4</td>
<td>目的→範囲→講師の行動→支援→完了。全Slide一覧でMUSTを押し下げない</td>
</tr>
<tr>
<td>Imagery</td>
<td style="text-align:right">4</td>
<td>不要な写真を足さず実Slide96ページと対応。Month9-2の実WORKと左右で照合</td>
</tr>
<tr>
<td>Consistency</td>
<td style="text-align:right">4</td>
<td>7章・12節・既存意味色・native detailsを共通化。未実装9回は計画として区別</td>
</tr>
<tr>
<td>Personality</td>
<td style="text-align:right">4</td>
<td>開発設計書や汎用dashboardではなく、授業中の判断と作品引継ぎを中心に編集</td>
</tr>
<tr>
<td>Usability</td>
<td style="text-align:right">4</td>
<td>月目次・主要活動jump・新規タブ・320px縦読み・印刷用チェックを実描画で確認</td>
</tr>
</tbody>
</table>
<p>証跡は<code>artifacts/guide-zero-2026-10-16/</code>。4サイズの共通章・代表Lesson・Month11-3／12-1の計画・Month9-3の完了を確認し、原寸・thumbnail／blur・実Slide横並びを点検する。評価は制作者によるもので、講師の発見時間・実授業・Windows実機の実測ではない。</p>
<h3 id="受入再公開結果">受入・再公開結果</h3>
<ul>
<li>共通章＋Month9-2の代表試作から、Game1全6回・後半9計画へ展開。Skillの8軸は各4、<strong>PASS（visually verified・制作者点検）</strong>。1280×720／1366×768／1024×768／320×667で横overflow 0、11チェックと全96実Slideの対応を再確認した。</li>
<li>source照合2,062件PASS。15回の正式3区分45項目と時間値75個はdocs/24と一致し、Lesson順・概念範囲の意味差分は0。実Slideの番号・Type・題名・aliasは96件すべて一致。該当しない概念の役割やCoding Levelは公開Guideへ表示しない。</li>
<li>通常／Pages build成功。完全回帰6,448件PASS（両context・103経路×4サイズのHeader、Home、Guide、24旧URL、既存Reference全往復、Presenter／Notes、Hint／Quiz等）。最後の変更はGuideの文言だけで、最終公開候補の資料検査を両base各891件で再確認した。Home783件・旧URL833件もPASS。Reference sourceは140導線／305リンク、broken 0。</li>
<li>Tab／Enter・focus、11 checkboxのSpace、15Lessonのhash／単独展開／reload、主要活動jumpから全進行の展開、Lessonの新規タブ／noopener／元タブ保持、Reference遷移を確認。Chromeの印刷mediaプレビューで11チェックの5群と閉じたLesson詳細が残ることを確認した。PDFファイルは作成していない。</li>
<li>開始時188ファイル中、対象外173ファイルのSHA-256が一致。特に保護対象82ファイル（Game1 25・生徒配布物42・Lesson／Reference 13・docs/20と24）は変更0。Student Homeの分岐、Lesson本文・Notes・Hint・固定ID・Python・Game・assets・正式区分・時間は非変更。docs/07のDrive運用は既存記載で足りるため今回変更せず、docs/20も新原則がないため変更しない。docs/14・本書・slides/READMEを同期した。</li>
<li>公開候補764ファイルにraw Python／原稿Markdown・設定ファイル、個人パス・token形式の混入0（従来の素材帰属<code>game1/README.md</code>のみ維持）。旧ハッシュ生成物は公開<code>site/</code>だけで整理し、以前の版は公開repositoryのGit履歴から復元できる。生成index通知・既存CSS minify警告2件・検証用tmpのoutDir通知以外の新規警告、runtime errorは0。</li>
<li>静的生成物だけをcommit <code>807d94ebd96eb3977732602bf714888bbb55d7d8</code>で再公開。<a href="https://github.com/fsakai-000/robot-python-game/actions/runs/38829559350" target="_blank" rel="noopener noreferrer">Pages Actions 38829559350</a>成功。公開workflow／READMEは変更せず、原稿・Python・開発設定はpushしていない。</li>
<li>本番Home202件・Guide310件・旧URL252件・Presenter／Reference26件PASS。全580入口HTTP 200、再試行0、生成HTML byte一致、raw原稿等4URLは404。4サイズのGuide冒頭・チェック・実WORK進行も再撮影し、11チェック・96実ページ・overflow 0を確認した。公開Instructor資料はGuideとReferenceに集約され、旧Schedule／Curriculum／Briefのquery・対応hash・直接reloadも維持する。</li>
</ul>
<p>この受入記録は検証後のローカル正本への追記であり、検証済み公開生成物は再変更していない。実授業・Drive権限・Windows等の別browser・講師の実際の発見時間は未検証。</p>
<h2 id="guide共通セクションとlesson表示の簡素化2026-10-16">Guide共通セクションとLesson表示の簡素化（2026-10-16）</h2>
<p>この節は前回の実装・検証記録。最新の列構成・時間丸め・全Type画像は末尾「Guide Reading UXの統一」を優先する。</p>
<h3 id="現行ux">現行UX</h3>
<p>公開Guideの7章・11チェック・15Lesson toggleと互換URLは維持する。5か月目的はPythonの使い直し→NEXTの短いLeadと5行動、Game1→Game2→Finalの3段階へ。独立した「全部暗記」「教えすぎない」の理念見出しは置かず、必要なコア・先取りしない・SYSTEMを入力課題と分ける意味を短文に残す。</p>
<p>共通判断は優先度3区分と概念4役割を別groupにする。OPTIONALをSHOULD達成の必須ゲートにはしない。通常はSHOULD後に案内するが、省略時も正式正本どおりMUST後に講師が判断でき、Lesson完了条件には含めない。Page Typeは役割／生徒／講師の固定3行と、既存Month8-1のCONCEPT／WORK／PLAY／REVIEWの実画像4枚。画像は外観例で、細字の読解を課さず実Slideへ開く。Hint／Reference／AIを分け、講師介入は01確認→02問う→03支援→04一緒に確認。</p>
<p>Lessonは目的→今日の流れ・時間→前提（必要時のみ）→取り組む範囲→今日扱う内容→全進行→講師のポイント→Lesson固有の支援→Lesson完了→次回へ残す→参照先の順。前提は必要な9回で補助detailsにする。一般的なFAST／SLOW・Troubleは繰り返さず、その回固有の支援を1〜3項目に統合。8-3のrandom省略、9-2の段階確認、9-3の追加改造・画像・共有条件などは残す。Lesson完了の原条件を結果／説明／再実行等に分け、次回へは保存・記録・使う状態の3項目。</p>
<p>Game1の時間Flowは実Slide／Notes順、後半9回はdocs/24の活動計画。原稿のPhase表に各活動の内部配分を持ち、T/W/P/R/Bの正式合計と両端の総80分を検査する。9-2の作業22〜30分と予備15〜7分は連動させ、範囲を独立に足さない。9-3の冒頭15分には全体共有中のPLAYも含める。活動目安を児童の実測・一律の締切と見なさず、任意TUNE・randomを必須へ上げない。時間略号・内部集計はWebへ出さない。timelineのPhase名から該当する実Slide進行を開ける。未実装9回には偽のPage番号・ファイル・リンクを出さない。</p>
<p>Visualの恒久規則はdocs/14の41節へ集約する。本書には配色の数値を重複記載しない。docs/20の教育原則、docs/24の正式区分・時間は変更しない。</p>
<h3 id="方向比較とmonth8-1試作">方向比較とMonth8-1試作</h3>
<ul>
<li><strong>A 授業の工程表（採用）</strong>：既存Sansの見出し／本文19pxとmono ID、White約90%＋Navy。活動順timelineを主役に、意味色Badgeと少数Soft Zone、必要時の全進行を組み合わせる。実Slide画像は外観の対応だけ。日常の検索と授業順が両立する一方、細い列の折返しを実画像で管理する必要がある。</li>
<li><strong>B 左右対照ノート</strong>：同じSans／monoとWhite約90%、左に進行・右に講師支援の対照。画像より行動の比較を強める。desktopは見比べやすいが、1024px以下では分割視線と縦の並び替えが増えるため不採用。</li>
<li><strong>C 授業ポスター</strong>：同じ書体に大きい時間・月番号、Navy／Cyan面約25%、実Slideの大胆なcropを使う。個性は強いが、毎日の局所検索より見せ場が先行するため不採用。Aへ色面や装飾だけを混ぜない。</li>
</ul>
<p>Month8-1だけを先に試作。初回の予備見出しと分数の高さずれ、薄いGrayを修正し、再描画後に全体へ展開した。共通支援の短いLeadはbalanceで孤立を軽減。全体レビューで9-2の時間幅の「分」だけが折れたため、範囲区切りの表示を短いen dashにし、数値＋単位を一組・同じ26px級のSansへ。正式値は原稿のまま。小画面のprintを無理に7列へ戻さず、画面幅に応じた縦Flowを維持する。</p>
<h3 id="screenshot-based-review">Screenshot-based review</h3>
<table>
<thead>
<tr>
<th>評価軸</th>
<th style="text-align:right">初回 → 修正後 / 5</th>
<th>実画像の根拠</th>
</tr>
</thead>
<tbody>
<tr>
<td>Typography</td>
<td style="text-align:right">3 → 4</td>
<td>予備も分数の高さを統一し、短文を自然に折り返す。9-2の時間幅と単位の分離を修正</td>
</tr>
<tr>
<td>Composition</td>
<td style="text-align:right">4 → 4</td>
<td>目的直後に活動順、全進行は折りたたみ。共通支援3群と介入を分離</td>
</tr>
<tr>
<td>Color</td>
<td style="text-align:right">3 → 4</td>
<td>White文字のFill Badge、3支援の薄い意味面、Gray時間の濃さを改善。実Slideとの対照でPLAYをAmber／TUNEをTealへ修正</td>
</tr>
<tr>
<td>Visual Hierarchy</td>
<td style="text-align:right">4 → 4</td>
<td>目的→Flow→必須範囲→講師行動→固有支援→完了。時間数値とBadgeの主従を分離</td>
</tr>
<tr>
<td>Imagery</td>
<td style="text-align:right">4 → 4</td>
<td>実Lesson4画像を外観見本として使い、実Slideを開く導線を保持。架空画像なし</td>
</tr>
<tr>
<td>Consistency</td>
<td style="text-align:right">4 → 4</td>
<td>15回共通の順序・Badge・timeline、固有支援と未実装計画を区別</td>
</tr>
<tr>
<td>Personality</td>
<td style="text-align:right">4 → 4</td>
<td>Cardを量産せず、授業の工程と引継ぎが分かるハンドブックを維持</td>
</tr>
<tr>
<td>Usability</td>
<td style="text-align:right">4 → 4</td>
<td>PC横・mobile縦、必要箇所jump、native操作、チェック・時間・完了のprintを点検</td>
</tr>
</tbody>
</table>
<p>判定：<strong>PASS（visually verified・制作者点検）</strong>。5秒のFlowとMUSTの発見、thumbnail／blurの主従、目次→Lesson→固有支援→完了をレビュー。公開後の実見本との対照でType色のずれを見つけ、Guideだけを修正。実Lesson CSSから色を読み取る回帰検査を追加し、再描画・再公開した。講師の実際の発見時間・児童理解・実授業・別OS／browserの実測ではない。証跡は<code>artifacts/guide-polish-2026-10-16/</code>。検証・公開結果は以下に追記する。</p>
<h3 id="受入公開結果-1">受入・公開結果</h3>
<ul>
<li>Month8-1単独の初回→修正試作後、共通章→Game1残り5回→後半9計画へ展開。1280×720／1366×768／1024×768／320×667で再描画し、横overflow 0。PCの横Flow・mobileの縦Flow、範囲時間と単位の一体表示、Page Typeの実色・4画像、支援・完了を確認した。8軸最終各4、画像・判定は制作者の点検である。</li>
<li>source照合2,931件PASS。正式3区分45項目、時間値75個、15回の順序・概念範囲は維持。82 Phaseの内部配分を両端で集計し80分と一致、Game1各Phaseは実Notesの時間合計とも一致。96実Slideの番号／Type／実題名／alias、旧anchor、11チェックも一致した。変更前と比較したLessonの主要18field×15回＝270fieldはbyte一致。</li>
<li>通常／Pages build成功。最終生成物のGuide重点検査は両base各927件PASS。Home783件・旧URL833件、Reference source140導線／305リンクもPASS。今回はGuide局所の検証と保護hash照合であり、前回の全6,448件のLesson・Hint／Quiz回帰を再実行した記録ではない。既存生成index通知・CSS minify警告2件・tmp出力先通知以外の新規警告はない。</li>
<li>TOC・details・checkboxのTab／Enter／Space／focus、timelineから実進行の展開、新規タブ・Reference、全15Lessonの単独hash／reloadを確認。print mediaでは閉じたLesson詳細も残り、授業前チェック・timeline・Lesson完了を再描画した。PDFファイル・実紙は未検証。</li>
<li>開始時189ファイルのうち対象外179がSHA-256一致。保護対象82ファイル（Game1 25・配布物42・Lesson／Reference 13・docs/20と24）は変更0。Student Homeもbyte一致。今回の変更はGuide運用原稿／renderer／CSS／文書画像の解決、docs/14・本書・slides/README、検査2本と見本画像4枚。教育原則を追加していないためdocs/20は変更しない。</li>
<li>静的768ファイルだけを公開し、source原稿・Python・開発設定・workflow・公開READMEは非変更。初回commit <code>2a4b73b13f566a399c96d8ff7703b9b0421c2049</code>後の色修正を、最終commit <code>3207d90e7a0d95d7abbad536f69b6151e16f65ac</code>で反映。<a href="https://github.com/fsakai-000/robot-python-game/actions/runs/38845602580" target="_blank" rel="noopener noreferrer">Pages Actions 38845602580</a>成功。整理した旧ハッシュ生成物は公開Git履歴から復元できる。</li>
<li>最終本番のHome202件・Guide346件・旧URL252件・Presenter／Reference26件PASS。全580入口HTTP 200、再試行0、生成HTMLと4画像のbyte一致、raw原稿等4URLの404を確認。Guide冒頭・共通ルール・Page Type・支援・Month8-1／9-2／9-3と計画の代表は4サイズで再撮影した。runtime error 0。</li>
</ul>
<p>上の検証記録は確認後のローカル正本への追記。検証済み公開生成物は、記録追記のために再buildしていない。正式内容の差分0は区分・順序・概念・時間を指し、一般的支援の短文化・重複削減を文字列不変と主張するものではない。</p>
<h2 id="guide-reading-uxの統一2026-10-16">Guide Reading UXの統一（2026-10-16）</h2>
<h3 id="現行構成と原稿">現行構成と原稿</h3>
<p>Guideは7章・11チェック・15Lessonの運用原稿を維持する。冒頭は短いLead、明確な5行動のbullet、Game1→Game2→Final。コア／先取り／SYSTEMの理念補足は内部の正式正本にあるため冒頭で反復しない。共通Priorityは比較しやすい短文、概念4役割は2列×2段。OPTIONALをSHOULD達成の必須ゲートにせず、正式正本どおりMUST後の発展と明記する。</p>
<p>Checklistは最大2列、全Page Typeは説明と実画像の約63:37。OVERVIEW／INDEX・CHALLENGE／QUIZも個別にし、既存Month8-1の全11Typeを同じ16:9寸法で示す。4画像を維持し7画像を追加、生成画像・新規Lesson図解は使わない。実Slideへの新規タブ導線・文字の役割labelを保持する。</p>
<p>Hint／Reference／AIは縦3 Soft Zoneにする。AIは利用例と短い注意に絞るが、許可済み環境・個人情報を渡さない・代替支援・任意利用／評価対象外を残す。講師介入は支援先の説明とは責務が異なるため削除せず、01確認→02短い問い→03支援→04一緒に確認の縦Flow。完成コードを即代入しない。</p>
<p>Lessonの読む順は、目的→目安Flow→範囲→概念→全進行→講師のポイント→固有支援→完了→次回→参照先の10節。重複したLesson名の中見出しを削除。前提は必要な回だけ講師のポイント内のdetailsへ、段階確認・改造境界・準備・共有条件は固有支援内で必要時に開く。固有支援は最大3件の症状見出し＋対応文。完了を同じ条件の2〜3項目に分け、Green Zoneにする。次回の保存・記録・必要な状態は3項目を維持する。</p>
<h3 id="目安時間と正式枠">目安時間と正式枠</h3>
<p>docs/24の80分枠・正式3区分・概念・Lesson順、Notesの詳細配分は変更しない。GuideのPhase表だけを4〜6個・原則5分単位へ丸める。現在は9-1が75分、他14回が80分の表示目安。閉じたsummaryも同じ目安・予備を使い、正式な80分枠と区別する。待ち時間・OPTIONAL・無目的な修正で80分を埋めない。</p>
<p>Game1の順序は実Slide／Notesに対応。丸めた各Phaseを元のNotes区間の両端と比較し、差は5分以内。9-1は敵1〜3、9-2はitem条件とscoreをまとめたが、入力・到達点・順序を増減していない。9-2のSHOULD調整・8-3のrandomは追加のまま。9-3は共有15→各自改造45→比較10→説明保存5→予備5を維持する。後半9回は計画だけで、架空のSlide・Python名・固定ID・リンクを作らない。</p>
<p>全Phaseを横へ並べると説明が折れるため、現在はPCも縦timeline。PCの1行内はPhase・分・行動、mobileは各要素も縦へ積む。横timelineは将来の短い情報に限り最大6項目・説明1行・十分な幅の条件で検討する。区切り・列・色・余白の視覚値はdocs/14の41節を正とし、本書へ重複コピーしない。</p>
<h3 id="方向比較と代表試作">方向比較と代表試作</h3>
<ul>
<li><strong>A 余白と罫線の授業ノート（採用）</strong>：既存日本語SansのH1 52／H2 34／本文19pxとmono ID、White約90%＋Navy。Dividerと見出し・少数の意味面で読む区間を作り、縦Flowと実画像を軸にする。新しい装飾なし。弱点は余白の二重適用で長くなりやすい点を実測で調整する。</li>
<li><strong>B 章見出しを脇に置く編集書</strong>：同じ書体・White約90%にBlue rail。章名を脇、本文を縦に通し、写真より編集上の対応を強める。構造は明確だが1024pxとmobileで本文幅・読み順の組み替えが増えるため不採用。</li>
<li><strong>C 大きな章扉を使う誌面</strong>：同じSans／monoを大胆な章番号と実Slide cropへ拡大、White約75%＋Navy／Cyanの大きな意味面。章の印象は強いが日常の局所検索より見せ場が先に立つため不採用。Aへ装飾だけを混ぜない。</li>
</ul>
<p>Month8-1だけの試作を4サイズで確認してから共通章→Game1残り5回→後半9計画へ展開。全体表示でmarginとpaddingが重なり節間が離れたため、境界の合計間隔へ修正。1024pxのPage Typeで「つなぐ」だけが次行へ落ちたため、短い説明をbalanceへ。本文を縮めず再描画する。検証記録は以下に追記する。</p>
<h3 id="実描画評価-1">実描画評価</h3>
<table>
<thead>
<tr>
<th>軸</th>
<th style="text-align:right">展開時 → 最終 / 5</th>
<th>実画像の根拠・修正</th>
</tr>
</thead>
<tbody>
<tr>
<td>Typography</td>
<td style="text-align:right">3 → 4</td>
<td>1024pxの語の孤立をbalanceで改善。追加点検で320pxの「説／明」分割を発見し、「説明・保存」を非分割にして再撮影</td>
</tr>
<tr>
<td>Composition</td>
<td style="text-align:right">3 → 4</td>
<td>二重の余白を合計間隔へ調整。横3列の支援を縦へ、Lesson範囲も縦に統一し、画像と本文の対照を保つ</td>
</tr>
<tr>
<td>Color</td>
<td style="text-align:right">4 → 4</td>
<td>White base、実Typeと同色のFill、支援3色・完了Greenを意味領域へ限定。全段落は着色しない</td>
</tr>
<tr>
<td>Visual Hierarchy</td>
<td style="text-align:right">4 → 4</td>
<td>大見出し→Phase／目安→必須範囲→講師行動→支援→完了。Dividerが読む区間を示す</td>
</tr>
<tr>
<td>Imagery</td>
<td style="text-align:right">4 → 4</td>
<td>全11Typeを実Lessonで示し、同寸法の16:9とCaption・実ページリンクを揃える。画像生成なし</td>
</tr>
<tr>
<td>Consistency</td>
<td style="text-align:right">4 → 4</td>
<td>15回の共通10節、列の条件・意味色・境界・折返しを共通CSSへ集約</td>
</tr>
<tr>
<td>Personality</td>
<td style="text-align:right">4 → 4</td>
<td>Card量産でなく、実授業の工程・役割・引継ぎを読む技術ハンドブック。実コード／ゲームの見本が文脈を担う</td>
</tr>
<tr>
<td>Usability</td>
<td style="text-align:right">4 → 4</td>
<td>mobileは1列、詳細は必要時、実画像11リンクの新規タブ、native keyboard・印刷・hash帰路を点検</td>
</tr>
</tbody>
</table>
<p>判定：<strong>PASS（visually verified・制作者点検）</strong>。原寸・thumbnail／blur・Before / After、4サイズで確認した。証跡は<code>artifacts/guide-reading-2026-10-16/</code>。画像は外観例で、縮小画像の細字を読む前提にしない。講師の探索時間・実授業・児童理解・Windows等の別OS／browser・実紙は未実測。</p>
<h3 id="受入公開結果-2">受入・公開結果</h3>
<ul>
<li>Month8-1の代表試作後に共通章・Game1全6回・後半9計画へ展開。1280×720／1366×768／1024×768／320×667で横overflow 0。全11Typeを本番で44画面再撮影し、統一16:9寸法・説明→画像のmobile順・文字の収まりを確認。最後のQuiz語分割だけを局所修正し、非分割のDOM計測と再描画を追加した。</li>
<li>source検査2,415件PASS。正式3区分45項目、詳細時間75個、15回の順序・概念範囲、96実Slideの番号／Type／実題名／aliasを維持。80Phaseの目安表示は5分単位・合計75または80分で、Game1各Phaseと元Notes区間との差は5分以内。正式時間はその表示値から算出しない。</li>
<li>開始時194ファイル中、対象外186がSHA-256一致。保護対象82ファイル（Game1 25・配布物42・Lesson／Reference 13・docs/20と24）は変更0。Student Homeもbyte一致。主要17field×15回＝255fieldは変更前と一致し、完了条件は13回が区切りだけ、2回が文末の整形で、15回とも条件を保持。新規画像は既存Lessonのスクリーンショット7枚だけ。</li>
<li>通常／Pages build成功、最終Guide検査は両base各1,009件PASS。実画像11リンクはEnterで新規タブへ開き、noopener・元タブ保持・実Lesson描画を確認。Home783件、旧URL833件、Reference source140導線／305リンクもPASS。今回はGuide局所の回帰と保護hash照合であり、全LessonのHint／Quiz全操作を再試験した記録ではない。</li>
<li>TOC・details・checkbox・画像・timeline jump・Lesson／ReferenceのTab／Enter／Space・focus、15回のhash／単独展開／reloadを確認。print mediaでチェック・Badge・Divider・timeline・Green完了を再描画し、閉じた詳細も保持。PDF・実紙は未検証。警告は既存generated index通知・CSS minify2件・tmp出力先通知のみ。</li>
<li>静的775ファイルだけを再公開。初回commit <code>1300945b356baa2249ec5687c6a809a17b72855a</code>、語分割修正の最終commit <code>a5ffa4a47bbba1f04c30e0b135a7bc9d07d7004f</code>。<a href="https://github.com/fsakai-000/robot-python-game/actions/runs/38857338431" target="_blank" rel="noopener noreferrer">Pages Actions 38857338431</a>成功。raw原稿・Python・開発設定・workflow・公開READMEはpushしていない。旧ハッシュ生成物はGit履歴から復元できる。</li>
<li>最終本番はGuide428件・Home202件・旧URL252件・Presenter／Reference26件PASS。全580入口HTTP 200、再試行0、生成HTMLと11画像のbyte一致、raw原稿等4URLの404、runtime error 0を確認。共通章・代表Lessonの4サイズ確認と全Type44画面の点検を分けて記録した。</li>
</ul>
<p>docs/14へVisual grammar、本書へUXと検証、slides/READMEへ利用上の差分だけを同期。docs/20は教育原則を変更しないため非変更。この受入記録は検証後のローカル正本への追記で、検証済み公開生成物を記録追記のために再buildしていない。</p>
<h2 id="教材ポータル作品進度の役割分担2026-10-16">教材ポータル・作品・進度の役割分担（2026-10-16）</h2>
<table>
<thead>
<tr>
<th>置き場</th>
<th>役割</th>
<th>置くもの／置かないもの</th>
</tr>
</thead>
<tbody>
<tr>
<td>GitHub Pages / Student</td>
<td>教材への入口</td>
<td>Lesson Slide、Reference、補助教材。外部2件はStudent Homeだけで管理</td>
</tr>
<tr>
<td>GitHub Pages / Instructor</td>
<td>講師用教材ポータル</td>
<td>Lesson Slide、active Worksheet PDF 3枚、Instructor Guide、Reference</td>
</tr>
<tr>
<td>Google Drive</td>
<td>生徒ごとの作業データ・作品</td>
<td>Python、assets、生徒作品。Slide URL・Guide・講師資料は置かない</td>
</tr>
<tr>
<td>Spreadsheet</td>
<td>講師の進度管理</td>
<td>生徒名×Lesson、未実施／途中／MUST完了／欠席、必要なメモ。教材リンク集・Worksheet細目採点表にはしない</td>
</tr>
</tbody>
</table>
<p>同じ教材リンクを3サービスへ重複管理しない。Driveは例として<code>INNOVATOR_GAME/生徒名/Month8/8-1/</code>からMonth12まで分ける。生徒専用フォルダ・前回作品を上書きしない従来運用は維持。実際のDrive／Spreadsheetの新規作成・変更はこの実装の対象外。</p>
<p>公開タイトルは8-1「ゲームを調べる」、8-2「プレイヤーを動かす」、8-3「敵を動かす」、9-1「当たり判定を作る」、9-2「アイテムを取る」、9-3「ゲームを改造する」。詳細Goalはsubtitleへ分離する。<code>slides/material-catalog.mjs</code>でHome／Guide／route metadataの公開名・active PDF・補助URLだけを共有し、学習内容・時間はdocs/24／Guide／Notesへ残す。既存URL・file名・Lesson順は変えない。</p>
<ul>
<li>Student Home：月別Lesson→Reference→補助教材2件。タイピング練習とPython・SPIKEワークはLight Blue family、新規タブ・noopener／noreferrer。Instructor Homeへ実URLを重複表示しない。</li>
<li>Instructor Home：6 LessonのSlideと、8-1／9-2／9-3だけWorksheetを新規タブで開く。無い回に「なし」やdisabled buttonを置かず、講師資料はGuide／Referenceのまま。</li>
<li>PDF：<code>output/pdf/</code>のactive 3枚をbuild時だけ<code>worksheets/&lt;既存PDF名&gt;</code>へコピー。HTML正本・archive・生徒データはWebへ同梱しない。devも同じallowlist。Guideの相対PDFリンクも同じURLへ解決する。</li>
<li>Guide：授業前にWorksheet人数分印刷を追加。Lessonを開くと目的の直後にPDF入口と短い使用タイミングを表示。時間が余ったらMUST→SHOULD→OPTIONAL→補助教材、ただしSHOULDを強制ゲートにせず、Student Homeへ案内する。12チェック・8章へ更新し旧anchorは保持。</li>
<li>AI：自由改造・計画・DEBUGの相談相手。仮説→相談→試す→実行結果で検証→必要なら再質問。一次回答を正解扱いせず、未実施の結果も作らせない。許可済み環境・個人情報を渡さない・任意／代替経路を維持。Month9-3は既存AI2ページ内で更新し、新しい必須操作・ページ・時間は追加しない。</li>
</ul>
<h3 id="構図と代表試作">構図と代表試作</h3>
<p>A＝既存の月別制作ノートを保ち教材操作を並べる構図、B＝全Lessonを縦の表で走査する構図、C＝大きなLesson番号と実ゲームcropの非対称目録を比較。共通の日本語Sans／mono ID、White／Navy／Blueを基準に、Aは白約90%と意味のある小さな操作面、Bは罫線と位置の固定、Cは白約70%と大きな画像・色面で区別する。Aは既存との連続性、Bは即時走査、Cは入口の強い印象が利点。Bはmobileの表再配置、Cは教材選択より画像が主役になる点が弱く、Aを採用した。新しい画像生成・decorative Card追加はしない。</p>
<p>代表Instructor Homeを先に1280×720で試作。ID→短い題名→Slide／該当PDF→講師資料という視線順で、6 Lessonと資料を初期画面に収め、各操作44pxを確保した。試作時にはPDFが未配信だったためUsabilityは未受入。active PDFだけをbuild／devへ同梱し、その後Student Home・Guideへ展開する。実描画・受入・公開結果は確認後に追記する。</p>
<h3 id="実描画レビューローカル受入">実描画レビュー・ローカル受入</h3>
<p>320pxでInstructor説明文の末尾だけが折れたため短文化して再描画。Guideの補助教材リンクはHome先頭に戻っていたため、Home内の同じhashを描画後にスクロールする局所処理へ修正した。独自Router・進捗Storeは追加していない。</p>
<table>
<thead>
<tr>
<th>Skill評価 / 5</th>
<th style="text-align:right">点検 → 最終</th>
<th>実描画の根拠・修正</th>
</tr>
</thead>
<tbody>
<tr>
<td>Typography</td>
<td style="text-align:right">3 → 4</td>
<td>短い動詞形の6題名、mono ID。mobileの不自然な折返しを短文化で修正</td>
</tr>
<tr>
<td>Composition</td>
<td style="text-align:right">4 → 4</td>
<td>月別のLesson選択、別領域のReference／補助教材。講師は6回と資料をPC初期画面で見渡せる</td>
</tr>
<tr>
<td>Color</td>
<td style="text-align:right">4 → 4</td>
<td>White／Navy、教材リンクはLight Blueと文字・↗、AIは既存Violet系。成功色をnavigationへ流用しない</td>
</tr>
<tr>
<td>Visual Hierarchy</td>
<td style="text-align:right">4 → 4</td>
<td>Lesson名→Slide／該当PDF→講師資料。Studentの補助は本編と混在しない下部領域</td>
</tr>
<tr>
<td>Imagery</td>
<td style="text-align:right">4 → 4</td>
<td>既存game／book icon、実ゲーム入り表紙・紙の図を維持。新規装飾画像なし</td>
</tr>
<tr>
<td>Consistency</td>
<td style="text-align:right">4 → 4</td>
<td>同じcatalogで公開名・PDF入口を共有。紙のLesson Metaも一致し、設問・書字欄は不変</td>
</tr>
<tr>
<td>Personality</td>
<td style="text-align:right">4 → 4</td>
<td>制作ノートFamilyの月番号・短い活動名・教材操作。新しいSaaS型Cardや大きい装飾を増やさない</td>
</tr>
<tr>
<td>Usability</td>
<td style="text-align:right">3 → 4</td>
<td>PDF配信、新規タブ・noopener・44px・focus、補助hashのスクロールを実操作で解決</td>
</tr>
</tbody>
</table>
<p>判定：<strong>PASS（visually verified・制作者点検）</strong>。原寸／thumbnail／Blur／3秒の主従を確認。Homeは1280×720・1024×768・320×667、既存回帰では1366×768・320×180も維持。実児童・講師の探索時間や教室プリンタを実測した結果ではない。</p>
<ul>
<li>通常／Pagesの新規ディレクトリbuild成功。既存のgenerated index通知・CSS minify2件・tmp outDir通知を区別し、新しいruntime exceptionなし。devのPDF応答は3枚とも元とbyte一致、非active／archiveは404。</li>
<li>最終Home回帰は両base各816検査、Guideは各1,025検査、旧URLは各849検査PASS。新しいSource検査は6題名・3 PDF・補助2 URLと両baseを照合。Guide検査2,467件で正式区分45項目・時間75値・15回の順序と99実Slideを確認。Referenceは143導線／308 source linkの失敗0。</li>
<li>PDF3枚はA4縦1ページ、埋込font・短いLesson名のmetadataを確認。HTMLのtitle／lesson-nameを除いた本文は変更前とbyte一致。元Game 25ファイル・Reference 7本文・内部docs24はSHA-256一致。全Lessonの固定ID・route／page／total・Notesの時間行も一致。PDFKitで再描画し、実プリンタは未確認。</li>
<li>PDF3入口はEnterで実際に新規タブ、openerなし・元Home保持を確認。Guide→Student補助教材hashも確認。外部補助2件は指定href・安全属性を照合し、外部本文・認証後の動作は保証しない。</li>
<li>既存公開用cloneの<code>site/</code>だけを更新。旧hash生成物はGit履歴で復元可能。公開候補798ファイルはactive PDF3枚のみで、raw Python・教材Markdown・設定・ローカル絶対パスの混入0（既存の素材帰属game1/README.mdを除く）。Workflow／公開READMEは非変更。</li>
</ul>
<p>証跡は<code>artifacts/material-portal-2026-10-16/</code>。以下の公開結果は実検証後にローカル正本へ追記し、受入記録の収録だけを目的に検証済み配信物を再buildしない。</p>
<h3 id="公開本番確認">公開・本番確認</h3>
<p>公開commit <code>18f7f8b8396e1e67a18a33df3c874b3d930a6a9b</code>、<a href="https://github.com/fsakai-000/robot-python-game/actions/runs/38898590180" target="_blank" rel="noopener noreferrer">Pages Actions 38898590180</a>成功。公開側のworkflow／READMEは非変更、<code>site/</code>のみ更新した。</p>
<p>本番の596静的入口は全てHTTP 200、active PDF3枚は元とbyte一致、raw Python／Guide Markdown／Worksheet archive／非active PDFの4 URLは404。Student HomeのHTMLも検証済みbuildとbyte一致。両Homeを1280×720／1024×768／320×667で実描画し、6公開名・該当3 PDF・Student補助2 hrefを確認した。6表紙、AI2ページ、Guideの12チェック・3 PDF・仮説／検証の2原則、Guide→Student補助hashも確認しruntime exception 0。外部補助サイトの本文・認証後の利用可否・実プリンタ・児童理解は未検証。</p>
`},"26_student_worksheet_system":{html:`<h1 id="生徒用worksheet-system">生徒用Worksheet System</h1>
<p>2026-10-16最終整理。<strong>Lesson数とWorksheet数は一致させない。Game1のactiveは3枚だけ：LOG 01 / Month8-1、LOG 02 / Month9-2、LOG 03 / Month9-3。</strong> 各A4縦1ページ、編集正本は<code>worksheets/</code>のHTML/CSS。</p>
<h2 id="紙を選ぶ基準">紙を選ぶ基準</h2>
<p>Worksheetは<strong>比較・対応付け・計画・発表・後から振り返る価値がある時だけ</strong>使う。単純な確認・観察・コード転記、Slideで済む説明を重ねない。「各Lessonに1枚」という発想は採用しない。全欄記入・採点・新しい到達条件も作らない。</p>
<p>Log 01は遊ぶ前後の見方の比較＋code-screen matching＋prediction-test＋baseline self-checkを残す用紙。Log 02は見る・線で結ぶ紙で記述0、Log 03は改造から発表後まで使う記述中心の紙。全紙へ同じ問題形式や5区画を強制しない。正式区分・時間は<a href="/robot-python-game/instructor/guide/#この5か月で目指すこと">docs/24</a>、学習支援は<a href="/robot-python-game/instructor/docs/20_instructional_design_principles/">docs/20</a>、Visualは<a href="/robot-python-game/instructor/docs/14_art_direction_v05/">docs/14</a>、運用は<a href="/robot-python-game/instructor/guide/">Guide</a>を参照する。</p>
<h2 id="game1の最終配布判断">Game1の最終配布判断</h2>
<p>公開Lesson名は8-1「ゲームを調べる」、8-2「プレイヤーを動かす」、8-3「敵を動かす」、9-1「当たり判定を作る」、9-2「アイテムを取る」、9-3「ゲームを改造する」。紙はLesson名をHeader Meta／PDF metadataへ同期し、紙の活動を示す大見出し・設問・記入欄・自己評価は変えない。</p>
<p>Instructor HomeとGuideからactive 3 PDFへ直接、新規タブで開く。Guideの授業前チェックで人数分印刷。Web buildは3枚だけ<code>worksheets/</code>へ配置し、HTML正本・旧版は公開しない。外部補助教材はStudent Homeに集約する。</p>
<table>
<thead>
<tr>
<th>Lesson</th>
<th>判断と理由</th>
<th>紙の形式・タイミング</th>
<th>PDF・接続</th>
</tr>
</thead>
<tbody>
<tr>
<td><a title="開発リポジトリの参照（Web配布対象外）">Month8-1 / LOG 01</a></td>
<td>使用。遊ぶ前後の見方・設定と画面の対応・予想／実際・基準自己評価を残す</td>
<td>PLAY操作前に01→PLAY後02→結線03→WORK／TUNE前後04→REFLECTで05</td>
<td><a href="/robot-python-game/worksheets/month8-1-game-dev-log.pdf">PDF</a>。観察と同じ3自己評価を将来10-1へ保管</td>
</tr>
<tr>
<td>Month8-2</td>
<td><strong>なし</strong>。キー・座標・速度はSlide＋VS Code＋実行で十分</td>
<td>本人のコードとゲームを照合。紙へ写さない</td>
<td>旧版はarchive</td>
</tr>
<tr>
<td>Month8-3</td>
<td><strong>なし</strong>。敵の落下・再配置・randomは実ゲームの確認が自然</td>
<td>既存Slide内で完結。randomはSHOULDのまま</td>
<td>旧版はarchive</td>
</tr>
<tr>
<td>Month9-1</td>
<td><strong>なし</strong>。Rect／colliderect／Game OverはSlide＋VS Code＋実ゲームで十分</td>
<td>重なり図・実コード・接触確認を既存教材で扱う</td>
<td>旧版はarchive</td>
</tr>
<tr>
<td><a title="開発リポジトリの参照（Web配布対象外）">Month9-2 / LOG 02</a></td>
<td>使用。複数の画面変化とコードを一度に対応</td>
<td>大きな3コマ＋3組の線結び。<strong>標準完成後</strong>のPLAY〜REVIEW、最後に実コードと照合</td>
<td><a href="/robot-python-game/worksheets/month9-2-game-dev-log.pdf">PDF</a>。Game2にも再利用可能な対応付けPattern</td>
</tr>
<tr>
<td><a title="開発リポジトリの参照（Web配布対象外）">Month9-3 / LOG 03</a></td>
<td>使用。企画・実装記録・発表台本・発表後の振り返りを残す</td>
<td>改造前PLAN／場所と内容→改造後TEST→共有時台本→共有後FEEDBACK／NEXT</td>
<td><a href="/robot-python-game/worksheets/month9-3-game-dev-log.pdf">PDF</a>。LOG 01の比較を本人の改造と説明へ</td>
</tr>
</tbody>
</table>
<h2 id="log-01--month8-1">LOG 01 / Month8-1</h2>
<p>題名は「ゲームのしくみを見つける」。01はPLAY操作前の自由な想像、02は実際に遊んだ気づき。単語・短文・矢印・絵でよく、正解例を先に並べない。01との一致を02へ転記・採点させない。02の「もっとあったら面白そうなもの」は独立した淡い領域の1行で、実装課題にはしない。</p>
<p>03は左に<code>player_speed</code>／<code>enemy_speed</code>／<code>player_size</code>、右に敵の速さ／プレイヤーの大きさ／プレイヤーの速さの順で並べ、丸から3本の線を引く。既存enemy／player sprite、動く向き、小／大の意味図を添える。実ゲームの表示倍率・測定結果ではない。線を結ぶ→自分で確認→実コードで答え合わせする。</p>
<p>04は旧予想／結果を統合。変えるもの・変更前→変更後を1組、下に予想／実際の2列、最後に「だいたい予想通り／少し違った／予想と違った」のチェック。05は既存の共通3自己評価とMonth10 markerをそのまま使う。01／02は自由記入、03は結線のみ、04は短い語、05はチェックで、作文・全欄記入を求めない。</p>
<p>Slideは見る・理解する・実装するためのVisual／instruction、Worksheetは記録・比較・計画の正本とする。設問や記入欄をSlideへ複製せず、紙の使用案内だけで新しいページを作らない。表紙は実ゲーム画像を復元し、Worksheet専用のBefore Play／After Play／Connectを削除してCORE14ページへ戻す。紙01はPLAY操作前、02はPLAY後、03は設定対応の解説前、04はWORK／TUNE前後、05はREFLECTに分散し、Notes／Guideで案内する。表紙画像は導入資料で、01の自由な予想を正誤判定しない。正式T20／W30／P14／R6／B10＝80（CORE70分）、Python固定ID・SHOULDは不変。削除ページの時間は既存の導入・理解・比較へ戻し、別の記入時間を加算しない。</p>
<p>Month10-1ではBefore／After observationと同じ3自己評価を使い直し、本人の見方・取り組みの変化を比べる。今回Game2の用紙や新しい到達条件は作らない。</p>
<h2 id="再利用pattern画面変化--コードを線で結ぶ">再利用Pattern：画面変化 ↔ コードを線で結ぶ</h2>
<ol>
<li>実画面または<strong>模式図と明示した</strong>2〜3コマで、比較する状態・変化を同時に見せる。</li>
<li>実コードの短い抜粋と、対応する画面変化を左右に並べ、十分な結線余白を取る。同じ並び順で答えを先に示さない。</li>
<li>生徒は見る→線で結ぶ→自分の実コードと照合。作文・コード全文転記・別の確認問題を追加しない。</li>
</ol>
<p>抜粋の省略範囲と表示例を明示し、コピーして動く完全コードとは扱わない。図・数値・対象名は実装と照合する。状態の推移と、同一frame内の処理の説明を混同しない。模式図の座標や表示倍率を実ゲームの設定値だと教えない。</p>
<p>Month8-1の設定↔対象、Month9-2の処理↔画面変化で同じ結線Patternを再利用する。Game2では、必要時にbullet発射・bullet hit・score・enemy再配置・HP・Game Overの関係へ使える。ただし各Lessonで紙の必要性を再判断する。今回はGame2の用紙・コード・Slide・新規Skillを作らない。</p>
<h2 id="log-02--month9-2">LOG 02 / Month9-2</h2>
<ul>
<li>上部：itemへ近づく→重なり／score +100→別の位置、の3コマを拡大。実spriteと日本語名・Score200→300、移動後位置を併用する。</li>
<li>下部：A（score更新）→200→300、B（x/y random）→次の位置、C（colliderect）→重なりを線で結ぶ。式・代入行は実COMPLETEそのまま、ifやガード等を省いたREAD抜粋。</li>
<li>「何点増えた？」独立課題、item位置へ●、random位置観察、重複Flow／確認問題は削除。氏名・日付を除き記述0行。答えを結ぶ前に完成順を転記させない。</li>
<li>3コマは実素材による拡大模式図で、実スクリーンショットではない。点数・位置は例。重なり・加点・再配置は1回の取得内で続けて行われ、②③を別frameで観察することは要求しない。途中段階の消えたままのitemを不具合にしない。</li>
</ul>
<h2 id="log-03--month9-3">LOG 03 / Month9-3</h2>
<p>上部は標準版の大きな実画面と、○・矢印・メモを描く余白。小さいBefore／Afterは削除し、Before＝この参考画面、After＝本人の実ゲームで扱う。参考画面を本人の実測前後比較の証拠にはしない。</p>
<table>
<thead>
<tr>
<th>活動</th>
<th>残す内容</th>
</tr>
</thead>
<tbody>
<tr>
<td>01 PLAN</td>
<td>「どこを、どう変えたい？」画面へ○・矢印・メモ。やりたいこと1行</td>
</tr>
<tr>
<td>02 CHANGE</td>
<td>「どこを変える？」探した場所・コード1行、何をどう変えるか2行</td>
</tr>
<tr>
<td>03 TEST</td>
<td>ねらい通り／少し違った／もう一度直したい。結果2行</td>
</tr>
<tr>
<td>04 SHARE</td>
<td>そのまま読める3行台本。「私は、…を変えました。」「そのために、…を変更しました。」「実際には、…になりました。」</td>
</tr>
<tr>
<td>05 FEEDBACK</td>
<td>聞いた人から。友だちに言われたこと・気づいたこと2行</td>
</tr>
<tr>
<td>06 NEXT</td>
<td>次にできそうなこと。もっと変えるなら？2行</td>
</tr>
</tbody>
</table>
<p>台本は計画・変更場所・実際の結果を使い直し、発表用の新しい作文を作らせない。台本の記入高8.5mm、他の記入行8mm。05／06だけ横並びとし、台本は全幅を優先する。AI欄なし。最初はplayer_speed、追加候補は現行Lesson範囲。score100・＋100演出やitem数の変更を誘導しない。</p>
<p>記入は既存の活動へ分散し、正式時間へ加算しない。書字量が変わったため旧5〜8分を達成保証として流用しない。授業計時・児童筆記は未実測。共有・感想・次の案は時間に応じて省略可、空欄を未達扱いしない。既存SHOULDをMUSTへ昇格させず、1変更・本人コピー・比較・別保存を優先する。</p>
<h2 id="visual画像印刷">Visual・画像・印刷</h2>
<p>Log 01由来のWhite／Navy、Sans／mono、RGB意味色、隅の幾何学blur、小マーカー、borderless Soft Zone、shadowなし。題名28pt／850、区画14.5pt／750（補助の05／06は13pt）、本文10.5〜11pt、Meta9pt前後、コード10pt mono。画像は学習対象であり、装飾画像を増やさない。</p>
<p>A4縦、上／下10mm・左／右12mm、有効186×277mm。白い筆記行8mm、台本8.5mm、checkbox3.5mm。画像・意味線はCSS背景にせず背景OFFでも残す。縮小・clipping・overflow hiddenで内容を隠して1ページへ押し込まない。</p>
<ul>
<li>spriteは<code>game1/assets/images/player.png</code>／<code>enemy.png</code>／<code>item.png</code>を直接相対参照。透明余白・元PNGを変えない。LOG 01は設定の意味図、LOG 02は見やすく拡大した取得の模式図。</li>
<li>実全景は既存<code>slides/public/game1/gameplay-64.png</code>。取得条件は同folder README。Month8-1 STARTの800×600 Surface、Pygame2.6.1／SDL dummy、seed1・110回目flip、標準64px、score0・敵3体・player・item。新撮影や生成画像ではなく、速度の実測資料にも使わない。</li>
<li>HTML編集時は共有CSSと相対参照先を保つ。配布PDFには画像を埋め込む。今回Game側・画像assets・フォント・外部依存は変更しない。</li>
</ul>
<h2 id="source生成archive">Source・生成・Archive</h2>
<ul>
<li>active source：<code>worksheets/month8-1/</code>、<code>month9-2/</code>、<code>month9-3/</code>の<code>index.html</code>。番号だけ整理し、これらのsource／PDFのファイル名は維持。</li>
<li><code>shared/worksheet.css</code>と<code>shared/self-check.js</code>は不変。Log 01の自己評価3項目は将来10-1でも同じ部品を使う。他2枚へ反復しない。10-1用紙面は未作成。</li>
<li><code>shared/activities.css</code>の結線PatternはLOG 01／02で共有。LOG 01の局所構図は<code>month8-1/worksheet.css</code>へ限定。旧collision・小画面比較等の未使用規則はarchive側に残す。</li>
<li><code>node tools/export_worksheet.mjs month9-2</code>等。引数はactive3回だけ受理し、専用headless Chromeで<code>output/pdf/&lt;Lesson&gt;-game-dev-log.pdf</code>へ出力する。通常Chromeは操作せず、追加npm依存なし。</li>
<li>旧Month8-2／8-3と当初の各Lesson版は<a title="開発リポジトリの参照（Web配布対象外）">per-lesson-v1</a>。廃止直前9-1・今回置換前9-2／9-3と当時のshared部品は<a title="開発リポジトリの参照（Web配布対象外）">selected-v2</a>。旧PDFも<code>output/pdf/archive/</code>以下の同名folderへ保管。番号は旧版の履歴。active出力・再生成・配布・公開へ含めない。</li>
</ul>
<h2 id="構図の選択と検証">構図の選択と検証</h2>
<p>既存Family内でA＝6活動を全幅の縦順、B＝大きな実画面→全幅台本→最後の2欄だけ横並び、C＝ゲームポスター＋側面の記録を比較。Sans／mono・White／Navy／意味色・控えめなblurは共通。Aは密集しやすく、Cは書字幅と台本が狭い。紙上の記録と発表の両方に幅を確保するBを採用した。白を主、実画像を主役、色面は意味のある台本等に限定。最も密度の高い9-3を先に試作・実PDFを確認してから、9-2の3コマと結線へ適用した。</p>
<p>実PDFの原寸・thumbnail・3秒／Blur・Series、背景OFF・白黒・筆記想定・フォント埋め込み・内容照合を行う。制作者点検と児童による理解・実授業・教室プリンタの検証は区別する。今回の最終結果は以下へ追記する。</p>
<h3 id="log-0203整理時の実描画レビュー前回">LOG 02／03整理時の実描画レビュー（前回）</h3>
<p>9-3の代表試作で大きな画面と6活動を1ページに収めた後、台本3行の書き始め・末尾が不揃いだったため、共通のprefix／筆記／suffix gridへ修正。前後とも記入高は8.5mmを維持し、再描画で3行の位置と幅が揃うことを確認した。9-2は不要な独立確認を削り、3コマとspriteを拡大、コードを9→10pt、結線行を17→33mmへ広げた。内容を埋める追加問題や新しい画像は作らない。</p>
<table>
<thead>
<tr>
<th>Skill評価（5点）</th>
<th style="text-align:right">9-2</th>
<th style="text-align:right">9-3</th>
<th>実PDFでの根拠</th>
</tr>
</thead>
<tbody>
<tr>
<td>Typography</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td>28pt題名、14.5pt区画、10ptコード、Metaと筆記の階層。題名の実寸も約28pt</td>
</tr>
<tr>
<td>Composition</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td>上の大きな3コマ／下の結線、大きな画面／全幅台本／補助の2欄という異なる焦点</td>
</tr>
<tr>
<td>Color</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td>White／Navyと意味色、白い筆記面。spriteの日本語名・線・文字で白黒も判別</td>
</tr>
<tr>
<td>Visual Hierarchy</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td>3コマ→結線、改造画面→記録→淡い台本面→感想と次の案。Blurでも主役を識別</td>
</tr>
<tr>
<td>Imagery</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td>実spriteの模式図と既存実画面を区別。不要な小画面・装飾画像なし</td>
</tr>
<tr>
<td>Consistency</td>
<td style="text-align:right">5</td>
<td style="text-align:right">5</td>
<td>Log 01とHeader・書体・Navy・blur・小マーカーを共有し、活動構造はコピーしない</td>
</tr>
<tr>
<td>Personality</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td>実ゲームに結びつく制作ノート。確認問題・Card列で紙を埋めない</td>
</tr>
<tr>
<td>Usability</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td>記述0の線結び／約118mm幅・8.5mm高の台本、他は8mm。3枚ともA4 1ページ</td>
</tr>
</tbody>
</table>
<p>判定：<strong>PASS（制作者による実描画確認）</strong>。3秒では9-2の3コマと結線、9-3の大きな実画面・改造記録・発表台本を識別。3枚のSeries Testで「観察／成長記録」「画面↔コード」「改造／発表／振り返り」の役割が分かれ、Familyは維持される。児童が3秒で理解したという実証ではない。</p>
<ul>
<li>全3枚：A4縦1ページ、フォント埋め込み、下端切れ・文字欠落・重なりなし。新2枚の有効高276mm／277mm、題名約28ptで自動縮小なし。カラー・grayscale・背景OFFを実PDFから再描画し、背景OFF版も1ページ・収録文字同一。Poppler未導入のためmacOS PDFKitで代替した。</li>
<li>Web preview：1280×720／1024×768で横溢れなし。9-3は大きな参考画面とPLANが上部約46%、実画面は104×78mm・4:3、台本は3行とも約118×8.5mm。残す記入行へ5mm級文字を置き、結線と矢印も模擬。配布PDFは空欄。</li>
<li>内容：9-2の全snippetは実COMPLETEの部分文字列と一致、コードと結線起点の最小間隔は約22px。9-3は実際の変更・結果を記録し、未実施の共有や将来の案を成果として捏造させない。05／06と追加改造を必須化しない。</li>
<li>Guideは紙の使用案内だけ変更。正式区分・概念・時間・順序のsource validator成功、通常／サブパスのGuide生成とactive3回だけのPDF生成対象も確認。旧版source／PDFのハッシュ一致を確認後、9-1をactiveから除外した。</li>
<li>この前回整理時はLog 01のsource・PDF・自己評価と共通Visual、Slide本文・Notes・Python・Game・assets・Reference・固定ID・カリキュラムは不変。今回のLOG 01同期は上記専用節を参照。新撮影・画像生成・Game実行・公開deployなし。</li>
<li>証跡：<code>artifacts/game1-paper-final/</code>の実PDF画像、3枚一覧、白黒・背景OFF・筆記想定・Blur、<code>verification.json</code>と<code>integrity.json</code>。児童の書字・理解・授業計時、教室プリンタ・Windowsでの印刷は未確認。</li>
</ul>
<h3 id="log-01同期の実描画レビュー履歴">LOG 01同期の実描画レビュー（履歴）</h3>
<p>以下はWorksheet導入時の記録。完成画面非表示・記述専用Slide・CORE17ページの運用は、上記の責任分離とCORE14ページへの整理で置き換えた。紙面・PDF自体は変更しない。</p>
<p>既存Family内でA＝縦順の制作ノート、B＝遊ぶ前後を左右で比較、C＝大きなゲーム画面への書き込みを比較した。共通のSans／mono・White／Navy・意味色・隅の幾何学blurを維持する。Bは前後の欄が狭く、Cは完成画面が先に答えを示すため不採用。授業順に使えるAを選び、対応付けの03と予想／実際の04だけを左右構図にした。紙の全5項目を代表試作にしてから、Slide／Guideへ展開した。</p>
<p>初回PDFではフッターのみ2ページ目へ出たためComposition／Usabilityを3点と判定し、ヘッダー・区画間の余白と自由欄を整理して再描画した。文字・8mm筆記行・既存自己評価は縮小せず、自由欄を20mm／16mm確保した。CONNECTも実画面で、古いSlide用spriteを参照していた点を修正。現在のGame assetsを直接取り込み、紙と同じ姿にした。解説のキー入力はSlidev操作へ伝播させない。</p>
<table>
<thead>
<tr>
<th>Skill評価（5点）</th>
<th style="text-align:right">初回紙面</th>
<th style="text-align:right">LOG 01／同期Slide</th>
<th>実描画での根拠</th>
</tr>
</thead>
<tbody>
<tr>
<td>Typography</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td>28pt紙題名・14.5pt区画・11ptコード、Slideは大きな問いと小さい紙番号を分離</td>
</tr>
<tr>
<td>Composition</td>
<td style="text-align:right">3</td>
<td style="text-align:right">4</td>
<td>縦の授業順、広い自由欄→結線→一体の比較、フッターを含めA4 1ページ</td>
</tr>
<tr>
<td>Color</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td>白い筆記面と淡い意味面。白黒・背景OFFでも文字・線・丸が残る</td>
</tr>
<tr>
<td>Visual Hierarchy</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td>主たる問い→自由記入／結線、追加アイデアは別の弱い領域。Blurでも区画が読める</td>
</tr>
<tr>
<td>Imagery</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td>同じ実spriteを紙／Slideで使用。速度の矢印と大小比較が意味を持ち、倍率はイメージと明記</td>
</tr>
<tr>
<td>Consistency</td>
<td style="text-align:right">5</td>
<td style="text-align:right">5</td>
<td>既存LOGの書体・Navy・blur・小マーカー・共通自己評価を維持</td>
</tr>
<tr>
<td>Personality</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td>単語・絵・線で考える制作ノート。穴を埋める確認テストやCard列にしない</td>
</tr>
<tr>
<td>Usability</td>
<td style="text-align:right">3</td>
<td style="text-align:right">4</td>
<td>線3本だけの03、1変更だけの04、閉じた解説とキーボードfocus。答えの先出しを防ぐ</td>
</tr>
</tbody>
</table>
<p>判定：<strong>PASS（制作者による実描画確認）</strong>。3秒／Blur点検で問い・結線・予想／実際が区別でき、自己誘導はLOG番号と短い動詞で追える。児童本人の理解速度・書字・実授業計時・実機プリンタの検証を意味しない。</p>
<ul>
<li>PDF：A4縦1ページ、題名実寸約28pt、フォント埋め込み・全文収録。カラー／白黒／背景OFFをPDFKitで再描画（Poppler未導入の代替）。5mm級文字・結線の筆記想定は検証画像だけで、配布PDFは空欄。</li>
<li>Slide：1280×720／1366×768／1024×768／320×180で変更ページを実描画。最小サイズは構図・干渉の確認で、本文可読性の保証ではない。解説は初期非表示、Enter／Spaceで開閉でき、フォーカス枠とページ固定位置を確認。</li>
<li>授業順：完成画面より前に01、PLAY後02、答え表示より前に結線03、変更前後04、最後05。Guideも同順・同じページ名へ同期。正式区分・時間・Python・Game・元assets・固定ID・他Lesson・Referenceは変更しない。新しいMUST・画像生成・公開deployなし。</li>
<li>証跡：<code>artifacts/month8-1-learning-flow/</code>のPDF再描画、4サイズのSlide、閉／開状態、筆記想定と各verification。教室プリンタ・児童による確認は別途必要。</li>
</ul>
`},"27_game2_spec":{html:`<h1 id="game2-正式仕様lesson段階設計">Game2 正式仕様・Lesson段階設計</h1>
<p>2026-10-17。<strong>BASIC／POLISHED MASTER実装・検証済み。Lesson START／COMPLETE・Slide・本番画像・Worksheetは未実装。</strong> Month10〜12のLesson順・責務・正式区分・時間は<a href="/robot-python-game/instructor/guide/#この5か月で目指すこと">docs/24</a>を正本とし、本書はそのGame2最小仕様を具体化する。初版の設計は1〜17節、最初のMASTER実装は18節の履歴、現在の2本構成・仮素材・演出は19節。</p>
<h2 id="1-目的参照範囲">1. 目的・参照範囲</h2>
<p>Game2は、4方向に移動しながら敵を狙い、上へ撃つ1画面シューティング。Game1の「避ける・itemを取る」から、「狙う・撃つ・当てる・HPを管理する」へ体験を変える。新しい主要概念はMonth10-2の具体的な発射flagとMonth11-1のHPだけ。ゲーム全体の書き直しや新文法の大量追加を目的にしない。</p>
<ul>
<li>Game1との比較：<a href="/robot-python-game/instructor/docs/03_game1_spec/">docs/03</a>、<a href="/robot-python-game/instructor/docs/04_game1_start_complete/">docs/04</a>、<a href="/robot-python-game/instructor/docs/05_game1_code_design/">docs/05</a>。依頼の<code>04_game1_start_complete_student_distribution.md</code>／<code>05_game1_code_design_student_edit_zone.md</code>は実在しないため、これらの正式ファイルを参照した。</li>
<li>学習支援・Student Edit Zone：<a href="/robot-python-game/instructor/docs/20_instructional_design_principles/">docs/20</a>。Referenceの再利用：<a href="/robot-python-game/instructor/docs/23_game1_reference_system/">docs/23</a>。紙の必要性：<a href="/robot-python-game/instructor/docs/26_student_worksheet_system/">docs/26</a>。現行運用：<a href="/robot-python-game/instructor/guide/">Guide</a>。共通Visualは<a href="/robot-python-game/instructor/docs/14_art_direction_v05/">docs/14</a>を維持する。</li>
<li>Game1の6回分のSTART／COMPLETE、Slide本文・固定ID・Notesを比較対象とする。特にMonth9-2の「条件→加点→再配置の連続Zone」「途中でも起動・確認できるSYSTEM」を参照し、Game1固有のitem一時非表示をGame2へそのままコピーしない。</li>
</ul>
<p>初版の設計時は本書だけを追加した。MASTER実装でもdocs/24、Guide、Game1、公開Web、既存の配布生成ツールは変更しない。新しい詳細とGuideの既存Lesson責務は矛盾させず、Game2のLesson教材を実装する段階で必要な運用情報だけ同期する。</p>
<h2 id="2-正本との対応破棄した案">2. 正本との対応・破棄した案</h2>
<table>
<thead>
<tr>
<th>論点</th>
<th>採用仕様</th>
</tr>
</thead>
<tbody>
<tr>
<td>player</td>
<td>1体。4方向移動、四辺で画面外制限</td>
</tr>
<tr>
<td>enemy</td>
<td>1体。上から下へ直進。下へ出たら上へ戻り、xをrandom再配置</td>
</tr>
<tr>
<td>bullet</td>
<td>同時に1発。SPACEを新しく押すと上へ発射。画面外・撃破で消費</td>
</tr>
<tr>
<td>撃破</td>
<td>score +100、enemyを上へ戻してxをrandom再配置、bulletを消費</td>
</tr>
<tr>
<td>damage</td>
<td>playerとenemyの接触1回でhp -1。enemyを直ちに上へ再配置</td>
</tr>
<tr>
<td>下通過</td>
<td>HP・scoreとも変化しない</td>
</tr>
<tr>
<td>同時接触</td>
<td>player×enemyを優先。同じ敵へのbullet撃破・加点は行わない</td>
</tr>
<tr>
<td>終了・再開</td>
<td>hp &lt;= 0でGame Over。Rで全状態を初期化、ESCで終了</td>
</tr>
</tbody>
</table>
<p>左右移動のみ、上部静止／横移動の敵、画面下到達によるHP減少は破棄済み。未決定案として復活させない。敵の落下自体はGame1からの転用であり、Game2の新しい学習単元にはしない。</p>
<h2 id="3-ゲーム全体操作標準値">3. ゲーム全体・操作・標準値</h2>
<p>Python／Pygame、800×600、約60FPS、Windows／macOS。1ファイル中心、<code>__file__</code>基準の相対asset、配布フォルダ単体で起動できる構成を継承する。Python／Pygameの事前導入は必要で、実行形式への梱包は今回の仕様外。</p>
<p>通常プレイ：移動して狙う → SPACEで1発撃つ → 命中で100点・敵再配置 → 次の1発。避け損ねるとHPが減り、3回の接触で終了。制限時間・勝利条件・目標点・ハイスコア保存は設けない。</p>
<table>
<thead>
<tr>
<th>キー</th>
<th>動作</th>
</tr>
</thead>
<tbody>
<tr>
<td>←／→／↑／↓</td>
<td>押している間、その方向へ移動。離すと停止</td>
</tr>
<tr>
<td>SPACE</td>
<td>新しく押した時だけ発射を要求。長押し連射・予約発射なし</td>
</tr>
<tr>
<td>R</td>
<td>Game Over中のみRestart。通常プレイ中は何もしない</td>
</tr>
<tr>
<td>ESC／ウィンドウを閉じる</td>
<td>通常プレイ・Game Overのどちらからも終了</td>
</tr>
</tbody>
</table>
<p>移動はGame1と同じ矢印4キーに統一する。A／D・W／Sは追加しない。斜め入力は各軸を別々に更新し、斜め速度の正規化はしない。</p>
<p>以下は標準データの初期値。速度は1更新あたりの移動量であり、delta timeの学習を追加しない。ゲームの難易度・素材の視認性は実装後のPlaytestで確認する。</p>
<table>
<thead>
<tr>
<th>設定・状態</th>
<th>値／範囲</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>screen_width</code>／<code>screen_height</code>／<code>fps</code></td>
<td>800／600／60</td>
</tr>
<tr>
<td><code>player_size</code>／<code>enemy_size</code></td>
<td>各64。表示・Rect・境界・fallbackに共用</td>
</tr>
<tr>
<td><code>player_speed</code>／<code>enemy_speed</code>／<code>bullet_speed</code></td>
<td>5／4／10</td>
</tr>
<tr>
<td><code>bullet_width</code>／<code>bullet_height</code></td>
<td>8／16。横長画像や正方形Rectへ置換しない</td>
</tr>
<tr>
<td>player初期位置</td>
<td>x＝<code>screen_width // 2 - player_size // 2</code>、y＝<code>screen_height - player_size - 30</code>（標準368,506）</td>
</tr>
<tr>
<td>enemy初期位置・再配置</td>
<td>x＝<code>random.randint(0, screen_width - enemy_size)</code>、y＝<code>-enemy_size</code>（標準-64）</td>
</tr>
<tr>
<td>bullet初期位置</td>
<td>player中央の真上。下記の発射位置と同じ式、ただし非表示</td>
</tr>
<tr>
<td><code>score</code>／<code>hp</code>／<code>bullet_active</code>／<code>game_over</code></td>
<td>0／3／False／False</td>
</tr>
</tbody>
</table>
<p>enemy初期yはGame1の50をコピーせず、再出現と同じ画面上外にする。randomは両端を含み、標準x範囲は0〜736。同じxの再選択も正常で、必ず前回と違う値にする追加処理は設けない。</p>
<h2 id="4-playerenemy当たり判定">4. player・enemy・当たり判定</h2>
<p>playerの左上座標を<code>player_x</code>／<code>player_y</code>、enemyを<code>enemy_x</code>／<code>enemy_y</code>とする。敵は1体なので<code>enemy1</code>〜3の変数やlistは不要。</p>
<ul>
<li>移動は<code>player_x = player_x + player_speed</code>等の明示的な4方向記述。四辺の制限も個別のif・比較・代入とし、max／min／clampで隠さない。標準左上範囲はx＝0〜736、y＝0〜536。</li>
<li>敵は<code>enemy_y = enemy_y + enemy_speed</code>。<code>enemy_y &gt; screen_height</code>で上外へ戻しxをrandom再配置する。この自然な再出現は最初から完成済みREADコードとする。</li>
<li>移動後の座標から<code>player_rect</code>／<code>enemy_rect</code>／<code>bullet_rect</code>を準備する。player／enemyは各sizeの正方形、bulletはwidth×height。画像の透明余白を含む四角で判定し、ピクセル単位の輪郭判定は行わない。</li>
<li><code>colliderect</code>を転用する。辺が接するだけでは接触とせず、実際のRectの重なりを調べる。非発射中のbullet座標が残っても当たり判定を行わない。</li>
</ul>
<h2 id="5-bulletの状態発射移動消滅">5. bulletの状態・発射・移動・消滅</h2>
<p><code>bullet_active</code>は「今、弾が飛んでいるか」を覚える具体的なflag。座標があることと、弾が存在することを区別する。一般bool理論、and／or／notの組み立て、高度な状態機械へ広げない。</p>
<table>
<thead>
<tr>
<th>今の状態</th>
<th>入力・出来事</th>
<th>次の状態・結果</th>
</tr>
</thead>
<tbody>
<tr>
<td>False</td>
<td>SPACEを新しく押す</td>
<td>player中央付近に座標を設定しTrueへ。1発表示</td>
</tr>
<tr>
<td>True</td>
<td>SPACEを押す／押し続ける</td>
<td>追加しない。発射要求を保持しない</td>
</tr>
<tr>
<td>True</td>
<td>通常更新</td>
<td><code>bullet_y = bullet_y - bullet_speed</code></td>
</tr>
<tr>
<td>True</td>
<td>弾全体が画面上へ出る</td>
<td><code>bullet_active = False</code>。非表示・判定対象外</td>
</tr>
<tr>
<td>True</td>
<td>enemyを撃破</td>
<td><code>bullet_active = False</code>。その弾で再加点しない</td>
</tr>
<tr>
<td>任意</td>
<td>Game Over</td>
<td>発射・移動・判定を停止。残った弾もその位置で停止</td>
</tr>
<tr>
<td>任意</td>
<td>RでRestart</td>
<td>初期座標とFalseへ戻す。古い入力要求を破棄</td>
</tr>
</tbody>
</table>
<p>発射位置は<code>bullet_x = player_x + player_size // 2 - bullet_width // 2</code>、<code>bullet_y = player_y - bullet_height</code>。中央合わせの2行はREADの完成コードとし、整数除算の一般講義・式の独立生成は要求しない。player移動後の位置から発射し、発射後はplayerに追従しない。</p>
<p>画面外条件は<code>bullet_y + bullet_height &lt; 0</code>（弾全体が上へ抜けた時）。消えた直後に座標をplayerへ追従させず、最後の値を保持し、次の発射時に上書きする。playerが画面上端にいる場合、発射した弾がすぐ画面外へ消えても正常。</p>
<p>SYSTEMは毎frameの発射要求を初期化し、KEYDOWNによる新しいSPACEだけを受け取る。キーリピートを有効化しない。入力時に弾が飛んでいれば要求を捨て、同frame中に弾が消えても発射予約へ変換しない。複数イベントも1更新で最大1要求。表示条件と判定の有効化もSYSTEMが保証し、生徒はflagのTrue／Falseと動きの対応を学ぶ。</p>
<h2 id="6-撃破scoreenemy再配置">6. 撃破・score・enemy再配置</h2>
<p>有効なbulletがenemyと重なった時だけ、以下を1回行う。</p>
<ol>
<li><code>score = score + 100</code></li>
<li><code>enemy_y = -enemy_size</code></li>
<li><code>enemy_x = random.randint(0, screen_width - enemy_size)</code></li>
<li><code>bullet_active = False</code></li>
</ol>
<p>条件と1〜3はMonth10-3の連続Student Edit Zone。4はMonth10-2のflagを使う準備済みの末尾処理としてREADで確認する（段階実行の責務は11節）。score表示・命中SE等はZoneの後のSYSTEMで更新する。描画用scoreと実変数を別ルールにしない。</p>
<p>外れた弾、enemyの画面下通過、playerとの接触では得点しない。100→200→300と増え、同じ撃破で複数frame加点しない。撃破後のyも上外へ戻すため、同じ場所に敵が残り続ける仕様にはしない。</p>
<h2 id="7-hpdamage同時接触の優先順位">7. HP・damage・同時接触の優先順位</h2>
<p>採用は<strong>player×enemyの接触でhp -1、その接触のenemyを上外へ再配置</strong>。既習のRect／colliderect・引き算・ifを使え、新しい攻撃体やタイマーを導入せずMonth11-1だけで接続できる。敵1体なので判定対象も追いやすい。下通過は無傷で、避けるか撃つかを選べる。</p>
<ul>
<li>初期<code>hp = 3</code>。1接触につき<code>hp = hp - 1</code>。scoreと違い残りを表す量として扱う。</li>
<li><code>hp &lt;= 0</code>で<code>game_over = True</code>。終了条件は接触でHPを減らすブロック内に続けて書き、条件・引き算・終了を一続きで読めるようにする。</li>
<li>Zone末尾のSYSTEMが接触したenemyをy＝<code>-enemy_size</code>、x＝標準random範囲へ直ちに戻す。同じ敵との重なりを次frameへ持ち越さず、無敵時間・cooldownは作らない。上端付近では新しく入ってきた敵との別の接触は起こり得る。</li>
<li>playerとenemyの接触を先に処理し、そのframeは同じenemyへのbullet判定を実行しない。非致死接触なら飛行中のbulletは消費せず継続、致死接触ならそのまま停止。どちらも同時撃破の100点を与えない。</li>
<li>敵の再配置後に古いenemy_rectでもう一度撃破判定をしない。HP処理後にRectを作り直して同frameの別の敵として撃つこともしない。1更新中に一つの敵へ二つの結果を出さない。</li>
</ul>
<p>接触の記録・二重結果の抑制はSYSTEM。生徒が書く接触条件・hp更新・終了条件をhelper内へ移さない。下通過damage、敵弾、追尾などの代替damage方式は採用しない。</p>
<h2 id="8-game-overrestart">8. Game Over・Restart</h2>
<p>Game Overではplayer・enemy・bulletの移動、発射、接触処理、加点、HP更新をすべて停止する。背景・停止した対象・最終Score／HPを描き、その上に<code>GAME OVER</code>と<code>Press R to Restart</code>を表示する。点滅やフラッシュを必須にしない。</p>
<p>Rの初期化は準備済みSYSTEM。生徒には実装させず、Month11-1／11-2で以下を確認させる。</p>
<table>
<thead>
<tr>
<th>初期化対象</th>
<th>Restart直後</th>
</tr>
</thead>
<tbody>
<tr>
<td>player／enemy</td>
<td>3節の初期座標。enemyのxは範囲内から再抽選</td>
</tr>
<tr>
<td>bullet</td>
<td>初期player中央の真上へ。<code>bullet_active = False</code></td>
</tr>
<tr>
<td>score／hp／game_over</td>
<td>0／3／False</td>
</tr>
<tr>
<td>発射要求・接触／撃破記録・任意演出</td>
<td>破棄・未発生へ戻す。古いSE・時刻を引き継がない</td>
</tr>
<tr>
<td>HUD</td>
<td>Score 0／HP 3へ更新</td>
</tr>
</tbody>
</table>
<p>Restartを処理したframeはゲーム更新を行わず初期状態を描画する。Rと同時のSPACEや古い発射要求を再開直後の弾へ流用しない。画像・音・font・windowを読み直さない。Rは同じコードで再開する操作であり、コード・画像の変更反映は保存→ESC→再実行。</p>
<h2 id="9-処理順system境界">9. 処理順・SYSTEM境界</h2>
<p>1frameは、event取得 → player移動・境界 → enemy落下・下通過再配置 → 発射・bullet上移動・画面外消滅 → Rect準備 → HP接触・終了 → 有効ならbullet撃破 → HUD／任意演出・描画 → display更新1回 → Clock制御1回。Game Over中とRestart直後は状態更新を止め、描画・終了入力は継続する。</p>
<p>学習対象ごとの連続Zoneをmain flowに残す。全学習コードをファイル上部や1つの巨大関数へ集める意味ではない。Zoneの間に必要なRect準備や別のLessonの処理があることと、同じWORKの入力行にSYSTEMを挟むことを区別する。</p>
<table>
<thead>
<tr>
<th>生徒が扱うこと</th>
<th>SYSTEM／READとして用意すること</th>
</tr>
</thead>
<tbody>
<tr>
<td>4方向更新、四辺の制限</td>
<td>event loop・キー状態の取得</td>
</tr>
<tr>
<td>発射flag、弾の上移動・画面外でFalse</td>
<td>新押下の取得・発射可能時だけの入口、中央合わせREAD2行、表示分岐</td>
</tr>
<tr>
<td>bullet衝突条件、score、撃破後のy/x</td>
<td>Rect準備、非発射時／接触優先のガード、弾の一回消費、HUD・SE</td>
</tr>
<tr>
<td>player衝突条件、hp引き算、0以下→終了</td>
<td>接触後のenemy再配置・記録、同frame撃破抑制、停止・R</td>
</tr>
<tr>
<td>既習処理の読解・設定比較</td>
<td>敵の自然落下・下通過再配置は完成READ。asset・描画・音声・frame timingはSYSTEM</td>
</tr>
</tbody>
</table>
<p>Zone前に必要な状態を記録し、Zone末尾／後で一回化・表示・演出を処理する。SYSTEMの外側ガードを最初から用意し、生徒にand／notや補助flagの入力を課さない。必要な短いSYSTEM helperは許可するが、移動・当たり判定・得点・HPをまとめた学習ロジックのhelperは作らない。</p>
<p><code>+=</code>、class／dataclass、敵・弾のlist、内包表記、lambda、高度な型ヒント・例外処理は採用しない。一般的な引数／local・globalの授業も前提にしない。画像・scale・font・音は起動時に準備し、毎frame読み込まない。</p>
<h2 id="10-開発配布構成とコードの目印設計">10. 開発・配布構成とコードの目印（設計）</h2>
<p>MASTERは<code>game2/master/master-basic.py</code>（ルール確認）と<code>master-polished.py</code>（完成体験）の2本。ゲーム体験の標準はPOLISHED、旧<code>game.py</code>はBASICへの互換入口だけとする。開発用共通assetsは<code>game2/assets/</code>。POLISHEDは同階層<code>assets/</code>を優先し、なければGame2の共通assetsを参照する。単体で移動する場合は<code>polished_support.py</code>と同階層assetsを同梱でき、全assetsなしでもfallbackで起動する。BASICは画像・音を読み込まない。Game1のassetsを外部参照しない。将来のLessonは<code>game2/lessons/month10-1/</code>〜<code>month11-2/</code>の<code>start.py</code>／<code>complete.py</code>を予定し、同階層assets優先とする（未実装）。</p>
<p>生徒配布はLesson名の<code>month10-1.py</code>等と同階層assetsだけ。COMPLETE・MASTER・toolsを含めない。既存Game1 builderに未実装のGame2対応があるとは扱わず、対応・生成先・安全な再生成は実装タスクで検証する。</p>
<p>コメント・余白・固定IDの運用はdocs/05へ準拠する。各START冒頭に今日の学習、対象位置へ一意な固定ID、EDIT／READ／SYSTEM／LEARNED／CHALLENGEを付ける。以下はGame2実装用のID割当で、現時点ではPython・Slideに存在しない。</p>
<table>
<thead>
<tr>
<th>Lesson</th>
<th>IDと対象（同じIDをSTART／COMPLETEに残す）</th>
</tr>
</thead>
<tbody>
<tr>
<td>10-1</td>
<td><code>[10-1-1]</code>右、<code>[10-1-2]</code>左、<code>[10-1-3]</code>上下、<code>[10-1-4]</code>四辺の制限</td>
</tr>
<tr>
<td>10-2</td>
<td><code>[10-2-1]</code>発射・True、<code>[10-2-2]</code>上移動、<code>[10-2-3]</code>画面外・False</td>
</tr>
<tr>
<td>10-3</td>
<td><code>[10-3-1]</code>弾と敵の条件、<code>[10-3-2]</code>100点、<code>[10-3-3]</code>敵のy/x再配置</td>
</tr>
<tr>
<td>11-1</td>
<td><code>[11-1-1]</code>接触条件、<code>[11-1-2]</code>HPを1減らす、<code>[11-1-3]</code>0以下・終了</td>
</tr>
<tr>
<td>11-2</td>
<td>新しい穴・IDを追加しない。既存IDで確認・必要な修正をする</td>
</tr>
</tbody>
</table>
<p>冒頭一覧では括弧なしの番号を使い、Ctrl + Fの検索が一意になるようにする。短い意味・位置・変数のヒントまでをコード内へ置き、詳細説明・完成例・段階Hintは後続Slideへ分離する。</p>
<h2 id="11-startcompleteと途中実行">11. START／COMPLETEと途中実行</h2>
<h3 id="共通の段階方針">共通の段階方針</h3>
<p>各STARTは前Lessonの標準完成状態を引き継ぎ、その日の処理だけ未完成。最初の10-1には起動・描画・敵の自然移動だけを用意する。10-1〜10-3ではHP表示は3で固定、接触によるdamage・Game Overは未接続。HPの機能を先に実装して生徒の操作・発射学習を妨げない。完成デモは別のMASTERを講師が見せ、STARTを完成ゲームと偽らない。</p>
<p>仮条件<code>if False:</code>、無動作の代入、必要な<code>pass</code>等で起動を保証する。未定義の下線識別子を実行コードに入れない。空ifを含む入力途中の任意のキー入力時点までは保証しないが、教材がCHECKを置く各段階は構文的に完成して起動できるようにする。</p>
<p><strong>段階支援を完成実装の代替にしない。</strong> SYSTEMは誤った学習式を自動訂正せず、未完成の移動・score・random・HPを裏で完成させない。STARTへ予定どおりの学習行を入れたら、コメントを除くASTと動作がCOMPLETEへ一致することを将来の検査条件にする。</p>
<h3 id="month10-1player-movement-transfer">Month10-1：player movement transfer</h3>
<ul>
<li>START：window・画像／fallback・enemy落下／下通過再配置・HUD・終了入力は完成。playerは初期位置に表示されるが移動は未完成。弾は出ず、score 0／HP 3、接触しても終了しない。</li>
<li>生徒：Game1を参考に右→左→上下の座標更新と、四辺の制限を転用。完成例・Referenceを使ってよい。Game1で境界を省略した生徒へ再接続する。</li>
<li>CHECK：右だけ→左右→4方向→四辺の制限を順に確認。未完成段階で画面外へ出るのは途中状態であり、標準完成ではない。</li>
<li>COMPLETE：4方向移動と四辺の制限。他の機能はSTARTと同じ。ここでは境界もdocs/24のMUSTであり、Game1の8-2のSHOULDを変更するものではない。</li>
</ul>
<h3 id="month10-2bulletbullet_active">Month10-2：bullet／bullet_active</h3>
<ul>
<li>START：10-1 COMPLETEと同じ。bullet座標・speed・False初期化、画像／fallback・表示分岐、SPACE新押下・単発入口、中央合わせREAD2行は準備済み。Trueへの切替、上移動、画面外でFalseは未完成。</li>
<li>生徒：発射位置をREADで確認しTrue、yを減らす1行、上外条件とFalseを接続。単発入口・一般論理式は書かせない。</li>
<li>CHECK A：Trueまでで初期playerの上に1発出る。まだ上へ動かず、SPACEを追加しても増えない。</li>
<li>CHECK B：上移動までで飛行する。画面外消滅が未完成なら画面外でもTrueのため再発射できない。この段階では正常。ESC→再実行で戻せる。</li>
<li>CHECK C／COMPLETE：上外へ出るとFalseになり、新しいSPACEで次を出せる。発射中の長押し・追加入力は予約されない。まだ敵に当てても加点・消費・撃破再配置はしない。</li>
</ul>
<h3 id="month10-3bullet-hitscoreenemy-reposition">Month10-3：bullet hit／score／enemy reposition</h3>
<ul>
<li>START：10-2 COMPLETEと同じ。Rect・有効な弾だけの入口・HUD更新は完成。撃破Zoneの条件は仮条件、score・敵y/xの行は未記入。</li>
<li>Zone末尾には準備済みの<code>bullet_active = False</code>を置く。これは10-2で扱ったflagのREAD／一回消費基盤で、条件が書けた段階から同じ弾の連続判定を防ぐ。生徒の条件→score→敵y→敵xの間へSYSTEMを挟まない。</li>
<li>CHECK A：条件だけ完成すると、当たった弾は消える。score 0、敵は落下を続ける。自然な画面下再配置と、未完成の撃破再配置を区別する。</li>
<li>CHECK B：scoreまでで命中1回につき100点。弾は消え、撃破位置からの敵再配置はまだない。</li>
<li>CHECK C：yを戻す行までで敵は同じxの上外へ戻る。x randomを加えると標準範囲から再出現する。</li>
<li>COMPLETE：有効な命中で100点・敵のy/x再配置・弾消費。連続撃破でも1発で1回だけ加点。HPはまだ3固定。</li>
</ul>
<h3 id="month11-1hp">Month11-1：HP</h3>
<ul>
<li>START：10-3 COMPLETEと同じ。hp初期3・表示、Rによる全状態復元、停止／Game Over表示、1接触のenemy再配置と同frame撃破抑制の基盤は準備済み。接触Zoneの仮条件、hp更新、0以下→終了だけを未完成にする。</li>
<li>生徒：player×enemyの条件、<code>hp = hp - 1</code>、続く<code>if hp &lt;= 0:</code>と<code>game_over = True</code>を同じ接触ブロックへ記述。条件を書く段階では末尾の準備済み処理により空ifにならない。</li>
<li>Zone末尾のSYSTEMはenemyを上外・random xへ戻し、接触処理済みを記録する。生徒の条件・引き算・終了の間に基盤コードを挟まない。Rの全初期化は生徒入力ではなく確認対象。</li>
<li>CHECK A：接触条件だけでenemyが再配置され、HPはまだ3。触れていない時や下通過では変わらない。</li>
<li>CHECK B：引き算までで1接触に1だけ減る。まず1回で3→2を確認し、終了条件が未完成のまま接触を繰り返す確認は行わない。再確認はESC→再実行。</li>
<li>CHECK C／COMPLETE：終了条件も完成し、別々の3接触で3→2→1→0、Game Over・停止、Rで全復元。非致死／致死の同時接触も7節の優先順位に一致。</li>
</ul>
<h3 id="month11-211-3">Month11-2・11-3</h3>
<ul>
<li>11-2 START：11-1 COMPLETE相当の標準完成版。意図的なバグ・穴・新しい機能を加えない。全機能のtest、実際に問題があれば修正→再test、完成版の保全・保存がMUST。COMPLETEは標準設定の参照完成版で、MASTERと同じゲーム挙動。問題がない生徒へ修正・再入力を強制しない。既習設定のsmall tune・他者試遊は既存SHOULD。</li>
<li>11-3：Game1／Game2から一つ選んでコピーし、目的に関連する2変更・順序・確認方法を計画、小試行と次の手を残す。Game2の新機能回にしない。共通の改造完成コードを定めず、Game2標準仕様の完成は11-2まで。Month12の責務を前倒ししない。</li>
</ul>
<h2 id="12-概念分類と学習負荷">12. 概念分類と学習負荷</h2>
<table>
<thead>
<tr>
<th>Lesson</th>
<th>NEW</th>
<th>TRANSFER</th>
<th>READ ONLY</th>
<th>SYSTEM</th>
</tr>
</thead>
<tbody>
<tr>
<td>10-1</td>
<td>なし</td>
<td>4方向・座標・加減算・if・比較・境界</td>
<td>敵の自然落下、完成デモの弾</td>
<td>window・event・画像・描画・終了</td>
</tr>
<tr>
<td>10-2</td>
<td>弾の有無を覚える具体的flag（1）</td>
<td>上移動・画面外比較</td>
<td>発射位置2行、<code>if bullet_active:</code>と表示の対応</td>
<td>新押下・入口・同時多発抑制</td>
</tr>
<tr>
<td>10-3</td>
<td>なし</td>
<td>colliderect・100点・random</td>
<td>Rect生成、末尾の弾消費</td>
<td>有効な弾だけの入口・一回化・HUD・SE</td>
</tr>
<tr>
<td>11-1</td>
<td>HPという残量（1）</td>
<td>接触・引き算・if・終了状態</td>
<td><code>&lt;=</code>を「0以下」へ接続、Rの結果</td>
<td>接触後再配置・同frame優先順位・停止・R</td>
</tr>
<tr>
<td>11-2</td>
<td>なし</td>
<td>test・debug・必要な修正・保存</td>
<td>標準完成チェック</td>
<td>準備済み基盤を維持</td>
</tr>
<tr>
<td>11-3</td>
<td>なし</td>
<td>ゲーム選定・改造計画・小試行・相談</td>
<td>既習コードと改造候補</td>
<td>新基盤なし</td>
</tr>
</tbody>
</table>
<p>True／Falseは10-2で初めて学習対象とするが、「弾が出ている／いない」だけに限定する。Game1に存在したgame_over・ガード・helperを正式既習とみなさない。randomも8-3のSHOULD未実施者に初期化例・Referenceを再提示し、綴りや引数の暗記を要求しない。</p>
<p>Coding Level・自走・AI・80分枠はdocs/24のまま。10-1〜11-1は参考転用L3〜4を中心にし、10-2の独立複数行L5は任意。完成例を見た記述を独立生成と数えず、Hint／Reference／講師支援も成功経路とする。AIは許可済み環境で意味・原因・次の試行を相談するために使い、全員必須にしない。</p>
<h3 id="code-sizeの設計時点の監査">Code sizeの設計時点の監査</h3>
<p>既存コードのASTを確認すると、Game1の8-1 STARTのmain loopは199〜407行、SYSTEM込み111文・if 30件、9-2 COMPLETEは206〜443行、111文・if 29件。物理行にはコメント・空行を含む。これは生徒が全部読む量ではなく、比較用の現状値である。</p>
<table>
<thead>
<tr>
<th>今回の設計案</th>
<th style="text-align:right">学習対象の実行行の見積り</th>
<th style="text-align:right">生徒が扱うifの見積り</th>
</tr>
</thead>
<tbody>
<tr>
<td>player4方向＋四辺</td>
<td style="text-align:right">16</td>
<td style="text-align:right">8</td>
</tr>
<tr>
<td>発射・上移動・消滅</td>
<td style="text-align:right">6（発射位置のREAD2行を含む）</td>
<td style="text-align:right">1（発射／飛行中の入口は準備済み）</td>
</tr>
<tr>
<td>撃破条件・加点・敵y/x</td>
<td style="text-align:right">4</td>
<td style="text-align:right">1</td>
</tr>
<tr>
<td>接触・hp・0以下・終了</td>
<td style="text-align:right">4</td>
<td style="text-align:right">2</td>
</tr>
<tr>
<td>合計</td>
<td style="text-align:right">30（生徒記述28＋READ2）</td>
<td style="text-align:right">12</td>
</tr>
</tbody>
</table>
<p>上記は設計時点の完成形の行モデルで、全員が一度に30行入力する課題ではない。既習コードは後続LessonでLEARNEDとして残す。Rect・敵落下・ガード等を含めたmain loop全体の実装後の計測は18節。SYSTEM込みの111文と上の30行を直接比較して「大幅削減できた」とは評価しない。</p>
<p>最も負荷が高い10-2は、False／True・位置・移動・消滅を1画面の長い課題にせず、11節の3段階で確認する。11-1の入れ子は接触→HP減少→0以下の4行だけで扱い、新しい論理式を足さない。実装後はmain loopの全体量・各Zoneの記述行とif数・入力位置の分断・SYSTEMを追わないと分からない箇所を再計測する。負荷超過時は基盤配置と支援を改善し、学習ロジックをhelperへ隠して見かけの行数を減らさない。児童の理解・タイピング・授業時間は未検証。</p>
<h2 id="13-game1からの転用対応">13. Game1からの転用対応</h2>
<table>
<thead>
<tr>
<th>Game1で経験したこと</th>
<th>Game2で使う先・違い</th>
</tr>
</thead>
<tbody>
<tr>
<td>8-1の設定→予想→実行→比較</td>
<td>player／enemy／bullet速度の比較。指定値へ一律変更させない</td>
</tr>
<tr>
<td>8-2のx/y・4方向・境界</td>
<td>player操作を転用。Game2のsize・画面に式を合わせる</td>
</tr>
<tr>
<td>8-3のy加算・下判定・上へ戻す</td>
<td>敵1体の完成READ。弾はyを減らし上へ進む</td>
</tr>
<tr>
<td>8-3／9-2のrandom</td>
<td>撃破時のenemy_x。yはrandomでなく上外へ固定</td>
</tr>
<tr>
<td>9-1のRect／colliderect</td>
<td>bullet×enemyとplayer×enemyで相手を替える</td>
</tr>
<tr>
<td>9-2のscore更新・連続Zone</td>
<td>命中→100点→敵再配置。itemを取る処理は存在しない</td>
</tr>
<tr>
<td>9-1のGame Over／R</td>
<td>接触即終了ではなく、HP0以下で終了。復元対象に弾・HPを加える</td>
</tr>
<tr>
<td>9-3の改造・別保存・説明</td>
<td>11-2の任意調整、11-3以降の関連2変更の計画へ</td>
</tr>
</tbody>
</table>
<h2 id="14-画面visual-identityassets">14. 画面・Visual Identity・assets</h2>
<h3 id="3方向の比較文書上の候補">3方向の比較（文書上の候補）</h3>
<p>全案で800×600・全画面の移動領域・小さなScore／HP・敵1体／弾1発を維持する。新しい画面機構やゲームルールの案ではない。</p>
<table>
<thead>
<tr>
<th>案</th>
<th>印象・Typography</th>
<th>Color・Composition</th>
<th>Imagery・装飾・特徴</th>
<th>弱点・判断</th>
</tr>
</thead>
<tbody>
<tr>
<td>A：宇宙の迎撃</td>
<td>落ち着いた技術的arcade。HUDは太めの簡潔なSans、数字は判別しやすく</td>
<td>Dark Navyを主、Cyan／Orange／明るい弾を少量。HUD上隅、中央の弾道を主役</td>
<td>小さい上向き機体・落下物・縦長弾。POLISHEDではSYSTEMの小さい星が下へ流れる。背景の暗さで弾を見せる</td>
<td>小さい弾のcontrastに注意。図形fallbackでも体験が成立し、素材制作が少ない。<strong>採用</strong></td>
</tr>
<tr>
<td>B：明るいテストアリーナ</td>
<td>実験・照準。既存教材と近いSans、左上Score・右上HP</td>
<td>明るい青灰約85%、弱い座標目盛約10%、濃い対象約5%。盤面を一枚の計測面として見せる</td>
<td>幾何学player／enemy、目盛は背景だけ。位置・Rectを読み取りやすい技術図的表現</td>
<td>Game1から別ゲームへ移った印象が弱い。格子を強くすると移動対象と競合</td>
</tr>
<tr>
<td>C：大胆な二色アーケード</td>
<td>力強い印刷ポスター風。太い圧縮気味のLatin見出し、HUD数字は通常幅</td>
<td>暗色約70%、大きなPurpleの背景面約25%、明るい弾等約5%。背景の大きな切替面と無装飾のHUDを対比</td>
<td>切り絵風の大きな背景形と、簡潔なsilhouette。光・粒子・動く背景は使わない</td>
<td>個性は強いが背景面が敵・弾より目立つ危険と素材調整コスト。今回は選ばない</td>
</tr>
</tbody>
</table>
<p>Aを採用する。Game1と同じ落下を保ちながら、上向き機体と明るい弾で「自分から撃つ」を主役にできる。三案を混ぜず、凝ったコックピット・screen shake・複雑なanimation engineは追加しない。小さな星の移動は19節のPOLISHED専用SYSTEMで、学習対象にはしない。色だけで対象を区別せず、機体／落下物／細い縦弾の形も変える。ゲーム内の対象色はSlideのEDIT・READ等の意味色と別で、教材のRole色を変更しない。</p>
<p>以下は関係だけを示す模式図で、実画面・固定配置・完成したデザインではない。playerは初期に下側にいるが全画面を4方向へ動ける。</p>
<pre><code class="language-text">┌────────────────────────────┐
│ Score: 0             HP: 3 │
│         ENEMY ↓            │
│                            │
│           ↑ bullet         │
│                            │
│      ← PLAYER →            │
│           ↑↓               │
└────────────────────────────┘
</code></pre>
<p>HUDはScore／HPを36px級、Game Overは72px級、再開案内は36px級を初期目安にする。HUD用に移動範囲を狭めず、対象を描いた後にHUDを描画する。最終値は実表示で判断し、Slideの投影文字サイズと混同しない。</p>
<h3 id="標準アセット構成polished仮素材は19節本画像はユーザーが後日差し替え">標準アセット構成（POLISHED。仮素材は19節、本画像はユーザーが後日差し替え）</h3>
<table>
<thead>
<tr>
<th>相対ファイル</th>
<th>原素材・ゲーム表示</th>
<th>欠損・読込失敗時</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>assets/images/background.png</code></td>
<td>800×600推奨、画面全体へscale</td>
<td>暗い単色背景</td>
</tr>
<tr>
<td><code>assets/images/player.png</code></td>
<td>透過32×32 → 64×64</td>
<td>Blue-Cyanの上向き機体形</td>
</tr>
<tr>
<td><code>assets/images/enemy.png</code></td>
<td>透過32×32 → 64×64</td>
<td>Orange系の落下物の多角形</td>
</tr>
<tr>
<td><code>assets/images/bullet.png</code></td>
<td>透過8×16 → 設定width×height</td>
<td>明るい縦長矩形</td>
</tr>
<tr>
<td><code>assets/sounds/shoot.wav</code></td>
<td>任意。発射成立時だけ1回</td>
<td>無音</td>
</tr>
<tr>
<td><code>assets/sounds/hit.wav</code></td>
<td>任意。撃破成立時だけ1回</td>
<td>無音</td>
</tr>
<tr>
<td><code>assets/sounds/damage.wav</code></td>
<td>任意。player接触成立時だけ1回</td>
<td>無音</td>
</tr>
<tr>
<td><code>assets/sounds/bgm.wav</code></td>
<td>自作32秒ループ、音量0.18</td>
<td>無音</td>
</tr>
</tbody>
</table>
<p>画像の表示サイズとRectは同じ設定を使う。背景PNGは任意で、POLISHEDの星24個だけを独立SYSTEMで動かす。星・火花のlistは演出専用モジュール内に隔離し、enemy／bulletをlist管理する許可にはしない。同名PNG／WAVの差し替え→再実行で反映。パスを複数箇所へ直書きせず、同階層assetsと開発共通assetsの二択までにする。</p>
<p>音声は学習対象外。ファイル・audio deviceの不備では無音で継続し、SEを成功判定の唯一の手段にしない。POLISHEDの音・hit／damage feedbackは完成体験用のSYSTEMであり、生徒のMUST入力やNEWへ追加しない。BASICには音・エフェクトを入れない。ゲームルール・学習行は同じままにする。</p>
<h3 id="後続の代表画面検証">後続の代表画面検証</h3>
<p>初版のVisual Design Directorの比較は文書上の設計判断で、実描画がなかったためNOT VERIFIEDとした。MASTER実装後の暫定Theme Aの実描画・8軸評価は18節。本素材・実機・児童の理解は引き続き未検証。今後の素材差し替え時も「敵・弾・player・HUDが同時表示された通常画面」を先に確認し、Game Overと図形fallbackも比較する。Typography／Composition／Color／Visual Hierarchy／Imagery／Consistency／Personality／Usabilityを実スクリーンショットで評価し、各4点以上と技術的正確さを満たすまで改修する。Window・投影・縮小時の細い弾、HUDとの重なり、背景への埋没を重点確認する。</p>
<h2 id="15-標準外今回作らないもの">15. 標準外・今回作らないもの</h2>
<p>複数弾、bullet／enemy list、複数敵、boss、敵の攻撃／敵弾、cooldown、無敵時間、inventory、stage、weapon switching、複雑な敵AI、animation state管理、高度なphysics、学習用particle system、item、ハイスコア保存を入れない。単発・敵1体の不便さを追加システムで埋めず、既習設定と試遊で調整する。</p>
<p>初版の設計タスクではPython・Slide・assets・Worksheet・Reference・Guide UI・Student Home・配布ツールを実装しなかった。今回のMASTER実装でもLesson START／COMPLETE・Slide・本番素材・Worksheet・Reference・Guide UI・Student Home・配布ツールは作らない。Game2用Worksheetは自動的に各Lesson1枚とせず、10-1の観察／自己評価の再利用、10-3の画面変化↔コード、11-3の計画など、紙に残す価値を各回で再判断する。新しい必須記入課題は設けない。</p>
<p>Referenceは既存の操作・座標・キー・if／比較・random・Rect／接触・score・Game Over・DEBUGを再利用する。追加候補は「1発の有無とflag」「HP残量と0以下」だけ。現行Game1向けflag案内をGame2の完全な説明と誤認させず、必要性が確定した段階で最小追加し、既存URL／帰路は保つ。</p>
<h2 id="16-受入条件実装後に検査する項目">16. 受入条件（実装後に検査する項目）</h2>
<p>以下は正式な受入条件。MASTER実装での検査結果は18節。L01〜L05のLesson分解後の検査はまだ実施しない。制作者の自動試験と実機・児童の理解検証を区別する。</p>
<table>
<thead>
<tr>
<th>ID</th>
<th>操作・状況</th>
<th>観察できる合格条件</th>
</tr>
</thead>
<tbody>
<tr>
<td>G01</td>
<td>通常起動</td>
<td>800×600、Score 0、HP 3、player1・enemy1、bulletなし</td>
</tr>
<tr>
<td>G02</td>
<td>4方向と各画面端へ入力</td>
<td>対応方向へ動き、離すと止まり、全四辺から出ない</td>
</tr>
<tr>
<td>G03</td>
<td>敵の自然移動・下通過</td>
<td>下へ移動し、下外で上へ戻る。xは標準範囲、HP・score不変</td>
</tr>
<tr>
<td>G04</td>
<td>SPACEを新しく押す</td>
<td>その時のplayer中央上から1発出て上へ進む</td>
</tr>
<tr>
<td>G05</td>
<td>弾が飛行中に連打・長押し</td>
<td>同時1発のまま。消滅後も押し続けるだけでは次が出ない</td>
</tr>
<tr>
<td>G06</td>
<td>発射後にplayerを動かす</td>
<td>弾のxは発射時のままで追従しない</td>
</tr>
<tr>
<td>G07</td>
<td>弾が上外へ抜ける／新しいSPACE</td>
<td>False・非表示・判定なしになり、再度1発出せる</td>
</tr>
<tr>
<td>G08</td>
<td>非発射座標が敵と重なる／弾が外れる</td>
<td>加点・撃破再配置なし</td>
</tr>
<tr>
<td>G09</td>
<td>弾が敵と重なる</td>
<td>100点だけ加算、敵は上外へ、x再抽選、弾False</td>
</tr>
<tr>
<td>G10</td>
<td>続けて撃破</td>
<td>100→200→300。一つの弾・撃破で連続加点しない</td>
</tr>
<tr>
<td>G11</td>
<td>通常再出現・撃破・damageの再配置</td>
<td>xは0〜screen_width-enemy_size、yは-enemy_size。同じxも正常</td>
</tr>
<tr>
<td>G12</td>
<td>別々の敵接触を3回</td>
<td>HP3→2→1→0。各接触は一度だけ減り、敵が直ちに上へ戻る</td>
</tr>
<tr>
<td>G13</td>
<td>敵が下を通過するだけ</td>
<td>HPは減らず、Scoreも増えない</td>
</tr>
<tr>
<td>G14</td>
<td>同frameにplayer・弾が同じ敵と重なる</td>
<td>HP処理だけ。加点・二重再配置なし。非致死なら弾継続、致死なら停止</td>
</tr>
<tr>
<td>G15</td>
<td>HP0以下</td>
<td>Game Over・再開案内。全移動・発射・判定・score／HP更新が止まる</td>
</tr>
<tr>
<td>G16</td>
<td>Game OverでR</td>
<td>8節の全状態が戻る。再開frameは初期状態。画像・音の再読込なし</td>
</tr>
<tr>
<td>G17</td>
<td>RとSPACEの同時入力／Restartを複数回</td>
<td>古い要求で発射しない。HP・score・座標・一回化状態が壊れない</td>
</tr>
<tr>
<td>G18</td>
<td>通常プレイ中のR、ESC・閉じる</td>
<td>Rは無効、ESCと閉じるはいつでも正常終了</td>
</tr>
<tr>
<td>G19</td>
<td>画像全あり・一部なし・全なし・破損</td>
<td>対象ごとに画像または図形で継続。ルール・Rectは同じ</td>
</tr>
<tr>
<td>G20</td>
<td>音なし・破損・audio device不可</td>
<td>無音でプレイ可能。音がある場合も発射／撃破の成立時だけ1回</td>
</tr>
<tr>
<td>G21</td>
<td>配布フォルダを移動、別CWDから起動</td>
<td>同梱assetsで起動。別Lesson・Game1・リポジトリに依存しない</td>
</tr>
<tr>
<td>G22</td>
<td>通常・撃破・HP・Restartを継続</td>
<td>display更新・Clock各1回／frame、概ね60FPSを実測。読込・scaleのループ内反復なし</td>
</tr>
<tr>
<td>L01</td>
<td>全START／COMPLETEを単独起動</td>
<td>構文エラーなし。各回以前の標準機能と未完成範囲が11節に一致</td>
</tr>
<tr>
<td>L02</td>
<td>11節の各CHECK状態を構成</td>
<td>各段階で起動可能。未完成と誤実装を区別でき、表示が完成を偽らない</td>
</tr>
<tr>
<td>L03</td>
<td>STARTへ想定する学習行だけを記入</td>
<td>COMPLETEとAST・ゲーム挙動一致。SYSTEMの追加編集不要</td>
</tr>
<tr>
<td>L04</td>
<td>各Zoneと対応する教材を照合</td>
<td>固定ID一意、行順・indent・記入位置一致。学習ロジックがhelper内にない</td>
</tr>
<tr>
<td>L05</td>
<td>11-1 COMPLETE・11-2・MASTERを比較</td>
<td>標準のゲーム挙動一致。11-2に新しい必須機能・意図的バグなし</td>
</tr>
</tbody>
</table>
<p>G11のrandomは全試行でxが違うことを合格条件にしない。自動試験ではseed／差し替えた乱数戻り値と境界値で範囲・再抽選の呼び出しを確認する。接触・撃破・優先順位は座標を制御して再現し、授業では高得点や連続命中の技量を要求しない。SDL dummyによる試験だけで、音の聴感・Windows実機・描画安定性を合格にしない。</p>
<h2 id="17-決定事項未決定事項次工程">17. 決定事項・未決定事項・次工程</h2>
<p>ルールとLessonの境界は確定する。以下の「要確認」は制作上の推奨初期値の実機調整であり、実装者が勝手にルールを替える余地ではない。</p>
<table>
<thead>
<tr>
<th>論点</th>
<th>決定・推奨と理由</th>
<th>代替／残る確認</th>
</tr>
</thead>
<tbody>
<tr>
<td>enemy movement</td>
<td><strong>確定：落下・下通過で上へ</strong>。docs/24と既習転用を維持</td>
<td>静止・横移動は破棄。動き方ではなく速度だけPlaytestで検証</td>
</tr>
<tr>
<td>HP trigger</td>
<td><strong>確定：player接触</strong>。既習判定と残量を結ぶ</td>
<td>下通過damage・敵攻撃は破棄。基盤の一回化と優先順位を実装試験</td>
</tr>
<tr>
<td>visual theme</td>
<td><strong>推奨A：宇宙の迎撃、最終Visualは未決定</strong>。弾と能動的な操作を見せやすい</td>
<td>Bの明るい計測面、Cの大胆な二色。代表実画面で比較・確定する</td>
</tr>
<tr>
<td>bullet／sprite size</td>
<td><strong>実装初期値：8×16／各64、原素材8×16／各32</strong>。細い弾と既存size転用を両立</td>
<td>弾が見えにくければ例として12×20を検討。Rect・境界も同じ設定へ合わせ、個別実装しない</td>
</tr>
<tr>
<td>score amount</td>
<td><strong>確定：100</strong>。Game1の明示的加点を転用</td>
<td>標準の代替なし。変更を新しいMUSTへ追加しない</td>
</tr>
<tr>
<td>enemy reposition range</td>
<td><strong>確定：x＝0〜画面幅-size、y＝-size</strong>。自然再出現・撃破・damageで共通</td>
<td>範囲の限定は将来の既習改造。画面外や「必ず違うx」の独自ルールにしない</td>
</tr>
<tr>
<td>sound</td>
<td><strong>POLISHEDに自作shoot／hit／damageと32秒BGMを同梱</strong>。なくても全CHECKが成立</td>
<td>BASICは完全無音。Lesson配布時の素材選定はまだ行わない</td>
</tr>
</tbody>
</table>
<p>MASTERの制作者による検査結果は18節。学校PCでの描画／音・操作感、10-2の入力量、11-1の入れ子理解は未実測。MASTERの受入条件→段階START／COMPLETE→実Lessonのworkload／Visual確認の順に進める。新しいNEW・標準機能・正式区分の変更が必要になれば、先にdocs/24との意味差分を報告して判断を求める。</p>
<p>初版の設計では、docs/24の4方向・落下・接触HP・下通過無傷・同時接触優先、各Lessonの責務・NEW数・正式区分・80分枠に意味差分はなく、Game1・Python・Slide・assets・既存固定IDは変更しなかった。続くMASTER実装結果は18節。Lesson実装・児童／実授業による検証は未着手である。</p>
<h3 id="初版の設計時に実施した文書検証">初版の設計時に実施した文書検証</h3>
<ul>
<li>docs/24の最小仕様・Lesson責務・概念分類、Guideの10-1〜11-3の完了判定と照合。破棄した移動／damage案は採用仕様・未決定事項へ混在させていない。</li>
<li>相対参照9件に欠損なし。受入条件G01〜G22・L01〜L05の計27件に重複なし。</li>
<li>開始時点のdocs・Game1・Month8〜9のSlide・Worksheetの既存110ファイルについてSHA-256一致を確認。docs/24とGuideを含め、今回の変更は本書の追加だけ。</li>
<li>上記は文書整合・既存ファイル非変更の確認。STARTの起動、AST一致、ゲーム挙動、build、音・描画の合格を意味しない。</li>
</ul>
<h2 id="18-master初実装基盤検証2026-10-17分割前の履歴">18. MASTER初実装・基盤検証（2026-10-17、分割前の履歴）</h2>
<p>この節の<code>game.py</code>・342行・37テスト・素材未同梱等は初実装時の記録。現行の起動先・数値・検証は19節とする。旧画面・証跡は削除せず保持する。</p>
<h3 id="実装範囲起動再検証">実装範囲・起動・再検証</h3>
<ul>
<li><a title="開発リポジトリの参照（Web配布対象外）">MASTER</a>を初実装。開発用<code>game2/assets/images/</code>／<code>sounds/</code>は空の配置先だけ用意した。PNG・WAVの本素材は未制作・未同梱で、標準起動は図形・無音。</li>
<li>起動：リポジトリルートで<code>python3 game2/master/game.py</code>。Pygameを導入したPythonを使う。今回使用したのはVS Code設定と同じシステムPython 3.11.9、Pygame 2.6.1／SDL 2.28.4。既存<code>.venv</code>にはPygameがなく、環境やVS Code設定は変更していない。</li>
<li>Game2試験：<code>python3 -B -m unittest discover -s tests -p test_game2_master.py -v</code>。<a title="開発リポジトリの参照（Web配布対象外）">専用20テスト</a>と<a title="開発リポジトリの参照（Web配布対象外）">実loopハーネス</a>。ゲームsourceを書き換えず、イベント・キー・座標を注入する。</li>
<li>回帰試験：<code>python3 -B -m unittest discover -s tests -v</code>。既存Game1を含め<strong>37テストPASS</strong>。試験用画像・無音WAV・移動先は一時フォルダのみ。本番素材やStudent配布物を生成したものではない。</li>
<li>再描画・計測：<code>python3 -B tools/check_game2_master.py</code>。<a title="開発リポジトリの参照（Web配布対象外）">検証ツール</a>が<code>artifacts/game2-master-2026-10-17/</code>へPNGと<code>verification.json</code>を生成する。</li>
</ul>
<h3 id="基盤コード量の実測">基盤・コード量の実測</h3>
<p>画像は同階層assets優先、なければ<code>game2/assets/</code>。別CWD・日本語名の移動先・同梱assets・全欠損で動作を確認した。画像は透過・設定サイズへのscaleに対応し、個別の欠損／破損はその対象だけfallback。背景はDark Navy、playerは上向き機体、enemyはOrangeの落下物、bulletは明るい縦長で形も区別する。fallback Surfaceも起動時に一度だけ準備する。</p>
<p>音は任意のshoot／hitだけ。読込・device・再生失敗時は無音で継続。発射成立／撃破成立で各1回だけ再生し、Rで再開前の音も停止する。再生呼出の試験に使ったWAVは無音fixtureで、実際の音を聴いて評価したものではない。</p>
<table>
<thead>
<tr>
<th>計測対象</th>
<th style="text-align:right">Game2 MASTER</th>
<th>比較・判断</th>
</tr>
</thead>
<tbody>
<tr>
<td>ファイル物理行</td>
<td style="text-align:right">342</td>
<td>Game1 MASTER 364行。コメント・空行込み</td>
</tr>
<tr>
<td>main loop物理行</td>
<td style="text-align:right">194</td>
<td>Game1 MASTER 195行。処理を隠して削った値ではない</td>
</tr>
<tr>
<td>ファイル全体AST文／if</td>
<td style="text-align:right">206／39</td>
<td>準備・fallback・音声を含む</td>
</tr>
<tr>
<td>main loop AST文／if</td>
<td style="text-align:right">113／35</td>
<td>Game1 MASTER 111／30、9-2 COMPLETE 111／29。入力・一回化・停止・HUD等のSYSTEM分岐は増えている</td>
</tr>
<tr>
<td>学習対象予定Zone実行行／if</td>
<td style="text-align:right">28／12</td>
<td>移動16、発射1、弾更新3、HP4、撃破4。設計見積りと一致</td>
</tr>
<tr>
<td>発射位置READ</td>
<td style="text-align:right">2行</td>
<td>上の28行と合わせて設計時の30行モデルに一致</td>
</tr>
</tbody>
</table>
<p>画像読込・音読込／再生の短い3つのSYSTEM helperだけを使い、学習対象の移動・flag・衝突・score・HPはmain flowに残した。HPの4行、撃破の4行にはSYSTEMを挟まず、再配置・接触記録・弾消費はZone末尾へ分離。class・list管理・簡略代入・Lesson固定ID・穴・Hintは追加していない。</p>
<p>全体のif数が減ったとは評価しない。SYSTEMの入力ガードやGame Over描画を含むためGame1より5件多いが、生徒が後から書く予定のifは見積りどおり12件。次工程では10-2のflagと11-1の入れ子を段階提示し、全loopを同時に読ませない。小学5年生の理解・入力時間の実証は未実施。</p>
<p>通常<code>Clock.tick(60)</code>を単独比較したところ、この環境では平均約18.9ms／約53FPSだった。Game1と同じ<code>tick_busy_loop(60)</code>へ揃え、実Clock・180frame／先頭30frame除外で平均約16.0ms、約62.5FPS、p95約16.1msを確認した。display呼出180回／Clock180回、毎frameのasset読込・scaleなし。SDL dummyの<code>flip</code>を記録用に置換したCPU側の計測であり、実画面の提示間隔・VSync・ティアリングを測った値ではない。</p>
<p><code>pygame.SCALED, vsync=1</code>は利用可能時に要求し、失敗時は通常表示へfallbackする。busy loopのCPU負荷、VSyncの実効、WindowsのSDL／GPUでの安定性は実機確認待ち。FPSをdelta timeや別のゲーム速度へ読み替えず、今回標準速度・size・ルールを変更していない。</p>
<h3 id="g01g22の分類結果">G01〜G22の分類・結果</h3>
<p>AUTO＝実loopへの入力注入・AST・fixture等。VISUAL＝実SurfaceのPNGを制作者が確認。REAL MACHINE＝物理キー・画面提示・聴感・Windows等。AUTO PASSを実機の全面合格には読み替えない。</p>
<table>
<thead>
<tr>
<th>ID</th>
<th>分類</th>
<th>今回の結果・残る確認</th>
</tr>
</thead>
<tbody>
<tr>
<td>G01</td>
<td>AUTO／REAL MACHINE</td>
<td>初期値・800×600 PASS。教室PC起動は未確認</td>
</tr>
<tr>
<td>G02</td>
<td>AUTO／REAL MACHINE</td>
<td>4方向・四辺・離すと停止 PASS。物理キーは未確認</td>
</tr>
<tr>
<td>G03</td>
<td>AUTO</td>
<td>落下・下通過再配置、HP／score不変 PASS</td>
</tr>
<tr>
<td>G04</td>
<td>AUTO／VISUAL</td>
<td>移動後の中央上から1発、実描画 PASS</td>
</tr>
<tr>
<td>G05</td>
<td>AUTO／REAL MACHINE</td>
<td>追加押下・repeat・予約なし PASS。物理長押しは未確認</td>
</tr>
<tr>
<td>G06</td>
<td>AUTO</td>
<td>playerへ弾が追従しない PASS</td>
</tr>
<tr>
<td>G07</td>
<td>AUTO</td>
<td>弾全体の上外条件・False・再発射 PASS</td>
</tr>
<tr>
<td>G08</td>
<td>AUTO</td>
<td>非発射・外れ・辺だけの接触で撃破しない PASS</td>
</tr>
<tr>
<td>G09</td>
<td>AUTO</td>
<td>100点・敵再配置・弾消費 PASS</td>
</tr>
<tr>
<td>G10</td>
<td>AUTO</td>
<td>連続撃破100→200→300、二重加点なし PASS</td>
</tr>
<tr>
<td>G11</td>
<td>AUTO</td>
<td>乱数呼出・両端0／736・同じx再選択 PASS</td>
</tr>
<tr>
<td>G12</td>
<td>AUTO</td>
<td>別々の接触3→2→1→0、一回化 PASS</td>
</tr>
<tr>
<td>G13</td>
<td>AUTO</td>
<td>敵の下通過だけではdamageなし PASS</td>
</tr>
<tr>
<td>G14</td>
<td>AUTO</td>
<td>非致死・致死ともHP優先、加点・二重再配置なし PASS</td>
</tr>
<tr>
<td>G15</td>
<td>AUTO／VISUAL</td>
<td>全状態停止・Game Over・再開案内・最終HUD PASS</td>
</tr>
<tr>
<td>G16</td>
<td>AUTO／REAL MACHINE</td>
<td>Rで全復元、再開frame停止、再読込なし PASS。実キー未確認</td>
</tr>
<tr>
<td>G17</td>
<td>AUTO</td>
<td>R／SPACEの両イベント順・5回再開・音停止 PASS</td>
</tr>
<tr>
<td>G18</td>
<td>AUTO／REAL MACHINE</td>
<td>通常R無効、ESC／QUITは通常・終了画面ともPASS。OSの窓操作未確認</td>
</tr>
<tr>
<td>G19</td>
<td>AUTO／VISUAL</td>
<td>全画像fixture・一部欠損・全欠損・破損・透過・scale PASS。本素材は未制作</td>
</tr>
<tr>
<td>G20</td>
<td>AUTO／REAL MACHINE</td>
<td>任意音・device／読込／再生／停止失敗で継続 PASS。聴感未検証</td>
</tr>
<tr>
<td>G21</td>
<td>AUTO</td>
<td>共通／同梱assets、別CWD・移動先の実source起動 PASS。Student配布生成は未実施</td>
</tr>
<tr>
<td>G22</td>
<td>AUTO／REAL MACHINE</td>
<td>1更新／1Clock・読込初期のみ・約62.5FPS PASS。実画面のFPS／VSync／負荷は未検証</td>
</tr>
</tbody>
</table>
<p>L01〜L05はLesson未実装のため未実施。Game1の既存START／COMPLETEは回帰試験を行っただけで変更していない。</p>
<h3 id="代表実描画visual-review">代表実描画・Visual Review</h3>
<p>docs/27のA／B／Cの比較を維持し、指定どおり**A「宇宙の迎撃」**を暫定採用。Bは計測面として明瞭だがGame1との差が弱く、Cは大胆だが背景の面が弾と競合する。混ぜずに、AのDark Navy・Cyan機体・Orange落下物・明るい弾と、上隅の簡潔なSans HUDを実装した。装飾・動く背景・粒子は追加しない。</p>
<p>代表画面は800×600、player・enemy・bullet・HUDが同時にある通常プレイを先に確認。撮影は実main loopへ再現用の座標・Score／HP・SPACEを注入し、<code>display.flip</code>直前の実Surfaceを保存したもの。ゲーム画面を別の描画プログラムで再構成していない。</p>
<ul>
<li><a title="開発リポジトリの参照（Web配布対象外）">通常プレイ</a>：Score 200／HP 2、中央のenemy・bullet・playerを同時確認。</li>
<li><a title="開発リポジトリの参照（Web配布対象外）">Game Over</a>：Score 300／HP 0、停止した機体・弾、中央の終了／再開案内。</li>
<li><a title="開発リポジトリの参照（Web配布対象外）">fallback only</a>：外部素材がない単独パスでも同じ見た目・動作。通常版も本素材未同梱のため図形表示で、同じ再現状態なら画像が一致するのが正常。</li>
<li><a title="開発リポジトリの参照（Web配布対象外）">asset fixture</a>：全PNGのloader・scaleを通す矩形fixture。本素材や採用するArtではない。</li>
<li><a title="開発リポジトリの参照（Web配布対象外）">縮小比較</a>：各400×300の一覧。元の800×600でも確認した。</li>
</ul>
<p>初回のGame Overでは暗幕がHUDまで暗くしたためColor／Usabilityを3と判断し、HUDを暗幕の後に描画するよう修正した。<a title="開発リポジトリの参照（Web配布対象外）">修正前</a>と修正後を比較し、最終Score／HPを前景色のまま読めることを確認。HUDの不透明な文字pixelが暗くならない回帰試験も追加した。</p>
<table>
<thead>
<tr>
<th>8軸（5点満点）</th>
<th style="text-align:right">初回</th>
<th style="text-align:right">修正後</th>
<th>実描画の根拠・残る範囲</th>
</tr>
</thead>
<tbody>
<tr>
<td>Typography</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td>上隅の短いHUD、中央の大きいGAME OVER、下の再開案内の強弱。装飾文字を増やさない</td>
</tr>
<tr>
<td>Composition</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td>上隅の状態と中央の弾道を分離。空いた盤面は4方向の回避・照準領域</td>
</tr>
<tr>
<td>Color</td>
<td style="text-align:right">3</td>
<td style="text-align:right">4</td>
<td>暗幕のHUD減光を修正。Navy上の前景はHUD約16.4:1、弾約16.9:1</td>
</tr>
<tr>
<td>Visual Hierarchy</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td>通常はOrange敵→明るい弾→Cyan機体を縦に照合、終了はGAME OVER→R案内。HUDは隅に留める</td>
</tr>
<tr>
<td>Imagery</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td>上向き機体・不規則な落下物・細い縦弾。色なしでもsilhouetteが異なる実図形</td>
</tr>
<tr>
<td>Consistency</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td>通常／単独fallbackで同じSurface、表示・Rect・発射式は同じsize設定。教材のRole色と混同しない</td>
</tr>
<tr>
<td>Personality</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td>Cyan機体とOrange落下物の小さいpixel調の対比で、Game1の回収ゲームから迎撃へ区別。本素材の完成度は未評価</td>
</tr>
<tr>
<td>Usability</td>
<td style="text-align:right">3</td>
<td style="text-align:right">4</td>
<td>終了時の最終点・HPの減光を解消。800×600と400×300で弾を識別、再開キーを明示</td>
</tr>
</tbody>
</table>
<p>判定は<strong>PASS（暫定Theme A・制作者による実Surface描画確認）</strong>。Bulletは8×16を維持。800×600でNavyに埋没せず、縮小でも機体と敵の間の明るい縦弾を識別できたため、12×20への変更は行わない。自動contrastの数値だけで視認性を合格にしていない。</p>
<p>全画面4方向移動のため、playerがHUD座標へ進むと重なることはあり得る。HUDは小さな文字だけを最後に描き、大きい帯・枠や移動制限は足していない。教室の投影・実機操作・動く弾の見え方・本素材の背景を含む最終Visualは未検証で、素材差し替え後に再評価する。</p>
<h3 id="次工程非変更">次工程・非変更</h3>
<p>自動化可能なMASTER受入条件と暫定Visualは上記の範囲でPASS。次は別タスクでMonth10-1のSTART／COMPLETEから進める。今回Lesson分解・固定ID実装・Slide・Worksheet・Reference・Student配布・Guide詳細は未着手。docs/24との意味差分はなく、Game1・既存Lesson・assets・カリキュラムを変更しない。</p>
<p>Windows実機では、起動と物理キー（長押し・連打・RとSPACE）、VSync／画面提示・CPU負荷、数分の連続プレイ・Restart、本物のSEの聴感とdevice不在を追加確認する。本素材と教室投影・児童による理解／タイピングは別工程である。</p>
<h2 id="19-basicpolishedの分離完成体験2026-10-17">19. BASIC／POLISHEDの分離・完成体験（2026-10-17）</h2>
<h3 id="役割起動移行">役割・起動・移行</h3>
<table>
<thead>
<tr>
<th>ファイル</th>
<th>役割・起動</th>
</tr>
</thead>
<tbody>
<tr>
<td><a title="開発リポジトリの参照（Web配布対象外）">master-basic.py</a></td>
<td>ルール確認用。<code>python3 game2/master/master-basic.py</code>。単色Navy、Cyan三角、Orange四角、縦弾、Score／HPの数字のみ。画像・音・星・演出なし</td>
</tr>
<tr>
<td><a title="開発リポジトリの参照（Web配布対象外）">master-polished.py</a></td>
<td><strong>ゲーム体験としての標準MASTER</strong>。<code>python3 game2/master/master-polished.py</code>。同じルールに仮PNG・背景星・ハート・SE／BGM・Feedbackを加える</td>
</tr>
<tr>
<td><a title="開発リポジトリの参照（Web配布対象外）">polished_support.py</a></td>
<td>POLISHED専用SYSTEM。表示・演出・音だけ。ゲームの座標・score・hp・bullet_activeを変更しない</td>
</tr>
<tr>
<td><a title="開発リポジトリの参照（Web配布対象外）">game.py</a></td>
<td>旧起動パスを残す短いcompatibility wrapper。BASICを起動するだけで、ゲームロジックの第3の正本は持たない</td>
</tr>
</tbody>
</table>
<p>ルールは1〜9節とdocs/24のまま。敵1体・同時弾1発・新規SPACE・100点・HP3・接触damage・下通過無傷・接触優先・停止／Rを変更しない。演出のためのshared game engineや、学習対象を隠すhelperは作らず、両MASTERのmain flowへ同じ学習行を残す。POLISHEDを移動する場合は<code>polished_support.py</code>も同梱する。Student配布生成ではない。</p>
<h3 id="art-direction代表画面">Art Direction・代表画面</h3>
<p>小5の初心者が800×600の実ゲームと講師デモで、同じルールの「装飾前／後」を比較する用途。画像の本制作はユーザーが後で行い、今回はプログラムによるpixel placeholderを使う。背景は主役でなく、機体・弾・敵と短い結果の変化を先に拾えることを優先する。</p>
<table>
<thead>
<tr>
<th>案</th>
<th>Typography・Color・Composition</th>
<th>Imagery・装飾・識別点</th>
<th>比較・判断</th>
</tr>
</thead>
<tbody>
<tr>
<td>A：宇宙arcadeの発展</td>
<td>簡潔なSans、Score42／Meta23／Game Over74／案内30のPygame Fontサイズ。Navyを主に、Cyan／Orange／白を対象へ。上隅HUDと中央の弾道を分離</td>
<td>32pxの上向き機体・隕石、24個の小さな星、8本の火花。動く背景を低密度に保つ</td>
<td><strong>採用</strong>。実ゲームの対象を主役にでき、BASICとの違いと画像差し替えが明快。細い弾・火花の視認性に注意</td>
</tr>
<tr>
<td>B：コックピット風</td>
<td>計器風monoと固定HUD帯、暗いSteel／Cyan、周辺に残量・照準表示を集約</td>
<td>技術図・レーダー状の補助線、機体の計器盤的な枠</td>
<td>製品としては作れるが、表示の占有面積と未使用の計器が増え、1敵・1弾の教材には過剰</td>
</tr>
<tr>
<td>C：大胆な二色ポスター</td>
<td>大きな太字、NavyとPurple／Creamの大きな面、非対称な背景の切替で強い印象</td>
<td>大胆なsilhouetteと背景crop。大面積の色で空間を分ける</td>
<td>個性は強いが弾・敵とのcontrast調整や画像制作が増える。背景が主役になる危険があり不採用</td>
</tr>
</tbody>
</table>
<p>3案を混ぜない。代表試作は実main loopの通常画面と撃破時。実描画で初稿の火花が敵64pxに対して小さすぎたため、同じ8個・240msのまま小点から短い放射状の線へ修正し再描画した。画面揺れ・大きいglow・nebula・追加ゲーム機能は入れない。</p>
<h3 id="visualaudio-system">Visual／Audio SYSTEM</h3>
<ul>
<li>星は24個、サイズ1／2、速度0.45／0.85／1.35の3段階。上から下へ流れ、下外で上へ戻りxを再抽選。専用<code>random.Random</code>を使い、ゲーム側の乱数列を消費しない。Game Over中は停止、Rで初期化。</li>
<li>星・火花のlistはこの演出専用moduleだけ。画像索引の辞書もSurfaceの管理であってenemy／bulletの複数管理ではない。生徒にlist・particle・helperを新しく実装させない。</li>
<li>HPは3つのprogrammatic heart。満ちた／輪郭だけの形で残量を示し、OS依存の♥glyphや追加PNGは使わない。内部の<code>hp = hp - 1</code>はBASICと同じ。</li>
<li>Scoreは数字6桁を最小桁数にするだけで、内部得点・上限を変更しない。通常は左上Score／右上HP。対象がHUDへ来た場合だけ、同じ左右側の定義済みanchorへ表示を退避する。ゲームの座標・Rect・移動範囲を変えたり、対象をHUDの下へ隠したりしない。通常位置・両上端を占有した状態を実描画と自動試験で確認。</li>
<li>hitは旧enemy_rectの中心から8本、240ms、Orange／Yellow／Whiteの短いspark。最新の1burstだけを保持し、終了後にclear。描画エラー時はその演出を無効化して通常描画・ゲームルールを継続する。</li>
<li>damageはplayerの160msの赤系flashと細い画面縁。<strong>無敵時間ではなく、当たり判定は一切変えない。</strong> HPとheartも同時に更新する。screen shakeなし。</li>
<li>Game Overは停止したゲームへ暗いoverlay、GAME OVER／Final Score／Press R to Restart。HUDは減光させず前面に残す。Rでburst・damage時刻・背景・音声状態を戻す。画像・音源を読み直さない。</li>
<li>SEはshoot約110ms／hit180ms／damage240ms。発射・撃破・接触の成立時に各1回。同種SEを止めてから再生し、多重に重ね続けない。BGMは自作32秒・120BPM・16小節のloop。pulse相当の短い倍音、bass、arpeggio、弱いnoiseで構成し、既存楽曲・外部音源は使用しない。</li>
<li>BGM音量0.18、shoot0.55／hit0.65／damage0.55。Game OverでBGMを一度だけpause、Rで頭から再開。欠損・decode・device・再生失敗時は無音で続行。BASICはmixerを初期化せず音源も読まない。</li>
</ul>
<h3 id="仮素材ユーザー差し替え">仮素材・ユーザー差し替え</h3>
<p><a title="開発リポジトリの参照（Web配布対象外）">生成スクリプト</a>で自作PNG3枚とPCM16bit mono／22050HzのWAV4本を生成した。外部AI画像生成は使用していない。<code>python3 -B tools/generate_game2_placeholders.py</code>は既存素材があると停止し、<code>--force</code>は明示的な上書き用。ユーザー素材へ差し替えた後は上書き再生成しない。</p>
<table>
<thead>
<tr>
<th>同名で置き換える画像</th>
<th>原素材</th>
<th>表示・向き・安全な描画範囲</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>game2/assets/images/player.png</code></td>
<td><strong>32×32透過PNG</strong></td>
<td>64×64。上向き宇宙機。輪郭は概ねx/y＝1〜30に収め、1〜2px程度の余白まで</td>
</tr>
<tr>
<td><code>game2/assets/images/enemy.png</code></td>
<td><strong>32×32透過PNG</strong></td>
<td>64×64。中央配置の落下物。大きな透明余白の中へ小さく描かない</td>
</tr>
<tr>
<td><code>game2/assets/images/bullet.png</code></td>
<td><strong>8×16透過PNGを推奨</strong></td>
<td>8×16。中央の明るい縦弾・上向き。32×32を細くscaleする方式より歪みが少ない</td>
</tr>
</tbody>
</table>
<p>いずれも小文字の同名PNGへ保存し、ESC→再実行で反映する。Rでは再読込しない。透明部分を含む画像全体がRectなので、見た目の輪郭と完全一致するmask判定にはしない。画像の配置先と仮素材の出典・再生成注意は<a title="開発リポジトリの参照（Web配布対象外）">assets README</a>。本画像の制作・差し替えは未実施。</p>
<h3 id="速度比較game-feel-review">速度比較・Game Feel Review</h3>
<table>
<thead>
<tr>
<th>設定</th>
<th>Before → After</th>
<th>判断</th>
</tr>
</thead>
<tbody>
<tr>
<td>player_speed</td>
<td><strong>5 → 5</strong></td>
<td>5／6／7／8を実loopで比較。20更新の移動量は100／120／140／160px、64px幅を横切る更新数は13／11／10／8。今回は小刻みな位置合わせと前後比較の同条件を優先し、5を維持</td>
</tr>
<tr>
<td>enemy_speed</td>
<td><strong>4 → 4</strong></td>
<td>既存の落下・回避・照準関係を維持。敵を増やす・下通過damageで調整しない</td>
</tr>
<tr>
<td>bullet_speed</td>
<td><strong>10 → 10</strong></td>
<td>実描画で上向きの弾を追え、命中の位置を8本のsparkで示せる。連射化・複数弾化なし</td>
</tr>
</tbody>
</table>
<p>操作しやすさを児童の実績として断定していない。上の距離比較は入力注入による計測。制作者は発射の即時表示、命中位置の拡大したspark、HP減少とflash、終了・再開の見え方を実描画で点検した。SEは数値上BGMより約16.7〜18.8dB大きい実効RMSで、波形peakは全ファイル0.63未満、先頭／末尾は0。音量設計とloop端は検査済みだが、<strong>実スピーカー／ヘッドホンの聴感、児童の狙いやすさは未検証</strong>。</p>
<h3 id="自動試験parity性能">自動試験・parity・性能</h3>
<ul>
<li><code>python3 -B -m unittest discover -s tests -p 'test_game2*.py' -v</code>：各MASTERへ共通の20試験を適用し、parity／演出等の8試験を追加した<strong>48テスト</strong>。BASICのasset／audio項目は「読まない」を検査し、POLISHEDでは透過・破損・全欠損・音声device／decode／再生／停止失敗を検査する。</li>
<li><a title="開発リポジトリの参照（Web配布対象外）">parity試験</a>：初期状態、1200frameの同一入力・座標条件、乱数再配置、撃破・damage・Game Over・Rについて全ゲーム状態が一致。演出の乱数がゲームへ影響しない。main flowの更新ブロックはASTも一致。</li>
<li>発射／命中／damageのSE呼出、BGM初回load・pause・R再開、星の停止／再開、8spark・240ms終了・R初期化、描画失敗後のゲーム状態維持、旧game.pyの互換起動も検査した。</li>
<li>既存Game1を含む全体回帰は<code>python3 -B -m unittest discover -s tests -v</code>。Game2の48＋既存17＝<strong>65テスト</strong>。正しい効果音が聴こえた、Windowsで表示が滑らかだったという試験ではない。</li>
<li><code>python3 -B tools/check_game2_master.py</code>で同じ入力の画像、速度比較、音量情報、180frame／先頭30除外の実Clock計測を再現できる。SDL dummyでdisplayの呼出を記録用に置換しており、実画面の提示間隔・VSync・実機CPU負荷は測っていない。</li>
</ul>
<table>
<thead>
<tr>
<th>計測</th>
<th style="text-align:right">BASIC</th>
<th style="text-align:right">POLISHED</th>
</tr>
</thead>
<tbody>
<tr>
<td>ファイル物理行</td>
<td style="text-align:right">248</td>
<td style="text-align:right">240（別SYSTEM moduleは237行）</td>
</tr>
<tr>
<td>main loop物理行</td>
<td style="text-align:right">160</td>
<td style="text-align:right">157</td>
</tr>
<tr>
<td>全体AST文／if</td>
<td style="text-align:right">151／29</td>
<td style="text-align:right">139／27（mainファイルのみ）</td>
</tr>
<tr>
<td>main loop AST文／if</td>
<td style="text-align:right">96／28</td>
<td style="text-align:right">89／26</td>
</tr>
<tr>
<td>学習対象予定Zone</td>
<td style="text-align:right">28行・if12</td>
<td style="text-align:right">28行・if12。発射位置READ2行も共通</td>
</tr>
<tr>
<td>平均frame／FPS</td>
<td style="text-align:right">約16.0ms／62.5FPS</td>
<td style="text-align:right">約16.0ms／62.5FPS</td>
</tr>
<tr>
<td>p95 frame間隔</td>
<td style="text-align:right">約16.1ms</td>
<td style="text-align:right">約16.1ms</td>
</tr>
<tr>
<td>更新・描画CPU側work p95</td>
<td style="text-align:right">約0.12ms</td>
<td style="text-align:right">約0.14ms</td>
</tr>
<tr>
<td>display／Clock呼出</td>
<td style="text-align:right">各180回</td>
<td style="text-align:right">各180回</td>
</tr>
<tr>
<td>loop内asset読込／scale</td>
<td style="text-align:right">0</td>
<td style="text-align:right">0</td>
</tr>
</tbody>
</table>
<p>POLISHEDのmainが短いのは表示専用SYSTEMを分離したためで、総コード量が少ないとは主張しない。学習対象をhelperへ隠しておらず、BASIC／POLISHEDの28行は同一。数ms以下のwork差は短いheadless計測の参考値で、性能向上の実証ではない。</p>
<h3 id="実描画8軸評価">実描画・8軸評価</h3>
<p>800×600の実Surfaceで通常・Game Over・hit・damage・fallback・HUD退避を確認し、横並び比較でも対象・動き・状態が一致することを照合した。スクリーンショットは実main loopへ再現用の状態を注入したもので、別の描画プログラムでゲームを作り直していない。</p>
<ul>
<li><a title="開発リポジトリの参照（Web配布対象外）">basic-normal</a>／<a title="開発リポジトリの参照（Web配布対象外）">polished-normal</a></li>
<li><a title="開発リポジトリの参照（Web配布対象外）">basic-game-over</a>／<a title="開発リポジトリの参照（Web配布対象外）">polished-game-over</a></li>
<li><a title="開発リポジトリの参照（Web配布対象外）">hit</a>／<a title="開発リポジトリの参照（Web配布対象外）">damage</a>／<a title="開発リポジトリの参照（Web配布対象外）">fallback</a>／<a title="開発リポジトリの参照（Web配布対象外）">HUD退避</a></li>
<li><a title="開発リポジトリの参照（Web配布対象外）">通常比較</a>／<a title="開発リポジトリの参照（Web配布対象外）">終了比較</a>／<a title="開発リポジトリの参照（Web配布対象外）">計測JSON</a></li>
</ul>
<p>初回<a title="開発リポジトリの参照（Web配布対象外）">hit試作</a>は約20pxの小さな点の輪で、64pxの敵が消えた結果として弱かった。8本の短線・明るい先端へ変更し、96ms時点で約40pxに広がる実描画へ再確認した。背景星より明るく、機体や新しい敵とは混同せず、長く残るparticleにはしない。</p>
<table>
<thead>
<tr>
<th>8軸（5点）</th>
<th>初稿 → 最終</th>
<th>根拠・確認した修正</th>
</tr>
</thead>
<tbody>
<tr>
<td>Typography</td>
<td>4 → 4</td>
<td>上隅の小さい分類と大きい得点、Game Over・最終得点・Rの明確な強弱。HP名を共通化</td>
</tr>
<tr>
<td>Composition</td>
<td>4 → 4</td>
<td>背景星は小さく低密度、中央の3対象が主役。HUDは対象と重なる時だけ退避</td>
</tr>
<tr>
<td>Color</td>
<td>4 → 4</td>
<td>Dark NavyとCyan機体／Orange隕石／明るい縦弾。heartは満ちた形と輪郭でも識別</td>
</tr>
<tr>
<td>Visual Hierarchy</td>
<td>3 → 4</td>
<td>小さいhitの点輪を拡大した短線へ。条件の結果が星より先に見える</td>
</tr>
<tr>
<td>Imagery</td>
<td>3 → 4</td>
<td>pixel機体・隕石・beamと、命中位置を中心に広がる8spark。最終画像の品質評価ではない</td>
</tr>
<tr>
<td>Consistency</td>
<td>4 → 4</td>
<td>BASIC／POLISHEDの同じ位置・数・得点・HP、表示とRectのsizeを共用</td>
</tr>
<tr>
<td>Personality</td>
<td>4 → 4</td>
<td>少量の星・機体・meteor・heartで宇宙arcadeを識別。計器・装飾Card・大glowなし</td>
</tr>
<tr>
<td>Usability</td>
<td>3 → 4</td>
<td>命中Feedbackを強化し、画面上端の対象とHUDを分離。無敵時間と誤認させる点滅は足さない</td>
</tr>
</tbody>
</table>
<p><strong>PASS（制作者による実描画確認）</strong>。縮小比較でも機体／隕石／弾と数値／heartの違いを確認した。実投影・実機の動く弾・長時間プレイ・音声の聴感・児童の操作感は未確認で、これらをheadless PASSに含めない。</p>
<h3 id="比較利用次工程">比較利用・次工程</h3>
<p>BASIC→POLISHEDを見せ、「同じルールなのに、何が変わった？」を考えるGame Design／Feedbackの比較に使える。これは将来の教材利用メモであり、新しいLesson・MUST・NEWを追加したものではない。</p>
<p>docs/24との意味差分はない。正式Lesson責務・NEW／TRANSFER・score量・HP条件・同時接触の優先順位は維持。Game1・既存Lesson・Slide・Worksheet・Reference・Guide・Student Home・distは変更しない。Month10-1〜11-2のSTART／COMPLETEとSlideは引き続き未着手。</p>
`},INSTRUCTOR_GUIDE:{html:`<h1 id="講師ガイド">講師ガイド</h1>
<p class="reading-document-lead">今日のスライドと並べて、授業の進め方と支援を確認するためのガイドです。</p><section class="reading-common guide-common" data-guide-section="この5か月で目指すこと"><h2 id="この5か月で目指すこと">この5か月で目指すこと</h2>
<div class="guide-common-content"><p>これまで学んだPythonをゲーム制作で使い直し、INNOVATOR NEXTへつなげます。</p>
<ul>
<li>コードを読む</li>
<li>必要な場所を探す</li>
<li>書き換えて試す</li>
<li>結果を比べる</li>
<li>自分の目的で改造する</li>
</ul>
<section class="guide-common-group"><h3 id="game1--game2--final">Game1 → Game2 → Final</h3><ol class="guide-bridge"><li><span class="guide-bridge-number">01</span><h4>Game1｜Month8〜9</h4><p>基本をゲームへ結び付ける</p></li><li><span class="guide-bridge-number">02</span><h4>Game2｜Month10〜11</h4><p>既習内容を別ゲームへ使い直す</p></li><li><span class="guide-bridge-number">03</span><h4>Final｜Month12</h4><p>自分の目的で改造・説明</p></li></ol>
</section></div></section><section class="reading-common guide-common guide-preflight print-friendly" data-guide-section="授業前チェック"><h2 id="授業前チェック">授業前チェック</h2>
<div class="guide-common-content"><p>今日使う教材を、生徒専用Driveへ事前に準備します。</p>
<p>教材の入口はGitHub Pages、作業データ・作品はDrive、進度は講師用スプレッドシートで管理します。</p>
<section class="guide-common-group"><h3 id="配布">配布</h3><ul>
<li class="guide-check-item"><label><input type="checkbox"><span>各生徒の専用Driveフォルダを確認</span></label></li>
<li class="guide-check-item"><label><input type="checkbox"><span>生徒が今日の教材を開ける</span></label></li>
<li class="guide-check-item"><label><input type="checkbox"><span>前回の作品を上書きしない</span></label></li>
</ul>
</section><section class="guide-common-group"><h3 id="pc">PC</h3><ul>
<li class="guide-check-item"><label><input type="checkbox"><span>VS Code / Python環境を確認</span></label></li>
<li class="guide-check-item"><label><input type="checkbox"><span>生徒のPCで今日のファイルを実行・停止できる</span></label></li>
</ul>
</section><section class="guide-common-group"><h3 id="教材">教材</h3><ul>
<li class="guide-check-item"><label><input type="checkbox"><span>今日のLesson Slideを開く</span></label></li>
<li class="guide-check-item"><label><input type="checkbox"><span>Guide / Referenceを開ける</span></label></li>
<li class="guide-check-item"><label><input type="checkbox"><span>Worksheetがある回は人数分印刷</span></label></li>
</ul>
</section><section class="guide-common-group"><h3 id="記録">記録</h3><ul>
<li class="guide-check-item"><label><input type="checkbox"><span>前回の進度を確認</span></label></li>
<li class="guide-check-item"><label><input type="checkbox"><span>今日の保存先を確認</span></label></li>
</ul>
</section><section class="guide-common-group"><h3 id="必要な場合">必要な場合</h3><ul>
<li class="guide-check-item"><label><input type="checkbox"><span>AI利用可否を確認</span></label></li>
<li class="guide-check-item"><label><input type="checkbox"><span>Pixnote / 画像保存先を確認</span></label></li>
</ul>
</section></div></section><section class="reading-common guide-common guide-decisions" data-guide-section="共通ルール"><h2 id="共通ルール">共通ルール</h2>
<div class="guide-common-content"><div class="guide-priorities"><section class="guide-common-group guide-role-must"><h3 id="must"><span class="guide-badge guide-badge-must">MUST</span></h3><p><span class="guide-phrase">そのLessonで</span><span class="guide-phrase">必ず取り組む範囲。</span></p>
</section><section class="guide-common-group guide-role-should"><h3 id="should"><span class="guide-badge guide-badge-should">SHOULD</span></h3><p>時間・理解度に応じて取り組む範囲。</p>
</section><section class="guide-common-group guide-role-optional"><h3 id="challenge"><span class="guide-badge guide-badge-challenge">CHALLENGE</span></h3><p>発展。</p>
</section></div><div class="guide-concept-roles"><section class="guide-common-group guide-role-new"><h3 id="new新しく扱う"><span class="guide-badge guide-badge-new">NEW</span><small>新しく扱う</small></h3><p>その回で初めて扱う内容。</p>
</section><section class="guide-common-group guide-role-transfer"><h3 id="transfer使い直す"><span class="guide-badge guide-badge-transfer">TRANSFER</span><small>使い直す</small></h3><p>既に学んだ内容を、別の対象や場面へ使うこと。</p>
</section><section class="guide-common-group guide-role-meta"><h3 id="read-only読む"><span class="guide-badge guide-badge-read-only">READ ONLY</span><small>読む</small></h3><p>意味を確かめるコード。生徒は入力しません。</p>
</section><section class="guide-common-group guide-role-meta"><h3 id="system触らない"><span class="guide-badge guide-badge-system">SYSTEM</span><small>触らない</small></h3><p>準備済みの処理。生徒には変更させません。</p></section></div><div class="guide-rule-note">
<p>まずMUSTと保存を確認します。参考例やHintを使ったか、自力で書いたかは分けて記録します。</p>
</div></div></section><section class="reading-common guide-common" data-guide-section="page-typeと講師の役割"><h2 id="page-typeと講師の役割">Page Typeと講師の役割</h2>
<div class="guide-common-content"><p>分類行＝何をするページか。HeaderのLesson名と活動名の間＝取り組む優先度。</p>
<p>時間は分類行の右端に表示します。</p>
<figure class="guide-tag-axes"><a href="/robot-python-game/instructor/month8-1-player-speed" target="_blank" rel="noopener noreferrer"><img src="/robot-python-game/instructor/doc-assets/guide-page-types/two-axes.png" alt="実際のWORK：従来の分類行とHeader内Priorityを示した注釈付き表示例"></a></figure>
<p>画像をクリックすると、実際のスライドを開けます。</p>
<div class="guide-page-types"><section class="guide-page-type guide-page-type--preview" data-page-kind="overview"><div><h3><span class="guide-badge guide-badge-overview">OVERVIEW</span></h3><dl><div><dt>役割</dt><dd>今日の目的と到達点を見る</dd></div><div><dt>生徒</dt><dd>何を作り、何を目指すか確認する</dd></div><div><dt>講師</dt><dd>今日の到達点を短く案内する</dd></div></dl></div><figure class="guide-type-preview"><a href="/robot-python-game/instructor/month8-1" target="_blank" rel="noopener noreferrer"><img src="/robot-python-game/instructor/doc-assets/guide-page-types/overview.png" alt="Month8-1 P1 OVERVIEW"><figcaption>表示例｜Month8-1 P1 ↗</figcaption></a></figure></section><section class="guide-page-type guide-page-type--preview" data-page-kind="index"><div><h3><span class="guide-badge guide-badge-index">INDEX</span></h3><dl><div><dt>役割</dt><dd>ページの順と行き先を探す</dd></div><div><dt>生徒</dt><dd>今いる場所と次のページを確認する</dd></div><div><dt>講師</dt><dd>本編と発展の進み方を案内する</dd></div></dl></div><figure class="guide-type-preview"><a href="/robot-python-game/instructor/month8-1-flow" target="_blank" rel="noopener noreferrer"><img src="/robot-python-game/instructor/doc-assets/guide-page-types/index.png" alt="Month8-1 P2 INDEX"><figcaption>表示例｜Month8-1 P2 ↗</figcaption></a></figure></section><section class="guide-page-type guide-page-type--preview" data-page-kind="setup"><div><h3><span class="guide-badge guide-badge-setup">SETUP</span></h3><dl><div><dt>役割</dt><dd>ファイルを開き実行の準備をする</dd></div><div><dt>生徒</dt><dd>開く・保存・実行・停止を確かめる</dd></div><div><dt>講師</dt><dd>環境やファイルの取り違えを支援する</dd></div></dl></div><figure class="guide-type-preview"><a href="/robot-python-game/instructor/month8-1-setup" target="_blank" rel="noopener noreferrer"><img src="/robot-python-game/instructor/doc-assets/guide-page-types/setup.png" alt="Month8-1 P4 SETUP"><figcaption>表示例｜Month8-1 P4 ↗</figcaption></a></figure></section><section class="guide-page-type guide-page-type--preview" data-page-kind="concept"><div><h3><span class="guide-badge guide-badge-concept">CONCEPT</span></h3><dl><div><dt>役割</dt><dd>考え方やコードの意味を見る</dd></div><div><dt>生徒</dt><dd>読む・予想する・比べる</dd></div><div><dt>講師</dt><dd>要点だけ説明してWORKへつなぐ</dd></div></dl></div><figure class="guide-type-preview"><a href="/robot-python-game/instructor/month8-1-variables" target="_blank" rel="noopener noreferrer"><img src="/robot-python-game/instructor/doc-assets/guide-page-types/concept.png" alt="Month8-1 P7 CONCEPT"><figcaption>表示例｜Month8-1 P7 ↗</figcaption></a></figure></section><section class="guide-page-type guide-page-type--preview" data-page-kind="work"><div><h3><span class="guide-badge guide-badge-work">WORK</span></h3><dl><div><dt>役割</dt><dd>コードを書く・変更する</dd></div><div><dt>生徒</dt><dd>自分で試して実行する</dd></div><div><dt>講師</dt><dd>考える時間を取り、必要ならHintで支援する</dd></div></dl></div><figure class="guide-type-preview"><a href="/robot-python-game/instructor/month8-1-player-speed" target="_blank" rel="noopener noreferrer"><img src="/robot-python-game/instructor/doc-assets/guide-page-types/work.png" alt="Month8-1 P9 WORK"><figcaption>表示例｜Month8-1 P9 ↗</figcaption></a></figure></section><section class="guide-page-type guide-page-type--preview" data-page-kind="play"><div><h3><span class="guide-badge guide-badge-play">PLAY</span></h3><dl><div><dt>役割</dt><dd>ゲームを遊んで観察する</dd></div><div><dt>生徒</dt><dd>動き・結果・違いを見る</dd></div><div><dt>講師</dt><dd>観察を次の学習へつなぐ。プレイ技量は評価しない</dd></div></dl></div><figure class="guide-type-preview"><a href="/robot-python-game/instructor/month8-1-play" target="_blank" rel="noopener noreferrer"><img src="/robot-python-game/instructor/doc-assets/guide-page-types/play.png" alt="Month8-1 P5 PLAY"><figcaption>表示例｜Month8-1 P5 ↗</figcaption></a></figure></section><section class="guide-page-type guide-page-type--preview" data-page-kind="tune"><div><h3><span class="guide-badge guide-badge-tune">TUNE</span></h3><dl><div><dt>役割</dt><dd>設定を調整して結果を比べる</dd></div><div><dt>生徒</dt><dd>予想して1か所変え、前後を比べる</dd></div><div><dt>講師</dt><dd>正式な区分に従って調整を支援する</dd></div></dl></div><figure class="guide-type-preview"><a href="/robot-python-game/instructor/month8-1-tune" target="_blank" rel="noopener noreferrer"><img src="/robot-python-game/instructor/doc-assets/guide-page-types/tune.png" alt="Month8-1 P12 TUNE"><figcaption>表示例｜Month8-1 P12 ↗</figcaption></a></figure></section><section class="guide-page-type guide-page-type--preview" data-page-kind="review"><div><h3><span class="guide-badge guide-badge-review">REVIEW</span></h3><dl><div><dt>役割</dt><dd>既習の対応や一覧を確認する</dd></div><div><dt>生徒</dt><dd>コードと動きを結び付ける</dd></div><div><dt>講師</dt><dd>説明を聞き、理解を確認する</dd></div></dl></div><figure class="guide-type-preview"><a href="/robot-python-game/instructor/month8-1-review" target="_blank" rel="noopener noreferrer"><img src="/robot-python-game/instructor/doc-assets/guide-page-types/review.png" alt="Month8-1 P13 REVIEW"><figcaption>表示例｜Month8-1 P13 ↗</figcaption></a></figure></section><section class="guide-page-type guide-page-type--preview" data-page-kind="reflect"><div><h3><span class="guide-badge guide-badge-reflect">REFLECT</span></h3><dl><div><dt>役割</dt><dd>学んだことを振り返り保存する</dd></div><div><dt>生徒</dt><dd>変更と結果を説明し、作品を残す</dd></div><div><dt>講師</dt><dd>保存とLesson完了を確認する</dd></div></dl></div><figure class="guide-type-preview"><a href="/robot-python-game/instructor/month8-1-reflect" target="_blank" rel="noopener noreferrer"><img src="/robot-python-game/instructor/doc-assets/guide-page-types/reflect.png" alt="Month8-1 P14 REFLECT"><figcaption>表示例｜Month8-1 P14 ↗</figcaption></a></figure></section><section class="guide-page-type guide-page-type--preview" data-page-kind="challenge"><div><h3><span class="guide-badge guide-badge-challenge">CHALLENGE</span></h3><dl><div><dt>役割</dt><dd>コードを読み、発展を考える</dd></div><div><dt>生徒</dt><dd>余裕があれば読解に取り組む</dd></div><div><dt>講師</dt><dd>解けなくても未達にしない</dd></div></dl></div><figure class="guide-type-preview"><a href="/robot-python-game/instructor/month8-1-challenge" target="_blank" rel="noopener noreferrer"><img src="/robot-python-game/instructor/doc-assets/guide-page-types/challenge.png" alt="Month8-1 O1 CHALLENGE"><figcaption>表示例｜Month8-1 O1 ↗</figcaption></a></figure></section><section class="guide-page-type guide-page-type--preview" data-page-kind="quiz"><div><h3><span class="guide-badge guide-badge-quiz">QUIZ</span></h3><dl><div><dt>役割</dt><dd>選択して理由を確かめる</dd></div><div><dt>生徒</dt><dd>答えを選び、説明を読み直す</dd></div><div><dt>講師</dt><dd>全問必須にせず、理解の確認に使う</dd></div></dl></div><figure class="guide-type-preview"><a href="/robot-python-game/instructor/month8-1-quiz" target="_blank" rel="noopener noreferrer"><img src="/robot-python-game/instructor/doc-assets/guide-page-types/quiz.png" alt="Month8-1 O2 QUIZ"><figcaption>表示例｜Month8-1 O2 ↗</figcaption></a></figure></section></div>
</div></section><section class="reading-common guide-common" data-guide-section="困った時の支援"><h2 id="困った時の支援">困った時の支援</h2>
<div class="guide-common-content"><div class="guide-support-zones"><section class="guide-common-group guide-role-support guide-support-zone"><h3 id="hint">Hint</h3><p>WORKで困った時に使う、段階的なヒント。</p>
<ol>
<li>まず自分で考える</li>
<li>難しければHintを1つ見る</li>
<li>必要なら次のHintを見る</li>
</ol>
<p>難しい場合に、Hintを1つずつ案内します。</p>
</section><section class="guide-common-group guide-role-reference guide-support-zone"><h3 id="reference">Reference</h3><p>以前に学んだ内容や操作を確認する場所。</p>
<ul>
<li>書き方を忘れた</li>
<li>操作を確認したい</li>
<li>エラーを調べたい</li>
</ul>
</section><section class="guide-common-group guide-role-new guide-support-zone"><h3 id="ai">AI</h3><p>主に自由改造・計画・不具合の調査で、次に試すことを相談する相手。</p>
<ul>
<li>生徒の予想を聞き、目的・試したこと・今の状態・質問をAIへ伝えさせます。</li>
<li>AIの回答は生徒自身に読ませ、実行して確かめさせます。</li>
<li>必要なら、結果を添えてもう一度相談させます。</li>
</ul>
<p>利用できない場合は、Hint・Reference・講師で対応します。利用の有無は評価しません。</p>
<p><small class="guide-meta">教室で利用できるAIだけを使い、生徒に個人情報を入力させません。</small></p>
</section></div><section class="guide-common-group guide-intervention"><h3 id="生徒が止まったら">生徒が止まったら</h3><ol>
<li>どこで止まったか確認する</li>
<li>短く質問する</li>
<li>Hint・Referenceへ案内する</li>
<li>必要なら一緒に確認する</li>
</ol>
<p>完成コードをすぐに教えず、まず生徒自身に考えさせます。</p>
</section></div></section><section class="reading-common guide-common guide-extra-time" data-guide-section="時間が余ったら"><h2 id="時間が余ったら">時間が余ったら</h2>
<div class="guide-common-content"><p>まずは授業内の活動を進めます。MUST → SHOULD → CHALLENGEの順を基本とします。</p>
<p>終わった生徒には、Student Homeの「補助教材」からタイピングまたはPython・SPIKEワークを案内します。</p>
<p><a href="/robot-python-game/student/#auxiliary-resources">補助教材を開く ↗</a></p>
</div></section><section class="guide-lessons"><h2 id="lesson別">Lesson別</h2>
<p>時間は目安です。生徒の進度に合わせて調整してください。</p>
<p>Month10〜12は予定内容です。教材完成後に更新します。</p>
<section class="reading-month"><h3 id="month8">Month8</h3><section class="reading-lesson guide-refined guide-reading-v2" aria-labelledby="month8-1-title"><details id="month8-1" class="reading-details reading-lesson-toggle"><summary><span class="reading-summary-copy"><span class="reading-summary-heading"><span id="month8-1-title" class="reading-summary-id">Month8-1</span><strong>ゲームを調べる</strong></span><span class="reading-summary-fact reading-summary-goal"><b>目的</b><span>遊ぶ前の予想と遊んだ後の気づきを比べ、設定を1つ変えて結果を確かめる。</span></span><span class="reading-summary-fact reading-summary-must"><b>MUST</b><span>開く・保存・実行・停止 / 複数ルールを発見 / 1設定を変更して結果確認</span></span><span class="reading-summary-fact reading-summary-meta"><b>時間</b><span>目安80分（予備10分を含む）／授業80分</span></span></span><span class="reading-disclosure" aria-hidden="true">＋</span></summary><div class="reading-detail-body"><a id="month8-1講師brief目安時間optional運用"></a><section class="reading-subsection reading-goal"><h4>今日の目的</h4><p>遊ぶ前の予想と遊んだ後の気づきを比べ、設定を1つ変えて結果を確かめる。既習の変数をゲームの動きと結び付ける。</p></section><section class="reading-subsection reading-worksheet print-friendly"><h4>Worksheet</h4><a href="/robot-python-game/worksheets/month8-1-game-dev-log.pdf" target="_blank" rel="noopener noreferrer">GAME DEV LOG 01｜PDFを開く<span class="guide-link-arrow" aria-hidden="true"> ↗</span></a><p>遊ぶ前01 → 遊んだ後02 → コードと画面03 → 変更・比較04 → 自己評価05。</p></section><section class="guide-timeline print-friendly reading-subsection"><h4>今日の流れ・時間 <small>80分・目安</small></h4><ol style="--phase-count:6"><li class="guide-phase-explain"><span class="guide-phase-number">01</span><h5><a href="#month8-1-step-month8-1">導入</a></h5><p class="guide-phase-time">15<small>分</small></p><p class="guide-phase-action">目的を確認し、操作前に予想する</p></li><li class="guide-phase-play"><span class="guide-phase-number">02</span><h5><a href="#month8-1-step-month8-1-play">観察</a></h5><p class="guide-phase-time">15<small>分</small></p><p class="guide-phase-action">遊び、気づきとアイデアを残す</p></li><li class="guide-phase-explain"><span class="guide-phase-number">03</span><h5><a href="#month8-1-step-month8-1-rules">理解</a></h5><p class="guide-phase-time">10<small>分</small></p><p class="guide-phase-action">観察とコード・設定を対応付ける</p></li><li class="guide-phase-work"><span class="guide-phase-number">04</span><h5><a href="#month8-1-step-month8-1-player-speed">変更・比較</a></h5><p class="guide-phase-time">25<small>分</small></p><p class="guide-phase-action">1設定を変えて比べる</p></li><li class="guide-phase-reflect"><span class="guide-phase-number">05</span><h5><a href="#month8-1-step-month8-1-review">まとめ</a></h5><p class="guide-phase-time">5<small>分</small></p><p class="guide-phase-action">変更と結果を説明し保存</p></li><li class="guide-phase-buffer"><span class="guide-phase-number">06</span><h5>予備</h5><p class="guide-phase-time">10<small>分</small></p><p class="guide-phase-action">個別支援・進行の調整</p></li></ol></section><section class="reading-subsection"><h4>取り組む範囲</h4><div class="reading-criteria guide-criteria"><section class="reading-subsection reading-must"><h5><span class="guide-badge guide-badge-must">MUST</span></h5><ul><li>開く・保存・実行・停止</li><li>複数ルールを発見</li><li>1設定を変更して結果確認</li></ul></section><section class="reading-subsection reading-should"><h5><span class="guide-badge guide-badge-should">SHOULD</span></h5><ul><li>別設定も比較</li><li>元／作業データを区別</li></ul></section><section class="reading-subsection reading-optional"><h5><span class="guide-badge guide-badge-challenge">CHALLENGE</span></h5><ul><li>複数設定のバランス調整</li><li>READ／Quiz</li></ul></section></div></section><section class="reading-subsection"><h4>今日扱う内容</h4><dl class="reading-concept-list"><div class="reading-concept-new"><dt><span class="guide-badge guide-badge-new">NEW</span><small>新しく扱う</small></dt><dd>ファイルを開く・保存する・実行する・停止する。</dd></div><div class="reading-concept-transfer"><dt><span class="guide-badge guide-badge-transfer">TRANSFER</span><small>使い直す</small></dt><dd>変数・代入と値の比較をゲームで使う。</dd></div><div class="reading-concept-read-only"><dt><span class="guide-badge guide-badge-read-only">READ ONLY</span><small>読む</small></dt><dd>完成ゲームのルールと、変更してよい場所の目印を読む。</dd></div></dl></section><section class="reading-subsection"><h4>Slideの進め方</h4><details class="reading-details guide-slide-detail"><summary>全Slideの進行・講師の動きを開く<span class="reading-disclosure" aria-hidden="true">＋</span></summary><div class="reading-detail-body"><ol class="guide-cues"><li id="month8-1-step-month8-1" data-slide-alias="month8-1"><h5><a href="/robot-python-game/instructor/month8-1" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P1</b><span data-page-kind="overview">OVERVIEW</span></span><strong>ゲームを調べる</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>目的と今日のファイルを見る</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>全部を書く回でなく、1設定と変化を結ぶ回だと絞る</dd></div></dl></li><li id="month8-1-step-month8-1-flow" data-slide-alias="month8-1-flow"><h5><a href="/robot-python-game/instructor/month8-1-flow" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P2</b><span data-page-kind="index">INDEX</span></span><strong>今日の流れ</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>本編と任意の行き先を確認</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>敵速度・サイズは追加、任意教材は終了後と案内</dd></div></dl></li><li id="month8-1-step-month8-1-roadmap" data-slide-alias="month8-1-roadmap"><h5><a href="/robot-python-game/instructor/month8-1-roadmap" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P3</b><span data-page-kind="concept">CONCEPT</span></span><strong>5か月で、ゲームづくりを進める</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>現在の月と終着点を見る</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>現在位置と最後の発表を短く説明。Game2はMonth10〜11、改造計画はMonth11-3とこのガイドで補う</dd></div></dl></li><li id="month8-1-step-month8-1-setup" data-slide-alias="month8-1-setup"><h5><a href="/robot-python-game/instructor/month8-1-setup" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P4</b><span data-page-kind="setup">SETUP</span></span><strong>month8-1.pyを開いて実行する</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>自分のDriveのファイルを起動・停止</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>ファイル名・選択Python・フォーカスを個別確認</dd></div></dl></li><li id="month8-1-step-month8-1-play" data-slide-alias="month8-1-play"><h5><a href="/robot-python-game/instructor/month8-1-play" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P5</b><span data-page-kind="play">PLAY</span></span><strong>ゲームを遊んで、動きを見る</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>遊び、複数の動きと条件を記録</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>何が起きたか問い、プレイ技量を評価しない</dd></div></dl></li><li id="month8-1-step-month8-1-rules" data-slide-alias="month8-1-rules"><h5><a href="/robot-python-game/instructor/month8-1-rules" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P6</b><span data-page-kind="review">REVIEW</span></span><strong>見つけたルールを整理する</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>観察を対象・条件・結果へ対応</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>記録した例を表へつなぎ、発表を増やしすぎない</dd></div></dl></li><li id="month8-1-step-month8-1-variables" data-slide-alias="month8-1-variables"><h5><a href="/robot-python-game/instructor/month8-1-variables" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P7</b><span data-page-kind="concept">CONCEPT</span></span><strong>変数と代入を知る</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>名前・値・代入の向きを読む</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>図とコードを本人に指させ、変数の講義を長くしない</dd></div></dl></li><li id="month8-1-step-month8-1-code-guide" data-slide-alias="month8-1-code-guide"><h5><a href="/robot-python-game/instructor/month8-1-code-guide" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P8</b><span data-page-kind="setup">SETUP</span></span><strong>教材コードの目印を知る</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>EDIT・READ・SYSTEMを見分ける</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>編集可の場所を1つ探させ、SYSTEM全読を課さない</dd></div></dl></li><li id="month8-1-step-month8-1-player-speed" data-slide-alias="month8-1-player-speed"><h5><a href="/robot-python-game/instructor/month8-1-player-speed" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P9</b><span data-page-kind="work">WORK</span></span><strong>プレイヤーの速さを変える</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>[8-1-1]の数を選び、04へ予想と実際を残す</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>まず予想して変更。止まればHint、保存・再実行・変化をCHECK</dd></div></dl></li><li id="month8-1-step-month8-1-enemy-speed" data-slide-alias="month8-1-enemy-speed"><h5><a href="/robot-python-game/instructor/month8-1-enemy-speed" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P10</b><span data-page-kind="work">WORK</span></span><strong>敵の速さを変える</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>余裕があれば敵速度を比較</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>SHOULDはSHOULD。3体共通の設定と確認し、前のWORKを進めている生徒にはそちらを続けさせる</dd></div></dl></li><li id="month8-1-step-month8-1-size" data-slide-alias="month8-1-size"><h5><a href="/robot-python-game/instructor/month8-1-size" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P11</b><span data-page-kind="work">WORK</span></span><strong>大きさを1つ変える</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>余裕があればサイズを1つ選ぶ</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>同時に複数変えさせず、未実施を未達にしない</dd></div></dl></li><li id="month8-1-step-month8-1-tune" data-slide-alias="month8-1-tune"><h5><a href="/robot-python-game/instructor/month8-1-tune" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P12</b><span data-page-kind="tune">TUNE</span></span><strong>1つの設定で、予想と結果を比べよう</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>1設定の予想→変更→実行→実際→比較</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>04を使い直し、転記・複数設定の追加実験を全員に課さない</dd></div></dl></li><li id="month8-1-step-month8-1-review" data-slide-alias="month8-1-review"><h5><a href="/robot-python-game/instructor/month8-1-review" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P13</b><span data-page-kind="review">REVIEW</span></span><strong>変更する場所と初期値を見返す</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>自分の設定と初期値を見返す</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>変更した行だけでもよい。新しい課題にしない</dd></div></dl></li><li id="month8-1-step-month8-1-reflect" data-slide-alias="month8-1-reflect"><h5><a href="/robot-python-game/instructor/month8-1-reflect" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P14</b><span data-page-kind="reflect">REFLECT</span></span><strong>変えた値と結果を記録する</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>04から変更と結果を説明、05をチェックし保存</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>3自己評価は約1分。Month10の成長比較まで紙を保管</dd></div></dl></li><li id="month8-1-step-month8-1-challenge" data-slide-alias="month8-1-challenge"><h5><a href="/robot-python-game/instructor/month8-1-challenge" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>O1</b><span data-page-kind="challenge">CHALLENGE</span></span><strong>敵が画面の外へ出たあと、何が起きる？</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>余裕があればREADのまとまりを読む</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>MUST後のみ。数字当てや新しい入力課題にしない</dd></div></dl></li><li id="month8-1-step-month8-1-quiz" data-slide-alias="month8-1-quiz"><h5><a href="/robot-python-game/instructor/month8-1-quiz" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>O2</b><span data-page-kind="quiz">QUIZ</span></span><strong>今日の設定を思い出そう</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>選択し理由を見て再試行</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>全問必須にせず、本編の説明・保存を優先する</dd></div></dl></li></ol></div></details></section><section class="reading-subsection"><h4>講師のポイント</h4><blockquote class="reading-teaching-cue"><p>「まず遊ぶ前に考え、遊んで気づき、数字を1つ変えて確かめます。」</p></blockquote><ul><li>操作を確認したら、遊びと観察へ進めます</li><li>数値は生徒に選ばせ、理由を聞きます</li><li>敵の速さ・サイズ変更や発展課題は、進度に応じて案内します。全員を待たせません。</li></ul></section><section class="reading-subsection reading-specific-support"><h4>Lesson固有の支援</h4><ul class="guide-specific-cases"><li><h5>変更が反映されない</h5><p>保存後にESCで閉じ、再実行させます。Rだけでは変更は反映されません</p></li><li><h5>感想だけになる</h5><p>「何を変え、画面はどう変わった？」と聞き、変数名・値・結果を対応させます。</p></li></ul><details class="reading-details guide-specific-note"><summary>Lesson別準備<span class="reading-disclosure" aria-hidden="true">＋</span></summary><div class="reading-detail-body"><p>画像・音と、画像や音がない場合の図形・無音での起動を確認します。GAME DEV LOG 01（A4縦1枚）を用意します。</p><p>PLAY操作前に01（2〜3分）、PLAY後に02（2〜3分）、設定の解説前に03（1〜2分）、WORK／TUNE前後に04（2〜3分）、REFLECTで05（約1分）を使います。</p><p>記入は既存の活動内で行います。01は自由な予想、02は遊んだ後の気づきを残し、一致の転記や採点はしません。</p><p>追加アイデアは実装課題にしません。03は3本の線を結ばせ、自分で確かめてから実コードと照合します。</p><p>表紙の実ゲーム画像は導入に使います。04は1か所の変更について予想と結果、05は3つの自己評価を残させます。</p><p>遊ぶ前後の記録と自己評価は、Month10-1で比べるため保管します。全欄記入は求めません。</p><p>準備・PDF生成は<a href="/robot-python-game/instructor/docs/26_student_worksheet_system/">Worksheet System</a>を参照します。</p></div></details></section><section class="reading-subsection reading-completion print-friendly"><h4>Lesson完了</h4><ul><li>生徒が複数のルールを挙げ、変更した変数名・値と画面の変化を1組示せる。</li><li>保存したファイルを再実行できる。</li></ul></section><section class="reading-subsection reading-handoff"><h4>次回へ残す</h4><ul><li>変更したファイルと観察記録をDriveへ保存させます</li><li>設定と画面の変化を記録します</li><li>次回はプレイヤー操作へ進みます。</li></ul></section><section class="reading-subsection"><h4>参照先</h4><nav class="reading-lesson-links" aria-label="Month8-1の参照先"><a href="/robot-python-game/instructor/month8-1/" target="_blank" rel="noopener noreferrer">Lesson Slide<span class="guide-link-arrow" aria-hidden="true"> ↗</span></a><a href="/robot-python-game/instructor/reference/">Reference<span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></nav></section></div></details></section><section class="reading-lesson guide-refined guide-reading-v2" aria-labelledby="month8-2-title"><details id="month8-2" class="reading-details reading-lesson-toggle"><summary><span class="reading-summary-copy"><span class="reading-summary-heading"><span id="month8-2-title" class="reading-summary-id">Month8-2</span><strong>プレイヤーを動かす</strong></span><span class="reading-summary-fact reading-summary-goal"><b>目的</b><span>キー・座標・加減算を結び付け、右移動のコードを左・上下へ使い直して4方向移動を作る。</span></span><span class="reading-summary-fact reading-summary-must"><b>MUST</b><span>x/y・キーと動きを対応 / 右から左・上下へ転用し4方向移動</span></span><span class="reading-summary-fact reading-summary-meta"><b>時間</b><span>目安80分（予備15分を含む）／授業80分</span></span></span><span class="reading-disclosure" aria-hidden="true">＋</span></summary><div class="reading-detail-body"><a id="month8-2講師brief4方向移動"></a><section class="reading-subsection reading-goal"><h4>今日の目的</h4><p>キー・座標・加減算を結び付け、右移動のコードを左・上下へ使い直して4方向移動を作る。</p></section><section class="guide-timeline print-friendly reading-subsection"><h4>今日の流れ・時間 <small>80分・目安</small></h4><ol style="--phase-count:6"><li class="guide-phase-explain"><span class="guide-phase-number">01</span><h5><a href="#month8-2-step-month8-2">導入</a></h5><p class="guide-phase-time">10<small>分</small></p><p class="guide-phase-action">起動して開始状態を確かめる</p></li><li class="guide-phase-explain"><span class="guide-phase-number">02</span><h5><a href="#month8-2-step-month8-2-coordinates">座標・入力</a></h5><p class="guide-phase-time">10<small>分</small></p><p class="guide-phase-action">座標とキーの条件を読む</p></li><li class="guide-phase-work"><span class="guide-phase-number">03</span><h5><a href="#month8-2-step-month8-2-right">4方向へ</a></h5><p class="guide-phase-time">30<small>分</small></p><p class="guide-phase-action">右から左・上下へ使い直す</p></li><li class="guide-phase-play"><span class="guide-phase-number">04</span><h5><a href="#month8-2-step-month8-2-compare">比較・調整</a></h5><p class="guide-phase-time">10<small>分</small></p><p class="guide-phase-action">上移動を予想。画面端は追加</p></li><li class="guide-phase-reflect"><span class="guide-phase-number">05</span><h5><a href="#month8-2-step-month8-2-review">まとめ</a></h5><p class="guide-phase-time">5<small>分</small></p><p class="guide-phase-action">キーと動きを説明し保存</p></li><li class="guide-phase-buffer"><span class="guide-phase-number">06</span><h5>予備</h5><p class="guide-phase-time">15<small>分</small></p><p class="guide-phase-action">個別支援・進行の調整</p></li></ol></section><section class="reading-subsection"><h4>取り組む範囲</h4><div class="reading-criteria guide-criteria"><section class="reading-subsection reading-must"><h5><span class="guide-badge guide-badge-must">MUST</span></h5><ul><li>x/y・キーと動きを対応</li><li>右から左・上下へ転用し4方向移動</li></ul></section><section class="reading-subsection reading-should"><h5><span class="guide-badge guide-badge-should">SHOULD</span></h5><ul><li>画面外制限（現行は左右中心）</li><li>速さの比較</li></ul></section><section class="reading-subsection reading-optional"><h5><span class="guide-badge guide-badge-challenge">CHALLENGE</span></h5><ul><li>上下端制限の参考転用</li><li>移動アレンジ／読解</li></ul></section></div></section><section class="reading-subsection"><h4>今日扱う内容</h4><dl class="reading-concept-list"><div class="reading-concept-new"><dt><span class="guide-badge guide-badge-new">NEW</span><small>新しく扱う</small></dt><dd>押しているキーを調べ、座標を変える。</dd></div><div class="reading-concept-transfer"><dt><span class="guide-badge guide-badge-transfer">TRANSFER</span><small>使い直す</small></dt><dd>座標・足し算・引き算・ifを4方向移動へ使う。</dd></div><div class="reading-concept-read-only"><dt><span class="guide-badge guide-badge-read-only">READ ONLY</span><small>読む</small></dt><dd>キーの状態を調べる行と、左端の完成例を読む。</dd></div></dl></section><section class="reading-subsection"><h4>Slideの進め方</h4><details class="reading-details guide-slide-detail"><summary>全Slideの進行・講師の動きを開く<span class="reading-disclosure" aria-hidden="true">＋</span></summary><div class="reading-detail-body"><ol class="guide-cues"><li id="month8-2-step-month8-2" data-slide-alias="month8-2"><h5><a href="/robot-python-game/instructor/month8-2" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P1</b><span data-page-kind="overview">OVERVIEW</span></span><strong>プレイヤーを動かす</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>前回の速さと今日の移動を結ぶ</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>座標・キー・4方向に目的を絞る</dd></div></dl></li><li id="month8-2-step-month8-2-flow" data-slide-alias="month8-2-flow"><h5><a href="/robot-python-game/instructor/month8-2-flow" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P2</b><span data-page-kind="index">INDEX</span></span><strong>今日の流れ</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>右→左→上下の順を見る</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>画面端・調整はSHOULDと先に分ける</dd></div></dl></li><li id="month8-2-step-month8-2-setup" data-slide-alias="month8-2-setup"><h5><a href="/robot-python-game/instructor/month8-2-setup" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P3</b><span data-page-kind="setup">SETUP</span></span><strong>month8-2.pyを開いて実行する</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>今日のファイルを起動</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>静止は今日の開始状態。別Lessonや環境問題と区別</dd></div></dl></li><li id="month8-2-step-month8-2-coordinates" data-slide-alias="month8-2-coordinates"><h5><a href="/robot-python-game/instructor/month8-2-coordinates" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P4</b><span data-page-kind="concept">CONCEPT</span></span><strong>座標を知る</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>x/yと右・下の増加を読む</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>原点と画像左上を指し、上ならyが小さくなると問う</dd></div></dl></li><li id="month8-2-step-month8-2-keys" data-slide-alias="month8-2-keys"><h5><a href="/robot-python-game/instructor/month8-2-keys" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P5</b><span data-page-kind="concept">CONCEPT</span></span><strong>キー入力を読む</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>キー取得とifの対応を見る</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>どのキーを調べるか確認。キー入力の詳しい仕組みは扱わない</dd></div></dl></li><li id="month8-2-step-month8-2-right" data-slide-alias="month8-2-right"><h5><a href="/robot-python-game/instructor/month8-2-right" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P6</b><span data-page-kind="work">WORK</span></span><strong>右へ動かす</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>[8-2-1]右辺を完成</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>短く試させ、キーを離すと止まるCHECKを全体で確認</dd></div></dl></li><li id="month8-2-step-month8-2-left" data-slide-alias="month8-2-left"><h5><a href="/robot-python-game/instructor/month8-2-left" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P7</b><span data-page-kind="work">WORK</span></span><strong>左へ動かす</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>[8-2-2]左の1行を書く</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>まず生徒に考える時間を取り、難しければ右の行を参考にさせる</dd></div></dl></li><li id="month8-2-step-month8-2-up-down" data-slide-alias="month8-2-up-down"><h5><a href="/robot-python-game/instructor/month8-2-up-down" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P8</b><span data-page-kind="work">WORK</span></span><strong>上下へ動かす</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>[8-2-3]上下の条件と移動を書く</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>yと加減算を問い、条件の内側を確認。参考例やHintを使ってよい</dd></div></dl></li><li id="month8-2-step-month8-2-compare" data-slide-alias="month8-2-compare"><h5><a href="/robot-python-game/instructor/month8-2-compare" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P9</b><span data-page-kind="concept">CONCEPT</span></span><strong>どちらが上へ動く？先に予想しよう</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>上へ動く方を予想・照合</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>答えを先に言わず、自分の行と実際の動きを根拠にする</dd></div></dl></li><li id="month8-2-step-month8-2-bounds" data-slide-alias="month8-2-bounds"><h5><a href="/robot-python-game/instructor/month8-2-bounds" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P10</b><span data-page-kind="work">WORK</span></span><strong>画面の外へ出ないようにする</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>余裕があれば右端を完成</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>左右端はSHOULD。上下端は発展で、clamp等を導入しない</dd></div></dl></li><li id="month8-2-step-month8-2-tune" data-slide-alias="month8-2-tune"><h5><a href="/robot-python-game/instructor/month8-2-tune" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P11</b><span data-page-kind="tune">TUNE</span></span><strong>速さを調整する</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>余裕があれば速さを比較</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>初期位置と押す時間をそろえる。値を指定しない</dd></div></dl></li><li id="month8-2-step-month8-2-review" data-slide-alias="month8-2-review"><h5><a href="/robot-python-game/instructor/month8-2-review" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P12</b><span data-page-kind="review">REVIEW</span></span><strong>キー・座標・計算を結び付ける</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>キー・座標・計算を対応</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>x/yと＋/−を自分のコードで指させる</dd></div></dl></li><li id="month8-2-step-month8-2-reflect" data-slide-alias="month8-2-reflect"><h5><a href="/robot-python-game/instructor/month8-2-reflect" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P13</b><span data-page-kind="reflect">REFLECT</span></span><strong>使った変数と、動きを記録する</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>1方向を短く説明し保存</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>4方向の結果を確認。画面端・調整未実施を未達にしない</dd></div></dl></li><li id="month8-2-step-month8-2-challenge" data-slide-alias="month8-2-challenge"><h5><a href="/robot-python-game/instructor/month8-2-challenge" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>O1</b><span data-page-kind="challenge">CHALLENGE</span></span><strong>左端のコードは、何を防いでいる？</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>左端完成例を読む</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>MUST後のみ。入力させず、条件と結果の意味を問う</dd></div></dl></li><li id="month8-2-step-month8-2-quiz" data-slide-alias="month8-2-quiz"><h5><a href="/robot-python-game/instructor/month8-2-quiz" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>O2</b><span data-page-kind="quiz">QUIZ</span></span><strong>キーと動きのつながりを確かめよう</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>選択と理由の確認</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>全8問を課さず、必要なWORKへ戻れるよう支援</dd></div></dl></li></ol></div></details></section><section class="reading-subsection"><h4>講師のポイント</h4><blockquote class="reading-teaching-cue"><p>「数字の設定から、キーを押した時に座標を変える処理へ進みます。」</p></blockquote><ul><li>右移動は丁寧に支援し、左・上下はまず生徒自身に考えさせます</li><li>ifの内側に移動の行を書いているか確認します</li><li>敵との接触・アイテム取得は無効で、scoreが0のままでも正常です。画面外制限がなくても、4方向へ動けばMUST達成です。</li></ul><details class="reading-details guide-prerequisite"><summary>前提を確認<span class="reading-disclosure" aria-hidden="true">＋</span></summary><div class="reading-detail-body"><ul><li>支援があれば保存・実行・停止ができる</li><li>変数へ計算結果を入れる処理を見たことがある</li><li>ifの条件と、その内側の処理を見たことがある。</li></ul></div></details></section><section class="reading-subsection reading-specific-support"><h4>Lesson固有の支援</h4><ul class="guide-specific-cases"><li><h5>右へ動かない</h5><p>コメントの空欄ではなく、代入の右側を編集しているか確認します</p></li><li><h5>上下が横・逆に動く</h5><p>「変える座標は？ 上へ動くと値は増える？」と聞き、図と生徒の行を比べます</p></li><li><h5>キーと移動がつながらない</h5><p>コロン・キー名・ifの内側を一緒に確認します。</p></li></ul></section><section class="reading-subsection reading-completion print-friendly"><h4>Lesson完了</h4><ul><li>生徒がキーを押す・離す操作で4方向の移動と停止を確認できる。</li><li>1方向のキー・座標・計算を自分の行で示し、保存できる。画面外制限は完了の条件にしません。</li></ul></section><section class="reading-subsection reading-handoff"><h4>次回へ残す</h4><ul><li>4方向へ動くファイルをDriveへ保存させます</li><li>画面外制限の実施状況を記録します</li><li>次回は座標の更新を敵の移動へ使い直します。</li></ul></section><section class="reading-subsection"><h4>参照先</h4><nav class="reading-lesson-links" aria-label="Month8-2の参照先"><a href="/robot-python-game/instructor/month8-2/" target="_blank" rel="noopener noreferrer">Lesson Slide<span class="guide-link-arrow" aria-hidden="true"> ↗</span></a><a href="/robot-python-game/instructor/reference/">Reference<span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></nav></section></div></details></section><section class="reading-lesson guide-refined guide-reading-v2" aria-labelledby="month8-3-title"><details id="month8-3" class="reading-details reading-lesson-toggle"><summary><span class="reading-summary-copy"><span class="reading-summary-heading"><span id="month8-3-title" class="reading-summary-id">Month8-3</span><strong>敵を動かす</strong></span><span class="reading-summary-fact reading-summary-goal"><b>目的</b><span>enemy1を下へ動かし、画面の下へ出た時だけ上へ戻す処理を作る。</span></span><span class="reading-summary-fact reading-summary-must"><b>MUST</b><span>敵座標・速度を確認 / 下移動 / 下判定→上へ戻す。敵2/3の基本共通点は参考確認</span></span><span class="reading-summary-fact reading-summary-meta"><b>時間</b><span>目安80分（予備15分を含む）／授業80分</span></span></span><span class="reading-disclosure" aria-hidden="true">＋</span></summary><div class="reading-detail-body"><a id="month8-3講師brief敵の自動移動再配置"></a><section class="reading-subsection reading-goal"><h4>今日の目的</h4><p>enemy1を下へ動かし、画面の下へ出た時だけ上へ戻す処理を作る。enemy2・enemy3は同じ仕組みの参考例として読む。</p></section><section class="guide-timeline print-friendly reading-subsection"><h4>今日の流れ・時間 <small>80分・目安</small></h4><ol style="--phase-count:6"><li class="guide-phase-explain"><span class="guide-phase-number">01</span><h5><a href="#month8-3-step-month8-3">導入</a></h5><p class="guide-phase-time">10<small>分</small></p><p class="guide-phase-action">敵1の開始状態を確かめる</p></li><li class="guide-phase-work"><span class="guide-phase-number">02</span><h5><a href="#month8-3-step-month8-3-coordinates">座標・下移動</a></h5><p class="guide-phase-time">15<small>分</small></p><p class="guide-phase-action">座標と速さで敵1を動かす</p></li><li class="guide-phase-work"><span class="guide-phase-number">03</span><h5><a href="#month8-3-step-month8-3-bottom">下判定・戻す</a></h5><p class="guide-phase-time">15<small>分</small></p><p class="guide-phase-action">下へ出た時だけ上へ戻す</p></li><li class="guide-phase-play"><span class="guide-phase-number">04</span><h5><a href="#month8-3-step-month8-3-random">横位置・試遊</a></h5><p class="guide-phase-time">15<small>分</small></p><p class="guide-phase-action">randomは追加。動きを試す</p></li><li class="guide-phase-reflect"><span class="guide-phase-number">05</span><h5><a href="#month8-3-step-month8-3-compare">まとめ</a></h5><p class="guide-phase-time">10<small>分</small></p><p class="guide-phase-action">条件と動きを説明し保存</p></li><li class="guide-phase-buffer"><span class="guide-phase-number">06</span><h5>予備</h5><p class="guide-phase-time">15<small>分</small></p><p class="guide-phase-action">個別支援・進行の調整</p></li></ol></section><section class="reading-subsection"><h4>取り組む範囲</h4><div class="reading-criteria guide-criteria"><section class="reading-subsection reading-must"><h5><span class="guide-badge guide-badge-must">MUST</span></h5><ul><li>敵座標・速度を確認</li><li>下移動</li><li>下判定→上へ戻す。敵2/3の基本共通点は参考確認</li></ul></section><section class="reading-subsection reading-should"><h5><span class="guide-badge guide-badge-should">SHOULD</span></h5><ul><li>randomでx再配置</li><li>速度・範囲の簡単な比較</li></ul></section><section class="reading-subsection reading-optional"><h5><span class="guide-badge guide-badge-challenge">CHALLENGE</span></h5><ul><li>random範囲の発展調整</li><li>敵2/3との深い共通点読解</li></ul></section></div></section><section class="reading-subsection"><h4>今日扱う内容</h4><dl class="reading-concept-list"><div class="reading-concept-new"><dt><span class="guide-badge guide-badge-new">NEW</span><small>新しく扱う</small></dt><dd>random.randintで横の位置を変える。SHOULDなので省略できる。</dd></div><div class="reading-concept-transfer"><dt><span class="guide-badge guide-badge-transfer">TRANSFER</span><small>使い直す</small></dt><dd>座標更新・if・比較を、下移動と上への再配置へ使う。</dd></div><div class="reading-concept-read-only"><dt><span class="guide-badge guide-badge-read-only">READ ONLY</span><small>読む</small></dt><dd>enemy2・enemy3の完成例から同じ仕組みを確かめる。</dd></div></dl></section><section class="reading-subsection"><h4>Slideの進め方</h4><details class="reading-details guide-slide-detail"><summary>全Slideの進行・講師の動きを開く<span class="reading-disclosure" aria-hidden="true">＋</span></summary><div class="reading-detail-body"><ol class="guide-cues"><li id="month8-3-step-month8-3" data-slide-alias="month8-3"><h5><a href="/robot-python-game/instructor/month8-3" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P1</b><span data-page-kind="overview">OVERVIEW</span></span><strong>敵を動かす</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>敵1の動きと目的を見る</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>座標・下移動・下判定・上へ戻すMUSTに絞る</dd></div></dl></li><li id="month8-3-step-month8-3-flow" data-slide-alias="month8-3-flow"><h5><a href="/robot-python-game/instructor/month8-3-flow" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P2</b><span data-page-kind="index">INDEX</span></span><strong>今日の流れ</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>必須と追加の順を確認</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>randomのP8・9、調整P10は省略可能と案内</dd></div></dl></li><li id="month8-3-step-month8-3-setup" data-slide-alias="month8-3-setup"><h5><a href="/robot-python-game/instructor/month8-3-setup" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P3</b><span data-page-kind="setup">SETUP</span></span><strong>month8-3.pyを開いて実行する</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>開始時の状態と動く敵を確認</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>敵1静止・敵2/3移動は正常。今日のファイル名を確認</dd></div></dl></li><li id="month8-3-step-month8-3-coordinates" data-slide-alias="month8-3-coordinates"><h5><a href="/robot-python-game/instructor/month8-3-coordinates" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P4</b><span data-page-kind="concept">CONCEPT</span></span><strong>敵も、xとyで場所が決まる</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>敵のx/yを図と照合</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>前回の下移動へ接続し、変えるのはenemy1_yと問う</dd></div></dl></li><li id="month8-3-step-month8-3-move" data-slide-alias="month8-3-move"><h5><a href="/robot-python-game/instructor/month8-3-move" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P5</b><span data-page-kind="work">WORK</span></span><strong>敵を下へ動かす</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>[8-3-1]下へ進む1行を試す</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>まず1行考えさせ、難しければ敵2・3の例かHintを案内。移動の式に絞る</dd></div></dl></li><li id="month8-3-step-month8-3-bottom" data-slide-alias="month8-3-bottom"><h5><a href="/robot-python-game/instructor/month8-3-bottom" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P6</b><span data-page-kind="concept">CONCEPT</span></span><strong>画面の下へ出たか、ifで調べる</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>下境界と条件を比較</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>数字当てにせず、敵が画面のどちらへ出たかを問う</dd></div></dl></li><li id="month8-3-step-month8-3-respawn" data-slide-alias="month8-3-respawn"><h5><a href="/robot-python-game/instructor/month8-3-respawn" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P7</b><span data-page-kind="work">WORK</span></span><strong>画面の下へ出たら、上へ戻す</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>[8-3-2]条件と上へ戻す行を書く</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>if内の位置を確認。同じxで1回戻ればMUST成立</dd></div></dl></li><li id="month8-3-step-month8-3-random" data-slide-alias="month8-3-random"><h5><a href="/robot-python-game/instructor/month8-3-random" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P8</b><span data-page-kind="concept">CONCEPT</span></span><strong>範囲から、横の位置を1つ選ぶ</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>余裕があれば範囲を読む</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>randomはSHOULD。未実施者は必須の確認と保存へ</dd></div></dl></li><li id="month8-3-step-month8-3-random-x" data-slide-alias="month8-3-random-x"><h5><a href="/robot-python-game/instructor/month8-3-random-x" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P9</b><span data-page-kind="work">WORK</span></span><strong>戻る横位置をランダムにする</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>[8-3-3]横位置を選び直す</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>戻る時だけ実行。同じ値も正常。敵2の例とHintで支援</dd></div></dl></li><li id="month8-3-step-month8-3-tune" data-slide-alias="month8-3-tune"><h5><a href="/robot-python-game/instructor/month8-3-tune" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P10</b><span data-page-kind="tune">TUNE</span></span><strong>速さを調整して、動きを確かめる</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>必須の動きを試し、必要なら調整</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>速さ・簡単な範囲比較はSHOULD。全員に変更を課さない</dd></div></dl></li><li id="month8-3-step-month8-3-compare" data-slide-alias="month8-3-compare"><h5><a href="/robot-python-game/instructor/month8-3-compare" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P11</b><span data-page-kind="concept">CONCEPT</span></span><strong>ifの内側に書く意味を知る</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>if内と外の違いを予想</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>Aの動きを先に考え、自分の戻す行の位置へつなぐ</dd></div></dl></li><li id="month8-3-step-month8-3-review" data-slide-alias="month8-3-review"><h5><a href="/robot-python-game/instructor/month8-3-review" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P12</b><span data-page-kind="review">REVIEW</span></span><strong>コードと、敵の動きをつなぐ</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>自分の3処理と敵2/3を読む</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>基本共通点の参考確認だけ行い、深い読解は発展へ</dd></div></dl></li><li id="month8-3-step-month8-3-reflect" data-slide-alias="month8-3-reflect"><h5><a href="/robot-python-game/instructor/month8-3-reflect" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P13</b><span data-page-kind="reflect">REFLECT</span></span><strong>変えた座標と、動きを記録する</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>座標・動きを短く説明し保存</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>random実施有無を記録。未実施でもMUST未達にしない</dd></div></dl></li><li id="month8-3-step-month8-3-challenge" data-slide-alias="month8-3-challenge"><h5><a href="/robot-python-game/instructor/month8-3-challenge" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>O1</b><span data-page-kind="challenge">CHALLENGE</span></span><strong>別の敵にも、同じ仕組みがある？</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>別の敵への共通点を読む</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>MUST後の深い読解。解けなくても問題なし</dd></div></dl></li><li id="month8-3-step-month8-3-quiz" data-slide-alias="month8-3-quiz"><h5><a href="/robot-python-game/instructor/month8-3-quiz" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>O2</b><span data-page-kind="quiz">QUIZ</span></span><strong>敵の動きと、コードを確かめよう</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>敵の動きの理由を選ぶ</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>random問題を全員必須にせず、保存を優先</dd></div></dl></li></ol></div></details></section><section class="reading-subsection"><h4>講師のポイント</h4><blockquote class="reading-teaching-cue"><p>「キーなしで下へ動かし、下へ出た時だけ上へ戻します。横位置のrandomは時間があれば。」</p></blockquote><ul><li>enemy1を中心に扱います</li><li>下移動→画面下の判定→上へ戻す処理を優先します</li><li>敵との接触・アイテム取得は無効で、scoreが0のままでも正常です。randomは本編にありますが、SHOULDなので省略できます。</li></ul><details class="reading-details guide-prerequisite"><summary>前提を確認<span class="reading-disclosure" aria-hidden="true">＋</span></summary><div class="reading-detail-body"><ul><li>xは横、yは縦で、下へ進むとyが増えると分かる</li><li>座標の更新とifの内側の処理を見たことがある</li><li>画面外制限やrandomを自力で書いた経験は求めません。</li></ul></div></details></section><section class="reading-subsection reading-specific-support"><h4>Lesson固有の支援</h4><ul class="guide-specific-cases"><li><h5>下へ動かない</h5><p>enemy1_yの更新を敵2の例と比べます</p></li><li><h5>すぐ戻る・戻らない</h5><p>条件の向きとif内の代入を図で確認します</p></li><li><h5>時間が足りない</h5><p>randomと調整を省きます。同じx位置へ戻ればMUST達成です。</p><p>randomで同じ値が出ても正常です。</p></li></ul></section><section class="reading-subsection reading-completion print-friendly"><h4>Lesson完了</h4><ul><li>生徒がenemy1の落下と、画面の下へ出た時だけ上へ戻る動きを確認できる。</li><li>移動・条件・代入の行を指し、enemy2・enemy3にも同じ仕組みがあると確認できる。</li></ul></section><section class="reading-subsection reading-handoff"><h4>次回へ残す</h4><ul><li>下移動と再配置が動くファイルをDriveへ保存させます</li><li>randomの実施状況を記録します</li><li>次回はifの条件を敵との接触判定へ使い直します。</li></ul></section><section class="reading-subsection"><h4>参照先</h4><nav class="reading-lesson-links" aria-label="Month8-3の参照先"><a href="/robot-python-game/instructor/month8-3/" target="_blank" rel="noopener noreferrer">Lesson Slide<span class="guide-link-arrow" aria-hidden="true"> ↗</span></a><a href="/robot-python-game/instructor/reference/">Reference<span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></nav></section></div></details></section></section><section class="reading-month"><h3 id="month9">Month9</h3><section class="reading-lesson guide-refined guide-reading-v2" aria-labelledby="month9-1-title"><details id="month9-1" class="reading-details reading-lesson-toggle"><summary><span class="reading-summary-copy"><span class="reading-summary-heading"><span id="month9-1-title" class="reading-summary-id">Month9-1</span><strong>当たり判定を作る</strong></span><span class="reading-summary-fact reading-summary-goal"><b>目的</b><span>当たり判定に使う四角を読み、接触した時にGame Overにする。</span></span><span class="reading-summary-fact reading-summary-must"><b>MUST</b><span>Rectの役割をREAD / enemy1の接触条件と結果 / enemy2/3へ展開</span></span><span class="reading-summary-fact reading-summary-meta"><b>時間</b><span>目安75分（予備10分を含む）／授業80分</span></span></span><span class="reading-disclosure" aria-hidden="true">＋</span></summary><div class="reading-detail-body"><a id="month9-1講師brief接触判定game-over"></a><section class="reading-subsection reading-goal"><h4>今日の目的</h4><p>当たり判定に使う四角を読み、接触した時にGame Overにする。enemy1の処理をenemy2・enemy3へ使い直す。</p></section><section class="guide-timeline print-friendly reading-subsection"><h4>今日の流れ・時間 <small>75分・目安</small></h4><ol style="--phase-count:6"><li class="guide-phase-explain"><span class="guide-phase-number">01</span><h5><a href="#month9-1-step-month9-1">導入</a></h5><p class="guide-phase-time">10<small>分</small></p><p class="guide-phase-action">接触しても止まらないと確認</p></li><li class="guide-phase-explain"><span class="guide-phase-number">02</span><h5><a href="#month9-1-step-month9-1-rect">四角を読む</a></h5><p class="guide-phase-time">15<small>分</small></p><p class="guide-phase-action">画像とRect、重なりを結ぶ</p></li><li class="guide-phase-work"><span class="guide-phase-number">03</span><h5><a href="#month9-1-step-month9-1-enemy1">3体へ展開</a></h5><p class="guide-phase-time">25<small>分</small></p><p class="guide-phase-action">敵1から敵2・3へ判定を使う</p></li><li class="guide-phase-play"><span class="guide-phase-number">04</span><h5><a href="#month9-1-step-month9-1-compare">比較・確認</a></h5><p class="guide-phase-time">10<small>分</small></p><p class="guide-phase-action">Game Over・R・3体を確かめる</p></li><li class="guide-phase-reflect"><span class="guide-phase-number">05</span><h5><a href="#month9-1-step-month9-1-reflect">まとめ</a></h5><p class="guide-phase-time">5<small>分</small></p><p class="guide-phase-action">判定と結果を説明し保存</p></li><li class="guide-phase-buffer"><span class="guide-phase-number">06</span><h5>予備</h5><p class="guide-phase-time">10<small>分</small></p><p class="guide-phase-action">個別支援・進行の調整</p></li></ol></section><section class="reading-subsection"><h4>取り組む範囲</h4><div class="reading-criteria guide-criteria"><section class="reading-subsection reading-must"><h5><span class="guide-badge guide-badge-must">MUST</span></h5><ul><li>Rectの役割をREAD</li><li>enemy1の接触条件と結果</li><li>enemy2/3へ展開</li></ul></section><section class="reading-subsection reading-should"><h5><span class="guide-badge guide-badge-should">SHOULD</span></h5><ul><li>自分で動作確認・不具合調査</li><li>接触後の設定比較</li></ul></section><section class="reading-subsection reading-optional"><h5><span class="guide-badge guide-badge-challenge">CHALLENGE</span></h5><ul><li>判定・結果の改造</li><li>READ／Quiz</li></ul></section></div></section><section class="reading-subsection"><h4>今日扱う内容</h4><dl class="reading-concept-list"><div class="reading-concept-new"><dt><span class="guide-badge guide-badge-new">NEW</span><small>新しく扱う</small></dt><dd>colliderectで2つの四角が重なったか調べる。</dd></div><div class="reading-concept-transfer"><dt><span class="guide-badge guide-badge-transfer">TRANSFER</span><small>使い直す</small></dt><dd>ifの条件と代入を、敵1から敵2・3へ使い直す。</dd></div><div class="reading-concept-read-only"><dt><span class="guide-badge guide-badge-read-only">READ ONLY</span><small>読む</small></dt><dd>画像の輪郭ではなく、Rectの四角を読む。</dd></div><div class="reading-concept-system"><dt><span class="guide-badge guide-badge-system">SYSTEM</span><small>触らない</small></dt><dd>停止・Rでの再開・音・フラッシュは準備済み。</dd></div></dl></section><section class="reading-subsection"><h4>Slideの進め方</h4><details class="reading-details guide-slide-detail"><summary>全Slideの進行・講師の動きを開く<span class="reading-disclosure" aria-hidden="true">＋</span></summary><div class="reading-detail-body"><ol class="guide-cues"><li id="month9-1-step-month9-1" data-slide-alias="month9-1"><h5><a href="/robot-python-game/instructor/month9-1" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P1</b><span data-page-kind="overview">OVERVIEW</span></span><strong>当たり判定を作る</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>今日の接触と結果を見る</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>前回の条件→結果へ接続し、3体への展開を案内</dd></div></dl></li><li id="month9-1-step-month9-1-flow" data-slide-alias="month9-1-flow"><h5><a href="/robot-python-game/instructor/month9-1-flow" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P2</b><span data-page-kind="index">INDEX</span></span><strong>今日の流れ</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>読む場所と書く場所を確認</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>RectはREAD、後半の自分での不具合調査はSHOULDと分ける</dd></div></dl></li><li id="month9-1-step-month9-1-setup" data-slide-alias="month9-1-setup"><h5><a href="/robot-python-game/instructor/month9-1-setup" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P3</b><span data-page-kind="setup">SETUP</span></span><strong>month9-1.pyを開いて実行する</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>接触しても止まらない開始状態を試す</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>まだ接触判定がないため正常と伝える。Driveの今日のファイルを照合</dd></div></dl></li><li id="month9-1-step-month9-1-rect" data-slide-alias="month9-1-rect"><h5><a href="/robot-python-game/instructor/month9-1-rect" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P4</b><span data-page-kind="concept">CONCEPT</span></span><strong>画像と、当たり判定の四角を分ける</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>画像と判定の四角を比べる</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>透明余白も含む領域を示し、輪郭の誤解を修正</dd></div></dl></li><li id="month9-1-step-month9-1-collision" data-slide-alias="month9-1-collision"><h5><a href="/robot-python-game/instructor/month9-1-collision" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P5</b><span data-page-kind="concept">CONCEPT</span></span><strong>2つの四角が、重なったかを調べる</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>離れる／重なる図を比較</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>重なりを調べる意味だけ確認し、引数暗記は求めない</dd></div></dl></li><li id="month9-1-step-month9-1-rect-form" data-slide-alias="month9-1-rect-form"><h5><a href="/robot-python-game/instructor/month9-1-rect-form" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P6</b><span data-page-kind="concept">CONCEPT</span></span><strong>Rectの作り方を知る</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>左上・幅・高さの対応を読む</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>書き方の見本として示す。Rectを作る行の入力は求めない</dd></div></dl></li><li id="month9-1-step-month9-1-read" data-slide-alias="month9-1-read"><h5><a href="/robot-python-game/instructor/month9-1-read" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P7</b><span data-page-kind="concept">CONCEPT</span></span><strong>ゲームのRectを読む</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>既存player／enemy1 Rectを読む</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>実コードの名前と四角を指させ、全引数暗記は不要</dd></div></dl></li><li id="month9-1-step-month9-1-enemy1" data-slide-alias="month9-1-enemy1"><h5><a href="/robot-python-game/instructor/month9-1-enemy1" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P8</b><span data-page-kind="work">WORK</span></span><strong>敵1との当たり判定</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>[9-1-1]敵1の条件と結果を書く</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>考える時間を取り、難しければHintを案内。参考例を使っても、接触とRで再開できればよい</dd></div></dl></li><li id="month9-1-step-month9-1-game-over" data-slide-alias="month9-1-game-over"><h5><a href="/robot-python-game/instructor/month9-1-game-over" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P9</b><span data-page-kind="play">PLAY</span></span><strong>GameOverと、Rでの再開を確かめる</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>Game OverとRを試す</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>コード再読込とRを区別。音・フラッシュだけで判定しない</dd></div></dl></li><li id="month9-1-step-month9-1-transfer" data-slide-alias="month9-1-transfer"><h5><a href="/robot-python-game/instructor/month9-1-transfer" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P10</b><span data-page-kind="work">WORK</span></span><strong>敵2へ同じ判定を使う</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>[9-1-2]敵2へ転用</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>相手名と共通結果を問う。準備済みの条件はそのまま使わせる</dd></div></dl></li><li id="month9-1-step-month9-1-enemy3" data-slide-alias="month9-1-enemy3"><h5><a href="/robot-python-game/instructor/month9-1-enemy3" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P11</b><span data-page-kind="work">WORK</span></span><strong>敵3との当たり判定</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>[9-1-3]敵3へ転用</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>相手を先に選ばせ、困ればHint。参考例やHintを使ってよい</dd></div></dl></li><li id="month9-1-step-month9-1-compare" data-slide-alias="month9-1-compare"><h5><a href="/robot-python-game/instructor/month9-1-compare" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P12</b><span data-page-kind="concept">CONCEPT</span></span><strong>判定と、状態の変更を分ける</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>判定だけ／状態変更ありを比較</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>先に結果を予想し、自分の条件と代入へ結ぶ</dd></div></dl></li><li id="month9-1-step-month9-1-test" data-slide-alias="month9-1-test"><h5><a href="/robot-python-game/instructor/month9-1-test" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P13</b><span data-page-kind="tune">TUNE</span></span><strong>3体に、別々に当たって確かめる</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>3体に別々に当たって確認</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>出現順・初期yを講師と照合。自分での不具合調査能力をMUSTにしない</dd></div></dl></li><li id="month9-1-step-month9-1-review" data-slide-alias="month9-1-review"><h5><a href="/robot-python-game/instructor/month9-1-review" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P14</b><span data-page-kind="review">REVIEW</span></span><strong>判定・状態・画面の結果をつなぐ</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>四角→判定→画面を対応</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>自分の条件1つと結果を短く示してもらう</dd></div></dl></li><li id="month9-1-step-month9-1-reflect" data-slide-alias="month9-1-reflect"><h5><a href="/robot-python-game/instructor/month9-1-reflect" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P15</b><span data-page-kind="reflect">REFLECT</span></span><strong>当たり判定の仕組みを、言葉に残す</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>対応を説明し保存</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>Driveの位置・支援・未実施SHOULDを記録し、itemへ接続</dd></div></dl></li><li id="month9-1-step-month9-1-challenge" data-slide-alias="month9-1-challenge"><h5><a href="/robot-python-game/instructor/month9-1-challenge" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>O1</b><span data-page-kind="challenge">CHALLENGE</span></span><strong>四角を作ってから、何を調べる？</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>Rect作成後の処理を読む</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>MUST後の読解。新たな入力やbool講義は追加しない</dd></div></dl></li><li id="month9-1-step-month9-1-quiz" data-slide-alias="month9-1-quiz"><h5><a href="/robot-python-game/instructor/month9-1-quiz" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>O2</b><span data-page-kind="quiz">QUIZ</span></span><strong>当たり判定と、結果を確かめよう</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>判定の理由を選び直す</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>全8問・点数・ランキングを必須にしない</dd></div></dl></li></ol></div></details></section><section class="reading-subsection"><h4>講師のポイント</h4><blockquote class="reading-teaching-cue"><p>「四角が重なったか調べ、ぶつかった時の結果を書きます。四角を作る基盤は読むだけです。」</p></blockquote><ul><li>四角を作る処理は読むだけ、判定と結果は生徒が書く処理として分けます</li><li>敵1から敵2・敵3へ進むにつれて支援を減らします</li><li>準備済みのnot／andはそのまま使い、論理演算の詳しい説明はしません。</li></ul><details class="reading-details guide-prerequisite"><summary>前提を確認<span class="reading-disclosure" aria-hidden="true">＋</span></summary><div class="reading-detail-body"><ul><li>ifの条件と、結果を変える代入を見たことがある</li><li>プレイヤーと敵の座標・移動を確認できる</li><li>randomが未実施でも進められます。</li></ul></div></details></section><section class="reading-subsection reading-specific-support"><h4>Lesson固有の支援</h4><ul class="guide-specific-cases"><li><h5>見た目では離れている</h5><p>透明な余白もRectに含まれることを画像と比べて示します</p></li><li><h5>ぶつかっても終了しない</h5><p>「条件のあと、何を変える？」と聞き、if内の代入を確認します</p></li><li><h5>敵2・3で終了しない</h5><p>相手のRect名と初期y位置・出現順を確認し、1体ずつ試させます。</p></li></ul></section><section class="reading-subsection reading-completion print-friendly"><h4>Lesson完了</h4><ul><li>どの敵に当たってもGame Overになり、Rで再開できる。</li><li>条件と結果の行を1組示し、保存できる。音・フラッシュの有無だけでは判定しません。</li></ul></section><section class="reading-subsection reading-handoff"><h4>次回へ残す</h4><ul><li>3体の敵との接触で終了するファイルをDriveへ保存させます</li><li>未確認の敵と支援した箇所を記録します</li><li>次回は同じ接触判定をアイテムへ使い直します。</li></ul></section><section class="reading-subsection"><h4>参照先</h4><nav class="reading-lesson-links" aria-label="Month9-1の参照先"><a href="/robot-python-game/instructor/month9-1/" target="_blank" rel="noopener noreferrer">Lesson Slide<span class="guide-link-arrow" aria-hidden="true"> ↗</span></a><a href="/robot-python-game/instructor/reference/">Reference<span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></nav></section></div></details></section><section class="reading-lesson guide-refined guide-reading-v2" aria-labelledby="month9-2-title"><details id="month9-2" class="reading-details reading-lesson-toggle"><summary><span class="reading-summary-copy"><span class="reading-summary-heading"><span id="month9-2-title" class="reading-summary-id">Month9-2</span><strong>アイテムを取る</strong></span><span class="reading-summary-fact reading-summary-goal"><b>目的</b><span>敵との接触判定をアイテムへ使い直し、加点・再配置をつないでGame1を完成させる。</span></span><span class="reading-summary-fact reading-summary-must"><b>MUST</b><span>item条件 / score +100 / x/y random再配置と標準完成確認</span></span><span class="reading-summary-fact reading-summary-meta"><b>時間</b><span>目安80分（予備10分を含む）／授業80分</span></span></span><span class="reading-disclosure" aria-hidden="true">＋</span></summary><div class="reading-detail-body"><section class="reading-subsection reading-goal"><h4>今日の目的</h4><p>敵との接触判定をアイテムへ使い直し、加点・再配置をつないでGame1を完成させる。</p></section><section class="reading-subsection reading-worksheet print-friendly"><h4>Worksheet</h4><a href="/robot-python-game/worksheets/month9-2-game-dev-log.pdf" target="_blank" rel="noopener noreferrer">GAME DEV LOG 02｜PDFを開く<span class="guide-link-arrow" aria-hidden="true"> ↗</span></a><p>標準完成後に3コマを確認 → コードと画面を線で結ぶ → 実コードと照合。</p></section><section class="guide-timeline print-friendly reading-subsection"><h4>今日の流れ・時間 <small>80分・目安</small></h4><ol style="--phase-count:6"><li class="guide-phase-explain"><span class="guide-phase-number">01</span><h5><a href="#month9-2-step-month9-2">導入</a></h5><p class="guide-phase-time">5<small>分</small></p><p class="guide-phase-action">itemが残り0点と確認</p></li><li class="guide-phase-work"><span class="guide-phase-number">02</span><h5><a href="#month9-2-step-month9-2-collision">条件・得点</a></h5><p class="guide-phase-time">20<small>分</small></p><p class="guide-phase-action">敵判定を使い直し100点加算</p></li><li class="guide-phase-work"><span class="guide-phase-number">03</span><h5><a href="#month9-2-step-month9-2-random">再配置</a></h5><p class="guide-phase-time">15<small>分</small></p><p class="guide-phase-action">横・縦のrandomを使う</p></li><li class="guide-phase-play"><span class="guide-phase-number">04</span><h5><a href="#month9-2-step-month9-2-system">通し確認</a></h5><p class="guide-phase-time">25<small>分</small></p><p class="guide-phase-action">連続取得とR。調整は追加</p></li><li class="guide-phase-reflect"><span class="guide-phase-number">05</span><h5><a href="#month9-2-step-month9-2-review">まとめ</a></h5><p class="guide-phase-time">5<small>分</small></p><p class="guide-phase-action">自分の4行を説明し保存</p></li><li class="guide-phase-buffer"><span class="guide-phase-number">06</span><h5>予備</h5><p class="guide-phase-time">10<small>分</small></p><p class="guide-phase-action">個別支援・進行の調整</p></li></ol></section><section class="reading-subsection"><h4>取り組む範囲</h4><div class="reading-criteria guide-criteria"><section class="reading-subsection reading-must"><h5><span class="guide-badge guide-badge-must">MUST</span></h5><ul><li>item条件</li><li>score +100</li><li>x/y random再配置と標準完成確認</li></ul></section><section class="reading-subsection reading-should"><h5><span class="guide-badge guide-badge-should">SHOULD</span></h5><ul><li>自分で動作確認・不具合調査</li><li>速度等のバランス比較</li></ul></section><section class="reading-subsection reading-optional"><h5><span class="guide-badge guide-badge-challenge">CHALLENGE</span></h5><ul><li>個人コピーで得点・難易度の発展</li><li>READ／Quiz</li></ul></section></div></section><section class="reading-subsection"><h4>今日扱う内容</h4><dl class="reading-concept-list"><div class="reading-concept-transfer"><dt><span class="guide-badge guide-badge-transfer">TRANSFER</span><small>使い直す</small></dt><dd>敵との接触判定、scoreへの加点、横と縦のrandom再配置を使い直す。</dd></div><div class="reading-concept-read-only"><dt><span class="guide-badge guide-badge-read-only">READ ONLY</span><small>読む</small></dt><dd>初期位置の例と、当たり判定に使う四角を読む。</dd></div><div class="reading-concept-system"><dt><span class="guide-badge guide-badge-system">SYSTEM</span><small>触らない</small></dt><dd>点数表示・音・演出は準備済み。生徒が書くのは赤い位置の4行。</dd></div></dl></section><section class="reading-subsection"><h4>Slideの進め方</h4><details class="reading-details guide-slide-detail"><summary>全Slideの進行・講師の動きを開く<span class="reading-disclosure" aria-hidden="true">＋</span></summary><div class="reading-detail-body"><ol class="guide-cues"><li id="month9-2-step-month9-2" data-slide-alias="month9-2"><h5><a href="/robot-python-game/instructor/month9-2" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P1</b><span data-page-kind="overview">OVERVIEW</span></span><strong>アイテムを取る</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>今日つなぐ3つの結果を見る</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>敵の接触とitem取得では結果が違う、と目的を絞る</dd></div></dl></li><li id="month9-2-step-month9-2-flow" data-slide-alias="month9-2-flow"><h5><a href="/robot-python-game/instructor/month9-2-flow" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P2</b><span data-page-kind="index">INDEX</span></span><strong>今日の流れ</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>3つのWORKと保存への順を確認</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>TUNE・CHALLENGEは省略可。scoreの1行はまず自分で考えてもらう</dd></div></dl></li><li id="month9-2-step-month9-2-setup" data-slide-alias="month9-2-setup"><h5><a href="/robot-python-game/instructor/month9-2-setup" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P3</b><span data-page-kind="setup">SETUP</span></span><strong>month9-2.pyを開いて実行する</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>自分のDriveの今日のファイルを起動</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>敵はGame Over、itemは残りscore0が正常。別Lessonを開いていないか確認</dd></div></dl></li><li id="month9-2-step-month9-2-collision" data-slide-alias="month9-2-collision"><h5><a href="/robot-python-game/instructor/month9-2-collision" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P4</b><span data-page-kind="concept">CONCEPT</span></span><strong>比べる相手を、敵からitemへ</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>どのRectを替えるか予想する</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>相手だけを替える転用を確認。Rectの一般講義は繰り返さない</dd></div></dl></li><li id="month9-2-step-month9-2-item-work" data-slide-alias="month9-2-item-work"><h5><a href="/robot-python-game/instructor/month9-2-item-work" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P5</b><span data-page-kind="work">WORK</span></span><strong>itemに触れた時だけ、処理する</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>[9-2-1]の仮条件を置換する</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>灰色の書き始めとコロンはそのまま。接触の式だけ考えさせ、消える・0点を確認</dd></div></dl></li><li id="month9-2-step-month9-2-score" data-slide-alias="month9-2-score"><h5><a href="/robot-python-game/instructor/month9-2-score" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P6</b><span data-page-kind="concept">CONCEPT</span></span><strong>今のscoreから、次の値を作る</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>今200点なら次はいくつか予想</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>更新の意味だけを説明。完成式はまだ見せず、次のWORKで考えさせる</dd></div></dl></li><li id="month9-2-step-month9-2-score-work" data-slide-alias="month9-2-score-work"><h5><a href="/robot-python-game/instructor/month9-2-score-work" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P7</b><span data-page-kind="work">WORK</span></span><strong>scoreを更新する1行を書こう</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>[9-2-2]に加点1行を書く</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>まず生徒自身に1行考えさせる。1回100点・itemは戻らない段階を確認</dd></div></dl></li><li id="month9-2-step-month9-2-random" data-slide-alias="month9-2-random"><h5><a href="/robot-python-game/instructor/month9-2-random" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P8</b><span data-page-kind="concept">CONCEPT</span></span><strong>randomを、横と縦へ使い直す</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>横と縦の範囲を図で照合</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>randomが初めての生徒には初期位置の例を案内。書き方の暗記を要求しない</dd></div></dl></li><li id="month9-2-step-month9-2-random-work" data-slide-alias="month9-2-random-work"><h5><a href="/robot-python-game/instructor/month9-2-random-work" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P9</b><span data-page-kind="work">WORK</span></span><strong>取ったitemを、画面内へ戻す</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>[9-2-3]へx/yの2行を転用</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>xは0〜736、yは60〜536。同じif内とインデントを確認し、複数回取得へ</dd></div></dl></li><li id="month9-2-step-month9-2-system" data-slide-alias="month9-2-system"><h5><a href="/robot-python-game/instructor/month9-2-system" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P10</b><span data-page-kind="concept">CONCEPT</span></span><strong>自分のコードと、SYSTEMの役割を分ける</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>自分の4行と表示・演出を分ける</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>加点は生徒、表示・SE等は基盤。準備済み処理の内部は教えない</dd></div></dl></li><li id="month9-2-step-month9-2-play" data-slide-alias="month9-2-play"><h5><a href="/robot-python-game/instructor/month9-2-play" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P11</b><span data-page-kind="play">PLAY</span></span><strong>取る→増える→移るを確かめる</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>連続取得・敵接触・Rを試す</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>高得点を要求せず、一連の標準動作と初期化を一緒に確認</dd></div></dl></li><li id="month9-2-step-month9-2-tune" data-slide-alias="month9-2-tune"><h5><a href="/robot-python-game/instructor/month9-2-tune" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P12</b><span data-page-kind="tune">TUNE</span></span><strong>困った時・調整したい時に試す</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>必要な修正や速さ1設定を比較</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>自分での不具合調査・調整はSHOULD。全員のエラーや15分消費を要求しない</dd></div></dl></li><li id="month9-2-step-month9-2-review" data-slide-alias="month9-2-review"><h5><a href="/robot-python-game/instructor/month9-2-review" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P13</b><span data-page-kind="review">REVIEW</span></span><strong>取る・増える・移るをつなぐ</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>3処理を自分の4行と対応</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>条件→更新→位置を指してもらう。SYSTEMを本人の実装と数えない</dd></div></dl></li><li id="month9-2-step-month9-2-reflect" data-slide-alias="month9-2-reflect"><h5><a href="/robot-python-game/instructor/month9-2-reflect" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P14</b><span data-page-kind="reflect">REFLECT</span></span><strong>自分の4行と、ゲームの結果を残す</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>短く説明し標準を保存</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>Driveの保存先を確認。未実施SHOULDと使った支援を記録する</dd></div></dl></li><li id="month9-2-step-month9-2-challenge" data-slide-alias="month9-2-challenge"><h5><a href="/robot-python-game/instructor/month9-2-challenge" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>O1</b><span data-page-kind="challenge">CHALLENGE</span></span><strong>今の値を使うと、何が残る？</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>余裕があれば更新コードを読む</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>MUST後のみ。解けなくても未達にせず、新機能入力は追加しない</dd></div></dl></li><li id="month9-2-step-month9-2-quiz" data-slide-alias="month9-2-quiz"><h5><a href="/robot-python-game/instructor/month9-2-quiz" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>O2</b><span data-page-kind="quiz">QUIZ</span></span><strong>item取得と、値の更新を確かめよう</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>選んで理由を確認する</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>全問必須にせず、必要なときだけ既習コードへ戻す</dd></div></dl></li></ol></div></details></section><section class="reading-subsection"><h4>講師のポイント</h4><blockquote class="reading-teaching-cue"><p>「条件→点数→次の位置をつなぎます。書く4行はひとまとまり、表示と音はSYSTEMの担当です。」</p></blockquote><ul><li>接触→加点→再配置の順で、赤い記述位置を案内します</li><li>scoreの完成式を見せる前に、生徒自身に1行考えさせます</li><li>接触だけ・加点までの段階では、アイテムが消えたままでも正常です。</li></ul><details class="reading-details guide-prerequisite"><summary>前提を確認<span class="reading-disclosure" aria-hidden="true">＋</span></summary><div class="reading-detail-body"><ul><li>ifの内側に結果の処理を書くと分かる</li><li>colliderectで相手のRectを調べたことがある</li><li>scoreは数値を持つ変数だと分かる。randomが未実施なら、初期位置の例やReferenceを案内します。</li></ul></div></details></section><section class="reading-subsection reading-specific-support"><h4>Lesson固有の支援</h4><ul class="guide-specific-cases"><li><h5>アイテムが取れない</h5><p>相手のRect名と、仮の条件を書き換えたかを確認します</p></li><li><h5>得点が増えない</h5><p>今のscoreに100を足しているか確認します</p></li><li><h5>アイテムが戻らない</h5><p>加点までなら正常です。再配置を書いた後は、同じif内のx/y・範囲・インデントを確認します。</p></li></ul><details class="reading-details guide-specific-note"><summary>段階確認<span class="reading-disclosure" aria-hidden="true">＋</span></summary><div class="reading-detail-body"><ol><li>未編集ではアイテムが残り、scoreは0です。</li><li>接触判定だけを書くとアイテムが消え、scoreは0で演出も出ません。</li><li>加点まで書くと1回100点増え、演出が出ますが、アイテムは消えたままです。</li><li>再配置まで書くと繰り返し取れます。</li><li>最後にGame Over後にRを押し、score・位置・演出が初期状態へ戻るか確認します。</li><li>加点までの段階では、繰り返し取得できなくても正常です。</li></ol></div></details><details class="reading-details guide-specific-note"><summary>Lesson別準備<span class="reading-disclosure" aria-hidden="true">＋</span></summary><div class="reading-detail-body"><p>GAME DEV LOG 02を用意します。完成後のPLAY〜REVIEWで3コマを見せ、コードと画面の変化を線で結ばせます。</p><p>その後、生徒の実コードと照合します。点数の問題や位置の観察、記述課題は追加しません。</p></div></details></section><section class="reading-subsection reading-completion print-friendly"><h4>Lesson完了</h4><ul><li>アイテムを取るごとに100点増え、再配置後も繰り返し取れる。</li><li>敵3体との接触・Game Over・Rでの再開を確認できる。</li><li>条件・加点・位置の行を示し、完成版を保存できる。高得点や支援なしの不具合調査は求めません。</li></ul></section><section class="reading-subsection reading-handoff"><h4>次回へ残す</h4><ul><li>完成版を生徒のDriveへ保存させます</li><li>完成した段階と未実施のSHOULDを記録します</li><li>次回は元を残したコピーで改造します。</li></ul></section><section class="reading-subsection"><h4>参照先</h4><nav class="reading-lesson-links" aria-label="Month9-2の参照先"><a href="/robot-python-game/instructor/month9-2/" target="_blank" rel="noopener noreferrer">Lesson Slide<span class="guide-link-arrow" aria-hidden="true"> ↗</span></a><a href="/robot-python-game/instructor/reference/">Reference<span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></nav></section></div></details></section><section class="reading-lesson guide-refined guide-reading-v2" aria-labelledby="month9-3-title"><details id="month9-3" class="reading-details reading-lesson-toggle"><summary><span class="reading-summary-copy"><span class="reading-summary-heading"><span id="month9-3-title" class="reading-summary-id">Month9-3</span><strong>ゲームを改造する</strong></span><span class="reading-summary-fact reading-summary-goal"><b>目的</b><span>完成ゲームの動きとコードを対応させ、1か所以上改造する。</span></span><span class="reading-summary-fact reading-summary-must"><b>MUST</b><span>分析・主要処理とコードを照合 / 1箇所以上改造 / 別保存</span></span><span class="reading-summary-fact reading-summary-meta"><b>時間</b><span>目安80分（予備5分を含む）／授業80分</span></span></span><span class="reading-disclosure" aria-hidden="true">＋</span></summary><div class="reading-detail-body"><section class="reading-subsection reading-goal"><h4>今日の目的</h4><p>完成ゲームの動きとコードを対応させ、1か所以上改造する。元のゲームを残し、変更内容と結果を短く説明する。</p></section><section class="reading-subsection reading-worksheet print-friendly"><h4>Worksheet</h4><a href="/robot-python-game/worksheets/month9-3-game-dev-log.pdf" target="_blank" rel="noopener noreferrer">GAME DEV LOG 03｜PDFを開く<span class="guide-link-arrow" aria-hidden="true"> ↗</span></a><p>改造前に計画 → 改造後に結果 → 共有時に発表メモ → 共有後に感想・次の案。</p></section><section class="guide-timeline print-friendly reading-subsection"><h4>今日の流れ・時間 <small>80分・目安</small></h4><ol style="--phase-count:5"><li class="guide-phase-explain"><span class="guide-phase-number">01</span><h5><a href="#month9-3-step-month9-3">全体で共有</a></h5><p class="guide-phase-time">15<small>分</small></p><p class="guide-phase-action">目的・対応図・相談を確認</p></li><li class="guide-phase-work"><span class="guide-phase-number">02</span><h5><a href="#month9-3-step-month9-3-start">各自で改造</a></h5><p class="guide-phase-time">45<small>分</small></p><p class="guide-phase-action">コピーで1か所の変更。追加は任意</p></li><li class="guide-phase-play"><span class="guide-phase-number">03</span><h5><a href="#month9-3-step-month9-3-tune">遊んで比較</a></h5><p class="guide-phase-time">10<small>分</small></p><p class="guide-phase-action">結果を見て必要な時だけ修正</p></li><li class="guide-phase-reflect"><span class="guide-phase-number">04</span><h5><a href="#month9-3-step-month9-3-reflect">説明・保存</a></h5><p class="guide-phase-time">5<small>分</small></p><p class="guide-phase-action">変更を短く説明し別保存</p></li><li class="guide-phase-buffer"><span class="guide-phase-number">05</span><h5>予備</h5><p class="guide-phase-time">5<small>分</small></p><p class="guide-phase-action">個別支援・進行の調整</p></li></ol></section><section class="reading-subsection"><h4>取り組む範囲</h4><div class="reading-criteria guide-criteria"><section class="reading-subsection reading-must"><h5><span class="guide-badge guide-badge-must">MUST</span></h5><ul><li>分析・主要処理とコードを照合</li><li>1箇所以上改造</li><li>別保存</li></ul></section><section class="reading-subsection reading-should"><h5><span class="guide-badge guide-badge-should">SHOULD</span></h5><ul><li>体験変化の説明・30秒共有</li><li>追加変更／画像差し替え</li></ul></section><section class="reading-subsection reading-optional"><h5><span class="guide-badge guide-badge-challenge">CHALLENGE</span></h5><ul><li>自作ドット絵</li><li>複数箇所・既習追加機能／Quiz</li></ul></section></div></section><section class="reading-subsection"><h4>今日扱う内容</h4><dl class="reading-concept-list"><div class="reading-concept-new"><dt><span class="guide-badge guide-badge-new">NEW</span><small>新しく扱う</small></dt><dd>AIへの相談と、答えを丸ごと作らせることを区別する。Pythonの新しい文法は増やさない。</dd></div><div class="reading-concept-transfer"><dt><span class="guide-badge guide-badge-transfer">TRANSFER</span><small>使い直す</small></dt><dd>目的を決め、場所を探し、1か所ずつ、変更前の予想と結果を比べる。</dd></div><div class="reading-concept-read-only"><dt><span class="guide-badge guide-badge-read-only">READ ONLY</span><small>読む</small></dt><dd>主要処理と画像名を読む。scoreの100点加算と＋100表示は変更しない。</dd></div></dl></section><section class="reading-subsection"><h4>Slideの進め方</h4><details class="reading-details guide-slide-detail"><summary>全Slideの進行・講師の動きを開く<span class="reading-disclosure" aria-hidden="true">＋</span></summary><div class="reading-detail-body"><ol class="guide-cues"><li id="month9-3-step-month9-3" data-slide-alias="month9-3"><h5><a href="/robot-python-game/instructor/month9-3" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P1</b><span data-page-kind="overview">OVERVIEW</span></span><strong>ゲームを改造する</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>目的のある1か所の変更を見通す</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>共有15分→各自作業55分→振り返り・保存5分を案内。実測とは区別</dd></div></dl></li><li id="month9-3-step-month9-3-flow" data-slide-alias="month9-3-flow"><h5><a href="/robot-python-game/instructor/month9-3-flow" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P2</b><span data-page-kind="index">INDEX</span></span><strong>今日の流れ</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>共有と各自作業の入口を見る</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>SHOULDを省いても最初の速さ変更→TUNE→振り返り・保存へ進めると確認</dd></div></dl></li><li id="month9-3-step-month9-3-play" data-slide-alias="month9-3-play"><h5><a href="/robot-python-game/instructor/month9-3-play" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P3</b><span data-page-kind="play">PLAY</span></span><strong>遊んで、変えたいところを1つ決める</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>完成版で変更目的を考える</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>前の分析記録を使い、何をなぜ変えるか短く問う</dd></div></dl></li><li id="month9-3-step-month9-3-map" data-slide-alias="month9-3-map"><h5><a href="/robot-python-game/instructor/month9-3-map" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P4</b><span data-page-kind="concept">CONCEPT</span></span><strong>どこを変えると、何が変わる？</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>処理・ファイル・画像を照合</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>player_speed等の実在箇所を指し、SYSTEM内は課さない</dd></div></dl></li><li id="month9-3-step-month9-3-purpose" data-slide-alias="month9-3-purpose"><h5><a href="/robot-python-game/instructor/month9-3-purpose" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P5</b><span data-page-kind="concept">CONCEPT</span></span><strong>「こうしたい」から、変える場所を選ぶ</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>目的から変更場所を選ぶ</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>自分と敵のどちらを変えるか問い、代わりに決めない</dd></div></dl></li><li id="month9-3-step-month9-3-process" data-slide-alias="month9-3-process"><h5><a href="/robot-python-game/instructor/month9-3-process" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P6</b><span data-page-kind="concept">CONCEPT</span></span><strong>1か所ずつ変えて、結果を比べる</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>1か所の変更ずつの比較を読む</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>元値・元フォルダを残し、複数同時変更を避ける</dd></div></dl></li><li id="month9-3-step-month9-3-ai" data-slide-alias="month9-3-ai"><h5><a href="/robot-python-game/instructor/month9-3-ai" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P7</b><span data-page-kind="concept">CONCEPT</span></span><strong>AIは何に使える？</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>相談の用途と丸投げの違いを読む</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>本人の仮説を先に聞く。AI操作は任意、回答は本人が実行して確かめる</dd></div></dl></li><li id="month9-3-step-month9-3-ai-question" data-slide-alias="month9-3-ai-question"><h5><a href="/robot-python-game/instructor/month9-3-ai-question" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P8</b><span data-page-kind="concept">CONCEPT</span></span><strong>AIへどう相談する？</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>5つの情報を仮の相談例と対応させる</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>目的・試したこと・状態・予想・質問を具体化。結果を捏造せず、回答を試して必要なら再相談</dd></div></dl></li><li id="month9-3-step-month9-3-start" data-slide-alias="month9-3-start"><h5><a href="/robot-python-game/instructor/month9-3-start" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P9</b><span data-page-kind="setup">SETUP</span></span><strong>ここからは、自分のペースで進む</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>各自の進め方へ切り替える</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>コピー→速さ変更→TUNE→振り返り・保存の順を確認し、巡回に切り替える</dd></div></dl></li><li id="month9-3-step-month9-3-setup" data-slide-alias="month9-3-setup"><h5><a href="/robot-python-game/instructor/month9-3-setup" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P10</b><span data-page-kind="setup">SETUP</span></span><strong>フォルダごとコピーし、自分用を開く</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>本人のDrive内でフォルダごとコピー</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>元の作品を残すための複製。Python名・assets構成は維持</dd></div></dl></li><li id="month9-3-step-month9-3-guided" data-slide-alias="month9-3-guided"><h5><a href="/robot-python-game/instructor/month9-3-guided" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P11</b><span data-page-kind="work">WORK</span></span><strong>プレイヤーの速さを、自分で選ぶ</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>自分の速さを選んで変更</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>一律値を指定せず理由を問う。Hintを使っても成功</dd></div></dl></li><li id="month9-3-step-month9-3-choice" data-slide-alias="month9-3-choice"><h5><a href="/robot-python-game/instructor/month9-3-choice" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P12</b><span data-page-kind="work">WORK</span></span><strong>目的から、次の変更を1つ選ぶ</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>余裕があれば次の変更を選ぶ</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>追加の変更はSHOULD。画像選択は次ページへ進み二重計時しない</dd></div></dl></li><li id="month9-3-step-month9-3-assets" data-slide-alias="month9-3-assets"><h5><a href="/robot-python-game/instructor/month9-3-assets" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P13</b><span data-page-kind="work">WORK</span></span><strong>画像を変えて、見た目を変える</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>余裕があれば1画像を差し替える</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>元のPNGを残す。同名置換を勧め、自作絵や別名は任意</dd></div></dl></li><li id="month9-3-step-month9-3-tune" data-slide-alias="month9-3-tune"><h5><a href="/robot-python-game/instructor/month9-3-tune" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P14</b><span data-page-kind="tune">TUNE</span></span><strong>遊んで、必要なら1か所だけ直す</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>結果を試し、必要なら1修正</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>問題のない生徒にエラーを要求せず、確認後振り返り・保存へ</dd></div></dl></li><li id="month9-3-step-month9-3-reflect" data-slide-alias="month9-3-reflect"><h5><a href="/robot-python-game/instructor/month9-3-reflect" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>P15</b><span data-page-kind="reflect">REFLECT</span></span><strong>自分の改造を、30秒で伝える</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>変更・結果を短く説明し別保存</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>30秒共有はSHOULD。時間不足でも短い対応確認と保存は残す</dd></div></dl></li><li id="month9-3-step-month9-3-challenge" data-slide-alias="month9-3-challenge"><h5><a href="/robot-python-game/instructor/month9-3-challenge" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>O1</b><span data-page-kind="challenge">CHALLENGE</span></span><strong>2つの変更で、遊びやすさはどう変わる？</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>余裕があれば2つの変更を比較</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>MUST後の発展。新規機能や全体同時実施を課さない</dd></div></dl></li><li id="month9-3-step-month9-3-quiz" data-slide-alias="month9-3-quiz"><h5><a href="/robot-python-game/instructor/month9-3-quiz" target="_blank" rel="noopener noreferrer"><span class="guide-page-meta"><b>O2</b><span data-page-kind="quiz">QUIZ</span></span><strong>目的に合う変更場所を選ぼう</strong><span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></h5><dl><div><dt>生徒</dt><dd>目的と場所の理由を選ぶ</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>全問を課さず、AI利用の有無を点数にしない</dd></div></dl></li></ol></div></details></section><section class="reading-subsection"><h4>講師のポイント</h4><blockquote class="reading-teaching-cue"><p>「最初は一緒に見通しを確認し、その後は自分のコピーで進めます。AIなしでもできます。」</p></blockquote><ul><li>最初の約15分で見通しを説明し、その後は巡回します</li><li>元の完成版を残し、生徒のDrive内のコピーだけを改造させます</li><li>変更した1か所の確認と別保存を優先します。追加の変更や画像差し替えは全員に求めません。</li></ul><details class="reading-details guide-prerequisite"><summary>前提を確認<span class="reading-disclosure" aria-hidden="true">＋</span></summary><div class="reading-detail-body"><ul><li>Game1の完成版が動く</li><li>保存とESCでの終了・再実行ができる</li><li>複製に不安がある生徒には、操作のReferenceを案内します。</li></ul></div></details></section><section class="reading-subsection reading-specific-support"><h4>Lesson固有の支援</h4><ul class="guide-specific-cases"><li><h5>変更場所が見つからない</h5><p>目的と対応図・検索文字列を一緒に確認します。作業中も図へ戻るよう案内します</p></li><li><h5>原因が分からない</h5><p>元の値を確認し、変更を1つに戻します。2つ目の変更・画像差し替えはSHOULDなので省略できます</p></li><li><h5>AI・画像ツールが使えない</h5><p>Hint・講師・準備済みの画像で対応します。自作絵やゲーム全体の生成は求めません。</p></li></ul><details class="reading-details guide-specific-note"><summary>改造の境界<span class="reading-disclosure" aria-hidden="true">＋</span></summary><div class="reading-detail-body"><p>元のゲームを残し、コピー内だけを変更させます。最初はplayer_speed、追加はenemy_speed・取得後のitem_xの最小値・player／enemy画像です。</p><p>scoreの100点加算と＋100表示は読むだけで、変更させません。画像は同じファイル名での置き換えを勧めます。</p><p>別名にする場合はReferenceを案内し、画像パスの文字列だけを合わせます。元PNGを残し、SYSTEM内の処理は実装させません。</p></div></details><details class="reading-details guide-specific-note"><summary>共有の扱い<span class="reading-disclosure" aria-hidden="true">＋</span></summary><div class="reading-detail-body"><p>目的・変更場所・結果を、隣の生徒やペアで30秒ずつ共有させます。3〜4人の小グループでもよく、全員の登壇は求めません。</p><p>時間が足りなければ、講師との短い確認と保存を優先します。30秒共有をしなくても、MUST未達にはしません。</p></div></details><details class="reading-details guide-specific-note"><summary>Lesson別準備<span class="reading-disclosure" aria-hidden="true">＋</span></summary><div class="reading-detail-body"><p>画像を変える生徒には元画像と保存先を用意します。素材32×32と表示64×64の違いを確認します。</p><p>AI・画像ツールが使えなくても進められます。GAME DEV LOG 03は改造前に計画・変更場所、改造後に結果、共有時に発表メモ、共有後に感想・次の案を残させます。</p><p>記入は既存の活動内で行い、台本には前の記録を使わせます。共有・感想・次の案は省略でき、全欄記入や追加改造は求めません。</p></div></details></section><section class="reading-subsection reading-completion print-friendly"><h4>Lesson完了</h4><ul><li>生徒が自分のコピーで変更した1か所とその結果を確認し、元のゲームと別々に保存できる。</li><li>変更箇所を指して一言説明できる。詳しい説明や30秒の発表はSHOULDです。</li></ul></section><section class="reading-subsection reading-handoff"><h4>次回へ残す</h4><ul><li>元の完成版と改造したコピーをDriveへ別々に保存させます</li><li>目的・変更場所・結果を記録します</li><li>次回はGame2で移動・判定・得点を使い直します。</li></ul></section><section class="reading-subsection"><h4>参照先</h4><nav class="reading-lesson-links" aria-label="Month9-3の参照先"><a href="/robot-python-game/instructor/month9-3/" target="_blank" rel="noopener noreferrer">Lesson Slide<span class="guide-link-arrow" aria-hidden="true"> ↗</span></a><a href="/robot-python-game/instructor/reference/">Reference<span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></nav></section></div></details></section></section><section class="reading-month"><h3 id="month10">Month10 <small>予定</small></h3><section class="reading-lesson guide-refined guide-reading-v2" aria-labelledby="month10-1-title"><details id="month10-1" class="reading-details reading-lesson-toggle"><summary><span class="reading-summary-copy"><span class="reading-summary-heading"><span id="month10-1-title" class="reading-summary-id">Month10-1 <small>教材は準備中</small></span><strong>Game1と比較しplayer操作を転用</strong></span><span class="reading-summary-fact reading-summary-goal"><b>目的</b><span>Game1とGame2を比べ、既習の移動と画面外制限を使い直す。</span></span><span class="reading-summary-fact reading-summary-must"><b>MUST</b><span>2ゲームの共通／違いを確認 / 既習移動と境界を転用 / 結果を確認・保存</span></span><span class="reading-summary-fact reading-summary-meta"><b>時間</b><span>目安80分（予備5分を含む）／授業80分・予定</span></span></span><span class="reading-disclosure" aria-hidden="true">＋</span></summary><div class="reading-detail-body"><section class="reading-subsection reading-goal"><h4>今日の目的</h4><p>Game1とGame2を比べ、既習の移動と画面外制限を使い直す。ゲームが変わっても使える処理を見つける。</p></section><section class="guide-timeline print-friendly reading-subsection"><h4>今日の流れ・時間 <small>80分・目安（予定）</small></h4><ol style="--phase-count:5"><li class="guide-phase-explain"><span class="guide-phase-number">01</span><h5>2ゲーム比較</h5><p class="guide-phase-time">15<small>分</small></p><p class="guide-phase-action">共通の移動と違いを見る</p></li><li class="guide-phase-work"><span class="guide-phase-number">02</span><h5>操作を転用</h5><p class="guide-phase-time">40<small>分</small></p><p class="guide-phase-action">移動・画面端を使い直す</p></li><li class="guide-phase-play"><span class="guide-phase-number">03</span><h5>動きを確認</h5><p class="guide-phase-time">15<small>分</small></p><p class="guide-phase-action">4方向と端を試す</p></li><li class="guide-phase-reflect"><span class="guide-phase-number">04</span><h5>説明・保存</h5><p class="guide-phase-time">5<small>分</small></p><p class="guide-phase-action">使った処理と結果を残す</p></li><li class="guide-phase-buffer"><span class="guide-phase-number">05</span><h5>予備</h5><p class="guide-phase-time">5<small>分</small></p><p class="guide-phase-action">個別支援・進行の調整</p></li></ol></section><section class="reading-subsection"><h4>取り組む範囲</h4><div class="reading-criteria guide-criteria"><section class="reading-subsection reading-must"><h5><span class="guide-badge guide-badge-must">MUST</span></h5><ul><li>2ゲームの共通／違いを確認</li><li>既習移動と境界を転用</li><li>結果を確認・保存</li></ul></section><section class="reading-subsection reading-should"><h5><span class="guide-badge guide-badge-should">SHOULD</span></h5><ul><li>速さを選び前後比較</li><li>必要な既習行を自分で探す</li></ul></section><section class="reading-subsection reading-optional"><h5><span class="guide-badge guide-badge-challenge">CHALLENGE</span></h5><ul><li>既習の移動設定アレンジ</li></ul></section></div></section><section class="reading-subsection"><h4>今日扱う内容</h4><dl class="reading-concept-list"><div class="reading-concept-transfer"><dt><span class="guide-badge guide-badge-transfer">TRANSFER</span><small>使い直す</small></dt><dd>Game1のplayer移動・画面端の制限を別ゲームへ使う。</dd></div><div class="reading-concept-read-only"><dt><span class="guide-badge guide-badge-read-only">READ ONLY</span><small>読む</small></dt><dd>完成デモの敵と弾を見る。まだ自分で作れなくてよい。</dd></div></dl></section><section class="reading-subsection"><h4>活動の進め方（予定）</h4><details class="reading-details guide-slide-detail"><summary>活動ごとの支援を開く<span class="reading-disclosure" aria-hidden="true">＋</span></summary><div class="reading-detail-body"><ol class="guide-cues"><li id="month10-1-step-activity-0" data-slide-alias=""><h5><strong>比較</strong></h5><dl><div><dt>生徒</dt><dd>2ゲームの共通点と違いを見る</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>移動・境界へ焦点を絞り、新しいゲーム全体の書き直しにしない</dd></div></dl></li><li id="month10-1-step-activity-1" data-slide-alias=""><h5><strong>転用</strong></h5><dl><div><dt>生徒</dt><dd>Game1の必要な行を探し移す</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>境界未経験者は完成例へ。Game2の実物に合わせて名前・値を確認</dd></div></dl></li><li id="month10-1-step-activity-2" data-slide-alias=""><h5><strong>動作確認</strong></h5><dl><div><dt>生徒</dt><dd>4方向と画面端を試す</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>予想した結果と実際の結果を照合。必要な修正は支援する</dd></div></dl></li><li id="month10-1-step-activity-3" data-slide-alias=""><h5><strong>保存と接続</strong></h5><dl><div><dt>生徒</dt><dd>既習のどこを使ったか示し保存</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>Driveの保存先を確認し、上移動を弾へつなぐ</dd></div></dl></li></ol></div></details></section><section class="reading-subsection"><h4>講師のポイント</h4><blockquote class="reading-teaching-cue"><p>「ゲームは変わっても、前の移動の仕組みを使えます。」</p></blockquote><ul><li>新しいゲームでも既習の処理が使えると示します</li><li>Game1の変数名・値をそのまま写さず、Game2に合わせて確認させます</li><li>画面外制限が未実施の生徒には完成例を用意します。</li></ul><details class="reading-details guide-prerequisite"><summary>前提を確認<span class="reading-disclosure" aria-hidden="true">＋</span></summary><div class="reading-detail-body"><ul><li>Game1で4方向移動と座標を見たことがある</li><li>画面外制限が未実施なら、完成例とReferenceを案内します。</li></ul></div></details></section><section class="reading-subsection reading-specific-support"><h4>Lesson固有の支援</h4><ul class="guide-specific-cases"><li><h5>全部を新しく書こうとする</h5><p>共通する動きを示し、Game1の該当行を探させます</p></li><li><h5>画面外制限が未経験</h5><p>完成例と、座標・キー・ifのReferenceを案内します</p></li><li><h5>名前・値をそのまま写す</h5><p>Game2の対象・変数名・大きさを一緒に確認します。</p></li></ul></section><section class="reading-subsection reading-completion print-friendly"><h4>Lesson完了</h4><ul><li>生徒が4方向へ動き、画面外へ出ないことを確認できる。</li><li>使い直した処理を示し、保存できる。</li></ul></section><section class="reading-subsection reading-handoff"><h4>次回へ残す</h4><ul><li>移動の処理を使い直したファイルをDriveへ保存させます</li><li>移動・画面外制限で参考にした行を記録します</li><li>次回は上へ動く処理を弾へ使い直します。</li></ul></section><section class="reading-subsection"><h4>参照先</h4><nav class="reading-lesson-links" aria-label="Month10-1の参照先"><span class="guide-meta">Lesson Slideは準備中です。</span><a href="/robot-python-game/instructor/reference/">Reference<span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></nav></section></div></details></section><section class="reading-lesson guide-refined guide-reading-v2" aria-labelledby="month10-2-title"><details id="month10-2" class="reading-details reading-lesson-toggle"><summary><span class="reading-summary-copy"><span class="reading-summary-heading"><span id="month10-2-title" class="reading-summary-id">Month10-2 <small>教材は準備中</small></span><strong>弾の有無を覚え1発を動かす</strong></span><span class="reading-summary-fact reading-summary-goal"><b>目的</b><span>bullet_activeで弾の有無を記録し、1発を上へ動かす。</span></span><span class="reading-summary-fact reading-summary-must"><b>MUST</b><span>発射位置と上移動 / bullet_activeのTrue／Falseを切替 / 画面外で弾を消し再発射</span></span><span class="reading-summary-fact reading-summary-meta"><b>時間</b><span>目安80分（予備5分を含む）／授業80分・予定</span></span></span><span class="reading-disclosure" aria-hidden="true">＋</span></summary><div class="reading-detail-body"><section class="reading-subsection reading-goal"><h4>今日の目的</h4><p>bullet_activeで弾の有無を記録し、1発を上へ動かす。弾が消えたら再び発射できるようにする。</p></section><section class="guide-timeline print-friendly reading-subsection"><h4>今日の流れ・時間 <small>80分・目安（予定）</small></h4><ol style="--phase-count:5"><li class="guide-phase-explain"><span class="guide-phase-number">01</span><h5>有無を知る</h5><p class="guide-phase-time">20<small>分</small></p><p class="guide-phase-action">弾がある・ないを比べる</p></li><li class="guide-phase-work"><span class="guide-phase-number">02</span><h5>1発を動かす</h5><p class="guide-phase-time">35<small>分</small></p><p class="guide-phase-action">発射・上移動・消滅をつなぐ</p></li><li class="guide-phase-play"><span class="guide-phase-number">03</span><h5>再発射を試す</h5><p class="guide-phase-time">15<small>分</small></p><p class="guide-phase-action">消えると次を出せるか確認</p></li><li class="guide-phase-reflect"><span class="guide-phase-number">04</span><h5>説明・保存</h5><p class="guide-phase-time">5<small>分</small></p><p class="guide-phase-action">状態と結果を残す</p></li><li class="guide-phase-buffer"><span class="guide-phase-number">05</span><h5>予備</h5><p class="guide-phase-time">5<small>分</small></p><p class="guide-phase-action">個別支援・進行の調整</p></li></ol></section><section class="reading-subsection"><h4>取り組む範囲</h4><div class="reading-criteria guide-criteria"><section class="reading-subsection reading-must"><h5><span class="guide-badge guide-badge-must">MUST</span></h5><ul><li>発射位置と上移動</li><li>bullet_activeのTrue／Falseを切替</li><li>画面外で弾を消し再発射</li></ul></section><section class="reading-subsection reading-should"><h5><span class="guide-badge guide-badge-should">SHOULD</span></h5><ul><li>状態と表示・更新の対応を説明</li><li>速度を比較</li></ul></section><section class="reading-subsection reading-optional"><h5><span class="guide-badge guide-badge-challenge">CHALLENGE</span></h5><ul><li>既習範囲の弾速度・見た目比較。複数弾にはしない</li></ul></section></div></section><section class="reading-subsection"><h4>今日扱う内容</h4><dl class="reading-concept-list"><div class="reading-concept-new"><dt><span class="guide-badge guide-badge-new">NEW</span><small>新しく扱う</small></dt><dd>bullet_activeで「今、弾が出ているか」を覚える。</dd></div><div class="reading-concept-transfer"><dt><span class="guide-badge guide-badge-transfer">TRANSFER</span><small>使い直す</small></dt><dd>座標更新・if・比較を、1発の移動と消滅へ使う。</dd></div><div class="reading-concept-system"><dt><span class="guide-badge guide-badge-system">SYSTEM</span><small>触らない</small></dt><dd>キー押下の取得と、同時に何発も出さない処理は準備済み。</dd></div></dl></section><section class="reading-subsection"><h4>活動の進め方（予定）</h4><details class="reading-details guide-slide-detail"><summary>活動ごとの支援を開く<span class="reading-disclosure" aria-hidden="true">＋</span></summary><div class="reading-detail-body"><ol class="guide-cues"><li id="month10-2-step-activity-0" data-slide-alias=""><h5><strong>弾の有無</strong></h5><dl><div><dt>生徒</dt><dd>弾がない／ある状態を照合</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>bullet_activeを今の弾の有無として短く説明</dd></div></dl></li><li id="month10-2-step-activity-1" data-slide-alias=""><h5><strong>発射と移動</strong></h5><dl><div><dt>生徒</dt><dd>1発を出し上へ動かす</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>入力の取得は準備済みの処理と伝え、発射と移動を試させる</dd></div></dl></li><li id="month10-2-step-activity-2" data-slide-alias=""><h5><strong>消滅と再発射</strong></h5><dl><div><dt>生徒</dt><dd>上へ出ると消え、再び発射できるか試す</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>各状態を確認。長押しや同時多発は標準にしない</dd></div></dl></li><li id="month10-2-step-activity-3" data-slide-alias=""><h5><strong>保存</strong></h5><dl><div><dt>生徒</dt><dd>状態と結果を短く示す</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>確認と保存を残し、任意の速度比較は省略可とする</dd></div></dl></li></ol></div></details></section><section class="reading-subsection"><h4>講師のポイント</h4><blockquote class="reading-teaching-cue"><p>「今、弾が出ているかを覚えます。出ている間は次の弾を増やしません。」</p></blockquote><ul><li>「今、弾が出ているか」に絞って説明します</li><li>発射→移動→消滅→再発射を順に確認します</li><li>キー入力の検出と同時発射の防止は、SYSTEMの準備済み処理として分けます。</li></ul></section><section class="reading-subsection reading-specific-support"><h4>Lesson固有の支援</h4><ul class="guide-specific-cases"><li><h5>弾の有無と座標を混同する</h5><p>「どこにあるか」と「出ているか」を画面で分けて示します</p></li><li><h5>再発射できない</h5><p>弾が消える時の状態を確認します</p></li><li><h5>長押しで多くの弾を出そうとする</h5><p>同時に1発だけと伝えます。入力検出と同時発射の防止はSYSTEMで支援します。</p></li></ul></section><section class="reading-subsection reading-completion print-friendly"><h4>Lesson完了</h4><ul><li>弾を同時に1発だけ上へ動かし、画面外で消えた後に再発射できる。</li><li>弾の有無と動きの関係を示し、保存できる。</li></ul></section><section class="reading-subsection reading-handoff"><h4>次回へ残す</h4><ul><li>同時に1発だけ出るファイルをDriveへ保存させます</li><li>弾の有無と再発射の確認結果を記録します</li><li>次回は弾と敵の接触を扱います。</li></ul></section><section class="reading-subsection"><h4>参照先</h4><nav class="reading-lesson-links" aria-label="Month10-2の参照先"><span class="guide-meta">Lesson Slideは準備中です。</span><a href="/robot-python-game/instructor/reference/">Reference<span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></nav></section></div></details></section><section class="reading-lesson guide-refined guide-reading-v2" aria-labelledby="month10-3-title"><details id="month10-3" class="reading-details reading-lesson-toggle"><summary><span class="reading-summary-copy"><span class="reading-summary-heading"><span id="month10-3-title" class="reading-summary-id">Month10-3 <small>教材は準備中</small></span><strong>弾の判定・加点・敵再配置</strong></span><span class="reading-summary-fact reading-summary-goal"><b>目的</b><span>Game1の接触判定・加点・randomを弾と敵へ使い直す。</span></span><span class="reading-summary-fact reading-summary-must"><b>MUST</b><span>bullet×enemy判定を転用 / score +100 / 敵random再配置と弾の消費</span></span><span class="reading-summary-fact reading-summary-meta"><b>時間</b><span>目安80分（予備5分を含む）／授業80分・予定</span></span></span><span class="reading-disclosure" aria-hidden="true">＋</span></summary><div class="reading-detail-body"><section class="reading-subsection reading-goal"><h4>今日の目的</h4><p>Game1の接触判定・加点・randomを弾と敵へ使い直す。1回の撃破で加点・敵の再配置・弾の消滅を行う。</p></section><section class="guide-timeline print-friendly reading-subsection"><h4>今日の流れ・時間 <small>80分・目安（予定）</small></h4><ol style="--phase-count:5"><li class="guide-phase-explain"><span class="guide-phase-number">01</span><h5>相手を比べる</h5><p class="guide-phase-time">15<small>分</small></p><p class="guide-phase-action">弾と敵へ判定を使い直す</p></li><li class="guide-phase-work"><span class="guide-phase-number">02</span><h5>撃破をつなぐ</h5><p class="guide-phase-time">40<small>分</small></p><p class="guide-phase-action">加点・再配置・弾消費を書く</p></li><li class="guide-phase-play"><span class="guide-phase-number">03</span><h5>続けて試す</h5><p class="guide-phase-time">15<small>分</small></p><p class="guide-phase-action">接触・非接触・連続撃破</p></li><li class="guide-phase-reflect"><span class="guide-phase-number">04</span><h5>説明・保存</h5><p class="guide-phase-time">5<small>分</small></p><p class="guide-phase-action">条件と結果を残す</p></li><li class="guide-phase-buffer"><span class="guide-phase-number">05</span><h5>予備</h5><p class="guide-phase-time">5<small>分</small></p><p class="guide-phase-action">個別支援・進行の調整</p></li></ol></section><section class="reading-subsection"><h4>取り組む範囲</h4><div class="reading-criteria guide-criteria"><section class="reading-subsection reading-must"><h5><span class="guide-badge guide-badge-must">MUST</span></h5><ul><li>bullet×enemy判定を転用</li><li>score +100</li><li>敵random再配置と弾の消費</li></ul></section><section class="reading-subsection reading-should"><h5><span class="guide-badge guide-badge-should">SHOULD</span></h5><ul><li>連続撃破と非接触を比較</li><li>範囲・速さを調整</li></ul></section><section class="reading-subsection reading-optional"><h5><span class="guide-badge guide-badge-challenge">CHALLENGE</span></h5><ul><li>敵／弾の既習設定を組み合わせる</li></ul></section></div></section><section class="reading-subsection"><h4>今日扱う内容</h4><dl class="reading-concept-list"><div class="reading-concept-transfer"><dt><span class="guide-badge guide-badge-transfer">TRANSFER</span><small>使い直す</small></dt><dd>接触判定・100点加算・random再配置を弾と敵へ使う。</dd></div><div class="reading-concept-read-only"><dt><span class="guide-badge guide-badge-read-only">READ ONLY</span><small>読む</small></dt><dd>弾と敵の判定に使う四角を読む。</dd></div><div class="reading-concept-system"><dt><span class="guide-badge guide-badge-system">SYSTEM</span><small>触らない</small></dt><dd>1回の撃破で何度も加点しない処理は準備する。</dd></div></dl></section><section class="reading-subsection"><h4>活動の進め方（予定）</h4><details class="reading-details guide-slide-detail"><summary>活動ごとの支援を開く<span class="reading-disclosure" aria-hidden="true">＋</span></summary><div class="reading-detail-body"><ol class="guide-cues"><li id="month10-3-step-activity-0" data-slide-alias=""><h5><strong>相手の比較</strong></h5><dl><div><dt>生徒</dt><dd>既習判定と弾・敵を対応</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>新しい命令を説明するより、使い直す相手を確認する</dd></div></dl></li><li id="month10-3-step-activity-1" data-slide-alias=""><h5><strong>ルールをつなぐ</strong></h5><dl><div><dt>生徒</dt><dd>判定・加点・再配置・弾消費を転用</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>生徒が書く行と基盤の二重処理防止を分けて支援</dd></div></dl></li><li id="month10-3-step-activity-2" data-slide-alias=""><h5><strong>比較テスト</strong></h5><dl><div><dt>生徒</dt><dd>接触と非接触・連続撃破を試す</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>同じ撃破で何度も加点しないか確認</dd></div></dl></li><li id="month10-3-step-activity-3" data-slide-alias=""><h5><strong>保存</strong></h5><dl><div><dt>生徒</dt><dd>条件と結果を示し保存</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>標準版を残し、次回のHPは別の残量と予告</dd></div></dl></li></ol></div></details></section><section class="reading-subsection"><h4>講師のポイント</h4><blockquote class="reading-teaching-cue"><p>「前はplayerとitem、今回はbulletとenemy。相手を替えて同じ考え方を使います。」</p></blockquote><ul><li>判定する相手をプレイヤー・アイテムから弾・敵へ替えると説明します</li><li>1回の撃破で1回だけ加点するか確認します</li><li>二重の加点を防ぐ未習の処理は、生徒に追加させません。</li></ul><details class="reading-details guide-prerequisite"><summary>前提を確認<span class="reading-disclosure" aria-hidden="true">＋</span></summary><div class="reading-detail-body"><ul><li>Game1で接触・score・randomを見たことがある</li><li>弾の有無と消滅を確認した</li><li>randomが未経験なら実例を案内します。</li></ul></div></details></section><section class="reading-subsection reading-specific-support"><h4>Lesson固有の支援</h4><ul class="guide-specific-cases"><li><h5>相手を取り違える</h5><p>弾と敵のRectを指して確認します</p></li><li><h5>何度も加点される</h5><p>弾を消す処理と、準備済みの二重加点防止を講師が確認します</p></li><li><h5>再配置の範囲が違う</h5><p>Game2の画面幅・敵サイズと比べます。randomが未経験なら実例やReferenceを案内します。</p></li></ul></section><section class="reading-subsection reading-completion print-friendly"><h4>Lesson完了</h4><ul><li>1回の撃破で100点加算・弾の消滅・敵の再配置を確認できる。当たらない時は加点されない。</li><li>自分が書いた処理を示し、保存できる。</li></ul></section><section class="reading-subsection reading-handoff"><h4>次回へ残す</h4><ul><li>撃破・加点・再配置が動くファイルをDriveへ保存させます</li><li>連続撃破と、弾が当たらない時の確認結果を記録します</li><li>次回は接触で減るHPを扱います。</li></ul></section><section class="reading-subsection"><h4>参照先</h4><nav class="reading-lesson-links" aria-label="Month10-3の参照先"><span class="guide-meta">Lesson Slideは準備中です。</span><a href="/robot-python-game/instructor/reference/">Reference<span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></nav></section></div></details></section></section><section class="reading-month"><h3 id="month11">Month11 <small>予定</small></h3><section class="reading-lesson guide-refined guide-reading-v2" aria-labelledby="month11-1-title"><details id="month11-1" class="reading-details reading-lesson-toggle"><summary><span class="reading-summary-copy"><span class="reading-summary-heading"><span id="month11-1-title" class="reading-summary-id">Month11-1 <small>教材は準備中</small></span><strong>HPで終了条件を発展</strong></span><span class="reading-summary-fact reading-summary-goal"><b>目的</b><span>接触でHPを減らし、0以下でGame Overにする。</span></span><span class="reading-summary-fact reading-summary-must"><b>MUST</b><span>接触1回でhp -1 / hp &lt;= 0でGame Over / Rで位置・弾・score・HPを初期化確認</span></span><span class="reading-summary-fact reading-summary-meta"><b>時間</b><span>目安80分（予備5分を含む）／授業80分・予定</span></span></span><span class="reading-disclosure" aria-hidden="true">＋</span></summary><div class="reading-detail-body"><section class="reading-subsection reading-goal"><h4>今日の目的</h4><p>接触でHPを減らし、0以下でGame Overにする。Rで再開した時に、位置やHPが初期状態へ戻ることを確認する。</p></section><section class="guide-timeline print-friendly reading-subsection"><h4>今日の流れ・時間 <small>80分・目安（予定）</small></h4><ol style="--phase-count:5"><li class="guide-phase-explain"><span class="guide-phase-number">01</span><h5>HPを知る</h5><p class="guide-phase-time">20<small>分</small></p><p class="guide-phase-action">残量と0以下の条件を結ぶ</p></li><li class="guide-phase-work"><span class="guide-phase-number">02</span><h5>終了を作る</h5><p class="guide-phase-time">35<small>分</small></p><p class="guide-phase-action">接触で減り、0以下で終了</p></li><li class="guide-phase-play"><span class="guide-phase-number">03</span><h5>Rを試す</h5><p class="guide-phase-time">15<small>分</small></p><p class="guide-phase-action">位置・弾・得点・HPを確認</p></li><li class="guide-phase-reflect"><span class="guide-phase-number">04</span><h5>説明・保存</h5><p class="guide-phase-time">5<small>分</small></p><p class="guide-phase-action">減らす値と条件を残す</p></li><li class="guide-phase-buffer"><span class="guide-phase-number">05</span><h5>予備</h5><p class="guide-phase-time">5<small>分</small></p><p class="guide-phase-action">個別支援・進行の調整</p></li></ol></section><section class="reading-subsection"><h4>取り組む範囲</h4><div class="reading-criteria guide-criteria"><section class="reading-subsection reading-must"><h5><span class="guide-badge guide-badge-must">MUST</span></h5><ul><li>接触1回でhp -1</li><li>hp &lt;= 0でGame Over</li><li>Rで位置・弾・score・HPを初期化確認</li></ul></section><section class="reading-subsection reading-should"><h5><span class="guide-badge guide-badge-should">SHOULD</span></h5><ul><li>HP値とプレイ体験を比較</li><li>同じ接触の連続減少がないか確認</li></ul></section><section class="reading-subsection reading-optional"><h5><span class="guide-badge guide-badge-challenge">CHALLENGE</span></h5><ul><li>既習数値による難しさ調整。無敵時間・待ち時間の処理は作らない</li></ul></section></div></section><section class="reading-subsection"><h4>今日扱う内容</h4><dl class="reading-concept-list"><div class="reading-concept-new"><dt><span class="guide-badge guide-badge-new">NEW</span><small>新しく扱う</small></dt><dd>HPを、接触で減っていく残量として扱う。</dd></div><div class="reading-concept-transfer"><dt><span class="guide-badge guide-badge-transfer">TRANSFER</span><small>使い直す</small></dt><dd>引き算・if・Game Overを終了条件へ使う。</dd></div><div class="reading-concept-read-only"><dt><span class="guide-badge guide-badge-read-only">READ ONLY</span><small>読む</small></dt><dd>&lt;=は「0以下」とだけ確認する。</dd></div><div class="reading-concept-system"><dt><span class="guide-badge guide-badge-system">SYSTEM</span><small>触らない</small></dt><dd>1回の接触で1だけ減らす処理とRでの復元は準備する。</dd></div></dl></section><section class="reading-subsection"><h4>活動の進め方（予定）</h4><details class="reading-details guide-slide-detail"><summary>活動ごとの支援を開く<span class="reading-disclosure" aria-hidden="true">＋</span></summary><div class="reading-detail-body"><ol class="guide-cues"><li id="month11-1-step-activity-0" data-slide-alias=""><h5><strong>残量を知る</strong></h5><dl><div><dt>生徒</dt><dd>初期HPと接触の結果を見る</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>初期3から1減る残量へ絞り説明</dd></div></dl></li><li id="month11-1-step-activity-1" data-slide-alias=""><h5><strong>終了へつなぐ</strong></h5><dl><div><dt>生徒</dt><dd>HP更新と0以下の条件を試す</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>敵の画面下通過では減らない仕様と照合</dd></div></dl></li><li id="month11-1-step-activity-2" data-slide-alias=""><h5><strong>R確認</strong></h5><dl><div><dt>生徒</dt><dd>位置・弾・score・HPの復元を確認</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>準備済み処理と生徒が書く行を分け、HPが連続で減る場合は準備済み処理を調べる</dd></div></dl></li><li id="month11-1-step-activity-3" data-slide-alias=""><h5><strong>保存</strong></h5><dl><div><dt>生徒</dt><dd>減少と条件を短く説明</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>速度・HP比較はSHOULD。標準状態とDrive保存先を残す</dd></div></dl></li></ol></div></details></section><section class="reading-subsection"><h4>講師のポイント</h4><blockquote class="reading-teaching-cue"><p>「今回は1回で終わらず、残りを1減らします。なくなったらGame Overです。」</p></blockquote><ul><li>増えるscoreと、残りを表すHPを分けて説明します</li><li>同じ接触でHPが何度も減らないか確認します</li><li>比較は「0以下」の意味に絞って説明します。</li></ul></section><section class="reading-subsection reading-specific-support"><h4>Lesson固有の支援</h4><ul class="guide-specific-cases"><li><h5>得点とHPを混同する</h5><p>増えるscoreと減るHPを比べます</p></li><li><h5>一気にHPが減る</h5><p>1接触で1だけ減らす準備済み処理を講師が確認します。無敵時間などは追加させません</p></li><li><h5>終了・Rでの再開が違う</h5><p>0以下の条件と、初期状態へ戻す処理を分けて確認します。</p></li></ul></section><section class="reading-subsection reading-completion print-friendly"><h4>Lesson完了</h4><ul><li>初期HP3から1接触で1だけ減り、0以下で終了する。Rで全状態を初期状態へ戻せる。</li><li>減らす値と終了条件を示し、保存できる。</li></ul></section><section class="reading-subsection reading-handoff"><h4>次回へ残す</h4><ul><li>HPとGame Overが動くファイルをDriveへ保存させます</li><li>接触・終了・Rでの再開の確認結果を記録します</li><li>次回は全機能を通して確認します。</li></ul></section><section class="reading-subsection"><h4>参照先</h4><nav class="reading-lesson-links" aria-label="Month11-1の参照先"><span class="guide-meta">Lesson Slideは準備中です。</span><a href="/robot-python-game/instructor/reference/">Reference<span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></nav></section></div></details></section><section class="reading-lesson guide-refined guide-reading-v2" aria-labelledby="month11-2-title"><details id="month11-2" class="reading-details reading-lesson-toggle"><summary><span class="reading-summary-copy"><span class="reading-summary-heading"><span id="month11-2-title" class="reading-summary-id">Month11-2 <small>教材は準備中</small></span><strong>標準完成・DEBUG・Playtest</strong></span><span class="reading-summary-fact reading-summary-goal"><b>目的</b><span>Game2の全機能を通して確認し、問題があれば直して再テストする。</span></span><span class="reading-summary-fact reading-summary-must"><b>MUST</b><span>標準機能の通し確認 / 問題があれば修正し再テスト / 完成版を残して保存</span></span><span class="reading-summary-fact reading-summary-meta"><b>時間</b><span>目安80分（予備5分を含む）／授業80分・予定</span></span></span><span class="reading-disclosure" aria-hidden="true">＋</span></summary><div class="reading-detail-body"><section class="reading-subsection reading-goal"><h4>今日の目的</h4><p>Game2の全機能を通して確認し、問題があれば直して再テストする。完成版を別に保存する。</p></section><section class="guide-timeline print-friendly reading-subsection"><h4>今日の流れ・時間 <small>80分・目安（予定）</small></h4><ol style="--phase-count:5"><li class="guide-phase-explain"><span class="guide-phase-number">01</span><h5>確認を選ぶ</h5><p class="guide-phase-time">10<small>分</small></p><p class="guide-phase-action">未確認の標準機能を絞る</p></li><li class="guide-phase-work"><span class="guide-phase-number">02</span><h5>必要時に修正</h5><p class="guide-phase-time">35<small>分</small></p><p class="guide-phase-action">問題がある所だけ直す</p></li><li class="guide-phase-play"><span class="guide-phase-number">03</span><h5>通し再テスト</h5><p class="guide-phase-time">25<small>分</small></p><p class="guide-phase-action">修正箇所と他機能を確認</p></li><li class="guide-phase-reflect"><span class="guide-phase-number">04</span><h5>完成版保存</h5><p class="guide-phase-time">5<small>分</small></p><p class="guide-phase-action">元の完成版を残す</p></li><li class="guide-phase-buffer"><span class="guide-phase-number">05</span><h5>予備</h5><p class="guide-phase-time">5<small>分</small></p><p class="guide-phase-action">個別支援・進行の調整</p></li></ol></section><section class="reading-subsection"><h4>取り組む範囲</h4><div class="reading-criteria guide-criteria"><section class="reading-subsection reading-must"><h5><span class="guide-badge guide-badge-must">MUST</span></h5><ul><li>標準機能の通し確認</li><li>問題があれば修正し再テスト</li><li>完成版を残して保存</li></ul></section><section class="reading-subsection reading-should"><h5><span class="guide-badge guide-badge-should">SHOULD</span></h5><ul><li>目標→予想→1か所の変更→比較で小さく調整</li><li>他者の試遊</li></ul></section><section class="reading-subsection reading-optional"><h5><span class="guide-badge guide-badge-challenge">CHALLENGE</span></h5><ul><li>既習範囲の追加比較／読解。新しい命令は扱わない</li></ul></section></div></section><section class="reading-subsection"><h4>今日扱う内容</h4><dl class="reading-concept-list"><div class="reading-concept-transfer"><dt><span class="guide-badge guide-badge-transfer">TRANSFER</span><small>使い直す</small></dt><dd>動作確認・不具合の調査・1か所の変更ずつの比較を使う。</dd></div><div class="reading-concept-read-only"><dt><span class="guide-badge guide-badge-read-only">READ ONLY</span><small>読む</small></dt><dd>完成時のチェック項目を読む。</dd></div></dl></section><section class="reading-subsection"><h4>活動の進め方（予定）</h4><details class="reading-details guide-slide-detail"><summary>活動ごとの支援を開く<span class="reading-disclosure" aria-hidden="true">＋</span></summary><div class="reading-detail-body"><ol class="guide-cues"><li id="month11-2-step-activity-0" data-slide-alias=""><h5><strong>通し確認</strong></h5><dl><div><dt>生徒</dt><dd>標準機能の予想した結果を順に試す</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>確認済み・未確認を分け、遊ぶだけにしない</dd></div></dl></li><li id="month11-2-step-activity-1" data-slide-alias=""><h5><strong>必要な修正</strong></h5><dl><div><dt>生徒</dt><dd>問題があれば原因を絞り1修正する</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>問題がない生徒にはエラーや再入力を要求しない</dd></div></dl></li><li id="month11-2-step-activity-2" data-slide-alias=""><h5><strong>再テスト</strong></h5><dl><div><dt>生徒</dt><dd>直した箇所と他機能を照合</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>変更の影響を確認し、任意調整と標準完成を分ける</dd></div></dl></li><li id="month11-2-step-activity-3" data-slide-alias=""><h5><strong>完成版の保存</strong></h5><dl><div><dt>生徒</dt><dd>完成版を保存し、最終改造の候補にする</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>Game1／Game2双方の元と保存先を残す</dd></div></dl></li></ol></div></details></section><section class="reading-subsection"><h4>講師のポイント</h4><blockquote class="reading-teaching-cue"><p>「今日は増やすより、全部つながって動くか確かめて完成版を残します。」</p></blockquote><ul><li>機能を増やすより、全機能の動作確認を優先します</li><li>問題がある時に修正を支援します</li><li>調整を始める前に、完成版を別に保存させます。</li></ul></section><section class="reading-subsection reading-specific-support"><h4>Lesson固有の支援</h4><ul class="guide-specific-cases"><li><h5>遊ぶだけになる</h5><p>未確認の機能を1つ選ばせ、予想と実際の動きを比べます</p></li><li><h5>複数箇所を一度に直す</h5><p>直前の変更と元の値を見て、1か所ずつ直させます</p></li><li><h5>元の完成版を失う</h5><p>完成版を別保存してから調整させます。問題のない生徒に修正や再入力は求めません。</p></li></ul></section><section class="reading-subsection reading-completion print-friendly"><h4>Lesson完了</h4><ul><li>生徒が移動・画面外制限、弾の発射と消滅、撃破で100点・敵の再配置、HP・終了、R・ESCを確認できる。</li><li>完成版を保存できる。問題がなければ修正は不要です。</li></ul></section><section class="reading-subsection reading-handoff"><h4>次回へ残す</h4><ul><li>Game1・Game2の完成版をDriveへ保存させます</li><li>確認した機能と、必要な修正を記録します</li><li>次回は改造するゲームを選び、計画を立てます。</li></ul></section><section class="reading-subsection"><h4>参照先</h4><nav class="reading-lesson-links" aria-label="Month11-2の参照先"><span class="guide-meta">Lesson Slideは準備中です。</span><a href="/robot-python-game/instructor/reference/">Reference<span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></nav></section></div></details></section><section class="reading-lesson guide-refined guide-reading-v2" aria-labelledby="month11-3-title"><details id="month11-3" class="reading-details reading-lesson-toggle"><summary><span class="reading-summary-copy"><span class="reading-summary-heading"><span id="month11-3-title" class="reading-summary-id">Month11-3 <small>教材は準備中</small></span><strong>Finalを選定・計画・小試行</strong></span><span class="reading-summary-fact reading-summary-goal"><b>目的</b><span>Game1かGame2を選び、目的に関連する2つの変更・確認方法・順序を計画する。</span></span><span class="reading-summary-fact reading-summary-must"><b>MUST</b><span>Game1/2を1つ選びコピー / 目的と関連する2つの変更を計画 / 小さな試行→結果・次の手を記録</span></span><span class="reading-summary-fact reading-summary-meta"><b>時間</b><span>目安80分（予備5分を含む）／授業80分・予定</span></span></span><span class="reading-disclosure" aria-hidden="true">＋</span></summary><div class="reading-detail-body"><section class="reading-subsection reading-goal"><h4>今日の目的</h4><p>Game1かGame2を選び、目的に関連する2つの変更・確認方法・順序を計画する。小さく試し、実現できそうか確かめる。</p></section><section class="guide-timeline print-friendly reading-subsection"><h4>今日の流れ・時間 <small>80分・目安（予定）</small></h4><ol style="--phase-count:5"><li class="guide-phase-explain"><span class="guide-phase-number">01</span><h5>目的を絞る</h5><p class="guide-phase-time">15<small>分</small></p><p class="guide-phase-action">既習範囲の2つの変更を考える</p></li><li class="guide-phase-work"><span class="guide-phase-number">02</span><h5>選定・計画</h5><p class="guide-phase-time">40<small>分</small></p><p class="guide-phase-action">ゲーム・順序・確認法を選ぶ</p></li><li class="guide-phase-play"><span class="guide-phase-number">03</span><h5>小さく試す</h5><p class="guide-phase-time">15<small>分</small></p><p class="guide-phase-action">コピーで結果を確かめる</p></li><li class="guide-phase-reflect"><span class="guide-phase-number">04</span><h5>次の手を保存</h5><p class="guide-phase-time">5<small>分</small></p><p class="guide-phase-action">計画・元値・試行を残す</p></li><li class="guide-phase-buffer"><span class="guide-phase-number">05</span><h5>予備</h5><p class="guide-phase-time">5<small>分</small></p><p class="guide-phase-action">個別支援・進行の調整</p></li></ol></section><section class="reading-subsection"><h4>取り組む範囲</h4><div class="reading-criteria guide-criteria"><section class="reading-subsection reading-must"><h5><span class="guide-badge guide-badge-must">MUST</span></h5><ul><li>Game1/2を1つ選びコピー</li><li>目的と関連する2つの変更を計画</li><li>小さな試行→結果・次の手を記録</li></ul></section><section class="reading-subsection reading-should"><h5><span class="guide-badge guide-badge-should">SHOULD</span></h5><ul><li>AIへ計画／原因を相談し読んで試す（許可時）</li><li>候補を絞る</li></ul></section><section class="reading-subsection reading-optional"><h5><span class="guide-badge guide-badge-challenge">CHALLENGE</span></h5><ul><li>代替案を試し理由付きで選ぶ。新しい標準機能は追加しない</li></ul></section></div></section><section class="reading-subsection"><h4>今日扱う内容</h4><dl class="reading-concept-list"><div class="reading-concept-transfer"><dt><span class="guide-badge guide-badge-transfer">TRANSFER</span><small>使い直す</small></dt><dd>目的から変更場所を選び、AIへの相談や比較を計画へ使う。</dd></div><div class="reading-concept-read-only"><dt><span class="guide-badge guide-badge-read-only">READ ONLY</span><small>読む</small></dt><dd>既習コードと改造候補を読む。</dd></div></dl></section><section class="reading-subsection"><h4>活動の進め方（予定）</h4><details class="reading-details guide-slide-detail"><summary>活動ごとの支援を開く<span class="reading-disclosure" aria-hidden="true">＋</span></summary><div class="reading-detail-body"><ol class="guide-cues"><li id="month11-3-step-activity-0" data-slide-alias=""><h5><strong>選定とコピー</strong></h5><dl><div><dt>生徒</dt><dd>1ゲームを選んで本人のDrive内にコピー</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>元の完成版を残し、どちらのゲームも選べると伝える</dd></div></dl></li><li id="month11-3-step-activity-1" data-slide-alias=""><h5><strong>計画</strong></h5><dl><div><dt>生徒</dt><dd>目的・関連する2つの変更・順番・確認方法を書く</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>既習範囲に縮小し、独立した新機能を増やさない</dd></div></dl></li><li id="month11-3-step-activity-2" data-slide-alias=""><h5><strong>小さな試行</strong></h5><dl><div><dt>生徒</dt><dd>1つを小さく試して結果を残す</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>AIか講師への相談を案内。全体の完成は次回に行う</dd></div></dl></li><li id="month11-3-step-activity-3" data-slide-alias=""><h5><strong>引継ぎ</strong></h5><dl><div><dt>生徒</dt><dd>元値・試行結果・次の手を保存</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>次回に渡す計画と保存先を照合</dd></div></dl></li></ol></div></details></section><section class="reading-subsection"><h4>講師のポイント</h4><blockquote class="reading-teaching-cue"><p>「完成ゲームを選び、目的に関係する2つの変更を小さく計画します。今日は全部完成させません。」</p></blockquote><ul><li>ゲーム選び・計画・小さな試行を確認します</li><li>既習の内容でできる、関連する2つの変更へ絞ります</li><li>本格的な改造は次回に行います。</li></ul><details class="reading-details guide-prerequisite"><summary>前提を確認<span class="reading-disclosure" aria-hidden="true">＋</span></summary><div class="reading-detail-body"><ul><li>Game1・Game2の完成版がある</li><li>目的・変更場所・予想・確認を経験した</li><li>AIを使った経験がなくても進められます。</li></ul></div></details></section><section class="reading-subsection reading-specific-support"><h4>Lesson固有の支援</h4><ul class="guide-specific-cases"><li><h5>大きな新機能を選ぶ</h5><p>目的に関係する既習の2つの変更へ絞ります。難しければ候補を一緒に選び、1つ試させます</p></li><li><h5>Game2の続きだと思う</h5><p>Game1も選べ、今日は計画と小さな試行を行うと伝えます</p></li><li><h5>AI案を丸ごと使う</h5><p>意味・変更場所・確認方法を聞き、生徒が説明できる範囲へ絞ります。</p></li></ul></section><section class="reading-subsection reading-completion print-friendly"><h4>Lesson完了</h4><ul><li>生徒が選んだゲーム・目的・関連する2つの変更・確認方法・順序を示せる。</li><li>コピーで小さく試し、結果と次に試すことを保存できる。</li></ul></section><section class="reading-subsection reading-handoff"><h4>次回へ残す</h4><ul><li>選んだゲームのコピーと計画をDriveへ保存させます</li><li>元の値・試した結果・次に試すことを記録します</li><li>次回は関連する2つの変更を動く形にします。</li></ul></section><section class="reading-subsection"><h4>参照先</h4><nav class="reading-lesson-links" aria-label="Month11-3の参照先"><span class="guide-meta">Lesson Slideは準備中です。</span><a href="/robot-python-game/instructor/reference/">Reference<span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></nav></section></div></details></section></section><section class="reading-month"><h3 id="month12">Month12 <small>予定</small></h3><section class="reading-lesson guide-refined guide-reading-v2" aria-labelledby="month12-1-title"><details id="month12-1" class="reading-details reading-lesson-toggle"><summary><span class="reading-summary-copy"><span class="reading-summary-heading"><span id="month12-1-title" class="reading-summary-id">Month12-1 <small>教材は準備中</small></span><strong>計画に沿う主要改造</strong></span><span class="reading-summary-fact reading-summary-goal"><b>目的</b><span>前回計画した2つの変更を1つずつ実装し、組み合わせて試す。</span></span><span class="reading-summary-fact reading-summary-must"><b>MUST</b><span>既習範囲の関連する2つの変更を動く形へ / 変更前後と目的を照合 / 別保存・主要な改造を完成</span></span><span class="reading-summary-fact reading-summary-meta"><b>時間</b><span>目安80分（予備5分を含む）／授業80分・予定</span></span></span><span class="reading-disclosure" aria-hidden="true">＋</span></summary><div class="reading-detail-body"><section class="reading-subsection reading-goal"><h4>今日の目的</h4><p>前回計画した2つの変更を1つずつ実装し、組み合わせて試す。目的と変更前後を比べ、主要な改造を完成させる。</p></section><section class="guide-timeline print-friendly reading-subsection"><h4>今日の流れ・時間 <small>80分・目安（予定）</small></h4><ol style="--phase-count:5"><li class="guide-phase-explain"><span class="guide-phase-number">01</span><h5>計画を確認</h5><p class="guide-phase-time">10<small>分</small></p><p class="guide-phase-action">関連する2つの変更と目的を見る</p></li><li class="guide-phase-work"><span class="guide-phase-number">02</span><h5>1か所の変更ずつ作る</h5><p class="guide-phase-time">45<small>分</small></p><p class="guide-phase-action">既習処理を動く形につなぐ</p></li><li class="guide-phase-play"><span class="guide-phase-number">03</span><h5>合わせて試す</h5><p class="guide-phase-time">15<small>分</small></p><p class="guide-phase-action">2つの変更で目的に近づいたか</p></li><li class="guide-phase-reflect"><span class="guide-phase-number">04</span><h5>保存・引継ぎ</h5><p class="guide-phase-time">5<small>分</small></p><p class="guide-phase-action">動く主要な改造と未完部分を残す</p></li><li class="guide-phase-buffer"><span class="guide-phase-number">05</span><h5>予備</h5><p class="guide-phase-time">5<small>分</small></p><p class="guide-phase-action">個別支援・進行の調整</p></li></ol></section><section class="reading-subsection"><h4>取り組む範囲</h4><div class="reading-criteria guide-criteria"><section class="reading-subsection reading-must"><h5><span class="guide-badge guide-badge-must">MUST</span></h5><ul><li>既習範囲の関連する2つの変更を動く形へ</li><li>変更前後と目的を照合</li><li>別保存・主要な改造を完成</li></ul></section><section class="reading-subsection reading-should"><h5><span class="guide-badge guide-badge-should">SHOULD</span></h5><ul><li>AI／Referenceで原因・改善を相談</li><li>必要時に小さく再調整</li></ul></section><section class="reading-subsection reading-optional"><h5><span class="guide-badge guide-badge-challenge">CHALLENGE</span></h5><ul><li>支援を受けて複数行を書く。リスト・クラス等を全員の課題にはしない</li></ul></section></div></section><section class="reading-subsection"><h4>今日扱う内容</h4><dl class="reading-concept-list"><div class="reading-concept-transfer"><dt><span class="guide-badge guide-badge-transfer">TRANSFER</span><small>使い直す</small></dt><dd>選んだゲームの既習処理を、目的に沿う2つの変更へ組み合わせる。</dd></div><div class="reading-concept-read-only"><dt><span class="guide-badge guide-badge-read-only">READ ONLY</span><small>読む</small></dt><dd>必要な実コードとReferenceを読む。</dd></div></dl></section><section class="reading-subsection"><h4>活動の進め方（予定）</h4><details class="reading-details guide-slide-detail"><summary>活動ごとの支援を開く<span class="reading-disclosure" aria-hidden="true">＋</span></summary><div class="reading-detail-body"><ol class="guide-cues"><li id="month12-1-step-activity-0" data-slide-alias=""><h5><strong>計画確認</strong></h5><dl><div><dt>生徒</dt><dd>目的と2つの変更の順を確かめる</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>変更範囲と、元のデータが残っているかを確認</dd></div></dl></li><li id="month12-1-step-activity-1" data-slide-alias=""><h5><strong>1か所の変更ずつ実装</strong></h5><dl><div><dt>生徒</dt><dd>1つずつ変更しテストする</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>必要時に支援し、複雑な基盤追加へ広げない</dd></div></dl></li><li id="month12-1-step-activity-2" data-slide-alias=""><h5><strong>統合確認</strong></h5><dl><div><dt>生徒</dt><dd>2つの変更を合わせ目的と比較する</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>結果の証拠を問い、必要なら小さく調整</dd></div></dl></li><li id="month12-1-step-activity-3" data-slide-alias=""><h5><strong>保存と接続</strong></h5><dl><div><dt>生徒</dt><dd>動く主要な改造・変更場所・支援記録を残す</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>未完成の箇所を記録し、次回の最初に支援する</dd></div></dl></li></ol></div></details></section><section class="reading-subsection"><h4>講師のポイント</h4><blockquote class="reading-teaching-cue"><p>「前回の計画を1か所の変更ずつ動かし、2つを合わせて目的に近づいたか確かめます。」</p></blockquote><ul><li>計画した2つの変更を1つずつ動かさせます</li><li>目的に近づいたか、変更前後の結果で確認します</li><li>1か所の変更だけでは、主要な改造が完成したとは記録しません。</li></ul><details class="reading-details guide-prerequisite"><summary>前提を確認<span class="reading-disclosure" aria-hidden="true">＋</span></summary><div class="reading-detail-body"><ul><li>前回の目的・関連する2つの変更・確認方法が決まっている</li><li>元の完成版と作業用コピーを区別できる。</li></ul></div></details></section><section class="reading-subsection reading-specific-support"><h4>Lesson固有の支援</h4><ul class="guide-specific-cases"><li><h5>元のゲームへ上書きする</h5><p>コピーと保存先を確認し、元を残させます</p></li><li><h5>目的につながらない</h5><p>2つの変更の予想と結果を比べます。1か所の変更だけで完成とはしません</p></li><li><h5>大きなAI案を貼る</h5><p>計画へ戻り、コードを読んで小さく試させます。未完成の箇所は次回用に記録します。</p></li></ul></section><section class="reading-subsection reading-completion print-friendly"><h4>Lesson完了</h4><ul><li>生徒が関連する2つの変更を動かし、目的に対する変更前後の違いを示せる。</li><li>改造版を保存できる。自由制作や、すべてのコードを自力で書くことは求めません。</li></ul></section><section class="reading-subsection reading-handoff"><h4>次回へ残す</h4><ul><li>動く改造版を元のゲームと別にDriveへ保存させます</li><li>2つの変更の結果と未完成の箇所を記録します</li><li>次回は仕上げと発表資料づくりへ進みます。</li></ul></section><section class="reading-subsection"><h4>参照先</h4><nav class="reading-lesson-links" aria-label="Month12-1の参照先"><span class="guide-meta">Lesson Slideは準備中です。</span><a href="/robot-python-game/instructor/reference/">Reference<span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></nav></section></div></details></section><section class="reading-lesson guide-refined guide-reading-v2" aria-labelledby="month12-2-title"><details id="month12-2" class="reading-details reading-lesson-toggle"><summary><span class="reading-summary-copy"><span class="reading-summary-heading"><span id="month12-2-title" class="reading-summary-id">Month12-2 <small>教材は準備中</small></span><strong>仕上げ・言語化・資料</strong></span><span class="reading-summary-fact reading-summary-goal"><b>目的</b><span>作品を仕上げ、目的・変更・結果・問題解決を整理する。</span></span><span class="reading-summary-fact reading-summary-must"><b>MUST</b><span>通し確認と必要な修正 / 目的・場所・結果・問題解決を整理 / 短い発表資料を作り保存</span></span><span class="reading-summary-fact reading-summary-meta"><b>時間</b><span>目安80分（予備5分を含む）／授業80分・予定</span></span></span><span class="reading-disclosure" aria-hidden="true">＋</span></summary><div class="reading-detail-body"><section class="reading-subsection reading-goal"><h4>今日の目的</h4><p>作品を仕上げ、目的・変更・結果・問題解決を整理する。他の人へ伝わる短い発表資料を作る。</p></section><section class="guide-timeline print-friendly reading-subsection"><h4>今日の流れ・時間 <small>80分・目安（予定）</small></h4><ol style="--phase-count:5"><li class="guide-phase-explain"><span class="guide-phase-number">01</span><h5>仕上げを確認</h5><p class="guide-phase-time">10<small>分</small></p><p class="guide-phase-action">残りと説明する内容を絞る</p></li><li class="guide-phase-work"><span class="guide-phase-number">02</span><h5>作品・資料</h5><p class="guide-phase-time">40<small>分</small></p><p class="guide-phase-action">必要な修正と短い資料づくり</p></li><li class="guide-phase-play"><span class="guide-phase-number">03</span><h5>動作を確認</h5><p class="guide-phase-time">10<small>分</small></p><p class="guide-phase-action">作品・資料・操作を照合</p></li><li class="guide-phase-reflect"><span class="guide-phase-number">04</span><h5>説明を整える</h5><p class="guide-phase-time">15<small>分</small></p><p class="guide-phase-action">目的・場所・結果を保存</p></li><li class="guide-phase-buffer"><span class="guide-phase-number">05</span><h5>予備</h5><p class="guide-phase-time">5<small>分</small></p><p class="guide-phase-action">個別支援・進行の調整</p></li></ol></section><section class="reading-subsection"><h4>取り組む範囲</h4><div class="reading-criteria guide-criteria"><section class="reading-subsection reading-must"><h5><span class="guide-badge guide-badge-must">MUST</span></h5><ul><li>通し確認と必要な修正</li><li>目的・場所・結果・問題解決を整理</li><li>短い発表資料を作り保存</li></ul></section><section class="reading-subsection reading-should"><h5><span class="guide-badge guide-badge-should">SHOULD</span></h5><ul><li>相手に見せて説明を改善</li><li>AI利用または代替支援を振り返る</li></ul></section><section class="reading-subsection reading-optional"><h5><span class="guide-badge guide-badge-challenge">CHALLENGE</span></h5><ul><li>比較画像・操作デモを分かりやすくする</li></ul></section></div></section><section class="reading-subsection"><h4>今日扱う内容</h4><dl class="reading-concept-list"><div class="reading-concept-transfer"><dt><span class="guide-badge guide-badge-transfer">TRANSFER</span><small>使い直す</small></dt><dd>変更の説明・不具合の確認・記録を資料へ使う。</dd></div><div class="reading-concept-read-only"><dt><span class="guide-badge guide-badge-read-only">READ ONLY</span><small>読む</small></dt><dd>変更前後の画面と、自分が変えたコードを読む。</dd></div></dl></section><section class="reading-subsection"><h4>活動の進め方（予定）</h4><details class="reading-details guide-slide-detail"><summary>活動ごとの支援を開く<span class="reading-disclosure" aria-hidden="true">＋</span></summary><div class="reading-detail-body"><ol class="guide-cues"><li id="month12-2-step-activity-0" data-slide-alias=""><h5><strong>仕上げ</strong></h5><dl><div><dt>生徒</dt><dd>通し確認し必要な修正をする</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>12-1の残りがあれば先に支援する</dd></div></dl></li><li id="month12-2-step-activity-1" data-slide-alias=""><h5><strong>言語化</strong></h5><dl><div><dt>生徒</dt><dd>目的・場所・結果・問題解決・支援を整理</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>不具合を捏造させず、問題なしなら確認結果を扱う</dd></div></dl></li><li id="month12-2-step-activity-2" data-slide-alias=""><h5><strong>資料化</strong></h5><dl><div><dt>生徒</dt><dd>短い資料で相手に説明する</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>実物との対応を優先し、長文や装飾を課さない</dd></div></dl></li><li id="month12-2-step-activity-3" data-slide-alias=""><h5><strong>保存</strong></h5><dl><div><dt>生徒</dt><dd>作品・資料・操作手順を保存</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>次回に備えて起動を確かめ、Driveの保存先を確認</dd></div></dl></li></ol></div></details></section><section class="reading-subsection"><h4>講師のポイント</h4><blockquote class="reading-teaching-cue"><p>「何を目指して、どこを変え、どうなったかを、自分の作品と短い資料で伝えます。」</p></blockquote><ul><li>主要な改造と、全機能の動作を先に確認します</li><li>実際の変更・結果・問題解決を資料へまとめさせます</li><li>装飾や作り話ではなく、実際の取り組みを確認します。</li></ul></section><section class="reading-subsection reading-specific-support"><h4>Lesson固有の支援</h4><ul class="guide-specific-cases"><li><h5>不具合を作り話にする</h5><p>実際の確認・工夫・使った支援を記録させます</p></li><li><h5>感想だけになる</h5><p>目的・変更場所・画面の結果を実物で指させます</p></li><li><h5>資料の装飾で改造が未完成</h5><p>前回の残りを先に支援し、短い資料と保存を優先します。</p></li></ul></section><section class="reading-subsection reading-completion print-friendly"><h4>Lesson完了</h4><ul><li>生徒が作品と資料を示し、目的・変更場所・結果・実際の問題解決を説明できる。問題がなければ動作確認の結果を示せる。</li><li>動く作品と短い資料を保存できる。</li></ul></section><section class="reading-subsection reading-handoff"><h4>次回へ残す</h4><ul><li>起動できる作品と短い資料をDriveへ保存させます</li><li>操作手順と使った支援を記録します</li><li>次回は起動確認と練習の後に発表します。</li></ul></section><section class="reading-subsection"><h4>参照先</h4><nav class="reading-lesson-links" aria-label="Month12-2の参照先"><span class="guide-meta">Lesson Slideは準備中です。</span><a href="/robot-python-game/instructor/reference/">Reference<span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></nav></section></div></details></section><section class="reading-lesson guide-refined guide-reading-v2" aria-labelledby="month12-3-title"><details id="month12-3" class="reading-details reading-lesson-toggle"><summary><span class="reading-summary-copy"><span class="reading-summary-heading"><span id="month12-3-title" class="reading-summary-id">Month12-3 <small>教材は準備中</small></span><strong>リハーサル・発表・振り返り</strong></span><span class="reading-summary-fact reading-summary-goal"><b>目的</b><span>作品と資料の起動を確かめて発表し、制作や使った支援を振り返る。</span></span><span class="reading-summary-fact reading-summary-must"><b>MUST</b><span>起動／資料の確認・練習 / 構造化した発表 / 振り返りと作品の保存</span></span><span class="reading-summary-fact reading-summary-meta"><b>時間</b><span>目安80分（予備5分を含む）／授業80分・予定</span></span></span><span class="reading-disclosure" aria-hidden="true">＋</span></summary><div class="reading-detail-body"><section class="reading-subsection reading-goal"><h4>今日の目的</h4><p>作品と資料の起動を確かめて発表し、制作や使った支援を振り返る。作品・資料・記録を保存する。</p></section><section class="guide-timeline print-friendly reading-subsection"><h4>今日の流れ・時間 <small>80分・目安（予定）</small></h4><ol style="--phase-count:5"><li class="guide-phase-explain"><span class="guide-phase-number">01</span><h5>進め方を確認</h5><p class="guide-phase-time">10<small>分</small></p><p class="guide-phase-action">人数と発表形式を確認</p></li><li class="guide-phase-work"><span class="guide-phase-number">02</span><h5>練習</h5><p class="guide-phase-time">15<small>分</small></p><p class="guide-phase-action">作品・資料を開いて試す</p></li><li class="guide-phase-play"><span class="guide-phase-number">03</span><h5>発表・質疑</h5><p class="guide-phase-time">45<small>分</small></p><p class="guide-phase-action">目的・変更・結果を伝える</p></li><li class="guide-phase-reflect"><span class="guide-phase-number">04</span><h5>振返り・保存</h5><p class="guide-phase-time">5<small>分</small></p><p class="guide-phase-action">作品・資料・学びを残す</p></li><li class="guide-phase-buffer"><span class="guide-phase-number">05</span><h5>予備</h5><p class="guide-phase-time">5<small>分</small></p><p class="guide-phase-action">個別支援・進行の調整</p></li></ol></section><section class="reading-subsection"><h4>取り組む範囲</h4><div class="reading-criteria guide-criteria"><section class="reading-subsection reading-must"><h5><span class="guide-badge guide-badge-must">MUST</span></h5><ul><li>起動／資料の確認・練習</li><li>構造化した発表</li><li>振り返りと作品の保存</li></ul></section><section class="reading-subsection reading-should"><h5><span class="guide-badge guide-badge-should">SHOULD</span></h5><ul><li>他者の工夫へ質問・コメント</li><li>次に試すことを説明</li></ul></section><section class="reading-subsection reading-optional"><h5><span class="guide-badge guide-badge-challenge">CHALLENGE</span></h5><ul><li>深い質疑・追加デモ。新機能の実装回にしない</li></ul></section></div></section><section class="reading-subsection"><h4>今日扱う内容</h4><dl class="reading-concept-list"><div class="reading-concept-transfer"><dt><span class="guide-badge guide-badge-transfer">TRANSFER</span><small>使い直す</small></dt><dd>短い共有を、目的・変更・結果・問題解決・支援の説明へ広げる。</dd></div><div class="reading-concept-read-only"><dt><span class="guide-badge guide-badge-read-only">READ ONLY</span><small>読む</small></dt><dd>自分の作品に必要なコードと資料を見る。</dd></div></dl></section><section class="reading-subsection"><h4>活動の進め方（予定）</h4><details class="reading-details guide-slide-detail"><summary>活動ごとの支援を開く<span class="reading-disclosure" aria-hidden="true">＋</span></summary><div class="reading-detail-body"><ol class="guide-cues"><li id="month12-3-step-activity-0" data-slide-alias=""><h5><strong>確認と練習</strong></h5><dl><div><dt>生徒</dt><dd>起動・資料・操作を確かめリハーサル</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>保存先を事前確認し、緊張や操作を支援</dd></div></dl></li><li id="month12-3-step-activity-1" data-slide-alias=""><h5><strong>発表と質疑</strong></h5><dl><div><dt>生徒</dt><dd>目的→変更→結果→問題解決→支援を伝える</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>最大10人程度の計画を実人数へ調整。暗記発表にしない</dd></div></dl></li><li id="month12-3-step-activity-2" data-slide-alias=""><h5><strong>振り返り</strong></h5><dl><div><dt>生徒</dt><dd>工夫や次に試すことを振り返る</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>AI利用の有無を評価せず、本人の学びを確認</dd></div></dl></li><li id="month12-3-step-activity-3" data-slide-alias=""><h5><strong>最後の保存</strong></h5><dl><div><dt>生徒</dt><dd>元の完成版・改造した作品・資料・記録を保存</dd></div><div class="guide-teacher-action"><dt>講師</dt><dd>15回の最後に、全データの保存先を確認</dd></div></dl></li></ol></div></details></section><section class="reading-subsection"><h4>講師のポイント</h4><blockquote class="reading-teaching-cue"><p>「目的→変更場所→結果→問題解決→使った支援を、作品を見せながら伝えます。」</p></blockquote><ul><li>人数に合わせて発表形式と持ち時間を事前に調整します</li><li>生徒の作品を使った説明を支援します</li><li>新しい実装は始めず、最後の保存を確認します。</li></ul></section><section class="reading-subsection reading-specific-support"><h4>Lesson固有の支援</h4><ul class="guide-specific-cases"><li><h5>作品・資料が見つからない</h5><p>保存先と実行ファイルを事前に確認します</p></li><li><h5>感想だけになる</h5><p>目的・変更場所・結果を実物で示させます</p></li><li><h5>緊張する・時間を超える</h5><p>3項目から練習させ、問題解決や使った支援を一言足します。人数に応じて形式を調整します。</p></li></ul></section><section class="reading-subsection reading-completion print-friendly"><h4>Lesson完了</h4><ul><li>生徒が起動確認済みの作品を示せる。</li><li>制作の目的・変更・結果・問題解決や使った支援を説明できる。</li><li>振り返りと作品を保存できる。</li></ul></section><section class="reading-subsection reading-handoff"><h4>次回へ残す</h4><ul><li>元の完成版・改造した作品・資料をDriveへ保存させます</li><li>制作や使った支援の記録を残します</li><li>次に試したい案は、任意の継続案として残します。</li></ul></section><section class="reading-subsection"><h4>参照先</h4><nav class="reading-lesson-links" aria-label="Month12-3の参照先"><span class="guide-meta">Lesson Slideは準備中です。</span><a href="/robot-python-game/instructor/reference/">Reference<span class="guide-link-arrow" aria-hidden="true"> ↗</span></a></nav></section></div></details></section></section></section><section class="reading-common guide-common" data-guide-section="確認待ち"><h2 id="確認待ち">確認待ち</h2>
<div class="guide-common-content"><ul>
<li>Month10〜12は予定内容です。教材が完成したら動作を確認し、授業に使います。</li>
<li>教室PCでの起動・音・投影、Driveの編集権限と同期方法は授業前に確認してください。</li>
<li>AI利用の許可、画像の保存・書き出しは必要な回だけ確認してください。</li>
<li>時間は目安です。生徒の進度・理解に合わせて活動と支援を調整します。</li>
<li>Month8-1の見通しに残る「Game2未定」は旧表現です。このガイド冒頭の見通しで補ってください。</li>
</ul>
</div></section>`,toc:'<nav class="reading-toc" aria-label="Guide目次"><a href="#この5か月で目指すこと">この5か月</a><a href="#授業前チェック">授業前チェック</a><a href="#共通ルール">共通ルール</a><a href="#page-typeと講師の役割">Page Type</a><a href="#困った時の支援">困った時</a><a href="#時間が余ったら">時間が余ったら</a><a href="#month8">Month8</a><a href="#month9">Month9</a><a href="#month10">Month10</a><a href="#month11">Month11</a><a href="#month12">Month12</a><a href="#確認待ち">確認待ち</a></nav>',family:"guide"}},v={class:"reading-header","aria-label":"講師資料"},L={key:0,class:"reading-mobile-toc"},A=["innerHTML"],P=["innerHTML"],H=["innerHTML"],O={key:2},G=b({__name:"InstructorDocument",props:{document:{}},setup(y){C();const p=y,g=f(),e=S(()=>T[p.document]);return x(()=>[p.document,g.hash],async()=>{await R(),document.querySelectorAll(".reading-lesson-toggle").forEach(t=>t.open=!1);let r="";try{r=decodeURIComponent(g.hash.slice(1))}catch{}if(r){const t=document.getElementById(r);t instanceof HTMLDetailsElement&&(t.open=!0);for(let n=t?.parentElement;n;n=n.parentElement)n instanceof HTMLDetailsElement&&(n.open=!0);t?.scrollIntoView({block:"start"})}else document.querySelector(".instructor-document")?.scrollTo(0,0)},{immediate:!0}),(r,t)=>(i(),d("main",{class:u(["instructor-document",e.value?.family?`reading-family reading-${e.value.family}${e.value.toc?" reading-longform":""}`:""]),onKeydown:t[0]||(t[0]=E(()=>{},["stop"]))},[a("nav",v,[l(o(h),{to:"/instructor/"},{default:s(()=>[...t[1]||(t[1]=[c("Home ↗",-1)])]),_:1}),l(o(h),{to:"/instructor/guide/"},{default:s(()=>[...t[2]||(t[2]=[c("Guide ↗",-1)])]),_:1}),l(o(h),{to:"/instructor/reference/"},{default:s(()=>[...t[3]||(t[3]=[c("Reference ↗",-1)])]),_:1})]),e.value?.toc?(i(),d("details",L,[t[4]||(t[4]=a("summary",null,"このページの目次",-1)),a("div",{innerHTML:e.value.toc},null,8,A)])):m("v-if",!0),e.value?(i(),d("div",{key:1,class:u(e.value.toc?"reading-grid":"")},[a("article",{innerHTML:e.value.html},null,8,P),e.value.toc?(i(),d("aside",{key:0,class:"reading-sidebar","aria-label":"この文書の目次",innerHTML:e.value.toc},null,8,H)):m("v-if",!0)],2)):(i(),d("p",O,"この文書はWeb参照対象にありません。"))],34))}});export{G as default};
