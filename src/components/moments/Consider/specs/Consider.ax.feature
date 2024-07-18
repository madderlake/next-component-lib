# DESIGN: https://pages.github.pie.apple.com/marcom-frontend/collections-specs/sections/#s3
# Requirements: https://quip-apple.com/qbDwAyKl46ix

@AX @XL @L @M @S @XS
Feature: Consider Section AX

  # QUESTION: Can't find an explicit mention of reading/tab order from the section level
  #           Will need to follow up w/ the AX team to track that down
  Rule: Reading/Tab order

    # rdar://111122763
    @INCOMPLETE
    Scenario: Reading order is correct

    # rdar://111122848
    @INCOMPLETE
    Scenario: Tab order is correct

  Rule: Semantics

    # rdar://111123421
    @UNTESTED
    Scenario: Must have a visually unique title marked up as a heading

  Rule: Zoom

    # rdar://111123583
    @INCOMPLETE
    Scenario: Content needs to be perceivable and operable at 400% browser zoom

    # rdar://111123649
    @INCOMPLETE
    Scenario: Content must remain perceivable and operable up to 200% text zoom with no horizontal scrolling

  Rule: Off-screen content

    # rdar://111123787
    @INCOMPLETE
    Scenario: The first off-screen tile must be partially visible

  # REQUIREMENTS: https://quip-apple.com/44nUAV1asYNK
  Rule: Deep-linkable Modals

    # rdar://111123915
    @INCOMPLETE
    Scenario: When the modal opens, the page title must be updated

    # NOTE: See requirements -- use `aria-level="2"` to achieve this
    # rdar://111124009
    @INCOMPLETE
    Scenario: Modal heading must announce itself as heading level 2, even if coded as H1

    # NOTE: See requirements for implementation details
    # rdar://111127149
    @INCOMPLETE
    Scenario: Dialog elements correctly reference the H1
      Given The modal has an H1
      And there are modal elements labelled as role="dialog"
      Then those elements must have an `aria-labelledby` attribute referencing the H1's `id`

    # NOTE: Use `tabindex="-1"` to achieve this
    # rdar://111127325
    @INCOMPLETE
    Scenario: Dialog wrapper element receives focus when user lands on the page

    # rdar://111127604
    @INCOMPLETE
    Scenario: Focus behavior when activated from page
      Given the modal is activated from an in-page element
      Then the modal dialog wrapper receives focus
      When the modal is closed
      Then focus is returned to the element that triggered the modal

    # rdar://111127714
    @INCOMPLETE
    Scenario: Focus behavior when activated from external source
      Given the modal is activated via deep-linking to it from an external source
      Then the modal dialog wrapper receives focus
      When the modal is closed
      Then focus is returned to the top of the page

    # rdar://111127803
    @INCOMPLETE
    Scenario: Back button behavior from external source
      Given the modal is activated via deep-linking to it from an external source
      When the back button is used
      Then the browser navigates you back to the original source

    # QUESTION: See requirements for this -- five options are offered, it is unclear
    # which option we need to implement. Need to consult w/ Fresco folks
    # rdar://111127862
    @INCOMPLETE
    Scenario: Footnote references in modals

  Rule: RTL

    # rdar://111127938
    @INCOMPLETE @RTL
    Scenario: Content behaves and reads naturally in RTL mode
