<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AppController extends Controller
{
    /**
     * Lista todas as rotas de API
     */
    public function index() {
        $routes = [];

        foreach(\Route::getRoutes() as $route) {
            $routes[] = [
                'methods' => $route->methods(),
                'uri' => $route->uri(),
            ];
        }

        return $routes;
    }


    /**
     * Upload geral
     */
    public function upload($request) {
        $folder = $request->input('folder', 'uploads');
        $file = $request->file('file');
        
        $info = pathinfo($file->getClientOriginalName());
        $filename = \Str::slug($info['filename'], '-') .'.'. $info['extension'];
        $path = $file->storeAs($folder, $filename, 'public');

        return [
            'path' => "storage/{$path}",
            'name' => $filename,
            'ext' => $info['extension'],
            'size' => Storage::disk('public')->size($path),
            'mime' => Storage::disk('public')->getMimeType($path),
            'url' => Storage::disk('public')->url($path),
        ];
    }

    public function test() {
        return \App\Models\User::find(1)->notify([
            'title' => 'Teste',
            'body' => 'Testando notificação',
        ]);
    }

    public function dashboard() {
        $data = [];

        $data['counts'] = [];

        $data['counts'][] = [
            'title' => 'Projetos criados',
            'total' => \App\Models\Tevep::count(),
        ];

        $data['counts'][] = [
            'title' => 'Usuários cadastrados',
            'total' => \App\Models\User::count(),
        ];

        return $data;
    }


    public function getPosts() {
        // $input = array_merge([
        //     'post_type' => 'post',
        // ], $request->all());

        // return \App\Models\Post::paginate(15);
        return \Corcel\Model\Post::type('page')->paginate(15);
    }

    public function getPost(Request $request) {
        return \App\Models\Post::where('post_name', $request->input('name'))->first();
    }
}