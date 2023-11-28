

	<figure class="d-flex justify-between">
		<?php snippet('tags', compact('project')) ?>
		<img src="<?= $cover->resize(600)->url() ?>" alt="<?= $cover->alt() ?>">
		<figcaption class="summary hidden">
			<?= $project->text() ?>
		</figcaption>
	</figure>