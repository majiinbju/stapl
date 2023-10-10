<!DOCTYPE html>
<html lang="en">
<head>

	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width,initial-scale=1.0">

	
	<title><?= $site->title()->esc() ?> | <?= $page->title()->esc() ?></title>

	
	<?= css([
		'assets/css/index.css',
		'assets/css/styles.css',
		'@auto'
	]) ?>

	
	
	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" integrity="sha512-16esztaSRplJROstbIIdwX3N97V1+pZvV33ABoG1H2OyTttBxEGkTsoIVsiP1iaTtM8b3+hu2kB6pQ4Clr5yug==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
	<link rel="shortcut icon" type="image/x-icon" href="<?= url('./assets/logo.svg') ?>">
</head>
<body>

<?php snippet('topbar') ?>


<main>
