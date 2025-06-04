<?php

  $docsDir = __DIR__ . '/docs';
  $outputFile = $docsDir . '/index.md';

  function humanize($filename) {
      $name = preg_replace('/[-_]/', ' ', pathinfo($filename, PATHINFO_FILENAME));
      return ucwords($name);
  }

  function generateMarkdownIndex($dir, $baseUrl = '/docs', $depth = 0) {
      $items = scandir($dir);
      $markdown = "";

      foreach ($items as $item) {
          if ($item === '.' || $item === '..' || $item[0] === '_') continue;

          $path = "$dir/$item";
          $relativePath = str_replace(__DIR__ . '/docs', '', $path);
          $route = $baseUrl . str_replace('.md', '', $relativePath);

          if (is_dir($path)) {
              $markdown .= str_repeat('#', 2 + $depth) . ' ' . humanize($item) . "\n";
              $markdown .= generateMarkdownIndex($path, $baseUrl, $depth + 1);
          } elseif (pathinfo($item, PATHINFO_EXTENSION) === 'md') {
              $label = humanize($item);
              $markdown .= "- [$label]($route)\n";
          }
      }

      return $markdown;
  }

  // Output the index.md content
  file_put_contents($outputFile,
		    "---\nid: index\ntitle: Documentation Index\nsidebar_label: Index\n---\n\n# 📚 Documentation Index\n\n" .
		    generateMarkdownIndex($docsDir)
  );

  echo "✅ index.md generated at: $outputFile\n";
