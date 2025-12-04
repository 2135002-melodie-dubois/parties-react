import { AppBar, Toolbar, Typography } from '@mui/material';

function BarreHaut() {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography
            variant="button"
            component={'a'}
            href="/liste"
            sx={{ color: 'white' }}
          >
            LISTE DES PARTIES
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
export default BarreHaut;
