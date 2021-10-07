# Iteam new website 2021

![Vercel](https://vercelbadge.vercel.app/api/iteam1337/iteam-next-site)

Hi! This is Iteam's official website based on Next.JS and Sanity. Look around and if you find any issues or have suggestions, please feel free to file an issue or pull request.

## Live preview

When you add a new page to sanity it's really nice to add live preview as well.
If you want to add live preview to a [slug] page, you need to use getClient(preview) in getStaticProps and then usePreviewSubscription followed by filterDataToSingleItem.

If you want to add live preview to a document type you will need to add .views to deskStructure and then do the same as above.

You might need to take a look in resolveProductionUrl aswell.

## Client

[Client readme](https://github.com/Iteam1337/Iteam-next-site/blob/main/client/README.md)

## Studio

[Studio readme](https://github.com/Iteam1337/Iteam-next-site/blob/main/studio/README.md)
