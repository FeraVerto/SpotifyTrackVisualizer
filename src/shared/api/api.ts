import { instance } from './axois';

export const getData = () => {
  return instance.get(`/users/data`);
};
