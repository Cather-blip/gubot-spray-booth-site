<?php
declare(strict_types=1);

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: /contact.html', true, 302);
    exit;
}

if (!empty($_POST['company_website'] ?? '')) {
    header('Location: /thank-you.html', true, 302);
    exit;
}

function clean_field(string $key, int $limit = 1000): string
{
    $value = $_POST[$key] ?? '';
    if (is_array($value)) {
        $value = implode(', ', $value);
    }
    $value = trim((string) $value);
    $value = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/', '', $value) ?? '';
    return substr($value, 0, $limit);
}

function clean_header(string $value): string
{
    return trim(preg_replace('/[\r\n]+/', ' ', $value) ?? '');
}

$name = clean_field('name', 160);
$company = clean_field('company', 180);
$contact = clean_field('contact', 220);
$country = clean_field('country', 120);
$installationCountry = clean_field('installation_country', 120);
$deliveryCity = clean_field('delivery_city', 180);
$solution = clean_field('solution', 160);
$vehicleType = clean_field('vehicle_type', 160);
$vehicleLength = clean_field('vehicle_length', 60);
$vehicleWidth = clean_field('vehicle_width', 60);
$vehicleHeight = clean_field('vehicle_height', 60);
$voltage = clean_field('voltage', 60);
$phases = clean_field('phases', 60);
$frequency = clean_field('frequency', 60);
$purchaseTimeline = clean_field('purchase_timeline', 120);
$accessories = clean_field('accessories', 300);
$message = clean_field('message', 3000);
$formSource = clean_field('form_source', 120);
$pageUrl = clean_field('page_url', 300);

if ($name === '' || $contact === '') {
    header('Location: /contact.html?status=missing', true, 302);
    exit;
}

$recipient = 'contact@gubotspraybooth.com';
$subjectName = clean_header($company !== '' ? $company : $name);
$subject = 'Gubot Spray Booth Inquiry - ' . ($subjectName !== '' ? $subjectName : 'Website Lead');

$lines = [
    'New inquiry from gubotspraybooth.com',
    '',
    'Name: ' . $name,
    'Company / Workshop: ' . $company,
    'Email / Phone: ' . $contact,
    'Country: ' . $country,
    'Installation country: ' . $installationCountry,
    'Delivery city / port: ' . $deliveryCity,
    'Interested solution: ' . $solution,
    'Vehicle type: ' . $vehicleType,
    'Maximum vehicle size (L × W × H): ' . $vehicleLength . ' × ' . $vehicleWidth . ' × ' . $vehicleHeight,
    'Power supply: ' . $voltage . ' / ' . $phases . ' / ' . $frequency,
    'Purchase timeline: ' . $purchaseTimeline,
    'Additional equipment: ' . $accessories,
    'Form source: ' . $formSource,
    'Page URL: ' . $pageUrl,
    'Visitor IP: ' . ($_SERVER['REMOTE_ADDR'] ?? ''),
    '',
    'Project requirements:',
    $message,
];

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: Gubot Website <contact@gubotspraybooth.com>',
];

if (filter_var($contact, FILTER_VALIDATE_EMAIL)) {
    $headers[] = 'Reply-To: ' . clean_header($contact);
}

$sent = mail($recipient, $subject, implode("\n", $lines), implode("\r\n", $headers));

if ($sent) {
    header('Location: /thank-you.html?status=sent', true, 302);
    exit;
}

header('Location: /contact.html?status=error', true, 302);
exit;
