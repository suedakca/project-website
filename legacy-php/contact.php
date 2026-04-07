<?php require 'i18n.php'; ?>
<!DOCTYPE html>

<html lang="<?= __('lang_code') ?>">
  <head>
    <!-- META -->
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="keywords" content="<?= __('meta_keywords') ?>" />
    <meta name="author" content="Renderlike" />
    <meta name="robots" content="index, follow" />
    <meta name="description" content="<?= __('meta_description_home') ?>" />
    <link rel="canonical" href="https://renderlike.co/contact.php" />
    <link rel="alternate" hreflang="tr" href="https://renderlike.co/contact.php?lang=tr" />
    <link rel="alternate" hreflang="en" href="https://renderlike.co/contact.php?lang=en" />
    <link rel="alternate" hreflang="x-default" href="https://renderlike.co/contact.php?lang=tr" />

    <!-- FAVICONS ICON -->
    <link rel="icon" href="images/RL_LOGO_Mavi.png" type="image/x-icon" />
    <link
      rel="shortcut icon"
      type="image/x-icon"
      href="images/RL_LOGO_Mavi.png"
    />

    <!-- PAGE TITLE HERE -->
    <title><?= __('nav_contact') ?> | Renderlike</title>

    <!-- MOBILE SPECIFIC -->
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <link rel="stylesheet" type="text/css" href="css/loader.min.css" />
    <!-- LOADER STYLE SHEET -->
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />
    <!-- BOOTSTRAP STYLE SHEET -->
    <link
      rel="stylesheet"
      type="text/css"
      href="css/fontawesome/css/font-awesome.min.css"
    />
    <!-- FONTAWESOME STYLE SHEET -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
    />

    <link rel="stylesheet" type="text/css" href="css/owl.carousel.min.css" />
    <!-- OWL CAROUSEL STYLE SHEET -->
    <link rel="stylesheet" type="text/css" href="css/magnific-popup.min.css" />
    <!-- MAGNIFIC POPUP STYLE SHEET -->
    <link rel="stylesheet" type="text/css" href="css/style.css" />
    <!-- MAIN STYLE SHEET -->
    <!-- GOOGLE FONTS -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="css/custom.css" />
  </head>

  <body id="bg">
    <div class="page-wraper">
      <!-- HEADER START -->
      <header
        class="site-header header-style-1 nav-wide mobile-sider-drawer-menu" 
      >
        <div class="sticky-header main-bar-wraper" >
          <div class="main-bar bg-white p-t10">
            <div class="container">
              <div class="logo-header">
                <div class="logo-header-inner logo-header-one">
                  <a href="index.php">
                    <img
                      src="images/logo-dark.png"
                      width="171"
                      height="49"
                      alt="Renderlike Logo"
                    />
                  </a>
                </div>
              </div>
              <!-- NAV Toggle Button -->
              <button
                id="mobile-side-drawer"
                data-target=".header-nav"
                data-toggle="collapse"
                type="button"
                class="navbar-toggler collapsed"
              >
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar icon-bar-first"></span>
                <span class="icon-bar icon-bar-two"></span>
                <span class="icon-bar icon-bar-three"></span>
              </button>
              <!-- ETRA Nav -->
              <!-- MAIN Vav -->
            	<div class="header-nav navbar-collapse collapse">
								<ul class="nav navbar-nav">
                  <li class="mobile-about" style="height: 50px;">
                    <a href=""><i class="fa-solid fa-x" style="font-size: 24px; position: absolute; bottom: 30%; left: 45%;"></i></a>
                  </li>
									<li>
										<a href="index.php"><?= __('nav_home') ?></a>
									</li>
									<li>
										<a href="portfolio.php"><?= __('nav_projects') ?></a>
									</li>
									<li>
										<a href="about.php"><?= __('nav_about') ?></a>
									</li>
									<li  class="active">
										<a href="contact.php"><?= __('nav_contact') ?></a>
									</li>
                                <li class="lang-switch-li">
                                    <a href="?lang=tr" class="<?= getLang() == 'tr' ? 'active' : '' ?>">TR</a>
                                    <span>/</span>
                                    <a href="?lang=en" class="<?= getLang() == 'en' ? 'active' : '' ?>">EN</a>
                                </li>
                  <div class="mobil-social" style=" border-top: 1px solid white; width: 100%;">
                    <li>
                      <a href="http://linkedin.com/company/renderlike-3d-visual-studio">
                        <i class="fa-brands fa-linkedin-in" style="font-size: 24px; color: white;  padding: 20px;"></i>
                      </a>
                      <a href="https://www.youtube.com/channel/UCVaKjFb1j6issDq8NTtb0EA">
                        <i class="fa-brands fa-youtube" style="font-size: 24px; color: white;  padding: 20px;"></i>
                      </a>
                      <a href="https://www.instagram.com/renderlikeofficial/" >
                        <i class="fa-brands fa-instagram"  style="font-size: 24px; color: white; padding: 20px;"></i>
                      </a>
                    </li>
                </div>
								</ul>
								<div class="mobile-nav">
									<ul class="nav navbar-nav">
										<li>
											<a href="">|</a>
										</li>
										<li>
                      <a href="https://www.instagram.com/renderlikeofficial/" >
                        <i class="fa-brands fa-instagram"  style="font-size: 24px;"></i>
                      </a>
                    </li>
                    <li>
                      <a href="http://linkedin.com/company/renderlike-3d-visual-studio">
                        <i class="fa-brands fa-linkedin-in" style="font-size: 24px;"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/channel/UCVaKjFb1j6issDq8NTtb0EA">
                        <i class="fa-brands fa-youtube" style="font-size: 24px;"></i>
                      </a>
                    </li>
									</ul>
								</div>
							</div>
            </div>
          </div>
        </div>
      </header>

      <!-- HEADER END -->
    <div class="contact-container">
      <div class="cont-about">
        <div class="cont-div">
          <div class="img-cont">
            <img src="images/gallery/contact.jpeg" alt="Contact Renderlike" />
          </div>
          <div class="word-cont">
              <p><?= __('contact_location') ?></p>
              <h1><?= __('contact_city') ?></h1>
              <p><?= __('contact_address') ?></p>
              <a href="https://www.google.com/maps/dir//1071+Usta+Ankara+%C4%B0%C5%9F+ve+Ya%C5%9Fam+Merkezi,+%C3%87ukurambar,+K%C4%B1z%C4%B1l%C4%B1rmak+Mah,+1443.+Cd.+No:25,+06530+%C3%87ankaya%2FAnkara/@39.9074686,32.8120304,15z" 
                 target="_blank" 
                 class="google-maps-link">Google Maps</a>
              
              <div class="contact-cta">
                <p>get in touch</p>
                <a href="mailto:hello@renderlike.com" class="email-link">hello@renderlike.com</a>
              </div>
              <div class="copyright">@Renderlike</div>
          </div>
        </div>
      </div>
    </div>

    <!-- LOADING AREA START ===== -->
    <div class="loading-area">
      <div class="loading-box"></div>
      <div class="loading-pic">
        <img src="./images/logo-dark.png" alt="" />
      </div>
    </div>
    <!-- LOADING AREA  END ====== -->

    <!-- JAVASCRIPT  FILES ========================================= -->
    <script src="js/jquery-3.7.1.min.js"></script>
    <!-- JQUERY.MIN JS -->
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <!-- BOOTSTRAP.MIN JS -->
    <script src="js/magnific-popup.min.js"></script>
    <!-- MAGNIFIC-POPUP JS -->
    <script src="js/waypoints.min.js"></script>
    <!-- WAYPOINTS JS -->
    <script src="js/counterup.min.js"></script>
    <!-- COUNTERUP JS -->
    <script src="js/waypoints-sticky.min.js"></script>
    <!-- COUNTERUP JS -->
    <script src="js/isotope.pkgd.min.js"></script>
    <!-- MASONRY  -->
    <script src="js/imagesloaded.pkgd.min.js"></script>
    <!-- MASONRY  -->
    <script src="js/owl.carousel.min.js"></script>
    <!-- OWL  SLIDER  -->
    <script src="js/jquery.owl-filter.js"></script>
    <script src="js/scrolla.min.js"></script>
    <!-- ON SCROLL CONTENT ANIMTE   -->
    <script src="js/custom.js"></script>
    <!-- CUSTOM FUCTIONS  -->
    <script src="js/shortcode.js"></script>
    <!-- SHORTCODE FUCTIONS  -->

    <script>
      const filterLinks = document.querySelectorAll(".filter li");

      filterLinks.forEach((link) => {
        link.addEventListener("click", () => {
          // Remove active class from all links
          filterLinks.forEach((otherLink) => {
            otherLink.classList.remove("active");
          });
          // Add active class to the clicked link
          link.classList.add("active");
        });
      });
    </script>
  </body>
</html>
