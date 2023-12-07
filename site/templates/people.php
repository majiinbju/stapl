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
					<?= $person->name() ?>
				</span>
				<span class="people-tag">
					<?= $person->position() ?>
				</span>
				</a>
				<div class="mt-3 collapse" id="collapse<?= $person->slug() ?>" style="transition: all 0.75s ease-in-out;">
					
					<img src="<?= $person->image()->url() ?>" class="w-100"/>
					<p class="person-body mt-3">
						<?= $person->description() ?>
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
							<?= $person->name() ?></span>
					</div>
					<span class="people-tag">
						<?= $person->position() ?>
					</span>
				</a>
				<p class="person-body mt-3 collapse" id="collapse<?= $person->slug() ?>" style="transition: all 0.75s ease-in-out;">
					<?= $person->description() ?>
				</p>
			</div>
			<!-- Image -->
			<div class="col-4 d-flex justify-content-end absolute">
				<img src="<?= $person->image()->resize(350)->url() ?>" />
			</div>
		</li>
		<?php endforeach ?>
	</ul>
</div>
<?php endif ?>

<?php snippet('footer') ?>