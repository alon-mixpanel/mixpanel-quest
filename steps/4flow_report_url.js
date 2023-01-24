id: 4flow_report_url
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
      - text: "So know that we know Harry is the culprit in this catastophe, we need to understand what is going on and why arent they moving past the page."
        delay: 1300
      - text: "I think that Mixpanel as a way of seeing where users flow continues to."
        delay: 1400
      - text: "Can you send me a flow report so we see where users are dropping to?"
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
          regex: ".*284637/app/flows.*@"
      then:
        do:
        - actionId: bot_message
          params:
            person: keen
            messages:
            - text: "Great, now we can see the entire flow and the drop exactly."
              delay: 1500
        - actionId: finish_step
      else:
        do:
        - actionId: bot_message
          params:
            person: keen
            messages:
            - text: "Umm, that doesn't look right and a flow report. Maybe it's a different URL?"
              delay: 1400
