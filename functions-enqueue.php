<?php

// variable for cache reset after css updates
$filetime_version = filemtime(get_stylesheet_directory().'/css/style.min.css');
// main styles css file
wp_enqueue_style( 'custom-styles', get_template_directory_uri().'/css/style.min.css', '', $filetime_version);