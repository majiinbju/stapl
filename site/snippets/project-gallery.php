<?php foreach ($project->images()->offset(1) as $image): ?>
<li class="li hidden">
	<?php if ($image->caption()->isNotEmpty()): ?>
	<figure class="d-flex mx-3">
		<img class="project-img" src="<?= $image
    ->resize(null, 1080)
    ->url() ?>" alt="<?= $image->alt() ?>" loading="lazy" />
		<figcaption class="ms-5 hidden summary">
			<?= $image->caption()->kirbytextinline() ?>
		</figcaption>
	</figure>
	<?php else: ?>
	<figure class="d-flex mx-3">
		<img class="project-img" src="<?= $image
    ->resize(null, 1080)
    ->url() ?>" alt="<?= $image->alt() ?>" loading="lazy" />
	</figure>
	<?php endif; ?>
</li>
<?php endforeach; ?>