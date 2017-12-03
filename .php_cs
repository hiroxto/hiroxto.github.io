<?php

use PhpCsFixer\Config;
use PhpCsFixer\Finder;

$header = <<<'EOS'
This file is part of "Hiroto-K.github.io".

(c) Hiroto Kitazawa <hiro.yo.yo1610@gmail.com>

For the full copyright and license information, please view the LICENSE
file that was distributed with this source code.
EOS;

$rules = [
    '@PSR2' => true,
    '@Symfony' => true,
    'phpdoc_no_package' => false,
    'psr0' => false,
    'binary_operator_spaces' => true,
    'encoding' => true,
    'header_comment' => ['header' => $header],
    'array_syntax' => ['syntax' => 'short'],
    'no_short_echo_tag' => true,
    'ordered_imports' => true,
    'linebreak_after_opening_tag' => true,
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
