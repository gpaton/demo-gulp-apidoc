<?php

namespace AppBundle\Controller;

class DefaultController
{
	public function getUserAction()
	{
		return json_encode([
			'id' => 1,
			'username' => 'user',
			'password' => 'password'
		]);
	}
}