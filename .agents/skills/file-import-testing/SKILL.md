---
name: file-import-testing
description: "Use for file upload, import validation, partial failures, and persisted results."
---

# File Import Testing

## Purpose

Verify file intake, validation, errors, and persisted import outcomes.

## Triggers

An upload or import flow, supported format, parser, or partial-result policy changes.

## Inputs

Documented formats and size limits, synthetic fixture files, import completion condition, and expected results.

## Outputs

Upload and validation evidence, accepted or rejected rows, error feedback, and authoritative import result.

## Workflow

1. Create minimal synthetic fixtures for the valid case and relevant invalid or partially valid cases. Use the actual supported format and schema.

2. Upload through the app with Playwright setInputFiles or its normal file chooser workflow. Observe the documented completion or validation result.

3. Check row-level outcomes and whether the import is atomic or partial as specified. Read back the imported data when persistence matters and clean up run-owned records.

## Example

Import a small reward CSV with one valid row and one invalid date. Verify the reported errors and whether the valid row is persisted under the import policy.

[Regression skills](../../../docs/regression-skills.md)
