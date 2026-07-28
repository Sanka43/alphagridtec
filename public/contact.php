<?php
/**
 * Alphagrid Technology — contact form handler
 *
 * Deploy this file to your Namecheap public_html root (same level as index.html).
 * Set CONTACT_TO to your real inbox before going live.
 */

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

// --- Configure before launch ---
define('CONTACT_TO', 'info@alphagridtec.com');
define('CONTACT_FROM', 'info@alphagridtec.com');
define('CONTACT_SUBJECT', 'New inquiry — Alphagrid Technology');

function field(string $key): string
{
    return trim((string)($_POST[$key] ?? ''));
}

$name = field('name');
$email = field('email');
$company = field('company');
$service = field('service');
$message = field('message');

if ($name === '' || $email === '' || $message === '') {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Missing required fields']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Invalid email']);
    exit;
}

// Basic length guards
if (mb_strlen($name) > 120 || mb_strlen($email) > 180 || mb_strlen($message) > 5000) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Field too long']);
    exit;
}

$body = "New contact form submission\n\n"
    . "Name: {$name}\n"
    . "Email: {$email}\n"
    . "Company: {$company}\n"
    . "Interest: {$service}\n\n"
    . "Message:\n{$message}\n";

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: Alphagrid Website <' . CONTACT_FROM . '>',
    'Reply-To: ' . $name . ' <' . $email . '>',
    'X-Mailer: AlphagridContact/1.0',
];

$sent = @mail(CONTACT_TO, CONTACT_SUBJECT, $body, implode("\r\n", $headers));

if (!$sent) {
    http_response_code(500);
    echo json_encode([
        'ok' => false,
        'error' => 'Mail could not be sent. Check hosting mail settings.',
    ]);
    exit;
}

echo json_encode(['ok' => true]);
