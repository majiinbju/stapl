<?php snippet('header') ?>
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

<div class="wrapper">
	<div class="container-fluid projects p-0">
		<?php foreach ($projectsPage->children() as $project): ?>
			<?php snippet('project', compact('project')) ?>
		<?php endforeach ?>
	</div>
</div>



<?php snippet('footer') ?>