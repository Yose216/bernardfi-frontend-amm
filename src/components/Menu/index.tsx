import React, { useContext } from 'react'
import { Menu as UikitMenu, ConnectorId } from '@pancakeswap-libs/uikit'
import { useWeb3React } from '@web3-react/core'
import { allLanguages } from 'constants/localisation/languageCodes'
import { LanguageContext } from 'hooks/LanguageContext'
import useTheme from 'hooks/useTheme'
import useGetPriceData, { useGetPriceDataBarrel, useGetPriceDataBern } from 'hooks/useGetPriceData'
import { injected, bsc, walletconnect } from 'connectors'
import links from './config'

const Menu: React.FC = props => {
  const { account, activate, deactivate } = useWeb3React()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  const cakePriceUsd = useGetPriceData()
  const barrelPriceUsd = useGetPriceDataBarrel()
  const bernPriceUsd = useGetPriceDataBern()

  return (
    <UikitMenu
      links={links}
      bernPriceLink="https://www.defined.fi/bsc/0x27d0408a868cf4e89b37d20b5e32888dced95bcb"
      barrelPriceLink="https://www.defined.fi/bsc/0xdb1b7a685e6876d508de3c5160764b56577a83ae"
      bonesPriceLink="https://www.defined.fi/bsc/0x16d1e6fe08e77713989f6a7c1e01db0494caa6d1"
      account={account as string}
      login={(connectorId: ConnectorId) => {
        if (connectorId === 'walletconnect') {
          return activate(walletconnect)
        }

        if (connectorId === 'bsc') {
          return activate(bsc)
        }

        return activate(injected)
      }}
      logout={deactivate}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={selectedLanguage?.code || ''}
      langs={allLanguages}
      setLang={setSelectedLanguage}
      bernPriceUsd={bernPriceUsd}
      barrelPriceUsd={barrelPriceUsd}
      bonesPriceUsd={cakePriceUsd}
      {...props}
    />
  )
}

export default Menu
