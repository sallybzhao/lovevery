# Lovevery Take-Home Assignment

## How to Build This Project
```sh
# Install NPM dependencies
yarn
# Run the app
yarn start
```

## Project Overview
The focus of this project is to display dynamic product data based on the user's input date. The final design was based off the provided wireframes and any modifications were made to be more in alignment with the Lovevery brand. For example, with the carousel images, I decided to match the existing design on the website with the two navigation arrows, and dots on the bottom of the carousel. In addition, after clarifying the requirements, I decided to use static assets where available (i.e. navigation bar, reviews, etc.) to focus on the core functionality. 

## User Flow
1. Upon landing on the page, the user will see generic text about the products and a prompt for them to enter their information to find a kit. The name field is optional and the date field is required. If the user happens to click 'Submit' without entering any data, nothing happens.
2. After entering a valid date, the product corresponding to the child's age will populate the page. If the child's birth date is in the future, the Looker Play Kit (0-3 months) will be selected and if the child is over 12 months old, the Thinker Play Kit will be selected (11-12 months).
3. The user can modify the birth date input box as many times as they like, and the page will change accordingly.

## Organization
Most of the code lies in the components folder, one file for the main page and two for the main sections. There are also two assets folders, one within `src` and the other within `public`. Within `src`, we can import image files one-by-one which is good for static use cases. For the product kit photos, I decided to load them dynamically to avoid having a ton of import statements. To accomplish that, the photos were placed in the `public` folder and I used `require.context` to return an array of the file names. These were in turn passed into the `img src` tag.

In regards to the age calculation, I took the time difference between today's date and the input date (in milliseconds) and converted that to number of days. That was then used to calculate the age in months for the child. For cases where there's a fractional month, the result was rounded down to encourage the adoption of more products.

## Testing
This page has been tested with months 0-12, inclusive, as well as dates before and beyond this range. There is also validation on the form to make sure the user inputs a valid date before the page refreshes. 

## Future Developments
There are a few decisions that we made due to the scope of this project that could be modified if we were to productionize it. On the frontend, we can transform the page to a reponsive-first design. This would involve designers coming up with a mobile design first, and reimagining how that would change as the screen size gets larger. Also, we have an optional name field that is not being utilized. An improvement would be to use any customer data to serve them a more customized experience.

Currently the data is mocked in the file `api.js`. Realistically, we would fetch the data from an API and build out a Redux store to hold all our data. Also, instead of storing the images locally, we can serve them up via an object store like S3 and use a CDN to deliver the images more quickly to users.
