# DESIGN: https://pages.github.pie.apple.com/marcom-frontend/collections-specs/sections/
# DESIGN: https://pages.github.pie.apple.com/marcom-frontend/collections-specs/sections/#s5
# Requirements https://quip-apple.com/uAbtAaTqeg9Q

@AX
Feature: Incentivize Section AX

  # QUESTION: Can't find an explicit mention of reading/tab order from the section level
  #           Will need to follow up w/ the AX team to track that down
  Rule: Reading/Tab order

    # rdar://111353759
    @INCOMPLETE
    Scenario: Reading order is correct

    # rdar://111353894
    @INCOMPLETE
    Scenario: Tab order is correct

  Rule: Semantics

    # rdar://111353994
    @INCOMPLETE
    Scenario: Must have a visually unique title marked up as a heading

  Rule: Zoom

    # rdar://111354098
    @INCOMPLETE
    Scenario: Content needs to be perceivable and operable at 400% browser zoom

    # rdar://111354179
    @INCOMPLETE
    Scenario: Content must remain perceivable and operable up to 200% text zoom with no horizontal scrolling

  Rule: RTL

    # rdar://111354220
    @INCOMPLETE @RTL
    Scenario: Content behaves and reads naturally in RTL mode
