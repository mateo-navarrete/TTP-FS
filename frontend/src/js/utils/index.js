import CssBaseline from '@material-ui/core/CssBaseline';
import { deleteData, getData, patchData, postData, formatDate } from './api';

export { CssBaseline, deleteData, getData, patchData, postData, formatDate };

export const getSymbolStr = arr => {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    let end = i === arr.length - 1 ? '' : ',';
    str += arr[i].symbol + end;
  }

  return str;
};
