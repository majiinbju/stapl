<?php
$detect = $page->detect();
$isMobile = $detect->isMobile();
$isTablet = $detect->isTablet();
$isDesktop = !$isMobile && !$isTablet;
?>


<?php snippet('header') ?>


<!-- Mobile -->
<?php if ($isMobile): ?>
	<div class="container col-11 me-0">
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
				<span class="people-tag">
				<?php if ($person->position()->isNotEmpty()): ?>
					<?= $person->position() ?>
				<?php endif ?>
				</span>
				</a>
				<div class="mt-3 collapse" id="collapse<?= $person->slug() ?>" style="transition: all 0.75s ease-in-out;">
					
				<?php if ($person->image()->isNotEmpty()): ?>
					<img src="<?= $person->image()->url() ?>" class="w-100"/>
				<?php endif ?>
					<p class="person-body mt-3">
				<?php if ($person->description()->isNotEmpty()): ?>
						<?= $person->description() ?>
				<?php endif ?>
					</p>	
				</div>			
			</li>
			<?php endforeach ?>
		</ul>
	</div>

<!-- PC -->
<?php else: ?>
<div class="container col-9 me-0">
	<h1 class="pageTitle mb-5"><?= $page->title() ?></h1>
	<span class="people-tag mb-5">
		Partners
	</span>
	<!-- List of People -->
	<ul class="people-list mt-5">
		<?php foreach ($page->children() as $person): ?>
		<li class="d-flex justify-content-between mb-3 person align-items-start">
			<!-- Column for name and description -->
			<div class="d-flex flex-column col-6">
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
				<p class="person-body mt-3 collapse" id="collapse<?= $person->slug() ?>" style="transition: all 0.75s ease-in-out;">
					<?php if ($person->description()->isNotEmpty()): ?>
						<?= $person->description() ?>
					<?php endif ?>
				</p>
			</div>
			<!-- Image -->
			<div class="col-4 d-flex justify-content-end absolute">
				<?php if ($person->image()->isNotEmpty()): ?>
					<img src="<?= $person->image()->resize(350)->url() ?>" />
				<?php endif ?>
			</div>
		</li>
		<?php endforeach ?>
	</ul>
</div>
<?php endif ?>

<?php snippet('footer') ?>