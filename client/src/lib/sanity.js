import {
    createPreviewSubscriptionHook,
} from 'next-sanity'
import { config } from './config'

// Set up the live preview subscription hook
export const usePreviewSubscription = createPreviewSubscriptionHook(config)
