# Sanity Clean Content Studio

We are using Sanity for our CMS at iteam.se. 
## How it works 

```
npm ci 

npm run start
```

When starting the project locally sanity will use the `development` dataset by default. By running a development dataset instead of running the `production` you can make changes that won't effect the schema that is deployed :smile: 

## Making changes

When you make changes in the schema and merge them into main remember to run `sanity deploy ` in your terminal, 
or go to the deployed site and push deploy. This will force the CMS to rebuild, and you will see your changes in the schema. 

> We should be able automatize this when we push to main.  

