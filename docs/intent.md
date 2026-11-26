# Design Intent

The goal is to spend less time getting from a reported regression to evidence that the affected behavior is correct again. Measure that elapsed time for a few important flows. Also watch which critical checks are missing, flaky, or expensive to maintain.

After each investigation, keep the smallest useful result with the application that owns the tests. A rule, scenario, isolated data setup, and relevant trace are usually enough for someone else to repeat the check. Keep agreed project context and working rules with those assets so a new person or model can continue without reconstructing the decisions.

Use the agent to plan and investigate. Put the expected behavior into executable Playwright assertions so the resulting spec can run without an agent. [The Verifier role](verifier.md)
