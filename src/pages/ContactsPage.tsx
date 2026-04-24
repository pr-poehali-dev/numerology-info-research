import { useState } from 'react';
import Icon from '@/components/ui/icon';
import SacredGeometry from '@/components/SacredGeometry';

const ContactsPage = () => {
  const [form, setForm] = useState({ name: '', email: '', topic: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen pt-20 pb-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-golos text-xs text-gold/50 tracking-[0.3em] uppercase mb-4 block">Связь с нами</span>
          <h1 className="font-cormorant text-5xl sm:text-6xl font-light text-foreground mb-4">
            <span className="text-gold italic">Контакты</span>
          </h1>
          <p className="font-golos text-foreground/50 text-sm max-w-md mx-auto">
            Задайте вопрос, запишитесь на консультацию или предложите сотрудничество
          </p>
          <div className="sacred-divider mt-8" />
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact info */}
          <div className="md:col-span-2 space-y-6">
            <div className="mystical-card rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
                <SacredGeometry size={200} />
              </div>
              <h3 className="font-cormorant text-xl font-semibold text-foreground mb-6">Способы связи</h3>
              <div className="space-y-5">
                {[
                  { icon: 'Mail', label: 'Email', value: 'hello@chisla-sudby.ru' },
                  { icon: 'MessageCircle', label: 'Telegram', value: '@chisla_sudby' },
                  { icon: 'Instagram', label: 'Instagram', value: '@chisla.sudby' },
                  { icon: 'Youtube', label: 'YouTube', value: 'Числа Судьбы' },
                ].map(c => (
                  <div key={c.label} className="flex items-center gap-3 group cursor-pointer">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 group-hover:border-gold/40"
                      style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.15)' }}>
                      <Icon name={c.icon} fallback="Link" size={15} className="text-gold/60 group-hover:text-gold transition-colors" />
                    </div>
                    <div>
                      <div className="font-golos text-xs text-foreground/35 tracking-wide">{c.label}</div>
                      <div className="font-golos text-sm text-foreground/70 group-hover:text-gold/80 transition-colors">{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mystical-card rounded-2xl p-6">
              <h3 className="font-cormorant text-xl font-semibold text-foreground mb-4">Консультации</h3>
              <p className="font-golos text-sm text-foreground/55 leading-relaxed mb-4">
                Личная консультация по нумерологии — 60 минут. 
                Включает полный нумерологический портрет и прогноз на год.
              </p>
              <div className="p-4 rounded-lg mb-4" style={{ background: 'rgba(201,168,76,0.05)', border: '1px solid rgba(201,168,76,0.15)' }}>
                <div className="font-cormorant text-3xl text-gold font-bold">3 500 ₽</div>
                <div className="font-golos text-xs text-foreground/40">за 60-минутную сессию</div>
              </div>
              <button className="w-full py-3 rounded-lg font-golos text-sm font-medium tracking-wide transition-all duration-300 hover:scale-[1.02]"
                style={{ background: 'linear-gradient(135deg, #C9A84C 0%, #E8C97A 100%)', color: '#080C1A' }}>
                Записаться на консультацию
              </button>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            <div className="mystical-card rounded-2xl p-8">
              {!sent ? (
                <>
                  <h3 className="font-cormorant text-2xl font-light text-foreground mb-6">Напишите нам</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="font-golos text-xs text-gold/55 tracking-[0.2em] uppercase block mb-2">Имя</label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={e => setForm({ ...form, name: e.target.value })}
                          placeholder="Ваше имя"
                          className="w-full px-4 py-3 rounded-lg font-golos text-sm text-foreground placeholder-foreground/25 outline-none transition-all duration-300"
                          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,168,76,0.2)' }}
                        />
                      </div>
                      <div>
                        <label className="font-golos text-xs text-gold/55 tracking-[0.2em] uppercase block mb-2">Email</label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={e => setForm({ ...form, email: e.target.value })}
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 rounded-lg font-golos text-sm text-foreground placeholder-foreground/25 outline-none transition-all duration-300"
                          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,168,76,0.2)' }}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="font-golos text-xs text-gold/55 tracking-[0.2em] uppercase block mb-2">Тема</label>
                      <select
                        value={form.topic}
                        onChange={e => setForm({ ...form, topic: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg font-golos text-sm text-foreground outline-none transition-all duration-300"
                        style={{ background: 'rgba(13,18,40,0.95)', border: '1px solid rgba(201,168,76,0.2)', colorScheme: 'dark' }}
                      >
                        <option value="">Выберите тему...</option>
                        <option value="consultation">Запись на консультацию</option>
                        <option value="question">Вопрос по нумерологии</option>
                        <option value="course">Вопрос по обучению</option>
                        <option value="cooperation">Сотрудничество</option>
                        <option value="other">Другое</option>
                      </select>
                    </div>

                    <div>
                      <label className="font-golos text-xs text-gold/55 tracking-[0.2em] uppercase block mb-2">Сообщение</label>
                      <textarea
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        placeholder="Расскажите о своём запросе..."
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg font-golos text-sm text-foreground placeholder-foreground/25 outline-none transition-all duration-300 resize-none"
                        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,168,76,0.2)' }}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-lg font-golos text-sm font-medium tracking-widest uppercase transition-all duration-300 hover:scale-[1.01]"
                      style={{ background: 'linear-gradient(135deg, #C9A84C 0%, #E8C97A 100%)', color: '#080C1A' }}
                    >
                      Отправить сообщение
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
                    style={{ background: 'rgba(120,200,120,0.1)', border: '1px solid rgba(120,200,120,0.3)' }}>
                    <Icon name="Check" size={28} className="text-green-400" />
                  </div>
                  <h3 className="font-cormorant text-3xl font-light text-foreground mb-3">Сообщение отправлено</h3>
                  <p className="font-golos text-sm text-foreground/55 mb-6">
                    Мы получили ваше сообщение и ответим в течение 24 часов
                  </p>
                  <button
                    onClick={() => { setSent(false); setForm({ name: '', email: '', topic: '', message: '' }); }}
                    className="font-golos text-sm text-gold/60 hover:text-gold transition-colors"
                  >
                    Отправить ещё одно сообщение
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
