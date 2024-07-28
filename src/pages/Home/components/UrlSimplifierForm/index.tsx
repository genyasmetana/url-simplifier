import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';
import { Box, Button } from '@mui/material';
import { useEffect, useMemo } from 'react';

import { ViewLink } from '../ViewLink';
import { FormInputText } from '../../../../common/components';
import { useCreateSimpleUrl } from '../../../../services/mutations.ts';

interface IFormValue {
  url: string;
}

export const UrlSimplifierForm = () => {
  const { mutate, data, isSuccess, isError, error } = useCreateSimpleUrl();

  const methods = useForm<IFormValue>({
    defaultValues: {
      url: '',
    },
  });

  const { handleSubmit, setError } = methods;

  const validationRules = useMemo(
    () => ({
      url: {
        required: 'Required',
      },
    }),
    [setError]
  );

  const handleCreateSimpleUrl: SubmitHandler<IFormValue> = (data) => {
    mutate(data);
  };

  useEffect(() => {
    if (isError) {
      const message = error?.response?.data?.UrlError;
      setError('url', { message });
    }
  }, [isError]);

  return (
    <Box
      flexDirection="column"
      alignItems="center"
      maxWidth="600px"
      width="100%"
      margin="250px auto"
    >
      <Box
        display="flex"
        flexDirection="row"
        width="100%"
        gap={2}
        alignItems="flex-start"
      >
        <FormProvider {...methods}>
          <FormInputText rules={validationRules.url} label="Url" name="url" />
        </FormProvider>

        <Button
          variant="outlined"
          size="large"
          onClick={handleSubmit(handleCreateSimpleUrl)}
        >
          Submit
        </Button>
      </Box>
      {isSuccess && <ViewLink shortUrl={data?.data?.short_url} />}
    </Box>
  );
};
