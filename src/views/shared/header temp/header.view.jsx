import { formatUnits } from 'ethers/lib/utils'

import useHeaderStyles from './header.styles'
import { ReactComponent as ArrowLeft } from '../../../images/arrow-left.svg'
import { ReactComponent as CrossIcon } from '../../../images/cross-icon.svg'

function Header ({
  address, title, isGoBackButtonDisabled,
  onGoBack, onDisconnectWallet, onClose,
  tokenInfo, balance
}) {
  const classes = useHeaderStyles()

  function getPartiallyHiddenEthereumAddress (ethereumAddress) {
    const firstAddressSlice = ethereumAddress.slice(0, 6)
    const secondAddressSlice = ethereumAddress.slice(
      ethereumAddress.length - 4,
      ethereumAddress.length
    )

    return `${firstAddressSlice} *** ${secondAddressSlice}`
  }

  return (
    <div className={classes.header}>
      {onGoBack && (
        <button
          disabled={isGoBackButtonDisabled}
          className={classes.goBackButton}
          onClick={onGoBack}
        >
          <ArrowLeft />
        </button>
      )}
      {onClose && (
        <button
          className={classes.closeButton}
          onClick={onClose}
        >
          <CrossIcon className={classes.closeIcon} />
        </button>
      )}
      <p className={classes.title}>{title}</p>
      {address && (
        <p className={classes.address}>{getPartiallyHiddenEthereumAddress(address)}</p>
      )}
      {balance && (
        <p className={classes.balance}>Balance: {Number(formatUnits(balance, tokenInfo.decimals))} {tokenInfo.symbol}</p>
      )}
      {onDisconnectWallet && (
        <button className={classes.disconnectButton} onClick={onDisconnectWallet}>Disconnect</button>
      )}
    </div>
  )
}

export default Header
