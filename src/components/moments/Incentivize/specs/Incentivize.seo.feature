# REQUIREMENTS: https://quip-apple.com/tdyPABC9RObm
# REQUIREMENTS: https://quip-apple.com/HRHSA6Je0Jao#temp:C:AZX11609ad8451c4fc59d8c00ed0

@SEO
Feature: Incentivize Section SEO

  # NOTE: This is at the section level since the section is responsible for
  # rendering the Icon Cards and their modals
  Rule: Content indexing or Icon Card Modals

    # rdar://111354761
    @INCOMPLETE
    Scenario: Modal content must be indexable by search engines
      Given the modal is not deep linkable
      Then the modal content must be server rendered into the document
      And the content must be adjacent to the respective Icon Card
      And the content must remain hidden until the modal opens
