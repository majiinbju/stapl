<?php
	$filterBy = get('filter');
	$projectsPage = page('projects');
	$projects = $projectsPage
		->children()
		->listed()
		->when($filterBy, function($filterBy) {
		return $this->filterBy('category', $filterBy);
		})

?>
<nav class="top-0 w-100 position-sticky z-3 d-flex navbar navbar-expand-lg bg-white text-uppercase align-items-center justify-content-lg-between mb-5 p-0">
	<div class="container-fluid">

		<!-- Stapl Logo -->
		<a href="<?= $site->url() ?>" class="navbar-brand" width="10%">
			<img src="../assets/logo/stapl-logo.svg" alt="Stapl logo" width="120" class="d-inline-block align-text-top p-1">
		</a>
		<button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navBar" aria-controls="navBar" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse justify-content-md-between text-end text-md-start d-sm-flex flex-sm-column flex-md-row" id="navBar">

			<a href="<?= $site->url() ?>" class="navbar-brand me-auto">
			</a>
			<ul class="navbar-nav m-auto mb-2 top-bar text-end nav-items">
				<li class="nav-item mx-md-3">
					<a class="animated animate__fadeInRight" href="<?= $projects->url() ?>?filter=Commercial">Commercial</a>
				</li>
				<li class="nav-item mx-md-3">
					<a class="animated animate__fadeInRight" href="<?= $projects->url() ?>?filter=Residential">Residential</a>
				</li>
				<li class="nav-item mx-md-3">
					<a class="animated animate__fadeInRight" href="<?= $projects->url() ?>?filter=Mixed-Use">Mixed Use</a>
				</li>
				<li class="nav-item mx-md-3">
					<a class="animated animate__fadeInRight" href="<?= $projects->url() ?>?filter=Retail">Retail</a>
				</li>
			</ul>

			<?php snippet('search-bar') ?>
		</div>
	</div>
</nav>