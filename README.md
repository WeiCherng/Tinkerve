#Ticket Counter Challenge

For this assessment, Ive chosen React, Javascript and CSS as these are ones that I am most familiar with.<br />
Nevertheless, I'm also interested in using other libraries too!

Some Assumption that I have for this application:
1. Tickets numbers are randomdly generated 

How the applications works:<br />
Take a number button allow customer to take a ticket which is randomly generated and displayed.<br />
To use the counter, open any closed counter by clicking "Open Counter" button.<br />
Grey dots (Offline) should be turn into green indicate the counter is online but not serving customer<br />
To serve the customer on the opened counter, click the "Call the Counter" button.<br />
The counter will serve the first issued number<br />
Now Serving, Last Number will be displayed too.<br />
Green dot status will turn red indicate serving.<br />
To close the counter, simply click "Close Counter"<br />

Future Improvement that I would implement:
1. better naming for the states
2. when re-opening the counter, the cur_num will be 0000 instead of the number before closing
3. better styling
4. a component to display the all numbers that is in waiting queue
5. better logic for the whole app

Some thoughts:<br />
I would say the logic for the app is not the greatest and very messy.<br />
I believe there are better way to improve this such as using other React Hooks<br />
besides useState or even libraries like React Redux.<br />
I hope to learn and widen my knowledge on React overall and hopefully understand better<br />
on how React works in the future to prevent such issue!<br />

