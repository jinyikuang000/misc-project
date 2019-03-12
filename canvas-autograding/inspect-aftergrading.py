#!/usr/bin/env python
# -*- coding: utf-8 -*-pack
# @Date    : 2018-09-30 15:56:57
# @Author  : Jinyi Kuang (jkuang000@gmail.com)
# @Link    : https://github.com/jinyikuang000

# INTRO------------------------------------------------
#
# This .py file automate the canvas assignment grading
# with seleium and chromedriver.
# It requires phone to enter two step verification code.
# The script can be modified to grade different hw.
#
#
#-----------------------------------------------------


# LOAD MODULES-----------------------------------------------------

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.by import By
from selenium.webdriver.support import ui
from selenium.webdriver.support.ui import Select
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import NoSuchElementException
from selenium.common.exceptions import TimeoutException


import os
import time
import unittest  # python package to write test
import re




# SET UP DRIVER-----------------------------------------------------

# paste geckodrive in the path /usr/local/bin
driver = webdriver.Chrome(executable_path='/usr/local/bin/chromedriver')

# set window size
driver.set_window_size(1024, 768)

# change window location to the left side of  the screen
driver.set_window_position(100,0)

# maximize window
# driver.maximize_window()


# INITIALTION ------------------------------------------------
#
# element_has_value(object) used in checking if gradebox is empty
#
#-----------------------------------------------------
# custom wait condition - def function
class element_has_value(object):
    """
        An expectation for checking that an element has a value.
        the object have the following attributes
        locator - used to find the element
        returns the element if it has non-NULL value
        """
            def __init__(self,locator):
                self.locator = locator
                    
                    
                    def __call__(self, driver):
element = driver.find_element(*self.locator)   # Finding the referenced element
if element.get_attribute("value")!="--":
    return element
    else:
        return False

# LOG IN-----------------------------------------------------

driver.get("https://canvas.upenn.edu/")

# Select the id box
username_box = driver.find_element_by_name('login')

# Send id information
username_box.send_keys('jkuang')

# Find password box
password_box = driver.find_element_by_name('password')

# Send password
password = input("Please enter your password:")
password_box.send_keys(password)

# find  lgin button
login_button = driver.find_element_by_name('submit1')

# Click login
login_button.click()

trust_checkbox = driver.find_element_by_name('trustUA')
trust_checkbox.click()

# name the canvas window as main_window
main_window = driver.current_window_handle

#-----------------------------------------------------
# Open a new window

# This does not change focus to the new window for the driver.
driver.execute_script("window.open('');")

# Switch to the new window
driver.switch_to.window(driver.window_handles[1])

# enter link to 2 step verification
driver.get("https://twostep.apps.upenn.edu/twoFactor/twoFactorPublicUi/app/UiMainPublic.index")

# wait for 2 seconds
time.sleep(2)

# find the nested hidden element of sendtext button and click
sendtext_button = driver.find_element_by_xpath("//form[input/@name='OWASP_CSRFTOKEN']")
sendtext_button.click()

# Close current tab
time.sleep(1)
driver.close()

# Put focus on current window which will be the window opener
driver.switch_to_window(main_window)

#-----------------------------------------------------
# send code to phone
twostep = driver.find_element_by_id('penntoken')
twostep.click()

# enter the code mannually
# wait for at most 30 seconds untill text is being entered
WebDriverWait(driver, 30).until(
                                EC.presence_of_element_located((By.CLASS_NAME, "ic-DashboardCard__link"))
                                )

#-----------------------------------------------------
driver.switch_to_window(main_window)
# find PPE 313
PPE313 = driver.find_element_by_class_name('ic-DashboardCard__link')
PPE313.click()

#-----------------------------------------------------
# CHOOSE ASSIGNMENT TO GRADE
#-----------------------------------------------------
# Wait until the page loaded (up to 10 seconds)
WebDriverWait(driver, 10).until(
                                EC.presence_of_element_located((By.ID, "flash_screenreader_holder"))
                                )

assignment = driver.find_element_by_link_text('Assignment #1')
assignment.click()

#-----------------------------------------------------
driver.switch_to.window(main_window)
speedgrader = driver.find_element_by_class_name('icon-speed-grader')
speedgrader.click()

#-----------------------------------------------------
# FIND SPECIFIC STUDENT TO START
#-----------------------------------------------------
driver.switch_to.window(driver.window_handles[1])

WebDriverWait(driver, 15).until(
                                EC.presence_of_element_located((By.ID, "speedgrader_iframe"))
                                )
# Find specific student
test_student = driver.find_element_by_xpath("//div/select/option[@value='5529130']")
test_student.click()

#-----------------------------------------------------
# PREV STUDENT
#-----------------------------------------------------

driver.switch_to.window(driver.window_handles[1])

# find previous student arrow
prev_arrow = driver.find_element_by_xpath("//button[@id='prev-student-button']/i[contains(@class,'icon-arrow-left prev')]")

# click with JS
driver.execute_script("$(arguments[0]).click();", prev_arrow)


