import { createUseStyles } from 'react-jss'

const useHeaderStyles = createUseStyles((theme) => ({
  header: {
    width: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(-1)
  },
  title: {
    fontSize: theme.spacing(5),
    fontWeight: theme.fontWeights.bold,
    padding:10
  },
  svg:{
    maxWidth: 70,
    maxHeight: 70,
    padding:0
    }
}))

export default useHeaderStyles
