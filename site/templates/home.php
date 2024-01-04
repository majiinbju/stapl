<?php
$filterBy = param("filter");
$projectsPage = page("projects");
$projects = $projectsPage->children()->listed();
if (!empty($filterBy)) {
	$projects = $projects->filterBy("typology", $filterBy);
}
?>

<?php snippet("header"); ?>
<main>
	<div class="wrapper">
		<div class="container-fluid projects p-0">
			<?php foreach ($projects as $project): ?>
			<?php snippet("project", compact("project")); ?>
			<?php endforeach; ?>
		</div>
	</div>
	<div class="my-5 py-5 container d-flex justify-content-center">
		<a href="#top" class="backToTop">Back to Top</a>
	</div>
</main>
<?php snippet("footer"); ?>