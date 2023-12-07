<?php snippet('header') ?>
<?php
$filterBy = param('filter');
$projectsPage = page('projects');
$projects = $projectsPage
		->children()
		->listed();

if (!empty($filterBy)) {
		$projects = $projects->filter(function ($child) use ($filterBy) {
				$typology = $child->typology()->toString();
				return $filterBy === $typology;
		});
}
?>

<div class="wrapper">
	<div class="container-fluid projects p-0">
		<?php foreach ($projectsPage->children() as $project): ?>
			<?php snippet('project', compact('project')) ?>
		<?php endforeach ?>
	</div>
</div>



<?php snippet('footer') ?>