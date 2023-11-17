import { NavigateFunction } from 'react-router-dom';

export const closeDetails = (
  page: string,
  limit: string,
  navigate: NavigateFunction
) => {
  navigate(`/?page=${page}&limit=${limit}`);
};
