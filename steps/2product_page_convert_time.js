id: 2product_page_convert_time
learningObjectives: 
- Find the right time and frequency in a funnel report 
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
      - text: "Now that we see the funnel properly I see a big drop in our funnel."
        delay: 1300
      - text: "I want to understand whats leading to it, I've mentioned that we've changed some things in the UX that might affect it on the product item page."
        delay: 1400
      - text: "I see a drop in our purchase funnel between item details page and add the cart, we’ve done some changes to our product pages and we think that there might be some issue can you tell me whats the number of product pages it takes to convert to add to cart? "
        delay: 3500
trigger:
  type: user_message
  params: 
    person: keen
  flowNode:
    if:
      conditions:
      - conditionId: text_contains_strings
        params:
          text: "${userMessageText}"
          strings:
            - "3"
            - "31.73%
      then:
        do:
        - actionId: bot_message
          params:
            person: keen
            messages:
            - text: "Wow, that is indeed a problem. They are lingering way too much on that page."
              delay: 1500
        - actionId: finish_step
      else:
        do:
        - actionId: bot_message
          params:
            person: keen
            messages:
            - text: "Umm, That doesnt look right, maybe a different event or frequencey?"
              delay: 1400
