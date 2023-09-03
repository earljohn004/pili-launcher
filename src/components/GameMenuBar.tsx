import { Box, Typography } from "@mui/material";
import { resolveResource } from "@tauri-apps/api/path";
import { useEffect, useState } from "react";

const GameMenuBar = () => {
  const [sourceDir, setSourceDir] = useState<string>("");

  useEffect(() => {
    const fetchResourcePath = async () => {
      return await resolveResource("webui/menu/index.html");
    };

    if (import.meta.env.DEV) {
      setSourceDir("src-tauri/webui/menu/index.html");
    } else {
      console.log("PROD Mode");
      fetchResourcePath()
        .then((result) => {
          console.log(result);
          setSourceDir(result);
        })
        .catch(console.error);
    }
  }, []);

  return (
    <>
      <Box sx={{ backgroundColor: "red", height: 150 }}>
        <Typography variant="h1">{sourceDir}</Typography>
        <iframe height="100%" width="100%" src={sourceDir} />
      </Box>
    </>
  );
};

export default GameMenuBar;
