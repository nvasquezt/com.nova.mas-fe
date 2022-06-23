import { makeStyles } from '@material-ui/core';
import assetBkground from '../../assets/assetBkground.jpg'

const useStyles = makeStyles((theme) =>({
    root: {
      backgroundImage: `url(${assetBkground})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      marginTop: '0',
      right: '0'
    },
    login: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1rem',
      height: '100vh',  
      paddingTop: theme.spacing(20),
      width: '35vw',
      padding: '1rem',
      position: 'absolute',
      right: 0,
      [theme.breakpoints.down(640 + theme.spacing(2) + 2)]: {
        marginTop: 0,
        width: '100%',
        height: '100%',
        opacity: '0.9'
      }
    },
    button: {
        marginTop: theme.spacing(5)
    }
  }))

 export default useStyles;