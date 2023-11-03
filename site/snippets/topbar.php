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
<header class="flex justify-center z-10 header align-middle sticky">
	<a href="#" class="text-xl w-1/12 text-white opacity-0"><?= $site->title() ?></a>
	<nav class="nav bg-red-400">
		<ul class="flex text-sm justify-around uppercase">
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
<?php snippet('search-bar') ?>
</header>
