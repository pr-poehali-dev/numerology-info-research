import Icon from '@/components/ui/icon';

const articles = [
  {
    tag: 'Основы',
    title: 'Что такое нумерология и почему ей стоит доверять',
    excerpt: 'Разбираем историю числовой науки от Пифагора до наших дней. Почему тысячи людей находят в числах ответы на важнейшие жизненные вопросы.',
    readTime: '7 мин',
    date: '15 апреля 2026',
  },
  {
    tag: 'Числа',
    title: 'Мастер-числа 11, 22, 33: дар или бремя?',
    excerpt: 'Носители мастер-чисел приходят в мир с особой миссией. Но высокая вибрация требует столь же высокой осознанности. Как принять свой дар.',
    readTime: '10 мин',
    date: '8 апреля 2026',
  },
  {
    tag: 'Практика',
    title: 'Как использовать персональный год для планирования',
    excerpt: 'Девятилетние циклы нумерологии открывают понимание ритмов жизни. Учимся синхронизировать свои цели с потоком времени.',
    readTime: '8 мин',
    date: '1 апреля 2026',
  },
  {
    tag: 'Отношения',
    title: 'Совместимость чисел: кто ваш идеальный партнёр',
    excerpt: 'Нумерология помогает понять динамику отношений. Какие числа дополняют друг друга, а какие создают напряжение — и как с этим работать.',
    readTime: '6 мин',
    date: '25 марта 2026',
  },
  {
    tag: 'Карьера',
    title: 'Нумерология в бизнесе: выбор даты открытия и названия',
    excerpt: 'Числа влияют на успех начинаний. Как правильно выбрать дату запуска, название компании и рабочие даты для максимального результата.',
    readTime: '9 мин',
    date: '18 марта 2026',
  },
  {
    tag: 'Духовность',
    title: 'Кармические числа: какие уроки несёт ваша судьба',
    excerpt: 'Числа 13, 14, 16 и 19 в нумерологическом портрете указывают на кармические уроки прошлых воплощений. Как их трансформировать в силу.',
    readTime: '12 мин',
    date: '10 марта 2026',
  },
];

const tagColors: Record<string, string> = {
  'Основы': 'rgba(201,168,76,0.15)',
  'Числа': 'rgba(107,79,160,0.2)',
  'Практика': 'rgba(78,160,120,0.15)',
  'Отношения': 'rgba(200,100,130,0.15)',
  'Карьера': 'rgba(100,150,200,0.15)',
  'Духовность': 'rgba(200,150,80,0.15)',
};
const tagTextColors: Record<string, string> = {
  'Основы': '#C9A84C',
  'Числа': '#A07BD0',
  'Практика': '#4EA078',
  'Отношения': '#C87890',
  'Карьера': '#6496C8',
  'Духовность': '#C8A050',
};

const ArticlesPage = () => (
  <div className="min-h-screen pt-20 pb-24 px-4">
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="font-golos text-xs text-gold/50 tracking-[0.3em] uppercase mb-4 block">Знания и практика</span>
        <h1 className="font-cormorant text-5xl sm:text-6xl font-light text-foreground mb-4">
          Статьи и <span className="text-gold italic">материалы</span>
        </h1>
        <p className="font-golos text-foreground/50 text-sm max-w-md mx-auto">
          Глубокие материалы по нумерологии — от практических советов до философских размышлений
        </p>
        <div className="sacred-divider mt-8" />
      </div>

      {/* Featured article */}
      <div className="mystical-card rounded-2xl overflow-hidden mb-8 group cursor-pointer">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative overflow-hidden" style={{ minHeight: 240 }}>
            <img 
              src="https://cdn.poehali.dev/projects/8ee12e80-05ca-4489-b616-90fbd7a60b07/files/16927a0c-a457-4b2e-978a-31ba49a349ec.jpg"
              alt="Нумерология"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              style={{ position: 'absolute', inset: 0 }}
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, transparent 60%, rgba(8,12,26,0.8) 100%)' }} />
          </div>
          <div className="p-8 flex flex-col justify-center">
            <span className="font-golos text-xs text-gold/60 tracking-[0.25em] uppercase mb-3 block">Главная статья</span>
            <h2 className="font-cormorant text-3xl font-semibold text-foreground mb-4 leading-tight">
              Введение в нумерологию: полное руководство для начинающих
            </h2>
            <p className="font-golos text-sm text-foreground/55 leading-relaxed mb-6">
              Всё, что нужно знать о числовой науке. От истории до первых самостоятельных расчётов — в одном подробном руководстве.
            </p>
            <button className="font-golos text-sm text-gold/70 hover:text-gold transition-colors flex items-center gap-2 group/btn">
              Читать полностью
              <Icon name="ArrowRight" size={14} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Articles grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {articles.map((a, i) => (
          <article key={i} className="mystical-card rounded-xl p-6 cursor-pointer group transition-all duration-300 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <span className="font-golos text-xs px-2.5 py-1 rounded-full"
                style={{ background: tagColors[a.tag], color: tagTextColors[a.tag] }}>
                {a.tag}
              </span>
              <span className="font-golos text-xs text-foreground/30 flex items-center gap-1">
                <Icon name="Clock" size={11} />
                {a.readTime}
              </span>
            </div>

            <h3 className="font-cormorant text-xl font-semibold text-foreground mb-3 leading-tight group-hover:text-gold/90 transition-colors flex-1">
              {a.title}
            </h3>
            <p className="font-golos text-xs text-foreground/50 leading-relaxed mb-4">
              {a.excerpt}
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-gold/10">
              <span className="font-golos text-xs text-foreground/30">{a.date}</span>
              <button className="font-golos text-xs text-gold/50 hover:text-gold transition-colors flex items-center gap-1">
                Читать
                <Icon name="ArrowRight" size={12} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Load more */}
      <div className="text-center mt-10">
        <button className="px-8 py-3 rounded-lg font-golos text-sm text-gold/70 hover:text-gold transition-colors"
          style={{ border: '1px solid rgba(201,168,76,0.2)' }}>
          Показать ещё статьи
        </button>
      </div>
    </div>
  </div>
);

export default ArticlesPage;
