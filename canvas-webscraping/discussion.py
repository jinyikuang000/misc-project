#!/usr/bin/python3.7.0
# -*- coding: utf-8 -*-
__author__ = "Jinyi Kuang"
__email__ = "jkuang000@sas.upenn.edu"
__version__ = "1.0.1"
__date__ = "2019-02-19"

"""
div id = 'discussion_subentries'
ul class = "discussion-entries"
li class = "entry" or li class = "entry no-replies"
div class = "entry-content"
    h2 class = 'discussion-title'
a data-bypass title = 'Author's name'

    div data-bind = "message"
"""
#%%
import time
import requests
import urllib2
from bs4 import BeautifulSoup

import csv
from datetime import datetime

# specify the url
quote_page ='https://canvas.upenn.edu/courses/1438746/discussion_topics/5167792'
jan29 = 'https://canvas.upenn.edu/courses/1438746/discussion_topics/5167792'

# query the website 
page = urllib2.urlopen(quote_page)

# parse the html 
soup = BeautifulSoup(page, ‘html.parser’)

# get student id
student_id_box = soup.find('a', attrs = {'class':'author student_context_card_trigger'})
student_id = student_id.text

# get student name
student_name_box = soup.find('a', attrs = 'data-bypass title' = 'Author's name)
student_name = student_name_box.text.strip()

# save the data in tuple
 data.append((student_id, student_name))

# open a csv file with append, so old data will not be erased
with open(‘index.csv’, ‘a’) as csv_file:
 writer = csv.writer(csv_file)
 writer.writerow([student_id, student_name, datetime.now()])
