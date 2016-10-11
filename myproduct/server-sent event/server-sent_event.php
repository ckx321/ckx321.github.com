<?php
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');

$time = "hello";
echo "data: {$time}\n\n";
flush();
?>