import { FC, useMemo, useId, useCallback } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { Box, TextField, StandardTextFieldProps } from '@mui/material';

interface IFormInputText extends Omit<StandardTextFieldProps, 'onBlur'> {
  rules?: any;
  name: string;
  defaultValue?: string;
  iconEnd?: JSX.Element;
  iconStart?: JSX.Element;
  isLoading?: boolean | null;
  toolTipMessage?: string | null;
  onBlur?: (value: string, name: any) => void;
}

export const FormInputText: FC<IFormInputText> = (props): JSX.Element => {
  const {
    name,
    rules,
    disabled,
    helperText,
    required = false,
    defaultValue = '',
    onBlur: onBlurEx,
    ...other
  } = props;

  const inputId = useId();
  const { trigger } = useFormContext();

  const {
    field: { onChange, onBlur, value, name: inputName, ref },
    fieldState,
  } = useController({
    name,
    rules,
    defaultValue,
  });

  const currentHelperText = useMemo(() => {
    const isText = fieldState.error?.message || helperText;
    if (!isText) return null;
    return (
      <Box
        component="span"
        sx={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <span>{fieldState.error?.message || helperText}</span>
      </Box>
    );
  }, [fieldState, helperText]);

  const onFieldBlur = useCallback(
    (e) => {
      if (!e.target.value) trigger(name);

      onBlur();
      onBlurEx?.(e.target.value, name);
    },
    [onBlur, onBlurEx, trigger, name]
  );

  return (
    <TextField
      ref={ref}
      fullWidth
      id={inputId}
      value={value}
      name={inputName}
      disabled={disabled}
      onChange={onChange}
      onBlur={onFieldBlur}
      error={!!fieldState.error}
      helperText={currentHelperText}
      required={!!rules?.required || required}
      {...other}
    />
  );
};
