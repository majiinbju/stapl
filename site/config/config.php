<?php 

return [
	'debug'  => true,
	'panel' =>[
		'views' => [
			 'categories' => [
				 'props' => [
					 'title' => 'Projects by Category'
				 ]
			 ]
		 ]
	  ],
	'routes' => [
		[
			'pattern' => 'filter(:any)',
			'action'  => function ($typology) {
				// Redirect to the projects page with the filter parameter
				return go('projects', ['filter' => $typology]);
			}
		]
	]
	 
];