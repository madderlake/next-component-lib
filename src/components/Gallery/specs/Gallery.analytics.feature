# REQUIREMENTS: https://frontier.apple.com/analytics/2.0/rome/requirements/gallery/

@ANALYTICS
Feature: Gallery Analytics

  Rule: Gallery Tracking

    # rdar://110068293
    Scenario: Gallery ID on top-level div

    # rdar://110068287
    Scenario: Gallery Item ID on each GalleryItem

    # rdar://113223798
    Scenario: Gallery creation is manually tracked

  Rule: Gallery Interaction Type Tracking

    # rdar://110068282
    Scenario: Paddle Nav interaction type on Paddle Nav container
    Given that the Gallery contains a Paddle Nav component
    Then the container div of the Paddle Nav component must have an HTML attribute of 'data-analytics-gallery-interaction-type'
    And the 'data-analytics-gallery-interaction-type' attribute must have the value of 'paddlenav'

    # rdar://113340980
    Scenario: Gallery interaction is manually tracked
