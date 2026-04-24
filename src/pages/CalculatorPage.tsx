import { useState } from 'react';
import SacredGeometry from '@/components/SacredGeometry';
import Icon from '@/components/ui/icon';

const numberData: Record<number, { title: string; keywords: string[]; description: string; yearly: Record<number, string> }> = {
  1: {
    title: 'Лидер',
    keywords: ['Независимость', 'Воля', 'Начинание'],
    description: 'Единица — число первопроходцев и лидеров. Вы рождены вести за собой, прокладывать новые пути и воплощать смелые идеи. Ваша сила — в неукротимой воле и уверенности в себе.',
    yearly: { 1: 'Год великих начинаний и свежего старта.', 2: 'Год партнёрства и укрепления связей.', 3: 'Год творчества и самовыражения.', 4: 'Год труда и построения фундамента.', 5: 'Год перемен и новых горизонтов.', 6: 'Год гармонии и ответственности.', 7: 'Год размышлений и духовного роста.', 8: 'Год силы и материального успеха.', 9: 'Год завершения и мудрости.' },
  },
  2: {
    title: 'Дипломат',
    keywords: ['Гармония', 'Сотрудничество', 'Интуиция'],
    description: 'Двойка — число баланса и партнёрства. Вы обладаете тонкой интуицией и даром создавать гармонию там, где другие видят только конфликт. Ваша сила — в мудрости и умении слышать.',
    yearly: { 1: 'Год новых союзов и партнёрств.', 2: 'Год глубокого взаимопонимания.', 3: 'Год радостного общения.', 4: 'Год кропотливой совместной работы.', 5: 'Год неожиданных знакомств.', 6: 'Год любви и семейных радостей.', 7: 'Год внутреннего покоя.', 8: 'Год признания ваших заслуг.', 9: 'Год отпускания старого.' },
  },
  3: {
    title: 'Творец',
    keywords: ['Творчество', 'Радость', 'Общение'],
    description: 'Тройка — число творчества и радости. Вы излучаете свет и позитивную энергию. Ваш дар — вдохновлять людей, создавать красоту и выражать себя через искусство и слово.',
    yearly: { 1: 'Год рождения новых идей.', 2: 'Год плодотворного сотрудничества.', 3: 'Пик творческой силы и успеха.', 4: 'Год воплощения идей в реальность.', 5: 'Год ярких впечатлений.', 6: 'Год творческой любви.', 7: 'Год глубокого самопознания.', 8: 'Год признания таланта.', 9: 'Год творческого итога.' },
  },
  4: {
    title: 'Строитель',
    keywords: ['Надёжность', 'Труд', 'Порядок'],
    description: 'Четвёрка — число мастеров и строителей. Вы создаёте прочные основания во всём. Ваша дисциплина, честность и трудолюбие — это силы, на которых держится мир.',
    yearly: { 1: 'Год закладки новых основ.', 2: 'Год укрепления союзов.', 3: 'Год вдохновения в труде.', 4: 'Год напряжённого и плодотворного труда.', 5: 'Год перестройки и реформ.', 6: 'Год домашнего уюта.', 7: 'Год духовного укрепления.', 8: 'Год материального расцвета.', 9: 'Год завершения крупных проектов.' },
  },
  5: {
    title: 'Искатель',
    keywords: ['Свобода', 'Перемены', 'Авантюризм'],
    description: 'Пятёрка — число приключений и свободы. Вы живёте полной жизнью, постоянно ища новый опыт. Ваша стихия — движение, изменение и неиссякаемое любопытство.',
    yearly: { 1: 'Год смелых начинаний.', 2: 'Год важных встреч в пути.', 3: 'Год ярких творческих путешествий.', 4: 'Год структурирования опыта.', 5: 'Пиковый год перемен и свободы.', 6: 'Год обустройства нового пространства.', 7: 'Год духовного путешествия.', 8: 'Год успешных авантюр.', 9: 'Год финального приключения цикла.' },
  },
  6: {
    title: 'Хранитель',
    keywords: ['Любовь', 'Семья', 'Забота'],
    description: 'Шестёрка — число любви и гармонии. Вы рождены создавать тепло и заботу вокруг себя. Ваш дом — это храм, а семья и близкие — главный смысл.',
    yearly: { 1: 'Год новых обязанностей с любовью.', 2: 'Год гармоничных отношений.', 3: 'Год радости и семейных праздников.', 4: 'Год укрепления дома.', 5: 'Год перемен в семейной жизни.', 6: 'Год расцвета любви и красоты.', 7: 'Год духовной связи с близкими.', 8: 'Год процветания семьи.', 9: 'Год завершения семейного цикла.' },
  },
  7: {
    title: 'Мудрец',
    keywords: ['Мудрость', 'Анализ', 'Духовность'],
    description: 'Семёрка — число искателей истины. Вы прирождённый аналитик и философ. Ваш путь — познание глубин бытия, наука и мистика. Одиночество для вас — не изоляция, а пространство откровений.',
    yearly: { 1: 'Год новых исследований.', 2: 'Год духовного партнёрства.', 3: 'Год вдохновенного познания.', 4: 'Год систематизации знаний.', 5: 'Год неожиданных открытий.', 6: 'Год мудрой заботы.', 7: 'Пик духовного познания и озарений.', 8: 'Год признания глубины.', 9: 'Год передачи мудрости.' },
  },
  8: {
    title: 'Властитель',
    keywords: ['Власть', 'Достаток', 'Амбиции'],
    description: 'Восьмёрка — число власти и изобилия. Вы рождены для больших дел и высоких достижений. Ваша сила — в организаторских способностях и умении управлять ресурсами.',
    yearly: { 1: 'Год мощного старта карьеры.', 2: 'Год деловых союзов.', 3: 'Год творческих бизнес-идей.', 4: 'Год строительства империи.', 5: 'Год расширения сфер влияния.', 6: 'Год гармоничного процветания.', 7: 'Год стратегического планирования.', 8: 'Пик материального могущества.', 9: 'Год завершения деловых циклов.' },
  },
  9: {
    title: 'Гуманист',
    keywords: ['Мудрость', 'Альтруизм', 'Завершение'],
    description: 'Девятка — число мудрецов и гуманистов. Вы несёте в себе опыт всех чисел. Ваш путь — служение человечеству, сострадание и передача мудрости будущим поколениям.',
    yearly: { 1: 'Год нового витка служения.', 2: 'Год глубоких связей с людьми.', 3: 'Год вдохновенного творчества во имя добра.', 4: 'Год конкретных добрых дел.', 5: 'Год перемен в миссии.', 6: 'Год любви к человечеству.', 7: 'Год духовного совершенства.', 8: 'Год признания заслуг.', 9: 'Пик мудрости и завершение цикла.' },
  },
  11: {
    title: 'Просветлённый',
    keywords: ['Интуиция', 'Откровение', 'Миссия'],
    description: 'Одиннадцать — первое мастер-число. Вы — мост между миром духовным и материальным. Ваша интуиция граничит с ясновидением. Вы пришли, чтобы вдохновлять и нести свет.',
    yearly: { 1: 'Год пробуждения миссии.', 2: 'Год духовных союзов.', 3: 'Год вдохновенного учения.', 4: 'Год воплощения видений.', 5: 'Год духовных открытий.', 6: 'Год служения любовью.', 7: 'Год глубочайших откровений.', 8: 'Год признания духовного лидерства.', 9: 'Год завершения великой миссии.' },
  },
  22: {
    title: 'Мастер-строитель',
    keywords: ['Реализация', 'Масштаб', 'Сила'],
    description: 'Двадцать два — число Мастера-строителя. Вы способны воплощать грандиозные замыслы в реальность. Сочетание мечты и практичности делает вас творцом великих систем.',
    yearly: { 1: 'Год закладки великих проектов.', 2: 'Год стратегических союзов.', 3: 'Год вдохновения для масштабных идей.', 4: 'Год колоссального труда.', 5: 'Год глобальных перемен.', 6: 'Год гармоничного строительства.', 7: 'Год переосмысления великих целей.', 8: 'Год максимального успеха.', 9: 'Год завершения великих свершений.' },
  },
  33: {
    title: 'Учитель человечества',
    keywords: ['Любовь', 'Исцеление', 'Мудрость'],
    description: 'Тридцать три — наивысшее мастер-число. Это число Учителя человечества. Вы несёте безусловную любовь, исцеление и высшую мудрость. Ваше присутствие — само по себе благословение.',
    yearly: { 1: 'Год новых учеников и миссии.', 2: 'Год союзов любви.', 3: 'Год творческого учения.', 4: 'Год построения духовной системы.', 5: 'Год распространения мудрости.', 6: 'Год исцеления любовью.', 7: 'Год глубочайшей мудрости.', 8: 'Год признания великого учения.', 9: 'Год завершения миссии Учителя.' },
  },
};

const reduceToDestinyNumber = (date: string): number => {
  const digits = date.replace(/-/g, '').split('').map(Number);
  let sum = digits.reduce((a, b) => a + b, 0);

  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    sum = sum.toString().split('').map(Number).reduce((a, b) => a + b, 0);
  }
  return sum;
};

const getCurrentPersonalYear = (birthDate: string, targetYear: number): number => {
  const [year, month, day] = birthDate.split('-').map(Number);
  const digits = `${day}${month}${targetYear}`.split('').map(Number);
  let sum = digits.reduce((a, b) => a + b, 0);
  while (sum > 9) {
    sum = sum.toString().split('').map(Number).reduce((a, b) => a + b, 0);
  }
  return sum;
};

const CalculatorPage = () => {
  const [birthDate, setBirthDate] = useState('');
  const [name, setName] = useState('');
  const [result, setResult] = useState<null | { destiny: number; personalYear: number; yearForecast: string }>(null);
  const [showResult, setShowResult] = useState(false);
  const currentYear = 2026;

  const calculate = () => {
    if (!birthDate) return;
    const destiny = reduceToDestinyNumber(birthDate);
    const personalYear = getCurrentPersonalYear(birthDate, currentYear);
    const data = numberData[destiny];
    const yearForecast = data?.yearly[personalYear] || 'Год глубоких перемен и роста.';
    setResult({ destiny, personalYear, yearForecast });
    setShowResult(true);
  };

  const reset = () => {
    setShowResult(false);
    setResult(null);
    setBirthDate('');
    setName('');
  };

  const data = result ? numberData[result.destiny] : null;

  return (
    <div className="min-h-screen pt-20 pb-24 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-golos text-xs text-gold/50 tracking-[0.3em] uppercase mb-4 block">Ваш личный расчёт</span>
          <h1 className="font-cormorant text-5xl sm:text-6xl font-light text-foreground mb-4">
            Калькулятор <span className="text-gold italic">Судьбы</span>
          </h1>
          <p className="font-golos text-foreground/50 text-sm max-w-md mx-auto">
            Введите дату рождения, чтобы узнать ваше число судьбы и персональный прогноз на {currentYear} год
          </p>
          <div className="sacred-divider mt-8" />
        </div>

        {!showResult ? (
          /* Calculator form */
          <div className="mystical-card rounded-2xl p-8 sm:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
              <SacredGeometry size={300} />
            </div>

            <div className="relative z-10 space-y-6">
              <div>
                <label className="font-golos text-xs text-gold/60 tracking-[0.2em] uppercase block mb-3">
                  Ваше имя (необязательно)
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Введите имя..."
                  className="w-full px-5 py-4 rounded-lg font-golos text-sm text-foreground placeholder-foreground/25 outline-none transition-all duration-300 focus:border-gold/50"
                  style={{ 
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(201,168,76,0.2)'
                  }}
                />
              </div>

              <div>
                <label className="font-golos text-xs text-gold/60 tracking-[0.2em] uppercase block mb-3">
                  Дата рождения *
                </label>
                <input
                  type="date"
                  value={birthDate}
                  onChange={e => setBirthDate(e.target.value)}
                  className="w-full px-5 py-4 rounded-lg font-golos text-sm text-foreground outline-none transition-all duration-300 focus:border-gold/50"
                  style={{ 
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(201,168,76,0.2)',
                    colorScheme: 'dark'
                  }}
                />
              </div>

              <button
                onClick={calculate}
                disabled={!birthDate}
                className="w-full py-4 rounded-lg font-golos font-medium text-sm tracking-widest uppercase transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:scale-[1.02]"
                style={{ 
                  background: birthDate ? 'linear-gradient(135deg, #C9A84C 0%, #E8C97A 100%)' : 'rgba(201,168,76,0.2)',
                  color: birthDate ? '#080C1A' : 'rgba(201,168,76,0.4)',
                  boxShadow: birthDate ? '0 0 30px rgba(201,168,76,0.2)' : 'none'
                }}
              >
                ✦ Раскрыть число судьбы
              </button>
            </div>
          </div>
        ) : (
          /* Result */
          <div className="space-y-6 animate-fade-up">
            {/* Main number */}
            <div className="mystical-card rounded-2xl p-8 sm:p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
                <SacredGeometry size={400} />
              </div>
              <div className="relative z-10">
                {name && (
                  <p className="font-golos text-sm text-foreground/50 mb-2">Для {name}</p>
                )}
                <p className="font-golos text-xs text-gold/50 tracking-[0.3em] uppercase mb-6">Ваше число судьбы</p>
                <div 
                  className="font-cormorant text-9xl font-bold text-gold gold-text-glow mb-4 animate-number-reveal inline-block"
                  style={{ lineHeight: 1 }}
                >
                  {result?.destiny}
                </div>
                <h2 className="font-cormorant text-3xl font-semibold text-foreground mb-3">
                  {data?.title}
                </h2>
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {data?.keywords.map(kw => (
                    <span key={kw} className="px-3 py-1 rounded-full font-golos text-xs text-gold/70 border border-gold/20">
                      {kw}
                    </span>
                  ))}
                </div>
                <div className="sacred-divider mb-6" />
                <p className="font-golos text-sm text-foreground/65 leading-relaxed max-w-lg mx-auto">
                  {data?.description}
                </p>
              </div>
            </div>

            {/* Yearly forecast */}
            <div className="mystical-card rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)' }}>
                  <Icon name="Calendar" size={18} className="text-gold" />
                </div>
                <div>
                  <p className="font-golos text-xs text-gold/50 tracking-[0.2em] uppercase">Годовой прогноз</p>
                  <p className="font-cormorant text-xl text-foreground">Личный год <span className="text-gold">{result?.personalYear}</span> в {currentYear}</p>
                </div>
              </div>
              <p className="font-golos text-sm text-foreground/65 leading-relaxed">
                {result?.yearForecast}
              </p>
              <div className="mt-6 p-4 rounded-lg" style={{ background: 'rgba(201,168,76,0.05)', border: '1px solid rgba(201,168,76,0.15)' }}>
                <p className="font-golos text-xs text-gold/60 leading-relaxed">
                  ✦ Ваш личный год {result?.personalYear} определяет общую тему {currentYear} года. 
                  Используйте эту энергию осознанно для достижения своих целей.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={reset}
                className="flex-1 py-3 rounded-lg font-golos text-sm text-foreground/60 hover:text-gold/80 transition-colors"
                style={{ border: '1px solid rgba(201,168,76,0.2)' }}
              >
                ← Новый расчёт
              </button>
              <button
                className="flex-1 py-3 rounded-lg font-golos text-sm transition-all duration-300 hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #C9A84C 0%, #E8C97A 100%)', color: '#080C1A' }}
              >
                Сохранить результат
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalculatorPage;
