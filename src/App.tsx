import { Container } from "@mui/material";
import GameMenuBar from "./components/GameMenuBar";
import GameBody from "./components/GameBody";
import GameFooter from "./components/GameFooter";

function App() {
  return (
    <>
      <Container disableGutters maxWidth={false}>
        <GameMenuBar/>
        <GameBody/>
        <GameFooter/>
      </Container>
    </>
  );
}

export default App;
