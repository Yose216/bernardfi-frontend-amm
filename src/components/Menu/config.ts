import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://bernard.finance',
  },
  {
    label: 'Stake',
    icon: 'FarmIcon',
    items: [
      {
        label: 'Farms',
        href: 'https://bernard.finance/farms',
      },
      {
        label: 'Pools',
        href: 'https://bernard.finance/nests',
      },
    ],
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Play',
    icon: 'TicketIcon',
    items: [
      {
        label: 'Lottery',
        href: 'https://bernard.finance/lottery',
      },
      {
        label: 'Bets',
        href: 'https://bernard.finance/bets',
      },
      {
        label: 'BFC',
        href: 'https://bernard.finance/bfc',
      },
    ],
  },
  {
    label: 'NFT Marketplace',
    icon: 'NftIcon',
    href: 'https://bernard.finance/marketplace-nft',
  },
  {
    label: 'Ecosystem',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Infos',
        href: 'https://bernard.finance/infos',
      },
      {
        label: 'Algo Perfs',
        href: 'https://bernard.finance/algo',
      },
      {
        label: 'Barry Foundation',
        href: 'https://bernard.finance/barry-foundation',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Docs',
        href: 'https://bernard-finance.gitbook.io/bernardswap/',
      },
      {
        label: 'Blog',
        href: 'https://bernardfinance.medium.com/',
      },
    ],
  },
]

export default config
