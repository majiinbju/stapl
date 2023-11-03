<?php

return function ($site) {

  $query   = get('q');
  $results = $site->search($query, 'title|text');

  return [
	'query'   => $query,
	'results' => $results,
  ];

};