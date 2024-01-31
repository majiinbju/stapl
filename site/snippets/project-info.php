<?php
		$detect = $page->detect();
		$isMobile = $detect->isMobile();
		$isTablet = $detect->isTablet();
		$isLargeTablet = $detect->isTablet() && !$detect->is('iPhone') && !$detect->is('iPadMini');
		$isMobileOrTablet = $isMobile || $isTablet || $isLargeTablet;
?>

<?php if ($isMobileOrTablet): ?>
		<li class="li project-info">
				<div class="d-flex flex-lg-column flex-sm-row align-items-md-start align-items-lg-end mt-3">
						<span class="icon">
								<?php if ($project->icon()->isNotEmpty()): ?>
										<?php if ($icon = $project->icon()): ?>
												<img src="<?= $icon->crop(50)->url() ?>" loading="lazy" alt="<?= $icon->alt() ?>">
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
								<img src="<?= $cover->crop(1280, 800)->url() ?>" loading="lazy" alt="<?= $cover->alt() ?>">
						<?php endif ?>
						<ul class="tags tagsMobile">
								<!-- Tags content for mobile/tablet -->
								
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
											<span class="tag"><?= $project->Builtarea() ?>
										</span>
										<?php endif ?>
								
								<!-- Add other tag sections as needed -->
						</ul>
						<?php if ($project->text()->isNotEmpty()) : ?>
								<figcaption class="hidden summary">
										<?= $project->text()->kirbytextinline() ?>
								</figcaption>
						<?php endif ?>
				</figure>
		</li>
<?php else: ?>
		<li class="li project-info">
				<?php snippet('tags', compact('project')) ?>
				<!-- Project Cover -->
				<figure class="d-flex mx-1">
						<?php if ($cover = $project->cover()): ?>
								<img src="<?= $cover->crop(1280, 800)->url() ?>" loading="lazy" alt="<?= $cover->alt() ?>">
						<?php endif ?>
						<?php if ($project->text()->isNotEmpty()) : ?>
								<figcaption class="hidden summary">
										<?= $project->text()->kirbytextinline() ?>
								</figcaption>
						<?php endif ?>
				</figure>
		</li>
<?php endif ?>