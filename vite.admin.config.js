import { defineConfig } from 'vite'
import laravel, { refreshPaths } from 'laravel-vite-plugin'

/** @type {import('vite').UserConfig} */
export default defineConfig({
    plugins: [
        laravel({
            hotFile: 'public/admin.hot',
            buildDirectory: 'admin',
            input: [
                'resources/css/admin.css',
                //'resources/js/app.js',
            ],
            refresh: [
                ...refreshPaths,
                'app/Filament/**',
                'app/Forms/Components/**',
                'app/Livewire/**',
                'app/Infolists/Components/**',
                'app/Providers/Filament/**',
                'app/Tables/Columns/**',
            ],
        }),
    ],
})
