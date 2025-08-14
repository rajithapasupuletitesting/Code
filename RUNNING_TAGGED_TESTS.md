# Running prioritized/tagged BDD tests

To run only tests with a specific tag (e.g., @smoke), use the following command after installing the Cypress Cucumber Preprocessor:

```
npx cypress run --env TAGS='@smoke'
```

You can add tags like @smoke, @regression, @critical, etc. to your `.feature` files to group and prioritize tests.

For more info, see the [Cypress Cucumber Preprocessor documentation](https://github.com/badeball/cypress-cucumber-preprocessor).
