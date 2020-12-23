###Bridge

#####Intent
Decouple an abstraction from its implementation so that the two can vary independently.

#####Motivation
The grid system is coupled with jqGrid and angularJS, so it is hard to update jqGrid or angularJS. If we want to use different framework like React, Vue, and Angular, or to use different grid library like jsGrid, we have to rewrite the whole grid system.