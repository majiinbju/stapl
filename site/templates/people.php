<?php
	$detect = $page->detect();
	$isMobile = $detect->isMobile();
	$isTablet = $detect->isTablet();
	$isLargeTablet = $detect->isTablet() && !$detect->is('iPhone') && !$detect->is('iPadMini');
	$isMobileOrTablet = $isMobile || $isTablet || $isLargeTablet;
?>
<?php snippet('header') ?>

<main id="top">

	<?php if ($isMobileOrTablet): ?>
	<div class="container col-11">
		<h1 class="pageTitle mb-5"><?= $page->title() ?></h1>
		<span class="people-tag mb-5">
			Partners
		</span>
		<!-- List of People -->
		<ul class="people-list mt-5">
			<?php foreach ($page->children() as $person): ?>
			<!-- Person -->
			<li class="d-flex flex-column person">
				<a class="d-flex justify-content-between" data-bs-toggle="collapse" href="#collapse<?= $person->slug() ?>" role="button" aria-expanded="false" aria-controls="collapsePerson">
					<span class="person-name">
						<?php if ($person->name()->isNotEmpty()): ?>
						<?= $person->name() ?>
						<?php endif ?>
					</span>
					<!-- <span class="people-tag">
						<?php if ($person->position()->isNotEmpty()): ?>
						<?= $person->position() ?>
						<?php endif ?>
					</span> -->
				</a>
				<div class="mt-3 collapse" id="collapse<?= $person->slug() ?>" style="transition: all 0.75s ease-in-out;">

					<?php if ($person->image()->exists()): ?>
					<img src="<?= $person->image()->url() ?>" class="w-100" />
					<?php endif ?>
					<?php if ($person->description()->isNotEmpty()): ?>
					<p class="person-body mt-3">
						<?= $person->description()->kirbytextinline() ?>
					</p>
					<?php endif ?>
				</div>
			</li>
			<?php endforeach ?>
		</ul>
	</div>

	<!-- PC -->
	<?php else: ?>
	<div class="container col-12">
		<h1 class="pageTitle mb-5"><?= $page->title() ?></h1>
		<span class="people-tag mb-5">
			Partners
		</span>
		<!-- List of People -->
		<ul class="people-list mt-5">
			<?php foreach ($page->children() as $person): ?>
			<li class="d-flex justify-content-between mb-3 person align-items-start">
				<ul class="people-list">
					<li class="person-anchor">
						<!-- Column for name and description -->
						<div class="d-flex flex-column col-8">
							<a class="d-flex justify-content-between" data-bs-toggle="collapse" href="#collapse<?= $person->slug() ?>" role="button" aria-expanded="false" aria-controls="collapseExample">
								<div class="d-flex align-content-center">
									<span class="person-name">
										<?php if ($person->name()->isNotEmpty()): ?>
										<?= $person->name() ?>
										<?php endif ?>
									</span>
								</div>
								<span class="people-tag">
									<?php if ($person->position()->isNotEmpty()): ?>
									<?= $person->position() ?>
									<?php endif ?>
								</span>
							</a>
							<?php if ($person->description()->isNotEmpty()): ?>
							<p class="person-body mt-3 collapse" id="collapse<?= $person->slug() ?>" style="transition: all 0.5s ease-in-out;">
								<?= $person->description()->kirbytextinline() ?>
							</p>
							<?php endif ?>
						</div>
					</li>
					<li class="img-anchor">
						<!-- Image -->
						<div class="col-4 d-flex justify-content-end position-fixed person-img">
							<?php if ($person->image()->isNotEmpty() && $person->image()->exists()): ?>
							<img src="<?= $person->image()->url() ?>" />
							<?php endif ?>
						</div>
					</li>
				</ul>
			</li>
			<?php endforeach ?>
		</ul>
	</div>
	<div class="my-5 py-5 container d-flex justify-content-center">
		<a href="#top" class="backToTop">Back to Top</a>
	</div>
	<?php endif ?>
</main>

<?php snippet('footer') ?>