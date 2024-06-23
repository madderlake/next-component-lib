# REQUIREMENTS: https://frontier.apple.com/analytics/2.0/rome/requirements/attribute-formats/#data-analytics-section-engagement
# REQUIREMENTS: https://frontier.apple.com/analytics/2.0/rome/requirements/attribute-formats/#data-analytics-region
# REQUIREMENTS: https://frontier.apple.com/analytics/2.0/rome/requirements/click/#modal-open-%2F-close%3A
# REQUIREMENTS: https://frontier.apple.com/analytics/2.0/rome/requirements/attribute-formats/#data-analytics-region

Feature: Incentivize Section Analytics

   Rule: Section Analytics

    # rdar://113414604
    Scenario: Section engagement tracking on the Incentivize Section
      Given that the section is the Incentivize section
      Then the root HTML element of the component must have an HTML attribute of 'data-analytics-section-engagement'
      And the 'data-analytics-section-engagement' value must set to the value received in the props

    # rdar://113589056
    Scenario: Optional Region tracking on the Incentivize Section
      Given that the section is the Incentivize section
      Then the root HTML element of the component could optionally have an HTML attribute of 'data-analytics-region'
      And the 'data-analytics-region' value must set to the value received in the props

    # rdar://113414969
    Scenario: Link tracking on Section Header on the Incentivize Section
      Given that the section is the Incentivize section
      Then the Link element in the section header must have an HTML attribute of 'data-analytics-title'
      And the 'data-analytics-title' value must set to the value received in the props

    # rdar://112106494
    Scenario: Click tracking on each ModalCard on the Incentivize Section
      Given that the section is the Incentivize section
      Then the clickable element wrapping each ModalCard must have an HTML attribute of 'data-analytics-click'
      And 'data-analytics-click' value must set to the value received in the props
      And the clickable element wrapping each ModalCard must have an HTML attribute of 'data-analytics-title'
      And 'data-analytics-title' value must set to the value received in the props

    # rdar://113415357
    Scenario: Gallery tracking on the Incentivize Section
      Given that the section is the Incentivize section
      Then the root div of the Gallery component must have an HTML attribute of 'data-analytics-gallery-id'
      And the 'data-analytics-gallery-id' value must set to the value received in the props
      And each li element wrapping an IconCard in the Gallery must have an HTML attribute of 'data-analytics-gallery-item-id'
      And the 'data-analytics-gallery-item-id' value must set to the value received in the props

  Rule: Modal Analytics

    # rdar://112106358
    @INCOMPLETE
    Scenario: ActivityMap Region tracking in the Terms, Table, and Text variants of the IconCard Modal on the Incentivize Section
      Given that the section is the Incentivize Section
      When the Terms, Table, or Text variant of the IconCard Modal is opened
      Then the root HTML element of the modal must have an HTML attribute of 'data-analytics-activitymap-region-id'
      And the 'data-analytics-activitymap-region-id' value must set to the value received in the props

    # rdar://112106435
    Scenario: Click tracking on close button in any variant of the IconCard Modal on the Incentivize Section
      Given that the section is the Incentivize section
      When any variant of the IconCard Modal is opened
      Then the button element for the close button must have an HTML attribute of 'data-analytics-click'
      And 'data-analytics-click' value must set to the value received in the props
      And the button element for the close button must have an HTML attribute of 'data-analytics-title'
      And 'data-analytics-title' value must set to the value received in the props
