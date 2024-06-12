import { Grid, GridItem } from '@chakra-ui/react';

function MyGrid() {
  return (
    <Grid 
      templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }} 
      gap={6}
    >
      <GridItem w='100%' h='10' bg='blue.500' />
      <GridItem w='100%' h='10' bg='blue.500' />
      <GridItem w='100%' h='10' bg='blue.500' />
      <GridItem w='100%' h='10' bg='blue.500' />
      <GridItem w='100%' h='10' bg='blue.500' />
    </Grid>
  );
}

export default MyGrid;
