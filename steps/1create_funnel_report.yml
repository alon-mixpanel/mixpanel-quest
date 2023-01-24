id: 1create_funnel_report
learningObjectives: 
- Learn to create a funnel report on mixpanel and sharing a url
hints:
- All modern web browsers can show you what your website looks like on mobile, so
  you'll be able to easily debug and develop for mobile. You can use the developer
  tools to see it.
startFlow:
  do:
  - actionId: bot_message
    params:
      person: keen
      messages:
      - text: "Hey! Whats up! ok look, we need to dig into some data real quick"
        delay: 1300
      - text: "We've been using Mixpanel for quite some time, https://mixpanel.com/project/2131808/view/284637/app/insights#GzpTEHqSjp4b this is our Mixpanel."
        delay: 1400
      - text: "I need you to create a funnel report for me to look at that includes a funnel of new details page > add to cart > complete purchase. Once you are ready send me the URL so I can look at it."
        delay: 3500
trigger:
  type: user_message
  params: 
    person: keen
  flowNode:
    if:
      conditions:
      - conditionId: text_match_regex
        params:
          text: "${userMessageText}"
          regex: ".*284637/app/funnels.*@"
      then:
        do:
        - actionId: bot_message
          params:
            person: keen
            messages:
            - text: "Thats great, looks like the funnel report is ok, make sure you have all the events I asked for in order. We need to dig into it more."
              delay: 1500
        - actionId: finish_step
      else:
        do:
        - actionId: bot_message
          params:
            person: keen
            messages:
            - text: "Umm, that doesn't look right. Maybe it's a different URL?"
              delay: 1400
