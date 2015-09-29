# Demo for gulp-apidoc

## Introduction

This demo demonstrates [issue #7](https://github.com/ayhankuru/gulp-apidoc/issues/7) described on [gulp-apidoc](https://github.com/ayhankuru/gulp-apidoc).

## How to test

1. Clone this repository
2. Execute command `npm install`
3. Execute command `gulp`

## Expected result

	[13:51:53] Starting 'apidoc'...
	info: Nothing to do.
	[13:51:53] 'apidoc' errored after 37 ms
	[13:51:53] Error in plugin 'gulp-apidoc'
	Message:
	    Execution terminated (set " debug: true " in gulpfile.js for details.

## How to make it work

You need to add a DocBlock with `apidoc` comments in the file `src/AppBundle/Controller/DefaultController.php`, and the gulp task won't crash.

For instance :

	<?php

	namespace AppBundle\Controller;

	class DefaultController
	{
		/**
		 * @apiGroup User
		 * @apiName GetUser
		 * @api {get} /user/:id Users unique ID.
		 * @apiDescription This is the description.
		 */
		public function getUserAction()
		{
			return json_encode([
				'id' => 1,
				'username' => 'user',
				'password' => 'password'
			]);
		}
	}

