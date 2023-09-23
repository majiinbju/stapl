<?php snippet('header') ?>

<div class="container mx-auto my-4 flex justify-center min-w-full">
	<?php if ($projectsPage = page('projects')): ?>
	<ul>
		<?php foreach ($projectsPage->children()->listed() as $project): ?>
		<li class="my-5">
			<a href="" class="">
				<figure class="flex flex-col justify-center">
					<?php snippet('project-info') ?>
					<?php snippet('project-gallery') ?>
				</figure>
			</a>
		</li>
		<?php endforeach ?>
	</ul>
	<?php endif ?>
</div>

<?php snippet('footer') ?>