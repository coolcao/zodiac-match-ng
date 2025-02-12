
// 卡牌
export interface ZodiacCard {
  zodiac: Zodiac; // 生肖名称
  terrestrial: Terrestrial;  // 生肖对应的地支
  img: string;    // 图片
  desc: string;  // 描述
  showTerrestrial?: boolean; // 是否显示地支
  isOpen?: boolean; // 当前卡牌是否已被打开
  isPinned?: boolean; // 当前卡牌是否被固定
}

// 生肖名称
export enum Zodiac {
  鼠 = '鼠',
  牛 = '牛',
  虎 = '虎',
  兔 = '兔',
  龙 = '龙',
  蛇 = '蛇',
  马 = '马',
  羊 = '羊',
  猴 = '猴',
  鸡 = '鸡',
  狗 = '狗',
  猪 = '猪',
}

// 地支
export enum Terrestrial {
  子 = '子',
  丑 = '丑',
  寅 = '寅',
  卯 = '卯',
  辰 = '辰',
  巳 = '巳',
  午 = '午',
  未 = '未',
  申 = '申',
  酉 = '酉',
  戌 = '戌',
  亥 = '亥',
}
// 天干
export enum CelestialStem {
  甲 = '甲',
  乙 = '乙',
  丙 = '丙',
  丁 = '丁',
  戊 = '戊',
  己 = '己',
  庚 = '庚',
  辛 = '辛',
  壬 = '壬',
  癸 = '癸',
}



