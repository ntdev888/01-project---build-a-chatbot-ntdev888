# Chatbot

## Problem statement
"How can we help your house plant today?"

## Inputs, processes and outputs

Initial input is user name, stored in variable.
Process path follows below flow chart <br>
<img src="ChatBot%20Flowchart.jpg">

### Banch 1 - Yes Start

'Steve, yes yes'<br>
A: Steve<br>
Q: Hello Steve lets see if I can help you with your plant today Is your plant wilting?<br>
A: yes<br>
Q: Is the Soil dry?<br>
A: yes <br>
Q: Water it. If it is still unhappy tomorrow ask again<br>

'Steve, yes no yes'<br>
A: Steve<br>
Q: Hello Steve lets see if I can help you with your plant today Is your plant wilting?<br>
A: yes<br>
Q: Is the Soil dry?<br>
A: no<br>
Q: Does the soil smell bad?<br>
A: yes<br>
Q: Steve it sounds like you have mould. I suggest you pot with new soil.<br>

'Steve, yes no yes'<br>
A: Steve<br>
Q: Hello Steve lets see if I can help you with your plant today Is your plant wilting?<br>
A: yes<br>
Q: Is the Soil dry?<br>
A: no<br>
Q: Does the soil smell bad?<br>
A: yes<br>
Q: Steve it sounds like you have mould. I suggest you pot with new soil.<br>

### Branch 2 - no Start

'Steve, no yes'
A: Steve
Q: Hello Steve lets see if I can help you with your plant today Is your plant wilting?
A: no
Q: Are the leaves turning yellow?
A: yes
Q: Steve I think your plant needs some food. Nitrogen is an important part of a plants diet. Try some slow release food pallets and place it on the coil with water.

## Test scenarios

Jest testing paths as follows:

Logic path:
- Name, yes, yes : outcome
- Name, yes no yes : outcome
- Name, yes no no : outcome
- Name, no yes : outcome
- Name, no no yes : outcome
- Name, no no no yes : outcome
- Name, no no no no : outcome

### Edge case

Logic Path:
- Name, help

Manual testing for accidental input at any stage.<br>
Outcome : "Please reply with help, restart and yes or no answers"
