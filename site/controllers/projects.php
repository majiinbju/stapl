<?php

return function ($site, $pages, $page) {
	$categories = [];
	$projects = $page->children()->listed();

	foreach ($projects as $project) {
		$projectCategories = $project->category()->split(',');
		foreach ($projectCategories as $category) {
			if (!isset($categories[$category])) {
				$categories[$category] = [];
			}
			$categories[$category][] = $project;
		}
	}

	return [
		'categories' => $categories
	];
};