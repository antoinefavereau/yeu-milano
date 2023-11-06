<?php
get_header();
?>

<header id="header">
    <a href="" class="logo">
        <img src="<?= get_template_directory_uri() ?>/assets/images/logo band 3.png" alt="logo">
    </a>
</header>

<section id="topSection">
    <video class="backgroundVideo" src="<?= get_template_directory_uri() ?>/assets/videos/hd0992.mov" autoplay loop muted></video>
    <img class="name" src="<?= get_template_directory_uri() ?>/assets/images/name1.png" alt="name">
    <img class="logo left" src="<?= get_template_directory_uri() ?>/assets/images/logo 2.png" alt="">
    <img class="logo right" src="<?= get_template_directory_uri() ?>/assets/images/logo band 5.png" alt="">
    <p>
        Oluptatiur? Obistotatis aut lab illandu ntotatatem
        ressunt iuntia voluptam fugitinusae. Nam eumquamust ma dolorrovid et quam unt, tem. Rae
        pratet quid quiam aut hilitatem conet explictam
        endenis volentur? Qui int.
    </p>
    <button class="arrowDown" title="down">
        <svg width="70" height="70" stroke-width=".8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9l6 6 6-6" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </button>
</section>

<section id="afficheSection">
    <img class="backgroundImage" src="<?= get_template_directory_uri() ?>/assets/images/background/name.png" alt="">
    <div class="imageDiv">
        <?php
        $affiches = new WP_Query(array(
            'post_type' => "affiche"
        ));
        $count = 0;
        if ($affiches->have_posts()) : while ($affiches->have_posts()) : $affiches->the_post();
                $count++; ?>
                <img class="item modalImage" data-id="<?= $count ?>" src="<?= esc_url(get_field('image')['sizes']['large']) ?>" alt="<?= the_title() ?>">
        <?php endwhile;
        endif;
        ?>
    </div>
    <div class="descriptionDiv">
        <?php
        $affiches = new WP_Query(array(
            'post_type' => "affiche"
        ));
        $count = 0;
        if ($affiches->have_posts()) : while ($affiches->have_posts()) : $affiches->the_post();
                $count++;
                $subImages = get_field('images'); ?>
                <div class="item" data-id="<?= $count ?>">
                    <h2><?= the_title() ?></h2>
                    <img class="mainImage modalImage" data-id="<?= $count ?>" src="<?= esc_url(get_field('image')['sizes']['large']) ?>" alt="<?= the_title() ?>">
                    <p><?= the_field("description") ?></p>
                    <?php if ($subImages['image_1']) : ?>
                        <div class="secondaryImages">
                            <img class="modalImage" src="<?= esc_url($subImages['image_1']['sizes']['thumbnail']) ?>" data-image="<?= esc_url($subImages['image_1']['sizes']['large']) ?>" alt="<?= $subImages['image_1']['title'] ?>">
                            <?php if ($subImages['image_2']) : ?>
                                <img class="modalImage" src="<?= esc_url($subImages['image_2']['sizes']['thumbnail']) ?>" data-image="<?= esc_url($subImages['image_2']['sizes']['large']) ?>" alt="<?= $subImages['image_2']['title'] ?>">
                            <?php endif; ?>
                            <?php if ($subImages['image_3']) : ?>
                                <img class="modalImage" src="<?= esc_url($subImages['image_3']['sizes']['thumbnail']) ?>" data-image="<?= esc_url($subImages['image_3']['sizes']['large']) ?>" alt="<?= $subImages['image_3']['title'] ?>">
                            <?php endif; ?>
                        </div>
                    <?php endif; ?>
                </div>
        <?php endwhile;
        endif;
        ?>
    </div>
    <div class="listDiv">
        <div class="swiper afficheCarousel">
            <div class="swiper-wrapper">
                <?php
                $affiches = new WP_Query(array(
                    'post_type' => "affiche"
                ));
                $count = 0;
                if ($affiches->have_posts()) : while ($affiches->have_posts()) : $affiches->the_post();
                        $count++; ?>
                        <div class="swiper-slide" data-id="<?= $count ?>">
                            <img src="<?= esc_url(get_field('image')['sizes']['medium']) ?>" alt="<?= the_title() ?>">
                        </div>
                <?php endwhile;
                endif;
                ?>
            </div>

            <div class="afficheCarousel-button afficheCarousel-button-prev">
                <svg width="40px" height="40px" stroke-width="1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentcolor">
                    <path d="M6 15l6-6 6 6" stroke="currentcolor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </div>
            <div class="afficheCarousel-button afficheCarousel-button-next">
                <svg width="40px" height="40px" stroke-width="1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentcolor">
                    <path d="M6 9l6 6 6-6" stroke="currentcolor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </div>
        </div>
    </div>
</section>

<section id="logos">
    <ul>
        <?php
        $logos = new WP_Query(array(
            'post_type' => "logo"
        ));
        if ($logos->have_posts()) : while ($logos->have_posts()) : $logos->the_post(); ?>
                <li>
                    <img class="modalImage noLazyLoad" src="<?= esc_url(get_field('image')['sizes']['thumbnail']) ?>" data-image="<?= esc_url(get_field('image')['sizes']['large']) ?>" alt="<?= the_title() ?>">
                </li>
        <?php endwhile;
        endif; ?>
    </ul>
</section>

<section id="book">
    <img class="backgroundImage" src="<?= get_template_directory_uri() ?>/assets/images/background/élément 1.png" alt="">
    <svg class="arc" width="2000" height="1932" viewBox="0 0 2000 1932" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 1553.45C0 1353.51 42.3942 1155.83 124.386 973.465V973.465C288.133 609.263 551.34 298.668 883.744 77.3903L1000 0L1116.26 77.3902C1448.66 298.667 1711.87 609.263 1875.61 973.465V973.465C1957.61 1155.83 2000 1353.51 2000 1553.46V1931.47H0V1553.45Z" fill="white" />
    </svg>

    <div class="content">
        <img class="logo" src="<?= get_template_directory_uri() ?>/assets/images/logo.png" alt="">
        <img src="<?= get_template_directory_uri() ?>/assets/images/background/fenetre.png" alt="" class="window">
        <div class="book">
            <div class="paper last">
                <figure class="back"></figure>
                <figure class="front"></figure>
            </div>
            <div class="paper">
                <figure class="back">
                    <img src="<?= get_template_directory_uri() ?>/assets/images/book/page8.jpg" alt="">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-in see modalImage" title="voir" data-image="<?= get_template_directory_uri() ?>/assets/images/book/page8.jpg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentcolor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                        <path d="M7 10l6 0" />
                        <path d="M10 7l0 6" />
                        <path d="M21 21l-6 -6" />
                    </svg>
                </figure>
                <figure class="front">
                    <img src="<?= get_template_directory_uri() ?>/assets/images/book/page7.jpg" alt="">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-in see modalImage" title="voir" data-image="<?= get_template_directory_uri() ?>/assets/images/book/page7.jpg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentcolor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                        <path d="M7 10l6 0" />
                        <path d="M10 7l0 6" />
                        <path d="M21 21l-6 -6" />
                    </svg>
                </figure>
            </div>
            <div class="paper">
                <figure class="back">
                    <img src="<?= get_template_directory_uri() ?>/assets/images/book/page6.jpg" alt="">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-in see modalImage" title="voir" data-image="<?= get_template_directory_uri() ?>/assets/images/book/page6.jpg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentcolor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                        <path d="M7 10l6 0" />
                        <path d="M10 7l0 6" />
                        <path d="M21 21l-6 -6" />
                    </svg>
                </figure>
                <figure class="front">
                    <img src="<?= get_template_directory_uri() ?>/assets/images/book/page5.jpg" alt="">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-in see modalImage" title="voir" data-image="<?= get_template_directory_uri() ?>/assets/images/book/page5.jpg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentcolor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                        <path d="M7 10l6 0" />
                        <path d="M10 7l0 6" />
                        <path d="M21 21l-6 -6" />
                    </svg>
                </figure>
            </div>
            <div class="paper">
                <figure class="back">
                    <img src="<?= get_template_directory_uri() ?>/assets/images/book/page4.jpg" alt="">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-in see modalImage" title="voir" data-image="<?= get_template_directory_uri() ?>/assets/images/book/page4.jpg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentcolor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                        <path d="M7 10l6 0" />
                        <path d="M10 7l0 6" />
                        <path d="M21 21l-6 -6" />
                    </svg>
                </figure>
                <figure class="front">
                    <img src="<?= get_template_directory_uri() ?>/assets/images/book/page3.jpg" alt="">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-in see modalImage" title="voir" data-image="<?= get_template_directory_uri() ?>/assets/images/book/page3.jpg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentcolor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                        <path d="M7 10l6 0" />
                        <path d="M10 7l0 6" />
                        <path d="M21 21l-6 -6" />
                    </svg>
                </figure>
            </div>
            <div class="paper first">
                <figure class="back">
                    <img src="<?= get_template_directory_uri() ?>/assets/images/book/page2.jpg" alt="">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-in see modalImage" title="voir" data-image="<?= get_template_directory_uri() ?>/assets/images/book/page2.jpg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentcolor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                        <path d="M7 10l6 0" />
                        <path d="M10 7l0 6" />
                        <path d="M21 21l-6 -6" />
                    </svg>
                </figure>
                <figure class="front">
                    <img src="<?= get_template_directory_uri() ?>/assets/images/book/page1.jpg" alt="">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-in see modalImage" title="voir" data-image="<?= get_template_directory_uri() ?>/assets/images/book/page1.jpg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentcolor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                        <path d="M7 10l6 0" />
                        <path d="M10 7l0 6" />
                        <path d="M21 21l-6 -6" />
                    </svg>
                </figure>
            </div>
            <div class="side"></div>
            <div class="bottom"></div>
        </div>
        <a class="pdfDownload" href="/fiche_personnage_1.pdf" target="_blank">
            <span>Voir le pdf</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-type-pdf" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentcolor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                <path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" />
                <path d="M5 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6" />
                <path d="M17 18h2" />
                <path d="M20 15h-3v6" />
                <path d="M11 15v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1z" />
            </svg>
        </a>
    </div>
</section>

<section id="underText">
    <img class="underText" src="<?= get_template_directory_uri() ?>/assets/images/sous texte.png" alt="">
    <img id="undertextBackgroundImage1" src="<?= get_template_directory_uri() ?>/assets/images/background/étoile.png" alt="">
    <img id="undertextBackgroundImage2" src="<?= get_template_directory_uri() ?>/assets/images/background/étoile droite.png" alt="">
</section>

<footer id="footer">
    <img class="backgroundImage" src="<?= get_template_directory_uri() ?>/assets/images/background/élément 3.png" alt="">
    <div class="name">
        <img src="<?= get_template_directory_uri() ?>/assets/images/name2.png" alt="name">
    </div>
    <div class="content">
        <div class="contacts">
            <?php
            $liens = new WP_Query(array(
                'post_type' => "reseau-social"
            ));
            if ($liens->have_posts()) : while ($liens->have_posts()) : $liens->the_post(); ?>
                    <a class="item" href="<?= esc_url(get_field('lien')) ?>" target="_blank">
                        <img src="<?= esc_url(get_field('logo')['sizes']['thumbnail']) ?>" alt="<?= the_title() ?>">
                        <span class="underline"><?= the_title() ?></span>
                    </a>
            <?php endwhile;
            endif; ?>
        </div>
        <div class="citations">
            <div class="citation">
                <h3 class="title">émotions</h3>
                <p>"L'émotion nous égare c'est son principal mérite."</p>
                <p>Oscar Wilde</p>
            </div>
            <div class="citation">
                <h3 class="title">extase</h3>
                <p>C'est incontrôlable, compliqué de savoir qui tu es réellement, ce n'est plus très important</p>
            </div>
        </div>
    </div>
    <div class="underFooter">
        <p>© 2023 DESIGN BY DYEUH-UUJU, CODED BY <a class="underline" href="https://antoinefavereau.fr" target="_blank">ANTOINE FAVEREAU</a></p>
        <div class="links">
            <?php
            $menu_items = wp_get_nav_menu_items('Footer');
            foreach ($menu_items as $key => $menu_item) : ?>
                <a class="underline" href="<?= $menu_item->url ?>" target="_blank"><?= $menu_item->title ?></a>
            <?php endforeach; ?>
        </div>
        <button class="arrowUp">
            <span>Retour en haut</span>
            <svg width="24px" height="24px" viewBox="0 0 24 24" stroke-width="1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21V3m0 0l8.5 8.5M12 3l-8.5 8.5" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        </button>
    </div>
</footer>

<div id="imageModal">
    <div class="background"></div>
    <img src="" alt="">
    <button class="close">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentcolor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </svg>
    </button>
</div>

<?php
get_footer();
