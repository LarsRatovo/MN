<?php

namespace App\Http\Middleware;

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UsersController;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class TokenFilter
{
    /**
     * Handle an incoming request.
     *
     * @param \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response) $next
     * @throws \Exception
     */
    public function handle(Request $request, Closure $next): Response
    {
        if(!UsersController::check($request)){
            return redirect("/");
        }
        return $next($request);
    }
}
