import React from 'react';
import { Container, Box, Button, position } from '@chakra-ui/react';
import PrimaryInput from '../../shared/PrimaryInput';
import PrimarySelect from '../../shared/PrimarySelect';
import { useQuery } from '@tanstack/react-query';

export default function Employee({ formik, laptopRef }) {
  const { isLoading: isLoadingTeams, data: teamData } = useQuery(
    ['teams'],
    () =>
      fetch('https://pcfy.redberryinternship.ge/api/teams').then(res =>
        res.json()
      )
  );

  const { isLoading: isLoadingPositions, data: positionsData } = useQuery(
    ['positions'],
    () =>
      fetch('https://pcfy.redberryinternship.ge/api/positions').then(res =>
        res.json()
      )
  );
  if (isLoadingTeams || isLoadingPositions) return 'Loading...';
  return (
    <Container
      maxWidth="65%"
      padding="6em 10em"
      display="flex"
      flexDirection="column"
      gridGap="2.5em"
      backgroundColor="#FFF"
      borderRadius="1em"
    >
      <Box display="grid" gridTemplateColumns="1fr 1fr" gridGap="2.5em">
        <PrimaryInput
          formik={formik}
          id="firstName"
          label="სახელი"
          helperText="მინიმუმ 2 სიმბოლო, ქართული ასოები"
        />
        <PrimaryInput
          formik={formik}
          id="lastName"
          label="გვარი"
          helperText="მინიმუმ 2 სიმბოლო, ქართული ასოები"
        />
      </Box>
      <PrimarySelect
        id="team_id"
        formik={formik}
        name="team"
        options={teamData.data}
        placeholder="თიმი"
      />
      <PrimarySelect
        id="position_id"
        formik={formik}
        name="position"
        options={positionsData.data}
        placeholder="პოზიცია"
      />
      <PrimaryInput
        formik={formik}
        id="email"
        label="მეილი"
        helperText="უნდა მთავრდებოდეს @redberry.ge-ით"
      />
      <PrimaryInput
        formik={formik}
        id="phone"
        label="ტელეფონის ნომერი"
        helperText="უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს"
      />
      <Box display="flex" justifyContent="flex-end">
        <Button
          onClick={() => {
            laptopRef.current.click();
          }}
        >
          შემდეგი
        </Button>
      </Box>
    </Container>
  );
}
