
import { GoogleGenAI, Type } from "@google/genai";
import { CalculationData, CalculationResult } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateAIAnalysis = async (data: CalculationData, result: CalculationResult) => {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `
      あなたは物流・包装資材の専門コンサルタントです。
      引越業者様の段ボールコスト削減シミュレーション（MサイズとLサイズの合算）に基づき、専門的なアドバイスを生成してください。
      
      【入力データ】
      - Mサイズ月間使用量: ${data.mVolume}枚 (現在単価: ${data.currentMPrice}円)
      - Lサイズ月間使用量: ${data.lVolume}枚 (現在単価: ${data.currentLPrice}円)
      - 総削減見込み額: 月間 ${result.monthlySavings.toLocaleString()}円 / 年間 ${result.yearlySavings.toLocaleString()}円
      - 削減率: ${result.savingsRate}%

      【出力条件】
      - 日本語で出力してください。
      - 専門的なトーンでありながら、経営的なインパクトを強調してください。
      - JSONフォーマットで以下の項目を返してください：
        - analysis: MサイズとLサイズのバランス、および総額削減の可能性についての短い総評
        - recommendations: 合算導入による管理工数削減やスケールメリットに関する3つの具体的な施策（配列）
    `,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          analysis: { type: Type.STRING },
          recommendations: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          }
        },
        required: ["analysis", "recommendations"]
      }
    }
  });

  try {
    return JSON.parse(response.text.trim());
  } catch (e) {
    console.error("Failed to parse AI response", e);
    return null;
  }
};
