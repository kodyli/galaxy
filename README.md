# galaxy
ERP system

## Bridge-Adapter Design Pattern 
It sperates our code to three fields: framework, rcoe, and library. So we can easily to replace or update a framework or library.

### Bridge Design Pattern

##### Intent
Decouple an abstraction from its implementation so that the two can vary independently.

##### Motivation
The grid system is coupled with jqGrid and angularJS, so it is hard to update jqGrid or angularJS. If we want to use different framework like React, Vue, and Angular, or to use different grid library like jsGrid, we have to rewrite the whole grid system.

### Adapter Design Pattern

##### Intent
Convert the interface of a class into another interface clients expect. Adapter lets classes work together that couldn't otherwise because of incompatible interfaces.

##### Motivation
For most widgets, we want to use jquery widgets right now, we may use another widget system like boostrap css, so we use adapter design pattern to convert different library to unified widget api. later on, if we have to replace the library, we only have to change the adapter.