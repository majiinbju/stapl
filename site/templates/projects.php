<?php snippet("header"); ?>
<?php
$filterBy = param("filter");
$projectsPage = page("projects");
$projects = $projectsPage->children()->listed();
if (!empty($filterBy)) {
  $projects = $projects->filterBy("typology", $filterBy);
}
?>

<div class="wrapper">
	<div class="container-fluid projects p-0">
		<?php foreach ($projects as $project): ?>
			<?php snippet("project", compact("project")); ?>
		<?php endforeach; ?>
	</div>
</div>



<?php snippet("footer"); ?>