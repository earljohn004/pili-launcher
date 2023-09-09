import { Box, BoxProps, Button, Grid, Stack } from "@mui/material";
import { MOCK_GAME_CATEGORIES, MOCK_GAME_DATA } from "../constants/mockData";
import zIndex from "@mui/material/styles/zIndex";
import GameCardIcon from "./GameCardIcon";

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
  <>
    <Box
      sx={{
        height: "62vh",
        width: "99vw",
        overflowX: "hidden",
        overflowY: "hidden",
        zIndex: 1,
        position: "absolute",
        margin: 0,
      }}
    >
      <iframe
        height="100%"
        width="100%"
        style={{
          borderWidth: 0,
          borderStyle: "hidden",
          overflowY: "hidden",
          overflowX: "hidden",
        }}
        scrolling="no"
        src="src-tauri/webui/body/index.html"
      />
    </Box>
    <Grid container maxHeight={500} sx={{ zIndex: 999, overflow: "hidden" }}>
      <Grid xs={2} sx={{ zIndex: 999 }} height="100%">
        <Stack gap={2} width="90%" marginLeft={2} marginTop={5}>
          {MOCK_GAME_CATEGORIES.map((item)=>(
            <Button variant="contained">{item}</Button>
          ))}
        </Stack>
      </Grid>
      <Grid xs={10} sx={{ zIndex: 999 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            scrollbarWidth: 10,
            gap: 3,
            overflowY: "auto",
            overFlowY: "hidden",
          }}
          height="60vh"
          width="100%"
        >
          {MOCK_GAME_DATA.map((item) => (
            // <Item>{item}</Item>
            <GameCardIcon title={item}/>
          ))}
        </Box>
      </Grid>
    </Grid>
  </>
);

export default GameBody;
