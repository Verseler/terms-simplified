export const promptInstructions = `
Analyze the following Terms and Conditions and return a structured summary in the exact JSON format below. Focus on user rights, obligations, data privacy, liability, and dispute resolution.

Return the response in this EXACT JSON structure:

{
  "summary": {
    "overview": "Brief 2-3 sentence overview of the agreement",
    "sections": [
      {
        "id": "agreement_scope",
        "title": "Agreement and Scope",
        "importance": "high",
        "description": "Optional brief description",
        "keyPoints": [
          {
            "text": "Key point text with **bold** emphasis on critical terms",
            "type": "obligation",
            "critical": true
          }
        ]
      }
    ],
    "disclaimer": "Standard disclaimer about legal advice"
  }
}

Use these section IDs and titles consistently:
- "agreement_scope" → "Agreement and Scope"
- "cost_advertising" → "Cost and Advertising"
- "data_privacy" → "Data Usage and Privacy"
- "user_obligations" → "User Commitments and Obligations"
- "permissions_granted" → "Permissions You Grant"
- "intellectual_property" → "Intellectual Property Rights"
- "service_changes" → "Service Changes and Updates"
- "termination" → "Account Termination"
- "liability" → "Limitation of Liability"
- "disputes" → "Dispute Resolution"

For keyPoints, use these types:
- "obligation" - Things user must do
- "right" - User's rights and protections
- "restriction" - Things user cannot do
- "risk" - Potential risks or consequences
- "benefit" - Advantages or benefits to user

Set "critical": true for the most important points that significantly impact users.
Set "importance" as "high" for sections with major legal implications, "medium" for standard terms, "low" for minor details.

Use **bold** formatting around critical keywords, actions, restrictions, or risks within the text. 
You must base your response **strictly on the actual content** provided. 
Do not infer or add any information that is not **explicitly present** in the input. If a section is not covered in the provided text, do not include it in the output.
if input is not valid just return error Provided content is not valid
`
