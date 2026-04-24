import Icon from '@/components/ui/icon';

const modules = [
  {
    num: '01',
    title: 'Основы нумерологии',
    duration: '5 уроков',
    level: 'Начальный',
    topics: ['История и философия числовой науки', 'Пифагорейская школа нумерологии', 'Принципы вибрации чисел', 'Системы нумерологии: западная и восточная'],
    desc: 'Погружение в историю и философию древней науки чисел. Узнайте, как нумерология возникла и развивалась на протяжении тысячелетий.',
  },
  {
    num: '02',
    title: 'Число Судьбы',
    duration: '4 урока',
    level: 'Начальный',
    topics: ['Метод вычисления числа судьбы', 'Интерпретация чисел 1–9', 'Мастер-числа 11, 22, 33', 'Кармические числа и их значение'],
    desc: 'Научитесь самостоятельно рассчитывать и интерпретировать число судьбы для себя и близких.',
  },
  {
    num: '03',
    title: 'Персональный год и циклы',
    duration: '6 уроков',
    level: 'Средний',
    topics: ['Девятилетние циклы жизни', 'Расчёт персонального года', 'Планирование по циклам', 'Ретроспективный анализ жизни'],
    desc: 'Освойте метод прогнозирования через персональные годовые циклы. Научитесь использовать ритмы времени.',
  },
  {
    num: '04',
    title: 'Нумерология имени',
    duration: '5 уроков',
    level: 'Средний',
    topics: ['Число Выражения (имя и фамилия)', 'Число Душевного стремления', 'Число Личности', 'Анализ совместимости по имени'],
    desc: 'Раскройте скрытые смыслы имён. Узнайте, как имя влияет на характер и судьбу человека.',
  },
  {
    num: '05',
    title: 'Нумерологический портрет',
    duration: '7 уроков',
    level: 'Продвинутый',
    topics: ['Полная нумерологическая матрица', 'Таблица Пифагора', 'Числа жизненных уроков', 'Составление подробного портрета'],
    desc: 'Создание полного нумерологического портрета личности, объединяющего все ключевые числа.',
  },
  {
    num: '06',
    title: 'Нумерология в жизни',
    duration: '4 урока',
    level: 'Практика',
    topics: ['Совместимость в отношениях', 'Нумерология в бизнесе', 'Выбор благоприятных дат', 'Нумерология места жительства'],
    desc: 'Применение нумерологии на практике: в отношениях, бизнесе, выборе дат и жизненных решений.',
  },
];

const levelColors: Record<string, string> = {
  'Начальный': 'rgba(120,200,120,0.15)',
  'Средний': 'rgba(200,180,100,0.15)',
  'Продвинутый': 'rgba(200,100,100,0.15)',
  'Практика': 'rgba(100,150,200,0.15)',
};
const levelTextColors: Record<string, string> = {
  'Начальный': '#78C878',
  'Средний': '#C8B464',
  'Продвинутый': '#C87878',
  'Практика': '#6496C8',
};

const LearningPage = () => (
  <div className="min-h-screen pt-20 pb-24 px-4">
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="font-golos text-xs text-gold/50 tracking-[0.3em] uppercase mb-4 block">Школа нумерологии</span>
        <h1 className="font-cormorant text-5xl sm:text-6xl font-light text-foreground mb-4">
          Обучение <span className="text-gold italic">нумерологии</span>
        </h1>
        <p className="font-golos text-foreground/50 text-sm max-w-lg mx-auto">
          Структурированный курс от основ до продвинутых методов. Освойте науку чисел шаг за шагом.
        </p>
        <div className="sacred-divider mt-8" />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-16">
        {[
          { v: '6', l: 'Модулей' },
          { v: '31', l: 'Урок' },
          { v: '∞', l: 'Практики' },
        ].map(s => (
          <div key={s.l} className="mystical-card rounded-xl p-6 text-center">
            <div className="font-cormorant text-4xl font-bold text-gold mb-1">{s.v}</div>
            <div className="font-golos text-xs text-foreground/50 tracking-wide">{s.l}</div>
          </div>
        ))}
      </div>

      {/* Modules */}
      <div className="space-y-4">
        {modules.map((m, i) => (
          <div key={m.num} className="mystical-card rounded-xl overflow-hidden group">
            <div className="p-6 sm:p-8">
              <div className="flex items-start gap-6">
                {/* Number */}
                <div className="shrink-0">
                  <div className="font-cormorant text-4xl font-light text-gold/25 group-hover:text-gold/50 transition-colors">
                    {m.num}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="font-cormorant text-2xl font-semibold text-foreground">{m.title}</h3>
                    <span className="font-golos text-xs px-2.5 py-1 rounded-full"
                      style={{ background: levelColors[m.level], color: levelTextColors[m.level] }}>
                      {m.level}
                    </span>
                  </div>
                  <p className="font-golos text-sm text-foreground/55 leading-relaxed mb-4">{m.desc}</p>

                  {/* Topics */}
                  <div className="grid sm:grid-cols-2 gap-2">
                    {m.topics.map(t => (
                      <div key={t} className="flex items-start gap-2">
                        <span className="text-gold/40 mt-0.5 shrink-0">✦</span>
                        <span className="font-golos text-xs text-foreground/50">{t}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mt-5 pt-5 border-t border-gold/10">
                    <div className="flex items-center gap-2 text-foreground/40">
                      <Icon name="BookOpen" size={14} />
                      <span className="font-golos text-xs">{m.duration}</span>
                    </div>
                    <button className="font-golos text-xs text-gold/60 hover:text-gold transition-colors flex items-center gap-1.5 group/btn">
                      Начать модуль
                      <Icon name="ArrowRight" size={13} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <div className="mystical-card rounded-2xl p-8">
          <div className="font-cormorant text-4xl text-gold/20 mb-4">☽ ✦ ☾</div>
          <h3 className="font-cormorant text-2xl font-light text-foreground mb-3">
            Начните с бесплатного урока
          </h3>
          <p className="font-golos text-sm text-foreground/50 mb-6">
            Первый модуль полностью открыт. Погрузитесь в мир нумерологии уже сегодня.
          </p>
          <button className="px-8 py-3 rounded-lg font-golos text-sm font-medium tracking-widest uppercase transition-all duration-300 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #C9A84C 0%, #E8C97A 100%)', color: '#080C1A' }}>
            Начать обучение
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default LearningPage;
