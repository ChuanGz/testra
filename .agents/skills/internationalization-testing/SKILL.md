---
name: internationalization-testing
description: "Use for translation, locales, date formats, and localized text overflow."
---

# Internationalization Testing

## Purpose

Verify translated content, locale-sensitive formatting, and layout with localized text.

## Triggers

Translation, locale switching, date or numeric formatting, text direction, or clipping changes.

## Inputs

Supported locales and timezones, accepted translations or formatting examples, and fixed fixture data.

## Outputs

Locale-specific expected and actual values, navigation or reload behavior if required, and clipping evidence.

## Workflow

1. Use fixed time, explicit locale and timezone, and approved translation expectations. Set the application's language as specified, including any user setting.

2. Verify important labels, dates, amounts, and text direction for affected locales. Check fallback or persistence only when it matters to the change.

3. Exercise the affected layout with realistic localized strings. Hand confirmed overflow to CSS layout diagnostics or responsive testing.

## Example

Check the reward expiry date in two supported locales using a fixed time and timezone. Verify a longer translated action label remains reachable.

[Regression skills](../../../docs/regression-skills.md)
