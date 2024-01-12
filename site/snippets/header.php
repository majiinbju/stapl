<?php
// Assuming you've already initialized the Mobile-Detect library
$detect = $page->detect();

$isMobile = $detect->isMobile();
$isTablet = $detect->isTablet();
$isDesktop = !$isMobile && !$isTablet;
?>

<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width,initial-scale=1.0">
	<title><?= $site->title()->esc() ?> | <?= $page->title()->esc() ?></title>
	<!-- Bootstrap CSS -->
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
	<!-- Bootstrap JS (deferred for faster loading) -->
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous" defer="true"></script>
	<?= css([
		'assets/css/index.css',
		'@auto'
	]) ?>
	<!-- Custom Scripts -->
	<?= js([
		'assets/js/index.js',
		'assets/js/animation.js',
		'@auto'
	], ['defer', 'type' => 'module']) ?>
</head>

<body data-barba="wrapper">

	<?php snippet('topbar') ?>
	<?php snippet('sidebar') ?>