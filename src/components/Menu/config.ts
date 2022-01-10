import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://app.bernard.finance',
  },
  {
    label: 'Stake',
    icon: 'FarmIcon',
    items: [
      {
        label: 'Farms',
        href: 'https://app.bernard.finance/farms',
      },
      {
        label: 'Pools',
        href: 'https://app.bernard.finance/nests',
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
        href: 'https://app.bernard.finance/lottery',
      },
      {
        label: 'Bets',
        href: 'https://app.bernard.finance/bets',
      },
      {
        label: 'BFC',
        href: 'https://app.bernard.finance/bfc',
      },
    ],
  },
  {
    label: 'NFT Marketplace',
    icon: 'NftIcon',
    href: 'https://app.bernard.finance/marketplace-nft',
  },
  {
    label: 'Ecosystem',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Infos',
        href: 'https://app.bernard.finance/infos',
      },
      {
        label: 'Algo Perfs',
        href: 'https://app.bernard.finance/algo',
      },
      {
        label: 'Barry Foundation',
        href: 'https://app.bernard.finance/barry-foundation',
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
