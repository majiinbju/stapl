<?php
		$detect = $page->detect();
		$isMobile = $detect->isMobile();
		$isTablet = $detect->isTablet();
		$isLargeTablet = $detect->isTablet() && !$detect->is('iPhone') && !$detect->is('iPadMini');
		$isMobileOrTablet = $isMobile || $isTablet || $isLargeTablet;
?>

<?php if ($isMobile): ?>
<li class="li project-info" id="projectInfo">

	<figure class="d-flex">
		<?php if ($cover = $project->cover()): ?>
		<img class="cover-img" src="<?= $cover->crop(1200, 800)->url() ?>" loading="lazy" alt="<?= $cover->alt() ?>">
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
			</li>
			<?php endif ?>

			<!-- Add other tag sections as needed -->
		</ul>
		<?php if ($project->text()->isNotEmpty()) : ?>
		<figcaption class="hidden summary me-3">
			<?= $project->text()->kirbytextinline() ?>
		</figcaption>
		<?php endif ?>
	</figure>
	<div class="d-flex flex-lg-column flex-sm-row align-items-md-start align-items-lg-end my-3">
		<span class="icon">
				<?php if ($icon = $project->icon()): ?>
						<img class="icon-image" src="<?= $icon->crop(36)->url() ?>" loading="lazy" alt="<?= $icon->alt() ?>">
				<?php endif ?>
		</span>
		<div class="d-flex flex-column project-details align-items-md-start align-items-lg-end">
			<span class="project-title"><?= $project->title()->esc() ?></span>
			<span class="project-location"><?= $project->location() ?></span>
		</div>
	</div>
</li>
<?php else: ?>
<li class="li project-info">
	<?php snippet('tags', compact('project')) ?>
	<!-- Project Cover -->
	<figure class="d-flex mx-3">
		<?php if ($cover = $project->cover()): ?>
		<img class="cover-img" src="<?= $cover->crop(1920, 1080)->url() ?>" loading="lazy" alt="<?= $cover->alt() ?>">
		<?php endif ?>
		<?php if ($project->text()->isNotEmpty()) : ?>
		<figcaption class="hidden mx-md-0 mx-lg-4 summary">
			<?= $project->text()->kirbytextinline() ?>
		</figcaption>
		<?php endif ?>
	</figure>
</li>
<?php endif ?>