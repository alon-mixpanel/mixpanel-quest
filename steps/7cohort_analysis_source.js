id: 7cohort_analysis_source
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
      - text: "I Suspect we did some campaign about that product that is killing our conversion."
        delay: 1300
      - text: "Is there some common cohort among the users that are not converting? can you tell me if its an affiliate source? You can filter the sources I think."
        delay: 1400
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
          regex: ".*Google Shopping.*@"
      then:
        do:
        - actionId: bot_message
          params:
            person: keen
            messages:
            - text: "Yeah, makes sense, we launched a campaign just last month on Google Shopping, might be an issue with this cohort not converting."
              delay: 1500
        - actionId: finish_step
      else:
        do:
        - actionId: bot_message
          params:
            person: keen
            messages:
            - text: "Umm, that doesn't look right."
              delay: 1400
