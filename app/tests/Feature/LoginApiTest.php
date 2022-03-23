<?php

namespace Tests\Feature;

use App\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;

class LoginApiTest extends TestCase
{
  use RefreshDatabase;

    public function setUp(): void
    {
      parent::setUp();
      $this->user = factory(User::class)->create();
    }

    /**
     * A basic feature test example.
     *
     * @return void
     */

    public function testLoginPost()
    {
        $response = $this->json('POST', route('login'), [
          'email' => $this->user->email,
          'password' => 'password',
        ]);

        $response
          ->assertStatus(200)
          ->assertJson(['name' => $this->user->name]);

        $this->assertAuthenticatedAs($this->user);
    }
}
