---
name: test-reusability-analysis
description: "Use for finding and evaluating existing scenarios, fixtures, and helpers."
---

# Test Reusability Analysis

## Purpose

Find a suitable existing test asset before creating a new one.

## Triggers

A proposed scenario needs a spec, fixture, helper, data set, or recording.

## Inputs

Scenario card, rule ID, existing test folders, project test conventions, and asset provenance when available.

## Outputs

Reuse, adapt, or create decision with paths, covered behavior, and verified gaps.

## Workflow

1. Search by rule ID, flow, UI label, resource name, and expected result. Inspect the actual assertions and fixture implementation.

2. Check that candidates exercise the same behavior and can run with the needed role, data, and isolation. Check the currency of recorded responses or contract-shaped fixtures.

3. Prefer running an existing scenario or extending its inputs. Reuse setup and actions even when a new assertion is required. Explain why a new asset is needed when the existing ones do not prove the rule.

## Example

An existing reward-edit helper covers save and reload. Reuse it and the seed fixture. Add the missing detail-panel assertion to the relevant scenario.

[Regression skills](../../../docs/regression-skills.md)
