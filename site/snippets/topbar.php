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
	<nav>
		<ul class="top-header">
			<li>
				<a href="<?= $projects->url() ?>?filter=Commercial">Commercial</a>
			</li>
			<li>
				<a href="<?= $projects->url() ?>?filter=Residential">Residential</a>
			</li>
			<li>
				<a href="<?= $projects->url() ?>?filter=Mixed-Use">Mixed Use</a>
			</li>
			<li>
				<a href="<?= $projects->url() ?>?filter=Retail">Retail</a>
			</li>
		</ul>
	</nav>
