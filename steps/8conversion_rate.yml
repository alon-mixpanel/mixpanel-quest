id: 8conversion_rate
learningObjectives: 
- Reproducing a bug locally 
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
      - text: "Harry Potter DVD and Google shoppers. That doesnt mix right."
        delay: 1300
      - text: "I need to know the exact convertion to understand how bad the issue is."
        delay: 1400
      - text: "Can you tell me the exact conversion rate for the google shopping cohort that purchased the harry potter DVD?"
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
          regex: ".*1.11.*@"
      then:
        do:
        - actionId: bot_message
          params:
            person: keen
            messages:
            - text: "Holy Cow harry! That is a huge issue. BUT! Thats the final issue. I think we found the issue and the problematic cohort and product. Thank you! I'll let our marketing team know. Thanks!"
              delay: 1500
        - actionId: finish_step
      else:
        do:
        - actionId: bot_message
          params:
            person: keen
            messages:
            - text: "Umm, that doesn't look right. Seems a bit off."
              delay: 1400
