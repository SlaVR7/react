import { act } from 'react-dom/test-utils';
import { fetchDataAndLoadImages } from '../services/fetchDataAndLoadImages';
import { vi } from 'vitest';

test('fetchDataAndLoadImages resolves when targetProductObj is undefined', async () => {
  const setIsLoadingImagesMock = vi.fn();

  await act(async () => {
    await fetchDataAndLoadImages(undefined, setIsLoadingImagesMock);
  });

  expect(setIsLoadingImagesMock).toHaveBeenCalledWith(false);
});
