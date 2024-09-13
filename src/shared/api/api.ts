import { instance } from './axois';

export const getData = () => {
  return instance.get(`/api/data`);
};
