<?php
require "./db.php";
$list = $db->query("select * from images order by id desc")->fetchAll(PDO::FETCH_ASSOC);
?>

<!DOCTYPE html>
<html lang="en">

<head>

  <!-- META -->
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="keywords" content="" />
  <meta name="author" content="" />
  <meta name="robots" content="" />
  <meta name="description" content="" />

  <!-- FAVICONS ICON -->
  <link rel="icon" href="images/RL_LOGO_Mavi.png" type="image/x-icon" />
  <link rel="shortcut icon" type="image/x-icon" href="images/RL_LOGO_Mavi.png" />

  <!-- PAGE TITLE HERE -->
  <title>Projects | Renderlike</title>

  <!-- MOBILE SPECIFIC -->
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <link rel="stylesheet" type="text/css" href="css/loader.min.css"> <!-- LOADER STYLE SHEET -->
  <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css"><!-- BOOTSTRAP STYLE SHEET -->
  <link rel="stylesheet" type="text/css" href="css/fontawesome/css/font-awesome.min.css" />
  <!-- FONTAWESOME STYLE SHEET -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <link rel="stylesheet" type="text/css" href="css/owl.carousel.min.css"><!-- OWL CAROUSEL STYLE SHEET -->
  <link rel="stylesheet" type="text/css" href="css/magnific-popup.min.css"><!-- MAGNIFIC POPUP STYLE SHEET -->
  <link rel="stylesheet" type="text/css" href="css/style.css"><!-- MAIN STYLE SHEET -->
  <link rel="stylesheet" href="css/custom.css">


  <!-- GOOGLE FONTS -->
  <link href="https://fonts.googleapis.com/css?family=Poppins:300,300i,400,400i,500,500i,600,600i,700,800,800i,900" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Crete+Round:400,400i&amp;subset=latin-ext" rel="stylesheet">

  <!-- Fancy Box -->
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.css">
</head>

<body class="footer-fixed">

  <div class="page-wraper">

    <!-- HEADER START -->
    <header class="site-header header-style-1 nav-wide mobile-sider-drawer-menu">
      <div class="sticky-header main-bar-wraper">
        <div class="main-bar bg-white p-t10">
          <div class="container">
            <div class="logo-header">
              <div class="logo-header-inner logo-header-one">
                <a href="index.html">
                  <img src="images/logo-dark.png" width="171" height="49" alt="" />
                </a>
              </div>
            </div>
            <!-- NAV Toggle Button -->
            <button id="mobile-side-drawer" data-target=".header-nav" data-toggle="collapse" type="button" class="navbar-toggler collapsed">
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
                  <a href="index.html">Home</a>
                </li>
                <li class="active">
                  <a href="portfolio.php">Project</a>
                  <ul class="filter sub-menu mobile-about">
                    <li>
                      <a href="portfolio.php" data-filter=".interior">Interior</a>
                    </li>
                    <li>
                      <a href="portfolio.php" data-filter=".exterior">Exterior</a>
                    </li>
                    <li>
                      <a href="portfolio.php" data-filter=".product">Products</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a href="contact.html">Contact Us</a>
                </li>
                <div class="mobil-social" style=" border-top: 1px solid white; width: 100%;">
                  <li>
                    <a href="http://linkedin.com/company/renderlike-3d-visual-studio">
                      <i class="fa-brands fa-linkedin-in" style="font-size: 24px; color: white;  padding: 20px;"></i>
                    </a>
                    <a href="https://www.youtube.com/channel/UCVaKjFb1j6issDq8NTtb0EA">
                      <i class="fa-brands fa-youtube" style="font-size: 24px; color: white;  padding: 20px;"></i>
                    </a>
                    <a href="https://www.instagram.com/renderlikeofficial/">
                      <i class="fa-brands fa-instagram" style="font-size: 24px; color: white; padding: 20px;"></i>
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
                    <a href="https://www.instagram.com/renderlikeofficial/">
                      <i class="fa-brands fa-instagram" style="font-size: 24px;"></i>
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

    <!-- CONTENT START -->
    <div class="page-content">
      <!-- portfolio-section 
        ================================================== -->

      <div class="filter-cont">
        <br />
        <br />
        <br />
        <section class="filter-old">
          <ul class="filter">
            <li class="active">
              <a href="#" data-filter=".portfolio-post">Show All</a>
            </li>
            <li>
              <a href="#" data-filter=".interior">Interiors</a>
            </li>
            <li><a href="#" data-filter=".exterior">Exteriors</a></li>
            <li>
              <a href="#" data-filter=".product">Products Visual</a>
            </li>
          </ul>
        </section>
      </div>

      <section class="portfolio-section fullscreen">

     <div class="portfolio-box iso-call joined">
  <?php
  // Verileri türlerine göre sınıflandır
  $groupedList = [
      'interior' => [],
      'exterior' => [],
      'product' => []
  ];

  // Listeyi türlere göre grupla
  foreach ($list as $l) {
    if (in_array($l["type"], array_keys($groupedList))) {
        $groupedList[$l["type"]][] = $l;
    }
  }

  // Her tür için döngü başlat
  foreach ($groupedList as $type => $items) {
    foreach ($items as $l) { ?>
      <div class="portfolio-post <?= htmlspecialchars($l["type"]) ?>">
        <div class="box effect-milo">
          <a href="images/project/<?= htmlspecialchars($l["type"]) ?>/<?= htmlspecialchars($l["imgName"]) ?>" data-fancybox="gallery" data-caption="<?= htmlspecialchars($l["description"]) ?>">
            <img data-src="images/project/<?= htmlspecialchars($l["type"]) ?>/<?= htmlspecialchars($l["imgName"]) ?>" class="lazyload" alt="<?= htmlspecialchars($l["description"]) ?>" />

          </a>
          <p><?= htmlspecialchars($l["title"]) ?></p>
        </div>
      </div>
  <?php }
  }
  ?>
</div>
      </section>
    </div>
  </div>

  <!-- LOADING AREA START ===== -->
  <div class="loading-area">
    <div class="loading-box"></div>
    <div class="loading-pic">
      <img src="./images/logo-dark.png" alt="">
    </div>
  </div>
  <!-- LOADING AREA  END ====== -->

  <!-- JAVASCRIPT  FILES ========================================= -->
  <script src="js/jquery-3.7.1.min.js"></script><!-- JQUERY.MIN JS -->
  <script src="js/popper.min.js"></script>
  <script src="js/bootstrap.min.js"></script><!-- BOOTSTRAP.MIN JS -->
  <script src="js/magnific-popup.min.js"></script><!-- MAGNIFIC-POPUP JS -->
  <script src="js/waypoints.min.js"></script><!-- WAYPOINTS JS -->
  <script src="js/counterup.min.js"></script><!-- COUNTERUP JS -->
  <script src="js/waypoints-sticky.min.js"></script><!-- COUNTERUP JS -->
  <script src="js/isotope.pkgd.min.js"></script><!-- MASONRY  -->
  <script src="js/imagesloaded.pkgd.min.js"></script><!-- MASONRY  -->
  <script src="js/owl.carousel.min.js"></script><!-- OWL  SLIDER  -->
  <script src="js/jquery.owl-filter.js"></script>
  <script src="js/scrolla.min.js"></script><!-- ON SCROLL CONTENT ANIMTE   -->
  <script src="js/custom.js"></script><!-- CUSTOM FUCTIONS  -->
  <script src="js/shortcode.js"></script><!-- SHORTCODE FUCTIONS  -->
  <!-- REVOLUTION JS FILES -->
  <script src="plugins/revolution/revolution/js/jquery.themepunch.tools.min.js"></script>
  <script src="plugins/revolution/revolution/js/jquery.themepunch.revolution.min.js"></script>
  <!-- SLIDER REVOLUTION 5.0 EXTENSIONS  (Load Extensions only on Local File Systems !  The following part can be removed on Server for On Demand Loading) -->
  <script src="plugins/revolution/revolution/js/extensions/revolution-plugin.js"></script>
  <!-- REVOLUTION SLIDER SCRIPT FILES -->
  <script src="js/rev-script-1.js"></script>
  <script src="js/particles.js"></script><!-- CANVAS EFFECT   -->
  <script src="js/app.js"></script><!-- CANVAS EFFECT   -->

  <script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js"></script> <!--Fancy Box-->
  <script>
    const filterLinks = document.querySelectorAll(".filter li a");
    const contentItems = document.querySelectorAll(".portfolio-post");

    filterLinks.forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();

        const filterClass = link.getAttribute("data-filter");

        contentItems.forEach(item => {
          item.style.display = "none";
        });

        document
          .querySelectorAll(".filters-data")
          .forEach(function(element) {
            element.style.display = "none";
          });

        document.querySelectorAll(filterClass).forEach(item => {
          item.style.display = "block";
        });

        filterLinks.forEach(otherLink => {
          otherLink.parentElement.classList.remove("active");
        });

        link.parentElement.classList.add("active");
      });
    });

    // Show only the first filter content by default
    document.querySelector(".filter li.active a").click();
  </script>
  
  <script>
  document.addEventListener("DOMContentLoaded", function() {
    var lazyloadImages = document.querySelectorAll("img.lazyload");

    var lazyloadObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          // Resmin data-src özelliğinden src'ye veri aktar
          entry.target.src = entry.target.dataset.src;
          entry.target.classList.remove("lazyload");
          lazyloadObserver.unobserve(entry.target);
        }
      });
    });

    lazyloadImages.forEach(function(image) {
      lazyloadObserver.observe(image);
    });
  });
</script>
</body>

</html>