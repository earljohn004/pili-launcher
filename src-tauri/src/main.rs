// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

pub mod config;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

use actix_web::{ HttpServer, App, Responder, HttpResponse, get };

#[get("/")]
async fn hello() -> impl Responder {
    HttpResponse::Ok().body("Hello world!")
}

fn main() {
    tauri::Builder
        ::default()
        .setup(|_app| {
            tauri::async_runtime::spawn(
                HttpServer::new(|| { App::new().service(hello) })
                    .bind(("127.0.0.1", 8080))?
                    .run()
            );
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
