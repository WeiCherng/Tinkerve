#Ticket Counter Challenge

For this assessment, Ive chosen React, Javascript and CSS as these are ones that I am most familiar with.
Nevertheless, I'm also interested in using other libraries too!

Some Assumption that I have for this application:
1. Tickets numbers are randomdly generated 

How the applications works:
Take a number button allow customer to take a ticket which is randomly generated and displayed.
To use the counter, open any closed counter by clicking "Open Counter" button.
Grey dots (Offline) should be turn into green indicate the counter is online but not serving customer
To serve the customer on the opened counter, click the "Call the Counter" button.
The counter will serve the first issued number
Now Serving, Last Number will be displayed too.
Green dot status will turn red indicate serving.
To close the counter, simply click "Close Counter"

Future Improvement that I would implement:
1. better naming for the states
2. when re-opening the counter, the cur_num will be 0000 instead of the number before closing
3. better styling
4. a component to display the all numbers that is in waiting queue
5. better logic for the whole app

Some thoughts:
I would say the logic for the app is not the greatest and very messy.
I believe there are better way to improve this such as using other React Hooks
besides useState or even libraries like React Redux.
I hope to learn and widen my knowledge on React overall and hopefully understand better 
on how React works in the future to prevent such issue!

