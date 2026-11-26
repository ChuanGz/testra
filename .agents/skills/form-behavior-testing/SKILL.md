---
name: form-behavior-testing
description: "Use for defaults, validation, submit, reset, and conditional form fields."
---

# Form Behavior Testing

## Purpose

Verify form defaults, validation, conditional fields, submit, and reset.

## Triggers

A form changes or needs coverage for valid, invalid, conditional, or reset behavior.

## Inputs

Field rules, defaults, conditional visibility and submission contract, fixture, and supported inputs.

## Outputs

Field and submission checks linked to the rule, request evidence where relevant, and observable reset behavior.

## Workflow

1. Build cases from the agreed field and dependency rules. Verify defaults, a valid submission, and meaningful invalid or conditional cases with native labels and user actions.

2. Assert visible validation and whether submission occurs. For hidden fields, check the documented payload behavior. For reset, assert the expected defaults or saved values.

3. Use dirty-state testing for unsaved changes and API request verification when the payload is a material part of the requirement.

## Example

A limited-time reward requires an end date. Verify that an empty date blocks save, then enter a valid date and check the saved result.

[Regression skills](../../../docs/regression-skills.md)
