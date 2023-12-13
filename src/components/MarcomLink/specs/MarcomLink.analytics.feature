# REQUIREMENTS: https://frontier.apple.com/analytics/2.0/rome/requirements/link/

@ANALYTICS
Feature: Marcom Link Analytics

  Rule: Marcom Link Tracking

    # rdar://110067913
    # NOTE: link must have a parent element with "data-analytics-region" set in order for the following to function correctly
    Scenario: Link tracking on the same domain

    # rdar://110067914
    Scenario: Link tracking for download links

    # rdar://110067922
    Scenario: Link tracking on a subdomain or foreign domain
