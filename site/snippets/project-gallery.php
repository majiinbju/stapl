<?php foreach ($project->images()->offset(1) as $image): ?>
<li class="li hidden">
	<?php if ($image->caption()->isNotEmpty()): ?>
	<figure class="d-flex">
		<img class="project-img" src="<?= $image
    ->crop(1280, 800)
    ->url() ?>" alt="<?= $image->alt() ?>" loading="lazy" />
		<figcaption class="ms-5 hidden summary">
			<?= $image->caption()->smartypants() ?>
		</figcaption>
	</figure>
	<?php else: ?>
	<figure class="d-flex mx-2">
		<img class="project-img" src="<?= $image
    ->crop(1280, 800)
    ->url() ?>" alt="<?= $image->alt() ?>" loading="lazy" />
	</figure>
	<?php endif; ?>
</li>
<?php endforeach; ?>