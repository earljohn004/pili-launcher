import { Box } from "@mui/material";

const GameFooter = () => {
  return (
    <>
      <Box sx={{ height: 120, zIndex: 20 }}>
        <iframe
          height="100%"
          width="100%"
          style={{ borderWidth: 0, borderStyle: "hidden", overflow: "hidden" }}
          src="src-tauri/webui/footer/index.html"
          scrolling="no"
        />
      </Box>
    </>
  );
};

export default GameFooter;
