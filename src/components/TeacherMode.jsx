"use client";
import React, { useState } from 'react';
import { SplitSquareHorizontal, Save, CheckCircle2, Pointer, Sparkles } from 'lucide-react';

const TARGET_OPTIONS = {
  "S (主語)": "この文の主語（S）をすべてなぞってください。",
  "V (述語動詞)": "この文の述語動詞（V）をなぞってください。",
  "O (目的語)": "この文の目的語（O）をすべてなぞってください。",
  "C (補語)": "この文の補語（C）をすべてなぞってください。",
  "M (修飾語)": "光っている単語を修飾している塊（M）をすべてなぞってください。",
  "名詞節 (Noun Clause)": "名詞の働きをする塊（名詞節）をすべてなぞってください。",
  "形容詞節 / 関係詞節": "光っている名詞を修飾している塊（関係詞節など）をなぞってください。",
  "副詞節 (Adverb Clause)": "時・理由・条件などを表す塊（副詞節）をなぞってください。",
  "分詞構文": "分詞構文の塊をすべてなぞってください。",
  "真主語 / 真目的語": "光っている it が指し示す「真の主語/目的語」の塊をなぞってください。",
  "強調構文の強調部分": "It is ~ that... の構文で強調されている部分をなぞってください。",
  "同格のまとまり": "光っている名詞を具体的に説明している「同格」の塊をなぞってください。"
};

export default function TeacherMode({ addCustomProblem }) {
  const [inputText, setInputText] = useState("");
  const [tokens, setTokens] = useState([]);
  const [selectedIndices, setSelectedIndices] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [savedMessage, setSavedMessage] = useState("");

  const [targetRole, setTargetRole] = useState(Object.keys(TARGET_OPTIONS)[0]);
  const [hint, setHint] = useState(TARGET_OPTIONS[Object.keys(TARGET_OPTIONS)[0]]);
  const [translation, setTranslation] = useState(""); // ★ これを追加
  
  const [settingMode, setSettingMode] = useState("trace"); // "trace" | "glow"
  
  // ★ 複数の単語を光らせるための配列に変更
  const [modifiedIndices, setModifiedIndices] = useState([]);

  const handleSplit = () => {
    const splitTokens = inputText.trim().split(/\s+/).filter(t => t.length > 0);
    setTokens(splitTokens);
    setSelectedIndices([]);
    setModifiedIndices([]); // 分割時にリセット
    setSavedMessage("");
  };

  const handleRoleChange = (e) => {
    const role = e.target.value;
    setTargetRole(role);
    setHint(TARGET_OPTIONS[role]);
  };

  const handlePointerDown = (e, idx) => {
    if (settingMode === "glow") {
      // ★ 光らせる単語の追加・解除（トグル）ロジック
      setModifiedIndices(prev => {
        if (prev.includes(idx)) {
          return prev.filter(i => i !== idx); // すでに選ばれていたら解除
        } else {
          return [...prev, idx].sort((a, b) => a - b); // 選ばれていなければ追加
        }
      });
      return;
    }
    // なぞるモードの場合
    setIsDragging(true); 
    setSelectedIndices([idx]); 
  };
  
  const handlePointerMove = (e) => {
    if (!isDragging || settingMode === "glow") return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const element = document.elementFromPoint(clientX, clientY);

    if (element && element.hasAttribute('data-teacher-token-idx')) {
      const idx = parseInt(element.getAttribute('data-teacher-token-idx'), 10);
      setSelectedIndices(prev => {
        if (!prev.includes(idx)) return [...prev, idx].sort((a, b) => a - b);
        return prev;
      });
    }
  };

  const handlePointerUp = () => setIsDragging(false);

  const handleSave = () => {
    if (selectedIndices.length === 0) {
      alert("正解となる単語を選択（なぞって指定）してください！"); return;
    }

    const newProblem = {
      id: `custom-${Date.now()}`,
      tokens: tokens,
      targetIndices: selectedIndices,
      targetRole: targetRole,
      hint: hint,
      modifiedIndices: modifiedIndices // ★ 複数の光る単語を保存
    };

    addCustomProblem(newProblem); 
    setSavedMessage("課題を登録しました！生徒モードで遊べます。");
    setTimeout(() => setSavedMessage(""), 3000);
    
    setInputText(""); setTokens([]); setSelectedIndices([]); setModifiedIndices([]); setTranslation("");
  };

  return (
    <div className="flex-1 p-6 overflow-y-auto touch-none" onPointerMove={handlePointerMove} onPointerUp={handlePointerUp} onTouchMove={handlePointerMove} onTouchEnd={handlePointerUp}>
      <div className="max-w-4xl mx-auto mt-6">
        <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center tracking-wider">問題作成（先生モード）</h2>

        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 mb-6 shadow-lg">
          <h3 className="text-xl font-bold text-white mb-4">1. 英文を入力</h3>
          <div className="flex flex-col md:flex-row gap-4">
            <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder="例: The cute cat sleeps on the sofa." className="flex-1 bg-slate-800 border border-slate-600 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500" />
            <button onClick={handleSplit} disabled={!inputText.trim()} className="bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 text-white font-bold py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2">
              <SplitSquareHorizontal size={20} /> 単語に分割
            </button>
          </div>
        </div>

        {tokens.length > 0 && (
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 shadow-lg animate-in fade-in duration-500">
            <h3 className="text-xl font-bold text-white mb-4">2. 正解と修飾先の設定</h3>
            
            <div className="flex gap-4 mb-4">
              <button onClick={() => setSettingMode("trace")} className={`flex-1 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors border ${settingMode === "trace" ? "bg-emerald-600 border-emerald-400 text-white" : "bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700"}`}>
                <Pointer size={20} /> 正解の塊をなぞる
              </button>
              <button onClick={() => setSettingMode("glow")} className={`flex-1 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors border ${settingMode === "glow" ? "bg-purple-600 border-purple-400 text-white shadow-[0_0_15px_rgba(168,85,247,0.5)]" : "bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700"}`}>
                <Sparkles size={20} /> 光らせる単語を選ぶ（複数可）
              </button>
            </div>
            
            <div className="flex flex-wrap gap-x-2 gap-y-4 p-6 bg-slate-950/50 rounded-xl border border-slate-800 mb-8">
              {tokens.map((token, idx) => {
                const isSelected = selectedIndices.includes(idx);
                const isGlowing = modifiedIndices.includes(idx); // ★ 複数選択に対応
                
                let btnClass = "bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700";
                if (isGlowing) {
                  btnClass = "bg-purple-900 border-purple-400 text-purple-200 shadow-[0_0_15px_rgba(168,85,247,0.6)] animate-pulse";
                } else if (isSelected) {
                  btnClass = "bg-emerald-600 border-emerald-400 text-white shadow-lg shadow-emerald-500/30";
                }

                return (
                  <div key={idx} data-teacher-token-idx={idx} onPointerDown={(e) => handlePointerDown(e, idx)} className={`text-2xl font-bold px-4 py-2 rounded-lg cursor-pointer select-none transition-all duration-200 border-2 ${btnClass}`}>
                    {token}
                  </div>
                );
              })}
            </div>

            <h3 className="text-xl font-bold text-white mb-4">3. 課題の詳細設定</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-slate-400 text-sm font-bold mb-2">ターゲット構造</label>
                <select value={targetRole} onChange={handleRoleChange} className="w-full bg-slate-800 border border-slate-600 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500">
                  {Object.keys(TARGET_OPTIONS).map(role => (
                    <option key={role} value={role}>{role}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-slate-400 text-sm font-bold mb-2">生徒へのヒント文</label>
                <input type="text" value={hint} onChange={(e) => setHint(e.target.value)} className="w-full bg-slate-800 border border-slate-600 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500" />
              </div>
              <div className="md:col-span-2"> {/* ★ 日本語訳入力欄を追加（横幅いっぱい） */}
                <label className="block text-slate-400 text-sm font-bold mb-2">日本語訳（任意）</label>
                <input type="text" value={translation} onChange={(e) => setTranslation(e.target.value)} placeholder="例：外国語を習得するには多くの忍耐が必要だ。" className="w-full bg-slate-800 border border-slate-600 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500" />
              </div>
            </div>

            <div className="flex flex-col items-center border-t border-slate-800 pt-8">
              <button onClick={handleSave} className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-10 rounded-full transition-colors flex items-center justify-center gap-3 shadow-lg shadow-emerald-600/30 text-lg">
                <Save size={24} /> 課題を登録する
              </button>
              {savedMessage && (
                <div className="mt-4 flex items-center gap-2 text-emerald-400 font-bold animate-pulse">
                  <CheckCircle2 size={20} /> {savedMessage}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}