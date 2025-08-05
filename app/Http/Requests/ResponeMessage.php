<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ResponeMessage extends FormRequest
{
    
    public function authorize(): bool
    {
        return false;
    }

    
    public function rules(): array
    {
        return [
            //
        ];
    }
}
