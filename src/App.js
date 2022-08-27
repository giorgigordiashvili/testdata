import React, { useRef, useState } from 'react';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Button,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import Employee from './components/Employee';
import { initialValues } from './initialValues';
import { validationSchema } from './validationSchema';
import { useQuery } from '@tanstack/react-query';

function App() {
  const laptopRef = useRef();

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,

    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <Box backgroundColor="#F6F6F6" height="100vh">
      <Tabs align="center">
        <TabList border="none">
          <Tab>თანამშრომლის ინფო</Tab>
          <Tab ref={laptopRef}>ლეპტოპის მახასიათებლები</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Employee formik={formik} laptopRef={laptopRef} />
            <Button onClick={formik.handleSubmit}>Submit</Button>
          </TabPanel>
          <TabPanel></TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default App;
