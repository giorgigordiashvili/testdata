import React from 'react';
import { FormControl, Select } from '@chakra-ui/react';

export default function PrimarySelect({
  name,
  placeholder,
  options,
  variant = 'filled',
  formik,
  id,
}) {
  console.log(options);
  return (
    <FormControl>
      <Select
        id={id}
        variant={variant}
        placeholder={placeholder}
        onChange={formik.handleChange}
      >
        {options.map((item, index) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </Select>
    </FormControl>
  );
}
