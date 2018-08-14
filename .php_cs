<?php

/*
 * This file is part of "Hiroto-K.github.io".
 *
 * (c) Hiroto Kitazawa <hiro.yo.yo1610@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

use PhpCsFixer\Config;
use PhpCsFixer\Finder;

$header = <<<'EOS'
This file is part of "hiroto-k.github.io".

(c) Hiroto Kitazawa <hiro.yo.yo1610@gmail.com>

For the full copyright and license information, please view the LICENSE
file that was distributed with this source code.
EOS;

$rules = [
    '@PSR2' => true,
    '@Symfony' => true,

    'array_syntax' => [
        'syntax' => 'short',
    ],
    'binary_operator_spaces' => true,
    'combine_consecutive_issets' => true,
    'combine_consecutive_unsets' => true,
    'compact_nullable_typehint' => true,
    'encoding' => true,
    'explicit_indirect_variable' => true,
    'explicit_string_variable' => true,
    'header_comment' => [
        'header' => $header,
    ],
    'linebreak_after_opening_tag' => true,
    'list_syntax' => [
        'syntax' => 'long',
    ],
    'multiline_whitespace_before_semicolons' => [
        'strategy' => 'no_multi_line',
    ],
    'no_short_echo_tag' => true,
    'ordered_imports' => true,
    'phpdoc_align' => [
        'align' => 'left',
    ],
    'phpdoc_no_package' => false,
    'return_type_declaration' => [
        'space_before' => 'one',
    ],
    'single_line_comment_style' => [
        'comment_types' => ['hash'],
    ],
];
$finder = Finder::create()
    ->ignoreDotFiles(false)
    ->name('.php_cs')
    ->exclude([
        'node_modules',
        'vendor',
    ])
    ->in(__DIR__);

return Config::create()
    ->setRules($rules)
    ->setFinder($finder)
    ->setUsingCache(true);
