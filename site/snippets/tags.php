<!-- Project Tags -->
<div class="d-flex flex-column align-items-md-start align-items-lg-end tagContainer mx-md-0 mx-lg-5">
	<!-- Project Information -->
		<div class="d-flex flex-lg-column flex-sm-row align-items-md-start align-items-lg-end">
			<span class="icon">
				<?php if ($project->icon()->isNotEmpty()): ?>
					<?php if ($icon = $project->icon()): ?>
						<img src="<?= $icon->crop(50)->url() ?>" alt="<?= $icon->alt() ?>">
					<?php endif ?>
				<?php endif ?>
			</span>
			<div class="d-flex flex-column project-details align-items-md-start align-items-lg-end">
				<span class="project-title"><?= $project->title()->esc() ?></span>
				<span class="project-location"><?= $project->location() ?></span>
			</div>
		</div>
		<div class="hidden">
			
			<ul class="tags">
				<?php if ($project->typology()->isNotEmpty()): ?>
				<li class="d-flex flex-column align-items-end">
					<span class="sub-heading">Typology</span>
					<span class="tag"><?= $project->typology() ?></span>
				</li>
				<?php endif ?>
				<?php if ($project->Plotarea()->isNotEmpty()): ?>
				<li class="d-flex flex-column align-items-end">
					<span class="sub-heading">Plot Area</span>
					<span class="tag"><?= $project->Plotarea() ?></span>
				</li>
				<?php endif ?>
				<?php if ($project->Builtarea()->isNotEmpty()): ?>
				<li class="d-flex flex-column align-items-end">
					<span class="sub-heading">Built Area</span>
					<span class="tag"><?= $project->Builtarea() ?></span>
				</li>
				<?php endif ?>
				<?php if ($project->levels()->isNotEmpty()): ?>
				<li class="d-flex flex-column align-items-end">
					<span class="sub-heading">Levels</span>
					<span class="tag"><?= $project->levels() ?></span>
				</li>
				<?php endif ?>
				<?php if ($project->projectStatus()->isNotEmpty()): ?>
				<li class="d-flex flex-column align-items-end">
					<span class="sub-heading">Status</span>
					<span class="tag"><?= $project->projectStatus() ?></span>
				</li>
				<?php endif ?>
				<?php if ($project->year()->isNotEmpty()): ?>
				<li class="d-flex flex-column align-items-end">
					<span class="sub-heading">Design & Construction</span>
					<span class="tag"><?= $project->year() ?></span>
				</li>
				<?php endif ?>
			</ul>
		</div>
</div>