import {
  createPreviewSubscriptionHook,
  createCurrentUserHook,
} from 'next-sanity'

import { config } from './config'

// Set up the live preview subscription hook
export const usePreviewSubscription = createPreviewSubscriptionHook(config)

// Helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(config)
