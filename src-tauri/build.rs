fn main() {
    #[cfg(target_os = "windows")]
    println!("cargo::rustc-link-lib=dylib=libraw");

    #[cfg(target_os = "linux")]
    println!("cargo::rustc-link-lib=raw");

    tauri_build::build()
}
