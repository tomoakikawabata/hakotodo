
import React, { useState, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { CalculationData, CalculationResult } from '../types';
import { TrendingUp, ArrowRight, Info, Package } from 'lucide-react';

const Calculator: React.FC = () => {
  const [data, setData] = useState<CalculationData>({
    mVolume: 1000,
    lVolume: 500,
    currentMPrice: 180,
    currentLPrice: 220
  });

  // 資料基準単価（ベース）
  const HAKOTODO_M_BASE = 70;
  const HAKOTODO_L_BASE = 92;

  const results = useMemo((): CalculationResult => {
    // 現状の総額
    const monthlyCurrent = (data.mVolume * data.currentMPrice) + (data.lVolume * data.currentLPrice);
    
    // ハコトド導入後の総額（資料ベース価格で計算）
    const monthlyNew = (data.mVolume * HAKOTODO_M_BASE) + (data.lVolume * HAKOTODO_L_BASE);
    
    const diff = monthlyCurrent - monthlyNew;
    const savingsRate = monthlyCurrent > 0 ? Math.round((diff / monthlyCurrent) * 100) : 0;

    return {
      monthlyCurrentTotal: monthlyCurrent,
      monthlyNewTotal: monthlyNew,
      monthlySavings: diff,
      yearlySavings: diff * 12,
      savingsRate: savingsRate
    };
  }, [data]);

  const chartData = [
    { name: '現状の総額', cost: results.monthlyCurrentTotal },
    { name: 'ハコトド(合算)', cost: results.monthlyNewTotal },
  ];

  return (
    <div id="calculator" className="max-w-6xl mx-auto py-12">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        <div className="bg-[#1A365D] px-10 py-10">
          <h3 className="text-3xl font-black text-white flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-[#F59E0B]" />
            月間コスト削減シミュレーター（M/L合算）
          </h3>
          <p className="text-blue-100 mt-2">
            現在のMサイズ・Lサイズの使用量を入力してください。一括導入による削減額を算出します。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* 入力エリア */}
          <div className="p-10 bg-gray-50 border-r border-gray-100">
            <div className="space-y-8">
              {/* Mサイズ入力 */}
              <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-2 mb-4 text-[#1A365D] font-black">
                  <Package size={20} className="text-[#F59E0B]" />
                  Mサイズ設定
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase">月間使用量</label>
                    <div className="relative">
                      <input
                        type="number" value={data.mVolume}
                        onChange={(e) => setData({ ...data, mVolume: parseInt(e.target.value) || 0 })}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-100 focus:border-[#F59E0B] outline-none font-bold"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs font-bold">枚</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase">現状の単価</label>
                    <div className="relative">
                      <input
                        type="number" value={data.currentMPrice}
                        onChange={(e) => setData({ ...data, currentMPrice: parseInt(e.target.value) || 0 })}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-100 focus:border-[#F59E0B] outline-none font-bold"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs font-bold">円</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lサイズ入力 */}
              <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-2 mb-4 text-[#1A365D] font-black">
                  <Package size={24} className="text-[#F59E0B]" />
                  Lサイズ設定
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase">月間使用量</label>
                    <div className="relative">
                      <input
                        type="number" value={data.lVolume}
                        onChange={(e) => setData({ ...data, lVolume: parseInt(e.target.value) || 0 })}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-100 focus:border-[#F59E0B] outline-none font-bold"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs font-bold">枚</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase">現状の単価</label>
                    <div className="relative">
                      <input
                        type="number" value={data.currentLPrice}
                        onChange={(e) => setData({ ...data, currentLPrice: parseInt(e.target.value) || 0 })}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-100 focus:border-[#F59E0B] outline-none font-bold"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs font-bold">円</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <div className="flex items-start gap-2 p-4 bg-blue-50 rounded-xl text-blue-800 text-xs leading-relaxed">
                  <Info size={16} className="flex-shrink-0 mt-0.5" />
                  <p>
                    ※ハコトド単価（M:{HAKOTODO_M_BASE}円 / L:{HAKOTODO_L_BASE}円）はあくまで資料上のベース価格です。配送エリアや配送頻度、契約内容によって変動するため、実際の価格は個別にお見積りとなります。
                  </p>
                </div>
              </div>

              <a href="#contact" className="w-full py-5 bg-[#1A365D] hover:bg-black text-white font-black rounded-xl transition-all flex items-center justify-center gap-3 text-lg shadow-lg">
                詳細な個別見積りを依頼する
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* 結果表示エリア */}
          <div className="p-10 bg-white flex flex-col justify-center">
            <div className="mb-10 text-center">
              <p className="text-gray-500 font-bold text-sm mb-2">M/L合算：月間の削減見込み</p>
              <div className="text-6xl font-black text-[#1A365D]">
                <span className="text-3xl mr-1 font-bold">¥</span>
                {results.monthlySavings.toLocaleString()}
              </div>
              <div className="mt-4 flex flex-col items-center gap-2">
                <div className="inline-flex items-center text-sm font-bold text-white bg-[#F59E0B] px-6 py-2 rounded-full shadow-md">
                  年間で ¥{(results.yearlySavings).toLocaleString()} の利益改善
                </div>
                <p className="text-[#F59E0B] font-black text-lg">資材費を {results.savingsRate}% カット</p>
              </div>
            </div>

            <div className="h-[240px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 14, fontWeight: 700, fill: '#1A365D' }} />
                  <YAxis hide />
                  <Tooltip 
                    cursor={{ fill: 'transparent' }}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                    formatter={(value: number) => [`¥${value.toLocaleString()}`, '月間コスト']}
                  />
                  <Bar dataKey="cost" radius={[8, 8, 8, 8]} barSize={80}>
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === 0 ? '#E5E7EB' : '#F59E0B'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-[10px] text-gray-400 font-bold uppercase">現在の月間総額</p>
                <p className="text-lg font-black text-gray-400 italic">¥{results.monthlyCurrentTotal.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-[10px] text-[#1A365D] font-bold uppercase">ハコトド導入後</p>
                <p className="text-xl font-black text-[#1A365D]">¥{results.monthlyNewTotal.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
