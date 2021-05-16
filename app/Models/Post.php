<?php

namespace App\Models;


class Post extends \Illuminate\Database\Eloquent\Model
{
    protected $primaryKey = 'ID';
    protected $table = 'posts';
    const CREATED_AT = 'post_date';
    const UPDATED_AT = 'post_modified';

    protected $fillable = [
        'ID',
        'post_author',
        'post_date',
        'post_date_gmt',
        'post_content',
        'post_title',
        'post_excerpt',
        'post_status',
        'comment_status',
        'ping_status',
        'post_password',
        'post_name',
        'to_ping',
        'pinged',
        'post_modified',
        'post_modified_gmt',
        'post_content_filtered',
        'post_parent',
        'guid',
        'menu_order',
        'post_type',
        'post_mime_type',
        'comment_count',
    ];
    
    public function scopeHasMeta($query) {
        return $query;
    }

    public function scopeWhereMeta($query) {
        return $query;
    }
}