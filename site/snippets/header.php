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
	<!-- Custom Scripts -->
	
	<!-- Swup for page transitions -->
	<script type="module" src="https://unpkg.com/@swup/head-plugin@2"></script>
	<script type="module">
		import Swup from 'https://unpkg.com/swup@4?module';
		const swup = new Swup({
			plugins: [new SwupHeadPlugin(), new SwupScriptsPlugin({
				body: true,
				head: true
			})],

		});
	</script>
	<script type="module" src="https://unpkg.com/@swup/scripts-plugin@2"></script>

	<!-- Libraries -->
	<!-- Font Awesome -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
	<!-- GSAP -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
	<!-- Draggable + ScrollTo for GSAP-->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollToPlugin.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/Draggable.min.js"></script>

	<!-- Bootstrap CSS -->
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
	<!-- Bootstrap JS (deferred for faster loading) -->
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous" defer="true"></script>
	<?= css([
		'assets/css/index.css',
		'@auto'
	]) ?>
</head>

<body data-barba="wrapper">

	<?php snippet('topbar') ?>
	<?php snippet('sidebar') ?>