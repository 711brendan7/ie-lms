// Extended data for paper detail pages (indexed by card order in papers.html)
const PAPERS_EXTENDED = [
  // ===== IE (0-22) =====
  // 0: Barnes Motion and Time Study
  {id:"barnes-1980", readingNotes:"標準時間・動作研究講座の理論的背景として参照。特にサーブリッグ分析の手順確認に最適。IEの原点を著者の言葉で理解するための古典的必読書。", relatedCourses:["standard-time","operations-analysis","ie-analysis-cases"]},
  // 1: IE Handbook
  {id:"ie-handbook-2001", readingNotes:"IEのいずれかの手法に疑問が生じたときに参照する百科事典的存在。特定テーマに絞り必要箇所だけを読む使い方が効果的。デスクに常備推奨。", relatedCourses:["standard-time","line-balancing","ie-facility-layout","ie-logistics"]},
  // 2: Learning to See (VSM)
  {id:"learning-to-see-1998", readingNotes:"VSM講座と必ずセットで読む。付箋を貼りながら自工場の現状マップを実際に描くことで理解が格段に深まる。VSMアイコンの正式な使い方を確認するための原典。", relatedCourses:["ie-vsm","ie-improvement-cases","ie-analysis-cases"]},
  // 3: SMED
  {id:"smed-1985", readingNotes:"SMED講座の前後に読む。著者・新郷重夫自身の言葉でSMEDの哲学を理解することが現場応用力を高める。段取り改善のROI計算の根拠としても活用できる。", relatedCourses:["ie-smed","ie-improvement-cases"]},
  // 4: Line balancing review
  {id:"line-balancing-2006", readingNotes:"ラインバランシング講座の理論的補完として参照。最適化アルゴリズムを比較・選択する際に活用する研究者・上級実践者向けの論文。", relatedCourses:["line-balancing"]},
  // 5: SLP
  {id:"slp-1973", readingNotes:"施設レイアウト講座と並行して読む。P-Q分析・フロム・ツーチャート・近接性ダイアグラムの実習時に原典の図を参照することで理解が深まる。", relatedCourses:["ie-facility-layout","ie-improvement-cases"]},
  // 6: Niebel
  {id:"niebel-2003", readingNotes:"標準時間講座の主要参考書。余裕率の設定根拠を探すとき・レイティング手法を比較するときに参照。英語圏のIE教育の標準テキストとして世界共通の参照先。", relatedCourses:["standard-time","operations-analysis"]},
  // 7: Tortorella lean review
  {id:"tortorella-2021", readingNotes:"リーン改善の効果を経営層・管理職に数字で説明する際のエビデンスとして活用。改善投資の承認取得・効果試算の根拠データとして最新の定量的研究。", relatedCourses:["ie-improvement-cases","kaizen-methods","ie-vsm"]},
  // 8: Machine Changed World
  {id:"machine-changed-world-1990", readingNotes:"なぜリーン改善を行うのかという動機付けに最適な書。改善プロジェクトのキックオフ前に全員で読むと目的意識が揃う。国際比較データでTPS優位性を理解。", relatedCourses:["ie-vsm","ie-improvement-cases","kaizen-methods"]},
  // 9: Lean Thinking
  {id:"lean-thinking-1996", readingNotes:"VSM講座の哲学的背景として読む。「顧客価値から逆算する」という思考を身につけることで改善の方向性と優先順位が明確になる。", relatedCourses:["ie-vsm","kaizen-methods","ie-improvement-cases"]},
  // 10: Ohno TPS
  {id:"ohno-tps-1978", readingNotes:"7つのムダを現場で探す前に必読。TPSの本質を大野耐一氏自身の言葉で理解することが大切。かんばん方式の発想の原点も学べる。", relatedCourses:["ie-vsm","kaizen-methods","ie-logistics","ie-improvement-cases"]},
  // 11: Shingo Poka-Yoke
  {id:"shingo-poka-yoke-1986", readingNotes:"品質改善・ポカヨケ設計の前に読む。「検査より源流管理」という発想の転換に大きな気づきをもたらす。200以上の具体的なポカヨケ事例も参考になる。", relatedCourses:["kaizen-methods","ie-improvement-cases","ie-analysis-cases"]},
  // 12: Singh facility layout simulation
  {id:"singh-layout-2006", readingNotes:"コンピュータによるレイアウト最適化を検討する際の参考論文。CRAFT等のアルゴリズムを選択・評価するときに参照する研究者・上級実践者向け論文。", relatedCourses:["ie-facility-layout"]},
  // 13: 工場管理便覧
  {id:"factory-management-2002", readingNotes:"日本語でIEを学ぶ際の最初の参照先。JIS準拠用語の確認・各種分析票の書式確認に使う。日本のIE実践者にとっての標準リファレンス。", relatedCourses:["operations-analysis","standard-time","line-balancing","ie-facility-layout"]},
  // 14: Cellular Manufacturing
  {id:"cellular-manufacturing-1999", readingNotes:"セル生産・グループテクノロジー導入を検討する際の設計ガイドとして参照。部品族分類からセル形成まで手順を確認できる専門書。", relatedCourses:["ie-facility-layout","line-balancing"]},
  // 15: Ergonomics review
  {id:"ergonomics-2012", readingNotes:"作業設計・職場改善時に人間工学的負荷評価の根拠として活用。REBA・RULA等の評価ツール選択の根拠として参照。作業改善の安全面への配慮を定量化。", relatedCourses:["operations-analysis","kaizen-methods","standard-time"]},
  // 16: Industry 4.0 logistics
  {id:"industry40-logistics-2017", readingNotes:"IoT・AGVによる物流改善を企画する際の参考論文。デジタル化の効果試算と従来手法の比較に活用。DX提案の根拠データとして活用できる。", relatedCourses:["ie-logistics","ie-vsm"]},
  // 17: BasicMOST
  {id:"basicmost-1990", readingNotes:"PTS法（BasicMOST）の理論的根拠として参照。標準時間設定の精度検証・MTM-1との比較に活用。BasicMOSTの開発者自身による信頼性の高い論文。", relatedCourses:["standard-time"]},
  // 18: 生産工学教科書
  {id:"seisan-kogaku-2009", readingNotes:"日本語IEの基礎を体系的に学ぶための標準テキスト。学生・新入社員の最初の一冊として最適。JIS準拠の用語と手順で学べる定番テキスト。", relatedCourses:["operations-analysis","standard-time","line-balancing","ie-facility-layout"]},
  // 19: Digital transformation Lean
  {id:"digital-lean-2018", readingNotes:"IE活動のデジタル化を提案する際の根拠論文として活用。Lean 4.0の追加効果+25〜30%を経営層に説明するための最新の実証論文。", relatedCourses:["ie-vsm","ie-logistics","ie-improvement-cases"]},
  // 20: Kaizen Express
  {id:"kaizen-express-2009", readingNotes:"カイゼン活動の実践手順書として活用。改善イベントのファシリテーター・チームリーダー向けの実践テキスト。大野耐一研究所監修の信頼性の高い書籍。", relatedCourses:["kaizen-methods","ie-improvement-cases"]},
  // 21: Operations Management
  {id:"operations-management-2020", readingNotes:"IEをビジネス・経営と統合する視点を得るための教科書。EOQ・CPM等の経営工学手法をMBAレベルで学ぶ際に参照。IEと経営管理の橋渡しとなる書籍。", relatedCourses:["ie-smed","ie-logistics","line-balancing","ie-improvement-cases"]},
  // 22: Takt time groups
  {id:"takt-time-2012", readingNotes:"混流生産ラインのタクトタイム設計を行う際の参考論文。品種別タクトタイム分割の理論的根拠・最適化手法として活用。自動車業界の実例も参考になる。", relatedCourses:["line-balancing","ie-vsm"]},

  // ===== QC (23-37) =====
  // 23: Western Electric SQC
  {id:"western-electric-1956", readingNotes:"管理図の作成・解釈の根拠規格として参照。Western Electricルールの出典確認に使う原典。管理図を正しく使うための基礎的理解を得られる。", relatedCourses:[]},
  // 24: TQM textbook
  {id:"tqm-besterfield-2003", readingNotes:"QC7つ道具・TQMの実践手順の参照書として活用。品質改善プロジェクトの計画立案時に各手法の適用条件を確認するために使う。", relatedCourses:[]},
  // 25: Taguchi Robust Design
  {id:"taguchi-robust-1993", readingNotes:"設計段階の品質改善・実験計画を行う前に読む。SN比の考え方と損失関数の哲学を田口博士の言葉で学べる原典。製品の品質改善に直接応用できる。", relatedCourses:[]},
  // 26: Montgomery SPC
  {id:"montgomery-spc-2020", readingNotes:"SPC管理図の設計・解釈の主要参考書。工程能力分析の計算根拠として参照する世界標準テキスト。管理図の種類選択と解釈の迷ったときの参照先。", relatedCourses:[]},
  // 27: Six Sigma review
  {id:"six-sigma-kwak-2006", readingNotes:"シックスシグマ導入の効果を経営層に説明する際のエビデンスとして活用。GE・Motorolaの実績数値データを確認して投資対効果の試算に役立てる。", relatedCourses:[]},
  // 28: 石川馨
  {id:"ishikawa-qc-1989", readingNotes:"日本のQCサークル活動の哲学的背景として読む。特性要因図の正しい使い方を考案者本人から学ぶために必読。日本のQC文化の思想的源泉。", relatedCourses:[]},
  // 29: Deming
  {id:"deming-out-of-crisis-1982", readingNotes:"TQMの本質・デミングの14原則を理解するために読む。品質改善における経営者の役割を明確にする書。「数値目標の弊害」の理解に特に重要。", relatedCourses:[]},
  // 30: FMEA Stamatis
  {id:"fmea-stamatis-2003", readingNotes:"工程FMEA・設計FMEAを実施する前に参照するハンドブック。RPN計算と対策優先度づけの標準手順として実務で活用できる。AIAG/VDA対応版も解説。", relatedCourses:[]},
  // 31: Taguchi DOE
  {id:"taguchi-doe-2001", readingNotes:"タグチ法による実験計画を実施する際の実践マニュアルとして活用。直交表の選択から解析・確認実験まで、手順を追って学べる実践書。", relatedCourses:[]},
  // 32: ISO 9001 effects
  {id:"iso9001-effects-2009", readingNotes:"ISO 9001認証取得の費用対効果を検討・経営層に説明する際のエビデンスとして参照。形式的取得と実質的取得の効果差（3〜5倍）が特に重要な知見。", relatedCourses:[]},
  // 33: Multivariate SPC
  {id:"multivariate-spc-2002", readingNotes:"複数品質特性を同時管理する高度SPC手法の参考書。化学プロセス・精密部品の品質管理で単変量管理図の限界を感じたときに参照。", relatedCourses:[]},
  // 34: FMEA FTA
  {id:"fmea-fta-1998", readingNotes:"リスク解析でFMEAとFTAを組み合わせる際の方法論として参照。両手法の相補的な使い方（ボトムアップ×トップダウン）を理解するために読む。", relatedCourses:[]},
  // 35: QFD
  {id:"qfd-1995", readingNotes:"製品開発・工程設計段階で顧客要求を設計仕様に落とし込む際のガイドブックとして活用。「品質の家」の作成手順を確認し、実習に活用。", relatedCourses:[]},
  // 36: Lean Six Sigma
  {id:"lean-six-sigma-2003", readingNotes:"リーンとシックスシグマの統合アプローチを導入する際の実践マニュアル。DMAIC×VSMの統合手順を確認するために。製造・サービス両方に適用できる。", relatedCourses:["ie-vsm","kaizen-methods","ie-improvement-cases"]},
  // 37: Expert opinion risk
  {id:"expert-opinion-risk-2008", readingNotes:"品質リスク評価で専門家意見を活用する際の方法論として参照。デルファイ法とベイズ更新の手順を確認し、リスク定量化の精度を高めるために活用。", relatedCourses:[]},

  // ===== TPM (38-48) =====
  // 38: Nakajima TPM Development
  {id:"nakajima-tpm-1988a", readingNotes:"TPM活動を立ち上げる前の必読書。OEEの公式定義確認・TPM5本柱の理解に活用。TPMの創始者の言葉で本質を学ぶ唯一の原典。", relatedCourses:[]},
  // 39: Nakajima Introduction
  {id:"nakajima-intro-1988", readingNotes:"TPM活動の現場担当者向け入門書。16大ロスの分類と自主保全7ステップの手順を確認する参照書として実務で活用。PM分析の手順も解説されている。", relatedCourses:[]},
  // 40: Ahuja TPM impact
  {id:"ahuja-tpm-2008", readingNotes:"TPM活動の効果を定量的に示す際のエビデンス論文として活用。OEE+18%・相関係数等の数値データを経営承認取得・投資判断の根拠として使う。", relatedCourses:[]},
  // 41: Hansen OEE
  {id:"hansen-oee-2001", readingNotes:"OEEの計算・改善目標設定の参考書。World Class OEE（85%以上）の水準を業種別ベンチマークとして確認するために参照。KPIツリーの設計にも活用できる。", relatedCourses:[]},
  // 42: TPM Process Industries
  {id:"tpm-process-1994", readingNotes:"化学・食品・製紙等の連続プロセス工場でTPMを展開する際のガイドとして参照。プロセス産業特有の課題（チョコ停・速度低下）への対処法を確認するために。", relatedCourses:[]},
  // 43: RCM
  {id:"rcm-2004", readingNotes:"計画保全の設計（何を・どの頻度で保全するか）を合理的に決定する際の参考書として活用。保全戦略の論理的選択（TBM/CBM/RTF）の根拠を確認するために読む。", relatedCourses:[]},
  // 44: Motor condition monitoring
  {id:"motor-cbm-2001", readingNotes:"電動機（モーター）の予防保全・CBM設計の技術的根拠として参照。振動診断・電流解析の適用根拠・実績データを確認するために活用。", relatedCourses:[]},
  // 45: Weibull analysis
  {id:"weibull-2006", readingNotes:"設備の故障データからワイブル解析を行い、最適保全インターバルを決定する際の実践マニュアルとして活用。バスタブ曲線の理解と故障段階別対策の設計に活用。", relatedCourses:[]},
  // 46: Eti TPM review
  {id:"eti-tpm-2006", readingNotes:"TPM活動の成果をデータで示す際に参照する実証研究論文。自主保全とOEEの相関（r=0.81）という数値を保全投資の根拠として活用できる。", relatedCourses:[]},
  // 47: 設備管理教科書
  {id:"jipm-equipment-2016", readingNotes:"日本語でTPM・設備管理を学ぶ際の主要参考書。保全コスト管理の実務・設備効率の計算方法・初期管理の手順を確認するための標準参照書。", relatedCourses:[]},
  // 48: Predictive Maintenance 4.0
  {id:"predictive-maintenance-2018", readingNotes:"IoT予知保全の導入を検討・提案する際の業界調査データとして参照。保全コスト削減-25%・可用率+25%という効果数値を経営層への提案根拠として活用できる。", relatedCourses:[]},

  // ===== PS (49-63) =====
  // 49: The Goal
  {id:"the-goal-1984", readingNotes:"制約理論（ボトルネック管理）を学ぶ前に読む。小説形式で生産管理の本質を楽しみながら理解できる入門書。「ボトルネックを1時間失う=工場全体を1時間失う」の洞察が実践に直結。", relatedCourses:["ie-improvement-cases","line-balancing","ie-vsm"]},
  // 50: Thinking Fast and Slow
  {id:"kahneman-2011", readingNotes:"改善活動の意思決定・提案説得における認知バイアスを理解するために読む。なぜ「感覚的に正しそうな改善」が実際には機能しないかを心理学から理解できる。", relatedCourses:["kaizen-methods","ie-improvement-cases","ie-analysis-cases"]},
  // 51: Toyota Way
  {id:"toyota-way-2004", readingNotes:"IEを現場文化として定着させる際の参考書。なぜなぜ分析・A3思考の正しい使い方・3現主義の実践を原典から確認するために必読。", relatedCourses:["kaizen-methods","ie-improvement-cases","ie-analysis-cases"]},
  // 52: What is Strategy
  {id:"porter-strategy-1996", readingNotes:"IEによる改善活動を経営戦略と連結させるための視点を得る論文。「IE改善とオペレーショナルエクセレンスの限界」を理解し、戦略的文脈で改善を説明できるようになる。", relatedCourses:["ie-improvement-cases"]},
  // 53: Managing Unexpected
  {id:"managing-unexpected-2007", readingNotes:"製造現場のリスク管理・ヒヤリハット活動の組織論的根拠として参照。「なぜ優秀な現場でも異常が見えなくなるか」を理論的に理解し安全文化の醸成に活用。", relatedCourses:["ie-visual-management","kaizen-methods"]},
  // 54: Fifth Discipline
  {id:"fifth-discipline-1990", readingNotes:"カイゼン文化・改善する組織の設計に関する理論的背景として読む。システム思考をIEプロジェクトの問題設定に応用し、「部分最適」の罠を避けるために活用。", relatedCourses:["kaizen-methods","ie-improvement-cases","ie-vsm"]},
  // 55: Kuhn Structure
  {id:"kuhn-1962", readingNotes:"IE改善のパラダイム転換（TPS誕生・Industry 4.0等）を理解する際の思想的文脈として読む。「常識を疑う」思考法の基礎を学ぶ哲学的名著。", relatedCourses:["kaizen-methods"]},
  // 56: Competitive Advantage
  {id:"porter-competitive-1985", readingNotes:"IE改善活動のコスト優位戦略への位置付けを明確にするために読む。バリューチェーン分析でIE改善の優先順位を戦略的に決定する際の基本フレームワーク。", relatedCourses:["ie-improvement-cases"]},
  // 57: Maslow
  {id:"maslow-1943", readingNotes:"現場改善活動（QCサークル・TPMチーム）の動機設計の理論的根拠として参照。「なぜ改善提案が出ないのか」を欲求階層で診断し、制度設計の改善につなげる。", relatedCourses:["kaizen-methods"]},
  // 58: CCPM
  {id:"goldratt-ccpm-1997", readingNotes:"IEプロジェクト（改善活動の計画）にCCPM手法を適用する際の参考書として読む。改善活動の工期短縮・バッファー管理に直接適用できる実践的な書籍。", relatedCourses:["ie-improvement-cases","kaizen-methods"]},
  // 59: Influence
  {id:"cialdini-influence-1984", readingNotes:"改善提案を経営層・現場作業者に承認・実施してもらうための説得技術として活用。改善活動の推進者全員が読むべき書。6原則を意識するだけで改善提案の通りやすさが変わる。", relatedCourses:["kaizen-methods","ie-improvement-cases"]},
  // 60: Organizational Learning
  {id:"argyris-org-learning-1978", readingNotes:"改善活動が定着しない組織の問題を理論的に診断する際の参考書として読む。「改善したのに元に戻る」原因をダブルループ学習の欠如として理解し対策を打つ。", relatedCourses:["kaizen-methods","ie-improvement-cases"]},
  // 61: Balanced Scorecard
  {id:"bsc-kaplan-1996", readingNotes:"IE改善のKPIを経営戦略に接続する際の設計フレームワークとして活用。OEE・標準時間遵守率等の現場指標をBSCの内部プロセス視点に組み込む手順を確認するために。", relatedCourses:["ie-improvement-cases"]},
  // 62: Why Organizations Fail
  {id:"why-orgs-fail-2005", readingNotes:"重大事故・品質問題の再発防止の組織論的アプローチとして参照。「なぜ優秀な組織が繰り返し失敗するか」を理解し、ヒヤリハット文化・安全文化の構築に活用。", relatedCourses:["ie-visual-management","kaizen-methods"]},
  // 63: Psychological Safety
  {id:"edmondson-1999", readingNotes:"QCサークル・TPMチームが機能するための心理的安全性の確保方法として参照。改善提案制度の設計・チームリーダーの行動指針として直接適用できる実践的な研究。", relatedCourses:["kaizen-methods","ie-improvement-cases"]},

  // ===== JIS/Standards (64-72) =====
  // 64: JIS Z 8141
  {id:"jis-z8141-2001", readingNotes:"IE分析を行う際に工程記号・用語の公式定義を確認するための必携規格。分析票の作成・報告書の用語統一に使う。JIS用語を使えば社内外での意思疎通が正確になる。", relatedCourses:["operations-analysis","standard-time","line-balancing","ie-analysis-cases"]},
  // 65: JIS Z 9020
  {id:"jis-z9020-2016", readingNotes:"管理図を作成・解釈する際のJIS公式手順書として参照。管理外れ判定ルールの確認・工程能力指数の計算根拠として活用。ISO 7870との対応も確認できる。", relatedCourses:[]},
  // 66: JIPM TPM賞
  {id:"jipm-tpm-award", readingNotes:"TPM活動の成熟度評価・目標設定の基準として参照。TPM賞受賞を目指す工場の活動設計・自己診断に活用。8本柱の各活動の完成度を客観的に評価するために不可欠。", relatedCourses:[]},
  // 67: JIS Z 8101 統計用語
  {id:"jis-z8101-2015", readingNotes:"品質管理・IEで使用する統計用語の公式定義を確認する際に参照。報告書・規格文書での用語の正確な使用・国際標準との整合確認のために。", relatedCourses:["operations-analysis","standard-time"]},
  // 68: ISO 9001:2015
  {id:"iso-9001-2015", readingNotes:"QMSの設計・認証審査の準備・内部監査の際に参照する国際標準。IEの工程管理・標準作業との対応関係を確認するために。リスクベース思考とFMEAの連携も理解できる。", relatedCourses:[]},
  // 69: ISO 55001
  {id:"iso-55001-2014", readingNotes:"設備管理の戦略的計画立案（ライフサイクルコスト分析）の際に参照する国際標準。大型設備・インフラの資産管理戦略を設計する際の枠組みとして活用。", relatedCourses:[]},
  // 70: JIS Z 9090 MSA
  {id:"jis-z9090-2006", readingNotes:"測定システムの精度検証（ゲージR&R）を実施する際のJIS公式手順として参照。標準時間設定の精度保証・SPC管理図の信頼性確保の両方で使える重要規格。", relatedCourses:["standard-time"]},
  // 71: ILO 作業研究
  {id:"ilo-work-study-1992", readingNotes:"余裕率・レイティングの国際標準値の確認に使う。ILO定義を根拠とした標準時間設定の正当性確保に不可欠。途上国・新興国工場でのIE導入時にも参照される国際文書。", relatedCourses:["standard-time","operations-analysis"]},
  // 72: ものづくり白書
  {id:"monozukuri-annual", readingNotes:"日本製造業の現状把握・IE改善の業界水準との比較・政策動向の確認に活用。自社の改善活動を業界文脈に置いて説明する際の社会的根拠として参照できる。", relatedCourses:["ie-improvement-cases"]},
];
