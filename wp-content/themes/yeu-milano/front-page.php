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
        <img class="item" data-id="1" src="<?= get_template_directory_uri() ?>/assets\images\affiches\Forever Vacation.jpg" alt="affiche 1">
        <img class="item" data-id="2" src="<?= get_template_directory_uri() ?>/assets\images\affiches\Amélie Poulain.png" alt="affiche 2">
        <img class="item" data-id="3" src="<?= get_template_directory_uri() ?>/assets\images\affiches\Me On Drugs.jpg" alt="affiche 3">
        <img class="item" data-id="4" src="<?= get_template_directory_uri() ?>/assets\images\affiches\Di-meh Shottagwan.jpg" alt="affiche 4">
        <img class="item" data-id="5" src="<?= get_template_directory_uri() ?>/assets\images\affiches\Supersonic.jpg" alt="affiche 5">
    </div>
    <div class="descriptionDiv">
        <div class="item" data-id="1">
            <h2>
                Forever Vacation
            </h2>
            <p>
                Affiche faite à l'occasion d'un concours de design pour la marque forever vacation organisé par le collectif 99reference.
                Le thème du concours était "les sentiments" un travail qui mèle design, photograpie et typographie.
            </p>
            <div class="secondaryImages">
                <img src="<?= get_template_directory_uri() ?>/assets\images\affiches\Forever Vacation1.jpg" alt="détail 1">
                <img src="<?= get_template_directory_uri() ?>/assets\images\affiches\Forever Vacation2.jpg" alt="détail 2">
            </div>
        </div>
        <div class="item" data-id="2">
            <h2>
                Amélie Poulain
            </h2>
            <p>
                Affiche faite à l'occasion de l'anniversaire du film amélie poulain. L'exercice etait de reprendre le film comme reference dans notre style.
                Un style plus street, rap qui reprend les codes de cet univers aujourd'hui.
            </p>
            <div class="secondaryImages">
                <img src="<?= get_template_directory_uri() ?>/assets\images\affiches\amelie1.jpg" alt="détail 1">
                <img src="<?= get_template_directory_uri() ?>/assets\images\affiches\amelie2.jpg" alt="détail 2">
            </div>
        </div>
        <div class="item" data-id="3">
            <h2>
                Me On Drugs
            </h2>
            <p>
                Affiche de tests graphiques.
            </p>
            <div class="secondaryImages">
                <img src="<?= get_template_directory_uri() ?>/assets\images\affiches\Me On Drugs1.jpg" alt="détail 1">
                <img src="<?= get_template_directory_uri() ?>/assets\images\affiches\Me On Drugs2.jpg" alt="détail 2">
            </div>
        </div>
        <div class="item" data-id="4">
            <h2>
                Di-meh Shottagwan
            </h2>
            <p>
                Affiche fan art de la musique rap shottagwan par Di-meh.
            </p>
            <div class="secondaryImages">
                <img src="<?= get_template_directory_uri() ?>/assets\images\affiches\Di-meh 1.jpg" alt="détail 1">
                <img src="<?= get_template_directory_uri() ?>/assets\images\affiches\Di-meh 2.jpg" alt="détail 2">
            </div>
        </div>
        <div class="item" data-id="5">
            <h2>
                Supersonic
            </h2>
            <p>
                Affiche fan art de la musique supersonic, my exisence par skrillex, Dylan Brady, Noisia et Josh pan.
            </p>
            <div class="secondaryImages">
                <img src="<?= get_template_directory_uri() ?>/assets\images\affiches\Supersonic 1.jpg" alt="détail 1">
                <img src="<?= get_template_directory_uri() ?>/assets\images\affiches\Supersonic 2.jpg" alt="détail 2">
            </div>
        </div>
    </div>
    <div class="listDiv">
        <div class="swiper afficheCarousel">
            <div class="swiper-wrapper">
                <div class="swiper-slide" data-id="1">
                    <img src="<?= get_template_directory_uri() ?>/assets\images\affiches\Forever Vacation.jpg" alt="affiche 1">
                </div>
                <div class="swiper-slide" data-id="2">
                    <img src="<?= get_template_directory_uri() ?>/assets\images\affiches\Amélie Poulain.png" alt="affiche 2">
                </div>
                <div class="swiper-slide" data-id="3">
                    <img src="<?= get_template_directory_uri() ?>/assets\images\affiches\Me On Drugs.jpg" alt="affiche 3">
                </div>
                <div class="swiper-slide" data-id="4">
                    <img src="<?= get_template_directory_uri() ?>/assets\images\affiches\Di-meh Shottagwan.jpg" alt="affiche 4">
                </div>
                <div class="swiper-slide" data-id="5">
                    <img src="<?= get_template_directory_uri() ?>/assets\images\affiches\Supersonic.jpg" alt="affiche 5">
                </div>
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
    <div class="swiper logoCarousel">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="<?= get_template_directory_uri() ?>/assets\images\logos\logo band 1.png" alt="logo 1">
            </div>
            <div class="swiper-slide">
                <img src="<?= get_template_directory_uri() ?>/assets\images\logos\logo band 2.png" alt="logo 2">
            </div>
            <div class="swiper-slide">
                <img src="<?= get_template_directory_uri() ?>/assets\images\logos\logo band 3.png" alt="logo 3">
            </div>
            <div class="swiper-slide">
                <img src="<?= get_template_directory_uri() ?>/assets\images\logos\logo band 4.png" alt="logo 4">
            </div>
            <div class="swiper-slide">
                <img src="<?= get_template_directory_uri() ?>/assets\images\logos\logo band 5.png" alt="logo 5">
            </div>
            <div class="swiper-slide">
                <img src="<?= get_template_directory_uri() ?>/assets\images\logos\logo band 6.png" alt="logo 6">
            </div>
            <div class="swiper-slide">
                <img src="<?= get_template_directory_uri() ?>/assets\images\logos\logo band 7.png" alt="logo 7">
            </div>
            <div class="swiper-slide">
                <img src="<?= get_template_directory_uri() ?>/assets\images\logos\logo band 8.png" alt="logo 8">
            </div>
        </div>
    </div>
</section>

<section id="book">
    <img class="backgroundImage" src="<?= get_template_directory_uri() ?>/assets\images\background\élément 1.png" alt="">
    <img class="arc" src="<?= get_template_directory_uri() ?>/assets\images\background\volet.png" alt="">
    <div class="content">
        <img class="logo" src="<?= get_template_directory_uri() ?>/assets\images\logo.png" alt="">
        <img src="<?= get_template_directory_uri() ?>/assets\images\background\fenetre.png" alt="" class="window">
        <div class="book">
            <div class="first paper">
                <div class="page front contents">
                </div>
                <div class="page back"></div>
            </div>
            <div class="second paper">
                <div class="page front contents">
                    <div id="vara-container"></div>
                </div>
                <div class="page back"></div>
            </div>
            <div class="third paper">
                <div class="page front contents">
                    <div id="vara-container2"></div>
                </div>
                <div class="page back"></div>
            </div>
            <div class="fourth paper">
                <div class="page last front contents">
                    <div id="vara-container3"></div>
                </div>
                <div class="page back"></div>
            </div>
            <div class="side"></div>
            <div class="bottom"></div>
        </div>
    </div>
</section>

<section id="underText">
    <img class="underText" src="<?= get_template_directory_uri() ?>/assets\images\sous texte.png" alt="">
    <img class="backgroundImage1" src="<?= get_template_directory_uri() ?>/assets\images\background\étoile.png" alt="">
    <img class="backgroundImage2" src="<?= get_template_directory_uri() ?>/assets\images\background\étoile.png" alt="">
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
