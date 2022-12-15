import { useEffect } from 'react'

import useLoginStyles from './login.styles'

function Login ({ wallet, onLoadWallet, onGoToNextStep }) {
  const classes = useLoginStyles()

  useEffect(() => {
    if (wallet) {
      onGoToNextStep()
    }
  }, [wallet, onGoToNextStep])

  return (
    <div className={classes.login}>
      <h1 className={classes.title}>GNO to mGNO Converter</h1>
      <div className={classes.column}>
        <button
          className={classes.metaMaskButton}
          onClick={onLoadWallet}
        >
          Connect wallet
        </button>
        <span className={classes.connectText}>Connect your wallet to get started</span>
      </div>
      <div></div>
    </div>
  )
}

export default Login
