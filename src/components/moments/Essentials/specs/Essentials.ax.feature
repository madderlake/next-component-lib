# DESIGN: https://pages.github.pie.apple.com/marcom-frontend/collections-specs/sections/
# DESIGN: https://pages.github.pie.apple.com/marcom-frontend/collections-specs/sections/#s6
# Requirements https://quip-apple.com/kMBGA0sSxAZb

@AX
Feature: Essentials Section AX

  # QUESTION: Can't find an explicit mention of reading/tab order from the section level
  #           Will need to follow up w/ the AX team to track that down
  Rule: Reading/Tab order

    # rdar://111237001
    @INCOMPLETE
    Scenario: Reading order is correct

    # rdar://111237055
    @INCOMPLETE
    Scenario: Tab order is correct

  Rule: Semantics

    # rdar://111237127
    @UNTESTED
    Scenario: Must have a visually unique title marked up as a heading

  Rule: Zoom

    # rdar://111237180
    @INCOMPLETE
    Scenario: Content needs to be perceivable and operable at 400% browser zoom

    # rdar://111237250
    @UNTESTED
    Scenario: Content must remain perceivable and operable up to 200% text zoom with no horizontal scrolling

  Rule: RTL

    # rdar://111237292
    @UNTESTED @RTL
    Scenario: Content behaves and reads naturally in RTL mode
