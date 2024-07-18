Feature: Augment Section Analytics

  Rule: Analytics

    # rdar://113507492
    Scenario: Section engagement tracking on the Augment Section
      Given that the section is the Augment section
      Then the root HTML element of the component must have an HTML attribute of 'data-analytics-section-engagement'
      And the 'data-analytics-section-engagement' value must set to the value received in the props

    # rdar://113587975
    Scenario: Optional Region tracking on the Augment Section
      Given that the section is the Augment section
      Then the root HTML element of the component could optionally have an HTML attribute of 'data-analytics-region'
      And the 'data-analytics-region' value must set to the value received in the props

    # rdar://113508852
    Scenario: Click tracking on Accordion item on the Augment Section
      Given that the section is the Augment section
      Then the button element wrapping the ImageAccordion must have an HTML attribute of 'data-analytics-click'
      And 'data-analytics-click' value must set to the value received in the props
      And the button element wrapping the ImageAccordion could optionally have an HTML attribute of 'data-analytics-title'
      And 'data-analytics-title' value must set to the value received in the props

    # rdar://113509194
    Scenario: Optional ActivityMap Region tracking on Accordion item on the Augment Section
      Given that the section is the Augment section
      Then the button element wrapping the ImageAccordion could optionally have an HTML attribute of 'data-analytics-activitymap-region-id'
      And 'data-analytics-activitymap-region-id' value must set to the value received in the props
