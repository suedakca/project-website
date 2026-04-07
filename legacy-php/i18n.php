<?php
session_start();

// Define default language
$default_lang = 'tr';
$allowed_langs = ['tr', 'en'];

// Check if language is changed via GET
if (isset($_GET['lang']) && in_array($_GET['lang'], $allowed_langs)) {
    $_SESSION['lang'] = $_GET['lang'];
    setcookie('lang', $_GET['lang'], time() + (86400 * 30), "/"); // 30 days
}

// Determine language (Session > Cookie > Browser > Default)
if (isset($_SESSION['lang'])) {
    $lang = $_SESSION['lang'];
} elseif (isset($_COOKIE['lang'])) {
    $lang = $_COOKIE['lang'];
} else {
    $browser_lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'] ?? '', 0, 2);
    $lang = in_array($browser_lang, $allowed_langs) ? $browser_lang : $default_lang;
}

// Load language translation array
$lang_file = __DIR__ . "/lang/{$lang}.php";
if (file_exists($lang_file)) {
    $translations = require $lang_file;
} else {
    $translations = require __DIR__ . "/lang/{$default_lang}.php";
}

/**
 * Helper function to translate strings
 * Usage: __('meta_title')
 */
function __($key, $default = '') {
    global $translations;
    return $translations[$key] ?? ($default ?: $key);
}

// Optional: Force reload if changing language to avoid cache issues
if (isset($_GET['lang'])) {
    $clean_url = strtok($_SERVER['REQUEST_URI'], '?');
    header("Location: $clean_url");
    exit;
}
?>
