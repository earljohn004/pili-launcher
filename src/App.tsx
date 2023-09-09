import { Box, Container } from "@mui/material";
import GameMenuBar from "./components/GameMenuBar";
import GameBody from "./components/GameBody";
import GameFooter from "./components/GameFooter";

function App() {
  return (
    <>
      <Container disableGutters maxWidth={false}>
        <Box
          sx={{
            height: "95vh",
            width: "99vw",
            overflow: "hidden",
            zIndex: -1,
            position: "absolute"
          }}
        >
          <iframe
            scrolling="no"
            height="100%"
            width="100%"
            style={{
              borderWidth: 0,
              borderStyle: "hidden",
              overflow: "hidden",
            }}
            src="src-tauri/webui/page/index.html"
          />
        </Box>
        <div style={{zIndex: 100}}>
        <GameMenuBar />
        <GameBody />
        <GameFooter />
        </div>
     </Container>
    </>
  );
}

export default App;
