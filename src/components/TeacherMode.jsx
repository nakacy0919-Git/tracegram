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

    if (tokens.length > 80 || tokens.join(' ').length > 800) {
      alert("英文は80語・800文字以内にしてください。"); return;
    }
    const newProblem = {
      id: `custom-${Date.now()}`,
      tokens: [...tokens],
      targetIndices: [...selectedIndices],
      targetRole,
      hint: hint.trim().slice(0, 250),
      translation: translation.trim().slice(0, 400),
      modifiedIndices: [...modifiedIndices]
    };

    addCustomProblem(newProblem); 
    setSavedMessage("課題を保存しました！このブラウザの生徒モードで遊べます。");
    setTimeout(() => setSavedMessage(""), 3000);
    
    setInputText(""); setTokens([]); setSelectedIndices([]); setModifiedIndices([]); setTranslation("");
  };

  return (
    <div className="tg-workspace flex-1 p-4 md:p-8 overflow-y-auto" onPointerMove={handlePointerMove} onPointerUp={handlePointerUp} onTouchMove={handlePointerMove} onTouchEnd={handlePointerUp}>
      <div className="max-w-4xl mx-auto mt-6">
        <h2 className="tg-serif text-2xl md:text-3xl font-bold text-[#31503a] mb-8 text-center">問題作成（先生モード）</h2>

        <div className="tg-paper rounded-2xl p-5 md:p-6 mb-5">
          <h3 className="text-xl font-bold text-[#324b38] mb-4">1. 英文を入力</h3>
          <div className="flex flex-col md:flex-row gap-4">
            <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder="例: The cute cat sleeps on the sofa." className="flex-1 bg-[#fffef8] border border-[#d1d7c9] text-[#324332] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#739782]" />
            <button onClick={handleSplit} disabled={!inputText.trim()} className="tg-primary font-semibold py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2">
              <SplitSquareHorizontal size={20} /> 単語に分割
            </button>
          </div>
        </div>

        {tokens.length > 0 && (
          <div className="tg-paper rounded-2xl p-5 md:p-6 animate-in fade-in duration-500">
            <h3 className="text-xl font-bold text-[#324b38] mb-4">2. 正解と修飾先の設定</h3>
            
            <div className="flex gap-4 mb-4">
              <button onClick={() => setSettingMode("trace")} className={`flex-1 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors border ${settingMode === "trace" ? "bg-[#dae9d8] border-[#6f9578] text-[#345a43]" : "bg-[#fffef8] border-[#dedfd4] text-stone-600 hover:bg-[#eef2e9]"}`}>
                <Pointer size={20} /> 正解の塊をなぞる
              </button>
              <button onClick={() => setSettingMode("glow")} className={`flex-1 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors border ${settingMode === "glow" ? "bg-[#eee5cd] border-[#bcac86] text-[#6e5834]" : "bg-[#fffef8] border-[#dedfd4] text-stone-600 hover:bg-[#eef2e9]"}`}>
                <Sparkles size={20} /> 光らせる単語を選ぶ（複数可）
              </button>
            </div>
            
            <div className="tg-note touch-none flex flex-wrap gap-x-2 gap-y-3 p-4 md:p-6 bg-[#f7f5eb] rounded-xl border border-[#d7ddce] mb-8">
              {tokens.map((token, idx) => {
                const isSelected = selectedIndices.includes(idx);
                const isGlowing = modifiedIndices.includes(idx); // ★ 複数選択に対応
                
                let btnClass = "bg-[#fffef8] border-[#e1e0d3] text-[#3b493e] hover:bg-[#eaf0e6]";
                if (isGlowing) {
                  btnClass = "bg-[#ece3c7] border-[#b9a06e] text-[#654a30]";
                } else if (isSelected) {
                  btnClass = "bg-[#d9e7d5] border-[#6f9677] text-[#2c523a]";
                }

                return (
                  <div key={idx} data-teacher-token-idx={idx} onPointerDown={(e) => handlePointerDown(e, idx)} className={`text-2xl font-bold px-4 py-2 rounded-lg cursor-pointer select-none transition-all duration-200 border-2 ${btnClass}`}>
                    {token}
                  </div>
                );
              })}
            </div>

            <h3 className="text-xl font-bold text-[#324b38] mb-4">3. 課題の詳細設定</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-stone-600 text-sm font-semibold mb-2">ターゲット構造</label>
                <select value={targetRole} onChange={handleRoleChange} className="w-full bg-[#fffef8] border border-[#d1d7c9] text-[#324332] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#739782]">
                  {Object.keys(TARGET_OPTIONS).map(role => (
                    <option key={role} value={role}>{role}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-stone-600 text-sm font-semibold mb-2">生徒へのヒント文</label>
                <input type="text" value={hint} onChange={(e) => setHint(e.target.value)} className="w-full bg-[#fffef8] border border-[#d1d7c9] text-[#324332] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#739782]" />
              </div>
              <div className="md:col-span-2"> {/* ★ 日本語訳入力欄を追加（横幅いっぱい） */}
                <label className="block text-stone-600 text-sm font-semibold mb-2">日本語訳（任意）</label>
                <input type="text" value={translation} onChange={(e) => setTranslation(e.target.value)} placeholder="例：外国語を習得するには多くの忍耐が必要だ。" className="w-full bg-[#fffef8] border border-[#d1d7c9] text-[#324332] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#739782]" />
              </div>
            </div>

            <div className="flex flex-col items-center border-t border-[#dadfd1] pt-7">
              <button onClick={handleSave} className="tg-primary font-semibold py-4 px-10 rounded-xl transition-colors flex items-center justify-center gap-3 text-lg">
                <Save size={24} /> 課題を登録する
              </button>
              {savedMessage && (
                <div className="mt-4 flex items-center gap-2 text-[#416f50] font-semibold">
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