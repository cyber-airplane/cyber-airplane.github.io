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
    type: '五代隐身战机',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCa2PeWEzbwVDaeq8BRyFm6DnIrPaCFcj6W4Y8xzjAke5G65iSqEz-EUXDcdGjWffNe3hTVKXLd6yD-NAofnpXbsDdNma1eJ_Y_39oF4KSlp28qVUr1KXOKitmFMKLGtKCy_0bOjU-NOVI-LTHSALHfdA5WMQNZ11B54DhAJ_kdnBWNn2iMSOwnS5peIGYVGS_Yn6qk7cDkI1XIAcLg7Xfas2iKi0GLpqeRa5wt3pK8nY7ND644PMw6zE5ykia4epS7ar9RLnKTrFc',
    imageAlt:
      'A cinematic, high-contrast photograph of an F-22 Raptor fighter jet performing a high-speed climb against a dark, dramatic sky.',
  },
  {
    model: 'SU-57',
    country: '俄罗斯',
    type: '多用途战斗机',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDIsUSgE8ApBK3dtq2qjdiqCRa8wfIMMK_KtYPv1aKfn6KrRSEkS1Mmu5r27d8JnOSt8hu1bCuT0aYgmajDNy-bDCvjsv49Nw1pGgS5q_NuJZp6ML2dHZw2qGaDtcGjPnBsFLFCQSVcJWb6CbA3vHd_MKXmD15e9OgJsGjQ_OPCQStFzVU8tw7pdV7FPlTTNg5vAqYTkRv0hGmneKdukU1373exx2zG_xMhOBBrDltS3ORDsKaPVVJ-4mX0pkI8MzeHA25N2jgzozA',
    imageAlt:
      'A technical, detailed view of a Su-57 Felon stealth fighter taxiing on a darkened tarmac.',
  },
  {
    model: 'B-21',
    country: '美国',
    type: '隐身轰炸机',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCMShSTQ-5mw0DlI7Bhg3eowT_1Wu_JfVJ93100943F-slD3B1wnNKFdgd7bF47vRSRZj2KG0mGl3pVTbkR1cIpaIUI5-RzgjbwxmQzHQC4UK8z9dbL3aXAAGwxCtq_xzVYrTMSjnxW4XABuBb7Hsaq1mJN6ZzKjN7EjClLR5u_uWKbrV_BFQZ5qbCj1YNHk8UAWp9NE5jyC--bQPUG3CT3FX4_c7Nbl9vc0Yb5Fh3NJdA-nXp00VAhdLLhunusH965eNZ-10qMFH8',
    imageAlt:
      'An artistic rendering of a B-21 Raider stealth bomber emerging from a dark, foggy aircraft hangar.',
  },
  {
    model: 'J-20',
    country: '中国',
    type: '隐身截击机',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB6nuWqTEmQ3yTOZ7Dcwv9d7EH6Tw3Lv00n7xZuO6NqwXNUnNtodRXa4DTopQDe5TBaQQjyazkm2Bv1zjc4WmX0C309-1R-yAuLWh1jn72ULOFcnNV81XeXsPVncz94hwp7EMVOG7zii8szHCRL_dEyBVlxFHfRLmBnNWPFhodgOrNW86C19IfZUp2HAJAmar-Z9vzgsJ9VoOXZzQ0cmzIKQ6ZUAI1UT1BtV2TRSO_wKWKq4rJzrJXDS6JnINIlGqbj3jJ5SS7bbeQ',
    imageAlt:
      'A high-tech digital schematic visualization of a J-20 stealth aircraft flying at supersonic speeds.',
  },
]
