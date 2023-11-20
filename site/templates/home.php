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

<div class="container-fluid projects">
	<?php foreach ($projectsPage->children() as $project): ?>
	<section class="project">
		<div class="carousel">
			<ul class="ul draggable">
				<!-- Project Tags -->
				<li class="li d-flex project-info">
					<?php snippet('tags', compact('project')) ?>
					<!-- Project Cover -->
					<figure class="d-flex w-100">
						<?php if ($cover = $project->cover()): ?>
						<img src="<?= $cover->crop(1280, 800)->url() ?>" alt="<?= $cover->alt() ?>">
						<?php endif ?>
						<figcaption class="hidden mx-5 summary">
							<?= $project->text() ?>
						</figcaption>
					</figure>
				</li>
				<!-- End of Project Tags -->

				<!-- Project Images -->
				<?php foreach ($project->images()->offset(1) as $image) : ?>
				<li class="li hidden">
					<?php if ($image->caption()->isNotEmpty()) : ?>
					<figure class="d-flex w-100">
						<img src="<?= $image->crop(1280, 800)->url() ?>" alt="<?= $image->alt() ?>" />
						<figcaption class="ms-5 summary">
							<?= $image->caption()->smartypants() ?>
						</figcaption>
					</figure>
					<?php else: ?>
					<figure class="w-100 mx-2">
						<img src="<?= $image->resize(null, 800)->url() ?>" alt="<?= $image->alt() ?>" />
					</figure>
					<?php endif ?>
				</li>
				<?php endforeach ?>
				<!-- End of Project Images -->
			</ul>
		</div>
	</section>
	<?php endforeach ?>
</div>



<?php snippet('footer') ?>