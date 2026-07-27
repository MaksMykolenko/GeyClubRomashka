export interface CampaignPhoto {
  id: string;
  src: string;
  thumbnail: string;
  alt: string;
  width: number;
  height: number;
  category: string;
  title: string;
  subtitle: string;
}

export const campaignPhotos: CampaignPhoto[] = [
  {
    id: 'after-dawn-01',
    src: '/images/campaign/romashka-after-dawn-01.png',
    thumbnail: '/images/campaign/romashka-after-dawn-01-thumb.png',
    alt: 'Портрет героя промокампанії клубу «Ромашка»',
    width: 918,
    height: 1632,
    category: 'campaign',
    title: 'Момент щирості',
    subtitle: 'М’яке ранкове світло після драйвової ночі',
  },
  {
    id: 'after-dawn-02',
    src: '/images/campaign/romashka-after-dawn-02.png',
    thumbnail: '/images/campaign/romashka-after-dawn-02-thumb.png',
    alt: 'Портретна фотографія з промокампанії клубу «Ромашка»',
    width: 918,
    height: 1632,
    category: 'campaign',
    title: 'Спокійна посмішка',
    subtitle: 'Відчуття абсолютної свободи бути собою',
  },
  {
    id: 'after-dawn-03',
    src: '/images/campaign/romashka-after-dawn-03.png',
    thumbnail: '/images/campaign/romashka-after-dawn-03-thumb.png',
    alt: 'Герой промокампанії клубу «Ромашка» у домашній атмосфері',
    width: 918,
    height: 1632,
    category: 'campaign',
    title: 'Затишне відновлення',
    subtitle: 'Теплі спогади та емоції нічного танцполу',
  },
];
