<!DOCTYPE html>
<html lang="en">
<head>

	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width,initial-scale=1.0">

	
	<title><?= $site->title()->esc() ?> | <?= $page->title()->esc() ?></title>

	
	<?= css([
		'assets/css/styles.css',
		'@auto'
	]) ?>

	
	
	<link rel="shortcut icon" type="image/x-icon" href="<?= url('./assets/logo.svg') ?>">
</head>
<body>

<?php snippet('topbar') ?>
<?php snippet('sidebar') ?>


<main>
