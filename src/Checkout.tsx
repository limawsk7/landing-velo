import { useState } from 'react';
import { X, Copy, Check, ShieldCheck, LoaderCircle } from 'lucide-react';

type Props = { plan: string; onClose: () => void };
const API = 'https://bcpybjmxlxfahbbbuwrl.supabase.co/functions/v1/fornece-checkout';

const labels: Record<string,string> = { base: 'Base', pro: 'Pro', business: 'Business' };
const prices: Record<string,string> = { base: 'R$ 97,00', pro: 'R$ 197,00', business: 'R$ 297,00' };

export default function Checkout({ plan, onClose }: Props) {
  const [email,setEmail] = useState('');
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState('');
  const [payment,setPayment] = useState<any>(null);
  const [copied,setCopied] = useState(false);

  async function createPix(e: React.FormEvent) {
    e.preventDefault(); setLoading(true); setError('');
    try {
      const response = await fetch(API + '/create', {
        method:'POST', headers:{'Content-Type':'application/json'},
        body:JSON.stringify({ email, plan })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Não foi possível gerar o Pix agora.');
      setPayment(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro inesperado ao gerar o Pix.');
    } finally { setLoading(false); }
  }

  async function copyPix() {
    if (!payment?.pix_code) return;
    await navigator.clipboard.writeText(payment.pix_code);
    setCopied(true); setTimeout(() => setCopied(false), 1800);
  }

  return <div className="checkout-overlay" onMouseDown={(e)=>{if(e.target===e.currentTarget)onClose()}}>
    <section className="checkout-modal" role="dialog" aria-modal="true" aria-label="Finalizar compra">
      <button className="checkout-close" onClick={onClose} aria-label="Fechar"><X size={21}/></button>
      <span className="checkout-plan">PLANO {labels[plan].toUpperCase()}</span>
      {!payment ? <>
        <h2>Quase lá. Vamos liberar seu acesso.</h2>
        <p>Informe o e-mail onde você quer receber a confirmação e o acesso à Fornece Cloud.</p>
        <form onSubmit={createPix}>
          <label htmlFor="checkout-email">E-mail para receber o acesso</label>
          <input id="checkout-email" type="email" required autoComplete="email" placeholder="voce@email.com" value={email} onChange={e=>setEmail(e.target.value)}/>
          <button className="button button-primary" type="submit" disabled={loading}>{loading?<><LoaderCircle size={16}/> Gerando Pix...</>:<>Pagar {prices[plan]} via Pix</>}</button>
        </form>
        {error && <div className="checkout-error">{error}</div>}
        <p className="checkout-hint"><ShieldCheck size={13} style={{display:'inline',verticalAlign:'middle'}}/> O acesso só será liberado após a confirmação do pagamento pela Pushin Pay. O e-mail não será enviado antes disso.</p>
      </> : <>
        <h2>Pix gerado com sucesso</h2>
        <p>Faça o pagamento de <b>{prices[plan]}</b>. Assim que a Pushin Pay confirmar, enviaremos o acesso para <b>{email}</b>.</p>
        {payment.qr_code_base64 && <img className="checkout-qr" src={payment.qr_code_base64} alt="QR Code Pix para pagamento"/>}
        <label>Pix copia e cola</label>
        <textarea className="checkout-pix" readOnly value={payment.pix_code}/>
        <button className="button button-primary" type="button" onClick={copyPix}>{copied?<><Check size={16}/> Copiado!</>:<><Copy size={16}/> Copiar código Pix</>}</button>
        <p className="checkout-hint">Não feche esta janela antes de copiar o código. Após pagar, aguarde o e-mail de confirmação com o link de acesso.</p>
      </>}
    </section>
  </div>;
}
