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
<nav class="top-0 fixed flex navbar navbar-expand-lg bg-white text-uppercase align-items-center">
	<div class="container-fluid">
		<button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navBar" aria-controls="navBar" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>

		<div class="collapse navbar-collapse flex justify-content-md-between text-sm-end" id="navBar">
			<!-- Stapl Logo -->
			<a href="<?= $site->url() ?>" class="navbar-brand" width="10%">
				<img src="../assets/logo/stapl-logo.svg" alt="Stapl logo" width="120" class="d-inline-block align-text-top p-1">
			</a>
			
			<ul class="navbar-nav ms-0 mb-2 mb-lg-0 flex justify-content-lg-between top-bar" style="width: 40%;">
				<li class="nav-item">
					<a href="<?= $projects->url() ?>?filter=Commercial">Commercial</a>
				</li>
				<li class="nav-item">
					<a href="<?= $projects->url() ?>?filter=Residential">Residential</a>
				</li>
				<li class="nav-item">
					<a href="<?= $projects->url() ?>?filter=Mixed-Use">Mixed Use</a>
				</li>
				<li class="nav-item">
					<a href="<?= $projects->url() ?>?filter=Retail">Retail</a>
				</li>
			</ul>

			<!-- Search box & icon -->
			<div class="input-group" style="width: 10%;">
				<span class="input-group-append">
					<button class="btn btn-outline-secondary border-0" type="button">
						<i class="fa fa-search">￼</i>
					</button>
				</span>
				<input type="search" value="Search" id="example-search-input" class="form-control border-0">
			</div>
		</div>
	</div>
</nav>