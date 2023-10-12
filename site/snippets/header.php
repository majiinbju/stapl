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
	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/Draggable.min.js" integrity="sha512-S6SXKUZ11xkCoD/UuhdXG4B4iiCXng+xW2KCx0lgfQqmdqtjqGgm4WChdYIhO1F/CmH21vnkSUvPEgXNgDwkjg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
	<script src="https://unpkg.com/interactjs/dist/interact.min.js"></script>
</head>

<body>
	<?php snippet('animation') ?>
	<?php snippet('sidebar') ?>
	<?php snippet('topbar') ?>
	<main>