<?php
require "./db.php";
session_start();

if (!isset($_GET["log"]) || $_GET["log"] != 1) {
  header("Location: ./login.php");
  exit;
}

if (empty($_SESSION['csrf'])) { $_SESSION['csrf'] = bin2hex(random_bytes(32)); }
$CSRF = $_SESSION['csrf'];

$CATEGORIES = ['exterior'=>'Exterior','interior'=>'Interior','products'=>'Products'];
$msgS=[]; $msgE=[];
function h($s){return htmlspecialchars($s??'',ENT_QUOTES,'UTF-8');}

// ---- POST İşlemleri ----
if($_SERVER['REQUEST_METHOD']==='POST' && isset($_POST['csrf']) && $_POST['csrf']===$_SESSION['csrf']){
  $action=$_POST['action']??'';

  if($action==='edit-save'){
    $st=$db->prepare("UPDATE images SET title=?, description=? WHERE imgName=?");
    if($st->execute([$_POST['title_edit'],$_POST['description_edit'],$_POST['imgName']])) $msgS[]="Kayıt güncellendi.";
    else $msgE[]="Güncelleme hatası.";
  }

  if($action==='delete'){
    $st=$db->prepare("DELETE FROM images WHERE imgName=? AND type=?");
    if($st->execute([$_POST['imgName'],$_POST['type']])) $msgS[]="Kayıt silindi.";
    else $msgE[]="Silme hatası.";
  }
}

// ---- Arama ----
$search = $_GET['search'] ?? '';
if ($search) {
  $stmt = $db->prepare("SELECT imgName,type,title,description FROM images WHERE title LIKE ? ORDER BY type,imgName");
  $stmt->execute(['%'.$search.'%']);
} else {
  $stmt = $db->query("SELECT imgName,type,title,description FROM images ORDER BY type,imgName");
}
$rows=$stmt->fetchAll(PDO::FETCH_ASSOC);
?>
<!doctype html>
<html lang="tr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Renderlike Admin</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
<style>
body{background:#f8fafc;}
.card{border:1px solid #e2e8f0;}
.table thead{background:#f1f5f9;}
.thumb{width:72px;height:54px;object-fit:cover;border-radius:4px;}
</style>
</head>
<body>
<nav class="navbar navbar-light bg-white border-bottom">
  <div class="container-fluid">
    <a class="navbar-brand">Renderlike Admin</a>
    <form class="d-flex" method="get">
      <input type="hidden" name="log" value="1">
      <input class="form-control me-2" type="search" placeholder="Başlığa göre ara..." name="search" value="<?php echo h($search);?>">
      <button class="btn btn-outline-primary">Ara</button>
    </form>
  </div>
</nav>

<div class="container py-4">
  <?php foreach($msgS as $m): ?><div class="alert alert-success"><?php echo h($m);?></div><?php endforeach;?>
  <?php foreach($msgE as $m): ?><div class="alert alert-danger"><?php echo h($m);?></div><?php endforeach;?>

  <!-- Upload Form -->
  <div class="card mb-4 shadow-sm">
    <div class="card-body">
      <h5 class="card-title">Yeni Görsel Yükle</h5>
      <form method="post" enctype="multipart/form-data">
        <input type="hidden" name="csrf" value="<?php echo h($CSRF);?>">
        <input type="hidden" name="action" value="add">
        <div class="row g-3">
          <div class="col-md-4"><input type="file" class="form-control" name="image" required></div>
          <div class="col-md-2">
            <select name="category" class="form-select">
              <?php foreach($CATEGORIES as $k=>$v):?><option value="<?php echo h($k);?>"><?php echo h($v);?></option><?php endforeach;?>
            </select>
          </div>
          <div class="col-md-2"><input class="form-control" name="title" placeholder="Başlık"></div>
          <div class="col-md-3"><input class="form-control" name="description" placeholder="Açıklama"></div>
          <div class="col-md-1 d-grid"><button class="btn btn-primary">Ekle</button></div>
        </div>
      </form>
    </div>
  </div>

  <!-- List -->
  <div class="card shadow-sm">
    <div class="card-body">
      <h5 class="card-title">Görseller</h5>
      <div class="table-responsive">
        <table class="table align-middle">
          <thead><tr><th>Önizleme</th><th>imgName</th><th>Type</th><th>Title</th><th>Description</th><th style="width:180px">İşlem</th></tr></thead>
          <tbody>
            <?php foreach($rows as $i=>$r): $collapseId="editRow".$i;?>
            <tr>
              <td><img class="thumb" src="images/project/<?php echo h($r['type']);?>/<?php echo h($r['imgName']);?>" onerror="this.src='images/logo-dark.png'"></td>
              <td><?php echo h($r['imgName']);?></td>
              <td><span class="badge bg-light text-dark"><?php echo h($r['type']);?></span></td>
              <td><?php echo h($r['title']);?></td>
              <td><?php echo h($r['description']);?></td>
              <td>
                <button class="btn btn-sm btn-outline-primary" data-bs-toggle="collapse" data-bs-target="#<?php echo $collapseId;?>">Düzenle</button>
                <form method="post" class="d-inline">
                  <input type="hidden" name="csrf" value="<?php echo h($CSRF);?>">
                  <input type="hidden" name="action" value="delete">
                  <input type="hidden" name="imgName" value="<?php echo h($r['imgName']);?>">
                  <input type="hidden" name="type" value="<?php echo h($r['type']);?>">
                  <button class="btn btn-sm btn-outline-danger" onclick="return confirm('Silinsin mi?')">Sil</button>
                </form>
              </td>
            </tr>
            <!-- inline edit row -->
            <tr class="collapse" id="<?php echo $collapseId;?>">
              <td colspan="6">
                <form method="post" class="p-3 border rounded bg-light">
                  <input type="hidden" name="csrf" value="<?php echo h($CSRF);?>">
                  <input type="hidden" name="action" value="edit-save">
                  <input type="hidden" name="imgName" value="<?php echo h($r['imgName']);?>">
                  <div class="row g-2 align-items-end">
                    <div class="col-md-4">
                      <label class="form-label">Title</label>
                      <input class="form-control" name="title_edit" value="<?php echo h($r['title']);?>">
                    </div>
                    <div class="col-md-6">
                      <label class="form-label">Description</label>
                      <input class="form-control" name="description_edit" value="<?php echo h($r['description']);?>">
                    </div>
                    <div class="col-md-2 d-grid">
                      <button class="btn btn-success">Kaydet</button>
                    </div>
                  </div>
                </form>
              </td>
            </tr>
            <?php endforeach;?>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>