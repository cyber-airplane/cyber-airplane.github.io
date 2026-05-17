export interface Aircraft {
  model: string
  country: string
  type: string
  image: string
  imageAlt: string
}

export const AIRCRAFT_DATA: Aircraft[] = [
  {
    model: 'F-22',
    country: '美国',
    type: '隐身战斗机',
    image: '/images/index/f22.png',
    imageAlt: '电影感的高对比度照片，一架F-22猛禽战斗机在暗色戏剧性天空中高速爬升。',
  },
  {
    model: 'SU-57',
    country: '俄罗斯',
    type: '多用途战斗机',
    image: '/images/index/su57.png',
    imageAlt: '技术细节视角，苏-57 felon隐身战斗机在昏暗的停机坪上滑行。',
  },
  {
    model: 'B-21',
    country: '美国',
    type: '隐身轰炸机',
    image: '/images/index/b21.png',
    imageAlt: '艺术渲染图，B-21突袭者隐身轰炸机从昏暗多雾的机库中驶出。',
  },
  {
    model: 'J-20',
    country: '中国',
    type: '隐身截击机',
    image: '/images/index/j20.png',
    imageAlt: '高科技数字原理图，J-20隐身战斗机以超音速飞行。',
  },
]
