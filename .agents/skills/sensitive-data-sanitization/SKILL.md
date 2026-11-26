---
name: sensitive-data-sanitization
description: Sanitize HAR files, API fixtures, traces, and logs before sharing or committing them. Use when test artifacts may contain credentials, tokens, personal data, or other sensitive values.
---

# Sensitive Data Sanitization

## Purpose

Keep shared test artifacts usable without retaining private data.

## Triggers

A recording, trace, request payload, or log may contain credentials or personal information.

## Inputs

Raw artifacts in local working storage and the fields required for verification.

## Outputs

Sanitized artifacts with secrets removed and necessary links between records preserved.

## Workflow

1. Prefer synthetic test data at capture time and keep raw artifacts in access-controlled scratch space. Inspect headers and cookies, URLs and query parameters, request and response bodies, nested records, and files attached inside HAR archives.

2. Remove authentication and secret-bearing fields. Replace personal values with synthetic values of the same type when the contract requires the field. Preserve relationships with consistent replacements, such as using the same synthetic record ID across requests and responses.

3. Rebuild edited structured or encoded payloads in their expected format. Verify that the resulting artifact still matches the test request and passes schema or replay checks. Scan embedded and attached content for prohibited values and patterns without printing the original data. Share only the sanitized artifact.

## Example

Replace a private player ID with one synthetic ID in every request and response that refers to that player.

[OWASP guidance on excluding sensitive data](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html#data-to-exclude)
