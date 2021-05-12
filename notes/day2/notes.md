```js
    // what he would do
    return GetEmployeeData(GetEmployeeIdFromRow("#nameOfRow"));

    // what I prefer
    var employeeId = GetEmployeeIdFromRow("#nameOfRow");
    var employeeData = GetEmployeeData(employeeId);
    return employeeData;
```

```java
public class Program {
    public static void main(String[] args) {
        System.out.println("Hello world!");
    }
}
```

# Draw Asterisk Triangle 1

We want to draw to the console window:

*
**
***
****

I'm going to pass one argument:

1. Height

In order to get command line arguments (in this case just one argument):

```js
const height = process.argv[2];
```

# Draw Asterisk Triange 2

****
***
**
*

I'm going to pass one argument:

1. Height

In order to get command line arguments (in this case just one argument):

```js
const height = process.argv[2];
```

# Does the character die?

We have a dude, he has an HP amount (given by argument).
He is going to take damage (given by another argument).

Does he live or die?

```js
const life = process.argv[2];
const damage = process.argv[3];
```

Comand line arguments come in as strings. When doing number
comparisons this is not ideal. So you need to convert them
to a number first.

# State-ist

We are going to take the person's given state (TX, CA, etc)
(as a command line argument) and decide whether we like them
or not.

We like people from CA and TX but definitely not OK.
Everyone else is meh.

```js
const state = process.argv[2];

// index search function
var arrayVariable = ['CA', 'TX']
var isTxInArray = (arrayVariable.indexOf('TX') > -1)
```

# Does the character die (hard mode)?

We have a dude, he has an HP amount (given by argument).
He is going to take damage three times (given by three arguments).

Does he live or die?

```js
const life = process.argv[2];
const damage1 = process.argv[3];
const damage2 = process.argv[4];
const damage3 = process.argv[5];
```

Comand line arguments come in as strings. When doing number
comparisons this is not ideal. So you need to convert them
to a number first.

