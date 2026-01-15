
import React from 'react';
import { ChevronRight, Package, Truck, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-[#F9F9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <p className="text-[#1A365D] font-bold mb-2 tracking-wider">梱包資材の仕入れ・管理・配送をまるごとアウトソース</p>
          <p className="text-[#1A365D] font-bold mb-6 tracking-wider">現場の工数・コスト・スペースを削減し、業務効率と品質を両立します。</p>
          
          <div className="inline-block bg-white border border-gray-200 px-6 py-2 rounded shadow-sm mb-12">
            <p className="text-gray-600 font-medium">ハコトドが叶える、スマートな引越し資材運用。</p>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-[#1A365D] mb-8 leading-tight">
            ムダなく、スムーズに。<br />
            資材手配は、<span className="inline-block border-2 border-[#1A365D] px-4 py-1 mx-2">ハコトド</span>におまかせ。
          </h1>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
            <a
              href="#calculator"
              className="px-10 py-5 bg-[#F59E0B] hover:bg-[#D97706] text-white font-black rounded-full transition-all flex items-center justify-center gap-2 shadow-xl shadow-amber-200 text-lg"
            >
              コスト削減シミュレーション
              <ChevronRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="px-10 py-5 bg-[#1A365D] hover:bg-black text-white font-black rounded-full transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-200 text-lg"
            >
              資料請求・お問い合わせ
            </a>
          </div>
        </div>

        {/* イラストイメージ（資料1ページ目下部の街並みイメージを代用） */}
        <div className="mt-16 relative">
          <div className="flex justify-around items-end opacity-20 grayscale pointer-events-none select-none">
            <Building className="w-24 h-24" />
            <Truck className="w-16 h-16" />
            <Building className="w-32 h-32" />
            <Truck className="w-12 h-12" />
            <Building className="w-20 h-20" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Building = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    <rect x="20" y="20" width="60" height="80" />
    <rect x="30" y="30" width="10" height="10" fill="white" />
    <rect x="50" y="30" width="10" height="10" fill="white" />
    <rect x="30" y="50" width="10" height="10" fill="white" />
    <rect x="50" y="50" width="10" height="10" fill="white" />
  </svg>
);

export default Hero;
