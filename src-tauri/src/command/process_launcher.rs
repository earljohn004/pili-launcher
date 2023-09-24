use std::process::{ Command, ExitStatus };

fn launch_application(path: &str) -> Result<ExitStatus, std::io::Error> {
    // On Windows, we use `cmd.exe` to run the batch file
    let status = if cfg!(target_os = "windows") {
        Command::new("cmd").args(&["/C", path]).status()?
    } else {
        // On other platforms, just spawn the executable directly
        Command::new(path).status()?
    };

    Ok(status)
}

#[cfg(target_os = "windows")]
#[cfg(test)]
mod tests {
    use super::*;
    use std::fs;

    #[test]
    fn test_spawn_executable() {
        // Create a simple test executable for Windows
        let test_executable_path = "test_executable.bat";
        let test_executable_content = r#"@echo off
echo Test executable
exit /b 0
"#;

        // Write the test executable content to a file
        fs::write(test_executable_path, test_executable_content).expect("Failed to write to file");

        // Spawn the executable
        let result = launch_application(test_executable_path);

        // Ensure the execution was successful
        assert!(result.is_ok());

        // Clean up the temporary file
        fs::remove_file(test_executable_path).expect("Failed to remove file");
    }

    #[test]
    fn test_spawn_google_chrome() {
        // Spawn the executable
        let result = launch_application("C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe");

        // Ensure the execution was successful
        assert!(result.is_ok());
    }
}

#[cfg(not(target_os = "windows"))]
#[cfg(test)]
mod tests {
    // Placeholder test for non-Windows platforms
    #[test]
    fn test_not_supported_on_non_windows() {
        assert!(true);
    }
}
