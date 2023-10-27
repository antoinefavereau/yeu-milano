<?php

function my_theme_styles()
{
    wp_enqueue_style('swiper-css', get_template_directory_uri() . '/assets/css/swiper-bundle.min.css');
    wp_enqueue_style('theme-css', get_template_directory_uri() . '/assets/css/theme.css');
}
add_action('wp_enqueue_scripts', 'my_theme_styles');

function my_theme_scripts()
{
    wp_enqueue_script('gsap-js', get_template_directory_uri() . '/assets/js/gsap.min.js');
    wp_enqueue_script('gsap-scroll-trigger-js', get_template_directory_uri() . '/assets/js/ScrollTrigger.min.js');
    wp_enqueue_script('swiper-js', get_template_directory_uri() . '/assets/js/swiper-bundle.min.js');
    wp_enqueue_script('script-js', get_template_directory_uri() . '/assets/js/script.js');
    wp_enqueue_script('animations-js', get_template_directory_uri() . '/assets/js/animations.js');
}
add_action('wp_enqueue_scripts', 'my_theme_scripts');

function add_defer_attribute($tag, $handle)
{
    if ($handle !== 'script-js' && $handle !== 'animations-js')
        return $tag;
    return str_replace(' src', ' defer="defer" src', $tag);
}

add_filter('script_loader_tag', 'add_defer_attribute', 10, 2);
