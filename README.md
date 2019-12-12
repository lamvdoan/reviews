## Requirements
The following should already be installed:
* npm (6.4.1 or higher)
* yarn (1.13.0 or higher)

## Technologies
* Used a boilerplate repo (took from class, won't give myself credit for that) that includes:
    * Babel - Compiler
    * Webpack - Makes building application faster
    * SCSS - Makes CSS writing a tad faster

## Set up

        yarn install

## Run the program

        yarn run dev-server

## Failure Points
* Response data does not persist after going back to list view and back to the Review Details.  After some long time, I realize (or hypothesize) that state is local to component and component is probably destroyed when deviated.  Need to look into ways to store data permanently.
* Missing edit button to change the response.  Which is also means, missing the feature to fill in the previous state Response data when loading the edit screen.
* UI is horrendous on the Review Details page.
* The CSS style structur can be better to make things simpler for the ReviewDetails page
