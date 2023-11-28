<ul style="list-style-type: none">
	<?php foreach ($projectsPage->children() as $project): ?>
	<li class="d-flex justify-center section container">
		<div class="carousel">
			<ul class="ul draggable">
				<!-- Project Tags -->
				<?php snippet('project-info', compact('project')) ?>
				<?php snippet('project-gallery', compact('project')) ?>
			</ul>
		</div>
	</li>
	<?php endforeach ?>
</ul>
