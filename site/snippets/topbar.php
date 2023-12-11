<?php
	$filterBy = get('filter');
	$projectsPage = page('projects');
	$projects = $projectsPage
		->children()
		->listed()
		->filterBy('category', $filterBy);
	$pagination = $projects->pagination();
	$aboutPage = page('about');
?>
<nav class="top-0 w-100 position-sticky z-3 d-flex navbar navbar-expand-lg bg-white text-uppercase align-items-center justify-content-lg-between mb-5 p-0">
	<div class="container-fluid">

		<!-- Stapl Logo -->
		<a href="<?= $site->url() ?>" class="navbar-brand" width="10%" style="opacity:0">
			<img src="../assets/logo/stapl-logo.svg" alt="Stapl logo" width="100px" class="d-inline-block align-text-top logo p-1">
		</a>
		<button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navBar" aria-controls="navBar" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse justify-content-between d-sm-flex flex-sm-column flex-md-row" id="navBar">
			<!-- Site Logo -->
			<a href="<?= $aboutPage->url() ?>" class="navbar-brand me-auto" style="opacity:0">
			</a>
			<!-- Menu Items -->
			<?php if($aboutPage->navigation()->isNotEmpty()): ?>
				<ul class="navbar-nav m-auto mb-2 top-bar text-end nav-items">
					<!-- For loop for navigation items -->
					<?php foreach($aboutPage->navigation()->toStructure() as $nav): ?>
						<!--  -->
						<?php if($nav->children()->isNotEmpty()): ?>
						<li class="nav-item mx-md-3 dropdown">
							<a href="<?php echo $nav->url(); ?>" <?php e($nav->isOpen(), 'aria-current') ?> class="animated dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
								<?php echo $nav->text() ?>
							</a>
								<ul class="dropdown-menu dropdown-menu-end text-end border-0 p-2">
									<?php foreach($nav->children()->toStructure() as $child): ?>
										<li class="dropdown-item p-0">
											<a href="<?php echo $child->url() ?>" class="animated">
												<?php echo $child->text() ?>
											</a>
										</li>
									<?php endforeach ?>
								</ul>
						</li>
						<?php endif ?>
					
						<?php if($nav->children()->isEmpty()): ?>
						<li class="nav-item mx-md-3">
							<a href="<?php echo $nav->url(); ?>" <?php e($nav->isOpen(), 'aria-current') ?> class="animated ">
								<?php echo $nav->text() ?>
							</a>
						</li>
						<?php endif ?>
			<?php endforeach ?>
				</ul>
						<?php endif ?>
			<!-- Search Bar -->
			<?php snippet('search-bar') ?>
		</div>
	</div>
</nav>

	