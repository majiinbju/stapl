<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width,initial-scale=1.0">
	<title><?= $site->title()->esc() ?> | <?= $page->title()->esc() ?></title>
	<?= css([
		'assets/css/index.css',
		'@auto'
	]) ?>
	
</head>

<body>

	<header>
		<?php snippet('topbar') ?>
	</header>
	
<main id="id">