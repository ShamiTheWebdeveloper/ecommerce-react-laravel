<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {

            $table->id();
            $table->integer('status')->default(1);
            $table->string('name')->default('');
            $table->string('email')->nullable()->unique();
            $table->text('password');
            $table->integer('code')->nullable();
            $table->string('google_id')->nullable();
            $table->string('facebook_id')->nullable();
            $table->boolean('verified')->default(false);
            $table->boolean('remember_token')->default(false);
            $table->integer('default_address')->nullable();
            $table->string('phone')->nullable();
            $table->timestamps();
        });

    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
