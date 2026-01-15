
import React from 'react';
import Hero from './components/Hero';
import Calculator from './components/Calculator';
import Features from './components/Features';
import ContactForm from './components/ContactForm';
import { Package, Truck, ArrowRight, CheckCircle, Info, HelpCircle } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-amber-100">
      {/* Navigation */}
      <nav className="fixed w-full z-[100] bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#1A365D] rounded-lg flex items-center justify-center text-white font-black text-xl">H</div>
              <span className="text-2xl font-black text-[#1A365D] tracking-tighter">ハコトド</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-sm font-bold text-gray-600 hover:text-[#1A365D]">ハコトドとは</a>
              <a href="#merit" className="text-sm font-bold text-gray-600 hover:text-[#1A365D]">メリット</a>
              <a href="#calculator" className="text-sm font-bold text-gray-600 hover:text-[#1A365D]">削減シミュレーション</a>
              <a href="#faq" className="text-sm font-bold text-gray-600 hover:text-[#1A365D]">よくある質問</a>
              <a href="#contact" className="px-6 py-3 bg-[#F59E0B] text-white text-sm font-black rounded-full hover:bg-[#D97706] transition-all">
                お問い合わせ
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Hero />

        {/* About Section - 資料2ページ目 */}
        <section id="about" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-[#1A365D] mb-6">次世代ダンボール配達 ハコトド とは</h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto font-bold leading-relaxed">
                資材手配のムダをゼロに。現場が変わる、新しいダンボール運用。<br />
                仕入れ・管理・配送まで一括代行し、人手や保管スペースの削減、誤配送や伝票ミスの解消を実現します。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
              {/* 従来の方法 */}
              <div className="bg-gray-50 p-10 rounded-3xl border border-gray-200">
                <p className="text-center font-black text-gray-400 mb-8 uppercase tracking-widest">従来の方法</p>
                <div className="flex flex-col items-center gap-4 text-[#1A365D] font-bold">
                  <div className="p-4 bg-white border border-gray-200 rounded-xl w-48 text-center">ダンボール工場</div>
                  <ArrowDown />
                  <div className="p-4 bg-white border border-gray-200 rounded-xl w-48 text-center text-amber-600">引越し会社<br /><span className="text-[10px]">納品 / 梱包 / 発送</span></div>
                  <ArrowDown />
                  <div className="p-4 bg-white border border-gray-200 rounded-xl w-48 text-center">お客様宅</div>
                </div>
              </div>
              {/* 私たちのご提案 */}
              <div className="bg-[#1A365D] p-10 rounded-3xl text-white relative overflow-hidden">
                <div className="absolute top-4 right-8 text-amber-400 text-4xl">✨</div>
                <p className="text-center font-black text-amber-400 mb-8 uppercase tracking-widest">私たちの提案</p>
                <div className="flex flex-col items-center gap-4 font-bold">
                  <div className="p-4 bg-white/10 border border-white/20 rounded-xl w-56 text-center">ハコトド<br /><span className="text-[10px]">引越業者サポート</span></div>
                  <ArrowDown color="text-amber-400" />
                  <div className="p-4 bg-white/10 border border-white/20 rounded-xl w-56 text-center flex items-center justify-center gap-2">
                    <Truck size={16} /> ヤマト運輸
                  </div>
                  <ArrowDown color="text-amber-400" />
                  <div className="p-4 bg-white/10 border border-white/20 rounded-xl w-56 text-center">お客様宅</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits - 資料3-4ページ目 */}
        <section id="merit" className="py-24 bg-[#F9F9F5]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-[#1A365D] mb-4">ご利用のメリット</h2>
              <p className="text-gray-500 font-bold">引越現場をラクに、利益を最大化する6つの柱</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "梱包資材不要", desc: "従来、自社配送されていた梱包資材（専用段ボール・荷紐・ビニール等）が不要となり、仕入れ・コストの両面で削減が可能です。" },
                { title: "梱包作業不要", desc: "ハコトドの利用により、従来発生していた梱包作業が不要となります。リードタイムが可視化され、ご案内の精度向上に繋がります。" },
                { title: "伝票作成不要", desc: "伝票作成が不要となります。人的作業を介さずミスをゼロにし、ダンボール発送に関わる全てをお任せ頂けます。" },
                { title: "配達作業不要", desc: "もちろん配達作業も不要です。細かな再配達、事前連絡、未着問合せなどの細かな作業も全てお任せ頂けます。" },
                { title: "保管場所有効活用", desc: "今までの保管スペース、荷造りに必要だった作業スペース、配送会社の集荷対応に至るまで一切不要となります。" },
                { title: "人件費有効活用", desc: "最大のメリットは人件費の有効化です。従来の人員を営業・現場・品質向上に充てることができ、売上最大化に寄与します。" },
              ].map((m, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 mb-6">
                    <CheckCircle size={24} />
                  </div>
                  <h3 className="text-xl font-black text-[#1A365D] mb-4">{m.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-medium">{m.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-12 text-xs text-gray-400 text-center max-w-2xl mx-auto italic">
              ※作業工程には「人」が関わる為、一切のミスや事故の発生が0であることをお約束できるものではありません。大規模な天候不良や災害等を含め、ぜひ引越会社様と一緒にサービスを運用させて頂きたいと考えております。
            </p>
          </div>
        </section>

        {/* Cost Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <Calculator />
          </div>
        </section>

        {/* Process Section - 資料5ページ目 */}
        <section className="py-24 bg-[#1A365D] text-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-black text-center mb-16">ご利用の流れ</h2>
            <div className="space-y-6">
              {[
                { step: "01", title: "Webから簡単注文", desc: "CSVファイルをアップロードするだけでOK。複雑な入力作業は不要です。" },
                { step: "02", title: "14時までの注文で当日発送", desc: "平日14時までのご依頼は即日対応。スピーディに現場をサポートします。" },
                { step: "03", title: "出荷データをWebで確認", desc: "出荷状況はWeb上でいつでも確認可能。リードタイムの可視化で案内も正確に。" },
                { step: "04", title: "お客様宅へ配送完了", desc: "伝票作成・再配達の対応も不要。“トドけるだけ”で現場業務がラクに。" },
              ].map((p, i) => (
                <div key={i} className="flex items-center gap-6 bg-white/5 p-6 rounded-2xl border border-white/10">
                  <div className="text-amber-400 text-xl font-black">STEP {p.step}</div>
                  <div>
                    <h3 className="text-lg font-black mb-1">{p.title}</h3>
                    <p className="text-sm text-blue-100">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section - 資料8ページ目 */}
        <section id="faq" className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-black text-[#1A365D] text-center mb-16">よくあるご質問</h2>
            <div className="space-y-6">
              {[
                { q: "登録料や月額費用はかかりますか？", a: "登録料や月額費用は一切発生いたしません。ご請求は、商品代金および運送費のみとなりますので、安心してご利用いただけます。" },
                { q: "オリジナルロゴ入り資材も可能ですか？", a: "管理費用（20,000円／サイズ）で対応可能です。" },
                { q: "納期はどのくらいですか？", a: "ご注文後、最短翌日〜4日以内にお届けします。" },
                { q: "日時指定は可能ですか？", a: "はい、可能です。不在時は置き配または不在票対応となります。" },
                { q: "キャンセルは可能ですか？", a: "発送前であれば無料で可能です。発送後のキャンセルには2,500円の手数料が発生します。" },
              ].map((f, i) => (
                <div key={i} className="border-b border-gray-100 pb-6">
                  <div className="flex items-start gap-4 mb-3">
                    <span className="text-amber-500 font-black text-xl">Q</span>
                    <h3 className="font-bold text-[#1A365D] pt-1">{f.q}</h3>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-gray-400 font-black text-xl">A</span>
                    <p className="text-gray-600 text-sm leading-relaxed pt-1">{f.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactForm />

        {/* Company Info - 資料9ページ目 */}
        <section className="py-24 bg-[#F9F9F5]">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-black text-[#1A365D] text-center mb-16">会社概要</h2>
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100">
              <div className="grid grid-cols-1 divide-y divide-gray-100">
                <InfoRow label="会社名" value="株式会社TAKEDA" />
                <InfoRow label="所在地" value="〒566-0071 大阪府摂津市鳥飼下3-54-29" />
                <InfoRow label="電話番号" value="072-886-3520" />
                <InfoRow label="代表者" value="代表取締役 武田 耕司" />
                <InfoRow label="資本金" value="100万円" />
                <InfoRow label="設立年月日" value="2017年9月26日" />
                <InfoRow label="業務内容" value="資材販売 流通加工" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#1A365D] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="font-black text-2xl mb-4">ハコトド</div>
          <p className="text-blue-200 text-xs mb-8">© 2024 TAKEDA Co., Ltd. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const ArrowDown = ({ color = "text-gray-300" }: { color?: string }) => (
  <div className={`flex justify-center ${color}`}>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 2v16M15 13l-5 5-5-5" />
    </svg>
  </div>
);

const InfoRow = ({ label, value }: { label: string, value: string }) => (
  <div className="grid grid-cols-3 p-6 items-center">
    <div className="text-gray-500 font-bold text-sm">{label}</div>
    <div className="col-span-2 text-[#1A365D] font-bold">{value}</div>
  </div>
);

export default App;
