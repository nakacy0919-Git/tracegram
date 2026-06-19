import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XCircle, ArrowRight, CheckCircle2, AlertCircle, Trophy, RefreshCcw, Eye, BookOpen, Compass, FileText, Type, Sparkles } from 'lucide-react';
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
  
  const [lang, setLang] = useState('ja'); 

  const tSize = {
    instruction: missionTextSize === 'small' ? 'text-base md:text-lg' : missionTextSize === 'large' ? 'text-xl md:text-2xl' : 'text-lg md:text-xl',
    option: missionTextSize === 'small' ? 'text-xs md:text-sm p-3' : missionTextSize === 'large' ? 'text-base md:text-lg p-5' : 'text-sm md:text-base p-4',
    explanation: missionTextSize === 'small' ? 'text-xs' : missionTextSize === 'large' ? 'text-base' : 'text-sm',
    feedbackTitle: missionTextSize === 'small' ? 'text-base' : missionTextSize === 'large' ? 'text-xl md:text-2xl' : 'text-lg md:text-xl',
    button: missionTextSize === 'small' ? 'text-sm py-2.5' : missionTextSize === 'large' ? 'text-lg md:text-xl py-4' : 'text-base py-3',
  };

  const modeMeta = {
    comprehension: { title: '読解設問ミッション', icon: <BookOpen size={22} />, color: 'text-emerald-600', desc: '入試や検定試験に近い形式で、文脈を正確に読み解く力を鍛えます。' },
    structure: { title: '構文・解剖ミッション', icon: <Compass size={22} />, color: 'text-cyan-600', desc: '英文の骨組み（SVOCや修飾関係）を指先でなぞり、英語脳の回路を作ります。' },
    summary: { title: '情報抽出・要約ミッション', icon: <FileText size={22} />, color: 'text-indigo-600', desc: '各パラグラフの核心となるキーフレーズを繋ぎ合わせ、論理構造を要約します。' },
    vocabulary: { title: '語彙・熟語ハント', icon: <Type size={22} />, color: 'text-purple-600', desc: '文脈の中から重要語彙や熟語を見つけ出し、ニュアンスまで完全にマスターします。' }
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
            <h2 className="text-xl md:text-2xl font-black">{modeMeta[currentMode].title}</h2>
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
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md border-2 border-teal-100 flex flex-col h-full">
          <span className="inline-block bg-indigo-100 text-indigo-700 font-black text-xs px-3 py-1 rounded-full mb-4 w-max flex-shrink-0">Final Task: Read Aloud</span>
          {/* 🌟 break-keep を削除して自然に改行されるように修正 */}
          <h3 className={`${tSize.instruction} font-black text-slate-800 mb-6 leading-relaxed text-left`}>{instructionText}</h3>
          <div className="mb-4 flex-shrink-0">
            <select value={readAloudTarget} onChange={(e) => { const val = e.target.value; setReadAloudTarget(val === 'all' || val === 'mission' ? val : parseInt(val, 10)); }} className="bg-slate-50 border border-slate-200 text-slate-700 font-bold rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-300 text-sm">
              <option value="mission">指定のハイライト文のみ読む</option>
              <option value="all">長文を全文通しで読む</option>
              {summaryData.paragraphs.map((p, i) => <option key={i} value={i}>第{i + 1}段落を読む</option>)}
            </select>
          </div>
          <div className="overflow-y-auto flex-1 min-h-0"><PronunciationMission key={readAloudTarget} targetSentence={readText} onComplete={handleNextTask} /></div>
          <button onClick={handleNextTask} className="mt-4 text-slate-400 hover:text-slate-500 font-bold text-xs underline flex items-center justify-center gap-1 mx-auto flex-shrink-0">このタスクをスキップして次へ</button>
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
        <div className="bg-white rounded-3xl p-5 md:p-8 shadow-md border-2 border-teal-100 flex flex-col h-full relative overflow-hidden min-h-0">
          <span className={`inline-block font-black text-xs px-3 py-1 rounded-full mb-4 w-max flex-shrink-0 ${isGlobal ? 'bg-indigo-100 text-indigo-700' : 'bg-teal-100 text-teal-700'}`}>
            {isGlobal ? 'Comprehension' : 'Multiple Choice'}
          </span>
          
          {/* 🌟 break-keep を削除して自然に改行されるように修正 */}
          <h3 className={`${tSize.instruction} font-black text-slate-800 mb-6 leading-relaxed text-left`}>{instructionText}</h3>
          
          <div className="flex flex-col gap-3 overflow-y-auto flex-1 mb-4 pr-1 min-h-0 pb-2">
            {currentTask.options.map((option, idx) => {
              const isSelected = selectedOption === idx;
              let btnClass = "border-slate-200 hover:border-teal-400 hover:bg-teal-50 text-slate-700";
              if (isAnswerRevealed) {
                if (option.isCorrect) btnClass = "border-emerald-500 bg-emerald-50 text-emerald-800";
                else if (isSelected) btnClass = "border-rose-500 bg-rose-50 text-rose-800";
                else btnClass = "border-slate-200 opacity-50";
              }
              return (
                <button 
                  key={idx} 
                  onClick={() => handleOptionSelect(idx)} 
                  disabled={isAnswerRevealed} 
                  // 🌟 選択肢の文章も自然に改行されるように break-keep を削除
                  className={`text-left rounded-xl border-2 font-bold transition-all flex-shrink-0 leading-snug ${tSize.option} ${btnClass}`}
                >
                  {option.text}
                </button>
              );
            })}
          </div>

          <AnimatePresence>
            {isAnswerRevealed && (
              <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="absolute bottom-0 left-0 right-0 p-5 bg-white/98 backdrop-blur-md border-t-2 border-slate-100 shadow-[0_-10px_30px_rgba(0,0,0,0.08)] z-20 rounded-b-3xl flex flex-col max-h-[60%] flex-shrink-0">
                <div className="overflow-y-auto flex-1 pr-1 mb-3">
                  <div className={`text-slate-600 font-bold leading-relaxed text-left w-full transition-all ${tSize.explanation}`}>
                    <span className="text-indigo-500 font-black block mb-1 text-sm">💡 Explanation:</span>
                    {explanationText}
                  </div>
                </div>
                <button onClick={handleNextTask} className={`w-full rounded-xl bg-teal-500 hover:bg-teal-400 text-white font-black transition-all flex justify-center items-center gap-2 shadow-md flex-shrink-0 whitespace-nowrap ${tSize.button}`}>
                  次へ進む <ArrowRight size={16} />
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
      <div className="bg-white rounded-3xl p-5 md:p-8 shadow-md border-2 border-teal-100 flex flex-col relative h-full overflow-hidden min-h-0">
        <span className="inline-block bg-teal-100 text-teal-700 font-black text-xs px-3 py-1 rounded-full mb-4 w-max flex-shrink-0">
          Task: {currentTask.type.toUpperCase()}
        </span>
        {/* 🌟 break-keep を削除して自然に改行されるように修正 */}
        <h3 className={`${tSize.instruction} font-black text-slate-800 mb-6 leading-relaxed text-left`}>
          {instructionText}
        </h3>
        
        <div className="flex flex-col gap-4 mt-auto flex-shrink-0">
          <div className="flex gap-2 w-full">
            <button 
              onClick={() => { setSelectedIndices([]); setTraceFeedback('idle'); }} 
              disabled={selectedIndices.length === 0} 
              className="bg-slate-200 hover:bg-slate-300 text-slate-600 px-5 rounded-xl font-black transition-all flex items-center justify-center flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed h-12 md:h-14"
              title="選択をリセット"
            >
              <RefreshCcw size={18} />
            </button>
            <button 
              onClick={judgeTrace} 
              disabled={selectedIndices.length === 0} 
              className={`flex-1 rounded-xl font-black transition-all shadow-md flex justify-center items-center gap-2 h-12 md:h-14 whitespace-nowrap ${tSize.button} ${selectedIndices.length === 0 ? 'bg-slate-200 text-slate-400 cursor-not-allowed' : 'bg-cyan-500 hover:bg-cyan-400 text-white'}`}
            >
              判定する！
            </button>
          </div>
          <button onClick={handleShowAnswer} className="text-slate-400 hover:text-slate-600 font-bold text-xs underline flex items-center justify-center gap-1 mx-auto transition-colors flex-shrink-0">
            <Eye size={14} /> 解答を見る
          </button>
        </div>

        <AnimatePresence>
          {traceFeedback !== 'idle' && (
            <motion.div 
              initial={{ opacity: 0, y: 100 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: 50 }} 
              className="absolute bottom-0 left-0 right-0 z-30 bg-white/98 backdrop-blur-xl p-5 md:p-6 rounded-t-3xl shadow-[0_-10px_30px_rgba(0,0,0,0.12)] border-t border-slate-100 flex flex-col max-h-[75%] flex-shrink-0"
            >
              {traceFeedback === 'correct' ? (
                <>
                  <div className="flex items-center gap-2 mb-3 text-emerald-500 flex-shrink-0"><CheckCircle2 size={24} /><p className={`${tSize.feedbackTitle} font-black whitespace-nowrap`}>PERFECT!</p></div>
                  <div className="overflow-y-auto flex-1 pr-1 mb-4 min-h-0">
                    <div className={`text-slate-700 font-bold text-left w-full leading-relaxed ${tSize.explanation}`}>
                      <span className="text-indigo-500 font-black block mb-1 text-sm">💡 Explanation:</span>
                      {traceExplanationText}
                    </div>
                  </div>
                  <button onClick={handleNextTask} className={`w-full rounded-xl bg-teal-500 hover:bg-teal-400 text-white font-black transition-all shadow-md flex justify-center items-center gap-2 flex-shrink-0 whitespace-nowrap ${tSize.button}`}>
                    次のタスクへ <ArrowRight size={18} />
                  </button>
                </>
              ) : (
                <>
                  <div className={`flex items-center gap-2 mb-3 flex-shrink-0 ${traceFeedback === 'wrong' ? 'text-rose-500' : 'text-amber-500'}`}>
                    {traceFeedback === 'wrong' ? <XCircle size={24} /> : <AlertCircle size={24} />}
                    <p className={`${tSize.feedbackTitle} font-black whitespace-nowrap`}>
                      {traceFeedback === 'wrong' ? (lang === 'ja' ? '不正解です' : 'Incorrect') : (lang === 'ja' ? '惜しい！' : 'Almost!')}
                    </p>
                  </div>
                  <p className={`text-slate-600 font-bold mb-5 text-left leading-relaxed flex-shrink-0 ${tSize.explanation}`}>
                    {traceFeedback === 'wrong' 
                      ? (lang === 'ja' ? 'もう一度よく探してみましょう。' : 'Please look closer and try again.')
                      : (lang === 'ja' ? 'かすっていますが、過不足なく選びましょう。' : 'You are close, but select the exact part.')}
                  </p>
                  <button onClick={() => setTraceFeedback('idle')} className={`w-full rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-black transition-all flex justify-center items-center gap-2 flex-shrink-0 whitespace-nowrap ${tSize.button}`}>
                    もう一度挑戦する <RefreshCcw size={16} />
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
    <div className="max-w-2xl mx-auto w-full flex flex-col h-full relative min-h-0">
      <div className="flex justify-between items-center mb-5 flex-shrink-0 gap-2">
        <div className={`flex items-center gap-1.5 ${modeMeta[currentMode].color} min-w-0`}>
          <div className="flex-shrink-0">{modeMeta[currentMode].icon}</div>
          <h2 className="text-lg md:text-xl font-black truncate">{modeMeta[currentMode].title}</h2>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="flex bg-slate-200/60 p-0.5 rounded-xl items-center gap-0.5">
            <button onClick={() => setLang('ja')} className={`flex items-center justify-center w-8 py-1 rounded-lg text-[11px] font-black transition-all ${lang === 'ja' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}>JA</button>
            <button onClick={() => setLang('en')} className={`flex items-center justify-center w-8 py-1 rounded-lg text-[11px] font-black transition-all ${lang === 'en' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}>EN</button>
          </div>
          <div className="flex bg-slate-200/60 p-0.5 rounded-xl items-center gap-0.5">
            <button onClick={() => setMissionTextSize('small')} className={`w-6 py-1 rounded-lg text-[11px] font-black transition-all ${missionTextSize === 'small' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}>小</button>
            <button onClick={() => setMissionTextSize('medium')} className={`w-6 py-1 rounded-lg text-[11px] font-black transition-all ${missionTextSize === 'medium' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}>中</button>
            <button onClick={() => setMissionTextSize('large')} className={`w-6 py-1 rounded-lg text-[11px] font-black transition-all ${missionTextSize === 'large' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}>大</button>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={`${currentMode}-${currentPhase}-${currentParagraphIdx}-${currentTaskIdx}`} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex-1 flex flex-col relative min-h-0">
          {renderMissionContent()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}