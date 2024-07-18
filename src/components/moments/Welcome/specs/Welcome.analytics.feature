# REQUIREMENTS: https://frontier.apple.com/analytics/2.0/rome/requirements/attribute-formats/#data-analytics-section-engagement
# REQUIREMENTS: https://frontier.apple.com/analytics/2.0/rome/requirements/attribute-formats/#data-analytics-region
@ANALYTICS
Feature: Welcome Section Analytics

  Rule: Analytics

    # rdar://113507303
    Scenario: Section Engagement tracking on the Welcome Section
        Given that the section is the Welcome section
        Then the root HTML element of the component must have an HTML attribute of 'data-analytics-section-engagement'
        And the 'data-analytics-section-engagement' value must set to the value received in the props

    # rdar://113509016
    Scenario: Optional Region tracking on the Welcome Section
        Given that the section is the Welcome section
        Then the root HTML element of the component could optionally have an HTML attribute of 'data-analytics-region'
        And the 'data-analytics-region' value must set to the value received in the props
