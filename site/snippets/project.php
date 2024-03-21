<?php
		$detect = $page->detect();
		$isMobile = $detect->isMobile();
		$isTablet = $detect->isTablet();
		$isLargeTablet = $detect->isTablet() && !$detect->is('iPhone') && !$detect->is('iPadMini');
		$isMobileOrTablet = $isMobile || $isTablet || $isLargeTablet;
?>


<?php if ($isMobile): ?>
	<section class="project">
		<div class="carousel">
			<ul class="ul draggable">
				<!-- Project Tags -->
				<?php snippet('project-info', compact('project')) ?>
				<!-- End of Project Tags -->
	
				<!-- Project Images -->
				<?php snippet('project-gallery', compact('project')) ?>
				<!-- End of Project Images -->
			</ul>
		</div>
	</section>
<?php else: ?>
	<section class="project">
		<div class="carousel">
			<ul class="ul draggable">
				<!-- Project Tags -->
				<?php snippet('project-info', compact('project')) ?>
				<!-- End of Project Tags -->
	
				<!-- Project Images -->
				<?php snippet('project-gallery', compact('project')) ?>
				<!-- End of Project Images -->
			</ul>
		</div>
	</section>
<?php endif ?>