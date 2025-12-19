
import React, { useState } from 'react';

interface CheckoutViewProps {
  item: any;
  onBack: () => void;
}

const CheckoutView: React.FC<CheckoutViewProps> = ({ item, onBack }) => {
  const [step, setStep] = useState(1);

  if (!item) return null;

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-bg-dark">
      <div className="max-w-5xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-primary font-bold mb-10 hover:gap-4 transition-all"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          Voltar para Catálogo
        </button>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Checkout Area */}
          <div className="lg:col-span-2 space-y-8">
            <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-border-dark shadow-2xl">
              <div className="flex items-center gap-4 mb-10">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${step === s ? 'bg-primary text-bg-dark' : 'bg-white/10 text-white/40'}`}>
                      {s}
                    </div>
                    {s < 3 && <div className="w-8 h-[1px] bg-white/10" />}
                  </div>
                ))}
              </div>

              {step === 1 && (
                <div className="space-y-6 animate-fade-in">
                  <h2 className="text-3xl font-black text-white">Dados Pessoais</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Nome completo" className="w-full bg-white/5 border border-border-dark rounded-xl px-5 py-4 text-white outline-none focus:border-primary" />
                    <input type="email" placeholder="E-mail principal" className="w-full bg-white/5 border border-border-dark rounded-xl px-5 py-4 text-white outline-none focus:border-primary" />
                  </div>
                  <input type="tel" placeholder="WhatsApp para suporte" className="w-full bg-white/5 border border-border-dark rounded-xl px-5 py-4 text-white outline-none focus:border-primary" />
                  <button 
                    onClick={() => setStep(2)}
                    className="w-full py-5 bg-primary text-bg-dark font-black rounded-xl hover:bg-secondary transition-all"
                  >
                    Próximo Passo
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6 animate-fade-in">
                  <h2 className="text-3xl font-black text-white">Pagamento</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <button className="flex flex-col items-center gap-2 p-6 glass border-primary rounded-2xl text-primary font-bold">
                      <span className="material-symbols-outlined !text-3xl">qr_code</span>
                      PIX (Acesso Imediato)
                    </button>
                    <button className="flex flex-col items-center gap-2 p-6 glass border-white/10 hover:border-white/20 rounded-2xl text-white/60">
                      <span className="material-symbols-outlined !text-3xl">credit_card</span>
                      Cartão de Crédito
                    </button>
                  </div>
                  <div className="bg-primary/10 border border-primary/20 p-6 rounded-2xl flex items-center gap-4">
                    <span className="material-symbols-outlined text-primary !text-4xl">security</span>
                    <div>
                      <h4 className="text-white font-bold">Compra 100% Segura</h4>
                      <p className="text-xs text-text-muted">Seu acesso será liberado instantaneamente após a confirmação.</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setStep(3)}
                    className="w-full py-5 bg-primary text-bg-dark font-black rounded-xl hover:bg-secondary transition-all"
                  >
                    Gerar Pagamento
                  </button>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-8 text-center animate-fade-in py-10">
                  <span className="material-symbols-outlined !text-8xl text-primary animate-pulse">qr_code_2</span>
                  <div>
                    <h2 className="text-3xl font-black text-white mb-2">Quase lá!</h2>
                    <p className="text-text-muted">Escaneie o QR Code abaixo ou copie a chave PIX.</p>
                  </div>
                  <div className="p-4 bg-white rounded-2xl max-w-[200px] mx-auto">
                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=agrobritoo-pix-mock" alt="QR Code" className="w-full h-full" />
                  </div>
                  <button className="text-primary font-bold hover:underline">Copiar Código PIX</button>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar Summary */}
          <div className="space-y-6">
            <div className="glass p-8 rounded-[2rem] border border-border-dark">
              <h3 className="text-xl font-bold text-white mb-6">Resumo do Pedido</h3>
              <div className="flex gap-4 mb-6">
                <img src={item.img} className="w-20 h-20 object-cover rounded-xl border border-white/10" alt="" />
                <div className="flex-grow">
                  <h4 className="text-white font-bold leading-tight mb-1">{item.title}</h4>
                  <p className="text-xs text-text-muted">{item.tag}</p>
                </div>
              </div>
              <div className="space-y-4 pt-6 border-t border-white/5">
                <div className="flex justify-between text-sm">
                  <span className="text-text-muted">Subtotal</span>
                  <span className="text-white font-bold">{item.price}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-muted">Taxas</span>
                  <span className="text-primary font-bold">R$ 0,00</span>
                </div>
                <div className="flex justify-between text-xl pt-4">
                  <span className="text-white font-black uppercase tracking-tighter">Total</span>
                  <span className="text-primary font-black">{item.price}</span>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-white/5 border border-white/5 rounded-2xl">
              <div className="flex items-center gap-3 mb-3 text-white">
                <span className="material-symbols-outlined text-primary">verified_user</span>
                <span className="font-bold">Garantia Incondicional</span>
              </div>
              <p className="text-xs text-text-muted leading-relaxed">
                7 dias de garantia. Se você não ficar satisfeito com o conteúdo, devolvemos 100% do seu investimento sem perguntas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutView;
