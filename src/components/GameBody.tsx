import { Box, Button, Grid, Stack } from "@mui/material";
import GameCardIcon from "./GameCardIcon";
import { PropsGameBody } from "../../types/GameInterface";

const GameBody = (props: PropsGameBody) => (
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
          {props.gameCategories?.map((item) => (
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
          {props.gameData?.map((item) => (
            <GameCardIcon title={item} />
          ))}
        </Box>
      </Grid>
    </Grid>
  </>
);

export default GameBody;
