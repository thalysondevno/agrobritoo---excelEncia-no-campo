
import { GoogleGenAI } from "@google/genai";

// Ensure AI is initialized correctly using the named parameter apiKey
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getAgroAdvice = async (userQuery: string) => {
  try {
    // Correct usage of generateContent as per documentation rules
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userQuery,
      config: {
        systemInstruction: `Você é o "Britoo", assistente virtual da Agrobritoo, uma plataforma de educação agropecuária de elite. 
        Seu objetivo é ajudar produtores rurais e estudantes de zootecnia/veterinária com dúvidas técnicas.
        
        DIRETRIZES DE PERSONALIDADE:
        - Use um tom de "homem do campo moderno": prático, respeitoso e tecnicamente afiado.
        - Use analogias do dia a dia da fazenda (curral, pasto, trator).
        - Seja direto. O produtor não tem tempo a perder.
        - Fale sobre manejo de pastagens, nutrição animal (especialmente ruminantes), sanidade e gestão.
        
        RESTRIÇÕES:
        - Não dê diagnósticos veterinários fechados; sempre recomende o acompanhamento de um profissional habilitado no local.
        - Se a pergunta não for sobre agro, gentilmente redirecione para o tema da plataforma.
        - Mencione que o Agrobritoo tem cursos e mentorias se o usuário pedir para aprofundar um tema.`,
        temperature: 0.8,
        thinkingConfig: { thinkingBudget: 0 } // Disable thinking for faster low-latency chat
      },
    });

    // Directly access the .text property (not a method) as per guidelines
    return response.text || "Puxa, tive um problema na conexão aqui com a sede. Poderia repetir sua dúvida?";
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    if (error.message?.includes("Requested entity was not found")) {
      return "Parece que houve um erro de configuração na chave API. Por favor, verifique se está ativa.";
    }
    return "Erro ao processar sua dúvida técnica. Verifique sua conexão com o campo.";
  }
};
