import { createUseStyles } from 'react-jss'

const useTxOverviewStyles = createUseStyles((theme) => ({
  txOverview: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  checkIcon: {
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(3)
  },
  title: {
    fontSize: theme.spacing(3),
    fontWeight: theme.fontWeights.bold,
    marginTop: theme.spacing(8)
  },
  buttonGroup: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  button: {
    fontSize: theme.spacing(2.5),
    color: theme.palette.grey.dark,
    appearance: 'none',
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1),
    '&:not(:first-child)': {
      marginTop: theme.spacing(2)
    }
  },
  buttonIcon: {
    marginLeft: theme.spacing(1)
  },
  howToUseLink: {
    color: '#000',
    fontSize: theme.spacing(2.5),
    textDecoration: 'underline',
    padding: theme.spacing(1)
  },
  spinnerWrapper: {
    marginTop: theme.spacing(14.5)
  },
}))

export default useTxOverviewStyles
