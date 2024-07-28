import { Box } from '@mui/material';

import { Footer, Header } from './common/components';
import { HomePage } from './pages/Home';

export const App = () => {
  return (
    <Box display="grid" gridTemplateRows="auto 1fr auto" height="100vh">
      <Header />
      <HomePage />
      <Footer />
    </Box>
  );
};
