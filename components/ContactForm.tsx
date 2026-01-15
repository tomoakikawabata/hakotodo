
import React, { useState } from 'react';
import { Send, Check } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In real app, send to API
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-12 text-center max-w-2xl mx-auto border border-indigo-100">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">お問い合わせありがとうございます</h3>
        <p className="text-gray-600 mb-8">
          内容を確認し、24時間以内に専門担当者より最適な削減プランをご提案させていただきます。
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-indigo-600 font-bold hover:underline"
        >
          戻る
        </button>
      </div>
    );
  }

  return (
    <section id="contact" className="py-20 bg-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              削減プランの策定は、<br />
              プロにお任せください
            </h2>
            <p className="text-indigo-200 text-lg mb-8 leading-relaxed">
              現在の仕入れ状況、使用頻度、地域を伺い、お客様にとって最も効率的な物流スキームを設計します。<br />
              相談は無料、無理な勧誘は一切ありません。
            </p>
            <ul className="space-y-4 text-white font-medium">
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center text-indigo-900 text-xs">✓</span>
                最短即日の御見積回答
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center text-indigo-900 text-xs">✓</span>
                現行資材との品質比較サンプル提供
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center text-indigo-900 text-xs">✓</span>
                全国への配送リードタイム確認
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">貴社名</label>
                  <input required type="text" placeholder="株式会社 〇〇引越" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">お名前</label>
                  <input required type="text" placeholder="山田 太郎" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">メールアドレス</label>
                <input required type="email" placeholder="example@company.jp" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">電話番号</label>
                <input required type="tel" placeholder="03-1234-5678" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">お問い合わせ内容（任意）</label>
                <textarea rows={3} placeholder="現在の単価比較を希望、サンプルが欲しい等" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none"></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 group shadow-xl"
              >
                無料相談・資料請求を申し込む
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              <p className="text-center text-[10px] text-gray-400 mt-4">
                送信することで弊社のプライバシーポリシーに同意したものとみなされます。
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
