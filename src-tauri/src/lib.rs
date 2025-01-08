extern crate libraw_sys;

use libraw_sys::{libraw_init, libraw_recycle};

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![greet, open])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

#[tauri::command]
fn open(uint8Array: Vec<u8>) -> Result<String, String>{
    println!("Received array of length: {}", uint8Array.len());
    let base64_encoded = format!("{:?}", uint8Array);
    Ok(base64_encoded)
}