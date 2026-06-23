import type { ImageMetadata } from 'astro';

import flagman from '../assets/img/p-flagman.png';
import stroynost from '../assets/img/p-stroynost.png';
import popa1 from '../assets/img/p-popa1.png';
import popa2 from '../assets/img/p-popa2.png';
import jivot from '../assets/img/p-jivot.png';
import jiro from '../assets/img/p-jiro.png';

export interface Program {
  tag: string;
  title: string;
  text: string;
  img: ImageMetadata;
  /** Цели для фильтра-чипов: pohudet | popa | jivot | relief */
  goals: string[];
  flagship?: boolean;
  badge?: string;
}

/** Копирайт снят дословно с usmanovafit.gymteam.ru/mainpage (блок «Домашние тренировки»). */
export const programs: Program[] = [
  {
    tag: 'ФЛАГМАН',
    title: 'Метод Усмановой',
    text: 'Освоите технику и втянетесь в регулярные тренировки — без травм и через силу. Первая программа, с которой начинают все ученицы Кати.',
    img: flagman,
    goals: [],
    flagship: true,
    badge: 'С этого начинают все',
  },
  {
    tag: 'Марафон',
    title: 'Стройности',
    text: 'Первый видимый результат за 21 день — уходит первый жир, появляется тонус и лёгкость. Для тех, кто стартует с нуля.',
    img: stroynost,
    goals: ['pohudet'],
  },
  {
    tag: 'Марафон',
    title: 'Упругая попа 1.0',
    text: 'Первый объём и подтянутость ягодиц — с собственным весом. Для тех, кто впервые целенаправленно работает над попой.',
    img: popa1,
    goals: ['popa'],
  },
  {
    tag: 'Марафон',
    title: 'Упругая попа 2.0',
    text: 'Плотные, упругие ягодицы — следующий уровень после 1.0. С резинкой и утяжелителями, для подготовленных.',
    img: popa2,
    goals: ['popa'],
  },
  {
    tag: 'Марафон',
    title: 'Плоский живот',
    text: 'Убрать вываливающийся живот, который не уходит даже после похудения. Тренировки на глубокие мышцы пресса.',
    img: jivot,
    goals: ['jivot'],
  },
  {
    tag: 'Курс',
    title: 'Жиросжигающий',
    text: 'Сжечь жир и проявить рельеф — за 6 недель. Для тех, кто уже тренировался: с гантелями, по схеме интервальных нагрузок.',
    img: jiro,
    goals: ['relief', 'pohudet'],
  },
];
