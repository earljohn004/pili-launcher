import { Box, BoxProps, Button, Grid, Stack } from "@mui/material";
import { MOCK_GAME_DATA } from "../constants/mockData";

function Item(props: BoxProps) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 4,
        m: 2,
        bgcolor: (theme) => (theme.palette.mode === "dark" ? "red" : "black"),
        color: (theme) => (theme.palette.mode === "dark" ? "red" : "red"),
        border: "2px solid",
        borderColor: (theme) =>
          theme.palette.mode === "dark" ? "red" : "black",
        borderRadius: 1,
        fontSize: "0.875rem",
        fontWeight: "700",
        ...sx,
      }}
      {...other}
    />
  );
}

const GameBody = () => (
  <Grid container height={600} maxHeight={500}>
    <Grid xs={2} sx={{ backgroundColor: "orange" }} height="100%">
      <Stack gap={2} width="90%" marginLeft={2} marginTop={5}>
        <Button variant="text" color="inherit">
          Online Games
        </Button>
        <Button variant="contained">LAN Games</Button>
        <Button variant="contained">Game Tools</Button>
        <Button variant="contained">Portable Apps</Button>
      </Stack>
    </Grid>
    <Grid xs={10}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
        height="60vh"
        overflow="scroll"
      >
        {MOCK_GAME_DATA.map((item) => (
          <Item>{item}</Item>
        ))}
      </Box>
    </Grid>
  </Grid>
);

export default GameBody;
