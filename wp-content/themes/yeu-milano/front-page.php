<?php
get_header();
?>

<header id="header">
    <a href="" class="logo">
        <img src="<?= get_template_directory_uri() ?>/assets\images\logo band 3.png" alt="logo">
    </a>
    <button class="burger" title="menu">
        <div class="burgerLine"></div>
        <div class="burgerLine"></div>
        <div class="burgerLine"></div>
    </button>
</header>

<section id="topSection">
    <video class="backgroundVideo" src="<?= get_template_directory_uri() ?>/assets/videos/hd0992.mov" autoplay loop muted></video>
    <img class="name" src="<?= get_template_directory_uri() ?>/assets\images\name1.png" alt="name">
    <img class="logo left" src="<?= get_template_directory_uri() ?>/assets\images\logo 2.png" alt="">
    <img class="logo right" src="<?= get_template_directory_uri() ?>/assets\images\logo band 5.png" alt="">
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
    <img class="backgroundImage" src="<?= get_template_directory_uri() ?>/assets\images\background\name.png" alt="">
    <div class="imageDiv">
        <?php
        $affiches = new WP_Query(array(
            'post_type' => "affiche"
        ));
        $count = 0;
        if ($affiches->have_posts()) : while ($affiches->have_posts()) : $affiches->the_post();
                $count++; ?>
                <img class="item" data-id="<?= $count ?>" src="<?= esc_url(get_field('image')['sizes']['large']) ?>" alt="<?= the_title() ?>">
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
                    <p><?= the_field("description") ?></p>
                    <?php if ($subImages['image_1']) : ?>
                        <div class="secondaryImages">
                            <img src="<?= esc_url($subImages['image_1']['sizes']['thumbnail']) ?>" alt="<?= $subImages['image_1']['title'] ?>">
                            <?php if ($subImages['image_2']) : ?>
                                <img src="<?= esc_url($subImages['image_2']['sizes']['thumbnail']) ?>" alt="<?= $subImages['image_2']['title'] ?>">
                            <?php endif; ?>
                            <?php if ($subImages['image_3']) : ?>
                                <img src="<?= esc_url($subImages['image_3']['sizes']['thumbnail']) ?>" alt="<?= $subImages['image_3']['title'] ?>">
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
                    <img src="<?= esc_url(get_field('image')['sizes']['thumbnail']) ?>" alt="<?= the_title() ?>">
                </li>
        <?php endwhile;
        endif; ?>
    </ul>
</section>

<section id="book">
    <img class="backgroundImage" src="<?= get_template_directory_uri() ?>/assets\images\background\élément 1.png" alt="">
    <img class="arc" src="<?= get_template_directory_uri() ?>/assets\images\background\volet.png" alt="">
    <div class="content">
        <img class="logo" src="<?= get_template_directory_uri() ?>/assets\images\logo.png" alt="">
        <img src="<?= get_template_directory_uri() ?>/assets\images\background\fenetre.png" alt="" class="window">
        <div class="book">
            <div class="paper">
                <figure class="back"></figure>
                <figure class="front"></figure>
            </div>
            <div class="paper">
                <figure class="back"><img src="<?= get_template_directory_uri() ?>/assets/images/book/page8.jpg" alt=""></figure>
                <figure class="front"><img src="<?= get_template_directory_uri() ?>/assets/images/book/page7.jpg" alt=""></figure>
            </div>
            <div class="paper">
                <figure class="back"><img src="<?= get_template_directory_uri() ?>/assets/images/book/page6.jpg" alt=""></figure>
                <figure class="front"><img src="<?= get_template_directory_uri() ?>/assets/images/book/page5.jpg" alt=""></figure>
            </div>
            <div class="paper">
                <figure class="back"><img src="<?= get_template_directory_uri() ?>/assets/images/book/page4.jpg" alt=""></figure>
                <figure class="front"><img src="<?= get_template_directory_uri() ?>/assets/images/book/page3.jpg" alt=""></figure>
            </div>
            <div class="paper">
                <figure class="back"><img src="<?= get_template_directory_uri() ?>/assets/images/book/page2.jpg" alt=""></figure>
                <figure class="front"><img src="<?= get_template_directory_uri() ?>/assets/images/book/page1.jpg" alt=""></figure>
            </div>
            <div class="side"></div>
            <div class="bottom"></div>
        </div>
    </div>
</section>

<section id="underText">
    <img class="underText" src="<?= get_template_directory_uri() ?>/assets\images\sous texte.png" alt="">
    <img class="backgroundImage1" src="<?= get_template_directory_uri() ?>/assets\images\background\étoile.png" alt="">
    <img class="backgroundImage2" src="<?= get_template_directory_uri() ?>/assets\images\background\étoile droite.png" alt="">
</section>

<footer id="footer">
    <div class="name">
        <img src="<?= get_template_directory_uri() ?>/assets\images\name2.png" alt="name">
    </div>
    <div class="content">
        <div class="contacts">
            <a class="item" href="https://www.instagram.com/dyeuh_uuju/" target="_blank">
                <img src="<?= get_template_directory_uri() ?>/assets\images\contacts\contact 1.png" alt="">
                <span class="underline">Intagram</span>
            </a>
            <a class="item" href="https://twitter.com/" target="_blank">
                <img src="<?= get_template_directory_uri() ?>/assets\images\contacts\contact 2.png" alt="">
                <span class="underline">Twitter</span>
            </a>
            <a class="item" href="https://www.youtube.com/" target="_blank">
                <img src="<?= get_template_directory_uri() ?>/assets\images\contacts\contact 3.png" alt="">
                <span class="underline">Youtube</span>
            </a>
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
            <a class="underline" href="https://www.behance.net/" target="_blank">Behance</a>
            <a class="underline" href="mailto:" target="_blank">Email</a>
        </div>
        <button class="arrowUp">
            <span>Retour en haut</span>
            <svg width="24px" height="24px" viewBox="0 0 24 24" stroke-width="1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21V3m0 0l8.5 8.5M12 3l-8.5 8.5" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        </button>
    </div>
</footer>

<?php
get_footer();
