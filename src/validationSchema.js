import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches('^[ა-ჰ]+$', 'მხოლოდ ქართული ასოები')
    .min(2, 'Too Short!')
    .required('Required'),
  lastName: Yup.string()
    .matches('^[ა-ჰ]+$', 'მხოლოდ ქართული ასოები')
    .min(2, 'Too Short!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .matches('@redberry.ge$', 'ელ ფოსტა უნდა მთავრდებოდეს @redberry.ge-ით')
    .required('Required'),
  phone: Yup.string()
    .matches('^995', 'მხოლოდ ქართული ნომერი')
    .min(2, 'Too Short!')
    .required('Required'),
});
