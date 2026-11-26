---
name: permission-testing
description: "Use for visibility, enabled states, and authorized role-based application checks."
---

# Permission Testing

## Purpose

Verify documented role-based UI controls and corresponding access decisions in authorized test environments.

## Triggers

Visibility, disabled actions, or role permissions change.

## Inputs

Approved role/action matrix, isolated test accounts, target records, and the designated test environment.

## Outputs

Observed control state and action outcome per role, with server-side evidence when in scope.

## Workflow

1. Choose authorized fixture accounts for the roles named in the acceptance criteria. Use separate browser contexts so role sessions cannot leak.

2. Verify whether each control is shown, disabled, or actionable as specified. Exercise normal permitted actions and use the project's approved authorization tests for corresponding server decisions when needed.

3. Record the role, resource, action, and expected result. Keep UI visibility and enforced server permissions distinct in the evidence.

## Example

An editor can rename a reward. A viewer can read it and sees the control state defined by the role matrix. Verify the unchanged record for the viewer scenario.

[Regression skills](../../../docs/regression-skills.md)
