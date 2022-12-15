import useHeaderStyles from './header.styles'
import { ReactComponent as Logo } from '../../images/logo.svg'

function Header () {
  const classes = useHeaderStyles()

  return (
    <div className={classes.header}>
                <div>
                    <div>
                        <div className={classes.title}>
                        <Logo className={classes.svg}></Logo> GNO to mGNO Converter
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default Header
