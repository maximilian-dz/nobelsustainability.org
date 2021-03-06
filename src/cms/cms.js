import CMS from 'netlify-cms-app'
import 'leaflet/dist/leaflet.css'

import AboutPagePreview from './preview-pages/AboutPagePreview'
import ContactPagePreview from './preview-pages/ContactPagePreview'
import HomePagePreview from './preview-pages/HomePagePreview'
import HistoryPagePreview from './preview-pages/HistoryPagePreview'
import AwardsPagePreview from './preview-pages/AwardsPagePreview'
import ArticlePreview from './preview-pages/ArticlePreview'

CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('contact', ContactPagePreview)
CMS.registerPreviewTemplate('home', HomePagePreview)
CMS.registerPreviewTemplate('history', HistoryPagePreview)
CMS.registerPreviewTemplate('awards', AwardsPagePreview)
CMS.registerPreviewTemplate('news', ArticlePreview)
