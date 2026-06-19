import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XCircle, ArrowRight, CheckCircle2, AlertCircle, Trophy, RefreshCcw, Eye, BookOpen, Compass, FileText, Type, Sparkles, Languages } from 'lucide-react';
import PronunciationMission from './PronunciationMission';

export default function MissionPane({
  currentMode,
  currentPhase,
  currentTask,
  currentParagraphIdx,
  currentTaskIdx,
  summaryData,
  traceFeedback,
  selectedIndices,
  selectedOption,
  isAnswerRevealed,
  readAloudTarget,
  missionTextSize,
  setMissionTextSize,
  onExit,
  handleNextTask,
  handleOptionSelect,
  judgeTrace,
  handleShowAnswer,
  setSelectedIndices,
  setTraceFeedback,
  setReadAloudTarget
}) {
  
  // 🌟 NEW: 日・英の言語切り替えState
  const [lang, setLang] = useState('ja'); // 'ja' または 'en'

  const tSize = {
    instruction: missionTextSize === 'small' ? 'text-lg' : missionTextSize === 'large' ? 'text-2xl' : 'text-xl',
    option: missionTextSize === 'small' ? 'text-sm p-3' : missionTextSize === 'large' ? 'text-lg p-5' : 'text-base p-4',
    explanation: missionTextSize === 'small' ? 'text-xs' : missionTextSize === 'large' ? 'text-base' : 'text-sm',
    feedbackTitle: missionTextSize === 'small' ? 'text-lg' : missionTextSize === 'large' ? 'text-2xl' : 'text-xl',
    button: missionTextSize === 'small' ? 'text-base py-3' : missionTextSize === 'large' ? 'text-xl py-5' : 'text-lg py-4',
  };

  const modeMeta = {
    comprehension: { title: '読解設問ミッション', icon: <BookOpen size={24} />, color: 'text-emerald-600', desc: '入試や検定試験に近い形式で、文脈を正確に読み解く力を鍛えます。' },
    structure: { title: '構文・解剖ミッション', icon: <Compass size={24} />, color: 'text-cyan-600', desc: '英文の骨組み（SVOCや修飾関係）を指先でなぞり、英語脳の回路を作ります。' },
    summary: { title: '情報抽出・要約ミッション', icon: <FileText size={24} />, color: 'text-indigo-600', desc: '各パラグラフの核心となるキーフレーズを繋ぎ合わせ、論理構造を要約します。' },
    vocabulary: { title: '語彙・熟語ハント', icon: <Type size={24} />, color: 'text-purple-600', desc: '文脈の中から重要語彙や熟語を見つけ出し、ニュアンスまで完全にマスターします。' }
  };

  if (currentPhase === 'completed') {
    return (
      <div className="bg-white rounded-3xl p-10 shadow-md border-2 border-emerald-100 flex flex-col items-center justify-center text-center mt-6 h-full relative">
        <Trophy size={64} className="text-yellow-400 mb-6 drop-shadow-md" />
        <h2 className="text-3xl font-black text-slate-800 mb-4">MODE CLEARED!</h2>
        <p className="text-slate-500 font-bold mb-8">このモードの全タスクを見事にクリアしました！</p>
        <button onClick={onExit} className="px-10 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-black text-xl transition-all shadow-md">
          メニューへ戻る
        </button>
      </div>
    );
  }

  if (!currentTask) {
    return (
      <div className="max-w-2xl mx-auto w-full flex flex-col h-full relative">
        <div className="flex justify-between items-center mb-6 flex-shrink-0">
          <div className={`flex items-center gap-2 ${modeMeta[currentMode].color}`}>
            {modeMeta[currentMode].icon}
            <h2 className="text-2xl font-black">{modeMeta[currentMode].title}</h2>
          </div>
        </div>
        <div className="bg-white rounded-3xl p-10 shadow-md border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center my-auto min-h-[350px]">
          <div className={`p-4 rounded-full bg-slate-50 mb-4 ${modeMeta[currentMode].color}`}>
            {modeMeta[currentMode].icon}
          </div>
          <h3 className="text-xl font-black text-slate-700 mb-2">{modeMeta[currentMode].title}の土台が完成！</h3>
          <p className="text-slate-400 font-bold max-w-sm mb-6 text-sm leading-relaxed">{modeMeta[currentMode].desc}</p>
          <div className="flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-2 rounded-xl text-xs font-black border border-amber-200">
            <Sparkles size={14} /> データ構造のパワーアップ待ちです
          </div>
        </div>
      </div>
    );
  }

  // 🌟 言語に応じたテキストの取得
  const instructionText = lang === 'ja' ? (currentTask.instructionJa || currentTask.instruction) : (currentTask.instructionEn || currentTask.instruction);

  const renderMissionContent = () => {
    // 🗣️ 音読ミッション
    if (currentTask.type === 'voice') {
      let readText = currentTask.targetSentence;
      if (readAloudTarget === 'all') {
        readText = summaryData.paragraphs.map(p => p.rawText || p.tokens.join(' ')).join(' ');
      } else if (typeof readAloudTarget === 'number') {
        readText = summaryData.paragraphs[readAloudTarget].rawText || summaryData.paragraphs[readAloudTarget].tokens.join(' ');
      }
      return (
        <div className="bg-white rounded-3xl p-8 shadow-md border-2 border-teal-100 flex flex-col h-full">
          <span className="inline-block bg-indigo-100 text-indigo-700 font-black text-sm px-3 py-1 rounded-full mb-4 w-max">Final Task: Read Aloud</span>
          <h3 className={`${tSize.instruction} font-black text-slate-800 mb-6 leading-relaxed text-left transition-all`}>{instructionText}</h3>
          <div className="mb-4">
            <select value={readAloudTarget} onChange={(e) => { const val = e.target.value; setReadAloudTarget(val === 'all' || val === 'mission' ? val : parseInt(val, 10)); }} className="bg-slate-50 border border-slate-200 text-slate-700 font-bold rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-300">
              <option value="mission">指定のハイライト文のみ読む</option>
              <option value="all">長文を全文通しで読む</option>
              {summaryData.paragraphs.map((p, i) => <option key={i} value={i}>第{i + 1}段落を読む</option>)}
            </select>
          </div>
          <div><PronunciationMission key={readAloudTarget} targetSentence={readText} onComplete={handleNextTask} /></div>
          <button onClick={handleNextTask} className="mt-6 text-slate-400 hover:text-slate-500 font-bold text-sm underline flex items-center justify-center gap-1 mx-auto transition-colors">このタスクをスキップして次へ</button>
        </div>
      );
    }

    // 🔘 選択問題ミッション
    if (currentTask.type === 'select') {
      const isGlobal = currentPhase === 'global';
      const explanationText = isAnswerRevealed && selectedOption !== null 
        ? (lang === 'ja' ? (currentTask.options[selectedOption].explanationJa || currentTask.options[selectedOption].explanation) : (currentTask.options[selectedOption].explanationEn || currentTask.options[selectedOption].explanation)) 
        : "";

      return (
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md border-2 border-teal-100 flex flex-col h-full relative overflow-hidden">
          <span className={`inline-block font-black text-sm px-3 py-1 rounded-full mb-4 w-max ${isGlobal ? 'bg-indigo-100 text-indigo-700' : 'bg-teal-100 text-teal-700'}`}>
            {isGlobal ? 'Comprehension' : 'Multiple Choice'}
          </span>
          <h3 className={`${tSize.instruction} font-black text-slate-800 mb-6 leading-relaxed text-left transition-all`}>{instructionText}</h3>
          
          <div className="flex flex-col gap-3">
            {currentTask.options.map((option, idx) => {
              const isSelected = selectedOption === idx;
              let btnClass = "border-slate-200 hover:border-teal-400 hover:bg-teal-50 text-slate-700";
              if (isAnswerRevealed) {
                if (option.isCorrect) btnClass = "border-emerald-500 bg-emerald-50 text-emerald-800";
                else if (isSelected) btnClass = "border-rose-500 bg-rose-50 text-rose-800";
                else btnClass = "border-slate-200 opacity-50";
              }
              return (
                <button key={idx} onClick={() => handleOptionSelect(idx)} disabled={isAnswerRevealed} className={`text-left rounded-xl border-2 font-bold transition-all ${tSize.option} ${btnClass}`}>
                  {option.text}
                </button>
              );
            })}
          </div>

          {/* 🌟 選択問題の解説ポップアップ */}
          <AnimatePresence>
            {isAnswerRevealed && (
              <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="absolute bottom-0 left-0 right-0 p-6 bg-white/95 backdrop-blur-md border-t-2 border-slate-200 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-20 rounded-b-3xl">
                <div className={`text-slate-600 font-bold leading-relaxed text-left w-full transition-all mb-4 ${tSize.explanation}`}>
                  <span className="text-indigo-500 font-black block mb-2 text-base">💡 Explanation:</span>
                  {explanationText}
                </div>
                <button onClick={handleNextTask} className={`w-full rounded-xl bg-teal-500 hover:bg-teal-400 text-white font-black transition-all flex justify-center items-center gap-2 shadow-md ${tSize.button}`}>
                  次へ進む <ArrowRight size={18} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    }

    // 🎯 トレース・タップ問題
    const traceExplanationText = lang === 'ja' ? (currentTask.explanationJa || currentTask.explanation) : (currentTask.explanationEn || currentTask.explanation);

    return (
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md border-2 border-teal-100 flex flex-col relative h-full overflow-hidden">
        <span className="inline-block bg-teal-100 text-teal-700 font-black text-sm px-3 py-1 rounded-full mb-4 w-max">
          Task: {currentTask.type.toUpperCase()}
        </span>
        <h3 className={`${tSize.instruction} font-black text-slate-800 mb-6 leading-relaxed text-left transition-all`}>
          {instructionText}
        </h3>
        
        {/* 🌟 無駄な固定ボックスを完全に削除し、すっきりさせました */}
        
        <div className="flex flex-col gap-4 mt-auto">
          <div className="flex gap-2">
            <button onClick={() => { setSelectedIndices([]); setTraceFeedback('idle'); }} disabled={selectedIndices.length === 0} className="bg-slate-200 hover:bg-slate-300 text-slate-600 px-6 rounded-xl font-black transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed" title="選択をリセット">
              <RefreshCcw size={20} />
            </button>
            <button onClick={judgeTrace} disabled={selectedIndices.length === 0} className={`flex-1 rounded-xl font-black transition-all shadow-md flex justify-center items-center gap-2 ${tSize.button} ${selectedIndices.length === 0 ? 'bg-slate-200 text-slate-400 cursor-not-allowed' : 'bg-cyan-500 hover:bg-cyan-400 text-white'}`}>
              判定する！
            </button>
          </div>
          <button onClick={handleShowAnswer} className="text-slate-400 hover:text-slate-600 font-bold text-sm underline flex items-center justify-center gap-1 mx-auto transition-colors mt-1">
            <Eye size={16} /> どうしてもわからないので解答を見る
          </button>
        </div>

        {/* 🌟 判定後の美しすぎる解説ポップアップモーダル */}
        <AnimatePresence>
          {traceFeedback !== 'idle' && (
            <motion.div 
              initial={{ opacity: 0, y: 100 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: 50 }} 
              className="absolute bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-xl p-6 md:p-8 rounded-t-3xl shadow-[0_-20px_50px_rgba(0,0,0,0.15)] border-t border-slate-200"
            >
              {traceFeedback === 'correct' ? (
                <>
                  <div className="flex items-center gap-2 mb-4 text-emerald-500"><CheckCircle2 size={32} /><p className={`${tSize.feedbackTitle} font-black`}>PERFECT!</p></div>
                  <div className={`text-slate-700 font-bold text-left w-full leading-relaxed transition-all mb-6 ${tSize.explanation}`}>
                    <span className="text-indigo-500 font-black block mb-1">💡 Explanation:</span>
                    {traceExplanationText}
                  </div>
                  <button onClick={handleNextTask} className={`w-full rounded-xl bg-teal-500 hover:bg-teal-400 text-white font-black transition-all shadow-md flex justify-center items-center gap-2 ${tSize.button}`}>
                    次のタスクへ <ArrowRight size={20} />
                  </button>
                </>
              ) : (
                <>
                  <div className={`flex items-center gap-3 mb-4 ${traceFeedback === 'wrong' ? 'text-rose-500' : 'text-amber-500'}`}>
                    {traceFeedback === 'wrong' ? <XCircle size={32} /> : <AlertCircle size={32} />}
                    <p className={`${tSize.feedbackTitle} font-black`}>
                      {traceFeedback === 'wrong' ? (lang === 'ja' ? '不正解です' : 'Incorrect') : (lang === 'ja' ? '惜しい！' : 'Almost!')}
                    </p>
                  </div>
                  <p className={`text-slate-600 font-bold mb-6 ${tSize.explanation}`}>
                    {traceFeedback === 'wrong' 
                      ? (lang === 'ja' ? 'もう一度よく探してみましょう。' : 'Please look closer and try again.')
                      : (lang === 'ja' ? 'かすっていますが、過不足なく選びましょう。' : 'You are close, but select the exact part.')}
                  </p>
                  <button onClick={() => setTraceFeedback('idle')} className={`w-full rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 font-black transition-all flex justify-center items-center gap-2 ${tSize.button}`}>
                    もう一度挑戦する <RefreshCcw size={20} />
                  </button>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <div className="max-w-2xl mx-auto w-full flex flex-col h-full relative">
      {/* 🌟 コントローラー部：言語切り替えボタン（JA/EN）を追加 */}
      <div className="flex justify-between items-center mb-6 flex-shrink-0">
        <div className={`flex items-center gap-2 ${modeMeta[currentMode].color}`}>
          {modeMeta[currentMode].icon}
          <h2 className="text-2xl font-black">{modeMeta[currentMode].title}</h2>
        </div>
        <div className="flex items-center gap-3">
          {/* 言語切り替えトグル */}
          <div className="flex bg-slate-200/60 p-1 rounded-xl items-center gap-1">
            <button onClick={() => setLang('ja')} className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-black transition-all ${lang === 'ja' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}>JA</button>
            <button onClick={() => setLang('en')} className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-black transition-all ${lang === 'en' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}>EN</button>
          </div>
          {/* サイズ切り替え */}
          <div className="flex bg-slate-200/60 p-1 rounded-xl items-center gap-1">
            <button onClick={() => setMissionTextSize('small')} className={`px-2 py-1.5 rounded-lg text-xs font-black transition-all ${missionTextSize === 'small' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}>小</button>
            <button onClick={() => setMissionTextSize('medium')} className={`px-2 py-1.5 rounded-lg text-xs font-black transition-all ${missionTextSize === 'medium' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}>中</button>
            <button onClick={() => setMissionTextSize('large')} className={`px-2 py-1.5 rounded-lg text-xs font-black transition-all ${missionTextSize === 'large' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}>大</button>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={`${currentMode}-${currentPhase}-${currentParagraphIdx}-${currentTaskIdx}`} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex-1 flex flex-col relative">
          {renderMissionContent()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}