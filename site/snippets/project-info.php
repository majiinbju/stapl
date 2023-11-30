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