import SacredGeometry from '@/components/SacredGeometry';
import Icon from '@/components/ui/icon';

const AboutPage = () => (
  <div className="min-h-screen pt-20 pb-24 px-4">
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="font-golos text-xs text-gold/50 tracking-[0.3em] uppercase mb-4 block">Наша история</span>
        <h1 className="font-cormorant text-5xl sm:text-6xl font-light text-foreground mb-4">
          О проекте <span className="text-gold italic">и авторе</span>
        </h1>
        <div className="sacred-divider mt-8" />
      </div>

      {/* Author section */}
      <div className="grid md:grid-cols-2 gap-10 mb-16">
        {/* Photo placeholder */}
        <div className="relative">
          <div className="mystical-card rounded-2xl overflow-hidden aspect-[3/4] flex items-center justify-center relative">
            <div className="absolute inset-0 opacity-10">
              <SacredGeometry size={500} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
            <div className="relative z-10 text-center p-8">
              <div className="w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center"
                style={{ background: 'rgba(201,168,76,0.1)', border: '2px solid rgba(201,168,76,0.3)' }}>
                <span className="font-cormorant text-5xl text-gold">✦</span>
              </div>
              <div className="font-cormorant text-2xl text-foreground font-semibold mb-1">Елена Воронова</div>
              <div className="font-golos text-sm text-gold/60">Нумеролог · Наставник</div>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <h2 className="font-cormorant text-4xl font-light text-foreground mb-4">
              Более 15 лет<br />
              <span className="text-gold italic">изучения чисел</span>
            </h2>
            <p className="font-golos text-sm text-foreground/60 leading-relaxed">
              Я познакомилась с нумерологией в переломный момент своей жизни. 
              Числа помогли мне понять своё предназначение, наладить отношения 
              и сделать правильный выбор. С тех пор я посвятила себя изучению 
              этой древней науки и помощи людям.
            </p>
          </div>
          <div>
            <p className="font-golos text-sm text-foreground/60 leading-relaxed">
              За годы практики я провела более 3000 консультаций, написала 
              два книги по нумерологии и создала авторский курс, который 
              прошли тысячи учеников по всему миру.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-4">
            {[
              { v: '15+', l: 'лет практики' },
              { v: '3000+', l: 'консультаций' },
              { v: '12K+', l: 'учеников' },
            ].map(s => (
              <div key={s.l} className="text-center p-4 rounded-xl" style={{ background: 'rgba(201,168,76,0.05)', border: '1px solid rgba(201,168,76,0.15)' }}>
                <div className="font-cormorant text-2xl font-bold text-gold mb-1">{s.v}</div>
                <div className="font-golos text-xs text-foreground/40 leading-tight">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project mission */}
      <div className="mystical-card rounded-2xl p-8 sm:p-10 mb-10">
        <h2 className="font-cormorant text-3xl font-light text-foreground mb-6 text-center">
          Миссия <span className="text-gold italic">проекта</span>
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { icon: 'Star', title: 'Просветление', desc: 'Делать древнюю мудрость чисел доступной каждому, кто ищет смысл и понимание' },
            { icon: 'Heart', title: 'Помощь', desc: 'Помогать людям принимать осознанные решения через знание своих числовых вибраций' },
            { icon: 'Globe', title: 'Сообщество', desc: 'Создавать пространство для людей, объединённых интересом к нумерологии' },
          ].map(m => (
            <div key={m.title} className="text-center p-6 rounded-xl transition-all duration-300 hover:bg-gold/5">
              <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center"
                style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)' }}>
                <Icon name={m.icon} fallback="Star" size={20} className="text-gold" />
              </div>
              <h3 className="font-cormorant text-xl font-semibold text-foreground mb-2">{m.title}</h3>
              <p className="font-golos text-xs text-foreground/50 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Credentials */}
      <div className="mystical-card rounded-2xl p-8">
        <h3 className="font-cormorant text-2xl font-light text-foreground mb-6">Образование и сертификаты</h3>
        <div className="space-y-4">
          {[
            { year: '2008', text: 'Сертификат по пифагорейской нумерологии, Международная академия эзотерических наук' },
            { year: '2011', text: 'Обучение у мастера нумерологии Михаила Рощина, Москва' },
            { year: '2014', text: 'Авторский курс «Числа и судьба» — разработка и запуск' },
            { year: '2018', text: 'Книга «Язык чисел» — опубликована и переведена на 3 языка' },
            { year: '2023', text: 'Открытие онлайн-портала «Числа Судьбы»' },
          ].map(c => (
            <div key={c.year} className="flex gap-4 items-start">
              <span className="font-cormorant text-lg text-gold/50 shrink-0 w-12">{c.year}</span>
              <div className="h-full">
                <div className="w-px h-full bg-gold/10 mr-4" />
              </div>
              <p className="font-golos text-sm text-foreground/60">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default AboutPage;
