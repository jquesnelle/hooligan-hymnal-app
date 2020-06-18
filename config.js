// Do not edit these import lines
import appParams from './app.json';
import i18n from "./src/i18n";

/*
  Hooligan Hymnal

  Copyright 2018-2020 The Chattahooligans, released open source under MIT license

  The latest source code and documentation for this project are located at:
  https://github.com/Chattahooligans/hooligan-hymnal-app
*/

/*
  About this Configuration File

  This configuration file contains several JavaScript objects that alter 
  the appearance of behavior of the Hooligan Hymnal mobile application. 

  Preceeding each object, you'll find documentation with a description of 
  what the object does and guidance on how to configure it.
  
  SGs with non- or novice developers will need patience and dedication to 
  get used to the key:value format and adjust the configuration, but we 
  believe in you! Ask for help on the Hooligan Hymnal Slack channel if 
  you get confused or if something breaks.
*/



/*
  Urls
  
  This structure contains a set of key:value pairs for URLs and links used
  elsewhere in this config file and in the app.

  Excepting Urls.HooliganHymnalServer, they're mostly optional, but you may 
  need to remove lines from the config that reference these links, like in 
  the SocialButtons or Banners structure. You can also add other URLs as 
  necessary.
*/
export const Urls = {
  // production server
  // HEY! Don't include a trailing slash / on this url.
  // If you do, you're gonna have a bad time because your serer calls will not work 
  HooliganHymnalServer: 'https://chattahooligan-hymnal.herokuapp.com',
  // dev/beta server
  //HooliganHymnalServer: 'https://chattahooligan-dev.herokuapp.com',

  // Social media and websites
  Twitter: 'https://twitter.com/chattahooligan',
  Facebook: 'https://facebook.com/TheChattahooligans',
  Instagram: 'https://instagram.com/thechattahooligans',
  Website: 'http://comeandjoin.us',
  YouTube: '',
  Shop: 'https://squareup.com/store/the-chattahooligans',
  Prideraiser: 'https://chatt.prideraiser.org/',
  // Look for random characters at the end of your current campaign url (must update for each campaign season)
  PrideraiserCampaignId: 'aw43AmO',
  GoFundMe: 'https://www.gofundme.com/chattahooligan-youth-soccer-investment',
  EsTwitter: 'https://twitter.com/LosCFCHooligans',
  EsFacebook: '',
  EsInstagram: 'https://instagram.com/loschattahooligans',
  EsWebsite: 'http://chattahooligan.com/es',
  Events: 'https://facebook.com/TheChattahooligans/events/',
  Standings: 'https://www.nisaofficial.com/standings',
  Instrumentation: 'https://drive.google.com/open?id=1dW9z4lh5924mXKtOyhc4dt8_OuAT9UXr',
  Volunteer: 'http://chattahooligan.com/join/',
  Postcast423: 'https://anchor.fm/423soccerpod',
  Postcast109: 'https://podcasts.apple.com/us/podcast/the-section-109-podcast/id1476968964',
  RedditClub: 'https://www.reddit.com/r/ChattanoogaFC'
}


/*
  Images
  
  This structure contains a set of key:value pairs for images used 
  elsewhere in the app. Some are used in multiple places.

  These images are preloaded during app startup, so they don't pop in.

  Feel free to add Images as necessary. Just maintain the require() syntax
  and make sure the file names here match what they're called in ./assets/

  The good news is that the build will crash immediately if there is an
  issue with anything in this block.
*/
export const Images = {
  // Used as a default Channel thumbnail
  LogoAvatar: require('./assets/icon-android.png'),

  // Appears in the navigation bar when the user scrolls down the feed on Home screen
  Home_NavbarLogo: require('./assets/home-navbar-logo.png'),

  // Hero video file that plays on the Home screen
  Home_HeroVideo: require('./assets/home-hero-video.mp4'),
  // Overlay image over the hero video
  Home_HeroVideoOverlay: require('./assets/home-hero-video-overlay.png'),
  // Home_HeroVideoOverlay: require('./assets/juanstagram-mono-logotype.png'),

  // Home screen hero image. Loads in directly, no fancy tinting or layers
  //    scaled to fit screen width
  // Note: Set Skin.Home_HeroImage_VersionColor to a contrasting color
  Home_HeroImage: require('./assets/home-hero-image.png'),

  // Background image that appears at the top of the navigation drawer menu
  NavigationDrawer_HeroBackground: require('./assets/drawer-hero-background.png'),
  // Overlay image over the drawer hero background image
  NavigationDrawer_HeroOverlay: require('./assets/drawer-hero-logo.png'),

  // Songbook cover image
  Songbook_Cover: require('./assets/songbook-cover.png'),

  // Used as a default thumbnail for Players and Rosters
  ClubLogo: require('./assets/logo-club.png'),

  // Used for Prideraiser integration
  PrideraiserLogo: require('./assets/prideraiser-logo.png'),
  PrideraiserIcon: require('./assets/prideraiser-icon.png'),

  // Add optional images
  GoFundMe: require('./assets/gofundme.png'),
  Postcast423: require('./assets/logo-podcast-423.png'),
  Postcast109: require('./assets/logo-podcast-109.png')
}


/*
  Common Image Credits
  
  It's likely that photos will come from a select few SG or club 
  photographers. We make it easy to credit those people for letting us use
  their work.

  This structure contains an array of strings used for this feature. The 
  structure is required, but does not need to be populated. Here is what
  it looks like empty.
  export const CommonImageCredits = []

  Feel free to add or remove lines as necessary
*/
export const CommonImageCredits = [
  "Ray Soldano | https://www.facebook.com/RaySoldanoPhotography/",
  "Galen Riley | https://twitter.com/thatgalen",
  "Jeff Underwood | https://www.facebook.com/jeff.underwood.359",
  "Kayja Swanson | https://www.facebook.com/kajsaphotog/",
  "Madonna Fajardo Kemp | https://www.facebook.com/madonna.kemp",
  "Matt Reiter | https://www.facebook.com/mreiterphoto/",
  "Phil Thach | https://www.facebook.com/philthachphoto",
  "Shannon Millsaps | https://www.facebook.com/smillsapsphoto/",
  "Chattanooga Football Club"
]


/*
    App Skin
*/

/*
  Palette

  This structure contains a set of key:value pairs for colors used across
  the app. It feeds into the DefaultColors/Skin structures below, and is 
  rarely referenced directly.

  Feel free to add or remove lines as necessary to suit your needs.
*/
export const Palette = {
  Navy: '#002D56',
  Sky: '#A3D8F7',
  White: '#FFFFFF',
  Black: '#000000',

  // Leave these three alone unless you know you want to change them/don't need them
  Prideraiser: '#a55eea',
  YellowCard: '#ffcc00',
  RedCard: '#ff0000'
};


/*
  DefaultColors

  This structure contains a set of key:value pairs for colors used across
  the app. It feeds into the Skin structure below, and is occasionally 
  referenced directly.
  (We'll eventually clean up most direct DefaultColors references.)

  You can use color data here, or reference the Palette structure, above.

  Feel free to add or remove lines as necessary to suit your needs.
*/
export const DefaultColors = {
  Background: Palette.White,
  ButtonBackground: Palette.Navy,
  ButtonText: Palette.White,
  HeaderBackground: Palette.Navy,
  HeaderText: Palette.White,
  BlackText: "#222222",
  ColorText: Palette.Navy,
  Primary: Palette.Navy,
  Secondary: Palette.Sky
}


/*
  Fonts

  This structure contains a set of key:value pairs for fonts used across
  the app. You can use your own brand fonts in Hooligan Hymnal by 
  including the files in ./assets/ and creating the appropriate font map.
  The value here is an object with properties .family and .file

  .family is TODO

  Default fonts are included in ./assets/ and the proper config values are...
export const Fonts = {
  Light: { family: 'open-sans-light', file: require('./assets/OpenSans-Light.ttf') },
  Regular: { family: 'open-sans', file: require('./assets/OpenSans-Regular.ttf') },
  Medium: { family: 'open-sans-semibold', file: require('./assets/OpenSans-SemiBold.ttf') },
  Bold: { family: 'open-sans-bold', file: require('./assets/OpenSans-Bold.ttf') },
  Italic: { family: 'open-sans-italic', file: require('./assets/OpenSans-Italic.ttf') },
}

  Font_Light is currently unused in the app, but is included for coverage
*/
export const Fonts = {
  Light: { family: 'roboto-light', file: require('./assets/Roboto-Light.ttf') },
  Regular: { family: 'roboto', file: require('./assets/Roboto-Regular.ttf') },
  Medium: { family: 'roboto-medium', file: require('./assets/Roboto-Medium.ttf') },
  Bold: { family: 'roboto-bold', file: require('./assets/Roboto-Bold.ttf') },
  Italic: { family: 'roboto-italic', file: require('./assets/Roboto-Italic.ttf') },
}


/*
  Skin

  This structure contains a set of key:value pairs which alter the 
  appearance of the app. It's always in flux.

  There are other complex structures in addition to the Skin.
*/
export const Skin = {
  Font_Light: Fonts.Light.family,
  Font_Regular: Fonts.Regular.family,
  Font_Medium: Fonts.Medium.family,
  Font_Bold: Fonts.Bold.family,
  Font_Italic: Fonts.Italic.family,
  Font_ParsedText: Fonts.Regular.family,
  Channel_Background: DefaultColors.Secondary,
  Channel_DescriptionLabel: DefaultColors.Primary,
  Channel_LoadMoreActivityIndicator_Android: DefaultColors.Primary,
  Channel_LoadMoreActivityIndicator_iOS: DefaultColors.Primary,
  Channel_NameLabel: DefaultColors.Primary,
  Channel_Refresh_Android: DefaultColors.Secondary,
  Channel_RefreshBackground_Android: DefaultColors.Primary,
  Home_BackgroundColor: DefaultColors.Primary,
  Home_BigButtonsBackground: DefaultColors.ButtonBackground,
  Home_BigButtonsLabel: DefaultColors.ButtonText,
  Home_FindTheMenuLabel: DefaultColors.Primary,
  Home_HeroImage: Images.Home_HeroImage,
  Home_HeroImage_VersionColor: DefaultColors.HeaderText,
  Home_LoadMoreActivityIndicator_Android: DefaultColors.Secondary,
  Home_LoadMoreActivityIndicator_iOS: Palette.White,
  Home_NavbarLogo: Images.Home_NavbarLogo,
  Home_PostMarginVertical: 10,
  Home_Refresh_Android: DefaultColors.Primary,
  Home_RefreshBackground_Android: DefaultColors.Secondary,
  Home_SocialButtons: DefaultColors.Primary,
  Home_HeroVideo: Images.Home_HeroVideo,
  Home_HeroVideoOverlay: Images.Home_HeroVideoOverlay,
  HomeVideoPanel_TintColor: DefaultColors.HeaderBackground,
  HomeVideoPanel_TintOpacity: 0.75,
  HomeVideoPanel_VersionLabel: DefaultColors.HeaderText,
  Home_Website: DefaultColors.BlackText,
  Icon_Roster: "account-group",
  Icon_Songbook: "book-open-variant",
  ModalLoader_ActivityIndicator: DefaultColors.Primary,
  ModalLoader_Background: DefaultColors.Secondary,
  ModalLoader_Container: "#00000040",
  NavigationDrawer_BackgroundColor: "#333333",
  NavigationDrawer_HeroBackground: Images.NavigationDrawer_HeroBackground,
  NavigationDrawer_HeroOverlay: Images.NavigationDrawer_HeroOverlay,
  NavigationDrawer_HeroOverlayTintColor: DefaultColors.HeaderBackground,
  NavigationDrawer_HeroOverlayTintOpacity: 0.5,
  NavigationDrawer_LabelActiveBackgroundColor: DefaultColors.Primary,
  NavigationDrawer_LabelActiveTintColor: Palette.White,
  NavigationDrawer_LabelActiveBackgroundColor: 'transparent',
  NavigationDrawer_LabelInactiveTintColor: Palette.White,
  NavigationDrawer_FontFamily: Fonts.Bold.family,
  NotificationEngagementsModal_Container: "#00000040",
  Songbook_Background: DefaultColors.Secondary,
  Songbook_Cover: Images.Songbook_Cover,
  Songbook_ToCButtonBackground: DefaultColors.ButtonBackground,
  SingleSong_Background: DefaultColors.Primary,
  Player_Background: DefaultColors.Secondary,
  Player_DefaultImage: Images.ClubLogo,
  Player_TopContainerBackground: DefaultColors.HeaderBackground,
  Post_DefaultChannelThumbnail: Images.LogoAvatar,
  Post_ChannelLabel: DefaultColors.ColorText,
  Post_ContainerMarginHorizontal: 0,
  Post_FontSize: 17,
  Post_HeaderContainerPaddingTop: 12,
  Post_HeaderContainerPaddingHorizontal: 16,
  Post_LineHeight: 22,
  Post_LinkColor: "blue",
  Post_TextColor: DefaultColors.BlackText,
  Post_TextNumberOfLines: 10,
  Post_TextPaddingTop: 6,
  Post_TextPaddingBottom: 12,
  Post_TextPaddingHorizontal: 16,
  Post_TextShowHide: false,
  Post_TimestampLabel: DefaultColors.ColorText,
  PostAttachmentComposePrideraiserMatch_ActivityIndicator: DefaultColors.Primary,
  PrideraiserCampaignSummary_VersionColor: DefaultColors.HeaderText,
  Roster_DefaultThumbnail: Images.ClubLogo,
  Roster_TabBackground: DefaultColors.ButtonBackground,
  Roster_ActiveTabIndicator: DefaultColors.ButtonText,
  Roster_ActiveTabLabel: DefaultColors.ButtonText,
  Roster_InactiveTabLabel: DefaultColors.Secondary,
  Roster_FriendsTabIcon: 'heart',
  Roster_FoesTabIcon: 'thumb-down',
  SongView_TitleColor: DefaultColors.BlackText,
  SongView_ReferenceColor: DefaultColors.Primary,
  SongView_InstructionsColor: '#AAAAAA',
  SongView_LyricsColor: DefaultColors.BlackText
};


/*
  NavigationDrawerItems

  This structure contains an array of objects used for the main navigation
  drawer menu. Each object has a .drawerLabel, .drawerIcon, and EITHER a
  .routeName or .url property.

  Valid routeName values are: Home, Songbook, Roster, About, Admin,
    YellowCard, RedCard, OldSongbook
  These will be added as major features are added to the app.

  .url can be used to open external links from the drawer

  We currently use the MaterialCommunityIcons set, searchable at:
  https://icons.expo.fyi/

  Feel free to add or remove lines as necessary.
*/
export const NavigationDrawerItems = [
  { drawerLabel: i18n.t('navigation.home'), drawerIcon: 'newspaper', routeName: 'Home'},
  { drawerLabel: i18n.t('navigation.songbook'), drawerIcon: Skin.Icon_Songbook, routeName: 'Songbook'},
  { drawerLabel: i18n.t('navigation.roster'), drawerIcon: Skin.Icon_Roster, routeName: 'Roster'},
  { drawerLabel: i18n.t('navigation.links.events'), drawerIcon: 'calendar', url: Urls.Events },
  { drawerLabel: i18n.t('navigation.links.standings'), drawerIcon: 'menu-swap', url: Urls.Standings },
  { drawerLabel: i18n.t('navigation.links.shop'), drawerIcon: 'shopping', url: Urls.Shop },
  { drawerLabel: i18n.t('navigation.links.volunteer'), drawerIcon: 'human-greeting', url: Urls.Volunteer },
  { drawerLabel: i18n.t('navigation.links.instrumentation'), drawerIcon: 'music-clef-treble', url: Urls.Instrumentation },
]


/*
  Banners

  This structure contains an array of objects used for "Headline"
  banners pinned to the top of the Home screen.

  Banners live in the config file, not the server (yet). So, changes to 
  this structrure need to be rolled out with application updates.

  The structure is required, but does not need to be populated. Here is
  what it looks like empty.
  export const Banners = []

  Feel free to add or remove lines as necessary.
*/
export const Banners = [
]
// { backgroundColor: Palette.Prideraiser, image: Images.PrideraiserIcon, url: Urls.Prideraiser, text: "Pledge to Chattanooga Prideraiser", textColor: Palette.White },
// { backgroundColor: Palette.Sky, image: Images.GoFundMe, tintColor: Skin.Home_SocialButtons, url: Urls.GoFundMe, text: "Youth Soccer Investment Crowdfunding", textColor: Palette.Black }


/*
  SocialButtons

  This structure contains an array of objects used for social media and
  web links on the Home screen.

  The structure is required, but does not need to be populated. Here is
  what it looks like empty.
  export const SocialButtons = []
*/
// icon: Iconicons name
export const SocialButtons = [
  {
    header: i18n.t('settings.socialEN'),
    headerColor: DefaultColors.ColorText,
    items: [
      { icon: 'twitter', url: Urls.Twitter },
      { icon: 'facebook', url: Urls.Facebook },
      { icon: 'instagram', url: Urls.Instagram },
      { icon: 'shopping', url: Urls.Shop },
      { image: Images.PrideraiserIcon, url: Urls.Prideraiser, tintToSkin: false },
    ]
  },
  {
    header: i18n.t('settings.socialES'),
    headerColor: DefaultColors.ColorText,
    items: [
      { icon: 'twitter', url: Urls.EsTwitter },
      { icon: 'instagram', url: Urls.EsInstagram },
      { icon: 'link', url: Urls.EsWebsite }
    ]
  },
  {
    header: i18n.t('settings.other'),
    headerColor: DefaultColors.ColorText,
    items: [
      { image: Images.Postcast423, url: Urls.Postcast423, tintToSkin: false },
      { image: Images.Postcast109, url: Urls.Postcast109, tintToSkin: false },
      { icon: 'reddit', url: Urls.RedditClub },
    ]
  }
]
// Other/Seasonal
// { icon: 'link', url: Urls.Website },
// { image: Images.PrideraiserIcon, url: Urls.Prideraiser },
// { image: Images.GoFundMe, url: Urls.GoFundMe, tintToSkin: true }


/*
  App Feature Flags
*/
export const Settings = {
  // Channels_Enabled: true, false
  //      Some SGs will only ever have one channel
  //      and tapping into a whole hunk of UI will be jarring and confusing to users
  ChannelUI_Enabled: false,

  // Home_HeroContent: "video", "image", "prideraiser"
  //      Hero content on the home screen
  Home_HeroContent: "video",

  // Home_PostsPerPage: number
  //      Load this many news feed items, then load this many more if the user scrolls to the bottom
  Home_PostsPerPage: 5,

  // Player_ShowSongs: true, false
  //      Some SGs write songs for each player
  //      Toggle a related UI element in the Roster/Player screen
  Player_ShowSongs: true,

  // PostAttach_ShowGKNickname: true, false
  //      This is a longrunning inside joke in Chattanooga
  PostAttach_ShowGKNickname: true,

  // PostAttach_ShowJuanstagram: true, false
  //      This is a longrunning inside joke in Chattanooga
  PostAttach_ShowJuanstagram: true,

  PostAttachmentComposePrideraiserMatch_AnalyticsSourcePrefix: appParams.expo.slug,
  PostAttachmentComposePrideraiserMatch_AnalyticsSourceDateFormat: "YYYY-MM-DD",
  PostAttachmentComposePrideraiserMatch_AnalyticsSourceSuffix: "",

  // PostCreate_UploadImageEnabled: true, false
  //      Some SGs may not want to pay for image hosting, turn the feature off entirely if so
  PostCreate_UploadImageEnabled: true,

  // PostCreate_UploadImageResizeQuality and PostCreate_UploadImageResizeDimensions
  //      These two values determine sizing and JPG compression of images before they are uploaded
  //      This is done client side to save data (and time in a stadium environment)
  //      These values have NOT been optimized yet, so fiddle with them and report your thoughts back to the core team
  PostCreate_UploadImageResizeQuality: 1,
  PostCreate_UploadImageResizeDimensions: { larger: 1216, smaller: 912 },

  Prideraiser_CampaignId: Urls.PrideraiserCampaignId,

  // Prideraiser_CampaignCoverParams: string
  //      default: "?w=768&h=200&wm=pr&wmp=br"
  //      Check how this renders on your deployment with your Prideraiser campaign cover photo
  //      You may want to adjust the height param and/or design the cover photo with Hooligan Hymnal in mind
  //      wm=pr&wmp=br add the Prideraiser Logo watermark onto the image. We recommend leaving this alone
  PrideraiserCampaignSummary_CampaignCoverParams: "?w=768&h=300", //432&wm=pr&wmp=bl",

  PrideraiserCampaignSummary_AnalyticsSource: appParams.expo.slug + "-home",

  // RefereeCards_Show: true, false
  //      Show yellow/red card icons in the nav drawer
  RefereeCards_Show: true,

  // Roster_FoesEnabled: true, false
  //      enables tabs in the roster screen to display opponent rosters
  Roster_FoesEnabled: true,

  // Roster_SortPlayersBy: "default", "number", "name"
  //      later- "position" with priority
  //      (hopefully this gets deprecated and replaced with something in the UI later)
  Roster_SortPlayersBy: "number",

  // RosterFoes_DefaultCompetition: string
  //      Matches .competition field of objects from the database foes collection
  //      This field is case sensitive and must match exactly
  RosterFoes_DefaultCompetition: "2020 NISA Spring Showcase",

  // TwitterList_AppendHandles: string
  //      Extra Twitter handles concatenated after the players on the TwitterList screen
  //      Each account should be seperated by a space
  //      In Chattanooga, we append the club and our SG accounts. You can choose to pass.
  TwitterList_AppendHandles: "@ChattanoogaFC @chattahooligan @LosCFCHooligans"
}
