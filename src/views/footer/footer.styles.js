import { createUseStyles } from 'react-jss'

const useFooterStyles = createUseStyles((theme) => ({
  footer: {
    width: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(4),
    padding: '100 100 100'
  }
}))

export default useFooterStyles
