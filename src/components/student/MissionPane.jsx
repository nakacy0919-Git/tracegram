import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XCircle, ArrowRight, CheckCircle2, AlertCircle, Trophy, RefreshCcw, Eye, PenTool } from 'lucide-react';
import PronunciationMission from './PronunciationMission';

export default function MissionPane({
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
  
  // 🌟 文字サイズ設定の定義（小・中・大）
  const tSize = {
    instruction: missionTextSize === 'small' ? 'text-lg' : missionTextSize === 'large' ? 'text-2xl' : 'text-xl',
    option: missionTextSize === 'small' ? 'text-sm p-3' : missionTextSize === 'large' ? 'text-lg p-5' : 'text-base p-4',
    explanation: missionTextSize === 'small' ? 'text-xs' : missionTextSize === 'large' ? 'text-base' : 'text-sm',
    feedbackTitle: missionTextSize === 'small' ? 'text-lg' : missionTextSize === 'large' ? 'text-2xl' : 'text-xl',
    button: missionTextSize === 'small' ? 'text-base py-3' : missionTextSize === 'large' ? 'text-xl py-5' : 'text-lg py-4',
  };

  // 🏆 全クリア画面
  if (currentPhase === 'completed') {
    return (
      <div className="bg-white rounded-3xl p-10 shadow-md border-2 border-emerald-100 flex flex-col items-center justify-center text-center mt-6 h-full">
        <Trophy size={64} className="text-yellow-400 mb-6 drop-shadow-md" />
        <h2 className="text-3xl font-black text-slate-800 mb-4">CHALLENGE CLEARED!</h2>
        <p className="text-slate-500 font-bold mb-8">長文の論理展開を完璧に捉え切りました。</p>
        <button onClick={onExit} className="px-10 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-black text-xl transition-all shadow-md">
          メニューへ戻る
        </button>
      </div>
    );
  }

  if (!currentTask) return null;

  // 各ミッションの内容をレンダリングする関数
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
          <span className="inline-block bg-indigo-100 text-indigo-700 font-black text-sm px-3 py-1 rounded-full mb-4 w-max">
            Final Task: Read Aloud
          </span>
          <h3 className={`${tSize.instruction} font-black text-slate-800 mb-6 leading-relaxed text-left transition-all`}>
            {currentTask.instruction}
          </h3>
          
          <div className="mb-4">
            <select 
              value={readAloudTarget}
              onChange={(e) => {
                const val = e.target.value;
                setReadAloudTarget(val === 'all' || val === 'mission' ? val : parseInt(val, 10));
              }}
              className="bg-slate-50 border border-slate-200 text-slate-700 font-bold rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-300"
            >
              <option value="mission">指定のハイライト文のみ読む</option>
              <option value="all">長文を全文通しで読む</option>
              {summaryData.paragraphs.map((p, i) => <option key={i} value={i}>第{i + 1}段落を読む</option>)}
            </select>
          </div>
          <div>
            <PronunciationMission key={readAloudTarget} targetSentence={readText} onComplete={handleNextTask} />
          </div>
          <button 
            onClick={handleNextTask} 
            className="mt-6 text-slate-400 hover:text-slate-500 font-bold text-sm underline flex items-center justify-center gap-1 mx-auto transition-colors"
          >
            このタスクをスキップして次へ
          </button>
        </div>
      );
    }

    // 🔘 選択問題ミッション
    if (currentTask.type === 'select') {
      const isGlobal = currentPhase === 'global';
      return (
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md border-2 border-teal-100 flex flex-col h-full">
          <span className={`inline-block font-black text-sm px-3 py-1 rounded-full mb-4 w-max ${isGlobal ? 'bg-indigo-100 text-indigo-700' : 'bg-teal-100 text-teal-700'}`}>
            {isGlobal ? 'Comprehension' : 'Multiple Choice'}
          </span>
          <h3 className={`${tSize.instruction} font-black text-slate-800 mb-6 leading-relaxed text-left transition-all`}>
            {currentTask.instruction}
          </h3>
          
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

          {isAnswerRevealed && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className={`text-slate-600 font-bold leading-relaxed text-left w-full transition-all ${tSize.explanation}`}>
                <span className="text-indigo-500 font-black block mb-2 text-base">💡 解説:</span>
                {currentTask.options[selectedOption].explanation}
              </div>
              <button onClick={handleNextTask} className={`mt-5 w-full rounded-lg bg-teal-500 hover:bg-teal-400 text-white font-black transition-all flex justify-center items-center gap-2 ${tSize.button}`}>
                次へ進む <ArrowRight size={18} />
              </button>
            </motion.div>
          )}
        </div>
      );
    }

    // 🎯 トレース・タップ・アナライズ問題
    return (
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md border-2 border-teal-100 flex flex-col relative h-full">
        <span className="inline-block bg-teal-100 text-teal-700 font-black text-sm px-3 py-1 rounded-full mb-4 w-max">
          Task: {currentTask.type.toUpperCase()}
        </span>
        <h3 className={`${tSize.instruction} font-black text-slate-800 mb-6 leading-relaxed text-left transition-all`}>
          {currentTask.instruction}
        </h3>
        
        <div className="w-full flex flex-col items-start justify-center bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 p-5 text-left mb-6 min-h-[120px]">
          <AnimatePresence mode="wait">
            {traceFeedback === 'idle' && (
              <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <p className="text-slate-500 font-bold">左の長文で正解だと思う部分をなぞるかタップしてください。</p>
              </motion.div>
            )}
            {traceFeedback === 'wrong' && (
              <motion.div key="wrong" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ opacity: 0 }} className="text-rose-500 font-black flex items-center gap-3">
                <XCircle size={28} />
                <p>不正解。もう一度よく探してみましょう。</p>
              </motion.div>
            )}
            {traceFeedback === 'partial' && (
              <motion.div key="partial" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ opacity: 0 }} className="text-amber-500 font-black flex items-center gap-3">
                <AlertCircle size={28} />
                <p>惜しい！かすっていますが、過不足なく選びましょう。</p>
              </motion.div>
            )}
            {traceFeedback === 'correct' && (
              <motion.div key="correct" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ opacity: 0 }} className="text-emerald-500 font-black flex flex-col items-start w-full">
                <div className="flex items-center gap-2 mb-3"><CheckCircle2 size={32} /><p className={tSize.feedbackTitle}>PERFECT!</p></div>
                <div className={`text-slate-600 bg-white p-4 rounded-xl border border-slate-200 shadow-sm text-left w-full leading-relaxed transition-all ${tSize.explanation}`}>
                  <span className="text-indigo-500 font-black block mb-1">💡 解説:</span>
                  {currentTask.explanation}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {traceFeedback === 'correct' ? (
          <button onClick={handleNextTask} className={`w-full rounded-xl bg-teal-500 hover:bg-teal-400 text-white font-black transition-all shadow-md flex justify-center items-center gap-2 animate-bounce mt-auto ${tSize.button}`}>
            次のタスクへ <ArrowRight size={20} />
          </button>
        ) : (
          <div className="flex flex-col gap-4 mt-auto">
            <div className="flex gap-2">
              <button 
                onClick={() => { setSelectedIndices([]); setTraceFeedback('idle'); }} 
                disabled={selectedIndices.length === 0}
                className="bg-slate-200 hover:bg-slate-300 text-slate-600 px-6 rounded-xl font-black transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                title="選択をリセット"
              >
                <RefreshCcw size={20} />
              </button>
              <button 
                onClick={judgeTrace} 
                disabled={selectedIndices.length === 0} 
                className={`flex-1 rounded-xl font-black transition-all shadow-md flex justify-center items-center gap-2 ${tSize.button} ${selectedIndices.length === 0 ? 'bg-slate-200 text-slate-400 cursor-not-allowed' : 'bg-cyan-500 hover:bg-cyan-400 text-white'}`}
              >
                判定する！
              </button>
            </div>
            
            <button 
              onClick={handleShowAnswer}
              className="text-slate-400 hover:text-slate-600 font-bold text-sm underline flex items-center justify-center gap-1 mx-auto transition-colors mt-1"
            >
              <Eye size={16} /> どうしてもわからないので解答を見る
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="max-w-2xl mx-auto w-full flex flex-col h-full">
      {/* 🌟 右画面専用の固定ヘッダー ＆ 文字サイズコントローラー */}
      <div className="flex justify-between items-center mb-6 flex-shrink-0">
        <div className="flex items-center gap-2 text-teal-600">
          <PenTool size={24} />
          <h2 className="text-2xl font-black">Mission</h2>
        </div>
        <div className="flex bg-slate-200/60 p-1 rounded-xl items-center gap-1">
          <button onClick={() => setMissionTextSize('small')} className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all ${missionTextSize === 'small' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}>小</button>
          <button onClick={() => setMissionTextSize('medium')} className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all ${missionTextSize === 'medium' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}>中</button>
          <button onClick={() => setMissionTextSize('large')} className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all ${missionTextSize === 'large' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}>大</button>
        </div>
      </div>

      {/* アニメーションしながらコンテンツを切り替え */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={`${currentPhase}-${currentParagraphIdx}-${currentTaskIdx}`} 
          initial={{ opacity: 0, x: 20 }} 
          animate={{ opacity: 1, x: 0 }} 
          exit={{ opacity: 0, x: -20 }} 
          className="flex-1 flex flex-col"
        >
          {renderMissionContent()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}