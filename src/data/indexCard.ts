export interface Aircraft {
  name: string
  country: string
  type: string
  image: string
  imageAlt: string
}

export const AIRCRAFT_DATA: Aircraft[] = [
  {
    name: 'F-22',
    country: '美国',
    type: '隐身战斗机',
    image: '/images/index/f22.jpg',
    imageAlt: '洛克希德·马丁、波音和通用等联合为美国空军设计的重型隐身战斗机。',
  },
  {
    name: 'FC-1',
    country: '中国/巴基斯坦',
    type: '轻型战斗机',
    image: '/images/index/FC-1.jpg',
    imageAlt: '中国和巴基斯坦联合研发，主要用于战术打击、空中加油、电子战等多种任务。',
  },
  {
    name: 'J-20',
    country: '中国',
    type: '隐身歼击机',
    image: '/images/index/J20.jpg',
    imageAlt: '集全球优秀四代机的大成于一体，是现有优秀技术最多、综合最为完善的机型。',
  },
  {
    name: 'H-6',
    country: '中国',
    type: '轰炸机',
    image: '/images/index/H-6K.jpg',
    imageAlt: '中国轰炸机主力，主要担任轰炸、侦察、反舰、巡逻监视、空中加油等多种任务。',
  },

]
