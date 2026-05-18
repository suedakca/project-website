<?php require 'i18n.php'; ?>
<!DOCTYPE html>
<html lang="<?= __('lang_code') ?>">
<head>
  <!-- META -->
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Service Notice | Renderlike</title>

  <!-- FAVICON -->
  <link rel="icon" href="images/RL_LOGO_Mavi.png" type="image/x-icon" />
  <link rel="shortcut icon" type="image/x-icon" href="images/RL_LOGO_Mavi.png" />

  <!-- STYLES (aynı dosyalar) -->
  <link rel="stylesheet" href="css/loader.min.css">
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <link rel="stylesheet" href="css/fontawesome/css/font-awesome.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <link rel="stylesheet" href="css/owl.carousel.min.css">
  <link rel="stylesheet" href="css/magnific-popup.min.css">
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/custom.css">
  <link rel="stylesheet" href="css/rev-slider-4.css">
  <link rel="stylesheet" href="plugins/revolution/revolution/css/settings.css">
  <link rel="stylesheet" href="plugins/revolution/revolution/css/navigation.css">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">

  <style>
    /* Markayı andıran mavi & nötr tonlar */
    :root{
      --brand:#2a5ced;         /* Refined brand blue */
      --brand-dark:#1a41cc;
      --text:#333;
      --muted:#667085;
      --bg:#f5f7fa;
      --card:#ffffff;
      --shadow:0 8px 24px rgba(0,0,0,.08);
    }

    body{
      background: var(--bg);
      font-family: "Poppins", system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
      margin:0;
      min-height:100vh;
      display:flex;
      flex-direction:column;
    }

    /* Header siteninkiyle aynı yapıda; mevcut css dosyaların stilleri çalışır */
    .site-header .main-bar{
      border-bottom: 1px solid rgba(0,0,0,.04);
    }
    .header-nav .nav>li>a{
      font-weight:500;
    }
    .header-nav .nav>li.active>a,
    .header-nav .nav>li>a:hover{
      color: var(--brand);
    }

    /* Status section */
    .status-wrap{
      flex:1;
      display:flex;
      align-items:center;
      justify-content:center;
      padding: 64px 16px;
      background:
        radial-gradient(1200px 600px at 10% -10%, rgba(29,109,242,.08), transparent 60%),
        radial-gradient(900px 500px at 110% -20%, rgba(29,109,242,.06), transparent 60%),
        var(--bg);
    }
    .status-card{
      width:100%;
      max-width:640px;
      background:var(--card);
      border-radius:16px;
      box-shadow:var(--shadow);
      text-align:center;
      padding: 40px 32px;
    }
    .status-icon{
      width:60px; height:60px;
      border-radius:50%;
      display:inline-flex; align-items:center; justify-content:center;
      background: rgba(29,109,242,.1);
      color: var(--brand);
      font-size:28px;
      margin-bottom:16px;
    }
    .status-title{
      font-size: clamp(22px, 2.2vw, 28px);
      font-weight:700;
      color: var(--text);
      margin: 6px 0 10px;
      letter-spacing: .2px;
    }
    .status-desc{
      color: var(--muted);
      font-size: 15px;
      line-height: 1.6;
      margin: 0 0 24px;
    }
    .actions{
      display:flex;
      gap:12px;
      justify-content:center;
      flex-wrap: wrap;
    }
    .btn{
      display:inline-flex; align-items:center; gap:8px;
      padding: 12px 18px;
      border-radius:10px;
      text-decoration:none;
      font-weight:600;
      border:1px solid transparent;
      transition:.2s ease-in-out;
    }
    .btn-primary{
      background: var(--brand);
      color:#fff;
    }
    .btn-primary:hover{
      background: var(--brand-dark);
      transform: translateY(-1px);
    }
    .btn-ghost{
      background:#fff;
      color: var(--text);
      border-color: #e6e8ec;
    }
    .btn-ghost:hover{
      border-color:#d7dbe2;
      transform: translateY(-1px);
    }

    /* küçük detay */
    .hint{
      margin-top: 10px;
      font-size: 12px;
      color: #94a3b8;
    }

    /* Footer sabit değil; body flex ile dibe iner */
    .footer-fixed .site-footer{ margin-top:auto; }
  </style>
</head>
<body class="footer-fixed">
<div class="page-wraper">

  <!-- HEADER START (mevcut nav’ınız aynen) -->
  <header class="site-header header-style-1 nav-wide mobile-sider-drawer-menu">
    <div class="sticky-header main-bar-wraper">
      <div class="main-bar bg-white p-t10">
        <div class="container">
          <div class="logo-header">
            <div class="logo-header-inner logo-header-one">
              <a href="index.php">
                <img src="images/logo-dark.png" width="171" height="49" alt="Renderlike Logo" />
              </a>
            </div>
          </div>

          <!-- NAV Toggle Button -->
          <button id="mobile-side-drawer" data-target=".header-nav" data-toggle="collapse" type="button"
                  class="navbar-toggler collapsed">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar icon-bar-first"></span>
            <span class="icon-bar icon-bar-two"></span>
            <span class="icon-bar icon-bar-three"></span>
          </button>

          <!-- MAIN Nav -->
          <div class="header-nav navbar-collapse collapse">
            <ul class="nav navbar-nav">
              <li class="mobile-about" style="height: 50px;">
                <a href=""><i class="fa-solid fa-x"
                              style="font-size: 24px; position: absolute; bottom: 30%; left: 45%;"></i></a>
              </li>
              <li><a href="index.php"><?= __('nav_home') ?></a></li>
              <li><a href="portfolio.php"><?= __('nav_projects') ?></a></li>
              <li><a href="about.php"><?= __('nav_about') ?></a></li>
              <li><a href="contact.php"><?= __('nav_contact') ?></a></li>
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
                  <a href="https://www.instagram.com/renderlikeofficial/">
                    <i class="fa-brands fa-instagram" style="font-size: 24px; color: white; padding: 20px;"></i>
                  </a>
                </li>
              </div>
            </ul>

            <div class="mobile-nav">
              <ul class="nav navbar-nav">
                <li><a href="">|</a></li>
                <li><a href="https://www.instagram.com/renderlikeofficial/"><i class="fa-brands fa-instagram" style="font-size: 24px;"></i></a></li>
                <li><a href="http://linkedin.com/company/renderlike-3d-visual-studio"><i class="fa-brands fa-linkedin-in" style="font-size: 24px;"></i></a></li>
                <li><a href="https://www.youtube.com/channel/UCVaKjFb1j6issDq8NTtb0EA"><i class="fa-brands fa-youtube" style="font-size: 24px;"></i></a></li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- HEADER END -->

  <!-- STATUS CONTENT -->
  <main class="status-wrap">
    <section class="status-card" aria-labelledby="status-title">
      <div class="status-icon" aria-hidden="true">
        <i class="fa-solid fa-wand-magic-sparkles"></i>
      </div>
      <h1 id="status-title" class="status-title"><?= __('error_title') ?></h1>
      <p class="status-desc">
        <?= __('error_desc') ?>
      </p>
      <div class="actions">
        <a class="btn btn-primary" href="index.php">
          <i class="fa-solid fa-house"></i> <?= __('error_home_btn') ?>
        </a>
        <a class="btn btn-ghost" href="contact.php">
          <i class="fa-regular fa-paper-plane"></i> <?= __('error_contact_btn') ?>
        </a>
      </div>
      <div class="hint"><?= __('error_hint') ?></div>
    </section>
  </main>

  <!-- (Opsiyonel) Footer’ınız varsa buraya ekleyebilirsiniz -->
</div>

<!-- JS (aynı dosyalar; nav ve mobil menü için gerekli) -->
<script src="js/jquery-3.7.1.min.js"></script>
<script src="js/popper.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/magnific-popup.min.js"></script>
<script src="js/waypoints.min.js"></script>
<script src="js/counterup.min.js"></script>
<script src="js/waypoints-sticky.min.js"></script>
<script src="js/isotope.pkgd.min.js"></script>
<script src="js/imagesloaded.pkgd.min.js"></script>
<script src="js/owl.carousel.min.js"></script>
<script src="js/jquery.owl-filter.js"></script>
<script src="js/scrolla.min.js"></script>
<script src="js/custom.js"></script>
<script src="js/shortcode.js"></script>
</body>
</html>