<!-- Project Images -->
<?php foreach ($project->images()->offset(1) as $image) : ?>
<li class="li hidden">
<?php if ($image->caption()->isNotEmpty()) : ?>
	<figure class="">
		<img src="<?= $image->resize(1080)->url() ?>" alt="<?= $image->alt() ?>" class="w-50" />
		<figcaption class="summary">
			<?= $image->caption()->smartypants() ?>
		</figcaption>
	</figure>
	<?php else: ?>
	<figure class="">
		<img src="<?= $image->resize(1080)->url() ?>" alt="<?= $image->alt() ?>" />
	</figure>
	<?php endif ?>
</li>
<?php endforeach ?>
<!-- End of Project Images -->
