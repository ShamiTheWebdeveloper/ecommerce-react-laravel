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
        Schema::create('products', function (Blueprint $table) {

            $table->id();
            $table->integer('status')->default(1);
            $table->bigInteger('sku')->unique();
            $table->string('title')->default('');
            $table->text('description')->nullable();
            $table->text('overview')->nullable();
            $table->string('unit')->nullable();
            $table->string('badge')->nullable();
            $table->string('meta_title')->nullable();
            $table->text('meta_description')->nullable();

            $table->text('tags')->nullable();
            $table->float('selling')->default(0);
            $table->float('purchased')->default(0);
            $table->float('offered')->nullable();
            $table->string('image')->nullable();

            $table->string('video')->nullable();
            $table->string('video_thumb')->nullable();


            $table->bigInteger('category_id')->unsigned()->default(0);
            $table->integer('subcategory_id')->nullable();

            $table->tinyInteger('warranty')->nullable();
            $table->tinyInteger('refundable')->nullable();
            $table->integer('tax_rule_id')->unsigned()->default(0);
            $table->integer('shipping_rule_id')->unsigned()->default(0);
            $table->integer('review_count')->default(0);
            $table->integer('rating')->default(0);

            $table->string('bundle_deal_id')->nullable();


            $table->integer('brand_id')->nullable();
            $table->timestamps();
            $table->integer('admin_id')->unsigned();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
