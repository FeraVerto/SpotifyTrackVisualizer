import { getData } from './shared/api/api';

export const getDataModal = async () => {
  let result = {};

  try {
    const { data } = await getData();
    console.log(data);
    // result.success = data;
  } catch (error: any) {}
};
