import { useMutation } from '@tanstack/react-query';

import { postSimplifiedUrl } from './api.ts';

interface IPostData {
  url: string;
}

interface IError {
  code: string;
  message: string;
  response: {
    data: {
      UrlError: string;
    };
  };
}

export function useCreateSimpleUrl() {
  return useMutation({
    mutationFn: (data: IPostData) => postSimplifiedUrl(data),
    onSuccess: (data) => {
      return data;
    },
    onError: (error: IError) => {
      return error;
    },
  });
}
