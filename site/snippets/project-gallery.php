<!-- Project Images -->
<?php foreach ($project->images()->offset(1) as $image) : ?>
<li class="min-w-fit hidden">
	<?php if ($image->caption()->isNotEmpty()) : ?>
	<figure class="flex card">
		<img src="<?= $image->crop(900, 900)->url() ?>" class="" alt="<?= $image->alt() ?>" />
		<figcaption class="px-10 text-sm w-100">
			<?= $image->caption()->smartypants() ?>
		</figcaption>
	</figure>
	<?php else: ?>
	<figure class="img">
		<img src="<?= $image->crop(900, 900)->url() ?>" class="img" alt="<?= $image->alt() ?>" />
	</figure>
	<?php endif ?>
</li>
<!-- End of Project Images -->
<?php endforeach ?>