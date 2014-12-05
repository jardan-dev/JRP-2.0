#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = u'Edan Weis'
SITENAME = u'Jardan Room Planner 2.0'
SITEURL = 'jardan-dev.github.io/JRP-2.0'

PATH = 'content'

TIMEZONE = 'Australia/Melbourne'

DEFAULT_LANG = u'en'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None

# Blogroll
LINKS = (('Pelican', 'http://getpelican.com/'),
         ('Python.org', 'http://python.org/'),
         ('Jinja2', 'http://jinja.pocoo.org/'),
         ('You can modify those links in your config file', '#'),)

# Social widget
SOCIAL = (('You can add links in your config file', '#'),
          ('Another social link', '#'),)

DEFAULT_PAGINATION = 10

THEME = "pelican-bootstrap3"

CUSTOM_CSS = 'theme/custom.css'

FAVICON = 'images/favicon.png'

DISPLAY_ARTICLE_INFO_ON_INDEX = True
 
SOCIAL = (('github', 'http://github.com/edanweis'),)

HIDE_SIDEBAR = True

CC_LICENSE = 'CC-BY-SA'
CC_ATTR_MARKUP = True

STATIC_PATHS = ['extra/robots.txt']
EXTRA_PATH_METADATA = {
    # 'extra/custom.css': {'path': 'static/custom.css'},
    'extra/robots.txt': {'path': 'robots.txt'}
    # '/CNAME': {'path': 'CNAME'}
}

# Uncomment following line if you want document-relative URLs when developing
RELATIVE_URLS = True
