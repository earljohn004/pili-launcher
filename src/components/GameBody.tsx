import { Button, Grid, Stack } from "@mui/material";

const GameBody = () => {
  return (
    <Grid container height={500}>
      <Grid xs={2} sx={{ backgroundColor: "orange" }}>
        <Stack>
          <Button variant="contained">Online Games</Button>
          <Button variant="contained">LAN Games</Button>
          <Button variant="contained">Game Tools</Button>
          <Button variant="contained">Portable Apps</Button>
        </Stack>
      </Grid>
      <Grid xs={10} sx={{ backgroundColor: "yellow" }}></Grid>
    </Grid>
  );
};

export default GameBody;
