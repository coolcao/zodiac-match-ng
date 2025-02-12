import { CelestialStem, Terrestrial, Zodiac, ZodiacCard } from "./zodiac-match.types";

const terrestrials = [
  Terrestrial.子,
  Terrestrial.丑,
  Terrestrial.寅,
  Terrestrial.卯,
  Terrestrial.辰,
  Terrestrial.巳,
  Terrestrial.午,
  Terrestrial.未,
  Terrestrial.申,
  Terrestrial.酉,
  Terrestrial.戌,
  Terrestrial.亥,
];
const celestialStems = [
  CelestialStem.甲,
  CelestialStem.乙,
  CelestialStem.丙,
  CelestialStem.丁,
  CelestialStem.戊,
  CelestialStem.己,
  CelestialStem.庚,
  CelestialStem.辛,
  CelestialStem.壬,
  CelestialStem.癸,

]

export const cardList: ZodiacCard[] = [
  {
    zodiac: Zodiac.鼠,
    img: 'assets/img/鼠.png',
    terrestrial: Terrestrial.子,
    desc: '鼠是十二生肖中的第一位，通常象征着机智、灵活和聪明。在中国文化中，鼠代表着聪明才智和快速行动，象征着有良好的适应能力和生存技巧。鼠年被认为是开始新计划的好时机，因为鼠擅长抓住机会。',
  },
  {
    zodiac: Zodiac.牛,
    img: 'assets/img/牛.png',
    terrestrial: Terrestrial.丑,
    desc: '牛是踏实、勤劳和坚韧的象征。牛年通常象征着稳步推进、耐心和踏实的努力。中国文化中，牛代表着辛勤劳动和稳重。牛年是积累财富和为长期目标努力的年份。',
  },
  {
    zodiac: Zodiac.虎,
    img: 'assets/img/虎.png',
    terrestrial: Terrestrial.寅,
    desc: '虎是勇气、力量和领导力的象征，代表着强大、果断和有冒险精神的人。虎年通常象征着积极进取和勇于面对挑战。中国传统文化中，虎被认为是森林之王，能保护家庭和社会。',
  },
  {
    zodiac: Zodiac.兔,
    img: 'assets/img/兔.png',
    terrestrial: Terrestrial.卯,
    desc: '兔代表着温和、灵巧和善良。兔年通常象征着和谐、平静和收获。兔在中国文化中通常与繁荣、幸运和家庭和谐联系在一起。兔年是适合扩展社交圈和寻找机会的年份。',
  },
  {
    zodiac: Zodiac.龙,
    img: 'assets/img/龙.png',
    terrestrial: Terrestrial.辰,
    desc: '龙是中国文化中最重要的象征之一，代表着权力、威严、好运和成功。龙年通常象征着巨大的潜力和飞跃的机会。龙在中国传统文化中被视为至尊的神兽，代表着强大的生命力和创新能力。',
  },
  {
    zodiac: Zodiac.蛇,
    img: 'assets/img/蛇.png',
    terrestrial: Terrestrial.巳,
    desc: '蛇代表着智慧、神秘和深思熟虑。蛇年通常象征着思考、决策和策略。蛇是具有直觉和洞察力的动物，蛇年也是适合做出重大决定和寻找新机会的年份。',
  },
  {
    zodiac: Zodiac.马,
    img: 'assets/img/马.png',
    terrestrial: Terrestrial.午,
    desc: '马代表着活力、自由和迅速。马年通常象征着行动力和快速发展的机会。马在中国文化中象征着奔腾和自由，是追求事业成功和个人发展的好时机。',
  },
  {
    zodiac: Zodiac.羊,
    img: 'assets/img/羊.png',
    terrestrial: Terrestrial.未,
    desc: '羊是温顺、善良和富有同情心的象征。羊年通常象征着和平、友爱和稳定。羊年是和谐的年份，适合注重家庭、生活质量和社会交往。',
  },
  {
    zodiac: Zodiac.猴,
    img: 'assets/img/猴.png',
    terrestrial: Terrestrial.申,
    desc: '猴子代表机智、聪明和幽默。猴年通常象征着灵活性、创造力和改变的机会。猴是一个富有智慧和创新精神的动物，猴年适合进行新尝试和冒险。',
  },
  {
    zodiac: Zodiac.鸡,
    img: 'assets/img/鸡.png',
    terrestrial: Terrestrial.酉,
    desc: '鸡象征着勤劳、警觉和纪律性。鸡年通常象征着自律、清晰的目标和精确的计划。鸡是一个注重细节的动物，因此鸡年常常是注重细节和自我提升的年份。',
  },
  {
    zodiac: Zodiac.狗,
    img: 'assets/img/狗.png',
    terrestrial: Terrestrial.戌,
    desc: '狗象征着忠诚、诚实和勇敢。狗年通常象征着守护、责任和对家庭的重视。狗是一个非常忠诚的动物，狗年常常是专注于稳定关系和长期发展的年份。',
  },
  {
    zodiac: Zodiac.猪,
    img: 'assets/img/猪.png',
    terrestrial: Terrestrial.亥,
    desc: '猪是诚实、宽容和富裕的象征。猪年通常象征着繁荣、丰收和愉悦。猪在中国文化中被视为财富和吉祥的象征。猪年是享受生活、关注健康和财富增长的好时机。',
  },
];
