import { useState } from 'react';
import Icon from '@/components/ui/icon';

const numbers = [
  { n: 1, title: 'Лидер', planet: 'Солнце', element: 'Огонь', color: '#E8C97A', keywords: ['Независимость', 'Инициатива', 'Воля', 'Первопроходец'], short: 'Число первопроходцев и лидеров. Вы рождены прокладывать новые пути и воплощать смелые идеи силой чистой воли.', strengths: 'Лидерство, решительность, оригинальность, целеустремлённость', challenges: 'Эгоизм, нетерпеливость, диктаторские наклонности' },
  { n: 2, title: 'Дипломат', planet: 'Луна', element: 'Вода', color: '#B8D4F0', keywords: ['Гармония', 'Партнёрство', 'Интуиция', 'Баланс'], short: 'Число баланса и дипломатии. Вы обладаете даром создавать гармонию и тончайшей интуицией, слышащей то, что другие не замечают.', strengths: 'Дипломатичность, чуткость, такт, сотрудничество', challenges: 'Нерешительность, зависимость от мнения других, обидчивость' },
  { n: 3, title: 'Творец', planet: 'Юпитер', element: 'Огонь', color: '#F4C97A', keywords: ['Творчество', 'Радость', 'Общение', 'Вдохновение'], short: 'Число творчества и радости. Вы излучаете свет и вдохновение. Ваш дар — создавать красоту и наполнять жизнь смыслом через искусство и слово.', strengths: 'Творческий потенциал, общительность, оптимизм, красноречие', challenges: 'Разбросанность, поверхностность, расточительство' },
  { n: 4, title: 'Строитель', planet: 'Уран', element: 'Земля', color: '#8B9E7A', keywords: ['Труд', 'Надёжность', 'Порядок', 'Система'], short: 'Число мастеров и строителей. Вы создаёте прочные основы. Дисциплина и честность — ваши главные силы, на которых держится мир.', strengths: 'Трудолюбие, надёжность, практичность, организованность', challenges: 'Негибкость, упрямство, склонность к ограничениям' },
  { n: 5, title: 'Искатель', planet: 'Меркурий', element: 'Воздух', color: '#A8C8E8', keywords: ['Свобода', 'Перемены', 'Авантюризм', 'Движение'], short: 'Число свободы и приключений. Вы живёте полной жизнью, неустанно ища новый опыт. Стихия перемен питает вашу душу.', strengths: 'Адаптивность, любознательность, харизма, находчивость', challenges: 'Непостоянство, безответственность, импульсивность' },
  { n: 6, title: 'Хранитель', planet: 'Венера', element: 'Земля', color: '#E8A8B8', keywords: ['Любовь', 'Семья', 'Забота', 'Красота'], short: 'Число любви и гармонии. Вы рождены создавать тепло и уют. Ваш дом — это храм, а семья — главный смысл и призвание.', strengths: 'Любовь, ответственность, художественный вкус, преданность', challenges: 'Жертвенность, перфекционизм, склонность к контролю' },
  { n: 7, title: 'Мудрец', planet: 'Нептун', element: 'Вода', color: '#9A8AC8', keywords: ['Мудрость', 'Анализ', 'Духовность', 'Тайна'], short: 'Число искателей истины. Вы прирождённый аналитик и философ. Ваш путь — постижение глубин бытия через науку и мистику.', strengths: 'Аналитический ум, интуиция, духовная глубина, независимость', challenges: 'Замкнутость, скептицизм, отстранённость от людей' },
  { n: 8, title: 'Властитель', planet: 'Сатурн', element: 'Земля', color: '#C8A878', keywords: ['Власть', 'Достаток', 'Карьера', 'Амбиции'], short: 'Число власти и изобилия. Вы рождены для больших достижений. Организаторские способности и умение управлять ресурсами — ваша сила.', strengths: 'Лидерство, деловое чутьё, целеустремлённость, решительность', challenges: 'Жажда власти, материализм, нетерпимость к слабости' },
  { n: 9, title: 'Гуманист', planet: 'Марс', element: 'Огонь', color: '#C87878', keywords: ['Мудрость', 'Альтруизм', 'Завершение', 'Служение'], short: 'Число мудрецов и гуманистов. В вас живёт опыт всех чисел. Ваш путь — служение человечеству и передача высшей мудрости.', strengths: 'Сострадание, широта взглядов, щедрость, мудрость', challenges: 'Разочарование, непрактичность, самопожертвование' },
  { n: 11, title: 'Просветлённый', planet: 'Луна/Солнце', element: 'Эфир', color: '#D8E8F8', keywords: ['Интуиция', 'Откровение', 'Миссия', 'Свет'], short: 'Первое мастер-число. Вы — мост между духовным и материальным мирами. Ваша интуиция граничит с ясновидением. Вы несёте свет.', strengths: 'Высшая интуиция, вдохновение, харизма, духовная миссия', challenges: 'Нервозность, нереализованность потенциала, иллюзии' },
  { n: 22, title: 'Мастер-строитель', planet: 'Уран/Земля', element: 'Все стихии', color: '#E8D8A8', keywords: ['Реализация', 'Масштаб', 'Сила', 'Мастерство'], short: 'Второе мастер-число. Вы способны воплощать грандиозные замыслы. Сочетание мечты и практичности делает вас творцом великих систем.', strengths: 'Масштабное видение, практичность, сила воли, мастерство', challenges: 'Подавленность масштабом задач, диктаторство, страх провала' },
  { n: 33, title: 'Учитель', planet: 'Венера/Юпитер', element: 'Любовь', color: '#F0C8D8', keywords: ['Любовь', 'Исцеление', 'Мудрость', 'Миссия'], short: 'Наивысшее мастер-число. Число Учителя человечества. Вы несёте безусловную любовь и высшую мудрость. Ваше присутствие — благословение.', strengths: 'Безусловная любовь, исцеление, мудрость, творческая сила', challenges: 'Бремя миссии, жертвенность, нереалистичные стандарты' },
];

const MeaningsPage = () => {
  const [selected, setSelected] = useState<typeof numbers[0] | null>(null);

  return (
    <div className="min-h-screen pt-20 pb-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-golos text-xs text-gold/50 tracking-[0.3em] uppercase mb-4 block">Нумерология</span>
          <h1 className="font-cormorant text-5xl sm:text-6xl font-light text-foreground mb-4">
            Значения <span className="text-gold italic">чисел судьбы</span>
          </h1>
          <p className="font-golos text-foreground/50 text-sm max-w-md mx-auto">
            Каждое число несёт уникальную вибрацию и раскрывает тайны характера и предназначения
          </p>
          <div className="sacred-divider mt-8" />
        </div>

        {/* Numbers grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-8">
          {numbers.map(num => (
            <button
              key={num.n}
              onClick={() => setSelected(selected?.n === num.n ? null : num)}
              className={`mystical-card rounded-xl p-4 text-center transition-all duration-300 hover:scale-105 group
                ${selected?.n === num.n ? 'border-gold/60 scale-105' : ''}`}
            >
              <div 
                className="font-cormorant text-3xl font-bold mb-1 transition-all duration-300 group-hover:scale-110"
                style={{ color: num.color }}
              >
                {num.n}
              </div>
              <div className="font-cormorant text-sm text-foreground/70">{num.title}</div>
              {num.n >= 11 && (
                <div className="font-golos text-[10px] text-gold/40 mt-1 tracking-wide">Мастер</div>
              )}
            </button>
          ))}
        </div>

        {/* Detail panel */}
        {selected && (
          <div className="mystical-card rounded-2xl p-8 animate-fade-up">
            <div className="grid md:grid-cols-5 gap-8">
              {/* Number display */}
              <div className="md:col-span-1 flex flex-col items-center justify-start pt-2">
                <div 
                  className="font-cormorant text-8xl font-bold gold-text-glow mb-2"
                  style={{ color: selected.color }}
                >
                  {selected.n}
                </div>
                <div className="font-cormorant text-2xl text-foreground font-semibold">{selected.title}</div>
                <div className="mt-4 space-y-2 w-full">
                  <div className="flex items-center gap-2">
                    <Icon name="Globe" size={13} className="text-gold/40 shrink-0" />
                    <span className="font-golos text-xs text-foreground/45">{selected.planet}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Flame" size={13} className="text-gold/40 shrink-0" />
                    <span className="font-golos text-xs text-foreground/45">{selected.element}</span>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="md:col-span-4 space-y-6">
                <div>
                  <p className="font-golos text-sm text-foreground/65 leading-relaxed">{selected.short}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {selected.keywords.map(kw => (
                    <span key={kw} className="px-3 py-1 rounded-full font-golos text-xs border"
                      style={{ color: selected.color, borderColor: `${selected.color}30`, background: `${selected.color}08` }}>
                      {kw}
                    </span>
                  ))}
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg" style={{ background: 'rgba(120,200,120,0.05)', border: '1px solid rgba(120,200,120,0.15)' }}>
                    <p className="font-golos text-xs text-foreground/40 tracking-[0.2em] uppercase mb-2">Сильные стороны</p>
                    <p className="font-golos text-sm text-foreground/65">{selected.strengths}</p>
                  </div>
                  <div className="p-4 rounded-lg" style={{ background: 'rgba(200,120,120,0.05)', border: '1px solid rgba(200,120,120,0.15)' }}>
                    <p className="font-golos text-xs text-foreground/40 tracking-[0.2em] uppercase mb-2">Вызовы и уроки</p>
                    <p className="font-golos text-sm text-foreground/65">{selected.challenges}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {!selected && (
          <div className="text-center py-8">
            <p className="font-golos text-sm text-foreground/30">Нажмите на число, чтобы увидеть полное описание</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MeaningsPage;
