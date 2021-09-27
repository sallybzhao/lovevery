# Lovevery Take-Home Assignment

## Quick start

```sh
# Install NPM dependencies
yarn
# Run the app
yarn start
```

## Project Overview
what you implemented and why
The focus of this assignment is to display dynamic product data based on the user's input. After this clarificaiton of requirements,
I decided to use static assets where available (i.e. navigation bar, reviews, etc.).

## User Flow
1. On the landing page, the user will see generic text about the products and a prompt for them to enter their information to find a kit. The name field is optional and the date field is required. If the user happens to click 'Submit' without entering any data, nothing happens.
2. After entering a valid date, the product corresponding to the child's age will populate the page. If the child's birth date is in the future, the Looker Play Kit (0-3 months) will be selected and if the child is over 12 months old, the Thinker Play Kit will be selected (11-12 months).



## Organization
how you structured your code
- count baby's age down (conservative)
- carousel to match the existing design on the Lovevery website, with the dots and arrows.

## Testing
and how you would test your solution to ensure correctness.

## Future Developments
how you would extend the code to fetch from an endpoint,
Due to the scope of this assignment, these are a few features that were set aside as future developments. 
- Responsive-first design
- Date validations
- async/await for api function to get data
- round up in age so 
