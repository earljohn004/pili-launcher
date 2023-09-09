import { Box, Typography } from "@mui/material";
import { resolveResource } from "@tauri-apps/api/path";
import { useEffect, useState } from "react";

const GameMenuBar = () => {
  const [sourceDir, setSourceDir] = useState<string>("");

  useEffect(() => {
    const fetchResourcePath = async () => {
      // Resource returns Junction link for windows containing //?/
      // Trim the return to get the correct value
      return (await resolveResource("webui/header/index.html")).substring(4);
    };

    if (import.meta.env.DEV) {
      setSourceDir("src-tauri/webui/header/index.html");
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
      <Box sx={{ height: 150, overflow: "hidden", zIndex: 20 }}>
        <iframe
          scrolling="no"
          height="100%"
          width="100%"
          style={{ borderWidth: 0, borderStyle: "hidden", overflow: "hidden" }}
          src={sourceDir}
        />
      </Box>
    </>
  );
};

export default GameMenuBar;
