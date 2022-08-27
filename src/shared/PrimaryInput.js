import React from 'react';
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
} from '@chakra-ui/react';

export default function PrimaryInput({
  label,
  id,
  type = 'text',
  helperText,
  formik,
}) {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input
        id={id}
        name={id}
        type={type}
        onChange={formik.handleChange}
        value={formik.values[id]}
      />
      <FormHelperText textAlign="left">{helperText}</FormHelperText>
    </FormControl>
  );
}
