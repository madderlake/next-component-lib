# REQUIREMENTS: https://frontier.apple.com/analytics/2.0/rome/requirements/click/#accordion-interactions%3A
# REQUIREMENTS: https://frontier.apple.com/analytics/2.0/rome/requirements/attribute-formats/#data-analytics-click
# REQUIREMENTS: https://frontier.apple.com/analytics/2.0/rome/requirements/attribute-formats/#data-analyics-intrapage-link
# REQUIREMENTS: https://frontier.apple.com/analytics/2.0/rome/requirements/attribute-formats/#data-analytics-title
# REQUIREMENTS: https://frontier.apple.com/analytics/2.0/rome/requirements/attribute-formats/#data-analytics-activitymap-region-id
@ANALYTICS
Feature: ImageAccordion Analytics
  Rule: Standard Click Tracking on Accordion item expand

    # rdar://109842420
    Scenario: Click tracking on Accordion item

    # rdar://110651596
    Scenario: Intrapage action on Accordion item

    # rdar://110651743
    Scenario: Optional Title (descriptive text) on Accordion item

    # rdar://110651849
    Scenario: Optional ActivityMap Region tracking on Accordion item
