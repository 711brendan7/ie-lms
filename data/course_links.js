// 講座ごとの関連リソースリンク（全URL動作確認済み）
// lang:"en" のエントリは英語サイト → UIで「英語」バッジを表示

const COURSE_LINKS_BY_SUBJECT = {
  IE: {
    casesUrl:  "cases.html#ie-cases",
    papersUrl: "papers.html#ie-papers",
    externalImprovement: [
      { title: "日本能率協会（JMA）— 生産革新・工場改善",                        url: "https://www.jma.or.jp/" },
      { title: "カイゼン研究所（Kaizen Institute）— 改善事例・手法",              titleEn: "Kaizen Institute — Improvement Cases & Methodology",    url: "https://kaizen.com/", lang: "en" },
      { title: "IISE（米国産業・システム工学会）— IE事例・資料",                  titleEn: "IISE — Industrial & Systems Engineering Resources",       url: "https://www.iise.org/", lang: "en" },
    ],
    externalAnalysis: [
      { title: "J-STAGE — 日本経営工学会論文誌（JIMA）",                         url: "https://www.jstage.jst.go.jp/browse/jima/-char/ja" },
      { title: "J-STAGE — オペレーションズ・リサーチ学会誌",                     url: "https://www.jstage.jst.go.jp/browse/jorsj" },
      { title: "J-STAGE — 日本精密工学会誌",                                     url: "https://www.jstage.jst.go.jp/browse/jjspe/-char/ja" },
    ],
  },
  QC: {
    casesUrl:  "cases.html#qc-cases",
    papersUrl: "papers.html#qc-papers",
    externalImprovement: [
      { title: "JUSE（日本科学技術連盟）— QC活動・改善",                         url: "https://www.juse.or.jp/" },
      { title: "日本品質管理学会（JSQC）— 品質改善活動",                         url: "https://www.jsqc.org/" },
      { title: "日本規格協会（JSA）— ISO品質管理・規格解説",                     url: "https://www.jsa.or.jp/" },
    ],
    externalAnalysis: [
      { title: "J-STAGE — 品質工学会誌（QES）",                                  url: "https://www.jstage.jst.go.jp/browse/qes/-char/ja" },
      { title: "J-STAGE — 応用統計学（JJAS）",                                   url: "https://www.jstage.jst.go.jp/browse/jappstat/-char/ja" },
      { title: "J-STAGE — 信頼性学会誌",                                         url: "https://www.jstage.jst.go.jp/browse/reajshinrai/-char/ja" },
    ],
  },
  TPM: {
    casesUrl:  "cases.html#tpm-cases",
    papersUrl: "papers.html#tpm-papers",
    externalImprovement: [
      { title: "JIPM（日本プラントメンテナンス協会）— TPM活動",                  url: "https://www.jipm.or.jp/" },
      { title: "MENTENA — TPM活動で故障・ロス削減に成功した事例5選",             url: "https://mentena.biz/insight/tpm-cases/" },
      { title: "日本能率協会（JMA）— TPM・設備管理改善",                         url: "https://www.jma.or.jp/" },
    ],
    externalAnalysis: [
      { title: "J-STAGE — TPM関連論文検索",                                      url: "https://www.jstage.jst.go.jp/result/global/-char/ja?globalId=&item1=4&word1=TPM" },
      { title: "J-STAGE — 設備保全論文検索",                                     url: "https://www.jstage.jst.go.jp/result/global/-char/ja?globalId=&item1=4&word1=%E8%A8%AD%E5%82%99%E4%BF%9D%E5%85%A8" },
      { title: "J-STAGE — 日本経営工学会論文誌（JIMA）",                         url: "https://www.jstage.jst.go.jp/browse/jima/-char/ja" },
    ],
  },
  PS: {
    casesUrl:  "cases.html",
    papersUrl: "papers.html#ps-papers",
    externalImprovement: [
      { title: "日本能率協会（JMA）— 問題解決・経営改善",                        url: "https://www.jma.or.jp/" },
      { title: "JUSE（日本科学技術連盟）— QCサークル・小集団改善活動",           url: "https://www.juse.or.jp/" },
      { title: "Lean Enterprise Institute — リーン改善事例・資料",               titleEn: "Lean Enterprise Institute — Lean Improvement Resources",  url: "https://www.lean.org/the-lean-post/", lang: "en" },
    ],
    externalAnalysis: [
      { title: "J-STAGE — 日本経営学会誌",                                       url: "https://www.jstage.jst.go.jp/browse/keieijournal/-char/ja" },
      { title: "J-STAGE — システム制御情報学会論文誌（ISCIE）",                  url: "https://www.jstage.jst.go.jp/browse/iscie/-char/ja" },
      { title: "J-STAGE — オペレーションズ・リサーチ学会誌",                     url: "https://www.jstage.jst.go.jp/browse/jorsj" },
    ],
  },
};

// 講座IDごとの追加・上書きリンク
const COURSE_LINKS_OVERRIDE = {
  // ---- IE ----
  "ie-vsm": {
    externalImprovement: [
      { title: "トヨタ生産方式 — バリューストリーム・TPS改善",                   url: "https://www.toyota.co.jp/jpn/company/vision/production_system/" },
      { title: "Lean Enterprise Institute — VSM・リーン改善事例",               titleEn: "Lean Enterprise Institute — VSM & Lean Improvement",      url: "https://www.lean.org/the-lean-post/", lang: "en" },
      { title: "日本能率協会（JMA）— リーン生産・VSM活動",                      url: "https://www.jma.or.jp/" },
    ],
    externalAnalysis: [
      { title: "J-STAGE — VSM・リーン生産論文検索",                             url: "https://www.jstage.jst.go.jp/result/global/-char/ja?globalId=&item1=4&word1=VSM+%E3%83%AA%E3%83%BC%E3%83%B3" },
      { title: "J-STAGE — 日本精密工学会誌",                                    url: "https://www.jstage.jst.go.jp/browse/jjspe/-char/ja" },
      { title: "J-STAGE — 日本経営工学会論文誌（JIMA）",                        url: "https://www.jstage.jst.go.jp/browse/jima/-char/ja" },
    ],
  },
  "ie-smed": {
    externalImprovement: [
      { title: "日本能率協会（JMA）— 段取り改善・SMED活動",                     url: "https://www.jma.or.jp/" },
      { title: "カイゼン研究所（Kaizen Institute）— 段取り改善事例",             titleEn: "Kaizen Institute — Setup Reduction Cases",                url: "https://kaizen.com/", lang: "en" },
      { title: "JUSE（日本科学技術連盟）— 段取り時間削減・改善",                url: "https://www.juse.or.jp/" },
    ],
    externalAnalysis: [
      { title: "J-STAGE — SMED・段取り改善論文検索",                            url: "https://www.jstage.jst.go.jp/result/global/-char/ja?globalId=&item1=4&word1=SMED+%E6%AE%B5%E5%8F%96%E3%82%8A" },
      { title: "J-STAGE — 日本精密工学会誌",                                    url: "https://www.jstage.jst.go.jp/browse/jjspe/-char/ja" },
      { title: "J-STAGE — 日本経営工学会論文誌（JIMA）",                        url: "https://www.jstage.jst.go.jp/browse/jima/-char/ja" },
    ],
  },
  "standard-time": {
    externalImprovement: [
      { title: "日本能率協会（JMA）— 工数管理・標準時間設定",                   url: "https://www.jma.or.jp/" },
      { title: "IISE（米国産業・システム工学会）— Work Measurement & Standards", titleEn: "IISE — Work Measurement & Standards",                       url: "https://www.iise.org/", lang: "en" },
      { title: "日本機械学会（JSME）— 生産システム・加工技術",                  url: "https://www.jsme.or.jp/" },
    ],
    externalAnalysis: [
      { title: "J-STAGE — 標準時間・作業研究論文検索",                          url: "https://www.jstage.jst.go.jp/result/global/-char/ja?globalId=&item1=4&word1=%E6%A8%99%E6%BA%96%E6%99%82%E9%96%93" },
      { title: "J-STAGE — 日本経営工学会論文誌（JIMA）",                        url: "https://www.jstage.jst.go.jp/browse/jima/-char/ja" },
      { title: "J-STAGE — オペレーションズ・リサーチ学会誌",                   url: "https://www.jstage.jst.go.jp/browse/jorsj" },
    ],
  },
  // ---- QC ----
  "qc-7tools": {
    externalImprovement: [
      { title: "JUSE（日本科学技術連盟）— QC7つ道具・QCサークル活動",           url: "https://www.juse.or.jp/" },
      { title: "日本品質管理学会（JSQC）— 品質手法活用",                        url: "https://www.jsqc.org/" },
      { title: "日本規格協会（JSA）— QC手法・規格解説",                         url: "https://www.jsa.or.jp/" },
    ],
    externalAnalysis: [
      { title: "J-STAGE — QC7つ道具論文検索",                                   url: "https://www.jstage.jst.go.jp/result/global/-char/ja?globalId=&item1=4&word1=QC7%E3%81%A4%E9%81%93%E5%85%B7" },
      { title: "J-STAGE — 品質工学会誌（QES）",                                 url: "https://www.jstage.jst.go.jp/browse/qes/-char/ja" },
      { title: "J-STAGE — 応用統計学（JJAS）",                                  url: "https://www.jstage.jst.go.jp/browse/jappstat/-char/ja" },
    ],
  },
  "qc-spc": {
    externalImprovement: [
      { title: "JUSE（日本科学技術連盟）— SPC・管理図 活用事例",                url: "https://www.juse.or.jp/" },
      { title: "日本品質管理学会（JSQC）— 統計的工程管理",                      url: "https://www.jsqc.org/" },
      { title: "日本規格協会（JSA）— ISO/TS 16949 SPC解説",                     url: "https://www.jsa.or.jp/" },
    ],
    externalAnalysis: [
      { title: "J-STAGE — SPC・統計的品質管理論文検索",                         url: "https://www.jstage.jst.go.jp/result/global/-char/ja?globalId=&item1=4&word1=SPC+%E5%93%81%E8%B3%AA%E7%AE%A1%E7%90%86" },
      { title: "J-STAGE — 応用統計学（JJAS）",                                  url: "https://www.jstage.jst.go.jp/browse/jappstat/-char/ja" },
      { title: "J-STAGE — 品質工学会誌（QES）",                                 url: "https://www.jstage.jst.go.jp/browse/qes/-char/ja" },
    ],
  },
  "qc-fmea-fta": {
    externalImprovement: [
      { title: "JUSE（日本科学技術連盟）— FMEA・FTA活用による品質改善",         url: "https://www.juse.or.jp/" },
      { title: "日本品質管理学会（JSQC）— リスク分析・信頼性",                  url: "https://www.jsqc.org/" },
      { title: "日本規格協会（JSA）— AIAG-VDA FMEA規格解説",                   url: "https://www.jsa.or.jp/" },
    ],
    externalAnalysis: [
      { title: "J-STAGE — FMEA論文検索",                                        url: "https://www.jstage.jst.go.jp/result/global/-char/ja?globalId=&item1=4&word1=FMEA" },
      { title: "J-STAGE — 信頼性学会誌",                                        url: "https://www.jstage.jst.go.jp/browse/reajshinrai/-char/ja" },
      { title: "J-STAGE — 品質工学会誌（QES）",                                 url: "https://www.jstage.jst.go.jp/browse/qes/-char/ja" },
    ],
  },
  // ---- TPM ----
  "tpm-autonomous": {
    externalImprovement: [
      { title: "JIPM（日本プラントメンテナンス協会）— 自主保全",                url: "https://www.jipm.or.jp/" },
      { title: "MENTENA — 自主保全でOEE改善した事例",                           url: "https://mentena.biz/insight/tpm-cases/" },
      { title: "日本能率協会（JMA）— 自主保全・設備管理",                       url: "https://www.jma.or.jp/" },
    ],
    externalAnalysis: [
      { title: "J-STAGE — 自主保全論文検索",                                    url: "https://www.jstage.jst.go.jp/result/global/-char/ja?globalId=&item1=4&word1=%E8%87%AA%E4%B8%BB%E4%BF%9D%E5%85%A8" },
      { title: "J-STAGE — 設備保全論文検索",                                    url: "https://www.jstage.jst.go.jp/result/global/-char/ja?globalId=&item1=4&word1=%E8%A8%AD%E5%82%99%E4%BF%9D%E5%85%A8" },
      { title: "J-STAGE — 日本経営工学会論文誌（JIMA）",                        url: "https://www.jstage.jst.go.jp/browse/jima/-char/ja" },
    ],
  },
  "tpm-oee": {
    externalImprovement: [
      { title: "JIPM（日本プラントメンテナンス協会）— OEE改善",                 url: "https://www.jipm.or.jp/" },
      { title: "MENTENA — OEEで設備稼働率を改善した事例",                       url: "https://mentena.biz/insight/tpm-cases/" },
      { title: "日本能率協会（JMA）— 設備総合効率改善",                         url: "https://www.jma.or.jp/" },
    ],
    externalAnalysis: [
      { title: "J-STAGE — OEE・設備総合効率論文検索",                           url: "https://www.jstage.jst.go.jp/result/global/-char/ja?globalId=&item1=4&word1=OEE+%E8%A8%AD%E5%82%99%E7%B7%8F%E5%90%88%E5%8A%B9%E7%8E%87" },
      { title: "J-STAGE — TPM関連論文検索",                                     url: "https://www.jstage.jst.go.jp/result/global/-char/ja?globalId=&item1=4&word1=TPM" },
      { title: "J-STAGE — 日本経営工学会論文誌（JIMA）",                        url: "https://www.jstage.jst.go.jp/browse/jima/-char/ja" },
    ],
  },
  "tpm-implementation": {
    externalImprovement: [
      { title: "JIPM（日本プラントメンテナンス協会）— JIPM賞",                  url: "https://www.jipm.or.jp/" },
      { title: "MENTENA — TPM導入・定着の成功事例",                             url: "https://mentena.biz/insight/tpm-cases/" },
      { title: "日本能率協会（JMA）— TPM推進・展開",                            url: "https://www.jma.or.jp/" },
    ],
    externalAnalysis: [
      { title: "J-STAGE — TPM推進・組織変革論文検索",                           url: "https://www.jstage.jst.go.jp/result/global/-char/ja?globalId=&item1=4&word1=TPM+%E6%8E%A8%E9%80%B2" },
      { title: "J-STAGE — 設備保全論文検索",                                    url: "https://www.jstage.jst.go.jp/result/global/-char/ja?globalId=&item1=4&word1=%E8%A8%AD%E5%82%99%E4%BF%9D%E5%85%A8" },
      { title: "J-STAGE — 日本経営工学会論文誌（JIMA）",                        url: "https://www.jstage.jst.go.jp/browse/jima/-char/ja" },
    ],
  },
};

/**
 * 講座オブジェクトを渡すと、関連リソースリンクを返す
 */
function getCourseLinks(course) {
  const subject = course.subject || 'IE';
  const base = COURSE_LINKS_BY_SUBJECT[subject] || COURSE_LINKS_BY_SUBJECT['IE'];
  const override = COURSE_LINKS_OVERRIDE[course.id] || {};
  return {
    casesUrl:            base.casesUrl,
    papersUrl:           base.papersUrl,
    externalImprovement: override.externalImprovement || base.externalImprovement,
    externalAnalysis:    override.externalAnalysis    || base.externalAnalysis,
  };
}
