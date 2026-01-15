
import React from 'react';
import { MinusCircle, Truck, Map, Users, TrendingDown } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <MinusCircle className="w-8 h-8 text-amber-600" />,
      title: "コスト・工数の削減",
      desc: "専用ダンボール・テープ等の仕入れコストを削減。梱包・伝票作成の作業が不要になります。"
    },
    {
      icon: <Truck className="w-8 h-8 text-amber-600" />,
      title: "発送業務の完全アウトソース",
      desc: "当日14時までの依頼で即日発送対応。配達作業から問合せ対応まで全てお任せください。"
    },
    {
      icon: <Map className="w-8 h-8 text-amber-600" />,
      title: "スペースの有効活用",
      desc: "資材保管・荷造りスペースが不要に。空いたスペースは家財保管や事務所拡張に有効活用可能です。"
    },
    {
      icon: <Users className="w-8 h-8 text-amber-600" />,
      title: "人材の最適配置",
      desc: "配達にかかっていた人員を営業や現場へ集中させることができ、人件費の再配分が可能です。"
    },
    {
      icon: <TrendingDown className="w-8 h-8 text-amber-600" />,
      title: "資材コストの削減",
      desc: "一括大量仕入れによるスケールメリットで、自社購入に比べ大幅なコストダウンを実現します。"
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-[#1A365D] mb-4">ハコトド サービスの利便性</h2>
          <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <div key={i} className="flex gap-6 items-start">
              <div className="flex-shrink-0 p-4 bg-amber-50 rounded-2xl">{f.icon}</div>
              <div>
                <h3 className="text-xl font-black text-[#1A365D] mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed font-medium">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
