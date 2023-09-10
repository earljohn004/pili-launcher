extern crate toml;
extern crate serde;

use serde::Deserialize;
use std::fs::File;
use std::io::{ Read, Error };

#[derive(Debug, Deserialize, PartialEq)]
pub struct Game {
    title: String,
    icon: String,
    path: String,
    category: String,
    flags: Vec<String>,
}

pub fn read_config_file(filepath: String) -> Result<Vec<Game>, Error> {
    // Open and read the configuration.toml file
    let mut file = File::open(filepath).expect("Unable to open file");
    let mut contents = String::new();
    file.read_to_string(&mut contents).expect("Unable to read file");

    // Parse the TOML content
    let toml_value: toml::Value = toml::from_str(&contents).expect("Unable to parse TOML");

    // Access the [games] section
    let games = toml_value["games"].as_array().expect("[games] section not found");

    // Deserialize the games section into a Vec<Game>
    let games: Vec<Game> = games
        .iter()
        .map(|game|
            toml::de::from_str(&toml::to_string(game).expect("Failed to serialize game entry"))
        )
        .collect::<Result<Vec<Game>, _>>()
        .expect("Failed to deserialize [games] section");

    // Now you have a Vec<Game> with the deserialized data
    for game in &games {
        println!("Title: {}", game.title);
        println!("Path: {}", game.path);
        println!("Flags: {:?}", game.flags);
    }

    // Return the extracted games
    Ok(games)
}

#[cfg(test)]
mod tests {
    use std::io::Write;

    use super::*;

    #[test]
    fn test_deserialize_games() {
        let toml_content =
            r#"
            [games]
            [[games.entry]]
            title = "Game 1"
            path = "path/to/game1"
            category = "cat1"
            icon = "/path/to/icon"
            flags = ["flag1", "flag2"]

            [[games.entry]]
            title = "Game 2"
            path = "path/to/game2"
            category = "cat2"
            icon = "/path/to/icon"
            flags = ["flag3", "flag4"]
        "#;
        let test_filename = "./config.toml";
        let mut file = File::create(std::path::Path::new(test_filename)).expect("Unable to create test file");
        file.write_all(toml_content.as_bytes()).expect("Unable to write to test file");

        let extracted_games = read_config_file(test_filename.to_string());

        let expected_games = vec![
            Game {
                title: "Game 1".to_string(),
                path: "path/to/game1".to_string(),
                flags: vec!["flag1".to_string(), "flag2".to_string()],
                icon: "/path/to/icon".to_string(),
                category: "cat1".to_string(),
            },
            Game {
                title: "Game 2".to_string(),
                path: "path/to/game2".to_string(),
                flags: vec!["flag3".to_string(), "flag4".to_string()],
                icon: "/path/to/icon".to_string(),
                category: "cat2".to_string(),
            }
        ];

        assert_eq!(expected_games, extracted_games.unwrap());
    }
}
