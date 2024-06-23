Feature: Consider Section Analytics

  Rule: Analytics

    # rdar://113637736
    Scenario: Section engagement tracking on the Consider Section
      Given that the section is the Consider section
      Then the root HTML element of the component must have an HTML attribute of 'data-analytics-section-engagement'
      And the 'data-analytics-section-engagement' value must set to the value received in the props

    # rdar://113637946
    Scenario: Optional Region tracking on the Consider Section
      Given that the section is the Consider section
      Then the root HTML element of the component could optionally have an HTML attribute of 'data-analytics-region'
      And the 'data-analytics-region' value must set to the value received in the props

    # rdar://113638043
    Scenario: Gallery tracking on the Consider Section
      Given that the section is the Consider section
      Then the root div of the Gallery component must have an HTML attribute of 'data-analytics-gallery-id'
      And the 'data-analytics-gallery-id' value must set to the value received in the props
      And each li element wrapping a FeatureCard in the Gallery must have an HTML attribute of 'data-analytics-gallery-item-id'
      And the 'data-analytics-gallery-item-id' value must set to the value received in the props
