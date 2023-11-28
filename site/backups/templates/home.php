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
		<section class="project">
			<div class="carousel">
				<ul class="ul draggable">
					<!-- Project Tags -->
					<li class="li project-info">
						<?php snippet('tags', compact('project')) ?>
						<!-- Project Cover -->
						<figure class="d-flex">
							<?php if ($cover = $project->cover()): ?>
							<img src="<?= $cover->crop(1280, 800)->url() ?>" alt="<?= $cover->alt() ?>">
							<?php endif ?>
							<?php if ($project->text()->isNotEmpty()) : ?>
							<figcaption class="hidden summary">
								<?= $project->text() ?>
							</figcaption>
							<?php endif ?>
						</figure>
					</li>
					<!-- End of Project Tags -->
	
					<!-- Project Images -->
					<?php foreach ($project->images()->offset(1) as $image) : ?>
					<li class="li hidden">
						<?php if ($image->caption()->isNotEmpty()) : ?>
						<figure class="d-flex cover-image">
							<img src="<?= $image->crop(1280, 800)->url() ?>" alt="<?= $image->alt() ?>" />
							<figcaption class="ms-5 hidden summary">
								<?= $image->caption()->smartypants() ?>
							</figcaption>
						</figure>
						<?php else: ?>
						<figure class="d-flex mx-2">
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
</div>



<?php snippet('footer') ?>