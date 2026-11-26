---
name: test-data-management
description: "Use for planning generation, seeding, isolation, reuse, and cleanup."
---

# Test Data Management

## Purpose

Plan synthetic test data across the full lifecycle of a scenario or suite.

## Triggers

A test needs reproducible records, accounts, linked entities, or cleanup across concurrent runs.

## Inputs

Scenario data requirements, approved seed paths, environment constraints, and existing fixtures or recordings.

## Outputs

Data plan with source, identifiers, ownership, isolation, reset and cleanup, and reusable assets.

## Workflow

1. List the minimum records and relationships that drive the assertion. Prefer synthetic, explicit values and reuse approved seed or API paths inside the test environment.

2. Assign record namespaces or accounts appropriate to parallelism. Define reset and cleanup for created records and partial failures. Use test fixture management to implement a reusable fixture.

3. Keep stable business values separate from generated identifiers. Verify that a second independent run starts from equivalent conditions and that retained artifacts are sanitized.

## Example

Seed a reward, an eligible category, and a sibling category with separate run-specific IDs. Preserve the example title across runs while cleaning up only run-owned records.

[Regression skills](../../../docs/regression-skills.md)
