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
	<?= css([
		'assets/css/index.css',
		'@auto'
	]) ?>
</head>

<body>
	<?php if ($isMobile): ?>
		<header>
			<?php snippet('topbar') ?>
		</header>	
	<?php else: ?>
		<header>
			<?php snippet('topbar') ?>
			<?php snippet('sidebar') ?>
		</header>	
	<?php endif ?>
<main id="id">
	