<?php
$detect = $page->detect();
$isMobile = $detect->isMobile();
$isTablet = $detect->isTablet();
$isDesktop = !$isMobile && !$isTablet;
?>

<?php if ($isMobile): ?>
		<li class="li project-info">
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
				<figure class="d-flex">
						<?php if ($cover = $project->cover()): ?>
								<img src="<?= $cover->crop(1280, 800)->url() ?>" alt="<?= $cover->alt() ?>">
						<?php endif ?>
						<ul class="tags tagsMobile">
							<?php if ($project->typology()->isNotEmpty()): ?>
							<li class="d-flex flex-column align-items-start">
								<span class="sub-heading">Typology</span>
								<span class="tag"><?= $project->typology() ?></span>
							</li>
							<?php endif ?>
							<?php if ($project->Plotarea()->isNotEmpty()): ?>
							<li class="d-flex flex-column align-items-start">
								<span class="sub-heading">Plot Area</span>
								<span class="tag"><?= $project->Plotarea() ?></span>
							</li>
							<?php endif ?>
							<?php if ($project->Builtarea()->isNotEmpty()): ?>
							<li class="d-flex flex-column align-items-start">
								<span class="sub-heading">Built Area</span>
								<span class="tag"><?= $project->Builtarea() ?></span>
							</li>
							<?php endif ?>
							<?php if ($project->levels()->isNotEmpty()): ?>
							<li class="d-flex flex-column align-items-start">
								<span class="sub-heading">Levels</span>
								<span class="tag"><?= $project->levels() ?></span>
							</li>
							<?php endif ?>
							<?php if ($project->projectStatus()->isNotEmpty()): ?>
							<li class="d-flex flex-column align-items-start">
								<span class="sub-heading">Status</span>
								<span class="tag"><?= $project->projectStatus() ?></span>
							</li>
							<?php endif ?>
							<?php if ($project->year()->isNotEmpty()): ?>
							<li class="d-flex flex-column align-items-start">
								<span class="sub-heading">Design & Construction</span>
								<span class="tag"><?= $project->year() ?></span>
							</li>
							<?php endif ?>
						</ul>
						<?php if ($project->text()->isNotEmpty()) : ?>
								<figcaption class="hidden summary">
										<?= $project->text() ?>
								</figcaption>
						<?php endif ?>
						
				</figure>
		</li>
<?php else: ?>
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
<?php endif ?>
