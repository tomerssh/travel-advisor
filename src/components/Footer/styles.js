import { alpha, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: {
    display: 'flex', justifyContent: 'center', position: 'relative', bottom: '15px'
  },
  appbar: {
    position: 'fixed', bottom: '-25px',
  }
}));

