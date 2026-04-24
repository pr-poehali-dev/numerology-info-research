import SacredGeometry from '@/components/SacredGeometry';
import Icon from '@/components/ui/icon';

const features = [
  { icon: 'Calculator', title: 'Калькулятор судьбы', desc: 'Узнайте своё число по дате рождения и получите детальную интерпретацию' },
  { icon: 'Star', title: 'Числа 1–33', desc: 'Полные значения всех чисел судьбы, включая мастер-числа 11, 22 и 33' },
  { icon: 'Calendar', title: 'Годовые прогнозы', desc: 'Персональный прогноз на текущий год на основе вашего числа судьбы' },
  { icon: 'BookOpen', title: 'Обучение', desc: 'Курс нумерологии от основ до продвинутых методов расчётов' },
];

interface HomePageProps {
  onNavigate: (id: string) => void;
}

const HomePage = ({ onNavigate }: HomePageProps) => (
  <div className="min-h-screen relative overflow-hidden">
    {/* Hero */}
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-16">
      {/* Sacred Geometry ornaments */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 animate-spin-slow pointer-events-none">
        <SacredGeometry size={700} />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 animate-spin-reverse pointer-events-none">
        <SacredGeometry size={500} />
      </div>

      {/* Hero content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="mb-6 opacity-0 animate-fade-up delay-100" style={{ animationFillMode: 'forwards' }}>
          <span className="inline-block px-4 py-1.5 text-xs font-golos tracking-[0.3em] uppercase text-gold/70 border border-gold/20 rounded-full">
            Древняя наука чисел
          </span>
        </div>

        <h1 className="font-cormorant text-6xl sm:text-7xl md:text-8xl font-light text-foreground leading-[0.9] mb-6 opacity-0 animate-fade-up delay-200" style={{ animationFillMode: 'forwards' }}>
          Числа <br />
          <span className="animate-shimmer font-semibold">Вашей Судьбы</span>
        </h1>

        <p className="font-golos text-base sm:text-lg text-foreground/55 max-w-xl mx-auto leading-relaxed mb-10 opacity-0 animate-fade-up delay-300" style={{ animationFillMode: 'forwards' }}>
          Нумерология — это язык Вселенной. Каждое число несёт вибрацию, 
          раскрывающую тайны личности, предназначения и жизненного пути.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up delay-400" style={{ animationFillMode: 'forwards' }}>
          <button
            onClick={() => onNavigate('calculator')}
            className="group relative px-8 py-4 font-golos font-medium text-sm tracking-widest uppercase overflow-hidden rounded-lg transition-all duration-300"
            style={{ 
              background: 'linear-gradient(135deg, #C9A84C 0%, #E8C97A 50%, #C9A84C 100%)',
              color: '#080C1A',
              boxShadow: '0 0 30px rgba(201,168,76,0.25)'
            }}
          >
            <span className="relative z-10">Рассчитать число</span>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'linear-gradient(135deg, #E8C97A 0%, #C9A84C 100%)' }} />
          </button>
          <button
            onClick={() => onNavigate('meanings')}
            className="px-8 py-4 font-golos font-medium text-sm tracking-widest uppercase rounded-lg transition-all duration-300 text-gold/80 hover:text-gold"
            style={{ 
              border: '1px solid rgba(201,168,76,0.3)',
              background: 'rgba(201,168,76,0.04)'
            }}
          >
            Значения чисел
          </button>
        </div>

        {/* Floating numbers */}
        <div className="flex justify-center gap-8 mt-16 opacity-0 animate-fade-up delay-600" style={{ animationFillMode: 'forwards' }}>
          {[1,2,3,4,5,6,7,8,9].map((n, i) => (
            <span
              key={n}
              className="font-cormorant text-lg font-light text-gold/25 hover:text-gold/60 transition-colors cursor-default"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {n}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-pulse-glow">
        <div className="flex flex-col items-center gap-2 text-gold/30">
          <span className="font-golos text-xs tracking-[0.2em] uppercase">Листайте</span>
          <Icon name="ChevronDown" size={16} />
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="relative z-10 py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="sacred-divider mb-16" />
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-4xl sm:text-5xl font-light text-foreground mb-4">
            Что вы <span className="text-gold">откроете</span>
          </h2>
          <p className="font-golos text-foreground/50 text-sm tracking-wide max-w-md mx-auto">
            Портал нумерологии предлагает полный спектр инструментов для познания себя
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="mystical-card rounded-xl p-6 group cursor-pointer transition-all duration-500"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)' }}>
                <Icon name={f.icon} fallback="Star" size={22} className="text-gold" />
              </div>
              <h3 className="font-cormorant text-xl font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="font-golos text-sm text-foreground/50 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Numbers showcase */}
    <section className="relative z-10 py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="sacred-divider mb-16" />
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="font-golos text-xs text-gold/50 tracking-[0.3em] uppercase mb-4 block">Мастер-числа</span>
            <h2 className="font-cormorant text-4xl sm:text-5xl font-light text-foreground mb-6 leading-tight">
              Числа 11, 22 и 33 —<br />
              <span className="text-gold italic">высшие вибрации</span>
            </h2>
            <p className="font-golos text-foreground/55 leading-relaxed mb-8 text-sm">
              Мастер-числа в нумерологии обладают особой силой. Они не сводятся 
              к однозначным числам и несут мощный духовный потенциал. Люди с 
              мастер-числами приходят в мир с особой миссией.
            </p>
            <button
              onClick={() => {}}
              className="font-golos text-sm text-gold/70 hover:text-gold transition-colors flex items-center gap-2 group"
            >
              Изучить мастер-числа
              <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {[
              { n: '11', title: 'Интуиция', sub: 'Мастер-число' },
              { n: '22', title: 'Строитель', sub: 'Мастер-число' },
              { n: '33', title: 'Учитель', sub: 'Мастер-число' },
            ].map(item => (
              <div key={item.n} className="mystical-card rounded-xl p-6 text-center group cursor-pointer">
                <div className="font-cormorant text-5xl font-bold text-gold mb-2 gold-text-glow group-hover:scale-110 transition-transform inline-block">
                  {item.n}
                </div>
                <div className="font-cormorant text-lg text-foreground/80 font-semibold">{item.title}</div>
                <div className="font-golos text-xs text-gold/40 mt-1 tracking-wide">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="relative z-10 py-24 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mystical-card rounded-2xl p-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <SacredGeometry size={400} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
          <div className="relative z-10">
            <div className="font-cormorant text-6xl text-gold/20 mb-2">✦</div>
            <h2 className="font-cormorant text-3xl sm:text-4xl font-light text-foreground mb-4">
              Готовы узнать своё число?
            </h2>
            <p className="font-golos text-foreground/50 mb-8 text-sm max-w-md mx-auto">
              Введите дату рождения и получите ваше число судьбы с полной интерпретацией и прогнозом на год
            </p>
            <button
              onClick={() => onNavigate('calculator')}
              className="px-10 py-4 font-golos font-medium text-sm tracking-widest uppercase rounded-lg transition-all duration-300 hover:scale-105"
              style={{ 
                background: 'linear-gradient(135deg, #C9A84C 0%, #E8C97A 100%)',
                color: '#080C1A',
                boxShadow: '0 0 40px rgba(201,168,76,0.2)'
              }}
            >
              Начать бесплатно
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default HomePage;