import {
  storyblokInit,
  apiPlugin,
  useStoryblokBridge,
  storyblokEditable
} from '@storyblok/js';


const { storyblokApi } = storyblokInit({
  accessToken: import.meta.env.VITE_STORYBLOK_DELIVERY_API_TOKEN,
  apiOptions: { region: 'eu' },                       
  use: [apiPlugin],                                   
  bridge: true,                                      
});

export { storyblokApi, useStoryblokBridge, storyblokEditable };
