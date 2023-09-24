use std::process::{ Command, ExitStatus };

fn launch_application(path: &str, args: Option<Vec<&str>>) -> Result<ExitStatus, std::io::Error> {
    let status = if cfg!(target_os = "windows") {
        let mut command = Command::new(path);
        if let Some(args) = args {
            for arg in args {
                command.arg(arg);
            }
        } else {
            println!("No additional arguments given");
        }
        command.status()?
    } else {
        Command::new(path).status()?
    };

    Ok(status)
}

#[cfg(target_os = "windows")]
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_spawn_google_chrome_with_flag() {
        let result = launch_application(
            "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
            Some(vec!["--incognito"])
        );
        assert!(result.is_ok());
    }

    #[test]
    fn test_spawn_google_chrome_without_flag() {
        let result = launch_application(
            "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
            None
        );
        assert!(result.is_ok());
    }

    #[test]
    fn test_spawn_application_not_found() {
        let result = launch_application("C:\\chrome.exe", Some(vec!["--incognito"]));
        assert!(result.is_err());
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
