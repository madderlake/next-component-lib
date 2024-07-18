# REQUIREMENTS: https://frontier.apple.com/analytics/2.0/rome/requirements/attribute-formats/#data-analytics-section-engagement
# REQUIREMENTS: https://frontier.apple.com/analytics/2.0/rome/requirements/attribute-formats/#data-analytics-region
# REQUIREMENTS: https://frontier.apple.com/analytics/2.0/rome/requirements/attribute-formats/#data-analytics-title
# REQUIREMENTS: https://frontier.apple.com/analytics/2.0/rome/requirements/attribute-formats/#data-analytics-gallery-id
# REQUIREMENTS: https://frontier.apple.com/analytics/2.0/rome/requirements/attribute-formats/#data-analytics-gallery-item-id
@ANALYTICS
Feature: Essentials Section Analytics

  Rule: Analytics

    # rdar://113574788
    Scenario: Section Engagement tracking on the Essential Section
        Given that the section is the Essential section
        Then the root HTML element of the component must have an HTML attribute of 'data-analytics-section-engagement'
        And the 'data-analytics-section-engagement' value must set to the value received in the props

    # rdar://113574714
    Scenario: Optional Region tracking on the Essential Section
        Given that the section is the Essential section
        Then the root HTML element of the component could optionally have an HTML attribute of 'data-analytics-region'
        And the 'data-analytics-region' value must set to the value received in the props

    # rdar://113575445
    Scenario: Link tracking on Section Header
        Given that the section header link is the Essential section
        Then the root link element of the component sholuld have an HTML attribute of 'data-analytics-title'
        And the 'data-analytics-title' value must set to the value received in the props

    # rdar://113575993
    Scenario: Gallery tracking on the Essentials Section
      Given that the section is the Essentials section
      Then the root div of the Gallery component must have an HTML attribute of 'data-analytics-gallery-id'
      And the 'data-analytics-gallery-id' value must set to the value received in the props
      And each li element wrapping an EssentialCard in the Gallery must have an HTML attribute of 'data-analytics-gallery-item-id'
      And the 'data-analytics-gallery-item-id' value must set to the value received in the props

