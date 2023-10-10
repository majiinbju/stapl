<?php if ($projectsPage = page('projects')): ?>
<?php foreach ($projectsPage->children()->listed() as $project): ?>
<div class="slider-container ">
	<ul class="inner-slider">
	<div class="min-w-max min-h-fit px-10">
	</div>
	<?php foreach ($project->images() as $image) : ?>
		<li class="min-w-fit">
			
				
				
			<?php if ($image->caption()->isNotEmpty()) : ?>
			<figure class="flex card">
				
			<img src="<?= $image->crop(500, 500)->url() ?>" class="" alt="<?= $image->alt() ?>" />
			
			
			
			<figcaption class="px-10 text-sm w-100">
				<?= $image->caption()->smartypants() ?>
			</figcaption>
				
			</figure>		
			<?php else: ?>
					<figure>
						
					<img src="<?= $image->crop(500, 500)->url() ?>" class="" alt="<?= $image->alt() ?>" />
					
						
					</figure>
			<?php endif ?>
				
		
		</li>
	<?php endforeach ?>
	
	<?php endforeach ?>
	</ul>
</div>
<?php endif ?>