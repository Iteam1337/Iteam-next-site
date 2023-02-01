# Sanity Clean Content Studio

We are using Sanity for our CMS at iteam.se.

## How it works

```
npm ci

npm run dev
```

When starting the project locally sanity will use the `development` dataset by default. By running a development dataset instead of running the `production` you can make changes that won't effect the schema that is deployed :smile:

## Making changes

When you make changes in your schema and want to merge them into main there are a few steps you need to follow.

1. Run `git pull origin main` and then run `sanity deploy`
2. Go to https://iteamse.sanity.studio/desk and fill in all fields that you have updated
3. Merge!

> We should be able automatize this when we push to main.
