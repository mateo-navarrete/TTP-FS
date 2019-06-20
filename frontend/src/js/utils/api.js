//jscs:disable requireShorthandArrowFunctions
import axios from 'axios';
import moment from 'moment';

export const deleteData = (url, config, res, next) => {
  return axios.delete(url, config);
};

export const getData = url => {
  return axios.get(url);
};

export const patchData = (url, options = {}) => {
  return axios.patch(url, options);
};

export const postData = (url, options = {}) => {
  return axios.post(url, options);
};

export const formatDate = date => {
  return moment(date)
    .utc()
    .format('MM/DD/YYYY hh:mm:ss A');
};
