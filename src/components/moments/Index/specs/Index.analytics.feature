# REQUIREMENTS: https://frontier.apple.com/analytics/2.0/rome/requirements/attribute-formats/#data-analytics-section-engagement
# REQUIREMENTS: https://frontier.apple.com/analytics/2.0/rome/requirements/attribute-formats/#data-analytics-region
Feature: Index Section Analytics

  Rule: Analytics

    # rdar://110142957
    Scenario: Section Engagement tracking on the Index Section
        Given that the section is the Index section
        Then the root HTML element of the component must have an HTML attribute of 'data-analytics-section-engagement'
        And the 'data-analytics-section-engagement' value must set to the value received in the props

    # rdar://112665250
    Scenario: Optional Region tracking on the Index Section
        Given that the section is the Index section
        Then the root HTML element of the component could optionally have an HTML attribute of 'data-analytics-region'
        And the 'data-analytics-region' value must set to the value received in the props
